"use client";

import { useState } from "react";
import { Gem } from "lucide-react";

export default function AdminLoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Identifiants incorrects");
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Gem className="w-8 h-8 text-[#C4A35A] mx-auto mb-3" />
          <h1 className="text-white text-xl font-light tracking-widest uppercase">
            Ava Sapphire
          </h1>
          <p className="text-gray-500 text-sm mt-1">Administration</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Mot de passe</label>
            <input
              name="password"
              type="password"
              required
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A]"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#C4A35A] text-black py-3 font-semibold hover:bg-[#d4b36a] transition-colors rounded"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
