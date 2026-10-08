import TripDetailPage from '../../components/TripDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES, getTripCopy, withSectionImages } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Kandy Excursion from Negombo - Serendia Holidays By Venom',
  description: 'Private full-day Kandy excursion from Negombo with the Temple of the Tooth, Peradeniya and Pinnawala.',
  path: '/excursions/kandy-excursion-from-negombo',
});

// Page text lives in messages/<locale>/excursions.json under ExcursionPages.kandyNegombo.
const sectionImages = [
  '/images/packages/kandy-city.jpg',
  '/images/excursions/peradeniya-royal-gardens.webp',
];

export default async function KandyFromNegomboExcursionPage() {
  const copy = await getTripCopy('ExcursionPages.kandyNegombo');

  return (
    <TripDetailPage
      {...copy}
      heroImage="/images/excursion-heroes/kandy-hero.png"
      sections={withSectionImages(copy.sections, sectionImages)}
      catalogSlug="excursion-kandy-negombo"
      bookingLines={BOOKING_LINES}
    />
  );
}
