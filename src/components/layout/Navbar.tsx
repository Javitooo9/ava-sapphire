"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Gem, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const LOCALES: { code: string; flag: string; label: string }[] = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
];

function LanguageDropdown({ locale, pathname }: { locale: string; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs tracking-[0.1em] uppercase text-[#6B6867] hover:text-[#1C1C1E] transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-[#FAFAF8] border border-[#E8E5E0] shadow-sm z-50">
          {LOCALES.map((loc) => {
            const href = pathname.replace(`/${locale}`, `/${loc.code}`);
            return (
              <Link
                key={loc.code}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2.5 px-4 py-2.5 text-xs tracking-[0.1em] uppercase transition-colors",
                  loc.code === locale
                    ? "text-[#954C2E] font-medium bg-[#954C2E]/5"
                    : "text-[#6B6867] hover:text-[#1C1C1E] hover:bg-[#F2F0EB]"
                )}
              >
                <span className="text-base leading-none">{loc.flag}</span>
                {loc.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  const links = [
    { href: `/${locale}/catalogue`, label: t("catalogue") },
    { href: `/${locale}/sapphire`, label: t("sapphire") },
    { href: `/${locale}/expertise`, label: t("expertise") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

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
                    ? "text-[#954C2E] font-medium"
                    : "text-[#6B6867] hover:text-[#1C1C1E]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-5 justify-self-end">
            <Link
              href={`/${locale}/rdv`}
              className="text-xs tracking-[0.15em] uppercase text-[#6B6867] hover:text-[#1C1C1E] transition-colors"
            >
              {t("rdv")}
            </Link>
            <LanguageDropdown locale={locale} pathname={pathname} />
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
          {/* Sélecteur de langue mobile */}
          <div className="mt-3">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[#6B6867] py-2"
            >
              <span className="text-base">{current.flag}</span>
              {current.label}
              <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
            </button>
            {langOpen && (
              <div className="pl-2 border-l border-[#E8E5E0] ml-1">
                {LOCALES.map((loc) => {
                  const href = pathname.replace(`/${locale}`, `/${loc.code}`);
                  return (
                    <Link
                      key={loc.code}
                      href={href}
                      onClick={() => { setIsOpen(false); setLangOpen(false); }}
                      className={cn(
                        "flex items-center gap-2 py-2 text-xs tracking-[0.1em] uppercase",
                        loc.code === locale ? "text-[#954C2E] font-medium" : "text-[#6B6867]"
                      )}
                    >
                      <span className="text-base">{loc.flag}</span>
                      {loc.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
