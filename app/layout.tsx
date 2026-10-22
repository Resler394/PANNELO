import type {Metadata, Viewport} from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0d' },
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
  ],
};

export const metadata: Metadata = {
  title: 'PANNELLO — Taste The Best | Menu Numérique',
  description: 'Menu numérique officiel du restaurant PANNELLO. Découvrez nos pizzas sauce rouge et blanche, smash burgers, tacos, sandwiches, tombik, calzon, boissons fraîches et crêpes.',
  keywords: ['PANNELLO', 'Menu Digital', 'Restaurant', 'Pizza', 'Smash Burger', 'Tacos', 'Tombik', 'Algerie', 'Fast Food'],
  authors: [{ name: 'PANNELLO' }],
  openGraph: {
    title: 'PANNELLO — Taste The Best | Menu Numérique',
    description: 'Consultez la carte complète et les prix officiels en direct sur votre mobile.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PANNELLO — Taste The Best | Menu Numérique',
    description: 'Consultez la carte complète et les prix officiels en direct sur votre mobile.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "PANNELLO",
              "slogan": "TASTE THE BEST",
              "servesCuisine": ["Pizza", "Burgers", "Tacos", "Fast Food"],
              "priceRange": "$$",
              "currenciesAccepted": "DZD",
              "menu": "https://pannello.menu",
              "hasMenu": {
                "@type": "Menu",
                "name": "Carte PANNELLO",
                "hasMenuSection": [
                  { "@type": "MenuSection", "name": "Pizza Sauce Rouge" },
                  { "@type": "MenuSection", "name": "Pizza Sauce Blanche" },
                  { "@type": "MenuSection", "name": "Tacos" },
                  { "@type": "MenuSection", "name": "Smash Burger" },
                  { "@type": "MenuSection", "name": "Pocket" },
                  { "@type": "MenuSection", "name": "Tombik" },
                  { "@type": "MenuSection", "name": "Calzon" },
                  { "@type": "MenuSection", "name": "Sandwichs" },
                  { "@type": "MenuSection", "name": "Fries" },
                  { "@type": "MenuSection", "name": "Boissons" },
                  { "@type": "MenuSection", "name": "Sweets" }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-200 antialiased selection:bg-[#C8102E] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
