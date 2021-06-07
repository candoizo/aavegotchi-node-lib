import { Contract, getDefaultProvider, providers } from "ethers";
export const aavegotchiDiamondAddress = "0x86935F11C86623deC8a25696E1C19a8659CbF95d";
import abi from "./aavegotchi-contracts/diamondABI/diamond.json";

export default {

  aavegotchi_diamond(
    provider?: providers.Provider
  ): Contract {

    return new Contract (
      aavegotchiDiamondAddress,
      abi,
      provider || getDefaultProvider()
    );
  },

  facets(
    provider?: providers.Provider
  ): Object {

    /* @fixme: thinking the abis need to be seperate json for each */
    return {
      diamond: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      AavegotchiFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      AavegotchiGameFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      CollateralFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      ERC721MarketplaceFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      ERC1155MarketplaceFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      EscrowFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      ItemsFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      ItemsTransferFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
      SvgFacet: new Contract (
        aavegotchiDiamondAddress,
        abi,
        provider || getDefaultProvider()
      ),
    };
  },



}
