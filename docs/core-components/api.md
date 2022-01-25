---
sidebar_label: API
sidebar_position: 5
---

# Reservoir API Overview

The Reservoir API is an all-in-one endpoint for building NFT applications. This includes everything from market exploration tools to full-featured marketplaces. It gives access to:

- Aggregated liquidity from popular NFT marketplaces
- Granular price data with flexible querying options
- Raw order objects, for executing buys and sells
- Detailed metadata that can be used to analyze data (e.g. trait floors)
- Advanced order types, like collection and trait-wide bids

Best of all, the API is powered by an open-source Indexer that runs entirely off open and permissionless data sources. This means there are no centralized gatekeepers to depend on. You can use a hosted version of the API to quickly get up and running, or run your own if you need more control.

## Hosted API

The core team runs a production-ready instance of the Reservoir API, which is free to access. It currently supports Ethereum Mainnet and Rinkeby. You can view the reference docs and start playing with the API here:

https://mainnet-api-v4.reservoir.tools/documentation  
https://rinkeby-api-v4.reservoir.tools/documentation

## Highlights

- Get tokens in a collection, sorted by price ([example](https://mainnet-api-v4.reservoir.tools/tokens?collection=blitmap))
- Get the price of every on-sale token, in one API ([example](https://mainnet-api-v4.reservoir.tools/tokens/floor?collection=blitmap))
