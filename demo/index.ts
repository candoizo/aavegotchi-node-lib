import { getClient, getSdk } from "@candoizo/aavegotchi-lib-node"
const { lastTimePurchased, aavegotchiLeaderboard } = getSdk(getClient());

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

}

main()
