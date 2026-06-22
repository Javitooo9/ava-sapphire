import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { ArrowRight, Gem, Mountain, Scissors } from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations("hero");
  const ta = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1020] to-[#0a0a1a]" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 40%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 70% 60%, #8B5CF6 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Gem className="w-12 h-12 text-[#C4A35A]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] text-white uppercase mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl tracking-wide mb-10 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/catalogue`}
              className="bg-[#C4A35A] text-black px-8 py-3 font-semibold hover:bg-[#d4b36a] transition-colors flex items-center justify-center gap-2"
            >
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/rdv`}
              className="border border-white/30 text-white px-8 py-3 hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors"
            >
              {t("cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-[#111] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-4">
            {ta("title")}
          </h2>
          <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-12" />
          <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-16">
            {ta("description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Mountain, label: ta("mining"), desc: "Extraction directe dans les pays producteurs : Sri Lanka, Madagascar, Birmanie." },
              { icon: Scissors, label: ta("cutting"), desc: "Taille artisanale par des maîtres lapidaires pour révéler la beauté de chaque pierre." },
              { icon: Gem, label: ta("expertise"), desc: "Certification par les grands laboratoires : GRS, GIA, Gübelin." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center p-8 border border-white/10 hover:border-[#C4A35A]/50 transition-colors">
                <Icon className="w-8 h-8 text-[#C4A35A] mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-3">{label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo terrain placeholder */}
      <section className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light tracking-wider text-white text-center mb-12">
            Sur le terrain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Mining", "Cutting", "Stones"].map((label) => (
              <div
                key={label}
                className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 text-sm tracking-wider"
              >
                📷 Photo {label}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Remplacer les placeholders par vos photos dans /public/images/
          </p>
        </div>
      </section>

      {/* CTA catalogue */}
      <section className="py-20 px-4 bg-[#0a0a0a] text-center">
        <Gem className="w-8 h-8 text-[#C4A35A] mx-auto mb-4" />
        <h2 className="text-3xl font-light text-white tracking-wider mb-4">
          Découvrez notre collection
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Des saphirs sélectionnés à la source, classés par couleur, disponibles sur demande.
        </p>
        <Link
          href={`/${locale}/catalogue`}
          className="inline-flex items-center gap-2 bg-[#C4A35A] text-black px-8 py-3 font-semibold hover:bg-[#d4b36a] transition-colors"
        >
          Voir le catalogue <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
