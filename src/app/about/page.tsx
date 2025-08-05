import React from 'react';
import Logo from '@/components/Logo';

const AboutPage = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#10151B] via-[#151E26] to-[#10151B] pb-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 md:py-20">
        <span className="w-28 h-28 mb-6 drop-shadow-xl animate-float flex items-center justify-center">
          <Logo className="h-24 w-24" />
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 drop-shadow">About Wellplate</h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl mb-6">Wellplate is dedicated to helping you discover the right foods for your health needs—delicious, safe, and easy. Eat better, live better—one plate at a time.</p>
        <a href="/search" className="inline-block rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 text-white px-8 py-3 font-semibold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400 animate-glow">Try Food Finder</a>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center mb-12">
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v18m9-9H3" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">How It Works</h3>
          <p className="text-gray-400 text-sm text-center">Select your health condition, get instant food recommendations, and order with ease.</p>
        </div>
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Meet the Team</h3>
          <p className="text-gray-400 text-sm text-center">A passionate group of nutritionists, engineers, and food lovers building a healthier world.</p>
        </div>
        <div className="flex flex-col items-center bg-slate-900/60 rounded-2xl p-6 w-64 shadow-lg border border-slate-800">
          <svg className="w-10 h-10 mb-3 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-8 0v2M12 3v1m-4 4h8" /></svg>
          <h3 className="font-bold text-lg text-white mb-1">Our Values</h3>
          <p className="text-gray-400 text-sm text-center">We believe in inclusivity, evidence-based nutrition, and making healthy eating joyful for everyone.</p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
