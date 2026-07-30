import HotelDetailPage from '../../components/HotelDetailPage';

export const metadata = {
  title: 'Secrets of Ceylon - Serendia Holidays By Venom',
  description: 'A boutique Sri Lankan hotel option for travelers looking for a refined stay.',
};

export default function SecretsOfCeylonPage() {
  return (
    <HotelDetailPage
      title="Secrets of Ceylon"
      subtitle="Boutique Hotel"
      heroImage="/images/tour-polonnaruwa.png"
      overview="Secrets of Ceylon is presented as a boutique-style property with a more elevated service feel, making it a strong fit for travelers who want comfort, privacy, and a polished guest experience."
      highlights={[
        { label: 'Style', value: 'Boutique hotel' },
        { label: 'Best for', value: 'Couples and small groups' },
        { label: 'Service', value: 'Personal and premium' },
        { label: 'Use case', value: 'Round trips and escapes' },
      ]}
      gallery={[
        {
          title: 'Refined stay',
          image: '/images/tour-polonnaruwa.png',
          text: 'A polished setting that works well for guests who want a more curated accommodation choice.',
        },
        {
          title: 'Tour-friendly base',
          image: '/images/hero-3.png',
          text: 'A useful stop for touring itineraries where quality of stay matters as much as location.',
        },
      ]}
      catalogSlug="hotel-secrets-of-ceylon"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
