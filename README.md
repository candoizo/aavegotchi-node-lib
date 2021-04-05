# aavegotchi-node-lib👻📦

A Node.js package for type-safe definitions from the official Aavegotchi GraphQL endpoints.

Clone this repo and try the `demo/` with: `cd demo/ && yarn && yarn test`

Peek some example Javascript code in [demo/index.ts](./demo/index.ts). Find where the functions come from in [the GraphQL operations file](../schema/operations.graphql), which is their fancy term for queries.

# Usage

`@aavegotchi/lib` exposes type-safe bindings to the regular GraphQL API.

```js
import { defaultSdk } from "candoizo/aavegotchi-node-lib"
// atm defaultSdk is filled with Pixelcraft's queries from web3/graphQueries.tsx
const { lastTimePurchased, aavegotchiLeaderboard } = defaultSdk();

export async function example() {
  let res = await lastTimePurchased({
    itemID: 145
  });
  console.log(res);

  // commented out because it wouldnt compile in the first place
  // let res2 = await lastTimePurchased({
  //   itemID: "145" // string should have been a number
  // });
}

```

These functions are 1 = 1 sourced from `web3/graphQueries.tsx` in `bonding-curve`.

# Installation

note: replace instances of `@aavegotchi/lib` with `@candoizo/aavegotchi-node-lib` if not on aavegotchi namespace.

If public: `yarn add @aavegotchi/lib`
If private, see [Packaging](#packaging) section.

# Packaging

## Install from private package registry

Create a `.npmrc` in the repo. Contents like:

    @candoizo:registry=https://npm.pkg.github.com

Then install with

    yarn add @aavegotchi/lib


# External

<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
