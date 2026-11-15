import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | EXPRESS CHINE & TURQUIE",
  description:
    "Consultez notre politique de confidentialité et de protection de vos données personnelles.",
};

export default function ConfidentialitePage() {
  const lastUpdated = "15 novembre 2026";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="material-symbols-outlined text-[18px]">shield</span>
            Document Légal Officiel
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            Politique de Confidentialité
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

            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">1</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Introduction et Responsable du Traitement</h2>
              </div>
              <p className="text-sm md:text-base">
                La présente Politique de Confidentialité régit la manière dont <strong className="text-slate-900">EXPRESS CHINE &amp; TURQUIE</strong>, société d&apos;intermédiation commerciale internationale spécialisée dans le sourcing et la logistique entre la Chine, la Turquie, Dubaï et l&apos;Afrique, collecte, utilise et protège les informations que vous transmettez lors de l&apos;utilisation du présent site web.
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm">
                <p className="font-bold text-slate-900 mb-2">Responsable du traitement :</p>
                <ul className="space-y-1 text-slate-600">
                  <li><strong>Raison sociale :</strong> EXPRESS CHINE &amp; TURQUIE</li>
                  <li><strong>Directeur Commercial :</strong> M. FOGENG MARIUS</li>
                  <li><strong>WhatsApp professionnel :</strong> +90 530 137 8199</li>
                  <li><strong>Activité :</strong> Sourcing international, Import/Export, Logistique vers l&apos;Afrique</li>
                </ul>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">2</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Données Personnelles Collectées</h2>
              </div>
              <p className="text-sm md:text-base mb-4">
                Dans le cadre de nos activités, nous sommes susceptibles de collecter les catégories d&apos;informations suivantes :
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: "person",
                    title: "Données d'identification",
                    desc: "Nom, prénom, pays de résidence, lorsque vous nous contactez via le formulaire de contact ou directement par WhatsApp.",
                  },
                  {
                    icon: "phone",
                    title: "Coordonnées de contact",
                    desc: "Numéro de téléphone WhatsApp, éventuellement une adresse e-mail si vous choisissez de nous l'indiquer.",
                  },
                  {
                    icon: "inventory",
                    title: "Données commerciales",
                    desc: "Nature des produits recherchés, quantités, budget indicatif, pays de destination de livraison, type de fret souhaité — informations nécessaires pour vous établir un devis personnalisé.",
                  },
                  {
                    icon: "analytics",
                    title: "Données de navigation",
                    desc: "Pages visitées, durée de consultation, type d'appareil, pays d'accès — collectées de manière anonyme via des cookies techniques essentiels pour le bon fonctionnement du site.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="material-symbols-outlined text-red-600 text-[22px] shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                      <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Finalité */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">3</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Finalité du Traitement</h2>
              </div>
              <p className="text-sm md:text-base mb-3">Vos données sont traitées exclusivement dans les buts suivants :</p>
              <ul className="space-y-2 text-sm md:text-base">
                {[
                  "Répondre à vos demandes de devis, d'informations ou de renseignements commerciaux ;",
                  "Préparer et soumettre des offres de sourcing ou de fret personnalisées ;",
                  "Vous accompagner tout au long de vos commandes et expéditions ;",
                  "Vous informer de nouvelles arrivées produits, promotions ou informations logistiques pertinentes (avec votre consentement explicite) ;",
                  "Améliorer la qualité et la performance de notre site web ;",
                  "Respecter nos obligations légales et comptables.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-red-600 mt-1">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Durée conservation */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">4</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Durée de Conservation</h2>
              </div>
              <p className="text-sm md:text-base">
                Vos données personnelles sont conservées aussi longtemps que nécessaire pour les finalités décrites ci-dessus et conformément à la réglementation en vigueur. À titre indicatif :
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-red-600">•</span><span><strong className="text-slate-800">Données de contact client actif :</strong> pendant toute la durée de notre relation commerciale, puis 3 ans après le dernier contact.</span></li>
                <li className="flex gap-2"><span className="text-red-600">•</span><span><strong className="text-slate-800">Données comptables et de facturation :</strong> 10 ans conformément aux obligations légales.</span></li>
                <li className="flex gap-2"><span className="text-red-600">•</span><span><strong className="text-slate-800">Données de navigation anonymisées :</strong> 13 mois maximum.</span></li>
              </ul>
            </section>

            {/* Droits */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">5</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Vos Droits</h2>
              </div>
              <p className="text-sm md:text-base mb-4">
                Conformément aux réglementations applicables en matière de protection des données personnelles, vous disposez des droits suivants :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { right: "Droit d'accès", desc: "Obtenir la confirmation que vos données sont traitées et en obtenir une copie." },
                  { right: "Droit de rectification", desc: "Faire corriger des données inexactes ou incomplètes vous concernant." },
                  { right: "Droit à l'effacement", desc: "Demander la suppression de vos données dans les cas prévus par la loi." },
                  { right: "Droit à la limitation", desc: "Obtenir la restriction du traitement de vos données dans certains cas." },
                  { right: "Droit d'opposition", desc: "Vous opposer à tout moment au traitement de vos données à des fins de prospection." },
                  { right: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré et lisible par machine." },
                ].map((item) => (
                  <div key={item.right} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm">{item.right}</p>
                    <p className="text-slate-600 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Pour exercer l&apos;un de ces droits, contactez-nous directement via WhatsApp au <strong className="text-slate-900">+90 530 137 8199</strong>. Nous nous engageons à répondre dans un délai de 30 jours ouvrables.
              </p>
            </section>

            {/* Partage de données */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">6</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Partage des Données</h2>
              </div>
              <p className="text-sm md:text-base">
                EXPRESS CHINE &amp; TURQUIE <strong>ne vend jamais, ne loue jamais et ne partage jamais</strong> vos données personnelles à des tiers à des fins commerciales. Vos données peuvent uniquement être partagées avec :
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-red-600">•</span><span>Nos partenaires logistiques et transitaires pour l&apos;exécution de vos commandes (uniquement les données strictement nécessaires).</span></li>
                <li className="flex gap-2"><span className="text-red-600">•</span><span>Les autorités douanières et administratives compétentes si la réglementation l&apos;impose.</span></li>
              </ul>
            </section>

            {/* Sécurité */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">7</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Sécurité des Données</h2>
              </div>
              <p className="text-sm md:text-base">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, divulgation, altération ou destruction. Notre site est hébergé sur des serveurs sécurisés avec protocole HTTPS (chiffrement TLS).
              </p>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">8</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Cookies</h2>
              </div>
              <p className="text-sm md:text-base">
                Notre site utilise uniquement des cookies techniques essentiels au bon fonctionnement des pages. Aucun cookie de tracking publicitaire ou de profilage n&apos;est déposé sans votre consentement.{" "}
                <Link href="/cookies" className="text-red-600 font-bold hover:underline">
                  Consultez notre Politique de Cookies →
                </Link>
              </p>
            </section>

            {/* Liens externes */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">9</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Liens Externes</h2>
              </div>
              <p className="text-sm md:text-base">
                Notre site contient des liens vers des plateformes tierces (Facebook, WhatsApp). EXPRESS CHINE &amp; TURQUIE n&apos;est pas responsable des pratiques de confidentialité de ces plateformes. Nous vous invitons à consulter leurs politiques de confidentialité respectives.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-black text-sm">10</div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900">Modifications de cette Politique</h2>
              </div>
              <p className="text-sm md:text-base">
                Nous nous réservons le droit de mettre à jour cette Politique de Confidentialité à tout moment. La date de dernière mise à jour figurera toujours en haut de cette page. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            {/* Contact */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-red-950 rounded-2xl text-center">
              <span className="material-symbols-outlined text-red-400 text-3xl mb-3 block">contact_support</span>
              <h3 className="text-white font-black text-lg mb-2">Une question sur vos données ?</h3>
              <p className="text-slate-400 text-sm mb-4">Contactez notre Direction Commerciale directement via WhatsApp</p>
              <a
                href="https://wa.me/905301378199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-extrabold text-sm transition-all shadow-lg"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                WhatsApp : +90 530 137 8199
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
