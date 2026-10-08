import { getTranslations } from 'next-intl/server';

// Text for one TripDetailPage, stored in messages/<locale>/*.json. Images and links stay
// in the page file; sections are matched to their images by position.
export interface TripCopy {
  title: string;
  subtitle: string;
  heroNote?: string;
  facts: { label: string; value: string; note?: string }[];
  sections: { title: string; paragraphs: string[] }[];
  bookingIntro?: string;
}

export async function getTripCopy(key: string): Promise<TripCopy> {
  const t = await getTranslations();
  return t.raw(key) as TripCopy;
}

export function withSectionImages(sections: TripCopy['sections'], images: string[]) {
  return sections.map((section, index) => ({ ...section, image: images[index] }));
}

export const BOOKING_LINES = [
  '63A, Old Road, Pannipitiya, Sri Lanka',
  'WhatsApp/Call: +94 77 398 6504',
  'Email: dharshan@venomholidays.com',
];
