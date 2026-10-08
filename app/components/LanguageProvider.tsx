'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { dictionaries, type Dictionary, type Locale } from '../lib/i18n';
import { LOCALE_COOKIE, isLocale } from '../lib/localeDetection';

interface LanguageContextValue { locale: Locale; setLocale: (locale: Locale) => void; dictionary: Dictionary; }
const LanguageContext = createContext<LanguageContextValue | null>(null);

function saveLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

// The server picks the language (see i18n/request.ts) and passes it in as initialLocale,
// so the first paint is already in the visitor's language.
export default function LanguageProvider({ initialLocale, children }: { initialLocale: Locale; children: ReactNode }) {
  const router = useRouter();
  const [chosenLocale, setChosenLocale] = useState<Locale | null>(null);
  const locale = chosenLocale ?? initialLocale;

  useEffect(() => {
    // Visitors who picked a language before the cookie existed had it saved in localStorage only.
    try {
      const legacy = localStorage.getItem(LOCALE_COOKIE);
      localStorage.removeItem(LOCALE_COOKIE);
      if (isLocale(legacy) && legacy !== initialLocale && !document.cookie.includes(`${LOCALE_COOKIE}=`)) {
        saveLocaleCookie(legacy);
        router.refresh();
      }
    } catch {
      // Storage can be unavailable; the server-detected language still applies.
    }
  }, [initialLocale, router]);

  const value = useMemo(() => ({
    locale,
    setLocale: (next: Locale) => {
      setChosenLocale(next);
      saveLocaleCookie(next);
      document.documentElement.lang = next;
      router.refresh();
    },
    dictionary: dictionaries[locale],
  }), [locale, router]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used within LanguageProvider');
  return value;
}
