# aavegotchi-node-lib 👻📦

A Node.js package for type-safe definitions from the official Aavegotchi GraphQL endpoints.

Clone this repo and test the [`demo`](./demo/) with: `cd demo/ && yarn && yarn test`

Peek some example Javascript code in [demo/index.ts](./demo/index.ts).

# Usage

note: replace instances of `@aavegotchi/sdk` with `@candoizo/aavegotchi-node-lib` if not on aavegotchi namespace.

To install in a Node.js project: `yarn add @aavegotchi/sdk`

### Typescript
```ts
import { defaultSdk } from "candoizo/aavegotchi-node-lib"
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
const aavegotchiNodeLib = require("@candoizo/aavegotchi-node-lib");
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
