import debug from "debug";
const log = debug(`*`);
import { contracts, graphql } from "@aavegotchi/sdk";

async function main() {

  log(contracts);

  // let { AavegotchiFacet, ItemsFacet } = contracts.facets();

  log(graphql);

  // let { sortedAavegotchis } = graphql.defaultSdk();

}

main();
