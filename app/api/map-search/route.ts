interface MapboxFeature {
  id?: string;
  geometry?: { coordinates?: number[] };
  properties?: {
    mapbox_id?: string;
    name?: string;
    name_preferred?: string;
    full_address?: string;
    place_formatted?: string;
  };
}

interface MapboxResponse {
  features?: MapboxFeature[];
  message?: string;
}

const fallbackPublicToken = 'pk.eyJ1IjoidGhhcnVrYWdhbWFnZTAxIiwiYSI6ImNtcGdqOWtmcDBhZDEyc3M4OWxtZ2t4OTkifQ.GPu5Lt5ax9FmIQTfkfKj2w';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const query = requestUrl.searchParams.get('q')?.trim();
  const longitude = Number(requestUrl.searchParams.get('longitude'));
  const latitude = Number(requestUrl.searchParams.get('latitude'));
  const token = process.env.MAPBOX_ACCESS_TOKEN || fallbackPublicToken;

  let endpoint: URL;
  if (query) {
    endpoint = new URL('https://api.mapbox.com/search/geocode/v6/forward');
    endpoint.searchParams.set('q', query.slice(0, 256));
    endpoint.searchParams.set('country', 'lk,mv');
    endpoint.searchParams.set('limit', '5');
    endpoint.searchParams.set('types', 'place,locality,neighborhood,address');
  } else if (Number.isFinite(longitude) && Number.isFinite(latitude)) {
    endpoint = new URL('https://api.mapbox.com/search/geocode/v6/reverse');
    endpoint.searchParams.set('longitude', String(longitude));
    endpoint.searchParams.set('latitude', String(latitude));
    endpoint.searchParams.set('country', 'lk,mv');
    endpoint.searchParams.set('limit', '1');
  } else {
    return Response.json({ error: 'Enter a place name or valid coordinates.' }, { status: 400 });
  }

  endpoint.searchParams.set('permanent', 'true');
  endpoint.searchParams.set('access_token', token);

  try {
    const response = await fetch(endpoint, { cache: 'no-store' });
    const data = await response.json() as MapboxResponse;
    if (!response.ok) return Response.json({ error: data.message || 'Location search failed.' }, { status: response.status });
    const results = (data.features || []).map(normalizeFeature).filter((result) => result !== null);
    if (query) return Response.json({ results });
    return Response.json({ result: results[0] || null });
  } catch {
    return Response.json({ error: 'Location search is temporarily unavailable.' }, { status: 502 });
  }
}

function normalizeFeature(feature: MapboxFeature) {
  const coordinates = feature.geometry?.coordinates;
  if (!coordinates || coordinates.length < 2) return null;
  const name = feature.properties?.name_preferred || feature.properties?.name || feature.properties?.full_address;
  const context = feature.properties?.place_formatted;
  const label = [name, context].filter(Boolean).join(', ');
  if (!label) return null;
  return {
    id: feature.properties?.mapbox_id || feature.id || `search-${coordinates[1]}-${coordinates[0]}`,
    label,
    coordinates: [coordinates[0], coordinates[1]] as [number, number],
  };
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
