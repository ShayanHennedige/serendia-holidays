import TourPackagePage from '../../components/TourPackagePage';
import { getPackage } from '../../lib/tourPackages';

const pkg = getPackage('grand-tour-of-sri-lanka');

export const metadata = {
  title: `${pkg.name} - Serendia Holidays By Venom`,
  description: pkg.tagline,
};

export default function Page() {
  return <TourPackagePage slug={pkg.slug} />;
}
