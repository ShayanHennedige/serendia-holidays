/**
 * i18n for /tour-packages and its detail pages.
 *
 * Two layers:
 *  - `packagesDictionaries` — the fixed UI chrome (labels, buttons, headings). Small
 *    enough to ship for every locale, the same way `homeI18n.ts` does.
 *  - `loadPackagesContent(locale)` — the itinerary prose itself, keyed by the same ids
 *    used in `tourPackages.ts`. These are large, so each locale is a dynamic import
 *    and English visitors download nothing extra. Any key that is missing falls back
 *    to the English source, so a partial translation degrades one string at a time.
 */

import type { Locale } from './i18n';
import type { Experience, Hotel, Stop, TourPackage } from './tourPackages';

/* ------------------------------------------------------------------ *
 * UI chrome
 * ------------------------------------------------------------------ */

/** CLDR plural forms; `few` is only needed by locales that have that category. */
export type PluralForms = { one: string; few?: string; other: string };

export type PackagesCopy = {
  common: {
    indianOcean: string;
    sriLanka: string;
    from: string;
    cardMeta: string;
    included: string;
    optional: string;
    day: string;
    days: string;
    /** replaces the " to " in a stored day range such as "1 to 3" */
    dayRangeJoin: string;
    nightWord: PluralForms;
    dayWord: PluralForms;
  };
  index: {
    title: string;
    lede: string;
    eyebrow: string;
    introTitle: string;
    introCopy: string;
    startScratch: string;
    listTitle: string;
    listIntro: string;
    morePlaces: string;
    viewItinerary: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaCopy: string;
    planTrip: string;
    talkTeam: string;
  };
  detail: {
    enquire: string;
    seeItinerary: string;
    tripSummary: string;
    tourType: string;
    duration: string;
    nightsValue: string;
    visiting: string;
    bestFor: string;
    travelPeriod: string;
    beachExtension: string;
    itineraryOverview: string;
    extendHoliday: string;
    otherItineraries: string;
  };
  highlights: {
    title: string;
    carouselLabel: string;
    jumpToItinerary: string;
    previous: string;
    next: string;
    position: string;
  };
  itinerary: {
    label: string;
    thingsToDo: string;
    explore: string;
    goodToKnow: string;
    backToItinerary: string;
    close: string;
    scrollLeft: string;
    scrollRight: string;
    previousExperience: string;
    nextExperience: string;
    experienceDetail: string;
    recommendedHotel: string;
    recommendedHotels: string;
    personalise: string;
    personaliseCopy: string;
    enquireNow: string;
    buildYourOwn: string;
  };
  enquiry: {
    eyebrow: string;
    title: string;
    copy: string;
    priceLine: string;
    extensionLine: string;
    vehicleLine: string;
    hotelsLine: string;
    talkTeam: string;
    buildCustom: string;
    atAGlance: string;
    duration: string;
    durationValue: string;
    starts: string;
    ends: string;
    basis: string;
    halfBoard: string;
    travelPeriod: string;
    note: string;
  };
};

export const packagesDictionaries: Record<Locale, PackagesCopy> = {
  en: {
    common: {
      indianOcean: 'Indian Ocean',
      sriLanka: 'Sri Lanka',
      from: 'From',
      cardMeta: 'Sri Lanka · {nights} {nightWord}',
      included: 'Included in price',
      optional: 'Optional',
      day: 'Day',
      days: 'Days',
      dayRangeJoin: ' to ',
      nightWord: { one: 'night', other: 'nights' },
      dayWord: { one: 'day', other: 'days' },
    },
    index: {
      title: 'Sri Lanka Tour Packages',
      lede: 'Four ready-costed journeys covering the island end to end — each one private, each one a starting point rather than a fixed departure.',
      eyebrow: 'The collection',
      introTitle: 'Pick a route, then change anything you like.',
      introCopy: 'Every package below runs with a private vehicle and chauffeur guide throughout, on a half-board basis, with quoted hotels at each stop and optional upgrades alongside them. Prices are valid for travel between 01 November 2026 and 30 April 2027.',
      startScratch: 'Or start from scratch',
      listTitle: 'See more on a multi-centre trip',
      listIntro: 'These itineraries pair contrasting places and experiences, so you can see much more in one trip.',
      morePlaces: '+{count} more',
      viewItinerary: 'View itinerary',
      ctaEyebrow: 'Not quite it?',
      ctaTitle: 'Every one of these can be rewritten.',
      ctaCopy: 'Add a beach extension, swap a hotel, stretch the hill country or bolt the Maldives onto the end. Tell us what you want and a Serendia specialist will cost it properly.',
      planTrip: 'Plan your trip',
      talkTeam: 'Talk to our team',
    },
    detail: {
      enquire: 'Enquire about this trip',
      seeItinerary: 'See the itinerary',
      tripSummary: 'Trip summary',
      tourType: 'Tour type',
      duration: 'Duration',
      nightsValue: '{nights} {nightWord}',
      visiting: 'Visiting',
      bestFor: 'Best for',
      travelPeriod: 'Travel period',
      beachExtension: 'Beach extension',
      itineraryOverview: 'Itinerary overview',
      extendHoliday: 'Extend your holiday',
      otherItineraries: 'Other itineraries',
    },
    highlights: {
      title: 'Highlights of trip',
      carouselLabel: 'Highlights of trip',
      jumpToItinerary: 'Jump to itinerary',
      previous: 'Previous highlight',
      next: 'Next highlight',
      position: 'Highlight {index} of {count}: {name}',
    },
    itinerary: {
      label: 'Day by day itinerary',
      thingsToDo: 'Things to do',
      explore: 'Explore',
      goodToKnow: 'Good to know',
      backToItinerary: 'Back to itinerary',
      close: 'Close',
      scrollLeft: 'Scroll things to do left',
      scrollRight: 'Scroll things to do right',
      previousExperience: 'Previous experience',
      nextExperience: 'Next experience',
      experienceDetail: 'Experience detail',
      recommendedHotel: 'Recommended hotel',
      recommendedHotels: 'Recommended hotels',
      personalise: 'Personalise your trip',
      personaliseCopy: 'Get in touch with one of our travel experts and we’ll help plan your perfect holiday.',
      enquireNow: 'Enquire now',
      buildYourOwn: 'Build your own',
    },
    enquiry: {
      eyebrow: 'Plan your trip',
      title: 'Make {name} your own',
      copy: 'Every price here is a starting point for {nights} nights on a half-board basis, travelling between {period}. Tell us your dates and how you like to travel and we will come back with a costed version — hotels swapped, days added or removed, nothing locked in.',
      priceLine: 'From {price} {basis}',
      extensionLine: 'Beach extension {price}',
      vehicleLine: 'Private vehicle and chauffeur guide throughout',
      hotelsLine: 'Quoted hotels shown, with optional upgrades at every stop',
      talkTeam: 'Talk to our team',
      buildCustom: 'Build a custom trip',
      atAGlance: 'At a glance',
      duration: 'Duration',
      durationValue: '{days} {dayWord} · {nights} {nightWord}',
      starts: 'Starts',
      ends: 'Ends',
      basis: 'Basis',
      halfBoard: 'Half board',
      travelPeriod: 'Travel period',
      note: 'Prices are per person sharing and exclude international flights and visa. Final pricing is confirmed by a Serendia specialist against live availability.',
    },
  },

  fr: {
    common: {
      indianOcean: 'Océan Indien',
      sriLanka: 'Sri Lanka',
      from: 'À partir de',
      cardMeta: 'Sri Lanka · {nights} {nightWord}',
      included: 'Inclus dans le prix',
      optional: 'En option',
      day: 'Jour',
      days: 'Jours',
      dayRangeJoin: ' à ',
      nightWord: { one: 'nuit', other: 'nuits' },
      dayWord: { one: 'jour', other: 'jours' },
    },
    index: {
      title: 'Circuits au Sri Lanka',
      lede: 'Quatre voyages déjà chiffrés qui parcourent l’île d’un bout à l’autre — tous privés, tous conçus comme un point de départ plutôt qu’un départ figé.',
      eyebrow: 'La collection',
      introTitle: 'Choisissez un itinéraire, puis modifiez tout ce que vous voulez.',
      introCopy: 'Chaque forfait ci-dessous se déroule avec véhicule privé et chauffeur-guide tout au long du séjour, en demi-pension, avec des hôtels chiffrés à chaque étape et des surclassements en option. Tarifs valables pour un voyage entre le 01 novembre 2026 et le 30 avril 2027.',
      startScratch: 'Ou partir d’une page blanche',
      listTitle: 'Voir plus avec un circuit multi-étapes',
      listIntro: 'Ces itinéraires associent des lieux et des expériences contrastés, pour découvrir bien plus en un seul voyage.',
      morePlaces: '+{count} autres',
      viewItinerary: 'Voir l’itinéraire',
      ctaEyebrow: 'Pas tout à fait ça ?',
      ctaTitle: 'Chacun de ces circuits peut être réécrit.',
      ctaCopy: 'Ajoutez une extension balnéaire, changez d’hôtel, prolongez les hauts plateaux ou terminez aux Maldives. Dites-nous ce que vous souhaitez et un spécialiste Serendia le chiffrera précisément.',
      planTrip: 'Planifier le voyage',
      talkTeam: 'Parler à notre équipe',
    },
    detail: {
      enquire: 'Demander un devis',
      seeItinerary: 'Voir l’itinéraire',
      tripSummary: 'Résumé du voyage',
      tourType: 'Type de circuit',
      duration: 'Durée',
      nightsValue: '{nights} {nightWord}',
      visiting: 'Étapes',
      bestFor: 'Idéal pour',
      travelPeriod: 'Période de voyage',
      beachExtension: 'Extension balnéaire',
      itineraryOverview: 'Aperçu de l’itinéraire',
      extendHoliday: 'Prolonger vos vacances',
      otherItineraries: 'Autres itinéraires',
    },
    highlights: {
      title: 'Temps forts du voyage',
      carouselLabel: 'Temps forts du voyage',
      jumpToItinerary: 'Aller à l’itinéraire',
      previous: 'Temps fort précédent',
      next: 'Temps fort suivant',
      position: 'Temps fort {index} sur {count} : {name}',
    },
    itinerary: {
      label: 'Itinéraire jour par jour',
      thingsToDo: 'À faire sur place',
      explore: 'Découvrir',
      goodToKnow: 'Bon à savoir',
      backToItinerary: 'Retour à l’itinéraire',
      close: 'Fermer',
      scrollLeft: 'Faire défiler les activités vers la gauche',
      scrollRight: 'Faire défiler les activités vers la droite',
      previousExperience: 'Expérience précédente',
      nextExperience: 'Expérience suivante',
      experienceDetail: 'Détail de l’expérience',
      recommendedHotel: 'Hôtel recommandé',
      recommendedHotels: 'Hôtels recommandés',
      personalise: 'Personnalisez votre voyage',
      personaliseCopy: 'Contactez l’un de nos experts en voyage : nous vous aiderons à composer vos vacances idéales.',
      enquireNow: 'Demander un devis',
      buildYourOwn: 'Créer le vôtre',
    },
    enquiry: {
      eyebrow: 'Planifier le voyage',
      title: 'Faites de « {name} » votre voyage',
      copy: 'Chaque tarif indiqué est un point de départ pour {nights} nuits en demi-pension, pour un voyage entre {period}. Donnez-nous vos dates et votre façon de voyager et nous reviendrons vers vous avec une version chiffrée — hôtels remplacés, jours ajoutés ou retirés, rien n’est figé.',
      priceLine: 'À partir de {price} {basis}',
      extensionLine: 'Extension balnéaire {price}',
      vehicleLine: 'Véhicule privé et chauffeur-guide tout au long du séjour',
      hotelsLine: 'Hôtels chiffrés indiqués, avec surclassements en option à chaque étape',
      talkTeam: 'Parler à notre équipe',
      buildCustom: 'Créer un voyage sur mesure',
      atAGlance: 'En bref',
      duration: 'Durée',
      durationValue: '{days} {dayWord} · {nights} {nightWord}',
      starts: 'Départ',
      ends: 'Arrivée',
      basis: 'Formule',
      halfBoard: 'Demi-pension',
      travelPeriod: 'Période de voyage',
      note: 'Les prix s’entendent par personne en chambre partagée et n’incluent ni les vols internationaux ni le visa. Le tarif définitif est confirmé par un spécialiste Serendia selon les disponibilités réelles.',
    },
  },

  de: {
    common: {
      indianOcean: 'Indischer Ozean',
      sriLanka: 'Sri Lanka',
      from: 'Ab',
      cardMeta: 'Sri Lanka · {nights} {nightWord}',
      included: 'Im Preis enthalten',
      optional: 'Optional',
      day: 'Tag',
      days: 'Tage',
      dayRangeJoin: ' bis ',
      nightWord: { one: 'Nacht', other: 'Nächte' },
      dayWord: { one: 'Tag', other: 'Tage' },
    },
    index: {
      title: 'Sri Lanka Reisepakete',
      lede: 'Vier fertig kalkulierte Reisen quer über die Insel — jede privat, jede als Ausgangspunkt gedacht und nicht als feste Abreise.',
      eyebrow: 'Die Kollektion',
      introTitle: 'Wählen Sie eine Route und ändern Sie alles, was Sie möchten.',
      introCopy: 'Jedes Paket unten wird durchgehend mit privatem Fahrzeug und Fahrer-Guide durchgeführt, auf Halbpensionsbasis, mit kalkulierten Hotels an jedem Stopp und optionalen Upgrades daneben. Die Preise gelten für Reisen zwischen dem 01. November 2026 und dem 30. April 2027.',
      startScratch: 'Oder ganz neu beginnen',
      listTitle: 'Mehr sehen auf einer Rundreise',
      listIntro: 'Diese Routen verbinden gegensätzliche Orte und Erlebnisse, damit Sie auf einer Reise deutlich mehr sehen.',
      morePlaces: '+{count} weitere',
      viewItinerary: 'Reiseverlauf ansehen',
      ctaEyebrow: 'Nicht ganz das Richtige?',
      ctaTitle: 'Jede dieser Reisen lässt sich neu schreiben.',
      ctaCopy: 'Hängen Sie eine Strandverlängerung an, tauschen Sie ein Hotel, verlängern Sie das Hochland oder setzen Sie die Malediven ans Ende. Sagen Sie uns, was Sie möchten, und ein Serendia-Spezialist kalkuliert es sauber durch.',
      planTrip: 'Reise planen',
      talkTeam: 'Mit unserem Team sprechen',
    },
    detail: {
      enquire: 'Diese Reise anfragen',
      seeItinerary: 'Zum Reiseverlauf',
      tripSummary: 'Reiseüberblick',
      tourType: 'Reiseart',
      duration: 'Dauer',
      nightsValue: '{nights} {nightWord}',
      visiting: 'Stationen',
      bestFor: 'Ideal für',
      travelPeriod: 'Reisezeitraum',
      beachExtension: 'Strandverlängerung',
      itineraryOverview: 'Überblick über den Reiseverlauf',
      extendHoliday: 'Urlaub verlängern',
      otherItineraries: 'Weitere Reiserouten',
    },
    highlights: {
      title: 'Höhepunkte der Reise',
      carouselLabel: 'Höhepunkte der Reise',
      jumpToItinerary: 'Zum Reiseverlauf springen',
      previous: 'Vorheriger Höhepunkt',
      next: 'Nächster Höhepunkt',
      position: 'Höhepunkt {index} von {count}: {name}',
    },
    itinerary: {
      label: 'Reiseverlauf Tag für Tag',
      thingsToDo: 'Unternehmungen',
      explore: 'Entdecken',
      goodToKnow: 'Gut zu wissen',
      backToItinerary: 'Zurück zum Reiseverlauf',
      close: 'Schließen',
      scrollLeft: 'Unternehmungen nach links scrollen',
      scrollRight: 'Unternehmungen nach rechts scrollen',
      previousExperience: 'Vorheriges Erlebnis',
      nextExperience: 'Nächstes Erlebnis',
      experienceDetail: 'Erlebnisdetails',
      recommendedHotel: 'Empfohlenes Hotel',
      recommendedHotels: 'Empfohlene Hotels',
      personalise: 'Gestalten Sie Ihre Reise',
      personaliseCopy: 'Sprechen Sie mit einem unserer Reiseexperten — wir planen Ihren perfekten Urlaub gemeinsam.',
      enquireNow: 'Jetzt anfragen',
      buildYourOwn: 'Eigene Reise gestalten',
    },
    enquiry: {
      eyebrow: 'Reise planen',
      title: '„{name}“ nach Ihren Wünschen',
      copy: 'Jeder Preis hier ist ein Ausgangspunkt für {nights} Nächte auf Halbpensionsbasis, für Reisen zwischen {period}. Nennen Sie uns Ihre Termine und Ihren Reisestil, und wir melden uns mit einer kalkulierten Fassung zurück — Hotels getauscht, Tage ergänzt oder gestrichen, nichts ist festgelegt.',
      priceLine: 'Ab {price} {basis}',
      extensionLine: 'Strandverlängerung {price}',
      vehicleLine: 'Durchgehend privates Fahrzeug mit Fahrer-Guide',
      hotelsLine: 'Kalkulierte Hotels ausgewiesen, mit optionalen Upgrades an jedem Stopp',
      talkTeam: 'Mit unserem Team sprechen',
      buildCustom: 'Individuelle Reise gestalten',
      atAGlance: 'Auf einen Blick',
      duration: 'Dauer',
      durationValue: '{days} {dayWord} · {nights} {nightWord}',
      starts: 'Beginn',
      ends: 'Ende',
      basis: 'Verpflegung',
      halfBoard: 'Halbpension',
      travelPeriod: 'Reisezeitraum',
      note: 'Die Preise gelten pro Person im Doppelzimmer und enthalten keine internationalen Flüge und kein Visum. Der Endpreis wird von einem Serendia-Spezialisten anhand der aktuellen Verfügbarkeit bestätigt.',
    },
  },

  it: {
    common: {
      indianOcean: 'Oceano Indiano',
      sriLanka: 'Sri Lanka',
      from: 'Da',
      cardMeta: 'Sri Lanka · {nights} {nightWord}',
      included: 'Incluso nel prezzo',
      optional: 'Facoltativo',
      day: 'Giorno',
      days: 'Giorni',
      dayRangeJoin: '–',
      nightWord: { one: 'notte', other: 'notti' },
      dayWord: { one: 'giorno', other: 'giorni' },
    },
    index: {
      title: 'Pacchetti viaggio in Sri Lanka',
      lede: 'Quattro viaggi già quotati che attraversano l’isola da un capo all’altro — tutti privati, tutti pensati come punto di partenza e non come partenza fissa.',
      eyebrow: 'La collezione',
      introTitle: 'Scegli un itinerario, poi cambia tutto quello che vuoi.',
      introCopy: 'Ogni pacchetto qui sotto si svolge con veicolo privato e autista-guida per tutta la durata, in mezza pensione, con hotel quotati a ogni tappa e upgrade facoltativi accanto a essi. Prezzi validi per viaggi tra il 01 novembre 2026 e il 30 aprile 2027.',
      startScratch: 'Oppure parti da zero',
      listTitle: 'Vedi di più con un viaggio multi-tappa',
      listIntro: 'Questi itinerari uniscono luoghi ed esperienze in contrasto tra loro, così vedi molto di più in un solo viaggio.',
      morePlaces: '+{count} altre',
      viewItinerary: 'Vedi l’itinerario',
      ctaEyebrow: 'Non è proprio quello?',
      ctaTitle: 'Ognuno di questi viaggi può essere riscritto.',
      ctaCopy: 'Aggiungi un’estensione mare, cambia hotel, allunga la regione collinare o aggiungi le Maldive alla fine. Dicci cosa desideri e uno specialista Serendia lo quoterà come si deve.',
      planTrip: 'Pianifica il viaggio',
      talkTeam: 'Parla con il nostro team',
    },
    detail: {
      enquire: 'Richiedi informazioni',
      seeItinerary: 'Vedi l’itinerario',
      tripSummary: 'Riepilogo del viaggio',
      tourType: 'Tipo di viaggio',
      duration: 'Durata',
      nightsValue: '{nights} {nightWord}',
      visiting: 'Tappe',
      bestFor: 'Ideale per',
      travelPeriod: 'Periodo di viaggio',
      beachExtension: 'Estensione mare',
      itineraryOverview: 'Panoramica dell’itinerario',
      extendHoliday: 'Prolunga la vacanza',
      otherItineraries: 'Altri itinerari',
    },
    highlights: {
      title: 'I momenti clou del viaggio',
      carouselLabel: 'I momenti clou del viaggio',
      jumpToItinerary: 'Vai all’itinerario',
      previous: 'Momento precedente',
      next: 'Momento successivo',
      position: 'Momento {index} di {count}: {name}',
    },
    itinerary: {
      label: 'Itinerario giorno per giorno',
      thingsToDo: 'Cosa fare',
      explore: 'Scopri',
      goodToKnow: 'Buono a sapersi',
      backToItinerary: 'Torna all’itinerario',
      close: 'Chiudi',
      scrollLeft: 'Scorri le attività verso sinistra',
      scrollRight: 'Scorri le attività verso destra',
      previousExperience: 'Esperienza precedente',
      nextExperience: 'Esperienza successiva',
      experienceDetail: 'Dettaglio dell’esperienza',
      recommendedHotel: 'Hotel consigliato',
      recommendedHotels: 'Hotel consigliati',
      personalise: 'Personalizza il tuo viaggio',
      personaliseCopy: 'Contatta uno dei nostri esperti di viaggio e ti aiuteremo a costruire la vacanza perfetta.',
      enquireNow: 'Richiedi ora',
      buildYourOwn: 'Crea il tuo',
    },
    enquiry: {
      eyebrow: 'Pianifica il viaggio',
      title: 'Rendi «{name}» il tuo viaggio',
      copy: 'Ogni prezzo indicato è un punto di partenza per {nights} notti in mezza pensione, per viaggi tra {period}. Dicci le tue date e come ti piace viaggiare e torneremo da te con una versione quotata — hotel sostituiti, giorni aggiunti o tolti, niente è definitivo.',
      priceLine: 'Da {price} {basis}',
      extensionLine: 'Estensione mare {price}',
      vehicleLine: 'Veicolo privato e autista-guida per tutta la durata',
      hotelsLine: 'Hotel quotati indicati, con upgrade facoltativi a ogni tappa',
      talkTeam: 'Parla con il nostro team',
      buildCustom: 'Crea un viaggio su misura',
      atAGlance: 'In sintesi',
      duration: 'Durata',
      durationValue: '{days} {dayWord} · {nights} {nightWord}',
      starts: 'Inizio',
      ends: 'Fine',
      basis: 'Trattamento',
      halfBoard: 'Mezza pensione',
      travelPeriod: 'Periodo di viaggio',
      note: 'I prezzi sono per persona in camera condivisa ed escludono voli internazionali e visto. Il prezzo finale viene confermato da uno specialista Serendia in base alla disponibilità reale.',
    },
  },

  es: {
    common: {
      indianOcean: 'Océano Índico',
      sriLanka: 'Sri Lanka',
      from: 'Desde',
      cardMeta: 'Sri Lanka · {nights} {nightWord}',
      included: 'Incluido en el precio',
      optional: 'Opcional',
      day: 'Día',
      days: 'Días',
      dayRangeJoin: ' a ',
      nightWord: { one: 'noche', other: 'noches' },
      dayWord: { one: 'día', other: 'días' },
    },
    index: {
      title: 'Paquetes de viaje a Sri Lanka',
      lede: 'Cuatro viajes ya presupuestados que recorren la isla de punta a punta: todos privados y todos pensados como punto de partida, no como una salida cerrada.',
      eyebrow: 'La colección',
      introTitle: 'Elige una ruta y luego cambia lo que quieras.',
      introCopy: 'Todos los paquetes se realizan con vehículo privado y chófer-guía durante todo el recorrido, en régimen de media pensión, con hoteles presupuestados en cada etapa y mejoras opcionales junto a ellos. Precios válidos para viajes entre el 01 de noviembre de 2026 y el 30 de abril de 2027.',
      startScratch: 'O empieza desde cero',
      listTitle: 'Ve más en un viaje de varias etapas',
      listIntro: 'Estos itinerarios combinan lugares y experiencias muy distintos, así que verás mucho más en un solo viaje.',
      morePlaces: '+{count} más',
      viewItinerary: 'Ver itinerario',
      ctaEyebrow: '¿No es exactamente eso?',
      ctaTitle: 'Cualquiera de estos viajes se puede reescribir.',
      ctaCopy: 'Añade una extensión de playa, cambia un hotel, alarga la zona montañosa o termina en las Maldivas. Dinos qué quieres y un especialista de Serendia lo presupuestará como es debido.',
      planTrip: 'Planifica tu viaje',
      talkTeam: 'Habla con nuestro equipo',
    },
    detail: {
      enquire: 'Solicitar información',
      seeItinerary: 'Ver el itinerario',
      tripSummary: 'Resumen del viaje',
      tourType: 'Tipo de viaje',
      duration: 'Duración',
      nightsValue: '{nights} {nightWord}',
      visiting: 'Etapas',
      bestFor: 'Ideal para',
      travelPeriod: 'Periodo de viaje',
      beachExtension: 'Extensión de playa',
      itineraryOverview: 'Resumen del itinerario',
      extendHoliday: 'Alarga tus vacaciones',
      otherItineraries: 'Otros itinerarios',
    },
    highlights: {
      title: 'Lo mejor del viaje',
      carouselLabel: 'Lo mejor del viaje',
      jumpToItinerary: 'Ir al itinerario',
      previous: 'Anterior',
      next: 'Siguiente',
      position: 'Destacado {index} de {count}: {name}',
    },
    itinerary: {
      label: 'Itinerario día a día',
      thingsToDo: 'Qué hacer',
      explore: 'Descubrir',
      goodToKnow: 'Conviene saber',
      backToItinerary: 'Volver al itinerario',
      close: 'Cerrar',
      scrollLeft: 'Desplazar las actividades a la izquierda',
      scrollRight: 'Desplazar las actividades a la derecha',
      previousExperience: 'Experiencia anterior',
      nextExperience: 'Experiencia siguiente',
      experienceDetail: 'Detalle de la experiencia',
      recommendedHotel: 'Hotel recomendado',
      recommendedHotels: 'Hoteles recomendados',
      personalise: 'Personaliza tu viaje',
      personaliseCopy: 'Ponte en contacto con uno de nuestros expertos en viajes y te ayudaremos a planificar tus vacaciones perfectas.',
      enquireNow: 'Solicitar ahora',
      buildYourOwn: 'Crea el tuyo',
    },
    enquiry: {
      eyebrow: 'Planifica tu viaje',
      title: 'Haz que «{name}» sea tuyo',
      copy: 'Cada precio indicado es un punto de partida para {nights} noches en media pensión, viajando entre {period}. Dinos tus fechas y cómo te gusta viajar y te responderemos con una versión presupuestada: hoteles cambiados, días añadidos o eliminados, nada cerrado.',
      priceLine: 'Desde {price} {basis}',
      extensionLine: 'Extensión de playa {price}',
      vehicleLine: 'Vehículo privado y chófer-guía durante todo el viaje',
      hotelsLine: 'Hoteles presupuestados incluidos, con mejoras opcionales en cada etapa',
      talkTeam: 'Habla con nuestro equipo',
      buildCustom: 'Crear un viaje a medida',
      atAGlance: 'De un vistazo',
      duration: 'Duración',
      durationValue: '{days} {dayWord} · {nights} {nightWord}',
      starts: 'Inicio',
      ends: 'Fin',
      basis: 'Régimen',
      halfBoard: 'Media pensión',
      travelPeriod: 'Periodo de viaje',
      note: 'Los precios son por persona en habitación compartida y no incluyen vuelos internacionales ni visado. El precio final lo confirma un especialista de Serendia según la disponibilidad real.',
    },
  },

  lt: {
    common: {
      indianOcean: 'Indijos vandenynas',
      sriLanka: 'Šri Lanka',
      from: 'Nuo',
      cardMeta: 'Šri Lanka · {nights} {nightWord}',
      included: 'Įskaičiuota į kainą',
      optional: 'Pasirinktinai',
      day: 'Diena',
      days: 'Dienos',
      dayRangeJoin: '–',
      nightWord: { one: 'naktis', few: 'naktys', other: 'naktų' },
      dayWord: { one: 'diena', few: 'dienos', other: 'dienų' },
    },
    index: {
      title: 'Šri Lankos kelionių paketai',
      lede: 'Keturios jau įkainotos kelionės, apimančios visą salą — visos privačios ir visos sumanytos kaip atspirties taškas, o ne fiksuotas išvykimas.',
      eyebrow: 'Kolekcija',
      introTitle: 'Pasirinkite maršrutą ir keiskite jame viską, ką norite.',
      introCopy: 'Visi toliau pateikti paketai vykdomi su privačiu automobiliu ir vairuotoju-gidu visą kelionę, pusryčių ir vakarienės pagrindu, su įkainotais viešbučiais kiekvienoje stotelėje ir pasirenkamais patobulinimais šalia jų. Kainos galioja kelionėms nuo 2026 m. lapkričio 1 d. iki 2027 m. balandžio 30 d.',
      startScratch: 'Arba pradėkite nuo nulio',
      listTitle: 'Pamatykite daugiau kelionėje per kelias vietas',
      listIntro: 'Šie maršrutai sujungia kontrastingas vietas ir patirtis, todėl vienos kelionės metu pamatysite kur kas daugiau.',
      morePlaces: '+{count} daugiau',
      viewItinerary: 'Žiūrėti maršrutą',
      ctaEyebrow: 'Ne visai tai?',
      ctaTitle: 'Kiekvieną iš šių kelionių galima perrašyti.',
      ctaCopy: 'Pridėkite poilsį paplūdimyje, pakeiskite viešbutį, pailginkite kalnų dalį arba pabaigoje prijunkite Maldyvus. Pasakykite, ko norite, ir Serendia specialistas viską tinkamai įkainos.',
      planTrip: 'Planuokite kelionę',
      talkTeam: 'Kalbėkitės su mūsų komanda',
    },
    detail: {
      enquire: 'Teirautis apie šią kelionę',
      seeItinerary: 'Žiūrėti maršrutą',
      tripSummary: 'Kelionės santrauka',
      tourType: 'Kelionės tipas',
      duration: 'Trukmė',
      nightsValue: '{nights} {nightWord}',
      visiting: 'Lankomos vietos',
      bestFor: 'Puikiai tinka',
      travelPeriod: 'Kelionės laikotarpis',
      beachExtension: 'Poilsis paplūdimyje',
      itineraryOverview: 'Maršruto apžvalga',
      extendHoliday: 'Pratęskite atostogas',
      otherItineraries: 'Kiti maršrutai',
    },
    highlights: {
      title: 'Kelionės akcentai',
      carouselLabel: 'Kelionės akcentai',
      jumpToItinerary: 'Pereiti prie maršruto',
      previous: 'Ankstesnis akcentas',
      next: 'Kitas akcentas',
      position: '{index} akcentas iš {count}: {name}',
    },
    itinerary: {
      label: 'Maršrutas diena po dienos',
      thingsToDo: 'Ką veikti',
      explore: 'Sužinoti daugiau',
      goodToKnow: 'Verta žinoti',
      backToItinerary: 'Atgal į maršrutą',
      close: 'Uždaryti',
      scrollLeft: 'Slinkti veiklas į kairę',
      scrollRight: 'Slinkti veiklas į dešinę',
      previousExperience: 'Ankstesnė patirtis',
      nextExperience: 'Kita patirtis',
      experienceDetail: 'Patirties aprašymas',
      recommendedHotel: 'Rekomenduojamas viešbutis',
      recommendedHotels: 'Rekomenduojami viešbučiai',
      personalise: 'Pritaikykite kelionę sau',
      personaliseCopy: 'Susisiekite su vienu iš mūsų kelionių ekspertų ir mes padėsime suplanuoti tobulas atostogas.',
      enquireNow: 'Teirautis dabar',
      buildYourOwn: 'Kurti savo kelionę',
    },
    enquiry: {
      eyebrow: 'Planuokite kelionę',
      title: 'Pritaikykite „{name}“ sau',
      copy: 'Kiekviena čia nurodyta kaina yra atspirties taškas {nights} naktų kelionei su puspansionu, keliaujant {period}. Pasakykite savo datas ir kaip mėgstate keliauti, o mes grįšime su įkainota versija — pakeisti viešbučiai, pridėtos ar pašalintos dienos, niekas nėra galutinai nustatyta.',
      priceLine: 'Nuo {price} {basis}',
      extensionLine: 'Poilsis paplūdimyje {price}',
      vehicleLine: 'Privatus automobilis ir vairuotojas-gidas visą kelionę',
      hotelsLine: 'Nurodyti įkainoti viešbučiai su pasirenkamais patobulinimais kiekvienoje stotelėje',
      talkTeam: 'Kalbėkitės su mūsų komanda',
      buildCustom: 'Sukurti kelionę pagal save',
      atAGlance: 'Trumpai',
      duration: 'Trukmė',
      durationValue: '{days} {dayWord} · {nights} {nightWord}',
      starts: 'Pradžia',
      ends: 'Pabaiga',
      basis: 'Maitinimas',
      halfBoard: 'Puspansionas',
      travelPeriod: 'Kelionės laikotarpis',
      note: 'Kainos nurodytos vienam asmeniui dviviečiame kambaryje ir neapima tarptautinių skrydžių bei vizos. Galutinę kainą patvirtina Serendia specialistas pagal realų vietų prieinamumą.',
    },
  },
};

/** Fills `{placeholders}` in a dictionary string. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/**
 * Picks the plural form for a count. Lithuanian needs three ("1 naktis", "7 naktys",
 * "14 naktų"); the other locales collapse to the usual two.
 */
export function plural(locale: Locale, count: number, forms: PluralForms) {
  const category = new Intl.PluralRules(locale).select(count);
  if (category === 'one') return forms.one;
  if (category === 'few' && forms.few) return forms.few;
  return forms.other;
}

/** The `{nightWord}` / `{dayWord}` values for a package's counts. */
export function countWords(locale: Locale, copy: PackagesCopy, nights: number, days?: number) {
  return {
    nightWord: plural(locale, nights, copy.common.nightWord),
    dayWord: days === undefined ? '' : plural(locale, days, copy.common.dayWord),
  };
}

/* ------------------------------------------------------------------ *
 * Itinerary content
 * ------------------------------------------------------------------ */

/** Flat map of `exp.<id>.summary`-style keys to translated prose. */
export type ContentDictionary = Record<string, string>;

const contentLoaders: Partial<Record<Locale, () => Promise<{ default: ContentDictionary }>>> = {
  fr: () => import('./packages-content/fr'),
  de: () => import('./packages-content/de'),
  it: () => import('./packages-content/it'),
  es: () => import('./packages-content/es'),
  lt: () => import('./packages-content/lt'),
};

/**
 * English is the source language, so it has no dictionary. Other locales are code-split
 * and fetched on demand — the prose is far too large to ship six copies of it up front.
 */
export async function loadPackagesContent(locale: Locale): Promise<ContentDictionary> {
  const loader = contentLoaders[locale];
  if (!loader) return {};
  try {
    return (await loader()).default;
  } catch {
    return {};
  }
}

const pick = (content: ContentDictionary, key: string, fallback: string) =>
  content[key] ?? fallback;

const pickList = (content: ContentDictionary, prefix: string, fallback: string[]) =>
  fallback.map((value, index) => pick(content, `${prefix}.${index}`, value));

export function localizeExperience(
  id: string,
  experience: Experience,
  content: ContentDictionary,
): Experience {
  return {
    ...experience,
    name: pick(content, `exp.${id}.name`, experience.name),
    location: pick(content, `exp.${id}.location`, experience.location),
    summary: pick(content, `exp.${id}.summary`, experience.summary),
    detail: pickList(content, `exp.${id}.detail`, experience.detail),
    facts: pickList(content, `exp.${id}.facts`, experience.facts),
    goodToKnow: experience.goodToKnow
      ? pick(content, `exp.${id}.goodToKnow`, experience.goodToKnow)
      : undefined,
  };
}

/** Hotels are keyed by their (untranslated) brand name. */
function localizeHotel(hotel: Hotel, content: ContentDictionary): Hotel {
  return {
    ...hotel,
    location: pick(content, `hotel.${hotel.name}.location`, hotel.location),
    description: pick(content, `hotel.${hotel.name}.description`, hotel.description),
  };
}

function localizeStop(
  slug: string,
  stop: Stop,
  content: ContentDictionary,
  copy: PackagesCopy,
): Stop {
  const prefix = `pkg.${slug}.stop.${stop.id}`;
  return {
    ...stop,
    // the data stores the English word; the locale supplies its own
    dayLabel: stop.dayLabel === 'Days' ? copy.common.days : copy.common.day,
    dayRange: stop.dayRange.replace(' to ', copy.common.dayRangeJoin),
    // real place names stay as they are; only generic labels like "Departure" translate
    location: pick(content, `${prefix}.location`, stop.location),
    subLabel: stop.subLabel ? pick(content, `${prefix}.subLabel`, stop.subLabel) : undefined,
    intro: pick(content, `${prefix}.intro`, stop.intro),
    hotels: stop.hotels.map((hotel) => localizeHotel(hotel, content)),
  };
}

/**
 * Returns a copy of the package with every translatable field resolved for the locale.
 * Hotel brands and prices are deliberately left alone. `stop.location` is also the key
 * into `placeCoords`, so callers must read coordinates from the untranslated package.
 */
export function localizePackage(
  pkg: TourPackage,
  content: ContentDictionary,
  copy: PackagesCopy,
): TourPackage {
  const prefix = `pkg.${pkg.slug}`;
  return {
    ...pkg,
    name: pick(content, `${prefix}.name`, pkg.name),
    tagline: pick(content, `${prefix}.tagline`, pkg.tagline),
    badge: pick(content, `${prefix}.badge`, pkg.badge),
    cardSummary: pick(content, `${prefix}.cardSummary`, pkg.cardSummary),
    intro: pick(content, `${prefix}.intro`, pkg.intro),
    tourType: pick(content, `${prefix}.tourType`, pkg.tourType),
    visiting: pickList(content, `${prefix}.visiting`, pkg.visiting),
    bestFor: pickList(content, `${prefix}.bestFor`, pkg.bestFor),
    priceBasis: pick(content, `${prefix}.priceBasis`, pkg.priceBasis),
    period: pick(content, `${prefix}.period`, pkg.period),
    extensionPrice: pick(content, `${prefix}.extensionPrice`, pkg.extensionPrice),
    extensions: pkg.extensions.map((extension, index) => ({
      ...extension,
      title: pick(content, `${prefix}.ext.${index}.title`, extension.title),
      description: pick(content, `${prefix}.ext.${index}.description`, extension.description),
      price: pick(content, `${prefix}.ext.${index}.price`, extension.price),
    })),
    stops: pkg.stops.map((stop) => localizeStop(pkg.slug, stop, content, copy)),
  };
}
