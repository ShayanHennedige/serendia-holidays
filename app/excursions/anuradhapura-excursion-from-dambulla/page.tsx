import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Anuradhapura Excursion from Dambulla - Serendia Holidays By Venom',
  description: 'Full-day Anuradhapura excursion from Dambulla with Ruwanwelisaya, Sri Maha Bodhi, Kuttam Pokuna and Isurumuniya.',
};

export default function AnuradhapuraExcursionPage() {
  return (
    <TripDetailPage
      title="Anuradhapura Excursion from Dambulla"
      subtitle="Full Day"
      heroImage="/images/excursion-anuradhapura.webp"
      heroNote="A day among Sri Lanka’s first capital, sacred stupas, ancient reservoirs and enduring stone carvings."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Anuradhapura from Dambulla' },
        { label: 'Distance', value: '90km (one way)' },
        { label: 'Depart', value: '8.30am', note: 'Approximately 1.5 hours to Anuradhapura' },
      ]}
      sections={[
        {
          title: 'Ruwanwelisaya & the Sacred City',
          image: '/images/excursion-anuradhapura.webp',
          paragraphs: [
            'Anuradhapura was Sri Lanka’s first great royal capital and remained a centre of power and Buddhist culture for more than a millennium. Its monumental stupas, reservoirs and monasteries reveal the scale and sophistication of the ancient city.',
            'The route includes Ruwanwelisaya, built during the reign of King Dutugemunu, followed by selected sacred-city landmarks such as the Sri Maha Bodhi, the Samadhi Buddha and Kuttam Pokuna. Lunch is arranged independently in Anuradhapura.',
          ],
        },
        {
          title: 'Isurumuniya Temple',
          image: '/images/excursion-anuradhapura.webp',
          paragraphs: [
            'Isurumuniya stands beside Tissa Wewa and is known for its rock-cut setting and celebrated carvings, including the Isurumuniya Lovers, Elephant Pond and Royal Family scenes.',
            'After time to explore the temple precinct and museum, the excursion returns to Dambulla in the late afternoon or early evening.',
          ],
        },
      ]}
      bookingIntro="We can tailor the sacred-city route around your preferred monuments, mobility needs and available time."
      catalogSlug="excursion-anuradhapura"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
