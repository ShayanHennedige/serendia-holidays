import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Sigiriya Excursion from Kandy - Serendia Holidays By Venom',
  description: 'Full-day Sigiriya excursion from Kandy with a Matale spice garden and afternoon Lion Rock climb.',
};

export default function SigiriyaFromKandyExcursionPage() {
  return (
    <TripDetailPage
      title="Sigiriya Excursion from Kandy"
      subtitle="Full Day"
      heroImage="/images/excursion-sigiriya.webp"
      heroNote="Travel through Matale’s spice country before an afternoon climb of Sri Lanka’s iconic Lion Rock fortress."
      facts={[
        { label: 'Duration', value: 'Full Day' },
        { label: 'Excursion', value: 'Sigiriya from Kandy' },
        { label: 'Distance', value: '100km (one way)' },
        { label: 'Depart', value: '8.30am', note: 'Approximately 2.5 hours to Sigiriya' },
      ]}
      sections={[
        {
          title: 'Matale Spice Garden',
          image: '/images/excursion-sigiriya.webp',
          paragraphs: [
            'Pause in Matale to discover the fragrant plants behind Sri Lanka’s culinary traditions. A guided garden visit introduces familiar spices, their cultivation and their traditional uses.',
            'Continue to Sigiriya for lunch at your own arrangement and time to prepare for the climb.',
          ],
        },
        {
          title: 'Climb Sigiriya Lion Rock',
          image: '/images/excursion-sigiriya.webp',
          paragraphs: [
            'Sigiriya rose to prominence in the fifth century as the royal citadel of King Kashyapa. Its water gardens, monumental lion gateway, mirror wall, frescoes and summit ruins form one of Sri Lanka’s defining UNESCO World Heritage experiences.',
            'The source itinerary schedules the climb at around 3.00pm and allows approximately two hours. Return to Kandy in the late evening after the descent.',
          ],
        },
      ]}
      bookingIntro="The climb involves many steps; tell us about mobility requirements so we can advise on pacing and alternatives."
      catalogSlug="excursion-sigiriya"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
