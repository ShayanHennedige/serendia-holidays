import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Polonnaruwa Excursion - Serendia Holidays By Venom',
  description: 'Full day Polonnaruwa excursion with Minneriya National Park.',
};

export default function PolonnaruwaExcursionPage() {
  return (
    <TripDetailPage
      title="Polonnaruwa Excursion"
      subtitle="Full Day"
      heroImage="/images/tour-polonnaruwa.png"
      heroNote="Ancient city ruins, wildlife, and a relaxed return to the hotel after lunch."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Polonnaruwa Excursion' },
        { label: 'Distance', value: '110km (one way)' },
        { label: 'Depart', value: '8.30am to Polonnaruwa' },
      ]}
      sections={[
        {
          title: 'Polonnaruwa Ancient City',
          image: '/images/tour-polonnaruwa.png',
          paragraphs: [
            'As an eco-tourism venue, the city is divided into new and old town with the impressively preserved ruins split into five main areas, including The Quadrangle, the Northern City Group and the Rest House group.',
            'The route is easy to explore on foot, and the surrounding area is well maintained so you can leave the car behind and move between the monuments at a relaxed pace.',
          ],
        },
        {
          title: 'Minneriya National Park',
          image: '/images/hero-2.png',
          paragraphs: [
            'Minneriya Jeep Safari is one of the most popular activities for travelers who want to see elephants in their natural habitat.',
            'Suggested safari times are 5.30am to 8.30am in the morning or 3.00pm to 6.00pm in the afternoon before returning to the hotel.',
          ],
        },
      ]}
      bookingIntro="Venom Holidays (Pvt) Ltd. can arrange the excursion, transport, and local support for the day."
      catalogSlug="excursion-polonnaruwa"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
