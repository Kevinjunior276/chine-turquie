import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
        {/* Tailwind CDN with exact Stitch configuration for 100% pixel-perfect design */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  colors: {
                    "primary-fixed-dim": "#ffb3ad",
                    "surface-container-high": "#e6e8ea",
                    "on-secondary-fixed-variant": "#3a475f",
                    "on-primary-container": "#ffeae8",
                    "tertiary": "#006129",
                    "on-tertiary": "#ffffff",
                    "on-primary-fixed": "#410003",
                    "surface-bright": "#f7f9fb",
                    "secondary-fixed-dim": "#b9c7e4",
                    "on-secondary": "#ffffff",
                    "error": "#ba1a1a",
                    "on-error": "#ffffff",
                    "on-tertiary-fixed": "#002109",
                    "on-error-container": "#93000a",
                    "secondary-fixed": "#d6e3ff",
                    "on-primary-fixed-variant": "#930010",
                    "inverse-on-surface": "#eff1f3",
                    "on-background": "#191c1e",
                    "on-surface": "#191c1e",
                    "surface": "#f7f9fb",
                    "surface-container": "#eceef0",
                    "primary-fixed": "#ffdad6",
                    "surface-variant": "#e0e3e5",
                    "error-container": "#ffdad6",
                    "primary-container": "#d32027",
                    "background": "#f7f9fb",
                    "surface-container-low": "#f2f4f6",
                    "inverse-primary": "#ffb3ad",
                    "tertiary-fixed": "#66ff8e",
                    "surface-tint": "#be091b",
                    "on-secondary-container": "#56637c",
                    "outline-variant": "#e5bdb9",
                    "outline": "#916f6c",
                    "inverse-surface": "#2d3133",
                    "surface-dim": "#d8dadc",
                    "on-secondary-fixed": "#0e1c32",
                    "surface-container-lowest": "#ffffff",
                    "tertiary-container": "#007d37",
                    "primary": "#dc2626",
                    "primary-container": "#ef4444",
                    "secondary": "#1e293b",
                    "secondary-container": "#334155",
                    "tertiary": "#059669",
                    "tertiary-container": "#10b981",
                    "surface": "#ffffff",
                    "surface-bright": "#ffffff",
                    "surface-container": "#f8fafc",
                    "surface-container-low": "#ffffff",
                    "surface-container-high": "#f1f5f9",
                    "surface-container-highest": "#e2e8f0",
                    "surface-container-lowest": "#ffffff",
                    "on-surface": "#0f172a",
                    "on-surface-variant": "#334155",
                    "background": "#f8fafc",
                    "on-background": "#0f172a",
                  },
                },
              },
            };
          `,
          }}
        />
      </head>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full pt-20 bg-slate-50 flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
