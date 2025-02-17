import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { useAccount } from 'wagmi';
import { useMintNFT } from '../services/nftService';

export default function NFTMinter() {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { address } = useAccount();
  const { mintNFT, isMinting, isMinted } = useMintNFT();

  const handleMint = async () => {
    try {
      setError('');
      if (!address) {
        throw new Error('Please connect your wallet first');
      }
      await mintNFT(content, address);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to mint NFT');
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4">NFT Minter</h2>
      <div className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter or paste the content you want to mint as NFT..."
          className="w-full h-32 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        
        {error && (
          <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        {isMinted && (
          <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
            <span>✨ NFT minted successfully!</span>
          </div>
        )}

        <button
          onClick={handleMint}
          disabled={isMinting || !content || !address}
          className="w-full px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isMinting ? 'Minting...' : (
            <>
              Mint as NFT
              <Upload className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}