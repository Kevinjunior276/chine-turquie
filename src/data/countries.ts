export const CONTACT_INFO = {
  directorName: 'M. FOGENG MARIUS',
  directorTitle: 'Directeur des Opérations Internationales & Trade',
  whatsappNumber: '+905301378199',
  whatsappDisplay: '+90 530 137 8199',
  whatsappGroupLink: 'https://chat.whatsapp.com/DUbWN0PWa3B9Ax4P6zu6oF',
  facebookUrl: 'https://www.facebook.com/share/1A1hYdFb2V/',
  getWhatsappUrl: (message?: string) => {
    const text = message || "Bonjour M. FOGENG MARIUS, je vous contacte depuis le site officiel EXPRESS CHINE & TURQUIE au sujet d'un projet d'approvisionnement.";
    return `https://wa.me/905301378199?text=${encodeURIComponent(text)}`;
  },
  getProductInquiryUrl: (productTitle: string) => {
    const text = `Bonjour M. FOGENG MARIUS, je souhaite obtenir des informations et une cotation officielle pour le produit : ${productTitle}.`;
    return `https://wa.me/905301378199?text=${encodeURIComponent(text)}`;
  }
};

export interface DestinationCountry {
  code: string;
  name: string;
  flag: string;
  majorHubs: string[];
  airDays: string;
  seaDays: string;
}

export const DESTINATIONS: DestinationCountry[] = [
  { code: 'CM', name: 'Cameroun', flag: '🇨🇲', majorHubs: ['Douala (Port & Aéroport)', 'Yaoundé-Nsimalen'], airDays: '5-8 jours', seaDays: '28-35 jours' },
  { code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮', majorHubs: ['Abidjan (Port Autonome & Aéroport FHB)'], airDays: '5-7 jours', seaDays: '25-32 jours' },
  { code: 'SN', name: 'Sénégal', flag: '🇸🇳', majorHubs: ['Dakar (Port Autonome & AIBD)'], airDays: '5-7 jours', seaDays: '22-30 jours' },
  { code: 'CD', name: 'RD Congo', flag: '🇨🇩', majorHubs: ['Kinshasa (Ndjili & Matadi)', 'Lubumbashi'], airDays: '6-9 jours', seaDays: '35-45 jours' },
  { code: 'GA', name: 'Gabon', flag: '🇬🇦', majorHubs: ['Libreville (Owendo & Aéroport Léon Mba)'], airDays: '5-8 jours', seaDays: '30-38 jours' },
  { code: 'ML', name: 'Mali', flag: '🇲🇱', majorHubs: ['Bamako (Aéroport Senou & Transit Dakar/Abidjan)'], airDays: '6-9 jours', seaDays: '35-45 jours' },
  { code: 'BJ', name: 'Bénin', flag: '🇧🇯', majorHubs: ['Cotonou (Port Autonome & Aéroport Cadjehoun)'], airDays: '5-8 jours', seaDays: '26-34 jours' },
  { code: 'TG', name: 'Togo', flag: '🇹🇬', majorHubs: ['Lomé (Port en Eau Profonde & Aéroport Gnassingbé)'], airDays: '5-7 jours', seaDays: '25-32 jours' },
  { code: 'CG', name: 'Congo-Brazzaville', flag: '🇨🇬', majorHubs: ['Pointe-Noire (Port Maritime)', 'Brazzaville (Maya-Maya)'], airDays: '6-9 jours', seaDays: '32-40 jours' },
  { code: 'GN', name: 'Guinée', flag: '🇬🇳', majorHubs: ['Conakry (Port Autonome & Gbessia)'], airDays: '6-8 jours', seaDays: '26-35 jours' },
  { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫', majorHubs: ['Ouagadougou (Aéroport & Transit Maritime)'], airDays: '6-9 jours', seaDays: '35-45 jours' },
  { code: 'NE', name: 'Niger', flag: '🇳🇪', majorHubs: ['Niamey (Aéroport Diori Hamani & Transit Cotonou)'], airDays: '7-10 jours', seaDays: '38-48 jours' }
];
