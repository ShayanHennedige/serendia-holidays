import InnerHero from '../components/InnerHero';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

const hotels = [
  {
    title: 'Devi Tranquil Villa',
    image: '/images/hero-2.png',
    link: 'https://www.villadevi.com/'
  },
  {
    title: 'Secrets of Ceylon',
    image: '/images/tour-polonnaruwa.png',
    link: 'https://secretsofceyloncollection.com/our-collection/'
  }
];

export const metadata = pageMetadata({
  title: 'Sri Lankan Hotels - Serendia Holidays By Venom',
  description: 'Hand-picked Sri Lankan hotel and villa partners, from boutique stays to tranquil villas, bookable with your tailor-made Serendia Holidays itinerary.',
  path: '/sri-lankan-hotels',
});

export default async function HotelsPage() {
  const t = await getTranslations('Hotels');
  const hotelRatings = t.raw('ratings.items') as { label: string; value: string }[];
  const propertyTypes = t.raw('types.items') as { label: string; value: string }[];

  return (
    <main>
      <InnerHero 
        title={t('heroTitle')}
        bgImage="/images/hero-4.png"
      />
      <section className="page-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('partners.title')}</h2>
            <p className="section-subtitle">{t('partners.subtitle')}</p>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto 30px', textAlign: 'center' }}>
            <p>{t('partners.copy')}</p>
          </div>
          <div className="section-header" style={{ marginTop: '50px' }}>
            <h2 className="section-title">{t('ratings.title')}</h2>
            <p className="section-subtitle">{t('ratings.subtitle')}</p>
          </div>
          <div className="trip-facts">
            {hotelRatings.map((item) => (
              <article key={item.label} className="trip-fact">
                <span className="trip-fact-label">{item.label}</span>
                <strong className="trip-fact-value">{item.value}</strong>
              </article>
            ))}
          </div>

          <div className="section-header" style={{ marginTop: '60px' }}>
            <h2 className="section-title">{t('types.title')}</h2>
            <p className="section-subtitle">{t('types.subtitle')}</p>
          </div>
          <div className="trip-facts" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
            {propertyTypes.map((item) => (
              <article key={item.label} className="trip-fact">
                <span className="trip-fact-label">{item.label}</span>
                <strong className="trip-fact-value">{item.value}</strong>
              </article>
            ))}
          </div>

          <div style={{ maxWidth: '850px', margin: '60px auto 30px', textAlign: 'center' }}>
            <p>{t('help.copy')}</p>
            <Link href="/contact" className="trip-inline-link">{t('help.link')}</Link>
          </div>
          <div className="page-grid">
            {hotels.map((item, idx) => {
              const isExternal = item.link.startsWith('http');

              return (
                <a
                  href={item.link}
                  key={idx}
                  className="card"
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  <img src={item.image} alt={item.title} className="card-img" />
                  <div className="card-content">
                    <h3 className="card-title" style={{ fontSize: '1.2rem', marginTop: 0 }}>{item.title}</h3>
                    <span className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem', marginTop: '10px' }}>{t('viewDetails')}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
