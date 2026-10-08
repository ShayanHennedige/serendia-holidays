import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Anuradhapura Excursion from Dambulla - Serendia Holidays By Venom',
  description: 'Full-day Anuradhapura excursion from Dambulla with Ruwanwelisaya, Sri Maha Bodhi, Kuttam Pokuna and Isurumuniya.',
  path: '/excursions/anuradhapura-excursion-from-dambulla',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.anuradhapura.
const sectionImages = [
  '/images/excursions/ruwanwelisaya-sacred-city.webp',
  '/images/excursion-anuradhapura.webp',
];

export default async function AnuradhapuraExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.anuradhapura');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/anuradhapura-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-anuradhapura"
      bookingLines={BOOKING_LINES}
    />
  );
}
