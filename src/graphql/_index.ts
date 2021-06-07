import { GraphQLClient } from 'graphql-request';
import * as sdk from '../../gen/gen';
const aavegotchi_main = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';

function defaultSdk(arg?: GraphQLClient) {
  if (!arg) {
    return sdk.getSdk(client());
  }
  else return sdk.getSdk(arg);
}

function client() {
  return new GraphQLClient(aavegotchi_main);
}

function getBlock(block: number) {
  let url = aavegotchi_main;
  if (block && block != 0) url += `?block=${url}`;
  return new GraphQLClient(url);
}

export default {
  ...defaultSdk(),
  defaultSdk,
  client,
  getBlock
}
