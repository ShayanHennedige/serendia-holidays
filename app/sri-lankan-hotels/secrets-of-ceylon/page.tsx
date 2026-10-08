import { getTranslations } from 'next-intl/server';
import HotelDetailPage from '../../components/HotelDetailPage';
import { pageMetadata } from '../../lib/seo';
import { BOOKING_LINES } from '../../lib/tripCopy';

export const metadata = pageMetadata({
  title: 'Secrets of Ceylon - Serendia Holidays By Venom',
  description: 'A boutique Sri Lankan hotel option for travelers looking for a refined stay.',
  path: '/sri-lankan-hotels/secrets-of-ceylon',
});

// Page text lives in messages/<locale>/hotels.json under HotelPages.secrets.
const galleryImages = [
  '/images/tour-polonnaruwa.png',
  '/images/hero-3.png',
];

export default async function SecretsOfCeylonPage() {
  const t = await getTranslations('HotelPages.secrets');
  const gallery = t.raw('gallery') as { title: string; text: string }[];

  return (
    <HotelDetailPage
      title={t('title')}
      subtitle={t('subtitle')}
      heroImage="/images/tour-polonnaruwa.png"
      overview={t('overview')}
      highlights={t.raw('highlights') as { label: string; value: string }[]}
      gallery={gallery.map((item, index) => ({ ...item, image: galleryImages[index] }))}
      catalogSlug="hotel-secrets-of-ceylon"
      bookingLines={BOOKING_LINES}
    />
  );
}
