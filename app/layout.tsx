import React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import './collection-pages.css';
import './tour-packages.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackButton from './components/BackButton';
import AIChatConcierge from './components/AIChatConcierge';
import LanguageProvider from './components/LanguageProvider';
import AutoPageTranslation from './components/AutoPageTranslation';
import WhatsAppSupport from './components/WhatsAppSupport';
import { siteName, siteUrl, siteUrlFor } from './lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: 'Sri Lanka Tours & Tailor-Made Holidays | Serendia Holidays',
  description: 'Plan a private, tailor-made Sri Lanka holiday with local experts. Explore culture, wildlife, beaches, hotels and day excursions with Serendia Holidays.',
  keywords: ['Sri Lanka tours', 'tailor-made Sri Lanka holidays', 'Sri Lanka travel agency', 'Sri Lanka excursions', 'Sri Lanka safari', 'Sri Lanka hotels', 'Serendia Holidays'],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'Travel',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/android-chrome-192x192.png', type: 'image/png' }],
    apple: [{ url: '/android-chrome-192x192.png', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Sri Lanka Tours & Tailor-Made Holidays | Serendia Holidays',
    description: 'Private Sri Lanka holidays shaped around the way you want to travel.',
    url: siteUrlFor(),
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero-1.png', width: 1024, height: 1024, alt: 'Tea country landscape in Sri Lanka' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Lanka Tours & Tailor-Made Holidays | Serendia Holidays',
    description: 'Private Sri Lanka holidays shaped around the way you want to travel.',
    images: ['/images/hero-1.png'],
  },
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
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: siteName,
              url: siteUrl,
              logo: siteUrlFor('/android-chrome-512x512.png'),
              image: siteUrlFor('/images/hero-1.png'),
              telephone: '+94 77 398 6504',
              email: 'dharshan@venomholidays.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '63A, Old Road, Pannipitiya',
                addressCountry: 'LK',
              },
              areaServed: ['Sri Lanka', 'Maldives'],
              sameAs: [
                'https://www.facebook.com/Venom-Holidays-1790614197716887/',
                'https://www.instagram.com/venomholidays/',
              ],
            }),
          }}
        />
        <LanguageProvider>
          <Header />
          <BackButton />
          {children}
          <AutoPageTranslation />
          <Footer />
          <ScrollToTop />
          <AIChatConcierge />
          <WhatsAppSupport phoneNumber={process.env.COMPANY_WHATSAPP_NUMBER || '94773986504'} />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
