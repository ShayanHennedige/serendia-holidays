import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Trincomalee Excursion - Serendia Holidays By Venom',
  description: 'Full-day Trincomalee excursion with Marble Beach, the natural harbour and Koneswaram Temple.',
};

export default function TrincomaleeExcursionPage() {
  return (
    <TripDetailPage
      title="Trincomalee Excursion"
      subtitle="Full Day"
      heroImage="/images/excursion-trincomalee.webp"
      heroNote="Sri Lanka’s great eastern harbour, a luminous beach and the sacred cliff-top setting of Koneswaram."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Trincomalee Excursion' },
        { label: 'Distance', value: '115km (one way)' },
        { label: 'Depart', value: '8.30am', note: 'Approximately 1.5 hours from Habarana' },
      ]}
      sections={[
        {
          title: 'Natural Harbour & Marble Beach',
          image: '/images/excursion-trincomalee.webp',
          paragraphs: [
            'Trincomalee is known for one of the world’s great natural harbours and a coastline of sheltered bays, pale sand and warm eastern waters.',
            'The excursion includes time around Marble Beach, whose clear water and protected setting create a relaxed coastal pause. Lunch is arranged independently in Trincomalee.',
          ],
        },
        {
          title: 'Koneswaram Temple & Swami Rock',
          image: '/images/excursion-trincomalee.webp',
          paragraphs: [
            'Koneswaram Temple occupies a dramatic sacred site above the sea at Swami Rock. The wider Trincomalee area contains places of significance to both Hindu and Buddhist communities, reflecting the east coast’s layered history.',
            'After the temple and coastal viewpoints, return to the Habarana hotel in the evening.',
          ],
        },
      ]}
      bookingIntro="Beach time can be adjusted around weather, sea conditions and temple opening hours."
      catalogSlug="excursion-trincomalee"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
