"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/data/countries";
import { PRODUCTS } from "@/data/products";
import ReviewsColumns from "@/components/ReviewsColumns";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50">
      {/* ==========================================
          1. HERO SECTION SPECTACULAIRE & AUTHENTIQUE
          ========================================== */}
      <section className="relative w-full overflow-hidden bg-slate-950 -mt-20 pt-32 pb-20 lg:pt-44 lg:pb-32 text-white">
        {/* Real Massive Warehouse Background Photography from our Logistics Hub */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50 scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('/images/entrepot-hangar-logistique.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/80 to-slate-950" />
        
        {/* Glowing atmospheric orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-600/35 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8 z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-600/20 backdrop-blur-md border border-red-500/40 self-start shadow-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-xs uppercase tracking-widest font-black text-white">
              Pôles Agréés : Chine • Turquie • Dubaï ➔ Afrique
            </span>
          </div>

          {/* Main Headline & Pitch */}
          <div className="max-w-4xl flex flex-col gap-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Achetez Directement aux Usines Mondiales avec{" "}
              <span className="text-amber-400 drop-shadow-[0_2px_14px_rgba(251,191,36,0.4)]">
                Express Chine &amp; Turquie
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-normal">
              Votre partenaire de confiance pour le sourcing direct d&apos;usine, la négociation de prix, le contrôle qualité vidéo et le transport sécurisé (Air Cargo &amp; Fret Maritime) jusqu&apos;à votre destination en Afrique.
            </p>
          </div>

          {/* CTAs & Direct Contact */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-base shadow-xl shadow-red-600/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              <span>Explorer le catalogue 2025</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>

            <a
              href={CONTACT_INFO.whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base shadow-xl shadow-emerald-600/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[22px]">groups</span>
              <span>Communauté WhatsApp</span>
            </a>

            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-base shadow-xl shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Page Facebook</span>
            </a>
          </div>

          {/* Quick Metrics / Reassurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-4xl">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-red-500/50 transition-all shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-red-600/30 border-2 border-red-500/60 flex items-center justify-center text-red-400 shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
              </div>
              <div>
                <p className="text-white font-black text-base">Prix Direct Usine</p>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">Shenzhen, Istanbul &amp; Dubaï</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-emerald-500/50 transition-all shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/30 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400 shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[26px]">verified_user</span>
              </div>
              <div>
                <p className="text-white font-black text-base">Contrôle Qualité Vidéo</p>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">Validation avant chaque départ</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-600/30 border-2 border-amber-500/60 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[26px]">flight_takeoff</span>
              </div>
              <div>
                <p className="text-white font-black text-base">Air Cargo &amp; Fret Mer</p>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">LTA / Connaissement sécurisé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Animated Ticker for Transit Routes */}
        <div className="mt-12 w-full bg-slate-900/90 border-y border-white/10 py-3 overflow-hidden">
          <div className="animate-marquee items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-red-500" /> CORRIDOR EXPÉDITIONS RÉGULIÈRES :
            </span>
            <span>SHENZHEN ➔ ABIDJAN (AIR: 5-7j)</span>
            <span className="text-slate-600">•</span>
            <span>ISTANBUL ➔ DOUALA (FRET MARITIME)</span>
            <span className="text-slate-600">•</span>
            <span>DUBAÏ ➔ DAKAR (EXPRESS CARGO)</span>
            <span className="text-slate-600">•</span>
            <span>YIWU ➔ KINSHASA (CONTENEUR 40HC)</span>
            <span className="text-slate-600">•</span>
            <span>BURSA ➔ LOMÉ (TEXTILE &amp; AMEUBLEMENT)</span>
            <span className="text-slate-600">•</span>
            <span>GUANGZHOU ➔ BAMAKO (ÉQUIPEMENTS)</span>
            <span className="text-slate-600">•</span>
            <span>FOSHAN ➔ COTONOU (ÉLECTROMÉNAGER)</span>
            <span className="text-slate-600">•</span>
            <span>SHENZHEN ➔ CONAKRY (AIR EXPRESS)</span>
            <span className="text-slate-600">•</span>
            <span>DUBAÏ ➔ YAOUNDÉ (VÉHICULES SÉCURISÉS)</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. SECTION PRÉSENTATION & TRANSPARENCE
          ========================================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Storytelling Imagery with Real Factory Sorting Warehouse Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 group border border-slate-200">
                <img
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/images/usine-tri-textile.jpg"
                  alt="Inspection et tri de marchandises en usine partenaire"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[28px]">handshake</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Coordination Directe Fabricant</p>
                      <p className="text-xs text-slate-600 mt-0.5">Sans intermédiaires superflus, prix usine certifié.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Content with Generous Spacing */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-6">
              <div className="inline-flex items-center gap-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-red-600">
                  Opérateur Logistique International
                </span>
                <div className="h-0.5 w-12 bg-red-600" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                L&apos;approvisionnement simplifié au service de vos commerces en Afrique.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-bold">EXPRESS CHINE &amp; TURQUIE</strong> est l&apos;interlocuteur de confiance des commerçants, revendeurs de marché, boutiques de quartier et importateurs africains qui souhaitent acheter directement aux prix de gros les plus bas en Chine, Turquie et Dubaï.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Nous gérons tout de bout en bout : véhicules inspectés et garantis, lots de smartphones et PC portables, perruques de cheveux humains vierges 12A, confection textile turque, baskets streetwear et balles de friperie de premier choix. Chaque commande est inspectée en vidéo avant embarquement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-red-600 text-[26px] mb-2 block">hub</span>
                  <p className="font-bold text-slate-900 text-base">Réseau d&apos;Usines Vérifiées</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Accès direct aux ateliers à Yiwu, Shenzhen, Guangzhou et Istanbul sans intermédiaires locaux.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-emerald-600 text-[26px] mb-2 block">security</span>
                  <p className="font-bold text-slate-900 text-base">Sécurisation &amp; Vidéo</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Inspection visuelle et vidéo WhatsApp de vos colis avant le scellage et l&apos;embarquement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. SECTION PRODUITS POPULAIRES (PHOTOS RÉELLES)
          ========================================== */}
      <section className="w-full py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                Sélection Populaire &amp; Forte Rotation 2025
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Les meilleures opportunités d&apos;achat en gros.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Des articles milieu et haut de gamme testés et approuvés pour leur rentabilité immédiate sur les marchés d&apos;Afrique subsaharienne.
              </p>
            </div>

            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-sm shadow-md transition-all self-start md:self-auto hover:-translate-y-0.5"
            >
              <span>Voir tout le catalogue ({PRODUCTS.length} produits)</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* 6 High Converting Featured Products Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card-zoom bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col justify-between group"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-64 overflow-hidden img-zoom-container bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badges on Image */}
                  <span className="shimmer-badge absolute top-3 left-3 bg-red-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                    {product.badge}
                  </span>
                  <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    {product.originBadge}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      <span className="text-amber-400">★</span> {product.rating} ({product.reviewsCount} avis)
                    </span>
                    <span className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
                      {product.transitTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-extrabold text-red-600 tracking-wider">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mt-1">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-3 space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-slate-500 uppercase font-black block tracking-wider">
                          {product.category === "auto" ? "Prix Clé en main" : "Tarif Indicatif"}
                        </span>
                        {product.category === "auto" ? (
                          <span className="text-xs sm:text-sm font-black text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg inline-block mt-0.5 shadow-sm">
                            {product.priceEstimate}
                          </span>
                        ) : (
                          <span className="text-xs font-black text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 mt-0.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {product.priceEstimate}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                        {product.moq}
                      </span>
                    </div>

                    <a
                      href={CONTACT_INFO.getProductInquiryUrl(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Commander sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. SECTION 6 UNIVERS DE SOURCING (PHOTOS RÉELLES)
          ========================================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-600 block mb-2">
              Filières de Sourcing
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Nos 6 pôles de produits les plus demandés.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Des univers marchands choisis pour leur forte rentabilité au Cameroun, en Côte d&apos;Ivoire, au Sénégal, en RDC et partout en Afrique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Véhicules Importation */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-red-500/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/landrover-evoque-2023.jpg"
                  alt="Véhicules Importation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Dubaï • Chine
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Véhicules de Référence &amp; SUV
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Range Rover Evoque 2023, Nissan Kicks 2019 garanti 18 mois, Toyota Yaris et Lexus RX. Contrôle technique, transport maritime sécurisé et dédouanement assisté.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-200/60">
                  <Link href="/catalogue" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700">
                    <span>Voir les véhicules</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Téléphonie & Informatique */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-red-500/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/smartphones-iphone-palettes.jpg"
                  alt="Téléphonie & Informatique"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Shenzhen • Dubaï
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Téléphonie &amp; PC Portables
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Palettes d&apos;iPhones 13/14/15 Pro scellés, Samsung Galaxy Ultra 5G et arrivages massifs de PC portables HP EliteBook Core i5 pour boutiques et revendeurs.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-200/60">
                  <Link href="/catalogue" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700">
                    <span>Explorer la catégorie</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Perruques & Mèches Humaines */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-red-500/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/perruque-lace-wig-lisse.jpg"
                  alt="Perruques & Mèches Humaines"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Guangzhou • Xuchang
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Perruques &amp; Cheveux Humains 12A
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Lace Frontal Bone Straight, Body Wave ondulée châtain, Afro Kinky Curly et perruques bordeaux de cérémonie. Qualité 100% cheveux vierges pour salons de beauté.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-200/60">
                  <Link href="/catalogue" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700">
                    <span>Explorer la catégorie</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Mode & Confection */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-red-500/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/costumes-hommes-turquie.jpg"
                  alt="Mode & Confection"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Istanbul • Merter
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Costumes Turcs, Robes &amp; Abayas
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Costumes hommes croisés sur cintres, robes de soirée satin cocktail, abayas perlées d&apos;Istanbul, chemises italiennes et grenouillères pour enfants.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-200/60">
                  <Link href="/catalogue" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700">
                    <span>Explorer la catégorie</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 5. Chaussures & Baskets */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-red-500/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/baskets-jordan-streetwear.jpg"
                  alt="Chaussures & Baskets"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Putian • Istanbul
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Baskets Streetwear &amp; Chaussures Ville
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Cartons complets de baskets Jordan montantes avec boîtes, derbies de ville en cuir, claquettes de luxe homme, escarpins vernis et lots enfants.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-200/60">
                  <Link href="/catalogue" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700">
                    <span>Explorer la catégorie</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 6. Énergie, Friperie & Usines */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-red-500/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1.5">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/generator-inverter-silencieux.jpg"
                  alt="Énergie, Friperie & Usines"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Chine • Turquie
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Générateurs Inverter &amp; Friperie
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Groupes électrogènes inverters silencieux bi-carburant (essence/gaz) et conteneurs complets de balles de friperie de premier choix triées sans déchet.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-200/60">
                  <Link href="/catalogue" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700">
                    <span>Explorer la catégorie</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. SECTION AVIS CLIENTS (DEUX COLONNES ANIMÉES HAUT/BAS - 100% AFRICAINS)
          ========================================== */}
      <section className="w-full py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              100% Retours d&apos;Expériences Authentiques
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Ce que disent les commerçants &amp; importateurs en Afrique.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              De Côte d&apos;Ivoire, Cameroun, Sénégal, RDC, Mali, Togo, Gabon, Bénin et Guinée : ils commandent régulièrement avec nous sans intermédiaire et partagent leur expérience.
            </p>
          </div>

          {/* Dual Columns Interactive Component (One scrolls UP, one scrolls DOWN) */}
          <ReviewsColumns />
        </div>
      </section>

      {/* ==========================================
          6. BANNIÈRE OFFICIELLE COMMUNAUTÉ WHATSAPP (JUSTE APRÈS TÉMOIGNAGES)
          ========================================== */}
      <section className="w-full py-16 bg-gradient-to-br from-emerald-950 via-[#064e3b] to-emerald-950 text-white relative overflow-hidden shadow-2xl border-y-4 border-emerald-500">
        {/* Glows d'arrière-plan */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#044e3b] border-2 border-emerald-400/40 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              {/* Official WhatsApp Avatar */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-2xl ring-4 ring-emerald-400/40">
                  <svg className="w-12 h-12 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 ring-2 ring-white" />
                </span>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-400/40 text-emerald-200 text-xs font-black uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Communauté Officielle · +3 500 Importateurs &amp; Commerçants</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Rejoignez notre Communauté WhatsApp
                </h3>
                <p className="text-slate-100 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
                  Accédez aux vidéos directes des usines de Chine, Turquie et Dubaï, aux arrivages hebdomadaires et aux opportunités de groupage pour maximiser vos marges en Afrique.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-white font-bold">
                  <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-400/20">
                    <svg className="w-4 h-4 fill-emerald-400 shrink-0" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    100% Gratuit &amp; Ouvert
                  </span>
                  <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-400/20">
                    <svg className="w-4 h-4 fill-emerald-400 shrink-0" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Vidéos directes d&apos;usines
                  </span>
                  <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-400/20">
                    <svg className="w-4 h-4 fill-emerald-400 shrink-0" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Groupages maritimes &amp; aériens
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href={CONTACT_INFO.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 py-5 rounded-2xl bg-white text-emerald-950 hover:bg-emerald-50 font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all text-center ring-4 ring-white/20"
              >
                <svg className="w-7 h-7 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Rejoindre la Communauté</span>
                <svg className="w-5 h-5 stroke-emerald-950 fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </a>

              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-5 rounded-2xl bg-[#1877F2] hover:bg-[#166fe5] border border-blue-400 text-white font-black text-sm shadow-xl shadow-blue-950/50 transition-all hover:scale-105"
                title="Notre page Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Page Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. SECTION PIPELINE EN 5 ÉTAPES
          ========================================== */}
      <section className="w-full py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12 z-10 relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-400 block mb-2">
              Circuit Sécurisé
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Votre commande en 5 étapes claires.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              De votre idée d&apos;achat jusqu&apos;à la remise au transitaire maritime ou aérien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center">1</span>
                  <span className="material-symbols-outlined text-slate-400 text-[24px]">search</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Recherche &amp; Spécification</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Envoyez la photo, la référence ou le lien du produit désiré par WhatsApp.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center">2</span>
                  <span className="material-symbols-outlined text-slate-400 text-[24px]">fact_check</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Audit &amp; Négociation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vérification de la fiabilité du fournisseur et négociation du prix usine direct.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center">3</span>
                  <span className="material-symbols-outlined text-slate-400 text-[24px]">request_quote</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Devis Transparent</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proposition détaillée : coût unitaire usine, options fret aérien ou maritime.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between hover:border-red-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-red-600 text-white font-extrabold text-sm flex items-center justify-center">4</span>
                  <span className="material-symbols-outlined text-slate-400 text-[24px]">verified</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Contrôle Vidéo</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Réservation des stocks et vidéo d&apos;inspection avant tout paiement du solde.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-b from-emerald-950/80 to-slate-900 border border-emerald-500/40 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-sm flex items-center justify-center">5</span>
                  <span className="material-symbols-outlined text-emerald-400 text-[24px]">flight_takeoff</span>
                </div>
                <h4 className="text-base font-bold text-emerald-400 mb-2">Expédition Sécurisée</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Remise au transitaire officiel et transmission du Waybill / Connaissement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. SECTION FAQ INTERACTIVE
          ========================================== */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          <div className="text-center">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-600 block mb-2">
              Transparence Totale
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Foire Aux Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Toutes les réponses à vos questions sur nos procédures de sourcing et d&apos;expédition.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                q: "1. Depuis quels pays assurez-vous les achats ?",
                a: "Nous opérons activement sur 3 hubs majeurs : la Chine (Guangzhou, Yiwu, Shenzhen), la Turquie (Istanbul et centres manufacturiers de Bursa) et Dubaï (Émirats Arabes Unis). Nous sourçons directement auprès des fabricants certifiés sans intermédiaires superflus."
              },
              {
                q: "2. Quels types de marchandises pouvez-vous commander ?",
                a: "Notre catalogue comprend les véhicules (Land Rover Evoque, Nissan Kicks garanti 18 mois, Toyota Yaris), les ballots (ballots de friperie triée de premier choix, vêtements, chaussures et sacs en ballots scellés), la téléphonie (palettes d'iPhones, Samsung Ultra, PC portables HP EliteBook), les perruques en cheveux humains vierges 12A, la mode turque (costumes croisés, robes de soirée, abayas), les baskets streetwear, les groupes électrogènes inverters et toute marchandise spécifique sur demande."
              },
              {
                q: "3. Comment passer une commande et quel est le délai moyen ?",
                a: "Il vous suffit de nous contacter via WhatsApp avec la photo ou référence du produit recherché. Les délais sont de 4 à 6 jours ouvrés en Air Cargo Express et de 25 à 35 jours en fret maritime conteneurisé."
              },
              {
                q: "4. Pourquoi un acompte est-il nécessaire ?",
                a: "L'acompte permet d'engager la commande ferme auprès du fabricant en Chine, Turquie ou Dubaï, et de lancer la préparation et l'emballage sécurisé. Le solde est validé après réception de la vidéo d'inspection de vos colis."
              },
              {
                q: "5. Comment obtenir un devis clé en main avec transport ?",
                a: "Cliquez sur n'importe quel bouton WhatsApp du site pour échanger directement avec M. Fogeng Marius. Vous recevrez une cotation détaillée incluant le coût de la marchandise, le fret aérien ou maritime et les formalités de transit vers votre port africain."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-red-50 text-red-600" : ""
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">keyboard_arrow_down</span>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold">Vous avez un projet d&apos;achat spécifique ?</h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Discutez directement avec M. Fogeng Marius de la faisabilité et des coûts.
              </p>
            </div>
            <a
              href={CONTACT_INFO.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white text-red-600 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Ouvrir WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
