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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wider mb-3">{t("title")}</h1>
          <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-4" />
          <p className="text-gray-400">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t("name")} *</label>
              <input
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t("email")} *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">{t("phone")}</label>
            <input
              name="phone"
              type="tel"
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">{t("subject")} *</label>
            <select
              name="subject"
              required
              className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A] transition-colors"
            >
              <option value="">{t("subject")}...</option>
              <option value="info">{t("subjects.info")}</option>
              <option value="expertise">{t("subjects.expertise")}</option>
              <option value="b2b">{t("subjects.b2b")}</option>
              <option value="other">{t("subjects.other")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">{t("message")} *</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-[#C4A35A] transition-colors resize-none"
            />
          </div>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">{t("success")}</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">{t("error")}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#C4A35A] text-black py-3 font-semibold hover:bg-[#d4b36a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 rounded"
          >
            <Send className="w-4 h-4" />
            {status === "loading" ? "Envoi..." : t("send")}
          </button>
        </form>
      </div>
    </div>
  );
}
