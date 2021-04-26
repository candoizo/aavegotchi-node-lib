The Aavegotchi smart contracts are the ultimate source of truth used in the Aavegotchi ecosystem. All the information in the game has been stored inside a series of deployed smart contracts. Using a language like Javascript is one conveinient way to query these interfaces. In Aavegotchi it employs the Ethereum Diamond standard, which further divides the initial interfaces into a subset of namespaces called Facets. See here for further details on these.
For example, one concept in the Aavegotchi game resolves around increases a stat called Kinship. For end players they visit a page on the website and click a button to initiate the transaction with their default browser wallet. See the following example of initiating this action in Javascript using the SDK:
import { contractSDK } from "@aavegotchi/sdk";

async function main() {
    // https://docs.aavegotchi.com/javascript-development/smart-contracts/interact
    // calls the interact() function on Aavegotchi #599
    contractSDK.interact(599);
}

This section documents functions which are specific to the smart contracts and not provided through the GraphQL interface. This mainly used to interact with concepts in the game world. If you plan to only request information without changing any of the game state, visit the GraphQL Queries section for related information.
contractSdk()
Instantiating this object and it's function can be done after importing the package like so:
import { contractSdk } from "@aavegotchi/sdk"
contractSdk returns an object containing all the function on this page. It accepts one option called providerwhich is an ethers provider used to connect to the blockchain.
interact(tokenId: [number])
The interact() function is used to pet one or more Aavegotchis. The Aavegotchis are indicated by their tokenId number, and the total number of Aavegotchi's to be pet are passed as an array.
This will initiate a transaction.
Example Usage:
await contractSdk.interact([ 393, 2345, 121 ]); // pets 3 gotchis
rename(tokenId: [number], name: string)
The rename() function is used to rename one Aavegotchi. The Aavegotchi who's name is being changed is indicated by their tokenId number, and the new name is passed as an argument.
This will initiate a transaction.
Example Usage:
await contractSdk.rename(342, "VeryProfessional"); // rename gotchi #342
signMessage(text: string)
The signMessage() function is used to request a signed message from the current wallet. If you intend to ask a user for input, this provides one solution for verifying a submission could only come from the public key of the message received.
This will initiate a signing action.
Example Usage:
let sign = await contractSdk.signMessage(
    "Abc"
); // ask gotchi owner to sign "Abc"

References
Overview section links @todo
