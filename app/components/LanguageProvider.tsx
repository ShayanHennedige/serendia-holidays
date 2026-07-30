'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { dictionaries, supportedLocales, type Dictionary, type Locale } from '../lib/i18n';

interface LanguageContextValue { locale: Locale; setLocale: (locale: Locale) => void; dictionary: Dictionary; }
const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  useEffect(() => {
    const stored = localStorage.getItem('serendia-locale');
    const browser = navigator.language.slice(0, 2);
    const next = supportedLocales.includes(stored as Locale) ? stored as Locale : supportedLocales.includes(browser as Locale) ? browser as Locale : 'en';
    const timer = window.setTimeout(() => {
      setLocaleState(next);
      document.documentElement.lang = next;
    }, 0);
    return () => window.clearTimeout(timer);
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
