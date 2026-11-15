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
          1. HERO SECTION SPECTACULAIRE & ANIMÉE
          ========================================== */}
      <section className="relative w-full overflow-hidden bg-slate-950 -mt-20 pt-32 pb-20 lg:pt-44 lg:pb-32 text-white">
        {/* Cinematic Visual Background with Real Cargo Photography */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=85')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        
        {/* Glowing atmospheric orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8 z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 self-start shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs uppercase tracking-widest font-bold text-slate-200">
              Pôles Agréés : Chine • Turquie • Dubaï ➔ Afrique
            </span>
          </div>

          {/* Main Headline & Pitch */}
          <div className="max-w-4xl flex flex-col gap-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Achetez Directement aux Usines Mondiales avec{" "}
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                Express Chine &amp; Turquie
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Votre partenaire de confiance pour le sourcing direct d&apos;usine, la négociation de prix, le contrôle qualité vidéo et le transport sécurisé (Air Cargo &amp; Fret Maritime) jusqu&apos;à votre destination en Afrique.
            </p>
          </div>

          {/* CTAs & Direct Contact */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-base shadow-xl shadow-red-600/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              <span>Explorer le catalogue 2025</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </Link>

            <a
              href={CONTACT_INFO.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>Parler au Directeur Trade</span>
            </a>

            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/30 text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Page Facebook</span>
            </a>
          </div>

          {/* Quick Metrics / Reassurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-4xl">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/15 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">Prix Direct Usine</p>
                <p className="text-xs text-slate-400 mt-0.5">Shenzhen, Istanbul &amp; Dubaï</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/15 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <span className="material-symbols-outlined text-[26px]">verified_user</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">Contrôle Qualité Vidéo</p>
                <p className="text-xs text-slate-400 mt-0.5">Validation avant chaque départ</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/15 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <span className="material-symbols-outlined text-[26px]">flight_takeoff</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">Air Cargo &amp; Fret Mer</p>
                <p className="text-xs text-slate-400 mt-0.5">LTA / Connaissement sécurisé</p>
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
            <span>SHENZHEN ➔ ABIDJAN (AIR: 5-7j)</span>
            <span className="text-slate-600">•</span>
            <span>ISTANBUL ➔ DOUALA (FRET MARITIME)</span>
            <span className="text-slate-600">•</span>
            <span>DUBAÏ ➔ DAKAR (EXPRESS CARGO)</span>
            <span className="text-slate-600">•</span>
            <span>YIWU ➔ KINSHASA (CONTENEUR 40HC)</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          2. SECTION PRÉSENTATION & TRANSPARENCE
          ========================================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Storytelling Imagery with Real Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 group border border-slate-200">
                <img
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85"
                  alt="Inspecteur logistique contrôlant les marchandises dans un entrepôt moderne"
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
                <strong className="text-slate-900 font-bold">EXPRESS CHINE &amp; TURQUIE</strong> est l&apos;interlocuteur de confiance des commerçants, revendeurs de marché, boutiques de quartier et artisans africains qui souhaitent acheter directement aux prix de gros les plus bas en Chine, Turquie et Dubaï.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Nous nous concentrons sur des produits populaires et adaptés au pouvoir d&apos;achat local : véhicules fiables, smartphones milieu de gamme, petit électroménager résistant, prêt-à-porter turc recherché, salons confortables et machines d&apos;atelier productives. Nous gérons tout : vérification en usine, cartons scellés et acheminement rapide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-red-600 text-[26px] mb-2 block">hub</span>
                  <p className="font-bold text-slate-900 text-base">Réseau d&apos;Usines Vérifiées</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Accès direct aux ateliers à Yiwu, Shenzhen, Foshan et Istanbul sans intermédiaires locaux.
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
          3. SECTION PRODUITS POPULAIRES (MILIEU DE GAMME AFRIQUE)
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
                Des articles milieu de gamme connus, testés et approuvés pour leur rentabilité immédiate sur les marchés d&apos;Afrique subsaharienne.
              </p>
            </div>

            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-sm shadow-md transition-all self-start md:self-auto hover:-translate-y-0.5"
            >
              <span>Voir tout le catalogue</span>
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
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase font-semibold block">Prix indicatif usine</span>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900">{product.priceEstimate}</span>
                      </div>
                      <span className="text-[11px] font-medium px-2 py-1 rounded bg-slate-100 text-slate-600">
                        {product.moq}
                      </span>
                    </div>

                    <a
                      href={CONTACT_INFO.getProductInquiryUrl(product.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Demander ce produit sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. SECTION 5 UNIVERS DE PRODUITS PRATIQUES
          ========================================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-600 block mb-2">
              Filières de Sourcing
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Nos pôles de produits les plus demandés.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Des univers marchands choisis pour leur forte demande au Cameroun, en Côte d&apos;Ivoire, au Sénégal, en RDC et partout en Afrique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Véhicules Milieu de Gamme */}
            <div className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/toyota.jfif"
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
                    Véhicules de Référence
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Toyota Corolla, BMW berlines, Lexus RX, et Mercedes-Benz. Motorisations fiables, pièces faciles à trouver et expédition maritime sécurisée.
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

            {/* 2. Électroménager */}
            <div className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80"
                  alt="Électroménager & TV"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Foshan • Yiwu
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Smart TV &amp; Froid Tropicalisé
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Smart TV frameless 32&quot; à 55&quot;, congélateurs coffres basse consommation, ventilateurs solaires rechargeables et blenders inox.
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

            {/* 3. Ameublement */}
            <div className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
                  alt="Maison & Mobilier Istanbul"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Turquie (Istanbul)
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Salons, Tapis &amp; Literie Turque
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Salons d&apos;angle en velours antitache lavable, tapis de salon d&apos;Istanbul, lits avec coffres hydrauliques et rideaux thermiques.
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

            {/* 4. Mode & Textiles */}
            <div className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
                  alt="Mode & Robes Istanbul"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Merter &amp; Osmanbey
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Mode Féminine, Caftans &amp; Hommes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Robes de soirée et caftans brodés d&apos;Istanbul, costumes infroissables, sacs à main et sneakers à forte rotation commerciale.
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

            {/* 5. Machines & Solaire */}
            <div className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80"
                  alt="Machines & Énergie Solaire"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Artisanat &amp; Énergie
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Machines d&apos;Atelier &amp; Kits Solaires
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Machines à coudre industrielles automatiques, kits solaires autonomes plug-and-play et outillage électroportatif de chantier.
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

            {/* 6. High-Tech & Téléphonie */}
            <div className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
                  alt="Smartphones & Accessoires"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase">
                  Shenzhen Hub
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    Smartphones &amp; Accessoires TWS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Téléphones Android neufs sous blister scellé, écouteurs sans fil, chargeurs rapides et PC portables bureautique.
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
          6. BANNIÈRE FACEBOOK OFFICIELLE (DÉDIÉE)
          ========================================== */}
      <section className="w-full py-14 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-md border border-white/15 p-8 lg:p-12 rounded-3xl">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-lg">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Rejoignez notre page officielle Facebook
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Découvrez chaque semaine nos vidéos en direct des usines de Turquie et de Chine, les nouveaux arrivages et les avis de nos clients partout en Afrique.
                </p>
              </div>
            </div>

            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-blue-800 hover:bg-blue-50 font-black text-sm shadow-xl transition-all shrink-0 hover:scale-105"
            >
              <span>Suivre notre page Facebook</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
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
                a: "Notre champ d'action couvre les véhicules de référence (Toyota, BMW, Lexus, Mercedes), les smartphones et accessoires, l'électroménager (Smart TV, congélateurs, ventilateurs solaires), les salons et tapis turcs, le prêt-à-porter (robes de soirée, caftans, costumes) et les machines d'atelier."
              },
              {
                q: "3. Comment passer une commande et quel est le délai moyen ?",
                a: "Il vous suffit de nous contacter via WhatsApp avec la photo ou fiche technique du produit recherché. Les délais sont de 5 à 8 jours ouvrés en Air Cargo Express et de 25 à 35 jours en fret maritime conteneurisé."
              },
              {
                q: "4. Pourquoi un acompte est-il nécessaire ?",
                a: "L'acompte permet d'engager la commande ferme auprès du fabricant en Chine, Turquie ou Dubaï, et de lancer la préparation et l'emballage sécurisé. Le solde est validé après réception de la vidéo d'inspection de vos colis."
              },
              {
                q: "5. Comment suivre ma cargaison en temps réel ?",
                a: "Dès remise au transitaire aérien ou maritime, un numéro de suivi (LTA / Waybill ou connaissement maritime) vous est remis. Vous pouvez également consulter notre portail de suivi en ligne ou échanger avec notre service client WhatsApp."
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
