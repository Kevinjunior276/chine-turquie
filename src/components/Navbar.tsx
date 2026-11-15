"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CONTACT_INFO } from "@/data/countries";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]">
      <div className="h-20 lg:h-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md shrink-0 ring-2 ring-red-600/30 group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.png"
              alt="Logo Express Chine Turquie"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs xs:text-sm sm:text-base font-black text-red-600 uppercase tracking-tight truncate max-w-[170px] sm:max-w-none">
              EXPRESS CHINE &amp; TURQUIE
            </span>
            <span className="hidden sm:block text-[11px] text-slate-500 font-semibold tracking-wide">
              Sourcing &amp; Logistique Globale vers l&apos;Afrique
            </span>
          </div>
        </Link>

        {/* Desktop Nav: well spaced and centered */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[14px] xl:text-[15px] rounded-xl transition-all ${
                  isActive
                    ? "text-red-600 font-black bg-red-50/80"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-50 font-bold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Desktop has Facebook + Community, Mobile has WhatsApp icon + Prominent Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Desktop Facebook Button */}
          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Page Facebook Officielle"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 transition-all font-bold text-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="hidden md:inline">Facebook</span>
          </a>

          {/* Desktop WhatsApp Community Button */}
          <a
            className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl transition-all text-xs sm:text-sm font-extrabold shadow-md shadow-red-600/25"
            href={CONTACT_INFO.whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300" />
            </span>
            <span className="material-symbols-outlined text-[18px]">forum</span>
            <span className="hidden xl:inline">Communauté WhatsApp</span>
          </a>

          {/* Mobile Quick WhatsApp Icon */}
          <a
            href={CONTACT_INFO.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
            aria-label="WhatsApp Direct"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </a>

          {/* PROMINENT MOBILE HAMBURGER BUTTON (100% VISIBLE & ROBUST SVG) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center shadow-lg active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 shadow-2xl space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-extrabold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-slate-400">chevron_right</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-blue-50 text-blue-700 text-sm font-bold border border-blue-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Suivre notre page Facebook</span>
            </a>

            <a
              href={CONTACT_INFO.whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 text-white text-sm font-extrabold shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">groups</span>
              <span>Intégrer le Groupe WhatsApp</span>
            </a>

            <div className="p-3.5 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-100">
              <div>
                <p className="text-[11px] text-slate-500 font-semibold">Directeur Trade</p>
                <p className="text-xs font-bold text-slate-900">{CONTACT_INFO.directorName}</p>
              </div>
              <a
                href={CONTACT_INFO.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-bold text-xs hover:underline"
              >
                Discuter en direct
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
