interface CommonsImage {
  src: string;
  alt: string;
  credit: string;
}

const FALLBACK_IMAGES: CommonsImage[] = [
  {
    src: '/images/hero-1.png',
    alt: 'Ancient Sri Lankan ruins at golden hour',
    credit: 'Serendia Holidays',
  },
  {
    src: '/images/hero-3.png',
    alt: 'Sri Lankan wildlife in a forest reserve',
    credit: 'Serendia Holidays',
  },
  {
    src: '/images/hero-4.png',
    alt: 'Sri Lankan beach at sunset',
    credit: 'Serendia Holidays',
  },
  {
    src: '/images/tour-polonnaruwa.png',
    alt: 'Historic temple in Sri Lanka',
    credit: 'Serendia Holidays',
  },
];

const SEARCH_TERMS: string[] = [
  'Sri Lanka beach',
  'Sigiriya Sri Lanka',
  'Sri Lanka wildlife',
  'Galle Sri Lanka',
  'Ella Sri Lanka',
  'Sri Lanka tea plantation',
];

export const revalidate = 43200;

export async function GET() {
  try {
    const items = await Promise.all(SEARCH_TERMS.map(fetchCommonsImage));
    const images = items.filter((img): img is CommonsImage => img !== null);

    return Response.json({
      source: images.length ? 'Wikimedia Commons' : 'local',
      images: images.length ? images : FALLBACK_IMAGES,
    });
  } catch {
    return Response.json({
      source: 'local',
      images: FALLBACK_IMAGES,
    });
  }
}

async function fetchCommonsImage(term: string): Promise<CommonsImage | null> {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    origin: '*',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: `${term} filetype:bitmap`,
    gsrlimit: '1',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: '1800',
  });

  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, {
    headers: {
      'User-Agent': 'SerendiaHolidays/1.0 (https://www.venomholidays.com/)',
    },
    next: { revalidate: 60 * 60 * 12 },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const pages = data?.query?.pages || {};
  const page = Object.values(pages)[0] as any;
  const info = page?.imageinfo?.[0];

  if (!info?.thumburl && !info?.url) {
    return null;
  }

  return {
    src: info.thumburl || info.url,
    alt: page.title?.replace(/^File:/, '').replace(/\.[^.]+$/, '') || term,
    credit: cleanMetadata(info.extmetadata?.Artist?.value) || 'Wikimedia Commons',
  };
}

function cleanMetadata(value: string | undefined | null): string {
  if (!value) {
    return '';
  }

  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}
