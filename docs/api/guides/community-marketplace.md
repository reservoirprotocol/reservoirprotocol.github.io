# Community Marketplace

One of the most powerful features of Reservoir is that it makes it incredibly easy for NFT creators and communities to run their own marketplaces. Reservoir differs from other solutions in a number of ways:

**Low-cost**  
Leverages off-chain signed messages (exact same as Open Sea), in order to offer the free listing experience that users expect

**Permissionless**  
Orders are stored on Arweave, an open and permissionless blockchain, rather than closed databases

**Aggregated**  
Listings from popular marketplaces are aggregated into the API, allowing you to build a single destination with all available liquidity

**Zero Fee**  
Reservoir takes no cut, and gives you full control over marketplace fees (none, to a DAO, etc)

**Open Source**  
All tooling is open source, with both hosted and self-hosted options

## Implementation Options

When building your marketplace, you have a few different options:

### Custom  
Build your own UI from scratch, or build marketplace functionality into an existing website. This gives the most flexibility, but is also the most work. The Reservoir API is designed to do most of the heavy lifting for you, but you still need to put all the pieces together. Below are some in-depth guides on the sorts of queries you will need for a marketplace:

 - [Get Tokens](../use-cases/get-token-prices)
 - [Explore Traits](../use-cases/explore-traits)
 - [Create & Fill Orders](../use-cases/execute-orders)

### Forked  
We have an [open-source UI](https://github.com/reservoirprotocol/sample-marketplace) that you can fork in order to get a fully functional marketplace off the shelf. You just need to apply your own design, and modify as you see fit. It’s built with NextJS and TailwaindCSS, and implements both standard marketplace functionality (browsing, listing, purchasing, etc) and advanced Reservoir features (collection and trait bidding). As we add new features, it should also be fairly easy to merge them into your marketplace, due to the shared codebase foundation.

### Hosted  
We are working on a fully hosted version of the marketplace that gives a Shopify-like experience. You customize the style, fees and domain, but we run it, including upgrading with new features as they are added. While the most convenient, it will also be limited in the customization that is possible. Reach out to us if you’re interested in trying this.

## API

Reservoir runs entirely off permissionless blockchains. NFT ownership and trades happen on Ethereum, while orders are stored on Arweave. You then run an Indexer on top, which makes sense of the raw data and exposes an optimized API for querying. 

Your marketplace frontend will need to point to an Indexer API node in order to function. The core team runs a free Hosted Indexer, which is production-ready and designed to scale for any use-case. You can also run your own Indexer, similar to running your own Ethereum node. 
