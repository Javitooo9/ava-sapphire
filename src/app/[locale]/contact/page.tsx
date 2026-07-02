"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStatus(res.ok ? "success" : "error");
    if (res.ok) form.reset();
  }

  const inputClass = "w-full bg-white border border-[#E8E5E0] text-[#1C1C1E] px-4 py-3 text-sm focus:outline-none focus:border-[#954C2E] transition-colors placeholder:text-[#A8A09A]";

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Contact</p>
          <h1 className="text-4xl font-light tracking-wider text-[#1C1C1E] mb-3">{t("title")}</h1>
          <div className="w-10 h-px bg-[#A8894A] mx-auto mb-4" />
          <p className="text-[#6B6867] text-sm">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-[#E8E5E0] p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">{t("name")} *</label>
              <input name="name" required className={inputClass} />
            </div>
            <div>
              <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">{t("email")} *</label>
              <input name="email" type="email" required className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">{t("phone")}</label>
            <input name="phone" type="tel" className={inputClass} />
          </div>

          <div>
            <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">{t("subject")} *</label>
            <select name="subject" required
              className="w-full bg-white border border-[#E8E5E0] text-[#1C1C1E] px-4 py-3 text-sm focus:outline-none focus:border-[#954C2E] transition-colors">
              <option value="">Choisir...</option>
              <option value="info">{t("subjects.info")}</option>
              <option value="expertise">{t("subjects.expertise")}</option>
              <option value="b2b">{t("subjects.b2b")}</option>
              <option value="other">{t("subjects.other")}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-[#6B6867] uppercase tracking-widest mb-2">{t("message")} *</label>
            <textarea name="message" required rows={6}
              className={`${inputClass} resize-none`} />
          </div>

          {status === "success" && (
            <p className="text-green-600 text-sm text-center">{t("success")}</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">{t("error")}</p>
          )}

          <button type="submit" disabled={status === "loading"}
            className="w-full bg-[#954C2E] text-white py-3 text-sm font-medium hover:bg-[#7A3D25] transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            {status === "loading" ? "Envoi..." : t("send")}
          </button>
        </form>
      </div>
    </div>
  );
}
