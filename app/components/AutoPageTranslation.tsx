'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';

const CACHE_KEY_PREFIX = 'serendia-page-translation:';
const EXCLUDED_PATHS = ['/', '/customize'];
const EXCLUDED_PREFIXES = ['/tour-packages'];

type TranslationCache = Record<string, string>;
type TranslationTarget = (translation: string) => void;

const TRANSLATABLE_ATTRIBUTES = ['placeholder', 'title', 'aria-label'] as const;

function isTranslationExcluded(pathname: string) {
  return EXCLUDED_PATHS.includes(pathname) || EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function decodeHtml(value: string) {
  const element = document.createElement('textarea');
  element.innerHTML = value;
  return element.value;
}

function getTranslationCache(locale: string) {
  try {
    const saved = sessionStorage.getItem(`${CACHE_KEY_PREFIX}${locale}`);
    return saved ? JSON.parse(saved) as TranslationCache : {};
  } catch {
    return {};
  }
}

function saveTranslationCache(locale: string, cache: TranslationCache) {
  try {
    const entries = Object.entries(cache).slice(-2_000);
    sessionStorage.setItem(`${CACHE_KEY_PREFIX}${locale}`, JSON.stringify(Object.fromEntries(entries)));
  } catch {
    // Translation still works when browser storage is unavailable.
  }
}

function canTranslateText(node: Text) {
  const parent = node.parentElement;
  if (!parent || !node.nodeValue?.trim()) return false;

  return !parent.closest('script, style, noscript, textarea, select, option, [contenteditable="true"], [data-auto-translate-skip]');
}

function canTranslateElement(element: Element) {
  return !element.closest('script, style, noscript, [data-auto-translate-skip]');
}

export default function AutoPageTranslation() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const originals = useRef(new WeakMap<Text, string>());
  const originalAttributes = useRef(new WeakMap<Element, Map<string, string>>());
  const translating = useRef(false);
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    if (isTranslationExcluded(pathname)) return;

    const main = document.querySelector('main');
    if (!main) return;

    let cancelled = false;
    let debounceTimer: ReturnType<typeof setTimeout> | undefined;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const collectTextNodes = () => {
      const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let current = walker.nextNode();

      while (current) {
        const node = current as Text;
        if (canTranslateText(node)) nodes.push(node);
        current = walker.nextNode();
      }

      return nodes;
    };

    const restoreEnglish = () => {
      translating.current = true;
      for (const node of collectTextNodes()) {
        const original = originals.current.get(node);
        if (original !== undefined) node.nodeValue = original;
      }
      for (const element of main.querySelectorAll<HTMLElement>('[placeholder], [title], [aria-label]')) {
        const attributes = originalAttributes.current.get(element);
        attributes?.forEach((original, attribute) => element.setAttribute(attribute, original));
      }
      translating.current = false;
    };

    const translate = async () => {
      if (cancelled) return;
      if (locale === 'en') {
        restoreEnglish();
        setIsUnavailable(false);
        return;
      }

      const targetsByText = new Map<string, TranslationTarget[]>();
      for (const node of collectTextNodes()) {
        const original = originals.current.get(node) ?? node.nodeValue ?? '';
        originals.current.set(node, original);
        const targets = targetsByText.get(original) ?? [];
        targets.push((translation) => { node.nodeValue = translation; });
        targetsByText.set(original, targets);
      }

      for (const element of main.querySelectorAll<HTMLElement>('[placeholder], [title], [aria-label]')) {
        if (!canTranslateElement(element)) continue;

        const originalsForElement = originalAttributes.current.get(element) ?? new Map<string, string>();
        originalAttributes.current.set(element, originalsForElement);
        for (const attribute of TRANSLATABLE_ATTRIBUTES) {
          const current = element.getAttribute(attribute);
          if (!current?.trim()) continue;
          const original = originalsForElement.get(attribute) ?? current;
          originalsForElement.set(attribute, original);
          const targets = targetsByText.get(original) ?? [];
          targets.push((translation) => element.setAttribute(attribute, translation));
          targetsByText.set(original, targets);
        }
      }

      const cache = getTranslationCache(locale);
      const missing = [...targetsByText.keys()].filter((text) => !cache[text]);

      try {
        for (let index = 0; index < missing.length; index += 128) {
          const texts = missing.slice(index, index + 128);
          const response = await fetch('/api/translations', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ texts, target: locale }),
          });
          if (!response.ok) {
            setIsUnavailable(true);
            retryTranslation();
            return;
          }

          const result = await response.json() as { translations?: unknown };
          if (!Array.isArray(result.translations) || result.translations.length !== texts.length) {
            setIsUnavailable(true);
            retryTranslation();
            return;
          }
          texts.forEach((text, translation) => {
            if (typeof result.translations?.[translation] === 'string') {
              cache[text] = decodeHtml(result.translations[translation]);
            }
          });
        }
        saveTranslationCache(locale, cache);
        setIsUnavailable(false);
      } catch {
        setIsUnavailable(true);
        retryTranslation();
        return;
      }

      if (cancelled) return;
      translating.current = true;
      for (const [text, targets] of targetsByText) {
        const translated = cache[text];
        if (translated) targets.forEach((apply) => apply(translated));
      }
      translating.current = false;
    };

    const retryTranslation = () => {
      if (retryTimer) return;
      retryTimer = setTimeout(() => {
        retryTimer = undefined;
        void translate();
      }, 3_000);
    };

    const scheduleTranslation = () => {
      if (translating.current || debounceTimer) return;
      debounceTimer = setTimeout(() => {
        debounceTimer = undefined;
        void translate();
      }, 80);
    };

    const observer = new MutationObserver(() => scheduleTranslation());
    observer.observe(main, { childList: true, subtree: true });
    scheduleTranslation();

    return () => {
      cancelled = true;
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [locale, pathname]);

  if (!isUnavailable || locale === 'en' || isTranslationExcluded(pathname)) return null;

  return (
    <p className="translation-service-notice" role="status">
      Translation is temporarily unavailable. Please try again shortly.
    </p>
  );
}
