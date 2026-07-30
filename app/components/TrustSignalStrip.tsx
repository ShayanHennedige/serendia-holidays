'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { homeDictionaries } from '../lib/homeI18n';

const FACT_ROTATION_COUNT = homeDictionaries.en.trust.facts.length;

export default function TrustSignalStrip() {
  const { locale } = useLanguage();
  const copy = homeDictionaries[locale].trust;
  const companyFacts = copy.facts;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FACT_ROTATION_COUNT);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fact = companyFacts[activeIndex];

  return (
    <section className="trust-strip" aria-label={copy.aria}>
      <div className="container trust-strip-inner">
        <span className="trust-strip-kicker">{copy.kicker}</span>
        <div className="trust-strip-fact" key={fact.label}>
          <strong>{fact.label}.</strong> <span>{fact.detail}</span>
        </div>
        <div className="trust-strip-dots">
          {companyFacts.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`trust-strip-dot ${index === activeIndex ? 'active' : ''}`}
              aria-label={`${copy.showFact}: ${item.label}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
