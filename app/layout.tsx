import React from 'react';
import './globals.css';
import './collection-pages.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AIChatConcierge from './components/AIChatConcierge';
import LanguageProvider from './components/LanguageProvider';

export const metadata = {
  title: 'Welcome - Serendia Holidays By Venom',
  description: 'Serendia Holidays by Venom established on 1st January 2019 with the objective to focus on booming tourism industry in Sri Lanka. Arrange round trips in Sri Lanka & Maldives for tourists worldwide.',
  keywords: 'Sri Lanka tours, Maldives holidays, travel Sri Lanka, excursions, safari, Venom Holidays, Serendia Holidays',
  openGraph: {
    title: 'Welcome - Serendia Holidays By Venom',
    description: 'Explore Desires! Want to make a journey… We got the destinations…',
    url: 'https://www.venomholidays.com/',
    siteName: 'Serendia Holidays By Venom',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome - Serendia Holidays By Venom',
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
