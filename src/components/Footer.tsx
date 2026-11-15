import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/data/countries";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Logo */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-md ring-2 ring-red-600/30">
                <Image
                  src="/images/logo.png"
                  alt="Logo Express Chine Turquie"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-base font-black text-white uppercase tracking-tight">
                EXPRESS CHINE &amp; TURQUIE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Votre trait d&apos;union direct pour sourcer et acheter aux meilleurs prix d&apos;usine en Chine, Turquie et Dubaï avec livraison sécurisée vers l&apos;Afrique.
            </p>

            {/* Social Network Pills */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Page Facebook</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">forum</span>
                <span>Groupe WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Navigation Rapide
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link className="hover:text-white transition-colors" href="/">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/catalogue">
                  Catalogue Produits
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/a-propos">
                  À propos &amp; Pôles Usines
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/contact">
                  Contact Direction Trade
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/confidentialite">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/cookies">
                  Gestion des Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sourcing Hubs */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Pôles d&apos;Origine
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <strong className="text-white text-xs block font-bold">🇨🇳 Chine (Guangzhou, Yiwu, Shenzhen)</strong>
                Téléphonie, Électroménager &amp; Petites Machines
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <strong className="text-white text-xs block font-bold">🇹🇷 Turquie (Istanbul &amp; Bursa)</strong>
                Robes de soirée, Salons, Tapis &amp; Confection
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <strong className="text-white text-xs block font-bold">🇦🇪 Dubaï (Émirats Arabes Unis)</strong>
                Véhicules, High-Tech &amp; Expéditions Express
              </div>
            </div>
          </div>

          {/* Col 4: Contact Direct */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Direction Commerciale
            </h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-400">
              <span className="text-white font-bold text-sm">
                {CONTACT_INFO.directorName}
              </span>
              <span className="text-xs text-slate-400">{CONTACT_INFO.directorTitle}</span>

              <div className="mt-2 flex flex-col gap-2">
                <a
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                  href={CONTACT_INFO.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp : {CONTACT_INFO.whatsappDisplay}</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-colors"
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Page Facebook Officielle</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
            <span>© {new Date().getFullYear()} EXPRESS CHINE &amp; TURQUIE. Tous droits réservés.</span>
            <span className="text-slate-700">•</span>
            <Link
              href="/confidentialite"
              className="text-slate-400 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Politique de Confidentialité
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/cookies"
              className="text-slate-400 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Gestion des Cookies
            </Link>
          </div>
          <p className="text-center md:text-right text-slate-400">
            Sourcing d&apos;usine direct &amp; transit maritime/aérien vers l&apos;Afrique
          </p>
        </div>
      </div>
    </footer>
  );
}
