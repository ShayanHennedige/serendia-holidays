import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

// Vehicle and service text lives in messages/<locale>/services.json (Transport.fleet / promises),
// matched by position.
const fleetImages = ['/images/transport-car.png', '/images/transport-van.png', '/images/transport-minibus.png', '/images/transport-coach.png'];

export const metadata = pageMetadata({
  title: 'Transportation - Serendia Holidays By Venom',
  description: 'Private vehicles, scenic rail and air connections for tailor-made travel across Sri Lanka.',
  path: '/transportation',
});

export default async function TransportationPage() {
  const t = await getTranslations('Transport');
  const roadFleet = (t.raw('fleet') as { title: string; fit: string; note: string }[]).map((vehicle, index) => ({ ...vehicle, image: fleetImages[index] }));
  const servicePromises = t.raw('promises') as { title: string; detail: string }[];

  return (
    <main className="transportation-page">
      <InnerHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bgImage="/images/transport-train.png"
      />

      <section className="transport-intro" aria-labelledby="transport-intro-title">
        <div className="container transport-intro-grid">
          <div>
            <p className="collection-kicker">{t('intro.kicker')}</p>
            <h2 id="transport-intro-title">{t('intro.title')}</h2>
          </div>
          <div>
            <p>{t('intro.copy')}</p>
            <Link href="/customize" className="collection-text-link">{t('intro.link')} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="transport-modes" aria-labelledby="transport-modes-title">
        <div className="container">
          <div className="transport-section-heading">
            <p className="collection-kicker">{t('modes.kicker')}</p>
            <h2 id="transport-modes-title">{t('modes.title')}</h2>
          </div>

          <article className="transport-feature transport-feature-rail">
            <div className="transport-feature-image">
              <Image src="/images/transport-train.png" alt={t('rail.alt')} fill sizes="(max-width: 800px) 100vw, 62vw" />
              <span>{t('rail.tag')}</span>
            </div>
            <div className="transport-feature-copy">
              <p className="transport-mode-label">{t('rail.label')}</p>
              <h3>{t('rail.title')}</h3>
              <p>{t('rail.copy')}</p>
              <ul>{(t.raw('rail.points') as string[]).map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>

          <div className="transport-road-section">
            <div className="transport-road-heading">
              <div><p className="transport-mode-label">{t('road.label')}</p><h3>{t('road.title')}</h3></div>
              <p>{t('road.copy')}</p>
            </div>
            <div className="transport-fleet-grid">
              {roadFleet.map((vehicle) => (
                <article className="transport-vehicle-card" key={vehicle.title}>
                  <div className="transport-vehicle-image"><Image src={vehicle.image} alt={vehicle.title} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div>
                  <div><p>{vehicle.fit}</p><h4>{vehicle.title}</h4><span>{vehicle.note}</span></div>
                </article>
              ))}
            </div>
          </div>

          <article className="transport-feature transport-feature-air">
            <div className="transport-feature-copy">
              <p className="transport-mode-label">{t('air.label')}</p>
              <h3>{t('air.title')}</h3>
              <p>{t('air.copy')}</p>
              <ul>{(t.raw('air.points') as string[]).map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
            <div className="transport-feature-image">
              <Image src="/images/transport-helicopter.png" alt={t('air.alt')} fill sizes="(max-width: 800px) 100vw, 58vw" />
              <span>{t('air.label')}</span>
            </div>
          </article>
        </div>
      </section>

      <section className="transport-service-strip" aria-labelledby="transport-service-title">
        <div className="container">
          <div className="transport-service-title"><p className="collection-kicker">{t('service.kicker')}</p><h2 id="transport-service-title">{t('service.title')}</h2></div>
          <div className="transport-service-grid">
            {servicePromises.map(({ title, detail }) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
          <div className="transport-cta-row"><p>{t('service.cta')}</p><Link href="/customize">{t('service.link')} <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
