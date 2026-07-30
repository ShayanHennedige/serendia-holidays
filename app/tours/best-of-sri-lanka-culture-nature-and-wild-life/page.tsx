import TripDetailPage from '../../components/TripDetailPage';

export const metadata = {
  title: 'Best of Sri Lanka Culture, Nature and Wild Life - Serendia Holidays By Venom',
  description: 'Eight nights and nine days around Sri Lanka with culture, wildlife, and coast.',
};

export default function BestOfSriLankaTourPage() {
  return (
    <TripDetailPage
      title="Best of Sri Lanka Culture, Nature and Wild Life"
      subtitle="8 Nights / 9 Days"
      heroImage="/images/hero-4.png"
      heroNote="A flexible round trip combining culture, wildlife, tea country, and coast."
      facts={[
        { label: 'Duration', value: '8 Nights / 9 Days' },
        { label: 'Tour', value: 'Best of Sri Lanka Culture, Nature and Wild Life' },
        { label: 'Style', value: 'Private round trip' },
        { label: 'Price', value: 'On request' },
      ]}
      sections={[
        {
          title: 'Day 01: Airport - Colombo',
          image: '/images/hero-4.png',
          paragraphs: [
            'Arrival and transfer to Colombo for a first overnight stay that keeps the opening day easy and flexible.',
            'The itinerary can be adapted to flight timing, preferred hotel class, and the pace you want for the rest of the circuit.',
          ],
        },
        {
          title: 'Day 03: Sigiriya - Polonnaruwa',
          image: '/images/tour-polonnaruwa.png',
          paragraphs: [
            "This cultural stretch focuses on Sri Lanka's heritage triangle with time for ancient cities, rock fortresses, and well known archaeological sites.",
            'Wildlife and nature are woven into the route so the holiday feels like a single, connected journey instead of disconnected stops.',
          ],
        },
        {
          title: 'Day 05: Kandy - Nuwara Eliya',
          image: '/images/hero-1.png',
          paragraphs: [
            'The trip then climbs into tea country, where cooler air, hill stations, and scenic train or road views shift the rhythm of the holiday.',
            'Nuwara Eliya gives the tour a softer pace before the southern wildlife and beach portions begin.',
          ],
        },
        {
          title: 'Day 07: Yala - Galle - Bentota',
          image: '/images/hero-3.png',
          paragraphs: [
            'The route finishes with a blend of safari and coast, moving from the national park through the south to the beach belt.',
            'Because the itinerary is private, the stop order and overnight points can be adjusted around your interests and travel dates.',
          ],
        },
      ]}
      bookingIntro="Tell us your preferred travel month and hotel category, and we can shape the full circuit around your plan."
      catalogSlug="tour-best-of-sri-lanka"
      bookingLines={[
        '63A, Old Road, Pannipitiya, Sri Lanka',
        'WhatsApp/Call: +94 77 398 6504',
        'Email: dharshan@venomholidays.com',
      ]}
    />
  );
}
