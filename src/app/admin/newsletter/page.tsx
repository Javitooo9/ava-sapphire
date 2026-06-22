"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function AdminNewsletterPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: appeler API d'envoi newsletter (Resend, Mailgun, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  return (
    <div>
      <h1 className="text-2xl font-light tracking-wider mb-8">Newsletter</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rédiger */}
        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-lg font-light text-[#C4A35A] mb-6">Envoyer une newsletter</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Sujet de l&apos;email *</label>
              <input
                name="subject"
                required
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A]"
                placeholder="Nouvelle arrivée — Saphirs de Madagascar"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Contenu *</label>
              <textarea
                name="content"
                required
                rows={8}
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A] resize-none"
                placeholder="Bonjour,&#10;&#10;Nous avons le plaisir de vous présenter..."
              />
            </div>
            {status === "sent" && (
              <p className="text-green-400 text-sm">Newsletter envoyée avec succès !</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Erreur lors de l&apos;envoi.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 bg-[#C4A35A] text-black px-6 py-2 font-semibold rounded hover:bg-[#d4b36a] transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {status === "sending" ? "Envoi..." : "Envoyer à tous les abonnés"}
            </button>
          </form>
        </div>

        {/* Abonnés */}
        <div className="border border-white/10 p-6 rounded">
          <h2 className="text-lg font-light text-[#C4A35A] mb-6">Abonnés</h2>
          <p className="text-gray-500 text-sm">
            Les abonnés seront visibles ici une fois Supabase connecté.
          </p>
          <div className="mt-4 p-4 bg-white/5 rounded text-xs text-gray-500 font-mono">
            Table : newsletter_subscribers (id, email, created_at)
          </div>
        </div>
      </div>
    </div>
  );
}
