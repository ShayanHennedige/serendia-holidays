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
    const cameFromThisSite = document.referrer && new URL(document.referrer).origin === window.location.origin;
    if (cameFromThisSite && window.history.length > 1) router.back();
    else router.push('/');
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
