'use client';

import { useLanguage } from './LanguageProvider';
import { homeDictionaries } from '../lib/homeI18n';

export default function AboutSection() {
  const { locale } = useLanguage();
  const copy = homeDictionaries[locale].about;
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/sChXehSYd4k?rel=0&showinfo=0"
            title={copy.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="section-header">
          <p className="section-subtitle">{copy.subtitle}</p>
          <h2 className="section-title">{copy.title}</h2>
        </div>

        <div className="about-text">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
