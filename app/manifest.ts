import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Serendia Holidays',
    short_name: 'Serendia',
    description: 'Private, tailor-made holidays and excursions across Sri Lanka.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3f6f3',
    theme_color: '#0b343a',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
