import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

// Copy for each tour lives in messages/*.json under Tours.items.<id>.
interface Tour {
  id: 'bestOf' | 'amazing' | 'escape' | 'nature' | 'classic' | 'adventure';
  image: string;
  href: string;
  featured?: boolean;
}

const tours: Tour[] = [
  { id: 'bestOf', image: '/images/hero-3.png', href: '/tours/best-of-sri-lanka-culture-nature-and-wild-life', featured: true },
  { id: 'amazing', image: '/images/tour-polonnaruwa.png', href: '/customize' },
  { id: 'escape', image: '/images/hero-4.png', href: '/customize' },
  { id: 'nature', image: '/images/excursion-yala.webp', href: '/customize' },
  { id: 'classic', image: '/images/hero-1.png', href: '/customize' },
  { id: 'adventure', image: '/images/excursion-sigiriya.webp', href: '/customize' },
];

export const metadata = pageMetadata({
  title: 'Tours - Serendia Holidays By Venom',
  description: 'Explore tailor-made Sri Lanka tours shaped around culture, wildlife, coast and adventure.',
  path: '/tours',
});

export default async function ToursPage() {
  const t = await getTranslations('Tours');

  return (
    <main className="tours-page">
      <InnerHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bgImage="/images/hero-4.png"
      />

      <section className="tours-intro" aria-labelledby="tours-intro-title">
        <div className="container tours-intro-grid">
          <div className="tours-intro-heading">
            <p className="tours-eyebrow">{t('intro.eyebrow')}</p>
            <h2 id="tours-intro-title">{t('intro.title')}</h2>
          </div>
          <div className="tours-intro-copy">
            <p>{t('intro.copy')}</p>
            <Link href="/customize">{t('intro.cta')} <span aria-hidden="true">↗</span></Link>
          </div>
          <dl className="tours-intro-facts" aria-label={t('intro.factsLabel')}>
            <div><dt>06</dt><dd>{t('intro.journeys')}</dd></div>
            <div><dt>4–15</dt><dd>{t('intro.days')}</dd></div>
            <div><dt>100%</dt><dd>{t('intro.tailorMade')}</dd></div>
          </dl>
        </div>
      </section>

      <section className="tours-catalogue" aria-labelledby="tour-collection-title">
        <div className="container">
          <div className="tours-section-heading">
            <div>
              <p className="tours-eyebrow">{t('catalogue.eyebrow')}</p>
              <h2 id="tour-collection-title">{t('catalogue.title')}</h2>
            </div>
            <p>{t('catalogue.copy')}</p>
          </div>

          <div className="tours-collection-grid">
            {tours.map((tour, index) => {
              const title = t(`items.${tour.id}.title`);
              return (
                <article className={`tour-catalogue-card${tour.featured ? ' is-featured' : ''}`} key={tour.id}>
                  <Link className="tour-card-image" href={tour.href} aria-label={t('catalogue.exploreLabel', { title })}>
                    <Image
                      src={tour.image}
                      alt=""
                      fill
                      sizes={tour.featured ? '(max-width: 760px) 100vw, 58vw' : '(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw'}
                    />
                    <span className="tour-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <span className="tour-card-image-label">{t(`items.${tour.id}.eyebrow`)}</span>
                  </Link>

                  <div className="tour-card-body">
                    <p className="tour-card-duration">{t(`items.${tour.id}.duration`)}</p>
                    <h3><Link href={tour.href}>{title}</Link></h3>
                    <p className="tour-card-summary">{t(`items.${tour.id}.summary`)}</p>
                    <ul className="tour-card-highlights" aria-label={t('catalogue.highlightsLabel', { title })}>
                      {(t.raw(`items.${tour.id}.highlights`) as string[]).map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <Link className="tour-card-link" href={tour.href}>
                      {tour.featured ? t('catalogue.viewJourney') : t('catalogue.designJourney')}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tours-planner-cta" aria-labelledby="tours-planner-title">
        <div className="container tours-planner-inner">
          <div>
            <p className="tours-eyebrow">{t('planner.eyebrow')}</p>
            <h2 id="tours-planner-title">{t('planner.title')}</h2>
            <p>{t('planner.copy')}</p>
          </div>
          <div className="tours-planner-actions">
            <Link href="/customize" className="tours-primary-link">{t('planner.plan')} <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="tours-secondary-link">{t('planner.talk')}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
