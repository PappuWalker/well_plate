"use client";
import React, { useState } from "react";

interface LoginFormProps {
  onLoginSuccess: (user: { email: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Fake async login for demo
    setTimeout(() => {
      setLoading(false);
      if (email === "demo@wellplate.com" && password === "wellplate123") {
        onLoginSuccess({ email });
      } else {
        setError("Invalid email or password. Try demo@wellplate.com / wellplate123");
      }
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md mx-auto bg-slate-900/70 p-8 rounded-2xl shadow-lg border border-slate-800">
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-red-400 text-sm text-center">{error}</div>}
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 text-white px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400 animate-glow"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <div className="text-center text-gray-400 text-xs mt-2">
        Hint: demo@wellplate.com / wellplate123
      </div>
    </form>
  );
};

export default LoginForm;
