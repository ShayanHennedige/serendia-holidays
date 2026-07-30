'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { catalog, findCatalogItem, relatedCatalogItems, type CatalogItem } from '../lib/catalog';

interface RecommendedGridProps {
  currentSlug: string;
  heading?: string;
}

export default function RecommendedGrid({ currentSlug, heading = 'You may also like' }: RecommendedGridProps) {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('serendia-browsing') || '[]') as string[];
    const next = [currentSlug, ...stored.filter((slug) => slug !== currentSlug)].slice(0, 12);
    localStorage.setItem('serendia-browsing', JSON.stringify(next));
    const update = window.setTimeout(() => setHistory(next), 0);
    return () => window.clearTimeout(update);
  }, [currentSlug]);

  const items = useMemo(() => {
    if (history.length < 2) return relatedCatalogItems(currentSlug);
    const affinityTags = history.flatMap((slug) => findCatalogItem(slug)?.tags || []);
    return catalog
      .filter((item) => item.slug !== currentSlug && !history.slice(0, 2).includes(item.slug))
      .map((item) => ({ item, score: item.tags.filter((tag) => affinityTags.includes(tag)).length }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ item }) => item) as CatalogItem[];
  }, [currentSlug, history]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="recommended-grid-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Selected from your interests</p>
          <h2 className="section-title">{history.length > 1 ? 'Picked for your journey' : heading}</h2>
        </div>
        <div className="recommended-grid">
          {items.map((item) => (
            <Link key={item.slug} href={item.href} className="recommended-card">
              <span className="recommended-card-type">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
