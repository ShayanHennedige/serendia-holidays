'use client';

import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { useState } from 'react';
import MapboxTripPicker, { mapPickerCopy } from './MapboxTripPicker';
import AiItineraryResult from './AiItineraryResult';
import { useLanguage } from '../../components/LanguageProvider';
import type { AiItinerary, PinnedLocation, TourDetails } from '../../lib/tour-types';

const activityOptions = [
  'Wildlife and Nature',
  'Wellness and Spiritual',
  'Archeology and Heritage',
  'Tea Experience and Hill Country',
  'Hiking & Adventure',
  'Beach & Water Sports',
  'Cultural & Heritage',
  'Urban & Leisure',
  'Eco & Village Experiences',
  'Cricket & Sporting Experiences',
];

const hotelTypes = ['3 Star', '4 Star', '5 Star', 'Boutique', 'Villa', 'Budget'];
const roomCategories = ['Standard', 'Deluxe', 'Superior', 'Suite'];
const mealPlans = ['BB', 'HB', 'FB', 'AI', 'RO'];
const budgetOptions = ['Smart value', 'Comfort', 'Premium', 'Ultra-luxury'];
const travelStyles = ['Private & flexible', 'Culture & heritage', 'Wildlife & nature', 'Wellness & slow travel', 'Family discovery', 'Luxury island journey'];
const travelPaces = ['Relaxed', 'Balanced', 'Active'];
const transportOptions = ['Private car', 'Private van', 'Luxury vehicle', 'Rail + chauffeur', 'Coach'];
const roomTypes = [
  { key: 'double', title: 'Double (DBL)', note: '1 double bed · 2 guests' },
  { key: 'single', title: 'Single (SGL)', note: '1 single bed · 1 guest' },
  { key: 'triple', title: 'Triple (TPL)', note: '3 beds · 3 guests' },
  { key: 'quad', title: 'Quadruple (QTPL)', note: '4 beds · 4 guests' },
];

type TravelerKind = 'individual' | 'group' | null;
type PlanningMode = 'early' | 'full' | null;

function ToggleCard({
  active,
  title,
  subtitle,
  tags,
  icon,
  onClick,
}: {
  active: boolean;
  title: string;
  subtitle: string;
  tags: string[];
  icon: 'individual' | 'group' | 'calendar' | 'check';
  onClick: () => void;
}) {
  const iconSvg = {
    individual: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 19c0-3.2 2.9-5 7-5s7 1.8 7 5" />
      </svg>
    ),
    group: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="9" r="2.6" />
        <circle cx="16.5" cy="10" r="2.1" />
        <path d="M4.5 18c0-2.7 2.3-4.4 5.5-4.4s5.5 1.7 5.5 4.4" />
        <path d="M14 17.6c.2-1.8 1.8-3.1 4.1-3.1 1 0 1.9.2 2.7.7" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5.5" width="16" height="14" rx="3" />
        <path d="M8 3.8v3.4M16 3.8v3.4M4 9.2h16" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12.1 2.1 2.2 4.9-5" />
      </svg>
    ),
  }[icon];

  return (
    <button type="button" className={`planner-choice-card ${active ? 'active' : ''}`} onClick={onClick}>
      <div className={`planner-choice-icon planner-choice-icon-${icon}`} aria-hidden="true">
        {iconSvg}
      </div>
      <div className="planner-choice-copy">
        <div className="planner-choice-title-row">
          <h3>{title}</h3>
          <span>{tags[0]}</span>
        </div>
        <p>{subtitle}</p>
      </div>
      <div className="planner-tag-list">
        {tags.slice(1).map((tag) => (
          <small key={tag}>{tag}</small>
        ))}
      </div>
    </button>
  );
}

function CountControl({
  label,
  hint,
  value,
  min = 0,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="planner-counter-row">
      <div>
        <strong>{label}</strong>
        <p>{hint}</p>
      </div>
      <div className="planner-stepper">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))}>−</button>
        <span>{value}</span>
        <button type="button" onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  );
}

export default function CustomTripForm() {
  const { locale, dictionary: { planner } } = useLanguage();
  const [travelerKind, setTravelerKind] = useState<TravelerKind>(null);
  const [planningMode, setPlanningMode] = useState<PlanningMode>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [agentBooking, setAgentBooking] = useState(false);
  const [selectedDestinationPins, setSelectedDestinationPins] = useState<PinnedLocation[]>([]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalFlight, setArrivalFlight] = useState('');
  const [departureFlight, setDepartureFlight] = useState('');
  const [arrivalTime, setArrivalTime] = useState({ hour: '', minute: '', period: 'AM' });
  const [departureTime, setDepartureTime] = useState({ hour: '', minute: '', period: 'AM' });
  const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
  const [selectedRoomCategories, setSelectedRoomCategories] = useState<string[]>([]);
  const [selectedMealPlans, setSelectedMealPlans] = useState<string[]>([]);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>(['Comfort']);
  const [travelStyle, setTravelStyle] = useState('Private & flexible');
  const [travelPace, setTravelPace] = useState('Balanced');
  const [transportPreference, setTransportPreference] = useState('Private car');
  const [chauffeurRequired, setChauffeurRequired] = useState(true);
  const [activities, setActivities] = useState<string[]>([]);
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [accessibilityRequirements, setAccessibilityRequirements] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [roomCounts, setRoomCounts] = useState<Record<string, number>>({
    double: 0,
    single: 0,
    triple: 0,
    quad: 0,
  });
  const [aiItinerary, setAiItinerary] = useState<AiItinerary | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const isEarlyPlanning = planningMode === 'early';
  const stepLabels = isEarlyPlanning
    ? ['Trip Overview', 'Accommodation', 'Activities']
    : ['Travelers', 'Dates & Flights', 'Accommodation', 'Activities'];

  const totalTravelers = adults + children;
  const selectedLocations = selectedDestinationPins.map((pin) => pin.label);

  const togglePreference = (option: string, setter: Dispatch<SetStateAction<string[]>>) => {
    setter((current) => current.includes(option) ? current.filter((item) => item !== option) : [...current, option]);
  };

  const goBack = () => {
    if (planningMode && stepIndex > 0) {
      setStepIndex((current) => current - 1);
      return;
    }

    if (planningMode) {
      setPlanningMode(null);
      setStepIndex(0);
      return;
    }

    if (travelerKind) {
      setTravelerKind(null);
    }
  };

  const toggleActivity = (activity: string) => {
    setActivities((current) =>
      current.includes(activity) ? current.filter((item) => item !== activity) : [...current, activity],
    );
  };

  const updateRoomCount = (roomType: string, nextValue: number) => {
    setRoomCounts((current) => ({ ...current, [roomType]: Math.max(0, nextValue) }));
  };

  const startPlanning = (mode: PlanningMode) => {
    setPlanningMode(mode);
    setStepIndex(0);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (activities.length === 0 || aiLoading) {
      return;
    }

    setAiLoading(true);
    setAiError(null);

    try {
      const response = await fetch('/api/ai/trip-planner', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          travelerKind,
          planningMode,
          adults,
          children,
          arrivalDate,
          departureDate,
          selectedLocation: selectedLocations.join(', '),
          selectedLocations,
          hotelType: selectedHotelTypes.join(', '),
          roomCategory: selectedRoomCategories.join(', '),
          mealPlan: selectedMealPlans.join(', '),
          activities,
          specialRequests,
          budget: selectedBudgets.join(', '),
          travelStyle,
          travelPace,
          transportPreference,
          dietaryRequirements,
          accessibilityRequirements,
          language: locale,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        setAiError(data.error || 'The AI trip planner is temporarily unavailable.');
        return;
      }

      setAiItinerary(data);
    } catch {
      setAiError('The AI trip planner is temporarily unavailable.');
    } finally {
      setAiLoading(false);
    }
  };

  const startOver = () => {
    setAiItinerary(null);
    setAiError(null);
    setPlanningMode(null);
    setStepIndex(0);
  };

  const editRequest = () => {
    setAiItinerary(null);
    setAiError(null);
    setStepIndex(planningMode === 'full' ? 3 : 2);
  };

  const tourDetails: TourDetails = {
    travelerKind: travelerKind || 'individual',
    planningMode: planningMode || 'early',
    adults,
    children,
    arrivalDate,
    departureDate,
    arrivalFlight,
    departureFlight,
    arrivalTime: arrivalTime.hour ? `${arrivalTime.hour}:${arrivalTime.minute || '00'} ${arrivalTime.period}` : '',
    departureTime: departureTime.hour ? `${departureTime.hour}:${departureTime.minute || '00'} ${departureTime.period}` : '',
    selectedLocations,
    selectedDestinationPins,
    hotelType: selectedHotelTypes.join(', '),
    roomCategory: selectedRoomCategories.join(', '),
    mealPlan: selectedMealPlans.join(', '),
    budget: selectedBudgets.join(', '),
    roomCounts,
    activities,
    travelStyle,
    travelPace,
    transportPreference,
    chauffeurRequired,
    dietaryRequirements,
    accessibilityRequirements,
    specialRequests,
    language: locale,
  };

  if (!travelerKind) {
    return (
      <div className="planner-card planner-selection-card">
        <div className="planner-selection-header">
          <h2>{planner.people}</h2>
          <p>{planner.select}</p>
        </div>
        <div className="planner-choice-grid">
          <ToggleCard
            active={false}
            title={planner.individual}
            subtitle={planner.individualCopy}
            tags={['1–5 travelers', 'Solo', 'Couple', 'Family', 'Small Group']}
            icon="individual"
            onClick={() => setTravelerKind('individual')}
          />
          <ToggleCard
            active={false}
            title={planner.group}
            subtitle={planner.groupCopy}
            tags={['6+ travelers', 'Corporate', 'School', 'Tour Group', 'Event']}
            icon="group"
            onClick={() => {
              setTravelerKind('group');
              setAdults(6);
            }}
          />
        </div>
        <p className="planner-inline-footer">© 2026 Serendia Holidays. All rights reserved.</p>
      </div>
    );
  }

  if (aiItinerary) {
    return <AiItineraryResult itinerary={aiItinerary} tourDetails={tourDetails} onStartOver={startOver} onEditRequest={editRequest} />;
  }

  if (!planningMode) {
    return (
      <div className="planner-card planner-selection-card">
        <div className="planner-selection-topline">
          <button type="button" className="planner-back-link" onClick={goBack}>← Back</button>
          <span className="planner-pill">
            {travelerKind === 'group' ? 'Group · 6+ travelers' : 'Individual · 1–5 travelers'}
          </span>
        </div>
        <div className="planner-selection-header">
          <h2>How would you like to start?</h2>
          <p>Select based on how much information you have right now.</p>
        </div>
        <div className="planner-choice-grid">
          <ToggleCard
            active={false}
            title="Early Planning"
            subtitle="Rough dates and pax count. Flight info and personal details will be provided later."
            tags={['3 steps', 'Dates', 'Pax Count', 'Preferences']}
            icon="calendar"
            onClick={() => startPlanning('early')}
          />
          <ToggleCard
            active={false}
            title="Full Details Ready"
            subtitle="All information — flights, passport numbers, and complete personal details."
            tags={['4 steps', 'Flights', 'Passports', 'All Details']}
            icon="check"
            onClick={() => startPlanning('full')}
          />
        </div>
        <p className="planner-inline-footer">© 2026 Serendia Holidays. All rights reserved.</p>
      </div>
    );
  }

  const isLastStep = stepIndex === stepLabels.length - 1;
  const activeLabel = stepLabels[stepIndex];

  return (
    <form className="planner-card planner-wizard-card" onSubmit={onSubmit}>
      <div className="planner-wizard-top">
        <div className="planner-pill-row">
          <span className="planner-pill">{travelerKind === 'group' ? 'Group' : 'Individual'}</span>
          <span className="planner-pill planner-pill-muted">{isEarlyPlanning ? 'Early Planning' : 'Full Details'}</span>
        </div>
        <button
          type="button"
          className="planner-change-link"
          onClick={() => {
            setPlanningMode(null);
            setStepIndex(0);
          }}
        >
          Change
        </button>
      </div>

      <div className={`planner-progress planner-progress-${stepLabels.length}`}>
        {stepLabels.map((label, index) => {
          const isCompleted = index < stepIndex;
          const isCurrent = index === stepIndex;

          return (
            <div key={label} className={`planner-progress-item ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''}`}>
              <div className="planner-progress-node">
                {isCompleted ? '✓' : index + 1}
              </div>
              <div className="planner-progress-copy">
                <span>{label}</span>
              </div>
              {index < stepLabels.length - 1 && <div className="planner-progress-line" aria-hidden="true" />}
            </div>
          );
        })}
      </div>

      {(activeLabel === 'Trip Overview' || activeLabel === 'Travelers') && (
        <>
          <section className="planner-panel planner-agent-panel">
            <label className={`planner-radio-row ${agentBooking ? 'checked' : ''}`}>
              <input type="checkbox" checked={agentBooking} onChange={(event) => setAgentBooking(event.target.checked)} />
              <span className="planner-radio-mark" aria-hidden="true" />
              <span>This booking is arranged by a travel agent</span>
            </label>

            {agentBooking && (
              <div className="planner-grid planner-grid-2 planner-agent-grid">
                <div>
                  <label>Agent Name</label>
                  <input className="planner-input" placeholder="Agent name" />
                </div>
                <div>
                  <label>Agent Email</label>
                  <input className="planner-input" placeholder="agent@example.com" />
                </div>
                <div className="planner-grid-span">
                  <label>Agency / Company</label>
                  <input className="planner-input planner-input-muted" placeholder="Travel agency" />
                </div>
              </div>
            )}
          </section>

          <section className="planner-panel">
            <div className="planner-panel-header">
              <h3>{activeLabel === 'Travelers' ? 'Travelers' : 'Number of Travelers'}</h3>
              <span className="planner-total-pill">{totalTravelers} total</span>
            </div>
            <CountControl label="Adults" hint="18 and above" value={adults} min={1} onChange={setAdults} />
            <CountControl label="Children" hint="Under 12" value={children} onChange={setChildren} />
          </section>

          {activeLabel === 'Travelers' && !isEarlyPlanning && (
            <section className="planner-panel">
              <div className="planner-panel-header planner-panel-header-stack">
                <h3>Traveler Details</h3>
                <p>Passport and contact information</p>
              </div>
              <div className="planner-lead-badge">
                <span>1</span>
                <strong>Lead Traveler</strong>
                <small>Primary contact</small>
              </div>
              <div className="planner-grid planner-grid-2">
                <div>
                  <label>First Name</label>
                  <input className="planner-input" placeholder="First name" />
                </div>
                <div>
                  <label>Last Name</label>
                  <input className="planner-input" placeholder="Last name" />
                </div>
                <div>
                  <label>Passport No.</label>
                  <input className="planner-input" placeholder="Passport number" />
                </div>
                <div>
                  <label>Country</label>
                  <input className="planner-input" placeholder="Country" />
                </div>
                <div>
                  <label>E-Mail</label>
                  <input className="planner-input" placeholder="Email address" />
                </div>
                <div>
                  <label>Contact Number</label>
                  <input className="planner-input" placeholder="Phone number" />
                </div>
              </div>
            </section>
          )}

          {isEarlyPlanning && (
            <section className="planner-panel">
              <div className="planner-panel-header planner-panel-header-stack">
                <h3>Travel Dates</h3>
              </div>
              <div className="planner-grid planner-grid-2">
                <div>
                  <label>Arrival Date *</label>
                  <input type="date" className="planner-input" value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)} />
                </div>
                <div>
                  <label>Departure Date *</label>
                  <input type="date" className="planner-input" value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} />
                </div>
              </div>
              <div className="planner-info-strip">Flight numbers, arrival times, and passenger details can be added later from the inquiry page.</div>
            </section>
          )}
        </>
      )}

      {activeLabel === 'Dates & Flights' && (
        <>
          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>Travel Dates &amp; Flights</h3>
            </div>

            <div className="planner-subsection">
              <span className="planner-subheading">Arrival</span>
              <div className="planner-grid planner-grid-3">
                <div>
                  <label>Date *</label>
                  <input type="date" className="planner-input" value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)} />
                </div>
                <div>
                  <label>Flight No. (optional)</label>
                  <input className="planner-input" placeholder="e.g. UL123" value={arrivalFlight} onChange={(event) => setArrivalFlight(event.target.value)} />
                </div>
                <div>
                  <label>Time (optional)</label>
                  <div className="planner-time-row">
                    <input className="planner-input" placeholder="HH" value={arrivalTime.hour} onChange={(event) => setArrivalTime({ ...arrivalTime, hour: event.target.value })} />
                    <span>:</span>
                    <input className="planner-input" placeholder="MM" value={arrivalTime.minute} onChange={(event) => setArrivalTime({ ...arrivalTime, minute: event.target.value })} />
                    <div className="planner-ampm">
                      <button type="button" className={arrivalTime.period === 'AM' ? 'active' : ''} onClick={() => setArrivalTime({ ...arrivalTime, period: 'AM' })}>AM</button>
                      <button type="button" className={arrivalTime.period === 'PM' ? 'active' : ''} onClick={() => setArrivalTime({ ...arrivalTime, period: 'PM' })}>PM</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="planner-subsection">
              <span className="planner-subheading">Departure</span>
              <div className="planner-grid planner-grid-3">
                <div>
                  <label>Date *</label>
                  <input type="date" className="planner-input" value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} />
                </div>
                <div>
                  <label>Flight No. (optional)</label>
                  <input className="planner-input" placeholder="e.g. UL124" value={departureFlight} onChange={(event) => setDepartureFlight(event.target.value)} />
                </div>
                <div>
                  <label>Time (optional)</label>
                  <div className="planner-time-row">
                    <input className="planner-input" placeholder="HH" value={departureTime.hour} onChange={(event) => setDepartureTime({ ...departureTime, hour: event.target.value })} />
                    <span>:</span>
                    <input className="planner-input" placeholder="MM" value={departureTime.minute} onChange={(event) => setDepartureTime({ ...departureTime, minute: event.target.value })} />
                    <div className="planner-ampm">
                      <button type="button" className={departureTime.period === 'AM' ? 'active' : ''} onClick={() => setDepartureTime({ ...departureTime, period: 'AM' })}>AM</button>
                      <button type="button" className={departureTime.period === 'PM' ? 'active' : ''} onClick={() => setDepartureTime({ ...departureTime, period: 'PM' })}>PM</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>
      )}

      {(activeLabel === 'Trip Overview' || activeLabel === 'Dates & Flights') && (
        <section className="planner-panel">
          <div className="planner-panel-header planner-panel-header-stack">
            <h3>{mapPickerCopy[locale].preferred}</h3>
            <p>{mapPickerCopy[locale].intro}</p>
          </div>
          <MapboxTripPicker initialLocations={selectedDestinationPins} onLocationsChange={setSelectedDestinationPins} />
        </section>
      )}

      {activeLabel === 'Accommodation' && (
        <section className="planner-panel">
          <div className="planner-panel-header planner-panel-header-stack">
            <h3>Accommodation Preferences</h3>
            <p>Select one or more options in every category that fits your trip.</p>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">Hotel Type * <small>(multiple selection)</small></label>
            <div className="planner-option-grid planner-option-grid-3">
              {hotelTypes.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`planner-option-tile ${selectedHotelTypes.includes(option) ? 'selected' : ''}`}
                  aria-pressed={selectedHotelTypes.includes(option)}
                  onClick={() => togglePreference(option, setSelectedHotelTypes)}
                >
                  <span className="planner-option-dot" aria-hidden="true" />
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">Room Category * <small>(multiple selection)</small></label>
            <div className="planner-option-grid planner-option-grid-4">
              {roomCategories.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`planner-option-tile ${selectedRoomCategories.includes(option) ? 'selected' : ''}`}
                  aria-pressed={selectedRoomCategories.includes(option)}
                  onClick={() => togglePreference(option, setSelectedRoomCategories)}
                >
                  <span className="planner-option-dot" aria-hidden="true" />
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">Meal Plan <small>(optional · multiple selection)</small></label>
            <div className="planner-option-grid planner-option-grid-5">
              {mealPlans.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`planner-option-tile ${selectedMealPlans.includes(option) ? 'selected' : ''}`}
                  aria-pressed={selectedMealPlans.includes(option)}
                  onClick={() => togglePreference(option, setSelectedMealPlans)}
                >
                  <span className="planner-option-dot" aria-hidden="true" />
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">Budget Style * <small>(multiple selection)</small></label>
            <div className="planner-option-grid planner-option-grid-4">
              {budgetOptions.map((option) => (
                <button
                  type="button"
                  key={option}
                  className={`planner-option-tile ${selectedBudgets.includes(option) ? 'selected' : ''}`}
                  aria-pressed={selectedBudgets.includes(option)}
                  onClick={() => togglePreference(option, setSelectedBudgets)}
                >
                  <span className="planner-option-dot" aria-hidden="true" />
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <div className="planner-panel-header">
              <label className="planner-field-label">Number of Rooms *</label>
              <span className="planner-total-pill">
                {Object.values(roomCounts).reduce((sum, count) => sum + count, 0)} rooms
              </span>
            </div>
            <div className="planner-room-list">
              {roomTypes.map((room) => (
                <div key={room.key} className="planner-room-row">
                  <div>
                    <strong>{room.title}</strong>
                    <p>{room.note}</p>
                  </div>
                  <div className="planner-stepper">
                    <button type="button" onClick={() => updateRoomCount(room.key, roomCounts[room.key] - 1)}>−</button>
                    <span>{roomCounts[room.key]}</span>
                    <button type="button" onClick={() => updateRoomCount(room.key, roomCounts[room.key] + 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeLabel === 'Activities' && (
        <>
          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>Activities</h3>
              <p>Select the activities you are interested in</p>
            </div>
            {activities.length === 0 && <div className="planner-inline-error">Please select at least one activity</div>}
            <div className="planner-option-grid planner-option-grid-3">
              {activityOptions.map((activity) => (
                <button
                  type="button"
                  key={activity}
                  className={`planner-option-tile planner-activity-tile ${activities.includes(activity) ? 'selected' : ''}`}
                  onClick={() => toggleActivity(activity)}
                >
                  <span className="planner-option-dot" aria-hidden="true" />
                  {activity}
                </button>
              ))}
            </div>
          </section>

          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>Journey Preferences</h3>
              <p>Help our consultants shape the pace, comfort and transport around you.</p>
            </div>
            <div className="planner-grid planner-grid-3">
              <label className="planner-field-stack">Travel style
                <select className="planner-input" value={travelStyle} onChange={(event) => setTravelStyle(event.target.value)}>
                  {travelStyles.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="planner-field-stack">Travel pace
                <select className="planner-input" value={travelPace} onChange={(event) => setTravelPace(event.target.value)}>
                  {travelPaces.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="planner-field-stack">Transport preference
                <select className="planner-input" value={transportPreference} onChange={(event) => setTransportPreference(event.target.value)}>
                  {transportOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <label className={`planner-radio-row planner-journey-check ${chauffeurRequired ? 'checked' : ''}`}>
              <input type="checkbox" checked={chauffeurRequired} onChange={(event) => setChauffeurRequired(event.target.checked)} />
              <span className="planner-radio-mark" aria-hidden="true" />
              <span>Include a private chauffeur</span>
            </label>
          </section>

          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>Special Requests &amp; Desires</h3>
              <p>Specific preferences, dietary needs, or special arrangements</p>
            </div>
            <div className="planner-grid planner-grid-2 planner-request-grid">
              <label className="planner-field-stack">Dietary requirements
                <input className="planner-input" placeholder="E.g. vegetarian, allergies" value={dietaryRequirements} onChange={(event) => setDietaryRequirements(event.target.value)} />
              </label>
              <label className="planner-field-stack">Accessibility requirements
                <input className="planner-input" placeholder="E.g. wheelchair access, limited walking" value={accessibilityRequirements} onChange={(event) => setAccessibilityRequirements(event.target.value)} />
              </label>
            </div>
            <textarea
              className="planner-input planner-textarea"
              rows={5}
              placeholder="E.g. prefer boutique hotels, need wheelchair access, vegetarian meals, anniversary celebration..."
              value={specialRequests}
              onChange={(event) => setSpecialRequests(event.target.value)}
            />
            <div className="planner-summary-grid">
              <div className="planner-summary-chip">
                {mapPickerCopy[locale].preferred}: {selectedLocations.length > 0 ? selectedLocations.join(' · ') : '—'}
              </div>
              <div className="planner-summary-chip">Travelers: {totalTravelers}</div>
              <div className="planner-summary-chip">Style: {planningMode === 'early' ? 'Early Planning' : 'Full Details'}</div>
            </div>
          </section>
        </>
      )}

      {isLastStep && aiError && (
        <div className="planner-inline-error">{aiError} You can also WhatsApp/Call +94 77 398 6504 or <a href="/contact">contact us</a>.</div>
      )}

      <div className="planner-actions">
        <button type="button" className="planner-secondary-button" onClick={goBack}>← Back</button>
        {isLastStep ? (
          <button type="submit" className="planner-primary-button" disabled={aiLoading || activities.length === 0}>
            {aiLoading ? 'Building your itinerary…' : 'Generate AI itinerary ✦'}
          </button>
        ) : (
          <button type="button" className="planner-primary-button" onClick={() => setStepIndex((current) => Math.min(stepLabels.length - 1, current + 1))}>
            Continue →
          </button>
        )}
      </div>

      <p className="planner-inline-footer">© 2026 Serendia Holidays. All rights reserved.</p>
    </form>
  );
}
