import InnerHero from '../components/InnerHero';

const galleryImages: string[] = [
  '/images/hero-1.png',
  '/images/hero-2.png',
  '/images/hero-3.png',
  '/images/tour-polonnaruwa.png',
  '/images/hero-4.png',
  '/images/hero-1.png',
];

export const metadata = {
  title: 'Gallery - Serendia Holidays By Venom',
  description: 'Our tour gallery.',
};

export default function GalleryPage() {
  return (
    <main>
      <InnerHero 
        title="Gallery" 
        bgImage="/images/hero-1.png"
      />
      <section className="page-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Memories from Sri Lanka</h2>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <div key={index} className="gallery-item">
                <img src={src} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
