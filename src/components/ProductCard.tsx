"use client";

import Image from "next/image";
import { MessageSquare, ArrowRight, Plane, Ship, CheckCircle2 } from "lucide-react";
import { Product } from "@/data/products";
import { CONTACT_INFO } from "@/data/countries";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const isAir = (product.shippingType || product.transitTime || "").toLowerCase().includes("air");

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1.5">
      {/* Product Image & Badges */}
      <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="bg-[#ac0015] text-white px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Bottom Hub Location */}
        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>{product.origin}</span>
        </div>
      </div>

      {/* Body & Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-[#ac0015] transition-colors line-clamp-1 mb-2">
            {product.title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-3">
            {product.description}
          </p>

          {/* Quick Features List */}
          <ul className="space-y-1 mb-3">
            {product.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Meta & CTA Buttons */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              {isAir ? (
                <Plane className="w-3.5 h-3.5 text-blue-600" />
              ) : (
                <Ship className="w-3.5 h-3.5 text-indigo-600" />
              )}
              {product.shippingType || product.transitTime}
            </span>
            <span className="text-[#ac0015] font-bold">Prix direct usine</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors text-center"
            >
              Fiche technique
            </button>
            <a
              href={CONTACT_INFO.getWhatsappUrl(
                `Bonjour M. FOGENG MARIUS, je souhaite obtenir un devis et les modalités de livraison pour le produit : ${product.title} (${product.origin}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Demander
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
