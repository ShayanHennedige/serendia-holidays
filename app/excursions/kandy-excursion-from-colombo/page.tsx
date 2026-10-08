import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Kandy Excursion from Colombo - Serendia Holidays By Venom',
  description: 'Full-day Kandy excursion from Colombo with the Temple of the Tooth, Royal Botanical Gardens and Pinnawala.',
  path: '/excursions/kandy-excursion-from-colombo',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.kandyColombo.
const sectionImages = [
  '/images/packages/kandy-temple.jpg',
  '/images/packages/botanical-garden.jpg',
  '/images/excursions/pinnawala-river-elephants.webp',
];

export default async function KandyFromColomboExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.kandyColombo');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/kandy-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-kandy-colombo"
      bookingLines={BOOKING_LINES}
    />
  );
}
