import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';

interface Excursion {
  title: string;
  image: string;
  href: string;
  route: string;
  duration: string;
  theme: string;
  summary: string;
  featured?: boolean;
}

const excursions: Excursion[] = [
  {
    title: 'Sigiriya from Kandy',
    image: '/images/excursion-sigiriya.webp',
    href: '/excursions/sigiriya-excursion-from-kandy',
    route: 'Kandy → Sigiriya',
    duration: 'Full day',
    theme: 'Heritage hike',
    summary: 'Travel through spice country, then climb the ancient Lion Rock citadel above the plains.',
    featured: true,
  },
  {
    title: 'Anuradhapura from Dambulla',
    image: '/images/excursion-anuradhapura.webp',
    href: '/excursions/anuradhapura-excursion-from-dambulla',
    route: 'Dambulla → Anuradhapura',
    duration: 'Full day',
    theme: 'Sacred city',
    summary: 'Explore monumental stupas, temple precincts and reservoirs in Sri Lanka’s first great capital.',
  },
  {
    title: 'Colombo',
    image: '/images/excursion-colombo.webp',
    href: '/excursions/colombo-excursion',
    route: 'Colombo city circuit',
    duration: 'Half day',
    theme: 'City culture',
    summary: 'Move between Pettah, colonial architecture, museums and the capital’s modern landmarks.',
  },
  {
    title: 'Nuwara Eliya from Kandy',
    image: '/images/hero-2.png',
    href: '/excursions/nuwara-eliya-excursion-from-kandy',
    route: 'Kandy → Nuwara Eliya',
    duration: 'Full day',
    theme: 'Tea country',
    summary: 'Climb into cool highlands for tea estates, waterfalls and a slower mountain rhythm.',
  },
  {
    title: 'Polonnaruwa',
    image: '/images/tour-polonnaruwa.png',
    href: '/excursions/polonnaruwa-excursion',
    route: 'Cultural Triangle',
    duration: 'Full day',
    theme: 'Ancient city',
    summary: 'Walk among royal ruins, carved stone and reservoirs in a remarkably preserved medieval capital.',
  },
  {
    title: 'Yala from Bentota or Galle',
    image: '/images/excursion-yala.webp',
    href: '/excursions/yala-excursion-from-bentota-or-galle',
    route: 'South coast → Yala',
    duration: 'Full day',
    theme: 'Wildlife safari',
    summary: 'Trade the coast for open wilderness on a private safari through Sri Lanka’s best-known national park.',
  },
  {
    title: 'Trincomalee',
    image: '/images/excursion-trincomalee.webp',
    href: '/excursions/trincomalee-excursion',
    route: 'East coast circuit',
    duration: 'Full day',
    theme: 'Coast and culture',
    summary: 'Pair one of the world’s great natural harbours with Marble Beach and Koneswaram Temple.',
  },
  {
    title: 'Kandy from Colombo',
    image: '/images/excursion-kandy.webp',
    href: '/excursions/kandy-excursion-from-colombo',
    route: 'Colombo → Kandy',
    duration: 'Full day',
    theme: 'Hill capital',
    summary: 'A private route to the Temple of the Tooth, Peradeniya gardens and Kandy’s lakefront.',
  },
  {
    title: 'Kandy from Negombo',
    image: '/images/excursion-kandy.webp',
    href: '/excursions/kandy-excursion-from-negombo',
    route: 'Negombo → Kandy',
    duration: 'Full day',
    theme: 'Culture and gardens',
    summary: 'Reach the island’s historic hill capital from the west coast with a route tailored to your stay.',
  },
];

export const metadata = {
  title: 'Excursions - Serendia Holidays By Venom',
  description: 'Private half-day and full-day excursions across Sri Lanka.',
};

export default function ExcursionsPage() {
  return (
    <main className="excursions-page">
      <InnerHero
        title="Excursions"
        subtitle="One free day can open an entirely different Sri Lanka"
        bgImage="/images/hero-3.png"
      />

      <section className="excursions-intro" aria-labelledby="excursions-intro-title">
        <div className="container excursions-intro-grid">
          <div>
            <p className="collection-kicker">The one-day field guide</p>
            <h2 id="excursions-intro-title">Leave in the morning.<br />Return with a story.</h2>
          </div>
          <div className="excursions-intro-copy">
            <p>Start from the place you are already staying. We shape the route, timing and stops around your base, so a single day feels expansive rather than rushed.</p>
            <div className="excursion-assurances" aria-label="Excursion service details">
              <span>Private pickup</span>
              <span>Flexible pace</span>
              <span>Local planning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="excursions-journal" aria-labelledby="excursions-list-title">
        <div className="container">
          <div className="collection-heading">
            <div>
              <p className="collection-kicker">Choose by curiosity</p>
              <h2 id="excursions-list-title">Nine ways to spend a day</h2>
            </div>
            <p>Ancient capitals, tea-country air, city energy, wild landscapes and an east-coast horizon.</p>
          </div>

          <div className="excursion-journal-grid">
            {excursions.map((item) => (
              <article className={`excursion-story-card${item.featured ? ' is-featured' : ''}`} key={item.href}>
                <Link href={item.href} className="excursion-story-image" aria-label={`Explore ${item.title}`}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes={item.featured ? '(max-width: 760px) 100vw, 60vw' : '(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw'}
                  />
                  <span className="excursion-story-theme">{item.theme}</span>
                </Link>
                <div className="excursion-story-copy">
                  <div className="excursion-story-meta"><span>{item.route}</span><span>{item.duration}</span></div>
                  <h3><Link href={item.href}>{item.title}</Link></h3>
                  <p>{item.summary}</p>
                  <Link href={item.href} className="collection-text-link">See the day <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="excursions-cta" aria-labelledby="excursions-cta-title">
        <div className="container excursions-cta-inner">
          <p className="collection-kicker">Already know where you&apos;re staying?</p>
          <h2 id="excursions-cta-title">We&apos;ll find the best day around it.</h2>
          <p>Share your hotel or base town and the experience you want. Our team will suggest a practical private route.</p>
          <div><Link href="/customize">Plan an excursion <span aria-hidden="true">↗</span></Link><Link href="/contact">Ask the local team</Link></div>
        </div>
      </section>
    </main>
  );
}
