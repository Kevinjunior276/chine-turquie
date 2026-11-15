"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, MessageSquare, Check, ShieldCheck, Box, Truck, MapPin } from "lucide-react";
import { Product } from "@/data/products";
import { CONTACT_INFO } from "@/data/countries";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 bg-slate-900">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="inline-block bg-[#ac0015] text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md mb-2">
                {product.categoryLabel} • {product.origin}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
                {product.title}
              </h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Présentation détaillée
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {product.fullDescription || product.description}
              </p>
            </div>

            {/* Features Pill List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Avantages clés &amp; Contrôles qualité
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs Table */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Spécifications techniques d&apos;approvisionnement
              </h4>
              <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
                {product.specs &&
                  Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between p-3 bg-white hover:bg-slate-50/50">
                      <span className="text-slate-500 font-medium">{key}</span>
                      <span className="text-slate-900 font-bold text-right">{String(val)}</span>
                    </div>
                  ))}
                <div className="flex justify-between p-3 bg-slate-50 font-medium">
                  <span className="text-slate-500">Conditionnement</span>
                  <span className="text-slate-900 font-bold text-right">
                    {product.packaging || "Carton renforcé export / Caisse bois maritime"}
                  </span>
                </div>
              </div>
            </div>

            {/* Sourcing & Shipping reassurance */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 space-y-1">
                <p className="font-bold">Politique de transparence tarifaire</p>
                <p className="text-amber-800/90 leading-relaxed">
                  Tous nos devis incluent le prix négocié sortie usine, le contrôle qualité sur place, et les options de fret aérien ou maritime jusqu&apos;à votre port ou aéroport en Afrique.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Contact direct usine
            </span>
            <span className="text-sm font-bold text-slate-800">
              {CONTACT_INFO.directorName} • Directeur Trade
            </span>
          </div>

          <a
            href={CONTACT_INFO.getWhatsappUrl(
              `Bonjour M. FOGENG MARIUS, je suis intéressé(e) par le produit "${product.title}" (${product.origin}). Pourriez-vous me transmettre la cotation usine et les options de fret pour ma destination ?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Demander mon devis sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
