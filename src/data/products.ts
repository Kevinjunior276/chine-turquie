export interface Product {
  id: string;
  title: string;
  category: "auto" | "tech" | "hair" | "fashion" | "shoes" | "machinery";
  categoryLabel: string;
  origin: string;
  originBadge: string;
  priceEstimate: string;
  moq: string;
  badge: string;
  badgeColor: "red" | "emerald" | "amber" | "blue" | "purple";
  image: string;
  description: string;
  fullDescription?: string;
  features: string[];
  specs?: Record<string, string>;
  packaging?: string;
  shippingType?: string;
  rating: number;
  reviewsCount: number;
  transitTime: string;
}

export const CATEGORIES = [
  { id: "all", label: "Tous les produits", icon: "apps" },
  { id: "auto", label: "Véhicules Importation", icon: "directions_car" },
  { id: "tech", label: "Téléphonie & Informatique", icon: "devices" },
  { id: "hair", label: "Perruques & Mèches Humaines", icon: "face" },
  { id: "fashion", label: "Mode, Costumes & Robes", icon: "checkroom" },
  { id: "shoes", label: "Chaussures & Baskets", icon: "footprint" },
  { id: "machinery", label: "Énergie, Friperie & Usines", icon: "precision_manufacturing" },
] as const;

export const PRODUCTS: Product[] = [
  // ========================================================
  // 1. VÉHICULES IMPORTATION (INFOS RÉELLES DU CLIENT)
  // ========================================================
  {
    id: "auto-landrover",
    title: "LAND ROVER RANGE ROVER EVOQUE L – MODÈLE 2023 (Hybride 48V)",
    category: "auto",
    categoryLabel: "Véhicules Importation",
    origin: "Chine / Dubaï",
    originBadge: "Modèle 2023 Récent",
    priceEstimate: "3.225.000 FCFA (6 450 $) Clé en main avec Transport",
    moq: "1 unité (Sur commande)",
    badge: "Occasion 2023 • 20.000 km",
    badgeColor: "red",
    image: "/images/landrover-evoque-2023.jpg",
    description: "Land Rover Range Rover Evoque L 2023 en excellent état (seulement 20.000 km réels au compteur). Motorisation Essence 2.0T avec technologie hybride légère 48V, boîte automatique et transmission 4×4 intégrale. SUV premium luxueux, confortable et moderne.",
    features: [
      "Kilométrage certifié : 20.000 km • Année : 2023",
      "Essence 2.0T + Hybride léger 48V • Boîte Automatique",
      "Transmission 4×4 intégrale • État excellent",
      "Accès sans clé 🔑 • Système audio premium britannique 🔊",
      "Sièges chauffants et ventilés 🔥❄️ • Palettes au volant",
      "Écran multimédia tactile 📺 • Caméra de recul 📷",
      "Climatisation automatique ❄️ • Jantes alliage"
    ],
    rating: 5.0,
    reviewsCount: 42,
    transitTime: "Maritime sécurisé : 25-35 jours",
  },
  {
    id: "auto-nissan-kicks",
    title: "NISSAN KICKS SUV Compact Automatique (Occasion Chine)",
    category: "auto",
    categoryLabel: "Véhicules Importation",
    origin: "Chine (Shenzhen / Guangzhou)",
    originBadge: "Garantie 18 Mois",
    priceEstimate: "2.000.000 FCFA (3 500 $) avec Transport inclus",
    moq: "1 unité (Disponible)",
    badge: "Certifié Jamais Accidenté",
    badgeColor: "emerald",
    image: "/images/nissan-kicks-2019.jpg",
    description: "Nissan Kicks modèle 2019 en occasion certifiée de Chine, 96.000 km. Carburant Essence avec boîte de vitesses automatique souple et économique. Véhicule garanti 18 mois et certifié 100% jamais accidenté.",
    features: [
      "Année : 2019 • Kilométrage : 96.000 km",
      "Carburant : Essence ⛽️ • Boîte : Automatique",
      "GARANTIE TOTALE : 18 MOIS CERTIFIÉE ✅",
      "100% Certifié Jamais Accidenté ✅",
      "Garde au sol haute pour toutes routes africaines",
      "Contrôle technique et révision complète avant embarquement"
    ],
    rating: 4.9,
    reviewsCount: 58,
    transitTime: "Maritime sécurisé : 28-35 jours",
  },
  {
    id: "auto-toyota-yaris",
    title: "Toyota Yaris / Vitz Berline Économique Showroom",
    category: "auto",
    categoryLabel: "Véhicules Importation",
    origin: "Dubaï / Asie",
    originBadge: "N°1 en Afrique",
    priceEstimate: "Dès 1.850.000 FCFA (3 100 $) avec Transport",
    moq: "1 unité",
    badge: "Ultra-Économique",
    badgeColor: "blue",
    image: "/images/toyota-yaris-showroom.jpg",
    description: "Berline citadine économique de référence sur le continent. Motorisation essence éprouvée, consommation de moins de 5L aux 100km, pièces détachées disponibles dans toutes les villes africaines. Idéale VTC ou usage familial.",
    features: [
      "Consommation ultra-basse 4.8L / 100km",
      "Climatisation grand froid d'origine",
      "Pièces détachées abordables et accessibles partout",
      "Expédition RORO ou conteneur maritime plombé"
    ],
    rating: 5.0,
    reviewsCount: 89,
    transitTime: "Maritime : 25-35 jours",
  },
  {
    id: "auto-lexus-rx",
    title: "Lexus RX SUV Surélevé Tout Confort (Essence / Hybride)",
    category: "auto",
    categoryLabel: "Véhicules Importation",
    origin: "Dubaï (JAFZA)",
    originBadge: "Prestige & Confort",
    priceEstimate: "Sur devis personnalisé selon port africain",
    moq: "1 unité",
    badge: "Top Vente Cadres",
    badgeColor: "purple",
    image: "/images/lexusRX.jfif",
    description: "Le SUV statutaire par excellence pour cadres et chefs d'entreprise en Afrique. Garde au sol surélevée anti-pistes, intérieur cuir grand luxe, insonorisation parfaite et mécanique Toyota d'une longévité légendaire.",
    features: [
      "Garde au sol haute pour tout type de pistes",
      "Intérieur cuir luxueux et caméra 360°",
      "Dossier douane complet et connaissement maritime fourni"
    ],
    rating: 4.9,
    reviewsCount: 47,
    transitTime: "Maritime : 25-35 jours",
  },

  // ========================================================
  // 2. TÉLÉPHONIE & INFORMATIQUE EN GROS (PHOTOS DU CLIENT)
  // ========================================================
  {
    id: "tech-laptops-elitebook",
    title: "Lots PC Portables HP EliteBook 15.6\" Slim Core i5 / 16GB + 512GB SSD",
    category: "tech",
    categoryLabel: "Téléphonie & Informatique",
    origin: "Dubaï / Shenzhen",
    originBadge: "Stock Direct Entreposé",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 5 unités",
    badge: "Grossistes & Bureaux",
    badgeColor: "blue",
    image: "/images/laptops-hp-elitebook.jpg",
    description: "Arrivage massif de PC portables professionnels HP EliteBook ultra-fins châssis aluminium. Processeur Intel Core i5 puissant, 16 Go de RAM, disque SSD 512 Go ultra-rapide. Claviers configurables AZERTY/QWERTY, batteries longue durée testées 100%.",
    features: [
      "Châssis métallique slim ultra-résistant",
      "Intel Core i5 + 16GB RAM + 512GB SSD NVMe",
      "Windows 11 Pro préinstallé + Chargeurs d'origine inclus",
      "Emballage individuel sécurisé anti-choc"
    ],
    rating: 4.9,
    reviewsCount: 134,
    transitTime: "Air Cargo Express : 5-7 jours",
  },
  {
    id: "tech-iphone-palettes",
    title: "Palettes Smartphones Apple iPhone 13, 14 & 15 Pro en Gros",
    category: "tech",
    categoryLabel: "Téléphonie & Informatique",
    origin: "Dubaï / Shenzhen (Huaqiangbei)",
    originBadge: "Grade A+ Certifié",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 10 unités",
    badge: "Forte Marge Revente",
    badgeColor: "red",
    image: "/images/smartphones-iphone-palettes.jpg",
    description: "Lots de smartphones Apple récents testés par logiciel agréé avec santé de batterie supérieure à 85%-100%. Disponibles en boîtes scellées avec tous accessoires ou en vrac sécurisé pour boutiques de téléphonie.",
    features: [
      "Téléphones débloqués tout opérateur mondial",
      "Test fonctionnel 42 points (FaceID, caméras, réseau)",
      "Garantie usine avec échange direct en cas de défaut"
    ],
    rating: 5.0,
    reviewsCount: 215,
    transitTime: "Air Cargo : 4-6 jours",
  },
  {
    id: "tech-samsung-ultra",
    title: "Lot Smartphones Samsung Galaxy Ultra 5G Neufs Scellés",
    category: "tech",
    categoryLabel: "Téléphonie & Informatique",
    origin: "Chine (Shenzhen)",
    originBadge: "Neufs sous Blister",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 10 unités",
    badge: "Top Vente Android",
    badgeColor: "purple",
    image: "/images/smartphones-samsung-ultra.jpg",
    description: "Smartphones Samsung Galaxy Ultra 5G avec quadruple capteur photo haute définition, écran Dynamic AMOLED 120Hz et stylet intégré. Finition violette et noire très demandée sur le continent.",
    features: [
      "Écran 6.8\" Quad HD+ 120Hz fluide",
      "Batterie 5000 mAh longue autonomie",
      "Cartons d'origine scellés d'usine avec numéro IMEI vérifié"
    ],
    rating: 4.9,
    reviewsCount: 98,
    transitTime: "Air Cargo : 5-8 jours",
  },
  {
    id: "tech-iphone-boites",
    title: "Cartons Téléphones & Accessoires Mobiles d'Origine Scellés",
    category: "tech",
    categoryLabel: "Téléphonie & Informatique",
    origin: "Dubaï / Hong Kong",
    originBadge: "Emballage d'Origine",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 15 pièces",
    badge: "Prêt à Vendre",
    badgeColor: "emerald",
    image: "/images/smartphones-iphone-boites.jpg",
    description: "Boîtes complètes prêtes pour la mise en rayon dans vos boutiques. Téléphones avec emballages officiels scellés, câbles de charge rapide et notices multilingues.",
    features: [
      "Boîtiers officiels scellés sous film plastique",
      "Câbles USB-C charge rapide d'origine",
      "Expédition prioritaire protégée par caisse blindée"
    ],
    rating: 4.8,
    reviewsCount: 162,
    transitTime: "Air Cargo : 4-6 jours",
  },

  // ========================================================
  // 3. PERRUQUES & CHEVEUX HUMAINS (PHOTOS RÉELLES DU CLIENT)
  // ========================================================
  {
    id: "hair-lace-wig-lisse",
    title: "Perruque Lace Frontal Cheveux Humains Lisses Noirs (Bone Straight)",
    category: "hair",
    categoryLabel: "Perruques & Mèches Humaines",
    origin: "Chine (Guangzhou / Xuchang)",
    originBadge: "100% Human Hair 12A",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 5 pièces",
    badge: "Top Vente Salons",
    badgeColor: "red",
    image: "/images/perruque-lace-wig-lisse.jpg",
    description: "Cheveux 100% humains vierges grade 12A, soyeux et brillants de la racine aux pointes (effet Bone Straight). Dentelle HD invisible indétectable, pré-plumée avec baby hair. Peut être lissée, bouclée et teinte sans abîmer la fibre.",
    features: [
      "Dentelle HD suisse ultra-fine invisible",
      "Densité 180% à 250% bien fournie",
      "Zéro perte de cheveux, cuticules intactes alignées",
      "Emballage individuel prêt pour revente en salon"
    ],
    rating: 5.0,
    reviewsCount: 340,
    transitTime: "Air Cargo Express : 4-6 jours",
  },
  {
    id: "hair-body-wave-noisette",
    title: "Perruque Body Wave Ondulée Châtain Noisette de Luxe",
    category: "hair",
    categoryLabel: "Perruques & Mèches Humaines",
    origin: "Chine (Guangzhou)",
    originBadge: "Coloris Tendance 2025",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 5 pièces",
    badge: "Coup de Cœur",
    badgeColor: "amber",
    image: "/images/perruque-body-wave-noisette.jpg",
    description: "Magnifique perruque ondulée longue aux reflets chocolat et noisette lumineux. Ondulations souples et volumineuses qui tiennent après lavage, bonnet respirant ajustable avec peignes de maintien.",
    features: [
      "Couleur châtain noisette chaud très demandée",
      "Boucles souples thermo-résistantes",
      "Bonnet ajustable pour toutes tailles de tête"
    ],
    rating: 4.9,
    reviewsCount: 189,
    transitTime: "Air Cargo : 4-6 jours",
  },
  {
    id: "hair-curly-kinky",
    title: "Perruque Bouclée Afro Kinky Curly Volumineuse Noire",
    category: "hair",
    categoryLabel: "Perruques & Mèches Humaines",
    origin: "Chine (Xuchang)",
    originBadge: "Volume Naturel",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 5 pièces",
    badge: "Texture Naturelle",
    badgeColor: "purple",
    image: "/images/perruque-curly-kinky.jpg",
    description: "Boucles afro serrées et ultra-volumineuses reproduisant à la perfection le cheveu texturé naturel. Rendu spectaculaire sans démarcation, facile à hydrater et entretenir.",
    features: [
      "Densité 250% ultra-volumineuse",
      "Texture kinky curly douce au toucher",
      "Idéal pour look afro glamour chic"
    ],
    rating: 4.9,
    reviewsCount: 145,
    transitTime: "Air Cargo : 4-6 jours",
  },
  {
    id: "hair-bouclee-bordeaux",
    title: "Perruque Bouclée Bordeaux / Burgundy de Cérémonie",
    category: "hair",
    categoryLabel: "Perruques & Mèches Humaines",
    origin: "Chine / Dubaï",
    originBadge: "Style Glamour",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 5 pièces",
    badge: "Mariages & Soirées",
    badgeColor: "red",
    image: "/images/perruque-bouclee-bordeaux.jpg",
    description: "Coloris bordeaux profond / burgundy très prisé pour les mariages, fêtes et cérémonies. Boucles soyeuses définies et dentelle frontale pré-épilée pour un résultat naturel saisissant.",
    features: [
      "Coloration professionnelle permanente sans transfert",
      "Boucles rebondissantes durables",
      "Forte rotation commerciale en période de fêtes"
    ],
    rating: 4.8,
    reviewsCount: 112,
    transitTime: "Air Cargo : 4-6 jours",
  },
  {
    id: "hair-bob-frange",
    title: "Perruque Carré Court Bob Lisse avec Frange",
    category: "hair",
    categoryLabel: "Perruques & Mèches Humaines",
    origin: "Chine (Guangzhou)",
    originBadge: "Prête à Porter",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 5 pièces",
    badge: "Sans Colle (Glueless)",
    badgeColor: "emerald",
    image: "/images/perruque-bob-frange.jpg",
    description: "Modèle coupe au carré avec frange moderne sans colle (glueless), s'enfile en 30 secondes. Idéal pour le quotidien des femmes actives et étudiantes.",
    features: [
      "Pose ultra-rapide sans colle ni gel",
      "Coupe au carré nette et moderne",
      "Prix accessible pour revente rapide"
    ],
    rating: 4.9,
    reviewsCount: 167,
    transitTime: "Air Cargo : 4-6 jours",
  },

  // ========================================================
  // 4. MODE, COSTUMES & ROBES (PHOTOS RÉELLES DU CLIENT)
  // ========================================================
  {
    id: "fash-costumes-turquie",
    title: "Costumes Hommes 2 & 3 Pièces Croisés Haute Confection Turque",
    category: "fashion",
    categoryLabel: "Mode, Costumes & Robes",
    origin: "Turquie (Istanbul / Osmanbey)",
    originBadge: "Made in Turkey",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 10 pièces assorties",
    badge: "Élégance Italienne/Turque",
    badgeColor: "blue",
    image: "/images/costumes-hommes-turquie.jpg",
    description: "Costumes d'hommes d'affaires et de cérémonies coupés dans les ateliers réputés d'Istanbul. Vestes croisées avec doublure en satin, boutons dorés, coupes cintrées modernes en tissus infroissables. Coloris bleu canard, bordeaux, camel et noir.",
    features: [
      "Tailles européennes 46 à 60 complètes",
      "Livrés sur cintres avec housses de protection zippées",
      "Finition haut de gamme pour boutiques de prêt-à-porter"
    ],
    rating: 5.0,
    reviewsCount: 280,
    transitTime: "Air Cargo : 4-6 jours",
  },
  {
    id: "fash-robe-satin-rose",
    title: "Robe de Soirée Satinée Rose Cocktail Drapée Sirène",
    category: "fashion",
    categoryLabel: "Mode, Costumes & Robes",
    origin: "Turquie (Istanbul - Merter)",
    originBadge: "Confection Satin Luxe",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 15 pièces",
    badge: "Top Vente Cérémonies",
    badgeColor: "red",
    image: "/images/robe-soiree-satin-rose.jpg",
    description: "Robe cocktail en satin soyeux de Turquie avec col bénitier drapé et coupe sirène portefeuille. Tissu fluide extensible qui met en valeur la silhouette, finitions impeccables.",
    features: [
      "Satin stretch lourd infroissable",
      "Coloris rose poudré et autres teintes disponibles",
      "Très prisée pour mariages civils, anniversaires et galas"
    ],
    rating: 5.0,
    reviewsCount: 210,
    transitTime: "Air Cargo : 4-6 jours",
  },
  {
    id: "fash-abaya-perles",
    title: "Abaya & Robe de Soirée Brodée de Perles Cristallines d'Istanbul",
    category: "fashion",
    categoryLabel: "Mode, Costumes & Robes",
    origin: "Turquie (Fatih / Laleli)",
    originBadge: "Broderies Manuelles",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 10 pièces",
    badge: "Prestige & Fêtes",
    badgeColor: "purple",
    image: "/images/abaya-soiree-perles.jpg",
    description: "Création élégante en mousseline crêpe de Turquie, ornée d'un col montant et d'une ceinture asymétrique sertis de perles argentées brillantes. Confort absolu et grande allure.",
    features: [
      "Mousseline crêpe opaque haute qualité",
      "Perles et strass posés avec surpiqûres renforcées",
      "Tailles standard et grandes tailles africaines"
    ],
    rating: 4.9,
    reviewsCount: 178,
    transitTime: "Air Cargo : 5 jours",
  },
  {
    id: "fash-robe-longue-imprimee",
    title: "Robe Longue Évasée Chic Imprimée avec Ceinture",
    category: "fashion",
    categoryLabel: "Mode, Costumes & Robes",
    origin: "Turquie (Bursa / Istanbul)",
    originBadge: "Tissu Soie & Lin",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 20 pièces",
    badge: "Grande Vente Quotidienne",
    badgeColor: "emerald",
    image: "/images/robe-longue-imprimee.jpg",
    description: "Robe longue fluide avec ceinture cintrée et motifs artistiques modernes jaune, bleu et blanc. Idéale pour le travail, les cultes religieux et les sorties décontractées chic.",
    features: [
      "Tissu frais respirant adapté au climat tropical",
      "Ceinture amovible incluse pour cintrage sur mesure",
      "Tailles S à 3XL panachées"
    ],
    rating: 4.8,
    reviewsCount: 195,
    transitTime: "Air : 5j • Mer : 25j",
  },
  {
    id: "fash-chemises-polo",
    title: "Chemises Hommes Col Polo & Chemises Italiennes Rayées",
    category: "fashion",
    categoryLabel: "Mode, Costumes & Robes",
    origin: "Turquie (Istanbul)",
    originBadge: "Coton Turc 100%",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 30 pièces",
    badge: "Boutiques Hommes",
    badgeColor: "blue",
    image: "/images/chemises-hommes-polo.jpg",
    description: "Lots panachés de chemises hommes modernes à col ouvert bicolore et chemises cintrées rayées avec col blanc contrasté. Tissu en coton peigné texturé très agréable à porter.",
    features: [
      "Coton turc texturé doux et respirant",
      "Tailles M à 3XL en série complète",
      "Assortiment de coloris sobres : blanc, noir, marron, bordeaux"
    ],
    rating: 4.9,
    reviewsCount: 160,
    transitTime: "Air Cargo : 4-6 jours",
  },
  {
    id: "fash-jogging-sweat",
    title: "Pantalons Jogging Molleton & Pantalons Streetwear Patchwork",
    category: "fashion",
    categoryLabel: "Mode, Costumes & Robes",
    origin: "Chine / Turquie",
    originBadge: "Forte Tendance Jeunesse",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 50 pièces",
    badge: "Forte Rotation",
    badgeColor: "amber",
    image: "/images/pantalon-jogging-molleton.jpg",
    description: "Pantalons de survêtement molletonnés ultra-confortables avec taille élastique et chevilles resserrées (5 coloris pastel et neutres), et jeans larges streetwear patchwork très demandés par la jeunesse urbaine.",
    features: [
      "Tissu molleton doux intérieur polaire léger",
      "Coupe ample décontractée tendance",
      "Emballage individuel étiqueté"
    ],
    rating: 4.9,
    reviewsCount: 220,
    transitTime: "Air : 5-8j • Mer : 28j",
  },
  {
    id: "fash-bebe-peluche",
    title: "Combinaisons Bébés Peluche & Ensembles Enfants Animaux",
    category: "fashion",
    categoryLabel: "Mode, Costumes & Robes",
    origin: "Chine (Yiwu)",
    originBadge: "Spécial Bébés & Enfants",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 50 pièces panachées",
    badge: "Maternité & Naissance",
    badgeColor: "emerald",
    image: "/images/grenouillere-bebe-peluche.jpg",
    description: "Grenouillères doudou en matière peluche ultra-douce avec capuche oreilles de lapin (blanc et rose) et ensembles t-shirt et short imprimé animaux safari. Gros succès commercial dans les boutiques pour enfants.",
    features: [
      "Matière velours peluche hypoallergénique sans irritation",
      "Fermetures faciles par boutons pression",
      "Séries de tailles naissance jusqu'à 3 ans"
    ],
    rating: 5.0,
    reviewsCount: 215,
    transitTime: "Air Cargo : 5-7 jours",
  },

  // ========================================================
  // 5. CHAUSSURES & BASKETS (PHOTOS RÉELLES DU CLIENT)
  // ========================================================
  {
    id: "shoes-jordan-streetwear",
    title: "Lots Baskets Nike Air Jordan Montantes Streetwear (Cartons Séries)",
    category: "shoes",
    categoryLabel: "Chaussures & Baskets",
    origin: "Chine (Putian Hub)",
    originBadge: "Grade Original 1:1",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 24 paires (séries 39 à 45)",
    badge: "N°1 Vente Jeunesse",
    badgeColor: "red",
    image: "/images/baskets-jordan-streetwear.jpg",
    description: "Cartons complets de baskets montantes mythiques dans tous les coloris les plus recherchés (Chicago Red, University Blue, Mocha Brown, Shadow Black). Semelles avec coussins d'air amortissants, livrées avec leurs boîtes officielles d'origine.",
    features: [
      "Boîtes officielles d'origine avec lacets de rechange",
      "Cuir synthétique et finitions soignées sans défaut",
      "Cartons équilibrés en pointures hommes (39-45)"
    ],
    rating: 5.0,
    reviewsCount: 410,
    transitTime: "Air Cargo Express : 5-7 jours",
  },
  {
    id: "shoes-derbies-berluti",
    title: "Chaussures Richelieu & Derbies Cuir Homme Ville / Cérémonie",
    category: "shoes",
    categoryLabel: "Chaussures & Baskets",
    origin: "Turquie (Istanbul / Gaziantep)",
    originBadge: "Cuir Véritable",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 15 paires",
    badge: "Luxe Masculin",
    badgeColor: "blue",
    image: "/images/chaussures-derbies-berluti.jpg",
    description: "Chaussures de ville haut de gamme en cuir pleine fleur avec motif fleuri perforé (Brogue) et semelle plateforme moderne bicolore. Confort exceptionnel pour les journées de bureau, cultes et mariages.",
    features: [
      "Cuir sélectionné souple et résistant",
      "Semelle cousue confort amortissante",
      "Boîtes individuelles de luxe incluses"
    ],
    rating: 4.9,
    reviewsCount: 138,
    transitTime: "Air Cargo : 5-8 jours",
  },
  {
    id: "shoes-claquettes-homme",
    title: "Claquettes & Mules en Cuir Croisé Homme de Luxe",
    category: "shoes",
    categoryLabel: "Chaussures & Baskets",
    origin: "Turquie / Dubaï",
    originBadge: "Confort Cuir",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 30 paires",
    badge: "Incontournable",
    badgeColor: "amber",
    image: "/images/claquettes-cuir-homme.jpg",
    description: "Mules d'été homme en cuir marron et noir avec lanières croisées et semelle anatomique ergonomique. Finition soignée avec pochon en tissu et boîte de présentation.",
    features: [
      "Semelle anatomique à mémoire de forme",
      "Lanières cuir souple anti-frottement",
      "Très forte demande toute l'année en Afrique"
    ],
    rating: 4.9,
    reviewsCount: 204,
    transitTime: "Air ou Maritime",
  },
  {
    id: "shoes-escarpins-bottines",
    title: "Escarpins Vernis Noirs, Bottines à Talon & Sandales Plates",
    category: "shoes",
    categoryLabel: "Chaussures & Baskets",
    origin: "Turquie / Chine",
    originBadge: "Mode Féminine",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 24 paires",
    badge: "Boutiques Dames",
    badgeColor: "purple",
    image: "/images/escarpins-vernis-noir.jpg",
    description: "Assortiments pour boutiques féminines : escarpins vernis noirs à talon bloc confortable, bottines tendance avec boucle dorée et mules plates d'été avec chaîne dorée chic.",
    features: [
      "Hauteur de talon stable et agréable à porter",
      "Matériaux résistants et finitions élégantes",
      "Cartons assortis en pointures 36 à 41"
    ],
    rating: 4.8,
    reviewsCount: 175,
    transitTime: "Air : 5j • Mer : 28j",
  },
  {
    id: "shoes-enfants-lot",
    title: "Lots Chaussures Enfants, Baskets Premiers Pas & Filles",
    category: "shoes",
    categoryLabel: "Chaussures & Baskets",
    origin: "Chine (Wenzhou)",
    originBadge: "Bébés & Enfants",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 40 paires panachées",
    badge: "Petit Prix Revente",
    badgeColor: "emerald",
    image: "/images/chaussures-enfants-lot.jpg",
    description: "Lots variés pour enfants et bébés : petites baskets scratchs, sandales en plastique souple étanche, chaussures de cérémonie rose à nœud et mocassins tout-petits.",
    features: [
      "Semelles antidérapantes souples pour les premiers pas",
      "Fermetures à scratch pratiques et sécurisées",
      "Mélange équilibré de pointures 18 à 35"
    ],
    rating: 4.9,
    reviewsCount: 188,
    transitTime: "Maritime ou Air",
  },

  // ========================================================
  // 6. ÉNERGIE, FRIPERIE & USINES (PHOTOS RÉELLES DU CLIENT)
  // ========================================================
  {
    id: "mach-generator-inverter",
    title: "Groupes Électrogènes Inverter Silencieux Dual Fuel (Essence/Gaz)",
    category: "machinery",
    categoryLabel: "Énergie, Friperie & Usines",
    origin: "Chine (Chongqing)",
    originBadge: "Inverter Pure Sinus",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "À partir de 1 unité",
    badge: "Ultra-Silencieux & Économe",
    badgeColor: "emerald",
    image: "/images/generator-inverter-silencieux.jpg",
    description: "Générateur inverter silencieux portable KATHER MEICHENG 3800iH Dual Fuel (fonctionne à l'essence ou avec bouteille de gaz butane domestique). Émission sonore très basse, onde pure sinus protégeant ordinateurs, téléviseurs et appareils sensibles lors des coupures de courant.",
    features: [
      "Technologie Inverter pure sinus sécurisée pour appareils fragiles",
      "Bi-carburant : Essence ou Bouteille de Gaz butane standard",
      "Démarrage facile et poignée de transport ergonomique",
      "Consommation réduite de 40% par rapport aux groupes classiques"
    ],
    rating: 5.0,
    reviewsCount: 120,
    transitTime: "Maritime sécurisé : 28-35 jours",
  },
  {
    id: "mach-balles-friperie",
    title: "Balles de Friperie Triée Premier Choix (Balles de 45kg à 100kg)",
    category: "machinery",
    categoryLabel: "Énergie, Friperie & Usines",
    origin: "Chine (Hangzhou / Guangzhou) & Turquie",
    originBadge: "Grade A+ Sans Déchet",
    priceEstimate: "Contactez-nous pour un devis",
    moq: "Lot min. : 10 balles (ou conteneur complet)",
    badge: "Rentabilité Maximale",
    badgeColor: "red",
    image: "/images/balles-friperie-gros.jpg",
    description: "Approvisionnement direct d'usine en balles de friperie de première qualité (Crème / Extra A). Marchandises soigneusement triées, sans trous ni taches : vêtements légers en coton, t-shirts, robes, joggings, jeans et draps de lit sous film plastique cerclé scellé.",
    features: [
      "Balles scellées d'origine certifiées sans déchirure",
      "Étiquetage clair par catégorie (coton, chemises, joggings, enfants)",
      "Possibilité de conteneur complet 40ft HC livré à votre port",
      "Vidéo de contrôle du chargement avant scellage des plombs"
    ],
    rating: 5.0,
    reviewsCount: 310,
    transitTime: "Maritime conteneur : 25-35 jours",
  },
];
