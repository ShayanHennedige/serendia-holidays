import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Colombo Excursion - Serendia Holidays By Venom',
  description: 'Half-day Colombo excursion covering Pettah, the National Museum, civic landmarks and the Lotus Tower.',
};

export default function ColomboExcursionPage() {
  return (
    <TripDetailPage
      title="Colombo Excursion"
      subtitle="Half Day"
      heroImage="/images/excursion-colombo.webp"
      heroNote="A compact introduction to Colombo’s markets, heritage buildings, museums and modern skyline."
      facts={[
        { label: 'Duration', value: 'Half Day' },
        { label: 'Excursion', value: 'Colombo City Excursion' },
        { label: 'Distance', value: 'Approximately 50km' },
        { label: 'Route', value: 'Private city circuit', note: 'Timing can be adapted to hotel and traffic conditions' },
      ]}
      sections={[
        {
          title: 'Old Colombo & Pettah',
          image: '/images/excursion-colombo.webp',
          paragraphs: [
            'Colombo combines commercial energy with layers of colonial, religious and civic history. The route moves through Pettah’s market streets and selected landmarks that show the city’s blend of East and West, past and present.',
            'Depending on opening hours and your interests, stops can include Buddhist and Hindu temples, historic churches and the Old Parliament area.',
          ],
        },
        {
          title: 'Museums & Modern Landmarks',
          image: '/images/excursion-colombo.webp',
          paragraphs: [
            'Continue through the National Museum area and past Nelum Pokuna theatre before seeing the modern administrative district and Colombo’s evolving skyline.',
            'The Lotus Tower provides the city’s most recognizable contemporary landmark. The excursion concludes with a return to your Colombo hotel.',
          ],
        },
      ]}
      bookingIntro="Choose a morning or afternoon departure and we will shape the circuit around the places you most want to see."
      catalogSlug="excursion-colombo"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
