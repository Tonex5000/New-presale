'use client';
import Home from "./Components/Home"
import { MoralisProvider } from "react-moralis";


const App = () => {


  return (
    <MoralisProvider initializeOnMount = {false}>
        <Home />
     </MoralisProvider> 
  )   
};

export default App;

/* import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
import Home from "./component/Home";

const activeChainId = ChainId.BinanceSmartChainTestnet; */

/* return (
  <ThirdwebProvider network={activeChainId}>
    <Home />
  </ThirdwebProvider>
); */

/* <MoralisProvider initializeOnMount = {false}> */