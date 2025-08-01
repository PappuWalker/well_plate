'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Well Plate
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="/search" className="text-gray-300 hover:text-white transition-colors">Search</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="/cart" className="text-gray-300 hover:text-white transition-colors">Cart</Link>
          <Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Home</Link>
          <Link href="/search" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Search</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">About</Link>
          <Link href="/cart" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Cart</Link>
          <Link href="/login" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
