"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { moduleIcons } from "@/components/icons";
import { Menu, X } from "lucide-react";

const navigation = [
  ["Home", "/", moduleIcons.home],
  ["About", "/about", moduleIcons.about],
  ["Projects", "/projects", moduleIcons.projects],
  ["Skills", "/skills", moduleIcons.skills],
  ["Journey", "/journey", moduleIcons.journey],
  ["Achievements", "/achievements", moduleIcons.achievements],
  ["ePortfolio", "/eportfolio", moduleIcons.eportfolio],
  ["Contact", "/contact", moduleIcons.contact],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07090e]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          aria-label="Samson Limanikuki - Home"
        >
          <div className="relative flex size-9 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sm font-bold tracking-wider text-sky-400 transition-colors group-hover:border-sky-400 group-hover:bg-sky-500/20">
            SL
            <span className="absolute -top-0.5 -right-0.5 flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white transition-colors group-hover:text-sky-300">
              Samson Limanikuki
            </span>
            <span className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map(([label, href, Icon]) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-white/[0.08] text-sky-400 shadow-sm shadow-sky-500/10"
                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400`}
              >
                <Icon size={14} strokeWidth={1.8} className={isActive ? "text-sky-400" : "text-slate-400"} aria-hidden="true" />
                {label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-sky-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/[0.08] bg-[#07090e]/95 px-6 py-4 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
            {navigation.map(([label, href, Icon]) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.8} className={isActive ? "text-sky-400" : "text-slate-400"} aria-hidden="true" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
