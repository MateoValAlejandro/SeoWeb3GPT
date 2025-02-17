import { parseEther } from 'viem';
import { useWriteContract, useWatchContractEvent } from 'wagmi';
import { uploadToIPFS } from './web3Storage';

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const useMintNFT = () => {
  const { writeContract, isPending: isMinting, isSuccess: isMinted } = useWriteContract();

  // Watch for Transfer events to know when minting is complete
  useWatchContractEvent({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    eventName: 'Transfer',
    onLogs(logs) {
      console.log('NFT minted:', logs);
    },
  });

  const mintNFT = async (content: string, address: string) => {
    try {
      // Upload content to IPFS
      const tokenUri = await uploadToIPFS(content);
      
      // Mint NFT
      await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: 'mint',
        args: [address, tokenUri],
      });

      return tokenUri;
    } catch (error) {
      console.error('Error minting NFT:', error);
      throw new Error('Failed to mint NFT');
    }
  };

  return { mintNFT, isMinting, isMinted };
};