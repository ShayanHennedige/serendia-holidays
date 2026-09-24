'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from './LanguageProvider';
import { homeDictionaries } from '../lib/homeI18n';

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useLanguage();

  if (pathname === '/') return null;

  const goBack = () => {
    // `document.referrer` is not updated for client-side navigation, so it
    // cannot reliably tell us where a visitor came from. The browser history
    // is the source of truth for returning to the page they just viewed.
    if (window.history.length > 1) {
      router.back();
      return;
    }

    // A direct visit has no in-site page to return to.
    router.push('/');
  };

  return (
    <div className="site-back-navigation">
      <button type="button" onClick={goBack} aria-label={homeDictionaries[locale].utilities.back}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span>{homeDictionaries[locale].utilities.back}</span>
      </button>
    </div>
  );
}
