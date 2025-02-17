import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Globe2 className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-xl">SEOWeb3GPT</span>
            </Link>
            <p className="text-gray-600">
              Optimizing the future of Web3 with AI-powered SEO tools
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link></li>
              <li><Link to="/api" className="text-gray-600 hover:text-gray-900">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><a href="https://blog.seoweb3gpt.dream" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/seoweb3gpt" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/seoweb3gpt" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/seoweb3gpt" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 SEOWeb3GPT. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}