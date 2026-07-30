'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

const features = [
  { number: '01', icon: '✦', title: 'Trip intelligence', copy: 'Interests, dates, party and comfort level become a grounded day-by-day route.', accent: 'ember' },
  { number: '02', icon: '⌕', title: 'Natural search', copy: 'Search the way you speak. The system understands trip intent, not just keywords.', accent: 'aqua' },
  { number: '03', icon: '◎', title: 'Personal curation', copy: 'Tours, stays and transport adapt to what you explore and tell us you love.', accent: 'lime' },
  { number: '04', icon: '◌', title: '24/7 concierge', copy: 'Instant first-line answers with a clean handoff when a human expert is needed.', accent: 'violet' },
  { number: '05', icon: '▤', title: 'Smart quote draft', copy: 'A complete tour, hotel and transport outline—always marked for staff review.', accent: 'gold' },
  { number: '06', icon: '✓', title: 'Human approved', copy: 'AI inspires. Serendia specialists verify availability, pricing and every booking.', accent: 'rose' },
];

export default function AIExperience() {
  const { dictionary: { ai } } = useLanguage();
  return (
    <section className="ai-experience" aria-labelledby="ai-experience-title">
      <div className="ai-experience-glow" aria-hidden="true" />
      <div className="ai-experience-shell">
        <header className="ai-experience-header">
          <div>
            <p><span /> {ai.kicker}</p>
            <h2 id="ai-experience-title">{ai.titleA}<br /><em>{ai.titleB}</em></h2>
          </div>
          <div className="ai-experience-intro">
            <p>{ai.intro}</p>
            <Link href="/customize">{ai.start} <span>↗</span></Link>
          </div>
        </header>

        <div className="ai-feature-grid">
          {features.map((feature) => (
            <article key={feature.number} className={`ai-feature-card ${feature.accent}`}>
              <div className="ai-feature-top"><span>{feature.number}</span><i>{feature.icon}</i></div>
              <h3>{ai.features[Number(feature.number) - 1][0]}</h3>
              <p>{ai.features[Number(feature.number) - 1][1]}</p>
              <div className="ai-feature-line"><span /></div>
            </article>
          ))}
        </div>

        <div className="ai-proof-panel">
          <div className="ai-proof-visual" aria-hidden="true">
            <div className="ai-orbit orbit-one"><i /></div>
            <div className="ai-orbit orbit-two"><i /></div>
            <div className="ai-orbit-core">SH<span>AI</span></div>
          </div>
          <div className="ai-proof-copy">
            <p className="ai-proof-kicker">{ai.human}</p>
            <h3>{ai.dream}<br />{ai.confirm}</h3>
            <p>{ai.safety}</p>
            <div className="ai-proof-steps">
              <span><b>01</b> {ai.steps[0]}</span><i />
              <span><b>02</b> {ai.steps[1]}</span><i />
              <span><b>03</b> {ai.steps[2]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
