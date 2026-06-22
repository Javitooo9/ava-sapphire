import { Package, Users, Mail } from "lucide-react";
import { DEMO_PRODUCTS } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-light tracking-wider mb-8">Tableau de bord</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {[
          { label: "Produits actifs", value: DEMO_PRODUCTS.length, icon: Package, color: "text-blue-400" },
          { label: "Abonnés newsletter", value: "—", icon: Users, color: "text-green-400" },
          { label: "Messages reçus", value: "—", icon: Mail, color: "text-[#C4A35A]" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="border border-white/10 p-6 rounded bg-white/2">
            <Icon className={`w-5 h-5 ${color} mb-3`} />
            <p className="text-3xl font-light text-white mb-1">{value}</p>
            <p className="text-gray-400 text-sm">{label}</p>
          </div>
        ))}
      </div>

      <div className="border border-white/10 p-6 rounded">
        <h2 className="text-lg font-light mb-4 text-[#C4A35A]">Derniers produits</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2 text-gray-400 font-normal">Nom</th>
              <th className="text-left py-2 text-gray-400 font-normal">Couleur</th>
              <th className="text-left py-2 text-gray-400 font-normal">Poids</th>
              <th className="text-left py-2 text-gray-400 font-normal">Origine</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_PRODUCTS.map((p) => (
              <tr key={p.id} className="border-b border-white/5 hover:bg-white/2">
                <td className="py-3 text-white">{p.name}</td>
                <td className="py-3 text-gray-400 capitalize">{p.color}</td>
                <td className="py-3 text-gray-400">{p.weight_ct} ct</td>
                <td className="py-3 text-gray-400">{p.origin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
