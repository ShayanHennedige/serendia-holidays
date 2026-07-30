import InnerHero from './InnerHero';
import Link from 'next/link';
import RecommendedGrid from './RecommendedGrid';

interface HighlightItem {
  label: string;
  value: string;
  note?: string;
}

interface GalleryItem {
  title: string;
  image: string;
  text: string;
}

interface HotelDetailPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  highlights: HighlightItem[];
  gallery: GalleryItem[];
  bookingLines: string[];
  catalogSlug?: string;
}

export default function HotelDetailPage({
  title,
  subtitle,
  heroImage,
  overview,
  highlights,
  gallery,
  bookingLines,
  catalogSlug,
}: HotelDetailPageProps) {
  return (
    <main>
      <InnerHero title={title} subtitle={subtitle} bgImage={heroImage} />

      <section className="page-content">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Hotel profile</p>
            <h2 className="section-title">Overview</h2>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <p>{overview}</p>
          </div>

          <div className="trip-facts" style={{ marginTop: '40px' }}>
            {highlights.map((item) => (
              <article key={item.label} className="trip-fact">
                <span className="trip-fact-label">{item.label}</span>
                <strong className="trip-fact-value">{item.value}</strong>
                {item.note && <p className="trip-fact-note">{item.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Gallery</h2>
          </div>
          <div className="page-grid">
            {gallery.map((item) => (
              <article key={item.title} className="card">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-content">
                  <h3 className="card-title" style={{ fontSize: '1.1rem', marginTop: 0 }}>{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {catalogSlug && <RecommendedGrid currentSlug={catalogSlug} />}

      <section className="page-content trip-booking" id="enquire-now">
        <div className="container trip-booking-grid">
          <div className="trip-booking-contact">
            <p className="section-subtitle">Book your stay</p>
            <h2 className="section-title">Get in touch</h2>
            {bookingLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <Link href="/contact" className="trip-inline-link">Contact us for availability</Link>
          </div>
          <div className="card" style={{ padding: '28px' }}>
            <p>
              We can include these hotels as part of your Sri Lanka holiday plan and arrange transfers, excursions, and airport pickup around your booking.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
