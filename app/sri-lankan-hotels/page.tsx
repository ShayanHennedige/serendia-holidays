import InnerHero from '../components/InnerHero';
import Link from 'next/link';

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

const hotelRatings = [
  {
    label: '5 Stars',
    value: 'Superior standard and an extensive range of first-class guest services',
  },
  {
    label: '4 Stars',
    value: 'Exceptional standard with high-quality furnishings and comfort',
  },
  {
    label: '3 Stars',
    value: 'Well-appointed establishments with comfortable, clean rooms and quality furnishings',
  },
  {
    label: 'Less than 3 Stars',
    value: 'A basic, well-maintained standard',
  },
  {
    label: 'Unclassified Hotels',
    value: 'Well maintained properties with adequate facilities which do not fall under star classifications.',
  },
  {
    label: 'Boutique Hotel and Villas',
    value: 'Small but exclusive property that caters to the affluent clientele with an exceptional level of service at premium prices.',
  },
];

const propertyTypes = [
  {
    label: 'Bungalow',
    value: 'A type of real estate property that consists of a small, one story home with an enclosed porch.',
  },
  {
    label: 'Home Stay',
    value: 'A stay at a residence by a traveler and especially by a tourist who is hosted by a local family to better learn about the local lifestyle',
  },
  {
    label: 'Rented Apartments',
    value: 'Is a room or suite of rooms designed as a residence and generally located in a building occupied by more than one household.',
  },
  {
    label: 'Guest House',
    value: 'Guest houses range from low budget rooms to luxury apartments, and tend to be like small hotels in larger cities.',
  },
  {
    label: 'Boutique Hotel',
    value: 'Small but exclusive property that caters to the affluent clientele with an exceptional level of service at premium prices.',
  },
];

export const metadata = {
  title: 'Sri Lankan Hotels - Serendia Holidays By Venom',
  description: 'Sri Lankan hotel partners.',
};

export default function HotelsPage() {
  return (
    <main>
      <InnerHero 
        title="Sri Lankan Hotels" 
        bgImage="/images/hero-4.png"
      />
      <section className="page-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Accommodation Partners</h2>
            <p className="section-subtitle">Experience true Sri Lankan hospitality</p>
          </div>
          <div style={{ maxWidth: '850px', margin: '0 auto 30px', textAlign: 'center' }}>
            <p>
              Browse hand-picked Sri Lankan stays that work well for beach holidays, round trips, and private tours. Each property page includes a quick overview and the details needed to plan your stay.
            </p>
          </div>
          <div className="section-header" style={{ marginTop: '50px' }}>
            <h2 className="section-title">Hotel Star Classifications</h2>
            <p className="section-subtitle">A quick guide to the standard of service and facilities</p>
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
            <h2 className="section-title">Common Hotel Types</h2>
            <p className="section-subtitle">Accommodation styles you may see in Sri Lanka</p>
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
            <p>
              If you want help selecting the right hotel type for your trip, we can match the stay to your route, budget, and preferred level of service.
            </p>
            <Link href="/contact" className="trip-inline-link">Ask us for recommendations</Link>
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
                    <span className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem', marginTop: '10px' }}>View Details</span>
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
