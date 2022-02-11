Reservoir gives you access to a fully functional aggregated order book that strives to be a global pool of _all_ NFT liquidity. You can both create orders (list for sale, make an offer) or fill orders (buy token, accept offer).

Importantly, because its a shared order book, tools can specialize on different parts of the market. For example, a market maker could generate bids and feed them directly into the order book, while a wallet could place a sell button next to every NFT in a user's wallet, giving them access to those bids. As more integrations get built, the network effects of the shared order book grow stronger.

When executing orders, there are often multiple steps, like approving an exchange to access your NFTs, or wrapping WETH for a bid. These steps differ for every different type of liquidity that Reservoir supports. To make this simple, you can use the `execute` endpoints, which return the exact steps that you need to follow, including descriptions that you can display to users. 

The flow looks like this:

1) Call the `execute` API with the action you want to take (create or fill)
2) Iterate through the steps, taking the necessary action

There are two types of steps:

`transaction` > An on-chain transaction that needs to be submitted
`signature` > A message that needs to be signed

The API returns the exact data that you need to sign/submit, so it can be fed directly into an Ethereum library like Ethers.js. Below is an example, adapted from the sample marketplace:

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

In order to abstract the complexity of all the different types