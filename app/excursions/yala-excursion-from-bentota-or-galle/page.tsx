import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Yala Excursion from Bentota or Galle - Serendia Holidays By Venom',
  description: 'Full day Yala excursion with afternoon safari options.',
};

export default function YalaExcursionPage() {
  return (
    <TripDetailPage
      title="Yala Excursion from Bentota or Galle"
      subtitle="Full Day"
      heroImage="/images/excursion-yala.webp"
      heroNote="Afternoon safari departures and hotel return in the evening."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Yala Excursion from Bentota or Galle' },
        { label: 'Distance', value: '200km (one way)' },
        { label: 'Depart', value: '8.30am to Yala' },
      ]}
      sections={[
        {
          title: 'Yala National Park Safari',
          image: '/images/excursion-yala.webp',
          paragraphs: [
            'Yala is the oldest National Park in Sri Lanka and is split into blocks, with Block 1 open to the public and widely known for wildlife viewing.',
            'The park is best known for elephants, leopards, crocodiles, peafowl, and a large variety of birds, so every drive has a strong chance of producing memorable sightings.',
          ],
        },
        {
          title: 'Afternoon Safari Proceeds',
          image: '/images/excursion-yala.webp',
          paragraphs: [
            'The main road through the park separates the landscape, with dense forest on one side and grasslands on the other, creating a dramatic route for game drives.',
            'The best time to visit is during the dry season, when animals are easier to spot and the park delivers a classic Sri Lankan safari experience.',
          ],
        },
      ]}
      bookingIntro="We can arrange a private or shared safari plan depending on where you are staying."
      catalogSlug="excursion-yala"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
