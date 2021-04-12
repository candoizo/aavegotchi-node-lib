import { GraphQLClient } from 'graphql-request';
import * as sdk from '../dist/gen';
const aavegotchi_main = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';

function defaultSdk() {
  return sdk.getSdk(getClient());
}

function getClient() {
  return new GraphQLClient(aavegotchi_main);
}

export {
  sdk,
  defaultSdk,
  getClient
}
