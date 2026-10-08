import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Trincomalee Excursion - Serendia Holidays By Venom',
  description: 'Full-day Trincomalee excursion with Marble Beach, the natural harbour and Koneswaram Temple.',
  path: '/excursions/trincomalee-excursion',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.trincomalee.
const sectionImages = [
  '/images/excursion-trincomalee.webp',
  '/images/excursions/koneswaram-swami-rock.webp',
];

export default async function TrincomaleeExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.trincomalee');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/trincomalee-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-trincomalee"
      bookingLines={BOOKING_LINES}
    />
  );
}
