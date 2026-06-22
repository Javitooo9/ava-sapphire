import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Building2, User } from "lucide-react";

export default async function RdvPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RdvContent />;
}

function RdvContent() {
  const t = useTranslations("rdv");

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Rendez-vous</p>
          <h1 className="text-4xl font-light tracking-wider text-[#1C1C1E] mb-3">{t("title")}</h1>
          <div className="w-10 h-px bg-[#A8894A] mx-auto mb-4" />
          <p className="text-[#6B6867] text-sm">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E5E0]">
          {/* B2B */}
          <div className="bg-white p-10 text-center hover:bg-[#F2F0EB] transition-colors group">
            <Building2 className="w-8 h-8 text-[#1B3A5C] mx-auto mb-5" />
            <h2 className="text-lg font-light text-[#1C1C1E] mb-3 tracking-wide">{t("b2b.title")}</h2>
            <p className="text-[#6B6867] text-sm mb-8 leading-relaxed">{t("b2b.desc")}</p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#1B3A5C] text-white px-6 py-3 text-sm font-medium hover:bg-[#243f63] transition-colors">
              {t("b2b.cta")}
            </a>
          </div>

          {/* Client */}
          <div className="bg-white p-10 text-center hover:bg-[#F2F0EB] transition-colors group">
            <User className="w-8 h-8 text-[#1B3A5C] mx-auto mb-5" />
            <h2 className="text-lg font-light text-[#1C1C1E] mb-3 tracking-wide">{t("client.title")}</h2>
            <p className="text-[#6B6867] text-sm mb-8 leading-relaxed">{t("client.desc")}</p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#1B3A5C] text-white px-6 py-3 text-sm font-medium hover:bg-[#243f63] transition-colors">
              {t("client.cta")}
            </a>
          </div>
        </div>

        <p className="text-center text-[#A8894A]/60 text-xs mt-6">
          Remplacer les liens Calendly dans src/app/[locale]/rdv/page.tsx
        </p>
      </div>
    </div>
  );
}
