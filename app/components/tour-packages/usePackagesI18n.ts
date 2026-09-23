'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import {
  loadPackagesContent,
  packagesDictionaries,
  type ContentDictionary,
  type PackagesCopy,
} from '../../lib/tourPackagesI18n';
import type { Locale } from '../../lib/i18n';

const EMPTY: ContentDictionary = {};

/**
 * Chrome copy for the active locale plus its itinerary-prose dictionary.
 *
 * The prose is code-split, so it arrives a tick after the locale changes; until then
 * every lookup falls back to the English source. English has no dictionary at all, so
 * it never waits. The loaded dictionary is stored with the locale it belongs to, so a
 * stale one is never shown after a switch.
 */
export function usePackagesI18n(): {
  locale: Locale;
  copy: PackagesCopy;
  content: ContentDictionary;
} {
  const { locale } = useLanguage();
  const [loaded, setLoaded] = useState<{ locale: Locale; content: ContentDictionary } | null>(null);

  useEffect(() => {
    if (locale === 'en') return;
    let active = true;
    loadPackagesContent(locale).then((content) => {
      if (active) setLoaded({ locale, content });
    });
    return () => {
      active = false;
    };
  }, [locale]);

  return {
    locale,
    copy: packagesDictionaries[locale],
    content: loaded?.locale === locale ? loaded.content : EMPTY,
  };
}
