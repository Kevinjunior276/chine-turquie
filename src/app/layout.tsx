import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://expresschineturquie.com"),
  title: "EXPRESS CHINE & TURQUIE | Sourcing Direct & Logistique Globale vers l'Afrique",
  description:
    "De la Chine, Dubaï et la Turquie vers vos opportunités en Afrique. Nous facilitons vos achats et vos projets d'importation grâce à un accompagnement rigoureux dans la recherche, l'achat et l'expédition de produits.",
  keywords: [
    "Express Chine Turquie",
    "Sourcing Chine",
    "Import Turquie",
    "Achat Dubaï",
    "Fret aérien Afrique",
    "Conteneur maritime Afrique",
    "M. Fogeng Marius",
    "Import export Afrique",
    "Grossiste Chine Turquie",
  ],
  authors: [{ name: "EXPRESS CHINE & TURQUIE" }],
  openGraph: {
    title: "EXPRESS CHINE & TURQUIE | Sourcing & Logistique Globale",
    description: "De la Chine, Dubaï et la Turquie vers vos opportunités en Afrique.",
    images: [{ url: "/images/logo.png" }],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full pt-20 bg-slate-50 flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
