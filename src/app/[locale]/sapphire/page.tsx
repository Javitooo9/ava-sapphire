import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function SapphirePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SapphireContent />;
}

function SapphireContent() {
  const t = useTranslations("sapphire");

  const sections = [
    { key: "what", emoji: "💎" },
    { key: "colors", emoji: "🎨" },
    { key: "origins", emoji: "🌍" },
    { key: "quality", emoji: "🔍" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Pédagogie</p>
          <h1 className="text-4xl font-light tracking-wider text-[#1C1C1E] mb-3">{t("title")}</h1>
          <div className="w-10 h-px bg-[#A8894A] mx-auto mb-4" />
          <p className="text-[#6B6867] text-sm">{t("subtitle")}</p>
        </div>

        <div className="space-y-4">
          {sections.map(({ key, emoji }) => (
            <div key={key} className="border border-[#E8E5E0] p-8 bg-white hover:border-[#1B3A5C]/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{emoji}</span>
                <h2 className="text-base font-medium tracking-wide text-[#1B3A5C]">
                  {t(`${key}.title`)}
                </h2>
              </div>
              <p className="text-[#6B6867] leading-relaxed text-sm">{t(`${key}.text`)}</p>
            </div>
          ))}
        </div>

        {/* Spectre des couleurs */}
        <div className="mt-12 p-8 border border-[#E8E5E0] bg-white">
          <h2 className="text-base font-medium text-center text-[#1B3A5C] tracking-wide mb-8">
            Le spectre des couleurs
          </h2>
          <div className="flex justify-center gap-5 flex-wrap">
            {[
              { label: "Bleu", hex: "#3B82F6" },
              { label: "Rose", hex: "#F472B6" },
              { label: "Jaune", hex: "#FBBF24" },
              { label: "Vert", hex: "#10B981" },
              { label: "Orange", hex: "#FB923C" },
              { label: "Violet", hex: "#8B5CF6" },
              { label: "Blanc", hex: "#D1D5DB" },
              { label: "Noir", hex: "#374151" },
            ].map(({ label, hex }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-[#E8E5E0] shadow-sm"
                  style={{ backgroundColor: hex }} />
                <span className="text-[#6B6867] text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
