import Link from 'next/link';
import InnerHero from '../components/InnerHero';
import TrustSignalStrip from '../components/TrustSignalStrip';
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '../lib/i18n';
import { homeDictionaries } from '../lib/homeI18n';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Why Choose Us - Serendia Holidays By Venom',
  description: 'Why international travellers choose Serendia Holidays over other Sri Lankan destination management companies.',
  path: '/why-choose-us',
});

export default async function WhyChooseUsPage() {
  const t = await getTranslations('WhyChooseUs');
  // Same translated company facts as the rotating trust strip on the homepage.
  const companyFacts = homeDictionaries[await getLocale() as Locale].trust.facts;

  return (
    <main>
      <InnerHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bgImage="/images/hero-1.png"
      />

      <TrustSignalStrip />

      <section className="page-content why-choose-us-page">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">{t('kicker')}</p>
            <h2 className="section-title">{t('title')}</h2>
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
            <p>{t('cta')}</p>
            <div className="why-choose-us-cta-links">
              <Link href="/#testimonials" className="btn-primary">{t('testimonials')}</Link>
              <Link href="/gallery" className="btn-secondary">{t('gallery')}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
