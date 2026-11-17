"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { CONTACT_INFO } from "@/data/countries";

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchCategory = selectedCategory === "all" || prod.category === selectedCategory;
      const matchOrigin =
        selectedOrigin === "all" ||
        (selectedOrigin === "chine" && prod.origin.toLowerCase().includes("chine")) ||
        (selectedOrigin === "turquie" && prod.origin.toLowerCase().includes("turquie")) ||
        (selectedOrigin === "dubai" && (prod.origin.toLowerCase().includes("dubaï") || prod.origin.toLowerCase().includes("émirats")));
      
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        prod.title.toLowerCase().includes(query) ||
        prod.description.toLowerCase().includes(query) ||
        prod.categoryLabel.toLowerCase().includes(query) ||
        prod.origin.toLowerCase().includes(query);

      return matchCategory && matchOrigin && matchSearch;
    });
  }, [selectedCategory, selectedOrigin, searchQuery]);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* ==========================================
          1. HERO HEADER DU CATALOGUE
          ========================================== */}
      <section className="relative w-full bg-slate-950 text-white overflow-hidden py-16 lg:py-24">
        {/* Background photo & overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 scale-105"
          style={{
            backgroundImage: "url('/images/entrepot-hangar-logistique.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="absolute -top-32 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-red-500">verified</span>
            <span>Catalogue Officiel &amp; Sourcing Direct Fabricant</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Explorez notre catalogue de{" "}
            <span className="text-amber-400 drop-shadow-[0_2px_12px_rgba(251,191,36,0.35)]">
              produits certifiés
            </span>
            .
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Consultez nos opportunités de sourcing en direct des usines à Shenzhen, Yiwu, Istanbul et Dubaï. Contactez-nous pour recevoir la cotation actualisée (prix usine + fret aérien ou maritime vers l'Afrique).
          </p>

          {/* Search bar inside hero */}
          <div className="pt-2 max-w-xl">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-slate-400 text-[22px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un produit, marque, catégorie (ex: TV, Robe, Smartphone, Machine, Salon...)"
                className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-slate-400 hover:text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. FILTRES DYNAMIQUES (Catégories & Origines)
          ========================================== */}
      <section className="w-full bg-white border-b border-slate-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col gap-3">
          {/* Categories Pill bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    active
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30 scale-102"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Secondary Sub-filters: Hub d'origine */}
          <div className="flex items-center justify-between pt-1 flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-semibold">Origine :</span>
              {[
                { id: "all", label: "Tous les pôles" },
                { id: "chine", label: "🇨🇳 Chine" },
                { id: "turquie", label: "🇹🇷 Turquie" },
                { id: "dubai", label: "🇦🇪 Dubaï" },
              ].map((origin) => (
                <button
                  key={origin.id}
                  type="button"
                  onClick={() => setSelectedOrigin(origin.id)}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                    selectedOrigin === origin.id
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {origin.label}
                </button>
              ))}
            </div>

            <span className="text-slate-500 font-semibold">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} disponible{filteredProducts.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. GRILLE COMPLÈTE DES PRODUITS (VIVANTE & RICHE)
          ========================================== */}
      <section className="w-full py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
              <span className="material-symbols-outlined text-[48px] text-slate-400">search_off</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">Aucun produit ne correspond à vos filtres</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Essayez d'autres mots-clés ou réinitialisez les catégories. Vous pouvez aussi nous demander n'importe quel produit directement.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedOrigin("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card-zoom bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between group"
                >
                  {/* Photo avec Zoom */}
                  <div className="relative h-56 overflow-hidden img-zoom-container bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Badge */}
                    <span className="shimmer-badge absolute top-3 left-3 bg-red-600 text-white text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                      {product.badge}
                    </span>

                    <span className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
                      {product.originBadge}
                    </span>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                      <span className="flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-[15px] text-amber-400">star</span>
                        {product.rating} ({product.reviewsCount})
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px]">
                        {product.transitTime}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-red-600 block">
                        {product.categoryLabel}
                      </span>
                      <h2 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors mt-0.5 line-clamp-1">
                        {product.title}
                      </h2>
                      <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Mini features */}
                      <div className="mt-2.5 space-y-1">
                        {product.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                            <span className="material-symbols-outlined text-emerald-600 text-[14px]">check_circle</span>
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer card */}
                    <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-slate-900">{product.priceEstimate}</span>
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {product.moq}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => setSelectedProductModal(product)}
                          className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          <span>Détails</span>
                        </button>

                        <a
                          href={CONTACT_INFO.getProductInquiryUrl(product.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[16px]">chat</span>
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
          4. MODAL DE FICHE PRODUIT DÉTAILLÉE
          ========================================== */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
            <button
              type="button"
              onClick={() => setSelectedProductModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="relative h-72 w-full overflow-hidden bg-slate-100">
              <img
                src={selectedProductModal.image}
                alt={selectedProductModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {selectedProductModal.badge}
                </span>
                <span className="text-xs bg-black/60 px-2.5 py-1 rounded-md">
                  {selectedProductModal.origin}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-5">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-red-600">
                  {selectedProductModal.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {selectedProductModal.title}
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {selectedProductModal.description}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-2">
                <span className="text-xs font-bold uppercase text-slate-900">Spécifications &amp; Garanties</span>
                <div className="space-y-1.5">
                  {selectedProductModal.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-100">
                  <span className="text-slate-500 block text-xs">Condition d'Achat :</span>
                  <span className="font-bold text-slate-900">{selectedProductModal.moq}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100">
                  <span className="text-slate-500 block text-xs">Délais de transit :</span>
                  <span className="font-bold text-slate-900">{selectedProductModal.transitTime}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={CONTACT_INFO.getProductInquiryUrl(selectedProductModal.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Demander un devis usine sur WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProductModal(null)}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
