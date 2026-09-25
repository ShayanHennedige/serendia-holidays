import type { ContentDictionary } from '../tourPackagesI18n';

/* Repeated boilerplate, written once. */
const halfDay = 'Durata: mezza giornata';
const daily = 'Partenze giornaliere';
const privateGuide = 'Esperienza privata con il tuo autista-guida';
const unesco = 'Ingresso al sito patrimonio mondiale UNESCO incluso';
const onRequest = 'Prezzo su richiesta';
const perPerson = 'per 2 persone';
const period = '01 nov – 19 dic 2026 e 11 gen – 30 apr 2027';
const roomNight = (amount: number) => `USD ${amount} a camera per notte`;
const departure = 'Partenza';
const toAirport = (from: string) => `(da ${from} all’aeroporto)`;
const departureIntro =
  'Un’ultima mattinata in riva al mare, poi il tuo autista-guida passa a prenderti per il trasferimento all’aeroporto internazionale di Bandaranaike, calcolato sul tuo volo con un margine comodo per la strada. Se hai una partenza in tarda serata possiamo organizzare una camera per il giorno, un’ultima escursione o una sosta pranzo lungo la strada anziché lasciarti ad aspettare in aeroporto: dicci solo cosa preferisci e lo inseriremo nella giornata.';
const culturalTriangle = 'Triangolo culturale';
const forCulturalTriangle = '(per il Triangolo culturale)';
const moreBentotaTitle = 'Opzione 1: più tempo a Bentota';
const hillCountry = 'Regione collinare';

const content: ContentDictionary = {
  /* ---------------- Experiences ---------------- */
  'exp.polonnaruwa.name': 'Antica città di Polonnaruwa',
  'exp.polonnaruwa.location': culturalTriangle,
  'exp.polonnaruwa.summary':
    'La seconda capitale dello Sri Lanka è la meglio conservata tra le città in rovina dell’isola: un insieme compatto e percorribile a piedi di palazzi reali, vasche per le abluzioni e colossali Buddha scolpiti nella roccia, lasciati dai re del XII secolo.',
  'exp.polonnaruwa.detail.0':
    'Polonnaruwa è l’unica città antica che si legge come una mappa. Dove Anuradhapura si disperde, Polonnaruwa si raccoglie in un unico parco archeologico simile a un giardino che si copre in una mattinata, e quasi tutto è ancora in piedi: il guscio di mattoni del palazzo a sette piani di re Parakramabahu, il Quadrangolo con il suo Vatadage circolare, il santuario di Lankatilaka con le pareti che si alzano per 17 metri ai lati di un Buddha senza testa.',
  'exp.polonnaruwa.detail.1':
    'Il gran finale è Gal Vihara: quattro figure enormi ricavate da un’unica parete di granito — un Buddha seduto in meditazione, una figura in piedi con le braccia conserte e un Buddha sdraiato di 14 metri, la cui pietra è lavorata così finemente che si vede ancora l’incavo del cuscino sotto la testa. Il tuo autista-guida ti racconterà del regno che costruì tutto questo e del perché la città fu abbandonata alla giungla appena un secolo dopo.',
  'exp.polonnaruwa.facts.0': halfDay,
  'exp.polonnaruwa.facts.1': 'Meglio nel fresco del mattino',
  'exp.polonnaruwa.facts.2': 'Partenze giornaliere, tutto l’anno',
  'exp.polonnaruwa.facts.3': privateGuide,
  'exp.polonnaruwa.facts.4': unesco,
  'exp.polonnaruwa.goodToKnow':
    'Il sito è esteso e in gran parte senza ombra: porta cappello e acqua. Spalle e ginocchia vanno coperte nei luoghi di culto e a Gal Vihara ci si toglie le scarpe.',

  'exp.minneriya.name': 'Safari in jeep nel Parco nazionale di Minneriya',
  'exp.minneriya.location': culturalTriangle,
  'exp.minneriya.summary':
    'Nel tardo pomeriggio della stagione secca centinaia di elefanti selvatici scendono sulle praterie di un bacino che si ritira: il più grande raduno di elefanti asiatici al mondo.',
  'exp.minneriya.detail.0':
    'Quando il bacino di Minneriya si ritira nei mesi secchi lascia dietro di sé una piana di erba fresca, e gli elefanti arrivano. Giungono in gruppi familiari nel corso del tardo pomeriggio finché, al culmine del Gathering tra luglio e settembre, trecento animali o più possono trovarsi contemporaneamente sullo stesso tratto di riva, cuccioli compresi.',
  'exp.minneriya.detail.1':
    'Partirai su un 4x4 scoperto con un tracciatore che sa dove i branchi si sono nutriti. Oltre agli elefanti il parco ospita cervi sambar e pomellati, bufali selvatici, macachi dal ciuffo, cicogne dipinte e, per i pazienti, qualche leopardo al limitare degli alberi.',
  'exp.minneriya.facts.0': halfDay,
  'exp.minneriya.facts.1': 'Orario: dalle 15 alle 18',
  'exp.minneriya.facts.2': 'Partenze giornaliere, tutto l’anno',
  'exp.minneriya.facts.3': 'Jeep 4x4 privata con tracciatore',
  'exp.minneriya.facts.4': 'Ingresso al parco e noleggio jeep inclusi',
  'exp.minneriya.goodToKnow':
    'A seconda di dove si siano spostati i branchi, il tracciatore potrà portarti nei vicini parchi di Kaudulla o Hurulu Eco Park: gli elefanti ruotano tra i tre e noi seguiamo sempre gli animali.',

  'exp.sigiriya-rock.name': 'Fortezza sulla rocca di Sigiriya',
  'exp.sigiriya-rock.location': 'Sigiriya',
  'exp.sigiriya-rock.summary':
    'Uno sperone di granito a picco che si alza per 200 metri sulla giungla pianeggiante, coronato dalle rovine di un palazzo del V secolo e raggiunto da una scalinata che passa tra le zampe di un leone di pietra ormai scomparso.',
  'exp.sigiriya-rock.detail.0':
    'Re Kashyapa costruì la sua capitale in cima a una rocca perché aveva ucciso il padre per il trono e si aspettava che il fratello venisse a cercarlo. Ciò che ha lasciato è uno dei primi esempi sopravvissuti di urbanistica paesaggistica al mondo: giardini d’acqua simmetrici alla base, giardini di massi più in alto e un complesso palaziale su una cima di due ettari con cisterne scavate nella roccia viva.',
  'exp.sigiriya-rock.detail.1':
    'La salita conta circa 1.200 gradini. A metà strada una scala a chiocciola porta a una nicchia riparata nella parete dove i celebri affreschi delle dame di corte a seno nudo hanno mantenuto il colore per millecinquecento anni. Oltre corre il Muro a Specchio, un tempo lucidato a specchio e oggi coperto dai graffiti lasciati dai visitatori a partire dall’VIII secolo. In cima, tutto il Triangolo culturale si apre sotto di te.',
  'exp.sigiriya-rock.facts.0': halfDay,
  'exp.sigiriya-rock.facts.1': 'Circa 1.200 gradini fino alla cima',
  'exp.sigiriya-rock.facts.2': daily,
  'exp.sigiriya-rock.facts.3': privateGuide,
  'exp.sigiriya-rock.facts.4': 'Ingresso e museo in loco inclusi',
  'exp.sigiriya-rock.goodToKnow':
    'Vai di prima mattina o dopo le 16: la roccia trattiene il calore e le scalinate si affollano a metà giornata. Serve una discreta forma fisica. Pidurangala, la rocca di fronte, è l’alternativa più facile e regala la vista classica su Sigiriya.',

  'exp.anuradhapura.name': 'Città sacra di Anuradhapura',
  'exp.anuradhapura.location': 'Anuradhapura',
  'exp.anuradhapura.summary':
    'La prima capitale dell’isola, tuttora luogo di pellegrinaggio vivo: stupa di mattoni grandi come colline, rovine di monasteri sotto gli alberi e un fico nato da una talea prelevata nel 288 a.C.',
  'exp.anuradhapura.detail.0':
    'Anuradhapura governò l’isola per più di mille anni, e ciò che sopravvive ha una scala che nulla in Sri Lanka eguaglia. Abhayagiri e Jetavanaramaya erano tra le costruzioni più alte del mondo antico dopo le piramidi di Giza; anche semidistrutte svettano ancora sopra le chiome degli alberi. In mezzo si trovano vasche, pietre di luna, pietre di guardia e i refettori di monasteri che ospitavano migliaia di monaci.',
  'exp.anuradhapura.detail.1':
    'Il cuore di tutto è lo Sri Maha Bodhi, nato da una talea dell’albero sotto cui sedette il Buddha, portata qui dalla monaca Sanghamitta e piantata nel 288 a.C. È l’albero piantato dall’uomo più antico al mondo di cui si conosca la data, ed è ancora curato, ancora ornato di ghirlande, ancora circondato da pellegrini vestiti di bianco ogni giorno dell’anno.',
  'exp.anuradhapura.facts.0': halfDay,
  'exp.anuradhapura.facts.1': daily,
  'exp.anuradhapura.facts.2': privateGuide,
  'exp.anuradhapura.facts.3': unesco,
  'exp.anuradhapura.facts.4': 'Compreso nel biglietto del Triangolo culturale',
  'exp.anuradhapura.goodToKnow':
    'È un luogo di culto attivo, non solo una rovina. Si richiedono abiti bianchi o chiari che coprano spalle e ginocchia; scarpe e cappelli si tolgono davanti all’albero della Bodhi e sulle piattaforme degli stupa — la pavimentazione scotta, quindi vale la pena portare dei calzini.',

  'exp.hot-air-balloon.name': 'Mongolfiera sul Triangolo culturale',
  'exp.hot-air-balloon.location': 'Sigiriya',
  'exp.hot-air-balloon.summary':
    'Decolla prima dell’alba e lasciati portare sopra risaie, bacini e giungla mentre la rocca di Sigiriya cattura la prima luce — all’atterraggio, un calice di spumante.',
  'exp.hot-air-balloon.detail.0':
    'Verrai prelevato al buio e accompagnato al campo di decollo per assistere al gonfiaggio del pallone. Il volo dura circa un’ora, basso sopra i villaggi che si svegliano, i bufali nei bacini e la volta della foresta, con gli speroni rocciosi del Triangolo culturale che bucano la foschia al sorgere del sole.',
  'exp.hot-air-balloon.detail.1':
    'Dove atterrerai dipende interamente dal vento, e fa parte del fascino: la squadra di terra ti segue ed è lì ad aspettarti, con un brindisi allo spumante o al succo di frutta e un attestato di volo.',
  'exp.hot-air-balloon.facts.0': 'Durata: circa 1 ora e mezza in volo',
  'exp.hot-air-balloon.facts.1': 'Orario: dalle 5.30 alle 7',
  'exp.hot-air-balloon.facts.2': 'Attivo solo da novembre ad aprile',
  'exp.hot-air-balloon.facts.3': 'Dipende dal meteo — soggetto alle condizioni del mattino',
  'exp.hot-air-balloon.facts.4': 'Supplemento applicabile, pagabile in loco o aggiunto al preventivo',
  'exp.hot-air-balloon.goodToKnow':
    'Non adatto a bambini sotto i 16 anni, a chi è in gravidanza o a chi soffre di problemi cardiaci. Se il vento non è favorevole i voli vengono annullati e rimborsati, e capita.',

  'exp.dambulla.name': 'Tempio d’oro nelle grotte di Dambulla',
  'exp.dambulla.location': 'Dambulla',
  'exp.dambulla.summary':
    'Cinque grotte scavate nel fianco di una rocca, con 150 statue del Buddha e dipinte dal pavimento al soffitto: il complesso di templi rupestri più grande e meglio conservato dello Sri Lanka.',
  'exp.dambulla.detail.0':
    'Una breve salita lungo la parete porta a una terrazza e, dietro di essa, a cinque grotte in uso religioso ininterrotto da ventidue secoli. Re Valagamba vi si rifugiò in esilio nel I secolo a.C. e trasformò le grotte in tempio quando riconquistò il regno.',
  'exp.dambulla.detail.1':
    'All’interno i soffitti di roccia si incurvano fino a incontrare le pareti e ogni superficie è dipinta: murales vorticosi sulla vita del Buddha che seguono i contorni naturali della pietra. Ci sono 150 statue in tutto, tra cui un Buddha sdraiato di 14 metri scavato nella parete stessa, e una sorgente che gocciola dal soffitto in un recipiente e che non si è mai vista asciutta.',
  'exp.dambulla.facts.0': 'Durata: 2-3 ore',
  'exp.dambulla.facts.1': 'Circa 350 gradini fino alla terrazza delle grotte',
  'exp.dambulla.facts.2': daily,
  'exp.dambulla.facts.3': privateGuide,
  'exp.dambulla.facts.4': unesco,
  'exp.dambulla.goodToKnow':
    'Spalle e ginocchia coperte, scarpe fuori sulla terrazza. La pavimentazione scotta già a metà mattina: porta dei calzini. Le scimmie sulla scalinata prendono qualunque cosa tu tenga in mano.',

  'exp.spice-garden.name': 'Giardino delle spezie di Matale',
  'exp.spice-garden.location': 'Matale',
  'exp.spice-garden.summary':
    'Cammina in un giardino di spezie in attività sulle colline sopra Matale, dove cannella di Ceylon, cardamomo, pepe e vaniglia crescono fianco a fianco — e scopri che aspetto hanno davvero prima di finire in un barattolo.',
  'exp.spice-garden.detail.0':
    'Lo Sri Lanka costruì le sue prime fortune sulla cannella, e Matale ne è ancora il centro. Una guida ti accompagna nel giardino pianta per pianta: viti di pepe che si arrampicano sugli alberi tutori, cardamomo basso all’ombra, noce moscata, chiodi di garofano, curcuma, orchidee di vaniglia e la cannella stessa, la cui corteccia viene sbucciata e arrotolata a mano nelle canne chiare che distinguono la cannella di Ceylon dalla cassia più grossolana venduta altrove come cannella.',
  'exp.spice-garden.detail.1':
    'Di solito c’è una dimostrazione della sbucciatura della corteccia, una tazza di tè speziato e la possibilità di provare un breve massaggio alle spalle e alla testa con oli alle erbe. Il negozio del giardino vende oli e balsami; non c’è alcun obbligo di acquisto.',
  'exp.spice-garden.facts.0': 'Durata: circa 1 ora',
  'exp.spice-garden.facts.1': 'Sulla strada da Dambulla a Kandy',
  'exp.spice-garden.facts.2': daily,
  'exp.spice-garden.facts.3': privateGuide,
  'exp.spice-garden.facts.4': 'Tè speziato e dimostrazione offerti',
  'exp.spice-garden.goodToKnow':
    'Questi giardini hanno un negozio alla fine della visita. I prezzi sono nettamente più alti di un mercato locale e nulla è obbligatorio: guarda, oppure tira dritto.',

  'exp.kandy-temple.name': 'Tempio del Sacro Dente',
  'exp.kandy-temple.location': 'Kandy',
  'exp.kandy-temple.summary':
    'Il luogo buddhista più venerato dello Sri Lanka, che custodisce un dente del Buddha, simbolo di sovranità da oltre mille anni: da vedere durante i tamburi della puja serale.',
  'exp.kandy-temple.detail.0':
    'La reliquia del dente arrivò in Sri Lanka nel IV secolo, nascosta tra i capelli di una principessa, e chi la possedeva era considerato legittimo sovrano dell’isola. Da allora è stata contesa, spostata, nascosta e portata in processione, e oggi riposa in uno scrigno d’oro nel complesso palaziale sul lago degli ultimi re di Kandy.',
  'exp.kandy-temple.detail.1':
    'Programma la visita per una delle tre puja quotidiane, quando i tamburini e i suonatori di corno kandyani attaccano davanti alla camera interna e le porte si aprono perché la fila dei pellegrini — fiori di loto in mano — possa sfilare davanti allo scrigno. Non vedrai il dente, che lascia il reliquiario solo in anni eccezionali, ma è l’atmosfera che conta.',
  'exp.kandy-temple.facts.0': 'Durata: circa 2 ore',
  'exp.kandy-temple.facts.1': 'La puja serale inizia di solito alle 18.30',
  'exp.kandy-temple.facts.2': daily,
  'exp.kandy-temple.facts.3': privateGuide,
  'exp.kandy-temple.facts.4': unesco,
  'exp.kandy-temple.goodToKnow':
    'Codice di abbigliamento rigido: abiti bianchi o chiari, spalle e ginocchia coperte, scarpe tolte e lasciate all’ingresso. Al cancello si passa un controllo di sicurezza, quindi viaggia leggero.',

  'exp.kandyan-dance.name': 'Spettacolo di danza kandyana',
  'exp.kandyan-dance.location': 'Kandy',
  'exp.kandyan-dance.summary':
    'Un’ora di tamburi, danza mascherata e camminata sul fuoco nella capitale collinare: le danze rituali del regno di Kandy, in scena ogni sera in centro.',
  'exp.kandyan-dance.detail.0':
    'Le tradizioni di danza kandyana nascono dal rituale dei templi, e lo spettacolo serale attraversa le forme principali una dopo l’altra: i danzatori Ves con i loro copricapi d’argento, le danze del pavone e del raccolto, l’acrobatico Raban con i piatti roteanti e il Kolam mascherato.',
  'exp.kandyan-dance.detail.1':
    'Si chiude fuori, nel cortile, con la danza del fuoco e la camminata sui carboni ardenti a piedi nudi. È dichiaratamente uno spettacolo per visitatori, ed è anche il modo più semplice per vedere queste danze al di fuori dell’Esala Perahera di agosto.',
  'exp.kandyan-dance.facts.0': 'Durata: circa 1 ora',
  'exp.kandyan-dance.facts.1': 'Orario: spettacoli dalle 17',
  'exp.kandyan-dance.facts.2': 'Tutti i giorni, in città a Kandy',
  'exp.kandyan-dance.facts.3': 'Supplemento applicabile',
  'exp.kandyan-dance.facts.4': 'Posti non numerati: arriva presto per le prime file',
  'exp.kandyan-dance.goodToKnow':
    'La camminata sul fuoco avviene all’aperto alla fine, quindi il pubblico si sposta. La sala si scalda e non è climatizzata.',

  'exp.botanical-garden.name': 'Giardini botanici reali di Peradeniya',
  'exp.botanical-garden.location': 'Kandy',
  'exp.botanical-garden.summary':
    'Sessanta ettari in un’ansa del fiume Mahaweli, nati come giardino di delizie reale e oggi con quattromila specie, un viale di palme reali e un ficus di Giava con una chioma grande quanto un campo da tennis.',
  'exp.botanical-garden.detail.0':
    'Erano i giardini della famiglia reale kandyana molto prima che i britannici li formalizzassero nel 1821, e restano i più belli dell’Asia meridionale. I pezzi forti valgono la camminata: il Grande Prato con il suo enorme ficus di Giava, il doppio viale di palme reali, il ponte sospeso sul fiume e la serra delle orchidee, con diverse centinaia di varietà in fiore in qualsiasi momento.',
  'exp.botanical-garden.detail.1':
    'Le sezioni delle spezie e delle piante medicinali richiamano tutto quello che avrai visto a Matale, e gli alberi commemorativi — piantati da capi di Stato in visita nell’arco di due secoli — sono un archivio silenzioso della storia diplomatica dell’isola.',
  'exp.botanical-garden.facts.0': 'Durata: 2-3 ore',
  'exp.botanical-garden.facts.1': '5 km a ovest della città di Kandy',
  'exp.botanical-garden.facts.2': 'Partenze giornaliere, aperto dalle 7.30 alle 17',
  'exp.botanical-garden.facts.3': privateGuide,
  'exp.botanical-garden.facts.4': 'Ingresso incluso',
  'exp.botanical-garden.goodToKnow':
    'Si cammina molto su prato aperto. Le mattine sono più fresche e la serra delle orchidee è più tranquilla prima dell’arrivo dei gruppi. Le volpi volanti dormono sugli alberi alti vicino al fiume: alza lo sguardo.',

  'exp.kandy-city.name': 'Tour della città di Kandy',
  'exp.kandy-city.location': 'Kandy',
  'exp.kandy-city.summary':
    'La capitale collinare al proprio ritmo: il lago, il mercato coperto, un laboratorio di pietre preziose e il belvedere sopra la città da cui, al tramonto, si apre tutta la conca di Kandy.',
  'exp.kandy-city.detail.0':
    'Kandy resistette alle potenze europee per tre secoli dopo la caduta della costa, e ancora oggi sembra un paese a sé: più fresca, più verde, più fiera. Il tour comprende il lago artificiale voluto dall’ultimo re, il mercato porticato di epoca coloniale con le bancarelle di frutta e spezie, e i laboratori dove si tagliano zaffiri e pietre di luna dello Sri Lanka.',
  'exp.kandy-city.detail.1':
    'Si chiude al belvedere di Bahirawakanda o al punto panoramico di Arthur’s Seat, dove la città sta nel suo anello di colline con i tetti del tempio e il lago in basso: la foto migliore della giornata, e meglio scattarla nel tardo pomeriggio.',
  'exp.kandy-city.facts.0': halfDay,
  'exp.kandy-city.facts.1': daily,
  'exp.kandy-city.facts.2': privateGuide,
  'exp.kandy-city.facts.3': 'Visite al museo delle gemme e al mercato incluse',
  'exp.kandy-city.facts.4': 'Da abbinare alla puja serale al tempio',
  'exp.kandy-city.goodToKnow':
    'Il sistema a senso unico di Kandy è lento nelle ore di punta. I laboratori di gemme e batik lavorano a provvigione: consideratali dimostrazioni e compra solo se ne hai voglia.',

  'exp.tea-factory.name': 'Visita a una fabbrica di tè e alla piantagione',
  'exp.tea-factory.location': hillCountry,
  'exp.tea-factory.summary':
    'Segui la foglia dal versante alla tazza dentro una fabbrica d’alta quota in attività: soppalchi di appassimento, macchine arrotolatrici, forni di essiccazione e una degustazione dei gradi che non vedrai mai esportati.',
  'exp.tea-factory.detail.0':
    'La strada che sale nella regione del tè attraversa terrazze di cespugli verdi potati, con le raccoglitrici al lavoro tra i filari e il camino della fabbrica da qualche parte più in alto. Quasi tutti questi edifici sono vittoriani e i macchinari non sono molto più recenti: il processo non è quasi cambiato.',
  'exp.tea-factory.detail.1':
    'Lo percorrerai nell’ordine: le vasche di appassimento dove la foglia perde umidità durante la notte, i rulli che ne rompono le cellule, i letti di ossidazione dove la foglia passa dal verde al rame, i forni di essiccazione e infine i setacci che separano i gradi. Si chiude con una degustazione e la possibilità di acquistare i gradi di singola tenuta, che per lo più restano sull’isola.',
  'exp.tea-factory.facts.0': 'Durata: 1-2 ore',
  'exp.tea-factory.facts.1': 'Partenze giornaliere, dal lunedì al sabato',
  'exp.tea-factory.facts.2': privateGuide,
  'exp.tea-factory.facts.3': 'Visita alla fabbrica e degustazione incluse',
  'exp.tea-factory.facts.4': 'Fabbrica in attività: la lavorazione segue la stagione di raccolta',
  'exp.tea-factory.goodToKnow':
    'Le fabbriche non lavorano la domenica né nei giorni di poya (luna piena), quindi i macchinari potrebbero essere fermi. In alcuni reparti è vietato fotografare.',

  'exp.nuwara-eliya-city.name': 'Tour della città di Nuwara Eliya',
  'exp.nuwara-eliya-city.location': 'Nuwara Eliya',
  'exp.nuwara-eliya-city.summary':
    'L’improbabile stazione collinare dello Sri Lanka: villette finto-Tudor, un ippodromo, un ufficio postale coloniale e un lago per le barche, tutto a 1.900 metri in piena fascia tropicale.',
  'exp.nuwara-eliya-city.detail.0':
    'I britannici costruirono Nuwara Eliya perché somigliasse a casa e non smisero mai del tutto: c’è un Victoria Park, un campo da golf, un Hill Club con codice di abbigliamento e un ufficio postale in mattoni rossi con torre dell’orologio che non stonerebbe nel Surrey. Gli abitanti la chiamano Piccola Inghilterra, con affetto.',
  'exp.nuwara-eliya-city.detail.1':
    'La mattinata comprende il lago Gregory, il parco in fiore, le vecchie villette della città e il mercato, con una sosta per tè e scone se vuoi l’effetto completo. A questa quota l’aria è davvero fredda dopo il tramonto: una sorpresa se arrivi dalla costa.',
  'exp.nuwara-eliya-city.facts.0': halfDay,
  'exp.nuwara-eliya-city.facts.1': 'Altitudine 1.868 metri',
  'exp.nuwara-eliya-city.facts.2': daily,
  'exp.nuwara-eliya-city.facts.3': privateGuide,
  'exp.nuwara-eliya-city.facts.4': 'Ingressi a Victoria Park e al lago Gregory inclusi',
  'exp.nuwara-eliya-city.goodToKnow':
    'Metti in valigia un pile o una giacca: la sera si scende intorno ai 10 °C e la maggior parte degli hotel non ha aria condizionata perché non serve.',

  'exp.sita-amman.name': 'Tempio di Seetha Amman',
  'exp.sita-amman.location': 'Nuwara Eliya',
  'exp.sita-amman.summary':
    'Un tempio indù dai colori vivaci accanto a un torrente di montagna, ritenuto il luogo in cui Sita fu tenuta prigioniera da Ravana nel Ramayana — con incavi a forma di impronta nella roccia a dimostrarlo.',
  'exp.sita-amman.detail.0':
    'Il tempio si trova a Seetha Eliya, nella pineta a pochi chilometri da Nuwara Eliya, ed è una delle tappe chiave del percorso del Ramayana che porta i pellegrini indiani in Sri Lanka. Il gopuram è ricoperto dalla consueta folla di figure dipinte; all’interno ci sono i santuari di Sita, Rama, Lakshmana e Hanuman.',
  'exp.sita-amman.detail.1':
    'Sulla roccia nel letto del torrente di fronte ci sono depressioni circolari che i devoti identificano come le impronte di Hanuman, e il terreno su quella sponda ha un colore diverso dal resto: bruciato, racconta la storia, quando appiccò il fuoco al luogo. Che ci si creda o no, è un posto incantevole, fresco e verde, con l’acqua che lo attraversa.',
  'exp.sita-amman.facts.0': 'Durata: circa 45 minuti',
  'exp.sita-amman.facts.1': 'Sulla strada da Nuwara Eliya a Ella',
  'exp.sita-amman.facts.2': daily,
  'exp.sita-amman.facts.3': privateGuide,
  'exp.sita-amman.facts.4': 'Sosta breve e facile, senza salite',
  'exp.sita-amman.goodToKnow':
    'Le scarpe si tolgono all’ingresso e c’è una cassetta per le offerte anziché un biglietto. È richiesto un abbigliamento sobrio.',

  'exp.hill-train.name': 'Treno panoramico della regione collinare',
  'exp.hill-train.location': hillCountry,
  'exp.hill-train.summary':
    'La linea Nanu Oya–Ella è regolarmente citata tra i grandi viaggi ferroviari del mondo: tre o quattro ore tra terrazze di tè, gallerie e foresta pluviale, con le porte spalancate.',
  'exp.hill-train.detail.0':
    'I binari furono posati per trasportare il tè, e seguono il percorso panoramico perché è lì che stanno le tenute. Si sale da Nanu Oya attraverso Haputale e Bandarawela, le carrozze che si inclinano nelle curve sopra valli di verde potato, con cascate, eucalipti e ogni tanto una stazione dove non succede granché.',
  'exp.hill-train.detail.1':
    'Metà del piacere è la carrozza stessa: finestrini abbassati, porte aperte, tè e vadai venduti lungo il corridoio. Il tuo autista ti aspetta all’arrivo con i bagagli, così viaggi con nient’altro che una macchina fotografica.',
  'exp.hill-train.facts.0': 'Durata: 3-4 ore di treno',
  'exp.hill-train.facts.1': 'Nanu Oya–Ella, oppure Ella–Haputale per un tratto più breve',
  'exp.hill-train.facts.2': 'Posti riservati soggetti a disponibilità',
  'exp.hill-train.facts.3': 'Supplemento applicabile',
  'exp.hill-train.facts.4': 'Il veicolo e i bagagli ti raggiungono a destinazione',
  'exp.hill-train.goodToKnow':
    'I posti riservati di prima e seconda classe si esauriscono settimane prima, soprattutto da dicembre a marzo: diccelo per tempo e li prenoteremo insieme al tuo itinerario.',

  'exp.ella-city.name': 'Ella e il Nine Arch Bridge',
  'exp.ella-city.location': 'Ella',
  'exp.ella-city.summary':
    'Un paese di collina diventato il luogo preferito dell’isola per non fare nulla, più il Nine Arch Bridge, un viadotto di epoca coloniale che esce dalla giungla su nove campate di pietra.',
  'exp.ella-city.detail.0':
    'Ella è un’unica strada di caffè e guesthouse in una fenditura tra due montagne, e il motivo per cui tutti si fermano qui è la vista giù per l’Ella Gap, che in una mattina limpida arriva fino alle pianure del sud.',
  'exp.ella-city.detail.1':
    'Al Nine Arch Bridge si arriva con una breve camminata tra giardini di tè e giungla. Costruito nel 1921 senza un solo pezzo d’acciaio — si racconta che la guerra avesse preso tutto — attraversa un burrone su nove archi di mattoni e pietra con la foresta che si chiude su entrambi i lati. Controlla gli orari con la guida e sii lì quando passa un treno.',
  'exp.ella-city.facts.0': halfDay,
  'exp.ella-city.facts.1': 'Breve camminata tra i giardini di tè fino al ponte',
  'exp.ella-city.facts.2': daily,
  'exp.ella-city.facts.3': privateGuide,
  'exp.ella-city.facts.4': 'Cascate di Ravana e punti panoramici sull’Ella Gap inclusi',
  'exp.ella-city.goodToKnow':
    'Il sentiero verso il ponte è sconnesso e in alcuni punti corre lungo una linea ferroviaria in esercizio: scarpe adatte, e segui le istruzioni della guida quando è atteso un treno.',

  'exp.little-adams.name': 'Escursione al Little Adam’s Peak',
  'exp.little-adams.location': 'Ella',
  'exp.little-adams.summary':
    'Una camminata tranquilla di 45 minuti tra le piantagioni di tè fino a un crinale con vista a 360 gradi sull’Ella Gap: la migliore alba della regione collinare con il minimo sforzo.',
  'exp.little-adams.detail.0':
    'A differenza del suo omonimo in scala reale, il Little Adam’s Peak chiede pochissimo: un sentiero tra i cespugli di tè, una serie di gradini vicino alla cima e poi un crinale erboso a 1.141 metri con il terreno che sprofonda su tre lati.',
  'exp.little-adams.detail.1':
    'Vai alle prime luci. La valle sotto si riempie di nebbia, l’Ella Rock si erge di fronte e il sole sorge sulle pianure. Quasi tutte le mattine lo condividerai con una manciata di persone e moltissimo canto di uccelli.',
  'exp.little-adams.facts.0': 'Durata: circa 2 ore andata e ritorno',
  'exp.little-adams.facts.1': 'Meglio all’alba, da circa le 5.30',
  'exp.little-adams.facts.2': 'Moderato: circa 200 metri di dislivello',
  'exp.little-adams.facts.3': 'In autonomia, o con una guida locale su richiesta',
  'exp.little-adams.facts.4': 'Nessun biglietto d’ingresso',
  'exp.little-adams.goodToKnow':
    'Il sentiero è argilloso e diventa scivoloso dopo la pioggia. Con tempo asciutto bastano delle scarpe da ginnastica; l’ultimo tratto è a gradini.',

  'exp.ravana-falls.name': 'Cascate di Ravana',
  'exp.ravana-falls.location': 'Ella',
  'exp.ravana-falls.summary':
    'Una cascata di 25 metri che scende a gradoni lungo una parete rocciosa proprio accanto alla strada Ella–Wellawaya, al massimo della sua forza nei mesi successivi al monsone.',
  'exp.ravana-falls.detail.0':
    'Le cascate prendono il nome dal Ramayana — si dice che nella grotta dietro re Ravana nascose Sita — e arrivano senza preavviso nella discesa da Ella: la strada curva e l’intera cascata è semplicemente lì davanti a te.',
  'exp.ravana-falls.detail.1':
    'L’acqua scende a gradoni tra giungla e massi fino a una pozza in basso. C’è un’area panoramica al livello della strada, con gradini verso la pozza per chi vuole avvicinarsi, e bancarelle che vendono noci di cocco king e frutta.',
  'exp.ravana-falls.facts.0': 'Durata: circa 30 minuti',
  'exp.ravana-falls.facts.1': 'Sosta lungo la strada, a 6 km da Ella',
  'exp.ravana-falls.facts.2': 'Più ricca d’acqua tra novembre e febbraio',
  'exp.ravana-falls.facts.3': privateGuide,
  'exp.ravana-falls.facts.4': 'Nessun biglietto d’ingresso',
  'exp.ravana-falls.goodToKnow':
    'Le rocce intorno alla pozza sono viscide e la corrente è più forte di quanto sembri: qui capitano annegamenti. Ammirale dall’area panoramica anziché fare il bagno.',

  'exp.kataragama.name': 'Kataragama e Kiri Vehera',
  'exp.kataragama.location': 'Kataragama',
  'exp.kataragama.summary':
    'Uno dei pochi luoghi al mondo sacro insieme a buddhisti, indù e musulmani: una serata di tamburi, lampade a olio e offerte al santuario del dio Kataragama, accanto a uno stupa di un bianco abbagliante.',
  'exp.kataragama.detail.0':
    'Kataragama è città di pellegrinaggio da duemila anni e appartiene a tutti: i buddhisti vengono per lo stupa di Kiri Vehera, gli indù per il santuario Maha Devale dedicato a Murugan, i musulmani per la moschea nello stesso recinto, e gli anziani Vedda hanno ancora un ruolo nella festa annuale.',
  'exp.kataragama.detail.1':
    'Vieni per la puja serale. I pellegrini attraversano il Menik Ganga per lavarsi prima di entrare, poi portano vassoi di frutta e fiori attraverso il recinto dal pavimento di sabbia al ritmo dei tamburi, mentre le lampade a olio si accendono al calare del buio. Accanto, lo stupa di Kiri Vehera — costruito, per tradizione, nel II secolo a.C. — risplende bianco sopra gli alberi.',
  'exp.kataragama.facts.0': 'Durata: 2-3 ore',
  'exp.kataragama.facts.1': 'Puja serale intorno alle 18.30',
  'exp.kataragama.facts.2': 'Tutti i giorni, sulla strada tra Ella e Yala',
  'exp.kataragama.facts.3': privateGuide,
  'exp.kataragama.facts.4': 'Nessun biglietto — offerte in vendita all’ingresso',
  'exp.kataragama.goodToKnow':
    'Le scarpe si tolgono molto prima del santuario e la sabbia resta calda fino a sera. Vesti in modo sobrio, in bianco o colori chiari. È un luogo di pellegrinaggio attivo: usa la macchina fotografica con discrezione.',

  'exp.yala-safari.name': 'Safari in jeep nel Parco nazionale di Yala',
  'exp.yala-safari.location': 'Yala',
  'exp.yala-safari.summary':
    'La riserva di punta dello Sri Lanka ospita una delle più alte densità di leopardi al mondo, insieme a orsi labiati, elefanti e coccodrilli — ed è l’unico safari dell’isola che finisce sul mare.',
  'exp.yala-safari.detail.0':
    'Il Blocco 1 di Yala è la capitale mondiale del leopardo per densità, e qui i felini sono insolitamente tranquilli davanti ai veicoli: per questo gli avvistamenti sono molto migliori di quanto i numeri da soli suggerirebbero. Oltre ai leopardi il parco ospita orsi labiati — le migliori possibilità a giugno e luglio, quando matura il frutto del palu — elefanti, bufali selvatici, cervi pomellati, coccodrilli palustri nelle pozze e oltre duecento specie di uccelli.',
  'exp.yala-safari.detail.1':
    'Uscirai su un 4x4 scoperto privato con un tracciatore, alle prime luci, quando gli animali sono ancora in movimento. Il paesaggio è metà del piacere: giungla di macchia che si apre in lagune, foresta monsonica, affioramenti di granito e l’Oceano Indiano che si infrange su una spiaggia deserta a Patanangala.',
  'exp.yala-safari.facts.0': 'Durata: giornata intera, o mezza giornata all’alba o al tramonto',
  'exp.yala-safari.facts.1': 'Orario: dalle 5.30, oppure dalle 14 alle 18',
  'exp.yala-safari.facts.2': 'Partenze giornaliere — parco chiuso ogni settembre per siccità',
  'exp.yala-safari.facts.3': 'Jeep 4x4 privata con tracciatore',
  'exp.yala-safari.facts.4': 'Ingresso al parco, jeep e tracciatore inclusi',
  'exp.yala-safari.goodToKnow':
    'Il parco è polveroso e le piste sono sconnesse. Porta una sciarpa, occhiali da sole e binocolo, e se puoi scegli la partenza all’alba: la luce è migliore e gli animali sono più attivi prima del caldo.',

  'exp.galle-fort.name': 'Forte di Galle',
  'exp.galle-fort.location': 'Galle',
  'exp.galle-fort.summary':
    'Una città mercantile olandese cinta da mura su un promontorio nell’Oceano Indiano, ancora abitata e percorribile in un’ora: bastioni in pietra corallina, un faro e strade di ville con colonnati oggi piene di gallerie e caffè.',
  'exp.galle-fort.detail.0':
    'I portoghesi fortificarono il promontorio, gli olandesi lo ricostruirono come si deve nel 1663 e i britannici si limitarono a trasferirvisi. Ciò che sopravvive è la fortificazione di costruzione europea meglio conservata dell’Asia e, cosa insolita, un quartiere vivo anziché un museo: dietro quelle porte ci abita la gente.',
  'exp.galle-fort.detail.1':
    'Percorri prima i bastioni, tutto intorno, con l’oceano su tre lati. Poi scendi nel reticolo: la chiesa riformata olandese con il pavimento di lapidi, la moschea Meeran Jumma di fronte al faro, il Museo marittimo in un vecchio magazzino e le strade ombreggiate di Pedlar’s e Church, dove le antiche case dei mercanti sono diventate boutique, librerie e posti dove sedersi a prendere un caffè.',
  'exp.galle-fort.facts.0': halfDay,
  'exp.galle-fort.facts.1': 'Tutti i giorni — i bastioni danno il meglio al tramonto',
  'exp.galle-fort.facts.2': privateGuide,
  'exp.galle-fort.facts.3': 'Sito patrimonio mondiale UNESCO — ingresso libero al forte',
  'exp.galle-fort.facts.4': 'Visita a piedi su strade piane e acciottolate',
  'exp.galle-fort.goodToKnow':
    'Dentro le mura c’è pochissima ombra a metà giornata. Il momento giusto è dal tardo pomeriggio al tramonto sui bastioni.',

  'exp.madu-river.name': 'Safari in barca sul fiume Madu',
  'exp.madu-river.location': 'Balapitiya',
  'exp.madu-river.summary':
    'Una zona umida di 64 isole e fitti tunnel di mangrovie dietro la costa, esplorata in barca a motore: piccoli poderi di cannella, un tempio su un’isola, varani e martin pescatori.',
  'exp.madu-river.detail.0':
    'L’estuario del Madu Ganga è una zona umida protetta dalla convenzione di Ramsar e uno degli ultimi tratti di foresta di mangrovie intatta dello Sri Lanka. La barca ti porta attraverso la laguna aperta, poi si infila in canali così stretti che le radici delle mangrovie si chiudono sopra di te e bisogna spegnere il motore.',
  'exp.madu-river.detail.1':
    'Le soste di solito comprendono Kothduwa, una piccola isola boscosa con un tempio buddhista, e un podere familiare di cannella dove ti mostreranno la corteccia sbucciata e arrotolata a mano. Tieni d’occhio i rami: varani d’acqua, martin pescatori, cormorani e, al mattino presto, gruppi di macachi.',
  'exp.madu-river.facts.0': 'Durata: circa 2 ore',
  'exp.madu-river.facts.1': 'Partenza da Balapitiya, a 20 minuti da Bentota',
  'exp.madu-river.facts.2': 'Partenze giornaliere — le mattine sono le più calme',
  'exp.madu-river.facts.3': 'Barca privata',
  'exp.madu-river.facts.4': 'Noleggio della barca e soste sulle isole inclusi',
  'exp.madu-river.goodToKnow':
    'Alcuni operatori gestiscono vasche di «fish therapy» e tengono animali in cattività per le foto. Il nostro non lo fa, e ti chiediamo di non sostenere chi lo fa.',

  'exp.turtle-hatchery.name': 'Centro di incubazione tartarughe di Kosgoda',
  'exp.turtle-hatchery.location': 'Kosgoda',
  'exp.turtle-hatchery.summary':
    'Un centro di conservazione sulla spiaggia dove le uova riacquistate dai bracconieri vengono reinterrate, protette, e i piccoli liberati in mare dopo il tramonto.',
  'exp.turtle-hatchery.detail.0':
    'Cinque delle sette specie di tartarughe marine al mondo nidificano su questo tratto di costa, e tutte e cinque sono minacciate. I centri di Kosgoda acquistano i nidi da chi altrimenti venderebbe le uova, le reinterrano in sabbia protetta e liberano i piccoli al crepuscolo, quando i gabbiani se ne sono andati.',
  'exp.turtle-hatchery.detail.1':
    'Una guida ti accompagnerà tra le vasche, che ospitano esemplari adulti feriti o albini che non sopravviverebbero in libertà, e spiegherà il ciclo vitale e le pressioni che lo minacciano. Se sei qui all’ora giusta della sera potresti assistere a un rilascio.',
  'exp.turtle-hatchery.facts.0': 'Durata: circa 45 minuti',
  'exp.turtle-hatchery.facts.1': 'Meglio nel tardo pomeriggio, per il rilascio serale',
  'exp.turtle-hatchery.facts.2': daily,
  'exp.turtle-hatchery.facts.3': privateGuide,
  'exp.turtle-hatchery.facts.4': 'Donazione d’ingresso inclusa',
  'exp.turtle-hatchery.goodToKnow':
    'Maneggiare i piccoli è stressante per loro e lo sconsigliamo, qualunque cosa ti venga proposta. Un buon centro rilascia entro pochi giorni dalla schiusa anziché tenere gli animali in vasca per le fotografie.',

  'exp.stilt-fishermen.name': 'Pescatori sui trampoli di Koggala',
  'exp.stilt-fishermen.location': 'Koggala',
  'exp.stilt-fishermen.summary':
    'L’immagine più fotografata dello Sri Lanka: pescatori appollaiati su traverse piantate nel fondale, al lavoro nelle secche all’alba e al tramonto.',
  'exp.stilt-fishermen.detail.0':
    'La pesca sui trampoli nacque durante la Seconda guerra mondiale, quando il cibo scarseggiava e le buone posizioni sugli scogli erano occupate: gli uomini piantarono pali sulla piattaforma corallina e pescarono da sopra l’acqua. Lo tsunami del 2004 portò via quasi tutti i trampoli e gran parte del pescato, e oggi buona parte degli uomini che vedi recita almeno quanto pesca.',
  'exp.stilt-fishermen.detail.1':
    'Questo non lo rende meno degno di essere visto all’ora giusta: sole basso, sagome sull’acqua, la costa meridionale alle spalle. La tua guida troverà un tratto dove si pesca ancora davvero e concorderà un compenso in anticipo se vuoi fotografare da vicino.',
  'exp.stilt-fishermen.facts.0': 'Durata: circa 1 ora',
  'exp.stilt-fishermen.facts.1': 'All’alba o nell’ora prima del tramonto',
  'exp.stilt-fishermen.facts.2': 'Lungo la costa da Koggala a Weligama',
  'exp.stilt-fishermen.facts.3': privateGuide,
  'exp.stilt-fishermen.facts.4': 'Compenso per le foto da pagare in loco',
  'exp.stilt-fishermen.goodToKnow':
    'Concorda il compenso prima di scattare, non dopo. Chiedi al tuo autista-guida di occuparsene: conosce la cifra abituale.',

  'exp.bentota-watersports.name': 'Sport acquatici a Bentota',
  'exp.bentota-watersports.location': 'Bentota',
  'exp.bentota-watersports.summary':
    'L’acqua calma dove il fiume Bentota incontra il mare rende questo il centro degli sport acquatici dell’isola: moto d’acqua, banana boat, windsurf, immersioni e pesca d’altura.',
  'exp.bentota-watersports.detail.0':
    'La lingua di sabbia di Bentota ripara un lungo tratto di acqua piatta, ed è il motivo per cui ogni sport acquatico dell’isola sembra partire da qui. Moto d’acqua, gommoni trainati e banana boat operano sul lato fiume; windsurf e kitesurf funzionano meglio al largo quando nel pomeriggio si alza la brezza.',
  'exp.bentota-watersports.detail.1':
    'Da novembre ad aprile il mare è abbastanza limpido per immergersi, con relitti e barriera al largo di Beruwala, e dalla stessa spiaggia partono le uscite di pesca d’altura. Si può organizzare tutto in giornata tramite il tuo hotel.',
  'exp.bentota-watersports.facts.0': 'Immersioni disponibili da novembre ad aprile',
  'exp.bentota-watersports.facts.1': 'Attività sul fiume tutto l’anno',
  'exp.bentota-watersports.facts.2': 'Prenotazione in loco, a ore o a sessione',
  'exp.bentota-watersports.facts.3': 'Supplemento applicabile, pagabile in loco',
  'exp.bentota-watersports.facts.4': 'Attrezzatura e istruzione fornite',
  'exp.bentota-watersports.goodToKnow':
    'Verifica che l’operatore fornisca i giubbotti di salvataggio e che la tua assicurazione di viaggio copra gli sport acquatici a motore: non tutte le polizze lo fanno.',

  'exp.colombo-city.name': 'Tour della città di Colombo',
  'exp.colombo-city.location': 'Colombo',
  'exp.colombo-city.summary':
    'La capitale commerciale in mezza giornata: il bazar di Pettah, una moschea a righe rosse e bianche, il Fort coloniale, il tempio di Gangaramaya e il tramonto su Galle Face Green.',
  'exp.colombo-city.detail.0':
    'Colombo non è una città che si annuncia, ed è esattamente per questo che ripaga chi ha una guida. Si comincia da Pettah, il vecchio quartiere del bazar, dove intere strade vendono una cosa sola — ferramenta, tessuti, pesce essiccato — e la Moschea Rossa si alza sopra tutto in mattoni a righe.',
  'exp.colombo-city.detail.1':
    'Poi: il quartiere coloniale del Fort e l’Old Dutch Hospital, oggi una corte di ristoranti; il tempio di Gangaramaya con il suo straordinario accumulo di oggetti donati; Independence Square; e i viali alberati di Cinnamon Gardens. Si chiude su Galle Face Green al tramonto, con i venditori di aquiloni, i carretti di isso vadai e mezza Colombo a passeggio.',
  'exp.colombo-city.facts.0': halfDay,
  'exp.colombo-city.facts.1': daily,
  'exp.colombo-city.facts.2': privateGuide,
  'exp.colombo-city.facts.3': 'Ingresso al tempio incluso',
  'exp.colombo-city.facts.4': 'Soste per shopping su richiesta',
  'exp.colombo-city.goodToKnow':
    'Il traffico è intenso tra le 8 e le 10 e tra le 16 e le 19, quindi il tour è studiato per evitarlo. Pettah chiude la domenica e nei giorni di poya.',

  'exp.negombo-lagoon.name': 'Laguna e mercato del pesce di Negombo',
  'exp.negombo-lagoon.location': 'Negombo',
  'exp.negombo-lagoon.summary':
    'Una città di pescatori cattolica a venti minuti dall’aeroporto: canali olandesi, piroghe a bilanciere che rientrano all’alba e il più grande mercato del pesce della costa occidentale.',
  'exp.negombo-lagoon.detail.0':
    'Negombo è porto di pesca e di cannella da secoli e resta in larghissima parte cattolica: per questo c’è una chiesa in fondo a quasi ogni strada e le barche hanno nomi di santi dipinti sulla prua.',
  'exp.negombo-lagoon.detail.1':
    'Il mercato del pesce di Lellama è la cosa da vedere, e succede presto: canoe a bilanciere che rientrano a vela, il pescato steso sulla sabbia, tonni e pesci serra battuti all’asta in mezzo alla folla e rastrelliere di pesce che essicca al sole più avanti sulla spiaggia. Il canale olandese che attraversa la città è un contrappunto tranquillo, e la laguna alle spalle è piena di pescatori di gamberi e granchi al lavoro con le reti fisse.',
  'exp.negombo-lagoon.facts.0': 'Durata: 2-3 ore',
  'exp.negombo-lagoon.facts.1': 'Il mercato dà il meglio dalle 6 alle 8',
  'exp.negombo-lagoon.facts.2': 'Tutti i giorni tranne la domenica',
  'exp.negombo-lagoon.facts.3': privateGuide,
  'exp.negombo-lagoon.facts.4': 'A 20 minuti dall’aeroporto internazionale di Bandaranaike',
  'exp.negombo-lagoon.goodToKnow':
    'Il mercato è bagnato, affollato e dall’odore intenso: non fa per tutti, e conviene indossare scarpe chiuse. Il giro in barca sulla laguna è l’alternativa più tranquilla.',

  'exp.kitulgala.name': 'Kitulgala e la valle del Kelani',
  'exp.kitulgala.location': 'Kitulgala',
  'exp.kitulgala.summary':
    'La gola di foresta pluviale dove fu girato «Il ponte sul fiume Kwai», e il miglior rafting dello Sri Lanka: cinque chilometri di rapide di grado 2 e 3 nella giungla.',
  'exp.kitulgala.detail.0':
    'Qui il fiume Kelani scorre veloce e verde in una gola di foresta pluviale della zona umida, e la discesa dalla regione collinare alla costa la attraversa da parte a parte. David Lean fece saltare il suo ponte su questo tratto d’acqua nel 1957; le fondazioni di cemento sono ancora nel letto del fiume e una guida ti ci accompagnerà.',
  'exp.kitulgala.detail.1':
    'Per la maggior parte delle persone l’attrattiva è il rafting: circa cinque chilometri e sette rapide con nome, di grado 2-3, del tutto gestibili per un principiante con una guida in barca. Se preferisci restare all’asciutto, la stessa foresta è uno dei migliori siti di birdwatching della zona umida, con un lungo elenco di specie endemiche.',
  'exp.kitulgala.facts.0': 'Durata: la discesa in raft dura circa 2 ore',
  'exp.kitulgala.facts.1': 'Sulla strada da Nuwara Eliya a Colombo',
  'exp.kitulgala.facts.2': 'Rafting tutto l’anno, al meglio da maggio a dicembre',
  'exp.kitulgala.facts.3': 'Caschi, giubbotti di salvataggio e guide forniti',
  'exp.kitulgala.facts.4': 'Il rafting è un supplemento locale: la sosta in sé è inclusa',
  'exp.kitulgala.goodToKnow':
    'Ti bagnerai completamente, quindi tieni a portata di mano un cambio asciutto. L’età minima per il rafting è di solito 10 anni e bisogna saper nuotare.',

  /* ---------------- Hotels ---------------- */
  'hotel.Aliya Resort & Spa.description':
    'Ville basse attorno a una piscina a sfioro inquadrata sulla rocca di Sigiriya: la vista dall’acqua è il motivo per soggiornare qui.',
  'hotel.Cinnamon Lodge Habarana.description':
    'Undici ettari di giardini ricchi di fauna e chalet in riva al lago, proprio nel cuore del Triangolo culturale.',
  'hotel.Hotel Kandalama.description':
    'Il capolavoro di Geoffrey Bawa, costruito dentro una rupe sopra un bacino e oggi così invaso dalla vegetazione che la giungla l’ha quasi inghiottito.',
  'hotel.Earl’s Regency.description':
    'Un hotel in stile coloniale nella valle del Mahaweli fuori città, con vista sulle colline dalla terrazza della piscina e una buona spa.',
  'hotel.Cinnamon Citadel.description':
    'Camere sul Mahaweli, a dieci minuti dal Tempio del Dente e silenziose di notte.',
  'hotel.The Grand Kandyan.description':
    'L’hotel più grande della capitale collinare, a pochi passi dal lago e dal tempio.',
  'hotel.The Tea Experience.description':
    'Un piccolo hotel di tenuta in fondo a una valle di tè in attività fuori Nuwara Eliya: la versione silenziosa e nebbiosa della regione collinare.',
  'hotel.The Golden Ridge.description':
    'Sul crinale sopra la città, con ampie vedute sulla valle e facile accesso al lago Gregory.',
  'hotel.Horton Heights.description':
    'Una comoda base sul pendio vicino all’ippodromo e al campo da golf, pratica per partire verso gli Horton Plains.',
  'hotel.Newburgh Tea Factory.description':
    'Un’ex fabbrica di tè riconvertita in una tenuta in attività, con i macchinari originali al loro posto e vista sulla valle da ogni camera.',
  'hotel.EKHO Ella.description':
    'Appollaiato proprio sul bordo dell’Ella Gap, con il balcone migliore della città per l’alba.',
  'hotel.Onrock Ella.description':
    'Un hotel contemporaneo sul pendio con una piscina a sfioro che guarda dritta giù per la gola verso le pianure.',
  'hotel.Yala Safari Hotel.description':
    'Una base semplice e ben gestita a pochi minuti dal cancello del parco: da qui le partenze all’alba sono facili.',
  'hotel.Shangri-La Hambantota.description':
    'Un resort completo con spiaggia privata e campo da golf, a un’ora dal parco: il lato comodo del safari.',
  'hotel.Cinnamon Wild Yala.description':
    'Chalet dentro la fascia cuscinetto dove elefanti e cinghiali passano davvero: il posto più vicino al parco in cui si possa dormire.',
  'hotel.Sheraton Kosgoda Turtle Beach Resort.description':
    'Un grande resort fronte mare su un tratto di sabbia dove nidificano le tartarughe, con diverse piscine e una lunga spiaggia privata.',
  'hotel.Cinnamon Bay.description':
    'Direttamente sulla spiaggia di Bentota alla foce del fiume, a pochi passi dal centro sport acquatici.',
  'hotel.Eden Resort & Spa.description':
    'Un hotel di mare di lunga tradizione con una grande piscina e una spa ayurvedica, molto scelto per i soggiorni balneari lunghi.',
  'hotel.Jetwing Beach.description':
    'Un hotel di design sulla spiaggia a venti minuti dall’aeroporto: la migliore prima o ultima notte sull’isola.',
  'hotel.Gold Sands.description':
    'Un’opzione accogliente e più semplice fronte spiaggia, vicina al mercato del pesce e alla città.',
  'hotel.Heritance Negombo.description':
    'Un hotel contemporaneo fronte mare con piscina sul tetto e tramonti sull’Oceano Indiano.',

  /* ---------------- Packages ---------------- */
  'pkg.grand-tour-of-sri-lanka.name': 'Grand Tour dello Sri Lanka',
  'pkg.grand-tour-of-sri-lanka.tagline':
    'L’intero arco dell’isola in due settimane senza fretta: capitali antiche, regione del tè, terra dei leopardi e un lungo finale di mare.',
  'pkg.grand-tour-of-sri-lanka.badge': 'Itinerario consigliato',
  'pkg.grand-tour-of-sri-lanka.cardSummary':
    'Il nostro viaggio più completo. Sei basi, un solo autista-guida e tempo sufficiente in ogni luogo per smettere di guardare l’orologio.',
  'pkg.grand-tour-of-sri-lanka.intro':
    'È l’itinerario che scriviamo per chi vuole vedere tutto, e vederlo bene. Si comincia nel Triangolo culturale con tre notti in un solo hotel: quanto basta per affrontare Polonnaruwa, Sigiriya e Anuradhapura con calma anziché correre dall’una all’altra. Poi la strada sale: Kandy per il Tempio del Dente e i giardini botanici, Nuwara Eliya per il tè e le mattine fredde, Ella per il Nine Arch Bridge e la vista giù per la gola. Da lì si scende nel sud-est arido per due notti a Yala, uno dei posti migliori al mondo per vedere un leopardo selvatico, prima di chiudere con tre giornate intere di spiaggia a Bentota senza assolutamente nulla in agenda. Quattordici notti, un solo veicolo e un solo autista dall’inizio alla fine, e nessun volo interno.',
  'pkg.grand-tour-of-sri-lanka.tourType': 'Itinerario consigliato',
  'pkg.grand-tour-of-sri-lanka.bestFor.0': 'Prima visita',
  'pkg.grand-tour-of-sri-lanka.bestFor.1': 'Cultura',
  'pkg.grand-tour-of-sri-lanka.bestFor.2': 'Fauna e safari in 4x4',
  'pkg.grand-tour-of-sri-lanka.bestFor.3': 'Regione del tè',
  'pkg.grand-tour-of-sri-lanka.bestFor.4': 'Finale al mare',
  'pkg.grand-tour-of-sri-lanka.bestFor.5': 'Luna di miele',
  'pkg.grand-tour-of-sri-lanka.priceBasis': perPerson,
  'pkg.grand-tour-of-sri-lanka.period': period,
  'pkg.grand-tour-of-sri-lanka.visiting.0': culturalTriangle,
  'pkg.grand-tour-of-sri-lanka.extensionPrice': roomNight(325),
  'pkg.grand-tour-of-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.grand-tour-of-sri-lanka.ext.0.description':
    'Tre giorni di mare passano in fretta. Aggiungi notti extra al Sheraton Kosgoda Turtle Beach Resort — oppure al Cinnamon Bay o all’Eden Resort — con lo stesso trattamento di mezza pensione, tenendo la stessa camera anziché spostarti.',
  'pkg.grand-tour-of-sri-lanka.ext.0.price': roomNight(325),
  'pkg.grand-tour-of-sri-lanka.ext.1.title': 'Opzione 2: le Maldive',
  'pkg.grand-tour-of-sri-lanka.ext.1.description':
    'Da Colombo a Malé è un salto di novanta minuti, il che rende le Maldive la seconda metà naturale di un viaggio in Sri Lanka. Abbineremo il tuo resort alle isole e gestiremo voli in coincidenza e trasferimenti in un’unica prenotazione.',
  'pkg.grand-tour-of-sri-lanka.ext.1.price': onRequest,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.intro':
    'Atterri all’aeroporto internazionale di Bandaranaike e il tuo autista-guida ti porta nell’entroterra: circa quattro ore fino a Sigiriya, con il pomeriggio libero per nuotare e riprendersi. I due giorni successivi sono il Triangolo culturale al suo meglio, e restare fermi in un unico hotel per tutte e tre le notti è ciò che lo rende possibile. Il secondo giorno è Polonnaruwa nel fresco del mattino, poi un safari in jeep nel pomeriggio a Minneriya, dove gli elefanti scendono verso il bacino che si ritira. Il terzo giorno sali sulla rocca di Sigiriya alle prime luci e passi il pomeriggio tra gli stupa e le rovine monastiche di Anuradhapura, la prima capitale dell’isola e ancora oggi un luogo di pellegrinaggio molto vivo.',
  'pkg.grand-tour-of-sri-lanka.stop.kandy.intro':
    'La discesa verso Kandy è bella e porta con sé due soste: il tempio nelle grotte di Dambulla, cinque grotte dipinte piene di statue del Buddha scavate in una parete rocciosa, e un giardino delle spezie a Matale dove cannella, cardamomo e pepe crescono nello stesso appezzamento. Arrivi a Kandy in tempo per la puja serale al Tempio del Sacro Dente, quando i tamburini attaccano e la fila dei pellegrini sfila davanti allo scrigno. Il giorno seguente è dedicato alla capitale collinare: i Giardini botanici reali di Peradeniya al mattino, poi il lago, il mercato e il belvedere sopra la città nel pomeriggio.',
  'pkg.grand-tour-of-sri-lanka.stop.nuwara-eliya.intro':
    'Fuori Kandy la strada comincia a salire e non smette più, tra tenute di tè terrazzate fino a 1.900 metri. Spezzi il viaggio in una fabbrica di tè in attività per seguire la foglia dai soppalchi di appassimento al tavolo di degustazione, e arrivi a Nuwara Eliya con il pomeriggio libero. È un posto strano e piuttosto meraviglioso: una stazione collinare vittoriana con ippodromo, ufficio postale in mattoni rossi e campo da golf, costruita dai britannici perché somigliasse a casa e davvero fredda dopo il tramonto. Il mattino dopo è dedicato alla città: il lago Gregory, Victoria Park, le vecchie villette. Il pomeriggio è tuo.',
  'pkg.grand-tour-of-sri-lanka.stop.ella.intro':
    'Un breve trasferimento fino a Ella, con sosta al tempio di Seetha Amman a Seetha Eliya: un santuario indù dai colori vivaci accanto a un gelido torrente di montagna, ritenuto il luogo in cui Sita fu tenuta prigioniera nel Ramayana. Ella è una sola strada di caffè in una fenditura tra due montagne, e il motivo per venirci è la vista giù per l’Ella Gap, che in una mattina limpida arriva fino alle pianure del sud. La tua giornata intera qui comprende il paese e il Nine Arch Bridge, un viadotto del 1921 che esce dalla giungla su nove campate di pietra senza un grammo d’acciaio. Con i tempi giusti, un treno passerà mentre sei lì.',
  'pkg.grand-tour-of-sri-lanka.stop.yala.intro':
    'La discesa dalle colline è spettacolare: perdi duemila metri in un paio d’ore e il paesaggio passa dal tè alla macchia arida. Le cascate di Ravana appaiono lungo la strada mentre scendi, e il pomeriggio ti porta a Kataragama per la puja serale, città di pellegrinaggio sacra insieme a buddhisti, indù e musulmani, dove tamburi e lampade a olio proseguono ben oltre il tramonto, con il bianco stupa di Kiri Vehera illuminato sopra gli alberi. Il mattino dopo inizia prima dell’alba con un safari in jeep nel Parco nazionale di Yala, che ha una delle densità di leopardi più alte al mondo, insieme a orsi labiati, elefanti e una spiaggia deserta dove la macchia incontra l’Oceano Indiano. Il pomeriggio è libero.',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.subLabel': '(via Galle)',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.intro':
    'Segui la costa meridionale verso ovest, e l’ultima giornata di visite del viaggio è una delle migliori. Il Forte di Galle al mattino: una città mercantile olandese cinta da mura su un promontorio, bastioni su tre lati, ancora abitata anziché conservata. Poi un safari in barca sul Madu Ganga, dentro tunnel di mangrovie così stretti che bisogna spegnere il motore, e una sosta al centro tartarughe di Kosgoda prima di arrivare a Bentota. I due giorni rimanenti sono completamente liberi in mezza pensione. Nuota, dormi, leggi, usa il centro sport acquatici alla foce del fiume o non fare assolutamente nulla: dopo undici giorni di strada, quasi tutti scelgono il nulla.',
  'pkg.grand-tour-of-sri-lanka.stop.departure.location': departure,
  'pkg.grand-tour-of-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.grand-tour-of-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.ancient-cities-and-golden-sands.name': 'Città antiche e sabbie dorate',
  'pkg.ancient-cities-and-golden-sands.tagline':
    'Fortezze rupestri, terra di elefanti e il Tempio del Dente — poi dritti in costa per il resto della settimana.',
  'pkg.ancient-cities-and-golden-sands.badge': 'Multi-tappa',
  'pkg.ancient-cities-and-golden-sands.cardSummary':
    'Il Triangolo culturale e Kandy in profondità, poi due giorni a non fare nulla sulla costa occidentale. Prima la cultura, poi il mare, senza fretta in nessuno dei due.',
  'pkg.ancient-cities-and-golden-sands.intro':
    'Certi viaggi provano a coprire l’intera isola in una settimana e non li gode nessuno. Questo fa l’opposto: dedica cinque delle sue sette notti ai due luoghi che meritano di più il tuo tempo, e poi ti mette su una spiaggia. Tre notti nel Triangolo culturale sono quello che serve per vedere Polonnaruwa, Sigiriya, Minneriya e Anuradhapura senza passare ogni mattina a fare le valigie. Due notti a Kandy coprono il Tempio del Sacro Dente, i giardini botanici di Peradeniya e la città stessa. Poi ti sposti a Bentota e ti fermi. È adatto a chi ha poco tempo e preferisce vedere meno cose ma bene, e alle famiglie che hanno bisogno di chiudere la settimana con una piscina.',
  'pkg.ancient-cities-and-golden-sands.tourType': 'Multi-tappa',
  'pkg.ancient-cities-and-golden-sands.bestFor.0': 'Viaggi brevi',
  'pkg.ancient-cities-and-golden-sands.bestFor.1': 'Cultura',
  'pkg.ancient-cities-and-golden-sands.bestFor.2': 'Famiglie',
  'pkg.ancient-cities-and-golden-sands.bestFor.3': 'Fauna',
  'pkg.ancient-cities-and-golden-sands.bestFor.4': 'Finale al mare',
  'pkg.ancient-cities-and-golden-sands.priceBasis': perPerson,
  'pkg.ancient-cities-and-golden-sands.period': period,
  'pkg.ancient-cities-and-golden-sands.visiting.0': culturalTriangle,
  'pkg.ancient-cities-and-golden-sands.extensionPrice': roomNight(325),
  'pkg.ancient-cities-and-golden-sands.ext.0.title': moreBentotaTitle,
  'pkg.ancient-cities-and-golden-sands.ext.0.description':
    'Due giorni di mare bastano appena a disfare le valigie. Prolunga il soggiorno al Sheraton Kosgoda Turtle Beach Resort, al Cinnamon Bay o all’Eden Resort & Spa con lo stesso trattamento di mezza pensione.',
  'pkg.ancient-cities-and-golden-sands.ext.0.price': roomNight(325),
  'pkg.ancient-cities-and-golden-sands.ext.1.title': 'Opzione 2: aggiungi Yala',
  'pkg.ancient-cities-and-golden-sands.ext.1.description':
    'Due notti a Yala lungo la strada per la costa trasformano questo viaggio anche in un viaggio naturalistico: una giornata intera di safari in jeep nel miglior parco dei leopardi dell’isola, più Kataragama e le cascate di Ravana lungo il percorso.',
  'pkg.ancient-cities-and-golden-sands.ext.1.price': onRequest,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.intro':
    'Il tuo autista-guida ti accoglie all’aeroporto internazionale di Bandaranaike e guida verso l’entroterra fino a Sigiriya, circa quattro ore, con il resto del primo giorno libero per nuotare e smaltire il volo. Il secondo giorno è Polonnaruwa al mattino — la meglio conservata delle capitali in rovina e l’unica che si percorra davvero a piedi — seguita da un safari in jeep nel pomeriggio a Minneriya, dove gli elefanti si radunano in gran numero sull’erba lasciata dal bacino che si ritira. Il terzo giorno sveglia presto per la rocca di Sigiriya, 1.200 gradini fino a un palazzo del V secolo su una cima di granito, e poi trasferimento ad Anuradhapura per stupa grandi come colline e l’albero piantato più antico della Terra.',
  'pkg.ancient-cities-and-golden-sands.stop.kandy.intro':
    'La strada verso sud fino a Kandy ha due soste già incluse: il tempio nelle grotte di Dambulla, con 150 statue del Buddha e soffitti dipinti dentro una parete rocciosa, e un giardino delle spezie a Matale dove puoi vedere che aspetto hanno cannella e cardamomo prima di finire in un barattolo. Arrivi a Kandy per la puja serale al Tempio del Sacro Dente. Il giorno seguente appartiene alla capitale collinare: i Giardini botanici reali di Peradeniya al mattino, poi il lago, il mercato coperto e il belvedere sopra la città, da raggiungere nel tardo pomeriggio quando la luce si fa dorata sui tetti del tempio.',
  'pkg.ancient-cities-and-golden-sands.stop.bentota.intro':
    'Scendi dalle colline verso la costa occidentale, e lì finiscono i trasferimenti. Entrambi i giorni rimanenti sono completamente liberi in mezza pensione a Bentota, dove il fiume incontra il mare e l’acqua è abbastanza piatta per ogni sport acquatico dell’isola. C’è molto a portata di mano se lo desideri — il Forte di Galle è un’ora a sud, le mangrovie del Madu Ganga a venti minuti, il centro tartarughe di Kosgoda ancora più vicino — e il tuo autista-guida può portarti ovunque. Oppure puoi restare esattamente dove sei, che è ciò per cui questo itinerario è davvero pensato.',
  'pkg.ancient-cities-and-golden-sands.stop.departure.location': departure,
  'pkg.ancient-cities-and-golden-sands.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.ancient-cities-and-golden-sands.stop.departure.intro': departureIntro,

  'pkg.classic-sri-lanka.name': 'Sri Lanka classico',
  'pkg.classic-sri-lanka.tagline':
    'I grandi classici dell’isola in una sola settimana: templi rupestri, una fortezza sulla rocca, la capitale collinare, la regione del tè e il mare.',
  'pkg.classic-sri-lanka.cardSummary':
    'Cinque basi in otto giorni, disposte in modo da non tornare mai sui propri passi. Il massimo terreno copribile in una settimana senza che diventi confuso.',
  'pkg.classic-sri-lanka.badge': 'Itinerario consigliato',
  'pkg.classic-sri-lanka.intro':
    'Una settimana è poca per un paese che contiene tutto questo, quindi questo percorso è costruito per non sprecarne nemmeno un momento. Si parte con una notte a Negombo, a venti minuti dall’aeroporto: niente lunghi trasferimenti dopo un lungo volo. Da lì tutto scorre in una linea pulita: il Triangolo culturale per Dambulla, Minneriya, Sigiriya e Anuradhapura; Kandy per il Tempio del Sacro Dente; Nuwara Eliya per le tenute di tè e la strana, fredda stazione collinare che le sovrasta. Poi la discesa verso la costa attraverso la valle del Kelani a Kitulgala, e due giornate piene a Bentota per finire. È il primo sguardo più completo sullo Sri Lanka che stia in otto giorni.',
  'pkg.classic-sri-lanka.tourType': 'Itinerario consigliato',
  'pkg.classic-sri-lanka.bestFor.0': 'Prima visita',
  'pkg.classic-sri-lanka.bestFor.1': 'Viaggi brevi',
  'pkg.classic-sri-lanka.bestFor.2': 'Cultura',
  'pkg.classic-sri-lanka.bestFor.3': 'Regione del tè',
  'pkg.classic-sri-lanka.bestFor.4': 'Finale al mare',
  'pkg.classic-sri-lanka.priceBasis': perPerson,
  'pkg.classic-sri-lanka.period': period,
  'pkg.classic-sri-lanka.visiting.1': culturalTriangle,
  'pkg.classic-sri-lanka.extensionPrice': roomNight(325),
  'pkg.classic-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.classic-sri-lanka.ext.0.description':
    'Aggiungi notti al Sheraton Kosgoda Turtle Beach Resort, al Cinnamon Bay o all’Eden Resort & Spa con lo stesso trattamento di mezza pensione, e chiudi la settimana come si deve anziché fare le valigie il settimo giorno.',
  'pkg.classic-sri-lanka.ext.0.price': roomNight(325),
  'pkg.classic-sri-lanka.ext.1.title': 'Opzione 2: aggiungi Ella e Yala',
  'pkg.classic-sri-lanka.ext.1.description':
    'Prosegui verso est da Nuwara Eliya invece di svoltare per la costa: Ella per il Nine Arch Bridge, poi Yala per un safari ai leopardi, e infine il mare passando da Galle.',
  'pkg.classic-sri-lanka.ext.1.price': onRequest,
  'pkg.classic-sri-lanka.stop.negombo.intro':
    'Invece di spedirti subito nell’entroterra dopo un lungo volo, questo itinerario comincia a venti minuti dal terminal, a Negombo: una città di pescatori cattolica fatta di canali olandesi, piroghe a bilanciere e una chiesa in fondo a ogni strada. Il tuo autista-guida ti accoglie agli arrivi e ti porta in hotel in mezz’ora. Il resto della giornata è libero: dormi, nuota o cammina lungo la spiaggia fino al mercato del pesce di Lellama, che vale la pena vedere presto il mattino dopo, se il fuso orario ti tiene sveglio comunque.',
  'pkg.classic-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.classic-sri-lanka.stop.cultural-triangle.intro':
    'Ti dirigi nell’entroterra, spezzando il viaggio al tempio nelle grotte di Dambulla: cinque grotte scavate in una parete rocciosa, 150 statue del Buddha e soffitti dipinti fin dove la pietra incontra il pavimento. Il pomeriggio è un safari in jeep a Minneriya, dove gli elefanti selvatici scendono nel tardo pomeriggio a pascolare sulle praterie del bacino che si prosciuga. Il mattino seguente è la rocca di Sigiriya — 1.200 gradini oltre affreschi di millecinquecento anni fino a un palazzo sulla cima — e il pomeriggio ti porta ad Anuradhapura, la prima capitale, dove enormi stupa di mattoni svettano ancora sopra gli alberi e i pellegrini curano un fico piantato nel 288 a.C.',
  'pkg.classic-sri-lanka.stop.kandy.intro':
    'La mattinata si passa nei giardini delle spezie di Matale, camminando in un appezzamento in attività dove la cannella viene sbucciata e arrotolata a mano, il cardamomo cresce all’ombra e le viti di pepe si arrampicano sugli alberi tutori. Poi si prosegue verso Kandy, l’ultimo regno a cadere in mano a una potenza europea e ancora oggi il cuore culturale dell’isola. Arrivi per la puja serale al Tempio del Sacro Dente, quando i tamburini kandyani attaccano davanti alla camera interna e le porte si aprono per la fila di pellegrini che portano fiori di loto davanti allo scrigno d’oro.',
  'pkg.classic-sri-lanka.stop.nuwara-eliya.intro':
    'La strada che esce da Kandy sale per tre ore tra terrazze di tè, e a metà percorso ti fermi in una fabbrica d’alta quota in attività per seguire la foglia dalle vasche di appassimento ai rulli e ai forni fino al tavolo di degustazione. Raggiungi Nuwara Eliya nel pomeriggio: 1.900 metri di quota, villette finto-Tudor, un ippodromo e un ufficio postale in mattoni rossi, così profondamente vittoriana che tutti la chiamano Piccola Inghilterra. Il resto della giornata è libero, e la sera è davvero fredda, il che dopo una settimana ai tropici è uno choc che vale la pena provare.',
  'pkg.classic-sri-lanka.stop.bentota.subLabel': '(via Kitulgala)',
  'pkg.classic-sri-lanka.stop.bentota.intro':
    'La discesa verso la costa passa per Kitulgala, dove il fiume Kelani scava una gola nella foresta pluviale della zona umida e dove David Lean fece saltare il suo ponte per «Il ponte sul fiume Kwai» nel 1957. È il miglior rafting del paese, se ne hai voglia, e uno dei migliori tratti per il birdwatching della zona umida, se non ne hai. Sei sulla spiaggia di Bentota nel pomeriggio, e l’ultima giornata intera è completamente libera in mezza pensione: la foce del fiume qui è abbastanza calma per ogni sport acquatico dell’isola, oppure puoi semplicemente non muoverti.',
  'pkg.classic-sri-lanka.stop.departure.location': departure,
  'pkg.classic-sri-lanka.stop.departure.subLabel': toAirport('Bentota'),
  'pkg.classic-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.beach-safari-and-tea-country.name': 'Mare, safari e regione del tè',
  'pkg.beach-safari-and-tea-country.tagline':
    'Per una volta prima il mare: tre giorni sulla sabbia, poi nell’entroterra tra leopardi, cascate e la regione collinare al contrario.',
  'pkg.beach-safari-and-tea-country.badge': 'Multi-tappa',
  'pkg.beach-safari-and-tea-country.cardSummary':
    'Percorre l’isola in senso antiorario: costa, safari, regione collinare, Kandy, Colombo. Ti riprendi dal volo prima di visitare qualsiasi cosa.',
  'pkg.beach-safari-and-tea-country.intro':
    'Quasi tutti gli itinerari dello Sri Lanka tengono il mare per la fine. Questo lo mette all’inizio, ed è un’idea migliore di quanto sembri: atterri, guidi un’ora e mezza fino a Bentota e hai tre giorni per riprenderti dal volo prima che inizi qualsiasi visita. Dopodiché il percorso gira in senso antiorario intorno al sud: il Forte di Galle e poi Yala per un safari ai leopardi, su verso Ella per il Nine Arch Bridge e le cascate di Ravana, quindi attraverso la regione del tè fino a Kandy per il Tempio del Sacro Dente, e infine Colombo e un’ultima notte a Negombo vicino all’aeroporto. È il miglior rapporto qualità-prezzo dei quattro programmi e si adatta a chi vuole il mare finché ha ancora l’energia per goderselo.',
  'pkg.beach-safari-and-tea-country.tourType': 'Multi-tappa',
  'pkg.beach-safari-and-tea-country.bestFor.0': 'Prima il mare',
  'pkg.beach-safari-and-tea-country.bestFor.1': 'Fauna e safari in 4x4',
  'pkg.beach-safari-and-tea-country.bestFor.2': 'Miglior rapporto qualità-prezzo',
  'pkg.beach-safari-and-tea-country.bestFor.3': 'Luna di miele',
  'pkg.beach-safari-and-tea-country.bestFor.4': 'Regione del tè',
  'pkg.beach-safari-and-tea-country.priceBasis': perPerson,
  'pkg.beach-safari-and-tea-country.period': period,
  'pkg.beach-safari-and-tea-country.extensionPrice': roomNight(325),
  'pkg.beach-safari-and-tea-country.ext.0.title': moreBentotaTitle,
  'pkg.beach-safari-and-tea-country.ext.0.description':
    'Parti ancora più lentamente. Aggiungi notti all’inizio del viaggio al Sheraton Kosgoda Turtle Beach Resort, al Cinnamon Bay o all’Eden Resort & Spa, con lo stesso trattamento di mezza pensione.',
  'pkg.beach-safari-and-tea-country.ext.0.price': roomNight(325),
  'pkg.beach-safari-and-tea-country.ext.1.title': 'Opzione 2: aggiungi il Triangolo culturale',
  'pkg.beach-safari-and-tea-country.ext.1.description':
    'Questo percorso salta deliberatamente Sigiriya e Polonnaruwa. Aggiungi due o tre notti a nord di Kandy e recuperi la fortezza sulla rocca, Minneriya e Anuradhapura prima di dirigerti all’aeroporto.',
  'pkg.beach-safari-and-tea-country.ext.1.price': onRequest,
  'pkg.beach-safari-and-tea-country.stop.bentota.intro':
    'Il tuo autista-guida ti accoglie all’aeroporto internazionale di Bandaranaike e scende direttamente in autostrada fino a Bentota: circa un’ora e mezza, il trasferimento più breve di tutti i nostri programmi. Poi non succede nulla per due giorni, deliberatamente. Entrambi sono completamente liberi in mezza pensione, su una spiaggia dove il fiume Bentota incontra il mare — ed è il motivo per cui ogni sport acquatico dell’isola opera da questo tratto d’acqua. Colombo è una corsa facile verso nord se vuoi una giornata in città, e le mangrovie del Madu Ganga e il centro tartarughe di Kosgoda sono entrambi vicini, ma non c’è alcun obbligo di fare nulla di tutto questo.',
  'pkg.beach-safari-and-tea-country.stop.yala.subLabel': '(via Galle)',
  'pkg.beach-safari-and-tea-country.stop.yala.intro':
    'Segui la costa meridionale, fermandoti al Forte di Galle: una città mercantile olandese cinta da mura su un promontorio con bastioni su tre lati, ancora un quartiere vivo anziché un museo. I pescatori sui trampoli lavorano su questo tratto di costa se l’ora è quella giusta. Nel pomeriggio sei a Yala per la prima di due notti, e il safari è su un 4x4 scoperto privato con tracciatore nel parco che ha una delle densità di leopardi più alte al mondo. Qui vivono anche orsi labiati, elefanti, bufali selvatici e coccodrilli, e le piste scendono fino a una spiaggia deserta dove la macchia incontra l’Oceano Indiano.',
  'pkg.beach-safari-and-tea-country.stop.ella.intro':
    'La strada verso nord fuori dalla zona arida sale con decisione, e le cascate di Ravana compaiono lungo il tragitto in salita: venticinque metri d’acqua che scendono tra giungla e massi, al massimo nei mesi successivi al monsone. Il resto di quella giornata è libero a Ella, una sola strada di caffè incastrata tra due montagne con una vista giù per la gola che arriva alle pianure del sud. La tua giornata intera qui comprende il paese e il Nine Arch Bridge, un viadotto del 1921 costruito senza acciaio, che esce dalla giungla su nove campate di pietra. Alzati presto una delle mattine per il Little Adam’s Peak: quarantacinque minuti in salita per l’alba più bella della regione collinare.',
  'pkg.beach-safari-and-tea-country.stop.kandy.intro':
    'Questa è la giornata del tè. La strada da Ella a Kandy attraversa la regione collinare per tutta la sua lunghezza tra tenute terrazzate, e la spezzi in una fabbrica in attività per seguire la foglia dai soppalchi di appassimento ai rulli e ai forni fino a una degustazione di gradi che quasi mai lasciano l’isola. Arrivi a Kandy per la puja serale al Tempio del Sacro Dente, dove un dente del Buddha è custodito — e conteso — da più di mille anni, e dove i tamburini aprono ancora la camera interna tre volte al giorno.',
  'pkg.beach-safari-and-tea-country.stop.negombo.subLabel': '(via Colombo)',
  'pkg.beach-safari-and-tea-country.stop.negombo.intro':
    'Scendi dalle colline verso Colombo per un tour di mezza giornata della capitale commerciale: il bazar di Pettah e la sua Moschea Rossa a righe, il quartiere coloniale del Fort e l’Old Dutch Hospital, il tempio di Gangaramaya e Galle Face Green a fine pomeriggio con i venditori di aquiloni. Poi una breve risalita della costa fino a Negombo per la tua ultima notte: una città di pescatori a venti minuti dal terminal, il che rende il mattino successivo molto meno stressante di una partenza dalla città.',
  'pkg.beach-safari-and-tea-country.stop.departure.location': departure,
  'pkg.beach-safari-and-tea-country.stop.departure.subLabel': toAirport('Negombo'),
  'pkg.beach-safari-and-tea-country.stop.departure.intro': departureIntro,
};

export default content;
