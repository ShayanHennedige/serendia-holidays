import type { Metadata } from 'next';

export const SITE_URL = 'https://www.serendiaholidays.com';
export const SITE_NAME = 'Serendia Holidays By Venom';
export const DEFAULT_OG_IMAGE = '/images/hero-1.png';

// Every public, indexable route. Keep in sync when adding a page — the sitemap is built from this list.
export const SITE_ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/tour-packages', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/tour-packages/grand-tour-of-sri-lanka', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tour-packages/ancient-cities-and-golden-sands', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tour-packages/classic-sri-lanka', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tour-packages/beach-safari-and-tea-country', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/tours', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/tours/best-of-sri-lanka-culture-nature-and-wild-life', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/excursions', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/excursions/anuradhapura-excursion-from-dambulla', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/colombo-excursion', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/kandy-excursion-from-colombo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/kandy-excursion-from-negombo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/nuwara-eliya-excursion-from-kandy', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/polonnaruwa-excursion', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/sigiriya-excursion-from-kandy', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/trincomalee-excursion', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/excursions/yala-excursion-from-bentota-or-galle', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/customize', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sri-lankan-hotels', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/sri-lankan-hotels/devi-tranquil-villa', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/sri-lankan-hotels/secrets-of-ceylon', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/cricket-tourism', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/hospitality-consultancy', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/transportation', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/gallery', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/why-choose-us', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
];

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
