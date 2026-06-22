import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Building2, User } from "lucide-react";

export default async function RdvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RdvContent />;
}

function RdvContent() {
  const t = useTranslations("rdv");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-wider mb-3">{t("title")}</h1>
          <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-4" />
          <p className="text-gray-400">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* B2B */}
          <div className="border border-white/10 hover:border-[#C4A35A]/50 transition-colors p-8 rounded text-center group">
            <Building2 className="w-10 h-10 text-[#C4A35A] mx-auto mb-4" />
            <h2 className="text-xl font-light mb-3">{t("b2b.title")}</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">{t("b2b.desc")}</p>
            {/* Replace href with your Calendly/Cal.com B2B link */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4A35A] text-black px-6 py-3 font-semibold hover:bg-[#d4b36a] transition-colors rounded"
            >
              {t("b2b.cta")}
            </a>
            <p className="text-gray-600 text-xs mt-4">Via Calendly</p>
          </div>

          {/* Client */}
          <div className="border border-white/10 hover:border-[#C4A35A]/50 transition-colors p-8 rounded text-center group">
            <User className="w-10 h-10 text-[#C4A35A] mx-auto mb-4" />
            <h2 className="text-xl font-light mb-3">{t("client.title")}</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">{t("client.desc")}</p>
            {/* Replace href with your Calendly/Cal.com client link */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4A35A] text-black px-6 py-3 font-semibold hover:bg-[#d4b36a] transition-colors rounded"
            >
              {t("client.cta")}
            </a>
            <p className="text-gray-600 text-xs mt-4">Via Calendly</p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Remplacer les liens Calendly par vos liens réels dans{" "}
            <code className="text-gray-400">src/app/[locale]/rdv/page.tsx</code>
          </p>
        </div>
      </div>
    </div>
  );
}
