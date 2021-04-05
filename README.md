# aavegotchi-lib-node 👻📦

A general Node.js SDK with type-safe definitions from the official Aavegotchi GraphQL endpoints!

Clone and try the `demo/` with: `cd demo/ && yarn && yarn test`

Peek the Javascript code in [demo/index.ts](./demo/index.ts).

# Usage

`@aavegotchi/lib` exposes type-safe bindings to the regular GraphQL API.

```js
import { defaultSdk } from "candoizo/aavegotchi-node-lib"
const { lastTimePurchased, aavegotchiLeaderboard } = defaultSdk();

export async function example() {
  let res = await lastTimePurchased({
    itemID: 145
  });
  console.log(res);

  // catches error on compile
  // let res2 = await lastTimePurchased({
  //   itemID: "145" // string instead of num
  // });
}

```

Functions originally sourced from `web3/graphQueries.tsx`.

# Installation

note: replace instances of `@aavegotchi/lib` with `@candoizo/aavegotchi-lib-node` until on main npm registry.

If public: `yarn add @aavegotchi/lib`
If private, see [Packaging](#packaging) section.

# Packaging

## Install from private package registry

Create a `.npmrc` in the repo. Contents like:

    //npm.pkg.github.com/:_authToken={{ personal access token with package read access }}

Then install with

    yarn add @aavegotchi/lib --dev --registry https://npm.pkg.github.com/

## Publishing New Package

Run publishing workflow action.

# External

<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
