import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Nuwara-Eliya Excursion from Kandy - Serendia Holidays By Venom',
  description: 'Full day Nuwara Eliya excursion from Kandy with tea factory stops.',
};

export default function NuwaraEliyaExcursionPage() {
  return (
    <TripDetailPage
      title="Nuwara-Eliya Excursion from Kandy"
      subtitle="Full Day"
      heroImage="/images/Nuwaraeliya.webp"
      heroNote="Scenic tea country drive with waterfall and factory stops."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Nuwara-Eliya Excursion from Kandy' },
        { label: 'Distance', value: '100km (one way)' },
        { label: 'Depart', value: '8.30am to Nuwara-Eliya' },
      ]}
      sections={[
        {
          title: 'En Route View Ramboda Falls',
          image: '/images/3-ramboda-falls.jpg',
          paragraphs: [
            "Ramboda Falls is among Sri Lanka's best-known waterfall stops and makes a natural pause on the journey from Kandy to the hill country.",
            'Altitude, cooler temperatures, and tea estates along the road turn the transfer itself into part of the experience rather than just the transit.',
          ],
        },
        {
          title: 'Visit The Labookellie Tea Factory',
          image: '/images/Labukale-Tea-factory-3.webp',
          paragraphs: [
            "Labookellie is a historic tea factory where you can see how tea is processed before it reaches Sri Lanka's export markets.",
            'After lunch and a relaxed town visit, the return to Kandy closes the day with a cool mountain drive through the central highlands.',
          ],
        },
        {
          title: 'See How Ceylon Tea Is Made',
          image: '/images/Ceylon-Tea-Trails-Hatton-Sri-Lanka-norwood-tea-plantation-factory-inside.webp',
          paragraphs: [
            'Watch freshly picked leaves move through the early stages of tea making, from withering to the careful preparation that shapes Ceylon tea’s character.',
            'It is a close-up look at the work behind the estates that make this highland route so distinctive.',
          ],
        },
      ]}
      bookingIntro="This excursion is easy to customize if you want more time for tea gardens, waterfalls, or the town center."
      catalogSlug="excursion-nuwara-eliya"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
