'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Well Plate
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/search" className="text-gray-300 hover:text-white">Search</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/cart" className="text-gray-300 hover:text-white">Cart</Link>
          <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
