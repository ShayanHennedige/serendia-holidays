import TourPackagePage from '../../components/TourPackagePage';
import { getPackage } from '../../lib/tourPackages';

const pkg = getPackage('ancient-cities-and-golden-sands');

export const metadata = {
  title: `${pkg.name} - Serendia Holidays By Venom`,
  description: pkg.tagline,
};

export default function Page() {
  return <TourPackagePage slug={pkg.slug} />;
}
