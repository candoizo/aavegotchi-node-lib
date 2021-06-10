# aavegotchi-sdk 👻📦

** Currently in alpha stage and subject to breaking changes **

A Node.js package for type-safe definitions using the Aavegotchi subgraph and Polygon contracts.

Clone this repo and try the [`demo`](./demo/index.ts) with: `cd demo/ && yarn && yarn test`

# Usage

To install in a Node.js project: `yarn add @aavegotchi/sdk`.

### Typescript
```ts
import aavegotchiSdk from "@aavegotchi/sdk"
```
### Javascript
```js
const aavegotchiSdk = require("@aavegotchi/sdk");
```

# Documentation

### Contracts

#### `aavegotchiSdk.contracts`

`diamond()` => [ethers.Contract](https://docs.ethers.io/v5/api/contract/contract/)

`facets()` => { [facetName]: ethers.Contract }

### GraphQL

#### `aavegotchiSdk.graphql`

`url()` => [`https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic`](https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic)

`client()` => [graphql-request.GraphQLClient](https://www.npmjs.com/package/graphql-request#examples)

# External

<https://docs.aavegotchi.com>
<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
