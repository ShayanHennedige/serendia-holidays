import type { Locale } from './i18n';

type HomeCopy = {
  header: {
    allExcursions: string;
    sriLankanHotels: string;
    search: string;
    language: string;
    menu: string;
  };
  film: {
    aria: string;
    play: string;
    pause: string;
    scroll: string;
    design: string;
    explore: string;
    chapters: Array<{ location: string; title: string; copy: string }>;
  };
  features: Array<{ title: string; text: string }>;
  about: {
    videoTitle: string;
    subtitle: string;
    title: string;
    paragraphs: string[];
  };
  trust: {
    aria: string;
    kicker: string;
    showFact: string;
    facts: Array<{ label: string; detail: string }>;
  };
  highlights: {
    subtitle: string;
    title: string;
    items: string[];
  };
  testimonials: {
    title: string;
    viewPhotos: string;
    items: Array<{ text: string; location: string }>;
  };
  footer: { copyright: string };
  utilities: { scrollTop: string };
};

export const homeDictionaries: Record<Locale, HomeCopy> = {
  en: {
    header: { allExcursions: 'All excursions', sriLankanHotels: 'Sri Lankan Hotels', search: 'Search', language: 'Language', menu: 'Menu' },
    film: {
      aria: 'A cinematic journey through Sri Lanka', play: 'Play film', pause: 'Pause film', scroll: 'Scroll to travel', design: 'Design my journey', explore: 'Explore Sri Lanka',
      chapters: [
        { location: 'Ella · Hill Country', title: 'Ride into\nthe remarkable', copy: 'A blue train crosses Nine Arch Bridge as the highlands wake beneath the mist.' },
        { location: 'Nuwara Eliya · Tea Country', title: 'Where green\nhas no horizon', copy: 'Follow the cool mountain air through rolling estates, tea gardens, and mornings above the clouds.' },
        { location: 'The Cultural Triangle', title: 'Walk through\nliving history', copy: 'Ancient cities, sacred stone, and centuries of stories are still woven into the landscape.' },
        { location: 'The Southern Coast', title: 'Let the island\nslow you down', copy: 'End where palms meet warm water, turtles drift through blue, and every sunset asks you to stay.' },
      ],
    },
    features: [
      { title: 'Best price guarantee', text: 'We provide exclusive prices to suit your tailor-made tour.' },
      { title: 'Explore tours', text: 'Discover your dream holiday through our carefully curated tours.' },
      { title: '24/7 phone support', text: 'Ask us questions at any time through our live messenger.' },
    ],
    about: {
      videoTitle: 'Serendia Holidays by Venom — Sri Lanka tour video', subtitle: 'Alone or in groups…', title: 'Travelling was never easier!',
      paragraphs: [
        'Serendia Holidays by Venom was established on 1 January 2019 to serve Sri Lanka’s growing tourism industry. We arrange round trips in Sri Lanka and the Maldives for travellers from Australia, France, Germany, Italy, the United Kingdom, Switzerland, Scandinavia and other international markets. Alongside conventional tourism, we organise specialist cricket tours from school to club level.',
        'One of the company’s key strengths is its hospitality and hotel project-management knowledge. Our experts advise potential investors from land acquisition through to the development of a star-class hotel.',
      ],
    },
    trust: {
      aria: 'Why choose Serendia Holidays', kicker: 'Why Serendia Holidays', showFact: 'Show fact',
      facts: [
        { label: 'Established specialist operator', detail: 'Trading since 1 January 2019 as part of the Venom Holidays hospitality group, with decades of combined industry experience.' },
        { label: 'Senior sector leadership', detail: 'Founding partner Dharshan Hennedige served nearly seven years as Executive Secretary of the Sri Lanka Tourism Development Authority and brings 24 years of hotel and travel experience.' },
        { label: 'A distinctive cricket-tourism capability', detail: 'Led by Brendon Kuruppu, a former Sri Lanka Test and One Day international cricketer with more than 20 years in professional cricket and national-team coaching.' },
        { label: 'Leisure and hotel-investment expertise', detail: 'We combine tailor-made holiday planning with hospitality project-management consultancy for hotel investors.' },
        { label: 'Tailor-made itineraries and best-price commitment', detail: 'Every journey is built around the traveller instead of being sold as a rigid package.' },
        { label: 'Round-the-clock guest support', detail: 'Support continues throughout the journey, not only until the booking is made.' },
        { label: 'Experience across international markets', detail: 'Verified guest experiences include Australia, the United Kingdom, France, Germany, Italy, Switzerland and Scandinavia.' },
      ],
    },
    highlights: { subtitle: 'A few of our', title: 'Latest highlights', items: ['Polonnaruwa excursion', 'Yala excursion from Bentota or Galle', 'Nuwara Eliya excursion from Kandy', 'Best of Sri Lanka: culture, nature and wildlife — 8 nights / 9 days'] },
    testimonials: {
      title: 'See what our customers have to say', viewPhotos: 'View photos →',
      items: [
        { location: 'Australian', text: 'Venom Holidays were fantastic in helping us plan our holiday from start to finish. Our driver Lahiru collected us at the airport and looked after us throughout an amazing route through Sigiriya, Ella, Kandy, Yala, Galle and Bentota. They can tailor any trip to your needs, and we highly recommend them.' },
        { location: 'South African', text: 'I planned a birthday trip for my wife and our experience was truly amazing. From Negombo and Galle to Ella, Kandy, Anuradhapura, Sigiriya and Colombo, the weather, people and sights were perfect. We were treated like royalty and would recommend Serendia to anyone visiting Sri Lanka.' },
        { location: 'Australian', text: 'We returned home with so many special and cherished memories after an incredible holiday. Thank you for taking such good care of us throughout the journey. It was difficult to settle back home after such a wonderful experience.' },
      ],
    },
    footer: { copyright: 'Copyright' }, utilities: { scrollTop: 'Scroll to top' },
  },
  fr: {
    header: { allExcursions: 'Toutes les excursions', sriLankanHotels: 'Hôtels au Sri Lanka', search: 'Rechercher', language: 'Langue', menu: 'Menu' },
    film: {
      aria: 'Un voyage cinématographique à travers le Sri Lanka', play: 'Lire le film', pause: 'Mettre en pause', scroll: 'Faites défiler pour voyager', design: 'Créer mon voyage', explore: 'Explorer le Sri Lanka',
      chapters: [
        { location: 'Ella · Hautes terres', title: 'Entrez dans\nl’extraordinaire', copy: 'Un train bleu traverse le pont aux Neuf Arches tandis que les hauts plateaux s’éveillent sous la brume.' },
        { location: 'Nuwara Eliya · Pays du thé', title: 'Quand le vert\nn’a plus d’horizon', copy: 'Respirez l’air frais des montagnes entre domaines vallonnés, jardins de thé et matins au-dessus des nuages.' },
        { location: 'Le Triangle culturel', title: 'Parcourez une\nhistoire vivante', copy: 'Cités anciennes, pierres sacrées et siècles de récits restent inscrits dans le paysage.' },
        { location: 'La côte sud', title: 'Laissez l’île\nralentir le temps', copy: 'Terminez là où les palmiers rencontrent l’eau chaude, où les tortues dérivent et où chaque coucher de soleil invite à rester.' },
      ],
    },
    features: [
      { title: 'Meilleur prix garanti', text: 'Nous proposons des tarifs exclusifs adaptés à votre circuit sur mesure.' },
      { title: 'Explorer les circuits', text: 'Découvrez les vacances de vos rêves grâce à nos circuits soigneusement sélectionnés.' },
      { title: 'Assistance téléphonique 24 h/24', text: 'Posez-nous vos questions à tout moment via notre messagerie en direct.' },
    ],
    about: {
      videoTitle: 'Serendia Holidays by Venom — vidéo de voyage au Sri Lanka', subtitle: 'Seul ou en groupe…', title: 'Voyager n’a jamais été aussi simple !',
      paragraphs: [
        'Serendia Holidays by Venom a été fondée le 1er janvier 2019 pour accompagner l’essor du tourisme au Sri Lanka. Nous organisons des circuits au Sri Lanka et aux Maldives pour des voyageurs d’Australie, de France, d’Allemagne, d’Italie, du Royaume-Uni, de Suisse, de Scandinavie et d’autres marchés internationaux. Nous créons également des voyages spécialisés autour du cricket, du niveau scolaire au niveau club.',
        'L’une des grandes forces de l’entreprise réside dans son expertise de l’hôtellerie et de la gestion de projets hôteliers. Nos spécialistes conseillent les investisseurs depuis l’acquisition du terrain jusqu’au développement d’un hôtel haut de gamme.',
      ],
    },
    trust: {
      aria: 'Pourquoi choisir Serendia Holidays', kicker: 'Pourquoi Serendia Holidays', showFact: 'Afficher le fait',
      facts: [
        { label: 'Un voyagiste spécialisé et établi', detail: 'En activité depuis le 1er janvier 2019 au sein du groupe hôtelier Venom Holidays, avec plusieurs décennies d’expérience cumulée.' },
        { label: 'Une direction expérimentée', detail: 'Le cofondateur Dharshan Hennedige a été près de sept ans secrétaire exécutif de l’Autorité de développement du tourisme du Sri Lanka et possède 24 ans d’expérience.' },
        { label: 'Une expertise unique du tourisme de cricket', detail: 'Dirigée par Brendon Kuruppu, ancien joueur international sri-lankais de Test et de One Day, fort de plus de 20 ans de cricket professionnel et d’entraînement national.' },
        { label: 'Expertise en loisirs et investissement hôtelier', detail: 'Nous associons voyages sur mesure et conseil en gestion de projets pour les investisseurs hôteliers.' },
        { label: 'Itinéraires sur mesure et engagement sur les prix', detail: 'Chaque voyage est construit autour du client plutôt que vendu comme un forfait rigide.' },
        { label: 'Assistance voyageurs 24 h/24', detail: 'Notre accompagnement se poursuit pendant tout le voyage, et pas seulement jusqu’à la réservation.' },
        { label: 'Une expérience internationale reconnue', detail: 'Nos avis vérifiés proviennent notamment d’Australie, du Royaume-Uni, de France, d’Allemagne, d’Italie, de Suisse et de Scandinavie.' },
      ],
    },
    highlights: { subtitle: 'Quelques-uns de nos', title: 'Derniers coups de cœur', items: ['Excursion à Polonnaruwa', 'Excursion à Yala depuis Bentota ou Galle', 'Excursion à Nuwara Eliya depuis Kandy', 'Le meilleur du Sri Lanka : culture, nature et faune — 8 nuits / 9 jours'] },
    testimonials: {
      title: 'Découvrez les témoignages de nos voyageurs', viewPhotos: 'Voir les photos →',
      items: [
        { location: 'Australiens', text: 'Venom Holidays nous a formidablement aidés à organiser notre séjour du début à la fin. Notre chauffeur Lahiru nous a accueillis à l’aéroport et accompagnés sur un itinéraire exceptionnel à travers Sigiriya, Ella, Kandy, Yala, Galle et Bentota. Chaque voyage peut être adapté à vos envies : nous les recommandons vivement.' },
        { location: 'Sud-Africains', text: 'J’ai organisé un voyage d’anniversaire pour mon épouse et notre expérience a été véritablement extraordinaire. De Negombo et Galle à Ella, Kandy, Anuradhapura, Sigiriya et Colombo, le climat, les habitants et les sites étaient parfaits. Nous avons été traités comme des rois.' },
        { location: 'Australiens', text: 'Nous sommes rentrés avec tant de souvenirs précieux après des vacances incroyables. Merci d’avoir si bien pris soin de nous tout au long du voyage. Le retour à la maison a été difficile après une expérience aussi merveilleuse.' },
      ],
    },
    footer: { copyright: 'Tous droits réservés' }, utilities: { scrollTop: 'Retour en haut' },
  },
  de: {
    header: { allExcursions: 'Alle Ausflüge', sriLankanHotels: 'Hotels in Sri Lanka', search: 'Suchen', language: 'Sprache', menu: 'Menü' },
    film: {
      aria: 'Eine filmische Reise durch Sri Lanka', play: 'Film abspielen', pause: 'Film pausieren', scroll: 'Scrollen und reisen', design: 'Meine Reise gestalten', explore: 'Sri Lanka entdecken',
      chapters: [
        { location: 'Ella · Hochland', title: 'Auf ins\nAußergewöhnliche', copy: 'Ein blauer Zug überquert die Nine Arch Bridge, während das Hochland im Morgennebel erwacht.' },
        { location: 'Nuwara Eliya · Teeland', title: 'Wo Grün\nkein Ende kennt', copy: 'Folgen Sie der kühlen Bergluft durch sanfte Plantagen, Teegärten und Morgenstunden über den Wolken.' },
        { location: 'Das Kulturdreieck', title: 'Geschichte,\ndie weiterlebt', copy: 'Antike Städte, heilige Steine und jahrhundertealte Geschichten sind bis heute in die Landschaft eingeschrieben.' },
        { location: 'Die Südküste', title: 'Lassen Sie die Insel\ndas Tempo bestimmen', copy: 'Wo Palmen auf warmes Wasser treffen, Schildkröten durch das Blau gleiten und jeder Sonnenuntergang zum Bleiben einlädt.' },
      ],
    },
    features: [
      { title: 'Bestpreisgarantie', text: 'Wir bieten exklusive Preise passend zu Ihrer maßgeschneiderten Rundreise.' },
      { title: 'Rundreisen entdecken', text: 'Finden Sie Ihren Traumurlaub mit unseren sorgfältig ausgewählten Rundreisen.' },
      { title: 'Telefonische Hilfe rund um die Uhr', text: 'Über unseren Live-Messenger können Sie uns jederzeit Fragen stellen.' },
    ],
    about: {
      videoTitle: 'Serendia Holidays by Venom — Reisevideo Sri Lanka', subtitle: 'Allein oder in der Gruppe…', title: 'Reisen war noch nie so einfach!',
      paragraphs: [
        'Serendia Holidays by Venom wurde am 1. Januar 2019 gegründet, um Sri Lankas wachsende Tourismusbranche zu unterstützen. Wir organisieren Rundreisen in Sri Lanka und auf den Malediven für Gäste aus Australien, Frankreich, Deutschland, Italien, dem Vereinigten Königreich, der Schweiz, Skandinavien und weiteren internationalen Märkten. Darüber hinaus veranstalten wir Cricket-Spezialreisen vom Schul- bis zum Vereinsniveau.',
        'Eine besondere Stärke des Unternehmens ist die Erfahrung im Gastgewerbe und im Hotelprojektmanagement. Unsere Fachleute beraten Investoren vom Grundstückserwerb bis zur Entwicklung eines Sterne-Hotels.',
      ],
    },
    trust: {
      aria: 'Warum Serendia Holidays wählen', kicker: 'Warum Serendia Holidays', showFact: 'Fakt anzeigen',
      facts: [
        { label: 'Etablierter Spezialveranstalter', detail: 'Seit dem 1. Januar 2019 Teil der Venom-Holidays-Gruppe, getragen von jahrzehntelanger gemeinsamer Branchenerfahrung.' },
        { label: 'Erfahrene Branchenführung', detail: 'Mitgründer Dharshan Hennedige war fast sieben Jahre Executive Secretary der Tourismusbehörde Sri Lankas und verfügt über 24 Jahre Hotel- und Reiseerfahrung.' },
        { label: 'Besondere Kompetenz für Cricket-Reisen', detail: 'Unter Leitung von Brendon Kuruppu, ehemaliger sri-lankischer Test- und One-Day-Nationalspieler mit über 20 Jahren Profi- und Trainererfahrung.' },
        { label: 'Freizeit- und Hotelinvestment-Kompetenz', detail: 'Wir verbinden maßgeschneiderte Urlaubsplanung mit Projektmanagementberatung für Hotelinvestoren.' },
        { label: 'Individuelle Routen und Bestpreisversprechen', detail: 'Jede Reise richtet sich nach dem Gast und ist kein starres Pauschalangebot.' },
        { label: 'Gästebetreuung rund um die Uhr', detail: 'Unsere Unterstützung begleitet Sie während der gesamten Reise, nicht nur bis zur Buchung.' },
        { label: 'Erfahrung auf internationalen Märkten', detail: 'Bestätigte Gästeberichte stammen unter anderem aus Australien, Großbritannien, Frankreich, Deutschland, Italien, der Schweiz und Skandinavien.' },
      ],
    },
    highlights: { subtitle: 'Einige unserer', title: 'Aktuellen Höhepunkte', items: ['Ausflug nach Polonnaruwa', 'Yala-Ausflug ab Bentota oder Galle', 'Nuwara-Eliya-Ausflug ab Kandy', 'Das Beste Sri Lankas: Kultur, Natur und Tierwelt — 8 Nächte / 9 Tage'] },
    testimonials: {
      title: 'Das sagen unsere Gäste', viewPhotos: 'Fotos ansehen →',
      items: [
        { location: 'Australier', text: 'Venom Holidays hat uns von Anfang bis Ende hervorragend bei der Reiseplanung unterstützt. Unser Fahrer Lahiru holte uns am Flughafen ab und begleitete uns auf einer großartigen Route über Sigiriya, Ella, Kandy, Yala, Galle und Bentota. Jede Reise wird individuell angepasst – wir empfehlen das Team sehr gern weiter.' },
        { location: 'Südafrikaner', text: 'Ich plante eine Geburtstagsreise für meine Frau, und das Erlebnis war wirklich außergewöhnlich. Von Negombo und Galle über Ella, Kandy, Anuradhapura und Sigiriya bis Colombo waren Wetter, Menschen und Sehenswürdigkeiten perfekt. Wir wurden wie Könige behandelt.' },
        { location: 'Australier', text: 'Nach einem unglaublichen Urlaub sind wir mit vielen besonderen Erinnerungen nach Hause zurückgekehrt. Vielen Dank, dass Sie sich während der gesamten Reise so gut um uns gekümmert haben. Nach diesem wunderbaren Erlebnis fiel die Rückkehr schwer.' },
      ],
    },
    footer: { copyright: 'Alle Rechte vorbehalten' }, utilities: { scrollTop: 'Nach oben' },
  },
  it: {
    header: { allExcursions: 'Tutte le escursioni', sriLankanHotels: 'Hotel in Sri Lanka', search: 'Cerca', language: 'Lingua', menu: 'Menu' },
    film: {
      aria: 'Un viaggio cinematografico attraverso lo Sri Lanka', play: 'Riproduci il film', pause: 'Metti in pausa', scroll: 'Scorri per viaggiare', design: 'Crea il mio viaggio', explore: 'Esplora lo Sri Lanka',
      chapters: [
        { location: 'Ella · Altopiani', title: 'Verso qualcosa\ndi straordinario', copy: 'Un treno blu attraversa il Ponte dei Nove Archi mentre gli altopiani si risvegliano nella nebbia.' },
        { location: 'Nuwara Eliya · Terra del tè', title: 'Dove il verde\nnon ha orizzonte', copy: 'Segui l’aria fresca di montagna tra tenute ondulate, giardini di tè e mattine sopra le nuvole.' },
        { location: 'Il Triangolo culturale', title: 'Cammina nella\nstoria vivente', copy: 'Città antiche, pietre sacre e secoli di racconti sono ancora intrecciati nel paesaggio.' },
        { location: 'La costa meridionale', title: 'Lascia che l’isola\nrallenti il tempo', copy: 'Concludi dove le palme incontrano l’acqua calda, le tartarughe scivolano nel blu e ogni tramonto invita a restare.' },
      ],
    },
    features: [
      { title: 'Miglior prezzo garantito', text: 'Offriamo prezzi esclusivi adatti al tuo tour su misura.' },
      { title: 'Esplora i tour', text: 'Scopri la vacanza dei tuoi sogni con i nostri tour selezionati con cura.' },
      { title: 'Assistenza telefonica 24/7', text: 'Puoi farci domande in qualsiasi momento tramite la chat dal vivo.' },
    ],
    about: {
      videoTitle: 'Serendia Holidays by Venom — video di viaggio in Sri Lanka', subtitle: 'Da soli o in gruppo…', title: 'Viaggiare non è mai stato così facile!',
      paragraphs: [
        'Serendia Holidays by Venom è stata fondata il 1º gennaio 2019 per sostenere la crescita del turismo in Sri Lanka. Organizziamo tour in Sri Lanka e alle Maldive per viaggiatori provenienti da Australia, Francia, Germania, Italia, Regno Unito, Svizzera, Scandinavia e altri mercati internazionali. Accanto al turismo tradizionale realizziamo viaggi specialistici dedicati al cricket, dalle scuole ai club.',
        'Uno dei principali punti di forza dell’azienda è la conoscenza dell’ospitalità e della gestione di progetti alberghieri. I nostri esperti affiancano gli investitori dall’acquisizione del terreno fino allo sviluppo di un hotel di categoria superiore.',
      ],
    },
    trust: {
      aria: 'Perché scegliere Serendia Holidays', kicker: 'Perché Serendia Holidays', showFact: 'Mostra informazione',
      facts: [
        { label: 'Operatore specializzato e consolidato', detail: 'Attivo dal 1º gennaio 2019 nel gruppo Venom Holidays, con decenni di esperienza complessiva nel settore.' },
        { label: 'Leadership di grande esperienza', detail: 'Il socio fondatore Dharshan Hennedige è stato per quasi sette anni Segretario esecutivo dell’Autorità per lo sviluppo turistico dello Sri Lanka e vanta 24 anni di esperienza.' },
        { label: 'Una competenza distintiva nel turismo del cricket', detail: 'Guidata da Brendon Kuruppu, ex giocatore della nazionale dello Sri Lanka nei Test e One Day, con oltre 20 anni di cricket professionistico e allenamento nazionale.' },
        { label: 'Esperienza nel turismo e negli investimenti alberghieri', detail: 'Uniamo vacanze su misura e consulenza nella gestione di progetti per investitori alberghieri.' },
        { label: 'Itinerari su misura e impegno sul miglior prezzo', detail: 'Ogni viaggio viene costruito intorno al viaggiatore, senza pacchetti rigidi.' },
        { label: 'Assistenza agli ospiti 24 ore su 24', detail: 'Il supporto continua durante tutto il viaggio, non soltanto fino alla prenotazione.' },
        { label: 'Esperienza sui mercati internazionali', detail: 'Le testimonianze verificate provengono da Australia, Regno Unito, Francia, Germania, Italia, Svizzera e Scandinavia.' },
      ],
    },
    highlights: { subtitle: 'Alcune delle nostre', title: 'Ultime proposte', items: ['Escursione a Polonnaruwa', 'Escursione a Yala da Bentota o Galle', 'Escursione a Nuwara Eliya da Kandy', 'Il meglio dello Sri Lanka: cultura, natura e fauna — 8 notti / 9 giorni'] },
    testimonials: {
      title: 'Scopri cosa dicono i nostri clienti', viewPhotos: 'Guarda le foto →',
      items: [
        { location: 'Australiani', text: 'Venom Holidays ci ha aiutato in modo fantastico a organizzare la vacanza dall’inizio alla fine. Il nostro autista Lahiru ci ha accolti in aeroporto e accompagnati lungo uno splendido itinerario tra Sigiriya, Ella, Kandy, Yala, Galle e Bentota. Ogni viaggio può essere personalizzato: li consigliamo vivamente.' },
        { location: 'Sudafricani', text: 'Ho organizzato un viaggio di compleanno per mia moglie e l’esperienza è stata davvero straordinaria. Da Negombo e Galle a Ella, Kandy, Anuradhapura, Sigiriya e Colombo, il clima, le persone e i luoghi erano perfetti. Siamo stati trattati come dei reali.' },
        { location: 'Australiani', text: 'Siamo tornati a casa con tantissimi ricordi speciali dopo una vacanza incredibile. Grazie per esservi presi cura di noi durante tutto il viaggio. È stato difficile tornare alla normalità dopo un’esperienza così meravigliosa.' },
      ],
    },
    footer: { copyright: 'Tutti i diritti riservati' }, utilities: { scrollTop: 'Torna in alto' },
  },
  es: {
    header: { allExcursions: 'Todas las excursiones', sriLankanHotels: 'Hoteles en Sri Lanka', search: 'Buscar', language: 'Idioma', menu: 'Menú' },
    film: {
      aria: 'Un viaje cinematográfico por Sri Lanka', play: 'Reproducir vídeo', pause: 'Pausar vídeo', scroll: 'Desplázate para viajar', design: 'Diseñar mi viaje', explore: 'Explorar Sri Lanka',
      chapters: [
        { location: 'Ella · Tierras altas', title: 'Viaja hacia\nlo extraordinario', copy: 'Un tren azul cruza el Puente de los Nueve Arcos mientras las tierras altas despiertan bajo la niebla.' },
        { location: 'Nuwara Eliya · Tierra del té', title: 'Donde el verde\nno tiene horizonte', copy: 'Sigue el aire fresco de la montaña entre fincas onduladas, jardines de té y amaneceres sobre las nubes.' },
        { location: 'El Triángulo Cultural', title: 'Camina por una\nhistoria viva', copy: 'Ciudades antiguas, piedras sagradas y siglos de historias siguen entretejidos en el paisaje.' },
        { location: 'La costa sur', title: 'Deja que la isla\nmarque el ritmo', copy: 'Termina donde las palmeras se encuentran con el agua cálida, las tortugas se deslizan por el azul y cada atardecer invita a quedarse.' },
      ],
    },
    features: [
      { title: 'Mejor precio garantizado', text: 'Ofrecemos precios exclusivos adaptados a tu circuito a medida.' },
      { title: 'Explora los circuitos', text: 'Descubre las vacaciones de tus sueños con nuestros circuitos cuidadosamente seleccionados.' },
      { title: 'Asistencia telefónica 24/7', text: 'Haznos cualquier pregunta en todo momento mediante nuestro chat en directo.' },
    ],
    about: {
      videoTitle: 'Serendia Holidays by Venom — vídeo de viaje por Sri Lanka', subtitle: 'En solitario o en grupo…', title: '¡Viajar nunca fue tan fácil!',
      paragraphs: [
        'Serendia Holidays by Venom se fundó el 1 de enero de 2019 para apoyar al creciente sector turístico de Sri Lanka. Organizamos circuitos por Sri Lanka y Maldivas para viajeros de Australia, Francia, Alemania, Italia, Reino Unido, Suiza, Escandinavia y otros mercados internacionales. Además del turismo convencional, organizamos viajes especializados de críquet desde el nivel escolar hasta el de clubes.',
        'Uno de los principales puntos fuertes de la empresa es su conocimiento de la hostelería y la gestión de proyectos hoteleros. Nuestros expertos asesoran a posibles inversores desde la adquisición del terreno hasta el desarrollo de un hotel de categoría superior.',
      ],
    },
    trust: {
      aria: 'Por qué elegir Serendia Holidays', kicker: 'Por qué Serendia Holidays', showFact: 'Mostrar información',
      facts: [
        { label: 'Operador especializado consolidado', detail: 'En activo desde el 1 de enero de 2019 como parte del grupo hotelero Venom Holidays, con décadas de experiencia conjunta en el sector.' },
        { label: 'Liderazgo con experiencia en el sector', detail: 'El socio fundador Dharshan Hennedige fue durante casi siete años secretario ejecutivo de la Autoridad de Desarrollo Turístico de Sri Lanka y cuenta con 24 años de experiencia en hoteles y viajes.' },
        { label: 'Una capacidad única en turismo de críquet', detail: 'Dirigida por Brendon Kuruppu, antiguo jugador internacional de Sri Lanka en Test y One Day con más de 20 años en el críquet profesional y el entrenamiento de la selección nacional.' },
        { label: 'Experiencia en ocio e inversión hotelera', detail: 'Combinamos la planificación de vacaciones a medida con la consultoría en gestión de proyectos para inversores hoteleros.' },
        { label: 'Itinerarios a medida y compromiso con el mejor precio', detail: 'Cada viaje se crea en torno al viajero, en lugar de venderse como un paquete rígido.' },
        { label: 'Atención al viajero las 24 horas', detail: 'La asistencia continúa durante todo el viaje, no solo hasta que se realiza la reserva.' },
        { label: 'Experiencia en mercados internacionales', detail: 'Contamos con experiencias verificadas de viajeros de Australia, Reino Unido, Francia, Alemania, Italia, Suiza y Escandinavia.' },
      ],
    },
    highlights: { subtitle: 'Algunas de nuestras', title: 'Últimas propuestas', items: ['Excursión a Polonnaruwa', 'Excursión a Yala desde Bentota o Galle', 'Excursión a Nuwara Eliya desde Kandy', 'Lo mejor de Sri Lanka: cultura, naturaleza y vida salvaje — 8 noches / 9 días'] },
    testimonials: {
      title: 'Descubre qué opinan nuestros clientes', viewPhotos: 'Ver fotos →',
      items: [
        { location: 'Australia', text: 'Venom Holidays nos ayudó de forma fantástica a planificar nuestras vacaciones de principio a fin. Nuestro conductor Lahiru nos recogió en el aeropuerto y nos cuidó durante una ruta increíble por Sigiriya, Ella, Kandy, Yala, Galle y Bentota. Pueden adaptar cualquier viaje a tus necesidades y los recomendamos totalmente.' },
        { location: 'Sudáfrica', text: 'Organicé un viaje de cumpleaños para mi esposa y la experiencia fue realmente increíble. Desde Negombo y Galle hasta Ella, Kandy, Anuradhapura, Sigiriya y Colombo, el clima, la gente y los lugares fueron perfectos. Nos trataron como a la realeza y recomendaríamos Serendia a cualquiera que visite Sri Lanka.' },
        { location: 'Australia', text: 'Volvimos a casa con muchísimos recuerdos especiales después de unas vacaciones increíbles. Gracias por cuidarnos tan bien durante todo el viaje. Fue difícil volver a la rutina después de una experiencia tan maravillosa.' },
      ],
    },
    footer: { copyright: 'Todos los derechos reservados' }, utilities: { scrollTop: 'Volver arriba' },
  },
  lt: {
    header: { allExcursions: 'Visos ekskursijos', sriLankanHotels: 'Šri Lankos viešbučiai', search: 'Ieškoti', language: 'Kalba', menu: 'Meniu' },
    film: {
      aria: 'Kinematografiška kelionė po Šri Lanką', play: 'Paleisti filmą', pause: 'Pristabdyti filmą', scroll: 'Slinkite ir keliaukite', design: 'Kurti mano kelionę', explore: 'Atrasti Šri Lanką',
      chapters: [
        { location: 'Ella · Aukštikalnės', title: 'Keliaukite į\nnepaprastą pasaulį', copy: 'Mėlynas traukinys kerta Devynių arkų tiltą, o aukštikalnės bunda po rūku.' },
        { location: 'Nuwara Eliya · Arbatos kraštas', title: 'Kur žaluma\nneturi horizonto', copy: 'Sekite vėsų kalnų orą per banguojančias plantacijas, arbatos sodus ir rytus virš debesų.' },
        { location: 'Kultūros trikampis', title: 'Ženkite per\ngyvą istoriją', copy: 'Senoviniai miestai, šventi akmenys ir šimtmečių istorijos vis dar įaustos į kraštovaizdį.' },
        { location: 'Pietinė pakrantė', title: 'Leiskite salai\nsulėtinti tempą', copy: 'Užbaikite kelionę ten, kur palmės siekia šiltą vandenį, vėžliai sklando žydrynėje, o kiekvienas saulėlydis kviečia pasilikti.' },
      ],
    },
    features: [
      { title: 'Geriausios kainos garantija', text: 'Siūlome išskirtines kainas, pritaikytas jūsų individualiai kelionei.' },
      { title: 'Atraskite keliones', text: 'Raskite svajonių atostogas tarp mūsų kruopščiai atrinktų kelionių.' },
      { title: 'Pagalba telefonu visą parą', text: 'Bet kada užduokite klausimų naudodamiesi tiesioginių žinučių paslauga.' },
    ],
    about: {
      videoTitle: 'Serendia Holidays by Venom — kelionės po Šri Lanką vaizdo įrašas', subtitle: 'Vieni ar grupėje…', title: 'Keliauti dar niekada nebuvo taip paprasta!',
      paragraphs: [
        'Serendia Holidays by Venom buvo įkurta 2019 m. sausio 1 d., kad aptarnautų augančią Šri Lankos turizmo rinką. Organizuojame keliones po Šri Lanką ir Maldyvus keliautojams iš Australijos, Prancūzijos, Vokietijos, Italijos, Jungtinės Karalystės, Šveicarijos, Skandinavijos ir kitų tarptautinių rinkų. Be įprastų kelionių, rengiame specializuotas kriketo išvykas nuo mokyklų iki klubų lygio.',
        'Viena svarbiausių įmonės stiprybių – svetingumo ir viešbučių projektų valdymo žinios. Mūsų ekspertai konsultuoja būsimus investuotojus nuo žemės įsigijimo iki aukštos klasės viešbučio sukūrimo.',
      ],
    },
    trust: {
      aria: 'Kodėl verta rinktis Serendia Holidays', kicker: 'Kodėl Serendia Holidays', showFact: 'Rodyti faktą',
      facts: [
        { label: 'Patyręs specializuotas kelionių organizatorius', detail: 'Nuo 2019 m. sausio 1 d. veikiame kaip Venom Holidays svetingumo grupės dalis ir kartu turime dešimtmečių patirtį šiame sektoriuje.' },
        { label: 'Patyrę sektoriaus vadovai', detail: 'Steigėjas Dharshan Hennedige beveik septynerius metus dirbo Šri Lankos turizmo plėtros tarnybos vykdomuoju sekretoriumi ir turi 24 metų viešbučių bei kelionių patirtį.' },
        { label: 'Išskirtinės kriketo turizmo galimybės', detail: 'Šiai sričiai vadovauja Brendon Kuruppu – buvęs Šri Lankos Test ir One Day rinktinės žaidėjas, turintis daugiau nei 20 metų profesionalaus kriketo ir nacionalinės komandos treniravimo patirtį.' },
        { label: 'Poilsio ir investicijų į viešbučius patirtis', detail: 'Individualių atostogų planavimą deriname su viešbučių investuotojų projektų valdymo konsultacijomis.' },
        { label: 'Individualūs maršrutai ir geriausios kainos pažadas', detail: 'Kiekviena kelionė kuriama pagal keliautojo poreikius, o ne parduodama kaip nekintamas paketas.' },
        { label: 'Pagalba svečiams visą parą', detail: 'Pagalba teikiama visos kelionės metu, ne tik iki užsakymo pateikimo.' },
        { label: 'Patirtis tarptautinėse rinkose', detail: 'Patvirtinti svečių atsiliepimai apima Australiją, Jungtinę Karalystę, Prancūziją, Vokietiją, Italiją, Šveicariją ir Skandinaviją.' },
      ],
    },
    highlights: { subtitle: 'Keletas mūsų', title: 'Naujausių pasiūlymų', items: ['Ekskursija į Polonnaruwa', 'Ekskursija į Yala iš Bentota arba Galle', 'Ekskursija į Nuwara Eliya iš Kandy', 'Geriausia, ką siūlo Šri Lanka: kultūra, gamta ir laukiniai gyvūnai — 8 naktys / 9 dienos'] },
    testimonials: {
      title: 'Sužinokite, ką sako mūsų klientai', viewPhotos: 'Peržiūrėti nuotraukas →',
      items: [
        { location: 'Australija', text: 'Venom Holidays nuostabiai padėjo suplanuoti mūsų atostogas nuo pradžios iki pabaigos. Vairuotojas Lahiru pasitiko mus oro uoste ir rūpinosi per visą įspūdingą maršrutą po Sigiriya, Ella, Kandy, Yala, Galle ir Bentota. Jie gali pritaikyti bet kurią kelionę jūsų poreikiams, todėl nuoširdžiai juos rekomenduojame.' },
        { location: 'Pietų Afrika', text: 'Suplanavau gimtadienio kelionę žmonai, ir mūsų patirtis buvo išties nuostabi. Nuo Negombo ir Galle iki Ella, Kandy, Anuradhapura, Sigiriya ir Colombo – oras, žmonės ir vaizdai buvo puikūs. Su mumis elgėsi karališkai, todėl rekomenduotume Serendia kiekvienam Šri Lankos lankytojui.' },
        { location: 'Australija', text: 'Po neįtikėtinų atostogų grįžome namo su daugybe ypatingų ir brangių prisiminimų. Ačiū, kad taip gerai mumis rūpinotės visos kelionės metu. Po tokios nuostabios patirties buvo sunku grįžti į kasdienybę.' },
      ],
    },
    footer: { copyright: 'Visos teisės saugomos' }, utilities: { scrollTop: 'Grįžti į viršų' },
  },
};
