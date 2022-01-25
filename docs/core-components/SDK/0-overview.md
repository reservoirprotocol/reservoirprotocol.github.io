# Overview

The Reservoir SDK enables the creation and filling of orders that are part of the Reservoir Order Book. It abstracts the complexity of handling different exchange contracts and order types, giving developers a set of simple methods to interact with.

## Installation

```
yarn add @reservoir0x/sdk
```

## Modules

`common` - A set of helpers and shortcuts that are relevant to all exchange contracts  
`wyvern` - Methods for interacting with the Wyvern exchange (most notably used by Open Sea)

:::note
At this time, Wyvern Exchange is used for all orders. Support for more exchanges coming soon!
:::

## Classes

When interacting with the Wyvern Exchange, you most commonly interact with the following classes:

`wyvern.order` - Build an order object, in order sign it  
`wyvern.exchange` - Instantiate an instance of the exchange contract, to interact with it (fill orders, etc)

## Integration

We are in the process of refactoring the SDK, in order to make it more general purpose, and abstract common tasks like checking for approvals, waiting for transactions to confirm, etc. In the meantime, you need to use the low level methods. The following pages demonstrate how to do all of the most common actions.
