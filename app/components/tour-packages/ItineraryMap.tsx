'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoidGhhcnVrYWdhbWFnZTAxIiwiYSI6ImNtcGdqOWtmcDBhZDEyc3M4OWxtZ2t4OTkifQ.GPu5Lt5ax9FmIQTfkfKj2w';

const STYLES = {
  map: 'mapbox://styles/mapbox/light-v11',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
};

export interface MapStop {
  id: string;
  label: string;
  coordinates: [number, number];
}

interface MapboxMap {
  on: (event: string, handler: (payload?: never) => void) => void;
  once: (event: string, handler: () => void) => void;
  remove: () => void;
  addSource: (id: string, source: Record<string, unknown>) => void;
  addLayer: (layer: Record<string, unknown>) => void;
  getSource: (id: string) => unknown;
  setStyle: (style: string) => void;
  fitBounds: (bounds: number[][], options?: Record<string, unknown>) => void;
  addControl: (control: unknown, position?: string) => void;
  resize: () => void;
}

interface MapboxMarker {
  setLngLat: (coordinates: number[]) => MapboxMarker;
  addTo: (map: MapboxMap) => MapboxMarker;
  remove: () => void;
  getElement: () => HTMLElement;
}

interface MapboxGl {
  accessToken: string;
  Map: new (options: Record<string, unknown>) => MapboxMap;
  Marker: new (options?: Record<string, unknown>) => MapboxMarker;
  NavigationControl: new (options?: Record<string, unknown>) => unknown;
}

function gl(): MapboxGl | undefined {
  return (window as unknown as { mapboxgl?: MapboxGl }).mapboxgl;
}

/** Mirrors the loader in app/customize/components/MapboxTripPicker.tsx — the script is
 *  injected on demand rather than bundled, and reused if another component already added it. */
function loadMapbox() {
  return new Promise<void>((resolve, reject) => {
    if (gl()) return resolve();
    const existing = document.querySelector<HTMLScriptElement>('script[data-mapbox-gl]');
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css';
    document.head.appendChild(stylesheet);

    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js';
    script.async = true;
    script.dataset.mapboxGl = 'true';
    script.addEventListener('load', () => resolve(), { once: true });
    script.addEventListener('error', reject, { once: true });
    document.body.appendChild(script);
  });
}

export default function ItineraryMap({
  stops,
  activeId,
}: {
  stops: MapStop[];
  activeId: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const markersRef = useRef<Map<string, MapboxMarker>>(new Map());
  const activeIdRef = useRef(activeId);
  // latest stops (their labels translate after first render); read when the pins are drawn
  const stopsRef = useRef(stops);
  const [styleKey, setStyleKey] = useState<keyof typeof STYLES>('map');
  const [failed, setFailed] = useState(false);
  const t = useTranslations('ItineraryMap');
  // Mapbox's own control labels (zoom buttons, attribution, scroll hints), in the page language.
  // Stored nested in the messages (next-intl keys can't contain dots); Mapbox wants "Control.Key".
  const controlCopy = t.raw('controls') as Record<string, Record<string, string>>;
  const mapboxLocale = Object.fromEntries(Object.entries(controlCopy).flatMap(([control, labels]) =>
    Object.entries(labels).map(([key, label]) => [`${control}.${key}`, label])));
  const locale = useLocale();

  useEffect(() => {
    let cancelled = false;

    // `stops` is static for the lifetime of a package page, so the helper can close over it
    const drawRoute = () => {
      const map = mapRef.current;
      const mapboxgl = gl();
      if (!map || !mapboxgl) return;

      if (!map.getSource('route')) {
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: { type: 'LineString', coordinates: stops.map((stop) => stop.coordinates) },
          },
        });
        map.addLayer({
          id: 'route-line',
          type: 'line',
          source: 'route',
          layout: { 'line-cap': 'round', 'line-join': 'round' },
          paint: {
            'line-color': '#1c1c1c',
            'line-width': 1.6,
            'line-dasharray': [1.6, 2.2],
          },
        });
      }

      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current.clear();

      stopsRef.current.forEach((stop) => {
        const el = document.createElement('span');
        el.className = 'pkg-map-pin';
        el.title = stop.label;
        el.setAttribute('aria-label', stop.label);
        if (stop.id === activeIdRef.current) el.classList.add('is-active');
        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat(stop.coordinates)
          .addTo(map);
        markersRef.current.set(stop.id, marker);
      });
    };

    loadMapbox()
      .then(() => {
        const mapboxgl = gl();
        if (cancelled || !containerRef.current || !mapboxgl) return;
        mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

        const lngs = stops.map((s) => s.coordinates[0]);
        const lats = stops.map((s) => s.coordinates[1]);
        const bounds = [
          [Math.min(...lngs), Math.min(...lats)],
          [Math.max(...lngs), Math.max(...lats)],
        ];

        const map = new mapboxgl.Map({
          container: containerRef.current,
          style: STYLES.map,
          bounds,
          fitBoundsOptions: { padding: 70 },
          cooperativeGestures: true,
          locale: mapboxLocale,
          attributionControl: true,
        });
        mapRef.current = map;
        map.addControl(new mapboxgl.NavigationControl({ showCompass: true }), 'top-right');
        map.on('load', () => drawRoute());
        map.on('style.load', () => drawRoute());
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    const markers = markersRef.current;
    return () => {
      cancelled = true;
      markers.forEach((marker) => marker.remove());
      markers.clear();
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // stops are static per page; the map is rebuilt only when the language changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  // stop names arrive translated a moment after the map is drawn; keep the pins' labels in step
  useEffect(() => {
    stopsRef.current = stops;
    stops.forEach((stop) => {
      const el = markersRef.current.get(stop.id)?.getElement();
      if (!el) return;
      el.title = stop.label;
      el.setAttribute('aria-label', stop.label);
    });
  }, [stops]);

  // reflect the stop currently in view
  useEffect(() => {
    activeIdRef.current = activeId;
    markersRef.current.forEach((marker, id) => {
      marker.getElement().classList.toggle('is-active', id === activeId);
    });
  }, [activeId]);

  if (failed) {
    return (
      <div className="pkg-map-fallback">
        <p>{t('unavailable')}</p>
        <ol>
          {stops.map((stop) => <li key={stop.id}>{stop.label}</li>)}
        </ol>
      </div>
    );
  }

  return (
    <div className="pkg-map">
      <div className="pkg-map-canvas" ref={containerRef} />
      <div className="pkg-map-styles" role="group" aria-label={t('style')}>
        <button
          type="button"
          className={styleKey === 'satellite' ? 'is-active' : ''}
          onClick={() => {
            setStyleKey('satellite');
            mapRef.current?.setStyle(STYLES.satellite);
          }}
        >
          {t('satellite')}
        </button>
        <button
          type="button"
          className={styleKey === 'map' ? 'is-active' : ''}
          onClick={() => {
            setStyleKey('map');
            mapRef.current?.setStyle(STYLES.map);
          }}
        >
          {t('map')}
        </button>
      </div>
    </div>
  );
}
