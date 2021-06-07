# aavegotchi-node-lib 👻📦

** Currently in alpha stage and subject to breaking changes **
Latest documentation files can be found in [`docs`](./demo/index.ts), or at https://docs.aavegotchi.com following stable releases.

A Node.js package for type-safe definitions from the official Aavegotchi GraphQL endpoints.

Clone this repo and try the [`demo`](./demo/index.ts) with: `cd demo/ && yarn && yarn test`

# Usage

To install in a Node.js project: `yarn add @aavegotchi/sdk`.

### Typescript
```ts
import { defaultSdk } from "@aavegotchi/sdk"
const { lastTimePurchased, aavegotchiLeaderboard } = defaultSdk();

async function main() {
  let res = await lastTimePurchased({
    itemID: 145
  });
  console.log(res);
}

main();
```
### Javascript
```js
const aavegotchiNodeLib = require("@@aavegotchi/sdk");
const { lastTimePurchased, aavegotchiLeaderboard } = aavegotchiNodeLib.defaultSdk();

const main = async () => {
  let res = await lastTimePurchased({
    itemID: 145
  });
  console.log(res);
}

main()
```

# External

<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
