# aavegotchi-lib-node 👻📦

A Node.js package for type-safe definitions from the official Aavegotchi GraphQL endpoints!

Clone and try the `demo/` with: `cd demo/ && yarn && yarn test`

Peek some example Javascript code in [demo/index.ts](./demo/index.ts).

# Usage

`@aavegotchi/lib` exposes type-safe bindings to the regular GraphQL API.

```js
import { defaultSdk } from "candoizo/aavegotchi-node-lib"
const { lastTimePurchased, aavegotchiLeaderboard } = defaultSdk(); // Pixelcraft's queries

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

Functions were 1 = 1 sourced from `web3/graphQueries.tsx` in `bonding-curve`.

# Installation

**important:** While this package is hosted privately, in some cases (like new projects) it can be unusually difficult to install directly due to conflicts with the registry. We need to migrate to registry.npmjs.org for public consumption.

note: replace instances of `@aavegotchi/lib` with `@candoizo/aavegotchi-lib-node` until on main npm registry.

If public: `yarn add @aavegotchi/lib`
If private, see [Packaging](#packaging) section.

# Packaging

## Install from private package registry

Create a `.npmrc` in the repo. Contents like:

    //npm.pkg.github.com/:_authToken={{ personal access token with package read access }}

Then install with

    yarn add @aavegotchi/lib --registry https://npm.pkg.github.com/

## Publishing New Package

Run publishing workflow action (@TODO), or `yarn release` works.

# External

<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
