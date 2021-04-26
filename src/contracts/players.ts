import aavegotchi_diamond from "./_common";
import { utils } from "ethers";

export default {

  async playerAavegotchiCount(wallet: string): Promise<number> {
    if (!utils.isAddress(wallet)) throw new Error("Please supply a wallet address.");
    let address = utils.getAddress(wallet);
    return await aavegotchi_diamond.aavegotchi_diamond().balanceOf(address);
  },

  async aavegotchiIdsOfPlayer(wallet: string): Promise<Array<Object>> {
    if (!utils.isAddress(wallet)) throw new Error("Please supply a wallet address.");
    let address = utils.getAddress(wallet);
    return await aavegotchi_diamond.aavegotchi_diamond().allAavegotchisOfOwner(address);
  },

}
