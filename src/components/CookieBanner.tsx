"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Vérifier si un consentement est déjà enregistré
    const consent = localStorage.getItem("express_cookie_consent");
    if (!consent) {
      // Petite temporisation pour une entrée fluide
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveCookies = (consentType: "accepted" | "rejected" | "custom", analytics = true, marketing = true) => {
    const oneYear = 365 * 24 * 60 * 60; // 1 an en secondes
    const date = new Date();
    date.setTime(date.getTime() + oneYear * 1000);
    const expires = `; expires=${date.toUTCString()}`;

    // Déposer les vrais cookies actifs sur le navigateur
    document.cookie = `express_cookie_consent=${consentType}${expires}; path=/; SameSite=Lax`;
    document.cookie = `express_cookies_essential=true${expires}; path=/; SameSite=Lax`;
    document.cookie = `express_cookies_analytics=${analytics}${expires}; path=/; SameSite=Lax`;
    document.cookie = `express_cookies_marketing=${marketing}${expires}; path=/; SameSite=Lax`;

    localStorage.setItem(
      "express_cookie_consent",
      JSON.stringify({
        status: consentType,
        essential: true,
        analytics,
        marketing,
        timestamp: new Date().toISOString(),
      })
    );

    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    saveCookies("accepted", true, true);
  };

  const handleRejectNonEssential = () => {
    saveCookies("rejected", false, false);
  };

  const handleSaveCustom = () => {
    saveCookies("custom", analyticsEnabled, marketingEnabled);
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. Petite pastille discrète en bas à gauche pour ré-ouvrir les préférences cookies à tout moment */}
      {!showBanner && !showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-4 left-4 z-40 bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 p-2.5 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-red-500"
          title="Gérer les préférences de cookies"
          aria-label="Préférences cookies"
        >
          <svg className="w-5 h-5 fill-amber-600 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-3.878h-1.438v-2h1.438v-1.5c0-1.42 1.156-2.57 2.562-2.57h1.438v2h-1.438c-.31 0-.562.252-.562.57V16h2.5l-.5 2h-2v3.938C18.665 21.267 22 17.03 22 12c0-5.523-4.477-10-10-10zm-4 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-3-5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        </button>
      )}

      {/* 2. Bannière principale de premier chargement */}
      {showBanner && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300 pointer-events-none">
          <div className="max-w-5xl mx-auto bg-slate-900/95 backdrop-blur-xl text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-slate-800 ring-1 ring-white/10 pointer-events-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4 max-w-3xl">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm-1.5 5a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 0110.5 7zm-3 6a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm6 4a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2-6a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5z"/>
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
                      Gestion de la Confidentialité &amp; Cookies
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase">
                      Actif en Production
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    Nous respectons votre vie privée et optimisons votre sourcing.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    EXPRESS CHINE &amp; TURQUIE utilise des cookies essentiels pour garantir la sécurité de navigation et mémoriser vos demandes de cotation, ainsi que des cookies de mesure d&apos;audience pour améliorer les liaisons logistiques entre la Chine, la Turquie, Dubaï et l&apos;Afrique.
                  </p>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0">
                <button
                  onClick={handleRejectNonEssential}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-all text-center"
                >
                  Refuser optionnels
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-all text-center"
                >
                  Personnaliser
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs sm:text-sm font-black shadow-lg shadow-red-600/30 transition-all text-center hover:scale-105 active:scale-95"
                >
                  Accepter tout
                </button>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>
                Conforme aux réglementations internationales sur la protection des données.
              </span>
              <Link href="/cookies" className="text-red-400 hover:underline font-bold">
                Lire notre Politique de Cookies ➔
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal de personnalisation des cookies */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm-1.5 5a1.5 1.5 0 11-1.5 1.5A1.5 1.5 0 0110.5 7zm-3 6a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm6 4a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2-6a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Préférences des Cookies
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    EXPRESS CHINE &amp; TURQUIE — Plateforme de Sourcing
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-800 p-2 rounded-xl hover:bg-slate-100 transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Cookies Essentiels */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-black text-slate-900">
                      Cookies Essentiels (Obligatoires)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase">
                      Toujours actif
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nécessaires au fonctionnement technique du site, à la sécurité, à l&apos;acheminement des requêtes et à la mémorisation de votre session de navigation. Ne peuvent pas être désactivés.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="mt-1 w-5 h-5 accent-red-600 rounded cursor-not-allowed opacity-80"
                />
              </div>

              {/* Cookies Analytiques */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-black text-slate-900">
                      Cookies Analytiques &amp; Performance
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nous permettent d&apos;analyser le trafic en direct, de connaître les pages produits les plus consultées et d&apos;améliorer les performances de chargement.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600" />
                </label>
              </div>

              {/* Cookies Marketing */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-black text-slate-900">
                      Cookies d&apos;Opportunités &amp; Médias Sociaux
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Permettent d&apos;adapter les offres d&apos;arrivages usines (Chine, Turquie, Dubaï) selon vos secteurs d&apos;intérêt et de faciliter les partages directs sur WhatsApp et Facebook.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={marketingEnabled}
                    onChange={(e) => setMarketingEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600" />
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <Link
                href="/cookies"
                onClick={() => setShowModal(false)}
                className="text-xs text-slate-500 hover:text-red-600 font-bold underline"
              >
                Détail de notre Politique de Cookies
              </Link>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleRejectNonEssential}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  Tout refuser
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shadow-md transition-colors"
                >
                  Enregistrer mes choix
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
