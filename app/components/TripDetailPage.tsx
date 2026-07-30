import Image from 'next/image';
import Link from 'next/link';
import InnerHero from './InnerHero';
import RecommendedGrid from './RecommendedGrid';

interface Fact {
  label: string;
  value: string;
  note?: string;
}

interface SectionLink {
  href: string;
  label: string;
}

interface Section {
  title: string;
  image: string;
  paragraphs: string[];
  link?: SectionLink;
}

interface TripFactsProps {
  facts: Fact[];
}

function TripFacts({ facts }: TripFactsProps) {
  return (
    <div className="trip-facts">
      {facts.map((fact) => (
        <article key={fact.label} className="trip-fact">
          <span className="trip-fact-label">{fact.label}</span>
          <strong className="trip-fact-value">{fact.value}</strong>
          {fact.note && <p className="trip-fact-note">{fact.note}</p>}
        </article>
      ))}
    </div>
  );
}

interface TripSectionProps {
  section: Section;
  reversed: boolean;
}

function TripSection({ section, reversed }: TripSectionProps) {
  return (
    <section className="page-content trip-section">
      <div className={`trip-section-grid ${reversed ? 'reverse' : ''}`}>
        <div className="trip-section-image">
          <Image
            src={section.image}
            alt={section.title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="trip-section-copy">
          <h3>{section.title}</h3>
          {section.paragraphs.map((paragraph, index) => (
            <p key={`${section.title}-${index}`}>{paragraph}</p>
          ))}
          {section.link && (
            <Link href={section.link.href} className="trip-inline-link">
              {section.link.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

interface TripDetailPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroNote?: string;
  facts: Fact[];
  sections: Section[];
  bookingTitle?: string;
  bookingIntro?: string;
  bookingLines: string[];
  catalogSlug?: string;
}

export default function TripDetailPage({
  title,
  subtitle,
  heroImage,
  heroNote,
  facts,
  sections,
  bookingTitle = 'Book Now',
  bookingIntro,
  bookingLines,
  catalogSlug,
}: TripDetailPageProps) {
  return (
    <main>
      <InnerHero title={title} subtitle={subtitle} bgImage={heroImage} />

      <section className="page-content trip-overview">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Basic Information</p>
            <h2 className="section-title">Trip Overview</h2>
            {heroNote && <p className="trip-hero-note">{heroNote}</p>}
          </div>

          <TripFacts facts={facts} />
        </div>
      </section>

      {sections.map((section, index) => (
        <TripSection key={section.title} section={section} reversed={index % 2 === 1} />
      ))}

      {catalogSlug && <RecommendedGrid currentSlug={catalogSlug} />}

      <section className="page-content trip-booking" id="book-now">
        <div className="container trip-booking-grid">
          <div className="trip-booking-contact">
            <p className="section-subtitle">Plan your trip</p>
            <h2 className="section-title">{bookingTitle}</h2>
            {bookingIntro && <p>{bookingIntro}</p>}

            <div className="trip-booking-lines">
              {bookingLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <form className="contact-form trip-booking-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name *" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="E-Mail *" />
            </div>
            <div className="form-group full">
              <input type="text" className="form-control" placeholder="Contact number" />
            </div>
            <div className="form-group full">
              <textarea className="form-control" placeholder="Message *" rows={6} />
            </div>
            <div className="form-group full">
              <button type="submit" className="btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
