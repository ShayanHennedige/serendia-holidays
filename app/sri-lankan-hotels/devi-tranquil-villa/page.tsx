import { getTranslations } from 'next-intl/server';
import HotelDetailPage from '../../components/HotelDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Devi Tranquil Villa - Serendia Holidays By Venom',
  description: 'A relaxed Sri Lankan villa stay with comfortable service and easy holiday access.',
  path: '/sri-lankan-hotels/devi-tranquil-villa',
});

// Page text lives in messages/<locale>/hotels.json under HotelPages.devi.
const galleryImages = [
  '/images/hero-2.png',
  '/images/hero-4.png',
];

export default async function DeviTranquilVillaPage() {
  const t = await getTranslations('HotelPages.devi');
  const gallery = t.raw('gallery') as { title: string; text: string }[];

  return (
    <HotelDetailPage
      title={t('title')}
      subtitle={t('subtitle')}
      heroImage="/images/hero-2.png"
      overview={t('overview')}
      highlights={t.raw('highlights') as { label: string; value: string }[]}
      gallery={gallery.map((item, index) => ({ ...item, image: galleryImages[index] }))}
      catalogSlug="hotel-devi-tranquil-villa"
      bookingLines={BOOKING_LINES}
    />
  );
}
