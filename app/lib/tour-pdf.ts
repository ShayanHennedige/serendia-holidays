import 'server-only';

import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { TourSubmissionSnapshot } from './tour-types';

export async function generateTourPdf(snapshot: TourSubmissionSnapshot, routeMapSvg: string, routeMapDataUri?: string): Promise<Uint8Array> {
  const [{ default: puppeteer }, logo, hero] = await Promise.all([
    import('puppeteer'),
    imageDataUri(join(process.cwd(), 'public', 'black logo.png'), 'image/png'),
    imageDataUri(join(process.cwd(), 'public', 'images', 'hero-1.png'), 'image/png'),
  ]);

  const executablePath = await resolveBrowserExecutablePath(puppeteer);
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1900, deviceScaleFactor: 2 });
    await page.setContent(renderTourHtml(snapshot, routeMapSvg, routeMapDataUri, logo, hero), { waitUntil: 'load' });
    return await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: '<div style="width:100%;padding:0 16mm;color:#6f7d79;font-size:8px;display:flex;justify-content:space-between"><span>Serendia Holidays · Personalised Tour Request</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
      margin: { top: '12mm', right: '12mm', bottom: '17mm', left: '12mm' },
    });
  } finally {
    await browser.close();
  }
}

function renderTourHtml(snapshot: TourSubmissionSnapshot, routeMapSvg: string, routeMapDataUri: string | undefined, logo: string, hero: string): string {
  const { customer, tour, itinerary } = snapshot;
  const nights = calculateNights(tour.arrivalDate, tour.departureDate, itinerary.days.length);
  const days = nights + 1;
  const roomSummary = Object.entries(tour.roomCounts)
    .filter(([, count]) => count > 0)
    .map(([room, count]) => `${count} × ${titleCase(room)}`)
    .join(', ') || 'Best-fit room configuration';
  const hotelMatches = itinerary.matchedCatalog.filter((entry) => entry.type === 'hotel');
  const requestItems = [tour.dietaryRequirements, tour.accessibilityRequirements, tour.specialRequests].filter(Boolean);

  return `<!doctype html>
  <html lang="en"><head><meta charset="utf-8"><style>
    @page { size: A4; margin: 12mm 12mm 17mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #193c34; background: #fff; font-family: Arial, Helvetica, sans-serif; font-size: 10.5px; line-height: 1.5; }
    h1,h2,h3,p { margin-top: 0; } h1 { font-size: 35px; line-height: 1.02; letter-spacing: -1.5px; } h2 { margin: 0 0 13px; font-size: 20px; } h3 { margin-bottom: 5px; font-size: 12px; }
    .cover { min-height: 260mm; position: relative; overflow: hidden; border-radius: 18px; background: #113d33; color: #fff; break-after: page; }
    .cover-photo { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:.43; }
    .cover-shade { position:absolute; inset:0; background:linear-gradient(180deg,rgba(6,28,23,.18),rgba(6,28,23,.95)); }
    .cover-content { position:relative; z-index:2; min-height:260mm; padding:19mm 16mm 15mm; display:flex; flex-direction:column; justify-content:space-between; }
    .logo-wrap { display:inline-flex; width:164px; padding:9px 12px; border-radius:8px; background:rgba(255,255,255,.95); } .logo-wrap img { width:100%; height:auto; }
    .eyebrow { color:#f39972; font-size:10px; font-weight:800; letter-spacing:2px; text-transform:uppercase; }
    .cover h1 { max-width:560px; margin:9px 0 16px; color:#fff; }
    .reference { display:inline-flex; padding:8px 13px; border:1px solid rgba(255,255,255,.35); border-radius:999px; font-weight:800; letter-spacing:.8px; }
    .cover-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; border:1px solid rgba(255,255,255,.2); background:rgba(255,255,255,.2); }
    .cover-grid div { padding:11px; background:rgba(7,33,27,.78); } .cover-grid span { display:block; color:#b8d6cd; font-size:8px; letter-spacing:1px; text-transform:uppercase; } .cover-grid strong { display:block; margin-top:3px; color:#fff; font-size:11px; }
    .section { margin-bottom:18px; break-inside:avoid; } .section-title { display:flex; align-items:center; gap:10px; margin-bottom:11px; } .section-title:before { content:''; width:28px; height:3px; background:#c3512f; border-radius:3px; }
    .grid { display:grid; grid-template-columns:repeat(2,1fr); gap:8px; } .grid.three { grid-template-columns:repeat(3,1fr); }
    .field { padding:9px 11px; border:1px solid #dce7e2; border-radius:9px; background:#f8fbfa; } .field span { display:block; margin-bottom:2px; color:#71817d; font-size:7.5px; font-weight:800; letter-spacing:.7px; text-transform:uppercase; } .field strong { color:#193c34; font-size:10px; }
    .chips { display:flex; flex-wrap:wrap; gap:6px; } .chip { padding:6px 10px; border-radius:999px; background:#edf4f1; color:#295b4f; font-weight:700; }
    .map { padding:9px; border:1px solid #dce7e2; border-radius:14px; background:#f4f9f7; break-inside:avoid; } .map svg, .map img { display:block; width:100%; height:175mm; border-radius:10px; object-fit:cover; }
    .day { margin-bottom:9px; padding:11px 12px; border-left:4px solid #c3512f; border-radius:0 10px 10px 0; background:#f8faf9; break-inside:avoid; } .day-head { display:flex; justify-content:space-between; gap:12px; } .day-head span { color:#7d8986; font-size:8px; } .day p { margin:4px 0 0; color:#4e615c; }
    .day-details { display:grid; grid-template-columns:repeat(2,1fr); gap:5px 12px; margin-top:8px; } .day-details div { font-size:8.5px; } .day-details b { color:#193c34; }
    .requests { margin:0; padding:0; list-style:none; } .requests li { margin-bottom:6px; padding:8px 10px 8px 25px; position:relative; border-radius:8px; background:#fff4ef; } .requests li:before { content:'✓'; position:absolute; left:9px; color:#c3512f; font-weight:800; }
    .summary { padding:14px; border-radius:13px; background:#153e35; color:#fff; } .summary .grid { gap:1px; background:rgba(255,255,255,.15); } .summary .field { border:0; border-radius:0; background:#153e35; } .summary .field span { color:#a9c8bf; } .summary .field strong { color:#fff; }
    .notice { margin-top:16px; padding:10px 12px; border:1px solid #e4d5c9; border-radius:9px; color:#665f58; background:#fdf9f5; font-size:8.5px; }
    .page-break { break-before:page; } a { color:inherit; }
  </style></head><body>
    <section class="cover"><img class="cover-photo" src="${hero}" alt=""><div class="cover-shade"></div><div class="cover-content">
      <div><div class="logo-wrap"><img src="${logo}" alt="Serendia Holidays"></div></div>
      <div><span class="eyebrow">Personalised Sri Lanka tour request</span><h1>${escapeHtml(customer.fullName)}’s<br>island journey.</h1><span class="reference">${snapshot.reference}</span></div>
      <div class="cover-grid">
        ${coverItem('Travel dates', `${formatDate(tour.arrivalDate)} – ${formatDate(tour.departureDate)}`)}
        ${coverItem('Travellers', `${tour.adults} adult${tour.adults === 1 ? '' : 's'} · ${tour.children} child${tour.children === 1 ? '' : 'ren'}`)}
        ${coverItem('Duration', `${days} days · ${nights} nights`)}
        ${coverItem('Customer', customer.fullName)}
        ${coverItem('Generated', formatDate(snapshot.generatedAt))}
        ${coverItem('Status', snapshot.status)}
      </div>
    </div></section>

    ${section('Customer information', `<div class="grid three">${field('Full name', customer.fullName)}${field('Country', customer.country || 'Not provided')}${field('Email', customer.email || 'Not provided')}${field('Contact number', customer.phone || 'Not provided')}${field('Preferred contact', customer.preferredContactMethod)}${field('Tour reference', snapshot.reference)}</div>`)}
    ${section('Travel details', `<div class="grid three">${field('Arrival', formatDate(tour.arrivalDate))}${field('Departure', formatDate(tour.departureDate))}${field('Travellers', `${tour.adults} adults · ${tour.children} children`)}${field('Arrival flight', flight(tour.arrivalFlight, tour.arrivalTime))}${field('Departure flight', flight(tour.departureFlight, tour.departureTime))}${field('Planning mode', titleCase(tour.planningMode))}</div>`)}
    ${section('Customer preferences', `<div class="grid three">${field('Travel style', tour.travelStyle || titleCase(tour.travelerKind))}${field('Travel pace', tour.travelPace || 'Balanced')}${field('Accommodation', [tour.hotelType, tour.roomCategory].filter(Boolean).join(' · ') || 'To be advised')}${field('Meal plan', tour.mealPlan || 'To be advised')}${field('Transport', tour.transportPreference || 'Private chauffeur vehicle')}${field('Rooms', roomSummary)}${field('Budget style', tour.budget || 'Not provided')}${field('Chauffeur', tour.chauffeurRequired ? 'Required' : 'Not requested')}</div>`)}
    ${section('Selected destinations', `<div class="chips">${tour.selectedLocations.map((item, index) => `<span class="chip">${index + 1}. ${escapeHtml(item)}</span>`).join('')}</div>`)}
    ${section('Selected experiences', `<div class="chips">${tour.activities.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join('')}</div>`)}

    <section class="section page-break"><div class="section-title"><h2>Pinpoint route map</h2></div><div class="map">${routeMapDataUri ? `<img src="${routeMapDataUri}" alt="Detailed route map with numbered destination pins">` : routeMapSvg}</div><p class="notice">A marks Bandaranaike International Airport. Numbered pins follow the customer’s preferred destination and overnight route order.</p></section>

    <section class="section page-break"><div class="section-title"><h2>Day-by-day itinerary</h2></div>
      ${itinerary.days.map((day, index) => `<article class="day"><div class="day-head"><h3>${escapeHtml(day.title || `Day ${index + 1}`)}</h3><span>${escapeHtml(day.date || '')}</span></div><p>${escapeHtml(day.summary)}</p>${dayDetails(day)}</article>`).join('')}
    </section>

    ${section('Customer requests', requestItems.length ? `<ul class="requests">${requestItems.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '<p>No additional requests were supplied.</p>')}
    ${section('Accommodation summary', `<div class="grid">${field('Preferred category', [tour.hotelType, tour.roomCategory].filter(Boolean).join(' · ') || 'To be advised')}${field('Room preferences', roomSummary)}${field('Meal plan', tour.mealPlan || 'To be advised')}${field('Suggested catalogue stays', hotelMatches.map((item) => item.title).join(', ') || 'To be selected after availability review')}</div>`)}
    ${section('Transport summary', `<div class="grid">${field('Vehicle type', tour.transportPreference || 'Private vehicle')}${field('Chauffeur required', tour.chauffeurRequired ? 'Yes' : 'No')}${field('Train segments', tour.activities.some((item) => item.toLowerCase().includes('train')) ? 'Requested' : 'To be reviewed')}${field('Domestic flights', 'If required after route review')}</div>`)}
    <section class="section summary"><div class="section-title"><h2>Tour summary</h2></div><div class="grid three">${field('Total days', String(days))}${field('Total nights', String(nights))}${field('Destinations', String(tour.selectedLocations.length))}${field('Experiences', String(tour.activities.length))}${field('Travel style', tour.travelStyle || titleCase(tour.travelerKind))}${field('Accommodation', tour.hotelType || 'To be advised')}${field('Transport', tour.transportPreference || 'Private vehicle')}</div></section>
    <p class="notice">This document records the customer’s submitted preferences for consultant review. It is not a booking confirmation, availability confirmation, or final quotation. Supplier rates and internal operational notes are intentionally excluded.</p>
  </body></html>`;
}

function section(title: string, content: string) {
  return `<section class="section"><div class="section-title"><h2>${title}</h2></div>${content}</section>`;
}

function field(label: string, value: string) {
  return `<div class="field"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function coverItem(label: string, value: string) {
  return `<div><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function dayDetails(day: TourSubmissionSnapshot['itinerary']['days'][number]) {
  const entries = [
    ['Destination', day.destination], ['Morning', day.morning], ['Afternoon', day.afternoon], ['Evening', day.evening],
    ['Overnight', day.overnightHotel], ['Driving time', day.drivingTime], ['Distance', day.distance], ['Meals', day.meals], ['Notes', day.notes],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));
  if (!entries.length) return '';
  return `<div class="day-details">${entries.map(([label, value]) => `<div><b>${label}:</b> ${escapeHtml(value)}</div>`).join('')}</div>`;
}

function flight(number: string, time: string) {
  return [number, time].filter(Boolean).join(' · ') || 'Not provided';
}

function calculateNights(arrival: string, departure: string, fallback: number) {
  const difference = Math.round((new Date(`${departure}T00:00:00Z`).getTime() - new Date(`${arrival}T00:00:00Z`).getTime()) / 86_400_000);
  return Number.isFinite(difference) && difference > 0 ? difference : Math.max(1, fallback - 1);
}

function formatDate(value: string) {
  const date = new Date(value.length === 10 ? `${value}T00:00:00Z` : value);
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}

function titleCase(value: string) {
  return value.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value: string) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] || character);
}

async function imageDataUri(path: string, mimeType: string) {
  const buffer = await readFile(path);
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

async function resolveBrowserExecutablePath(puppeteer: { executablePath: () => Promise<string> | string }) {
  const configuredPath = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (configuredPath && existsSync(configuredPath)) return configuredPath;

  try {
    const bundledPath = await puppeteer.executablePath();
    if (existsSync(bundledPath)) return bundledPath;
  } catch {
    // Fall through to common system browser locations.
  }

  const systemCandidates = process.platform === 'darwin'
    ? [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
        '/Applications/Chromium.app/Contents/MacOS/Chromium',
      ]
    : [
        '/usr/bin/google-chrome',
        '/usr/bin/chromium',
        '/usr/bin/chromium-browser',
        '/snap/bin/chromium',
      ];

  const systemPath = systemCandidates.find((candidate) => existsSync(candidate));
  if (systemPath) return systemPath;

  throw new Error(
    'No Chrome/Chromium executable was found for PDF generation. Set PUPPETEER_EXECUTABLE_PATH or install a Puppeteer-managed browser with `npx puppeteer browsers install chrome`.'
  );
}
