import { Web3Storage } from 'web3.storage';

const client = new Web3Storage({ 
  token: import.meta.env.VITE_WEB3_STORAGE_TOKEN 
});

export const uploadToIPFS = async (content: string) => {
  try {
    // Create a JSON metadata file
    const metadata = {
      name: 'SEO Content NFT',
      description: content,
      content: content,
      created: new Date().toISOString()
    };

    // Convert to Blob
    const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
    const file = new File([blob], 'metadata.json');

    // Upload to IPFS
    const cid = await client.put([file]);
    return `ipfs://${cid}/metadata.json`;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw new Error('Failed to upload content to IPFS');
  }
};