import { callClaude, isClaudeConfigured, type ClaudeMessage } from '../../../lib/claude';
import { catalogSummaryForPrompt } from '../../../lib/catalog';
import { companyFacts } from '../../../lib/companyFacts';
import { logAiInteraction } from '../../../lib/log';
import { localChatReply } from '../../../lib/local-ai';

interface ChatRequestBody {
  messages?: ClaudeMessage[];
  language?: string;
}

const SYSTEM_PROMPT = `You are the 24/7 first-line AI chat concierge for Serendia Holidays (Venom Holidays (Pvt) Ltd.), a Sri Lankan destination management company based in Pannipitiya, Sri Lanka.

Why travelers choose Serendia Holidays:
${companyFacts.map((fact) => `- ${fact.label}: ${fact.detail}`).join('\n')}

What we offer:
${catalogSummaryForPrompt()}

Rules:
- Be warm, concise and helpful. Answer questions about the destinations, tours, hotels, transport, cricket tourism and hospitality consultancy above.
- Never state a specific price - all pricing is "on request".
- Never confirm a booking, availability, or payment. For anything requiring a real commitment (booking confirmation, payment, complex/custom requests), say you'll hand this off to the Serendia Holidays team and point them to the Contact page or +94 77 398 6504.
- If you don't know something, say so rather than inventing details.`;

export async function POST(request: Request) {
  let body: ChatRequestBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
  if (messages.length === 0) {
    return Response.json({ error: 'No messages provided.' }, { status: 400 });
  }

  const lastMessage = messages.filter((message) => message.role === 'user').at(-1)?.content || '';
  if (!isClaudeConfigured()) {
    const result = localChatReply(lastMessage, body.language);
    const record = logAiInteraction('chat', { messages, ...result, mode: 'catalogue-assist' }, result.handoff ? 'pending-review' : 'logged');
    return Response.json({ ...result, meta: { mode: 'catalogue-assist', interactionId: record.id } });
  }

  try {
    const reply = await callClaude({
      system: `${SYSTEM_PROMPT}\nReply in language code: ${body.language || 'en'}.`,
      messages,
      maxTokens: 500,
      temperature: 0.5,
    });

    const handoff = /hand.?off|contact page|77 346 9998/i.test(reply);
    const record = logAiInteraction('chat', { messages, reply, handoff, mode: 'llm' }, handoff ? 'pending-review' : 'logged');

    return Response.json({ reply, handoff, suggestions: ['Plan my itinerary', 'Explore tours', 'Talk to a specialist'], meta: { mode: 'llm', interactionId: record.id } });
  } catch {
    const result = localChatReply(lastMessage, body.language);
    const record = logAiInteraction('chat', { messages, ...result, mode: 'catalogue-fallback' }, result.handoff ? 'pending-review' : 'logged');
    return Response.json({ ...result, meta: { mode: 'catalogue-fallback', interactionId: record.id } });
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
