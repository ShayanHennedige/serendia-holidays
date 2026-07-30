import type { Locale } from '../../lib/i18n';

const countryLocaleMap: Partial<Record<string, Locale>> = {
  GB: 'en', IE: 'en', US: 'en', CA: 'en', AU: 'en', NZ: 'en', ZA: 'en', SG: 'en',
  FR: 'fr', BE: 'fr', CH: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr',
  DE: 'de', AT: 'de', LI: 'de',
  IT: 'it', SM: 'it', VA: 'it',
  ES: 'es', MX: 'es', AR: 'es', BO: 'es', CL: 'es', CO: 'es', CR: 'es', CU: 'es',
  DO: 'es', EC: 'es', GT: 'es', HN: 'es', NI: 'es', PA: 'es', PE: 'es', PR: 'es',
  PY: 'es', SV: 'es', UY: 'es', VE: 'es',
  LT: 'lt',
};

const countryHeaders = [
  'x-vercel-ip-country',
  'cf-ipcountry',
  'cloudfront-viewer-country',
  'x-country-code',
] as const;

function getCountryCode(request: Request) {
  for (const header of countryHeaders) {
    const value = request.headers.get(header)?.trim().toUpperCase();
    if (value && /^[A-Z]{2}$/.test(value)) return value;
  }
  return null;
}

export async function GET(request: Request) {
  const countryCode = getCountryCode(request);
  const locale = countryCode ? countryLocaleMap[countryCode] ?? null : null;

  return Response.json(
    { countryCode, locale },
    {
      headers: {
        'Cache-Control': 'private, no-store, max-age=0',
        Vary: countryHeaders.join(', '),
      },
    },
  );
}
