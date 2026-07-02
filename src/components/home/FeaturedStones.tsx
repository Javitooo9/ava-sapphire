"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CARDS = [
  {
    key: "blue",
    image: "/images/sapphire-blue.jpg",
    bg: "#EEF2FF",
    origin: "Sri Lanka · Kashmir",
    name: "Saphir Bleu",
    desc: "La couleur royale par excellence. Du bleu ciel de Ceylan à l'intense velours du Cachemire.",
    accent: "#2B5CE6",
    overlayFrom: "#EEF2FF",
  },
  {
    key: "pink",
    image: "/images/sapphire-rose.jpg",
    bg: "#FFF0F5",
    origin: "Madagascar · Myanmar",
    name: "Saphir Rose",
    desc: "Raffinement et féminité. Du rose poudré au padparadscha ardent, chaque pierre est unique.",
    accent: "#C2185B",
    overlayFrom: "#FFF0F5",
  },
];

function StoneCard({ card, locale }: { card: (typeof CARDS)[0]; locale: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/${locale}/catalogue`}
      className="group relative overflow-hidden flex-shrink-0 aspect-[3/4] flex flex-col justify-end cursor-pointer"
      style={{
        backgroundColor: card.bg,
        width: "clamp(280px, 85vw, 480px)",
      }}
    >
      {/* Photo — mix-blend-mode:multiply efface le fond blanc du JPG */}
      {!imgError ? (
        <div className="absolute inset-0 flex items-center justify-center p-8 pb-32">
          <div
            className="relative w-full h-full group-hover:scale-105 transition-transform duration-700"
            style={{ mixBlendMode: "multiply" }}
          >
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="(max-width: 768px) 85vw, 45vw"
              className="object-contain"
              onError={() => setImgError(true)}
            />
          </div>
        </div>
      ) : (
        /* Fallback si pas d'image */
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-36 h-36 rounded-full blur-2xl opacity-30"
          style={{ backgroundColor: card.accent }}
        />
      )}

      {/* Dégradé texte bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${card.overlayFrom} 0%, ${card.overlayFrom}ee 40%, transparent 100%)`,
        }}
      />

      {/* Texte */}
      <div className="relative z-10 p-8">
        <p className="text-xs tracking-[0.35em] uppercase mb-1.5 font-medium" style={{ color: card.accent }}>
          {card.origin}
        </p>
        <h3 className="text-[#1C1C1E] text-2xl md:text-3xl font-light tracking-wide mb-2">
          {card.name}
        </h3>
        <p className="text-[#6B6867] text-sm leading-relaxed mb-5 max-w-xs">{card.desc}</p>
        <span
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium group-hover:gap-3 transition-all duration-300"
          style={{ color: card.accent }}
        >
          Découvrir <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Bordure hover */}
      <div
        className="absolute inset-0 pointer-events-none border border-transparent transition-colors duration-500"
        style={{ borderColor: `${card.accent}00` }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = `${card.accent}44`)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = `${card.accent}00`)}
      />
    </Link>
  );
}

export function FeaturedStones({ locale }: { locale: string }) {
  return (
    <section className="py-16 bg-[#F7F3EE] overflow-hidden">
      <div className="text-center mb-10 px-4">
        <p className="text-[#A8894A] text-xs tracking-[0.4em] uppercase mb-3 font-medium">
          Nos pierres phares
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-wider text-[#1C1C1E]">
          Deux pierres d&apos;exception
        </h2>
        <div className="w-10 h-px bg-[#A8894A] mx-auto mt-4" />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#F7F3EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#F7F3EE] to-transparent z-10 pointer-events-none" />

        <div className="reel-track flex gap-6 px-6">
          {[...CARDS, ...CARDS, ...CARDS].map((card, i) => (
            <StoneCard key={`${card.key}-${i}`} card={card} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
