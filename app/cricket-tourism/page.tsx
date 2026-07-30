import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';

const offerings = [
  { label: 'Tour format', title: 'School and club tours', description: 'Complete touring programmes that bring fixtures, accommodation, transport and island experiences into one practical plan.' },
  { label: 'Supporters', title: 'Spectator packages', description: 'Travel and stays arranged around tournament schedules, venue access and time to experience Sri Lanka between matches.' },
  { label: 'Match preparation', title: 'Ground and practice bookings', description: 'Match grounds and dedicated practice venues coordinated directly with suitable local clubs and facilities.' },
  { label: 'Performance', title: 'Technical coaching', description: 'Focused technical sessions, local opposition and specialist spin or fast-bowling support shaped to the touring side.' },
  { label: 'Touring party', title: 'Players and families', description: 'Accommodation options for players, staff and accompanying families, integrated with the wider touring itinerary.' },
];

export const metadata = {
  title: 'Cricket Tourism - Serendia Holidays By Venom',
  description: 'Cricket tour packages, spectator visits, ground bookings and technical coaching arranged by Serendia Holidays.',
};

export default function CricketTourismPage() {
  return (
    <main className="cricket-page">
      <InnerHero
        title="Cricket Tourism"
        subtitle="Tour the island with people who understand the game"
        bgImage="/images/cricket-stadium-hero.webp"
      />

      <section className="cricket-opening" aria-labelledby="cricket-opening-title">
        <div className="container cricket-opening-grid">
          <div className="cricket-opening-copy">
            <p className="collection-kicker">A Serendia specialty</p>
            <h2 id="cricket-opening-title">Built from inside the boundary.</h2>
            <p>Cricket travel asks for more than hotel rooms and a coach. Fixtures, training, grounds, recovery time and family travel all have to work together. That is where genuine playing and coaching experience changes the tour.</p>
          </div>
          <div className="cricket-crease-mark" aria-hidden="true"><span /><i /><span /></div>
        </div>
      </section>

      <section className="cricket-profile" aria-labelledby="cricket-profile-title">
        <div className="container cricket-profile-grid">
          <div className="cricket-profile-image">
            <Image src="/brendon .webp" alt="Brendon Kuruppu" fill sizes="(max-width: 760px) 100vw, 48vw" />
            <span>Tour leadership</span>
          </div>
          <div className="cricket-profile-copy">
            <p className="collection-kicker">Credibility you can build a tour around</p>
            <h2 id="cricket-profile-title">Brendon Kuruppu</h2>
            <p className="cricket-profile-role">Former Sri Lanka Test and One Day international cricketer</p>
            <p>Brendon leads Serendia&apos;s cricket-tourism capability with more than 20 years in professional cricket and national-team coaching. He understands what a touring side needs both on the field and around it.</p>
            <dl>
              <div><dt>Test + ODI</dt><dd>International playing experience</dd></div>
              <div><dt>20+ years</dt><dd>Professional cricket and coaching</dd></div>
              <div><dt>Local access</dt><dd>Clubs, grounds and cricket expertise</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="cricket-offerings" aria-labelledby="cricket-offerings-title">
        <div className="container">
          <div className="cricket-offerings-heading">
            <p className="collection-kicker">Build the touring programme</p>
            <h2 id="cricket-offerings-title">Every part of the game, connected.</h2>
            <p>Choose the elements your side needs. We combine them into a staff-reviewable programme around your dates and touring party.</p>
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
            <p className="collection-kicker">Travelling to watch?</p>
            <h2 id="cricket-spectator-title">Follow the fixture. See the island between overs.</h2>
            <p>We can shape a supporter itinerary around international match dates, connecting venue days with coast, culture and wildlife.</p>
            <Link href="/contact">Discuss a spectator trip <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="cricket-cta" aria-labelledby="cricket-cta-title">
        <div className="container cricket-cta-inner">
          <div><p className="collection-kicker">Your touring brief</p><h2 id="cricket-cta-title">Bring the squad. We&apos;ll build the tour.</h2></div>
          <div><p>Share your party size, approximate dates, age or playing level, and fixture interests.</p><Link href="/contact">Enquire about a cricket tour <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <nav className="cricket-related" aria-label="Continue exploring">
        <div className="container"><span>Continue around the island</span><Link href="/tours">Tours</Link><Link href="/excursions">Excursions</Link><Link href="/transportation">Transportation</Link></div>
      </nav>
    </main>
  );
}
