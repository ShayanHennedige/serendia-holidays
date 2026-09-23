'use client';

import Image from 'next/image';
import Link from 'next/link';
import HighlightsCarousel, { type HighlightSlide } from './tour-packages/HighlightsCarousel';
import ItinerarySection, { type ResolvedStop } from './tour-packages/ItinerarySection';
import { usePackagesI18n } from './tour-packages/usePackagesI18n';
import {
  ArrowDownIcon,
  BestForIcon,
  DurationIcon,
  ExtensionIcon,
  PeriodIcon,
  TourTypeIcon,
  VisitingIcon,
} from './tour-packages/icons';
import {
  experiences,
  getPackage,
  packageHighlightIds,
  placeCoords,
  stopIdForExperience,
  tourPackages,
  type TourPackage,
} from '../lib/tourPackages';
import {
  countWords,
  fill,
  localizeExperience,
  localizePackage,
  type ContentDictionary,
  type PackagesCopy,
} from '../lib/tourPackagesI18n';
import type { Locale } from '../lib/i18n';

/* ---------------------------------------------------------------- *
 * Hero — copy on the left, three-image mosaic on the right
 * ---------------------------------------------------------------- */

function Hero({ pkg, copy }: { pkg: TourPackage; copy: PackagesCopy }) {
  const [topLeft, bottomLeft, main] = pkg.heroMosaic;
  const region = pkg.visiting[0];

  return (
    <header className="pkg-hero">
      <div className="container pkg-hero-grid">
        <div className="pkg-hero-copy">
          <p className="pkg-breadcrumb">
            <span>{copy.common.indianOcean}</span>
            <span>{copy.common.sriLanka}</span>
            <span>{region}</span>
          </p>
          <h1>{pkg.name}</h1>
          <p className="pkg-hero-tagline">{pkg.tagline}</p>
          <p className="pkg-hero-price">
            {copy.common.from} <strong>{pkg.priceFrom}</strong> {pkg.priceBasis}
          </p>
          <div className="pkg-hero-actions">
            <Link href="/contact" className="pkg-btn-dark">{copy.detail.enquire}</Link>
            <a href="#itinerary-overview" className="pkg-btn-outline">
              {copy.detail.seeItinerary} <ArrowDownIcon />
            </a>
          </div>
        </div>

        <div className="pkg-hero-mosaic">
          <div className="pkg-hero-stack">
            <div className="pkg-hero-tile">
              <Image src={topLeft} alt="" fill sizes="(max-width: 900px) 40vw, 180px" preload />
            </div>
            <div className="pkg-hero-tile">
              <Image src={bottomLeft} alt="" fill sizes="(max-width: 900px) 40vw, 180px" />
            </div>
          </div>
          <div className="pkg-hero-tile is-main">
            <Image src={main} alt="" fill sizes="(max-width: 900px) 60vw, 480px" preload />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- *
 * Intro + icon facts
 * ---------------------------------------------------------------- */

function IntroFacts({
  pkg,
  copy,
  locale,
}: {
  pkg: TourPackage;
  copy: PackagesCopy;
  locale: Locale;
}) {
  const facts = [
    { icon: <TourTypeIcon />, label: copy.detail.tourType, value: pkg.tourType },
    {
      icon: <DurationIcon />,
      label: copy.detail.duration,
      value: fill(copy.detail.nightsValue, {
        nights: pkg.nights,
        ...countWords(locale, copy, pkg.nights),
      }),
    },
    { icon: <VisitingIcon />, label: copy.detail.visiting, value: pkg.visiting.join(', '), wide: true },
    { icon: <BestForIcon />, label: copy.detail.bestFor, value: pkg.bestFor.join(', '), wide: true },
    { icon: <PeriodIcon />, label: copy.detail.travelPeriod, value: pkg.period },
    { icon: <ExtensionIcon />, label: copy.detail.beachExtension, value: pkg.extensionPrice },
  ];

  return (
    <section className="pkg-intro" aria-label={copy.detail.tripSummary}>
      <div className="container pkg-intro-grid">
        <p className="pkg-intro-copy">{pkg.intro}</p>

        <dl className="pkg-facts">
          {facts.map((fact) => (
            <div className={fact.wide ? 'is-wide' : ''} key={fact.label}>
              <span className="pkg-fact-icon">{fact.icon}</span>
              <div>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Itinerary overview — row of small thumbnail cards
 * ---------------------------------------------------------------- */

function ItineraryOverview({ pkg, copy }: { pkg: TourPackage; copy: PackagesCopy }) {
  return (
    <section className="pkg-overview" id="itinerary-overview" aria-labelledby="pkg-overview-title">
      <div className="container">
        <h2 id="pkg-overview-title" className="pkg-centered-title">{copy.detail.itineraryOverview}</h2>

        <ol className="pkg-overview-rail">
          {pkg.stops.map((stop) => (
            <li className="pkg-overview-card" key={stop.id}>
              <a href={`#${stop.id}`}>
                <span className="pkg-overview-image">
                  <Image src={stop.image} alt="" fill sizes="(max-width: 700px) 42vw, 150px" />
                </span>
                <span className="pkg-overview-days">
                  {stop.dayLabel} {stop.dayRange}
                </span>
                <span className="pkg-overview-place">
                  {stop.location}{stop.subLabel ? ` ${stop.subLabel}` : ''} <ArrowDownIcon />
                </span>
                <span className="pkg-overview-copy">{stop.intro}</span>
              </a>
            </li>
          ))}

          {pkg.extensions.map((extension) => (
            <li className="pkg-overview-card" key={extension.title}>
              <Link href="/contact">
                <span className="pkg-overview-image">
                  <Image src={extension.image} alt="" fill sizes="(max-width: 700px) 42vw, 150px" />
                </span>
                <span className="pkg-overview-days">{copy.detail.extendHoliday}</span>
                <span className="pkg-overview-place">{extension.title} <ArrowDownIcon /></span>
                <span className="pkg-overview-copy">{extension.description}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Other itineraries
 * ---------------------------------------------------------------- */

function OtherItineraries({
  currentSlug,
  copy,
  content,
  locale,
}: {
  currentSlug: string;
  copy: PackagesCopy;
  content: ContentDictionary;
  locale: Locale;
}) {
  const others = tourPackages
    .filter((pkg) => pkg.slug !== currentSlug)
    .map((pkg) => localizePackage(pkg, content, copy));

  return (
    <section className="pkg-others" aria-labelledby="pkg-others-title">
      <div className="container">
        <h2 id="pkg-others-title" className="pkg-centered-title">{copy.detail.otherItineraries}</h2>

        <div className="pkg-others-grid">
          {others.map((pkg) => (
            <article className="pkg-other-card" key={pkg.slug}>
              <Link href={`/tour-packages/${pkg.slug}`} className="pkg-other-image">
                <Image src={pkg.cardImage} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
                <span className="pkg-card-badge">{pkg.badge}</span>
              </Link>
              <div className="pkg-other-body">
                <p className="pkg-card-meta">
                  {fill(copy.common.cardMeta, {
                    nights: pkg.nights,
                    ...countWords(locale, copy, pkg.nights),
                  })}
                </p>
                <h3><Link href={`/tour-packages/${pkg.slug}`}>{pkg.name}</Link></h3>
                <p>{pkg.cardSummary}</p>
                <p className="pkg-card-price">
                  {copy.common.from} {pkg.priceFrom} <span>{pkg.priceBasis}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Page
 * ---------------------------------------------------------------- */

export default function TourPackagePage({ slug }: { slug: string }) {
  const { locale, copy, content } = usePackagesI18n();
  const source = getPackage(slug);
  const pkg = localizePackage(source, content, copy);

  const slides: HighlightSlide[] = packageHighlightIds(source).map((id) => ({
    ...localizeExperience(id, experiences[id], content),
    stopId: stopIdForExperience(source, id),
  }));

  const stops: ResolvedStop[] = pkg.stops.map((stop, index) => ({
    ...stop,
    experiences: stop.experiences.map((id) => localizeExperience(id, experiences[id], content)),
    // the untranslated place name is the key into the route-map coordinates
    coordinates: placeCoords[source.stops[index].location] ?? null,
  }));

  return (
    <main className="pkg-page">
      <Hero pkg={pkg} copy={copy} />
      <IntroFacts pkg={pkg} copy={copy} locale={locale} />
      <ItineraryOverview pkg={pkg} copy={copy} />
      <HighlightsCarousel slides={slides} copy={copy} />
      <ItinerarySection stops={stops} copy={copy} />
      <OtherItineraries currentSlug={pkg.slug} copy={copy} content={content} locale={locale} />

      <section className="pkg-enquiry" id="pkg-enquiry" aria-labelledby="pkg-enquiry-title">
        <div className="container pkg-enquiry-grid">
          <div>
            <p className="pkg-eyebrow">{copy.enquiry.eyebrow}</p>
            <h2 id="pkg-enquiry-title">{fill(copy.enquiry.title, { name: pkg.name })}</h2>
            <p>{fill(copy.enquiry.copy, { nights: pkg.nights, period: pkg.period })}</p>
            <ul className="pkg-enquiry-list">
              <li>{fill(copy.enquiry.priceLine, { price: pkg.priceFrom, basis: pkg.priceBasis })}</li>
              <li>{fill(copy.enquiry.extensionLine, { price: pkg.extensionPrice })}</li>
              <li>{copy.enquiry.vehicleLine}</li>
              <li>{copy.enquiry.hotelsLine}</li>
            </ul>
            <div className="pkg-hero-actions">
              <Link href="/contact" className="pkg-btn-light">{copy.enquiry.talkTeam}</Link>
              <Link href="/customize" className="pkg-btn-outline is-light">{copy.enquiry.buildCustom}</Link>
            </div>
          </div>

          <div className="pkg-enquiry-aside">
            <h3>{copy.enquiry.atAGlance}</h3>
            <dl>
              <div>
                <dt>{copy.enquiry.duration}</dt>
                <dd>
                  {fill(copy.enquiry.durationValue, {
                    days: pkg.days,
                    nights: pkg.nights,
                    ...countWords(locale, copy, pkg.nights, pkg.days),
                  })}
                </dd>
              </div>
              <div><dt>{copy.enquiry.starts}</dt><dd>{pkg.stops[0].location}</dd></div>
              <div><dt>{copy.enquiry.ends}</dt><dd>{pkg.stops[pkg.stops.length - 2].location}</dd></div>
              <div><dt>{copy.enquiry.basis}</dt><dd>{copy.enquiry.halfBoard}</dd></div>
              <div><dt>{copy.enquiry.travelPeriod}</dt><dd>{pkg.period}</dd></div>
            </dl>
            <p className="pkg-enquiry-note">{copy.enquiry.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
