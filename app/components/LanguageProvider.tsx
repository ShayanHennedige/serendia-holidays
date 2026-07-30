'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { dictionaries, supportedLocales, type Dictionary, type Locale } from '../lib/i18n';

interface LanguageContextValue { locale: Locale; setLocale: (locale: Locale) => void; dictionary: Dictionary; }
const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem('serendia-locale');
    const storedLocale = supportedLocales.includes(stored as Locale) ? stored as Locale : null;
    const browserCode = navigator.language.slice(0, 2).toLowerCase();
    const browserLocale = supportedLocales.includes(browserCode as Locale) ? browserCode as Locale : 'en';
    const controller = new AbortController();
    let cancelled = false;

    const applyLocale = (next: Locale) => {
      if (cancelled) return;
      setLocaleState(next);
      document.documentElement.lang = next;
    };

    if (storedLocale) {
      applyLocale(storedLocale);
    } else {
      fetch('/api/locale', { cache: 'no-store', signal: controller.signal })
        .then((response) => response.ok ? response.json() as Promise<{ locale: Locale | null }> : null)
        .then((result) => {
          const detected = result?.locale;
          applyLocale(detected && supportedLocales.includes(detected) ? detected : browserLocale);
        })
        .catch((error: unknown) => {
          if (error instanceof DOMException && error.name === 'AbortError') return;
          applyLocale(browserLocale);
        });
    }

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const setLocale = (next: Locale) => { setLocaleState(next); localStorage.setItem('serendia-locale', next); document.documentElement.lang = next; };
  const value = useMemo(() => ({ locale, setLocale, dictionary: dictionaries[locale] }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used within LanguageProvider');
  return value;
}
