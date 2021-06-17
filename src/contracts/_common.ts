import { Contract, getDefaultProvider, providers } from "ethers";
export const aavegotchiDiamondAddress =
  "0x86935F11C86623deC8a25696E1C19a8659CbF95d";
import abi from "./aavegotchi-contracts/diamondABI/diamond.json";
import requiredir from "require-dir";
const r = requiredir("./facet_abis");
const facet_names = Object.keys(r).map((x) => x);

const default_provider = getDefaultProvider(
  "https://rpc-mainnet.maticvigil.com"
);

export default {
  aavegotchi_diamond(provider?: providers.Provider): Contract {
    return new Contract(
      aavegotchiDiamondAddress,
      abi,
      provider || default_provider
    );
  },

  facets(provider?: providers.Provider): Object {
    let facets: Object;
    facet_names.map((name) => {
      return (facets[name] = new Contract(
        aavegotchiDiamondAddress,
        r[name],
        provider || default_provider
      ));
    });
    return facets;
  },
};
