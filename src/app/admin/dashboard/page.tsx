import { Package, Users, Mail } from "lucide-react";
import { DEMO_PRODUCTS } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-light tracking-wider text-[#1C1C1E] mb-8">Tableau de bord</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { label: "Produits actifs", value: DEMO_PRODUCTS.length, icon: Package, color: "text-[#1B3A5C]" },
          { label: "Abonnés newsletter", value: "—", icon: Users, color: "text-[#A8894A]" },
          { label: "Messages reçus", value: "—", icon: Mail, color: "text-[#1B3A5C]" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="border border-[#E8E5E0] p-6 bg-white">
            <Icon className={`w-5 h-5 ${color} mb-3`} />
            <p className="text-3xl font-light text-[#1C1C1E] mb-1">{value}</p>
            <p className="text-[#6B6867] text-sm">{label}</p>
          </div>
        ))}
      </div>

      <div className="border border-[#E8E5E0] bg-white">
        <div className="px-6 py-4 border-b border-[#E8E5E0]">
          <h2 className="text-sm font-medium text-[#1B3A5C] tracking-wide">Derniers produits</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-[#F2F0EB]">
            <tr>
              <th className="text-left px-6 py-3 text-xs text-[#6B6867] font-medium uppercase tracking-widest">Nom</th>
              <th className="text-left px-6 py-3 text-xs text-[#6B6867] font-medium uppercase tracking-widest">Couleur</th>
              <th className="text-left px-6 py-3 text-xs text-[#6B6867] font-medium uppercase tracking-widest">Poids</th>
              <th className="text-left px-6 py-3 text-xs text-[#6B6867] font-medium uppercase tracking-widest">Origine</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_PRODUCTS.map((p) => (
              <tr key={p.id} className="border-t border-[#E8E5E0] hover:bg-[#F2F0EB]/50">
                <td className="px-6 py-3 text-[#1C1C1E] font-medium text-sm">{p.name}</td>
                <td className="px-6 py-3 text-[#6B6867] capitalize text-sm">{p.color}</td>
                <td className="px-6 py-3 text-[#6B6867] text-sm">{p.weight_ct} ct</td>
                <td className="px-6 py-3 text-[#6B6867] text-sm">{p.origin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
