---
sidebar_label: Overview
sidebar_position: 1
---

# Reservoir Protocol Overview

The Reservoir protocol is a decentralized NFT order book designed to grow NFT Liquidity. It has many pieces, which all come together to form a comprehensive liquidity toolkit.

## Core Components

**[Data Lake](data-lake)**  
A low cost repository for storing "off-chain" orders on-chain. This ensures permissionless data availability of all liquidity, and global consensus over when it was provided.

**[Order Book](order-book)**  
An aggregated and filtered view of all available liquidity. Normalizes different formats (e.g. single token order vs multi token pool) and sources (e.g. Open Sea vs Rarible) into a single universal standard that is easy to build on top of.

**Ledger [Coming Soon]**  
A system for quantifying the liquidity that was provided over time, in order to enable trustless incentivization that is immune from abuse (e.g. wash trading).

## Software

**[Indexer](indexer)**  
A node that takes care of reading/writing from the [Data Lake](data-lake), and reconstructing Order Book  

**[API](api)**  
A simple interface for interacting with the Reservoir Aggregated Order Book  

**[SDK](SDK/overview)**  
Toolkit for abstracting the complexity of creating & filling liquidity  

## Standards

**[Metadata](metadata)**  
A flexible system for indexing NFT metadata, that supports community enhancements (rarity scores, new attributes, dependencies, etc)  

**[Tokens Sets](token-sets)**  
A spec for mapping subjective metadata (collections, traits, etc) to objective token data (contracts, token ids, etc), to enable orders on an arbitrary set of tokens
