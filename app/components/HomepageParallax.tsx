'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomepageParallax({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const sections = Array.from(root.querySelectorAll<HTMLElement>(':scope > section'));

        sections.forEach((section) => {
          const header = section.querySelector<HTMLElement>('.section-header');
          const cards = section.querySelectorAll<HTMLElement>(
            '.feature-item, .highlight-card, .testimonial-card',
          );
          const images = section.querySelectorAll<HTMLElement>(
            '.highlight-card img, .video-wrapper iframe',
          );
          const copy = section.querySelectorAll<HTMLElement>(
            '.about-text, .trust-strip-fact',
          );

          if (header) {
            gsap.fromTo(
              header,
              { y: 46 },
              {
                y: -10,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 92%',
                  end: 'top 28%',
                  scrub: 0.9,
                },
              },
            );
          }

          if (cards.length) {
            gsap.fromTo(
              cards,
              { y: 54, scale: 0.985 },
              {
                y: -8,
                scale: 1,
                stagger: 0.045,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 96%',
                  end: 'bottom 48%',
                  scrub: 1.1,
                },
              },
            );
          }

          images.forEach((image, index) => {
            gsap.fromTo(
              image,
              { yPercent: index % 2 === 0 ? -4 : 4, scale: 1.06 },
              {
                yPercent: index % 2 === 0 ? 4 : -4,
                scale: 1.01,
                ease: 'none',
                scrollTrigger: {
                  trigger: image.closest('.highlight-card, .video-wrapper') ?? image,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.25,
                },
              },
            );
          });

          if (copy.length) {
            gsap.fromTo(
              copy,
              { y: 34 },
              {
                y: -10,
                stagger: 0.06,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 90%',
                  end: 'bottom 42%',
                  scrub: 1,
                },
              },
            );
          }
        });

        ScrollTrigger.refresh();
      });
    }, root);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return <div ref={rootRef} className="home-parallax-flow">{children}</div>;
}
