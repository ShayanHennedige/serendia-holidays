import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Kandy Excursion from Negombo - Serendia Holidays By Venom',
  description: 'Private full-day Kandy excursion from Negombo with the Temple of the Tooth, Peradeniya and Pinnawala.',
};

export default function KandyFromNegomboExcursionPage() {
  return (
    <TripDetailPage
      title="Kandy Excursion from Negombo"
      subtitle="Full Day"
      heroImage="/images/excursion-kandy.webp"
      heroNote="A private hill-capital day shaped for guests staying in Negombo, with cultural and garden highlights."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Kandy from Negombo' },
        { label: 'Distance', value: 'Approximately 115km (one way)' },
        { label: 'Depart', value: 'Morning', note: 'Final pickup time confirmed for your hotel and traffic conditions' },
      ]}
      sections={[
        {
          title: 'Kandy & the Temple of the Tooth',
          image: '/images/excursion-kandy.webp',
          paragraphs: [
            'Travel inland from Negombo to Sri Lanka’s historic hill capital. The city’s cultural centre is the Temple of the Sacred Tooth Relic, set within the former royal palace complex beside Kandy Lake.',
            'The visit is arranged around current opening hours and temple rituals, with appropriate time for a privately arranged lunch in Kandy.',
          ],
        },
        {
          title: 'Peradeniya Gardens & Pinnawala',
          image: '/images/excursion-kandy.webp',
          paragraphs: [
            'Continue to the Royal Botanical Gardens at Peradeniya for shaded avenues, tropical collections and the orchid house.',
            'A Pinnawala stop can be added on the outward or return journey depending on current schedules, before arriving back in Negombo in the evening.',
          ],
        },
      ]}
      bookingIntro="This route is adapted from our established Kandy day excursion and timed specifically for your Negombo hotel."
      catalogSlug="excursion-kandy-negombo"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
