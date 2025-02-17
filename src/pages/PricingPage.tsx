import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Star } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Get the power of AI-driven Web3 SEO tools at a fraction of the cost of traditional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Basic</h2>
            </div>
            <p className="text-gray-600 mb-4">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">Free</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>5 keyword analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Basic metadata audit</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Simple ranking reports</span>
              </li>
            </ul>
            <button className="w-full px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-blue-600 p-8 rounded-2xl shadow-lg relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-black text-sm font-medium px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Pro</h2>
            </div>
            <p className="text-blue-100 mb-4">Advanced features for professionals</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$4.99</span>
              <span className="text-blue-100">/analysis</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2 text-white">
                <Check className="w-5 h-5" />
                <span>Detailed SEO analysis</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <Check className="w-5 h-5" />
                <span>Comprehensive reports</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <Check className="w-5 h-5" />
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <Check className="w-5 h-5" />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300">
              Get Started
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Premium</h2>
            </div>
            <p className="text-gray-600 mb-4">For serious Web3 businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Monthly consultation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Custom reporting</span>
              </li>
            </ul>
            <button className="w-full px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}