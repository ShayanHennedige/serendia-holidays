import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Polonnaruwa Excursion - Serendia Holidays By Venom',
  description: 'Full-day Polonnaruwa excursion exploring the ancient royal city ruins, followed by an elephant jeep safari in Minneriya National Park.',
  path: '/excursions/polonnaruwa-excursion',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.polonnaruwa.
const sectionImages = [
  '/images/polonnaruwa.webp',
  '/images/Minneriya-National-Park-Elephants-scaled.webp',
];

export default async function PolonnaruwaExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.polonnaruwa');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/polonnaruwa-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-polonnaruwa"
      bookingLines={BOOKING_LINES}
    />
  );
}
