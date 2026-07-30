'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { GalleryCollection, GalleryImage } from '../lib/googleDriveGallery';

type GalleryBrowserProps = {
  collections: GalleryCollection[];
};

export default function GalleryBrowser({ collections }: GalleryBrowserProps) {
  const router = useRouter();
  const [activeCollection, setActiveCollection] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const visibleCollections = useMemo(
    () =>
      activeCollection === 'all'
        ? collections
        : collections.filter((collection) => collection.id === activeCollection),
    [activeCollection, collections],
  );

  const visibleImages = visibleCollections.flatMap((collection) =>
    collection.images.map((image) => ({ ...image, collectionTitle: collection.title })),
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
        <p className="drive-gallery-count">
          <span>{totalImages}</span> photographs from {collections.length}{' '}
          {collections.length === 1 ? 'client journey' : 'client journeys'}
        </p>
        <div className="drive-gallery-filters" aria-label="Filter gallery by journey">
          <button
            type="button"
            className={activeCollection === 'all' ? 'active' : ''}
            onClick={() => setActiveCollection('all')}
          >
            All journeys
          </button>
          {collections.map((collection) => (
            <button
              type="button"
              className={activeCollection === collection.id ? 'active' : ''}
              key={collection.id}
              onClick={() => setActiveCollection(collection.id)}
            >
              {collection.title}
            </button>
          ))}
        </div>
      </div>

      <div className="drive-gallery-grid">
        {visibleImages.map((image, index) => (
          <figure className="drive-gallery-card" key={image.id}>
            <button type="button" onClick={() => setSelectedImage(image)} aria-label={`Open ${image.alt}`}>
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? 'eager' : 'lazy'}
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <span className="drive-gallery-card-shade" aria-hidden="true" />
              <span className="drive-gallery-card-meta">
                <small>{image.collectionTitle}</small>
                <span>View photograph <b>↗</b></span>
              </span>
            </button>
          </figure>
        ))}
      </div>

      {selectedImage && (
        <div className="drive-gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button
            type="button"
            className="drive-gallery-lightbox-backdrop"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          />
          <div className="drive-gallery-lightbox-frame">
            <img src={selectedImage.fullSrc} alt={selectedImage.alt} referrerPolicy="no-referrer" />
            <button
              type="button"
              className="drive-gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
