import { catalog, type CatalogItem } from './catalog';

export interface LocalSearchResult extends CatalogItem {
  reason: string;
  score: number;
}

interface PlannerInput {
  adults?: number;
  children?: number;
  arrivalDate?: string;
  departureDate?: string;
  selectedLocation?: string;
  selectedLocations?: string[];
  hotelType?: string;
  roomCategory?: string;
  mealPlan?: string;
  activities?: string[];
  specialRequests?: string;
  budget?: string;
  travelStyle?: string;
  travelPace?: string;
  transportPreference?: string;
  dietaryRequirements?: string;
  accessibilityRequirements?: string;
  language?: string;
}

type LocalizedValues = { en: string; fr: string; de: string; it: string; es?: string; lt?: string };

function choose(language: string | undefined, values: LocalizedValues): string {
  const selected = language as keyof LocalizedValues;
  return (language && values[selected]) || values.en;
}

function localizedSuggestions(language: string, kind: 'handoff' | 'cricket' | 'plan' | 'explore'): string[] {
  const sets = {
    handoff: { en: ['Open contact page', 'Plan an itinerary'], fr: ['Ouvrir la page contact', 'Créer un itinéraire'], de: ['Kontakt öffnen', 'Route planen'], it: ['Apri i contatti', 'Crea un itinerario'], es: ['Abrir la página de contacto', 'Planificar un itinerario'], lt: ['Atverti kontaktų puslapį', 'Planuoti maršrutą'] },
    cricket: { en: ['School team · 18 travellers', 'Spectator package', 'Ground & coaching'], fr: ['Équipe scolaire · 18 voyageurs', 'Séjour spectateurs', 'Terrain et coaching'], de: ['Schulteam · 18 Reisende', 'Zuschauerpaket', 'Platz & Coaching'], it: ['Squadra scolastica · 18', 'Pacchetto spettatori', 'Campo e coaching'], es: ['Equipo escolar · 18 viajeros', 'Paquete para espectadores', 'Campo y entrenamiento'], lt: ['Mokyklos komanda · 18 keliautojų', 'Žiūrovų paketas', 'Aikštė ir treniruotės'] },
    plan: { en: ['Build my itinerary', 'Add a beach finish', 'Talk to a specialist'], fr: ['Créer mon itinéraire', 'Ajouter une fin à la plage', 'Parler à un spécialiste'], de: ['Meine Route erstellen', 'Strandabschluss hinzufügen', 'Spezialisten sprechen'], it: ['Crea il mio itinerario', 'Aggiungi il mare', 'Parla con uno specialista'], es: ['Crear mi itinerario', 'Añadir un final en la playa', 'Hablar con un especialista'], lt: ['Kurti mano maršrutą', 'Pridėti poilsį paplūdimyje', 'Kalbėtis su specialistu'] },
    explore: { en: ['7 days · wildlife + beach', 'Boutique culture trip', 'Cricket group tour'], fr: ['7 jours · safari + plage', 'Culture et hôtels boutique', 'Voyage cricket en groupe'], de: ['7 Tage · Safari + Strand', 'Kultur & Boutiquehotels', 'Cricket-Gruppenreise'], it: ['7 giorni · safari + mare', 'Cultura e boutique hotel', 'Tour cricket di gruppo'], es: ['7 días · safari + playa', 'Cultura y hoteles boutique', 'Viaje de críquet en grupo'], lt: ['7 dienos · gamta + paplūdimys', 'Kultūra ir išskirtiniai viešbučiai', 'Grupinė kriketo kelionė'] },
  } as const;
  return [...sets[kind][(language in sets[kind] ? language : 'en') as keyof typeof sets[typeof kind]]];
}

const intentVocabulary: Record<string, string[]> = {
  wildlife: ['wildlife', 'safari', 'leopard', 'elephant', 'yala', 'nature', 'jungle', 'fauna', 'naturaleza', 'leopardo', 'elefante', 'gamta', 'leopardas', 'dramblys'],
  beach: ['beach', 'coast', 'ocean', 'sea', 'surf', 'water sports', 'bentota', 'galle', 'playa', 'costa', 'mar', 'paplūdimys', 'pakrantė', 'jūra'],
  culture: ['culture', 'cultural', 'heritage', 'temple', 'ancient', 'history', 'polonnaruwa', 'cultura', 'patrimonio', 'templo', 'historia', 'kultūra', 'paveldas', 'šventykla', 'istorija'],
  adventure: ['adventure', 'hiking', 'bike', 'biking', 'canoe', 'camping', 'active', 'aventura', 'senderismo', 'bicicleta', 'nuotykiai', 'žygis', 'dviratis'],
  tea: ['tea', 'hill country', 'kandy', 'nuwara', 'train', 'té', 'tren', 'arbata', 'traukinys'],
  cricket: ['cricket', 'match', 'club', 'school', 'coaching', 'spectator', 'críquet', 'partido', 'kriketas', 'rungtynės'],
  luxury: ['luxury', 'five star', '5 star', 'boutique', 'villa', 'private', 'lujo', 'privado', 'prabanga', 'privatus'],
  transport: ['transport', 'driver', 'chauffeur', 'car', 'van', 'coach', 'rail', 'helicopter', 'transporte', 'conductor', 'coche', 'transportas', 'vairuotojas', 'automobilis'],
  hotel: ['hotel', 'stay', 'accommodation', 'villa', 'room', 'alojamiento', 'habitación', 'viešbutis', 'nakvynė', 'kambarys'],
};

function normalize(value: string): string {
  return value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9\s&-]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function detectInterests(input: string): string[] {
  const value = normalize(input);
  return Object.entries(intentVocabulary)
    .filter(([, words]) => words.some((word) => value.includes(normalize(word))))
    .map(([intent]) => intent);
}

function durationFromText(input: string): number | null {
  const value = normalize(input);
  if (/\b(a|one) week\b/.test(value)) return 7;
  if (/\b(two|2) weeks?\b/.test(value)) return 14;
  const match = value.match(/\b(\d{1,2})\s*(day|night)s?\b/);
  return match ? Math.max(2, Math.min(14, Number(match[1]))) : null;
}

function scoreItem(item: CatalogItem, query: string, interests: string[]): number {
  const haystack = normalize(`${item.title} ${item.summary} ${item.tags.join(' ')}`);
  const words = normalize(query).split(' ').filter((word) => word.length > 2);
  let score = words.reduce((total, word) => total + (haystack.includes(word) ? 2 : 0), 0);
  score += interests.reduce((total, interest) => total + (haystack.includes(interest) ? 5 : 0), 0);

  if (interests.includes('hotel') && item.type === 'hotel') score += 5;
  if (interests.includes('transport') && item.type === 'transport') score += 5;
  if (interests.includes('cricket') && item.type === 'cricket') score += 8;
  if (durationFromText(query) && item.tags.includes('multi-day')) score += 4;
  return score;
}

export function localSearch(query: string, limit = 6, language = 'en'): LocalSearchResult[] {
  const interests = detectInterests(query);
  const ranked = catalog
    .map((item) => ({ item, score: scoreItem(item, query, interests) }))
    .sort((a, b) => b.score - a.score);

  const hasSignal = ranked[0]?.score > 0;
  return ranked
    .filter((entry) => (hasSignal ? entry.score > 0 : ['tour', 'excursion', 'hotel'].includes(entry.item.type)))
    .slice(0, limit)
    .map(({ item, score }) => {
      const shared = interests.filter((interest) => normalize(`${item.tags.join(' ')} ${item.summary}`).includes(interest));
      const interestLabel = shared.slice(0, 2).join(' & ');
      const reason = shared.length
        ? choose(language, { en: `A strong match for your ${interestLabel} interests.`, fr: `Un excellent choix pour vos envies : ${interestLabel}.`, de: `Passt besonders gut zu Ihren Interessen: ${interestLabel}.`, it: `Ideale per i tuoi interessi: ${interestLabel}.`, es: `Una opción ideal para tus intereses de ${interestLabel}.`, lt: `Puikiai atitinka jūsų pomėgius: ${interestLabel}.` })
        : choose(language, { en: `A flexible ${item.type} option that can be shaped around your trip.`, fr: `Une option ${item.type} flexible à intégrer à votre voyage.`, de: `Eine flexible ${item.type}-Option für Ihre Reise.`, it: `Un'opzione ${item.type} flessibile per il tuo viaggio.`, es: `Una opción flexible de tipo ${item.type} que puede adaptarse a tu viaje.`, lt: `Lankstus ${item.type} pasiūlymas, kurį galima pritaikyti jūsų kelionei.` });
      return { ...item, score, reason };
    });
}

function tripLength(input: PlannerInput): number {
  if (input.arrivalDate && input.departureDate) {
    const start = new Date(`${input.arrivalDate}T00:00:00Z`).getTime();
    const end = new Date(`${input.departureDate}T00:00:00Z`).getTime();
    const nights = Math.round((end - start) / 86_400_000);
    if (Number.isFinite(nights) && nights > 0) return Math.min(14, nights);
  }
  return durationFromText(input.specialRequests || '') || 7;
}

export function localItinerary(input: PlannerInput) {
  const nights = tripLength(input);
  const interestText = [...(input.activities || []), input.specialRequests || ''].join(' ');
  const interests = detectInterests(interestText);
  const effectiveInterests = interests.length ? interests : ['culture', 'wildlife', 'beach'];
  const query = `${nights} days ${effectiveInterests.join(' ')} ${input.hotelType || ''}`;
  const language = input.language || 'en';
  const matches = localSearch(query, 6, language);
  const routeLocations = (input.selectedLocations?.filter(Boolean) || (input.selectedLocation ? [input.selectedLocation] : []))
    .map((location) => location.trim())
    .filter((location, index, locations) => location.length > 0 && locations.indexOf(location) === index);

  const days = routeLocations.map((destination, index) => {
    const date = input.arrivalDate ? new Date(new Date(`${input.arrivalDate}T00:00:00Z`).getTime() + index * 86_400_000).toISOString().slice(0, 10) : '';
    const summary = choose(language, {
      en: `${destination} is included as selected. Activities, timing and accommodation will be refined by the Serendia team.`,
      fr: `${destination} est incluse comme destination sélectionnée. Les activités, horaires et hébergements seront affinés par l’équipe Serendia.`,
      de: `${destination} ist als ausgewähltes Reiseziel enthalten. Aktivitäten, Zeiten und Unterkunft werden vom Serendia-Team abgestimmt.`,
      it: `${destination} è inclusa come destinazione selezionata. Attività, orari e alloggio saranno definiti dal team Serendia.`,
      es: `${destination} se incluye como destino seleccionado. El equipo de Serendia ajustará las actividades, los horarios y el alojamiento.`,
      lt: `${destination} įtraukta kaip pasirinkta kelionės vieta. Serendia komanda patikslins veiklas, laiką ir apgyvendinimą.`,
    });
    const details = {
      date,
      destination,
      morning: choose(language, { en: 'To be planned', fr: 'À planifier', de: 'Wird geplant', it: 'Da pianificare', es: 'Por planificar', lt: 'Bus suplanuota' }),
      afternoon: choose(language, { en: 'To be planned', fr: 'À planifier', de: 'Wird geplant', it: 'Da pianificare', es: 'Por planificar', lt: 'Bus suplanuota' }),
      evening: choose(language, { en: 'To be planned', fr: 'À planifier', de: 'Wird geplant', it: 'Da pianificare', es: 'Por planificar', lt: 'Bus suplanuota' }),
      overnightHotel: `${input.hotelType || 'Preferred'} hotel in ${destination} — to be confirmed`,
      drivingTime: choose(language, { en: 'To be confirmed for the final route', fr: 'À confirmer pour l’itinéraire final', de: 'Für die endgültige Route zu bestätigen', it: 'Da confermare per il percorso finale', es: 'Se confirmará para la ruta final', lt: 'Bus patvirtinta galutiniame maršrute' }),
      distance: 'To be confirmed by the transport team',
      meals: input.mealPlan || 'According to selected meal plan',
      notes: [input.dietaryRequirements, input.accessibilityRequirements].filter(Boolean).join(' · ') || 'Subject to availability and staff review',
    };
    return { title: destination, summary, ...details };
  });

  const matchedCatalog = matches.map(({ score: _score, reason, ...item }) => ({ ...item, why: reason }));
  const bestTour = matches.find((item) => item.type === 'tour');
  const bestHotel = matches.find((item) => item.type === 'hotel');

  return {
    days,
    matchedCatalog,
    draftQuote: [
      { label: choose(language, { en: 'Private journey', fr: 'Voyage privé', de: 'Private Rundreise', it: 'Viaggio privato', es: 'Viaje privado', lt: 'Privati kelionė' }), note: `${bestTour?.title || `${nights}-day tailor-made island route`} — ${choose(language, { en: 'on request', fr: 'sur demande', de: 'auf Anfrage', it: 'su richiesta', es: 'bajo petición', lt: 'pagal užklausą' })}` },
      { label: choose(language, { en: 'Accommodation', fr: 'Hébergement', de: 'Unterkunft', it: 'Alloggio', es: 'Alojamiento', lt: 'Apgyvendinimas' }), note: `${bestHotel?.title || input.hotelType || 'Hand-picked stays'} · ${input.roomCategory || 'best-fit room'} · ${input.mealPlan || 'flexible meal plan'} — ${choose(language, { en: 'on request', fr: 'sur demande', de: 'auf Anfrage', it: 'su richiesta', es: 'bajo petición', lt: 'pagal užklausą' })}` },
      { label: choose(language, { en: 'Transport', fr: 'Transport', de: 'Transport', it: 'Trasporti', es: 'Transporte', lt: 'Transportas' }), note: `${input.transportPreference || choose(language, { en: 'Private chauffeur vehicle, airport transfers and route logistics', fr: 'Véhicule privé avec chauffeur, transferts et logistique', de: 'Privater Chauffeur, Flughafentransfers und Routenlogistik', it: 'Veicolo privato con autista, trasferimenti e logistica', es: 'Vehículo privado con conductor, traslados al aeropuerto y logística de ruta', lt: 'Privatus automobilis su vairuotoju, pervežimai iš oro uosto ir maršruto logistika' })} — ${choose(language, { en: 'on request', fr: 'sur demande', de: 'auf Anfrage', it: 'su richiesta', es: 'bajo petición', lt: 'pagal užklausą' })}` },
      { label: choose(language, { en: 'Experiences', fr: 'Expériences', de: 'Erlebnisse', it: 'Esperienze', es: 'Experiencias', lt: 'Patirtys' }), note: `${effectiveInterests.slice(0, 3).join(', ')} — ${choose(language, { en: 'on request', fr: 'sur demande', de: 'auf Anfrage', it: 'su richiesta', es: 'bajo petición', lt: 'pagal užklausą' })}` },
    ],
    meta: { mode: 'catalogue-assist', reviewStatus: 'draft' as const },
  };
}

export function localChatReply(message: string, language = 'en'): { reply: string; handoff: boolean; suggestions: string[] } {
  const value = normalize(message);
  const needsHuman = ['book', 'confirm', 'availability', 'payment', 'pay', 'deposit', 'complaint', 'emergency', 'reservar', 'confirmar', 'disponibilidad', 'pago', 'queja', 'emergencia', 'uzsakyti', 'patvirtinti', 'prieinamumas', 'mokejimas', 'skundas', 'skubi pagalba'].some((word) => value.includes(word));
  const interests = detectInterests(value);
  const matches = localSearch(message, 2, language);

  if (needsHuman) {
    return {
      reply: choose(language, { en: 'I can help shape the request, but booking confirmation, availability and payments must be handled by a Serendia travel specialist. I’ve marked this as a human handoff—use the Contact page or call/WhatsApp +94 77 398 6504.', fr: 'Je peux préparer votre demande, mais la confirmation, les disponibilités et les paiements doivent être gérés par un spécialiste Serendia. Utilisez la page Contact ou WhatsApp au +94 77 398 6504.', de: 'Ich kann Ihre Anfrage vorbereiten. Bestätigung, Verfügbarkeit und Zahlungen übernimmt jedoch ein Serendia-Spezialist. Nutzen Sie die Kontaktseite oder WhatsApp unter +94 77 398 6504.', it: 'Posso preparare la richiesta, ma conferma, disponibilità e pagamenti devono essere gestiti da uno specialista Serendia. Usa la pagina Contatti o WhatsApp al +94 77 398 6504.', es: 'Puedo ayudarte a preparar la solicitud, pero un especialista de viajes de Serendia debe gestionar la confirmación, la disponibilidad y los pagos. He marcado la conversación para atención humana: usa la página de Contacto o llama o escribe por WhatsApp al +94 77 398 6504.', lt: 'Galiu padėti parengti užklausą, tačiau užsakymo patvirtinimą, prieinamumą ir mokėjimus turi tvarkyti Serendia kelionių specialistas. Pažymėjau, kad reikia žmogaus pagalbos – naudokite Kontaktų puslapį arba skambinkite ar rašykite per WhatsApp numeriu +94 77 398 6504.' }),
      handoff: true,
      suggestions: localizedSuggestions(language, 'handoff'),
    };
  }

  if (interests.includes('cricket')) {
    return {
      reply: choose(language, { en: 'Serendia can arrange school and club cricket tours, spectator trips, ground bookings, coaching and accommodation for players and families. Tell me your group size and approximate dates, and I’ll help structure the first draft.', fr: 'Serendia organise des voyages cricket pour écoles et clubs, des séjours spectateurs, des terrains, du coaching et l’hébergement. Indiquez-moi la taille du groupe et les dates approximatives.', de: 'Serendia organisiert Cricket-Reisen für Schulen und Clubs, Zuschauerreisen, Plätze, Coaching und Unterkünfte. Nennen Sie mir Gruppengröße und ungefähre Daten.', it: 'Serendia organizza tour di cricket per scuole e club, viaggi per spettatori, campi, coaching e alloggi. Indicami dimensioni del gruppo e date approssimative.', es: 'Serendia puede organizar viajes de críquet para escuelas y clubes, viajes para espectadores, reservas de campos, entrenamiento y alojamiento para jugadores y familias. Indícame el tamaño del grupo y las fechas aproximadas y te ayudaré a preparar el primer borrador.', lt: 'Serendia gali organizuoti mokyklų ir klubų kriketo keliones, išvykas žiūrovams, aikščių rezervavimą, treniruotes bei apgyvendinimą žaidėjams ir šeimoms. Nurodykite grupės dydį ir apytiksles datas, o aš padėsiu parengti pirmąjį planą.' }),
      handoff: false,
      suggestions: localizedSuggestions(language, 'cricket'),
    };
  }

  if (matches.length) {
    return {
      reply: choose(language, { en: `A good starting point is ${matches.map((item) => item.title).join(' or ')}. ${matches[0].reason} Would you like me to turn that into a day-by-day plan?`, fr: `Un bon point de départ serait ${matches.map((item) => item.title).join(' ou ')}. ${matches[0].reason} Voulez-vous un itinéraire jour par jour ?`, de: `Ein guter Ausgangspunkt ist ${matches.map((item) => item.title).join(' oder ')}. ${matches[0].reason} Soll ich daraus einen Tagesplan erstellen?`, it: `Un buon punto di partenza è ${matches.map((item) => item.title).join(' oppure ')}. ${matches[0].reason} Vuoi trasformarlo in un itinerario giorno per giorno?`, es: `Un buen punto de partida es ${matches.map((item) => item.title).join(' o ')}. ${matches[0].reason} ¿Quieres que lo convierta en un plan día a día?`, lt: `Gera pradžia būtų ${matches.map((item) => item.title).join(' arba ')}. ${matches[0].reason} Ar norėtumėte, kad sudaryčiau išsamų planą kiekvienai dienai?` }),
      handoff: false,
      suggestions: localizedSuggestions(language, 'plan'),
    };
  }

  return {
    reply: choose(language, { en: 'I can help with Sri Lanka tours, stays, transport, wildlife, culture, beaches, cricket travel and hospitality consultancy. Try telling me your trip length, interests and travel party.', fr: 'Je peux vous aider pour les circuits, hôtels, transports, safaris, culture, plages et voyages cricket au Sri Lanka. Indiquez-moi la durée, vos envies et le nombre de voyageurs.', de: 'Ich helfe bei Sri-Lanka-Rundreisen, Unterkünften, Transport, Tierwelt, Kultur, Stränden und Cricket-Reisen. Nennen Sie Reisedauer, Interessen und Personenzahl.', it: 'Posso aiutarti con tour, soggiorni, trasporti, natura, cultura, spiagge e viaggi cricket in Sri Lanka. Indicami durata, interessi e numero di viaggiatori.', es: 'Puedo ayudarte con circuitos, alojamientos, transporte, vida salvaje, cultura, playas, viajes de críquet y consultoría hotelera en Sri Lanka. Cuéntame la duración del viaje, tus intereses y cuántas personas viajan.', lt: 'Galiu padėti suplanuoti keliones po Šri Lanką, viešnages, transportą, laukinės gamtos ir kultūros patirtis, paplūdimius, kriketo keliones bei suteikti svetingumo konsultacijas. Parašykite kelionės trukmę, pomėgius ir keliautojų skaičių.' }),
    handoff: false,
    suggestions: localizedSuggestions(language, 'explore'),
  };
}

export function localContentDraft(input: { title?: string; tone?: string; language?: string; notes?: string }) {
  const title = input.title?.trim() || 'A Sri Lankan Journey';
  const language = input.language || 'English';
  const tone = input.tone || 'Warm and premium';
  const notes = input.notes?.trim() || 'culture, nature and thoughtful local hosting';
  return {
    title,
    excerpt: `${title} brings together ${notes} in a journey designed around the traveller, not a template.`,
    body: `Discover ${title}, a considered Serendia Holidays experience shaped around ${notes}. From the first private welcome to the final coastal sunset, each element is paced with care and supported by local expertise.\n\nEvery route can be adjusted to match the season, travel style and preferred level of comfort. Contact our team to refine the details, check availability and receive a confirmed quotation.`,
    metaDescription: `${title}: a tailor-made Sri Lanka experience with Serendia Holidays, built around ${notes}.`,
    language,
    tone,
    status: 'draft' as const,
  };
}
