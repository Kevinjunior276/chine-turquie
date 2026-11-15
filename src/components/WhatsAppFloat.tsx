"use client";

import { useState } from "react";
import { CONTACT_INFO } from "@/data/countries";

export default function WhatsAppFloat() {
  const [bubbleClosed, setBubbleClosed] = useState(false);

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Speech bubble */}
      {!bubbleClosed && (
        <div className="relative hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Besoin d&apos;un devis ou produit ? Écrivez-nous !</span>
          <button
            type="button"
            onClick={() => setBubbleClosed(true)}
            className="text-slate-400 hover:text-slate-600 ml-1 text-sm leading-none"
          >
            ×
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-slate-100 rotate-45" />
        </div>
      )}

      {/* Main Floating Button */}
      <a
        className="inline-flex items-center gap-3 bg-emerald-600 text-white hover:bg-emerald-500 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full shadow-[0px_10px_25px_-5px_rgba(5,150,105,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 group"
        href={CONTACT_INFO.getWhatsappUrl()}
        rel="noopener noreferrer"
        target="_blank"
        title="Discuter directement sur WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="text-sm font-extrabold hidden sm:inline tracking-wide">
          Directeur Trade sur WhatsApp
        </span>
        <span className="text-xs font-bold sm:hidden">WhatsApp</span>
      </a>
    </aside>
  );
}
