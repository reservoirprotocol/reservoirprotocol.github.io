# Create Sell (List for Sale)

In order to list something for sale, you need to create a sell order.

## Steps

### 1. Check that wallet owns the token

```js
const owner = await collectionContract.connect(signer).ownerOf(tokenId)

const signerAddress = await signer.getAddress()

if (owner.toLowerCase() !== signerAddress.toLowerCase()) {
  console.error('Signer is not the token owner')
  return null
}
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L23)

### 2. Check that UserProxy is deployed

When interacting with the Wyvern Exchange, every user needs to have a proxy contract deployed. This is a one time action. Any user who has sold tokens on Open Sea will have already done this.

```js
const userProxy = await proxyRegistryContract
  .connect(signer)
  .proxies(signerAddress)
```

If not, Deploy & Register UserProxy (on chain, one-time)

```js
// If the user has no associated proxy, then register one
let { wait } = (await proxyRegistryContract
.connect(signer)
.registerProxy()) as ContractTransaction

// Wait for the transaction to get mined
await wait()

// Retrieve user proxy
const userProxy = await proxyRegistryContract
.connect(signer)
.proxies(signerAddress)

return userProxy
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L33)

### 3. Check that UserProxy is approved to transfer NFT

For every NFT contract that the user wants to sell, they need to approve their proxy contract to transfer on their behalf. This is only required once per NFT contract.

```js
const signerAddress = await signer.getAddress()
    // Check approval on the user proxy
    let isApproved = await collectionContract
      .connect(signer)
      .isApprovedForAll(signerAddress, userProxy)

    if (!isApproved) {
      const approvedAddress = await collectionContract
        .connect(signer)
        .getApproved(tokenId)
      isApproved = approvedAddress.toLowerCase() === signerAddress.toLowerCase()
    }

    if (isApproved) {
      // Set success
      return true
    } else {
      // Set the approval on the user proxy
      const { wait } = (await collectionContract
        .connect(signer)
        .setApprovalForAll(userProxy, true)) as ContractTransaction

      // Wait for the transaction to get mined
      await wait()

      return true
    }
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L70)

### 4. Use Reservoir API to build order

The API has a convenience method for building order objects. Just pass the relevant parameters, and it returns a response that is ready to pass into the SDK (you can also build manually with the SDK if you prefer).

```js
const query: Parameters<typeof listTokenForSell>['3'] = {
  contract,
  maker,
  side: 'sell',
  price: ethers.utils.parseEther(listingPrice).toString(),
  fee,
  feeRecipient: collection?.collection?.royalties?.recipient || maker,
  tokenId: token?.token?.tokenId,
  expirationTime: expirationValue,
}
```

```js
let url = new URL('/orders/build', apiBase)

setParams(url, query)

let res = await fetch(url.href)
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/components/ListModal.tsx#L163)

### 5. Sign order with SDK

```js
// Use SDK to create order object
const sellOrder = new WyvernV2.Order(chainId, order.params)

// Sign selling order
await sellOrder.sign(signer)
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/acceptOffer.ts#L273)

### 6. Submit to Order Book

```js
let url2 = new URL('/orders', apiBase)

await fetch(url2.href, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    orders: [
      {
        kind: 'wyvern-v2',
        data: sellOrder.params,
      },
    ],
  }),
})
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/makeOffer.ts#L152)

## Bonus: Cross-post to Open Sea

The SDK can also be used to sign orders that can be sent to Open Sea. This is useful in scenarios where the user wants to simultaneously list an NFT for sale within the Reservoir network and on Open Sea. This requires a second signature, because the order parameters are slightly different.

### 1. Build a new order for Open Sea

The order must a contain a fee to Open Sea that is 2.5% + royalties, or else it will be rejected.

```js
// Modify the order, to make it compatible with Open Sea
const buyOrder = new WyvernV2.Order(chainId, {
  ...params,
  takerRelayerFee: params.takerRelayerFee + 250,
  // Fee + royalty goes to Open Sea
  feeRecipient: '0x5b3256965e7c3cf26e11fcaf296dfc8807c01073',
  // Set listing time 2 minutes in the past to make sure on-chain validation passes
  listingTime: Math.floor(Date.now() / 1000) - 120,
  // Adjust date format for OpenSea
  expirationTime: +params.expirationTime.toString().slice(0, -3),
  salt: BigNumber.from(randomBytes(32)).toString(),
})

// Sign the order
await buyOrder.sign(signer)
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/makeOffer.ts#L195)

### 2. Submit to Open Sea API

```js
// Create request object in the form that open sea expects
const order = {
  exchange: buyOrder.params.exchange,
  maker: buyOrder.params.maker,
  taker: buyOrder.params.taker,
  makerRelayerFee: buyOrder.params.makerRelayerFee,
  takerRelayerFee: buyOrder.params.takerRelayerFee,
  makerProtocolFee: '0',
  takerProtocolFee: '0',
  makerReferrerFee: '0',
  feeMethod: 1,
  feeRecipient: buyOrder.params.feeRecipient,
  side: buyOrder.params.side,
  saleKind: buyOrder.params.saleKind,
  target: buyOrder.params.target,
  howToCall: buyOrder.params.howToCall,
  calldata: buyOrder.params.calldata,
  replacementPattern: buyOrder.params.replacementPattern,
  staticTarget: buyOrder.params.staticTarget,
  staticExtradata: buyOrder.params.staticExtradata,
  paymentToken: buyOrder.params.paymentToken,
  quantity: '1',
  basePrice: buyOrder.params.basePrice,
  extra: buyOrder.params.extra,
  listingTime: buyOrder.params.listingTime,
  expirationTime: buyOrder.params.expirationTime,
  salt: buyOrder.params.salt,
  metadata: {
    asset: {
      id: tokenId,
      address: contract,
    },
    schema: 'ERC721',
  },
  v: buyOrder.params.v,
  r: buyOrder.params.r,
  s: buyOrder.params.s,
  hash: buyOrder.hash(),
}

// Post buy order to OpenSea (API Key required)
const res = await fetch(
  `https://${
    chainId === 4 ? 'testnets-api.' : ''
  }opensea.io/wyvern/v1/orders/post`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(order),
  }
)
```

[View on Github](https://github.com/reservoirprotocol/sample-marketplace/blob/56f57ce58c747e302d2076bb554527442452ee44/lib/makeOffer.ts#L212)
