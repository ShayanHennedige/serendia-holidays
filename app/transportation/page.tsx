import Image from 'next/image';
import Link from 'next/link';
import InnerHero from '../components/InnerHero';

const roadFleet = [
  { title: 'Private car', image: '/images/transport-car.png', fit: 'Solo travellers and couples', note: 'The most flexible way to move at your own pace.' },
  { title: 'Van', image: '/images/transport-van.png', fit: 'Families and small groups', note: 'Extra space for people, luggage and longer routes.' },
  { title: 'Mini bus', image: '/images/transport-minibus.png', fit: 'Small touring parties', note: 'A practical balance of comfort and group capacity.' },
  { title: 'Coach', image: '/images/transport-coach.png', fit: 'Clubs and larger groups', note: 'Coordinated movement for shared itineraries and equipment.' },
];

const servicePromises = [
  ['Airport to itinerary', 'Transfers connect directly with the route rather than sitting outside it.'],
  ['Right-sized vehicles', 'We match capacity to your party, luggage and level of comfort.'],
  ['Local route knowledge', 'Travel times, road conditions and sensible stops shape every day.'],
  ['One coordinated plan', 'Road, rail and air options can be combined into one reviewed journey.'],
];

export const metadata = {
  title: 'Transportation - Serendia Holidays By Venom',
  description: 'Private vehicles, scenic rail and air connections for tailor-made travel across Sri Lanka.',
};

export default function TransportationPage() {
  return (
    <main className="transportation-page">
      <InnerHero
        title="Transportation"
        subtitle="Road, rail and air—joined into one considered route"
        bgImage="/images/transport-train.png"
      />

      <section className="transport-intro" aria-labelledby="transport-intro-title">
        <div className="container transport-intro-grid">
          <div>
            <p className="collection-kicker">Movement, made part of the journey</p>
            <h2 id="transport-intro-title">The island changes outside your window.</h2>
          </div>
          <div>
            <p>We plan transport as part of the experience—not an afterthought. Take the scenic train where it matters, use a private vehicle where flexibility counts, and consider air connections when time is the priority.</p>
            <Link href="/customize" className="collection-text-link">Build transport into my trip <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="transport-modes" aria-labelledby="transport-modes-title">
        <div className="container">
          <div className="transport-section-heading">
            <p className="collection-kicker">Three ways across the island</p>
            <h2 id="transport-modes-title">Choose one. Combine several.</h2>
          </div>

          <article className="transport-feature transport-feature-rail">
            <div className="transport-feature-image">
              <Image src="/images/transport-train.png" alt="Train crossing Sri Lanka's tea country" fill sizes="(max-width: 800px) 100vw, 62vw" />
              <span>Rail</span>
            </div>
            <div className="transport-feature-copy">
              <p className="transport-mode-label">Slow and scenic</p>
              <h3>Take the train when the view is the point.</h3>
              <p>Hill-country rail is not simply a transfer. We can place the most memorable section inside a wider private route, with road connections before and after.</p>
              <ul><li>Tea-country scenery</li><li>Reserved around the wider route</li><li>Road transfers coordinated</li></ul>
            </div>
          </article>

          <div className="transport-road-section">
            <div className="transport-road-heading">
              <div><p className="transport-mode-label">Road</p><h3>Your private route, right-sized.</h3></div>
              <p>From two travellers to a full touring party, choose the space that fits the journey.</p>
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
              <p className="transport-mode-label">Air</p>
              <h3>Cross the island when time matters most.</h3>
              <p>Helicopter and air-taxi options can turn a long transfer into an extraordinary aerial perspective, subject to route, weather and availability.</p>
              <ul><li>Private charter options</li><li>Airport connections</li><li>Availability confirmed by our team</li></ul>
            </div>
            <div className="transport-feature-image">
              <Image src="/images/transport-helicopter.png" alt="Helicopter flying above Sri Lanka's coast" fill sizes="(max-width: 800px) 100vw, 58vw" />
              <span>Air</span>
            </div>
          </article>
        </div>
      </section>

      <section className="transport-service-strip" aria-labelledby="transport-service-title">
        <div className="container">
          <div className="transport-service-title"><p className="collection-kicker">One team behind every transfer</p><h2 id="transport-service-title">Planned from arrival to departure</h2></div>
          <div className="transport-service-grid">
            {servicePromises.map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
          <div className="transport-cta-row"><p>Tell us your party size and route. We&apos;ll recommend the right mix.</p><Link href="/customize">Plan my transport <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}
