import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Search, TrendingUp, Award } from "lucide-react";

export default async function ExpertisePage({ params }: { params: Promise<{ locale: string }> }) {
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
    <div className="min-h-screen bg-[#FAFAF8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Services</p>
          <h1 className="text-4xl font-light tracking-wider text-[#1C1C1E] mb-3">{t("title")}</h1>
          <div className="w-10 h-px bg-[#A8894A] mx-auto mb-4" />
          <p className="text-[#6B6867] mb-4">{t("subtitle")}</p>
          <p className="text-[#6B6867] text-sm max-w-2xl mx-auto leading-relaxed">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E5E0] mb-14">
          {services.map(({ key, Icon }) => (
            <div key={key} className="text-center p-8 bg-white hover:bg-[#F2F0EB] transition-colors">
              <Icon className="w-6 h-6 text-[#A8894A] mx-auto mb-4" />
              <h3 className="text-[#1C1C1E] text-sm font-medium tracking-wide mb-2">
                {t(`services.${key}.title`)}
              </h3>
              <p className="text-[#6B6867] text-xs leading-relaxed">{t(`services.${key}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="border border-[#E8E5E0] p-8 bg-white mb-10">
          <h2 className="text-base font-medium text-[#954C2E] tracking-wide mb-6">
            Comment se déroule une expertise ?
          </h2>
          <ol className="space-y-4">
            {[
              "Prise de rendez-vous par formulaire ou téléphone",
              "Examen de la pierre par nos gemmologues en laboratoire",
              "Analyse spectroscopique et microscopique",
              "Rédaction du rapport et remise du certificat",
              "Entretien de restitution (présentiel ou visio)",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4 text-[#6B6867] text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#954C2E]/8 text-[#954C2E] text-xs flex items-center justify-center font-medium border border-[#954C2E]/20">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <Link href={`/${locale}/rdv`}
            className="inline-flex items-center gap-2 bg-[#954C2E] text-white px-8 py-3 text-sm font-medium hover:bg-[#7A3D25] transition-colors">
            {t("cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
