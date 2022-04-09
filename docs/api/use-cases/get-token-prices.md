---
sidebar_label: Get Token Prices
sidebar_position: 3
---

# Get Token Prices

A key feature of the Reservoir API is that it gives access to granular pricing data for every NFT. It's also designed to make it incredibly easy to access this data. For example:

- Get tokens in a collection, sorted by price ([example](https://api.reservoir.tools/tokens/v3?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63))
- Get the price of every on-sale token, in one API ([example](https://api.reservoir.tools/tokens/floor/v1?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63))
- Get the last 100 sales for a collection ([example](https://api.reservoir.tools/sales/v3?collection=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&limit=100))
- Get the latest 100 orders from all marketplaces ([example](https://api.reservoir.tools/orders/all/v1?contract=0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63&limit=100))

If you find yourself thinking "I wish I could...." just let us know, and we can probably add it for you

## Tokens vs Orders

Every token can have multiple orders. This might be because a user has re-listed at different prices, there are multiple owners (ERC-1155) or there are multiple bids (which can be placed by anyone). To simplify this, we return the "best" price for every token. In 99% of cases, this is all you will need, although you can also request the individual orders.

Each token has two relevant prices:

`floorAskPrice` = the cheapest listing (sell order) on the token  
`topBuyValue` = the highest bid (buy order) on the token