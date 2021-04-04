import { getSdk } from "../dist/gen";
import { GraphQLClient } from 'graphql-request';
const client = new GraphQLClient('https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic');
const sdk = getSdk(client);

// const clientTimingWrapper: SdkFunctionWrapper = async <T>(action: () => Promise<T>): Promise<T> => {
//   // const startTime : number = new Date();
//   const result = await action();
//   // const endTime : number = new Date();
//   // console.log('request duration (ms)', endTime - startTime)
//   return result;
// }

async function main() {

  console.log(await sdk.MyPortalQuery({
    first: 1
  }));


  let res = await sdk.lastTimePurchased({
    itemID: 47
  });
  console.log(res);

}

main()
