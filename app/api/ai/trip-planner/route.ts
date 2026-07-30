import { callClaude, extractJson, isClaudeConfigured } from '../../../lib/claude';
import { catalogSummaryForPrompt, findCatalogItem, type CatalogItem } from '../../../lib/catalog';
import { logAiInteraction } from '../../../lib/log';
import { localItinerary } from '../../../lib/local-ai';

interface TripPlannerRequestBody {
  travelerKind?: string;
  planningMode?: string;
  adults?: number;
  children?: number;
  arrivalDate?: string;
  departureDate?: string;
  selectedLocation?: string;
  selectedLocations?: string[];
  hotelType?: string;
  roomCategory?: string;
  mealPlan?: string;
  activities?: string[];
  specialRequests?: string;
  budget?: string;
  travelStyle?: string;
  travelPace?: string;
  transportPreference?: string;
  dietaryRequirements?: string;
  accessibilityRequirements?: string;
  language?: string;
}

interface TripPlannerAiResponse {
  days: {
    title: string;
    summary: string;
    date?: string;
    destination?: string;
    morning?: string;
    afternoon?: string;
    evening?: string;
    overnightHotel?: string;
    drivingTime?: string;
    distance?: string;
    meals?: string;
    notes?: string;
  }[];
  matchedCatalog: { slug: string; why: string }[];
  draftQuote: { label: string; note: string }[];
}

const SYSTEM_PROMPT = `You are the AI trip-planning assistant for Serendia Holidays, a Sri Lankan destination management company.
Draft a suggested itinerary for the traveler using ONLY the catalogue items listed below - never invent tours, hotels or prices that are not in this list.
All pricing is "on request" - never state a specific price or currency amount.
Respond with ONLY valid JSON, no prose, no markdown fences, matching exactly this shape:
{
  "days": [{ "title": string, "summary": string, "date": string, "destination": string, "morning": string, "afternoon": string, "evening": string, "overnightHotel": string, "drivingTime": string, "distance": string, "meals": string, "notes": string }],
  "matchedCatalog": [{ "slug": string, "why": string }],
  "draftQuote": [{ "label": string, "note": string }]
}
"days" must contain exactly one entry for each selected destination, in the exact route order supplied. Set both "title" and "destination" to that selected destination name. Never add a destination, generic tour day, arrival day or departure day. Keep driving time and distance clearly estimated. Do not claim a specific hotel unless it exists in the catalogue; otherwise use a requested hotel category such as "Boutique hotel to be confirmed".
"matchedCatalog" must only reference "slug" values that appear in the catalogue below.
"draftQuote" should be short line items such as { "label": "Tour", "note": "Best of Sri Lanka Culture, Nature and Wild Life - on request" }, always ending each note with "on request".

Catalogue:
${catalogSummaryForPrompt()}`;

export async function POST(request: Request) {
  let body: TripPlannerRequestBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const userPrompt = buildUserPrompt(body);

  if (!isClaudeConfigured()) {
    const result = localItinerary(body);
    const record = logAiInteraction('trip-planner', { request: body, result, mode: 'catalogue-assist' }, 'pending-review');
    return Response.json({ ...result, meta: { ...result.meta, interactionId: record.id } });
  }

  try {
    const raw = await callClaude({
      system: `${SYSTEM_PROMPT}\nWrite all traveller-facing text in language code: ${body.language || 'en'}.`,
      messages: [{ role: 'user', content: userPrompt }],
      maxTokens: 2600,
    });

    const parsed = extractJson<TripPlannerAiResponse>(raw);
    const groundedMatches = (parsed.matchedCatalog || [])
      .map((match) => {
        const item = findCatalogItem(match.slug);
        return item ? { ...item, why: match.why } : null;
      })
      .filter((entry): entry is CatalogItem & { why: string } => entry !== null);

    const parsedDays = Array.isArray(parsed.days) ? parsed.days : [];
    const selectedLocations = body.selectedLocations?.map((location) => location.trim()).filter(Boolean) || [];
    const days = selectedLocations.length > 0
      ? selectedLocations.map((destination) => {
          const matchingDay = parsedDays.find((day) => day.destination?.trim().toLocaleLowerCase() === destination.toLocaleLowerCase());
          return matchingDay
            ? { ...matchingDay, title: destination, destination }
            : { title: destination, destination, summary: `${destination} is included as selected. Details will be refined by the Serendia team.` };
        })
      : parsedDays;

    const result = {
      days,
      matchedCatalog: groundedMatches,
      draftQuote: Array.isArray(parsed.draftQuote) ? parsed.draftQuote : [],
      meta: { mode: 'llm', reviewStatus: 'draft' as const },
    };

    const record = logAiInteraction('trip-planner', { request: body, result, mode: 'llm' }, 'pending-review');

    return Response.json({ ...result, meta: { ...result.meta, interactionId: record.id } });
  } catch {
    const result = localItinerary(body);
    const record = logAiInteraction('trip-planner', { request: body, result, mode: 'catalogue-fallback' }, 'pending-review');
    return Response.json({ ...result, meta: { ...result.meta, mode: 'catalogue-fallback', interactionId: record.id } });
  }
}

function buildUserPrompt(body: TripPlannerRequestBody): string {
  const lines = [
    `Traveler type: ${body.travelerKind ?? 'unspecified'}`,
    `Planning stage: ${body.planningMode ?? 'unspecified'}`,
    `Travelers: ${body.adults ?? 1} adult(s), ${body.children ?? 0} child(ren)`,
    body.arrivalDate ? `Arrival date: ${body.arrivalDate}` : null,
    body.departureDate ? `Departure date: ${body.departureDate}` : null,
    body.selectedLocations?.length ? `Preferred destinations in route order: ${body.selectedLocations.join(' → ')}` : body.selectedLocation ? `Preferred destinations: ${body.selectedLocation}` : null,
    body.hotelType ? `Preferred hotel type: ${body.hotelType}` : null,
    body.roomCategory ? `Room category: ${body.roomCategory}` : null,
    body.mealPlan ? `Meal plan: ${body.mealPlan}` : null,
    body.activities && body.activities.length ? `Interests/activities: ${body.activities.join(', ')}` : null,
    body.specialRequests ? `Special requests: ${body.specialRequests}` : null,
    body.budget ? `Budget guidance: ${body.budget}` : null,
    body.travelStyle ? `Travel style: ${body.travelStyle}` : null,
    body.travelPace ? `Travel pace: ${body.travelPace}` : null,
    body.transportPreference ? `Transport preference: ${body.transportPreference}` : null,
    body.dietaryRequirements ? `Dietary requirements: ${body.dietaryRequirements}` : null,
    body.accessibilityRequirements ? `Accessibility requirements: ${body.accessibilityRequirements}` : null,
    body.language ? `Response language: ${body.language}` : null,
  ].filter(Boolean);

  return lines.join('\n');
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
