import Link from "next/link";
import { Gem, LayoutDashboard, Package, Mail, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F2F0EB] flex">
      {/* Sidebar */}
      <aside className="w-56 bg-[#954C2E] flex flex-col fixed h-full">
        <div className="p-5 border-b border-white/10 flex items-center gap-2">
          <Gem className="w-4 h-4 text-[#A8894A]" />
          <span className="text-white font-medium text-xs tracking-[0.2em] uppercase">Admin</span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { href: "/admin/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
            { href: "/admin/products", icon: Package, label: "Produits" },
            { href: "/admin/newsletter", icon: Mail, label: "Newsletter" },
          ].map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-blue-200 hover:text-white hover:bg-white/10 transition-colors">
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action="/api/admin/logout" method="POST">
            <button type="submit"
              className="flex items-center gap-3 px-3 py-2 text-sm text-blue-300 hover:text-red-300 w-full transition-colors">
              <LogOut className="w-4 h-4" /> Déconnexion
            </button>
          </form>
        </div>
      </aside>

      <main className="ml-56 flex-1 p-8 text-[#1C1C1E]">{children}</main>
    </div>
  );
}
