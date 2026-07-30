'use client';

import { useLayoutEffect } from 'react';

export default function AboutMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-about-page]');
    if (!root) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const video = root.querySelector<HTMLVideoElement>('[data-hero-video]');

    if (reducedMotion) {
      video?.pause();
      root.classList.add('motion-reduced');
      return;
    }

    root.classList.add('motion-ready');
    let cleanup = () => {};
    let cancelled = false;
    let videoObserver: IntersectionObserver | undefined;

    if (video) {
      videoObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }, { threshold: 0.05 });
      videoObserver.observe(video);
    }

    async function initialiseMotion() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled || !root) return;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.fromTo(
          '[data-hero-line]',
          { yPercent: 115 },
          { yPercent: 0, duration: 1.15, stagger: 0.12, ease: 'power4.out', delay: 0.12 },
        );

        if (video) {
          gsap.to(video, {
            scale: 1.1,
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: '[data-hero]',
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          });
        }

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.fromTo(
            element,
            { y: 46, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                once: true,
              },
            },
          );
        });

        const media = gsap.matchMedia();
        media.add('(min-width: 900px)', () => {
          const section = root.querySelector<HTMLElement>('[data-horizontal-section]');
          const pin = root.querySelector<HTMLElement>('[data-horizontal-pin]');
          const track = root.querySelector<HTMLElement>('[data-horizontal-track]');
          if (!section || !pin || !track) return;

          const cards = Array.from(track.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement,
          );
          const travelDistance = () => {
            const firstCard = cards.at(0);
            const lastCard = cards.at(-1);
            if (!firstCard || !lastCard) return 0;
            return Math.max(0, lastCard.offsetLeft - firstCard.offsetLeft);
          };

          gsap.to(track, {
            x: () => -travelDistance(),
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${travelDistance() + window.innerHeight * 0.7}`,
              scrub: 0.8,
              pin,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              ...(cards.length > 1 ? {
                snap: {
                  snapTo: 1 / (cards.length - 1),
                  duration: { min: 0.12, max: 0.35 },
                  delay: 0.06,
                  ease: 'power1.inOut',
                },
              } : {}),
            },
          });
        });

        cleanup = () => {
          media.revert();
          context.revert();
        };
      }, root);
    }

    initialiseMotion();

    return () => {
      cancelled = true;
      videoObserver?.disconnect();
      cleanup();
      root.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
