import React from 'react';
import { motion } from 'framer-motion';
import AIGenerator from '../components/AIGenerator';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">SEO Analysis Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <AIGenerator />
        </div>
      </motion.div>
    </div>
  );
}