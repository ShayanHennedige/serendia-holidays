export class ClaudeConfigError extends Error {}
export class ClaudeRequestError extends Error {}

export interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface CallClaudeOptions {
  system: string;
  messages: ClaudeMessage[];
  maxTokens?: number;
  temperature?: number;
}

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

export function isClaudeConfigured(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

export async function callClaude({ system, messages, maxTokens = 1200, temperature = 0.4 }: CallClaudeOptions): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new ClaudeConfigError('ANTHROPIC_API_KEY is not configured.');
  }

  const model = process.env.CLAUDE_MODEL || 'claude-sonnet-5';
  const sampling = model === 'claude-sonnet-5' ? {} : { temperature };

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': ANTHROPIC_VERSION,
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      ...sampling,
      system,
      messages,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new ClaudeRequestError(`Anthropic API request failed (${response.status}): ${detail.slice(0, 300)}`);
  }

  const data = await response.json();
  const text = data?.content?.[0]?.text;

  if (typeof text !== 'string') {
    throw new ClaudeRequestError('Anthropic API returned an unexpected response shape.');
  }

  return text;
}

// Claude is asked to respond with JSON only, but models occasionally wrap it
// in prose or a code fence. Pull out the first {...} or [...] block.
export function extractJson<T>(raw: string): T {
  const trimmed = raw.trim();
  try {
    return JSON.parse(trimmed) as T;
  } catch {
    const match = trimmed.match(/[[{][\s\S]*[\]}]/);
    if (!match) {
      throw new ClaudeRequestError('Could not find JSON in the AI response.');
    }
    return JSON.parse(match[0]) as T;
  }
}
