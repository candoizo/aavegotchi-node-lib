# aavegotchi-node-lib 👻📦

A Node.js package for type-safe definitions from the official Aavegotchi GraphQL endpoints.

Clone this repo and test the [`demo`](./demo/) with: `cd demo/ && yarn && yarn test`

Peek some example Javascript code in [demo/index.ts](./demo/index.ts).

# Usage

`@aavegotchi/lib` exposes type-safe bindings to the regular GraphQL API.
### Typescript
```ts
import { defaultSdk } from "candoizo/aavegotchi-node-lib"
const { lastTimePurchased, aavegotchiLeaderboard } = defaultSdk();

async function example() {
  let res = await lastTimePurchased({
    itemID: 145
  });
  console.log(res);

  // commented out because it couldnt compile in the first place
  // let res2 = await lastTimePurchased({
  //   itemID: "145" // string should have been a number
  // });
}
```
### Javascript
```js
const aavegotchiNodeLib = require("@candoizo/aavegotchi-node-lib");
const { lastTimePurchased, aavegotchiLeaderboard } = aavegotchiNodeLib.defaultSdk();

const example = async () => {
  let res = await lastTimePurchased({
    itemID: 145
  });
  console.log(res);
}
```

# Installation

note: replace instances of `@aavegotchi/sdk` with `@candoizo/aavegotchi-node-lib` if not on aavegotchi namespace.

If public: `yarn add @aavegotchi/sdk`

# External

<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
