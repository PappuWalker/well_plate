"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import Logo from "@/components/Logo";

const LoginPage = () => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      setTimeout(() => router.push("/search"), 1200);
    }
  }, [user, router]);

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#10151B] via-[#151E26] to-[#10151B] pb-16 flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center py-12 md:py-20 w-full">
        <span className="w-28 h-28 mb-6 drop-shadow-xl animate-float flex items-center justify-center">
          <Logo className="h-24 w-24" />
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 drop-shadow">Welcome Back</h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-xl mb-6">Sign in to access personalized meal plans, order history, and more with Wellplate.</p>
        {user ? (
          <div className="bg-green-700/80 text-white px-6 py-4 rounded-xl font-semibold shadow mt-6 animate-pulse text-center">
            Login successful! Redirecting to your dashboard...
          </div>
        ) : (
          <LoginForm onLoginSuccess={setUser} />
        )}
      </section>
    </main>
  );
};

export default LoginPage;
