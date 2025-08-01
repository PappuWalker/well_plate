'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const OrderSuccessPage = () => {
  const runConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // @ts-expect-error
      if (typeof confetti === 'function') {
        // @ts-expect-error
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        // @ts-expect-error
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }
    }, 250);
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"
        onLoad={runConfetti}
      />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Your Order is Placed! 🎉</h1>
        <p className="text-lg mb-8">Thank you for choosing Well Plate. Your healthy food is on its way!</p>
        <Link href="/" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default OrderSuccessPage;
