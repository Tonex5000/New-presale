import { useWeb3Contract } from "react-moralis";
import { Presale_ABI, Presale_Address } from "../constants";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";
import {useState} from "react";
import { ethers } from "ethers";

export default function TokenRaised() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
    const chainId = parseInt(chainIdHex);
    const [tokenRaised, setTokenRaised] = useState(0);
    const [error, setError] = useState(null);
    const contAddress = chainId in Presale_Address ? Presale_Address[chainId][0] : null;

    const { runContractFunction: getTotalRaised } = useWeb3Contract({
        abi: Presale_ABI,
        contractAddress: contAddress,
        functionName: "getTotalRaised",
        params: {},
    })

    
    useEffect(() => {
      if (isWeb3Enabled) {
        async function getToken() {
          try {
            let TotalRaised = (await getTotalRaised()).toString();
            if (TotalRaised !== undefined) {
              setTokenRaised(ethers.utils.formatUnits(TotalRaised, "ether"));
            } else {
              setTokenRaised('0'); // Set to 0 if undefined
            }
          } catch (error) {
            setError(error.message || "Error fetching total raised");
          }
        }
  
        getToken();
      }
    }, [isWeb3Enabled, getTotalRaised]);
  
    return (
      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <h1>Total Token Raised: {tokenRaised}BNB</h1>
        )}
      </div>
    );
}



/* useEffect(() => {
  if (isWeb3Enabled) {
    async function getToken() {
        let TotalRaised = (await getTotalRaised()).toString();
        if (TotalRaised !== undefined){
         setTokenRaised(ethers.utils.formatUnits(TotalRaised, "ether"));
        }else{
          TotalRaised = 'Connect to a Blockchain';
        }
    }
    getToken(); 
  }
}, [isWeb3Enabled]);


return (

<div>
<h1>Total Token Raised: {tokenRaised}BNB</h1>
</div>

);  */






/* useEffect(() => {
      if (isWeb3Enabled) {
          async function getToken() {
              try {
                  const TotalRaised = await getTotalRaised();
                  if (TotalRaised !== undefined) {
                      const TotalRaisedString = TotalRaised.toString();
                      setTokenRaised(ethers.utils.formatUnits(TotalRaisedString, "ether"));
                  } else {
                      setError("TotalRaised is undefined");
                  }
              } catch (error) {
                  console.error("Error fetching total raised:", error);
                  setError("Error fetching total raised. Please check your internet connection.");
              }
          }
          getToken(); 
      } else {
          setError("Not connected to the internet");
      }
  }, [isWeb3Enabled]);

  return (
      <div>
          {error ? (
              <h1>Error: {error}</h1>
          ) : (
              <h1>Total Token Raised: {tokenRaised ? `${tokenRaised} BNB` : "Loading..."}</h1>
          )}
      </div>
  ); */
