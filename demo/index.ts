import { Query, Portal, getSdk } from "../dist/gen";
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

  // let portal : Portal = {
  //   id: "1"
  // }
  // //
  // // let aavegotchi_opts : AavegotchiOption = {
  // //   id: 1,
  // //   first: [portal]
  // // };
  // //
  // let query : Query = {
  //   portals: [portal]
  // };
  //
  // // let res = await client.request(query);
  // const { portals } = await sdk.portal(portal);
  // console.log(portals);


  console.log(await sdk.portals([1]));


}

main()
