import type { ContentDictionary } from '../tourPackagesI18n';

/* Repeated boilerplate, written once. */
const halfDay = 'Durée : une demi-journée';
const daily = 'Départs quotidiens';
const privateGuide = 'Expérience privée avec votre chauffeur-guide';
const unesco = 'Entrée du site du patrimoine mondial de l’UNESCO incluse';
const onRequest = 'Prix sur demande';
const perPerson = 'par personne, en demi-pension';
const period = '01 nov. 2026 – 30 avr. 2027';
const roomNight = (amount: number) => `USD ${amount} par chambre et par nuit, en demi-pension`;
const departure = 'Départ';
const toAirport = (from: string) => `(${from} vers l’aéroport)`;
const departureIntro =
  'Une dernière matinée au bord de l’eau, puis votre chauffeur-guide vient vous chercher pour le transfert vers l’aéroport international de Bandaranaike, calculé autour de votre vol avec une marge confortable pour la route. Si votre départ est tardif, nous pouvons prévoir une chambre à la journée, une dernière excursion ou une pause déjeuner en chemin plutôt que de vous laisser attendre au terminal — dites-le-nous et nous l’intégrerons à la journée.';
const culturalTriangle = 'Triangle culturel';
const forCulturalTriangle = '(pour le Triangle culturel)';
const moreBentotaTitle = 'Option 1 : plus de temps à Bentota';
const hillCountry = 'Hauts plateaux';

const content: ContentDictionary = {
  /* ---------------- Experiences ---------------- */
  'exp.polonnaruwa.name': 'Cité antique de Polonnaruwa',
  'exp.polonnaruwa.location': culturalTriangle,
  'exp.polonnaruwa.summary':
    'La deuxième capitale du Sri Lanka est la mieux conservée des cités en ruine de l’île — un ensemble compact et facile à parcourir à pied de palais royaux, de bassins et de bouddhas colossaux taillés dans la roche, légués par les rois du XIIe siècle.',
  'exp.polonnaruwa.detail.0':
    'Polonnaruwa est la seule cité antique qui se lit comme une carte. Là où Anuradhapura s’étale, Polonnaruwa se resserre en un parc archéologique aux airs de jardin que l’on parcourt en une matinée, et presque tout tient encore debout : la carcasse de brique du palais à sept étages du roi Parakramabahu, le Quadrilatère avec son Vatadage circulaire, le sanctuaire de Lankatilaka dont les murs s’élèvent à 17 mètres de part et d’autre d’un bouddha décapité.',
  'exp.polonnaruwa.detail.1':
    'Le point d’orgue est Gal Vihara : quatre figures immenses taillées directement dans une même paroi de granit — un bouddha assis en méditation, une figure debout aux bras croisés et un bouddha couché de 14 mètres dont la pierre a été travaillée si finement que l’on distingue encore le creux de l’oreiller sous sa tête. Votre chauffeur-guide vous racontera le règne qui a bâti tout cela, et pourquoi la cité a été abandonnée à la jungle à peine un siècle plus tard.',
  'exp.polonnaruwa.facts.0': halfDay,
  'exp.polonnaruwa.facts.1': 'Idéal à la fraîcheur du matin',
  'exp.polonnaruwa.facts.2': 'Départs quotidiens, toute l’année',
  'exp.polonnaruwa.facts.3': privateGuide,
  'exp.polonnaruwa.facts.4': unesco,
  'exp.polonnaruwa.goodToKnow':
    'Le site est étendu et très peu ombragé — prévoyez un chapeau et de l’eau. Épaules et genoux doivent être couverts sur les sites religieux, et on se déchausse à Gal Vihara.',

  'exp.minneriya.name': 'Safari en 4x4 dans le parc national de Minneriya',
  'exp.minneriya.location': culturalTriangle,
  'exp.minneriya.summary':
    'En fin d’après-midi, pendant la saison sèche, des centaines d’éléphants sauvages descendent sur les prairies d’un réservoir qui se retire — le plus grand rassemblement d’éléphants d’Asie au monde.',
  'exp.minneriya.detail.0':
    'Quand le réservoir de Minneriya se retire pendant les mois secs, il laisse derrière lui une plaine d’herbe fraîche, et les éléphants arrivent. Ils viennent en groupes familiaux tout au long de l’après-midi jusqu’à ce que, au plus fort du Gathering entre juillet et septembre, trois cents animaux ou plus se retrouvent sur la même rive au même moment — les éléphanteaux compris.',
  'exp.minneriya.detail.1':
    'Vous partirez en 4x4 découvert avec un pisteur qui sait où les troupeaux se nourrissent. Au-delà des éléphants, le parc abrite des cerfs sambar et axis, des buffles sauvages, des macaques à toque, des tantales indiens et, pour les patients, un léopard de temps à autre à la lisière des arbres.',
  'exp.minneriya.facts.0': halfDay,
  'exp.minneriya.facts.1': 'Horaires : de 15 h à 18 h',
  'exp.minneriya.facts.2': 'Départs quotidiens, toute l’année',
  'exp.minneriya.facts.3': 'Jeep 4x4 privée avec pisteur',
  'exp.minneriya.facts.4': 'Entrée du parc et location de la jeep incluses',
  'exp.minneriya.goodToKnow':
    'Selon les déplacements des troupeaux, votre pisteur pourra vous emmener dans les parcs voisins de Kaudulla ou de Hurulu Eco Park — les éléphants circulent entre les trois et nous suivons toujours les animaux.',

  'exp.sigiriya-rock.name': 'Forteresse du rocher de Sigiriya',
  'exp.sigiriya-rock.location': 'Sigiriya',
  'exp.sigiriya-rock.summary':
    'Un piton de granit vertical s’élevant à 200 mètres au-dessus de la jungle plate, couronné des ruines d’un palais céleste du Ve siècle et desservi par un escalier qui passe entre les pattes d’un lion de pierre disparu.',
  'exp.sigiriya-rock.detail.0':
    'Le roi Kashyapa a bâti sa capitale au sommet d’un rocher parce qu’il avait assassiné son père pour le trône et s’attendait à ce que son frère vienne le chercher. Ce qu’il a laissé est l’un des plus anciens exemples conservés d’urbanisme paysager au monde : jardins d’eau symétriques à la base, jardins de rochers au-dessus, et un complexe palatial sur un sommet de deux hectares avec des citernes taillées à même la roche.',
  'exp.sigiriya-rock.detail.1':
    'L’ascension compte environ 1 200 marches. À mi-parcours, un escalier en colimaçon mène à une cavité abritée dans la paroi où les célèbres fresques de courtisanes aux seins nus ont gardé leurs couleurs depuis mille cinq cents ans. Plus loin court le Mur-Miroir, autrefois poli comme un miroir et aujourd’hui couvert de graffitis laissés par les visiteurs depuis le VIIIe siècle. Au sommet, tout le Triangle culturel s’ouvre à vos pieds.',
  'exp.sigiriya-rock.facts.0': halfDay,
  'exp.sigiriya-rock.facts.1': 'Environ 1 200 marches jusqu’au sommet',
  'exp.sigiriya-rock.facts.2': daily,
  'exp.sigiriya-rock.facts.3': privateGuide,
  'exp.sigiriya-rock.facts.4': 'Entrée et musée sur place inclus',
  'exp.sigiriya-rock.goodToKnow':
    'Partez tôt le matin ou après 16 h — le rocher retient la chaleur et les escaliers se remplissent en milieu de journée. Une bonne condition physique est nécessaire. Pidurangala, le rocher d’en face, est l’alternative plus facile et offre la vue classique sur Sigiriya.',

  'exp.anuradhapura.name': 'Cité sacrée d’Anuradhapura',
  'exp.anuradhapura.location': 'Anuradhapura',
  'exp.anuradhapura.summary':
    'La première capitale de l’île, toujours lieu de pèlerinage vivant — des stupas de brique hauts comme des collines, des ruines de monastères sous les arbres et un figuier issu d’une bouture prélevée en 288 av. J.-C.',
  'exp.anuradhapura.detail.0':
    'Anuradhapura a dirigé l’île pendant plus de mille ans, et ce qui en subsiste est d’une échelle sans équivalent au Sri Lanka. Abhayagiri et Jetavanaramaya comptaient parmi les plus hautes constructions du monde antique après les pyramides de Gizeh ; même à demi ruinés, ils dominent encore la cime des arbres. Entre eux s’étendent des bassins, des pierres de lune, des pierres de garde et les réfectoires de monastères qui abritaient des milliers de moines.',
  'exp.anuradhapura.detail.1':
    'Le cœur du site est le Sri Maha Bodhi, issu d’une bouture de l’arbre sous lequel le Bouddha s’est assis, apportée ici par la nonne Sanghamitta et plantée en 288 av. J.-C. C’est le plus vieil arbre planté par l’homme dont la date de plantation soit connue, et il est toujours entretenu, toujours orné de guirlandes, toujours entouré de pèlerins vêtus de blanc, tous les jours de l’année.',
  'exp.anuradhapura.facts.0': halfDay,
  'exp.anuradhapura.facts.1': daily,
  'exp.anuradhapura.facts.2': privateGuide,
  'exp.anuradhapura.facts.3': unesco,
  'exp.anuradhapura.facts.4': 'Couvert par le billet du Triangle culturel',
  'exp.anuradhapura.goodToKnow':
    'C’est un lieu de culte en activité, pas seulement une ruine. Une tenue blanche ou claire couvrant épaules et genoux est attendue, et l’on retire chaussures et chapeaux devant l’arbre de la Bodhi et sur les esplanades des stupas — le dallage chauffe, pensez à emporter des chaussettes.',

  'exp.hot-air-balloon.name': 'Montgolfière au-dessus du Triangle culturel',
  'exp.hot-air-balloon.location': 'Sigiriya',
  'exp.hot-air-balloon.summary':
    'Décollez avant l’aube et dérivez au-dessus des rizières, des réservoirs et de la jungle, avec le rocher de Sigiriya qui capte la première lumière — atterrissage accompagné d’une coupe de vin pétillant.',
  'exp.hot-air-balloon.detail.0':
    'On vient vous chercher dans la nuit pour vous conduire au terrain de décollage et assister au gonflage de l’enveloppe. Le vol dure environ une heure, à basse altitude au-dessus des villages qui s’éveillent, des buffles dans les réservoirs et de la canopée, tandis que les pitons rocheux du Triangle culturel percent la brume au lever du soleil.',
  'exp.hot-air-balloon.detail.1':
    'Le lieu d’atterrissage dépend entièrement du vent, ce qui fait partie du charme — l’équipe au sol vous suit et vous attend à l’arrivée, avec un toast au vin pétillant ou au jus de fruits et un certificat de vol.',
  'exp.hot-air-balloon.facts.0': 'Durée : environ 1 h 30 de vol',
  'exp.hot-air-balloon.facts.1': 'Horaires : de 5 h 30 à 7 h',
  'exp.hot-air-balloon.facts.2': 'Uniquement de novembre à avril',
  'exp.hot-air-balloon.facts.3': 'Soumis aux conditions météorologiques du matin',
  'exp.hot-air-balloon.facts.4': 'Supplément applicable, réglable sur place ou ajouté à votre devis',
  'exp.hot-air-balloon.goodToKnow':
    'Déconseillé aux enfants de moins de 16 ans, aux femmes enceintes et aux personnes souffrant de troubles cardiaques. Les vols sont annulés et remboursés si le vent n’est pas favorable, ce qui arrive.',

  'exp.dambulla.name': 'Temple d’or des grottes de Dambulla',
  'exp.dambulla.location': 'Dambulla',
  'exp.dambulla.summary':
    'Cinq grottes creusées dans le flanc d’un rocher, remplies de 150 statues de Bouddha et peintes du sol au plafond — le plus grand et le mieux conservé des complexes de temples rupestres du Sri Lanka.',
  'exp.dambulla.detail.0':
    'Une courte montée le long de la paroi mène à une terrasse et, derrière elle, à cinq grottes utilisées sans interruption à des fins religieuses depuis vingt-deux siècles. Le roi Valagamba s’y est réfugié en exil au Ier siècle av. J.-C. et a transformé les grottes en temple après avoir reconquis son royaume.',
  'exp.dambulla.detail.1':
    'À l’intérieur, les plafonds de roche s’incurvent pour rejoindre les murs et chaque surface est peinte — des fresques tourbillonnantes de la vie du Bouddha qui épousent les reliefs naturels de la pierre. On compte 150 statues en tout, dont un bouddha couché de 14 mètres taillé dans la paroi elle-même, et une source qui goutte du plafond dans un récipient et n’a jamais été vue à sec.',
  'exp.dambulla.facts.0': 'Durée : 2 à 3 heures',
  'exp.dambulla.facts.1': 'Environ 350 marches jusqu’à la terrasse des grottes',
  'exp.dambulla.facts.2': daily,
  'exp.dambulla.facts.3': privateGuide,
  'exp.dambulla.facts.4': unesco,
  'exp.dambulla.goodToKnow':
    'Épaules et genoux couverts, chaussures retirées sur la terrasse. Le dallage de pierre est brûlant dès la fin de matinée — prenez des chaussettes. Les singes de l’escalier s’emparent de tout ce que vous tenez à la main.',

  'exp.spice-garden.name': 'Jardin d’épices de Matale',
  'exp.spice-garden.location': 'Matale',
  'exp.spice-garden.summary':
    'Parcourez un jardin d’épices en activité dans les collines au-dessus de Matale, où cannelle de Ceylan, cardamome, poivre et vanille poussent côte à côte — et découvrez à quoi ressemble vraiment chaque épice avant qu’elle n’arrive dans un bocal.',
  'exp.spice-garden.detail.0':
    'Le Sri Lanka a bâti sa première fortune sur la cannelle, et Matale en reste le centre. Un guide vous fait découvrir le jardin plante par plante — lianes de poivre grimpant sur leurs tuteurs, cardamome à l’ombre, muscade, girofle, curcuma, orchidées de vanille et la cannelle elle-même, dont la véritable écorce est pelée et roulée à la main pour former les bâtons pâles qui distinguent la cannelle de Ceylan de la casse plus grossière vendue ailleurs sous le nom de cannelle.',
  'exp.spice-garden.detail.1':
    'Il y a généralement une démonstration de pelage de l’écorce, une tasse de thé épicé et la possibilité d’essayer un court massage ayurvédique de la tête et des épaules. La boutique du jardin vend huiles et baumes ; rien ne vous oblige à acheter.',
  'exp.spice-garden.facts.0': 'Durée : environ 1 heure',
  'exp.spice-garden.facts.1': 'Sur la route de Dambulla à Kandy',
  'exp.spice-garden.facts.2': daily,
  'exp.spice-garden.facts.3': privateGuide,
  'exp.spice-garden.facts.4': 'Thé épicé et démonstration offerts',
  'exp.spice-garden.goodToKnow':
    'Ces jardins tiennent une boutique en fin de visite. Les prix y sont nettement plus élevés qu’au marché local et rien n’est obligatoire — regardez, ou passez votre chemin.',

  'exp.kandy-temple.name': 'Temple de la Dent sacrée',
  'exp.kandy-temple.location': 'Kandy',
  'exp.kandy-temple.summary':
    'Le site bouddhiste le plus vénéré du Sri Lanka, qui abrite une dent du Bouddha, symbole de souveraineté depuis plus de mille ans — à découvrir de préférence pendant les tambours de la puja du soir.',
  'exp.kandy-temple.detail.0':
    'La relique de la dent est arrivée au Sri Lanka au IVe siècle, cachée dans la chevelure d’une princesse, et celui qui la détenait était réputé détenir le droit de régner sur l’île. On s’est battu pour elle, on l’a déplacée, cachée et promenée en procession depuis lors ; elle repose aujourd’hui dans un reliquaire d’or au sein du palais lacustre des derniers rois de Kandy.',
  'exp.kandy-temple.detail.1':
    'Prévoyez votre visite pendant l’une des trois pujas quotidiennes, quand les tambours et les joueurs de cor kandyens se mettent à jouer devant la chambre intérieure et que les portes s’ouvrent pour laisser défiler la file de pèlerins, fleurs de lotus à la main, devant le reliquaire. Vous ne verrez pas la dent elle-même, qui ne quitte son écrin que lors d’années exceptionnelles, mais c’est l’atmosphère qui compte.',
  'exp.kandy-temple.facts.0': 'Durée : environ 2 heures',
  'exp.kandy-temple.facts.1': 'La puja du soir commence généralement à 18 h 30',
  'exp.kandy-temple.facts.2': daily,
  'exp.kandy-temple.facts.3': privateGuide,
  'exp.kandy-temple.facts.4': unesco,
  'exp.kandy-temple.goodToKnow':
    'Code vestimentaire strict : vêtements blancs ou clairs, épaules et genoux couverts, chaussures retirées et laissées à l’entrée. Un contrôle de sécurité a lieu à la porte : voyagez léger.',

  'exp.kandyan-dance.name': 'Spectacle de danse kandyenne',
  'exp.kandyan-dance.location': 'Kandy',
  'exp.kandyan-dance.summary':
    'Une heure de tambours, de danse masquée et de marche sur le feu dans la capitale des hauts plateaux — les danses rituelles du royaume de Kandy, données chaque soir en centre-ville.',
  'exp.kandyan-dance.detail.0':
    'Les traditions de danse kandyenne sont nées du rituel des temples, et la représentation du soir parcourt les formes principales tour à tour : les danseurs Ves et leurs coiffes d’argent, les danses du paon et des moissons, les acrobaties du Raban avec ses assiettes tournantes, et le Kolam masqué.',
  'exp.kandyan-dance.detail.1':
    'Le spectacle se termine dehors, dans la cour, par une danse du feu et une marche sur les braises — les artistes traversent pieds nus un lit de charbons ardents. C’est assumé comme un spectacle pour visiteurs, et c’est aussi le moyen le plus simple de voir ces danses en dehors de l’Esala Perahera d’août.',
  'exp.kandyan-dance.facts.0': 'Durée : environ 1 heure',
  'exp.kandyan-dance.facts.1': 'Horaires : représentations à partir de 17 h',
  'exp.kandyan-dance.facts.2': 'Tous les jours, en ville à Kandy',
  'exp.kandyan-dance.facts.3': 'Supplément applicable',
  'exp.kandyan-dance.facts.4': 'Places non numérotées — arrivez tôt pour les premiers rangs',
  'exp.kandyan-dance.goodToKnow':
    'La marche sur le feu a lieu dehors, à la fin : le public se déplace. La salle devient chaude et n’est pas climatisée.',

  'exp.botanical-garden.name': 'Jardins botaniques royaux de Peradeniya',
  'exp.botanical-garden.location': 'Kandy',
  'exp.botanical-garden.summary':
    'Soixante hectares dans une boucle du Mahaweli, aménagés en jardin d’agrément royal et abritant aujourd’hui quatre mille espèces, une allée de palmiers royaux et un figuier de Java dont la couronne fait la taille d’un court de tennis.',
  'exp.botanical-garden.detail.0':
    'C’étaient les jardins de la royauté kandyenne bien avant que les Britanniques ne les formalisent en 1821, et ils restent les plus beaux d’Asie du Sud. Les incontournables méritent le détour : la Grande Pelouse et son immense figuier de Java, la double allée de palmiers royaux, le pont suspendu au-dessus de la rivière, et la serre aux orchidées où plusieurs centaines de variétés sont en fleur à tout moment.',
  'exp.botanical-garden.detail.1':
    'Les sections d’épices et de plantes médicinales font écho à tout ce que vous aurez vu à Matale, et les arbres commémoratifs — plantés par des chefs d’État en visite sur deux siècles — constituent une discrète archive de l’histoire diplomatique de l’île.',
  'exp.botanical-garden.facts.0': 'Durée : 2 à 3 heures',
  'exp.botanical-garden.facts.1': 'À 5 km à l’ouest de Kandy',
  'exp.botanical-garden.facts.2': 'Départs quotidiens, ouvert de 7 h 30 à 17 h',
  'exp.botanical-garden.facts.3': privateGuide,
  'exp.botanical-garden.facts.4': 'Entrée incluse',
  'exp.botanical-garden.goodToKnow':
    'Cela représente beaucoup de marche sur pelouse découverte. Les matinées sont plus fraîches et la serre aux orchidées plus calme avant l’arrivée des groupes. Des roussettes dorment dans les grands arbres près de la rivière — levez les yeux.',

  'exp.kandy-city.name': 'Visite de la ville de Kandy',
  'exp.kandy-city.location': 'Kandy',
  'exp.kandy-city.summary':
    'La capitale des hauts plateaux à son rythme : le lac, le marché couvert, un atelier de pierres précieuses et le belvédère au-dessus de la ville d’où s’ouvre toute la cuvette de Kandy au crépuscule.',
  'exp.kandy-city.detail.0':
    'Kandy a résisté aux puissances européennes pendant trois siècles après la chute de la côte, et la ville donne toujours l’impression d’un pays à part — plus fraîche, plus verte, plus fière. La visite comprend le lac artificiel creusé par le dernier roi, le marché à arcades de l’époque coloniale avec ses étals de fruits et d’épices, et les ateliers où l’on taille saphirs et pierres de lune sri-lankais.',
  'exp.kandy-city.detail.1':
    'Vous finirez au belvédère de Bahirawakanda ou à celui d’Arthur’s Seat, d’où la ville apparaît dans son cercle de collines, les toits du temple et le lac en contrebas — la plus belle photo de la journée, à prendre de préférence en fin d’après-midi.',
  'exp.kandy-city.facts.0': halfDay,
  'exp.kandy-city.facts.1': daily,
  'exp.kandy-city.facts.2': privateGuide,
  'exp.kandy-city.facts.3': 'Visites du musée des pierres précieuses et du marché incluses',
  'exp.kandy-city.facts.4': 'À associer idéalement à la puja du soir au temple',
  'exp.kandy-city.goodToKnow':
    'Le plan de circulation à sens unique de Kandy est lent aux heures de pointe. Les ateliers de pierres et de batik travaillent à la commission — considérez-les comme des démonstrations et n’achetez que si vous le souhaitez.',

  'exp.tea-factory.name': 'Visite d’une fabrique de thé et d’une plantation',
  'exp.tea-factory.location': hillCountry,
  'exp.tea-factory.summary':
    'Suivez la feuille du versant jusqu’à la tasse dans une fabrique d’altitude en activité — séchoirs, machines à rouler, fours de torréfaction et dégustation de grades que l’on ne voit jamais à l’export.',
  'exp.tea-factory.detail.0':
    'La route qui monte au pays du thé traverse des terrasses de buissons taillés, avec les cueilleuses au travail dans les rangs et la cheminée de la fabrique quelque part au-dessus. La plupart de ces bâtiments sont victoriens et la machinerie n’est guère plus récente — le procédé n’a presque pas changé.',
  'exp.tea-factory.detail.1':
    'Vous le parcourrez dans l’ordre : les bacs de flétrissage où la feuille perd son humidité pendant la nuit, les rouleuses qui brisent les cellules, les bacs d’oxydation où la feuille passe du vert au cuivre, les fours de torréfaction et enfin les tamis de tri qui séparent les grades. Cela se termine par une dégustation et la possibilité d’acheter les crus de domaine qui restent pour l’essentiel sur l’île.',
  'exp.tea-factory.facts.0': 'Durée : 1 à 2 heures',
  'exp.tea-factory.facts.1': 'Départs quotidiens, du lundi au samedi',
  'exp.tea-factory.facts.2': privateGuide,
  'exp.tea-factory.facts.3': 'Visite de la fabrique et dégustation incluses',
  'exp.tea-factory.facts.4': 'Fabrique en activité — la production suit la saison de cueillette',
  'exp.tea-factory.goodToKnow':
    'Les fabriques ne produisent pas le dimanche ni les jours de poya (pleine lune) : la machinerie peut donc être à l’arrêt. La photographie est limitée dans certains ateliers.',

  'exp.nuwara-eliya-city.name': 'Visite de Nuwara Eliya',
  'exp.nuwara-eliya-city.location': 'Nuwara Eliya',
  'exp.nuwara-eliya-city.summary':
    'L’improbable station d’altitude du Sri Lanka — cottages néo-Tudor, hippodrome, bureau de poste colonial et lac de plaisance, à 1 900 mètres en pleine zone tropicale.',
  'exp.nuwara-eliya-city.detail.0':
    'Les Britanniques ont construit Nuwara Eliya pour se sentir chez eux et ne se sont jamais vraiment arrêtés : on y trouve un Victoria Park, un golf, un Hill Club avec code vestimentaire et un bureau de poste en brique rouge surmonté d’une horloge qui ne dépareillerait pas dans le Surrey. Les habitants l’appellent la Petite Angleterre, avec affection.',
  'exp.nuwara-eliya-city.detail.1':
    'La matinée comprend le lac Gregory, le parc en fleurs, les vieux cottages de la ville et le marché, avec une pause thé et scones si vous voulez l’effet complet. À cette altitude, l’air est vraiment froid une fois la nuit tombée — une surprise quand on arrive de la côte.',
  'exp.nuwara-eliya-city.facts.0': halfDay,
  'exp.nuwara-eliya-city.facts.1': 'Altitude : 1 868 mètres',
  'exp.nuwara-eliya-city.facts.2': daily,
  'exp.nuwara-eliya-city.facts.3': privateGuide,
  'exp.nuwara-eliya-city.facts.4': 'Entrées de Victoria Park et du lac Gregory incluses',
  'exp.nuwara-eliya-city.goodToKnow':
    'Emportez une polaire ou une veste — les températures du soir descendent autour de 10 °C et la plupart des hôtels n’ont pas de climatisation, parce qu’elle n’y sert à rien.',

  'exp.sita-amman.name': 'Temple de Seetha Amman',
  'exp.sita-amman.location': 'Nuwara Eliya',
  'exp.sita-amman.summary':
    'Un temple hindou aux couleurs vives au bord d’un torrent de montagne, tenu pour le lieu où Sita fut retenue captive par Ravana dans le Ramayana — avec des creux en forme d’empreintes dans la roche pour le prouver.',
  'exp.sita-amman.detail.0':
    'Le temple se dresse à Seetha Eliya, dans la forêt de pins à quelques kilomètres de Nuwara Eliya, et constitue l’une des étapes clés du circuit du Ramayana qui attire les pèlerins indiens au Sri Lanka. Le gopuram est couvert de l’habituelle foule de figures peintes ; à l’intérieur se trouvent des sanctuaires dédiés à Sita, Rama, Lakshmana et Hanuman.',
  'exp.sita-amman.detail.1':
    'Sur la roche du lit du torrent, en face, des dépressions circulaires sont identifiées par les fidèles comme les empreintes de Hanuman, et le sol de cette rive est d’une autre couleur que le reste — brûlé, dit la légende, lorsqu’il mit le feu à l’endroit. Que l’on y croie ou non, c’est un endroit charmant, frais et vert, traversé par l’eau.',
  'exp.sita-amman.facts.0': 'Durée : environ 45 minutes',
  'exp.sita-amman.facts.1': 'Sur la route de Nuwara Eliya à Ella',
  'exp.sita-amman.facts.2': daily,
  'exp.sita-amman.facts.3': privateGuide,
  'exp.sita-amman.facts.4': 'Un arrêt court et facile — aucune montée',
  'exp.sita-amman.goodToKnow':
    'On se déchausse à l’entrée et il y a un tronc à dons plutôt qu’un billet. Tenue correcte exigée.',

  'exp.hill-train.name': 'Train panoramique des hauts plateaux',
  'exp.hill-train.location': hillCountry,
  'exp.hill-train.summary':
    'La ligne Nanu Oya – Ella est régulièrement citée parmi les plus beaux trajets ferroviaires du monde — trois à quatre heures à travers terrasses de thé, tunnels et forêt de nuages, portes grandes ouvertes.',
  'exp.hill-train.detail.0':
    'La voie a été posée pour transporter le thé, et elle emprunte le tracé panoramique parce que c’est là que sont les plantations. Vous montez depuis Nanu Oya en passant par Haputale et Bandarawela, les wagons penchant dans les courbes au-dessus de vallées d’un vert taillé, avec cascades, eucalyptus et de temps à autre une gare où il ne se passe pas grand-chose.',
  'exp.hill-train.detail.1':
    'La moitié du plaisir tient au wagon lui-même : fenêtres baissées, portes ouvertes, thé et vadai vendus dans l’allée. Votre chauffeur vous retrouve à l’arrivée avec les bagages : vous voyagez avec un appareil photo et rien d’autre.',
  'exp.hill-train.facts.0': 'Durée : 3 à 4 heures de train',
  'exp.hill-train.facts.1': 'Nanu Oya – Ella, ou Ella – Haputale pour un trajet plus court',
  'exp.hill-train.facts.2': 'Places réservées sous réserve de disponibilité',
  'exp.hill-train.facts.3': 'Supplément applicable',
  'exp.hill-train.facts.4': 'Votre véhicule et vos bagages vous attendent à destination',
  'exp.hill-train.goodToKnow':
    'Les places réservées en première et deuxième classe partent des semaines à l’avance, surtout de décembre à mars — dites-le-nous tôt et nous les réserverons avec votre itinéraire.',

  'exp.ella-city.name': 'Ella et le pont aux Neuf Arches',
  'exp.ella-city.location': 'Ella',
  'exp.ella-city.summary':
    'Une bourgade de montagne devenue l’endroit préféré de l’île pour ne rien faire — plus le pont aux Neuf Arches, viaduc de l’époque coloniale surgissant de la jungle sur neuf arches de pierre.',
  'exp.ella-city.detail.0':
    'Ella, c’est une rue unique de cafés et de maisons d’hôtes dans une échancrure entre deux montagnes, et si tout le monde s’y arrête, c’est pour la vue plongeante dans l’Ella Gap qui, par matin clair, porte jusqu’aux plaines du sud.',
  'exp.ella-city.detail.1':
    'Le pont aux Neuf Arches se rejoint par une courte marche à travers jardins de thé et jungle. Construit en 1921 sans une seule pièce d’acier — la guerre avait tout absorbé, dit-on —, il franchit un ravin sur neuf arches de brique et de pierre, la forêt se refermant des deux côtés. Vérifiez l’horaire avec votre guide et soyez sur place au passage d’un train.',
  'exp.ella-city.facts.0': halfDay,
  'exp.ella-city.facts.1': 'Courte marche à travers les jardins de thé jusqu’au pont',
  'exp.ella-city.facts.2': daily,
  'exp.ella-city.facts.3': privateGuide,
  'exp.ella-city.facts.4': 'Chutes de Ravana et points de vue sur l’Ella Gap inclus',
  'exp.ella-city.goodToKnow':
    'Le sentier jusqu’au pont est irrégulier et longe par endroits une voie ferrée en service — chaussures adaptées, et suivez les consignes du guide à l’approche d’un train.',

  'exp.little-adams.name': 'Ascension du Little Adam’s Peak',
  'exp.little-adams.location': 'Ella',
  'exp.little-adams.summary':
    'Une marche facile de 45 minutes à travers les plantations de thé jusqu’à une crête offrant une vue à 360 degrés sur l’Ella Gap — le plus beau lever de soleil des hauts plateaux pour le moindre effort.',
  'exp.little-adams.detail.0':
    'Contrairement à son homonyme grandeur nature, le Little Adam’s Peak ne demande pas grand-chose : un sentier entre les théiers, quelques marches près du sommet, puis une crête herbeuse à 1 141 mètres avec le vide sur trois côtés.',
  'exp.little-adams.detail.1':
    'Partez aux premières lueurs. La vallée en contrebas se remplit de brume, l’Ella Rock se dresse en face et le soleil se lève sur les plaines. La plupart des matins, vous partagerez l’endroit avec une poignée de personnes et beaucoup de chants d’oiseaux.',
  'exp.little-adams.facts.0': 'Durée : environ 2 heures aller-retour',
  'exp.little-adams.facts.1': 'Idéal au lever du soleil, à partir de 5 h 30 environ',
  'exp.little-adams.facts.2': 'Modéré — environ 200 mètres de dénivelé',
  'exp.little-adams.facts.3': 'En autonomie, ou avec un guide local sur demande',
  'exp.little-adams.facts.4': 'Aucun droit d’entrée',
  'exp.little-adams.goodToKnow':
    'Le sentier est argileux et devient glissant après la pluie. Des baskets suffisent par temps sec ; la dernière section est en marches.',

  'exp.ravana-falls.name': 'Chutes de Ravana',
  'exp.ravana-falls.location': 'Ella',
  'exp.ravana-falls.summary':
    'Une cascade de 25 mètres dévalant la paroi par paliers, juste au bord de la route Ella–Wellawaya, à son plus spectaculaire dans les mois qui suivent la mousson.',
  'exp.ravana-falls.detail.0':
    'Les chutes tirent leur nom du Ramayana — la grotte située derrière serait celle où le roi Ravana cacha Sita — et elles apparaissent sans prévenir dans la descente d’Ella, la route tournant et toute la cascade se trouvant soudain devant vous.',
  'exp.ravana-falls.detail.1':
    'L’eau descend par paliers à travers jungle et rochers jusqu’à un bassin. Une aire d’observation se trouve au niveau de la route, avec des marches vers le bassin pour qui veut s’approcher, et des étals vendant noix de coco royales et fruits.',
  'exp.ravana-falls.facts.0': 'Durée : environ 30 minutes',
  'exp.ravana-falls.facts.1': 'Arrêt en bord de route, à 6 km d’Ella',
  'exp.ravana-falls.facts.2': 'Débit maximal de novembre à février',
  'exp.ravana-falls.facts.3': privateGuide,
  'exp.ravana-falls.facts.4': 'Aucun droit d’entrée',
  'exp.ravana-falls.goodToKnow':
    'Les rochers autour du bassin sont glissants et le courant plus fort qu’il n’y paraît — des noyades ont lieu ici. Admirez depuis l’aire d’observation plutôt que de vous baigner.',

  'exp.kataragama.name': 'Kataragama et Kiri Vehera',
  'exp.kataragama.location': 'Kataragama',
  'exp.kataragama.summary':
    'L’un des rares lieux au monde sacré à la fois pour les bouddhistes, les hindous et les musulmans — une soirée de tambours, de lampes à huile et d’offrandes au sanctuaire du dieu Kataragama, au pied d’un stupa d’un blanc éclatant.',
  'exp.kataragama.detail.0':
    'Kataragama est un lieu de pèlerinage depuis deux mille ans et appartient à tous : les bouddhistes viennent pour le stupa de Kiri Vehera, les hindous pour le sanctuaire Maha Devale dédié à Murugan, les musulmans pour la mosquée située dans la même enceinte, et les anciens Veddas ont encore un rôle dans la fête annuelle.',
  'exp.kataragama.detail.1':
    'Venez pour la puja du soir. Les pèlerins traversent la Menik Ganga pour se laver avant d’entrer, puis portent des plateaux de fruits et de fleurs à travers l’enceinte au sol de sable, au rythme des tambours, tandis que les lampes à huile s’allument à la tombée de la nuit. Juste à côté, le stupa de Kiri Vehera — érigé, selon la tradition, au IIe siècle av. J.-C. — rayonne de blanc au-dessus des arbres.',
  'exp.kataragama.facts.0': 'Durée : 2 à 3 heures',
  'exp.kataragama.facts.1': 'Puja du soir vers 18 h 30',
  'exp.kataragama.facts.2': 'Tous les jours, sur la route entre Ella et Yala',
  'exp.kataragama.facts.3': privateGuide,
  'exp.kataragama.facts.4': 'Aucun droit d’entrée — offrandes en vente à la porte',
  'exp.kataragama.goodToKnow':
    'On se déchausse bien avant le sanctuaire et le sable reste chaud en soirée. Habillez-vous sobrement, en blanc ou en couleurs claires. C’est un lieu de pèlerinage en activité : soyez discret avec les appareils photo.',

  'exp.yala-safari.name': 'Safari en 4x4 dans le parc national de Yala',
  'exp.yala-safari.location': 'Yala',
  'exp.yala-safari.summary':
    'La réserve phare du Sri Lanka abrite l’une des plus fortes densités de léopards au monde, ainsi que des ours lippus, des éléphants et des crocodiles — et c’est le seul safari de l’île qui se termine face à la mer.',
  'exp.yala-safari.detail.0':
    'Le Bloc 1 de Yala est la capitale mondiale du léopard en densité, et les félins y sont inhabituellement indifférents aux véhicules, ce qui explique des observations bien meilleures que les chiffres ne le laisseraient penser. Au-delà des léopards, le parc abrite des ours lippus — les meilleures chances en juin et juillet quand le fruit du palu mûrit —, des éléphants, des buffles sauvages, des cerfs axis, des crocodiles des marais dans les points d’eau et plus de deux cents espèces d’oiseaux.',
  'exp.yala-safari.detail.1':
    'Vous partirez en 4x4 découvert privé avec un pisteur, dès les premières lueurs quand les animaux sont encore en mouvement. Le paysage lui-même fait la moitié du plaisir : jungle broussailleuse s’ouvrant sur des lagunes, forêt de mousson, affleurements de granit et l’océan Indien qui se brise sur une plage déserte à Patanangala.',
  'exp.yala-safari.facts.0': 'Durée : journée entière, ou demi-journée à l’aube ou au crépuscule',
  'exp.yala-safari.facts.1': 'Horaires : à partir de 5 h 30, ou de 14 h à 18 h',
  'exp.yala-safari.facts.2': 'Départs quotidiens — parc fermé chaque septembre pour sécheresse',
  'exp.yala-safari.facts.3': 'Jeep 4x4 privée avec pisteur',
  'exp.yala-safari.facts.4': 'Entrée du parc, jeep et pisteur inclus',
  'exp.yala-safari.goodToKnow':
    'Le parc est poussiéreux et les pistes sont rudes. Prévoyez un foulard, des lunettes de soleil et des jumelles, et partez à l’aube si vous le pouvez — la lumière est meilleure et les animaux plus actifs avant la chaleur.',

  'exp.galle-fort.name': 'Fort de Galle',
  'exp.galle-fort.location': 'Galle',
  'exp.galle-fort.summary':
    'Un comptoir hollandais fortifié sur un promontoire de l’océan Indien, toujours habité et parcourable en une heure — remparts en pierre de corail, phare et rues bordées de villas à colonnades aujourd’hui occupées par galeries et cafés.',
  'exp.galle-fort.detail.0':
    'Les Portugais ont fortifié le promontoire, les Hollandais l’ont reconstruit dans les règles en 1663 et les Britanniques n’ont eu qu’à s’y installer. Ce qui subsiste est la fortification d’origine européenne la mieux conservée d’Asie et, fait rare, un quartier bien vivant plutôt qu’un musée — des gens habitent derrière ces portes.',
  'exp.galle-fort.detail.1':
    'Faites d’abord le tour complet des remparts, l’océan sur trois côtés. Puis plongez dans le damier : l’église réformée hollandaise au sol de pierres tombales, la mosquée Meeran Jumma face au phare, le musée maritime installé dans un ancien entrepôt, et les rues ombragées de Pedlar’s et Church, où les anciennes maisons de marchands sont devenues boutiques, librairies et terrasses où prendre un café.',
  'exp.galle-fort.facts.0': halfDay,
  'exp.galle-fort.facts.1': 'Tous les jours — les remparts sont au mieux au coucher du soleil',
  'exp.galle-fort.facts.2': privateGuide,
  'exp.galle-fort.facts.3': 'Site du patrimoine mondial de l’UNESCO — entrée libre dans le fort',
  'exp.galle-fort.facts.4': 'Visite à pied sur des rues plates et pavées',
  'exp.galle-fort.goodToKnow':
    'Très peu d’ombre à l’intérieur des murs en milieu de journée. La fin d’après-midi jusqu’au coucher du soleil sur les remparts est le bon moment.',

  'exp.madu-river.name': 'Safari en bateau sur la Madu',
  'exp.madu-river.location': 'Balapitiya',
  'exp.madu-river.summary':
    'Une zone humide de 64 îles et de tunnels de mangrove derrière la côte, explorée en bateau à moteur — plantations de cannelle, temple insulaire, varans et martins-pêcheurs.',
  'exp.madu-river.detail.0':
    'L’estuaire de la Madu Ganga est une zone humide protégée par la convention de Ramsar et l’une des dernières mangroves intactes du Sri Lanka. Le bateau vous emmène à travers la lagune ouverte, puis s’engage dans des chenaux si étroits que les racines de palétuviers se referment au-dessus de vous et qu’il faut couper le moteur.',
  'exp.madu-river.detail.1':
    'Les arrêts incluent généralement Kothduwa, petite île boisée abritant un temple bouddhiste, et une parcelle familiale de cannelle où l’on vous montrera l’écorce pelée et roulée à la main. Gardez un œil sur les branches : varans d’eau, martins-pêcheurs, cormorans et, tôt le matin, des bandes de macaques.',
  'exp.madu-river.facts.0': 'Durée : environ 2 heures',
  'exp.madu-river.facts.1': 'Départ de Balapitiya, à 20 minutes de Bentota',
  'exp.madu-river.facts.2': 'Départs quotidiens — les matinées sont les plus calmes',
  'exp.madu-river.facts.3': 'Bateau privé',
  'exp.madu-river.facts.4': 'Location du bateau et escales sur les îles incluses',
  'exp.madu-river.goodToKnow':
    'Certains opérateurs proposent des bassins de « fish therapy » et gardent des animaux en captivité pour les photos. Le nôtre ne le fait pas, et nous vous demandons de ne pas encourager ceux qui le font.',

  'exp.turtle-hatchery.name': 'Écloserie de tortues de Kosgoda',
  'exp.turtle-hatchery.location': 'Kosgoda',
  'exp.turtle-hatchery.summary':
    'Une écloserie de conservation sur la plage, où les œufs rachetés aux braconniers sont réenfouis, protégés, et les nouveau-nés relâchés à la mer après la tombée de la nuit.',
  'exp.turtle-hatchery.detail.0':
    'Cinq des sept espèces de tortues marines au monde pondent sur ce littoral, et toutes les cinq sont menacées. Les écloseries de Kosgoda achètent les nids à ceux qui revendraient sinon les œufs, les réenfouissent dans du sable protégé et relâchent les nouveau-nés au crépuscule, une fois les mouettes parties.',
  'exp.turtle-hatchery.detail.1':
    'Un guide vous fera découvrir les bassins, qui abritent des adultes blessés ou albinos incapables de survivre en liberté, et vous expliquera le cycle de vie de l’espèce et les pressions qu’elle subit. Si vous êtes là au bon moment le soir, vous pourrez peut-être assister à un lâcher.',
  'exp.turtle-hatchery.facts.0': 'Durée : environ 45 minutes',
  'exp.turtle-hatchery.facts.1': 'Idéal en fin d’après-midi, pour le lâcher du soir',
  'exp.turtle-hatchery.facts.2': daily,
  'exp.turtle-hatchery.facts.3': privateGuide,
  'exp.turtle-hatchery.facts.4': 'Don d’entrée inclus',
  'exp.turtle-hatchery.goodToKnow':
    'Manipuler les nouveau-nés les stresse et nous le déconseillons, quoi qu’on vous propose. Une bonne écloserie relâche les tortues quelques jours après l’éclosion plutôt que de les garder en bassin pour les photos.',

  'exp.stilt-fishermen.name': 'Pêcheurs sur échasses de Koggala',
  'exp.stilt-fishermen.location': 'Koggala',
  'exp.stilt-fishermen.summary':
    'L’image la plus photographiée du Sri Lanka — des pêcheurs perchés sur des traverses plantées dans le fond marin, travaillant les hauts-fonds à l’aube et au crépuscule.',
  'exp.stilt-fishermen.detail.0':
    'La pêche sur échasses est née pendant la Seconde Guerre mondiale, quand la nourriture manquait et que les bons rochers étaient déjà pris ; des hommes ont planté des perches dans le platier récifal et pêché au-dessus de l’eau. Le tsunami de 2004 a emporté la plupart des échasses et une grande partie des prises, et aujourd’hui bon nombre des hommes que vous voyez jouent un rôle autant qu’ils pêchent.',
  'exp.stilt-fishermen.detail.1':
    'Cela ne rend pas le spectacle moins beau à la bonne heure — soleil bas, silhouettes sur l’eau, la côte sud en arrière-plan. Votre guide trouvera un secteur où l’on pêche encore vraiment et conviendra d’un tarif à l’avance si vous voulez photographier de près.',
  'exp.stilt-fishermen.facts.0': 'Durée : environ 1 heure',
  'exp.stilt-fishermen.facts.1': 'À l’aube ou dans l’heure précédant le coucher du soleil',
  'exp.stilt-fishermen.facts.2': 'Le long de la côte de Koggala à Weligama',
  'exp.stilt-fishermen.facts.3': privateGuide,
  'exp.stilt-fishermen.facts.4': 'Frais de photographie à régler sur place',
  'exp.stilt-fishermen.goodToKnow':
    'Convenez du tarif avant de photographier, pas après. Demandez à votre chauffeur-guide de s’en charger — il connaît le prix en vigueur.',

  'exp.bentota-watersports.name': 'Sports nautiques à Bentota',
  'exp.bentota-watersports.location': 'Bentota',
  'exp.bentota-watersports.summary':
    'L’eau calme où la rivière Bentota rejoint la mer fait de cet endroit le centre des sports nautiques de l’île — jet-skis, bouées tractées, planche à voile, plongée et pêche au gros.',
  'exp.bentota-watersports.detail.0':
    'Le cordon sableux de Bentota abrite une longue étendue d’eau plate, et c’est pourquoi tous les sports nautiques de l’île semblent partir d’ici. Jet-skis, bouées et banana boats opèrent côté rivière ; la planche à voile et le kitesurf sont meilleurs au large quand la brise de l’après-midi se lève.',
  'exp.bentota-watersports.detail.1':
    'De novembre à avril, la mer est assez claire pour la plongée, avec épaves et récifs au large de Beruwala, et des sorties de pêche au gros partent de la même plage. Tout peut s’organiser le jour même via votre hôtel.',
  'exp.bentota-watersports.facts.0': 'Plongée disponible de novembre à avril',
  'exp.bentota-watersports.facts.1': 'Activités sur la rivière toute l’année',
  'exp.bentota-watersports.facts.2': 'Réservation sur place, à l’heure ou à la séance',
  'exp.bentota-watersports.facts.3': 'Supplément applicable, réglable sur place',
  'exp.bentota-watersports.facts.4': 'Matériel et encadrement fournis',
  'exp.bentota-watersports.goodToKnow':
    'Vérifiez que l’opérateur fournit des gilets de sauvetage et que votre assurance voyage couvre les sports nautiques motorisés — toutes les polices ne le font pas.',

  'exp.colombo-city.name': 'Visite de Colombo',
  'exp.colombo-city.location': 'Colombo',
  'exp.colombo-city.summary':
    'La capitale économique en une demi-journée — le bazar de Pettah, une mosquée à rayures rouges et blanches, le quartier colonial du Fort, le temple de Gangaramaya et le coucher de soleil sur Galle Face Green.',
  'exp.colombo-city.detail.0':
    'Colombo n’est pas une ville qui s’annonce, et c’est précisément pour cela qu’un guide y est précieux. Vous commencerez par Pettah, le vieux quartier du bazar, où des rues entières ne vendent qu’une seule chose — quincaillerie, textiles, poisson séché — et où la Mosquée rouge s’élève en briques bicolores.',
  'exp.colombo-city.detail.1':
    'Ensuite : le quartier colonial du Fort et l’ancien hôpital hollandais, aujourd’hui cour de restaurants ; le temple de Gangaramaya et son extraordinaire accumulation d’objets offerts ; Independence Square ; et les avenues bordées d’arbres de Cinnamon Gardens. Terminez sur Galle Face Green au coucher du soleil, avec les vendeurs de cerfs-volants, les charrettes d’isso vadai et la moitié de Colombo venue se promener.',
  'exp.colombo-city.facts.0': halfDay,
  'exp.colombo-city.facts.1': daily,
  'exp.colombo-city.facts.2': privateGuide,
  'exp.colombo-city.facts.3': 'Entrée du temple incluse',
  'exp.colombo-city.facts.4': 'Arrêts shopping sur demande',
  'exp.colombo-city.goodToKnow':
    'La circulation est dense de 8 h à 10 h et de 16 h à 19 h : l’itinéraire est conçu pour l’éviter. Pettah est fermé le dimanche et les jours de poya.',

  'exp.negombo-lagoon.name': 'Lagune et marché aux poissons de Negombo',
  'exp.negombo-lagoon.location': 'Negombo',
  'exp.negombo-lagoon.summary':
    'Une ville de pêcheurs catholique à vingt minutes de l’aéroport — canaux hollandais, pirogues à balancier rentrant à l’aube et le plus grand marché aux poissons de la côte ouest.',
  'exp.negombo-lagoon.detail.0':
    'Negombo est un port de pêche et de cannelle depuis des siècles et reste très majoritairement catholique, ce qui explique une église au bout de presque chaque rue et des noms de saints peints sur la proue des bateaux.',
  'exp.negombo-lagoon.detail.1':
    'Le marché aux poissons de Lellama est ce qu’il faut voir, et cela se passe tôt : les pirogues rentrant à la voile, la pêche étalée sur le sable, le thon et le thazard vendus aux enchères dans la foule, et les claies de poisson séchant au soleil plus loin sur la plage. Le canal hollandais qui traverse la ville offre un contrepoint paisible, et la lagune à l’arrière est pleine de pêcheurs de crevettes et de crabes travaillant des filets fixes.',
  'exp.negombo-lagoon.facts.0': 'Durée : 2 à 3 heures',
  'exp.negombo-lagoon.facts.1': 'Le marché est à son meilleur de 6 h à 8 h',
  'exp.negombo-lagoon.facts.2': 'Tous les jours sauf le dimanche',
  'exp.negombo-lagoon.facts.3': privateGuide,
  'exp.negombo-lagoon.facts.4': 'À 20 minutes de l’aéroport international de Bandaranaike',
  'exp.negombo-lagoon.goodToKnow':
    'Le marché est humide, bondé et odorant — ce n’est pas pour tout le monde, et des chaussures fermées sont recommandées. La sortie en bateau sur la lagune est l’alternative plus douce.',

  'exp.kitulgala.name': 'Kitulgala et la vallée du Kelani',
  'exp.kitulgala.location': 'Kitulgala',
  'exp.kitulgala.summary':
    'La gorge de forêt tropicale où fut tourné Le Pont de la rivière Kwaï, et le meilleur rafting en eaux vives du Sri Lanka — cinq kilomètres de rapides de classe 2 et 3 à travers la jungle.',
  'exp.kitulgala.detail.0':
    'Le Kelani coule ici, vert et rapide, dans une gorge de forêt tropicale humide, et la descente des hauts plateaux vers la côte la traverse de part en part. David Lean y a fait sauter son pont en 1957 ; les fondations de béton sont toujours dans le lit de la rivière et un guide vous y conduira.',
  'exp.kitulgala.detail.1':
    'Pour la plupart, l’attrait est le rafting : environ cinq kilomètres et sept rapides nommés, de classe 2 à 3, tout à fait abordables pour un débutant accompagné d’un guide dans le bateau. Si vous préférez rester au sec, la même forêt est l’un des meilleurs sites d’observation des oiseaux de la zone humide, avec une longue liste d’espèces endémiques.',
  'exp.kitulgala.facts.0': 'Durée : la descente en raft dure environ 2 heures',
  'exp.kitulgala.facts.1': 'Sur la route de Nuwara Eliya à Colombo',
  'exp.kitulgala.facts.2': 'Rafting toute l’année, au mieux de mai à décembre',
  'exp.kitulgala.facts.3': 'Casques, gilets de sauvetage et guides fournis',
  'exp.kitulgala.facts.4': 'Le rafting est un supplément local — l’arrêt lui-même est inclus',
  'exp.kitulgala.goodToKnow':
    'Vous serez trempé : prévoyez des vêtements de rechange accessibles. L’âge minimum pour le rafting est généralement de 10 ans, et il faut savoir nager.',

  /* ---------------- Hotels ---------------- */
  'hotel.Aliya Resort & Spa.description':
    'Villas basses autour d’une piscine à débordement cadrée sur le rocher de Sigiriya — la vue depuis l’eau est la raison de séjourner ici.',
  'hotel.Cinnamon Lodge Habarana.description':
    'Onze hectares de jardins peuplés d’animaux et de chalets au bord du lac, en plein cœur du Triangle culturel.',
  'hotel.Hotel Kandalama.description':
    'Le chef-d’œuvre de Geoffrey Bawa, bâti dans une falaise au-dessus d’un réservoir et aujourd’hui si envahi par la végétation que la jungle l’a presque avalé.',
  'hotel.Earl’s Regency.description':
    'Un hôtel de style colonial dans la vallée du Mahaweli en dehors de la ville, avec vue sur les collines depuis la terrasse de la piscine et un bon spa.',
  'hotel.Cinnamon Citadel.description':
    'Chambres au bord du Mahaweli, à dix minutes du Temple de la Dent et calmes la nuit.',
  'hotel.The Grand Kandyan.description':
    'Le plus grand hôtel de la capitale des hauts plateaux, à distance de marche du lac et du temple.',
  'hotel.The Tea Experience.description':
    'Un petit hôtel de domaine au fond d’une vallée de thé en activité près de Nuwara Eliya — la version calme et brumeuse des hauts plateaux.',
  'hotel.The Golden Ridge.description':
    'Sur la crête au-dessus de la ville, avec de longues vues sur la vallée et un accès facile au lac Gregory.',
  'hotel.Horton Heights.description':
    'Une base confortable à flanc de colline près de l’hippodrome et du golf, pratique pour partir vers Horton Plains.',
  'hotel.Newburgh Tea Factory.description':
    'Une ancienne fabrique de thé reconvertie sur un domaine en activité, machinerie d’origine conservée et vue sur la vallée depuis chaque chambre.',
  'hotel.EKHO Ella.description':
    'Perché juste au bord de l’Ella Gap, avec le plus beau balcon de la ville pour le lever du soleil.',
  'hotel.Onrock Ella.description':
    'Un hôtel contemporain à flanc de colline avec une piscine à débordement plongeant droit dans la trouée vers les plaines.',
  'hotel.Yala Safari Hotel.description':
    'Une base simple et bien tenue à quelques minutes de l’entrée du parc — les départs matinaux y sont faciles.',
  'hotel.Shangri-La Hambantota.description':
    'Un resort complet sur sa propre plage avec golf, à une heure du parc : la version confortable du safari.',
  'hotel.Cinnamon Wild Yala.description':
    'Des chalets dans la zone tampon où éléphants et sangliers passent vraiment — le plus près du parc où l’on puisse dormir.',
  'hotel.Sheraton Kosgoda Turtle Beach Resort.description':
    'Un grand resort en bord de mer sur une plage de ponte des tortues, avec plusieurs piscines et une longue plage privée.',
  'hotel.Cinnamon Bay.description':
    'Directement sur la plage de Bentota à l’embouchure de la rivière, à quelques pas du centre de sports nautiques.',
  'hotel.Eden Resort & Spa.description':
    'Un hôtel de plage de longue date avec une grande piscine et un spa ayurvédique, prisé pour les longs séjours balnéaires.',
  'hotel.Jetwing Beach.description':
    'Un hôtel de plage au design soigné à vingt minutes de l’aéroport — la meilleure première ou dernière nuit sur l’île.',
  'hotel.Gold Sands.description':
    'Une option simple et accueillante en bord de plage, proche du marché aux poissons et de la ville.',
  'hotel.Heritance Negombo.description':
    'Un hôtel contemporain en bord de mer avec piscine sur le toit et couchers de soleil sur l’océan Indien.',

  /* ---------------- Packages ---------------- */
  'pkg.grand-tour-of-sri-lanka.name': 'Grand tour du Sri Lanka',
  'pkg.grand-tour-of-sri-lanka.tagline':
    'Tout le panorama de l’île en deux semaines sans hâte — capitales anciennes, pays du thé, territoire du léopard et une longue fin de séjour à la plage.',
  'pkg.grand-tour-of-sri-lanka.badge': 'Itinéraire suggéré',
  'pkg.grand-tour-of-sri-lanka.cardSummary':
    'Notre voyage le plus complet. Six bases, un seul chauffeur-guide, et assez de temps partout pour arrêter de regarder l’heure.',
  'pkg.grand-tour-of-sri-lanka.intro':
    'C’est l’itinéraire que nous écrivons pour ceux qui veulent tout voir, correctement. Vous commencez dans le Triangle culturel avec trois nuits dans le même hôtel — de quoi aborder Polonnaruwa, Sigiriya et Anuradhapura à un rythme civilisé plutôt que de courir de l’un à l’autre. Puis la route grimpe : Kandy pour le Temple de la Dent et les jardins botaniques, Nuwara Eliya pour le thé et les matins froids, Ella pour le pont aux Neuf Arches et la vue plongeante dans la trouée. De là vous descendez vers le sud-est aride pour deux nuits à Yala, l’un des meilleurs endroits au monde pour voir un léopard sauvage, avant de terminer par trois journées entières sur la plage de Bentota, absolument rien au programme. Quatorze nuits, un seul véhicule et un seul chauffeur du début à la fin, et aucun vol intérieur.',
  'pkg.grand-tour-of-sri-lanka.tourType': 'Itinéraire suggéré',
  'pkg.grand-tour-of-sri-lanka.bestFor.0': 'Première visite',
  'pkg.grand-tour-of-sri-lanka.bestFor.1': 'Culture',
  'pkg.grand-tour-of-sri-lanka.bestFor.2': 'Faune et safari en 4x4',
  'pkg.grand-tour-of-sri-lanka.bestFor.3': 'Pays du thé',
  'pkg.grand-tour-of-sri-lanka.bestFor.4': 'Fin de séjour à la plage',
  'pkg.grand-tour-of-sri-lanka.bestFor.5': 'Lune de miel',
  'pkg.grand-tour-of-sri-lanka.priceBasis': perPerson,
  'pkg.grand-tour-of-sri-lanka.period': period,
  'pkg.grand-tour-of-sri-lanka.visiting.0': culturalTriangle,
  'pkg.grand-tour-of-sri-lanka.extensionPrice': roomNight(200),
  'pkg.grand-tour-of-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.grand-tour-of-sri-lanka.ext.0.description':
    'Trois jours de plage passent vite. Ajoutez des nuits supplémentaires au Sheraton Kosgoda Turtle Beach Resort — ou au Cinnamon Bay ou à l’Eden Resort — dans la même formule demi-pension, en gardant la même chambre plutôt que de déménager.',
  'pkg.grand-tour-of-sri-lanka.ext.0.price': roomNight(200),
  'pkg.grand-tour-of-sri-lanka.ext.1.title': 'Option 2 : les Maldives',
  'pkg.grand-tour-of-sri-lanka.ext.1.description':
    'Colombo–Malé, c’est un saut de quatre-vingt-dix minutes, ce qui fait des Maldives la seconde moitié naturelle d’un voyage au Sri Lanka. Nous associerons votre resort insulaire au circuit et gérerons vols de correspondance et transferts en une seule réservation.',
  'pkg.grand-tour-of-sri-lanka.ext.1.price': onRequest,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.intro':
    'Vous atterrissez à l’aéroport international de Bandaranaike et votre chauffeur-guide vous conduit dans les terres — environ quatre heures jusqu’à Sigiriya, avec l’après-midi libre pour nager et souffler. Les deux jours suivants, c’est le Triangle culturel à son meilleur, et rester dans le même hôtel les trois nuits est ce qui rend cela possible. Le deuxième jour, Polonnaruwa à la fraîcheur du matin, puis un safari en jeep l’après-midi à Minneriya, où les éléphants descendent vers le réservoir en retrait. Le troisième jour, vous gravissez le rocher de Sigiriya aux premières lueurs et passez l’après-midi parmi les stupas et les ruines monastiques d’Anuradhapura, première capitale de l’île et lieu de pèlerinage toujours bien vivant.',
  'pkg.grand-tour-of-sri-lanka.stop.kandy.intro':
    'La descente vers Kandy est belle, et elle comprend deux arrêts : le temple des grottes de Dambulla, cinq cavités peintes remplies de statues du Bouddha creusées dans la paroi, et un jardin d’épices à Matale où cannelle, cardamome et poivre poussent sur la même parcelle. Vous arrivez à Kandy à temps pour la puja du soir au Temple de la Dent sacrée, quand les tambours démarrent et que la file de pèlerins défile devant le reliquaire. Le lendemain est consacré à la capitale des hauts plateaux : les jardins botaniques royaux de Peradeniya le matin, puis le lac, le marché et le belvédère au-dessus de la ville l’après-midi.',
  'pkg.grand-tour-of-sri-lanka.stop.nuwara-eliya.intro':
    'À la sortie de Kandy, la route se met à grimper et ne s’arrête plus, traversant des plantations de thé en terrasses jusqu’à 1 900 mètres. Vous coupez le trajet dans une fabrique de thé en activité pour suivre la feuille des séchoirs à la table de dégustation, et arrivez à Nuwara Eliya avec l’après-midi libre. C’est un endroit étrange et plutôt merveilleux — une station d’altitude victorienne avec hippodrome, bureau de poste en brique rouge et golf, bâtie par les Britanniques pour se sentir chez eux et vraiment froide après la tombée du jour. Le lendemain matin est consacré à la ville : le lac Gregory, Victoria Park, les vieux cottages. L’après-midi est à vous.',
  'pkg.grand-tour-of-sri-lanka.stop.ella.intro':
    'Un court trajet jusqu’à Ella, avec une halte au temple de Seetha Amman à Seetha Eliya — un sanctuaire hindou aux couleurs vives au bord d’un torrent glacé, tenu pour le lieu où Sita fut retenue captive dans le Ramayana. Ella, c’est une rue de cafés dans une échancrure entre deux montagnes, et la raison d’y venir est la vue dans l’Ella Gap qui, par matin clair, porte jusqu’aux plaines du sud. Votre journée entière ici couvre la ville et le pont aux Neuf Arches, un viaduc de 1921 surgissant de la jungle sur neuf arches de pierre, sans une once d’acier. Choisissez bien votre moment et un train passera pendant que vous êtes là.',
  'pkg.grand-tour-of-sri-lanka.stop.yala.intro':
    'La descente des hauts plateaux est spectaculaire — deux mille mètres en quelques heures et un paysage qui passe du thé à la brousse sèche. Les chutes de Ravana surgissent en bord de route pendant la descente, et l’après-midi vous mène à Kataragama pour la puja du soir, ville de pèlerinage sacrée à la fois pour les bouddhistes, les hindous et les musulmans, où tambours et lampes à huile se prolongent bien après la nuit tombée, le stupa blanc de Kiri Vehera éclairé au-dessus des arbres. Le lendemain commence avant l’aube par un safari en jeep dans le parc national de Yala, qui possède l’une des plus fortes densités de léopards au monde, ainsi que des ours lippus, des éléphants et une plage déserte là où la brousse rejoint l’océan Indien. L’après-midi est libre.',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.subLabel': '(via Galle)',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.intro':
    'Vous longez la côte sud vers l’ouest, et la dernière journée de visites du voyage est l’une des plus belles. Le fort de Galle le matin : un comptoir hollandais fortifié sur un promontoire, remparts sur trois côtés, toujours habité plutôt que conservé. Puis un safari en bateau sur la Madu Ganga, dans des tunnels de mangrove si étroits qu’il faut couper le moteur, et une halte à l’écloserie de tortues de Kosgoda avant d’atteindre Bentota. Les deux derniers jours sont entièrement libres en demi-pension. Nagez, dormez, lisez, profitez du centre nautique à l’embouchure de la rivière ou ne faites rien du tout — après onze jours de route, la plupart choisissent de ne rien faire.',
  'pkg.grand-tour-of-sri-lanka.stop.departure.location': departure,
  'pkg.grand-tour-of-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.grand-tour-of-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.ancient-cities-and-golden-sands.name': 'Cités anciennes et sables dorés',
  'pkg.ancient-cities-and-golden-sands.tagline':
    'Forteresses rocheuses, pays des éléphants et Temple de la Dent — puis droit vers la côte pour le reste de la semaine.',
  'pkg.ancient-cities-and-golden-sands.badge': 'Multi-étapes',
  'pkg.ancient-cities-and-golden-sands.cardSummary':
    'Le Triangle culturel et Kandy en profondeur, puis deux jours à ne rien faire sur la côte ouest. La culture d’abord, la plage ensuite, sans précipitation.',
  'pkg.ancient-cities-and-golden-sands.intro':
    'Certains voyages tentent de couvrir toute l’île en une semaine et personne n’en profite. Celui-ci fait l’inverse : il consacre cinq de ses sept nuits aux deux lieux qui méritent le plus votre temps, puis vous installe sur une plage. Trois nuits dans le Triangle culturel, ce qu’il faut pour voir Polonnaruwa, Sigiriya, Minneriya et Anuradhapura sans passer chaque matin à faire ses valises. Deux nuits à Kandy couvrent le Temple de la Dent sacrée, les jardins botaniques de Peradeniya et la ville elle-même. Puis vous rejoignez Bentota et vous arrêtez de bouger. Il convient aux voyageurs pressés qui préfèrent voir moins de choses mais bien, et aux familles dont la semaine doit se terminer par une piscine.',
  'pkg.ancient-cities-and-golden-sands.tourType': 'Multi-étapes',
  'pkg.ancient-cities-and-golden-sands.bestFor.0': 'Séjours courts',
  'pkg.ancient-cities-and-golden-sands.bestFor.1': 'Culture',
  'pkg.ancient-cities-and-golden-sands.bestFor.2': 'Familles',
  'pkg.ancient-cities-and-golden-sands.bestFor.3': 'Faune',
  'pkg.ancient-cities-and-golden-sands.bestFor.4': 'Fin de séjour à la plage',
  'pkg.ancient-cities-and-golden-sands.priceBasis': perPerson,
  'pkg.ancient-cities-and-golden-sands.period': period,
  'pkg.ancient-cities-and-golden-sands.visiting.0': culturalTriangle,
  'pkg.ancient-cities-and-golden-sands.extensionPrice': roomNight(170),
  'pkg.ancient-cities-and-golden-sands.ext.0.title': moreBentotaTitle,
  'pkg.ancient-cities-and-golden-sands.ext.0.description':
    'Deux jours de plage suffisent à peine à défaire les valises. Prolongez votre séjour au Sheraton Kosgoda Turtle Beach Resort, au Cinnamon Bay ou à l’Eden Resort & Spa dans la même formule demi-pension.',
  'pkg.ancient-cities-and-golden-sands.ext.0.price': roomNight(170),
  'pkg.ancient-cities-and-golden-sands.ext.1.title': 'Option 2 : ajouter Yala',
  'pkg.ancient-cities-and-golden-sands.ext.1.description':
    'Deux nuits à Yala sur le chemin de la côte transforment aussi ce voyage en séjour animalier — une journée entière de safari en jeep dans le meilleur parc à léopards de l’île, plus Kataragama et les chutes de Ravana en chemin.',
  'pkg.ancient-cities-and-golden-sands.ext.1.price': onRequest,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.intro':
    'Votre chauffeur-guide vous accueille à l’aéroport international de Bandaranaike et vous conduit dans les terres jusqu’à Sigiriya, environ quatre heures, le reste du premier jour restant libre pour nager et récupérer du vol. Le deuxième jour, Polonnaruwa le matin — la mieux conservée des capitales en ruine et la seule que l’on parcoure vraiment à pied — suivi d’un safari en jeep l’après-midi à Minneriya, où les éléphants se rassemblent en nombre sur l’herbe laissée par le réservoir en retrait. Le troisième jour, lever tôt pour le rocher de Sigiriya lui-même, 1 200 marches jusqu’à un palais du Ve siècle sur un sommet de granit, puis cap sur Anuradhapura pour des stupas hauts comme des collines et le plus vieil arbre planté au monde.',
  'pkg.ancient-cities-and-golden-sands.stop.kandy.intro':
    'La route vers le sud jusqu’à Kandy comporte deux arrêts : le temple des grottes de Dambulla, avec 150 statues de Bouddha et des plafonds peints dans une paroi rocheuse, et un jardin d’épices à Matale où vous verrez à quoi ressemblent cannelle et cardamome avant d’arriver dans un bocal. Vous arrivez à Kandy pour la puja du soir au Temple de la Dent sacrée. Le lendemain appartient à la capitale des hauts plateaux : les jardins botaniques royaux de Peradeniya le matin, puis le lac, le marché couvert et le belvédère au-dessus de la ville, à rejoindre de préférence en fin d’après-midi quand la lumière dore les toits du temple.',
  'pkg.ancient-cities-and-golden-sands.stop.bentota.intro':
    'Vous redescendez des collines vers la côte ouest, et c’est la fin de la route. Les deux journées restantes sont entièrement libres en demi-pension à Bentota, là où la rivière rejoint la mer et où l’eau est assez plate pour tous les sports nautiques de l’île. Il y a de quoi faire si vous le souhaitez — le fort de Galle est à une heure au sud, les mangroves de la Madu Ganga à vingt minutes, l’écloserie de tortues de Kosgoda encore plus près — et votre chauffeur-guide peut vous y emmener. Ou vous pouvez rester exactement où vous êtes, ce pour quoi cet itinéraire est réellement conçu.',
  'pkg.ancient-cities-and-golden-sands.stop.departure.location': departure,
  'pkg.ancient-cities-and-golden-sands.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.ancient-cities-and-golden-sands.stop.departure.intro': departureIntro,

  'pkg.classic-sri-lanka.name': 'Sri Lanka classique',
  'pkg.classic-sri-lanka.tagline':
    'Les incontournables de l’île en une seule semaine — temples rupestres, forteresse rocheuse, capitale des hauts plateaux, pays du thé et plage.',
  'pkg.classic-sri-lanka.cardSummary':
    'Cinq bases en huit jours, organisées pour ne jamais revenir sur ses pas. Le maximum de terrain couvert en une semaine sans que tout se confonde.',
  'pkg.classic-sri-lanka.badge': 'Itinéraire suggéré',
  'pkg.classic-sri-lanka.intro':
    'Une semaine, c’est court pour un pays qui contient tant de choses : cet itinéraire est conçu pour n’en perdre aucune minute. Vous commencez par une nuit à Negombo, à vingt minutes de l’aéroport, ce qui évite un long trajet après un long vol. Ensuite, tout se déroule en une ligne nette : le Triangle culturel pour Dambulla, Minneriya, Sigiriya et Anuradhapura ; Kandy pour le Temple de la Dent sacrée ; Nuwara Eliya pour les plantations de thé et l’étrange petite station d’altitude qui les surplombe. Puis la descente vers la côte par la vallée du Kelani à Kitulgala, et deux journées pleines à Bentota pour finir. C’est le premier aperçu le plus complet du Sri Lanka que l’on puisse faire tenir en huit jours.',
  'pkg.classic-sri-lanka.tourType': 'Itinéraire suggéré',
  'pkg.classic-sri-lanka.bestFor.0': 'Première visite',
  'pkg.classic-sri-lanka.bestFor.1': 'Séjours courts',
  'pkg.classic-sri-lanka.bestFor.2': 'Culture',
  'pkg.classic-sri-lanka.bestFor.3': 'Pays du thé',
  'pkg.classic-sri-lanka.bestFor.4': 'Fin de séjour à la plage',
  'pkg.classic-sri-lanka.priceBasis': perPerson,
  'pkg.classic-sri-lanka.period': period,
  'pkg.classic-sri-lanka.visiting.1': culturalTriangle,
  'pkg.classic-sri-lanka.extensionPrice': roomNight(170),
  'pkg.classic-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.classic-sri-lanka.ext.0.description':
    'Ajoutez des nuits au Sheraton Kosgoda Turtle Beach Resort, au Cinnamon Bay ou à l’Eden Resort & Spa dans la même formule demi-pension, et terminez la semaine correctement au lieu de faire vos valises le septième jour.',
  'pkg.classic-sri-lanka.ext.0.price': roomNight(170),
  'pkg.classic-sri-lanka.ext.1.title': 'Option 2 : ajouter Ella et Yala',
  'pkg.classic-sri-lanka.ext.1.description':
    'Continuez vers l’est depuis Nuwara Eliya au lieu de bifurquer vers la côte : Ella pour le pont aux Neuf Arches, puis Yala pour un safari aux léopards, avant de rejoindre la plage via Galle.',
  'pkg.classic-sri-lanka.ext.1.price': onRequest,
  'pkg.classic-sri-lanka.stop.negombo.intro':
    'Plutôt que de vous envoyer directement dans les terres après un long vol, cet itinéraire commence à vingt minutes du terminal, à Negombo — une ville de pêcheurs catholique faite de canaux hollandais, de pirogues à balancier et d’une église au bout de chaque rue. Votre chauffeur-guide vous accueille à l’arrivée et vous dépose à l’hôtel en une demi-heure. Le reste de la journée est libre : dormez, nagez, ou remontez la plage jusqu’au marché aux poissons de Lellama, qui mérite d’être vu tôt le lendemain matin si le décalage horaire vous réveille de toute façon.',
  'pkg.classic-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.classic-sri-lanka.stop.cultural-triangle.intro':
    'Vous partez vers l’intérieur, avec une halte au temple des grottes de Dambulla : cinq cavités taillées dans une paroi, 150 statues de Bouddha et des plafonds peints jusqu’à la jonction de la pierre et du sol. L’après-midi est consacré à un safari en jeep à Minneriya, où les éléphants sauvages descendent en fin de journée se nourrir sur les prairies du réservoir qui s’assèche. Le lendemain matin, c’est le rocher de Sigiriya — 1 200 marches devant des fresques vieilles de quinze siècles jusqu’à un palais au sommet — et l’après-midi vous emmène à Anuradhapura, la première capitale, où d’énormes stupas de brique dominent encore la cime des arbres et où les pèlerins entretiennent un figuier planté en 288 av. J.-C.',
  'pkg.classic-sri-lanka.stop.kandy.intro':
    'La matinée se passe dans les jardins d’épices de Matale, sur une parcelle en activité où la cannelle est pelée et roulée à la main, où la cardamome pousse à l’ombre et où les lianes de poivre grimpent sur leurs tuteurs. Puis cap sur Kandy, le dernier royaume à être tombé aux mains d’une puissance européenne et toujours le cœur culturel de l’île. Vous arrivez pour la puja du soir au Temple de la Dent sacrée, quand les tambours kandyens démarrent devant la chambre intérieure et que les portes s’ouvrent pour la file de pèlerins portant des fleurs de lotus devant le reliquaire doré.',
  'pkg.classic-sri-lanka.stop.nuwara-eliya.intro':
    'La route qui sort de Kandy grimpe pendant trois heures à travers les terrasses de thé, et vous vous arrêtez à mi-chemin dans une fabrique d’altitude en activité pour suivre la feuille des bacs de flétrissage aux rouleuses et aux fours jusqu’à la table de dégustation. Vous atteignez Nuwara Eliya dans l’après-midi — 1 900 mètres d’altitude, cottages néo-Tudor, hippodrome et bureau de poste en brique rouge, si victorienne que tout le monde l’appelle la Petite Angleterre. Le reste de la journée est libre, et la soirée est vraiment froide, ce qui, après une semaine sous les tropiques, est un choc qui vaut la peine.',
  'pkg.classic-sri-lanka.stop.bentota.subLabel': '(via Kitulgala)',
  'pkg.classic-sri-lanka.stop.bentota.intro':
    'La descente vers la côte passe par Kitulgala, où le Kelani creuse une gorge dans la forêt tropicale humide et où David Lean fit sauter son pont pour Le Pont de la rivière Kwaï en 1957. C’est le meilleur rafting en eaux vives du pays si vous en avez envie, et l’un des meilleurs secteurs d’observation des oiseaux de la zone humide dans le cas contraire. Vous êtes sur la plage de Bentota dans l’après-midi, et la dernière journée complète est entièrement libre en demi-pension — l’embouchure de la rivière est assez calme pour tous les sports nautiques de l’île, ou vous pouvez simplement ne pas bouger.',
  'pkg.classic-sri-lanka.stop.departure.location': departure,
  'pkg.classic-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.classic-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.beach-safari-and-tea-country.name': 'Plage, safari et pays du thé',
  'pkg.beach-safari-and-tea-country.tagline':
    'La plage d’abord, pour une fois — trois jours sur le sable, puis l’intérieur pour les léopards, les cascades et les hauts plateaux à l’envers.',
  'pkg.beach-safari-and-tea-country.badge': 'Multi-étapes',
  'pkg.beach-safari-and-tea-country.cardSummary':
    'Parcourt l’île dans le sens antihoraire : côte, safari, hauts plateaux, Kandy, Colombo. Vous récupérez du vol avant toute visite.',
  'pkg.beach-safari-and-tea-country.intro':
    'Presque tous les itinéraires au Sri Lanka gardent la plage pour la fin. Celui-ci la met en premier, et c’est une meilleure idée qu’il n’y paraît : vous atterrissez, roulez une heure et demie jusqu’à Bentota, et disposez de trois jours pour vous remettre du vol avant la moindre visite. Ensuite, la route suit le sud dans le sens antihoraire : le fort de Galle puis Yala pour un safari aux léopards, la montée vers Ella pour le pont aux Neuf Arches et les chutes de Ravana, la traversée du pays du thé jusqu’à Kandy pour le Temple de la Dent sacrée, et enfin Colombo et une dernière nuit à Negombo près de l’aéroport. C’est le meilleur rapport qualité-prix des quatre programmes et il convient à qui veut la plage tant qu’il a encore l’énergie d’en profiter.',
  'pkg.beach-safari-and-tea-country.tourType': 'Multi-étapes',
  'pkg.beach-safari-and-tea-country.bestFor.0': 'La plage d’abord',
  'pkg.beach-safari-and-tea-country.bestFor.1': 'Faune et safari en 4x4',
  'pkg.beach-safari-and-tea-country.bestFor.2': 'Meilleur rapport qualité-prix',
  'pkg.beach-safari-and-tea-country.bestFor.3': 'Lune de miel',
  'pkg.beach-safari-and-tea-country.bestFor.4': 'Pays du thé',
  'pkg.beach-safari-and-tea-country.priceBasis': perPerson,
  'pkg.beach-safari-and-tea-country.period': period,
  'pkg.beach-safari-and-tea-country.extensionPrice': roomNight(125),
  'pkg.beach-safari-and-tea-country.ext.0.title': moreBentotaTitle,
  'pkg.beach-safari-and-tea-country.ext.0.description':
    'Commencez encore plus doucement. Ajoutez des nuits en début de voyage au Sheraton Kosgoda Turtle Beach Resort, au Cinnamon Bay ou à l’Eden Resort & Spa, dans la même formule demi-pension.',
  'pkg.beach-safari-and-tea-country.ext.0.price': roomNight(125),
  'pkg.beach-safari-and-tea-country.ext.1.title': 'Option 2 : ajouter le Triangle culturel',
  'pkg.beach-safari-and-tea-country.ext.1.description':
    'Cet itinéraire laisse délibérément de côté Sigiriya et Polonnaruwa. Ajoutez deux ou trois nuits au nord de Kandy et vous récupérez la forteresse rocheuse, Minneriya et Anuradhapura avant de repartir vers l’aéroport.',
  'pkg.beach-safari-and-tea-country.ext.1.price': onRequest,
  'pkg.beach-safari-and-tea-country.stop.bentota.intro':
    'Votre chauffeur-guide vous accueille à l’aéroport international de Bandaranaike et descend directement l’autoroute jusqu’à Bentota — environ une heure et demie, le transfert le plus court de tous nos programmes. Puis il ne se passe rien pendant deux jours, volontairement. Les deux sont entièrement libres en demi-pension, sur une plage où la rivière Bentota rejoint la mer, ce qui explique que tous les sports nautiques de l’île opèrent sur cette portion d’eau. Colombo se rejoint facilement au nord si vous voulez une journée en ville, et les mangroves de la Madu Ganga comme l’écloserie de tortues de Kosgoda sont toutes proches, mais rien de tout cela n’est obligatoire.',
  'pkg.beach-safari-and-tea-country.stop.yala.subLabel': '(via Galle)',
  'pkg.beach-safari-and-tea-country.stop.yala.intro':
    'Vous suivez la côte sud, avec un arrêt au fort de Galle — un comptoir hollandais fortifié sur un promontoire, remparts sur trois côtés, quartier bien vivant plutôt que musée. Les pêcheurs sur échasses travaillent cette portion de côte si l’heure s’y prête. Dans l’après-midi, vous êtes à Yala pour la première de deux nuits, et le safari se fait en 4x4 découvert privé avec un pisteur, dans le parc qui affiche l’une des plus fortes densités de léopards au monde. Ours lippus, éléphants, buffles sauvages et crocodiles y vivent aussi, et les pistes descendent jusqu’à une plage déserte là où la brousse rejoint l’océan Indien.',
  'pkg.beach-safari-and-tea-country.stop.ella.intro':
    'La route qui remonte vers le nord hors de la zone sèche grimpe fort, et les chutes de Ravana apparaissent en bord de route pendant l’ascension — vingt-cinq mètres d’eau dévalant jungle et rochers, à leur plus fort dans les mois qui suivent la mousson. Le reste de cette journée est libre à Ella, une rue unique de cafés coincée entre deux montagnes, avec une vue dans la trouée qui porte jusqu’aux plaines du sud. Votre journée complète ici couvre la ville et le pont aux Neuf Arches, un viaduc de 1921 construit sans acier, surgissant de la jungle sur neuf arches de pierre. Levez-vous tôt un matin pour le Little Adam’s Peak — quarante-cinq minutes de montée pour le plus beau lever de soleil des hauts plateaux.',
  'pkg.beach-safari-and-tea-country.stop.kandy.intro':
    'C’est la journée du thé. La route d’Ella à Kandy traverse les hauts plateaux dans toute leur longueur, entre plantations en terrasses, et vous la coupez dans une fabrique en activité pour suivre la feuille des séchoirs aux rouleuses et aux fours, jusqu’à une dégustation de grades qui pour la plupart ne quittent jamais l’île. Vous arrivez à Kandy pour la puja du soir au Temple de la Dent sacrée, où une dent du Bouddha est conservée — et disputée — depuis plus de mille ans, et où les tambours ouvrent encore la chambre intérieure trois fois par jour.',
  'pkg.beach-safari-and-tea-country.stop.negombo.subLabel': '(via Colombo)',
  'pkg.beach-safari-and-tea-country.stop.negombo.intro':
    'Vous redescendez des collines vers Colombo pour une demi-journée de visite de la capitale économique : le bazar de Pettah et sa Mosquée rouge à rayures, le quartier colonial du Fort et l’ancien hôpital hollandais, le temple de Gangaramaya, et Galle Face Green en fin d’après-midi avec les vendeurs de cerfs-volants. Puis un court trajet le long de la côte jusqu’à Negombo pour votre dernière nuit — une ville de pêcheurs à vingt minutes du terminal, ce qui rend le lendemain matin nettement moins stressant qu’un départ depuis la ville.',
  'pkg.beach-safari-and-tea-country.stop.departure.location': departure,
  'pkg.beach-safari-and-tea-country.stop.departure.subLabel': toAirport('Negombo'),
  'pkg.beach-safari-and-tea-country.stop.departure.intro': departureIntro,
};

export default content;
