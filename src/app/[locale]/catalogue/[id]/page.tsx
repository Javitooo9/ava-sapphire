import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Gem, Mail } from "lucide-react";
import { DEMO_PRODUCTS, COLOR_MAP } from "@/lib/utils";

export default async function ProductPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const product = DEMO_PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const colorInfo = COLOR_MAP[product.color];

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href={`/${locale}/catalogue`}
          className="inline-flex items-center gap-2 text-[#6B6867] hover:text-[#1C1C1E] mb-10 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour au catalogue
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Image */}
          <div className="aspect-square bg-[#F2F0EB] flex items-center justify-center relative overflow-hidden border border-[#E8E5E0]">
            <div className="w-48 h-48 rounded-full opacity-20 blur-3xl absolute"
              style={{ backgroundColor: colorInfo?.hex }} />
            <Gem className="w-20 h-20 opacity-40 relative z-10"
              style={{ color: colorInfo?.hex }} />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-[#A8894A] text-xs tracking-[0.3em] uppercase mb-3 font-medium">
              Saphir {colorInfo?.label}
            </p>
            <h1 className="text-3xl font-light tracking-wide text-[#1C1C1E] mb-6">{product.name}</h1>
            <div className="w-10 h-px bg-[#E8E5E0] mb-6" />
            <p className="text-[#6B6867] leading-relaxed mb-8 text-sm">{product.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-px bg-[#E8E5E0] mb-8">
              {[
                { label: "Poids", value: `${product.weight_ct} ct` },
                { label: "Origine", value: product.origin },
                { label: "Taille", value: product.cut },
                { label: "Pureté", value: product.clarity },
                ...(product.certificate ? [{ label: "Certificat", value: product.certificate }] : []),
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#FAFAF8] p-4">
                  <p className="text-[#A8894A] text-xs uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-[#1C1C1E] text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <Link href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#1B3A5C] text-white px-8 py-3 text-sm font-medium hover:bg-[#243f63] transition-colors justify-center">
              <Mail className="w-4 h-4" /> Demander un prix
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
