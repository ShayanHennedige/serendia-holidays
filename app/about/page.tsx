import Image from 'next/image';
import Link from 'next/link';
import AboutMotion from './AboutMotion';
import styles from './about.module.css';

const disciplines = [
  {
    signal: 'Travel design',
    title: 'See the island as one connected story.',
    copy: 'Private journeys, beach stays, hotels and transport are shaped around your pace—not assembled as separate bookings.',
    image: '/images/transport-train.png',
    href: '/tours',
    link: 'Explore tours',
    meta: 'Tailor-made · Sri Lanka & Maldives',
  },
  {
    signal: 'Cricket tourism',
    title: 'Tour with people who understand the game.',
    copy: 'Fixtures, grounds, coaching, supporters and family travel are coordinated by a team with genuine international cricket experience.',
    image: '/images/cricket-stadium-hero.webp',
    href: '/cricket-tourism',
    link: 'Enter cricket tourism',
    meta: 'Schools · Clubs · Supporters',
  },
  {
    signal: 'Hospitality intelligence',
    title: 'Build the welcome before the first guest arrives.',
    copy: 'Hotel concepts move from planning and procurement through operations, training and a supported soft opening.',
    image: '/images/hero-2.png',
    href: '/hospitality-consultancy',
    link: 'View consultancy',
    meta: 'Concept · Operations · Opening',
  },
];

const team = [
  {
    name: 'Dharshan Hennedige',
    role: 'Founder · Travel & hospitality',
    image: '/dharshan image.webp',
    copy: '24 years across hotels and travel, including nearly seven years as Executive Secretary of the Sri Lanka Tourism Development Authority.',
  },
  {
    name: 'Desmond Bertholameusz',
    role: 'Hospitality & commercial',
    image: '/desmond image .JPG',
    copy: '37 years of hospitality experience across food and beverage leadership, sales and marketing.',
  },
  {
    name: 'Brendon Kuruppu',
    role: 'Cricket tourism',
    image: '/brendon .webp',
    copy: 'Former Sri Lanka Test and One Day international cricketer with more than 20 years in professional cricket and coaching.',
  },
  {
    name: 'Shayan Hennedige',
    role: 'Travel consultant',
    image: '/shayan image .jpg',
    copy: 'Connects travel planning and technology to make every journey clearer, easier and more personal.',
  },
  {
    name: 'Tharuka Gamage',
    role: 'System operations',
    image: '/tharuka.jpeg',
    copy: 'Supports the digital systems that keep the company’s day-to-day travel operations moving smoothly.',
  },
];

const hotelJourney = [
  ['Shape', 'Concept design, construction planning and practical review of the spaces guests and teams will use.'],
  ['Protect', 'Project finance, procurement, cost-saving opportunities and statutory documentation.'],
  ['Prepare', 'Operational manuals, automation, equipment commissioning, people and marketing plans.'],
  ['Open', 'Training, site supervision and hands-on guidance through the hotel soft opening.'],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const metadata = {
  title: 'About Us - Serendia Holidays By Venom',
  description: 'Meet the Sri Lankan travel, cricket and hospitality specialists behind Serendia Holidays by Venom.',
};

export default function AboutPage() {
  return (
    <main className={styles.page} data-about-page>
      <AboutMotion />

      <section className={styles.hero} data-hero aria-labelledby="about-hero-title">
        <video
          className={styles.heroVideo}
          data-hero-video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video-posters/nine-arch.jpg"
          aria-hidden="true"
        >
          <source src="/focus_more_on_ninarch_brige_an.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroAtmosphere} />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroLabel}>Serendia Holidays by Venom · Sri Lanka</p>
          <h1 id="about-hero-title">
            <span><span data-hero-line>Local knowledge.</span></span>
            <span><span data-hero-line>Always moving.</span></span>
          </h1>

          <div className={styles.heroDock}>
            <p>Travel, cricket and hospitality—connected by one Sri Lankan team.</p>
            <div className={styles.heroMeta}>
              <span>Independent</span>
              <span>Established 2019</span>
              <span>Sri Lanka</span>
            </div>
            <a href="#our-perspective" className={styles.heroScroll} aria-label="Scroll to our perspective">
              <span>Discover our perspective</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.perspective} id="our-perspective" aria-labelledby="perspective-title">
        <div className={`container ${styles.perspectiveGrid}`}>
          <div className={styles.perspectiveHeading} data-reveal>
            <p className={styles.signal}>Our perspective</p>
            <h2 id="perspective-title">Not from a guidebook.<br /><span>From experience.</span></h2>
          </div>
          <div className={styles.perspectiveCopy} data-reveal>
            <p>Serendia was created in 2019 by people whose careers were already rooted in Sri Lankan tourism, hotel operations and international cricket.</p>
            <p>That experience changes the questions we ask, the details we notice and the journeys we build.</p>
          </div>
          <div className={styles.perspectiveVisual} data-reveal>
            <div className={styles.visualMain}>
              <Image src="/images/hero-3.png" alt="Leopard in a Sri Lankan forest" fill sizes="(max-width: 800px) 100vw, 72vw" />
            </div>
            <div className={styles.visualInset}>
              <Image src="/images/excursion-colombo.webp" alt="Colombo skyline at sunset" fill sizes="(max-width: 800px) 46vw, 24vw" />
              <span>Island energy</span>
            </div>
            <p>We plan with the whole island in view—from the quietest road to the busiest match day.</p>
          </div>
        </div>
      </section>

      <section className={styles.journey} data-horizontal-section aria-labelledby="disciplines-title">
        <div className={styles.journeyPin} data-horizontal-pin>
          <div className={`container ${styles.journeyHeading}`}>
            <div data-reveal>
              <p className={styles.signal}>How we think</p>
              <h2 id="disciplines-title">Three disciplines.<br />One moving plan.</h2>
            </div>
            <p data-reveal>Scroll through the three worlds that shape every Serendia journey.</p>
          </div>

          <div className={styles.journeyViewport}>
            <div className={styles.journeyTrack} data-horizontal-track>
              {disciplines.map((item, index) => (
                <article className={styles.disciplineCard} key={item.title}>
                  <div className={styles.disciplineImage}>
                    <Image src={item.image} alt="" fill sizes="(max-width: 899px) 100vw, 66vw" />
                    <div className={styles.disciplineShade} />
                    <span className={styles.disciplineCount}>{String(index + 1).padStart(2, '0')} / 03</span>
                    <span className={styles.disciplineMeta}>{item.meta}</span>
                  </div>
                  <div className={styles.disciplineCopy}>
                    <p>{item.signal}</p>
                    <h3>{item.title}</h3>
                    <span>{item.copy}</span>
                    <Link href={item.href}>{item.link}<ArrowIcon /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection} aria-labelledby="team-title">
        <div className="container">
          <div className={styles.teamHeading}>
            <div data-reveal>
              <p className={styles.signal}>The human layer</p>
              <h2 id="team-title">The people who connect it all.</h2>
            </div>
            <p data-reveal>No hand-offs between anonymous departments. The people shaping the idea stay close to the details.</p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <article className={`${styles.person}${index === 0 ? ` ${styles.personLead}` : ''}`} data-reveal key={member.name}>
                <div className={styles.personImage}>
                  <Image src={member.image} alt={member.name} fill sizes={index === 0 ? '(max-width: 800px) 100vw, 48vw' : '(max-width: 620px) 100vw, 25vw'} />
                  <div className={styles.personGlow} />
                </div>
                <div className={styles.personInfo}>
                  <p>{member.role}</p>
                  <h3>{member.name}</h3>
                  <span>{member.copy}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.hotelSection} aria-labelledby="hotel-title">
        <div className={`container ${styles.hotelGrid}`}>
          <div className={styles.hotelIntro} data-reveal>
            <p className={styles.signal}>Hospitality consultancy</p>
            <h2 id="hotel-title">A hotel is a journey before it is a destination.</h2>
            <p>We help investors move from the first practical decisions to an operation ready to welcome its first guests.</p>
            <Link href="/hospitality-consultancy">Explore the full service <ArrowIcon /></Link>
          </div>
          <div className={styles.hotelSteps}>
            {hotelJourney.map(([title, text], index) => (
              <article data-reveal key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <Image src="/images/hero-4.png" alt="Sri Lankan coast at sunset" fill sizes="100vw" />
        <div className={styles.closingShade} />
        <div className={`container ${styles.closingInner}`} data-reveal>
          <p className={styles.signal}>Ready when you are</p>
          <h2 id="closing-title">Your Sri Lanka story starts with someone who knows it.</h2>
          <div className={styles.closingActions}>
            <Link href="/customize">Plan your journey <ArrowIcon /></Link>
            <Link href="/contact">Talk to the team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
