import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Colombo Excursion - Serendia Holidays By Venom',
  description: 'Half-day Colombo excursion covering Pettah, the National Museum, civic landmarks and the Lotus Tower.',
  path: '/excursions/colombo-excursion',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.colombo.
const sectionImages = [
  '/images/packages/colombo.jpg',
  '/images/excursion-colombo.webp',
];

export default async function ColomboExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.colombo');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/colombo-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-colombo"
      bookingLines={BOOKING_LINES}
    />
  );
}
