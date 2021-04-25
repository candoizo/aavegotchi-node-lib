import { GraphQLClient } from 'graphql-request';
import * as sdk from '../dist/gen';
const aavegotchi_main = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';

function defaultSdk(client?: GraphQLClient) {
  if (!client) {
    return sdk.getSdk(getClient());
  }
  else return sdk.getSdk(client);
}

function getClient() {
  return new GraphQLClient(aavegotchi_main);
}

function getBlock(block: number) {
  let url = aavegotchi_main;
  if (block && block != 0) url += `?block=${url}`;
  return new GraphQLClient(url);
}

export {
  sdk,
  defaultSdk,
  getClient,
  getBlock
}
