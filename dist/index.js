// import * as test from "./gen"
const { GraphQLClient } = require('graphql-request');
const test = require('./gen');

module.exports = {
  getClient: () => new GraphQLClient('https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic'),
  ...test
}
