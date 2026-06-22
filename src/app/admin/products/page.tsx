import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { DEMO_PRODUCTS, COLOR_MAP } from "@/lib/utils";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-light tracking-wider text-[#1C1C1E]">Produits</h1>
        <Link href="/admin/products/new"
          className="flex items-center gap-2 bg-[#1B3A5C] text-white px-4 py-2 text-sm font-medium hover:bg-[#243f63] transition-colors">
          <Plus className="w-4 h-4" /> Ajouter
        </Link>
      </div>

      <div className="border border-[#E8E5E0] bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#F2F0EB]">
            <tr>
              {["Produit", "Couleur", "Poids", "Origine", "Certificat", "Actions"].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-xs text-[#6B6867] font-medium uppercase tracking-widest">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEMO_PRODUCTS.map((p) => (
              <tr key={p.id} className="border-t border-[#E8E5E0] hover:bg-[#F2F0EB]/50">
                <td className="px-5 py-3 text-[#1C1C1E] font-medium">{p.name}</td>
                <td className="px-5 py-3">
                  <span className="flex items-center gap-2 text-[#6B6867]">
                    <span className="w-3 h-3 rounded-full border border-black/10"
                      style={{ backgroundColor: COLOR_MAP[p.color]?.hex }} />
                    {COLOR_MAP[p.color]?.label}
                  </span>
                </td>
                <td className="px-5 py-3 text-[#6B6867]">{p.weight_ct} ct</td>
                <td className="px-5 py-3 text-[#6B6867]">{p.origin}</td>
                <td className="px-5 py-3 text-[#6B6867]">{p.certificate || "—"}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <button className="text-[#6B6867] hover:text-[#1B3A5C] transition-colors p-1">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="text-[#6B6867] hover:text-red-500 transition-colors p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
