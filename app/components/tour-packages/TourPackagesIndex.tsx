'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePackagesI18n } from './usePackagesI18n';
import { tourPackages } from '../../lib/tourPackages';
import { countWords, fill, localizePackage } from '../../lib/tourPackagesI18n';

export default function TourPackagesIndex() {
  const { locale, copy, content } = usePackagesI18n();
  const packages = tourPackages.map((pkg) => localizePackage(pkg, content, copy));

  return (
    <main className="pkg-index">
      <header className="pkg-index-hero">
        <Image
          src="/images/packages/sigiriya-rock.jpg"
          alt=""
          fill
          sizes="100vw"
          preload
          className="pkg-index-hero-image"
        />
        <div className="pkg-index-hero-inner container">
          <p className="pkg-index-kicker">{copy.common.indianOcean}</p>
          <h1>{copy.index.title}</h1>
          <p>{copy.index.lede}</p>
        </div>
      </header>

      <section className="pkg-index-intro" aria-labelledby="pkg-index-intro-title">
        <div className="container pkg-index-intro-grid">
          <div>
            <p className="pkg-eyebrow">{copy.index.eyebrow}</p>
            <h2 id="pkg-index-intro-title">{copy.index.introTitle}</h2>
          </div>
          <div>
            <p>{copy.index.introCopy}</p>
            <Link href="/customize" className="pkg-index-link">
              {copy.index.startScratch} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="pkg-index-list" aria-labelledby="pkg-index-list-title">
        <div className="container">
          <h2 id="pkg-index-list-title" className="pkg-section-title">{copy.index.listTitle}</h2>
          <p className="pkg-section-intro">{copy.index.listIntro}</p>

          <div className="pkg-index-grid">
            {packages.map((pkg, index) => (
              <article className="pkg-index-card" key={pkg.slug}>
                <Link href={`/tour-packages/${pkg.slug}`} className="pkg-index-card-image">
                  <Image
                    src={pkg.cardImage}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                  <span className="pkg-card-badge">{pkg.badge}</span>
                </Link>

                <div className="pkg-index-card-body">
                  <p className="pkg-card-meta">
                    {fill(copy.common.cardMeta, {
                      nights: pkg.nights,
                      ...countWords(locale, copy, pkg.nights),
                    })}
                  </p>
                  <h3><Link href={`/tour-packages/${pkg.slug}`}>{pkg.name}</Link></h3>
                  <p className="pkg-index-card-copy">{pkg.cardSummary}</p>

                  <ul className="pkg-index-card-stops">
                    {pkg.visiting.slice(0, 4).map((place) => <li key={place}>{place}</li>)}
                    {pkg.visiting.length > 4 && (
                      <li>{fill(copy.index.morePlaces, { count: pkg.visiting.length - 4 })}</li>
                    )}
                  </ul>

                  <p className="pkg-card-price">
                    {copy.common.from} {pkg.priceFrom} <span>{pkg.priceBasis}</span>
                  </p>

                  <Link href={`/tour-packages/${pkg.slug}`} className="pkg-index-card-link">
                    {copy.index.viewItinerary} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pkg-index-cta" aria-labelledby="pkg-index-cta-title">
        <div className="container pkg-index-cta-inner">
          <div>
            <p className="pkg-eyebrow">{copy.index.ctaEyebrow}</p>
            <h2 id="pkg-index-cta-title">{copy.index.ctaTitle}</h2>
            <p>{copy.index.ctaCopy}</p>
          </div>
          <div className="pkg-hero-actions">
            <Link href="/customize" className="pkg-btn">{copy.index.planTrip}</Link>
            <Link href="/contact" className="pkg-btn is-ghost">{copy.index.talkTeam}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
