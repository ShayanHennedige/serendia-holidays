import type { Metadata } from 'next';
import { siteName, siteUrl } from './site';

export const SITE_URL = siteUrl;
export const SITE_NAME = siteName;
export const DEFAULT_OG_IMAGE = '/images/hero-1.png';

// Builds per-page metadata so each route gets its own canonical URL and social preview,
// rather than inheriting the homepage's Open Graph block from the root layout.
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ['Serendia Holidays', 'Venom Holidays'],
      url: SITE_URL,
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description:
        'Tailor-made Sri Lanka and Maldives holidays, excursions, cricket tourism and hospitality consultancy, trading since 1 January 2019.',
      foundingDate: '2019-01-01',
      telephone: '+94773986504',
      email: 'dharshan@venomholidays.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '63A, Old Road',
        addressLocality: 'Pannipitiya',
        addressCountry: 'LK',
      },
      areaServed: [
        { '@type': 'Country', name: 'Sri Lanka' },
        { '@type': 'Country', name: 'Maldives' },
      ],
      sameAs: [
        'https://www.facebook.com/Venom-Holidays-1790614197716887/',
        'https://www.instagram.com/venomholidays/',
        'https://twitter.com/holidaysvenom',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
  ],
};

export function tourPackageJsonLd(pkg: {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  days: number;
  nights: number;
  priceFrom: string;
  visiting: string[];
}) {
  const url = `${SITE_URL}/tour-packages/${pkg.slug}`;
  const [currency, amount] = pkg.priceFrom.split(' ');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        name: pkg.name,
        description: pkg.tagline,
        url,
        image: `${SITE_URL}${pkg.heroImage}`,
        touristType: 'Leisure',
        itinerary: {
          '@type': 'ItemList',
          itemListElement: pkg.visiting.map((place, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: { '@type': 'TouristDestination', name: place },
          })),
        },
        offers: {
          '@type': 'Offer',
          price: amount?.replace(/,/g, ''),
          priceCurrency: currency,
          url,
          availability: 'https://schema.org/InStock',
        },
        provider: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: `${SITE_URL}/tour-packages` },
          { '@type': 'ListItem', position: 3, name: pkg.name, item: url },
        ],
      },
    ],
  };
}
