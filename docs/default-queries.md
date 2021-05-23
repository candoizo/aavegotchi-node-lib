The functions documented in this section support information being retreived from the GraphQL endpoint using the smart contracts as a fallback. This data mainly pertains to historical data which has been exposed on the GraphQL endpoint and supported recovery in case of an error with a service provider.
This set of functions is generally at reliable in times of high network stress, but does not expose functionality to alter in-game state. Visit the Contract Queries section for these needs.
defaultSdk()
Instantiating this object and it's function can be done after importing the package like so:
import { defaultSdk } from "@aavegotchi/sdk";
defaultSdk returns an object containing all the function on this page. It accepts one option called prioritzewhich indicates if queries should be made first through GraphQL or the Contract interfaces. When not supplied, the default tries to query GraphQL first, in the case of an error in the network request it will make a second call to the smart contracts for the same information.
fn1(tokenId: [number])
The interact() function is used to pet one or more Aavegotchi's. The Aavegotchi's are indicated by their tokenId number, and the total number of Aavegotchi's to be pet are passed an array.
Example Usage:
await defaultSdk.fn1([ 393, 2345, 121 ]); // pets 3 gotchis
fn2(tokenId: [number], name: string)
The rename() function is used to rename one Aavegotchi. The Aavegotchi who's name is being changed is indicated by their tokenId number, and the new name is passed as an argument.
Example Usage:
await defaultSdk.fn2(342, "VeryProfessional"); // rename gotchi #342

References
Overview section links @todo
