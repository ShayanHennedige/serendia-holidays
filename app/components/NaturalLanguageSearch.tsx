'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import type { CatalogItem } from '../lib/catalog';
import { useLanguage } from './LanguageProvider';

interface SearchResult extends CatalogItem {
  reason: string;
}

interface NaturalLanguageSearchProps {
  open: boolean;
  onClose: () => void;
}

export default function NaturalLanguageSearch({ open, onClose }: NaturalLanguageSearchProps) {
  const { locale, dictionary: { search } } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<string | null>(null);

  if (!open) {
    return null;
  }

  const runSearch = async (event: FormEvent) => {
    event.preventDefault();
    if (!query.trim() || loading) {
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch('/api/ai/search', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ query, language: locale }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Search is temporarily unavailable.');
        return;
      }

      setResults(data.results);
      setMode(data.meta?.mode || 'intelligent-search');
    } catch {
      setError('Search is temporarily unavailable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nl-search-overlay" role="dialog" aria-label="Search Serendia Holidays">
      <div className="nl-search-panel">
        <div className="nl-search-header">
          <div><span className="nl-search-kicker">{search.kicker}</span><h2>{search.title}</h2></div>
          <button type="button" onClick={onClose} aria-label="Close search">×</button>
        </div>
        <form className="nl-search-form" onSubmit={runSearch}>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={search.placeholder}
          />
          <button type="submit" disabled={loading}>{loading ? search.searching : search.button}</button>
        </form>
        {mode && results && <p className="nl-search-mode"><i /> {mode.replaceAll('-', ' ')} · {search.grounded}</p>}

        {error && <p className="nl-search-error">{error} You can also browse <Link href="/tours" onClick={onClose}>Tours</Link>.</p>}

        {results && results.length === 0 && !error && (
          <p className="nl-search-empty">No close matches yet - try describing the trip differently, or browse <Link href="/tours" onClick={onClose}>Tours</Link>.</p>
        )}

        {results && results.length > 0 && (
          <ul className="nl-search-results">
            {results.map((result) => (
              <li key={result.slug}>
                <Link href={result.href} onClick={onClose} className="nl-search-result">
                  <span className="nl-search-result-type">{result.type}</span>
                  <strong>{result.title}</strong>
                  <span className="nl-search-result-reason">{result.reason}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
