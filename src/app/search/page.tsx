'use client';

import React, { useState } from 'react';
import ConditionSelector from '@/components/ConditionSelector';
import FoodList from '@/components/FoodList';
import Link from "next/link";
import Logo from "@/components/Logo";
import { ShoppingCart, ShoppingBag } from 'lucide-react';

export default function SearchPage() {
  const [selectedCondition, setSelectedCondition] = useState('');

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#10151B] via-[#151E26] to-[#10151B] pb-16">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-12 md:py-20">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-0 w-[500px] h-[500px] -translate-x-1/2 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>
        {/* Wellplate SVG Logo */}
        <span className="w-28 h-28 mb-6 drop-shadow-xl animate-float flex items-center justify-center">
          <Logo className="h-24 w-24" />
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 drop-shadow">Find Foods for Your Condition</h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl mb-6">Personalized, doctor-reviewed food recommendations for your unique health needs. Discover what you can eat, not just what you can't!</p>
        <a href="/searc" className="inline-block rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 text-white px-8 py-3 font-semibold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400 animate-glow">Get Started</a>
      </section>

      {/* Feature Highlights */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center mb-12">
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m9-9H3" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Personalized Nutrition</h3>
          <p className="text-gray-400 text-sm text-center">Food lists and recipes tailored to your health condition and preferences.</p>
        </div>
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Doctor Approved</h3>
          <p className="text-gray-400 text-sm text-center">Recommendations reviewed by nutritionists and healthcare professionals.</p>
        </div>
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-8 0v2M12 3v1m-4 4h8" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Fast Delivery</h3>
          <p className="text-gray-400 text-sm text-center">Get your personalized food plan and groceries delivered to your door.</p>
        </div>
      </section>


      {/* Condition Selector & Food List */}
      <section className="max-w-2xl mx-auto bg-slate-900/60 rounded-2xl p-8 shadow-lg border border-slate-800">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Select Your Health Condition</h2>
        <ConditionSelector onConditionChange={setSelectedCondition} />
        <FoodList condition={selectedCondition} />
        <div className="mt-8 text-center">
          <Link href="/cart">
            <button className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400">
              View Cart
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
