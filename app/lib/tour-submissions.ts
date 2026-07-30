import 'server-only';

import { randomBytes } from 'node:crypto';
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import type { FinalTourSubmissionRequest, PinnedLocation, TourSubmissionSnapshot } from './tour-types';

const storageDirectory = process.env.TOUR_SUBMISSION_DIRECTORY
  ? resolve(process.env.TOUR_SUBMISSION_DIRECTORY)
  : process.env.VERCEL
    ? join(tmpdir(), 'tour-submissions')
    : join(process.cwd(), '.data', 'tour-submissions');

const knownCoordinates: Record<string, [number, number]> = {
  airport: [79.8841, 7.1808],
  colombo: [79.8612, 6.9271],
  negombo: [79.8380, 7.2083],
  sigiriya: [80.7603, 7.9570],
  dambulla: [80.6517, 7.8742],
  kandy: [80.6337, 7.2906],
  'nuwara eliya': [80.7829, 6.9497],
  ella: [81.0463, 6.8667],
  yala: [81.5200, 6.3725],
  galle: [80.2170, 6.0329],
  bentota: [80.0000, 6.4210],
  mirissa: [80.4716, 5.9483],
  polonnaruwa: [81.0188, 7.9403],
  anuradhapura: [80.4037, 8.3114],
  trincomalee: [81.2152, 8.5874],
  jaffna: [80.0255, 9.6615],
  'arugam bay': [81.8368, 6.8404],
  'malé, maldives': [73.5093, 4.1755],
};

export interface DeliveryRecord {
  reference: string;
  at: string;
  channel: 'whatsapp' | 'email';
  status: 'sent' | 'simulated' | 'failed';
  providerMediaId?: string;
  providerMessageId?: string;
  recipient?: string;
  error?: string;
}

export function validateFinalTourRequest(value: unknown): { ok: true; data: FinalTourSubmissionRequest } | { ok: false; error: string } {
  if (!value || typeof value !== 'object') return { ok: false, error: 'Invalid submission.' };
  const data = value as Partial<FinalTourSubmissionRequest>;
  const customer = data.customer;
  const tour = data.tour;
  const itinerary = data.itinerary;

  if (!customer?.fullName?.trim()) return { ok: false, error: 'Please provide your full name.' };
  if (!customer.email?.trim() && !customer.phone?.trim()) return { ok: false, error: 'Please provide an email address or phone number.' };
  if (!tour || !Number.isFinite(tour.adults) || tour.adults < 1) return { ok: false, error: 'At least one adult is required.' };
  if (!tour.arrivalDate || !tour.departureDate) return { ok: false, error: 'Please provide your arrival and departure dates.' };
  if (new Date(tour.departureDate).getTime() <= new Date(tour.arrivalDate).getTime()) return { ok: false, error: 'Departure must be after arrival.' };
  if (!Array.isArray(tour.selectedLocations) || tour.selectedLocations.length === 0) return { ok: false, error: 'Please pin at least one destination.' };
  if (!Array.isArray(tour.selectedDestinationPins) || tour.selectedDestinationPins.length !== tour.selectedLocations.length) return { ok: false, error: 'Destination pin data is incomplete.' };
  if (tour.selectedDestinationPins.some((pin) => !Array.isArray(pin.coordinates) || pin.coordinates.length !== 2 || !pin.coordinates.every(Number.isFinite))) return { ok: false, error: 'One or more destination pins are invalid.' };
  if (!Array.isArray(tour.activities) || tour.activities.length === 0) return { ok: false, error: 'Please select at least one experience.' };
  if (!itinerary || !Array.isArray(itinerary.days) || itinerary.days.length === 0) return { ok: false, error: 'The itinerary is incomplete.' };
  const itineraryDestinations = itinerary.days.map((day) => (day.destination || day.title || '').trim());
  if (itineraryDestinations.length !== tour.selectedLocations.length || itineraryDestinations.some((destination, index) => destination !== tour.selectedLocations[index])) {
    return { ok: false, error: 'The destination list changed. Please regenerate the selected route before finalising.' };
  }
  if (data.consent !== true) return { ok: false, error: 'Please confirm that we may process this tour request.' };

  return { ok: true, data: structuredClone(data as FinalTourSubmissionRequest) };
}

export function createTourReference(date = new Date()): string {
  const stamp = [
    String(date.getUTCFullYear()).slice(-2),
    String(date.getUTCMonth() + 1).padStart(2, '0'),
    String(date.getUTCDate()).padStart(2, '0'),
  ].join('');
  return `TRIP-SL-${stamp}-${randomBytes(3).toString('hex').slice(0, 4).toUpperCase()}`;
}

export async function saveTourSnapshot(snapshot: TourSubmissionSnapshot, routeMapSvg: string, routeMapPng?: Uint8Array | null): Promise<void> {
  await mkdir(storageDirectory, { recursive: true, mode: 0o700 });
  const writes: Promise<void>[] = [
    writeFile(join(storageDirectory, `${snapshot.reference}.json`), `${JSON.stringify(snapshot, null, 2)}\n`, { encoding: 'utf8', flag: 'wx', mode: 0o600 }),
    writeFile(join(storageDirectory, `${snapshot.reference}-route.svg`), routeMapSvg, { encoding: 'utf8', flag: 'wx', mode: 0o600 }),
  ];
  if (routeMapPng) writes.push(writeFile(join(storageDirectory, `${snapshot.reference}-route.png`), routeMapPng, { flag: 'wx', mode: 0o600 }));
  await Promise.all(writes);
}

export async function recordTourDelivery(record: DeliveryRecord): Promise<void> {
  await mkdir(storageDirectory, { recursive: true, mode: 0o700 });
  await appendFile(join(storageDirectory, 'delivery-log.jsonl'), `${JSON.stringify(record)}\n`, { encoding: 'utf8', mode: 0o600 });
}

export async function recordWhatsAppDelivery(record: DeliveryRecord): Promise<void> {
  await recordTourDelivery(record);
}

export async function loadTourSnapshot(reference: string): Promise<TourSubmissionSnapshot | null> {
  try {
    const content = await readFile(join(storageDirectory, `${reference}.json`), 'utf8');
    return JSON.parse(content) as TourSubmissionSnapshot;
  } catch {
    return null;
  }
}

export function createRouteMapSvg(destinations: PinnedLocation[], experiences: string[] = []): string {
  const points = [
    { label: 'Bandaranaike International Airport', coordinates: knownCoordinates.airport, airport: true },
    ...destinations.map((pin) => ({ label: pin.label, coordinates: pin.coordinates, airport: false })),
  ];

  const project = ([longitude, latitude]: [number, number]) => {
    const x = 190 + ((longitude - 79.4) / (82.4 - 79.4)) * 920;
    const y = 115 + ((10.1 - latitude) / (10.1 - 5.4)) * 1340;
    return [Math.max(85, Math.min(1115, x)), Math.max(85, Math.min(1490, y))] as const;
  };
  const route = points.map((point) => project(point.coordinates).join(',')).join(' ');
  const pins = points.map((point, index) => {
    const [x, y] = project(point.coordinates);
    const number = point.airport ? 'A' : String(index);
    const labelX = x > 760 ? x - 28 : x + 28;
    const anchor = x > 760 ? 'end' : 'start';
    return `<g><circle cx="${x}" cy="${y}" r="23" fill="${point.airport ? '#1e5145' : '#c3512f'}" stroke="#fff" stroke-width="6"/><text x="${x}" y="${y + 7}" text-anchor="middle" fill="#fff" font-size="18" font-weight="800">${number}</text><text x="${labelX}" y="${y - 31}" text-anchor="${anchor}" fill="#163f36" font-size="19" font-weight="750" paint-order="stroke" stroke="#f5f1e9" stroke-width="7">${escapeXml(point.label)}</text></g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600" role="img" aria-label="Numbered Sri Lanka tour route">
    <defs><linearGradient id="sea" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e9f3ef"/><stop offset="1" stop-color="#d7e8e2"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-opacity=".16"/></filter></defs>
    <rect width="1200" height="1600" rx="48" fill="url(#sea)"/>
    <path d="M603 82 C738 138 840 288 879 444 C927 636 914 806 850 989 C793 1150 702 1322 583 1490 C497 1410 438 1288 403 1151 C363 995 314 864 304 701 C291 495 360 303 469 171 C516 114 557 88 603 82Z" fill="#f8f3e8" stroke="#9bbbad" stroke-width="8" filter="url(#shadow)"/>
    <polyline points="${route}" fill="none" stroke="#c3512f" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 22" opacity=".8"/>
    ${pins}
    <g transform="translate(66 1458)"><rect width="1068" height="102" rx="28" fill="#fff" opacity=".95"/><circle cx="39" cy="34" r="17" fill="#1e5145"/><text x="39" y="40" text-anchor="middle" fill="#fff" font-size="15" font-weight="800">A</text><text x="69" y="40" fill="#31564d" font-size="18" font-weight="700">Airport · numbered destination and overnight route order</text><text x="24" y="76" fill="#607b74" font-size="16">Selected experiences: ${escapeXml(experiences.slice(0, 5).join(' · ') || 'Consultant-curated attractions along the route')}</text></g>
  </svg>`;
}

export async function createStaticRouteMap(destinations: PinnedLocation[]): Promise<Buffer | null> {
  const token = process.env.MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoidGhhcnVrYWdhbWFnZTAxIiwiYSI6ImNtcGdqOWtmcDBhZDEyc3M4OWxtZ2t4OTkifQ.GPu5Lt5ax9FmIQTfkfKj2w';
  const routeCoordinates = [knownCoordinates.airport, ...destinations.map((pin) => pin.coordinates)];
  const routeGeoJson = {
    type: 'Feature',
    properties: { stroke: '#c3512f', 'stroke-width': 5, 'stroke-opacity': 0.82 },
    geometry: { type: 'LineString', coordinates: routeCoordinates },
  };
  const overlays = [
    `geojson(${encodeURIComponent(JSON.stringify(routeGeoJson))})`,
    `pin-l-a+1e5145(${knownCoordinates.airport[0]},${knownCoordinates.airport[1]})`,
    ...destinations.map((pin, index) => `${index < 9 ? `pin-l-${index + 1}` : 'pin-l'}+c3512f(${pin.coordinates[0]},${pin.coordinates[1]})`),
  ].join(',');
  const endpoint = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/${overlays}/auto/1200x1200@2x?padding=90&access_token=${encodeURIComponent(token)}`;

  try {
    const response = await fetch(endpoint, { cache: 'no-store' });
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) return null;
    return Buffer.from(await response.arrayBuffer());
  } catch {
    return null;
  }
}

function escapeXml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&apos;', '"': '&quot;' })[character] || character);
}
