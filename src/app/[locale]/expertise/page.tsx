import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Search, TrendingUp, Award } from "lucide-react";

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ExpertiseContent locale={locale} />;
}

function ExpertiseContent({ locale }: { locale: string }) {
  const t = useTranslations("expertise");

  const services = [
    { key: "identification", Icon: Search },
    { key: "valuation", Icon: TrendingUp },
    { key: "certificate", Icon: Award },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-wider mb-3">{t("title")}</h1>
          <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-6">{t("subtitle")}</p>
          <p className="text-gray-300 max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map(({ key, Icon }) => (
            <div
              key={key}
              className="text-center p-8 border border-white/10 hover:border-[#C4A35A]/50 transition-colors rounded"
            >
              <Icon className="w-8 h-8 text-[#C4A35A] mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">
                {t(`services.${key}.title`)}
              </h3>
              <p className="text-gray-400 text-sm">{t(`services.${key}.desc`)}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="border border-white/10 p-8 rounded mb-10">
          <h2 className="text-xl font-light text-[#C4A35A] mb-6">Comment se déroule une expertise ?</h2>
          <ol className="space-y-4">
            {[
              "Prise de rendez-vous par formulaire ou téléphone",
              "Examen de la pierre par nos gemmologues en laboratoire",
              "Analyse spectroscopique et microscopique",
              "Rédaction du rapport et remise du certificat",
              "Entretien de restitution (présentiel ou visio)",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-300">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C4A35A]/20 text-[#C4A35A] text-xs flex items-center justify-center font-semibold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/rdv`}
            className="inline-flex items-center gap-2 bg-[#C4A35A] text-black px-8 py-3 font-semibold hover:bg-[#d4b36a] transition-colors"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
