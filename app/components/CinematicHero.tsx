'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScrolling from './SmoothScrolling';
import { useLanguage } from './LanguageProvider';
import { homeDictionaries } from '../lib/homeI18n';
import './cinematic.css';

type FilmChapter = {
  number: string;
  location: string;
  title: string;
  copy: string;
  video: string;
  poster: string;
  alignment: 'left' | 'right' | 'center';
  tone: 'mist' | 'tea' | 'stone' | 'ocean';
  ctas?: { label: string; href: string; primary?: boolean }[];
};

const chapterMedia: Array<Omit<FilmChapter, 'location' | 'title' | 'copy' | 'ctas'>> = [
  {
    number: '01',
    video: '/focus_more_on_ninarch_brige_an.mp4',
    poster: '/video-posters/nine-arch.jpg',
    alignment: 'left',
    tone: 'mist',
  },
  {
    number: '02',
    video: '/nuwara eliya .mp4',
    poster: '/video-posters/nuwara-eliya.jpg',
    alignment: 'right',
    tone: 'tea',
  },
  {
    number: '03',
    video: '/Ancient_Kingdom_Inst.mp4',
    poster: '/video-posters/ancient-kingdoms.jpg',
    alignment: 'left',
    tone: 'stone',
  },
  {
    number: '04',
    video: '/Scene_—_Southern_Coast_This.mp4',
    poster: '/video-posters/southern-coast.jpg',
    alignment: 'center',
    tone: 'ocean',
  },
];

export default function CinematicHero() {
  const { locale } = useLanguage();
  const filmCopy = homeDictionaries[locale].film;
  const chapters: FilmChapter[] = chapterMedia.map((chapter, index) => ({
    ...chapter,
    ...filmCopy.chapters[index],
    ctas: index === chapterMedia.length - 1 ? [
      { label: filmCopy.design, href: '/customize', primary: true },
      { label: filmCopy.explore, href: '/tours' },
    ] : undefined,
  }));
  const rootRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const chromeRef = useRef<HTMLDivElement | null>(null);
  const sceneRefs = useRef<HTMLElement[]>([]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const pausedRef = useRef(false);
  const activeChapterRef = useRef(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.body.classList.add('home-film-active');

    const root = rootRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!root) {
      return () => document.body.classList.remove('home-film-active');
    }

    const pauseAll = () => videoRefs.current.forEach((video) => video?.pause());

    const activateVideo = (index: number) => {
      activeChapterRef.current = index;
      setActiveChapter(index);
      videoRefs.current.forEach((video, videoIndex) => {
        if (!video) return;
        if (videoIndex === index && !pausedRef.current && !prefersReducedMotion) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      });
    };

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => {
          gsap.to(chromeRef.current, { autoAlpha: 1, duration: 0.25 });
          activateVideo(0);
        },
        onEnterBack: () => gsap.to(chromeRef.current, { autoAlpha: 1, duration: 0.25 }),
        onLeave: () => {
          gsap.to(chromeRef.current, { autoAlpha: 0, duration: 0.2 });
          pauseAll();
        },
        onLeaveBack: () => {
          gsap.to(chromeRef.current, { autoAlpha: 0, duration: 0.2 });
          pauseAll();
        },
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });

      if (prefersReducedMotion) {
        pauseAll();
        return;
      }

      sceneRefs.current.forEach((scene, index) => {
        const media = scene.querySelector<HTMLElement>('.vh-film-video');
        const wash = scene.querySelector<HTMLElement>('.vh-film-color-wash');
        const content = scene.querySelector<HTMLElement>('.vh-film-copy');
        const text = scene.querySelectorAll<HTMLElement>('[data-film-reveal]');
        const frame = scene.querySelector<HTMLElement>('.vh-film-frame');
        const letterbox = scene.querySelectorAll<HTMLElement>('.vh-film-letterbox');

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: 'top top',
            end: '+=92%',
            pin: true,
            scrub: 1.15,
            anticipatePin: 1,
            onEnter: () => activateVideo(index),
            onEnterBack: () => activateVideo(index),
          },
        });

        timeline
          .fromTo(
            media,
            { scale: 1.04, yPercent: index % 2 === 0 ? -2.5 : 2.5, filter: 'brightness(.46) saturate(.76)' },
            { scale: 1.18, yPercent: index % 2 === 0 ? 2.5 : -2.5, filter: 'brightness(.9) saturate(1.05)', duration: 1, ease: 'none' },
            0,
          )
          .fromTo(wash, { autoAlpha: 0.82 }, { autoAlpha: 0.28, duration: 0.45, ease: 'power2.out' }, 0)
          .fromTo(letterbox, { scaleY: 1 }, { scaleY: 0.38, duration: 0.36, ease: 'power3.out' }, 0)
          .fromTo(frame, { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 0.72, scale: 1, duration: 0.38 }, 0.05);

        if (index === 0) {
          timeline.set(text, { autoAlpha: 1, y: 0, filter: 'blur(0px)' }, 0);
        } else {
          timeline.fromTo(
            text,
            { autoAlpha: 0, y: 48, filter: 'blur(10px)' },
            { autoAlpha: 1, y: 0, filter: 'blur(0px)', stagger: 0.025, duration: 0.16, ease: 'power3.out' },
            0.05,
          );
        }

        timeline
          .to(content, { autoAlpha: 0, y: -32, filter: 'blur(8px)', duration: 0.2, ease: 'power2.in' }, 0.79)
          .to(wash, { autoAlpha: 0.78, duration: 0.21 }, 0.79)
          .to(frame, { autoAlpha: 0, scale: 1.025, duration: 0.18 }, 0.82);
      });
    }, root);

    const handlePointerMove = (event: PointerEvent) => {
      if (prefersReducedMotion || event.pointerType === 'touch') return;
      const scene = sceneRefs.current[activeChapterRef.current];
      const motionLayer = scene?.querySelector<HTMLElement>('.vh-film-motion-layer');
      if (!motionLayer) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 9;
      gsap.to(motionLayer, { x, y, duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      pauseAll();
      context.revert();
      document.body.classList.remove('home-film-active');
    };
  }, []);

  const togglePlayback = () => {
    const nextPaused = !pausedRef.current;
    pausedRef.current = nextPaused;
    setPaused(nextPaused);

    if (nextPaused) {
      videoRefs.current.forEach((video) => video?.pause());
      return;
    }

    const activeVideo = videoRefs.current[activeChapter];
    if (activeVideo) void activeVideo.play().catch(() => undefined);
  };

  return (
    <SmoothScrolling>
      <section ref={rootRef} className="vh-film" aria-label={filmCopy.aria}>
        <div ref={chromeRef} className="vh-film-chrome">
          <div className="vh-film-progress" aria-hidden="true">
            <div ref={progressRef} className="vh-film-progress-fill" />
          </div>

          <div className="vh-film-status" aria-live="polite">
            <span>{chapters[activeChapter].number}</span>
            <i aria-hidden="true" />
            <span>{chapters.length.toString().padStart(2, '0')}</span>
          </div>

          <button className="vh-film-playback" type="button" onClick={togglePlayback} aria-label={paused ? filmCopy.play : filmCopy.pause}>
            <span className={paused ? 'is-play' : 'is-pause'} aria-hidden="true" />
            {paused ? filmCopy.play : filmCopy.pause}
          </button>
        </div>

        {chapters.map((chapter, index) => {
          const titleLines = chapter.title.split('\n');
          const Heading = index === 0 ? 'h1' : 'h2';

          return (
            <section
              key={chapter.number}
              ref={(element) => {
                if (element) sceneRefs.current[index] = element;
              }}
              className={`vh-film-scene is-${chapter.alignment} tone-${chapter.tone}`}
              aria-labelledby={`film-title-${chapter.number}`}
            >
              <div className="vh-film-motion-layer">
                <video
                  ref={(element) => {
                    if (element) videoRefs.current[index] = element;
                  }}
                  className="vh-film-video"
                  poster={chapter.poster}
                  preload={index === 0 ? 'auto' : 'metadata'}
                  autoPlay={index === 0}
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                >
                  <source src={chapter.video} type="video/mp4" />
                </video>
              </div>

              <div className="vh-film-color-wash" aria-hidden="true" />
              <div className="vh-film-vignette" aria-hidden="true" />
              <div className="vh-film-grain" aria-hidden="true" />
              <div className="vh-film-frame" aria-hidden="true"><span /><span /><span /><span /></div>
              <div className="vh-film-letterbox is-top" aria-hidden="true" />
              <div className="vh-film-letterbox is-bottom" aria-hidden="true" />

              <div className="vh-film-copy">
                <p className="vh-film-location" data-film-reveal><span>{chapter.number}</span>{chapter.location}</p>
                <Heading id={`film-title-${chapter.number}`} className="vh-film-title" data-film-reveal aria-label={chapter.title.replace('\n', ' ')}>
                  {titleLines.map((line) => <span key={line}>{line}</span>)}
                </Heading>
                <p className="vh-film-description" data-film-reveal>{chapter.copy}</p>

                {chapter.ctas && (
                  <div className="vh-film-actions" data-film-reveal>
                    {chapter.ctas.map((cta) => (
                      <Link key={cta.href} className={cta.primary ? 'is-primary' : ''} href={cta.href}>
                        {cta.label}<span aria-hidden="true">↗</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="vh-film-scroll-cue" aria-hidden="true">
                <span>{filmCopy.scroll}</span><i />
              </div>
            </section>
          );
        })}
      </section>
    </SmoothScrolling>
  );
}
