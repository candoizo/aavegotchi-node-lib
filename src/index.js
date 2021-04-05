const { GraphQLClient } = require('graphql-request');
const sdk = require('../dist/gen');
const aavegotchi_main = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';

module.exports = {
  defaultSdk: () => sdk.getSdk(module.exports.getClient()),
  getClient: () => new GraphQLClient(aavegotchi_main),
  ...sdk
};
