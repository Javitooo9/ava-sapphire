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
    <div className="min-h-screen bg-[#F2F0EB] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Gem className="w-7 h-7 text-[#A8894A] mx-auto mb-4" />
          <h1 className="text-[#1C1C1E] text-lg font-light tracking-[0.2em] uppercase">
            Ava Sapphire
          </h1>
          <p className="text-[#6B6867] text-xs mt-1 tracking-widest uppercase">Administration</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-[#E8E5E0] p-8">
          <div>
            <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">Email</label>
            <input name="email" type="email" required
              className="w-full bg-white border border-[#E8E5E0] text-[#1C1C1E] px-4 py-3 text-sm focus:outline-none focus:border-[#954C2E] transition-colors" />
          </div>
          <div>
            <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">Mot de passe</label>
            <input name="password" type="password" required
              className="w-full bg-white border border-[#E8E5E0] text-[#1C1C1E] px-4 py-3 text-sm focus:outline-none focus:border-[#954C2E] transition-colors" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit"
            className="w-full bg-[#954C2E] text-white py-3 text-sm font-medium hover:bg-[#7A3D25] transition-colors">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
