import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Cricket Tourism - Serendia Holidays By Venom',
  description: 'Cricket tour packages, spectator visits, ground bookings and technical coaching arranged by Serendia Holidays.',
  path: '/cricket-tourism',
});

export default async function CricketTourismPage() {
  const t = await getTranslations('Cricket');
  const offerings = t.raw('offerings.items') as { label: string; title: string; description: string }[];

  return (
    <main className="cricket-page">
      <InnerHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bgImage="/images/cricket-stadium-hero.webp"
      />

      <section className="cricket-opening" aria-labelledby="cricket-opening-title">
        <div className="container cricket-opening-grid">
          <div className="cricket-opening-copy">
            <p className="collection-kicker">{t('opening.kicker')}</p>
            <h2 id="cricket-opening-title">{t('opening.title')}</h2>
            <p>{t('opening.copy')}</p>
          </div>
          <div className="cricket-crease-mark" aria-hidden="true"><span /><i /><span /></div>
        </div>
      </section>

      <section className="cricket-profile" aria-labelledby="cricket-profile-title">
        <div className="container cricket-profile-grid">
          <div className="cricket-profile-image">
            <Image src="/brendon .webp" alt="Brendon Kuruppu" fill sizes="(max-width: 760px) 100vw, 48vw" />
            <span>{t('profile.tag')}</span>
          </div>
          <div className="cricket-profile-copy">
            <p className="collection-kicker">{t('profile.kicker')}</p>
            <h2 id="cricket-profile-title">Brendon Kuruppu</h2>
            <p className="cricket-profile-role">{t('profile.role')}</p>
            <p>{t('profile.copy')}</p>
            <dl>
              <div><dt>{t('profile.stat1')}</dt><dd>{t('profile.stat1Label')}</dd></div>
              <div><dt>{t('profile.stat2')}</dt><dd>{t('profile.stat2Label')}</dd></div>
              <div><dt>{t('profile.stat3')}</dt><dd>{t('profile.stat3Label')}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="cricket-offerings" aria-labelledby="cricket-offerings-title">
        <div className="container">
          <div className="cricket-offerings-heading">
            <p className="collection-kicker">{t('offerings.kicker')}</p>
            <h2 id="cricket-offerings-title">{t('offerings.title')}</h2>
            <p>{t('offerings.copy')}</p>
          </div>
          <div className="cricket-offerings-grid">
            {offerings.map((offering) => (
              <article key={offering.title}>
                <p>{offering.label}</p>
                <h3>{offering.title}</h3>
                <span>{offering.description}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cricket-spectator" aria-labelledby="cricket-spectator-title">
        <div className="container cricket-spectator-grid">
          <div className="cricket-spectator-score" aria-hidden="true"><span>SL</span><strong>HOWZAT</strong><span>TOUR</span></div>
          <div>
            <p className="collection-kicker">{t('spectator.kicker')}</p>
            <h2 id="cricket-spectator-title">{t('spectator.title')}</h2>
            <p>{t('spectator.copy')}</p>
            <Link href="/contact">{t('spectator.link')} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="cricket-cta" aria-labelledby="cricket-cta-title">
        <div className="container cricket-cta-inner">
          <div><p className="collection-kicker">{t('cta.kicker')}</p><h2 id="cricket-cta-title">{t('cta.title')}</h2></div>
          <div><p>{t('cta.copy')}</p><Link href="/contact">{t('cta.link')} <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <nav className="cricket-related" aria-label={t('related.label')}>
        <div className="container"><span>{t('related.title')}</span><Link href="/tours">{t('related.tours')}</Link><Link href="/excursions">{t('related.excursions')}</Link><Link href="/transportation">{t('related.transport')}</Link></div>
      </nav>
    </main>
  );
}
