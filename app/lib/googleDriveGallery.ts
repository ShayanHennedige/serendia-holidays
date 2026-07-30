import 'server-only';
import { parseGalleryFolderDetails, type GalleryFolderDetails } from './galleryFolderDetails';

const DRIVE_FOLDER_ID = '1jVJsBscyrTiOnH2CF0SOfMA2l_dBh-mf';
const DRIVE_MIME_FOLDER = 'application/vnd.google-apps.folder';

type DriveRecord = {
  id: string;
  name: string;
  mimeType: string;
};

export type GalleryImage = {
  id: string;
  alt: string;
  src: string;
  fullSrc: string;
};

export type GalleryCollection = {
  id: string;
  title: string;
  clientName?: string;
  country?: string;
  images: GalleryImage[];
};

const knownCollectionDetails: Record<string, GalleryFolderDetails> = {
  '11aEtTZHCL1NnB7SEC28FkcjO1r2Pq3MP': {
    clientName: 'Mr & Mrs. Reccioni',
    country: 'Australian',
    title: 'Mr & Mrs. Reccioni – Australian',
  },
  '1In5hfAk95QecLruft6UMNWtfiRrzXSMW': {
    clientName: 'Mr & Mrs. Govender',
    country: 'South African',
    title: 'Mr & Mrs. Govender – South African',
  },
  '1hdMwmJuXd_FUXbZc3de_SdGelgf9oNwT': {
    clientName: 'Mr & Mrs. Hanger',
    country: 'Australian',
    title: 'Mr & Mrs. Hanger – Australian',
  },
};

const fallbackCollections: GalleryCollection[] = [
  {
    id: 'sri-lanka-moments',
    title: 'Sri Lanka Moments',
    images: [
      '/images/hero-1.png',
      '/images/hero-2.png',
      '/images/hero-3.png',
      '/images/tour-polonnaruwa.png',
      '/images/hero-4.png',
    ].map((src, index) => ({
      id: `fallback-${index + 1}`,
      alt: `A Serendia journey through Sri Lanka, photograph ${index + 1}`,
      src,
      fullSrc: src,
    })),
  },
];

function readJsonArray(source: string, start: number) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];

    if (inString) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === '"') inString = false;
      continue;
    }

    if (character === '"') inString = true;
    else if (character === '[') depth += 1;
    else if (character === ']') {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }

  throw new Error('The public Drive folder response was incomplete.');
}

function parseFolderRecords(html: string): DriveRecord[] {
  const callbackMatch = /AF_initDataCallback\(\{key: ['"]ds:4['"]/.exec(html);
  if (!callbackMatch) throw new Error('The public Drive folder data was not found.');

  const dataMarker = html.indexOf('data:', callbackMatch.index);
  const arrayStart = html.indexOf('[', dataMarker);
  if (dataMarker === -1 || arrayStart === -1) throw new Error('The Drive data payload was invalid.');

  const data = JSON.parse(readJsonArray(html, arrayStart)) as unknown;
  const records = new Map<string, DriveRecord>();

  const visit = (value: unknown) => {
    if (!Array.isArray(value)) return;

    const id = Array.isArray(value[0]) ? value[0][1] : null;
    const mimeType = value[4];
    const name = value[35]?.[0]?.[0]?.[0];

    if (
      typeof id === 'string' &&
      typeof mimeType === 'string' &&
      typeof name === 'string' &&
      /^[\w-]{10,}$/.test(id)
    ) {
      records.set(id, { id, name, mimeType });
      return;
    }

    value.forEach(visit);
  };

  visit(data);
  return [...records.values()];
}

async function fetchFolder(folderId: string) {
  const response = await fetch(`https://drive.google.com/drive/folders/${folderId}?usp=sharing`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; SerendiaHolidaysGallery/1.0)',
    },
    cache: 'no-store',
  });

  if (!response.ok) throw new Error(`Google Drive returned ${response.status}.`);
  return parseFolderRecords(await response.text());
}

function makeGalleryImage(record: DriveRecord, collectionTitle: string, index: number): GalleryImage {
  const encodedId = encodeURIComponent(record.id);

  return {
    id: record.id,
    alt: `${collectionTitle}, guest photograph ${index + 1}`,
    src: `https://drive.google.com/thumbnail?id=${encodedId}&sz=w1600`,
    fullSrc: `https://drive.google.com/thumbnail?id=${encodedId}&sz=w2400`,
  };
}

function detailsFromFolder(record: DriveRecord, index: number): GalleryFolderDetails {
  return (
    knownCollectionDetails[record.id] ??
    parseGalleryFolderDetails(record.name) ?? {
      clientName: `Guest ${index + 1}`,
      country: 'Journey',
      title: `Guest Journey ${index + 1}`,
    }
  );
}

export async function getGoogleDriveGallery(): Promise<GalleryCollection[]> {
  try {
    // Read every folder fresh so additions, removals and new clients stay in sync with Drive.
    const rootRecords = await fetchFolder(DRIVE_FOLDER_ID);
    const folders = rootRecords.filter((record) => record.mimeType === DRIVE_MIME_FOLDER);
    const rootImages = rootRecords.filter((record) => record.mimeType.startsWith('image/'));

    const collections: GalleryCollection[] = await Promise.all(
      folders.map(async (folder, index) => {
        const details = detailsFromFolder(folder, index);
        const images = (await fetchFolder(folder.id))
          .filter((record) => record.mimeType.startsWith('image/'))
          .map((record, imageIndex) => makeGalleryImage(record, details.title, imageIndex));

        return { id: folder.id, ...details, images };
      }),
    );

    if (rootImages.length > 0) {
      collections.unshift({
        id: 'serendia-highlights',
        title: 'Serendia Highlights',
        images: rootImages.map((record, index) =>
          makeGalleryImage(record, 'Serendia Highlights', index),
        ),
      });
    }

    const populatedCollections = collections.filter((collection) => collection.images.length > 0);
    return populatedCollections.length > 0 ? populatedCollections : fallbackCollections;
  } catch (error) {
    console.warn('Google Drive gallery could not be loaded; using local images.', error);
    return fallbackCollections;
  }
}
