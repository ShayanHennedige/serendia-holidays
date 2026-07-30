import { callClaude, extractJson, isClaudeConfigured } from '../../../lib/claude';
import { localContentDraft } from '../../../lib/local-ai';
import { logAiInteraction } from '../../../lib/log';

interface ContentRequest {
  title?: string;
  tone?: string;
  language?: string;
  notes?: string;
}

const SYSTEM_PROMPT = `You assist Serendia Holidays staff with travel content. Return only JSON with title, excerpt, body, metaDescription, language, tone and status. Status must always be "draft". Never invent prices, awards, availability or factual claims. Content requires human review before publishing.`;

export async function POST(request: Request) {
  let body: ContentRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!body.title?.trim() && !body.notes?.trim()) {
    return Response.json({ error: 'Add a working title or content notes.' }, { status: 400 });
  }

  let draft = localContentDraft(body);
  let mode = 'catalogue-assist';
  if (isClaudeConfigured()) {
    try {
      const raw = await callClaude({
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: JSON.stringify(body) }],
        maxTokens: 1200,
      });
      draft = { ...extractJson<typeof draft>(raw), status: 'draft' };
      mode = 'llm';
    } catch {
      mode = 'catalogue-fallback';
    }
  }

  const record = logAiInteraction('content-draft', { request: body, draft, mode }, 'pending-review');
  return Response.json({ ...draft, meta: { mode, interactionId: record.id, reviewStatus: 'pending' } });
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
