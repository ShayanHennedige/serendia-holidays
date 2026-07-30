import { callClaude, extractJson, isClaudeConfigured } from '../../../lib/claude';
import { catalogSummaryForPrompt, findCatalogItem, type CatalogItem } from '../../../lib/catalog';
import { logAiInteraction } from '../../../lib/log';
import { localSearch } from '../../../lib/local-ai';

interface SearchRequestBody {
  query?: string;
  language?: string;
}

interface SearchAiResponse {
  results: { slug: string; reason: string }[];
}

const SYSTEM_PROMPT = `You match a traveler's free-text search query to Serendia Holidays' catalogue below.
Respond with ONLY valid JSON: { "results": [{ "slug": string, "reason": string }] }, ranked most relevant first, maximum 6 results.
Only use "slug" values that appear in the catalogue - never invent one.

Catalogue:
${catalogSummaryForPrompt()}`;

export async function POST(request: Request) {
  let body: SearchRequestBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const query = (body.query || '').trim();
  if (!query) {
    return Response.json({ error: 'Please enter a search query.' }, { status: 400 });
  }

  if (!isClaudeConfigured()) {
    const results = localSearch(query, 6, body.language).map(({ score: _score, ...result }) => result);
    const record = logAiInteraction('search', { query, results, mode: 'catalogue-assist' });
    return Response.json({ results, meta: { mode: 'catalogue-assist', interactionId: record.id } });
  }

  try {
    const raw = await callClaude({
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `${query}\nReturn reasons in language: ${body.language || 'en'}.` }],
      maxTokens: 600,
    });

    const parsed = extractJson<SearchAiResponse>(raw);
    const results = (parsed.results || [])
      .map((entry) => {
        const item = findCatalogItem(entry.slug);
        return item ? { ...item, reason: entry.reason } : null;
      })
      .filter((entry): entry is CatalogItem & { reason: string } => entry !== null);

    const record = logAiInteraction('search', { query, results, mode: 'llm' });

    return Response.json({ results, meta: { mode: 'llm', interactionId: record.id } });
  } catch {
    const results = localSearch(query, 6, body.language).map(({ score: _score, ...result }) => result);
    const record = logAiInteraction('search', { query, results, mode: 'catalogue-fallback' });
    return Response.json({ results, meta: { mode: 'catalogue-fallback', interactionId: record.id } });
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
