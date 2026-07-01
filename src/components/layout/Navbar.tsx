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
    { href: `/${locale}/catalogue`, label: t("catalogue") },
    { href: `/${locale}/sapphire`, label: t("sapphire") },
    { href: `/${locale}/expertise`, label: t("expertise") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const otherLocale = locale === "fr" ? "en" : "fr";
  const switchHref = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FAFAF8]/95 backdrop-blur border-b border-[#E8E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group justify-self-start">
            <Gem className="w-5 h-5 text-[#A8894A] group-hover:rotate-12 transition-transform" />
            <span className="text-[#1C1C1E] font-medium tracking-[0.2em] text-sm uppercase">
              Ava Sapphire
            </span>
          </Link>

          {/* Desktop nav - centered */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs tracking-[0.15em] uppercase transition-colors",
                  pathname === link.href
                    ? "text-[#1B3A5C] font-medium"
                    : "text-[#6B6867] hover:text-[#1C1C1E]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4 justify-self-end">
            <Link
              href={`/${locale}/rdv`}
              className="text-xs tracking-[0.15em] uppercase text-[#6B6867] hover:text-[#1C1C1E] transition-colors"
            >
              {t("rdv")}
            </Link>
            <Link
              href={switchHref}
              className="text-xs text-[#6B6867] hover:text-[#1C1C1E] border border-[#E8E5E0] px-2 py-1 transition-colors"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#1C1C1E] justify-self-end col-start-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#E8E5E0] px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-xs tracking-[0.15em] uppercase text-[#6B6867] hover:text-[#1C1C1E] border-b border-[#E8E5E0]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/rdv`}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-xs tracking-[0.15em] uppercase text-[#6B6867] hover:text-[#1C1C1E] border-b border-[#E8E5E0]"
          >
            {t("rdv")}
          </Link>
          <Link
            href={switchHref}
            onClick={() => setIsOpen(false)}
            className="block mt-3 text-center text-xs text-[#6B6867]"
          >
            Switch to {otherLocale.toUpperCase()}
          </Link>
        </div>
      )}
    </nav>
  );
}
