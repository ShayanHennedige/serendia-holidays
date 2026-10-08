import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Yala Excursion from Bentota or Galle - Serendia Holidays By Venom',
  description: 'Full-day Yala National Park excursion from Bentota or Galle with an afternoon jeep safari to spot leopards, elephants and birdlife.',
  path: '/excursions/yala-excursion-from-bentota-or-galle',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.yala.
const sectionImages = [
  '/images/excursions/yala-elephants-safari.webp',
  '/images/excursions/yala-afternoon-leopard-safari.webp',
];

export default async function YalaExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.yala');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/yala-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-yala"
      bookingLines={BOOKING_LINES}
    />
  );
}
