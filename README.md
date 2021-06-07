# aavegotchi-node-lib 👻📦

** Currently in alpha stage and subject to breaking changes **

A Node.js package for type-safe definitions from the official Aavegotchi GraphQL endpoints and .

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

`diamond()` => ethers.Contract

`facets()` => { [facetName]: ethers.Contract }

### GraphQL

#### `aavegotchiSdk.graphql`

`url()`

`client()`

# External

<https://docs.aavegotchi.com>
<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
