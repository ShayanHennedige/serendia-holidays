'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InnerHero from './InnerHero';
import RecommendedGrid from './RecommendedGrid';
import { useLanguage } from './LanguageProvider';
import { localizeBookingText, tripBookingCopy } from '../lib/tripBookingI18n';

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
  const { locale } = useLanguage();
  const bookingCopy = tripBookingCopy[locale];
  const [form, setForm] = useState({ fullName: '', email: '', whatsapp: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const updateForm = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const sendInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus(null);
    try {
      const response = await fetch('/api/contact-inquiries', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...form, sourcePage: `${title} (${window.location.pathname})` }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || bookingCopy.sendFailed);

      setStatus({ type: 'success', message: bookingCopy.sent });
      window.setTimeout(() => window.location.reload(), 1500);
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : bookingCopy.sendFailed });
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <InnerHero title={title} subtitle={subtitle} bgImage={heroImage} showFullImage />

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
            <p className="section-subtitle">{bookingCopy.plan}</p>
            <h2 className="section-title">{bookingTitle === 'Book Now' ? bookingCopy.bookNow : bookingTitle}</h2>
            {bookingIntro && <p>{localizeBookingText(locale, bookingIntro)}</p>}

            <div className="trip-booking-lines">
              {bookingLines.map((line) => (
                <p key={line}>{localizeBookingText(locale, line)}</p>
              ))}
            </div>
          </div>

          <form className="contact-form trip-booking-form" onSubmit={sendInquiry}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder={bookingCopy.name} value={form.fullName} onChange={(event) => updateForm('fullName', event.target.value)} autoComplete="name" maxLength={100} required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder={bookingCopy.email} value={form.email} onChange={(event) => updateForm('email', event.target.value)} autoComplete="email" maxLength={160} required />
            </div>
            <div className="form-group full">
              <input type="tel" className="form-control" placeholder={bookingCopy.contactNumber} value={form.whatsapp} onChange={(event) => updateForm('whatsapp', event.target.value)} autoComplete="tel" maxLength={30} />
            </div>
            <div className="form-group full">
              <textarea className="form-control" placeholder={bookingCopy.message} value={form.message} onChange={(event) => updateForm('message', event.target.value)} rows={6} maxLength={1500} required />
            </div>
            {status && <p className={status.type === 'success' ? 'contact-form-success' : 'contact-form-error'} role={status.type === 'success' ? 'status' : 'alert'}>{status.message}</p>}
            <div className="form-group full">
              <button type="submit" className="btn-primary" disabled={sending}>{sending ? bookingCopy.sending : bookingCopy.submit}</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
