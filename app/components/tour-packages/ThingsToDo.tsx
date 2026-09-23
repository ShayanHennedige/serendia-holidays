'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import type { Experience } from '../../lib/tourPackages';
import type { PackagesCopy } from '../../lib/tourPackagesI18n';

function Pill({ included, copy }: { included: boolean; copy: PackagesCopy }) {
  return (
    <span className={`pkg-pill ${included ? 'is-included' : 'is-optional'}`}>
      {included ? copy.common.included : copy.common.optional}
    </span>
  );
}

/**
 * "Things to do" as a horizontal rail of compact cards, with the full write-up in a
 * native <dialog>. Keeps every detail while cutting a stop's height by roughly 75%.
 */
export default function ThingsToDo({
  experiences,
  stopId,
  copy,
}: {
  experiences: Experience[];
  stopId: string;
  copy: PackagesCopy;
}) {
  const railRef = useRef<HTMLUListElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    syncArrows();
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener('scroll', syncArrows, { passive: true });
    window.addEventListener('resize', syncArrows);
    return () => {
      rail.removeEventListener('scroll', syncArrows);
      window.removeEventListener('resize', syncArrows);
    };
  }, [syncArrows]);

  const scrollBy = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    rail.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  const open = (index: number) => {
    setOpenIndex(index);
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // native <dialog> gives us ESC, focus trapping and the backdrop
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setOpenIndex(null);
    dialog.addEventListener('close', onClose);
    return () => dialog.removeEventListener('close', onClose);
  }, []);

  // lock page scroll while the dialog is open
  useEffect(() => {
    if (openIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [openIndex]);

  // a new experience always starts from the top of its write-up
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [openIndex]);

  const step = (direction: 1 | -1) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + direction + experiences.length) % experiences.length;
    });
  };

  const active = openIndex === null ? null : experiences[openIndex];
  const showArrows = experiences.length > 3;

  return (
    <>
      <div className="pkg-todo-head-row">
        <h4 className="pkg-block-title">{copy.itinerary.thingsToDo}</h4>
        {showArrows && (
          <div className="pkg-rail-nav">
            <button type="button" onClick={() => scrollBy(-1)} disabled={atStart} aria-label={copy.itinerary.scrollLeft}>
              <ChevronLeftIcon />
            </button>
            <button type="button" onClick={() => scrollBy(1)} disabled={atEnd} aria-label={copy.itinerary.scrollRight}>
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>

      <ul className="pkg-todo-rail" ref={railRef}>
        {experiences.map((experience, index) => (
          <li key={experience.name}>
            <article className="pkg-todo-card">
              <button type="button" className="pkg-todo-card-image" onClick={() => open(index)}>
                <Image src={experience.image} alt="" fill sizes="(max-width: 700px) 70vw, 260px" />
                <span className="pkg-todo-card-pill">
                    <Pill included={experience.included} copy={copy} />
                  </span>
              </button>
              <div className="pkg-todo-card-body">
                <h5>{experience.name}</h5>
                <p className="pkg-todo-place">{experience.location}</p>
                <p className="pkg-todo-teaser">{experience.summary}</p>
                <button type="button" className="pkg-btn-outline" onClick={() => open(index)}>
                  {copy.itinerary.explore}
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <dialog
        className="pkg-modal"
        ref={dialogRef}
        aria-label={active ? active.name : copy.itinerary.experienceDetail}
        onClick={(event) => {
          // click on the backdrop (the dialog element itself) closes
          if (event.target === dialogRef.current) close();
        }}
      >
        {active && (
          <div className="pkg-modal-inner">
            <button
                type="button"
                className="pkg-modal-close"
                onClick={close}
                aria-label={copy.itinerary.close}
              >
              &times;
            </button>

            <div className="pkg-modal-media">
              <Image src={active.image} alt={active.name} fill sizes="(max-width: 900px) 100vw, 420px" />
            </div>

            <div className="pkg-modal-body">
              {/* only the prose scrolls, so the footer nav stays reachable */}
              <div className="pkg-modal-scroll" ref={scrollRef}>
                <Pill included={active.included} copy={copy} />
                <h3>{active.name}</h3>
                <p className="pkg-todo-place">{active.location}</p>

                {active.detail.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}

                <ul className="pkg-todo-facts">
                  {active.facts.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>

                {active.goodToKnow && (
                  <div className="pkg-todo-know">
                    <h5>{copy.itinerary.goodToKnow}</h5>
                    <p>{active.goodToKnow}</p>
                  </div>
                )}
              </div>

              <div className="pkg-modal-foot">
                <a className="pkg-btn-dark" href={`#${stopId}`} onClick={close}>
                  {copy.itinerary.backToItinerary}
                </a>
                {experiences.length > 1 && (
                  <div className="pkg-rail-nav">
                    <button type="button" onClick={() => step(-1)} aria-label={copy.itinerary.previousExperience}>
                      <ChevronLeftIcon />
                    </button>
                    <span className="pkg-modal-count">
                      {(openIndex ?? 0) + 1} / {experiences.length}
                    </span>
                    <button type="button" onClick={() => step(1)} aria-label={copy.itinerary.nextExperience}>
                      <ChevronRightIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
