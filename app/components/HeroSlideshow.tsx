'use client';

import { useState, useEffect, useCallback } from 'react';

interface Slide {
  src: string;
  alt: string;
  credit: string;
}

const fallbackSlides: Slide[] = [
  {
    src: '/images/hero-1.png',
    alt: 'Ancient ruins of Polonnaruwa at twilight',
    credit: 'Serendia Holidays',
  },
  {
    src: '/images/hero-3.png',
    alt: 'Sri Lankan leopard in Yala National Park',
    credit: 'Serendia Holidays',
  },
  {
    src: '/images/hero-4.png',
    alt: 'Fishing boat on Sri Lankan beach at sunset',
    credit: 'Serendia Holidays',
  },
  {
    src: '/images/tour-polonnaruwa.png',
    alt: 'Historic Sri Lankan temple interior',
    credit: 'Serendia Holidays',
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState<number>(0);
  const [slides, setSlides] = useState<Slide[]>(fallbackSlides);
  const [source, setSource] = useState<string>('local');

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    let mounted = true;

    async function loadSriLankaImages() {
      try {
        const response = await fetch('/api/sri-lanka-images');
        const data = await response.json();

        if (mounted && Array.isArray(data.images) && data.images.length) {
          setSlides(data.images);
          setSource(data.source || 'Sri Lanka image API');
          setCurrent(0);
        }
      } catch {
        setSlides(fallbackSlides);
        setSource('local');
      }
    }

    loadSriLankaImages();

    return () => {
      mounted = false;
    };
  }, []);

  const goToSlide = (index: number) => setCurrent(index);
  const activeSlide = slides[current] || fallbackSlides[0];

  return (
    <section className="hero cinematic-hero" id="hero">
      <div className="hero-depth-stage" aria-hidden="true">
        <div className="depth-orbit depth-orbit-one" />
        <div className="depth-orbit depth-orbit-two" />
        <div className="depth-grid" />
      </div>

      <div className="hero-slides cinematic-slides">
        {slides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className={`hero-slide ${index === current ? 'active' : ''}`}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-kicker">Sri Lanka journeys for the next five years of travel</p>
        <h1 className="hero-title">Feel Sri Lanka Before You Arrive</h1>
        <p className="hero-subtitle">
          Cinematic escapes, wildlife encounters, island coastlines and private routes shaped around your pace.
        </p>
        <div className="hero-actions">
          <a href="/tours" className="hero-cta">Explore Tours</a>
          <a href="/contact" className="hero-cta hero-cta-secondary">Plan My Journey</a>
        </div>
        <div className="hero-live-card" aria-label="Current carousel image">
          <span>Live Sri Lanka Carousel</span>
          <strong>{activeSlide.alt}</strong>
          <small>Images: {source}</small>
        </div>
      </div>

      <div className="hero-frame-card" aria-hidden="true">
        <div className="hero-frame-inner">
          <img src={activeSlide.src} alt="" />
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
