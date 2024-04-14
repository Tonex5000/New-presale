import {createThirdwebClient, defineChain, getContract} from 'thirdweb';
import BEP20Token from './ABI/BEP20Token.json';
import Presale from './ABI/Presale.json';

const CLIENT_ID = "36d253234fdd008fe65f8c7df0c26fd5";

export const client= createThirdwebClient({
  clientId: CLIENT_ID
})

export const chain = defineChain(97);


export const BEP20Token_Address = "0xb432a89eCFeE07137f2C69EE3BeC43db3f11bbDF";
export const BEP20Token_ABI = BEP20Token;

export const Presale_Address = {"97": ["0xd744De4af27A51c9dB46aA2932Aabb844789431c"]};// Testnet - Replace with actual testnet address // Mainnet
    //56: "" // Testnet - Replace with actual testnet address
 //56: "" // Testnet - Replace with actual testnet address
export const Presale_ABI = Presale;



export const CONTRACT = getContract({
    client: client,
    chain: chain,
    address: Presale_Address,
    abi: Presale_ABI,
})


export const address = "0xd744De4af27A51c9dB46aA2932Aabb844789431c";

export const abi = Presale_ABI;
  