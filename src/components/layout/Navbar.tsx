"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Gem } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/catalogue`, label: t("catalogue") },
    { href: `/${locale}/sapphire`, label: t("sapphire") },
    { href: `/${locale}/expertise`, label: t("expertise") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const otherLocale = locale === "fr" ? "en" : "fr";
  const switchHref = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <Gem className="w-6 h-6 text-[#C4A35A] group-hover:rotate-12 transition-transform" />
            <span className="text-white font-semibold tracking-widest text-sm uppercase">
              Ava Sapphire
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors",
                  pathname === link.href
                    ? "text-[#C4A35A]"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/rdv`}
              className="ml-2 bg-[#C4A35A] text-black px-4 py-2 text-sm font-semibold rounded hover:bg-[#d4b36a] transition-colors"
            >
              {t("rdv")}
            </Link>
            <Link
              href={switchHref}
              className="text-xs text-gray-400 hover:text-white border border-white/20 px-2 py-1 rounded transition-colors"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm text-gray-300 hover:text-white border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/rdv`}
            onClick={() => setIsOpen(false)}
            className="block mt-4 bg-[#C4A35A] text-black px-4 py-2 text-sm font-semibold rounded text-center"
          >
            {t("rdv")}
          </Link>
          <Link
            href={switchHref}
            onClick={() => setIsOpen(false)}
            className="block mt-2 text-center text-xs text-gray-400"
          >
            Switch to {otherLocale.toUpperCase()}
          </Link>
        </div>
      )}
    </nav>
  );
}
