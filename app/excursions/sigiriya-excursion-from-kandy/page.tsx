import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Sigiriya Excursion from Kandy - Serendia Holidays By Venom',
  description: 'Full-day Sigiriya excursion from Kandy with a Matale spice garden and afternoon Lion Rock climb.',
  path: '/excursions/sigiriya-excursion-from-kandy',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.sigiriya.
const sectionImages = [
  '/images/excursions/matale-spice-garden.webp',
  '/images/excursions/sigiriya-lion-rock-ascent.webp',
];

export default async function SigiriyaFromKandyExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.sigiriya');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/sigiriya-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-sigiriya"
      bookingLines={BOOKING_LINES}
    />
  );
}
