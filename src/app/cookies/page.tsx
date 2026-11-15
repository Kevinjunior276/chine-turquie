import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Cookies | EXPRESS CHINE & TURQUIE",
  description:
    "Découvrez comment EXPRESS CHINE & TURQUIE utilise les cookies sur son site web.",
};

export default function CookiesPage() {
  const lastUpdated = "15 novembre 2026";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="material-symbols-outlined text-[18px]">cookie</span>
            Document Légal Officiel
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Politique de Cookies
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed">

            {/* Qu'est-ce qu'un cookie */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">1</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Qu&apos;est-ce qu&apos;un Cookie ?</h2>
              </div>
              <p className="text-sm md:text-base">
                Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. Il permet au site de mémoriser certaines informations sur votre visite — comme vos préférences de langue ou les pages que vous avez consultées — afin de vous offrir une expérience de navigation plus fluide et personnalisée lors de votre prochaine visite.
              </p>
              <p className="text-sm md:text-base mt-3">
                Les cookies ne contiennent pas de virus et ne peuvent pas accéder aux informations stockées sur votre appareil.
              </p>
            </section>

            {/* Types de cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">2</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Les Cookies Utilisés sur ce Site</h2>
              </div>
              <div className="space-y-4">

                <div className="border border-emerald-200 bg-emerald-50/60 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-600 text-[22px] shrink-0">verified_user</span>
                    <div>
                      <h3 className="font-black text-slate-900 text-base">Cookies Techniques Essentiels</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Ces cookies sont <strong>strictement nécessaires</strong> au fonctionnement du site. Sans eux, certaines fonctionnalités de base ne pourraient pas être assurées. Ils ne collectent aucune information permettant de vous identifier personnellement. <strong className="text-emerald-700">Aucun consentement requis.</strong>
                      </p>
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          { name: "Session navigation", purpose: "Mémorisation de votre session de navigation" },
                          { name: "Préférences UI", purpose: "Conservation de vos préférences d'affichage" },
                          { name: "Sécurité CSRF", purpose: "Protection contre les attaques de sécurité" },
                          { name: "Cache navigateur", purpose: "Optimisation des performances de chargement" },
                        ].map((cookie) => (
                          <div key={cookie.name} className="bg-white rounded-lg p-2.5 border border-emerald-100">
                            <p className="font-bold text-slate-800">{cookie.name}</p>
                            <p className="text-slate-500 mt-0.5">{cookie.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 bg-blue-50/40 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600 text-[22px] shrink-0">bar_chart</span>
                    <div>
                      <h3 className="font-black text-slate-900 text-base">Cookies d&apos;Analyse (Anonymes)</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site (pages les plus consultées, durée de visite, pays d&apos;origine). Ces données sont collectées de manière <strong>entièrement anonyme et agrégée</strong> — il est impossible de vous identifier personnellement. Ils nous aident à améliorer constamment notre offre.
                      </p>
                      <p className="text-xs text-blue-700 font-semibold mt-2">⚙️ Durée de conservation : 13 mois maximum.</p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 bg-slate-50/60 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-slate-500 text-[22px] shrink-0">block</span>
                    <div>
                      <h3 className="font-black text-slate-900 text-base">Cookies Publicitaires</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        <strong className="text-slate-900">EXPRESS CHINE &amp; TURQUIE n&apos;utilise aucun cookie publicitaire ou de profilage</strong> sur ce site. Aucune régie publicitaire tierce n&apos;est intégrée. Vous ne serez jamais ciblé par de la publicité suite à votre visite sur notre site.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Cookies tiers */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">3</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Cookies Tiers (Réseaux Sociaux)</h2>
              </div>
              <p className="text-sm md:text-base mb-4">
                Notre site intègre des boutons de partage et des liens vers des plateformes tierces. Ces plateformes peuvent déposer leurs propres cookies lorsque vous interagissez avec leurs boutons :
              </p>
              <div className="space-y-3">
                <div className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <svg className="w-5 h-5 fill-blue-600 shrink-0 mt-0.5" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Facebook (Meta)</p>
                    <p className="text-slate-600 text-xs mt-0.5">Lorsque vous cliquez sur notre lien Facebook, Meta peut déposer des cookies selon sa propre politique. Consultez la <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">politique de confidentialité Meta</a>.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="material-symbols-outlined text-emerald-600 text-[20px] shrink-0 mt-0.5">chat</span>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">WhatsApp (Meta)</p>
                    <p className="text-slate-600 text-xs mt-0.5">Le bouton WhatsApp redirige vers l&apos;application WhatsApp ou whatsapp.com. Meta peut gérer ses propres données lors de l&apos;interaction. Consultez la <a href="https://www.whatsapp.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">politique de confidentialité WhatsApp</a>.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gérer les cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">4</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Gérer et Supprimer les Cookies</h2>
              </div>
              <p className="text-sm md:text-base mb-4">
                Vous pouvez à tout moment contrôler, désactiver ou supprimer les cookies via les paramètres de votre navigateur. Voici comment procéder pour les principaux navigateurs :
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { browser: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { browser: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/cookies" },
                  { browser: "Safari", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471" },
                  { browser: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies" },
                ].map((item) => (
                  <a
                    key={item.browser}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-xl text-center transition-all group"
                  >
                    <p className="text-sm font-bold text-slate-800 group-hover:text-red-700">{item.browser}</p>
                    <p className="text-xs text-slate-500 mt-1 group-hover:text-red-500">Voir le guide →</p>
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                <strong className="text-slate-900">Attention :</strong> la désactivation de certains cookies essentiels peut affecter le fonctionnement normal de notre site et dégrader votre expérience de navigation.
              </p>
            </section>

            {/* Durée de vie */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">5</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Durée de Vie des Cookies</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left p-3 rounded-tl-xl font-bold">Type de Cookie</th>
                      <th className="text-left p-3 font-bold">Durée</th>
                      <th className="text-left p-3 rounded-tr-xl font-bold">Consentement requis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Cookies de session", duration: "Fin de session (fermeture navigateur)", consent: "Non" },
                      { type: "Cookies de préférence", duration: "1 an", consent: "Non" },
                      { type: "Cookies analytiques anonymes", duration: "13 mois maximum", consent: "Non (anonymes)" },
                      { type: "Cookies publicitaires", duration: "N/A — Non utilisés", consent: "N/A" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border-b border-slate-100 font-semibold text-slate-900">{row.type}</td>
                        <td className="p-3 border-b border-slate-100 text-slate-600">{row.duration}</td>
                        <td className="p-3 border-b border-slate-100">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold ${
                            row.consent === "Non" || row.consent === "Non (anonymes)" || row.consent === "N/A"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-red-100 text-red-700"
                          }`}>{row.consent}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">6</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Mise à Jour de cette Politique</h2>
              </div>
              <p className="text-sm md:text-base">
                Cette Politique de Cookies peut être amenée à évoluer, notamment pour intégrer de nouveaux services ou se conformer à de nouvelles réglementations. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous recommandons de la consulter périodiquement.
              </p>
            </section>

            {/* Pour en savoir plus */}
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Pour en savoir plus</strong> sur la protection de vos données personnelles, consultez notre{" "}
                <Link href="/confidentialite" className="text-blue-700 font-bold hover:underline">
                  Politique de Confidentialité complète →
                </Link>
              </p>
            </div>

            {/* Contact */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-red-950 rounded-2xl text-center">
              <span className="material-symbols-outlined text-red-400 text-3xl mb-3 block">contact_support</span>
              <h3 className="text-white font-black text-lg mb-2">Une question sur les cookies ?</h3>
              <p className="text-slate-400 text-sm mb-4">Notre équipe est disponible pour vous répondre via WhatsApp</p>
              <a
                href="https://wa.me/905301378199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-extrabold text-sm transition-all shadow-lg"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Nous contacter via WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-red-600 font-semibold text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
