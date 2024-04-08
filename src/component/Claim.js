import { useWeb3Contract } from "react-moralis";
import { Presale_ABI, Presale_Address } from "../constants";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function Claim() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
    const chainId = parseInt(chainIdHex);
    const contAddress = chainId in Presale_Address ? Presale_Address[chainId][0] : null;

    const { runContractFunction: withdrawClaimForCurrentStage } = useWeb3Contract({
        abi: Presale_ABI,
        contractAddress: contAddress,
        functionName: "withdrawClaimForCurrentStage",
        params: {},
    });

  const handleWithdrawClaim = async () => {
    try {
        await withdrawClaimForCurrentStage();
        console.log("Claim withdrawn successfully");
    } catch (error) {
        if (error.message.includes("No claim available")) {
            console.log("Nothing to claim");
            // Display message to user indicating there is nothing to claim
        } else {
            console.error("Failed to withdraw claim:", error);
            // Handle other errors (display to user, etc.)
        }
    }
  };
  
   
/*     useEffect(() => {
        if (isWeb3Enabled) {
            // Optionally, you can call withdrawClaimForCurrentStage() here directly if you want to trigger it immediately on component mount.
        }
    }, [isWeb3Enabled]);  */

    return (
        <div>
            {contAddress ? (
                <button onClick={handleWithdrawClaim}>Withdraw Claim</button>
            ) : (
                <div>No BLAB to Claim</div>
            )}
        </div>
    );
}
