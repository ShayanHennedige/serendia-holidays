import InnerHero from '../components/InnerHero';
import GalleryBrowser from './GalleryBrowser';
import { getGoogleDriveGallery } from '../lib/googleDriveGallery';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '../lib/seo';

// Render on request so the gallery always reflects the latest public Drive contents.
export const revalidate = 0;

export const metadata = pageMetadata({
  title: 'Gallery - Serendia Holidays By Venom',
  description: 'Photo gallery from Serendia Holidays tours across Sri Lanka — temples, wildlife safaris, tea country, beaches and happy travellers.',
  path: '/gallery',
});

export default async function GalleryPage() {
  const collections = await getGoogleDriveGallery();
  const t = await getTranslations('Gallery');

  return (
    <main className="drive-gallery-page">
      <InnerHero 
        title={t('heroTitle')}
        bgImage="/images/hero-1.png"
      />
      <section className="drive-gallery-intro">
        <div className="container">
          <div className="drive-gallery-heading">
            <p className="drive-gallery-eyebrow">{t('eyebrow')}</p>
            <h2>{t('title1')}<br /><em>{t('title2')}</em></h2>
            <p className="drive-gallery-copy">{t('copy')}</p>
          </div>
          <GalleryBrowser collections={collections} />
        </div>
      </section>
    </main>
  );
}
