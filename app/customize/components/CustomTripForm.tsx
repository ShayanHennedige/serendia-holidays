'use client';

import type { Dispatch, FormEvent, SetStateAction } from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import MapboxTripPicker, { mapPickerCopy } from './MapboxTripPicker';
import AiItineraryResult from './AiItineraryResult';
import { activityOptions, budgetOptions, hotelTypes, mealPlans, roomCategories, roomTypes, transportOptions, travelPaces, travelStyles } from './plannerOptions';
import { useLanguage } from '../../components/LanguageProvider';
import type { AiItinerary, PinnedLocation, TourDetails } from '../../lib/tour-types';

type TravelerKind = 'individual' | 'group' | null;
type PlanningMode = 'early' | 'full' | null;
type StepKey = 'overview' | 'travelers' | 'dates' | 'accommodation' | 'activities';

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
  const t = useTranslations('Planner');
  const labels = (key: string) => t.raw(`options.${key}`) as string[];
  const optionLabel = (key: string, values: string[], value: string) => labels(key)[values.indexOf(value)] ?? value;
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
  const stepLabels: StepKey[] = isEarlyPlanning
    ? ['overview', 'accommodation', 'activities']
    : ['travelers', 'dates', 'accommodation', 'activities'];

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
        setAiError(data.error || t('errors.unavailable'));
        return;
      }

      setAiItinerary(data);
    } catch {
      setAiError(t('errors.unavailable'));
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
            tags={t.raw('kinds.individualTags') as string[]}
            icon="individual"
            onClick={() => setTravelerKind('individual')}
          />
          <ToggleCard
            active={false}
            title={planner.group}
            subtitle={planner.groupCopy}
            tags={t.raw('kinds.groupTags') as string[]}
            icon="group"
            onClick={() => {
              setTravelerKind('group');
              setAdults(6);
            }}
          />
        </div>
        <p className="planner-inline-footer">{t('footer')}</p>
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
          <button type="button" className="planner-back-link" onClick={goBack}>{t('back')}</button>
          <span className="planner-pill">
            {travelerKind === 'group' ? t('pill.groupLong') : t('pill.individualLong')}
          </span>
        </div>
        <div className="planner-selection-header">
          <h2>{t('start.title')}</h2>
          <p>{t('start.copy')}</p>
        </div>
        <div className="planner-choice-grid">
          <ToggleCard
            active={false}
            title={t('start.early.title')}
            subtitle={t('start.early.subtitle')}
            tags={t.raw('start.early.tags') as string[]}
            icon="calendar"
            onClick={() => startPlanning('early')}
          />
          <ToggleCard
            active={false}
            title={t('start.full.title')}
            subtitle={t('start.full.subtitle')}
            tags={t.raw('start.full.tags') as string[]}
            icon="check"
            onClick={() => startPlanning('full')}
          />
        </div>
        <p className="planner-inline-footer">{t('footer')}</p>
      </div>
    );
  }

  const isLastStep = stepIndex === stepLabels.length - 1;
  const activeLabel = stepLabels[stepIndex];

  return (
    <form className="planner-card planner-wizard-card" onSubmit={onSubmit}>
      <div className="planner-wizard-top">
        <div className="planner-pill-row">
          <span className="planner-pill">{travelerKind === 'group' ? t('pill.group') : t('pill.individual')}</span>
          <span className="planner-pill planner-pill-muted">{isEarlyPlanning ? t('pill.early') : t('pill.full')}</span>
        </div>
        <button
          type="button"
          className="planner-change-link"
          onClick={() => {
            setPlanningMode(null);
            setStepIndex(0);
          }}
        >
          {t('change')}
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
                <span>{t(`steps.${label}`)}</span>
              </div>
              {index < stepLabels.length - 1 && <div className="planner-progress-line" aria-hidden="true" />}
            </div>
          );
        })}
      </div>

      {(activeLabel === 'overview' || activeLabel === 'travelers') && (
        <>
          <section className="planner-panel planner-agent-panel">
            <label className={`planner-radio-row ${agentBooking ? 'checked' : ''}`}>
              <input type="checkbox" checked={agentBooking} onChange={(event) => setAgentBooking(event.target.checked)} />
              <span className="planner-radio-mark" aria-hidden="true" />
              <span>{t('agent.toggle')}</span>
            </label>

            {agentBooking && (
              <div className="planner-grid planner-grid-2 planner-agent-grid">
                <div>
                  <label>{t('agent.name')}</label>
                  <input className="planner-input" placeholder={t('agent.namePlaceholder')} />
                </div>
                <div>
                  <label>{t('agent.email')}</label>
                  <input className="planner-input" placeholder="agent@example.com" />
                </div>
                <div className="planner-grid-span">
                  <label>{t('agent.agency')}</label>
                  <input className="planner-input planner-input-muted" placeholder={t('agent.agencyPlaceholder')} />
                </div>
              </div>
            )}
          </section>

          <section className="planner-panel">
            <div className="planner-panel-header">
              <h3>{activeLabel === 'travelers' ? t('travelers.title') : t('travelers.numberTitle')}</h3>
              <span className="planner-total-pill">{t('travelers.total', { count: totalTravelers })}</span>
            </div>
            <CountControl label={t('travelers.adults')} hint={t('travelers.adultsHint')} value={adults} min={1} onChange={setAdults} />
            <CountControl label={t('travelers.children')} hint={t('travelers.childrenHint')} value={children} onChange={setChildren} />
          </section>

          {activeLabel === 'travelers' && !isEarlyPlanning && (
            <section className="planner-panel">
              <div className="planner-panel-header planner-panel-header-stack">
                <h3>{t('details.title')}</h3>
                <p>{t('details.copy')}</p>
              </div>
              <div className="planner-lead-badge">
                <span>1</span>
                <strong>{t('details.lead')}</strong>
                <small>{t('details.primary')}</small>
              </div>
              <div className="planner-grid planner-grid-2">
                <div>
                  <label>{t('details.firstName')}</label>
                  <input className="planner-input" placeholder={t('details.firstNamePlaceholder')} />
                </div>
                <div>
                  <label>{t('details.lastName')}</label>
                  <input className="planner-input" placeholder={t('details.lastNamePlaceholder')} />
                </div>
                <div>
                  <label>{t('details.passport')}</label>
                  <input className="planner-input" placeholder={t('details.passportPlaceholder')} />
                </div>
                <div>
                  <label>{t('details.country')}</label>
                  <input className="planner-input" placeholder={t('details.countryPlaceholder')} />
                </div>
                <div>
                  <label>{t('details.email')}</label>
                  <input className="planner-input" placeholder={t('details.emailPlaceholder')} />
                </div>
                <div>
                  <label>{t('details.phone')}</label>
                  <input className="planner-input" placeholder={t('details.phonePlaceholder')} />
                </div>
              </div>
            </section>
          )}

          {isEarlyPlanning && (
            <section className="planner-panel">
              <div className="planner-panel-header planner-panel-header-stack">
                <h3>{t('dates.title')}</h3>
              </div>
              <div className="planner-grid planner-grid-2">
                <div>
                  <label>{t('dates.arrival')}</label>
                  <input type="date" className="planner-input" value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)} />
                </div>
                <div>
                  <label>{t('dates.departure')}</label>
                  <input type="date" className="planner-input" value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} />
                </div>
              </div>
              <div className="planner-info-strip">{t('dates.laterNote')}</div>
            </section>
          )}
        </>
      )}

      {activeLabel === 'dates' && (
        <>
          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>{t('flights.title')}</h3>
            </div>

            <div className="planner-subsection">
              <span className="planner-subheading">{t('flights.arrival')}</span>
              <div className="planner-grid planner-grid-3">
                <div>
                  <label>{t('flights.date')}</label>
                  <input type="date" className="planner-input" value={arrivalDate} onChange={(event) => setArrivalDate(event.target.value)} />
                </div>
                <div>
                  <label>{t('flights.flight')}</label>
                  <input className="planner-input" placeholder={t('flights.flightPlaceholder', { code: 'UL123' })} value={arrivalFlight} onChange={(event) => setArrivalFlight(event.target.value)} />
                </div>
                <div>
                  <label>{t('flights.time')}</label>
                  <div className="planner-time-row">
                    <input className="planner-input" placeholder={t('flights.hours')} value={arrivalTime.hour} onChange={(event) => setArrivalTime({ ...arrivalTime, hour: event.target.value })} />
                    <span>:</span>
                    <input className="planner-input" placeholder={t('flights.minutes')} value={arrivalTime.minute} onChange={(event) => setArrivalTime({ ...arrivalTime, minute: event.target.value })} />
                    <div className="planner-ampm">
                      <button type="button" className={arrivalTime.period === 'AM' ? 'active' : ''} onClick={() => setArrivalTime({ ...arrivalTime, period: 'AM' })}>AM</button>
                      <button type="button" className={arrivalTime.period === 'PM' ? 'active' : ''} onClick={() => setArrivalTime({ ...arrivalTime, period: 'PM' })}>PM</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="planner-subsection">
              <span className="planner-subheading">{t('flights.departure')}</span>
              <div className="planner-grid planner-grid-3">
                <div>
                  <label>{t('flights.date')}</label>
                  <input type="date" className="planner-input" value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} />
                </div>
                <div>
                  <label>{t('flights.flight')}</label>
                  <input className="planner-input" placeholder={t('flights.flightPlaceholder', { code: 'UL124' })} value={departureFlight} onChange={(event) => setDepartureFlight(event.target.value)} />
                </div>
                <div>
                  <label>{t('flights.time')}</label>
                  <div className="planner-time-row">
                    <input className="planner-input" placeholder={t('flights.hours')} value={departureTime.hour} onChange={(event) => setDepartureTime({ ...departureTime, hour: event.target.value })} />
                    <span>:</span>
                    <input className="planner-input" placeholder={t('flights.minutes')} value={departureTime.minute} onChange={(event) => setDepartureTime({ ...departureTime, minute: event.target.value })} />
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

      {(activeLabel === 'overview' || activeLabel === 'dates') && (
        <section className="planner-panel">
          <div className="planner-panel-header planner-panel-header-stack">
            <h3>{mapPickerCopy[locale].preferred}</h3>
            <p>{mapPickerCopy[locale].intro}</p>
          </div>
          <MapboxTripPicker initialLocations={selectedDestinationPins} onLocationsChange={setSelectedDestinationPins} />
        </section>
      )}

      {activeLabel === 'accommodation' && (
        <section className="planner-panel">
          <div className="planner-panel-header planner-panel-header-stack">
            <h3>{t('accommodation.title')}</h3>
            <p>{t('accommodation.copy')}</p>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">{t('accommodation.hotelType')} <small>{t('accommodation.multiple')}</small></label>
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
                  {optionLabel('hotelTypes', hotelTypes, option)}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">{t('accommodation.roomCategory')} <small>{t('accommodation.multiple')}</small></label>
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
                  {optionLabel('roomCategories', roomCategories, option)}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">{t('accommodation.mealPlan')} <small>{t('accommodation.optionalMultiple')}</small></label>
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
                  {optionLabel('mealPlans', mealPlans, option)}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <label className="planner-field-label">{t('accommodation.budget')} <small>{t('accommodation.multiple')}</small></label>
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
                  {optionLabel('budgets', budgetOptions, option)}
                </button>
              ))}
            </div>
          </div>

          <div className="planner-section-block">
            <div className="planner-panel-header">
              <label className="planner-field-label">{t('accommodation.rooms')}</label>
              <span className="planner-total-pill">
                {t('accommodation.roomsTotal', { count: Object.values(roomCounts).reduce((sum, count) => sum + count, 0) })}
              </span>
            </div>
            <div className="planner-room-list">
              {roomTypes.map((room) => (
                <div key={room} className="planner-room-row">
                  <div>
                    <strong>{t(`options.rooms.${room}.title`)}</strong>
                    <p>{t(`options.rooms.${room}.note`)}</p>
                  </div>
                  <div className="planner-stepper">
                    <button type="button" onClick={() => updateRoomCount(room, roomCounts[room] - 1)}>−</button>
                    <span>{roomCounts[room]}</span>
                    <button type="button" onClick={() => updateRoomCount(room, roomCounts[room] + 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeLabel === 'activities' && (
        <>
          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>{t('activities.title')}</h3>
              <p>{t('activities.copy')}</p>
            </div>
            {activities.length === 0 && <div className="planner-inline-error">{t('activities.error')}</div>}
            <div className="planner-option-grid planner-option-grid-3">
              {activityOptions.map((activity) => (
                <button
                  type="button"
                  key={activity}
                  className={`planner-option-tile planner-activity-tile ${activities.includes(activity) ? 'selected' : ''}`}
                  onClick={() => toggleActivity(activity)}
                >
                  <span className="planner-option-dot" aria-hidden="true" />
                  {optionLabel('activities', activityOptions, activity)}
                </button>
              ))}
            </div>
          </section>

          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>{t('journey.title')}</h3>
              <p>{t('journey.copy')}</p>
            </div>
            <div className="planner-grid planner-grid-3">
              <label className="planner-field-stack">{t('journey.style')}
                <select className="planner-input" value={travelStyle} onChange={(event) => setTravelStyle(event.target.value)}>
                  {travelStyles.map((option, index) => <option key={option} value={option}>{labels('travelStyles')[index]}</option>)}
                </select>
              </label>
              <label className="planner-field-stack">{t('journey.pace')}
                <select className="planner-input" value={travelPace} onChange={(event) => setTravelPace(event.target.value)}>
                  {travelPaces.map((option, index) => <option key={option} value={option}>{labels('paces')[index]}</option>)}
                </select>
              </label>
              <label className="planner-field-stack">{t('journey.transport')}
                <select className="planner-input" value={transportPreference} onChange={(event) => setTransportPreference(event.target.value)}>
                  {transportOptions.map((option, index) => <option key={option} value={option}>{labels('transport')[index]}</option>)}
                </select>
              </label>
            </div>
            <label className={`planner-radio-row planner-journey-check ${chauffeurRequired ? 'checked' : ''}`}>
              <input type="checkbox" checked={chauffeurRequired} onChange={(event) => setChauffeurRequired(event.target.checked)} />
              <span className="planner-radio-mark" aria-hidden="true" />
              <span>{t('journey.chauffeur')}</span>
            </label>
          </section>

          <section className="planner-panel">
            <div className="planner-panel-header planner-panel-header-stack">
              <h3>{t('requests.title')}</h3>
              <p>{t('requests.copy')}</p>
            </div>
            <div className="planner-grid planner-grid-2 planner-request-grid">
              <label className="planner-field-stack">{t('requests.dietary')}
                <input className="planner-input" placeholder={t('requests.dietaryPlaceholder')} value={dietaryRequirements} onChange={(event) => setDietaryRequirements(event.target.value)} />
              </label>
              <label className="planner-field-stack">{t('requests.accessibility')}
                <input className="planner-input" placeholder={t('requests.accessibilityPlaceholder')} value={accessibilityRequirements} onChange={(event) => setAccessibilityRequirements(event.target.value)} />
              </label>
            </div>
            <textarea
              className="planner-input planner-textarea"
              rows={5}
              placeholder={t('requests.requestsPlaceholder')}
              value={specialRequests}
              onChange={(event) => setSpecialRequests(event.target.value)}
            />
            <div className="planner-summary-grid">
              <div className="planner-summary-chip">
                {mapPickerCopy[locale].preferred}: {selectedLocations.length > 0 ? selectedLocations.join(' · ') : '—'}
              </div>
              <div className="planner-summary-chip">{t('summary.travelers', { count: totalTravelers })}</div>
              <div className="planner-summary-chip">{t('summary.style', { mode: planningMode === 'early' ? t('pill.early') : t('pill.full') })}</div>
            </div>
          </section>
        </>
      )}

      {isLastStep && aiError && (
        <div className="planner-inline-error">{aiError} {t.rich('errors.contact', { link: (chunks) => <a href="/contact">{chunks}</a> })}</div>
      )}

      <div className="planner-actions">
        <button type="button" className="planner-secondary-button" onClick={goBack}>{t('back')}</button>
        {isLastStep ? (
          <button type="submit" className="planner-primary-button" disabled={aiLoading || activities.length === 0}>
            {aiLoading ? t('actions.generating') : t('actions.generate')}
          </button>
        ) : (
          <button type="button" className="planner-primary-button" onClick={() => setStepIndex((current) => Math.min(stepLabels.length - 1, current + 1))}>
            {t('actions.continue')}
          </button>
        )}
      </div>

      <p className="planner-inline-footer">{t('footer')}</p>
    </form>
  );
}
