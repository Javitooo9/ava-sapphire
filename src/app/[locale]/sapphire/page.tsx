import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Gem } from "lucide-react";

export default async function SapphirePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
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
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Gem className="w-8 h-8 text-[#C4A35A] mx-auto mb-4" />
          <h1 className="text-4xl font-light tracking-wider mb-3">{t("title")}</h1>
          <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-4" />
          <p className="text-gray-400">{t("subtitle")}</p>
        </div>

        <div className="space-y-8">
          {sections.map(({ key, emoji }) => (
            <div
              key={key}
              className="border border-white/10 p-8 rounded hover:border-[#C4A35A]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{emoji}</span>
                <h2 className="text-xl font-light tracking-wide text-[#C4A35A]">
                  {t(`${key}.title`)}
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">{t(`${key}.text`)}</p>
            </div>
          ))}
        </div>

        {/* Color spectrum visual */}
        <div className="mt-16 p-8 border border-white/10 rounded">
          <h2 className="text-xl font-light text-center mb-8 text-[#C4A35A]">
            Le spectre des couleurs
          </h2>
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { label: "Bleu", hex: "#3B82F6" },
              { label: "Rose", hex: "#F472B6" },
              { label: "Jaune", hex: "#FBBF24" },
              { label: "Vert", hex: "#10B981" },
              { label: "Orange", hex: "#FB923C" },
              { label: "Violet", hex: "#8B5CF6" },
              { label: "Blanc", hex: "#F3F4F6" },
              { label: "Noir", hex: "#4B5563" },
            ].map(({ label, hex }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 rounded-full border border-white/10"
                  style={{ backgroundColor: hex }}
                />
                <span className="text-gray-400 text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
