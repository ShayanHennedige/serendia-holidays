import Link from 'next/link';
import InnerHero from '../components/InnerHero';
import TrustSignalStrip from '../components/TrustSignalStrip';
import { companyFacts } from '../lib/companyFacts';

export const metadata = {
  title: 'Why Choose Us - Serendia Holidays By Venom',
  description: 'Why international travellers choose Serendia Holidays over other Sri Lankan destination management companies.',
};

export default function WhyChooseUsPage() {
  return (
    <main>
      <InnerHero
        title="Why Choose Us"
        subtitle="What sets Serendia Holidays apart"
        bgImage="/images/hero-1.png"
      />

      <TrustSignalStrip />

      <section className="page-content why-choose-us-page">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">The evidence</p>
            <h2 className="section-title">A clear case for choosing Serendia Holidays</h2>
          </div>

          <div className="why-choose-us-grid">
            {companyFacts.map((fact, index) => (
              <article key={fact.label} className="why-choose-us-card">
                <span className="why-choose-us-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{fact.label}</h3>
                <p>{fact.detail}</p>
              </article>
            ))}
          </div>

          <div className="why-choose-us-cta">
            <p>Hear it directly from past guests, or see the destinations for yourself.</p>
            <div className="why-choose-us-cta-links">
              <Link href="/#testimonials" className="btn-primary">Read Testimonials</Link>
              <Link href="/gallery" className="btn-secondary">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
