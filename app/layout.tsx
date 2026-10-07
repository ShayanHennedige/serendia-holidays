import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import './collection-pages.css';
import './tour-packages.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AIChatConcierge from './components/AIChatConcierge';
import LanguageProvider from './components/LanguageProvider';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, jsonLdScript, organizationJsonLd } from './lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sri Lanka & Maldives Tours - Serendia Holidays By Venom',
  description: 'Serendia Holidays by Venom established on 1st January 2019 with the objective to focus on booming tourism industry in Sri Lanka. Arrange round trips in Sri Lanka & Maldives for tourists worldwide.',
  keywords: ['Sri Lanka tours', 'Sri Lanka tour packages', 'Maldives holidays', 'Sri Lanka excursions', 'Sri Lanka safari', 'cricket tourism Sri Lanka', 'Serendia Holidays', 'Venom Holidays'],
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sri Lanka & Maldives Tours - Serendia Holidays By Venom',
    description: 'Explore Desires! Want to make a journey… We got the destinations…',
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Lanka & Maldives Tours - Serendia Holidays By Venom',
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)} />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <AIChatConcierge />
        </LanguageProvider>
      </body>
    </html>
  );
}
