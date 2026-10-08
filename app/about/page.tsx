import Image from 'next/image';
import Link from 'next/link';
import AboutMotion from './AboutMotion';
import styles from './about.module.css';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

// Text for these lists lives in messages/<locale>/about.json (About.disciplines / team / hotelJourney),
// matched by position.
const disciplines = [
  { image: '/images/transport-train.png', href: '/tours' },
  { image: '/images/cricket-stadium-hero.webp', href: '/cricket-tourism' },
  { image: '/images/hero-2.png', href: '/hospitality-consultancy' },
];

const team = [
  { name: 'Dharshan Hennedige', image: '/dharshanimage 2.jpg' },
  { name: 'Desmond Bertholameusz', image: '/desmond image .JPG' },
  { name: 'Brendon Kuruppu', image: '/brendon .webp' },
  { name: 'Shayan Hennedige', image: '/shayan image .jpg' },
  { name: 'Tharuka Gamage', image: '/tharuka.jpeg' },
];

type DisciplineCopy = { signal: string; title: string; copy: string; link: string; meta: string };
type TeamCopy = { role: string; copy: string };
type StepCopy = { title: string; text: string };

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const metadata = pageMetadata({
  title: 'About Us - Serendia Holidays By Venom',
  description: 'Meet the Sri Lankan travel, cricket and hospitality specialists behind Serendia Holidays by Venom.',
  path: '/about',
});

export default async function AboutPage() {
  const t = await getTranslations('About');
  const disciplineCopy = t.raw('disciplines') as DisciplineCopy[];
  const teamCopy = t.raw('team') as TeamCopy[];
  const hotelJourney = t.raw('hotelJourney') as StepCopy[];

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
          <p className={styles.heroLabel}>{t('hero.label')}</p>
          <h1 id="about-hero-title">
            <span><span data-hero-line>{t('hero.line1')}</span></span>
            <span><span data-hero-line>{t('hero.line2')}</span></span>
          </h1>

          <div className={styles.heroDock}>
            <p>{t('hero.dock')}</p>
            <div className={styles.heroMeta}>
              <span>{t('hero.meta1')}</span>
              <span>{t('hero.meta2')}</span>
              <span>{t('hero.meta3')}</span>
            </div>
            <a href="#our-perspective" className={styles.heroScroll} aria-label={t('hero.scrollLabel')}>
              <span>{t('hero.scroll')}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.perspective} id="our-perspective" aria-labelledby="perspective-title">
        <div className={`container ${styles.perspectiveGrid}`}>
          <div className={styles.perspectiveHeading} data-reveal>
            <p className={styles.signal}>{t('perspective.signal')}</p>
            <h2 id="perspective-title">{t('perspective.title1')}<br /><span>{t('perspective.title2')}</span></h2>
          </div>
          <div className={styles.perspectiveCopy} data-reveal>
            <p>{t('perspective.copy1')}</p>
            <p>{t('perspective.copy2')}</p>
          </div>
          <div className={styles.perspectiveVisual} data-reveal>
            <div className={styles.visualMain}>
              <Image src="/images/hero-3.png" alt={t('perspective.altLeopard')} fill sizes="(max-width: 800px) 100vw, 72vw" />
            </div>
            <div className={styles.visualInset}>
              <Image src="/images/excursion-colombo.webp" alt={t('perspective.altColombo')} fill sizes="(max-width: 800px) 46vw, 24vw" />
              <span>{t('perspective.inset')}</span>
            </div>
            <p>{t('perspective.caption')}</p>
          </div>
        </div>
      </section>

      <section className={styles.journey} data-horizontal-section aria-labelledby="disciplines-title">
        <div className={styles.journeyPin} data-horizontal-pin>
          <div className={`container ${styles.journeyHeading}`}>
            <div data-reveal>
              <p className={styles.signal}>{t('disciplinesSection.signal')}</p>
              <h2 id="disciplines-title">{t('disciplinesSection.title1')}<br />{t('disciplinesSection.title2')}</h2>
            </div>
            <p data-reveal>{t('disciplinesSection.copy')}</p>
          </div>

          <div className={styles.journeyViewport}>
            <div className={styles.journeyTrack} data-horizontal-track>
              {disciplines.map((item, index) => (
                <article className={styles.disciplineCard} key={item.href}>
                  <div className={styles.disciplineImage}>
                    <Image src={item.image} alt="" fill sizes="(max-width: 899px) 100vw, 66vw" />
                    <div className={styles.disciplineShade} />
                    <span className={styles.disciplineCount}>{String(index + 1).padStart(2, '0')} / 03</span>
                    <span className={styles.disciplineMeta}>{disciplineCopy[index].meta}</span>
                  </div>
                  <div className={styles.disciplineCopy}>
                    <p>{disciplineCopy[index].signal}</p>
                    <h3>{disciplineCopy[index].title}</h3>
                    <span>{disciplineCopy[index].copy}</span>
                    <Link href={item.href}>{disciplineCopy[index].link}<ArrowIcon /></Link>
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
              <p className={styles.signal}>{t('teamSection.signal')}</p>
              <h2 id="team-title">{t('teamSection.title')}</h2>
            </div>
            <p data-reveal>{t('teamSection.copy')}</p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <article className={styles.person} data-reveal key={member.name}>
                <div className={styles.personImage}>
                  <Image
                    className={styles.personPortrait}
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 899px) 50vw, 33vw"
                  />
                  <div className={styles.personGlow} />
                </div>
                <div className={styles.personInfo}>
                  <p>{teamCopy[index].role}</p>
                  <h3>{member.name}</h3>
                  <span>{teamCopy[index].copy}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.hotelSection} aria-labelledby="hotel-title">
        <div className={`container ${styles.hotelGrid}`}>
          <div className={styles.hotelIntro} data-reveal>
            <p className={styles.signal}>{t('hotel.signal')}</p>
            <h2 id="hotel-title">{t('hotel.title')}</h2>
            <p>{t('hotel.copy')}</p>
            <Link href="/hospitality-consultancy">{t('hotel.link')} <ArrowIcon /></Link>
          </div>
          <div className={styles.hotelSteps}>
            {hotelJourney.map(({ title, text }, index) => (
              <article data-reveal key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <Image src="/images/hero-4.png" alt={t('closing.alt')} fill sizes="100vw" />
        <div className={styles.closingShade} />
        <div className={`container ${styles.closingInner}`} data-reveal>
          <p className={styles.signal}>{t('closing.signal')}</p>
          <h2 id="closing-title">{t('closing.title')}</h2>
          <div className={styles.closingActions}>
            <Link href="/customize">{t('closing.plan')} <ArrowIcon /></Link>
            <Link href="/contact">{t('closing.talk')}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
