import { defaultSdk } from "@candoizo/aavegotchi-node-lib"
const { items, lastTimePurchased, aavegotchiLeaderboard } = defaultSdk();

async function main() {

  let res = await lastTimePurchased({
    itemID: 47
  });
  console.log(res);

  let res2 = await aavegotchiLeaderboard({
    orderBy: "hauntId",
    orderDirection: "asc",
    first: 100
  });
  console.log(res2);

  let ty = await items();
  console.log(ty);
}

main()
