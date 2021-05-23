import aavegotchi_diamond from "./_common";

export default {

  async totalAavegotchsi(): Promise<number> {
    return await aavegotchi_diamond.aavegotchi_diamond().totalSupply();
  },

}
