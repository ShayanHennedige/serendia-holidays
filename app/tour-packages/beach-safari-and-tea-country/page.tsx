import TourPackagePage from '../../components/TourPackagePage';
import { getPackage } from '../../lib/tourPackages';
import { jsonLdScript, pageMetadata, tourPackageJsonLd } from '../../lib/seo';

const pkg = getPackage('beach-safari-and-tea-country');

export const metadata = pageMetadata({
  title: `${pkg.name} - Serendia Holidays By Venom`,
  description: pkg.tagline,
  path: '/tour-packages/beach-safari-and-tea-country',
  image: pkg.heroImage,
});

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(tourPackageJsonLd(pkg))} />
      <TourPackagePage slug={pkg.slug} />
    </>
  );
}
