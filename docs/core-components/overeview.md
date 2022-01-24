# Overview

The Reservoir protocol is a decentralized order book designed to be the best source of NFT Liquidity. It consists of 3 main pieces:

**1. Data Lake**
A low cost repository for storing "off-chain" orders on-chain. This ensures permissionless data availability of all liquidity, and global consensus over when it was provided.

**2. Order Book**
An aggregated and filtered view of all available liquidity. Normalizes different formats (e.g. single token order vs multi token pool) and sources (e.g. Open Sea vs Rarible) into a single universal standard that is easy to build on top of.

**3. Ledger [Coming Soon]**
A system for quantifying the liquidity that was provided over time, in order to enable trustless incentivization that is immune from abuse (e.g. wash trading).

In addition to these core pieces, there are layers

**Software**
- Indexer > A node that takes care of reading/writing from Data Lake, and reconstructing Order Book
- API > A simple interface for interacting with the Reservoir Aggregated Order Book
- SDK > Toolkit for abstracting the complexity of creating & filling liquidity

**Standards**
- Metadata > A flexible system for indexing NFT metadata, that supports community enhancements (rarity scores, new attributes, dependencies, etc)
- Tokens Sets > A spec for mapping subjective metadata (collections, traits, etc) to objective token data (contracts, token ids, etc), to enable orders on an arbitrary set of tokens
