import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/data/countries";

export default function ContactPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. EN-TÊTE DE CONTACT */}
        <section className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span>Ligne directe d&apos;approvisionnement &amp; négoce international</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Parlons de votre prochain projet d&apos;achat.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Un produit en tête ? Une recherche particulière ? Notre équipe est disponible pour échanger avec vous et étudier votre demande, directement auprès des manufactures en Chine, Turquie et Dubaï.
          </p>
        </section>

        {/* 2 & 3. GRILLE CENTRALE DES ACCÈS DIRECTS (CONTACT COMMERCIAL & COMMUNAUTÉ) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* CARTE D'HONNEUR : M. FOGENG MARIUS */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-slate-100 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500" />
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md ring-2 ring-red-500/20 shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt={CONTACT_INFO.directorName}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </div>
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-red-50 text-red-700 text-[11px] uppercase font-black tracking-wider mb-1">
                      Contact Commercial Attitré
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      {CONTACT_INFO.directorName}
                    </h2>
                    <p className="text-sm font-semibold text-slate-500">
                      Responsable Commercial &amp; Approvisionnement
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold self-start sm:self-center">
                  <svg className="w-4 h-4 fill-emerald-600 shrink-0" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Canal Certifié Officiel</span>
                </div>
              </div>

              {/* Fiche d'informations */}
              <div className="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5.25-3H6.75V4h10.5v13z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-500 uppercase">Numéro direct WhatsApp</span>
                      <a
                        href={CONTACT_INFO.getWhatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-black text-slate-900 hover:text-red-600 transition-colors"
                      >
                        {CONTACT_INFO.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-slate-500 uppercase">Délai indicatif</span>
                      <span className="text-sm font-black text-slate-900">Réponse sous 1h à 3h</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Pour soumettre un produit, négocier une commande groupée ou obtenir un devis de transport (aérien express ou maritime conteneurisé), contactez directement {CONTACT_INFO.directorName}. Chaque projet bénéficie d&apos;une étude technique approfondie et d&apos;une vérification fournisseur.
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <a
                className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-98"
                href={CONTACT_INFO.getWhatsappUrl("Bonjour M. FOGENG MARIUS, je vous contacte depuis votre site EXPRESS CHINE & TURQUIE. Je souhaite obtenir des informations sur un produit ou un projet d'achat.")}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-6 h-6 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Contacter M. FOGENG MARIUS sur WhatsApp</span>
              </a>
              <p className="text-center text-xs text-slate-500 mt-2">
                Lien sécurisé vers WhatsApp — Message pré-rempli pour un traitement prioritaire.
              </p>
            </div>
          </div>

          {/* 3. BLOC COMMUNAUTÉ OFFICIELLE WHATSAPP & FACEBOOK */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-[#064e3b] to-emerald-900 rounded-3xl p-6 sm:p-8 shadow-xl text-white flex flex-col justify-between border-2 border-emerald-400/30">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-md ring-4 ring-white/20">
                <svg className="w-8 h-8 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-400/40 text-emerald-200 text-[11px] font-black uppercase tracking-wider mb-2">
                Veille &amp; Nouveaux Arrivages
              </div>
              <h2 className="text-2xl font-black text-white mb-3">
                Rejoignez notre communauté officielle
              </h2>
              <p className="text-slate-100 text-sm mb-6 leading-relaxed">
                Accédez aux partages quotidiens des nouveaux produits, catalogues photos des fournisseurs et opportunités d&apos;achat en temps réel directement sur les marchés de gros.
              </p>

              {/* Avantages communauté */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-400/20">
                  <svg className="w-5 h-5 fill-emerald-400 shrink-0" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-bold text-white">Photos et vidéos d&apos;usines réelles</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-400/20">
                  <svg className="w-5 h-5 fill-emerald-400 shrink-0" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-bold text-white">Prix usine sans intermédiaires locaux</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-400/20">
                  <svg className="w-5 h-5 fill-emerald-400 shrink-0" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-bold text-white">Alertes départs conteneurs maritimes</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                className="w-full inline-flex items-center justify-center gap-3 bg-white text-emerald-950 hover:bg-emerald-50 font-black text-sm py-4 px-6 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-98"
                href={CONTACT_INFO.whatsappGroupLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-6 h-6 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Intégrer le groupe WhatsApp officiel</span>
              </a>
              <a
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-sm py-3.5 px-6 rounded-2xl shadow-lg transition-all hover:scale-[1.02]"
                href={CONTACT_INFO.facebookUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Suivre notre page Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. GUIDE DE PREMIÈRE DEMANDE (ÉTAPES CLAIRES) */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border-2 border-slate-100">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-2 text-red-600 text-xs uppercase tracking-wider mb-2 font-black">
                <svg className="w-4 h-4 fill-red-600" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                <span>Gagnez du temps dans vos échanges</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Ce dont nous avons besoin pour étudier votre demande rapidement
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Préparez ces 4 informations clés pour un chiffrage précis en quelques heures :
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Étape 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:border-red-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-red-600">01</span>
                    <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">Photo</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    Photo ou lien du produit
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Capture d&apos;écran claire, fiche technique, lien Alibaba, 1688 ou modèle existant sur le marché.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  Identification
                </div>
              </div>

              {/* Étape 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:border-red-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-red-600">02</span>
                    <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">Qté</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    Quantité souhaitée
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Précisez si vous commandez un échantillon, du demi-gros (cartons) ou du gros volume (conteneur).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  Palier usine
                </div>
              </div>

              {/* Étape 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:border-red-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-red-600">03</span>
                    <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">Ville</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    Destination finale
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pays et ville de livraison en Afrique (Douala, Yaoundé, Abidjan, Dakar, Kinshasa, Libreville, etc.).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  Calcul du fret
                </div>
              </div>

              {/* Étape 4 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:border-red-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-red-600">04</span>
                    <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">Délais</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2">
                    Exigences &amp; Délais
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Critères de qualité, couleurs, personnalisation éventuelle ou urgence d&apos;expédition (Air Cargo vs Bateau).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  Cahier des charges
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TRANSPARENCE OPÉRATIONNELLE & STATUT RÉEL */}
        <section className="mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-wider mb-2 font-black">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Modèle opérationnel 100% direct usine</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-4">
                  Transparence &amp; Gestion directe depuis les pôles d&apos;origine
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Nos opérations de contrôle qualité, de conditionnement et d&apos;affrètement logistique sont pilotées au plus près des manufactures en <strong>Chine (Guangzhou, Yiwu, Shenzhen)</strong>, en <strong>Turquie (Istanbul)</strong> et aux <strong>Émirats Arabes Unis (Dubaï)</strong>.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Afin de vous garantir les tarifs usine les plus compétitifs sans majoration superflue, nous fonctionnons en structure de négoce et de transit international à distance, <strong>sans bureaux d&apos;accueil physique intermédiaires sur le continent africain</strong>. Votre marchandise est prise en charge à la source et livrée par fret certifié jusqu&apos;à votre ville.
                </p>
              </div>

              {/* Hubs logistiques */}
              <div className="lg:w-80 shrink-0 bg-slate-800/90 border border-slate-700 rounded-2xl p-5 shadow-lg space-y-3">
                <span className="text-xs font-black uppercase tracking-wider block text-slate-400">
                  Origines directes
                </span>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-700">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> Chine (Fret Aérien &amp; Maritime)
                  </span>
                  <span className="font-bold text-emerald-400">Actif</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-700">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> Turquie (Textile, Machines)
                  </span>
                  <span className="font-bold text-emerald-400">Actif</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> Dubaï (High-Tech, Négoce)
                  </span>
                  <span className="font-bold text-emerald-400">Actif</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOC D'ACTION RAPIDE EN BAS DE PAGE */}
        <section className="text-center py-12 bg-white rounded-3xl p-6 sm:p-10 shadow-md border-2 border-slate-100">
          <h3 className="text-2xl font-black text-slate-900 mb-2">
            Vous êtes prêt à démarrer une commande ?
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Discutez dès maintenant avec {CONTACT_INFO.directorName} pour vérifier la disponibilité et recevoir les premières cotations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm px-6 py-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              href={CONTACT_INFO.getWhatsappUrl("Bonjour M. FOGENG MARIUS, je souhaite lancer un devis pour un produit spécifique.")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Écrire sur WhatsApp ({CONTACT_INFO.whatsappDisplay})</span>
            </a>
            <a
              className="inline-flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-black text-sm px-6 py-4 rounded-xl transition-all"
              href={CONTACT_INFO.whatsappGroupLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Rejoindre le Groupe Officiel</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
