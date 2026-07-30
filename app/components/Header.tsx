'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NaturalLanguageSearch from './NaturalLanguageSearch';
import { useLanguage } from './LanguageProvider';
import { localeLabels, supportedLocales, type Locale } from '../lib/i18n';
import { homeDictionaries } from '../lib/homeI18n';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const { locale, setLocale, dictionary: { nav } } = useLanguage();
  const shared = homeDictionaries[locale].header;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && navRef.current) {
      navRef.current.scrollTop = 0;
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const pathname = usePathname();
  const isPlannerPage = pathname === '/customize';

  if (isPlannerPage) {
    return null;
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Serendia Holidays by Venom — home">
          <span className="logo-brand" aria-hidden="true">
            <Image
              className="logo-mark logo-mark-light"
              src="/white 1logo.png"
              alt=""
              width={300}
              height={187}
              loading="eager"
            />
            <Image
              className="logo-mark logo-mark-dark"
              src="/black logo.png"
              alt=""
              width={300}
              height={187}
              loading="eager"
            />
          </span>
        </Link>

        {!isPlannerPage && (
        <nav ref={navRef} className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>{nav.home}</Link>
            </li>
            <li className="nav-item">
              <Link href="/tours" className={`nav-link ${pathname.startsWith('/tours') ? 'active' : ''}`} onClick={closeMenu}>{nav.tours}</Link>
            </li>
            <li className="nav-item">
              <Link href="/excursions" className={`nav-link ${pathname.startsWith('/excursions') || pathname === '/transportation' || pathname === '/cricket-tourism' ? 'active' : ''}`} onClick={closeMenu}>{nav.excursions} <span className="nav-chevron">⌄</span></Link>
              <div className="nav-dropdown">
                <Link href="/excursions" onClick={closeMenu}>{shared.allExcursions}</Link>
                <Link href="/transportation" onClick={closeMenu}>{nav.transport}</Link>
                <Link href="/cricket-tourism" onClick={closeMenu}>{nav.cricket}</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/sri-lankan-hotels" className={`nav-link ${pathname.startsWith('/sri-lankan-hotels') ? 'active' : ''}`} onClick={closeMenu}>{nav.hotels} <span className="nav-chevron">⌄</span></Link>
              <div className="nav-dropdown">
                <Link href="/sri-lankan-hotels" onClick={closeMenu}>{shared.sriLankanHotels}</Link>
                <a href="https://www.villadevi.com/" target="_blank" rel="noreferrer" onClick={closeMenu}>Devi Tranquil Villa</a>
                <a href="https://secretsofceyloncollection.com/our-collection/" target="_blank" rel="noreferrer" onClick={closeMenu}>Secrets of Ceylon</a>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${pathname === '/about' || pathname === '/gallery' || pathname === '/why-choose-us' || pathname === '/hospitality-consultancy' ? 'active' : ''}`} onClick={closeMenu}>{nav.about} <span className="nav-chevron">⌄</span></Link>
              <div className="nav-dropdown">
                <Link href="/about" onClick={closeMenu}>{nav.aboutUs}</Link>
                <Link href="/why-choose-us" onClick={closeMenu}>{nav.why}</Link>
                <Link href="/gallery" onClick={closeMenu}>{nav.gallery}</Link>
                <Link href="/hospitality-consultancy" onClick={closeMenu}>{nav.consultancy}</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>{nav.contact}</Link>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              type="button"
              className="nav-search"
              aria-label={shared.search}
              onClick={() => {
                setSearchOpen(true);
                closeMenu();
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <label className="language-switcher" aria-label={shared.language}>
              <span>{locale.toUpperCase()}</span>
              <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)}>
                {supportedLocales.map((option) => <option key={option} value={option}>{localeLabels[option]}</option>)}
              </select>
            </label>
            <Link href="/customize" className={`nav-plan-cta ${pathname === '/customize' ? 'active' : ''}`} onClick={closeMenu}>
              {nav.plan}<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
        )}

        {!isPlannerPage && (
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label={shared.menu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        )}
      </div>
      <NaturalLanguageSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
