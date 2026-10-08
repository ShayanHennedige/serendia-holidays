import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Nuwara-Eliya Excursion from Kandy - Serendia Holidays By Venom',
  description: 'Full-day Nuwara Eliya excursion from Kandy through Sri Lanka tea country, with Ramboda Falls, and the historic Labookellie tea factory.',
  path: '/excursions/nuwara-eliya-excursion-from-kandy',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.nuwaraEliya.
const sectionImages = [
  '/images/3-ramboda-falls.jpg',
  '/images/Labukale-Tea-factory-3.webp',
  '/images/Ceylon-Tea-Trails-Hatton-Sri-Lanka-norwood-tea-plantation-factory-inside.webp',
];

export default async function NuwaraEliyaExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.nuwaraEliya');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/Nuwaraeliya.webp"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-nuwara-eliya"
      bookingLines={BOOKING_LINES}
    />
  );
}
