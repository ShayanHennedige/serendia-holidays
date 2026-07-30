'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useLanguage } from '../../components/LanguageProvider';
import type { Locale } from '../../lib/i18n';
import type { PinnedLocation } from '../../lib/tour-types';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidGhhcnVrYWdhbWFnZTAxIiwiYSI6ImNtcGdqOWtmcDBhZDEyc3M4OWxtZ2t4OTkifQ.GPu5Lt5ax9FmIQTfkfKj2w';

const suggestedPlaces = [
  { id: 'sigiriya', name: 'Sigiriya', coordinates: [80.7603, 7.9570] as [number, number] },
  { id: 'kandy', name: 'Kandy', coordinates: [80.6337, 7.2906] as [number, number] },
  { id: 'ella', name: 'Ella', coordinates: [81.0463, 6.8667] as [number, number] },
  { id: 'galle', name: 'Galle', coordinates: [80.2170, 6.0329] as [number, number] },
  { id: 'yala', name: 'Yala National Park', coordinates: [81.5200, 6.3725] as [number, number] },
  { id: 'male', name: 'Malé, Maldives', coordinates: [73.5093, 4.1755] as [number, number] },
];

type PickerCopy = {
  eyebrow: string; title: string; intro: string; loading: string; suggested: string; selected: string;
  clear: string; remove: string; empty: string; preferred: string; searchPlaceholder: string;
  searchButton: string; searching: string; noResults: string; searchError: string; clickHint: string;
};

export const mapPickerCopy: Record<Locale, PickerCopy> = {
  en: { eyebrow: 'Map selector', title: 'Pin your preferred destinations', intro: 'Search for a place, choose suggestions, or click anywhere on the map.', loading: 'Loading interactive map…', suggested: 'Suggested locations', selected: 'Selected destinations', clear: 'Clear all', remove: 'Remove', empty: 'No destinations pinned yet', preferred: 'Preferred locations', searchPlaceholder: 'Search a city, beach, park or hotel…', searchButton: 'Search', searching: 'Searching…', noResults: 'No matching places found.', searchError: 'Location search is temporarily unavailable.', clickHint: 'Tip: click directly on the map to add another named pin.' },
  fr: { eyebrow: 'Sélecteur de carte', title: 'Épinglez vos destinations préférées', intro: 'Recherchez un lieu, choisissez une suggestion ou cliquez sur la carte.', loading: 'Chargement de la carte interactive…', suggested: 'Destinations suggérées', selected: 'Destinations sélectionnées', clear: 'Tout effacer', remove: 'Retirer', empty: 'Aucune destination épinglée', preferred: 'Destinations préférées', searchPlaceholder: 'Rechercher une ville, plage, parc ou hôtel…', searchButton: 'Rechercher', searching: 'Recherche…', noResults: 'Aucun lieu trouvé.', searchError: 'La recherche est momentanément indisponible.', clickHint: 'Astuce : cliquez directement sur la carte pour ajouter un lieu.' },
  de: { eyebrow: 'Kartenauswahl', title: 'Markieren Sie Ihre Wunschziele', intro: 'Suchen Sie einen Ort, wählen Sie Vorschläge oder klicken Sie auf die Karte.', loading: 'Interaktive Karte wird geladen…', suggested: 'Vorgeschlagene Orte', selected: 'Ausgewählte Reiseziele', clear: 'Alle entfernen', remove: 'Entfernen', empty: 'Noch keine Reiseziele markiert', preferred: 'Bevorzugte Reiseziele', searchPlaceholder: 'Stadt, Strand, Park oder Hotel suchen…', searchButton: 'Suchen', searching: 'Suche…', noResults: 'Keine passenden Orte gefunden.', searchError: 'Die Ortssuche ist derzeit nicht verfügbar.', clickHint: 'Tipp: Klicken Sie direkt auf die Karte, um einen Ort hinzuzufügen.' },
  it: { eyebrow: 'Selettore mappa', title: 'Segna le destinazioni che preferisci', intro: 'Cerca un luogo, scegli un suggerimento o fai clic sulla mappa.', loading: 'Caricamento della mappa interattiva…', suggested: 'Località suggerite', selected: 'Destinazioni selezionate', clear: 'Rimuovi tutto', remove: 'Rimuovi', empty: 'Nessuna destinazione selezionata', preferred: 'Destinazioni preferite', searchPlaceholder: 'Cerca città, spiaggia, parco o hotel…', searchButton: 'Cerca', searching: 'Ricerca…', noResults: 'Nessun luogo trovato.', searchError: 'La ricerca non è disponibile al momento.', clickHint: 'Suggerimento: fai clic sulla mappa per aggiungere un luogo.' },
  es: { eyebrow: 'Selector de mapa', title: 'Marca tus destinos preferidos', intro: 'Busca un lugar, elige una sugerencia o haz clic en cualquier punto del mapa.', loading: 'Cargando mapa interactivo…', suggested: 'Lugares sugeridos', selected: 'Destinos seleccionados', clear: 'Borrar todo', remove: 'Eliminar', empty: 'Aún no has marcado ningún destino', preferred: 'Lugares preferidos', searchPlaceholder: 'Busca una ciudad, playa, parque u hotel…', searchButton: 'Buscar', searching: 'Buscando…', noResults: 'No se encontraron lugares.', searchError: 'La búsqueda de lugares no está disponible temporalmente.', clickHint: 'Consejo: haz clic directamente en el mapa para añadir otro lugar.' },
  lt: { eyebrow: 'Žemėlapio parinkiklis', title: 'Pažymėkite norimas kelionės vietas', intro: 'Ieškokite vietos, rinkitės iš pasiūlymų arba spustelėkite bet kurią žemėlapio vietą.', loading: 'Įkeliamas interaktyvus žemėlapis…', suggested: 'Siūlomos vietos', selected: 'Pasirinktos vietos', clear: 'Išvalyti viską', remove: 'Pašalinti', empty: 'Dar nepažymėta nė viena vieta', preferred: 'Pageidaujamos vietos', searchPlaceholder: 'Ieškokite miesto, paplūdimio, parko ar viešbučio…', searchButton: 'Ieškoti', searching: 'Ieškoma…', noResults: 'Atitinkančių vietų nerasta.', searchError: 'Vietų paieška laikinai nepasiekiama.', clickHint: 'Patarimas: spustelėkite tiesiai žemėlapyje ir pridėkite kitą vietą.' },
};

interface MapboxMap {
  on: (event: string, callback: (event?: { lngLat?: { lng: number; lat: number } }) => void) => void;
  flyTo: (options: Record<string, unknown>) => void;
  remove: () => void;
}

interface MapboxMarker {
  setLngLat: (coordinates: number[]) => MapboxMarker;
  addTo: (map: MapboxMap) => void;
  remove: () => void;
}

interface SearchResult {
  id: string;
  label: string;
  coordinates: [number, number];
}

declare global {
  interface Window {
    mapboxgl?: {
      accessToken: string;
      Map: new (options: Record<string, unknown>) => MapboxMap;
      Marker: new (options?: Record<string, unknown>) => MapboxMarker;
    };
  }
}

interface MapboxTripPickerProps {
  initialLocations?: PinnedLocation[];
  onLocationsChange: (locations: PinnedLocation[]) => void;
}

export default function MapboxTripPicker({ initialLocations = [], onLocationsChange }: MapboxTripPickerProps) {
  const { locale } = useLanguage();
  const copy = mapPickerCopy[locale];
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const markerRefs = useRef<Map<string, MapboxMarker>>(new Map());
  const [selectedPins, setSelectedPins] = useState<PinnedLocation[]>(() => initialLocations);
  const [mapReady, setMapReady] = useState(false);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchMessage, setSearchMessage] = useState('');

  useEffect(() => {
    onLocationsChange(selectedPins);
  }, [onLocationsChange, selectedPins]);

  useEffect(() => {
    let cancelled = false;
    const markers = markerRefs.current;

    const addMapPin = async (longitudeValue: number, latitudeValue: number) => {
      const longitude = Number(longitudeValue.toFixed(5));
      const latitude = Number(latitudeValue.toFixed(5));
      const id = `map-${latitude}-${longitude}`;
      let label = `Pinned location (${latitude}, ${longitude})`;
      try {
        const response = await fetch(`/api/map-search?longitude=${longitude}&latitude=${latitude}`);
        const data = await response.json();
        if (response.ok && data.result?.label) label = data.result.label;
      } catch {
        // The coordinate pin remains usable if reverse geocoding is unavailable.
      }
      setSelectedPins((current) => current.some((pin) => pin.id === id) ? current : [...current, { id, label, coordinates: [longitude, latitude], source: 'map' }]);
    };

    const loadMapbox = () => new Promise<void>((resolve, reject) => {
      if (window.mapboxgl) return resolve();
      const existingScript = document.querySelector<HTMLScriptElement>('script[data-mapbox-gl]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(), { once: true });
        existingScript.addEventListener('error', reject, { once: true });
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

    loadMapbox().then(() => {
      if (cancelled || !mapContainerRef.current || !window.mapboxgl) return;
      window.mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
      const map = new window.mapboxgl.Map({ container: mapContainerRef.current, style: 'mapbox://styles/mapbox/outdoors-v12', center: [80.72, 7.55], zoom: 6.3, pitch: 18 });
      mapRef.current = map;
      map.on('load', () => setMapReady(true));
      map.on('click', (event) => {
        if (event?.lngLat) void addMapPin(event.lngLat.lng, event.lngLat.lat);
      });
    }).catch(() => setMapReady(false));

    return () => {
      cancelled = true;
      markers.forEach((marker) => marker.remove());
      markers.clear();
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapReady || !mapRef.current || !window.mapboxgl) return;
    const selectedIds = new Set(selectedPins.map((pin) => pin.id));
    markerRefs.current.forEach((marker, id) => {
      if (!selectedIds.has(id)) { marker.remove(); markerRefs.current.delete(id); }
    });
    selectedPins.forEach((pin) => {
      if (markerRefs.current.has(pin.id) || !window.mapboxgl || !mapRef.current) return;
      const marker = new window.mapboxgl.Marker({ color: pin.source === 'map' ? '#ef8a3d' : '#c3512f' }).setLngLat(pin.coordinates);
      marker.addTo(mapRef.current);
      markerRefs.current.set(pin.id, marker);
    });
  }, [mapReady, selectedPins]);

  const searchLocations = async () => {
    if (!query.trim() || searching) return;
    setSearching(true);
    setSearchMessage('');
    try {
      const response = await fetch(`/api/map-search?q=${encodeURIComponent(query.trim())}`);
      const data = await response.json();
      if (!response.ok) throw new Error();
      const results = (data.results || []) as SearchResult[];
      setSearchResults(results);
      if (!results.length) setSearchMessage(copy.noResults);
    } catch {
      setSearchResults([]);
      setSearchMessage(copy.searchError);
    } finally {
      setSearching(false);
    }
  };

  const toggleSuggested = (place: (typeof suggestedPlaces)[number]) => {
    const isSelected = selectedPins.some((pin) => pin.id === place.id);
    setSelectedPins((current) => isSelected ? current.filter((pin) => pin.id !== place.id) : [...current, { id: place.id, label: place.name, coordinates: place.coordinates, source: 'suggested' }]);
    if (!isSelected) mapRef.current?.flyTo({ center: place.coordinates, zoom: place.name.includes('Maldives') ? 8 : 9, speed: 0.75 });
  };

  const pinSearchResult = (result: SearchResult) => {
    setSelectedPins((current) => current.some((pin) => pin.id === result.id) ? current : [...current, { ...result, source: 'search' }]);
    mapRef.current?.flyTo({ center: result.coordinates, zoom: 10, speed: 0.75 });
    setSearchResults([]);
    setQuery(result.label);
  };

  return (
    <div className="planner-map-panel">
      <div className="planner-map-toolbar"><div><span className="planner-map-eyebrow">{copy.eyebrow}</span><h3>{copy.title}</h3><small>{copy.intro}</small></div><p><strong>{selectedPins.length}</strong> {copy.selected.toLowerCase()}</p></div>

      <div className="planner-map-search" role="search">
        <span aria-hidden="true">⌕</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => { if (event.key === 'Enter') { event.preventDefault(); void searchLocations(); } }} placeholder={copy.searchPlaceholder} aria-label={copy.searchPlaceholder} />
        <button type="button" onClick={() => void searchLocations()} disabled={searching || !query.trim()}>{searching ? copy.searching : copy.searchButton}</button>
        {(searchResults.length > 0 || searchMessage) && (
          <div className="planner-map-search-results">
            {searchMessage && <p>{searchMessage}</p>}
            {searchResults.map((result) => {
              const pinned = selectedPins.some((pin) => pin.id === result.id);
              return <button type="button" key={result.id} onClick={() => pinSearchResult(result)} disabled={pinned}><span>⌖</span><strong>{result.label}</strong><small>{pinned ? 'Pinned' : 'Pin location +'}</small></button>;
            })}
          </div>
        )}
      </div>

      <div className="planner-map-shell"><div className="planner-map" ref={mapContainerRef} />{!mapReady && <div className="planner-map-loading">{copy.loading}</div>}<span className="planner-map-click-hint">{copy.clickHint}</span></div>

      <div className="planner-map-pills" aria-label={copy.suggested}>{suggestedPlaces.map((place) => { const isSelected = selectedPins.some((pin) => pin.id === place.id); return <button type="button" key={place.id} className={isSelected ? 'selected' : ''} aria-pressed={isSelected} onClick={() => toggleSuggested(place)}><span aria-hidden="true">{isSelected ? '✓' : '+'}</span>{place.name}</button>; })}</div>

      <div className="planner-map-selection" aria-live="polite"><div className="planner-map-selection-heading"><strong>{copy.selected} ({selectedPins.length})</strong>{selectedPins.length > 0 && <button type="button" onClick={() => setSelectedPins([])}>{copy.clear}</button>}</div>{selectedPins.length === 0 ? <p>{copy.empty}</p> : <div className="planner-map-selected-pins">{selectedPins.map((pin, index) => <span key={pin.id}><i>{index + 1}</i>{pin.label}<button type="button" onClick={() => setSelectedPins((current) => current.filter((item) => item.id !== pin.id))} aria-label={`${copy.remove}: ${pin.label}`}>×</button></span>)}</div>}</div>
    </div>
  );
}
