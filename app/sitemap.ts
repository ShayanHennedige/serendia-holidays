import type { MetadataRoute } from 'next';
import { siteUrlFor } from './lib/site';

type RouteDefinition = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const routes: RouteDefinition[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/tours', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/tour-packages', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/excursions', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/sri-lankan-hotels', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/customize', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/why-choose-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/transportation', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/gallery', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/cricket-tourism', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/hospitality-consultancy', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/tours/best-of-sri-lanka-culture-nature-and-wild-life', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tour-packages/classic-sri-lanka', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tour-packages/ancient-cities-and-golden-sands', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tour-packages/beach-safari-and-tea-country', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tour-packages/grand-tour-of-sri-lanka', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/sri-lankan-hotels/devi-tranquil-villa', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/sri-lankan-hotels/secrets-of-ceylon', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/anuradhapura-excursion-from-dambulla', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/colombo-excursion', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/kandy-excursion-from-colombo', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/kandy-excursion-from-negombo', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/nuwara-eliya-excursion-from-kandy', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/polonnaruwa-excursion', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/sigiriya-excursion-from-kandy', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/trincomalee-excursion', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/excursions/yala-excursion-from-bentota-or-galle', changeFrequency: 'monthly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: siteUrlFor(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
