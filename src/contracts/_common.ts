import { Contract, getDefaultProvider, providers } from "ethers";

export const aavegotchiDiamondAddress = "0x86935F11C86623deC8a25696E1C19a8659CbF95d";

//@ts-ignore
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

}
