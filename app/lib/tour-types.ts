export interface MatchedCatalogEntry {
  slug: string;
  title: string;
  href: string;
  type: string;
  why: string;
}

export interface ItineraryDay {
  title: string;
  summary: string;
  date?: string;
  destination?: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  overnightHotel?: string;
  drivingTime?: string;
  distance?: string;
  meals?: string;
  notes?: string;
}

export interface AiItinerary {
  days: ItineraryDay[];
  matchedCatalog: MatchedCatalogEntry[];
  draftQuote: { label: string; note: string }[];
  meta?: { mode?: string; reviewStatus?: string; interactionId?: string };
}

export interface TourDetails {
  travelerKind: string;
  planningMode: string;
  adults: number;
  children: number;
  arrivalDate: string;
  departureDate: string;
  arrivalFlight: string;
  departureFlight: string;
  arrivalTime: string;
  departureTime: string;
  selectedLocations: string[];
  selectedDestinationPins: PinnedLocation[];
  hotelType: string;
  roomCategory: string;
  mealPlan: string;
  budget: string;
  roomCounts: Record<string, number>;
  activities: string[];
  travelStyle: string;
  travelPace: string;
  transportPreference: string;
  chauffeurRequired: boolean;
  dietaryRequirements: string;
  accessibilityRequirements: string;
  specialRequests: string;
  language: string;
}

export interface PinnedLocation {
  id: string;
  label: string;
  coordinates: [number, number];
  source: 'suggested' | 'search' | 'map';
}

export interface TourCustomer {
  fullName: string;
  country: string;
  email: string;
  phone: string;
  preferredContactMethod: 'Email' | 'Phone' | 'WhatsApp';
}

export interface FinalTourSubmissionRequest {
  customer: TourCustomer;
  tour: TourDetails;
  itinerary: AiItinerary;
  consent: boolean;
}

export interface TourSubmissionSnapshot extends FinalTourSubmissionRequest {
  reference: string;
  generatedAt: string;
  status: 'Submitted';
  schemaVersion: 1;
}
