import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Pub/Header";
import Footer from "./components/Pub/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = 'https://www.tourtra.ma';

export const metadata: Metadata = {
  title: {
    default: "Tourtora - Entreprise de Construction & BTP au Maroc",
    template: "%s | Tourtora Construction"
  },
  description: "Tourtora est votre partenaire de confiance pour le BTP au Maroc. Étude de projet, gros œuvre, et finitions de haute qualité pour bâtiments résidentiels et industriels.",
  
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'fr-MA': '/',
    },
  },

  keywords: [
    "entreprise de construction Maroc", 
    "BTP Casablanca", 
    "gros oeuvre Maroc", 
    "rénovation bâtiment Rabat", 
    "Tourtora BTP", 
    "devis construction Maroc", 
    "génie civil Maroc",
    "construction industrielle"
  ],
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: "Tourtora - L'excellence dans la construction au Maroc",
    description: "Expertise technique et rigueur pour tous vos projets de construction, du terrassement à la remise des clés.",
    url: siteUrl,
    siteName: 'Tourtora',
    images: [
      {
        url: '/og-image-construction.png', // Make sure this image showcases a construction site
        width: 1200,
        height: 630,
        alt: 'Tourtora - Réalisations BTP et Construction au Maroc',
      },
    ],
    locale: 'fr_MA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Tourtora Construction & BTP Maroc",
    description: "Réalisez vos projets de construction avec une expertise professionnelle et des délais respectés.",
    images: [`${siteUrl}/og-image-construction.png`],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for a Construction/HomeAndConstructionBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Tourtora",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/hero-construction.jpg`,
    "description": "Entreprise spécialisée dans le bâtiment et les travaux publics (BTP) au Maroc.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca", // Adjust if your HQ is elsewhere
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5731, 
      "longitude": -7.5898
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Construction",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Étude & Devis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Travaux de Gros Œuvre"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Livraison Clés en Main"
          }
        }
      ]
    },
    "priceRange": "$$$"
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}