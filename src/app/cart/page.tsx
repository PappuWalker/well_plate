'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-lg">Your shopping cart is currently empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto">
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
    </div>
  );
};

export default CartPage;
