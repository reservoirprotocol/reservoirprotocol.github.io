# Architecture

When designing an order book, you typically have two choices: optimize for cost (store orders off-chain) or optimize for openness (store orders on-chain). On Ethereum, where 80% of NFT value is traded, off-chain order books have dominated (Open Sea, Rarible, etc, because it's simply too expensive to store orders on-chain. Ironically, the more secure a chain is, the more it pushes storage off-chain.

Reservoir introduces a 3rd option. Orders are stored on-chain, but on a different chain. Because orders are self-contained signed messages, they don't need the full might of Ethereum to secure them. Instead, Reservoir uses Arweave as a low-cost "Data Lake" for raw order storage. It's cheap enough that marketplaces can still offer the free listing experience that users expect, and secure enough to guarantee permissionless data availability.

Anyone can run the open-source Reservoir Indexer that combines raw order data from Arweave, with ownership data from Ethereum, to trustlessly reconstruct the state of the order book. Sprinkle in an advanced metadata indexing engine and you get the Reservoir API, a one-stop shop for building liquidity-powered NFT applications.

Normally Arweave's five minute block times would be too slow for a fast-moving order book, but here's the cool part: we don't actually need to wait for blocks to be confirmed. Because the orders are targeted at a different chain, the Indexer can ingest them as soon as they hit the mempool, making the Reservoir Order Book real-time, highly available and globally consistent.

![Reservoir Stack](/img/reservoir2nd.png)
