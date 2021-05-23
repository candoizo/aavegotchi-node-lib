import aavegotchi_diamond from "./_common";
import { utils } from "ethers";

export default {

  async totalAavegotchsi(): Promise<number> {
    return await aavegotchi_diamond.aavegotchi_diamond().totalSupply();
  },

}
