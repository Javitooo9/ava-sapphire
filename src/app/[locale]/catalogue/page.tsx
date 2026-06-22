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
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Gem className="w-8 h-8 text-[#C4A35A] mx-auto mb-4" />
          <h1 className="text-4xl font-light tracking-wider mb-3">{t("title")}</h1>
          <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-4" />
          <p className="text-gray-400">{t("subtitle")}</p>
        </div>

        {/* Color filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => setActiveColor(color)}
              className={cn(
                "px-4 py-2 text-sm border rounded-full transition-all",
                activeColor === color
                  ? "border-[#C4A35A] text-[#C4A35A] bg-[#C4A35A]/10"
                  : "border-white/20 text-gray-400 hover:border-white/40"
              )}
            >
              {color === "all" ? (
                t("all")
              ) : (
                <span className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full inline-block border border-white/20"
                    style={{ backgroundColor: COLOR_MAP[color]?.hex }}
                  />
                  {t(`colors.${color}`)}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">{t("noProducts")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/${locale}/catalogue/${product.id}`}
                className="group border border-white/10 hover:border-[#C4A35A]/50 transition-all bg-white/2 rounded"
              >
                {/* Image placeholder */}
                <div className="aspect-square bg-white/5 flex items-center justify-center relative overflow-hidden">
                  <div
                    className="w-24 h-24 rounded-full opacity-60 blur-xl"
                    style={{ backgroundColor: COLOR_MAP[product.color]?.hex }}
                  />
                  <Gem
                    className="absolute w-12 h-12 opacity-40"
                    style={{ color: COLOR_MAP[product.color]?.hex }}
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-medium group-hover:text-[#C4A35A] transition-colors">
                      {product.name}
                    </h3>
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-1 border border-white/20"
                      style={{ backgroundColor: COLOR_MAP[product.color]?.hex }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                    <span className="border border-white/10 px-2 py-1 rounded">
                      {product.weight_ct} ct
                    </span>
                    <span className="border border-white/10 px-2 py-1 rounded">
                      {product.origin}
                    </span>
                    <span className="border border-white/10 px-2 py-1 rounded">
                      {product.cut}
                    </span>
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
