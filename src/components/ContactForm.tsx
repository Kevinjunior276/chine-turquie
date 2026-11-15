"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { MessageSquare, Send, CheckCircle2, ShieldCheck, UploadCloud, MapPin, Building, User, Phone } from "lucide-react";
import { DESTINATIONS, CONTACT_INFO } from "@/data/countries";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Cameroun (Douala)");
  const [hub, setHub] = useState("Chine & Turquie");
  const [productType, setProductType] = useState("");
  const [shippingMode, setShippingMode] = useState("Fret Aérien Express (5-8 j)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ac0015", "#25d366", "#0c1a30"],
      });
    } catch {
      // ignore
    }
  };

  const formattedWhatsappMsg = `Bonjour M. FOGENG MARIUS, voici ma demande d'approvisionnement :
• Nom & Prénom : ${name}
• Entreprise / Activité : ${company || "Particulier / Revendeur"}
• Téléphone / WhatsApp : ${phone}
• Destination : ${destination}
• Pôle recherché : ${hub}
• Mode d'expédition souhaité : ${shippingMode}
• Description du produit recherché : ${productType}

Merci de me confirmer la faisabilité et les délais.`;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-100">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Nom complet *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex : Jean-Paul Kamga"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl p-3.5 pl-10 focus:ring-2 focus:ring-[#ac0015] focus:outline-none"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Entreprise / Activité commerciale
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Ex : Kamga Distribution SARL"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl p-3.5 pl-10 focus:ring-2 focus:ring-[#ac0015] focus:outline-none"
                />
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Numéro WhatsApp (avec indicatif) *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex : +237 6XX XX XX XX"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl p-3.5 pl-10 focus:ring-2 focus:ring-[#ac0015] focus:outline-none"
                />
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Ville & Pays de destination en Afrique *
              </label>
              <div className="relative">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl p-3.5 focus:ring-2 focus:ring-[#ac0015] focus:outline-none"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.code} value={`${d.name} (${d.majorHubs[0]})`}>
                      {d.flag} {d.name} — {d.majorHubs[0]}
                    </option>
                  ))}
                  <option value="Autre destination africaine">Autre ville / pays d&apos;Afrique</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Pôle d&apos;approvisionnement souhaité
              </label>
              <select
                value={hub}
                onChange={(e) => setHub(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl p-3.5 focus:ring-2 focus:ring-[#ac0015] focus:outline-none"
              >
                <option value="Chine (Guangzhou / Yiwu / Shenzhen)">Chine (Guangzhou, Yiwu, Shenzhen)</option>
                <option value="Turquie (Istanbul)">Turquie (Istanbul - Textile, Meubles, Confection)</option>
                <option value="Dubaï (Émirats Arabes Unis)">Dubaï (Véhicules, High-Tech, Transit express)</option>
                <option value="Indifférent / Selon le meilleur tarif">Indifférent / Selon le meilleur tarif usine</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Type de transit souhaité
              </label>
              <select
                value={shippingMode}
                onChange={(e) => setShippingMode(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl p-3.5 focus:ring-2 focus:ring-[#ac0015] focus:outline-none"
              >
                <option value="Fret Aérien Express (5-8 j)">Fret Aérien Express (5 à 8 jours ouvrés)</option>
                <option value="Fret Maritime Groupage (LCL)">Fret Maritime Groupage (LCL - Partiel)</option>
                <option value="Conteneur Entier Dédié (20ft / 40ft HQ)">Conteneur Entier Dédié (20ft / 40ft HQ)</option>
                <option value="RORO Véhicules & Engins">RORO Véhicules & Engins roulants</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Détails du produit recherché, références ou quantité *
            </label>
            <textarea
              required
              rows={4}
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              placeholder="Précisez le produit désiré (modèle, spécifications techniques, quantité minimale, budget estimé ou lien web)..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium rounded-xl p-3.5 focus:ring-2 focus:ring-[#ac0015] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#ac0015] hover:bg-[#d32027] text-white rounded-xl text-base font-extrabold shadow-lg shadow-[#ac0015]/25 transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-[0.99]"
            >
              <Send className="w-5 h-5" />
              Transmettre ma demande d&apos;approvisionnement
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Étude de faisabilité gratuite • Réponse prioritaire sous 1h à 3h</span>
          </div>
        </form>
      ) : (
        <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Demande enregistrée avec succès !
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Merci <strong>{name}</strong>. Votre dossier a été transmis à la direction des opérations internationales.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-md mx-auto text-left text-xs text-slate-700 space-y-2">
            <p><strong>Pôle :</strong> {hub}</p>
            <p><strong>Destination :</strong> {destination}</p>
            <p><strong>Mode :</strong> {shippingMode}</p>
            <p><strong>Produit :</strong> {productType}</p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.getWhatsappUrl(formattedWhatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-md transition-all transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              Transmettre immédiatement sur WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
            >
              Faire une autre demande
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
