import Link from "next/link";
import { Gem, LayoutDashboard, Package, Mail, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#111] border-r border-white/10 flex flex-col fixed h-full">
        <div className="p-5 border-b border-white/10 flex items-center gap-2">
          <Gem className="w-5 h-5 text-[#C4A35A]" />
          <span className="text-white font-semibold text-sm tracking-widest uppercase">
            Admin
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { href: "/admin/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
            { href: "/admin/products", icon: Package, label: "Produits" },
            { href: "/admin/newsletter", icon: Mail, label: "Newsletter" },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-red-400 w-full rounded transition-colors"
            >
              <LogOut className="w-4 h-4" /> Déconnexion
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-60 flex-1 p-8 text-white">{children}</main>
    </div>
  );
}
