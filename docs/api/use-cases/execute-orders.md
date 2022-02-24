---
sidebar_label: Buy and Sell
sidebar_position: 10
---

# Create & Fill Orders (Buy & Sell)

Reservoir gives you access to a fully functional aggregated order book that strives to be a global pool of _all_ NFT liquidity. You can both create orders (list for sale, make an offer) or fill orders (buy token, accept offer).

Importantly, because its a shared order book, tools can specialize on different parts of the market. For example, a market maker could generate bids and feed them directly into the order book, while a wallet could place a sell button next to every NFT in a user's wallet, giving them access to those bids. As more integrations get built, the network effects of the shared order book grow stronger.

## Steps

When executing orders, there are often multiple steps, like approving an exchange to access your NFTs, or wrapping WETH for a bid. These steps differ for every different type of liquidity that Reservoir supports. To make this simple, you can use the `execute` endpoints, which return the exact steps that you need to follow, including descriptions that you can display to users.

The flow looks like this:

1. Call the `execute` API with the action you want to take (create or fill)
2. Iterate through the steps, taking the necessary action

There are two types of steps:

`transaction` > An on-chain transaction that needs to be submitted  
`signature` > A message that needs to be signed

The API returns the exact data that you need to sign/submit, so it can be fed directly into an Ethereum library like Ethers.js.

Any steps that have already been completely (e.g. because the user previously did an approval) are marked as `complete` and can be skipped. Sometimes, the steps are dependent on each other. In these cases, the API will return an empty data field. Once the first step has been completed, request the execute API again in order to get the missing data and continue.

We will soon be releasing a hooks library to handle this all automatically, but in the meantime, we recommend looking at how each action is handled in the [sample marketplace](https://github.com/reservoirprotocol/sample-marketplace/blob/46c25d3b0f78653f8efe7967d91cb79847f44043/components/BuyNow.tsx), and copying from there. Below is an example:

```js
// Build parameters
const query = {
    contract,
    tokenId,
    side: 'sell',
    taker: await signer.getAddress(),
}
const url = new URL('/execute/fill', apiBase)
setParams(url, query)

// Fetch steps
const res = await fetch(url.href)
const json = (await res.json()) as Execute
if (!index) index = 0
if (json.error) throw new Error(json.error)
if (!json.steps) throw new ReferenceError('There are no steps.')

// Loop through and execute steps
if (json.steps.length - 1 >= index) {
    const { status, kind, data } = json.steps[index]
    if (status === 'incomplete' && kind === 'transaction') {
      if (data) {
        const tx = await signer.sendTransaction(data)
        await tx.wait()
      } else {
        const polledData = (await pollApi(json, url)) as Execute
        const tx = await signer.sendTransaction(polledData.steps?.[index].data)
        await tx.wait()
      }
    }
    if (index !== json.steps.length - 1) {
      await checkCompleteness(url, signer, index + 1)
    }
  }
  return json.steps[json.steps.length - 1]?.data
```

## Actions

The API supports the following actions:

- [Buy](https://mainnet-api-v4.reservoir.tools/documentation#/execute/getExecuteBuy)
- [Sell](https://mainnet-api-v4.reservoir.tools/documentation#/execute/getExecuteSell)
- [Bid](https://mainnet-api-v4.reservoir.tools/documentation#/execute/getExecuteBid)
- [List](https://mainnet-api-v4.reservoir.tools/documentation#/execute/getExecuteList)

Note: in order to "buy" a token, you need to fill a corresponding sell order. This can be confusing and we plan to make it clearer in a future version of the API!
