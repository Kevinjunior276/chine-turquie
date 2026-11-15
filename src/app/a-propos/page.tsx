import Link from "next/link";
import { CONTACT_INFO } from "@/data/countries";

export default function AProposPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* 1. HERO INSTITUTIONNEL */}
      <section className="relative w-full bg-slate-950 text-white overflow-hidden py-24 lg:py-32">
        {/* Real Cargo Container Ship Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f7?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-slate-200 font-bold">
                Sourcing Global &amp; Logistique Dématérialisée
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Faciliter vos achats, rapprocher les opportunités mondiales.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Le trait d'union direct entre les usines de Chine, les plateformes de Dubaï, le savoir-faire de Turquie et les entrepreneurs du continent africain.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-red-600/25 transition-all hover:-translate-y-0.5"
                href={CONTACT_INFO.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Contacter la direction trade</span>
              </a>

              <a
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-sm transition-colors px-4 py-4"
                href="#poles"
              >
                <span>Découvrir nos 3 pôles</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10 group">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1000&q=80"
                alt="Fret aérien et maritime international"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div>
                  <span className="text-[11px] uppercase block tracking-widest text-red-400 font-bold">Réseau Maritime &amp; Aérien</span>
                  <span className="text-base font-bold">Liaisons Directes Afrique</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>100% Dédié</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION QUI SOMMES-NOUS ? */}
      <section className="w-full bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-1 bg-red-600" />
                <span className="text-xs uppercase tracking-wider font-extrabold text-red-600">Présentation Officielle</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Un pont stratégique entre les grands marchés mondiaux et l'Afrique.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <strong className="text-slate-900 font-bold">EXPRESS CHINE &amp; TURQUIE</strong> accompagne les particuliers et les professionnels dans la recherche, l'achat et l'expédition de marchandises depuis la Chine, Dubaï et la Turquie vers plusieurs marchés africains.
              </p>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5">
                <span className="text-xs uppercase text-slate-500 font-bold">Modèle Opérationnel Transparent</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Opérant selon un modèle digital et connecté, nous assurons l'orchestration complète de vos acquisitions sans intermédiaires inutiles.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">factory</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Sourcing direct usines</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Négociation directe auprès des fabricants, manufactures et grossistes certifiés pour obtenir les prix d'origine sans surcoûts superflus.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">inventory</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Coordination rigoureuse</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Contrôle strict des volumes, vérification de conformité visuelle et regroupement efficace de vos cargaisons avant envoi.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">local_shipping</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Expéditions sécurisées</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Acheminement optimisé par voie maritime pour le fret lourd et par fret aérien express pour vos approvisionnements d'urgence.
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Relation 100% dédiée</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Interlocuteur unique à distance, mises à jour régulières et canal de communication instantané pour répondre à chaque étape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="w-full bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-red-600">Ambition &amp; Direction</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Une boussole stratégique claire</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Mission Card */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-red-600 font-extrabold">Notre Mission</span>
                  <span className="material-symbols-outlined text-red-600 text-[32px]">task_alt</span>
                </div>
                <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                  « Faciliter l'accès à une diversité de produits et accompagner les clients dans leurs projets d'achat et d'approvisionnement. »
                </blockquote>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-6 leading-relaxed">
                Nous levons les barrières linguistiques, géographiques et administratives en devenant votre bras opérationnel directement au contact des fabricants mondiaux.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-slate-950 text-white p-8 lg:p-10 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group border border-slate-800">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold">Notre Vision</span>
                  <span className="material-symbols-outlined text-emerald-400 text-[32px]">visibility</span>
                </div>
                <blockquote className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                  « Rendre les échanges commerciaux mondiaux et l'accès aux usines plus simples, transparents et accessibles pour les marchés africains. »
                </blockquote>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-6 leading-relaxed">
                Permettre aux PME, commerçants, revendeurs et artisans d'évoluer avec la même force logistique et la même compétitivité tarifaire que les grands groupes mondiaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOS 3 PÔLES D'APPROVISIONNEMENT MONDIAUX */}
      <section className="w-full bg-white py-20" id="poles">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider font-extrabold text-red-600">Géographie du Sourcing</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Nos 3 pôles d'approvisionnement mondiaux</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Une présence coordonnée sur les places marchandes les plus compétitives du monde pour répondre à chaque segment d'activité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pôle Chine */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-shadow">
              <div className="relative h-52 bg-slate-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"
                  alt="Chine - Usine du monde"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-md">
                  Pôle 01 • Chine
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Chine (Guangzhou, Yiwu, Shenzhen)</h3>
                  <p className="text-xs uppercase font-extrabold text-red-600 mt-0.5">L'usine du monde</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Leader mondial pour l'électronique de pointe, les machines industrielles, les équipements techniques et la production industrielle de masse avec des économies d'échelle imbattables.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Électronique</span>
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Outillage</span>
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Volume industriel</span>
                </div>
              </div>
            </div>

            {/* Pôle Dubaï */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-shadow">
              <div className="relative h-52 bg-slate-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                  alt="Dubaï - Hub réexportation"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-md">
                  Pôle 02 • Dubaï
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Dubaï (Émirats Arabes Unis)</h3>
                  <p className="text-xs uppercase font-extrabold text-slate-900 mt-0.5">Hub de réexportation rapide</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Carrefour stratégique mondial privilégié pour la téléphonie mobile, l&apos;électronique de consommation, les parfums &amp; cosmétiques et les stocks détaxés haute disponibilité.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Téléphonie &amp; Tech</span>
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Cosmétiques</span>
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Transit Express</span>
                </div>
              </div>
            </div>

            {/* Pôle Turquie */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-shadow">
              <div className="relative h-52 bg-slate-200 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80"
                  alt="Turquie - Istanbul & Bursa"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs uppercase font-extrabold px-3 py-1 rounded-md">
                  Pôle 03 • Turquie
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Turquie (Istanbul &amp; Bursa)</h3>
                  <p className="text-xs uppercase font-extrabold text-emerald-600 mt-0.5">Qualité européenne &amp; finitions</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    La référence indiscutable pour la haute qualité textile, le prêt-à-porter, le mobilier de standing, la décoration intérieure et les matériaux durables.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Textile &amp; Mode</span>
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Mobilier Royal</span>
                  <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-md">Finitions standing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BANNIÈRE CONTACT DE CONFIANCE */}
      <section className="w-full bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white/5 border border-white/10 p-8 lg:p-12 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-extrabold text-xs uppercase tracking-wider mx-auto lg:mx-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Direction Opérationnelle
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Échangez directement sur votre prochain approvisionnement
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                M. FOGENG MARIUS, Directeur Trade International, est à votre écoute pour évaluer la faisabilité de vos achats, orienter vos recherches fournisseurs et planifier vos expéditions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto justify-center">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl text-sm font-extrabold shadow-lg transition-all"
                href={CONTACT_INFO.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Contacter sur WhatsApp (+90 530 137 8199)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
