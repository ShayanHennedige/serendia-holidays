import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Kandy Excursion from Colombo - Serendia Holidays By Venom',
  description: 'Full-day Kandy excursion from Colombo with the Temple of the Tooth, Royal Botanical Gardens and Pinnawala.',
};

export default function KandyFromColomboExcursionPage() {
  return (
    <TripDetailPage
      title="Kandy Excursion from Colombo"
      subtitle="Full Day"
      heroImage="/images/excursion-kandy.webp"
      heroNote="Sri Lanka’s hill capital, its most venerated temple, botanical gardens and a Pinnawala stop in one full day."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Kandy from Colombo' },
        { label: 'Distance', value: '140km (one way)' },
        { label: 'Depart', value: '8.30am', note: 'Approximately 3 hours to Kandy' },
      ]}
      sections={[
        {
          title: 'Temple of the Sacred Tooth Relic',
          image: '/images/excursion-kandy.webp',
          paragraphs: [
            'Set beside Kandy Lake, the Temple of the Sacred Tooth Relic is the spiritual focal point of Sri Lanka’s hill capital. Its daily rituals and historic palace buildings introduce the living traditions of this UNESCO-listed city.',
            'Allow approximately one hour for the temple complex before lunch in Kandy at your own arrangement.',
          ],
        },
        {
          title: 'Royal Botanical Gardens, Peradeniya',
          image: '/images/excursion-kandy.webp',
          paragraphs: [
            'The Royal Botanical Gardens at Peradeniya spread across a river-bound landscape just outside Kandy. Palms, flowering trees, giant tropical specimens and the orchid collection make it one of the island’s most rewarding garden walks.',
            'The visit can be paced gently, with shaded paths and time for photography before beginning the return journey.',
          ],
        },
        {
          title: 'Pinnawala on the Return Route',
          image: '/images/excursion-kandy.webp',
          paragraphs: [
            'A stop at Pinnawala can be arranged around the published care and river routines. Exact viewing conditions and timings remain subject to the facility’s current programme.',
            'Continue to Colombo after the visit, arriving at the hotel in the evening.',
          ],
        },
      ]}
      bookingIntro="We will confirm temple dress guidance, attraction opening times and the best departure time for Colombo traffic."
      catalogSlug="excursion-kandy-colombo"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
