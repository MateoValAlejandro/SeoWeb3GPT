import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2 } from 'lucide-react';
import icono from './imagenes/icono_White.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={icono} alt="Icono de SEOWeb3GPT" className="w-8 h-8" />
            <span className="font-bold text-xl text-gray-900">SEOWeb3GPT</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}