# Aavegotchi-node-lib demo!

An example of our type safe TypeScript SDK for the Aavegotchi subgraph endpoint.

With `@aavegotchi/lib`, it's easy to add in any Javascript project.

## Testing

Use: `yarn && yarn test`. Also check [index.ts](./index.ts). All functions can be found in [the GraphQL operations file](../schema/operations.graphql), which is their fancy term for queries.

## Example

```
demo [dev] ⚡ yarn test
{
  erc1155Listings: [
    {
      id: '77823',
      priceInWei: '549000000000000000000',
      timeLastPurchased: '1617353001'
    }
  ]
}
```
