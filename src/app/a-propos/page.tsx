import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/data/countries";

export const metadata: Metadata = {
  title: "À Propos & Pôles de Sourcing | EXPRESS CHINE & TURQUIE",
  description:
    "Découvrez notre réseau d'usines en Chine, Turquie et Dubaï. Spécialiste de l'intermédiation directe sans intermédiaires pour les importateurs et commerçants africains.",
};

export default function AProposPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      {/* 1. HERO HEADER */}
      <section className="relative w-full bg-slate-950 text-white -mt-20 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 scale-105"
          style={{
            backgroundImage: "url('/images/entrepot-hangar-logistique.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 self-start">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-slate-200">
              Intermédiation &amp; Logistique Directe
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-white">
            Votre pont d&apos;achat direct entre les usines mondiales et{" "}
            <span className="text-amber-400 drop-shadow-[0_2px_12px_rgba(251,191,36,0.35)]">
              l&apos;Afrique
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Supprimer les intermédiaires superflus pour vous garantir le véritable prix usine en Chine, Turquie et Dubaï avec un contrôle qualité rigoureux et un fret sécurisé.
          </p>
        </div>
      </section>

      {/* 2. NOTRE MISSION & VALEURS */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-200 bg-slate-100 h-[480px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/usine-tri-textile.jpg"
                  alt="Fret aérien et maritime international"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-red-600/30">
                      <Image
                        src="/images/logo.png"
                        alt="Logo Express Chine Turquie"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">EXPRESS CHINE &amp; TURQUIE</p>
                      <p className="text-xs text-slate-500">Direction Trade : {CONTACT_INFO.directorName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-red-600">
                  Transparence &amp; Rigueur
                </span>
                <div className="h-0.5 w-12 bg-red-600" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Permettre à chaque commerçant africain d&apos;acheter comme un grand groupe.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Pendant des années, les commerçants africains ont dû passer par une cascade de revendeurs locaux qui multipliaient les marges par 2 ou 3.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900">EXPRESS CHINE &amp; TURQUIE</strong> a été créé pour casser ce schéma : nous négocions directement avec les fabricants, nous vérifions physiquement les marchandises et nous vous envoyons une vidéo d&apos;inspection avant tout départ en avion ou en bateau.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="material-symbols-outlined text-red-600 text-[26px] mb-1 block">speed</span>
                  <p className="font-bold text-slate-900 text-sm">Zéro Intermédiaire Caché</p>
                  <p className="text-xs text-slate-600 mt-1">Vous achetez directement à la source avec facturation usine limpide.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="material-symbols-outlined text-emerald-600 text-[26px] mb-1 block">videocam</span>
                  <p className="font-bold text-slate-900 text-sm">Validation Vidéo Directe</p>
                  <p className="text-xs text-slate-600 mt-1">Vidéo WhatsApp détaillée de vos colis avant le règlement du solde.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOS 3 PÔLES GÉOGRAPHIQUES D'EXCELLENCE */}
      <section className="w-full py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-red-600 block mb-2">
              Présence Mondiale
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Nos 3 Hubs de Sourcing Stratégiques
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Chaque pôle est sélectionné pour sa spécialité manufacturière et sa logistique éprouvée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pôle 1: Chine */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group hover:shadow-xl transition-all">
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/smartphones-iphone-palettes.jpg"
                  alt="Chine - Usine du monde"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-black uppercase">
                  🇨🇳 Chine (Guangzhou, Yiwu, Shenzhen)
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">L&apos;Usine du Monde</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Spécialité : Smartphones en gros, PC portables, perruques cheveux humains 12A, baskets streetwear et balles de friperie triée de premier choix.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                  Transit : Air 5-7j • Fret Maritime 28-35j
                </div>
              </div>
            </div>

            {/* Pôle 2: Turquie */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group hover:shadow-xl transition-all">
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/costumes-hommes-turquie.jpg"
                  alt="Turquie - Istanbul & Bursa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-rose-600 text-white rounded-full text-xs font-black uppercase">
                  🇹🇷 Turquie (Istanbul, Merter, Bursa)
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Capitale du Textile &amp; Confection</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Spécialité : Costumes croisés hommes, robes de soirée satin et caftans brodés d&apos;Istanbul, abayas, chemises et chaussures en cuir de ville.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                  Transit : Air Express 4-6j • Mer 20-28j
                </div>
              </div>
            </div>

            {/* Pôle 3: Dubaï */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group hover:shadow-xl transition-all">
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/landrover-evoque-2023.jpg"
                  alt="Dubaï - Hub réexportation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-black uppercase">
                  🇦🇪 Dubaï (JAFZA &amp; Deira)
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Hub Mondial des Véhicules &amp; Tech</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Spécialité : Véhicules récents et SUV (Range Rover Evoque, Nissan Kicks, Lexus RX), PC portables et réexportation rapide sous douane.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                  Transit : Air Cargo 3-5j • RORO Mer 25-30j
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIRECTION & ENGAGEMENT */}
      <section className="w-full py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
            <span className="material-symbols-outlined text-[32px]">support_agent</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Un interlocuteur unique à votre écoute
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Pas de serveurs vocaux ni d&apos;attentes interminables. Vous échangez directement sur WhatsApp avec la direction trade de notre plateforme pour toutes vos cotations et questions logistiques.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={CONTACT_INFO.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Discuter avec M. Fogeng Marius</span>
            </a>
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20"
            >
              <span>Consulter le catalogue produits</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
