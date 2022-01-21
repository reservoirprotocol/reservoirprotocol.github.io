The Reservoir SDK enables the creation and filling of orders that are part of the Reservoir Order Book. It abstracts the complexity of handling different exchange contracts and order types, giving developers a set of simple methods to interact with. 

## Installation

```
yarn add @reservoir0x/sdk
```

## Common Utils

A set of helpers and shortcuts that are relevant to all exchange contracts.

**Methods**

`addresses` - quickly access commonly used addresses
`helpers.erc20/721/1155` - perform the most common interactions on tokens
`helpers.WETH` - interact with the WETH contract on the current chain

## Wyvern Exchange

The Wyvern Exchange is a decentralized exchange on Ethereum, used mostly by Open Sea. It is the first exchange contract to be supported by Reservoir. 

**Core Concepts**

`User Proxies` - Every user must deploy a proxy contract (one-time) to trade
`Approvals` - Users must approve their Proxy to move assets (once per NFT contract)
`Token Transfer Proxy` - A shared Proxy used by all users for making WETH bids











