"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function AdminNewsletterPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  const inputClass = "w-full bg-white border border-[#E8E5E0] text-[#1C1C1E] px-4 py-3 text-sm focus:outline-none focus:border-[#954C2E] transition-colors";

  return (
    <div>
      <h1 className="text-2xl font-light tracking-wider text-[#1C1C1E] mb-8">Newsletter</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-[#E8E5E0] bg-white p-6">
          <h2 className="text-sm font-medium text-[#954C2E] tracking-wide mb-6 uppercase">
            Envoyer une newsletter
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">Sujet *</label>
              <input name="subject" required className={inputClass}
                placeholder="Nouvelle arrivée — Saphirs de Madagascar" />
            </div>
            <div>
              <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">Contenu *</label>
              <textarea name="content" required rows={8} className={`${inputClass} resize-none`}
                placeholder="Bonjour,&#10;&#10;Nous avons le plaisir de vous présenter..." />
            </div>
            {status === "sent" && <p className="text-green-600 text-sm">Envoyée avec succès !</p>}
            {status === "error" && <p className="text-red-500 text-sm">Erreur lors de l&apos;envoi.</p>}
            <button type="submit" disabled={status === "sending"}
              className="flex items-center gap-2 bg-[#954C2E] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#7A3D25] transition-colors disabled:opacity-50">
              <Send className="w-4 h-4" />
              {status === "sending" ? "Envoi..." : "Envoyer à tous les abonnés"}
            </button>
          </form>
        </div>

        <div className="border border-[#E8E5E0] bg-white p-6">
          <h2 className="text-sm font-medium text-[#954C2E] tracking-wide mb-6 uppercase">Abonnés</h2>
          <p className="text-[#6B6867] text-sm">
            Les abonnés apparaîtront ici une fois Supabase connecté.
          </p>
          <div className="mt-4 p-4 bg-[#F2F0EB] text-xs text-[#6B6867] font-mono">
            Table : newsletter_subscribers (id, email, created_at)
          </div>
        </div>
      </div>
    </div>
  );
}
