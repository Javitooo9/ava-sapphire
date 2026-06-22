"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Gem } from "lucide-react";
import { DEMO_PRODUCTS, COLOR_MAP } from "@/lib/utils";
import { SapphireColor } from "@/types";
import { cn } from "@/lib/utils";

const COLORS: (SapphireColor | "all")[] = [
  "all", "blue", "pink", "yellow", "white", "green", "orange", "purple", "black",
];

export default function CataloguePage() {
  const t = useTranslations("catalogue");
  const params = useParams();
  const locale = params.locale as string;
  const [activeColor, setActiveColor] = useState<SapphireColor | "all">("all");

  const filtered = activeColor === "all"
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter((p) => p.color === activeColor);

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Collection</p>
          <h1 className="text-4xl font-light tracking-wider text-[#1C1C1E] mb-3">{t("title")}</h1>
          <div className="w-10 h-px bg-[#A8894A] mx-auto mb-4" />
          <p className="text-[#6B6867] text-sm">{t("subtitle")}</p>
        </div>

        {/* Filtres couleur */}
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {COLORS.map((color) => (
            <button key={color} onClick={() => setActiveColor(color)}
              className={cn(
                "px-4 py-2 text-xs tracking-widest uppercase border transition-all",
                activeColor === color
                  ? "border-[#1B3A5C] text-[#1B3A5C] bg-[#1B3A5C]/5 font-medium"
                  : "border-[#E8E5E0] text-[#6B6867] hover:border-[#1B3A5C]/40"
              )}>
              {color === "all" ? t("all") : (
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full inline-block border border-black/10"
                    style={{ backgroundColor: COLOR_MAP[color]?.hex }} />
                  {t(`colors.${color}`)}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grille */}
        {filtered.length === 0 ? (
          <p className="text-center text-[#6B6867]">{t("noProducts")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <Link key={product.id} href={`/${locale}/catalogue/${product.id}`}
                className="group border border-[#E8E5E0] hover:border-[#1B3A5C]/30 hover:shadow-sm transition-all bg-white">
                {/* Image */}
                <div className="aspect-square bg-[#F2F0EB] flex items-center justify-center relative overflow-hidden">
                  <div className="w-28 h-28 rounded-full opacity-20 blur-2xl"
                    style={{ backgroundColor: COLOR_MAP[product.color]?.hex }} />
                  <Gem className="absolute w-10 h-10 opacity-30"
                    style={{ color: COLOR_MAP[product.color]?.hex }} />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[#1C1C1E] text-sm font-medium group-hover:text-[#1B3A5C] transition-colors">
                      {product.name}
                    </h3>
                    <span className="w-3 h-3 rounded-full flex-shrink-0 mt-0.5 border border-black/10"
                      style={{ backgroundColor: COLOR_MAP[product.color]?.hex }} />
                  </div>
                  <p className="text-[#6B6867] text-xs mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-[#6B6867]">
                    <span className="border border-[#E8E5E0] px-2 py-1">{product.weight_ct} ct</span>
                    <span className="border border-[#E8E5E0] px-2 py-1">{product.origin}</span>
                    <span className="border border-[#E8E5E0] px-2 py-1">{product.cut}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
