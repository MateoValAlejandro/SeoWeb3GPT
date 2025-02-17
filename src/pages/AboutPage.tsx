import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">About SEOWeb3GPT</h1>
        <div className="prose prose-lg">
          <p className="text-xl text-gray-600 mb-6">
            SEOWeb3GPT is revolutionizing how blockchain projects approach SEO. By combining 
            artificial intelligence with Web3 technology, we provide cutting-edge tools for 
            optimizing decentralized applications and blockchain content.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We're dedicated to making Web3 more accessible and discoverable. Our platform 
            helps developers and creators optimize their blockchain projects for better 
            visibility and engagement.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Why Web3 SEO Matters</h2>
          <p className="text-gray-600 mb-6">
            As the blockchain ecosystem grows, standing out becomes increasingly challenging. 
            Traditional SEO tools don't understand the unique aspects of Web3 projects. That's 
            where we come in, providing specialized solutions for the decentralized web.
          </p>
        </div>
      </motion.div>
    </div>
  );
}