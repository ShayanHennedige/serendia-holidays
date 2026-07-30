export type CatalogType = 'tour' | 'excursion' | 'hotel' | 'transport' | 'cricket' | 'consultancy';

export interface CatalogItem {
  slug: string;
  title: string;
  href: string;
  type: CatalogType;
  tags: string[];
  summary: string;
}

// Grounding data for the AI trip planner, natural-language search and
// recommendations. Only pages that actually exist in the site are listed
// here, so AI output never links to a dead route. Mirrors (rather than
// replaces) the literals already in the individual listing pages.
export const catalog: CatalogItem[] = [
  {
    slug: 'tour-best-of-sri-lanka',
    title: 'Best of Sri Lanka Culture, Nature and Wild Life',
    href: '/tours/best-of-sri-lanka-culture-nature-and-wild-life',
    type: 'tour',
    tags: ['culture', 'wildlife', 'tea country', 'coast', 'multi-day'],
    summary: '8 nights / 9 days combining ancient cities, tea country and a safari-to-beach finish.',
  },
  {
    slug: 'tours-index',
    title: 'Tours',
    href: '/tours',
    type: 'tour',
    tags: ['culture', 'beach', 'wildlife', 'hiking', 'biking', 'camping', 'multi-day'],
    summary: 'Tailor-made multi-day tours from short breaks to two-week round trips.',
  },
  {
    slug: 'excursion-polonnaruwa',
    title: 'Polonnaruwa Excursion',
    href: '/excursions/polonnaruwa-excursion',
    type: 'excursion',
    tags: ['culture', 'heritage', 'ancient cities', 'single-day'],
    summary: 'A single-day trip to the ancient city of Polonnaruwa.',
  },
  {
    slug: 'excursion-anuradhapura',
    title: 'Anuradhapura Excursion from Dambulla',
    href: '/excursions/anuradhapura-excursion-from-dambulla',
    type: 'excursion',
    tags: ['culture', 'heritage', 'ancient cities', 'pilgrimage', 'single-day'],
    summary: 'A full-day sacred-city journey from Dambulla to Anuradhapura’s stupas, temples and ancient reservoirs.',
  },
  {
    slug: 'excursion-colombo',
    title: 'Colombo Excursion',
    href: '/excursions/colombo-excursion',
    type: 'excursion',
    tags: ['city', 'culture', 'museum', 'architecture', 'single-day'],
    summary: 'A half-day circuit through Pettah, heritage Colombo, the National Museum and modern city landmarks.',
  },
  {
    slug: 'excursion-kandy-colombo',
    title: 'Kandy Excursion from Colombo',
    href: '/excursions/kandy-excursion-from-colombo',
    type: 'excursion',
    tags: ['culture', 'temple', 'garden', 'hill country', 'single-day'],
    summary: 'A full-day journey to Kandy’s Temple of the Tooth, Peradeniya gardens and Pinnawala from Colombo.',
  },
  {
    slug: 'excursion-sigiriya',
    title: 'Sigiriya Excursion from Kandy',
    href: '/excursions/sigiriya-excursion-from-kandy',
    type: 'excursion',
    tags: ['heritage', 'ancient cities', 'hiking', 'culture', 'single-day'],
    summary: 'A full-day trip through Matale spice country to climb the Sigiriya Lion Rock citadel.',
  },
  {
    slug: 'excursion-trincomalee',
    title: 'Trincomalee Excursion',
    href: '/excursions/trincomalee-excursion',
    type: 'excursion',
    tags: ['coast', 'beach', 'culture', 'temple', 'single-day'],
    summary: 'A full-day east-coast excursion to Trincomalee harbour, Marble Beach and Koneswaram Temple.',
  },
  {
    slug: 'excursion-yala',
    title: 'Yala Excursion from Bentota or Galle',
    href: '/excursions/yala-excursion-from-bentota-or-galle',
    type: 'excursion',
    tags: ['wildlife', 'safari', 'national park', 'single-day', 'coast'],
    summary: 'A single-day safari add-on for guests staying on the south coast.',
  },
  {
    slug: 'excursion-nuwara-eliya',
    title: 'Nuwara-Eliya Excursion from Kandy',
    href: '/excursions/nuwara-eliya-excursion-from-kandy',
    type: 'excursion',
    tags: ['hill country', 'tea', 'nature', 'single-day'],
    summary: 'A single-day trip into tea country from Kandy.',
  },
  {
    slug: 'excursion-kandy-negombo',
    title: 'Kandy Excursion from Negombo',
    href: '/excursions/kandy-excursion-from-negombo',
    type: 'excursion',
    tags: ['culture', 'temple', 'garden', 'hill country', 'single-day'],
    summary: 'A private full-day Kandy circuit tailored for travellers staying in Negombo.',
  },
  {
    slug: 'excursions-index',
    title: 'Excursions',
    href: '/excursions',
    type: 'excursion',
    tags: ['single-day', 'add-on', 'hub towns'],
    summary: 'Single-day trips from key hub towns covering ancient cities, hill country, national parks and the coast.',
  },
  {
    slug: 'hotel-devi-tranquil-villa',
    title: 'Devi Tranquil Villa',
    href: '/sri-lankan-hotels/devi-tranquil-villa',
    type: 'hotel',
    tags: ['villa', 'boutique', 'private', 'featured'],
    summary: 'A signature private villa property.',
  },
  {
    slug: 'hotel-secrets-of-ceylon',
    title: 'Secrets of Ceylon',
    href: '/sri-lankan-hotels/secrets-of-ceylon',
    type: 'hotel',
    tags: ['curated collection', 'boutique'],
    summary: 'A curated collection of boutique Sri Lankan stays.',
  },
  {
    slug: 'hotels-index',
    title: 'Sri Lankan Hotels',
    href: '/sri-lankan-hotels',
    type: 'hotel',
    tags: ['five-star', 'boutique', 'villa', 'guest house', 'home stay'],
    summary: 'The full accommodation directory, from five-star hotels to boutique villas and home stays.',
  },
  {
    slug: 'transport-options',
    title: 'Transportation',
    href: '/transportation',
    type: 'transport',
    tags: ['self-drive', 'chauffeur', 'rail', 'helicopter', 'air taxi', 'coach', 'city tour'],
    summary: 'Self-drive and chauffeur-driven cars/vans/coaches, luxury rail, helicopter/air-taxi charter and a hop-on city tour.',
  },
  {
    slug: 'cricket-tourism',
    title: 'Cricket Tourism',
    href: '/cricket-tourism',
    type: 'cricket',
    tags: ['cricket', 'school tour', 'club tour', 'spectator', 'coaching'],
    summary: 'Cricket tour packages for schools and clubs, spectator packages, ground bookings and technical coaching.',
  },
  {
    slug: 'hospitality-consultancy',
    title: 'Hospitality Project Management Consultancy',
    href: '/hospitality-consultancy',
    type: 'consultancy',
    tags: ['hotel investment', 'b2b', 'consultancy', 'project management'],
    summary: 'Advisory services for hotel investors from land acquisition through to operational commissioning.',
  },
];

export function findCatalogItem(slug: string): CatalogItem | undefined {
  return catalog.find((item) => item.slug === slug);
}

export function catalogByType(type: CatalogType): CatalogItem[] {
  return catalog.filter((item) => item.type === type);
}

export function relatedCatalogItems(currentSlug: string, limit = 3): CatalogItem[] {
  const current = findCatalogItem(currentSlug);
  if (!current) {
    return catalog.filter((item) => item.slug !== currentSlug).slice(0, limit);
  }

  const scored = catalog
    .filter((item) => item.slug !== currentSlug)
    .map((item) => {
      const sharedTags = item.tags.filter((tag) => current.tags.includes(tag)).length;
      const sameType = item.type === current.type ? 1 : 0;
      return { item, score: sharedTags * 2 + sameType };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.item);
}

export function catalogSummaryForPrompt(): string {
  return catalog
    .map((item) => `- [${item.slug}] (${item.type}) ${item.title}: ${item.summary} Tags: ${item.tags.join(', ')}.`)
    .join('\n');
}
