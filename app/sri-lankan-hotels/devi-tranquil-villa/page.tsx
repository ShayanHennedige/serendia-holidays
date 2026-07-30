import HotelDetailPage from '../../components/HotelDetailPage';

export const metadata = {
  title: 'Devi Tranquil Villa - Serendia Holidays By Venom',
  description: 'A relaxed Sri Lankan villa stay with comfortable service and easy holiday access.',
};

export default function DeviTranquilVillaPage() {
  return (
    <HotelDetailPage
      title="Devi Tranquil Villa"
      subtitle="Sri Lankan Hotel"
      heroImage="/images/hero-2.png"
      overview="Devi Tranquil Villa is a calm, small-scale stay that suits travelers who want a quieter base with practical service, good access, and a more personal atmosphere than a large resort hotel."
      highlights={[
        { label: 'Style', value: 'Villa stay' },
        { label: 'Best for', value: 'Private holidays' },
        { label: 'Atmosphere', value: 'Relaxed and personal' },
        { label: 'Location', value: 'Convenient for touring' },
      ]}
      gallery={[
        {
          title: 'Comfortable rooms',
          image: '/images/hero-2.png',
          text: 'Well-suited for short stays, round trips, and couples looking for a quieter accommodation base.',
        },
        {
          title: 'Easy holiday planning',
          image: '/images/hero-4.png',
          text: 'A practical choice when you want to combine accommodation with excursions and transfers.',
        },
      ]}
      catalogSlug="hotel-devi-tranquil-villa"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
