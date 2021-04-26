import aavegotchi_diamond from "./_common";

export default {

  async aavegotchiSvg(arg: number): Promise<string> {
    return await aavegotchi_diamond.aavegotchi_diamond().getAavegotchiSvg(arg);
  },


  async aavegotchi(tokenId: number): Promise<Object> {
    let res = await aavegotchi_diamond.aavegotchi_diamond().getAavegotchi(tokenId);
    return res;
  },

  async aavegotchiBirth(tokenId: number): Promise<number> {
    let res = await aavegotchi_diamond.aavegotchi_diamond().aavegotchiClaimTime(tokenId);
    return res;
  },

  async aavegotchiOwner(tokenId: number): Promise<string> {
    let res = await aavegotchi_diamond.aavegotchi_diamond().ownerOf(tokenId);
    return res;
  },


  interact(arg: Array<number>): void {

    if (arg.length == 0) throw new Error(
      "Please supply an array of tokenId for the Aavegotchis being pet."
    );

    aavegotchi_diamond.aavegotchi_diamond().interact(arg);
  },

  setAavegotchiName(arg: Array<number>): void {

    if (arg.length == 0) throw new Error(
      "Please supply the tokenId of the Aavegotchis"
    );

    aavegotchi_diamond.aavegotchi_diamond().interact(arg);
  },


}
