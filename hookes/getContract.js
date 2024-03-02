import { ethers, utils } from "ethers";
import abiContract from "@/public/abi.json";
const { address, chainId, isConnected } = useWeb3ModalAccount();

export const GetContract = async () => {
  try {
    if (window.ethereum) {
      const { ethereum } = window;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abiContract,
        signer
      );

      console.log(contract);

      return contract;
    } else {
      console.error("MetaMask not detected");
    }
  } catch (error) {
    loadGetInitialProps(error, "Error at Deployed contract Function");
  }
};
