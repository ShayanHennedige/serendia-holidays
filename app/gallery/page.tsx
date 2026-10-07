import InnerHero from '../components/InnerHero';
import GalleryBrowser from './GalleryBrowser';
import { getGoogleDriveGallery } from '../lib/googleDriveGallery';
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

  return (
    <main className="drive-gallery-page">
      <InnerHero 
        title="Gallery" 
        bgImage="/images/hero-1.png"
      />
      <section className="drive-gallery-intro">
        <div className="container">
          <div className="drive-gallery-heading">
            <p className="drive-gallery-eyebrow">Stories from the road</p>
            <h2>Real journeys.<br /><em>Unscripted moments.</em></h2>
            <p className="drive-gallery-copy">
              A living collection of Sri Lanka as our guests experienced it—warm welcomes,
              wild landscapes and the small moments that stay with you.
            </p>
          </div>
          <GalleryBrowser collections={collections} />
        </div>
      </section>
    </main>
  );
}
