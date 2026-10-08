import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

// Copy for each excursion lives in messages/*/excursions.json under Excursions.items.<id>.
interface Excursion {
  id: 'sigiriya' | 'anuradhapura' | 'colombo' | 'nuwaraEliya' | 'polonnaruwa' | 'yala' | 'trincomalee' | 'kandyColombo' | 'kandyNegombo';
  image: string;
  href: string;
  featured?: boolean;
}

const excursions: Excursion[] = [
  { id: 'sigiriya', image: '/images/excursion-sigiriya.webp', href: '/excursions/sigiriya-excursion-from-kandy', featured: true },
  { id: 'anuradhapura', image: '/images/excursion-anuradhapura.webp', href: '/excursions/anuradhapura-excursion-from-dambulla' },
  { id: 'colombo', image: '/images/excursion-colombo.webp', href: '/excursions/colombo-excursion' },
  { id: 'nuwaraEliya', image: '/images/excursions/nuwara-eliya-tea-train.webp', href: '/excursions/nuwara-eliya-excursion-from-kandy' },
  { id: 'polonnaruwa', image: '/images/tour-polonnaruwa.png', href: '/excursions/polonnaruwa-excursion' },
  { id: 'yala', image: '/images/excursion-yala.webp', href: '/excursions/yala-excursion-from-bentota-or-galle' },
  { id: 'trincomalee', image: '/images/excursion-trincomalee.webp', href: '/excursions/trincomalee-excursion' },
  { id: 'kandyColombo', image: '/images/excursion-kandy.webp', href: '/excursions/kandy-excursion-from-colombo' },
  { id: 'kandyNegombo', image: '/images/excursions/negombo-beach-outtrigger.webp', href: '/excursions/kandy-excursion-from-negombo' },
];

export const metadata = pageMetadata({
  title: 'Excursions - Serendia Holidays By Venom',
  description: 'Private half-day and full-day excursions across Sri Lanka.',
  path: '/excursions',
});

export default async function ExcursionsPage() {
  const t = await getTranslations('Excursions');

  return (
    <main className="excursions-page">
      <InnerHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bgImage="/images/hero-3.png"
      />

      <section className="excursions-intro" aria-labelledby="excursions-intro-title">
        <div className="container excursions-intro-grid">
          <div>
            <p className="collection-kicker">{t('intro.eyebrow')}</p>
            <h2 id="excursions-intro-title">{t('intro.titleLine1')}<br />{t('intro.titleLine2')}</h2>
          </div>
          <div className="excursions-intro-copy">
            <p>{t('intro.copy')}</p>
            <div className="excursion-assurances" aria-label={t('intro.assurancesLabel')}>
              {(t.raw('intro.assurances') as string[]).map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="excursions-journal" aria-labelledby="excursions-list-title">
        <div className="container">
          <div className="collection-heading">
            <div>
              <p className="collection-kicker">{t('list.eyebrow')}</p>
              <h2 id="excursions-list-title">{t('list.title')}</h2>
            </div>
            <p>{t('list.copy')}</p>
          </div>

          <div className="excursion-journal-grid">
            {excursions.map((item) => {
              const title = t(`items.${item.id}.title`);
              return (
                <article className={`excursion-story-card${item.featured ? ' is-featured' : ''}`} key={item.href}>
                  <Link href={item.href} className="excursion-story-image" aria-label={t('list.exploreLabel', { title })}>
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes={item.featured ? '(max-width: 760px) 100vw, 60vw' : '(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw'}
                    />
                    <span className="excursion-story-theme">{t(`items.${item.id}.theme`)}</span>
                  </Link>
                  <div className="excursion-story-copy">
                    <div className="excursion-story-meta"><span>{t(`items.${item.id}.route`)}</span><span>{t(`items.${item.id}.duration`)}</span></div>
                    <h3><Link href={item.href}>{title}</Link></h3>
                    <p>{t(`items.${item.id}.summary`)}</p>
                    <Link href={item.href} className="collection-text-link">{t('list.seeDay')} <span aria-hidden="true">↗</span></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="excursions-cta" aria-labelledby="excursions-cta-title">
        <div className="container excursions-cta-inner">
          <p className="collection-kicker">{t('cta.eyebrow')}</p>
          <h2 id="excursions-cta-title">{t('cta.title')}</h2>
          <p>{t('cta.copy')}</p>
          <div><Link href="/customize">{t('cta.plan')} <span aria-hidden="true">↗</span></Link><Link href="/contact">{t('cta.ask')}</Link></div>
        </div>
      </section>
    </main>
  );
}
