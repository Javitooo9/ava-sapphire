import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Gem, Mail } from "lucide-react";
import { DEMO_PRODUCTS, COLOR_MAP } from "@/lib/utils";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const product = DEMO_PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const colorInfo = COLOR_MAP[product.color];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          href={`/${locale}/catalogue`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Retour au catalogue
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square bg-white/5 border border-white/10 rounded flex items-center justify-center relative overflow-hidden">
            <div
              className="w-48 h-48 rounded-full opacity-50 blur-3xl absolute"
              style={{ backgroundColor: colorInfo?.hex }}
            />
            <Gem
              className="w-24 h-24 opacity-60 relative z-10"
              style={{ color: colorInfo?.hex }}
            />
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="w-4 h-4 rounded-full border border-white/20"
                style={{ backgroundColor: colorInfo?.hex }}
              />
              <span className="text-gray-400 text-sm uppercase tracking-widest">
                Saphir {colorInfo?.label}
              </span>
            </div>
            <h1 className="text-3xl font-light tracking-wide mb-6">{product.name}</h1>

            <p className="text-gray-300 leading-relaxed mb-8">{product.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Poids", value: `${product.weight_ct} ct` },
                { label: "Origine", value: product.origin },
                { label: "Taille", value: product.cut },
                { label: "Pureté", value: product.clarity },
                ...(product.certificate
                  ? [{ label: "Certificat", value: product.certificate }]
                  : []),
              ].map(({ label, value }) => (
                <div key={label} className="border border-white/10 p-3 rounded">
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#C4A35A] text-black px-8 py-3 font-semibold hover:bg-[#d4b36a] transition-colors w-full justify-center"
            >
              <Mail className="w-4 h-4" /> Demander un prix
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
