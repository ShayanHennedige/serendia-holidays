import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';

interface Tour {
  title: string;
  duration: string;
  image: string;
  href: string;
  eyebrow: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
}

const tours: Tour[] = [
  {
    title: 'Best of Sri Lanka: Culture, Nature and Wildlife',
    duration: '8 nights · 9 days',
    image: '/images/hero-3.png',
    href: '/tours/best-of-sri-lanka-culture-nature-and-wild-life',
    eyebrow: 'Signature journey',
    summary: 'A richly paced introduction to the island, pairing ancient cities and misty highlands with wildlife encounters and a relaxed coastal finish.',
    highlights: ['Cultural Triangle', 'Hill country', 'Wildlife safari'],
    featured: true,
  },
  {
    title: 'Amazing Sri Lanka',
    duration: '9 nights · 10 days',
    image: '/images/tour-polonnaruwa.png',
    href: '/customize',
    eyebrow: 'Culture and coast',
    summary: 'A generous island loop designed for travellers who want heritage, local life, scenic rail country and time beside the Indian Ocean.',
    highlights: ['Ancient cities', 'Tea country', 'Southern coast'],
  },
  {
    title: 'Escape to Paradise',
    duration: '4 nights · 5 days',
    image: '/images/hero-4.png',
    href: '/customize',
    eyebrow: 'Short coastal escape',
    summary: 'A compact, unhurried route with warm-water beaches, characterful stays and just enough culture between slow island mornings.',
    highlights: ['Beach stays', 'Private transfers', 'Local dining'],
  },
  {
    title: 'Nature and Wildlife of Sri Lanka',
    duration: '10 nights · 11 days',
    image: '/images/excursion-yala.webp',
    href: '/customize',
    eyebrow: 'Wild island',
    summary: 'Move from rainforest edges to open national parks on a nature-led journey shaped around responsible wildlife viewing.',
    highlights: ['Yala safari', 'Birdlife', 'Forest stays'],
  },
  {
    title: 'Sri Lanka Classic',
    duration: '6 nights · 7 days',
    image: '/images/hero-1.png',
    href: '/customize',
    eyebrow: 'Essential Sri Lanka',
    summary: 'The island essentials in one considered week: living heritage, cool highlands, a memorable train ride and warm local hosting.',
    highlights: ['Kandy', 'Scenic rail', 'Galle'],
  },
  {
    title: 'Independent Adventure',
    duration: '14 nights · 15 days',
    image: '/images/excursion-sigiriya.webp',
    href: '/customize',
    eyebrow: 'Active journey',
    summary: 'A flexible expedition for curious travellers, combining hiking, cycling, canoeing and camping with space to explore independently.',
    highlights: ['Hiking', 'Cycling', 'Canoeing'],
  },
];

export const metadata = {
  title: 'Tours - Serendia Holidays By Venom',
  description: 'Explore tailor-made Sri Lanka tours shaped around culture, wildlife, coast and adventure.',
};

export default function ToursPage() {
  return (
    <main className="tours-page">
      <InnerHero
        title="Tours"
        subtitle="Private journeys · local expertise · entirely your own"
        bgImage="/images/hero-4.png"
      />

      <section className="tours-intro" aria-labelledby="tours-intro-title">
        <div className="container tours-intro-grid">
          <div className="tours-intro-heading">
            <p className="tours-eyebrow">Journeys, shaped around you</p>
            <h2 id="tours-intro-title">See Sri Lanka at your own rhythm.</h2>
          </div>
          <div className="tours-intro-copy">
            <p>These routes are thoughtful starting points, not fixed packages. We adjust the pace, stays and experiences around the way you want to travel.</p>
            <Link href="/customize">Start with your travel style <span aria-hidden="true">↗</span></Link>
          </div>
          <dl className="tours-intro-facts" aria-label="Tour collection overview">
            <div><dt>06</dt><dd>Curated journeys</dd></div>
            <div><dt>4–15</dt><dd>Days on the island</dd></div>
            <div><dt>100%</dt><dd>Tailor-made</dd></div>
          </dl>
        </div>
      </section>

      <section className="tours-catalogue" aria-labelledby="tour-collection-title">
        <div className="container">
          <div className="tours-section-heading">
            <div>
              <p className="tours-eyebrow">The collection</p>
              <h2 id="tour-collection-title">Choose your starting point</h2>
            </div>
            <p>Culture, wildlife, coast or adventure—every route can be refined by our local team.</p>
          </div>

          <div className="tours-collection-grid">
            {tours.map((tour, index) => (
              <article className={`tour-catalogue-card${tour.featured ? ' is-featured' : ''}`} key={tour.title}>
                <Link className="tour-card-image" href={tour.href} aria-label={`Explore ${tour.title}`}>
                  <Image
                    src={tour.image}
                    alt=""
                    fill
                    sizes={tour.featured ? '(max-width: 760px) 100vw, 58vw' : '(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw'}
                  />
                  <span className="tour-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span className="tour-card-image-label">{tour.eyebrow}</span>
                </Link>

                <div className="tour-card-body">
                  <p className="tour-card-duration">{tour.duration}</p>
                  <h3><Link href={tour.href}>{tour.title}</Link></h3>
                  <p className="tour-card-summary">{tour.summary}</p>
                  <ul className="tour-card-highlights" aria-label={`${tour.title} highlights`}>
                    {tour.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <Link className="tour-card-link" href={tour.href}>
                    {tour.featured ? 'View the full journey' : 'Design this journey'}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tours-planner-cta" aria-labelledby="tours-planner-title">
        <div className="container tours-planner-inner">
          <div>
            <p className="tours-eyebrow">A route that feels like yours</p>
            <h2 id="tours-planner-title">Can&apos;t find the exact journey?</h2>
            <p>Tell us what draws you to Sri Lanka and we&apos;ll shape a first draft around your time, interests and preferred pace.</p>
          </div>
          <div className="tours-planner-actions">
            <Link href="/customize" className="tours-primary-link">Plan your trip <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="tours-secondary-link">Talk to our team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
