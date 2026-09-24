import { supportedLocales, type Locale } from '../../lib/i18n';

const MAX_TEXTS_PER_REQUEST = 32;
const MAX_CHARACTERS_PER_TEXT = 5_000;
const MAX_TOTAL_CHARACTERS = 12_000;
const TRANSLATION_TIMEOUT_MS = 45_000;

interface TranslationRequest {
  texts?: unknown;
  target?: unknown;
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');

  if (!origin || !host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return Response.json({ error: 'This request is not allowed.' }, { status: 403 });
  }

  let body: TranslationRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const target = typeof body.target === 'string' ? body.target : '';
  const texts = Array.isArray(body.texts)
    ? body.texts.filter((text): text is string => typeof text === 'string' && text.trim().length > 0)
    : [];
  const totalCharacters = texts.reduce((total, text) => total + text.length, 0);

  if (!supportedLocales.includes(target as Locale) || target === 'en') {
    return Response.json({ error: 'Choose a supported translation language.' }, { status: 400 });
  }

  if (
    texts.length === 0
    || texts.length > MAX_TEXTS_PER_REQUEST
    || texts.some((text) => text.length > MAX_CHARACTERS_PER_TEXT)
    || totalCharacters > MAX_TOTAL_CHARACTERS
  ) {
    return Response.json({ error: 'Translation request is too large.' }, { status: 400 });
  }

  const endpoint = `${(process.env.LIBRETRANSLATE_URL || 'http://127.0.0.1:5100').replace(/\/$/, '')}/translate`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ q: texts, source: 'en', target, format: 'text' }),
      cache: 'no-store',
      signal: AbortSignal.timeout(TRANSLATION_TIMEOUT_MS),
    });

    if (!response.ok) {
      return Response.json({ error: 'Translation service is unavailable.' }, { status: 502 });
    }

    const result = await response.json() as { translatedText?: unknown };
    const translatedText = result.translatedText;
    const translations = Array.isArray(translatedText)
      ? translatedText.filter((item): item is string => typeof item === 'string')
      : typeof translatedText === 'string' ? [translatedText] : [];

    if (translations.length !== texts.length) {
      return Response.json({ error: 'Translation service returned an incomplete result.' }, { status: 502 });
    }

    return Response.json(
      { translations },
      { headers: { 'Cache-Control': 'private, max-age=86400' } },
    );
  } catch {
    return Response.json({ error: 'Translation service is unavailable.' }, { status: 502 });
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
