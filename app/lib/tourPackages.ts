/**
 * Tour Packages — single source of truth for /tour-packages and its detail pages.
 *
 * Content comes from the "Program 1–4" operations sheet. Experiences and hotels are
 * defined once and referenced by id so the same excursion never drifts between packages.
 */

export interface Experience {
  name: string;
  location: string;
  /** true = "Included in price", false = "Optional" */
  included: boolean;
  /** one-paragraph teaser used on the highlights cards */
  summary: string;
  /** full write-up shown in the day-by-day itinerary */
  detail: string[];
  /** short bulleted facts (duration, timing, departures…) */
  facts: string[];
  goodToKnow?: string;
  image: string;
}

export interface Hotel {
  name: string;
  location: string;
  /** true = "Included in price", false = "Optional" upgrade */
  included: boolean;
  description: string;
}

export interface Stop {
  /** anchor id, used by "Jump to itinerary" links */
  id: string;
  /** "Day" or "Days" */
  dayLabel: string;
  /** "1 to 3", "6", "13 to 14" */
  dayRange: string;
  location: string;
  /** small qualifier under the location, e.g. "(for Minneriya)" */
  subLabel?: string;
  intro: string;
  image: string;
  experiences: string[];
  hotels: Hotel[];
}

/** Route-map coordinates, keyed by Stop.location. */
export const placeCoords: Record<string, [number, number]> = {
  'Negombo': [79.8380, 7.2086],
  'Sigiriya': [80.7603, 7.9570],
  'Kandy': [80.6337, 7.2906],
  'Nuwara Eliya': [80.7829, 6.9497],
  'Ella': [81.0462, 6.8667],
  'Yala': [81.5000, 6.3700],
  'Bentota': [79.9959, 6.4258],
  'Departure': [79.8841, 7.1808],
};

export interface Extension {
  title: string;
  description: string;
  image: string;
  price: string;
}

export interface TourPackage {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  nights: number;
  days: number;
  heroImage: string;
  /** [small top, small bottom, large] — the hero mosaic */
  heroMosaic: [string, string, string];
  cardImage: string;
  intro: string;
  cardSummary: string;
  tourType: string;
  visiting: string[];
  bestFor: string[];
  priceFrom: string;
  priceBasis: string;
  period: string;
  extensionPrice: string;
  stops: Stop[];
  extensions: Extension[];
}

const IMG = '/images/packages';

/* ------------------------------------------------------------------ *
 * Experiences
 * ------------------------------------------------------------------ */

export const experiences: Record<string, Experience> = {
  'polonnaruwa': {
    name: 'Ancient City of Polonnaruwa',
    location: 'Cultural Triangle',
    included: true,
    summary:
      'Sri Lanka’s second capital is the best-preserved of the island’s ruined cities — a compact, walkable sweep of royal palaces, bathing pools and colossal rock-cut Buddhas left behind by the 12th-century kings.',
    detail: [
      'Polonnaruwa is the one ancient city you can read like a map. Where Anuradhapura sprawls, Polonnaruwa is gathered into a single garden-like archaeological park you can cover in a morning, and almost everything still stands: the brick shell of King Parakramabahu’s seven-storey palace, the Quadrangle with its circular Vatadage, the Lankatilaka image house with walls rising 17 metres either side of a headless Buddha.',
      'The finale is Gal Vihara, four enormous figures carved straight out of one granite face — a seated Buddha in meditation, a standing figure with arms folded, and a 14-metre reclining Buddha whose stone was worked so finely you can still see the dip of the pillow under his head. Your chauffeur guide will talk you through the reign that built all of this, and why the city was abandoned to the jungle barely a century later.',
    ],
    facts: [
      'Duration: half day',
      'Best in the cool of the morning',
      'Daily departures, year round',
      'Private experience with your chauffeur guide',
      'UNESCO World Heritage Site entrance included',
    ],
    goodToKnow:
      'The site is spread out and largely unshaded — bring a hat and water. Shoulders and knees must be covered at the temple sites, and shoes are removed at Gal Vihara.',
    image: `${IMG}/polonnaruwa.jpg`,
  },

  'minneriya': {
    name: 'Minneriya National Park Jeep Safari',
    location: 'Cultural Triangle',
    included: true,
    summary:
      'Late afternoon in the dry season draws hundreds of wild elephants onto the grasslands of a receding reservoir — the largest gathering of Asian elephants anywhere on earth.',
    detail: [
      'When the Minneriya tank shrinks back in the dry months it leaves a plain of fresh grass behind it, and the elephants come. They arrive in family groups through the late afternoon until, at the peak of The Gathering between July and September, three hundred or more animals can be on the same stretch of shoreline at once — calves included.',
      'You will set out by open 4x4 with a tracker who knows where the herds have been feeding. Beyond the elephants the park holds sambar and spotted deer, wild buffalo, toque macaques, painted storks and, for the patient, the occasional leopard on the treeline.',
    ],
    facts: [
      'Duration: half day',
      'Time: 3pm to 6pm',
      'Daily departures, operates year round',
      'Private 4x4 jeep with tracker',
      'Park entrance and jeep hire included',
    ],
    goodToKnow:
      'Depending on where the herds have moved, your tracker may take you to neighbouring Kaudulla or Hurulu Eco Park instead — the elephants rotate between all three and we always follow the animals.',
    image: `${IMG}/minneriya-elephants.jpg`,
  },

  'sigiriya-rock': {
    name: 'Sigiriya Rock Fortress',
    location: 'Sigiriya',
    included: true,
    summary:
      'A sheer granite plug rising 200 metres out of flat jungle, topped by the ruins of a fifth-century sky palace and reached by a staircase that passes between the paws of a vanished stone lion.',
    detail: [
      'King Kashyapa built his capital on top of a rock because he had murdered his father for the throne and expected his brother to come for him. What he left is one of the earliest surviving examples of landscape urban planning anywhere: symmetrical water gardens at the base, boulder gardens above them, and a palace complex on a five-acre summit with cisterns cut into the living rock.',
      'The climb runs about 1,200 steps. Halfway up, a spiral stair doubles back to a sheltered pocket in the rock face where the famous frescoes of bare-breasted court women have kept their colour for fifteen hundred years. Past them runs the Mirror Wall, once polished to a shine and now covered in graffiti left by visitors from the eighth century onwards. At the top, the whole Cultural Triangle opens out below you.',
    ],
    facts: [
      'Duration: half day',
      'Around 1,200 steps to the summit',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'Entrance and on-site museum included',
    ],
    goodToKnow:
      'Go first thing in the morning or after 4pm — the rock holds the heat and the staircases get crowded in the middle of the day. A reasonable level of fitness is needed. Pidurangala, the rock opposite, is the easier alternative and gives you the classic view of Sigiriya itself.',
    image: `${IMG}/sigiriya-rock.jpg`,
  },

  'anuradhapura': {
    name: 'Sacred City of Anuradhapura',
    location: 'Anuradhapura',
    included: true,
    summary:
      'The island’s first capital and still a living pilgrimage site — brick stupas the size of small hills, monastery ruins under the trees, and a fig tree grown from a cutting taken in 288 BC.',
    detail: [
      'Anuradhapura ran the island for more than a thousand years, and what survives is on a scale nothing else in Sri Lanka matches. Abhayagiri and Jetavanaramaya were among the tallest structures in the ancient world after the pyramids at Giza; even half-ruined they still rise above the treetops. Between them lie bathing tanks, moonstones, guardstones and the refectories of monasteries that housed thousands of monks.',
      'The heart of it is the Sri Maha Bodhi, grown from a cutting of the tree the Buddha sat beneath, carried here by the nun Sanghamitta and planted in 288 BC. It is the oldest human-planted tree in the world with a recorded planting date, and it is still tended, still garlanded, still surrounded by white-clad pilgrims every day of the year.',
    ],
    facts: [
      'Duration: half day',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'UNESCO World Heritage Site entrance included',
      'Covered by the Cultural Triangle ticket',
    ],
    goodToKnow:
      'This is an active place of worship, not just a ruin. White or light clothing covering shoulders and knees is expected, and shoes and hats come off at the Bodhi tree and the stupa platforms — the paving gets hot, so socks are worth packing.',
    image: `${IMG}/anuradhapura.jpg`,
  },

  'hot-air-balloon': {
    name: 'Hot Air Balloon over the Cultural Triangle',
    location: 'Sigiriya',
    included: false,
    summary:
      'Lift off before dawn and drift over paddy fields, tank reservoirs and jungle with Sigiriya Rock catching the first light — landing to a glass of sparkling wine.',
    detail: [
      'You will be collected in the dark and driven to the launch field to watch the envelope inflate. The flight lasts around an hour, floating low over villages waking up, water buffalo in the tanks, and the forest canopy, with the Cultural Triangle’s rock outcrops breaking through the mist as the sun comes up.',
      'Where you land depends entirely on the wind, which is part of the appeal — the ground crew follow you and are waiting when you touch down, with a toast of sparkling wine or fruit juice and a flight certificate.',
    ],
    facts: [
      'Duration: approximately 1½ hours in the air',
      'Time: 5.30am to 7am',
      'Operates between November and April only',
      'Weather dependent — subject to morning conditions',
      'Supplement applies, payable locally or added to your quote',
    ],
    goodToKnow:
      'Not suitable for children under 16, pregnant travellers, or anyone with a heart condition. Flights are cancelled and refunded if the wind is wrong, which does happen.',
    image: `${IMG}/paddy-fields.jpg`,
  },

  'dambulla': {
    name: 'Dambulla Golden Cave Temple',
    location: 'Dambulla',
    included: true,
    summary:
      'Five caves hollowed into the side of a rock, filled with 150 Buddha statues and painted from floor to ceiling — the largest and best-preserved cave temple complex in Sri Lanka.',
    detail: [
      'A short climb up the rock face brings you to a terrace and, behind it, five caves that have been in continuous religious use for twenty-two centuries. King Valagamba sheltered here in exile in the first century BC and turned the caves into a temple when he won his kingdom back.',
      'Inside, the rock ceilings curve down to meet the walls and every surface is painted — swirling murals of the Buddha’s life that follow the natural contours of the stone. There are 150 statues in all, including a 14-metre reclining Buddha carved out of the rock wall itself, and a spring that drips from the ceiling into a pot and has never been known to run dry.',
    ],
    facts: [
      'Duration: 2 to 3 hours',
      'Around 350 steps up to the cave terrace',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'UNESCO World Heritage Site entrance included',
    ],
    goodToKnow:
      'Shoulders and knees covered, shoes off at the terrace. The stone paving is hot by mid-morning — take socks. Monkeys on the staircase will take anything loose in your hands.',
    image: `${IMG}/dambulla-temple.jpg`,
  },

  'spice-garden': {
    name: 'Matale Spice Garden',
    location: 'Matale',
    included: true,
    summary:
      'Walk a working spice garden in the hills above Matale, where Ceylon cinnamon, cardamom, pepper and vanilla grow side by side — and learn what each one actually looks like before it reaches a jar.',
    detail: [
      'Sri Lanka built its early fortunes on cinnamon, and Matale is still the centre of it. A guide walks you through the garden plant by plant — pepper vines climbing their host trees, cardamom low in the shade, nutmeg, clove, turmeric, vanilla orchids and the cinnamon itself, whose true bark is peeled and rolled by hand into the pale quills that distinguish Ceylon cinnamon from the coarser cassia sold as cinnamon elsewhere.',
      'There is usually a demonstration of bark peeling, a cup of spiced tea, and the chance to try a short herbal head-and-shoulder massage. The garden shop sells oils and balms; there is no obligation to buy anything.',
    ],
    facts: [
      'Duration: around 1 hour',
      'On the Dambulla to Kandy road',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'Complimentary spiced tea and demonstration',
    ],
    goodToKnow:
      'These gardens run a shop at the end of the tour. Prices are considerably higher than a local market and nothing is obligatory — browse, or walk straight past.',
    image: `${IMG}/spice-garden.jpg`,
  },

  'kandy-temple': {
    name: 'Temple of the Sacred Tooth Relic',
    location: 'Kandy',
    included: true,
    summary:
      'The most venerated Buddhist site in Sri Lanka, holding a tooth of the Buddha that has been a symbol of sovereignty for over a thousand years — best seen during the drumming of the evening puja.',
    detail: [
      'The tooth relic arrived in Sri Lanka in the fourth century, hidden in a princess’s hair, and whoever held it was understood to hold the right to rule the island. It has been fought over, moved, hidden and paraded ever since, and now sits inside a golden casket within the lakeside palace complex of Kandy’s last kings.',
      'Time your visit for one of the three daily pujas, when Kandyan drummers and horn players strike up outside the inner chamber and the doors are opened so that the queue of pilgrims — lotus flowers in hand — can file past the casket. You will not see the tooth itself, which only leaves its reliquary in exceptional years, but the atmosphere is the point.',
    ],
    facts: [
      'Duration: around 2 hours',
      'Evening puja typically begins at 6.30pm',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'UNESCO World Heritage Site entrance included',
    ],
    goodToKnow:
      'Strict dress code: white or light clothing, shoulders and knees covered, shoes removed and left at the entrance. Security screening applies at the gate, so travel light.',
    image: `${IMG}/kandy-temple.jpg`,
  },

  'kandyan-dance': {
    name: 'Kandyan Cultural Dance Show',
    location: 'Kandy',
    included: false,
    summary:
      'An hour of drumming, masked dance and fire walking in the hill capital — the ritual dance forms of the Kandyan kingdom performed nightly in the town centre.',
    detail: [
      'The Kandyan dance traditions grew out of temple ritual, and the evening performance moves through the main forms in turn: the Ves dancers in their silver headdresses, the peacock and harvest dances, the acrobatic Raban plate-spinning, and the masked Kolam.',
      'It closes outside in the courtyard with fire dancing and fire walking — performers crossing a bed of hot coals in bare feet. It is unapologetically a show for visitors, and it is also the easiest way to see these dances at all outside of the August Esala Perahera.',
    ],
    facts: [
      'Duration: around 1 hour',
      'Time: performances begin at 5pm',
      'Daily, in Kandy town',
      'Supplement applies',
      'Seats are unreserved — arrive early for the front rows',
    ],
    goodToKnow:
      'The fire walking happens outdoors at the end, so the crowd moves. The hall gets warm and is not air conditioned.',
    image: `${IMG}/kandyan-dance.jpg`,
  },

  'botanical-garden': {
    name: 'Royal Botanical Gardens, Peradeniya',
    location: 'Kandy',
    included: true,
    summary:
      'Sixty hectares in a loop of the Mahaweli river, laid out as a royal pleasure garden and now holding four thousand species, an avenue of royal palms and a Javan fig with a canopy the size of a tennis court.',
    detail: [
      'These were the gardens of Kandyan royalty long before the British formalised them in 1821, and they are still the finest in South Asia. The set pieces are worth walking to: the Great Lawn with its vast Javan fig tree, the double avenue of royal palms, the suspension bridge over the river, and the orchid house with several hundred varieties in flower at any time.',
      'The spice and medicinal plant sections tie back to everything you will have seen at Matale, and the memorial trees — planted by visiting heads of state over two centuries — are a quiet record of the island’s diplomatic history.',
    ],
    facts: [
      'Duration: 2 to 3 hours',
      '5km west of Kandy town',
      'Daily departures, open 7.30am to 5pm',
      'Private experience with your chauffeur guide',
      'Entrance included',
    ],
    goodToKnow:
      'It is a lot of walking on open lawn. Mornings are cooler and the orchid house is quieter before the coach parties arrive. Flying foxes roost in the tall trees near the river — look up.',
    image: `${IMG}/botanical-garden.jpg`,
  },

  'kandy-city': {
    name: 'Kandy City Tour',
    location: 'Kandy',
    included: true,
    summary:
      'The hill capital at its own pace: the lake, the covered market, a gem workshop, and the viewpoint above town where the whole bowl of Kandy opens up at dusk.',
    detail: [
      'Kandy held out against European powers for three centuries after the coast had fallen, and it still feels like a separate country — cooler, greener, prouder. The tour takes in the artificial lake built by the last king, the arcaded colonial-era market with its fruit and spice stalls, and the workshops where Sri Lankan sapphires and moonstones are cut.',
      'You will finish at the Bahirawakanda viewpoint or the Arthur’s Seat lookout, where the town sits in its ring of hills with the temple roofs and the lake below — the best photograph of the day, and best taken in the late afternoon.',
    ],
    facts: [
      'Duration: half day',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'Gem museum and market visits included',
      'Best paired with the evening temple puja',
    ],
    goodToKnow:
      'Kandy’s one-way system is slow at rush hour. Gem and batik workshops work on commission — treat them as demonstrations and buy only if you want to.',
    image: `${IMG}/kandy-city.jpg`,
  },

  'tea-factory': {
    name: 'Tea Factory & Plantation Visit',
    location: 'Hill Country',
    included: true,
    summary:
      'Follow the leaf from the hillside to the cup inside a working highland factory — withering lofts, rolling machines, the firing ovens and a tasting of the grades you will never see exported.',
    detail: [
      'The road up into tea country climbs through terraces of clipped green bushes, with pluckers working the rows and the factory chimney somewhere above. Most of these buildings are Victorian and most of the machinery is not much younger — the process has barely changed.',
      'You will walk it in order: the withering troughs where the leaf loses moisture overnight, the rollers that break the cells open, the oxidation beds where the leaf turns from green to copper, the firing ovens and finally the sorting mesh that separates the grades. It ends with a tasting, and a chance to buy the single-estate grades that mostly stay on the island.',
    ],
    facts: [
      'Duration: 1 to 2 hours',
      'Daily departures, Monday to Saturday',
      'Private experience with your chauffeur guide',
      'Factory tour and tasting included',
      'Working factory — processing runs to the plucking season',
    ],
    goodToKnow:
      'Factories do not process on Sundays or poya (full moon) days, so the machinery may be still. Photography is restricted on some factory floors.',
    image: `${IMG}/tea-factory.jpg`,
  },

  'nuwara-eliya-city': {
    name: 'Nuwara Eliya City Tour',
    location: 'Nuwara Eliya',
    included: true,
    summary:
      'Sri Lanka’s improbable hill station — mock-Tudor bungalows, a racecourse, a colonial post office and a boating lake, all at 1,900 metres in the middle of the tropics.',
    detail: [
      'The British built Nuwara Eliya to feel like home and never quite stopped: there is a Victoria Park, a golf course, a Hill Club with a dress code, and a red brick post office with a clock tower that would not look out of place in Surrey. Locals call it Little England and mean it affectionately.',
      'The morning takes in Gregory Lake, the park in flower, the town’s old bungalows and the market, with a stop for tea and scones if you want the full effect. At this altitude the air is genuinely cold after dark — a surprise if you have come up from the coast.',
    ],
    facts: [
      'Duration: half day',
      'Altitude 1,868 metres',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'Victoria Park and Gregory Lake entrances included',
    ],
    goodToKnow:
      'Pack a fleece or jacket — evening temperatures drop to around 10°C and most hotels here have no air conditioning because none is needed.',
    image: `${IMG}/nuwara-eliya.jpg`,
  },

  'sita-amman': {
    name: 'Seetha Amman Temple',
    location: 'Nuwara Eliya',
    included: true,
    summary:
      'A brightly painted Hindu temple beside a mountain stream, held to be the spot where Sita was kept captive by Ravana in the Ramayana — with footprint-shaped hollows in the rock to prove it.',
    detail: [
      'The temple sits at Seetha Eliya, in the pine forest a few kilometres out of Nuwara Eliya, and is one of the key stations on the Ramayana trail that draws Indian pilgrims to Sri Lanka. The gopuram is covered in the usual crowd of painted figures; inside are shrines to Sita, Rama, Lakshmana and Hanuman.',
      'On the rock in the streambed opposite are circular depressions that devotees identify as Hanuman’s footprints, and the ground on that bank is a different colour from the rest — scorched, the story goes, when he set the place alight. Believe it or not, it is a lovely spot, cold and green with the water running through it.',
    ],
    facts: [
      'Duration: around 45 minutes',
      'On the Nuwara Eliya to Ella road',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'A short, easy stop — no climbing involved',
    ],
    goodToKnow:
      'Shoes are removed at the entrance and there is a small donation box rather than a ticket. Modest dress applies.',
    image: `${IMG}/sita-amman.jpg`,
  },

  'hill-train': {
    name: 'Scenic Hill Country Train',
    location: 'Hill Country',
    included: false,
    summary:
      'The Nanu Oya to Ella line is routinely called one of the world’s great rail journeys — three or four hours through tea terraces, tunnels and cloud forest with the doors wide open.',
    detail: [
      'The track was laid to move tea, and it takes the scenic route because that is where the estates are. You climb out of Nanu Oya through Haputale and Bandarawela, the carriages leaning into curves above valleys of clipped green, with waterfalls, eucalyptus and the occasional station where nothing much happens.',
      'Half the pleasure is the carriage itself: windows down, doors open, tea and vadai sold up and down the aisle. Your chauffeur meets you at the far end with the luggage, so you travel with nothing but a camera.',
    ],
    facts: [
      'Duration: 3 to 4 hours on the train',
      'Nanu Oya to Ella, or Ella to Haputale for a shorter run',
      'Reserved seating subject to availability',
      'Supplement applies',
      'Your vehicle and luggage meet you at the destination',
    ],
    goodToKnow:
      'Reserved first and second class seats sell out weeks ahead, particularly December to March — tell us early if you want this and we will book it with your itinerary.',
    image: `${IMG}/hill-country-train.jpg`,
  },

  'ella-city': {
    name: 'Ella Town & Nine Arch Bridge',
    location: 'Ella',
    included: true,
    summary:
      'A hill town that has become the island’s favourite place to do nothing — plus the Nine Arch Bridge, a colonial-era viaduct curving out of the jungle on nine stone spans.',
    detail: [
      'Ella is a single street of cafés and guesthouses in a notch between two mountains, and the reason everybody stops here is the view down Ella Gap, which on a clear morning runs all the way to the southern plains.',
      'The Nine Arch Bridge is a short walk out through tea gardens and jungle. Built in 1921 without a single piece of steel — the story is that the war had taken it all — it curves across a ravine on nine brick and stone arches with the forest closing in on both sides. Check the timetable with your guide and be standing there when a train comes over.',
    ],
    facts: [
      'Duration: half day',
      'Short walk through tea gardens to the bridge',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'Ravana Falls and Ella Gap viewpoints included',
    ],
    goodToKnow:
      'The walk to the bridge is on uneven ground and along a live railway track in places — sensible shoes, and keep to the guide’s instructions when a train is due.',
    image: `${IMG}/nine-arch-bridge.jpg`,
  },

  'little-adams': {
    name: 'Little Adam’s Peak Hike',
    location: 'Ella',
    included: false,
    summary:
      'A gentle 45-minute walk up through tea estates to a ridge with a 360-degree view over Ella Gap — the best sunrise in the hill country for the least effort.',
    detail: [
      'Unlike its full-sized namesake, Little Adam’s Peak asks very little of you: a path through tea bushes, a set of steps near the top, and then a grassy ridge at 1,141 metres with the land dropping away on three sides.',
      'Go at first light. The valley below fills with mist, Ella Rock stands opposite and the sun comes up over the plains. Most mornings you will share it with a handful of other people and a lot of birdsong.',
    ],
    facts: [
      'Duration: around 2 hours return',
      'Best at sunrise, from around 5.30am',
      'Moderate — an ascent of roughly 200 metres',
      'Self-guided, or with a local walking guide on request',
      'No entrance fee',
    ],
    goodToKnow:
      'The path is clay and gets slippery after rain. Trainers are fine in dry weather; the last section is steps.',
    image: `${IMG}/ella-gap.jpg`,
  },

  'ravana-falls': {
    name: 'Ravana Falls',
    location: 'Ella',
    included: true,
    summary:
      'A 25-metre cascade tumbling in stages down a rock face right beside the Ella–Wellawaya road, at its most dramatic in the months after the monsoon.',
    detail: [
      'The falls take their name from the Ramayana — the cave behind them is said to be where King Ravana hid Sita — and they arrive without warning on the descent out of Ella, the road curving round and the whole cascade simply there in front of you.',
      'The water drops in stages through jungle and boulders into a pool at the bottom. There is a viewing area at road level, with steps down towards the pool for anyone who wants to get closer, and stalls selling king coconut and fruit.',
    ],
    facts: [
      'Duration: around 30 minutes',
      'Roadside stop, 6km from Ella',
      'Fullest between November and February',
      'Private experience with your chauffeur guide',
      'No entrance fee',
    ],
    goodToKnow:
      'The rocks around the pool are slick and the current is stronger than it looks — drownings do happen here. Admire it from the viewing area rather than swimming.',
    image: `${IMG}/ravana-falls.jpg`,
  },

  'kataragama': {
    name: 'Kataragama & Kiri Vehera',
    location: 'Kataragama',
    included: true,
    summary:
      'One of the few places on earth sacred to Buddhists, Hindus and Muslims alike — an evening of drums, oil lamps and offerings at the shrine of the god Kataragama, beside a brilliant white stupa.',
    detail: [
      'Kataragama has been a pilgrimage town for two thousand years and it belongs to everybody: Buddhists come for the Kiri Vehera stupa, Hindus for the Maha Devale shrine to Murugan, Muslims for the mosque in the same compound, and Vedda elders still have a role in the annual festival.',
      'Come for the evening puja. Pilgrims cross the Menik Ganga to wash before entering, then carry trays of fruit and flowers through the sand-floored compound to the accompaniment of drums, with oil lamps lighting up as the dark comes down. Next door the Kiri Vehera stupa — built, by tradition, in the second century BC — glows white above the trees.',
    ],
    facts: [
      'Duration: 2 to 3 hours',
      'Evening puja around 6.30pm',
      'Daily, on the road between Ella and Yala',
      'Private experience with your chauffeur guide',
      'No entrance fee — offerings available to buy at the gate',
    ],
    goodToKnow:
      'Shoes come off well before the shrine and the sand stays warm into the evening. Dress modestly in white or light colours. This is a working pilgrimage site, so be discreet with cameras.',
    image: `${IMG}/kataragama.jpg`,
  },

  'yala-safari': {
    name: 'Yala National Park Jeep Safari',
    location: 'Yala',
    included: true,
    summary:
      'Sri Lanka’s flagship reserve holds one of the densest leopard populations in the world, along with sloth bears, elephants and crocodiles — and the only safari on the island that ends at the sea.',
    detail: [
      'Block 1 of Yala is the leopard capital of the world by density, and the cats here are unusually relaxed about vehicles, which is why sightings are so much better than the numbers alone would suggest. Beyond leopards the park runs to sloth bears — best chances in June and July when the palu fruit ripens — elephants, wild buffalo, spotted deer, mugger crocodiles in the waterholes and over two hundred bird species.',
      'You will go out in a private open 4x4 with a tracker, starting at first light when the animals are still moving. The landscape itself is half the pleasure: scrub jungle opening into lagoons, monsoon forest, granite outcrops, and the Indian Ocean breaking on an empty beach at Patanangala.',
    ],
    facts: [
      'Duration: full day, or half day at dawn or dusk',
      'Time: from 5.30am, or 2pm to 6pm',
      'Daily departures — park closed each September for drought',
      'Private 4x4 jeep with tracker',
      'Park entrance, jeep and tracker included',
    ],
    goodToKnow:
      'The park is dusty and the tracks are rough. Bring a scarf, sunglasses and binoculars, and go for the dawn start if you can — the light is better and the animals are more active before the heat.',
    image: `${IMG}/yala-leopard.jpg`,
  },

  'galle-fort': {
    name: 'Galle Fort',
    location: 'Galle',
    included: true,
    summary:
      'A walled Dutch trading town on a headland in the Indian Ocean, still lived in, still walkable in an hour — coral-stone ramparts, a lighthouse, and streets of colonnaded villas now full of galleries and cafés.',
    detail: [
      'The Portuguese fortified the headland, the Dutch rebuilt it properly in 1663, and the British simply moved in. What survives is the best-preserved European-built fortification in Asia and, unusually, a working neighbourhood rather than a museum — people live behind those doors.',
      'Walk the ramparts first, all the way round, with the ocean on three sides. Then drop into the grid: the Dutch Reformed Church with its gravestone floor, the Meeran Jumma Mosque facing the lighthouse, the Maritime Museum in an old warehouse, and the shaded streets of Pedlar’s and Church, where the old merchant houses have become boutiques, bookshops and places to sit with a coffee.',
    ],
    facts: [
      'Duration: half day',
      'Daily — ramparts best at sunset',
      'Private experience with your chauffeur guide',
      'UNESCO World Heritage Site — no entrance fee to the fort',
      'Walking tour on flat, cobbled streets',
    ],
    goodToKnow:
      'Very little shade inside the walls in the middle of the day. Late afternoon into sunset on the ramparts is the time to be there.',
    image: `${IMG}/galle-fort.jpg`,
  },

  'madu-river': {
    name: 'Madu River Boat Safari',
    location: 'Balapitiya',
    included: true,
    summary:
      'A wetland of 64 islands and dense mangrove tunnels behind the coast, explored by motorboat — cinnamon smallholdings, an island temple, monitor lizards and kingfishers.',
    detail: [
      'The Madu Ganga estuary is a protected Ramsar wetland and one of the last stretches of undisturbed mangrove forest in Sri Lanka. The boat takes you out across the open lagoon, then noses into channels so narrow the mangrove roots close overhead and the engine has to be cut.',
      'Stops usually include Kothduwa, a small forested island with a Buddhist temple on it, and a family-run cinnamon plot where they will show you the bark being peeled and rolled by hand. Keep an eye on the branches: water monitors, kingfishers, cormorants and, in the early morning, troops of macaques.',
    ],
    facts: [
      'Duration: around 2 hours',
      'Departs from Balapitiya, 20 minutes from Bentota',
      'Daily departures — mornings are calmest',
      'Private boat',
      'Boat hire and island stops included',
    ],
    goodToKnow:
      'Some operators run "fish therapy" tanks and keep captive animals for photographs. Ours does not, and we would ask you not to support the ones that do.',
    image: `${IMG}/madu-river.jpg`,
  },

  'turtle-hatchery': {
    name: 'Kosgoda Turtle Hatchery',
    location: 'Kosgoda',
    included: true,
    summary:
      'A conservation hatchery on the beach where eggs bought back from poachers are reburied, protected and the hatchlings released to the sea after dark.',
    detail: [
      'Five of the world’s seven sea turtle species nest on this stretch of coast, and all five are threatened. The hatcheries at Kosgoda buy nests from people who would otherwise sell the eggs, rebury them in protected sand, and release the hatchlings at dusk when the gulls have gone.',
      'A guide will walk you through the tanks, which hold injured and albino adults that could not survive release, and explain the life cycle and the pressures on it. If you are here at the right hour in the evening you may be able to watch a release.',
    ],
    facts: [
      'Duration: around 45 minutes',
      'Best late afternoon, for the evening release',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'Entrance donation included',
    ],
    goodToKnow:
      'Handling hatchlings is stressful for them and we discourage it, whatever you may be offered. A good hatchery releases within days of hatching rather than holding animals in tanks for photographs.',
    image: `${IMG}/sea-turtle.jpg`,
  },

  'stilt-fishermen': {
    name: 'Koggala Stilt Fishermen',
    location: 'Koggala',
    included: false,
    summary:
      'The single most photographed image of Sri Lanka — fishermen perched on crossbars driven into the seabed, working the shallows at dawn and dusk.',
    detail: [
      'Stilt fishing started during the Second World War, when food was short and the good rock positions were taken; men drove poles into the reef shelf and fished from above the water. The 2004 tsunami took most of the stilts and much of the catch, and today a good number of the men you see are performing as much as fishing.',
      'That does not make it less worth seeing at the right hour — low sun, silhouettes on the water, the southern coast behind them. Your guide will find a stretch where people still genuinely fish, and will agree a fee beforehand if you want to photograph closely.',
    ],
    facts: [
      'Duration: around 1 hour',
      'Dawn or the hour before sunset',
      'Along the Koggala to Weligama coast',
      'Private experience with your chauffeur guide',
      'Photography fee payable locally',
    ],
    goodToKnow:
      'Agree the fee before you take photographs, not after. Ask your chauffeur guide to handle it — he will know the going rate.',
    image: `${IMG}/stilt-fishermen.jpg`,
  },

  'bentota-watersports': {
    name: 'Bentota Water Sports',
    location: 'Bentota',
    included: false,
    summary:
      'The calm water where the Bentota river meets the sea makes this the island’s watersports centre — jet skis, banana boats, windsurfing, diving and deep-sea fishing.',
    detail: [
      'The sand spit at Bentota shelters a long stretch of flat water, which is why every watersport on the island seems to operate from here. Jet skis, tube rides and banana boats run on the river side; windsurfing and kitesurfing work better out front when the afternoon breeze picks up.',
      'From November to April the sea is clear enough for diving, with wrecks and reef off Beruwala, and deep-sea fishing charters run from the same beach. Everything can be arranged on the day through your hotel.',
    ],
    facts: [
      'Available November to April for diving',
      'River activities run year round',
      'Booked locally, by the hour or session',
      'Supplement applies, payable locally',
      'Equipment and instruction provided',
    ],
    goodToKnow:
      'Check that the operator provides life jackets and that your travel insurance covers motorised watersports — not all policies do.',
    image: `${IMG}/beach-surf.jpg`,
  },

  'colombo-city': {
    name: 'Colombo City Tour',
    location: 'Colombo',
    included: true,
    summary:
      'The commercial capital in half a day — the Pettah bazaar, a red-and-white striped mosque, colonial Fort, the Gangaramaya temple and sunset on Galle Face Green.',
    detail: [
      'Colombo is not a city that announces itself, which is exactly why it rewards a guide. You will start in Pettah, the old bazaar district, where whole streets sell one thing — ironmongery, textiles, dried fish — and the Red Mosque rises above it in candy-striped brickwork.',
      'From there: the colonial Fort quarter and the Old Dutch Hospital, now a courtyard of restaurants; Gangaramaya temple with its extraordinary hoard of donated objects; Independence Square; and the tree-lined avenues of Cinnamon Gardens. Finish on Galle Face Green at sunset, with the kite sellers and isso vadai carts and half of Colombo out for a walk.',
    ],
    facts: [
      'Duration: half day',
      'Daily departures',
      'Private experience with your chauffeur guide',
      'Temple entrance included',
      'Shopping stops on request',
    ],
    goodToKnow:
      'Traffic is heavy between 8–10am and 4–7pm, so the tour is routed around it. Pettah closes on Sundays and poya days.',
    image: `${IMG}/colombo.jpg`,
  },

  'negombo-lagoon': {
    name: 'Negombo Lagoon & Fish Market',
    location: 'Negombo',
    included: true,
    summary:
      'A Catholic fishing town twenty minutes from the airport — Dutch canals, outrigger oruwa boats coming in at dawn, and the biggest fish market on the west coast.',
    detail: [
      'Negombo has been a fishing and cinnamon port for centuries and it remains overwhelmingly Catholic, which is why there is a church at the end of almost every street and the boats have saints’ names painted on the bows.',
      'The Lellama fish market is the thing to see, and it happens early: outrigger canoes running in under sail, the catch spread out on the sand, tuna and seer fish auctioned in the crowd, and racks of fish drying in the sun further down the beach. The Dutch canal running through town is a quiet counterpoint, and the lagoon behind is full of prawn and crab fishermen working stake nets.',
    ],
    facts: [
      'Duration: 2 to 3 hours',
      'Market is at its best from 6am to 8am',
      'Daily except Sunday',
      'Private experience with your chauffeur guide',
      '20 minutes from Bandaranaike International Airport',
    ],
    goodToKnow:
      'The market is wet, crowded and pungent — not for everyone, and closed shoes are sensible. The lagoon boat trip is the gentler alternative.',
    image: `${IMG}/negombo.jpg`,
  },

  'kitulgala': {
    name: 'Kitulgala & the Kelani Valley',
    location: 'Kitulgala',
    included: true,
    summary:
      'The rainforest gorge where The Bridge on the River Kwai was filmed, and the best white-water rafting in Sri Lanka — five kilometres of grade 2 and 3 rapids through the jungle.',
    detail: [
      'The Kelani river runs fast and green through a gorge of wet-zone rainforest here, and the descent from the hill country to the coast passes straight through it. David Lean blew up his bridge on this stretch of water in 1957; the concrete footings are still in the riverbed and a guide will walk you down to them.',
      'For most people the draw is the rafting: around five kilometres and seven named rapids, grade 2 to 3, entirely manageable for a first-timer with a guide in the boat. If you would rather stay dry, the same forest is one of the best birdwatching sites in the wet zone, with a long list of endemics.',
    ],
    facts: [
      'Duration: rafting run takes around 2 hours',
      'On the Nuwara Eliya to Colombo road',
      'Rafting operates year round, best May to December',
      'Helmets, life jackets and guides provided',
      'Rafting is a local supplement — the stop itself is included',
    ],
    goodToKnow:
      'You will get soaked, so pack a dry change of clothes where you can reach it. Minimum age for rafting is usually 10, and you should be able to swim.',
    image: `${IMG}/kitulgala.jpg`,
  },
};

/* ------------------------------------------------------------------ *
 * Hotels
 * ------------------------------------------------------------------ */

const hotels = {
  sigiriya: [
    { name: 'Aliya Resort & Spa', location: 'Sigiriya', included: true, description: 'Low-slung villas around an infinity pool framed on Sigiriya Rock itself — the view from the water is the reason to stay here.' },
    { name: 'Cinnamon Lodge Habarana', location: 'Habarana', included: false, description: 'Twenty-seven acres of wildlife-filled gardens and lakeside chalets, right in the middle of the Cultural Triangle.' },
    { name: 'Hotel Kandalama', location: 'Dambulla', included: false, description: 'Geoffrey Bawa’s masterpiece, built into a cliff above a tank and now so overgrown the jungle has almost swallowed it.' },
  ],
  kandy: [
    { name: 'Earl’s Regency', location: 'Kandy', included: true, description: 'A colonial-style hotel in the Mahaweli valley outside town, with hill views from the pool terrace and a good spa.' },
    { name: 'Cinnamon Citadel', location: 'Kandy', included: false, description: 'Riverside rooms on the Mahaweli, ten minutes from the Temple of the Tooth and quiet at night.' },
    { name: 'The Grand Kandyan', location: 'Kandy', included: false, description: 'The largest hotel in the hill capital, walking distance from the lake and the temple.' },
  ],
  nuwaraEliya: [
    { name: 'The Tea Experience', location: 'Mandaramnuwara', included: true, description: 'A small estate hotel deep in a working tea valley outside Nuwara Eliya — the quiet, misty version of the hill country.' },
    { name: 'The Golden Ridge', location: 'Nuwara Eliya', included: false, description: 'On the ridge above town, with long views over the valley and easy access to Gregory Lake.' },
    { name: 'Horton Heights', location: 'Nuwara Eliya', included: false, description: 'A comfortable hillside base close to the racecourse and the golf course, handy for Horton Plains starts.' },
  ],
  ella: [
    { name: 'Newburgh Tea Factory', location: 'Ella', included: true, description: 'A converted tea factory on a working estate, with the original machinery kept in place and valley views from every room.' },
    { name: 'EKHO Ella', location: 'Ella', included: false, description: 'Perched right on the edge of Ella Gap, with the best sunrise balcony in town.' },
    { name: 'Onrock Ella', location: 'Ella', included: false, description: 'A contemporary hillside hotel with an infinity pool looking straight down the gap towards the plains.' },
  ],
  yala: [
    { name: 'Yala Safari Hotel', location: 'Yala', included: true, description: 'A straightforward, well-run base minutes from the park gate — early starts are easy from here.' },
    { name: 'Shangri-La Hambantota', location: 'Hambantota', included: false, description: 'A full resort on its own beach with a golf course, an hour from the park and the comfortable end of the safari.' },
    { name: 'Cinnamon Wild Yala', location: 'Yala', included: false, description: 'Chalets inside the buffer zone where elephants and wild boar genuinely do wander through — the closest you can sleep to the park.' },
  ],
  bentota: [
    { name: 'Sheraton Kosgoda Turtle Beach Resort', location: 'Bentota', included: true, description: 'A large beachfront resort on a turtle-nesting stretch of sand, with several pools and a long private beach.' },
    { name: 'Cinnamon Bay', location: 'Bentota', included: false, description: 'Directly on Bentota beach at the river mouth, a short walk from the watersports centre.' },
    { name: 'Eden Resort & Spa', location: 'Beruwala', included: false, description: 'A long-established beach hotel with a big pool and an Ayurveda spa, popular for longer beach stays.' },
  ],
  negombo: [
    { name: 'Jetwing Beach', location: 'Negombo', included: true, description: 'A design-led beach hotel twenty minutes from the airport — the best first or last night on the island.' },
    { name: 'Gold Sands', location: 'Negombo', included: false, description: 'A friendly, simpler beachfront option close to the fish market and the town.' },
    { name: 'Heritance Negombo', location: 'Negombo', included: false, description: 'A contemporary beachfront hotel with a rooftop pool and sunset views over the Indian Ocean.' },
  ],
} satisfies Record<string, Hotel[]>;

export { hotels };

/* ------------------------------------------------------------------ *
 * Packages
 * ------------------------------------------------------------------ */

const departureStop = (day: string, from: string): Stop => ({
  id: 'departure',
  dayLabel: 'Day',
  dayRange: day,
  location: 'Departure',
  subLabel: `(${from} to the airport)`,
  intro:
    'A last morning by the water, then your chauffeur guide collects you for the transfer to Bandaranaike International Airport, timed around your flight with a comfortable margin for the road. If you have a late departure we can arrange a day room, a final excursion or a lunch stop on the way rather than leaving you waiting at the terminal — just tell us and we will build it into the day.',
  image: `${IMG}/colombo.jpg`,
  experiences: [],
  hotels: [],
});

export const tourPackages: TourPackage[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: 'grand-tour-of-sri-lanka',
    name: 'Grand Tour of Sri Lanka',
    tagline:
      'The full sweep of the island in two unhurried weeks — ancient capitals, tea country, leopard country and a long beach finish.',
    badge: 'Suggested itinerary',
    nights: 14,
    days: 15,
    heroImage: `${IMG}/sigiriya-rock.jpg`,
    heroMosaic: [`${IMG}/minneriya-elephants.jpg`, `${IMG}/polonnaruwa.jpg`, `${IMG}/sigiriya-rock.jpg`],
    cardImage: `${IMG}/sigiriya-rock.jpg`,
    cardSummary:
      'Our most complete journey. Six bases, one chauffeur guide, and enough time in each place to stop checking the clock.',
    intro:
      'This is the itinerary we write for people who want to see all of it properly. You start in the Cultural Triangle with three nights in one hotel — enough to take Polonnaruwa, Sigiriya and Anuradhapura at a civilised pace instead of racing between them. Then the road climbs: Kandy for the Temple of the Tooth and the botanical gardens, Nuwara Eliya for tea and cold mornings, Ella for the Nine Arch Bridge and the view down the gap. From there you drop to the dry southeast for two nights at Yala, one of the best places on earth to see a wild leopard, before finishing with three full days on the beach at Bentota with nothing whatsoever in the diary. Fourteen nights, one vehicle and driver throughout, and no internal flights.',
    tourType: 'Suggested itinerary',
    visiting: ['Cultural Triangle', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle', 'Bentota'],
    bestFor: ['First-time visitors', 'Culture', 'Wildlife & 4x4 safari', 'Tea country', 'Beach finish', 'Honeymoon'],
    priceFrom: 'USD 2,300',
    priceBasis: 'per person, half board',
    period: '01 Nov 2026 – 30 Apr 2027',
    extensionPrice: 'USD 200 per room per night, half board',
    extensions: [
      {
        title: 'Option 1: More time at Bentota',
        description:
          'Three beach days go quickly. Add extra nights at the Sheraton Kosgoda Turtle Beach Resort — or at Cinnamon Bay or Eden Resort — on the same half-board basis, and keep the same room rather than moving.',
        image: `${IMG}/bentota-beach.jpg`,
        price: 'USD 200 per room per night, half board',
      },
      {
        title: 'Option 2: The Maldives',
        description:
          'Colombo to Malé is a ninety-minute hop, which makes the Maldives the natural second half of a Sri Lanka trip. We will pair your island resort with the tour and handle the connecting flights and transfers as one booking.',
        image: `${IMG}/bentota-beach.jpg`,
        price: 'Price on request',
      },
    ],
    stops: [
      {
        id: 'cultural-triangle',
        dayLabel: 'Days',
        dayRange: '1 to 3',
        location: 'Sigiriya',
        subLabel: '(for the Cultural Triangle)',
        intro:
          'You land at Bandaranaike International Airport and your chauffeur guide drives you inland — around four hours to Sigiriya, with the afternoon free to swim and reset. The next two days are the Cultural Triangle at its best, and staying put in one hotel for all three nights is what makes it work. Day two is Polonnaruwa in the cool of the morning, then an afternoon jeep safari at Minneriya where the elephants come down to the receding reservoir. Day three you climb Sigiriya Rock at first light, and spend the afternoon among the stupas and monastery ruins of Anuradhapura, the island’s first capital and still very much a living pilgrimage site.',
        image: `${IMG}/sigiriya-rock.jpg`,
        experiences: ['polonnaruwa', 'minneriya', 'sigiriya-rock', 'anuradhapura', 'hot-air-balloon'],
        hotels: hotels.sigiriya,
      },
      {
        id: 'kandy',
        dayLabel: 'Days',
        dayRange: '4 to 5',
        location: 'Kandy',
        intro:
          'The drive south to Kandy is a good one, and it comes with two stops built in: the Dambulla cave temple, five painted caves full of Buddha statues cut into a rock face, and a spice garden at Matale where cinnamon, cardamom and pepper grow in the same plot. You reach Kandy in time for the evening puja at the Temple of the Sacred Tooth Relic, when the drummers start up and the queue of pilgrims files past the casket. The following day is the hill capital properly — the Royal Botanical Gardens at Peradeniya in the morning, then the lake, the market and the viewpoint above town in the afternoon.',
        image: `${IMG}/kandy-temple.jpg`,
        experiences: ['dambulla', 'spice-garden', 'kandy-temple', 'botanical-garden', 'kandy-city', 'kandyan-dance'],
        hotels: hotels.kandy,
      },
      {
        id: 'nuwara-eliya',
        dayLabel: 'Days',
        dayRange: '6 to 7',
        location: 'Nuwara Eliya',
        intro:
          'Out of Kandy the road starts climbing and does not stop, running up through terraced tea estates to 1,900 metres. You break the drive at a working tea factory to follow the leaf from the withering lofts to the tasting table, and arrive in Nuwara Eliya with the afternoon free. It is a strange and rather wonderful place — a Victorian hill station with a racecourse, a red brick post office and a golf course, built by the British to feel like home and genuinely cold after dark. The next morning is given to the town: Gregory Lake, Victoria Park, the old bungalows. The afternoon is yours.',
        image: `${IMG}/tea-plantation.jpg`,
        experiences: ['tea-factory', 'nuwara-eliya-city', 'hill-train'],
        hotels: hotels.nuwaraEliya,
      },
      {
        id: 'ella',
        dayLabel: 'Days',
        dayRange: '8 to 9',
        location: 'Ella',
        intro:
          'A short run over to Ella, stopping at the Seetha Amman temple at Seetha Eliya — a brightly painted Hindu shrine beside a cold mountain stream, held to be where Sita was kept captive in the Ramayana. Ella itself is one street of cafés in a notch between two mountains, and the reason to come is the view down Ella Gap, which on a clear morning runs all the way to the southern plains. Your full day here takes in the town and the Nine Arch Bridge, a 1921 viaduct curving out of the jungle on nine stone spans with no steel in it at all. Time it right and a train comes over while you are standing there.',
        image: `${IMG}/nine-arch-bridge.jpg`,
        experiences: ['sita-amman', 'ella-city', 'little-adams'],
        hotels: hotels.ella,
      },
      {
        id: 'yala',
        dayLabel: 'Days',
        dayRange: '10 to 11',
        location: 'Yala',
        intro:
          'The descent out of the hills is dramatic — you drop two thousand metres in a couple of hours and the landscape turns from tea to dry scrub. Ravana Falls arrives at the roadside on the way down, and the afternoon brings you to Kataragama for the evening puja, a pilgrimage town sacred to Buddhists, Hindus and Muslims alike where drums and oil lamps carry on well after dark, with the white Kiri Vehera stupa lit above the trees. The next morning starts before dawn for a jeep safari in Yala National Park, which has one of the densest leopard populations anywhere in the world, along with sloth bears, elephants and an empty beach where the scrub meets the Indian Ocean. The afternoon is free.',
        image: `${IMG}/yala-leopard.jpg`,
        experiences: ['ravana-falls', 'kataragama', 'yala-safari'],
        hotels: hotels.yala,
      },
      {
        id: 'bentota',
        dayLabel: 'Days',
        dayRange: '12 to 14',
        location: 'Bentota',
        subLabel: '(via Galle)',
        intro:
          'You follow the southern coast west, and the last sightseeing day of the trip is one of the best. Galle Fort in the morning: a walled Dutch trading town on a headland, ramparts on three sides, still lived in rather than preserved. Then a boat safari on the Madu Ganga, into mangrove tunnels so narrow the engine has to be cut, and a stop at the Kosgoda turtle hatchery before you reach Bentota. The remaining two days are entirely free on a half-board basis. Swim, sleep, read, use the watersports centre at the river mouth or do nothing at all — after eleven days on the road, most people choose nothing.',
        image: `${IMG}/galle-fort.jpg`,
        experiences: ['galle-fort', 'madu-river', 'turtle-hatchery', 'stilt-fishermen', 'bentota-watersports'],
        hotels: hotels.bentota,
      },
      departureStop('15', 'Bentota'),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'ancient-cities-and-golden-sands',
    name: 'Ancient Cities & Golden Sands',
    tagline:
      'Rock fortresses, elephant country and the Temple of the Tooth — then straight to the coast for the rest of the week.',
    badge: 'Multi-centre',
    nights: 7,
    days: 8,
    heroImage: `${IMG}/polonnaruwa.jpg`,
    heroMosaic: [`${IMG}/dambulla-temple.jpg`, `${IMG}/bentota-beach.jpg`, `${IMG}/minneriya-elephants.jpg`],
    cardImage: `${IMG}/minneriya-elephants.jpg`,
    cardSummary:
      'The Cultural Triangle and Kandy at full depth, then two days doing nothing on the west coast. Culture first, beach second, no rushing either.',
    intro:
      'Some trips try to cover the whole island in a week and nobody enjoys them. This one does the opposite: it gives five of its seven nights to the two places most worth your time, and then puts you on a beach. You get three nights in the Cultural Triangle, which is what it takes to see Polonnaruwa, Sigiriya, Minneriya and Anuradhapura without spending every morning packing. Two nights in Kandy cover the Temple of the Sacred Tooth Relic, the botanical gardens at Peradeniya and the city itself. Then you cross to Bentota and stop moving. It suits travellers with limited time who would rather see fewer things properly, and families who need the week to end with a pool.',
    tourType: 'Multi-centre',
    visiting: ['Cultural Triangle', 'Kandy', 'Bentota'],
    bestFor: ['Short trips', 'Culture', 'Families', 'Wildlife', 'Beach finish'],
    priceFrom: 'USD 2,000',
    priceBasis: 'per person, half board',
    period: '01 Nov 2026 – 30 Apr 2027',
    extensionPrice: 'USD 170 per room per night, half board',
    extensions: [
      {
        title: 'Option 1: More time at Bentota',
        description:
          'Two beach days is barely enough to unpack. Extend your stay at the Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay or Eden Resort & Spa on the same half-board basis.',
        image: `${IMG}/bentota-beach.jpg`,
        price: 'USD 170 per room per night, half board',
      },
      {
        title: 'Option 2: Add Yala',
        description:
          'Two nights at Yala on the way to the coast turns this into a wildlife trip as well — a full-day jeep safari in the island’s best leopard park, plus Kataragama and Ravana Falls en route.',
        image: `${IMG}/yala-leopard.jpg`,
        price: 'Price on request',
      },
    ],
    stops: [
      {
        id: 'cultural-triangle',
        dayLabel: 'Days',
        dayRange: '1 to 3',
        location: 'Sigiriya',
        subLabel: '(for the Cultural Triangle)',
        intro:
          'Your chauffeur guide meets you at Bandaranaike International Airport and drives inland to Sigiriya, roughly four hours, with the rest of the first day free to swim and sleep off the flight. Day two is Polonnaruwa in the morning — the best-preserved of the ruined capitals and the only one you can properly walk — followed by an afternoon jeep safari at Minneriya, where the elephants gather in numbers on the grass left behind by the receding reservoir. Day three you are up early for Sigiriya Rock itself, 1,200 steps to a fifth-century palace on a granite summit, and then across to Anuradhapura for stupas the size of hills and the oldest planted tree on earth.',
        image: `${IMG}/polonnaruwa.jpg`,
        experiences: ['polonnaruwa', 'minneriya', 'sigiriya-rock', 'anuradhapura', 'hot-air-balloon'],
        hotels: hotels.sigiriya,
      },
      {
        id: 'kandy',
        dayLabel: 'Days',
        dayRange: '4 to 5',
        location: 'Kandy',
        intro:
          'The road south to Kandy has two stops built into it — the Dambulla cave temple, with 150 Buddha statues and painted ceilings inside a rock face, and a spice garden at Matale where you can see what cinnamon and cardamom look like before they reach a jar. You arrive in Kandy for the evening puja at the Temple of the Sacred Tooth Relic. The following day belongs to the hill capital: the Royal Botanical Gardens at Peradeniya in the morning, then the lake, the covered market and the viewpoint above town, best reached in the late afternoon when the light goes gold over the temple roofs.',
        image: `${IMG}/kandy-city.jpg`,
        experiences: ['dambulla', 'spice-garden', 'kandy-temple', 'botanical-garden', 'kandy-city', 'kandyan-dance'],
        hotels: hotels.kandy,
      },
      {
        id: 'bentota',
        dayLabel: 'Days',
        dayRange: '6 to 7',
        location: 'Bentota',
        intro:
          'You come down out of the hills to the west coast, and that is the end of the driving. Both remaining days are completely free on a half-board basis at Bentota, where the river meets the sea and the water is flat enough for every watersport on the island. There is plenty within reach if you want it — Galle Fort is an hour south, the Madu Ganga mangroves twenty minutes away, the Kosgoda turtle hatchery closer still — and your chauffeur guide can take you to any of them. Or you can stay exactly where you are, which is what the itinerary is really designed for.',
        image: `${IMG}/bentota-beach.jpg`,
        experiences: ['bentota-watersports', 'madu-river', 'turtle-hatchery', 'galle-fort'],
        hotels: hotels.bentota,
      },
      departureStop('8', 'Bentota'),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'classic-sri-lanka',
    name: 'Classic Sri Lanka',
    tagline:
      'The island’s greatest hits in a single week — cave temples, a rock fortress, the hill capital, tea country and the beach.',
    badge: 'Suggested itinerary',
    nights: 7,
    days: 8,
    heroImage: `${IMG}/tea-plantation.jpg`,
    heroMosaic: [`${IMG}/kandy-temple.jpg`, `${IMG}/negombo.jpg`, `${IMG}/tea-plantation.jpg`],
    cardImage: `${IMG}/kandy-temple.jpg`,
    cardSummary:
      'Five bases in eight days, arranged so you are never doubling back. The most ground you can cover in a week without it becoming a blur.',
    intro:
      'A week is not long for a country with this much in it, so this route is built to waste none of it. You start with a night at Negombo, twenty minutes from the airport, which means no long drive after a long flight. From there it runs in one clean line: the Cultural Triangle for Dambulla, Minneriya, Sigiriya and Anuradhapura; Kandy for the Temple of the Sacred Tooth Relic; Nuwara Eliya for the tea estates and the cold, strange little hill station at the top of them. Then the descent to the coast through the Kelani valley at Kitulgala, and two full days at Bentota to finish. It is the most complete first look at Sri Lanka that fits inside eight days.',
    tourType: 'Suggested itinerary',
    visiting: ['Negombo', 'Cultural Triangle', 'Kandy', 'Nuwara Eliya', 'Bentota'],
    bestFor: ['First-time visitors', 'Short trips', 'Culture', 'Tea country', 'Beach finish'],
    priceFrom: 'USD 2,000',
    priceBasis: 'per person, half board',
    period: '01 Nov 2026 – 30 Apr 2027',
    extensionPrice: 'USD 170 per room per night, half board',
    extensions: [
      {
        title: 'Option 1: More time at Bentota',
        description:
          'Add nights at the Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay or Eden Resort & Spa on the same half-board basis, and finish the week properly rather than packing on day seven.',
        image: `${IMG}/bentota-beach.jpg`,
        price: 'USD 170 per room per night, half board',
      },
      {
        title: 'Option 2: Add Ella and Yala',
        description:
          'Carry on east from Nuwara Eliya instead of turning for the coast: Ella for the Nine Arch Bridge, then Yala for a leopard safari, rejoining the beach afterwards via Galle.',
        image: `${IMG}/nine-arch-bridge.jpg`,
        price: 'Price on request',
      },
    ],
    stops: [
      {
        id: 'negombo',
        dayLabel: 'Day',
        dayRange: '1',
        location: 'Negombo',
        intro:
          'Rather than send you straight inland after a long flight, this itinerary starts twenty minutes from the terminal at Negombo — a Catholic fishing town of Dutch canals, outrigger boats and a church at the end of every street. Your chauffeur guide meets you at arrivals and has you at the hotel within half an hour. The rest of the day is free: sleep, swim, or walk the beach up to the Lellama fish market, which is worth seeing early the next morning if you are awake and jet-lagged anyway.',
        image: `${IMG}/negombo.jpg`,
        experiences: ['negombo-lagoon'],
        hotels: hotels.negombo,
      },
      {
        id: 'cultural-triangle',
        dayLabel: 'Days',
        dayRange: '2 to 3',
        location: 'Sigiriya',
        subLabel: '(for the Cultural Triangle)',
        intro:
          'You head inland, breaking the drive at the Dambulla cave temple: five caves cut into a rock face, 150 Buddha statues and ceilings painted right down to where the stone meets the floor. The afternoon is a jeep safari at Minneriya, where wild elephants come down in the late afternoon to feed on the grasslands of the drying reservoir. The following morning is Sigiriya Rock — 1,200 steps past fifteen-hundred-year-old frescoes to a palace on the summit — and the afternoon takes you across to Anuradhapura, the first capital, where enormous brick stupas still rise over the treeline and pilgrims tend a fig tree planted in 288 BC.',
        image: `${IMG}/sigiriya-rock.jpg`,
        experiences: ['dambulla', 'minneriya', 'sigiriya-rock', 'anuradhapura', 'hot-air-balloon'],
        hotels: hotels.sigiriya,
      },
      {
        id: 'kandy',
        dayLabel: 'Day',
        dayRange: '4',
        location: 'Kandy',
        intro:
          'The morning is spent in the spice gardens at Matale, walking a working plot where cinnamon is peeled and rolled by hand, cardamom grows in the shade and pepper vines climb their host trees. Then on into Kandy, the last kingdom to fall to a European power and still the cultural heart of the island. You arrive for the evening puja at the Temple of the Sacred Tooth Relic, when the Kandyan drummers strike up outside the inner chamber and the doors open for the queue of pilgrims carrying lotus flowers past the golden casket.',
        image: `${IMG}/kandy-temple.jpg`,
        experiences: ['spice-garden', 'kandy-temple', 'kandyan-dance', 'kandy-city'],
        hotels: hotels.kandy,
      },
      {
        id: 'nuwara-eliya',
        dayLabel: 'Day',
        dayRange: '5',
        location: 'Nuwara Eliya',
        intro:
          'The road out of Kandy climbs for three hours through tea terraces, and you stop partway up at a working highland factory to follow the leaf from the withering troughs through the rollers and firing ovens to the tasting table. You reach Nuwara Eliya by the afternoon — 1,900 metres up, mock-Tudor bungalows, a racecourse and a red brick post office, so thoroughly Victorian that everybody calls it Little England. The rest of the day is free, and the evening is genuinely cold, which after a week in the tropics comes as a shock worth having.',
        image: `${IMG}/tea-factory.jpg`,
        experiences: ['tea-factory', 'nuwara-eliya-city', 'hill-train'],
        hotels: hotels.nuwaraEliya,
      },
      {
        id: 'bentota',
        dayLabel: 'Days',
        dayRange: '6 to 7',
        location: 'Bentota',
        subLabel: '(via Kitulgala)',
        intro:
          'The descent to the coast runs through Kitulgala, where the Kelani river cuts a gorge through wet-zone rainforest and David Lean blew up his bridge for The Bridge on the River Kwai in 1957. It is the best white-water rafting in the country if you want it, and one of the best birdwatching stretches in the wet zone if you do not. You are on the beach at Bentota by the afternoon, and the last full day is entirely free on a half-board basis — the river mouth here is flat enough for every watersport on the island, or you can simply not move.',
        image: `${IMG}/kitulgala.jpg`,
        experiences: ['kitulgala', 'bentota-watersports', 'madu-river', 'turtle-hatchery'],
        hotels: hotels.bentota,
      },
      departureStop('8', 'Bentota'),
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'beach-safari-and-tea-country',
    name: 'Beach, Safari & Tea Country',
    tagline:
      'Beach first for once — three days on the sand, then inland for leopards, waterfalls and the hill country in reverse.',
    badge: 'Multi-centre',
    nights: 9,
    days: 10,
    heroImage: `${IMG}/bentota-beach.jpg`,
    heroMosaic: [`${IMG}/galle-fort.jpg`, `${IMG}/ella-gap.jpg`, `${IMG}/yala-leopard.jpg`],
    cardImage: `${IMG}/yala-leopard.jpg`,
    cardSummary:
      'Runs the island anti-clockwise: coast, safari, hill country, Kandy, Colombo. You recover from the flight before you do any sightseeing.',
    intro:
      'Almost every Sri Lanka itinerary saves the beach for the end. This one puts it first, and it is a better idea than it sounds — you land, drive an hour and a half to Bentota, and have three days to get over the flight before any sightseeing starts. After that the route runs anti-clockwise around the south: Galle Fort and then Yala for a leopard safari, up to Ella for the Nine Arch Bridge and Ravana Falls, on through tea country to Kandy for the Temple of the Sacred Tooth Relic, and finally Colombo and a last night at Negombo by the airport. It is the best value of the four programmes and it suits anyone who wants the beach while they still have the energy to enjoy it.',
    tourType: 'Multi-centre',
    visiting: ['Bentota', 'Galle', 'Yala', 'Ella', 'Kandy', 'Colombo', 'Negombo'],
    bestFor: ['Beach first', 'Wildlife & 4x4 safari', 'Best value', 'Honeymoon', 'Tea country'],
    priceFrom: 'USD 1,200',
    priceBasis: 'per person, half board',
    period: '01 Nov 2026 – 30 Apr 2027',
    extensionPrice: 'USD 125 per room per night, half board',
    extensions: [
      {
        title: 'Option 1: More time at Bentota',
        description:
          'Start slower still. Add nights at the front of the trip at the Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay or Eden Resort & Spa, on the same half-board basis.',
        image: `${IMG}/bentota-beach.jpg`,
        price: 'USD 125 per room per night, half board',
      },
      {
        title: 'Option 2: Add the Cultural Triangle',
        description:
          'This route deliberately skips Sigiriya and Polonnaruwa. Add two or three nights north of Kandy and you pick up the rock fortress, Minneriya and Anuradhapura before heading for the airport.',
        image: `${IMG}/sigiriya-rock.jpg`,
        price: 'Price on request',
      },
    ],
    stops: [
      {
        id: 'bentota',
        dayLabel: 'Days',
        dayRange: '1 to 3',
        location: 'Bentota',
        intro:
          'Your chauffeur guide meets you at Bandaranaike International Airport and drives straight down the expressway to Bentota — around an hour and a half, and the shortest transfer of any of our programmes. Then nothing happens for two days, deliberately. Both are entirely free on a half-board basis on a beach where the Bentota river meets the sea, which is why every watersport on the island operates from this stretch of water. Colombo is an easy run north if you want a day in the city, and the Madu Ganga mangroves and the Kosgoda turtle hatchery are both close by, but there is no obligation to do any of it.',
        image: `${IMG}/bentota-beach.jpg`,
        experiences: ['bentota-watersports', 'madu-river', 'turtle-hatchery', 'colombo-city'],
        hotels: hotels.bentota,
      },
      {
        id: 'yala',
        dayLabel: 'Days',
        dayRange: '4 to 5',
        location: 'Yala',
        subLabel: '(via Galle)',
        intro:
          'You follow the southern coast, stopping at Galle Fort — a walled Dutch trading town on a headland with ramparts on three sides, still a working neighbourhood rather than a museum. The stilt fishermen work this stretch of coast if the hour is right. By the afternoon you are at Yala for the first of two nights, and the safari itself is a private open 4x4 with a tracker in the park that has one of the highest leopard densities in the world. Sloth bears, elephants, wild buffalo and crocodiles all live here too, and the tracks run right down to an empty beach where the scrub meets the Indian Ocean.',
        image: `${IMG}/yala-safari.jpg`,
        experiences: ['galle-fort', 'yala-safari', 'stilt-fishermen'],
        hotels: hotels.yala,
      },
      {
        id: 'ella',
        dayLabel: 'Days',
        dayRange: '6 to 7',
        location: 'Ella',
        intro:
          'The road north out of the dry zone climbs hard, and Ravana Falls appears at the roadside on the way up — twenty-five metres of water dropping through jungle and boulders, at its fullest in the months after the monsoon. The rest of that day is free in Ella, a single street of cafés wedged between two mountains with a view down the gap that runs to the southern plains. Your full day here covers the town and the Nine Arch Bridge, a 1921 viaduct built without steel, curving out of the jungle on nine stone spans. Get up early on one of the mornings for Little Adam’s Peak — forty-five minutes uphill for the best sunrise in the hill country.',
        image: `${IMG}/ella-gap.jpg`,
        experiences: ['ravana-falls', 'ella-city', 'little-adams', 'hill-train'],
        hotels: hotels.ella,
      },
      {
        id: 'kandy',
        dayLabel: 'Day',
        dayRange: '8',
        location: 'Kandy',
        intro:
          'This is the tea day. The road from Ella to Kandy runs the length of the hill country through terraced estates, and you break it at a working factory to follow the leaf from the withering lofts through the rollers and the firing ovens to a tasting of grades that mostly never leave the island. You arrive in Kandy for the evening puja at the Temple of the Sacred Tooth Relic, where a tooth of the Buddha has been kept — and fought over — for more than a thousand years, and where the drummers still open the inner chamber three times a day.',
        image: `${IMG}/tea-plantation.jpg`,
        experiences: ['tea-factory', 'kandy-temple', 'kandyan-dance', 'botanical-garden'],
        hotels: hotels.kandy,
      },
      {
        id: 'negombo',
        dayLabel: 'Day',
        dayRange: '9',
        location: 'Negombo',
        subLabel: '(via Colombo)',
        intro:
          'You come down out of the hills to Colombo for a half-day tour of the commercial capital: the Pettah bazaar and its striped Red Mosque, the colonial Fort quarter and the Old Dutch Hospital, the Gangaramaya temple, and Galle Face Green at the end of the afternoon with the kite sellers out. Then a short run up the coast to Negombo for your final night — a fishing town twenty minutes from the terminal, which makes the next morning considerably less stressful than starting from the city.',
        image: `${IMG}/colombo.jpg`,
        experiences: ['colombo-city', 'negombo-lagoon'],
        hotels: hotels.negombo,
      },
      departureStop('10', 'Negombo'),
    ],
  },
];

export const packagesBySlug: Record<string, TourPackage> = Object.fromEntries(
  tourPackages.map((pkg) => [pkg.slug, pkg]),
);

export function getPackage(slug: string): TourPackage {
  const pkg = packagesBySlug[slug];
  if (!pkg) throw new Error(`Unknown tour package: ${slug}`);
  return pkg;
}

/** Flattened, de-duplicated experience ids for a package — drives "Highlights of trip". */
export function packageHighlightIds(pkg: TourPackage): string[] {
  const seen = new Set<string>();
  for (const stop of pkg.stops) {
    for (const id of stop.experiences) seen.add(id);
  }
  return [...seen];
}

/** The same list, resolved to the (English) experience records. */
export function packageHighlights(pkg: TourPackage): Experience[] {
  return packageHighlightIds(pkg).map((id) => experiences[id]);
}

/** The stop a given experience first appears in — used by the "Jump to itinerary" links. */
export function stopIdForExperience(pkg: TourPackage, experienceId: string): string {
  return pkg.stops.find((stop) => stop.experiences.includes(experienceId))?.id ?? '';
}
