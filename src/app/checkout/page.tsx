'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const { clearCart } = useCart();
  const router = useRouter();

  const handlePlaceOrder = () => {
    clearCart();
    router.push('/order-success');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Checkout</h1>
      <div className="max-w-md mx-auto bg-gray-800 text-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Confirm Your Order</h2>
        <p className="mb-8">Your order is ready to be placed. Click the button below to confirm.</p>
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Confirm and Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
