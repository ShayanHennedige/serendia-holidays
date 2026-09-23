'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';
import type { Experience } from '../../lib/tourPackages';
import { fill, type PackagesCopy } from '../../lib/tourPackagesI18n';

export interface HighlightSlide extends Experience {
  /** itinerary stop this experience belongs to, for the jump link */
  stopId: string;
}

export default function HighlightsCarousel({
  slides,
  copy,
}: {
  slides: HighlightSlide[];
  copy: PackagesCopy;
}) {
  const [index, setIndex] = useState(0);
  const liveRef = useRef<HTMLParagraphElement | null>(null);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') go(index - 1);
      if (event.key === 'ArrowRight') go(index + 1);
    };
    const node = liveRef.current?.closest('.pkg-carousel');
    node?.addEventListener('keydown', onKey as EventListener);
    return () => node?.removeEventListener('keydown', onKey as EventListener);
  }, [go, index]);

  const slide = slides[index];
  const dense = count > 12;

  return (
    <section className="pkg-highlights" aria-labelledby="pkg-highlights-title">
      <div className="container">
        <div
          className="pkg-carousel"
          role="group"
          aria-roledescription="carousel"
          aria-label={copy.highlights.carouselLabel}
          tabIndex={-1}
        >
          <div className="pkg-carousel-media">
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.name}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>

          <div className="pkg-carousel-body">
            {/* discrete segments read well up to a dozen slides; past that they
                become hairlines, so fall back to a single proportional bar */}
            <div className={`pkg-carousel-progress${dense ? ' is-dense' : ''}`} aria-hidden="true">
              {dense ? (
                <span
                  className="pkg-carousel-progress-fill"
                  style={{ width: `${((index + 1) / count) * 100}%` }}
                />
              ) : (
                slides.map((item, i) => (
                  <button
                    type="button"
                    key={item.name}
                    className={i === index ? 'is-active' : ''}
                    onClick={() => go(i)}
                    tabIndex={-1}
                  />
                ))
              )}
            </div>

            <h2 id="pkg-highlights-title">{copy.highlights.title}</h2>

            <span className={`pkg-pill ${slide.included ? 'is-included' : 'is-optional'}`}>
              {slide.included ? copy.common.included : copy.common.optional}
            </span>

            <h3>{slide.name}</h3>
            <p className="pkg-carousel-copy">{slide.summary}</p>

            <p className="pkg-visually-hidden" aria-live="polite" ref={liveRef}>
              {fill(copy.highlights.position, { index: index + 1, count, name: slide.name })}
            </p>

            <div className="pkg-carousel-foot">
              <a className="pkg-btn-dark" href={`#${slide.stopId}`}>
                {copy.highlights.jumpToItinerary} <ArrowDownIcon />
              </a>

              <div className="pkg-carousel-nav">
                <button type="button" onClick={() => go(index - 1)} aria-label={copy.highlights.previous}>
                  <ChevronLeftIcon />
                </button>
                <button type="button" onClick={() => go(index + 1)} aria-label={copy.highlights.next}>
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
