import { supportedLocales, type Locale } from './i18n';

// Set when a visitor picks a language in the header selector; always wins over detection.
export const LOCALE_COOKIE = 'serendia-locale';

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

// Country headers added by the hosting edge (Vercel in production).
const countryHeaders = [
  'x-vercel-ip-country',
  'cf-ipcountry',
  'cloudfront-viewer-country',
  'x-country-code',
] as const;

export function isLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

function localeFromCountry(headers: Headers): Locale | null {
  for (const header of countryHeaders) {
    const value = headers.get(header)?.trim().toUpperCase();
    if (value && /^[A-Z]{2}$/.test(value)) return countryLocaleMap[value] ?? null;
  }
  return null;
}

function localeFromAcceptLanguage(headers: Headers): Locale | null {
  const accepted = headers.get('accept-language');
  if (!accepted) return null;

  const ranked = accepted
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const quality = params.find((param) => param.trim().startsWith('q='));
      return { code: tag.slice(0, 2).toLowerCase(), q: quality ? Number(quality.trim().slice(2)) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q);

  return ranked.find(({ code }) => isLocale(code))?.code as Locale | undefined ?? null;
}

// Saved choice → visitor's IP country → browser language → English.
export function resolveLocale(cookieValue: string | undefined, headers: Headers): Locale {
  if (isLocale(cookieValue)) return cookieValue;
  return localeFromCountry(headers) ?? localeFromAcceptLanguage(headers) ?? 'en';
}
