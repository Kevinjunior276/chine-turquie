import Link from "next/link";

export default function ContactPage() {
  return (
    <>
<div className="flex flex-col w-full">
{/*  Subtle decorative ambient background glows (strictly bounded)  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-96 -left-32 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
{/*  1. EN-TÊTE DE CONTACT  */}
<section className="max-w-3xl mb-space-xl">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
          Ligne directe d'approvisionnement &amp; négoce international
        </div>
<h1 className="font-headline-lg text-headline-lg lg:font-display-lg lg:text-display-lg text-on-surface mb-space-md tracking-tight">
          Parlons de votre prochain projet d'achat.
        </h1>
<p className="font-body-lg text-body-lg text-secondary leading-relaxed">
          Un produit en tête ? Une recherche particulière ? Notre équipe est disponible pour échanger avec vous et étudier votre demande, directement auprès des manufactures en Chine et en Turquie.
        </p>
</section>
{/*  2 & 3. GRILLE CENTRALE DES ACCÈS DIRECTS (CONTACT COMMERCIAL & COMMUNAUTÉ)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-space-xl items-stretch">
{/*  CARTE D'HONNEUR : M. FOGENG MARIUS  */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-md flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-lg">
<div className="flex items-center gap-space-md">
<div className="relative">
<img alt="M. FOGENG MARIUS" className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-primary/20" src="/images/logo.png"/>
<span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-tertiary ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="inline-block px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase font-bold tracking-wider mb-1">
                    Contact Commercial Attitré
                  </div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    M. FOGENG MARIUS
                  </h2>
<p className="font-title-md text-title-md text-secondary">
                    Responsable Commercial &amp; Approvisionnement
                  </p>
</div>
</div>
{/*  Badge Horaires / Statut  */}
<div className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md self-start sm:self-center">
<span className="material-symbols-outlined text-tertiary text-[18px]">verified_user</span>
<span>Canal Certifié Officiel</span>
</div>
</div>
{/*  Fiche d'informations  */}
<div className="bg-surface-container-low rounded-lg p-space-md mb-space-lg">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px] mt-0.5">phone_iphone</span>
<div>
<span className="block font-label-sm text-label-sm text-secondary uppercase">Numéro direct WhatsApp</span>
<a className="font-title-lg text-title-lg text-on-surface font-bold hover:text-primary transition-colors" href="tel:+905301378199">
                      +90 530 137 8199
                    </a>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[22px] mt-0.5">timer</span>
<div>
<span className="block font-label-sm text-label-sm text-secondary uppercase">Délai indicatif</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">Réponse sous 1h à 3h</span>
</div>
</div>
</div>
</div>
<p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
              Pour soumettre un produit, négocier une commande groupée ou obtenir un devis de transport (aérien express ou maritime conteneurisé), contactez directement M. FOGENG MARIUS. Chaque projet bénéficie d'une étude technique approfondie et d'une vérification fournisseur.
            </p>
</div>
{/*  Action Button  */}
<div className="pt-space-md">
<a className="w-full inline-flex items-center justify-center gap-space-sm bg-tertiary hover:bg-tertiary-container text-on-tertiary hover:text-on-tertiary font-label-lg text-label-lg py-space-md px-space-lg rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5" href="https://wa.me/905301378199?text=Bonjour%20M.%20FOGENG%20MARIUS%2C%20je%20vous%20contacte%20depuis%20votre%20site%20EXPRESS%20CHINE%20%26%20TURQUIE.%20Je%20souhaite%20obtenir%20des%20informations%20sur%20un%20produit%20ou%20un%20projet%20d%27achat." rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[24px]">chat</span>
<span>Contacter M. FOGENG MARIUS sur WhatsApp</span>
</a>
<p className="text-center font-label-sm text-label-sm text-secondary mt-space-xs">
              Lien sécurisé vers l'application WhatsApp — Message pré-rempli pour un traitement prioritaire.
            </p>
</div>
</div>
{/*  3. BLOC COMMUNAUTÉ OFFICIELLE WHATSAPP  */}
<div className="lg:col-span-5 bg-surface-container rounded-xl p-space-lg lg:p-space-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
<div>
<div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-space-lg shadow-sm">
<span className="material-symbols-outlined text-[28px]">hub</span>
</div>
<div className="inline-block px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase font-bold tracking-wider mb-space-xs">
              Veille &amp; Nouveaux Arrivages
            </div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
              Rejoignez notre communauté officielle
            </h2>
<p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
              Accédez aux partages quotidiens des nouveaux produits, catalogues photos des fournisseurs et opportunités d'achat en temps réel directement sur les marchés de gros.
            </p>
{/*  Avantages communauté sous forme de liste graphique  */}
<div className="space-y-space-sm mb-space-lg">
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest">
<span className="material-symbols-outlined text-tertiary text-[20px]">photo_library</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Photos et vidéos d'usines réelles</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest">
<span className="material-symbols-outlined text-tertiary text-[20px]">sell</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Prix usine sans intermédiaires locaux</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest">
<span className="material-symbols-outlined text-tertiary text-[20px]">schedule</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Alertes départs de conteneurs maritimes</span>
</div>
</div>
</div>
<div className="pt-space-sm flex flex-col gap-2">
<a className="w-full inline-flex items-center justify-center gap-space-sm bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg py-space-md px-space-lg rounded-xl shadow-md transition-all duration-200" href="https://chat.whatsapp.com/DUbWN0PWa3B9Ax4P6zu6oF" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[22px]">groups</span>
<span>Intégrer le groupe WhatsApp officiel</span>
</a>
<a className="w-full inline-flex items-center justify-center gap-space-sm bg-blue-600 hover:bg-blue-500 text-white font-label-lg text-label-lg py-space-md px-space-lg rounded-xl shadow-md transition-all duration-200" href="https://www.facebook.com/share/1A1hYdFb2V/" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
</svg>
<span>Suivre notre page officielle Facebook</span>
</a>
<p className="text-center font-label-sm text-label-sm text-secondary mt-space-xs">
              Vidéos d'usines en direct et opportunités d'achat hebdomadaires.
            </p>
</div>
</div>
</div>
{/*  4. GUIDE DE PREMIÈRE DEMANDE (ÉTAPES ERGONOMIQUES)  */}
<section className="mb-space-xl">
<div className="bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-sm">
<div className="max-w-2xl mb-space-lg">
<div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-xs font-bold">
<span className="material-symbols-outlined text-[16px]">speed</span>
              Gagnez du temps dans vos échanges
            </div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Ce dont nous avons besoin pour étudier votre demande rapidement
            </h2>
<p className="font-body-md text-body-md text-secondary">
              Préparez ces 4 informations clés avant de cliquer pour un chiffrage précis en quelques heures :
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Étape 1  */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between relative group hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-md text-headline-md text-primary font-bold">01</span>
<span className="material-symbols-outlined text-secondary text-[24px]">image</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-semibold">
                  Photo ou lien du produit
                </h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  Capture d'écran claire, fiche technique, lien Alibaba, 1688 ou modèle déjà existant sur le marché.
                </p>
</div>
<div className="mt-space-md pt-space-xs text-secondary font-label-sm text-label-sm">
                Essentiel pour identification
              </div>
</div>
{/*  Étape 2  */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between relative group hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-md text-headline-md text-primary font-bold">02</span>
<span className="material-symbols-outlined text-secondary text-[24px]">inventory_2</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-semibold">
                  Quantité souhaitée
                </h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  Précisez si vous commandez en échantillon, en demi-gros (cartons) ou en gros volume (conteneur entier).
                </p>
</div>
<div className="mt-space-md pt-space-xs text-secondary font-label-sm text-label-sm">
                Détermine le palier usine
              </div>
</div>
{/*  Étape 3  */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between relative group hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-md text-headline-md text-primary font-bold">03</span>
<span className="material-symbols-outlined text-secondary text-[24px]">pin_drop</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-semibold">
                  Destination finale
                </h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  Pays et ville de livraison en Afrique (ex. Douala, Yaoundé, Abidjan, Dakar, Kinshasa, Bamako, etc.).
                </p>
</div>
<div className="mt-space-md pt-space-xs text-secondary font-label-sm text-label-sm">
                Calcul précis du fret
              </div>
</div>
{/*  Étape 4  */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between relative group hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-headline-md text-headline-md text-primary font-bold">04</span>
<span className="material-symbols-outlined text-secondary text-[24px]">fact_check</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface mb-space-xs font-semibold">
                  Exigences &amp; Délais
                </h3>
<p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  Critères de qualité, couleurs, personnalisation éventuelle ou impératif d'expédition par avion ou bateau.
                </p>
</div>
<div className="mt-space-md pt-space-xs text-secondary font-label-sm text-label-sm">
                Cahier des charges
              </div>
</div>
</div>
</div>
</section>
{/*  5. TRANSPARENCE OPÉRATIONNELLE & STATUT RÉEL  */}
<section className="mb-space-xl">
<div className="bg-surface-container-high rounded-xl p-space-lg lg:p-space-xl relative overflow-hidden">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="max-w-3xl">
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-space-xs font-bold">
<span className="material-symbols-outlined text-[18px] text-tertiary">public</span>
                Modèle opérationnel 100% direct usine
              </div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-sm">
                Transparence &amp; Gestion directe depuis les pôles d'origine
              </h2>
<p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                Nos opérations de contrôle qualité, de conditionnement et d'affrètement logistique sont pilotées au plus près des manufactures en <strong>Chine (Guangzhou, Yiwu, Shenzhen)</strong>, en <strong>Turquie (Istanbul)</strong> et aux <strong>Émirats Arabes Unis (Dubaï)</strong>.
              </p>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
                Afin de vous garantir les tarifs usine les plus compétitifs sans majoration superflue, nous fonctionnons en structure de négoce et de transit international à distance, <strong>sans bureaux d'accueil physique intermédiaires sur le continent africain</strong>. Votre marchandise est prise en charge à la source et livrée par fret certifié jusqu'à votre ville.
              </p>
</div>
{/*  Mini récapitulatif visuel des hubs logistiques  */}
<div className="lg:w-80 shrink-0 bg-surface-container-lowest rounded-lg p-space-md shadow-sm space-y-space-sm">
<span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider block">
                Origines directes
              </span>
<div className="flex items-center justify-between text-body-sm font-body-sm text-secondary pb-space-xs border-b border-surface-container">
<span className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span> Chine (Fret Aérien &amp; Maritime)
                </span>
<span className="font-semibold text-on-surface">Actif</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-secondary pb-space-xs border-b border-surface-container">
<span className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span> Turquie (Textile, Machines)
                </span>
<span className="font-semibold text-on-surface">Actif</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-secondary">
<span className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span> Dubaï (High-Tech, Négoce)
                </span>
<span className="font-semibold text-on-surface">Actif</span>
</div>
</div>
</div>
</div>
</section>
{/*  BLOC D'ACTION RAPIDE EN BAS DE PAGE  */}
<section className="text-center py-space-lg bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
          Vous êtes prêt à démarrer une commande ?
        </h3>
<p className="font-body-md text-body-md text-secondary max-w-xl mx-auto mb-space-md">
          Discutez dès maintenant avec M. FOGENG MARIUS pour vérifier la disponibilité et recevoir les premières cotations.
        </p>
<div className="flex flex-wrap items-center justify-center gap-space-md">
<a className="inline-flex items-center gap-space-xs bg-tertiary hover:bg-tertiary-container text-on-tertiary hover:text-on-tertiary font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg shadow-sm transition-colors" href="https://wa.me/905301378199?text=Bonjour%20M.%20FOGENG%20MARIUS%2C%20je%20souhaite%20lancer%20un%20devis%20pour%20un%20produit%20sp%C3%A9cifique." rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span>Écrire sur WhatsApp (+90 530 137 8199)</span>
</a>
<a className="inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg transition-colors" href="https://chat.whatsapp.com/DUbWN0PWa3B9Ax4P6zu6oF" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">groups</span>
<span>Rejoindre le Groupe Officiel</span>
</a>
</div>
</section>
</div>
</div>
</div>
    </>
  );
}
