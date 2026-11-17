"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Enregistrer le Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then(() => {
            console.log("PWA Service Worker actif");
          })
          .catch((err) => {
            console.warn("Service worker non enregistré:", err);
          });
      });
    }

    // 2. Vérifier si l'application est déjà lancée en mode autonome (déjà installée)
    const isAppStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isAppStandalone) {
      setIsStandalone(true);
      return;
    }

    // 3. Détection iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    if (isIOSDevice) {
      setIsIOS(true);
      const dismissedIOS = sessionStorage.getItem("pwa_ios_dismissed");
      if (!dismissedIOS) {
        setShowPrompt(true);
      }
    }

    // 4. Écouter l'événement standard de Chrome / Android / Edge
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      const dismissed = sessionStorage.getItem("pwa_prompt_dismissed");
      if (!dismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      setShowPrompt(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    if (isIOS) {
      sessionStorage.setItem("pwa_ios_dismissed", "true");
    } else {
      sessionStorage.setItem("pwa_prompt_dismissed", "true");
    }
  };

  if (!showPrompt || isStandalone) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-950/95 backdrop-blur-xl text-white p-4 sm:p-5 rounded-2xl shadow-2xl border-2 border-red-500/40 flex flex-col gap-3.5 ring-1 ring-white/10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-md ring-2 ring-red-500 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Logo Express Trade"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black uppercase text-red-400 tracking-wider">
                  Application Mobile &amp; PC
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h4 className="text-sm font-black text-white leading-tight">
                Installer EXPRESS CHINE &amp; TURQUIE
              </h4>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {isIOS ? (
            <span>
              Pour installer sur iPhone : appuyez sur le bouton de partage{" "}
              <span className="inline-block px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">Partager</span>{" "}
              puis sur{" "}
              <span className="inline-block px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
                « Sur l&apos;écran d&apos;accueil »
              </span>
              .
            </span>
          ) : (
            "Ajoutez l'application sur votre écran d'accueil pour un accès direct d'un clic, des temps de chargement instantanés et un suivi continu."
          )}
        </p>

        {!isIOS && deferredPrompt && (
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleInstallClick}
              className="flex-1 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <span>Installer maintenant</span>
            </button>
            <button
              onClick={handleDismiss}
              className="text-slate-400 hover:text-slate-200 text-xs px-3 py-2 font-bold hover:bg-white/5 rounded-xl transition-colors"
            >
              Plus tard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
