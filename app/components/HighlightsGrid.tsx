'use client';

import { useLanguage } from './LanguageProvider';
import { homeDictionaries } from '../lib/homeI18n';

interface Highlight {
  image: string;
  title: string;
  href: string;
}

const highlightMedia: Omit<Highlight, 'title'>[] = [
  {
    image: '/images/tour-polonnaruwa.png',
    href: '/excursions/polonnaruwa-excursion',
  },
  {
    image: '/images/hero-3.png',
    href: '/excursions/yala-excursion-from-bentota-or-galle',
  },
  {
    image: '/images/hero-2.png',
    href: '/excursions/nuwara-eliya-excursion-from-kandy',
  },
  {
    image: '/images/hero-4.png',
    href: '/tours/best-of-sri-lanka-culture-nature-and-wild-life',
  },
];

export default function HighlightsGrid() {
  const { locale } = useLanguage();
  const copy = homeDictionaries[locale].highlights;
  const highlights = highlightMedia.map((item, index) => ({ ...item, title: copy.items[index] }));
  return (
    <section className="section section-light" id="highlights">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">{copy.subtitle}</p>
          <h2 className="section-title">{copy.title}</h2>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <a key={index} href={item.href} className="highlight-card">
              <img src={item.image} alt={item.title} />
              <div className="highlight-overlay">
                <h3 className="highlight-title">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
