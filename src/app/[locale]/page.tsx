import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { ArrowRight, Gem, Mountain, Scissors } from "lucide-react";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
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
      <section className="relative min-h-[88vh] flex items-center justify-center bg-[#F2F0EB]">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #954C2E22 0%, transparent 60%), radial-gradient(circle at 80% 50%, #A8894A22 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#A8894A] text-xs tracking-[0.4em] uppercase mb-6 font-medium">
            Maison de Saphirs
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.15em] text-[#1C1C1E] uppercase mb-5">
            {t("title")}
          </h1>
          <div className="w-12 h-px bg-[#A8894A] mx-auto mb-6" />
          <p className="text-[#6B6867] text-lg tracking-wide mb-10 max-w-md mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/catalogue`}
              className="bg-[#954C2E] text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#7A3D25] transition-colors flex items-center justify-center gap-2">
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={`/${locale}/rdv`}
              className="border border-[#954C2E] text-[#954C2E] px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#954C2E] hover:text-white transition-colors">
              {t("cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Notre histoire</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-[#1C1C1E]">
              {ta("title")}
            </h2>
            <div className="w-10 h-px bg-[#A8894A] mx-auto mt-4" />
          </div>
          <p className="text-[#6B6867] text-center max-w-3xl mx-auto text-base leading-relaxed mb-16">
            {ta("description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E5E0]">
            {[
              { icon: Mountain, label: ta("mining"), desc: "Extraction directe dans les pays producteurs : Sri Lanka, Madagascar, Birmanie." },
              { icon: Scissors, label: ta("cutting"), desc: "Taille artisanale par des maîtres lapidaires pour révéler la beauté de chaque pierre." },
              { icon: Gem, label: ta("expertise"), desc: "Certification par les grands laboratoires : GRS, GIA, Gübelin." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center p-10 bg-[#FAFAF8] hover:bg-[#F2F0EB] transition-colors">
                <Icon className="w-6 h-6 text-[#A8894A] mx-auto mb-5" />
                <h3 className="text-[#1C1C1E] font-medium text-sm tracking-widest uppercase mb-3">{label}</h3>
                <p className="text-[#6B6867] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos terrain */}
      <section className="py-24 px-4 bg-[#F2F0EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Terrain</p>
            <h2 className="text-3xl font-light tracking-wider text-[#1C1C1E]">Sur le terrain</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Mining", "Cutting", "Stones"].map((label) => (
              <div key={label}
                className="aspect-square bg-[#E8E5E0] flex items-center justify-center text-[#6B6867] text-xs tracking-widest uppercase">
                📷 Photo {label}
              </div>
            ))}
          </div>
          <p className="text-center text-[#A8894A]/60 text-xs mt-4">
            Remplacer par vos photos dans /public/images/
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#954C2E] text-center">
        <Gem className="w-6 h-6 text-[#A8894A] mx-auto mb-5" />
        <h2 className="text-3xl font-light text-white tracking-wider mb-4">
          Découvrez notre collection
        </h2>
        <p className="text-white mb-10 max-w-md mx-auto text-sm leading-relaxed">
          Des saphirs sélectionnés à la source, classés par couleur, disponibles sur demande.
        </p>
        <Link href={`/${locale}/catalogue`}
          className="inline-flex items-center gap-2 bg-[#A8894A] text-white px-8 py-3 text-sm font-medium hover:bg-[#b8995a] transition-colors">
          Voir le catalogue <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
