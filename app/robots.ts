import type { MetadataRoute } from 'next';
import { siteUrlFor } from './lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/staff/'],
    },
    sitemap: siteUrlFor('/sitemap.xml'),
    host: siteUrlFor(),
  };
}
