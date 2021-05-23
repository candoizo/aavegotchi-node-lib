import aavegotchi_diamond from "./_common";

export default {

  async item(tokenId: number): Promise<number> {
    return await aavegotchi_diamond.aavegotchi_diamond().getItem(tokenId);
  },

  async itemSvg(tokenId: number): Promise<string> {
    return await aavegotchi_diamond.aavegotchi_diamond().getItemSvg(tokenId);
  },

}
