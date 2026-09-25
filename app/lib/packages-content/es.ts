import type { ContentDictionary } from '../tourPackagesI18n';

/* Repeated boilerplate, written once. */
const halfDay = 'Duración: medio día';
const daily = 'Salidas diarias';
const privateGuide = 'Experiencia privada con tu chófer-guía';
const unesco = 'Entrada al sitio Patrimonio Mundial de la UNESCO incluida';
const onRequest = 'Precio bajo petición';
const perPerson = 'para 2 personas';
const period = '01 nov – 19 dic 2026 y 11 ene – 30 abr 2027';
const roomNight = (amount: number) => `USD ${amount} por habitación y noche`;
const departure = 'Salida';
const toAirport = (from: string) => `(de ${from} al aeropuerto)`;
const departureIntro =
  'Una última mañana junto al agua y tu chófer-guía pasa a recogerte para el traslado al Aeropuerto Internacional de Bandaranaike, calculado según tu vuelo y con un margen cómodo para la carretera. Si tu salida es tardía podemos organizar una habitación de día, una última excursión o una parada para comer por el camino en lugar de dejarte esperando en la terminal: dínoslo y lo incorporamos al día.';
const culturalTriangle = 'Triángulo Cultural';
const forCulturalTriangle = '(para el Triángulo Cultural)';
const moreBentotaTitle = 'Opción 1: más tiempo en Bentota';
const hillCountry = 'Región montañosa';

const content: ContentDictionary = {
  /* ---------------- Experiences ---------------- */
  'exp.polonnaruwa.name': 'Ciudad antigua de Polonnaruwa',
  'exp.polonnaruwa.location': culturalTriangle,
  'exp.polonnaruwa.summary':
    'La segunda capital de Sri Lanka es la mejor conservada de las ciudades en ruinas de la isla: un conjunto compacto y recorrible a pie de palacios reales, estanques de baño y colosales budas tallados en la roca que dejaron los reyes del siglo XII.',
  'exp.polonnaruwa.detail.0':
    'Polonnaruwa es la única ciudad antigua que se lee como un mapa. Donde Anuradhapura se dispersa, Polonnaruwa se concentra en un único parque arqueológico con aire de jardín que se recorre en una mañana, y casi todo sigue en pie: el casco de ladrillo del palacio de siete plantas del rey Parakramabahu, el Cuadrángulo con su Vatadage circular, el santuario de Lankatilaka con muros que se alzan 17 metros a ambos lados de un buda sin cabeza.',
  'exp.polonnaruwa.detail.1':
    'El final es Gal Vihara: cuatro figuras enormes talladas directamente en una misma pared de granito — un buda sentado en meditación, una figura de pie con los brazos cruzados y un buda reclinado de 14 metros cuya piedra se trabajó con tanta finura que todavía se aprecia el hundimiento de la almohada bajo su cabeza. Tu chófer-guía te contará el reinado que construyó todo esto y por qué la ciudad fue abandonada a la selva apenas un siglo después.',
  'exp.polonnaruwa.facts.0': halfDay,
  'exp.polonnaruwa.facts.1': 'Mejor con el fresco de la mañana',
  'exp.polonnaruwa.facts.2': 'Salidas diarias, todo el año',
  'exp.polonnaruwa.facts.3': privateGuide,
  'exp.polonnaruwa.facts.4': unesco,
  'exp.polonnaruwa.goodToKnow':
    'El recinto es amplio y con muy poca sombra: lleva sombrero y agua. Hombros y rodillas deben ir cubiertos en los templos, y en Gal Vihara hay que descalzarse.',

  'exp.minneriya.name': 'Safari en jeep por el Parque Nacional de Minneriya',
  'exp.minneriya.location': culturalTriangle,
  'exp.minneriya.summary':
    'A última hora de la tarde, en la estación seca, cientos de elefantes salvajes bajan a los pastizales de un embalse que se retira: la mayor concentración de elefantes asiáticos del planeta.',
  'exp.minneriya.detail.0':
    'Cuando el embalse de Minneriya se retira en los meses secos deja tras de sí una llanura de hierba fresca, y llegan los elefantes. Van apareciendo en grupos familiares a lo largo de la tarde hasta que, en el apogeo del Gathering entre julio y septiembre, trescientos animales o más pueden estar a la vez en el mismo tramo de orilla, crías incluidas.',
  'exp.minneriya.detail.1':
    'Saldrás en un 4x4 descubierto con un rastreador que sabe dónde han estado pastando las manadas. Además de los elefantes, el parque alberga ciervos sambar y moteados, búfalos salvajes, macacos de gorro, cigüeñas pintadas y, para los pacientes, algún leopardo en la linde del bosque.',
  'exp.minneriya.facts.0': halfDay,
  'exp.minneriya.facts.1': 'Horario: de 15:00 a 18:00',
  'exp.minneriya.facts.2': 'Salidas diarias, todo el año',
  'exp.minneriya.facts.3': 'Jeep 4x4 privado con rastreador',
  'exp.minneriya.facts.4': 'Entrada al parque y alquiler del jeep incluidos',
  'exp.minneriya.goodToKnow':
    'Según dónde se hayan desplazado las manadas, tu rastreador puede llevarte a los vecinos Kaudulla o Hurulu Eco Park: los elefantes rotan entre los tres y nosotros siempre seguimos a los animales.',

  'exp.sigiriya-rock.name': 'Fortaleza rocosa de Sigiriya',
  'exp.sigiriya-rock.location': 'Sigiriya',
  'exp.sigiriya-rock.summary':
    'Un bloque de granito vertical que se alza 200 metros sobre la selva llana, coronado por las ruinas de un palacio celeste del siglo V y al que se llega por una escalera que pasa entre las garras de un león de piedra desaparecido.',
  'exp.sigiriya-rock.detail.0':
    'El rey Kashyapa construyó su capital sobre una roca porque había asesinado a su padre por el trono y esperaba que su hermano fuera a por él. Lo que dejó es uno de los ejemplos más antiguos que se conservan de planificación urbana paisajística: jardines de agua simétricos en la base, jardines de rocas por encima y un complejo palaciego en una cima de dos hectáreas con cisternas excavadas en la roca viva.',
  'exp.sigiriya-rock.detail.1':
    'La subida son unos 1.200 escalones. A mitad de camino, una escalera de caracol lleva a un hueco resguardado en la pared donde los célebres frescos de damas de la corte con el pecho descubierto han conservado el color durante mil quinientos años. Más allá corre el Muro Espejo, en su día pulido como un espejo y hoy cubierto de grafitis dejados por visitantes desde el siglo VIII. Arriba se abre a tus pies todo el Triángulo Cultural.',
  'exp.sigiriya-rock.facts.0': halfDay,
  'exp.sigiriya-rock.facts.1': 'Unos 1.200 escalones hasta la cima',
  'exp.sigiriya-rock.facts.2': daily,
  'exp.sigiriya-rock.facts.3': privateGuide,
  'exp.sigiriya-rock.facts.4': 'Entrada y museo del recinto incluidos',
  'exp.sigiriya-rock.goodToKnow':
    'Ve a primera hora o después de las 16:00: la roca retiene el calor y las escaleras se llenan a mediodía. Hace falta una forma física razonable. Pidurangala, la roca de enfrente, es la alternativa más fácil y ofrece la vista clásica de Sigiriya.',

  'exp.anuradhapura.name': 'Ciudad sagrada de Anuradhapura',
  'exp.anuradhapura.location': 'Anuradhapura',
  'exp.anuradhapura.summary':
    'La primera capital de la isla y aún lugar de peregrinación vivo: estupas de ladrillo del tamaño de colinas, ruinas de monasterios bajo los árboles y una higuera nacida de un esqueje traído en el 288 a. C.',
  'exp.anuradhapura.detail.0':
    'Anuradhapura gobernó la isla durante más de mil años, y lo que sobrevive tiene una escala que nada iguala en Sri Lanka. Abhayagiri y Jetavanaramaya estuvieron entre las construcciones más altas del mundo antiguo tras las pirámides de Guiza; incluso medio en ruinas siguen asomando por encima de las copas de los árboles. Entre ellas hay estanques, piedras de luna, piedras guardianas y los refectorios de monasterios que albergaban a miles de monjes.',
  'exp.anuradhapura.detail.1':
    'El corazón de todo es el Sri Maha Bodhi, nacido de un esqueje del árbol bajo el que se sentó el Buda, traído aquí por la monja Sanghamitta y plantado en el 288 a. C. Es el árbol plantado por el ser humano más antiguo del mundo con fecha documentada, y aún se cuida, aún se engalana y aún lo rodean peregrinos vestidos de blanco todos los días del año.',
  'exp.anuradhapura.facts.0': halfDay,
  'exp.anuradhapura.facts.1': daily,
  'exp.anuradhapura.facts.2': privateGuide,
  'exp.anuradhapura.facts.3': unesco,
  'exp.anuradhapura.facts.4': 'Incluido en la entrada del Triángulo Cultural',
  'exp.anuradhapura.goodToKnow':
    'Es un lugar de culto en activo, no solo una ruina. Se espera ropa blanca o clara que cubra hombros y rodillas, y el calzado y los sombreros se quitan ante el árbol Bodhi y en las plataformas de las estupas: el pavimento se calienta, así que conviene llevar calcetines.',

  'exp.hot-air-balloon.name': 'Globo aerostático sobre el Triángulo Cultural',
  'exp.hot-air-balloon.location': 'Sigiriya',
  'exp.hot-air-balloon.summary':
    'Despega antes del amanecer y flota sobre arrozales, embalses y selva mientras la roca de Sigiriya recoge la primera luz; al aterrizar, una copa de vino espumoso.',
  'exp.hot-air-balloon.detail.0':
    'Te recogerán de noche y te llevarán al campo de despegue para ver cómo se hincha el globo. El vuelo dura alrededor de una hora, bajo sobre pueblos que se despiertan, búfalos en los embalses y la copa de la selva, con los promontorios rocosos del Triángulo Cultural asomando entre la bruma al salir el sol.',
  'exp.hot-air-balloon.detail.1':
    'Dónde aterrizas depende por completo del viento, y eso forma parte del encanto: el equipo de tierra te sigue y está esperando cuando tomas tierra, con un brindis de vino espumoso o zumo de frutas y un certificado de vuelo.',
  'exp.hot-air-balloon.facts.0': 'Duración: aproximadamente 1½ horas en el aire',
  'exp.hot-air-balloon.facts.1': 'Horario: de 5:30 a 7:00',
  'exp.hot-air-balloon.facts.2': 'Solo funciona entre noviembre y abril',
  'exp.hot-air-balloon.facts.3': 'Depende del tiempo: sujeto a las condiciones de la mañana',
  'exp.hot-air-balloon.facts.4': 'Suplemento aplicable, pagadero en destino o añadido a tu presupuesto',
  'exp.hot-air-balloon.goodToKnow':
    'No apto para menores de 16 años, embarazadas ni personas con problemas cardíacos. Si el viento no acompaña, los vuelos se cancelan y se reembolsan, y ocurre.',

  'exp.dambulla.name': 'Templo dorado de las cuevas de Dambulla',
  'exp.dambulla.location': 'Dambulla',
  'exp.dambulla.summary':
    'Cinco cuevas excavadas en la ladera de una roca, con 150 estatuas de Buda y pintadas del suelo al techo: el conjunto de templos rupestres más grande y mejor conservado de Sri Lanka.',
  'exp.dambulla.detail.0':
    'Una breve subida por la pared lleva a una terraza y, tras ella, a cinco cuevas de uso religioso ininterrumpido durante veintidós siglos. El rey Valagamba se refugió aquí en el exilio en el siglo I a. C. y convirtió las cuevas en templo al recuperar su reino.',
  'exp.dambulla.detail.1':
    'Dentro, los techos de roca se curvan hasta encontrarse con los muros y cada superficie está pintada: murales arremolinados sobre la vida del Buda que siguen los contornos naturales de la piedra. Hay 150 estatuas en total, entre ellas un buda reclinado de 14 metros tallado en la propia pared, y un manantial que gotea del techo a una vasija y del que nunca se ha sabido que se secara.',
  'exp.dambulla.facts.0': 'Duración: de 2 a 3 horas',
  'exp.dambulla.facts.1': 'Unos 350 escalones hasta la terraza de las cuevas',
  'exp.dambulla.facts.2': daily,
  'exp.dambulla.facts.3': privateGuide,
  'exp.dambulla.facts.4': unesco,
  'exp.dambulla.goodToKnow':
    'Hombros y rodillas cubiertos, calzado fuera en la terraza. El pavimento de piedra quema ya a media mañana: lleva calcetines. Los monos de la escalera se llevan cualquier cosa suelta que tengas en las manos.',

  'exp.spice-garden.name': 'Jardín de especias de Matale',
  'exp.spice-garden.location': 'Matale',
  'exp.spice-garden.summary':
    'Recorre un jardín de especias en activo en las colinas sobre Matale, donde la canela de Ceilán, el cardamomo, la pimienta y la vainilla crecen unos junto a otros, y descubre qué aspecto tiene cada uno antes de llegar a un tarro.',
  'exp.spice-garden.detail.0':
    'Sri Lanka construyó su primera fortuna sobre la canela, y Matale sigue siendo su centro. Un guía te acompaña planta por planta: lianas de pimienta trepando por sus árboles tutores, cardamomo a la sombra, nuez moscada, clavo, cúrcuma, orquídeas de vainilla y la propia canela, cuya corteza verdadera se pela y enrolla a mano en las cañas pálidas que distinguen la canela de Ceilán de la casia más basta que se vende como canela en otros lugares.',
  'exp.spice-garden.detail.1':
    'Suele haber una demostración de pelado de corteza, una taza de té especiado y la posibilidad de probar un breve masaje de cabeza y hombros con aceites de hierbas. La tienda del jardín vende aceites y bálsamos; no hay obligación de comprar nada.',
  'exp.spice-garden.facts.0': 'Duración: alrededor de 1 hora',
  'exp.spice-garden.facts.1': 'En la carretera de Dambulla a Kandy',
  'exp.spice-garden.facts.2': daily,
  'exp.spice-garden.facts.3': privateGuide,
  'exp.spice-garden.facts.4': 'Té especiado y demostración de cortesía',
  'exp.spice-garden.goodToKnow':
    'Estos jardines tienen una tienda al final de la visita. Los precios son bastante más altos que en un mercado local y nada es obligatorio: mira, o pasa de largo.',

  'exp.kandy-temple.name': 'Templo del Sagrado Diente',
  'exp.kandy-temple.location': 'Kandy',
  'exp.kandy-temple.summary':
    'El lugar budista más venerado de Sri Lanka, que custodia un diente del Buda, símbolo de soberanía desde hace más de mil años. Se ve mejor durante los tambores de la puja del atardecer.',
  'exp.kandy-temple.detail.0':
    'La reliquia del diente llegó a Sri Lanka en el siglo IV, escondida en el cabello de una princesa, y se entendía que quien la poseyera tenía derecho a gobernar la isla. Desde entonces se ha luchado por ella, se ha trasladado, escondido y paseado en procesión, y hoy reposa en un relicario de oro dentro del complejo palaciego junto al lago de los últimos reyes de Kandy.',
  'exp.kandy-temple.detail.1':
    'Programa la visita para una de las tres pujas diarias, cuando los tamborileros y trompeteros kandianos arrancan frente a la cámara interior y se abren las puertas para que la fila de peregrinos, con flores de loto en la mano, desfile ante el relicario. No verás el diente, que solo sale de su urna en años excepcionales, pero lo importante es el ambiente.',
  'exp.kandy-temple.facts.0': 'Duración: alrededor de 2 horas',
  'exp.kandy-temple.facts.1': 'La puja del atardecer suele empezar a las 18:30',
  'exp.kandy-temple.facts.2': daily,
  'exp.kandy-temple.facts.3': privateGuide,
  'exp.kandy-temple.facts.4': unesco,
  'exp.kandy-temple.goodToKnow':
    'Código de vestimenta estricto: ropa blanca o clara, hombros y rodillas cubiertos, calzado fuera y dejado en la entrada. En la puerta hay control de seguridad, así que ve ligero de equipaje.',

  'exp.kandyan-dance.name': 'Espectáculo de danza kandiana',
  'exp.kandyan-dance.location': 'Kandy',
  'exp.kandyan-dance.summary':
    'Una hora de tambores, danza con máscaras y paso sobre el fuego en la capital montañosa: las danzas rituales del reino de Kandy, en escena cada noche en el centro.',
  'exp.kandyan-dance.detail.0':
    'Las tradiciones de danza kandiana nacieron del ritual de los templos, y la función de la tarde recorre las formas principales una tras otra: los bailarines Ves con sus tocados de plata, las danzas del pavo real y de la cosecha, el acrobático Raban con sus platos girando y el Kolam enmascarado.',
  'exp.kandyan-dance.detail.1':
    'Termina fuera, en el patio, con danza del fuego y paso sobre brasas: los intérpretes cruzan descalzos un lecho de carbones al rojo. Es sin disimulo un espectáculo para visitantes, y también la forma más sencilla de ver estas danzas fuera de la Esala Perahera de agosto.',
  'exp.kandyan-dance.facts.0': 'Duración: alrededor de 1 hora',
  'exp.kandyan-dance.facts.1': 'Horario: las funciones empiezan a las 17:00',
  'exp.kandyan-dance.facts.2': 'A diario, en la ciudad de Kandy',
  'exp.kandyan-dance.facts.3': 'Suplemento aplicable',
  'exp.kandyan-dance.facts.4': 'Asientos sin numerar: llega pronto para las primeras filas',
  'exp.kandyan-dance.goodToKnow':
    'El paso sobre el fuego se hace al aire libre al final, así que el público se desplaza. La sala se caldea y no tiene aire acondicionado.',

  'exp.botanical-garden.name': 'Jardines Botánicos Reales de Peradeniya',
  'exp.botanical-garden.location': 'Kandy',
  'exp.botanical-garden.summary':
    'Sesenta hectáreas en un meandro del río Mahaweli, trazadas como jardín de recreo real y hoy con cuatro mil especies, una avenida de palmeras reales y un ficus de Java con una copa del tamaño de una pista de tenis.',
  'exp.botanical-garden.detail.0':
    'Fueron los jardines de la realeza kandiana mucho antes de que los británicos los formalizaran en 1821, y siguen siendo los mejores del sur de Asia. Los platos fuertes merecen la caminata: el Gran Césped con su enorme ficus de Java, la doble avenida de palmeras reales, el puente colgante sobre el río y el orquidario, con varios cientos de variedades en flor en cualquier momento.',
  'exp.botanical-garden.detail.1':
    'Las secciones de especias y plantas medicinales enlazan con todo lo que habrás visto en Matale, y los árboles conmemorativos —plantados por jefes de Estado de visita a lo largo de dos siglos— son un archivo silencioso de la historia diplomática de la isla.',
  'exp.botanical-garden.facts.0': 'Duración: de 2 a 3 horas',
  'exp.botanical-garden.facts.1': 'A 5 km al oeste de la ciudad de Kandy',
  'exp.botanical-garden.facts.2': 'Salidas diarias, abierto de 7:30 a 17:00',
  'exp.botanical-garden.facts.3': privateGuide,
  'exp.botanical-garden.facts.4': 'Entrada incluida',
  'exp.botanical-garden.goodToKnow':
    'Se camina mucho sobre césped descubierto. Las mañanas son más frescas y el orquidario está más tranquilo antes de que lleguen los grupos. Los zorros voladores duermen en los árboles altos junto al río: mira hacia arriba.',

  'exp.kandy-city.name': 'Visita de la ciudad de Kandy',
  'exp.kandy-city.location': 'Kandy',
  'exp.kandy-city.summary':
    'La capital montañosa a su propio ritmo: el lago, el mercado cubierto, un taller de piedras preciosas y el mirador sobre la ciudad desde el que, al atardecer, se abre toda la hondonada de Kandy.',
  'exp.kandy-city.detail.0':
    'Kandy resistió a las potencias europeas tres siglos después de que cayera la costa, y aún hoy parece otro país: más fresca, más verde, más orgullosa. La visita incluye el lago artificial que mandó construir el último rey, el mercado porticado de época colonial con sus puestos de fruta y especias, y los talleres donde se tallan los zafiros y las piedras de luna de Sri Lanka.',
  'exp.kandy-city.detail.1':
    'Terminarás en el mirador de Bahirawakanda o en el de Arthur’s Seat, donde la ciudad aparece en su anillo de colinas con los tejados del templo y el lago abajo: la mejor fotografía del día, y mejor tomada a última hora de la tarde.',
  'exp.kandy-city.facts.0': halfDay,
  'exp.kandy-city.facts.1': daily,
  'exp.kandy-city.facts.2': privateGuide,
  'exp.kandy-city.facts.3': 'Visitas al museo de gemas y al mercado incluidas',
  'exp.kandy-city.facts.4': 'Se combina muy bien con la puja del atardecer en el templo',
  'exp.kandy-city.goodToKnow':
    'El sistema de sentido único de Kandy va lento en hora punta. Los talleres de gemas y batik trabajan a comisión: tómalos como demostraciones y compra solo si te apetece.',

  'exp.tea-factory.name': 'Visita a una fábrica de té y a la plantación',
  'exp.tea-factory.location': hillCountry,
  'exp.tea-factory.summary':
    'Sigue la hoja desde la ladera hasta la taza dentro de una fábrica de altura en activo: naves de marchitado, máquinas de enrollado, hornos de secado y una cata de los grados que nunca se exportan.',
  'exp.tea-factory.detail.0':
    'La carretera que sube a la región del té atraviesa terrazas de arbustos verdes recortados, con las recolectoras trabajando entre las hileras y la chimenea de la fábrica en algún punto más arriba. Casi todos estos edificios son victorianos y la maquinaria no es mucho más joven: el proceso apenas ha cambiado.',
  'exp.tea-factory.detail.1':
    'Lo recorrerás en orden: las artesas de marchitado donde la hoja pierde humedad durante la noche, los rodillos que rompen las células, los lechos de oxidación donde la hoja pasa del verde al cobre, los hornos de secado y, por último, las mallas de clasificación que separan los grados. Termina con una cata y la oportunidad de comprar los grados de finca única, que en su mayoría se quedan en la isla.',
  'exp.tea-factory.facts.0': 'Duración: de 1 a 2 horas',
  'exp.tea-factory.facts.1': 'Salidas diarias, de lunes a sábado',
  'exp.tea-factory.facts.2': privateGuide,
  'exp.tea-factory.facts.3': 'Visita a la fábrica y cata incluidas',
  'exp.tea-factory.facts.4': 'Fábrica en activo: la producción sigue la temporada de recolección',
  'exp.tea-factory.goodToKnow':
    'Las fábricas no procesan los domingos ni los días de poya (luna llena), así que la maquinaria puede estar parada. En algunas naves está restringido fotografiar.',

  'exp.nuwara-eliya-city.name': 'Visita de la ciudad de Nuwara Eliya',
  'exp.nuwara-eliya-city.location': 'Nuwara Eliya',
  'exp.nuwara-eliya-city.summary':
    'La improbable estación de montaña de Sri Lanka: casitas de estilo Tudor, un hipódromo, una oficina de correos colonial y un lago para pasear en barca, todo a 1.900 metros en pleno trópico.',
  'exp.nuwara-eliya-city.detail.0':
    'Los británicos construyeron Nuwara Eliya para que se pareciera a casa y nunca dejaron del todo de hacerlo: hay un Victoria Park, un campo de golf, un Hill Club con código de vestimenta y una oficina de correos de ladrillo rojo con torre de reloj que no desentonaría en Surrey. Los lugareños la llaman la Pequeña Inglaterra, con cariño.',
  'exp.nuwara-eliya-city.detail.1':
    'La mañana incluye el lago Gregory, el parque en flor, las viejas casitas de la ciudad y el mercado, con una parada para tomar té con scones si quieres el efecto completo. A esta altitud el aire es realmente frío al caer la noche: una sorpresa si vienes de la costa.',
  'exp.nuwara-eliya-city.facts.0': halfDay,
  'exp.nuwara-eliya-city.facts.1': 'Altitud: 1.868 metros',
  'exp.nuwara-eliya-city.facts.2': daily,
  'exp.nuwara-eliya-city.facts.3': privateGuide,
  'exp.nuwara-eliya-city.facts.4': 'Entradas a Victoria Park y al lago Gregory incluidas',
  'exp.nuwara-eliya-city.goodToKnow':
    'Lleva un forro polar o una chaqueta: por la noche la temperatura baja a unos 10 °C y la mayoría de los hoteles no tienen aire acondicionado porque no hace falta.',

  'exp.sita-amman.name': 'Templo de Seetha Amman',
  'exp.sita-amman.location': 'Nuwara Eliya',
  'exp.sita-amman.summary':
    'Un templo hindú de colores vivos junto a un arroyo de montaña, considerado el lugar donde Ravana mantuvo cautiva a Sita en el Ramayana, con huecos en forma de huella en la roca que lo atestiguan.',
  'exp.sita-amman.detail.0':
    'El templo está en Seetha Eliya, en el pinar a unos kilómetros de Nuwara Eliya, y es una de las estaciones clave de la ruta del Ramayana que atrae a peregrinos indios a Sri Lanka. El gopuram está cubierto por la habitual multitud de figuras pintadas; dentro hay santuarios a Sita, Rama, Lakshmana y Hanuman.',
  'exp.sita-amman.detail.1':
    'En la roca del lecho del arroyo, enfrente, hay depresiones circulares que los devotos identifican como las huellas de Hanuman, y el suelo de esa orilla tiene un color distinto al del resto: chamuscado, cuenta la historia, cuando prendió fuego al lugar. Se crea o no, es un sitio precioso, fresco y verde, con el agua corriendo por él.',
  'exp.sita-amman.facts.0': 'Duración: alrededor de 45 minutos',
  'exp.sita-amman.facts.1': 'En la carretera de Nuwara Eliya a Ella',
  'exp.sita-amman.facts.2': daily,
  'exp.sita-amman.facts.3': privateGuide,
  'exp.sita-amman.facts.4': 'Una parada corta y fácil, sin subidas',
  'exp.sita-amman.goodToKnow':
    'Hay que descalzarse en la entrada y existe una caja de donativos en lugar de entrada. Se requiere vestimenta discreta.',

  'exp.hill-train.name': 'Tren panorámico por la región montañosa',
  'exp.hill-train.location': hillCountry,
  'exp.hill-train.summary':
    'La línea Nanu Oya–Ella figura habitualmente entre los grandes viajes en tren del mundo: tres o cuatro horas entre terrazas de té, túneles y bosque nuboso, con las puertas abiertas de par en par.',
  'exp.hill-train.detail.0':
    'La vía se tendió para mover té, y toma la ruta panorámica porque es donde están las fincas. Subes desde Nanu Oya pasando por Haputale y Bandarawela, con los vagones inclinándose en las curvas sobre valles de verde recortado, cascadas, eucaliptos y de vez en cuando una estación donde no pasa gran cosa.',
  'exp.hill-train.detail.1':
    'La mitad del placer es el propio vagón: ventanillas bajadas, puertas abiertas, té y vadai vendidos por el pasillo. Tu chófer te espera al final del trayecto con el equipaje, así que viajas sin nada más que una cámara.',
  'exp.hill-train.facts.0': 'Duración: de 3 a 4 horas en tren',
  'exp.hill-train.facts.1': 'Nanu Oya–Ella, o Ella–Haputale para un trayecto más corto',
  'exp.hill-train.facts.2': 'Asientos reservados sujetos a disponibilidad',
  'exp.hill-train.facts.3': 'Suplemento aplicable',
  'exp.hill-train.facts.4': 'Tu vehículo y tu equipaje te esperan en el destino',
  'exp.hill-train.goodToKnow':
    'Los asientos reservados de primera y segunda clase se agotan con semanas de antelación, sobre todo de diciembre a marzo: dínoslo pronto y los reservaremos con tu itinerario.',

  'exp.ella-city.name': 'Ella y el Puente de los Nueve Arcos',
  'exp.ella-city.location': 'Ella',
  'exp.ella-city.summary':
    'Un pueblo de montaña convertido en el lugar favorito de la isla para no hacer nada, más el Puente de los Nueve Arcos, un viaducto de época colonial que sale curvándose de la selva sobre nueve vanos de piedra.',
  'exp.ella-city.detail.0':
    'Ella es una sola calle de cafés y casas de huéspedes en una muesca entre dos montañas, y si todo el mundo para aquí es por la vista hacia el Ella Gap, que en una mañana clara llega hasta las llanuras del sur.',
  'exp.ella-city.detail.1':
    'Al Puente de los Nueve Arcos se llega con un breve paseo entre jardines de té y selva. Construido en 1921 sin una sola pieza de acero —se cuenta que la guerra se lo había llevado todo—, cruza un barranco sobre nueve arcos de ladrillo y piedra con el bosque cerrándose a ambos lados. Consulta el horario con tu guía y ponte allí cuando pase un tren.',
  'exp.ella-city.facts.0': halfDay,
  'exp.ella-city.facts.1': 'Breve paseo entre jardines de té hasta el puente',
  'exp.ella-city.facts.2': daily,
  'exp.ella-city.facts.3': privateGuide,
  'exp.ella-city.facts.4': 'Cataratas de Ravana y miradores del Ella Gap incluidos',
  'exp.ella-city.goodToKnow':
    'El camino al puente es irregular y en algunos tramos discurre junto a una vía férrea en servicio: calzado adecuado y sigue las indicaciones del guía cuando se espere un tren.',

  'exp.little-adams.name': 'Ascensión al Little Adam’s Peak',
  'exp.little-adams.location': 'Ella',
  'exp.little-adams.summary':
    'Un paseo suave de 45 minutos entre plantaciones de té hasta una loma con vista de 360 grados sobre el Ella Gap: el mejor amanecer de la región montañosa con el mínimo esfuerzo.',
  'exp.little-adams.detail.0':
    'A diferencia de su homónimo a tamaño real, el Little Adam’s Peak pide muy poco: un sendero entre arbustos de té, unos escalones cerca de la cima y luego una loma cubierta de hierba a 1.141 metros con el terreno cayendo por tres lados.',
  'exp.little-adams.detail.1':
    'Ve con las primeras luces. El valle de abajo se llena de bruma, el Ella Rock se alza enfrente y el sol sale sobre las llanuras. Casi todas las mañanas lo compartirás con un puñado de personas y mucho canto de pájaros.',
  'exp.little-adams.facts.0': 'Duración: unas 2 horas ida y vuelta',
  'exp.little-adams.facts.1': 'Mejor al amanecer, desde alrededor de las 5:30',
  'exp.little-adams.facts.2': 'Moderado: un desnivel de unos 200 metros',
  'exp.little-adams.facts.3': 'Por libre, o con un guía local a petición',
  'exp.little-adams.facts.4': 'Sin entrada',
  'exp.little-adams.goodToKnow':
    'El sendero es de arcilla y resbala tras la lluvia. Con tiempo seco bastan unas zapatillas; el último tramo son escalones.',

  'exp.ravana-falls.name': 'Cataratas de Ravana',
  'exp.ravana-falls.location': 'Ella',
  'exp.ravana-falls.summary':
    'Una cascada de 25 metros que cae por etapas sobre una pared de roca justo al lado de la carretera Ella–Wellawaya, en su momento más espectacular en los meses posteriores al monzón.',
  'exp.ravana-falls.detail.0':
    'Las cataratas toman su nombre del Ramayana —se dice que en la cueva de detrás el rey Ravana escondió a Sita— y aparecen sin avisar en la bajada desde Ella: la carretera gira y toda la cascada está sin más delante de ti.',
  'exp.ravana-falls.detail.1':
    'El agua desciende por etapas entre selva y peñascos hasta una poza al fondo. Hay una zona de observación al nivel de la carretera, con escalones hacia la poza para quien quiera acercarse, y puestos que venden coco rey y fruta.',
  'exp.ravana-falls.facts.0': 'Duración: alrededor de 30 minutos',
  'exp.ravana-falls.facts.1': 'Parada de carretera, a 6 km de Ella',
  'exp.ravana-falls.facts.2': 'Con más caudal entre noviembre y febrero',
  'exp.ravana-falls.facts.3': privateGuide,
  'exp.ravana-falls.facts.4': 'Sin entrada',
  'exp.ravana-falls.goodToKnow':
    'Las rocas alrededor de la poza resbalan y la corriente es más fuerte de lo que parece: aquí se producen ahogamientos. Admíralas desde la zona de observación en lugar de bañarte.',

  'exp.kataragama.name': 'Kataragama y Kiri Vehera',
  'exp.kataragama.location': 'Kataragama',
  'exp.kataragama.summary':
    'Uno de los pocos lugares del mundo sagrado por igual para budistas, hindúes y musulmanes: una tarde de tambores, lámparas de aceite y ofrendas en el santuario del dios Kataragama, junto a una estupa de un blanco deslumbrante.',
  'exp.kataragama.detail.0':
    'Kataragama lleva dos mil años siendo ciudad de peregrinación y pertenece a todos: los budistas acuden a la estupa de Kiri Vehera, los hindúes al santuario Maha Devale dedicado a Murugan, los musulmanes a la mezquita del mismo recinto, y los ancianos vedas siguen teniendo un papel en la fiesta anual.',
  'exp.kataragama.detail.1':
    'Ven a la puja del atardecer. Los peregrinos cruzan el Menik Ganga para lavarse antes de entrar y luego llevan bandejas de fruta y flores por el recinto de suelo de arena al son de los tambores, mientras las lámparas de aceite se encienden al caer la noche. Al lado, la estupa de Kiri Vehera —levantada, según la tradición, en el siglo II a. C.— brilla blanca por encima de los árboles.',
  'exp.kataragama.facts.0': 'Duración: de 2 a 3 horas',
  'exp.kataragama.facts.1': 'Puja del atardecer hacia las 18:30',
  'exp.kataragama.facts.2': 'A diario, en la carretera entre Ella y Yala',
  'exp.kataragama.facts.3': privateGuide,
  'exp.kataragama.facts.4': 'Sin entrada: se pueden comprar ofrendas en la puerta',
  'exp.kataragama.goodToKnow':
    'El calzado se quita bastante antes del santuario y la arena sigue caliente hasta la tarde. Viste con discreción, de blanco o colores claros. Es un lugar de peregrinación en activo: sé discreto con las cámaras.',

  'exp.yala-safari.name': 'Safari en jeep por el Parque Nacional de Yala',
  'exp.yala-safari.location': 'Yala',
  'exp.yala-safari.summary':
    'La reserva estrella de Sri Lanka alberga una de las mayores densidades de leopardos del mundo, además de osos bezudos, elefantes y cocodrilos, y es el único safari de la isla que termina en el mar.',
  'exp.yala-safari.detail.0':
    'El Bloque 1 de Yala es la capital mundial del leopardo por densidad, y aquí los felinos están inusualmente tranquilos ante los vehículos, por eso los avistamientos son mucho mejores de lo que sugerirían las cifras. Además de leopardos, el parque tiene osos bezudos —las mejores opciones en junio y julio, cuando madura el fruto del palu—, elefantes, búfalos salvajes, ciervos moteados, cocodrilos de las marismas en las charcas y más de doscientas especies de aves.',
  'exp.yala-safari.detail.1':
    'Saldrás en un 4x4 descubierto privado con rastreador, con las primeras luces, cuando los animales aún se mueven. El paisaje es la mitad del placer: selva de matorral que se abre en lagunas, bosque monzónico, afloramientos de granito y el océano Índico rompiendo en una playa vacía en Patanangala.',
  'exp.yala-safari.facts.0': 'Duración: día completo, o medio día al amanecer o al atardecer',
  'exp.yala-safari.facts.1': 'Horario: desde las 5:30, o de 14:00 a 18:00',
  'exp.yala-safari.facts.2': 'Salidas diarias: el parque cierra cada septiembre por sequía',
  'exp.yala-safari.facts.3': 'Jeep 4x4 privado con rastreador',
  'exp.yala-safari.facts.4': 'Entrada al parque, jeep y rastreador incluidos',
  'exp.yala-safari.goodToKnow':
    'El parque es polvoriento y las pistas son duras. Lleva un pañuelo, gafas de sol y prismáticos, y si puedes elige la salida del amanecer: la luz es mejor y los animales están más activos antes del calor.',

  'exp.galle-fort.name': 'Fuerte de Galle',
  'exp.galle-fort.location': 'Galle',
  'exp.galle-fort.summary':
    'Una ciudad comercial holandesa amurallada sobre un promontorio en el océano Índico, aún habitada y recorrible en una hora: murallas de piedra de coral, un faro y calles de villas con columnatas hoy llenas de galerías y cafés.',
  'exp.galle-fort.detail.0':
    'Los portugueses fortificaron el promontorio, los holandeses lo reconstruyeron como es debido en 1663 y los británicos simplemente se instalaron. Lo que sobrevive es la fortificación de construcción europea mejor conservada de Asia y, cosa poco habitual, un barrio vivo en lugar de un museo: detrás de esas puertas vive gente.',
  'exp.galle-fort.detail.1':
    'Recorre primero las murallas, la vuelta completa, con el océano en tres lados. Luego baja a la cuadrícula: la iglesia reformada holandesa con su suelo de lápidas, la mezquita Meeran Jumma frente al faro, el Museo Marítimo en un antiguo almacén y las calles sombreadas de Pedlar’s y Church, donde las viejas casas de comerciantes se han convertido en boutiques, librerías y sitios donde sentarse a tomar un café.',
  'exp.galle-fort.facts.0': halfDay,
  'exp.galle-fort.facts.1': 'A diario: las murallas están mejor al atardecer',
  'exp.galle-fort.facts.2': privateGuide,
  'exp.galle-fort.facts.3': 'Patrimonio Mundial de la UNESCO: entrada libre al fuerte',
  'exp.galle-fort.facts.4': 'Visita a pie por calles llanas y adoquinadas',
  'exp.galle-fort.goodToKnow':
    'Dentro de las murallas hay muy poca sombra a mediodía. El momento es desde media tarde hasta la puesta de sol sobre las murallas.',

  'exp.madu-river.name': 'Safari en barca por el río Madu',
  'exp.madu-river.location': 'Balapitiya',
  'exp.madu-river.summary':
    'Un humedal de 64 islas y densos túneles de manglar detrás de la costa, explorado en lancha: pequeñas fincas de canela, un templo en una isla, varanos y martines pescadores.',
  'exp.madu-river.detail.0':
    'El estuario del Madu Ganga es un humedal Ramsar protegido y uno de los últimos tramos de manglar intacto de Sri Lanka. La barca te lleva a través de la laguna abierta y luego se adentra en canales tan estrechos que las raíces del manglar se cierran por encima y hay que apagar el motor.',
  'exp.madu-river.detail.1':
    'Las paradas suelen incluir Kothduwa, una islita boscosa con un templo budista, y una finca familiar de canela donde te mostrarán cómo se pela y se enrolla la corteza a mano. Vigila las ramas: varanos acuáticos, martines pescadores, cormoranes y, a primera hora de la mañana, grupos de macacos.',
  'exp.madu-river.facts.0': 'Duración: alrededor de 2 horas',
  'exp.madu-river.facts.1': 'Sale de Balapitiya, a 20 minutos de Bentota',
  'exp.madu-river.facts.2': 'Salidas diarias: las mañanas son las más tranquilas',
  'exp.madu-river.facts.3': 'Barca privada',
  'exp.madu-river.facts.4': 'Alquiler de la barca y paradas en las islas incluidos',
  'exp.madu-river.goodToKnow':
    'Algunos operadores tienen tanques de «fish therapy» y mantienen animales cautivos para las fotos. El nuestro no lo hace, y te pedimos que no apoyes a los que sí.',

  'exp.turtle-hatchery.name': 'Criadero de tortugas de Kosgoda',
  'exp.turtle-hatchery.location': 'Kosgoda',
  'exp.turtle-hatchery.summary':
    'Un criadero de conservación en la playa donde los huevos recomprados a los furtivos se vuelven a enterrar, se protegen y las crías se liberan al mar al caer la noche.',
  'exp.turtle-hatchery.detail.0':
    'Cinco de las siete especies de tortuga marina del mundo anidan en este tramo de costa, y las cinco están amenazadas. Los criaderos de Kosgoda compran los nidos a quienes de otro modo venderían los huevos, los vuelven a enterrar en arena protegida y liberan a las crías al anochecer, cuando ya se han ido las gaviotas.',
  'exp.turtle-hatchery.detail.1':
    'Un guía te enseñará los tanques, que albergan adultos heridos y albinos que no sobrevivirían en libertad, y explicará el ciclo vital y las presiones que sufre. Si estás aquí a la hora adecuada de la tarde quizá puedas ver una suelta.',
  'exp.turtle-hatchery.facts.0': 'Duración: alrededor de 45 minutos',
  'exp.turtle-hatchery.facts.1': 'Mejor a última hora de la tarde, para la suelta del anochecer',
  'exp.turtle-hatchery.facts.2': daily,
  'exp.turtle-hatchery.facts.3': privateGuide,
  'exp.turtle-hatchery.facts.4': 'Donativo de entrada incluido',
  'exp.turtle-hatchery.goodToKnow':
    'Manipular las crías les genera estrés y lo desaconsejamos, te ofrezcan lo que te ofrezcan. Un buen criadero libera a los días de la eclosión en lugar de mantener a los animales en tanques para las fotos.',

  'exp.stilt-fishermen.name': 'Pescadores sobre zancos de Koggala',
  'exp.stilt-fishermen.location': 'Koggala',
  'exp.stilt-fishermen.summary':
    'La imagen más fotografiada de Sri Lanka: pescadores encaramados a travesaños clavados en el fondo marino, trabajando las aguas someras al amanecer y al atardecer.',
  'exp.stilt-fishermen.detail.0':
    'La pesca sobre zancos empezó durante la Segunda Guerra Mundial, cuando escaseaba la comida y las buenas posiciones sobre las rocas estaban ocupadas; los hombres clavaron postes en la plataforma del arrecife y pescaron por encima del agua. El tsunami de 2004 se llevó la mayoría de los zancos y buena parte de la captura, y hoy muchos de los hombres que ves actúan tanto como pescan.',
  'exp.stilt-fishermen.detail.1':
    'Eso no hace que merezca menos la pena verlo a la hora adecuada: sol bajo, siluetas sobre el agua, la costa sur al fondo. Tu guía encontrará un tramo donde todavía se pesca de verdad y acordará una tarifa de antemano si quieres fotografiar de cerca.',
  'exp.stilt-fishermen.facts.0': 'Duración: alrededor de 1 hora',
  'exp.stilt-fishermen.facts.1': 'Al amanecer o en la hora previa a la puesta de sol',
  'exp.stilt-fishermen.facts.2': 'A lo largo de la costa de Koggala a Weligama',
  'exp.stilt-fishermen.facts.3': privateGuide,
  'exp.stilt-fishermen.facts.4': 'Tarifa de fotografía pagadera en destino',
  'exp.stilt-fishermen.goodToKnow':
    'Acuerda la tarifa antes de hacer fotos, no después. Pídele a tu chófer-guía que se encargue: él conoce el precio habitual.',

  'exp.bentota-watersports.name': 'Deportes acuáticos en Bentota',
  'exp.bentota-watersports.location': 'Bentota',
  'exp.bentota-watersports.summary':
    'El agua tranquila donde el río Bentota se une al mar convierte este lugar en el centro de deportes acuáticos de la isla: motos de agua, banana, windsurf, buceo y pesca de altura.',
  'exp.bentota-watersports.detail.0':
    'La lengua de arena de Bentota resguarda un largo tramo de agua plana, y por eso todos los deportes acuáticos de la isla parecen operar desde aquí. Motos de agua, flotadores y bananas funcionan en el lado del río; el windsurf y el kitesurf van mejor mar adentro cuando por la tarde se levanta la brisa.',
  'exp.bentota-watersports.detail.1':
    'De noviembre a abril el mar está lo bastante claro para bucear, con pecios y arrecife frente a Beruwala, y desde la misma playa salen las salidas de pesca de altura. Todo puede organizarse el mismo día a través de tu hotel.',
  'exp.bentota-watersports.facts.0': 'Buceo disponible de noviembre a abril',
  'exp.bentota-watersports.facts.1': 'Actividades en el río todo el año',
  'exp.bentota-watersports.facts.2': 'Se reserva en destino, por horas o por sesión',
  'exp.bentota-watersports.facts.3': 'Suplemento aplicable, pagadero en destino',
  'exp.bentota-watersports.facts.4': 'Equipo e instrucción incluidos',
  'exp.bentota-watersports.goodToKnow':
    'Comprueba que el operador facilita chalecos salvavidas y que tu seguro de viaje cubre los deportes acuáticos a motor: no todas las pólizas lo hacen.',

  'exp.colombo-city.name': 'Visita de la ciudad de Colombo',
  'exp.colombo-city.location': 'Colombo',
  'exp.colombo-city.summary':
    'La capital comercial en medio día: el bazar de Pettah, una mezquita a rayas rojas y blancas, el Fort colonial, el templo de Gangaramaya y la puesta de sol en Galle Face Green.',
  'exp.colombo-city.detail.0':
    'Colombo no es una ciudad que se anuncie, y justo por eso compensa recorrerla con guía. Empezarás en Pettah, el viejo barrio del bazar, donde calles enteras venden una sola cosa —ferretería, textiles, pescado seco— y la Mezquita Roja se alza sobre todo con su ladrillo a rayas.',
  'exp.colombo-city.detail.1':
    'A partir de ahí: el barrio colonial de Fort y el Old Dutch Hospital, hoy un patio de restaurantes; el templo de Gangaramaya con su extraordinaria acumulación de objetos donados; Independence Square; y las avenidas arboladas de Cinnamon Gardens. Termina en Galle Face Green al atardecer, con los vendedores de cometas, los carritos de isso vadai y media Colombo paseando.',
  'exp.colombo-city.facts.0': halfDay,
  'exp.colombo-city.facts.1': daily,
  'exp.colombo-city.facts.2': privateGuide,
  'exp.colombo-city.facts.3': 'Entrada al templo incluida',
  'exp.colombo-city.facts.4': 'Paradas para compras a petición',
  'exp.colombo-city.goodToKnow':
    'El tráfico es denso de 8:00 a 10:00 y de 16:00 a 19:00, así que la ruta está pensada para esquivarlo. Pettah cierra los domingos y los días de poya.',

  'exp.negombo-lagoon.name': 'Laguna y mercado de pescado de Negombo',
  'exp.negombo-lagoon.location': 'Negombo',
  'exp.negombo-lagoon.summary':
    'Un pueblo pesquero católico a veinte minutos del aeropuerto: canales holandeses, canoas con balancín que entran al amanecer y el mayor mercado de pescado de la costa oeste.',
  'exp.negombo-lagoon.detail.0':
    'Negombo lleva siglos siendo puerto pesquero y de canela y sigue siendo abrumadoramente católico, por eso hay una iglesia al final de casi cada calle y los barcos llevan nombres de santos pintados en la proa.',
  'exp.negombo-lagoon.detail.1':
    'El mercado de pescado de Lellama es lo que hay que ver, y ocurre temprano: canoas con balancín entrando a vela, la captura extendida sobre la arena, atún y carite subastados entre la multitud y rejillas de pescado secándose al sol más allá en la playa. El canal holandés que atraviesa el pueblo es un contrapunto tranquilo, y la laguna de detrás está llena de pescadores de gambas y cangrejos trabajando con redes fijas.',
  'exp.negombo-lagoon.facts.0': 'Duración: de 2 a 3 horas',
  'exp.negombo-lagoon.facts.1': 'El mercado está en su mejor momento de 6:00 a 8:00',
  'exp.negombo-lagoon.facts.2': 'A diario excepto los domingos',
  'exp.negombo-lagoon.facts.3': privateGuide,
  'exp.negombo-lagoon.facts.4': 'A 20 minutos del Aeropuerto Internacional de Bandaranaike',
  'exp.negombo-lagoon.goodToKnow':
    'El mercado está mojado, abarrotado y huele fuerte: no es para todo el mundo, y conviene llevar calzado cerrado. El paseo en barca por la laguna es la alternativa más suave.',

  'exp.kitulgala.name': 'Kitulgala y el valle del Kelani',
  'exp.kitulgala.location': 'Kitulgala',
  'exp.kitulgala.summary':
    'El desfiladero de selva tropical donde se rodó «El puente sobre el río Kwai», y el mejor rafting de Sri Lanka: cinco kilómetros de rápidos de grado 2 y 3 entre la jungla.',
  'exp.kitulgala.detail.0':
    'Aquí el río Kelani corre rápido y verde por un desfiladero de selva de zona húmeda, y el descenso desde la región montañosa hasta la costa lo atraviesa de lado a lado. David Lean voló su puente en este tramo de agua en 1957; los cimientos de hormigón siguen en el lecho del río y un guía te bajará hasta ellos.',
  'exp.kitulgala.detail.1':
    'Para la mayoría el atractivo es el rafting: unos cinco kilómetros y siete rápidos con nombre, de grado 2 a 3, perfectamente manejables para un principiante con un guía en la balsa. Si prefieres no mojarte, ese mismo bosque es uno de los mejores puntos de observación de aves de la zona húmeda, con una larga lista de endemismos.',
  'exp.kitulgala.facts.0': 'Duración: el descenso en balsa dura unas 2 horas',
  'exp.kitulgala.facts.1': 'En la carretera de Nuwara Eliya a Colombo',
  'exp.kitulgala.facts.2': 'Rafting todo el año, mejor de mayo a diciembre',
  'exp.kitulgala.facts.3': 'Cascos, chalecos salvavidas y guías incluidos',
  'exp.kitulgala.facts.4': 'El rafting es un suplemento local: la parada en sí está incluida',
  'exp.kitulgala.goodToKnow':
    'Acabarás empapado, así que lleva una muda seca a mano. La edad mínima para el rafting suele ser 10 años y hay que saber nadar.',

  /* ---------------- Hotels ---------------- */
  'hotel.Aliya Resort & Spa.description':
    'Villas de baja altura en torno a una piscina infinita encuadrada sobre la propia roca de Sigiriya: la vista desde el agua es la razón para alojarse aquí.',
  'hotel.Cinnamon Lodge Habarana.description':
    'Once hectáreas de jardines llenos de fauna y chalés junto al lago, justo en el centro del Triángulo Cultural.',
  'hotel.Hotel Kandalama.description':
    'La obra maestra de Geoffrey Bawa, incrustada en un acantilado sobre un embalse y hoy tan cubierta de vegetación que la selva casi se la ha tragado.',
  'hotel.Earl’s Regency.description':
    'Un hotel de estilo colonial en el valle del Mahaweli a las afueras, con vistas a las colinas desde la terraza de la piscina y un buen spa.',
  'hotel.Cinnamon Citadel.description':
    'Habitaciones a orillas del Mahaweli, a diez minutos del Templo del Diente y tranquilas por la noche.',
  'hotel.The Grand Kandyan.description':
    'El hotel más grande de la capital montañosa, a poca distancia a pie del lago y del templo.',
  'hotel.The Tea Experience.description':
    'Un pequeño hotel de finca en el fondo de un valle de té en activo a las afueras de Nuwara Eliya: la versión tranquila y brumosa de la región montañosa.',
  'hotel.The Golden Ridge.description':
    'En la loma sobre la ciudad, con amplias vistas del valle y fácil acceso al lago Gregory.',
  'hotel.Horton Heights.description':
    'Una base cómoda en la ladera, cerca del hipódromo y del campo de golf, práctica para salir hacia Horton Plains.',
  'hotel.Newburgh Tea Factory.description':
    'Una fábrica de té reconvertida en una finca en activo, con la maquinaria original en su sitio y vistas al valle desde todas las habitaciones.',
  'hotel.EKHO Ella.description':
    'Encaramado justo al borde del Ella Gap, con el mejor balcón del pueblo para ver el amanecer.',
  'hotel.Onrock Ella.description':
    'Un hotel contemporáneo en la ladera con una piscina infinita que mira directamente hacia las llanuras a través del desfiladero.',
  'hotel.Yala Safari Hotel.description':
    'Una base sencilla y bien llevada a minutos de la puerta del parque: desde aquí las salidas tempranas son fáciles.',
  'hotel.Shangri-La Hambantota.description':
    'Un resort completo con playa propia y campo de golf, a una hora del parque y el lado cómodo del safari.',
  'hotel.Cinnamon Wild Yala.description':
    'Chalés dentro de la zona de amortiguación por donde de verdad pasan elefantes y jabalíes: lo más cerca del parque que se puede dormir.',
  'hotel.Sheraton Kosgoda Turtle Beach Resort.description':
    'Un gran resort frente al mar en un tramo de arena donde anidan las tortugas, con varias piscinas y una larga playa privada.',
  'hotel.Cinnamon Bay.description':
    'Directamente en la playa de Bentota, en la desembocadura del río, a poca distancia a pie del centro de deportes acuáticos.',
  'hotel.Eden Resort & Spa.description':
    'Un hotel de playa con larga trayectoria, con una gran piscina y un spa ayurvédico, muy elegido para estancias de playa largas.',
  'hotel.Jetwing Beach.description':
    'Un hotel de playa con buen diseño a veinte minutos del aeropuerto: la mejor primera o última noche en la isla.',
  'hotel.Gold Sands.description':
    'Una opción acogedora y más sencilla frente a la playa, cerca del mercado de pescado y del pueblo.',
  'hotel.Heritance Negombo.description':
    'Un hotel contemporáneo frente al mar con piscina en la azotea y puestas de sol sobre el océano Índico.',

  /* ---------------- Packages ---------------- */
  'pkg.grand-tour-of-sri-lanka.name': 'Gran circuito por Sri Lanka',
  'pkg.grand-tour-of-sri-lanka.tagline':
    'Todo el recorrido de la isla en dos semanas sin prisas: capitales antiguas, región del té, tierra de leopardos y un largo final de playa.',
  'pkg.grand-tour-of-sri-lanka.badge': 'Itinerario sugerido',
  'pkg.grand-tour-of-sri-lanka.cardSummary':
    'Nuestro viaje más completo. Seis bases, un solo chófer-guía y tiempo suficiente en cada sitio para dejar de mirar el reloj.',
  'pkg.grand-tour-of-sri-lanka.intro':
    'Este es el itinerario que escribimos para quien quiere verlo todo, y verlo bien. Empiezas en el Triángulo Cultural con tres noches en un mismo hotel: lo justo para tomarse Polonnaruwa, Sigiriya y Anuradhapura con calma en vez de correr de una a otra. Luego la carretera sube: Kandy para el Templo del Diente y los jardines botánicos, Nuwara Eliya para el té y las mañanas frías, Ella para el Puente de los Nueve Arcos y la vista hacia el desfiladero. Desde ahí bajas al sureste seco para dos noches en Yala, uno de los mejores lugares del mundo para ver un leopardo salvaje, antes de terminar con tres días enteros en la playa de Bentota sin absolutamente nada en la agenda. Catorce noches, un solo vehículo y un solo conductor de principio a fin, y ningún vuelo interno.',
  'pkg.grand-tour-of-sri-lanka.tourType': 'Itinerario sugerido',
  'pkg.grand-tour-of-sri-lanka.bestFor.0': 'Primera visita',
  'pkg.grand-tour-of-sri-lanka.bestFor.1': 'Cultura',
  'pkg.grand-tour-of-sri-lanka.bestFor.2': 'Fauna y safari en 4x4',
  'pkg.grand-tour-of-sri-lanka.bestFor.3': 'Región del té',
  'pkg.grand-tour-of-sri-lanka.bestFor.4': 'Final de playa',
  'pkg.grand-tour-of-sri-lanka.bestFor.5': 'Luna de miel',
  'pkg.grand-tour-of-sri-lanka.priceBasis': perPerson,
  'pkg.grand-tour-of-sri-lanka.period': period,
  'pkg.grand-tour-of-sri-lanka.visiting.0': culturalTriangle,
  'pkg.grand-tour-of-sri-lanka.extensionPrice': roomNight(325),
  'pkg.grand-tour-of-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.grand-tour-of-sri-lanka.ext.0.description':
    'Tres días de playa pasan rápido. Añade noches extra en el Sheraton Kosgoda Turtle Beach Resort —o en Cinnamon Bay o Eden Resort— con el mismo régimen de media pensión, y conserva la misma habitación en lugar de cambiar.',
  'pkg.grand-tour-of-sri-lanka.ext.0.price': roomNight(325),
  'pkg.grand-tour-of-sri-lanka.ext.1.title': 'Opción 2: las Maldivas',
  'pkg.grand-tour-of-sri-lanka.ext.1.description':
    'De Colombo a Malé hay un salto de noventa minutos, lo que convierte a las Maldivas en la segunda mitad natural de un viaje a Sri Lanka. Combinaremos tu resort isleño con el circuito y gestionaremos los vuelos de conexión y los traslados como una sola reserva.',
  'pkg.grand-tour-of-sri-lanka.ext.1.price': onRequest,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.intro':
    'Aterrizas en el Aeropuerto Internacional de Bandaranaike y tu chófer-guía te lleva tierra adentro: unas cuatro horas hasta Sigiriya, con la tarde libre para nadar y recuperarte. Los dos días siguientes son el Triángulo Cultural en su mejor versión, y quedarte en un mismo hotel las tres noches es lo que lo hace posible. El segundo día es Polonnaruwa con el fresco de la mañana y, por la tarde, un safari en jeep en Minneriya, donde los elefantes bajan al embalse que se retira. El tercer día subes la roca de Sigiriya con las primeras luces y pasas la tarde entre las estupas y las ruinas monásticas de Anuradhapura, la primera capital de la isla y aún hoy un lugar de peregrinación muy vivo.',
  'pkg.grand-tour-of-sri-lanka.stop.kandy.intro':
    'La bajada hacia Kandy es bonita y trae dos paradas incorporadas: el templo rupestre de Dambulla, cinco cuevas pintadas llenas de estatuas de Buda excavadas en una pared de roca, y un jardín de especias en Matale donde la canela, el cardamomo y la pimienta crecen en la misma parcela. Llegas a Kandy a tiempo para la puja del atardecer en el Templo del Sagrado Diente, cuando arrancan los tamborileros y la fila de peregrinos desfila ante el relicario. El día siguiente es para la capital montañosa: los Jardines Botánicos Reales de Peradeniya por la mañana y, por la tarde, el lago, el mercado y el mirador sobre la ciudad.',
  'pkg.grand-tour-of-sri-lanka.stop.nuwara-eliya.intro':
    'Al salir de Kandy la carretera empieza a subir y ya no para, atravesando plantaciones de té en terrazas hasta los 1.900 metros. Interrumpes el trayecto en una fábrica de té en activo para seguir la hoja desde las naves de marchitado hasta la mesa de cata, y llegas a Nuwara Eliya con la tarde libre. Es un sitio extraño y bastante maravilloso: una estación de montaña victoriana con hipódromo, oficina de correos de ladrillo rojo y campo de golf, construida por los británicos para sentirse como en casa y genuinamente fría al caer la noche. La mañana siguiente se dedica al pueblo: el lago Gregory, Victoria Park, las viejas casitas. La tarde es tuya.',
  'pkg.grand-tour-of-sri-lanka.stop.ella.intro':
    'Un trayecto corto hasta Ella, con parada en el templo de Seetha Amman en Seetha Eliya: un santuario hindú de colores vivos junto a un frío arroyo de montaña, considerado el lugar donde Sita fue retenida cautiva en el Ramayana. Ella es una sola calle de cafés en una muesca entre dos montañas, y la razón para venir es la vista hacia el Ella Gap, que en una mañana clara llega hasta las llanuras del sur. Tu día completo aquí incluye el pueblo y el Puente de los Nueve Arcos, un viaducto de 1921 que sale curvándose de la selva sobre nueve vanos de piedra sin un gramo de acero. Si calculas bien el momento, pasará un tren mientras estás allí.',
  'pkg.grand-tour-of-sri-lanka.stop.yala.intro':
    'El descenso desde las montañas es espectacular: pierdes dos mil metros en un par de horas y el paisaje pasa del té al matorral seco. Las cataratas de Ravana aparecen junto a la carretera en la bajada, y la tarde te lleva a Kataragama para la puja del atardecer, una ciudad de peregrinación sagrada por igual para budistas, hindúes y musulmanes, donde los tambores y las lámparas de aceite siguen mucho después del anochecer, con la blanca estupa de Kiri Vehera iluminada sobre los árboles. La mañana siguiente empieza antes del amanecer con un safari en jeep en el Parque Nacional de Yala, que tiene una de las densidades de leopardos más altas del mundo, además de osos bezudos, elefantes y una playa vacía donde el matorral se encuentra con el océano Índico. La tarde queda libre.',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.subLabel': '(vía Galle)',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.intro':
    'Sigues la costa sur hacia el oeste, y el último día de visitas del viaje es de los mejores. El Fuerte de Galle por la mañana: una ciudad comercial holandesa amurallada sobre un promontorio, murallas en tres lados, habitada en lugar de conservada. Después, un safari en barca por el Madu Ganga, entrando en túneles de manglar tan estrechos que hay que apagar el motor, y una parada en el criadero de tortugas de Kosgoda antes de llegar a Bentota. Los dos días restantes quedan enteramente libres en media pensión. Nada, duerme, lee, usa el centro de deportes acuáticos en la desembocadura del río o no hagas absolutamente nada: después de once días de carretera, casi todo el mundo elige nada.',
  'pkg.grand-tour-of-sri-lanka.stop.departure.location': departure,
  'pkg.grand-tour-of-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.grand-tour-of-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.ancient-cities-and-golden-sands.name': 'Ciudades antiguas y arenas doradas',
  'pkg.ancient-cities-and-golden-sands.tagline':
    'Fortalezas rocosas, tierra de elefantes y el Templo del Diente, y luego directo a la costa el resto de la semana.',
  'pkg.ancient-cities-and-golden-sands.badge': 'Varias etapas',
  'pkg.ancient-cities-and-golden-sands.cardSummary':
    'El Triángulo Cultural y Kandy a fondo, y después dos días sin hacer nada en la costa oeste. Primero la cultura, luego la playa, sin prisas en ninguna de las dos.',
  'pkg.ancient-cities-and-golden-sands.intro':
    'Hay viajes que intentan cubrir toda la isla en una semana y no los disfruta nadie. Este hace lo contrario: dedica cinco de sus siete noches a los dos lugares que más merecen tu tiempo y después te pone en una playa. Tres noches en el Triángulo Cultural son lo que hace falta para ver Polonnaruwa, Sigiriya, Minneriya y Anuradhapura sin pasar cada mañana haciendo la maleta. Dos noches en Kandy cubren el Templo del Sagrado Diente, los jardines botánicos de Peradeniya y la propia ciudad. Luego cruzas a Bentota y dejas de moverte. Va bien a quien tiene poco tiempo y prefiere ver menos cosas pero bien, y a las familias que necesitan terminar la semana con una piscina.',
  'pkg.ancient-cities-and-golden-sands.tourType': 'Varias etapas',
  'pkg.ancient-cities-and-golden-sands.bestFor.0': 'Viajes cortos',
  'pkg.ancient-cities-and-golden-sands.bestFor.1': 'Cultura',
  'pkg.ancient-cities-and-golden-sands.bestFor.2': 'Familias',
  'pkg.ancient-cities-and-golden-sands.bestFor.3': 'Fauna',
  'pkg.ancient-cities-and-golden-sands.bestFor.4': 'Final de playa',
  'pkg.ancient-cities-and-golden-sands.priceBasis': perPerson,
  'pkg.ancient-cities-and-golden-sands.period': period,
  'pkg.ancient-cities-and-golden-sands.visiting.0': culturalTriangle,
  'pkg.ancient-cities-and-golden-sands.extensionPrice': roomNight(325),
  'pkg.ancient-cities-and-golden-sands.ext.0.title': moreBentotaTitle,
  'pkg.ancient-cities-and-golden-sands.ext.0.description':
    'Dos días de playa apenas dan para deshacer la maleta. Amplía tu estancia en el Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay o Eden Resort & Spa con el mismo régimen de media pensión.',
  'pkg.ancient-cities-and-golden-sands.ext.0.price': roomNight(325),
  'pkg.ancient-cities-and-golden-sands.ext.1.title': 'Opción 2: añadir Yala',
  'pkg.ancient-cities-and-golden-sands.ext.1.description':
    'Dos noches en Yala de camino a la costa convierten esto además en un viaje de naturaleza: un safari en jeep de día completo en el mejor parque de leopardos de la isla, más Kataragama y las cataratas de Ravana por el camino.',
  'pkg.ancient-cities-and-golden-sands.ext.1.price': onRequest,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.intro':
    'Tu chófer-guía te recibe en el Aeropuerto Internacional de Bandaranaike y conduce tierra adentro hasta Sigiriya, unas cuatro horas, con el resto del primer día libre para nadar y dormir el vuelo. El segundo día es Polonnaruwa por la mañana —la mejor conservada de las capitales en ruinas y la única que se recorre de verdad a pie—, seguida por la tarde de un safari en jeep en Minneriya, donde los elefantes se reúnen en gran número sobre la hierba que deja el embalse al retirarse. El tercer día madrugas para la propia roca de Sigiriya, 1.200 escalones hasta un palacio del siglo V en una cima de granito, y luego cruzas a Anuradhapura para ver estupas del tamaño de colinas y el árbol plantado más antiguo del planeta.',
  'pkg.ancient-cities-and-golden-sands.stop.kandy.intro':
    'La carretera hacia el sur a Kandy lleva dos paradas incorporadas: el templo rupestre de Dambulla, con 150 estatuas de Buda y techos pintados dentro de una pared de roca, y un jardín de especias en Matale donde puedes ver qué aspecto tienen la canela y el cardamomo antes de llegar a un tarro. Llegas a Kandy para la puja del atardecer en el Templo del Sagrado Diente. El día siguiente pertenece a la capital montañosa: los Jardines Botánicos Reales de Peradeniya por la mañana y luego el lago, el mercado cubierto y el mirador sobre la ciudad, mejor a última hora de la tarde, cuando la luz se vuelve dorada sobre los tejados del templo.',
  'pkg.ancient-cities-and-golden-sands.stop.bentota.intro':
    'Bajas de las montañas a la costa oeste, y ahí se acaban los traslados. Los dos días restantes están completamente libres en media pensión en Bentota, donde el río se encuentra con el mar y el agua es lo bastante plana para todos los deportes acuáticos de la isla. Hay mucho al alcance si lo quieres —el Fuerte de Galle a una hora al sur, los manglares del Madu Ganga a veinte minutos, el criadero de tortugas de Kosgoda aún más cerca— y tu chófer-guía puede llevarte a cualquiera de ellos. O puedes quedarte exactamente donde estás, que es para lo que está pensado de verdad este itinerario.',
  'pkg.ancient-cities-and-golden-sands.stop.departure.location': departure,
  'pkg.ancient-cities-and-golden-sands.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.ancient-cities-and-golden-sands.stop.departure.intro': departureIntro,

  'pkg.classic-sri-lanka.name': 'Sri Lanka clásico',
  'pkg.classic-sri-lanka.tagline':
    'Los grandes clásicos de la isla en una sola semana: templos rupestres, una fortaleza rocosa, la capital montañosa, la región del té y la playa.',
  'pkg.classic-sri-lanka.cardSummary':
    'Cinco bases en ocho días, ordenadas para no volver nunca sobre tus pasos. El máximo terreno que se puede cubrir en una semana sin que todo se difumine.',
  'pkg.classic-sri-lanka.badge': 'Itinerario sugerido',
  'pkg.classic-sri-lanka.intro':
    'Una semana es poco para un país con tanto dentro, así que esta ruta está construida para no desperdiciar nada. Empiezas con una noche en Negombo, a veinte minutos del aeropuerto, lo que evita un trayecto largo tras un vuelo largo. A partir de ahí todo discurre en una línea limpia: el Triángulo Cultural para Dambulla, Minneriya, Sigiriya y Anuradhapura; Kandy para el Templo del Sagrado Diente; Nuwara Eliya para las plantaciones de té y la fría y extraña estación de montaña que las corona. Luego el descenso a la costa por el valle del Kelani en Kitulgala, y dos días completos en Bentota para terminar. Es la primera mirada más completa a Sri Lanka que cabe en ocho días.',
  'pkg.classic-sri-lanka.tourType': 'Itinerario sugerido',
  'pkg.classic-sri-lanka.bestFor.0': 'Primera visita',
  'pkg.classic-sri-lanka.bestFor.1': 'Viajes cortos',
  'pkg.classic-sri-lanka.bestFor.2': 'Cultura',
  'pkg.classic-sri-lanka.bestFor.3': 'Región del té',
  'pkg.classic-sri-lanka.bestFor.4': 'Final de playa',
  'pkg.classic-sri-lanka.priceBasis': perPerson,
  'pkg.classic-sri-lanka.period': period,
  'pkg.classic-sri-lanka.visiting.1': culturalTriangle,
  'pkg.classic-sri-lanka.extensionPrice': roomNight(325),
  'pkg.classic-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.classic-sri-lanka.ext.0.description':
    'Añade noches en el Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay o Eden Resort & Spa con el mismo régimen de media pensión, y termina la semana como es debido en lugar de hacer la maleta el séptimo día.',
  'pkg.classic-sri-lanka.ext.0.price': roomNight(325),
  'pkg.classic-sri-lanka.ext.1.title': 'Opción 2: añadir Ella y Yala',
  'pkg.classic-sri-lanka.ext.1.description':
    'Sigue hacia el este desde Nuwara Eliya en lugar de girar hacia la costa: Ella para el Puente de los Nueve Arcos, luego Yala para un safari de leopardos, y después a la playa pasando por Galle.',
  'pkg.classic-sri-lanka.ext.1.price': onRequest,
  'pkg.classic-sri-lanka.stop.negombo.intro':
    'En lugar de mandarte tierra adentro nada más bajar de un vuelo largo, este itinerario empieza a veinte minutos de la terminal, en Negombo: un pueblo pesquero católico de canales holandeses, canoas con balancín y una iglesia al final de cada calle. Tu chófer-guía te recibe en llegadas y te deja en el hotel en media hora. El resto del día queda libre: duerme, nada o camina por la playa hasta el mercado de pescado de Lellama, que merece la pena ver temprano a la mañana siguiente si el desfase horario te va a despertar igualmente.',
  'pkg.classic-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.classic-sri-lanka.stop.cultural-triangle.intro':
    'Te diriges tierra adentro y rompes el trayecto en el templo rupestre de Dambulla: cinco cuevas excavadas en una pared de roca, 150 estatuas de Buda y techos pintados hasta donde la piedra se junta con el suelo. La tarde es un safari en jeep en Minneriya, donde los elefantes salvajes bajan a última hora a pastar en los pastizales del embalse que se seca. La mañana siguiente es la roca de Sigiriya —1.200 escalones pasando junto a frescos de mil quinientos años hasta un palacio en la cima— y la tarde te lleva a Anuradhapura, la primera capital, donde enormes estupas de ladrillo aún se elevan sobre los árboles y los peregrinos cuidan una higuera plantada en el 288 a. C.',
  'pkg.classic-sri-lanka.stop.kandy.intro':
    'La mañana se pasa en los jardines de especias de Matale, recorriendo una parcela en activo donde la canela se pela y se enrolla a mano, el cardamomo crece a la sombra y las lianas de pimienta trepan por sus árboles tutores. Después, camino de Kandy, el último reino en caer ante una potencia europea y aún hoy el corazón cultural de la isla. Llegas para la puja del atardecer en el Templo del Sagrado Diente, cuando los tamborileros kandianos arrancan frente a la cámara interior y las puertas se abren para la fila de peregrinos que llevan flores de loto ante el relicario dorado.',
  'pkg.classic-sri-lanka.stop.nuwara-eliya.intro':
    'La carretera que sale de Kandy sube durante tres horas entre terrazas de té, y a mitad de camino paras en una fábrica de altura en activo para seguir la hoja desde las artesas de marchitado hasta los rodillos, los hornos y la mesa de cata. Llegas a Nuwara Eliya por la tarde: 1.900 metros de altitud, casitas de estilo Tudor, un hipódromo y una oficina de correos de ladrillo rojo, tan profundamente victoriana que todo el mundo la llama la Pequeña Inglaterra. El resto del día queda libre, y la noche es de verdad fría, lo que después de una semana en el trópico es un choque que conviene vivir.',
  'pkg.classic-sri-lanka.stop.bentota.subLabel': '(vía Kitulgala)',
  'pkg.classic-sri-lanka.stop.bentota.intro':
    'El descenso a la costa pasa por Kitulgala, donde el río Kelani abre un desfiladero en la selva de zona húmeda y donde David Lean voló su puente para «El puente sobre el río Kwai» en 1957. Es el mejor rafting del país si te apetece, y uno de los mejores tramos de observación de aves de la zona húmeda si no. Estás en la playa de Bentota por la tarde, y el último día completo queda enteramente libre en media pensión: la desembocadura del río es lo bastante tranquila para todos los deportes acuáticos de la isla, o puedes sencillamente no moverte.',
  'pkg.classic-sri-lanka.stop.departure.location': departure,
  'pkg.classic-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.classic-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.beach-safari-and-tea-country.name': 'Playa, safari y región del té',
  'pkg.beach-safari-and-tea-country.tagline':
    'Por una vez, primero la playa: tres días sobre la arena y luego tierra adentro para leopardos, cascadas y la región montañosa al revés.',
  'pkg.beach-safari-and-tea-country.badge': 'Varias etapas',
  'pkg.beach-safari-and-tea-country.cardSummary':
    'Recorre la isla en sentido antihorario: costa, safari, montaña, Kandy, Colombo. Te recuperas del vuelo antes de visitar nada.',
  'pkg.beach-safari-and-tea-country.intro':
    'Casi todos los itinerarios de Sri Lanka dejan la playa para el final. Este la pone al principio, y es mejor idea de lo que parece: aterrizas, conduces hora y media hasta Bentota y tienes tres días para recuperarte del vuelo antes de que empiece ninguna visita. A partir de ahí la ruta gira en sentido antihorario por el sur: el Fuerte de Galle y luego Yala para un safari de leopardos, subida a Ella para el Puente de los Nueve Arcos y las cataratas de Ravana, después por la región del té hasta Kandy para el Templo del Sagrado Diente, y por último Colombo y una última noche en Negombo junto al aeropuerto. Es el mejor precio de los cuatro programas y le va bien a quien quiere la playa mientras todavía tiene energía para disfrutarla.',
  'pkg.beach-safari-and-tea-country.tourType': 'Varias etapas',
  'pkg.beach-safari-and-tea-country.bestFor.0': 'Playa primero',
  'pkg.beach-safari-and-tea-country.bestFor.1': 'Fauna y safari en 4x4',
  'pkg.beach-safari-and-tea-country.bestFor.2': 'Mejor relación calidad-precio',
  'pkg.beach-safari-and-tea-country.bestFor.3': 'Luna de miel',
  'pkg.beach-safari-and-tea-country.bestFor.4': 'Región del té',
  'pkg.beach-safari-and-tea-country.priceBasis': perPerson,
  'pkg.beach-safari-and-tea-country.period': period,
  'pkg.beach-safari-and-tea-country.extensionPrice': roomNight(325),
  'pkg.beach-safari-and-tea-country.ext.0.title': moreBentotaTitle,
  'pkg.beach-safari-and-tea-country.ext.0.description':
    'Empieza aún más despacio. Añade noches al principio del viaje en el Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay o Eden Resort & Spa, con el mismo régimen de media pensión.',
  'pkg.beach-safari-and-tea-country.ext.0.price': roomNight(325),
  'pkg.beach-safari-and-tea-country.ext.1.title': 'Opción 2: añadir el Triángulo Cultural',
  'pkg.beach-safari-and-tea-country.ext.1.description':
    'Esta ruta se salta a propósito Sigiriya y Polonnaruwa. Añade dos o tres noches al norte de Kandy y recuperas la fortaleza rocosa, Minneriya y Anuradhapura antes de poner rumbo al aeropuerto.',
  'pkg.beach-safari-and-tea-country.ext.1.price': onRequest,
  'pkg.beach-safari-and-tea-country.stop.bentota.intro':
    'Tu chófer-guía te recibe en el Aeropuerto Internacional de Bandaranaike y baja directo por la autopista hasta Bentota: alrededor de hora y media, el traslado más corto de todos nuestros programas. Después no pasa nada durante dos días, a propósito. Ambos quedan completamente libres en media pensión, en una playa donde el río Bentota se une al mar, que es la razón por la que todos los deportes acuáticos de la isla operan desde este tramo de agua. Colombo queda a un trayecto cómodo hacia el norte si quieres un día de ciudad, y los manglares del Madu Ganga y el criadero de tortugas de Kosgoda están ambos cerca, pero no hay obligación de hacer nada de esto.',
  'pkg.beach-safari-and-tea-country.stop.yala.subLabel': '(vía Galle)',
  'pkg.beach-safari-and-tea-country.stop.yala.intro':
    'Sigues la costa sur con parada en el Fuerte de Galle: una ciudad comercial holandesa amurallada sobre un promontorio con murallas en tres lados, todavía un barrio vivo en lugar de un museo. Los pescadores sobre zancos trabajan este tramo de costa si la hora acompaña. Por la tarde llegas a Yala para la primera de dos noches, y el safari se hace en un 4x4 descubierto privado con rastreador en el parque que tiene una de las mayores densidades de leopardos del mundo. Aquí también viven osos bezudos, elefantes, búfalos salvajes y cocodrilos, y las pistas bajan hasta una playa vacía donde el matorral se encuentra con el océano Índico.',
  'pkg.beach-safari-and-tea-country.stop.ella.intro':
    'La carretera hacia el norte, saliendo de la zona seca, sube con fuerza, y las cataratas de Ravana aparecen junto a la vía durante el ascenso: veinticinco metros de agua cayendo entre selva y peñascos, en su punto más caudaloso en los meses posteriores al monzón. El resto de ese día queda libre en Ella, una sola calle de cafés encajada entre dos montañas con una vista hacia el desfiladero que llega a las llanuras del sur. Tu día completo aquí cubre el pueblo y el Puente de los Nueve Arcos, un viaducto de 1921 construido sin acero que sale curvándose de la selva sobre nueve vanos de piedra. Madruga una de las mañanas para el Little Adam’s Peak: cuarenta y cinco minutos cuesta arriba para el mejor amanecer de la región montañosa.',
  'pkg.beach-safari-and-tea-country.stop.kandy.intro':
    'Este es el día del té. La carretera de Ella a Kandy recorre la región montañosa de punta a punta entre fincas en terrazas, y la interrumpes en una fábrica en activo para seguir la hoja desde las naves de marchitado hasta los rodillos y los hornos y terminar con una cata de grados que en su mayoría nunca salen de la isla. Llegas a Kandy para la puja del atardecer en el Templo del Sagrado Diente, donde un diente del Buda lleva custodiado —y disputado— más de mil años, y donde los tamborileros aún abren la cámara interior tres veces al día.',
  'pkg.beach-safari-and-tea-country.stop.negombo.subLabel': '(vía Colombo)',
  'pkg.beach-safari-and-tea-country.stop.negombo.intro':
    'Bajas de las montañas a Colombo para una visita de medio día de la capital comercial: el bazar de Pettah y su Mezquita Roja a rayas, el barrio colonial de Fort y el Old Dutch Hospital, el templo de Gangaramaya y Galle Face Green a última hora de la tarde con los vendedores de cometas. Después, un breve trayecto costa arriba hasta Negombo para tu última noche: un pueblo pesquero a veinte minutos de la terminal, lo que hace la mañana siguiente mucho menos estresante que salir desde la ciudad.',
  'pkg.beach-safari-and-tea-country.stop.departure.location': departure,
  'pkg.beach-safari-and-tea-country.stop.departure.subLabel': toAirport('Negombo'),
  'pkg.beach-safari-and-tea-country.stop.departure.intro': departureIntro,
};

export default content;
