'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { GalleryCollection, GalleryImage } from '../lib/googleDriveGallery';

type GalleryBrowserProps = {
  collections: GalleryCollection[];
};

export default function GalleryBrowser({ collections }: GalleryBrowserProps) {
  const router = useRouter();
  const t = useTranslations('Gallery');
  // Drive folders are named after the guests; only the built-in fallback collection needs translating.
  const titleOf = (collection: GalleryCollection) => collection.id === 'sri-lanka-moments' ? t('fallbackTitle') : collection.title;
  const [activeCollection, setActiveCollection] = useState('all');
  const [selectedImage, setSelectedImage] = useState<(GalleryImage & { collectionTitle: string }) | null>(null);

  const visibleCollections = useMemo(
    () =>
      activeCollection === 'all'
        ? collections
        : collections.filter((collection) => collection.id === activeCollection),
    [activeCollection, collections],
  );

  const visibleImages = visibleCollections.flatMap((collection) =>
    collection.images.map((image) => ({ ...image, collectionTitle: titleOf(collection) })),
  );

  const totalImages = collections.reduce((total, collection) => total + collection.images.length, 0);

  useEffect(() => {
    let lastRefresh = 0;

    const refreshGallery = () => {
      const now = Date.now();
      if (now - lastRefresh < 15_000) return;
      lastRefresh = now;
      router.refresh();
    };

    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') refreshGallery();
    };

    const refreshTimer = window.setInterval(refreshGallery, 60_000);
    window.addEventListener('focus', refreshGallery);
    document.addEventListener('visibilitychange', refreshWhenVisible);

    return () => {
      window.clearInterval(refreshTimer);
      window.removeEventListener('focus', refreshGallery);
      document.removeEventListener('visibilitychange', refreshWhenVisible);
    };
  }, [router]);

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="drive-gallery-toolbar">
        <div className="drive-gallery-summary">
          <p className="drive-gallery-count">
            {t.rich('count', { photos: totalImages, journeys: collections.length, strong: (chunks) => <span>{chunks}</span> })}
          </p>
          <p className="drive-gallery-summary-copy">{t('summary')}</p>
        </div>

        <div className="drive-gallery-filter-panel">
          <p className="drive-gallery-filter-label" id="journey-filter-label">
            {t('filterLabel')}
          </p>
          <div className="drive-gallery-filters" aria-labelledby="journey-filter-label">
            <button
              type="button"
              className={activeCollection === 'all' ? 'active' : ''}
              aria-pressed={activeCollection === 'all'}
              onClick={() => setActiveCollection('all')}
            >
              {t('all')}
            </button>
            {collections.map((collection) => (
              <button
                type="button"
                className={activeCollection === collection.id ? 'active' : ''}
                aria-pressed={activeCollection === collection.id}
                key={collection.id}
                onClick={() => setActiveCollection(collection.id)}
              >
                {titleOf(collection)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="drive-gallery-grid">
        {visibleImages.map((image, index) => (
          <figure className="drive-gallery-card" key={image.id}>
            <button type="button" onClick={() => setSelectedImage(image)} aria-label={t('openLabel', { alt: t('photoAlt', { title: image.collectionTitle, number: image.number }) })}>
              <img
                src={image.src}
                alt={t('photoAlt', { title: image.collectionTitle, number: image.number })}
                loading={index < 6 ? 'eager' : 'lazy'}
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <span className="drive-gallery-card-shade" aria-hidden="true" />
              <span className="drive-gallery-card-meta">
                <small>{image.collectionTitle}</small>
                <span>{t('view')} <b>↗</b></span>
              </span>
            </button>
          </figure>
        ))}
      </div>

      {selectedImage && (
        <div className="drive-gallery-lightbox" role="dialog" aria-modal="true" aria-label={t('viewer')}>
          <button
            type="button"
            className="drive-gallery-lightbox-backdrop"
            onClick={() => setSelectedImage(null)}
            aria-label={t('close')}
          />
          <div className="drive-gallery-lightbox-frame">
            <img src={selectedImage.fullSrc} alt={t('photoAlt', { title: selectedImage.collectionTitle, number: selectedImage.number })} referrerPolicy="no-referrer" />
            <button
              type="button"
              className="drive-gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label={t('close')}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
