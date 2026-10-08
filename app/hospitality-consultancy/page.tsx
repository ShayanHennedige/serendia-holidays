import InnerHero from '../components/InnerHero';
import RecommendedGrid from '../components/RecommendedGrid';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Hospitality Project Management Consultancy - Serendia Holidays By Venom',
  description: 'Advisory services for hotel investors, from land acquisition through to operational commissioning.',
  path: '/hospitality-consultancy',
});

export default async function HospitalityConsultancyPage() {
  const t = await getTranslations('Consultancy');
  const consultancyItems = t.raw('items') as string[];

  return (
    <main className="consultancy-page">
      <InnerHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bgImage="/images/hero-4.png"
      />

      <section className="page-content consultancy-intro">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">{t('intro.kicker')}</p>
            <h2 className="section-title">{t('intro.title')}</h2>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <p>{t('intro.copy')}</p>
          </div>
        </div>
      </section>

      <section className="page-content consultancy-services" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('servicesTitle')}</h2>
          </div>
          <ul className="consultancy-services-list">
            {consultancyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-content consultancy-cta" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="consultancy-cta-card">
            <h3>{t('cta.title')}</h3>
            <p>{t('cta.copy')}</p>
            <a
              href="mailto:dharshan@venomholidays.com?subject=Hospitality%20Project%20Management%20Consultancy%20Enquiry"
              className="btn-primary"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </section>

      <RecommendedGrid currentSlug="hospitality-consultancy" heading={t('related')} />
    </main>
  );
}
