'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ItineraryMap, { type MapStop } from './ItineraryMap';
import ThingsToDo from './ThingsToDo';
import type { Experience, Hotel, Stop } from '../../lib/tourPackages';
import type { PackagesCopy } from '../../lib/tourPackagesI18n';

export interface ResolvedStop extends Omit<Stop, 'experiences'> {
  experiences: Experience[];
  coordinates: [number, number] | null;
}

function Pill({ included, copy }: { included: boolean; copy: PackagesCopy }) {
  return (
    <span className={`pkg-pill ${included ? 'is-included' : 'is-optional'}`}>
      {included ? copy.common.included : copy.common.optional}
    </span>
  );
}

function HotelCard({ hotel, copy }: { hotel: Hotel; copy: PackagesCopy }) {
  return (
    <article className="pkg-hotel">
      <h5>{hotel.name}</h5>
      <Pill included={hotel.included} copy={copy} />
      <p className="pkg-hotel-place">{hotel.location}</p>
      <p>{hotel.description}</p>
    </article>
  );
}

export default function ItinerarySection({
  stops,
  copy,
}: {
  stops: ResolvedStop[];
  copy: PackagesCopy;
}) {
  const [activeId, setActiveId] = useState(stops[0]?.id ?? '');
  const refs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const nodes = [...refs.current.values()];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // the entry closest to the top of the viewport wins
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [stops]);

  const mapStops: MapStop[] = stops
    .filter((stop): stop is ResolvedStop & { coordinates: [number, number] } => stop.coordinates !== null)
    .map((stop) => ({ id: stop.id, label: stop.location, coordinates: stop.coordinates }));

  return (
    <section className="pkg-itinerary" aria-label={copy.itinerary.label}>
      <div className="container pkg-itinerary-grid">
        <div className="pkg-timeline">
          {stops.map((stop) => (
            <article
              className={`pkg-stop${stop.id === activeId ? ' is-active' : ''}`}
              id={stop.id}
              key={stop.id}
              ref={(node) => {
                if (node) refs.current.set(stop.id, node);
                else refs.current.delete(stop.id);
              }}
            >
              <p className="pkg-stop-days">
                {stop.dayLabel} {stop.dayRange}
              </p>
              <h3 className="pkg-stop-title">
                {stop.location}
                {stop.subLabel && <span> {stop.subLabel}</span>}
              </h3>
              <p className="pkg-stop-intro">{stop.intro}</p>

              <div className="pkg-stop-image">
                <Image src={stop.image} alt={stop.location} fill sizes="(max-width: 1100px) 100vw, 52vw" />
              </div>

              {stop.experiences.length > 0 && (
                <div className="pkg-stop-block">
                  <ThingsToDo experiences={stop.experiences} stopId={stop.id} copy={copy} />
                </div>
              )}

              {stop.hotels.length > 0 && (
                <div className="pkg-stop-block">
                  <h4 className="pkg-block-title">
                    {stop.hotels.length > 1
                      ? copy.itinerary.recommendedHotels
                      : copy.itinerary.recommendedHotel}
                  </h4>
                  <div className="pkg-hotel-grid">
                    {stop.hotels.map((hotel) => (
                      <HotelCard key={hotel.name} hotel={hotel} copy={copy} />
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <aside className="pkg-itinerary-aside">
          <div className="pkg-itinerary-sticky">
            <ItineraryMap stops={mapStops} activeId={activeId} />

            <div className="pkg-personalise">
              <h4>{copy.itinerary.personalise}</h4>
              <p>{copy.itinerary.personaliseCopy}</p>
              <div className="pkg-personalise-actions">
                <Link href="/contact" className="pkg-btn-dark">{copy.itinerary.enquireNow}</Link>
                <Link href="/customize" className="pkg-btn-outline">{copy.itinerary.buildYourOwn}</Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
