import type { ContentDictionary } from '../tourPackagesI18n';

/* Repeated boilerplate, written once. */
const halfDay = 'Dauer: ein halber Tag';
const daily = 'Tägliche Abfahrten';
const privateGuide = 'Privates Erlebnis mit Ihrem Fahrer-Guide';
const unesco = 'Eintritt zum UNESCO-Welterbe inbegriffen';
const onRequest = 'Preis auf Anfrage';
const perPerson = 'pro Person, Halbpension';
const period = '01. Nov. 2026 – 30. Apr. 2027';
const roomNight = (amount: number) => `USD ${amount} pro Zimmer und Nacht, Halbpension`;
const departure = 'Abreise';
const toAirport = (from: string) => `(${from} zum Flughafen)`;
const departureIntro =
  'Ein letzter Vormittag am Wasser, dann holt Sie Ihr Fahrer-Guide zum Transfer nach Bandaranaike International Airport ab, zeitlich auf Ihren Flug abgestimmt und mit komfortablem Puffer für die Straße. Bei einem späten Abflug organisieren wir gern ein Tageszimmer, einen letzten Ausflug oder einen Mittagsstopp unterwegs, statt Sie im Terminal warten zu lassen — sagen Sie uns Bescheid, und wir bauen es in den Tag ein.';
const culturalTriangle = 'Kulturelles Dreieck';
const forCulturalTriangle = '(für das Kulturelle Dreieck)';
const moreBentotaTitle = 'Option 1: Mehr Zeit in Bentota';
const hillCountry = 'Hochland';

const content: ContentDictionary = {
  /* ---------------- Experiences ---------------- */
  'exp.polonnaruwa.name': 'Antike Stadt Polonnaruwa',
  'exp.polonnaruwa.location': culturalTriangle,
  'exp.polonnaruwa.summary':
    'Sri Lankas zweite Hauptstadt ist die besterhaltene der Ruinenstädte der Insel — ein kompaktes, zu Fuß erschließbares Ensemble aus Königspalästen, Badeteichen und kolossalen, aus dem Fels geschlagenen Buddhas, hinterlassen von den Königen des 12. Jahrhunderts.',
  'exp.polonnaruwa.detail.0':
    'Polonnaruwa ist die eine antike Stadt, die sich wie eine Landkarte lesen lässt. Wo Anuradhapura sich weitläufig ausbreitet, fügt sich Polonnaruwa zu einem einzigen gartenartigen Archäologiepark, den man an einem Vormittag schafft, und fast alles steht noch: der Ziegelrumpf des siebenstöckigen Palasts von König Parakramabahu, das Quadrangle mit seinem runden Vatadage, das Bildhaus Lankatilaka, dessen Mauern beiderseits eines kopflosen Buddha 17 Meter aufragen.',
  'exp.polonnaruwa.detail.1':
    'Den Abschluss bildet Gal Vihara: vier gewaltige Figuren, direkt aus einer einzigen Granitwand geschlagen — ein sitzender Buddha in Meditation, eine stehende Gestalt mit verschränkten Armen und ein 14 Meter langer liegender Buddha, dessen Stein so fein bearbeitet wurde, dass man noch die Mulde des Kissens unter seinem Kopf erkennt. Ihr Fahrer-Guide erzählt Ihnen von der Herrschaft, die all das errichtete, und warum die Stadt kaum ein Jahrhundert später dem Dschungel überlassen wurde.',
  'exp.polonnaruwa.facts.0': halfDay,
  'exp.polonnaruwa.facts.1': 'Am besten in der Morgenkühle',
  'exp.polonnaruwa.facts.2': 'Tägliche Abfahrten, ganzjährig',
  'exp.polonnaruwa.facts.3': privateGuide,
  'exp.polonnaruwa.facts.4': unesco,
  'exp.polonnaruwa.goodToKnow':
    'Das Gelände ist weitläufig und kaum beschattet — nehmen Sie Hut und Wasser mit. An den Tempelstätten müssen Schultern und Knie bedeckt sein, und am Gal Vihara werden die Schuhe ausgezogen.',

  'exp.minneriya.name': 'Jeep-Safari im Minneriya-Nationalpark',
  'exp.minneriya.location': culturalTriangle,
  'exp.minneriya.summary':
    'Am späten Nachmittag zieht es in der Trockenzeit Hunderte wilder Elefanten auf die Grasflächen eines zurückweichenden Stausees — die größte Ansammlung asiatischer Elefanten weltweit.',
  'exp.minneriya.detail.0':
    'Wenn der Minneriya-Stausee in den trockenen Monaten zurückweicht, hinterlässt er eine Ebene aus frischem Gras — und die Elefanten kommen. Sie treffen über den späten Nachmittag in Familiengruppen ein, bis auf dem Höhepunkt des „Gathering“ zwischen Juli und September dreihundert Tiere oder mehr gleichzeitig am selben Uferabschnitt stehen, Kälber inbegriffen.',
  'exp.minneriya.detail.1':
    'Sie fahren im offenen 4x4 mit einem Fährtenleser hinaus, der weiß, wo die Herden zuletzt gegrast haben. Neben den Elefanten leben hier Sambar- und Axishirsche, Wasserbüffel, Hutaffen, Buntstörche und — für Geduldige — gelegentlich ein Leopard am Waldrand.',
  'exp.minneriya.facts.0': halfDay,
  'exp.minneriya.facts.1': 'Zeit: 15 bis 18 Uhr',
  'exp.minneriya.facts.2': 'Tägliche Abfahrten, ganzjährig',
  'exp.minneriya.facts.3': 'Privater 4x4-Jeep mit Fährtenleser',
  'exp.minneriya.facts.4': 'Parkeintritt und Jeepmiete inbegriffen',
  'exp.minneriya.goodToKnow':
    'Je nachdem, wohin die Herden gezogen sind, fährt Ihr Fährtenleser stattdessen in den benachbarten Kaudulla- oder Hurulu-Eco-Park — die Elefanten wechseln zwischen allen dreien, und wir folgen immer den Tieren.',

  'exp.sigiriya-rock.name': 'Felsenfestung Sigiriya',
  'exp.sigiriya-rock.location': 'Sigiriya',
  'exp.sigiriya-rock.summary':
    'Ein senkrechter Granitstock, der 200 Meter aus flachem Dschungel aufragt, gekrönt von den Ruinen eines Himmelspalasts aus dem 5. Jahrhundert und erschlossen durch eine Treppe zwischen den Pranken eines verschwundenen Steinlöwen.',
  'exp.sigiriya-rock.detail.0':
    'König Kashyapa baute seine Hauptstadt auf einen Felsen, weil er seinen Vater für den Thron ermordet hatte und erwartete, dass sein Bruder ihn holen würde. Geblieben ist eines der frühesten erhaltenen Beispiele landschaftsbezogener Stadtplanung überhaupt: symmetrische Wassergärten am Fuß, darüber Felsengärten und ein Palastkomplex auf einem zwei Hektar großen Gipfel mit Zisternen, die in den gewachsenen Fels geschlagen sind.',
  'exp.sigiriya-rock.detail.1':
    'Der Aufstieg umfasst rund 1.200 Stufen. Auf halber Höhe führt eine Wendeltreppe zu einer geschützten Nische in der Felswand, in der die berühmten Fresken barbusiger Hofdamen seit fünfzehnhundert Jahren ihre Farbe behalten haben. Daran vorbei verläuft die Spiegelwand, einst hochglanzpoliert und heute übersät mit Graffiti von Besuchern seit dem 8. Jahrhundert. Oben öffnet sich das gesamte Kulturelle Dreieck unter Ihnen.',
  'exp.sigiriya-rock.facts.0': halfDay,
  'exp.sigiriya-rock.facts.1': 'Rund 1.200 Stufen bis zum Gipfel',
  'exp.sigiriya-rock.facts.2': daily,
  'exp.sigiriya-rock.facts.3': privateGuide,
  'exp.sigiriya-rock.facts.4': 'Eintritt und Museum vor Ort inbegriffen',
  'exp.sigiriya-rock.goodToKnow':
    'Gehen Sie früh am Morgen oder nach 16 Uhr — der Fels speichert die Hitze, und die Treppen füllen sich um die Mittagszeit. Eine ordentliche Grundfitness ist nötig. Pidurangala, der gegenüberliegende Fels, ist die leichtere Alternative und bietet den klassischen Blick auf Sigiriya selbst.',

  'exp.anuradhapura.name': 'Heilige Stadt Anuradhapura',
  'exp.anuradhapura.location': 'Anuradhapura',
  'exp.anuradhapura.summary':
    'Die erste Hauptstadt der Insel und bis heute lebendiger Pilgerort — Ziegelstupas so groß wie Hügel, Klosterruinen unter Bäumen und ein Feigenbaum, gezogen aus einem Steckling von 288 v. Chr.',
  'exp.anuradhapura.detail.0':
    'Anuradhapura regierte die Insel mehr als tausend Jahre lang, und was erhalten blieb, hat einen Maßstab, dem in Sri Lanka nichts gleichkommt. Abhayagiri und Jetavanaramaya gehörten nach den Pyramiden von Gizeh zu den höchsten Bauwerken der antiken Welt; selbst halb verfallen ragen sie noch über die Baumkronen. Dazwischen liegen Badebecken, Mondsteine, Wächtersteine und die Refektorien von Klöstern, die Tausende Mönche beherbergten.',
  'exp.anuradhapura.detail.1':
    'Das Herzstück ist der Sri Maha Bodhi, gezogen aus einem Steckling des Baumes, unter dem der Buddha saß, hierher gebracht von der Nonne Sanghamitta und 288 v. Chr. gepflanzt. Er ist der älteste von Menschen gepflanzte Baum der Welt mit überliefertem Pflanzdatum — und er wird noch immer gepflegt, geschmückt und jeden Tag des Jahres von weiß gekleideten Pilgern umgeben.',
  'exp.anuradhapura.facts.0': halfDay,
  'exp.anuradhapura.facts.1': daily,
  'exp.anuradhapura.facts.2': privateGuide,
  'exp.anuradhapura.facts.3': unesco,
  'exp.anuradhapura.facts.4': 'Im Ticket für das Kulturelle Dreieck enthalten',
  'exp.anuradhapura.goodToKnow':
    'Dies ist ein aktiver Ort der Andacht, nicht bloß eine Ruine. Weiße oder helle Kleidung, die Schultern und Knie bedeckt, wird erwartet; Schuhe und Hüte kommen am Bodhi-Baum und auf den Stupa-Plattformen ab — das Pflaster wird heiß, Socken lohnen sich.',

  'exp.hot-air-balloon.name': 'Heißluftballonfahrt über das Kulturelle Dreieck',
  'exp.hot-air-balloon.location': 'Sigiriya',
  'exp.hot-air-balloon.summary':
    'Vor Sonnenaufgang abheben und über Reisfelder, Stauseen und Dschungel treiben, während der Sigiriya-Felsen das erste Licht auffängt — Landung mit einem Glas Sekt.',
  'exp.hot-air-balloon.detail.0':
    'Sie werden im Dunkeln abgeholt und zum Startfeld gefahren, um zuzusehen, wie die Hülle sich füllt. Die Fahrt dauert etwa eine Stunde, tief über erwachenden Dörfern, Wasserbüffeln in den Stauseen und dem Blätterdach, während die Felskuppen des Kulturellen Dreiecks bei Sonnenaufgang aus dem Dunst brechen.',
  'exp.hot-air-balloon.detail.1':
    'Wo Sie landen, entscheidet allein der Wind — das gehört zum Reiz. Die Bodenmannschaft folgt Ihnen und wartet bei der Landung mit einem Glas Sekt oder Fruchtsaft und einer Fahrturkunde.',
  'exp.hot-air-balloon.facts.0': 'Dauer: etwa 1½ Stunden in der Luft',
  'exp.hot-air-balloon.facts.1': 'Zeit: 5.30 bis 7 Uhr',
  'exp.hot-air-balloon.facts.2': 'Nur zwischen November und April',
  'exp.hot-air-balloon.facts.3': 'Wetterabhängig — je nach Bedingungen am Morgen',
  'exp.hot-air-balloon.facts.4': 'Zuschlag, vor Ort zahlbar oder in Ihr Angebot aufgenommen',
  'exp.hot-air-balloon.goodToKnow':
    'Nicht geeignet für Kinder unter 16 Jahren, Schwangere oder Personen mit Herzerkrankungen. Bei ungünstigem Wind werden Fahrten abgesagt und erstattet — das kommt vor.',

  'exp.dambulla.name': 'Goldener Höhlentempel von Dambulla',
  'exp.dambulla.location': 'Dambulla',
  'exp.dambulla.summary':
    'Fünf in eine Felsflanke gehauene Höhlen mit 150 Buddha-Statuen, vom Boden bis zur Decke bemalt — die größte und besterhaltene Höhlentempelanlage Sri Lankas.',
  'exp.dambulla.detail.0':
    'Ein kurzer Aufstieg über die Felswand führt zu einer Terrasse und dahinter zu fünf Höhlen, die seit zweiundzwanzig Jahrhunderten ununterbrochen religiös genutzt werden. König Valagamba fand hier im 1. Jahrhundert v. Chr. im Exil Zuflucht und machte die Höhlen zum Tempel, als er sein Reich zurückgewann.',
  'exp.dambulla.detail.1':
    'Im Inneren wölben sich die Felsdecken zu den Wänden hinab, und jede Fläche ist bemalt — wirbelnde Wandbilder aus dem Leben des Buddha, die den natürlichen Konturen des Steins folgen. Insgesamt stehen hier 150 Statuen, darunter ein 14 Meter langer liegender Buddha, direkt aus der Felswand gearbeitet, und eine Quelle, die von der Decke in einen Topf tropft und von der man nie gehört hat, dass sie versiegt wäre.',
  'exp.dambulla.facts.0': 'Dauer: 2 bis 3 Stunden',
  'exp.dambulla.facts.1': 'Rund 350 Stufen hinauf zur Höhlenterrasse',
  'exp.dambulla.facts.2': daily,
  'exp.dambulla.facts.3': privateGuide,
  'exp.dambulla.facts.4': unesco,
  'exp.dambulla.goodToKnow':
    'Schultern und Knie bedeckt, Schuhe aus auf der Terrasse. Das Steinpflaster ist am späten Vormittag heiß — nehmen Sie Socken mit. Die Affen auf der Treppe schnappen sich alles, was lose in der Hand liegt.',

  'exp.spice-garden.name': 'Gewürzgarten in Matale',
  'exp.spice-garden.location': 'Matale',
  'exp.spice-garden.summary':
    'Ein Rundgang durch einen bewirtschafteten Gewürzgarten in den Hügeln über Matale, wo Ceylon-Zimt, Kardamom, Pfeffer und Vanille nebeneinander wachsen — und wo Sie sehen, wie jedes Gewürz aussieht, bevor es ins Glas kommt.',
  'exp.spice-garden.detail.0':
    'Sri Lanka gründete seinen frühen Wohlstand auf Zimt, und Matale ist bis heute dessen Zentrum. Ein Guide führt Sie Pflanze für Pflanze durch den Garten — Pfefferranken an ihren Trägerbäumen, Kardamom tief im Schatten, Muskat, Nelke, Kurkuma, Vanilleorchideen und der Zimt selbst, dessen echte Rinde von Hand geschält und zu den blassen Röllchen gedreht wird, die Ceylon-Zimt von der gröberen Cassia unterscheiden, die anderswo als Zimt verkauft wird.',
  'exp.spice-garden.detail.1':
    'Meist gibt es eine Vorführung des Rindenschälens, eine Tasse Gewürztee und die Gelegenheit zu einer kurzen Kopf-Nacken-Massage mit Kräuterölen. Der Gartenladen verkauft Öle und Balsame; niemand muss etwas kaufen.',
  'exp.spice-garden.facts.0': 'Dauer: etwa 1 Stunde',
  'exp.spice-garden.facts.1': 'An der Straße von Dambulla nach Kandy',
  'exp.spice-garden.facts.2': daily,
  'exp.spice-garden.facts.3': privateGuide,
  'exp.spice-garden.facts.4': 'Gewürztee und Vorführung inklusive',
  'exp.spice-garden.goodToKnow':
    'Diese Gärten betreiben am Ende der Führung einen Laden. Die Preise liegen deutlich über denen eines lokalen Marktes, und nichts ist verpflichtend — schauen Sie sich um oder gehen Sie vorbei.',

  'exp.kandy-temple.name': 'Tempel des Heiligen Zahns',
  'exp.kandy-temple.location': 'Kandy',
  'exp.kandy-temple.summary':
    'Die am meisten verehrte buddhistische Stätte Sri Lankas, in der ein Zahn des Buddha aufbewahrt wird — seit über tausend Jahren ein Symbol der Herrschaft. Am schönsten während der Trommeln der Abend-Puja.',
  'exp.kandy-temple.detail.0':
    'Die Zahnreliquie kam im 4. Jahrhundert nach Sri Lanka, versteckt im Haar einer Prinzessin, und wer sie besaß, galt als rechtmäßiger Herrscher der Insel. Seither wurde um sie gekämpft, sie wurde verlegt, versteckt und in Prozessionen gezeigt; heute ruht sie in einem goldenen Schrein im Palastbezirk der letzten Könige von Kandy am See.',
  'exp.kandy-temple.detail.1':
    'Planen Sie Ihren Besuch zu einer der drei täglichen Pujas, wenn kandyanische Trommler und Hornbläser vor der inneren Kammer einsetzen und die Türen geöffnet werden, damit die Schlange der Pilger — Lotusblüten in den Händen — am Schrein vorbeiziehen kann. Den Zahn selbst sehen Sie nicht, er verlässt sein Reliquiar nur in Ausnahmejahren, aber es geht um die Atmosphäre.',
  'exp.kandy-temple.facts.0': 'Dauer: etwa 2 Stunden',
  'exp.kandy-temple.facts.1': 'Die Abend-Puja beginnt üblicherweise um 18.30 Uhr',
  'exp.kandy-temple.facts.2': daily,
  'exp.kandy-temple.facts.3': privateGuide,
  'exp.kandy-temple.facts.4': unesco,
  'exp.kandy-temple.goodToKnow':
    'Strenge Kleiderordnung: weiße oder helle Kleidung, Schultern und Knie bedeckt, Schuhe am Eingang ausziehen und dort lassen. Am Tor wird kontrolliert — reisen Sie mit leichtem Gepäck an.',

  'exp.kandyan-dance.name': 'Kandyanische Tanzvorführung',
  'exp.kandyan-dance.location': 'Kandy',
  'exp.kandyan-dance.summary':
    'Eine Stunde Trommeln, Maskentanz und Feuerlauf in der Hochlandhauptstadt — die rituellen Tanzformen des Königreichs Kandy, allabendlich im Stadtzentrum aufgeführt.',
  'exp.kandyan-dance.detail.0':
    'Die kandyanischen Tanztraditionen entstanden aus dem Tempelritual, und die Abendvorstellung geht die Hauptformen der Reihe nach durch: die Ves-Tänzer mit ihrem silbernen Kopfschmuck, Pfauen- und Erntetänze, das akrobatische Raban-Tellerdrehen und das maskierte Kolam.',
  'exp.kandyan-dance.detail.1':
    'Zum Abschluss geht es hinaus in den Hof zu Feuertanz und Feuerlauf — die Darsteller queren barfuß ein Bett aus glühenden Kohlen. Es ist unverhohlen eine Show für Besucher, und zugleich die einfachste Möglichkeit, diese Tänze außerhalb der Esala Perahera im August überhaupt zu sehen.',
  'exp.kandyan-dance.facts.0': 'Dauer: etwa 1 Stunde',
  'exp.kandyan-dance.facts.1': 'Zeit: Vorstellungsbeginn um 17 Uhr',
  'exp.kandyan-dance.facts.2': 'Täglich, in der Stadt Kandy',
  'exp.kandyan-dance.facts.3': 'Zuschlag fällt an',
  'exp.kandyan-dance.facts.4': 'Freie Platzwahl — früh kommen für die vorderen Reihen',
  'exp.kandyan-dance.goodToKnow':
    'Der Feuerlauf findet am Ende draußen statt, das Publikum wechselt also den Ort. Der Saal wird warm und ist nicht klimatisiert.',

  'exp.botanical-garden.name': 'Königlicher Botanischer Garten Peradeniya',
  'exp.botanical-garden.location': 'Kandy',
  'exp.botanical-garden.summary':
    'Sechzig Hektar in einer Schleife des Mahaweli, einst als königlicher Lustgarten angelegt, heute mit viertausend Arten, einer Allee aus Königspalmen und einer Java-Feige mit einer Krone so groß wie ein Tennisplatz.',
  'exp.botanical-garden.detail.0':
    'Dies waren die Gärten des kandyanischen Königshauses, lange bevor die Briten sie 1821 formalisierten, und sie sind bis heute die schönsten Südasiens. Die Höhepunkte lohnen den Weg: der große Rasen mit seiner riesigen Java-Feige, die doppelte Königspalmenallee, die Hängebrücke über den Fluss und das Orchideenhaus, in dem jederzeit mehrere Hundert Sorten blühen.',
  'exp.botanical-garden.detail.1':
    'Die Abteilungen für Gewürze und Heilpflanzen knüpfen an alles an, was Sie in Matale gesehen haben, und die Gedenkbäume — über zwei Jahrhunderte von besuchenden Staatsoberhäuptern gepflanzt — sind ein stilles Archiv der diplomatischen Geschichte der Insel.',
  'exp.botanical-garden.facts.0': 'Dauer: 2 bis 3 Stunden',
  'exp.botanical-garden.facts.1': '5 km westlich der Stadt Kandy',
  'exp.botanical-garden.facts.2': 'Tägliche Abfahrten, geöffnet 7.30 bis 17 Uhr',
  'exp.botanical-garden.facts.3': privateGuide,
  'exp.botanical-garden.facts.4': 'Eintritt inbegriffen',
  'exp.botanical-garden.goodToKnow':
    'Es ist viel Gehen auf offener Rasenfläche. Morgens ist es kühler, und das Orchideenhaus ist ruhiger, bevor die Busgruppen eintreffen. In den hohen Bäumen am Fluss schlafen Flughunde — schauen Sie nach oben.',

  'exp.kandy-city.name': 'Stadtrundfahrt Kandy',
  'exp.kandy-city.location': 'Kandy',
  'exp.kandy-city.summary':
    'Die Hochlandhauptstadt in ihrem eigenen Tempo: der See, die Markthalle, eine Edelsteinwerkstatt und der Aussichtspunkt über der Stadt, von dem sich in der Dämmerung der ganze Talkessel von Kandy öffnet.',
  'exp.kandy-city.detail.0':
    'Kandy hielt sich drei Jahrhunderte lang gegen die europäischen Mächte, nachdem die Küste längst gefallen war, und wirkt bis heute wie ein eigenes Land — kühler, grüner, stolzer. Die Tour umfasst den künstlichen See des letzten Königs, die Markthallen aus der Kolonialzeit mit ihren Obst- und Gewürzständen und die Werkstätten, in denen sri-lankische Saphire und Mondsteine geschliffen werden.',
  'exp.kandy-city.detail.1':
    'Zum Abschluss geht es zum Aussichtspunkt Bahirawakanda oder zu Arthur’s Seat, wo die Stadt in ihrem Hügelkranz liegt, Tempeldächer und See darunter — das beste Foto des Tages, und am besten am späten Nachmittag aufgenommen.',
  'exp.kandy-city.facts.0': halfDay,
  'exp.kandy-city.facts.1': daily,
  'exp.kandy-city.facts.2': privateGuide,
  'exp.kandy-city.facts.3': 'Besuch von Edelsteinmuseum und Markt inbegriffen',
  'exp.kandy-city.facts.4': 'Ideal in Verbindung mit der Abend-Puja im Tempel',
  'exp.kandy-city.goodToKnow':
    'Kandys Einbahnstraßensystem ist zur Stoßzeit zäh. Edelstein- und Batikwerkstätten arbeiten auf Provision — betrachten Sie sie als Vorführungen und kaufen Sie nur, wenn Sie möchten.',

  'exp.tea-factory.name': 'Besuch einer Teefabrik und Plantage',
  'exp.tea-factory.location': hillCountry,
  'exp.tea-factory.summary':
    'Folgen Sie dem Blatt vom Hang bis in die Tasse, in einer arbeitenden Hochlandfabrik — Welkböden, Rollmaschinen, Trocknungsöfen und eine Verkostung jener Sorten, die nie exportiert werden.',
  'exp.tea-factory.detail.0':
    'Die Straße hinauf ins Teeland führt durch Terrassen aus beschnittenen grünen Sträuchern, Pflückerinnen arbeiten in den Reihen, und irgendwo darüber steht der Fabrikschornstein. Die meisten dieser Gebäude sind viktorianisch, und die Maschinen sind kaum jünger — der Prozess hat sich kaum verändert.',
  'exp.tea-factory.detail.1':
    'Sie gehen ihn der Reihe nach durch: die Welktröge, in denen das Blatt über Nacht Feuchtigkeit verliert, die Rollen, die die Zellen aufbrechen, die Oxidationsbetten, in denen das Blatt von Grün zu Kupfer wechselt, die Trocknungsöfen und schließlich die Siebe, die die Grade trennen. Am Ende steht eine Verkostung und die Möglichkeit, die Einzelgarten-Sorten zu kaufen, die meist auf der Insel bleiben.',
  'exp.tea-factory.facts.0': 'Dauer: 1 bis 2 Stunden',
  'exp.tea-factory.facts.1': 'Tägliche Abfahrten, Montag bis Samstag',
  'exp.tea-factory.facts.2': privateGuide,
  'exp.tea-factory.facts.3': 'Fabrikführung und Verkostung inbegriffen',
  'exp.tea-factory.facts.4': 'Arbeitende Fabrik — die Produktion folgt der Pflücksaison',
  'exp.tea-factory.goodToKnow':
    'An Sonntagen und Poya-Tagen (Vollmond) wird nicht produziert, die Maschinen können also stillstehen. In einigen Hallen ist das Fotografieren eingeschränkt.',

  'exp.nuwara-eliya-city.name': 'Stadtrundfahrt Nuwara Eliya',
  'exp.nuwara-eliya-city.location': 'Nuwara Eliya',
  'exp.nuwara-eliya-city.summary':
    'Sri Lankas unwahrscheinliche Bergstation — Tudor-Imitat-Bungalows, eine Pferderennbahn, ein Kolonialpostamt und ein Bootssee, alles auf 1.900 Metern mitten in den Tropen.',
  'exp.nuwara-eliya-city.detail.0':
    'Die Briten bauten Nuwara Eliya so, dass es sich wie zuhause anfühlte, und hörten damit nie ganz auf: Es gibt einen Victoria Park, einen Golfplatz, einen Hill Club mit Kleiderordnung und ein Postamt aus rotem Backstein mit Uhrturm, das auch in Surrey stehen könnte. Die Einheimischen nennen es liebevoll Little England.',
  'exp.nuwara-eliya-city.detail.1':
    'Der Vormittag umfasst den Gregory-See, den blühenden Park, die alten Bungalows der Stadt und den Markt, mit einem Halt für Tee und Scones, wenn Sie den vollen Effekt wollen. Auf dieser Höhe ist die Luft nach Einbruch der Dunkelheit wirklich kalt — eine Überraschung, wenn man von der Küste heraufkommt.',
  'exp.nuwara-eliya-city.facts.0': halfDay,
  'exp.nuwara-eliya-city.facts.1': 'Höhe: 1.868 Meter',
  'exp.nuwara-eliya-city.facts.2': daily,
  'exp.nuwara-eliya-city.facts.3': privateGuide,
  'exp.nuwara-eliya-city.facts.4': 'Eintritt Victoria Park und Gregory-See inbegriffen',
  'exp.nuwara-eliya-city.goodToKnow':
    'Packen Sie ein Fleece oder eine Jacke ein — abends fallen die Temperaturen auf etwa 10 °C, und die meisten Hotels hier haben keine Klimaanlage, weil keine nötig ist.',

  'exp.sita-amman.name': 'Seetha-Amman-Tempel',
  'exp.sita-amman.location': 'Nuwara Eliya',
  'exp.sita-amman.summary':
    'Ein bunt bemalter Hindutempel an einem Bergbach, der als jener Ort gilt, an dem Sita im Ramayana von Ravana gefangen gehalten wurde — mit fußabdruckförmigen Mulden im Fels als Beweis.',
  'exp.sita-amman.detail.0':
    'Der Tempel liegt in Seetha Eliya, im Kiefernwald wenige Kilometer außerhalb von Nuwara Eliya, und ist eine der wichtigsten Stationen des Ramayana-Pfads, der indische Pilger nach Sri Lanka führt. Das Gopuram ist mit dem üblichen Gedränge bemalter Figuren bedeckt; im Inneren stehen Schreine für Sita, Rama, Lakshmana und Hanuman.',
  'exp.sita-amman.detail.1':
    'Im Felsbett des Baches gegenüber finden sich runde Vertiefungen, die Gläubige als Hanumans Fußabdrücke deuten, und der Boden an diesem Ufer hat eine andere Farbe als der Rest — versengt, so die Erzählung, als er den Ort in Brand setzte. Ob man es glaubt oder nicht: Es ist ein wunderschöner Fleck, kühl und grün, mit dem Wasser mittendurch.',
  'exp.sita-amman.facts.0': 'Dauer: etwa 45 Minuten',
  'exp.sita-amman.facts.1': 'An der Straße von Nuwara Eliya nach Ella',
  'exp.sita-amman.facts.2': daily,
  'exp.sita-amman.facts.3': privateGuide,
  'exp.sita-amman.facts.4': 'Ein kurzer, einfacher Halt — kein Aufstieg',
  'exp.sita-amman.goodToKnow':
    'Am Eingang werden die Schuhe ausgezogen, und statt eines Tickets gibt es eine Spendenbox. Angemessene Kleidung wird erwartet.',

  'exp.hill-train.name': 'Panoramazug durchs Hochland',
  'exp.hill-train.location': hillCountry,
  'exp.hill-train.summary':
    'Die Strecke Nanu Oya–Ella gilt regelmäßig als eine der großen Bahnfahrten der Welt — drei bis vier Stunden durch Teeterrassen, Tunnel und Nebelwald, bei weit offenen Türen.',
  'exp.hill-train.detail.0':
    'Die Gleise wurden für den Teetransport gelegt, und sie nehmen den landschaftlich schönen Weg, weil dort die Plantagen liegen. Sie steigen von Nanu Oya über Haputale und Bandarawela auf, die Wagen legen sich in die Kurven über Täler aus geschnittenem Grün, mit Wasserfällen, Eukalyptus und hin und wieder einem Bahnhof, an dem nicht viel passiert.',
  'exp.hill-train.detail.1':
    'Die Hälfte des Vergnügens ist der Wagen selbst: Fenster herunter, Türen offen, Tee und Vadai werden durch den Gang verkauft. Ihr Fahrer erwartet Sie am Zielbahnhof mit dem Gepäck — Sie reisen nur mit einer Kamera.',
  'exp.hill-train.facts.0': 'Dauer: 3 bis 4 Stunden im Zug',
  'exp.hill-train.facts.1': 'Nanu Oya–Ella oder Ella–Haputale für eine kürzere Fahrt',
  'exp.hill-train.facts.2': 'Sitzplatzreservierung nach Verfügbarkeit',
  'exp.hill-train.facts.3': 'Zuschlag fällt an',
  'exp.hill-train.facts.4': 'Fahrzeug und Gepäck erwarten Sie am Zielort',
  'exp.hill-train.goodToKnow':
    'Reservierte Plätze der ersten und zweiten Klasse sind Wochen im Voraus ausverkauft, besonders von Dezember bis März — sagen Sie uns früh Bescheid, dann buchen wir sie mit Ihrer Reise.',

  'exp.ella-city.name': 'Ella und die Nine Arch Bridge',
  'exp.ella-city.location': 'Ella',
  'exp.ella-city.summary':
    'Ein Bergstädtchen, das zum liebsten Ort der Insel geworden ist, um nichts zu tun — dazu die Nine Arch Bridge, ein Viadukt aus der Kolonialzeit, das sich auf neun Steinbögen aus dem Dschungel schwingt.',
  'exp.ella-city.detail.0':
    'Ella ist eine einzige Straße aus Cafés und Gästehäusern in einer Kerbe zwischen zwei Bergen, und alle halten hier wegen des Blicks durch die Ella Gap, der an klaren Morgen bis in die Ebenen des Südens reicht.',
  'exp.ella-city.detail.1':
    'Zur Nine Arch Bridge führt ein kurzer Weg durch Teegärten und Dschungel. 1921 ohne ein einziges Stück Stahl gebaut — der Krieg habe allen Stahl verschlungen, heißt es —, spannt sie sich auf neun Ziegel- und Steinbögen über eine Schlucht, beidseits rückt der Wald heran. Fragen Sie Ihren Guide nach dem Fahrplan und stehen Sie dort, wenn ein Zug kommt.',
  'exp.ella-city.facts.0': halfDay,
  'exp.ella-city.facts.1': 'Kurzer Weg durch Teegärten zur Brücke',
  'exp.ella-city.facts.2': daily,
  'exp.ella-city.facts.3': privateGuide,
  'exp.ella-city.facts.4': 'Ravana-Wasserfälle und Aussichtspunkte an der Ella Gap inbegriffen',
  'exp.ella-city.goodToKnow':
    'Der Weg zur Brücke führt über unebenen Boden und stellenweise entlang einer befahrenen Bahnstrecke — festes Schuhwerk, und halten Sie sich an die Anweisungen des Guides, wenn ein Zug erwartet wird.',

  'exp.little-adams.name': 'Wanderung auf den Little Adam’s Peak',
  'exp.little-adams.location': 'Ella',
  'exp.little-adams.summary':
    'Ein gemächlicher 45-Minuten-Aufstieg durch Teeplantagen zu einem Grat mit 360-Grad-Blick über die Ella Gap — der schönste Sonnenaufgang des Hochlands bei geringstem Aufwand.',
  'exp.little-adams.detail.0':
    'Anders als sein großer Namensvetter verlangt der Little Adam’s Peak wenig: ein Pfad durch Teesträucher, ein paar Stufen kurz vor dem Gipfel und dann ein grasiger Grat auf 1.141 Metern, an dem das Land nach drei Seiten abfällt.',
  'exp.little-adams.detail.1':
    'Gehen Sie im ersten Licht. Das Tal darunter füllt sich mit Nebel, gegenüber steht der Ella Rock, und die Sonne geht über den Ebenen auf. An den meisten Morgen teilen Sie ihn mit einer Handvoll Menschen und sehr viel Vogelgesang.',
  'exp.little-adams.facts.0': 'Dauer: etwa 2 Stunden hin und zurück',
  'exp.little-adams.facts.1': 'Am schönsten zum Sonnenaufgang, ab etwa 5.30 Uhr',
  'exp.little-adams.facts.2': 'Mittel — rund 200 Höhenmeter',
  'exp.little-adams.facts.3': 'Auf eigene Faust oder auf Wunsch mit lokalem Wanderführer',
  'exp.little-adams.facts.4': 'Kein Eintritt',
  'exp.little-adams.goodToKnow':
    'Der Pfad besteht aus Lehm und wird nach Regen rutschig. Turnschuhe reichen bei trockenem Wetter; das letzte Stück sind Stufen.',

  'exp.ravana-falls.name': 'Ravana-Wasserfälle',
  'exp.ravana-falls.location': 'Ella',
  'exp.ravana-falls.summary':
    'Eine 25 Meter hohe Kaskade, die stufenweise über eine Felswand stürzt, direkt an der Straße Ella–Wellawaya, am eindrucksvollsten in den Monaten nach dem Monsun.',
  'exp.ravana-falls.detail.0':
    'Die Fälle tragen ihren Namen nach dem Ramayana — in der Höhle dahinter soll König Ravana Sita versteckt haben — und sie tauchen auf der Abfahrt aus Ella ohne Vorwarnung auf: Die Straße macht eine Kurve, und die ganze Kaskade steht einfach vor Ihnen.',
  'exp.ravana-falls.detail.1':
    'Das Wasser fällt stufenweise durch Dschungel und Felsblöcke in ein Becken am Fuß. Auf Straßenhöhe gibt es eine Aussichtsplattform, mit Stufen hinunter zum Becken für alle, die näher heran möchten, und Ständen mit Königskokosnüssen und Früchten.',
  'exp.ravana-falls.facts.0': 'Dauer: etwa 30 Minuten',
  'exp.ravana-falls.facts.1': 'Halt am Straßenrand, 6 km von Ella',
  'exp.ravana-falls.facts.2': 'Am wasserreichsten von November bis Februar',
  'exp.ravana-falls.facts.3': privateGuide,
  'exp.ravana-falls.facts.4': 'Kein Eintritt',
  'exp.ravana-falls.goodToKnow':
    'Die Felsen rund um das Becken sind glitschig und die Strömung stärker, als sie aussieht — hier ertrinken Menschen. Bewundern Sie die Fälle von der Plattform aus, statt zu schwimmen.',

  'exp.kataragama.name': 'Kataragama und Kiri Vehera',
  'exp.kataragama.location': 'Kataragama',
  'exp.kataragama.summary':
    'Einer der wenigen Orte der Welt, der Buddhisten, Hindus und Muslimen gleichermaßen heilig ist — ein Abend aus Trommeln, Öllampen und Opfergaben am Schrein des Gottes Kataragama, neben einem strahlend weißen Stupa.',
  'exp.kataragama.detail.0':
    'Kataragama ist seit zweitausend Jahren Pilgerort und gehört allen: Buddhisten kommen zum Kiri-Vehera-Stupa, Hindus zum Maha-Devale-Schrein für Murugan, Muslime zur Moschee im selben Bezirk, und Vedda-Älteste haben beim jährlichen Fest bis heute eine Rolle.',
  'exp.kataragama.detail.1':
    'Kommen Sie zur Abend-Puja. Pilger überqueren den Menik Ganga, um sich vor dem Eintritt zu waschen, und tragen dann Tabletts mit Früchten und Blumen durch den sandigen Bezirk, begleitet von Trommeln, während mit der Dunkelheit die Öllampen aufleuchten. Nebenan glüht der Kiri-Vehera-Stupa — der Überlieferung nach im 2. Jahrhundert v. Chr. errichtet — weiß über den Bäumen.',
  'exp.kataragama.facts.0': 'Dauer: 2 bis 3 Stunden',
  'exp.kataragama.facts.1': 'Abend-Puja gegen 18.30 Uhr',
  'exp.kataragama.facts.2': 'Täglich, an der Straße zwischen Ella und Yala',
  'exp.kataragama.facts.3': privateGuide,
  'exp.kataragama.facts.4': 'Kein Eintritt — Opfergaben am Tor erhältlich',
  'exp.kataragama.goodToKnow':
    'Die Schuhe kommen weit vor dem Schrein aus, und der Sand bleibt bis in den Abend warm. Kleiden Sie sich zurückhaltend in Weiß oder hellen Farben. Dies ist ein aktiver Pilgerort — seien Sie mit der Kamera diskret.',

  'exp.yala-safari.name': 'Jeep-Safari im Yala-Nationalpark',
  'exp.yala-safari.location': 'Yala',
  'exp.yala-safari.summary':
    'Sri Lankas wichtigstes Schutzgebiet beherbergt eine der dichtesten Leopardenpopulationen der Welt, dazu Lippenbären, Elefanten und Krokodile — und es ist die einzige Safari der Insel, die am Meer endet.',
  'exp.yala-safari.detail.0':
    'Block 1 von Yala ist, gemessen an der Dichte, die Leopardenhauptstadt der Welt, und die Katzen hier sind Fahrzeugen gegenüber ungewöhnlich entspannt — deshalb sind die Sichtungen weit besser, als die Zahlen allein vermuten ließen. Neben Leoparden leben hier Lippenbären — die besten Chancen im Juni und Juli, wenn die Palu-Früchte reifen —, Elefanten, Wasserbüffel, Axishirsche, Sumpfkrokodile in den Wasserlöchern und über zweihundert Vogelarten.',
  'exp.yala-safari.detail.1':
    'Sie fahren in einem privaten offenen 4x4 mit Fährtenleser hinaus, im ersten Licht, wenn die Tiere noch unterwegs sind. Die Landschaft ist die halbe Freude: Buschdschungel, der sich zu Lagunen öffnet, Monsunwald, Granitkuppen und der Indische Ozean, der bei Patanangala an einem leeren Strand bricht.',
  'exp.yala-safari.facts.0': 'Dauer: ganzer Tag oder halber Tag zur Dämmerung',
  'exp.yala-safari.facts.1': 'Zeit: ab 5.30 Uhr oder 14 bis 18 Uhr',
  'exp.yala-safari.facts.2': 'Tägliche Abfahrten — Park jeden September wegen Trockenheit geschlossen',
  'exp.yala-safari.facts.3': 'Privater 4x4-Jeep mit Fährtenleser',
  'exp.yala-safari.facts.4': 'Parkeintritt, Jeep und Fährtenleser inbegriffen',
  'exp.yala-safari.goodToKnow':
    'Der Park ist staubig und die Pisten sind rau. Nehmen Sie Tuch, Sonnenbrille und Fernglas mit und starten Sie wenn möglich im Morgengrauen — das Licht ist besser und die Tiere sind vor der Hitze aktiver.',

  'exp.galle-fort.name': 'Fort Galle',
  'exp.galle-fort.location': 'Galle',
  'exp.galle-fort.summary':
    'Eine ummauerte niederländische Handelsstadt auf einer Landzunge im Indischen Ozean, noch immer bewohnt und in einer Stunde zu umrunden — Wälle aus Korallenstein, ein Leuchtturm und Straßen voller Kolonnadenvillen, heute mit Galerien und Cafés.',
  'exp.galle-fort.detail.0':
    'Die Portugiesen befestigten die Landzunge, die Niederländer bauten sie 1663 gründlich neu, und die Briten zogen einfach ein. Was blieb, ist die besterhaltene von Europäern errichtete Festungsanlage Asiens und — ungewöhnlich — ein lebendiges Viertel statt eines Museums: Hinter diesen Türen wohnen Menschen.',
  'exp.galle-fort.detail.1':
    'Gehen Sie zuerst die Wälle ab, einmal ganz herum, den Ozean auf drei Seiten. Dann hinein ins Straßenraster: die niederländische reformierte Kirche mit ihrem Grabplattenboden, die Meeran-Jumma-Moschee gegenüber dem Leuchtturm, das Schifffahrtsmuseum in einem alten Lagerhaus und die schattigen Straßen Pedlar’s und Church, wo aus alten Kaufmannshäusern Boutiquen, Buchläden und Cafés geworden sind.',
  'exp.galle-fort.facts.0': halfDay,
  'exp.galle-fort.facts.1': 'Täglich — die Wälle am schönsten bei Sonnenuntergang',
  'exp.galle-fort.facts.2': privateGuide,
  'exp.galle-fort.facts.3': 'UNESCO-Welterbe — kein Eintritt in das Fort',
  'exp.galle-fort.facts.4': 'Rundgang auf flachen, gepflasterten Straßen',
  'exp.galle-fort.goodToKnow':
    'Innerhalb der Mauern gibt es mittags kaum Schatten. Später Nachmittag bis Sonnenuntergang auf den Wällen ist die richtige Zeit.',

  'exp.madu-river.name': 'Bootssafari auf dem Madu',
  'exp.madu-river.location': 'Balapitiya',
  'exp.madu-river.summary':
    'Ein Feuchtgebiet mit 64 Inseln und dichten Mangroventunneln hinter der Küste, mit dem Motorboot erkundet — Zimt-Kleinbetriebe, ein Inseltempel, Warane und Eisvögel.',
  'exp.madu-river.detail.0':
    'Das Mündungsgebiet des Madu Ganga ist ein geschütztes Ramsar-Feuchtgebiet und einer der letzten unberührten Mangrovenwälder Sri Lankas. Das Boot bringt Sie über die offene Lagune und schiebt sich dann in Kanäle, die so eng sind, dass sich die Mangrovenwurzeln über Ihnen schließen und der Motor abgestellt werden muss.',
  'exp.madu-river.detail.1':
    'Zu den Stopps gehören meist Kothduwa, eine kleine bewaldete Insel mit buddhistischem Tempel, und eine familiengeführte Zimtparzelle, wo man Ihnen zeigt, wie die Rinde von Hand geschält und gerollt wird. Achten Sie auf die Äste: Bindenwarane, Eisvögel, Kormorane und am frühen Morgen Makakentrupps.',
  'exp.madu-river.facts.0': 'Dauer: etwa 2 Stunden',
  'exp.madu-river.facts.1': 'Abfahrt in Balapitiya, 20 Minuten von Bentota',
  'exp.madu-river.facts.2': 'Tägliche Abfahrten — morgens am ruhigsten',
  'exp.madu-river.facts.3': 'Privates Boot',
  'exp.madu-river.facts.4': 'Bootsmiete und Inselstopps inbegriffen',
  'exp.madu-river.goodToKnow':
    'Manche Anbieter betreiben „Fish-Therapy“-Becken und halten Tiere für Fotos gefangen. Unserer tut das nicht, und wir bitten Sie, jene nicht zu unterstützen, die es tun.',

  'exp.turtle-hatchery.name': 'Schildkrötenaufzuchtstation Kosgoda',
  'exp.turtle-hatchery.location': 'Kosgoda',
  'exp.turtle-hatchery.summary':
    'Eine Schutzstation am Strand, in der von Wilderern zurückgekaufte Eier wieder eingegraben, bewacht und die Jungtiere nach Einbruch der Dunkelheit ins Meer entlassen werden.',
  'exp.turtle-hatchery.detail.0':
    'Fünf der sieben Meeresschildkrötenarten der Welt nisten an diesem Küstenabschnitt, und alle fünf sind bedroht. Die Stationen in Kosgoda kaufen Gelege von Menschen, die die Eier sonst verkaufen würden, graben sie in geschütztem Sand wieder ein und entlassen die Jungtiere in der Dämmerung, wenn die Möwen fort sind.',
  'exp.turtle-hatchery.detail.1':
    'Ein Guide führt Sie zu den Becken, in denen verletzte und albinotische Alttiere leben, die ausgewildert nicht überleben würden, und erklärt den Lebenszyklus und die Gefahren. Sind Sie abends zur richtigen Stunde da, können Sie vielleicht eine Freilassung miterleben.',
  'exp.turtle-hatchery.facts.0': 'Dauer: etwa 45 Minuten',
  'exp.turtle-hatchery.facts.1': 'Am besten am späten Nachmittag, zur abendlichen Freilassung',
  'exp.turtle-hatchery.facts.2': daily,
  'exp.turtle-hatchery.facts.3': privateGuide,
  'exp.turtle-hatchery.facts.4': 'Eintrittsspende inbegriffen',
  'exp.turtle-hatchery.goodToKnow':
    'Das Anfassen der Jungtiere bedeutet Stress für sie, und wir raten davon ab, was auch immer angeboten wird. Eine gute Station lässt die Tiere binnen Tagen nach dem Schlupf frei, statt sie für Fotos in Becken zu halten.',

  'exp.stilt-fishermen.name': 'Stelzenfischer von Koggala',
  'exp.stilt-fishermen.location': 'Koggala',
  'exp.stilt-fishermen.summary':
    'Das meistfotografierte Bild Sri Lankas — Fischer auf Querstangen, die in den Meeresboden getrieben wurden, bei der Arbeit im Flachwasser in Morgen- und Abenddämmerung.',
  'exp.stilt-fishermen.detail.0':
    'Das Stelzenfischen entstand im Zweiten Weltkrieg, als Nahrung knapp und die guten Felsplätze vergeben waren; Männer trieben Stangen in das Riffdach und fischten über dem Wasser. Der Tsunami 2004 riss die meisten Stelzen fort und einen Großteil der Fänge, und heute spielen viele der Männer, die Sie sehen, ebenso sehr eine Rolle, wie sie fischen.',
  'exp.stilt-fishermen.detail.1':
    'Das macht den Anblick zur richtigen Stunde nicht weniger sehenswert — tiefe Sonne, Silhouetten auf dem Wasser, dahinter die Südküste. Ihr Guide findet einen Abschnitt, an dem noch wirklich gefischt wird, und vereinbart vorab ein Entgelt, wenn Sie aus der Nähe fotografieren möchten.',
  'exp.stilt-fishermen.facts.0': 'Dauer: etwa 1 Stunde',
  'exp.stilt-fishermen.facts.1': 'Morgendämmerung oder die Stunde vor Sonnenuntergang',
  'exp.stilt-fishermen.facts.2': 'Entlang der Küste von Koggala nach Weligama',
  'exp.stilt-fishermen.facts.3': privateGuide,
  'exp.stilt-fishermen.facts.4': 'Fotogebühr vor Ort zahlbar',
  'exp.stilt-fishermen.goodToKnow':
    'Vereinbaren Sie das Entgelt, bevor Sie fotografieren, nicht danach. Bitten Sie Ihren Fahrer-Guide, das zu regeln — er kennt den üblichen Satz.',

  'exp.bentota-watersports.name': 'Wassersport in Bentota',
  'exp.bentota-watersports.location': 'Bentota',
  'exp.bentota-watersports.summary':
    'Das ruhige Wasser dort, wo der Bentota-Fluss auf das Meer trifft, macht diesen Ort zum Wassersportzentrum der Insel — Jetskis, Bananenboote, Windsurfen, Tauchen und Hochseeangeln.',
  'exp.bentota-watersports.detail.0':
    'Die Sandnehrung von Bentota schützt einen langen Abschnitt flachen Wassers, weshalb hier offenbar jeder Wassersport der Insel betrieben wird. Jetskis, Reifen- und Bananenboote laufen auf der Flussseite; Windsurfen und Kitesurfen funktionieren besser vorn am Meer, wenn am Nachmittag die Brise auffrischt.',
  'exp.bentota-watersports.detail.1':
    'Von November bis April ist das Meer klar genug zum Tauchen, mit Wracks und Riff vor Beruwala, und vom selben Strand starten Hochseeangel-Charter. Alles lässt sich am Tag selbst über Ihr Hotel organisieren.',
  'exp.bentota-watersports.facts.0': 'Tauchen von November bis April möglich',
  'exp.bentota-watersports.facts.1': 'Flussaktivitäten ganzjährig',
  'exp.bentota-watersports.facts.2': 'Vor Ort buchbar, stunden- oder einheitenweise',
  'exp.bentota-watersports.facts.3': 'Zuschlag, vor Ort zahlbar',
  'exp.bentota-watersports.facts.4': 'Ausrüstung und Einweisung werden gestellt',
  'exp.bentota-watersports.goodToKnow':
    'Prüfen Sie, ob der Anbieter Schwimmwesten stellt und ob Ihre Reiseversicherung motorisierten Wassersport abdeckt — nicht alle Policen tun das.',

  'exp.colombo-city.name': 'Stadtrundfahrt Colombo',
  'exp.colombo-city.location': 'Colombo',
  'exp.colombo-city.summary':
    'Die Wirtschaftsmetropole in einem halben Tag — der Pettah-Basar, eine rot-weiß gestreifte Moschee, das koloniale Fort-Viertel, der Gangaramaya-Tempel und Sonnenuntergang auf Galle Face Green.',
  'exp.colombo-city.detail.0':
    'Colombo ist keine Stadt, die sich ankündigt — genau deshalb lohnt sich hier ein Guide. Sie beginnen in Pettah, dem alten Basarviertel, wo ganze Straßen nur eine Ware führen — Eisenwaren, Textilien, Trockenfisch — und die Rote Moschee in bonbongestreiftem Backstein darüber aufragt.',
  'exp.colombo-city.detail.1':
    'Weiter geht es: das koloniale Fort-Viertel und das Old Dutch Hospital, heute ein Restauranthof; der Gangaramaya-Tempel mit seinem außergewöhnlichen Schatz gestifteter Objekte; der Independence Square; und die baumbestandenen Alleen von Cinnamon Gardens. Zum Abschluss Galle Face Green bei Sonnenuntergang, mit Drachenverkäufern, Isso-Vadai-Karren und halb Colombo beim Spaziergang.',
  'exp.colombo-city.facts.0': halfDay,
  'exp.colombo-city.facts.1': daily,
  'exp.colombo-city.facts.2': privateGuide,
  'exp.colombo-city.facts.3': 'Tempeleintritt inbegriffen',
  'exp.colombo-city.facts.4': 'Einkaufsstopps auf Wunsch',
  'exp.colombo-city.goodToKnow':
    'Der Verkehr ist zwischen 8 und 10 Uhr sowie 16 und 19 Uhr dicht, die Route ist entsprechend gelegt. Pettah ist sonntags und an Poya-Tagen geschlossen.',

  'exp.negombo-lagoon.name': 'Lagune und Fischmarkt von Negombo',
  'exp.negombo-lagoon.location': 'Negombo',
  'exp.negombo-lagoon.summary':
    'Eine katholische Fischerstadt zwanzig Minuten vom Flughafen — niederländische Kanäle, Auslegerboote, die im Morgengrauen einlaufen, und der größte Fischmarkt der Westküste.',
  'exp.negombo-lagoon.detail.0':
    'Negombo ist seit Jahrhunderten Fischerei- und Zimthafen und bis heute überwiegend katholisch — deshalb steht am Ende fast jeder Straße eine Kirche, und auf den Bugen der Boote stehen Heiligennamen.',
  'exp.negombo-lagoon.detail.1':
    'Der Lellama-Fischmarkt ist das Sehenswerte, und er findet früh statt: Auslegerkanus, die unter Segeln einlaufen, der Fang auf dem Sand ausgebreitet, Thun- und Königsmakrelen in der Menge versteigert, und weiter unten am Strand Gestelle mit trocknendem Fisch. Der niederländische Kanal durch die Stadt bildet den stillen Gegenpol, und die Lagune dahinter ist voller Garnelen- und Krabbenfischer an ihren Stellnetzen.',
  'exp.negombo-lagoon.facts.0': 'Dauer: 2 bis 3 Stunden',
  'exp.negombo-lagoon.facts.1': 'Der Markt ist von 6 bis 8 Uhr am besten',
  'exp.negombo-lagoon.facts.2': 'Täglich außer sonntags',
  'exp.negombo-lagoon.facts.3': privateGuide,
  'exp.negombo-lagoon.facts.4': '20 Minuten vom Bandaranaike International Airport',
  'exp.negombo-lagoon.goodToKnow':
    'Der Markt ist nass, voll und geruchsintensiv — nicht für jeden, und geschlossene Schuhe sind sinnvoll. Die Bootsfahrt auf der Lagune ist die sanftere Alternative.',

  'exp.kitulgala.name': 'Kitulgala und das Kelani-Tal',
  'exp.kitulgala.location': 'Kitulgala',
  'exp.kitulgala.summary':
    'Die Regenwaldschlucht, in der „Die Brücke am Kwai“ gedreht wurde, und das beste Wildwasser-Rafting Sri Lankas — fünf Kilometer Stromschnellen der Stufen 2 und 3 durch den Dschungel.',
  'exp.kitulgala.detail.0':
    'Der Kelani fließt hier schnell und grün durch eine Schlucht aus Feuchtzonen-Regenwald, und der Abstieg vom Hochland zur Küste führt mitten hindurch. David Lean sprengte 1957 auf diesem Flussabschnitt seine Brücke; die Betonfundamente liegen noch im Flussbett, und ein Guide führt Sie hinunter.',
  'exp.kitulgala.detail.1':
    'Für die meisten ist das Rafting der Reiz: rund fünf Kilometer und sieben benannte Stromschnellen der Stufen 2 bis 3, für Einsteiger mit einem Guide im Boot gut zu bewältigen. Wenn Sie lieber trocken bleiben: derselbe Wald ist eines der besten Vogelbeobachtungsgebiete der Feuchtzone, mit einer langen Liste endemischer Arten.',
  'exp.kitulgala.facts.0': 'Dauer: die Raftingtour dauert etwa 2 Stunden',
  'exp.kitulgala.facts.1': 'An der Straße von Nuwara Eliya nach Colombo',
  'exp.kitulgala.facts.2': 'Rafting ganzjährig, am besten Mai bis Dezember',
  'exp.kitulgala.facts.3': 'Helme, Schwimmwesten und Guides werden gestellt',
  'exp.kitulgala.facts.4': 'Rafting ist ein lokaler Zuschlag — der Halt selbst ist inbegriffen',
  'exp.kitulgala.goodToKnow':
    'Sie werden nass bis auf die Haut — packen Sie trockene Wechselkleidung griffbereit ein. Das Mindestalter fürs Rafting liegt meist bei 10 Jahren, und Sie sollten schwimmen können.',

  /* ---------------- Hotels ---------------- */
  'hotel.Aliya Resort & Spa.description':
    'Flach gebaute Villen um einen Infinity-Pool, der den Sigiriya-Felsen einrahmt — der Blick vom Wasser aus ist der Grund, hier zu wohnen.',
  'hotel.Cinnamon Lodge Habarana.description':
    'Elf Hektar tierreiche Gärten und Chalets am See, mitten im Kulturellen Dreieck.',
  'hotel.Hotel Kandalama.description':
    'Geoffrey Bawas Meisterwerk, in eine Klippe über einem Stausee gebaut und heute so überwuchert, dass der Dschungel es fast verschluckt hat.',
  'hotel.Earl’s Regency.description':
    'Ein Hotel im Kolonialstil im Mahaweli-Tal außerhalb der Stadt, mit Hügelblick von der Poolterrasse und einem guten Spa.',
  'hotel.Cinnamon Citadel.description':
    'Zimmer am Ufer des Mahaweli, zehn Minuten vom Zahntempel entfernt und nachts ruhig.',
  'hotel.The Grand Kandyan.description':
    'Das größte Hotel der Hochlandhauptstadt, zu Fuß erreichbar von See und Tempel.',
  'hotel.The Tea Experience.description':
    'Ein kleines Estate-Hotel tief in einem bewirtschafteten Teetal außerhalb von Nuwara Eliya — die stille, nebelverhangene Variante des Hochlands.',
  'hotel.The Golden Ridge.description':
    'Auf dem Kamm über der Stadt, mit weitem Blick über das Tal und gutem Zugang zum Gregory-See.',
  'hotel.Horton Heights.description':
    'Eine komfortable Basis am Hang, nahe Rennbahn und Golfplatz, praktisch für Aufbrüche zu den Horton Plains.',
  'hotel.Newburgh Tea Factory.description':
    'Eine umgebaute Teefabrik auf einem bewirtschafteten Gut, die Originalmaschinen erhalten und Talblick aus jedem Zimmer.',
  'hotel.EKHO Ella.description':
    'Direkt an der Kante der Ella Gap gelegen, mit dem besten Sonnenaufgangsbalkon des Ortes.',
  'hotel.Onrock Ella.description':
    'Ein zeitgenössisches Hanghotel mit Infinity-Pool, der geradewegs durch die Gap auf die Ebenen blickt.',
  'hotel.Yala Safari Hotel.description':
    'Eine unkomplizierte, gut geführte Basis wenige Minuten vom Parktor — frühe Starts sind von hier aus leicht.',
  'hotel.Shangri-La Hambantota.description':
    'Ein komplettes Resort am eigenen Strand mit Golfplatz, eine Stunde vom Park und das komfortable Ende der Safari.',
  'hotel.Cinnamon Wild Yala.description':
    'Chalets in der Pufferzone, durch die tatsächlich Elefanten und Wildschweine streifen — näher am Park kann man nicht schlafen.',
  'hotel.Sheraton Kosgoda Turtle Beach Resort.description':
    'Ein großes Strandresort an einem Sandabschnitt, an dem Schildkröten nisten, mit mehreren Pools und einem langen Privatstrand.',
  'hotel.Cinnamon Bay.description':
    'Direkt am Strand von Bentota an der Flussmündung, wenige Schritte vom Wassersportzentrum.',
  'hotel.Eden Resort & Spa.description':
    'Ein alteingesessenes Strandhotel mit großem Pool und Ayurveda-Spa, beliebt für längere Strandaufenthalte.',
  'hotel.Jetwing Beach.description':
    'Ein designorientiertes Strandhotel zwanzig Minuten vom Flughafen — die beste erste oder letzte Nacht auf der Insel.',
  'hotel.Gold Sands.description':
    'Eine freundliche, einfachere Option direkt am Strand, nahe Fischmarkt und Stadt.',
  'hotel.Heritance Negombo.description':
    'Ein zeitgenössisches Strandhotel mit Dachpool und Sonnenuntergängen über dem Indischen Ozean.',

  /* ---------------- Packages ---------------- */
  'pkg.grand-tour-of-sri-lanka.name': 'Große Rundreise durch Sri Lanka',
  'pkg.grand-tour-of-sri-lanka.tagline':
    'Der volle Bogen der Insel in zwei unaufgeregten Wochen — alte Hauptstädte, Teeland, Leopardenland und ein langer Strandabschluss.',
  'pkg.grand-tour-of-sri-lanka.badge': 'Empfohlene Route',
  'pkg.grand-tour-of-sri-lanka.cardSummary':
    'Unsere vollständigste Reise. Sechs Standorte, ein Fahrer-Guide und überall genug Zeit, um nicht mehr auf die Uhr zu sehen.',
  'pkg.grand-tour-of-sri-lanka.intro':
    'Dies ist die Route, die wir für Menschen schreiben, die alles richtig sehen wollen. Sie beginnen im Kulturellen Dreieck mit drei Nächten in einem Hotel — genug, um Polonnaruwa, Sigiriya und Anuradhapura in zivilisiertem Tempo zu nehmen, statt zwischen ihnen zu hetzen. Dann steigt die Straße: Kandy für den Zahntempel und den Botanischen Garten, Nuwara Eliya für Tee und kalte Morgen, Ella für die Nine Arch Bridge und den Blick durch die Gap. Von dort fallen Sie in den trockenen Südosten ab, zwei Nächte in Yala, einem der besten Orte der Welt, um einen wilden Leoparden zu sehen, bevor Sie mit drei ganzen Tagen am Strand von Bentota schließen, ohne irgendetwas im Kalender. Vierzehn Nächte, durchgehend ein Fahrzeug und ein Fahrer, und keine Inlandsflüge.',
  'pkg.grand-tour-of-sri-lanka.tourType': 'Empfohlene Route',
  'pkg.grand-tour-of-sri-lanka.bestFor.0': 'Erstbesucher',
  'pkg.grand-tour-of-sri-lanka.bestFor.1': 'Kultur',
  'pkg.grand-tour-of-sri-lanka.bestFor.2': 'Tierwelt & 4x4-Safari',
  'pkg.grand-tour-of-sri-lanka.bestFor.3': 'Teeland',
  'pkg.grand-tour-of-sri-lanka.bestFor.4': 'Strandabschluss',
  'pkg.grand-tour-of-sri-lanka.bestFor.5': 'Flitterwochen',
  'pkg.grand-tour-of-sri-lanka.priceBasis': perPerson,
  'pkg.grand-tour-of-sri-lanka.period': period,
  'pkg.grand-tour-of-sri-lanka.visiting.0': culturalTriangle,
  'pkg.grand-tour-of-sri-lanka.extensionPrice': roomNight(200),
  'pkg.grand-tour-of-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.grand-tour-of-sri-lanka.ext.0.description':
    'Drei Strandtage vergehen schnell. Hängen Sie zusätzliche Nächte im Sheraton Kosgoda Turtle Beach Resort — oder im Cinnamon Bay oder Eden Resort — auf derselben Halbpensionsbasis an und behalten Sie dasselbe Zimmer, statt umzuziehen.',
  'pkg.grand-tour-of-sri-lanka.ext.0.price': roomNight(200),
  'pkg.grand-tour-of-sri-lanka.ext.1.title': 'Option 2: Die Malediven',
  'pkg.grand-tour-of-sri-lanka.ext.1.description':
    'Colombo–Malé ist ein Neunzig-Minuten-Sprung, was die Malediven zur natürlichen zweiten Hälfte einer Sri-Lanka-Reise macht. Wir kombinieren Ihr Inselresort mit der Rundreise und übernehmen Anschlussflüge und Transfers als eine Buchung.',
  'pkg.grand-tour-of-sri-lanka.ext.1.price': onRequest,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.intro':
    'Sie landen am Bandaranaike International Airport, und Ihr Fahrer-Guide bringt Sie ins Landesinnere — rund vier Stunden nach Sigiriya, mit dem Nachmittag frei zum Schwimmen und Ankommen. Die nächsten beiden Tage zeigen das Kulturelle Dreieck von seiner besten Seite, und dass Sie alle drei Nächte im selben Hotel bleiben, macht es möglich. Tag zwei ist Polonnaruwa in der Morgenkühle, dann nachmittags eine Jeep-Safari in Minneriya, wo die Elefanten zum zurückweichenden Stausee herunterkommen. An Tag drei besteigen Sie im ersten Licht den Sigiriya-Felsen und verbringen den Nachmittag zwischen den Stupas und Klosterruinen von Anuradhapura, der ersten Hauptstadt der Insel und bis heute ein sehr lebendiger Pilgerort.',
  'pkg.grand-tour-of-sri-lanka.stop.kandy.intro':
    'Die Fahrt südwärts nach Kandy ist schön, und sie bringt zwei Stopps mit: den Höhlentempel von Dambulla, fünf bemalte Höhlen voller Buddha-Statuen in einer Felswand, und einen Gewürzgarten in Matale, wo Zimt, Kardamom und Pfeffer auf derselben Parzelle wachsen. Sie erreichen Kandy rechtzeitig zur Abend-Puja im Tempel des Heiligen Zahns, wenn die Trommler einsetzen und die Schlange der Pilger am Schrein vorbeizieht. Der folgende Tag gehört ganz der Hochlandhauptstadt — vormittags der Königliche Botanische Garten in Peradeniya, nachmittags der See, der Markt und der Aussichtspunkt über der Stadt.',
  'pkg.grand-tour-of-sri-lanka.stop.nuwara-eliya.intro':
    'Hinter Kandy beginnt die Straße zu steigen und hört nicht mehr auf, hinauf durch terrassierte Teegärten auf 1.900 Meter. Sie unterbrechen die Fahrt in einer arbeitenden Teefabrik, um dem Blatt von den Welkböden bis zum Verkostungstisch zu folgen, und erreichen Nuwara Eliya mit freiem Nachmittag. Es ist ein seltsamer und ziemlich wunderbarer Ort — eine viktorianische Bergstation mit Rennbahn, Backsteinpostamt und Golfplatz, von den Briten gebaut, damit es sich wie zuhause anfühlt, und nach Einbruch der Dunkelheit tatsächlich kalt. Der nächste Vormittag gehört der Stadt: Gregory-See, Victoria Park, die alten Bungalows. Der Nachmittag gehört Ihnen.',
  'pkg.grand-tour-of-sri-lanka.stop.ella.intro':
    'Eine kurze Fahrt hinüber nach Ella, mit Halt am Seetha-Amman-Tempel in Seetha Eliya — ein bunt bemalter Hindu-Schrein an einem kalten Bergbach, an dem Sita im Ramayana gefangen gehalten worden sein soll. Ella selbst ist eine Straße voller Cafés in einer Kerbe zwischen zwei Bergen, und der Grund herzukommen ist der Blick durch die Ella Gap, der an klaren Morgen bis in die Ebenen des Südens reicht. Ihr voller Tag hier umfasst den Ort und die Nine Arch Bridge, ein Viadukt von 1921, das sich auf neun Steinbögen ohne ein Gramm Stahl aus dem Dschungel schwingt. Mit der richtigen Zeitwahl fährt ein Zug darüber, während Sie dort stehen.',
  'pkg.grand-tour-of-sri-lanka.stop.yala.intro':
    'Der Abstieg aus den Bergen ist dramatisch — Sie verlieren in wenigen Stunden zweitausend Höhenmeter, und die Landschaft wechselt von Tee zu trockenem Buschland. Unterwegs tauchen die Ravana-Wasserfälle am Straßenrand auf, und der Nachmittag bringt Sie nach Kataragama zur Abend-Puja, in eine Pilgerstadt, die Buddhisten, Hindus und Muslimen gleichermaßen heilig ist und in der Trommeln und Öllampen bis weit in die Nacht weitergehen, während der weiße Kiri-Vehera-Stupa über den Bäumen leuchtet. Der nächste Morgen beginnt vor Sonnenaufgang mit einer Jeep-Safari im Yala-Nationalpark, der eine der weltweit dichtesten Leopardenpopulationen beherbergt, dazu Lippenbären, Elefanten und einen leeren Strand, wo das Buschland auf den Indischen Ozean trifft. Der Nachmittag ist frei.',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.subLabel': '(über Galle)',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.intro':
    'Sie folgen der Südküste nach Westen, und der letzte Besichtigungstag der Reise ist einer der besten. Vormittags Fort Galle: eine ummauerte niederländische Handelsstadt auf einer Landzunge, Wälle auf drei Seiten, bewohnt statt konserviert. Dann eine Bootssafari auf dem Madu Ganga, hinein in Mangroventunnel, die so eng sind, dass der Motor abgestellt werden muss, und ein Halt an der Schildkrötenstation Kosgoda, bevor Sie Bentota erreichen. Die verbleibenden zwei Tage sind vollständig frei auf Halbpensionsbasis. Schwimmen, schlafen, lesen, das Wassersportzentrum an der Flussmündung nutzen — oder gar nichts tun; nach elf Tagen unterwegs wählen die meisten das Nichts.',
  'pkg.grand-tour-of-sri-lanka.stop.departure.location': departure,
  'pkg.grand-tour-of-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.grand-tour-of-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.ancient-cities-and-golden-sands.name': 'Alte Städte & goldener Sand',
  'pkg.ancient-cities-and-golden-sands.tagline':
    'Felsenfestungen, Elefantenland und der Zahntempel — und dann direkt an die Küste für den Rest der Woche.',
  'pkg.ancient-cities-and-golden-sands.badge': 'Mehrere Stationen',
  'pkg.ancient-cities-and-golden-sands.cardSummary':
    'Das Kulturelle Dreieck und Kandy in aller Tiefe, dann zwei Tage Nichtstun an der Westküste. Erst Kultur, dann Strand, beides ohne Hetze.',
  'pkg.ancient-cities-and-golden-sands.intro':
    'Manche Reisen versuchen, die ganze Insel in einer Woche abzudecken, und niemand hat Freude daran. Diese macht das Gegenteil: Sie gibt fünf ihrer sieben Nächte den beiden Orten, die Ihre Zeit am meisten verdienen — und setzt Sie dann an einen Strand. Drei Nächte im Kulturellen Dreieck sind genau das, was Polonnaruwa, Sigiriya, Minneriya und Anuradhapura brauchen, ohne jeden Morgen zu packen. Zwei Nächte in Kandy decken den Tempel des Heiligen Zahns, den Botanischen Garten in Peradeniya und die Stadt selbst ab. Dann wechseln Sie nach Bentota und bleiben. Ideal für Reisende mit knapper Zeit, die lieber weniger richtig sehen, und für Familien, deren Woche mit einem Pool enden muss.',
  'pkg.ancient-cities-and-golden-sands.tourType': 'Mehrere Stationen',
  'pkg.ancient-cities-and-golden-sands.bestFor.0': 'Kurzreisen',
  'pkg.ancient-cities-and-golden-sands.bestFor.1': 'Kultur',
  'pkg.ancient-cities-and-golden-sands.bestFor.2': 'Familien',
  'pkg.ancient-cities-and-golden-sands.bestFor.3': 'Tierwelt',
  'pkg.ancient-cities-and-golden-sands.bestFor.4': 'Strandabschluss',
  'pkg.ancient-cities-and-golden-sands.priceBasis': perPerson,
  'pkg.ancient-cities-and-golden-sands.period': period,
  'pkg.ancient-cities-and-golden-sands.visiting.0': culturalTriangle,
  'pkg.ancient-cities-and-golden-sands.extensionPrice': roomNight(170),
  'pkg.ancient-cities-and-golden-sands.ext.0.title': moreBentotaTitle,
  'pkg.ancient-cities-and-golden-sands.ext.0.description':
    'Zwei Strandtage reichen kaum zum Auspacken. Verlängern Sie Ihren Aufenthalt im Sheraton Kosgoda Turtle Beach Resort, im Cinnamon Bay oder im Eden Resort & Spa auf derselben Halbpensionsbasis.',
  'pkg.ancient-cities-and-golden-sands.ext.0.price': roomNight(170),
  'pkg.ancient-cities-and-golden-sands.ext.1.title': 'Option 2: Yala ergänzen',
  'pkg.ancient-cities-and-golden-sands.ext.1.description':
    'Zwei Nächte in Yala auf dem Weg zur Küste machen daraus zusätzlich eine Tierreise — eine ganztägige Jeep-Safari im besten Leopardenpark der Insel, dazu Kataragama und die Ravana-Wasserfälle unterwegs.',
  'pkg.ancient-cities-and-golden-sands.ext.1.price': onRequest,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.intro':
    'Ihr Fahrer-Guide empfängt Sie am Bandaranaike International Airport und fährt Sie ins Landesinnere nach Sigiriya, rund vier Stunden, der Rest des ersten Tages bleibt frei zum Schwimmen und Ausschlafen. Tag zwei ist vormittags Polonnaruwa — die besterhaltene der Ruinenhauptstädte und die einzige, die man wirklich zu Fuß erschließt — gefolgt von einer Jeep-Safari am Nachmittag in Minneriya, wo sich die Elefanten in großer Zahl auf dem Gras des zurückweichenden Stausees sammeln. An Tag drei geht es früh zum Sigiriya-Felsen selbst, 1.200 Stufen zu einem Palast des 5. Jahrhunderts auf einem Granitgipfel, und danach hinüber nach Anuradhapura zu Stupas so groß wie Hügel und dem ältesten gepflanzten Baum der Erde.',
  'pkg.ancient-cities-and-golden-sands.stop.kandy.intro':
    'Die Straße südwärts nach Kandy hat zwei Stopps eingebaut — den Höhlentempel von Dambulla mit 150 Buddha-Statuen und bemalten Decken in einer Felswand, und einen Gewürzgarten in Matale, wo Sie sehen, wie Zimt und Kardamom aussehen, bevor sie ins Glas kommen. In Kandy treffen Sie zur Abend-Puja im Tempel des Heiligen Zahns ein. Der folgende Tag gehört der Hochlandhauptstadt: vormittags der Königliche Botanische Garten in Peradeniya, dann der See, die Markthalle und der Aussichtspunkt über der Stadt, am besten am späten Nachmittag, wenn das Licht über den Tempeldächern golden wird.',
  'pkg.ancient-cities-and-golden-sands.stop.bentota.intro':
    'Sie kommen aus den Bergen an die Westküste, und damit endet das Fahren. Beide verbleibenden Tage sind vollständig frei auf Halbpensionsbasis in Bentota, wo der Fluss auf das Meer trifft und das Wasser flach genug für jeden Wassersport der Insel ist. In Reichweite liegt genug, falls Sie möchten — Fort Galle eine Stunde südlich, die Madu-Ganga-Mangroven zwanzig Minuten entfernt, die Schildkrötenstation Kosgoda noch näher — und Ihr Fahrer-Guide bringt Sie überall hin. Oder Sie bleiben genau da, wo Sie sind; dafür ist diese Reise eigentlich gemacht.',
  'pkg.ancient-cities-and-golden-sands.stop.departure.location': departure,
  'pkg.ancient-cities-and-golden-sands.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.ancient-cities-and-golden-sands.stop.departure.intro': departureIntro,

  'pkg.classic-sri-lanka.name': 'Klassisches Sri Lanka',
  'pkg.classic-sri-lanka.tagline':
    'Die größten Höhepunkte der Insel in einer einzigen Woche — Höhlentempel, Felsenfestung, Hochlandhauptstadt, Teeland und Strand.',
  'pkg.classic-sri-lanka.cardSummary':
    'Fünf Standorte in acht Tagen, so angeordnet, dass Sie nie zurückfahren. Mehr Strecke lässt sich in einer Woche nicht bewältigen, ohne dass alles verschwimmt.',
  'pkg.classic-sri-lanka.badge': 'Empfohlene Route',
  'pkg.classic-sri-lanka.intro':
    'Eine Woche ist kurz für ein Land mit so viel Inhalt, deshalb ist diese Route so gebaut, dass keine Minute verloren geht. Sie beginnen mit einer Nacht in Negombo, zwanzig Minuten vom Flughafen — keine lange Fahrt nach einem langen Flug. Von dort läuft alles in einer sauberen Linie: das Kulturelle Dreieck für Dambulla, Minneriya, Sigiriya und Anuradhapura; Kandy für den Tempel des Heiligen Zahns; Nuwara Eliya für die Teegärten und die kalte, wunderliche kleine Bergstation darüber. Dann der Abstieg zur Küste durch das Kelani-Tal bei Kitulgala und zum Abschluss zwei volle Tage in Bentota. Es ist der vollständigste erste Blick auf Sri Lanka, der in acht Tage passt.',
  'pkg.classic-sri-lanka.tourType': 'Empfohlene Route',
  'pkg.classic-sri-lanka.bestFor.0': 'Erstbesucher',
  'pkg.classic-sri-lanka.bestFor.1': 'Kurzreisen',
  'pkg.classic-sri-lanka.bestFor.2': 'Kultur',
  'pkg.classic-sri-lanka.bestFor.3': 'Teeland',
  'pkg.classic-sri-lanka.bestFor.4': 'Strandabschluss',
  'pkg.classic-sri-lanka.priceBasis': perPerson,
  'pkg.classic-sri-lanka.period': period,
  'pkg.classic-sri-lanka.visiting.1': culturalTriangle,
  'pkg.classic-sri-lanka.extensionPrice': roomNight(170),
  'pkg.classic-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.classic-sri-lanka.ext.0.description':
    'Hängen Sie Nächte im Sheraton Kosgoda Turtle Beach Resort, im Cinnamon Bay oder im Eden Resort & Spa auf derselben Halbpensionsbasis an und beenden Sie die Woche in Ruhe, statt an Tag sieben zu packen.',
  'pkg.classic-sri-lanka.ext.0.price': roomNight(170),
  'pkg.classic-sri-lanka.ext.1.title': 'Option 2: Ella und Yala ergänzen',
  'pkg.classic-sri-lanka.ext.1.description':
    'Fahren Sie ab Nuwara Eliya weiter nach Osten, statt zur Küste abzubiegen: Ella für die Nine Arch Bridge, dann Yala für eine Leoparden-Safari, und anschließend über Galle an den Strand.',
  'pkg.classic-sri-lanka.ext.1.price': onRequest,
  'pkg.classic-sri-lanka.stop.negombo.intro':
    'Statt Sie nach einem langen Flug sofort ins Landesinnere zu schicken, beginnt diese Reise zwanzig Minuten vom Terminal in Negombo — einer katholischen Fischerstadt mit niederländischen Kanälen, Auslegerbooten und einer Kirche am Ende jeder Straße. Ihr Fahrer-Guide empfängt Sie in der Ankunft und bringt Sie binnen einer halben Stunde ins Hotel. Der Rest des Tages ist frei: schlafen, schwimmen oder den Strand hinauf zum Lellama-Fischmarkt gehen, den man am nächsten Morgen früh sehen sollte, wenn der Jetlag Sie ohnehin weckt.',
  'pkg.classic-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.classic-sri-lanka.stop.cultural-triangle.intro':
    'Sie fahren ins Landesinnere und unterbrechen am Höhlentempel von Dambulla: fünf in eine Felswand geschlagene Höhlen, 150 Buddha-Statuen und Decken, die bis zum Boden bemalt sind. Der Nachmittag gehört einer Jeep-Safari in Minneriya, wo wilde Elefanten am späten Nachmittag zum Grasen auf die Flächen des trockenfallenden Stausees kommen. Am folgenden Morgen steht der Sigiriya-Felsen an — 1.200 Stufen vorbei an fünfzehnhundert Jahre alten Fresken zu einem Gipfelpalast — und der Nachmittag bringt Sie nach Anuradhapura, der ersten Hauptstadt, wo gewaltige Ziegelstupas noch über die Baumlinie ragen und Pilger einen 288 v. Chr. gepflanzten Feigenbaum pflegen.',
  'pkg.classic-sri-lanka.stop.kandy.intro':
    'Der Vormittag gehört den Gewürzgärten von Matale, einem bewirtschafteten Grundstück, auf dem Zimt von Hand geschält und gerollt wird, Kardamom im Schatten wächst und Pfefferranken an ihren Trägerbäumen hochklettern. Dann weiter nach Kandy, dem letzten Königreich, das einer europäischen Macht anheimfiel, und bis heute dem kulturellen Herz der Insel. Sie treffen zur Abend-Puja im Tempel des Heiligen Zahns ein, wenn die kandyanischen Trommler vor der inneren Kammer einsetzen und sich die Türen für die Schlange der Pilger öffnen, die Lotusblüten am goldenen Schrein vorbeitragen.',
  'pkg.classic-sri-lanka.stop.nuwara-eliya.intro':
    'Die Straße aus Kandy steigt drei Stunden lang durch Teeterrassen, und auf halbem Weg halten Sie in einer arbeitenden Hochlandfabrik, um dem Blatt von den Welktrögen über Rollen und Trocknungsöfen bis zum Verkostungstisch zu folgen. Am Nachmittag erreichen Sie Nuwara Eliya — 1.900 Meter hoch, Tudor-Imitat-Bungalows, eine Rennbahn und ein Backsteinpostamt, so durch und durch viktorianisch, dass alle es Little England nennen. Der Rest des Tages ist frei, und der Abend ist wirklich kalt, was nach einer Woche in den Tropen ein Schock ist, den man erlebt haben sollte.',
  'pkg.classic-sri-lanka.stop.bentota.subLabel': '(über Kitulgala)',
  'pkg.classic-sri-lanka.stop.bentota.intro':
    'Der Abstieg zur Küste führt durch Kitulgala, wo der Kelani eine Schlucht durch Feuchtzonen-Regenwald schneidet und David Lean 1957 seine Brücke für „Die Brücke am Kwai“ sprengte. Es ist das beste Wildwasser-Rafting des Landes, wenn Sie mögen, und einer der besten Vogelbeobachtungsabschnitte der Feuchtzone, wenn nicht. Am Nachmittag sind Sie am Strand von Bentota, und der letzte volle Tag ist vollständig frei auf Halbpensionsbasis — die Flussmündung hier ist flach genug für jeden Wassersport der Insel, oder Sie bewegen sich einfach nicht.',
  'pkg.classic-sri-lanka.stop.departure.location': departure,
  'pkg.classic-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.classic-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.beach-safari-and-tea-country.name': 'Strand, Safari & Teeland',
  'pkg.beach-safari-and-tea-country.tagline':
    'Ausnahmsweise der Strand zuerst — drei Tage im Sand, dann landeinwärts zu Leoparden, Wasserfällen und dem Hochland in umgekehrter Richtung.',
  'pkg.beach-safari-and-tea-country.badge': 'Mehrere Stationen',
  'pkg.beach-safari-and-tea-country.cardSummary':
    'Führt gegen den Uhrzeigersinn um die Insel: Küste, Safari, Hochland, Kandy, Colombo. Sie erholen sich vom Flug, bevor Sie irgendetwas besichtigen.',
  'pkg.beach-safari-and-tea-country.intro':
    'Fast jede Sri-Lanka-Route hebt sich den Strand für das Ende auf. Diese stellt ihn an den Anfang, und das ist eine bessere Idee, als es klingt: Sie landen, fahren anderthalb Stunden nach Bentota und haben drei Tage, um sich vom Flug zu erholen, bevor irgendeine Besichtigung beginnt. Danach läuft die Route gegen den Uhrzeigersinn um den Süden: Fort Galle und dann Yala für eine Leoparden-Safari, hinauf nach Ella für die Nine Arch Bridge und die Ravana-Wasserfälle, weiter durch das Teeland nach Kandy zum Tempel des Heiligen Zahns und schließlich Colombo und eine letzte Nacht in Negombo am Flughafen. Es ist das preiswerteste der vier Programme und passt zu allen, die den Strand wollen, solange sie noch die Energie haben, ihn zu genießen.',
  'pkg.beach-safari-and-tea-country.tourType': 'Mehrere Stationen',
  'pkg.beach-safari-and-tea-country.bestFor.0': 'Strand zuerst',
  'pkg.beach-safari-and-tea-country.bestFor.1': 'Tierwelt & 4x4-Safari',
  'pkg.beach-safari-and-tea-country.bestFor.2': 'Bestes Preis-Leistungs-Verhältnis',
  'pkg.beach-safari-and-tea-country.bestFor.3': 'Flitterwochen',
  'pkg.beach-safari-and-tea-country.bestFor.4': 'Teeland',
  'pkg.beach-safari-and-tea-country.priceBasis': perPerson,
  'pkg.beach-safari-and-tea-country.period': period,
  'pkg.beach-safari-and-tea-country.extensionPrice': roomNight(125),
  'pkg.beach-safari-and-tea-country.ext.0.title': moreBentotaTitle,
  'pkg.beach-safari-and-tea-country.ext.0.description':
    'Starten Sie noch langsamer. Hängen Sie am Anfang der Reise Nächte im Sheraton Kosgoda Turtle Beach Resort, im Cinnamon Bay oder im Eden Resort & Spa an, auf derselben Halbpensionsbasis.',
  'pkg.beach-safari-and-tea-country.ext.0.price': roomNight(125),
  'pkg.beach-safari-and-tea-country.ext.1.title': 'Option 2: Das Kulturelle Dreieck ergänzen',
  'pkg.beach-safari-and-tea-country.ext.1.description':
    'Diese Route lässt Sigiriya und Polonnaruwa bewusst aus. Ergänzen Sie zwei oder drei Nächte nördlich von Kandy, und Sie nehmen die Felsenfestung, Minneriya und Anuradhapura mit, bevor es zum Flughafen geht.',
  'pkg.beach-safari-and-tea-country.ext.1.price': onRequest,
  'pkg.beach-safari-and-tea-country.stop.bentota.intro':
    'Ihr Fahrer-Guide empfängt Sie am Bandaranaike International Airport und fährt direkt über die Schnellstraße nach Bentota — rund anderthalb Stunden, der kürzeste Transfer all unserer Programme. Dann passiert zwei Tage lang nichts, ganz bewusst. Beide sind vollständig frei auf Halbpensionsbasis, an einem Strand, wo der Bentota-Fluss auf das Meer trifft — der Grund, warum jeder Wassersport der Insel von diesem Wasserabschnitt aus betrieben wird. Colombo ist eine bequeme Fahrt nach Norden, falls Sie einen Tag in der Stadt möchten, und die Madu-Ganga-Mangroven wie auch die Schildkrötenstation Kosgoda liegen ganz in der Nähe — verpflichtet sind Sie zu nichts davon.',
  'pkg.beach-safari-and-tea-country.stop.yala.subLabel': '(über Galle)',
  'pkg.beach-safari-and-tea-country.stop.yala.intro':
    'Sie folgen der Südküste mit einem Halt am Fort Galle — einer ummauerten niederländischen Handelsstadt auf einer Landzunge, Wälle auf drei Seiten, ein lebendiges Viertel statt eines Museums. Die Stelzenfischer arbeiten an diesem Küstenabschnitt, wenn die Stunde passt. Am Nachmittag erreichen Sie Yala für die erste von zwei Nächten, und die Safari selbst führt im privaten offenen 4x4 mit Fährtenleser in den Park mit einer der höchsten Leopardendichten der Welt. Auch Lippenbären, Elefanten, Wasserbüffel und Krokodile leben hier, und die Pisten führen bis hinunter an einen leeren Strand, wo das Buschland auf den Indischen Ozean trifft.',
  'pkg.beach-safari-and-tea-country.stop.ella.intro':
    'Die Straße nordwärts aus der Trockenzone steigt kräftig, und die Ravana-Wasserfälle tauchen auf dem Weg hinauf am Straßenrand auf — fünfundzwanzig Meter Wasser durch Dschungel und Felsblöcke, am mächtigsten in den Monaten nach dem Monsun. Der Rest dieses Tages ist frei in Ella, einer einzigen Straße voller Cafés, eingeklemmt zwischen zwei Bergen, mit einem Blick durch die Gap bis in die Ebenen des Südens. Ihr voller Tag hier umfasst den Ort und die Nine Arch Bridge, ein Viadukt von 1921 ohne Stahl, das sich auf neun Steinbögen aus dem Dschungel schwingt. Stehen Sie an einem der Morgen früh auf für den Little Adam’s Peak — fünfundvierzig Minuten bergauf für den schönsten Sonnenaufgang des Hochlands.',
  'pkg.beach-safari-and-tea-country.stop.kandy.intro':
    'Dies ist der Teetag. Die Straße von Ella nach Kandy zieht sich durch die ganze Länge des Hochlands, vorbei an terrassierten Gütern, und Sie unterbrechen sie in einer arbeitenden Fabrik, um dem Blatt von den Welkböden über Rollen und Trocknungsöfen bis zu einer Verkostung von Sorten zu folgen, die die Insel meist nie verlassen. Sie erreichen Kandy zur Abend-Puja im Tempel des Heiligen Zahns, wo ein Zahn des Buddha seit über tausend Jahren aufbewahrt — und umkämpft — wird und wo die Trommler die innere Kammer noch immer dreimal täglich öffnen.',
  'pkg.beach-safari-and-tea-country.stop.negombo.subLabel': '(über Colombo)',
  'pkg.beach-safari-and-tea-country.stop.negombo.intro':
    'Sie kommen aus den Bergen nach Colombo für eine halbtägige Tour durch die Wirtschaftsmetropole: den Pettah-Basar und seine gestreifte Rote Moschee, das koloniale Fort-Viertel und das Old Dutch Hospital, den Gangaramaya-Tempel und am Ende des Nachmittags Galle Face Green mit den Drachenverkäufern. Dann eine kurze Fahrt die Küste hinauf nach Negombo für Ihre letzte Nacht — eine Fischerstadt zwanzig Minuten vom Terminal, was den nächsten Morgen erheblich entspannter macht als ein Start aus der Stadt.',
  'pkg.beach-safari-and-tea-country.stop.departure.location': departure,
  'pkg.beach-safari-and-tea-country.stop.departure.subLabel': toAirport('Negombo'),
  'pkg.beach-safari-and-tea-country.stop.departure.intro': departureIntro,
};

export default content;
