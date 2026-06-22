import Link from "next/link";
import { Plus, Pencil, Trash2, Gem } from "lucide-react";
import { DEMO_PRODUCTS, COLOR_MAP } from "@/lib/utils";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-light tracking-wider">Produits</h1>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 bg-[#C4A35A] text-black px-4 py-2 text-sm font-semibold rounded hover:bg-[#d4b36a] transition-colors"
        >
          <Plus className="w-4 h-4" /> Ajouter un produit
        </Link>
      </div>

      <div className="border border-white/10 rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left px-4 py-3 text-gray-400 font-normal">Produit</th>
              <th className="text-left px-4 py-3 text-gray-400 font-normal">Couleur</th>
              <th className="text-left px-4 py-3 text-gray-400 font-normal">Poids</th>
              <th className="text-left px-4 py-3 text-gray-400 font-normal">Origine</th>
              <th className="text-left px-4 py-3 text-gray-400 font-normal">Certificat</th>
              <th className="text-left px-4 py-3 text-gray-400 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_PRODUCTS.map((p) => (
              <tr key={p.id} className="border-t border-white/10 hover:bg-white/2">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Gem className="w-4 h-4" style={{ color: COLOR_MAP[p.color]?.hex }} />
                    <span className="text-white">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-2 text-gray-400">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLOR_MAP[p.color]?.hex }}
                    />
                    {COLOR_MAP[p.color]?.label}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400">{p.weight_ct} ct</td>
                <td className="px-4 py-3 text-gray-400">{p.origin}</td>
                <td className="px-4 py-3 text-gray-400">{p.certificate || "—"}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-white transition-colors p-1">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-400 transition-colors p-1">
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
