import aavegotchi_diamond from "./_common";

export default {

  async totalAavegotchis(): Promise<number> {
    return await aavegotchi_diamond.aavegotchi_diamond().totalSupply();
  },

}
