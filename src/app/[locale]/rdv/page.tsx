import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Gem } from "lucide-react";

export default async function RdvPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RdvContent />;
}

function RdvContent() {
  const t = useTranslations("rdv");

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Rendez-vous</p>
        <h1 className="text-4xl font-light tracking-wider text-[#1C1C1E] mb-3">{t("title")}</h1>
        <div className="w-10 h-px bg-[#A8894A] mx-auto mb-6" />
        <p className="text-[#6B6867] text-sm mb-14 leading-relaxed max-w-md mx-auto">
          Prenez rendez-vous directement avec notre équipe pour découvrir nos pierres, obtenir un conseil personnalisé ou discuter d&apos;un projet.
        </p>

        <div className="border border-[#E8E5E0] bg-white p-12">
          <Gem className="w-7 h-7 text-[#A8894A] mx-auto mb-6" />
          <h2 className="text-lg font-light text-[#1C1C1E] mb-3 tracking-wide">
            Rencontrez notre équipe
          </h2>
          <p className="text-[#6B6867] text-sm mb-8 leading-relaxed max-w-sm mx-auto">
            En présentiel ou en visioconférence, selon vos préférences.
          </p>
          {/* Remplacer par votre lien Calendly */}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#954C2E] text-white px-10 py-3 text-sm font-medium hover:bg-[#7A3D25] transition-colors"
          >
            Réserver un créneau
          </a>
        </div>

        <p className="text-[#A8894A]/50 text-xs mt-6">
          Remplacer le lien Calendly dans src/app/[locale]/rdv/page.tsx
        </p>
      </div>
    </div>
  );
}
