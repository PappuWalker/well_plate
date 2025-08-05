'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Logo from '@/components/Logo';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#10151B] via-[#151E26] to-[#10151B] pb-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 md:py-20">
        <span className="w-28 h-28 mb-6 drop-shadow-xl animate-float flex items-center justify-center">
          <Logo className="h-24 w-24" />
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 drop-shadow">Your Cart</h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl mb-6">Review your selected foods and make any changes before checkout. Enjoy secure, flexible, and fast ordering with Wellplate!</p>
      </section>

      {/* Feature Highlights */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center mb-12">
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m9-9H3" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Secure Checkout</h3>
          <p className="text-gray-400 text-sm text-center">Your information and payments are protected with industry-leading security.</p>
        </div>
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Flexible Delivery</h3>
          <p className="text-gray-400 text-sm text-center">Choose delivery times and options that fit your schedule and preferences.</p>
        </div>
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-8 0v2M12 3v1m-4 4h8" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Easy Modifications</h3>
          <p className="text-gray-400 text-sm text-center">Update quantities, remove items, or clear your cart at any time before checkout.</p>
        </div>
      </section>

      {/* Cart Section */}
      <section className="max-w-2xl mx-auto bg-slate-900/60 rounded-2xl p-8 shadow-lg border border-slate-800">
        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-300">Your shopping cart is currently empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.name} className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg shadow">
                  <span className="font-semibold">{item.name}</span>
                  <div className="flex items-center space-x-4">
                    <button onClick={() => updateQuantity(item.name, item.quantity - 1)} className="px-2 py-1 bg-gray-700 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="px-2 py-1 bg-gray-700 rounded">+</button>
                    <button onClick={() => removeFromCart(item.name)} className="text-red-500 hover:text-red-700">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-8">
              <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Clear Cart
              </button>
              <Link href="/checkout" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                Place Order
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;
