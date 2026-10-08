import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Best of Sri Lanka Culture, Nature and Wild Life - Serendia Holidays By Venom',
  description: 'Eight nights and nine days around Sri Lanka with culture, wildlife, and coast.',
  path: '/tours/best-of-sri-lanka-culture-nature-and-wild-life',
});

// Page text lives in messages/<locale>/tours.json under TourBestOfSriLanka.
const sectionImages = [
  '/images/hero-4.png',
  '/images/polonnaruwa.webp',
  '/images/kandy-to-nuwara-eliya-tea-country.png',
  '/images/hero-3.png',
];

export default async function BestOfSriLankaTourPage() {
  const copy = await getTripCopy('TourBestOfSriLanka');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/hero-4.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="tour-best-of-sri-lanka"
      bookingLines={BOOKING_LINES}
    />
  );
}
