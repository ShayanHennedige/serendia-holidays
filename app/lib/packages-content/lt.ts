import type { ContentDictionary } from '../tourPackagesI18n';

/* Repeated boilerplate, written once. */
const halfDay = 'Trukmė: pusė dienos';
const daily = 'Kasdienės išvykos';
const privateGuide = 'Privati patirtis su jūsų vairuotoju-gidu';
const unesco = 'Įėjimas į UNESCO pasaulio paveldo objektą įskaičiuotas';
const onRequest = 'Kaina pagal užklausą';
const perPerson = '2 asmenims';
const period = '2026 m. lapkr. 1–gruod. 19 d. ir 2027 m. saus. 11–bal. 30 d.';
const roomNight = (amount: number) => `USD ${amount} už kambarį per naktį`;
const departure = 'Išvykimas';
const toAirport = (from: string) => `(iš ${from} į oro uostą)`;
const departureIntro =
  'Paskutinis rytas prie vandens, o tada vairuotojas-gidas pasiima jus pervežimui į Bandaranaike tarptautinį oro uostą — laikas suderintas su jūsų skrydžiu ir su patogia atsarga kelionei. Jei išskrendate vėlai, galime suorganizuoti kambarį dienai, paskutinę ekskursiją ar pietų sustojimą pakeliui, užuot palikę jus laukti terminale: tik pasakykite, ir mes tai įtrauksime į dienos planą.';
const culturalTriangle = 'Kultūrinis trikampis';
const forCulturalTriangle = '(Kultūriniam trikampiui)';
const moreBentotaTitle = '1 variantas: daugiau laiko Bentotoje';
const hillCountry = 'Kalnų kraštas';
const sigiriya = 'Sigirija';
const dambulla = 'Dambula';
const kandy = 'Kandis';
const nuwaraEliya = 'Nuvara Elija';
const ella = 'Ela';
const yala = 'Jala';
const galle = 'Galė';
const bentota = 'Bentota';
const negombo = 'Negombas';
const colombo = 'Kolombas';

const content: ContentDictionary = {
  /* ---------------- Experiences ---------------- */
  'exp.polonnaruwa.name': 'Senovinis Polonaruvos miestas',
  'exp.polonnaruwa.location': culturalTriangle,
  'exp.polonnaruwa.summary':
    'Antroji Šri Lankos sostinė yra geriausiai išlikęs iš salos griuvėsių miestų — kompaktiška, pėsčiomis apeinama karališkųjų rūmų, maudymosi baseinų ir milžiniškų uoloje iškaltų Budų visuma, palikta XII amžiaus karalių.',
  'exp.polonnaruwa.detail.0':
    'Polonaruva — vienintelis senovinis miestas, kurį galima skaityti kaip žemėlapį. Ten, kur Anuradhapura išsidriekusi, Polonaruva sutelkta į vieną į sodą panašų archeologinį parką, kurį apeisite per rytą, ir beveik viskas tebestovi: plytinis karaliaus Parakramabahu septynių aukštų rūmų kiautas, Keturkampis su apvaliuoju Vatadage, Lankatilakos šventykla, kurios sienos kyla 17 metrų abipus begalvės Budos statulos.',
  'exp.polonnaruwa.detail.1':
    'Kulminacija — Gal Vihara: keturios milžiniškos figūros, iškaltos tiesiai vienoje granito sienoje. Sėdintis medituojantis Buda, stovinti figūra sukryžiuotomis rankomis ir 14 metrų gulintis Buda, kurio akmuo apdirbtas taip subtiliai, kad iki šiol matyti pagalvės įlinkis po galva. Vairuotojas-gidas papasakos apie valdymą, sukūrusį visa tai, ir kodėl miestas vos po šimtmečio buvo paliktas džiunglėms.',
  'exp.polonnaruwa.facts.0': halfDay,
  'exp.polonnaruwa.facts.1': 'Geriausia ryto vėsoje',
  'exp.polonnaruwa.facts.2': 'Kasdienės išvykos, ištisus metus',
  'exp.polonnaruwa.facts.3': privateGuide,
  'exp.polonnaruwa.facts.4': unesco,
  'exp.polonnaruwa.goodToKnow':
    'Teritorija plati ir beveik be pavėsio — pasiimkite kepurę ir vandens. Šventyklose pečiai ir keliai turi būti pridengti, o prie Gal Viharos nusiaunama avalynė.',

  'exp.minneriya.name': 'Džipų safaris Mineurijos nacionaliniame parke',
  'exp.minneriya.location': culturalTriangle,
  'exp.minneriya.summary':
    'Sausuoju metų laiku vėlyvą popietę į besitraukiančio tvenkinio pievas susirenka šimtai laukinių dramblių — didžiausias Azijos dramblių susibūrimas pasaulyje.',
  'exp.minneriya.detail.0':
    'Kai sausaisiais mėnesiais Mineurijos tvenkinys atsitraukia, jis palieka šviežios žolės lygumą — ir ateina drambliai. Jie renkasi šeimų grupėmis per visą vėlyvą popietę, kol liepos–rugsėjo „Gathering“ įkarštyje tame pačiame kranto ruože vienu metu gali būti trys šimtai ar daugiau gyvūnų, įskaitant jauniklius.',
  'exp.minneriya.detail.1':
    'Išvyksite atviru visureigiu su pėdsekiu, žinančiu, kur bandos pastaruoju metu ganėsi. Be dramblių parke gyvena sambarai ir dėmėtieji elniai, laukiniai buivolai, kuoduotosios makakos, dažytieji gandrai ir — kantriesiems — kartkartėmis leopardas medžių pakraštyje.',
  'exp.minneriya.facts.0': halfDay,
  'exp.minneriya.facts.1': 'Laikas: nuo 15 iki 18 val.',
  'exp.minneriya.facts.2': 'Kasdienės išvykos, veikia ištisus metus',
  'exp.minneriya.facts.3': 'Privatus visureigis su pėdsekiu',
  'exp.minneriya.facts.4': 'Įėjimas į parką ir džipo nuoma įskaičiuoti',
  'exp.minneriya.goodToKnow':
    'Priklausomai nuo to, kur pasitraukė bandos, pėdsekys gali nuvežti jus į gretimą Kaudulos arba Hurulu ekologinį parką — drambliai keliauja tarp visų trijų, o mes visada sekame gyvūnus.',

  'exp.sigiriya-rock.name': 'Sigirijos uolos tvirtovė',
  'exp.sigiriya-rock.location': sigiriya,
  'exp.sigiriya-rock.summary':
    'Stati granito uola, kylanti 200 metrų virš lygių džiunglių, su V amžiaus dangaus rūmų griuvėsiais viršuje, pasiekiamais laiptais, einančiais tarp dingusio akmeninio liūto letenų.',
  'exp.sigiriya-rock.detail.0':
    'Karalius Kašiapa pastatė sostinę uolos viršūnėje, nes dėl sosto nužudė savo tėvą ir tikėjosi, kad brolis ateis jo pasiimti. Tai, ką jis paliko, yra vienas seniausių išlikusių kraštovaizdinio miestų planavimo pavyzdžių pasaulyje: simetriški vandens sodai papėdėje, akmenų sodai virš jų ir rūmų kompleksas dviejų hektarų viršukalnėje su į gyvą uolą iškaltomis cisternomis.',
  'exp.sigiriya-rock.detail.1':
    'Kopimas — apie 1 200 laiptelių. Pusiaukelėje sraigtiniai laiptai suka į priedangą uoloje, kur garsiosios nuogakrūčių dvaro damų freskos išlaikė spalvą penkiolika šimtų metų. Toliau tęsiasi Veidrodinė siena, kadaise nublizginta iki blizgesio, o dabar nusėta lankytojų grafičiais nuo pat VIII amžiaus. Viršuje po jumis atsiveria visas Kultūrinis trikampis.',
  'exp.sigiriya-rock.facts.0': halfDay,
  'exp.sigiriya-rock.facts.1': 'Iki viršūnės apie 1 200 laiptelių',
  'exp.sigiriya-rock.facts.2': daily,
  'exp.sigiriya-rock.facts.3': privateGuide,
  'exp.sigiriya-rock.facts.4': 'Įėjimas ir muziejus vietoje įskaičiuoti',
  'exp.sigiriya-rock.goodToKnow':
    'Kopkite anksti ryte arba po 16 val. — uola kaupia karštį, o vidurdienį laiptai prisipildo žmonių. Reikia neblogos fizinės formos. Pidurangala, uola priešais, yra lengvesnė alternatyva ir atveria klasikinį vaizdą į pačią Sigiriją.',

  'exp.anuradhapura.name': 'Šventasis Anuradhapuros miestas',
  'exp.anuradhapura.location': 'Anuradhapura',
  'exp.anuradhapura.summary':
    'Pirmoji salos sostinė ir iki šiol gyva piligrimystės vieta — su kalvų dydžio plytinėmis stupomis, vienuolynų griuvėsiais po medžiais ir figmedžiu, išaugintu iš 288 m. pr. Kr. paimto ūglio.',
  'exp.anuradhapura.detail.0':
    'Anuradhapura valdė salą daugiau nei tūkstantį metų, o tai, kas išliko, savo mastu neturi atitikmens Šri Lankoje. Abhajagiris ir Džetavanarama buvo tarp aukščiausių antikos pasaulio statinių po Gizos piramidžių; net pusiau sugriuvusios jos vis dar kyla virš medžių viršūnių. Tarp jų driekiasi maudyklės, mėnulio akmenys, sargybiniai akmenys ir vienuolynų refektoriumai, kuriuose gyveno tūkstančiai vienuolių.',
  'exp.anuradhapura.detail.1':
    'Visa ko širdis — Šri Maha Bodhi, išaugintas iš medžio, po kuriuo sėdėjo Buda, ūglio; jį čia atgabeno vienuolė Sanghamita ir pasodino 288 m. pr. Kr. Tai seniausias žmogaus pasodintas medis pasaulyje su užfiksuota sodinimo data, ir jis vis dar prižiūrimas, vis dar puošiamas girliandomis, vis dar kasdien apsuptas baltai vilkinčių piligrimų.',
  'exp.anuradhapura.facts.0': halfDay,
  'exp.anuradhapura.facts.1': daily,
  'exp.anuradhapura.facts.2': privateGuide,
  'exp.anuradhapura.facts.3': unesco,
  'exp.anuradhapura.facts.4': 'Įskaičiuota į Kultūrinio trikampio bilietą',
  'exp.anuradhapura.goodToKnow':
    'Tai veikianti maldos vieta, o ne vien griuvėsiai. Tikimasi baltų ar šviesių drabužių, dengiančių pečius ir kelius; prie Bodhi medžio ir ant stupų aikštelių nusiaunama avalynė ir nusiimamos kepurės — grindinys įkaista, tad verta pasiimti kojines.',

  'exp.hot-air-balloon.name': 'Skrydis oro balionu virš Kultūrinio trikampio',
  'exp.hot-air-balloon.location': sigiriya,
  'exp.hot-air-balloon.summary':
    'Pakilkite prieš aušrą ir plaukite virš ryžių laukų, tvenkinių ir džiunglių, kai Sigirijos uola pagauna pirmąją šviesą; nusileidus laukia taurė putojančio vyno.',
  'exp.hot-air-balloon.detail.0':
    'Jus pasiims dar tamsoje ir nuveš į pakilimo aikštelę stebėti, kaip pripučiamas balionas. Skrydis trunka apie valandą — žemai virš bundančių kaimų, buivolų tvenkiniuose ir miško lajų, o saulei tekant pro rūką kyšo Kultūrinio trikampio uolų viršūnės.',
  'exp.hot-air-balloon.detail.1':
    'Kur nusileisite, visiškai priklauso nuo vėjo, ir tai dalis žavesio: antžeminė komanda seka paskui jus ir laukia nusileidimo vietoje su putojančio vyno ar vaisių sulčių tostu bei skrydžio sertifikatu.',
  'exp.hot-air-balloon.facts.0': 'Trukmė: apie 1,5 valandos ore',
  'exp.hot-air-balloon.facts.1': 'Laikas: nuo 5.30 iki 7 val.',
  'exp.hot-air-balloon.facts.2': 'Vykdoma tik nuo lapkričio iki balandžio',
  'exp.hot-air-balloon.facts.3': 'Priklauso nuo oro sąlygų ryte',
  'exp.hot-air-balloon.facts.4': 'Taikomas priedas, mokamas vietoje arba įtraukiamas į pasiūlymą',
  'exp.hot-air-balloon.goodToKnow':
    'Netinka jaunesniems nei 16 metų vaikams, nėščiosioms ir asmenims, turintiems širdies ligų. Esant netinkamam vėjui skrydžiai atšaukiami ir pinigai grąžinami — taip nutinka.',

  'exp.dambulla.name': 'Auksinė Dambulos olų šventykla',
  'exp.dambulla.location': dambulla,
  'exp.dambulla.summary':
    'Penkios uolos šone iškaltos olos su 150 Budos statulų, ištapytos nuo grindų iki lubų — didžiausias ir geriausiai išlikęs olų šventyklų kompleksas Šri Lankoje.',
  'exp.dambulla.detail.0':
    'Trumpas kopimas uolos šlaitu atveda į terasą, o už jos — į penkias olas, nepertraukiamai religiniams tikslams naudojamas dvidešimt du šimtmečius. Karalius Valagamba čia slėpėsi tremtyje I a. pr. Kr. ir, atgavęs karalystę, pavertė olas šventykla.',
  'exp.dambulla.detail.1':
    'Viduje uolinės lubos išlinkusios iki sienų, o kiekvienas paviršius ištapytas — sūkuriuojančios Budos gyvenimo freskos, sekančios natūralius akmens kontūrus. Iš viso čia 150 statulų, tarp jų 14 metrų gulintis Buda, iškaltas pačioje uolos sienoje, ir šaltinis, lašantis nuo lubų į indą, apie kurį niekada nebuvo girdėta, kad būtų išdžiūvęs.',
  'exp.dambulla.facts.0': 'Trukmė: 2–3 valandos',
  'exp.dambulla.facts.1': 'Iki olų terasos apie 350 laiptelių',
  'exp.dambulla.facts.2': daily,
  'exp.dambulla.facts.3': privateGuide,
  'exp.dambulla.facts.4': unesco,
  'exp.dambulla.goodToKnow':
    'Pečiai ir keliai pridengti, avalynė nusiaunama terasoje. Akmeninis grindinys įkaista jau iki vidurdienio — pasiimkite kojines. Beždžionės ant laiptų pagriebia viską, kas laisvai laikoma rankose.',

  'exp.spice-garden.name': 'Matalės prieskonių sodas',
  'exp.spice-garden.location': 'Matalė',
  'exp.spice-garden.summary':
    'Pasivaikščiokite veikiančiame prieskonių sode kalvose virš Matalės, kur Ceilono cinamonas, kardamonas, pipirai ir vanilė auga greta, ir pamatykite, kaip kiekvienas jų iš tikrųjų atrodo prieš patekdamas į stiklainį.',
  'exp.spice-garden.detail.0':
    'Šri Lanka savo ankstyvuosius turtus sukūrė iš cinamono, o Matalė iki šiol yra jo centras. Gidas ves jus per sodą augalas po augalo: pipirų vijokliai, besikabinantys į medžius, kardamonas pavėsyje, muskatas, gvazdikėliai, ciberžolė, vanilės orchidėjos ir pats cinamonas, kurio tikroji žievė lupama ir suvyniojama rankomis į blyškius vamzdelius, skiriančius Ceilono cinamoną nuo šiurkštesnės kasijos, kitur parduodamos kaip cinamonas.',
  'exp.spice-garden.detail.1':
    'Paprastai vyksta žievės lupimo demonstracija, siūloma puodelis prieskoninės arbatos ir galimybė išbandyti trumpą galvos bei pečių masažą su žolelių aliejais. Sodo parduotuvėje prekiaujama aliejais ir balzamais; pirkti nieko neprivalote.',
  'exp.spice-garden.facts.0': 'Trukmė: apie 1 valandą',
  'exp.spice-garden.facts.1': 'Kelyje iš Dambulos į Kandį',
  'exp.spice-garden.facts.2': daily,
  'exp.spice-garden.facts.3': privateGuide,
  'exp.spice-garden.facts.4': 'Prieskoninė arbata ir demonstracija nemokamai',
  'exp.spice-garden.goodToKnow':
    'Šie sodai ekskursijos pabaigoje turi parduotuvę. Kainos gerokai aukštesnės nei vietinėje turgavietėje, ir niekas nėra privaloma — pasižvalgykite arba tiesiog praeikite pro šalį.',

  'exp.kandy-temple.name': 'Šventojo Danties relikvijos šventykla',
  'exp.kandy-temple.location': kandy,
  'exp.kandy-temple.summary':
    'Labiausiai gerbiama budistinė vieta Šri Lankoje, sauganti Budos dantį, daugiau nei tūkstantį metų buvusį valdžios simboliu — geriausia aplankyti per vakarinės pudžos būgnų muziką.',
  'exp.kandy-temple.detail.0':
    'Danties relikvija į Šri Lanką atkeliavo IV amžiuje, paslėpta princesės plaukuose, ir buvo laikoma, kad tas, kuris ją turi, turi teisę valdyti salą. Nuo tada dėl jos kovota, ji kilnota, slėpta ir nešta procesijose, o dabar ji ilsisi auksinėje skrynioje paskutinių Kandžio karalių rūmų komplekse prie ežero.',
  'exp.kandy-temple.detail.1':
    'Planuokite apsilankymą per vieną iš trijų dienos pudžų, kai kandiečių būgnininkai ir ragų pūtėjai užgroja prie vidinės menės, o durys atveriamos, kad piligrimų eilė su lotoso žiedais rankose praeitų pro skrynią. Paties danties nepamatysite — jis palieka relikvijorių tik išskirtiniais metais, bet svarbiausia čia yra atmosfera.',
  'exp.kandy-temple.facts.0': 'Trukmė: apie 2 valandas',
  'exp.kandy-temple.facts.1': 'Vakarinė pudža paprastai prasideda 18.30 val.',
  'exp.kandy-temple.facts.2': daily,
  'exp.kandy-temple.facts.3': privateGuide,
  'exp.kandy-temple.facts.4': unesco,
  'exp.kandy-temple.goodToKnow':
    'Griežtas aprangos kodas: balti arba šviesūs drabužiai, pridengti pečiai ir keliai, avalynė nusiaunama ir paliekama prie įėjimo. Prie vartų atliekama saugumo patikra, tad keliaukite su kuo mažiau daiktų.',

  'exp.kandyan-dance.name': 'Kandiečių kultūrinių šokių pasirodymas',
  'exp.kandyan-dance.location': kandy,
  'exp.kandyan-dance.summary':
    'Valanda būgnų, kaukių šokio ir ėjimo per ugnį kalnų sostinėje — Kandžio karalystės ritualiniai šokiai, atliekami kiekvieną vakarą miesto centre.',
  'exp.kandyan-dance.detail.0':
    'Kandiečių šokių tradicijos išaugo iš šventyklų ritualo, o vakarinis pasirodymas iš eilės pereina pagrindines formas: Ves šokėjai su sidabrinėmis galvos puošmenomis, povo ir derliaus šokiai, akrobatinis Raban su sukamomis lėkštėmis ir kaukėtasis Kolam.',
  'exp.kandyan-dance.detail.1':
    'Užbaigiama lauke, kieme, ugnies šokiu ir ėjimu per ugnį — atlikėjai basi pereina karštų anglių guolį. Tai neslepiamai pasirodymas lankytojams, ir kartu paprasčiausias būdas apskritai pamatyti šiuos šokius ne rugpjūčio Esala Perahera metu.',
  'exp.kandyan-dance.facts.0': 'Trukmė: apie 1 valandą',
  'exp.kandyan-dance.facts.1': 'Laikas: pasirodymai prasideda 17 val.',
  'exp.kandyan-dance.facts.2': 'Kasdien, Kandžio mieste',
  'exp.kandyan-dance.facts.3': 'Taikomas priedas',
  'exp.kandyan-dance.facts.4': 'Vietos nenumeruotos — ateikite anksčiau dėl pirmųjų eilių',
  'exp.kandyan-dance.goodToKnow':
    'Ėjimas per ugnį vyksta lauke pabaigoje, tad žiūrovai keliasi iš vietų. Salėje pasidaro šilta, oro kondicionieriaus nėra.',

  'exp.botanical-garden.name': 'Peradenijos karališkieji botanikos sodai',
  'exp.botanical-garden.location': kandy,
  'exp.botanical-garden.summary':
    'Šešiasdešimt hektarų Mahavelio upės kilpoje, įrengti kaip karališkasis pramogų sodas, o dabar — keturi tūkstančiai rūšių, karališkųjų palmių alėja ir Javos figmedis, kurio laja didumo sulig teniso aikštele.',
  'exp.botanical-garden.detail.0':
    'Tai buvo kandiečių karališkosios šeimos sodai dar gerokai prieš tai, kai britai 1821 m. juos oficialiai sutvarkė, ir jie iki šiol yra gražiausi Pietų Azijoje. Svarbiausi akcentai verti kelionės: Didžioji veja su savo milžinišku Javos figmedžiu, dviguba karališkųjų palmių alėja, kabantis tiltas per upę ir orchidėjų oranžerija, kurioje bet kuriuo metu žydi keli šimtai veislių.',
  'exp.botanical-garden.detail.1':
    'Prieskonių ir vaistinių augalų skyriai susisieja su viskuo, ką matėte Matalėje, o atminimo medžiai, per du šimtmečius pasodinti atvykusių valstybių vadovų, yra tyli salos diplomatijos istorijos kronika.',
  'exp.botanical-garden.facts.0': 'Trukmė: 2–3 valandos',
  'exp.botanical-garden.facts.1': '5 km į vakarus nuo Kandžio miesto',
  'exp.botanical-garden.facts.2': 'Kasdienės išvykos, atidaryta nuo 7.30 iki 17 val.',
  'exp.botanical-garden.facts.3': privateGuide,
  'exp.botanical-garden.facts.4': 'Įėjimas įskaičiuotas',
  'exp.botanical-garden.goodToKnow':
    'Teks nemažai vaikščioti atviroje vejoje. Rytais vėsiau, o orchidėjų oranžerijoje ramiau, kol dar neatvyko autobusų grupės. Aukštuose medžiuose prie upės miega skraidančios lapės — pakelkite akis.',

  'exp.kandy-city.name': 'Kandžio miesto ekskursija',
  'exp.kandy-city.location': kandy,
  'exp.kandy-city.summary':
    'Kalnų sostinė savo ritmu: ežeras, uždara turgavietė, brangakmenių dirbtuvė ir apžvalgos aikštelė virš miesto, nuo kurios sutemus atsiveria visas Kandžio dubuo.',
  'exp.kandy-city.detail.0':
    'Kandis priešinosi Europos valstybėms tris šimtmečius po to, kai pakrantė jau buvo kritusi, ir iki šiol atrodo kaip atskira šalis — vėsesnė, žalesnė, išdidesnė. Ekskursijoje aplankysite paskutinio karaliaus iškastą dirbtinį ežerą, kolonijinių laikų turgų su vaisių ir prieskonių prekystaliais bei dirbtuves, kuriose šlifuojami Šri Lankos safyrai ir mėnulio akmenys.',
  'exp.kandy-city.detail.1':
    'Užbaigsite Bahiravakandos arba Arthur’s Seat apžvalgos aikštelėje, iš kurios miestas matyti kalvų žiede su šventyklos stogais ir ežeru apačioje — geriausia dienos nuotrauka, ir geriausia ją daryti vėlyvą popietę.',
  'exp.kandy-city.facts.0': halfDay,
  'exp.kandy-city.facts.1': daily,
  'exp.kandy-city.facts.2': privateGuide,
  'exp.kandy-city.facts.3': 'Apsilankymas brangakmenių muziejuje ir turguje įskaičiuotas',
  'exp.kandy-city.facts.4': 'Geriausia derinti su vakarine pudža šventykloje',
  'exp.kandy-city.goodToKnow':
    'Kandžio vienpusio eismo sistema piko metu lėta. Brangakmenių ir batikos dirbtuvės dirba už komisinius — laikykite jas demonstracijomis ir pirkite tik tada, jei norite.',

  'exp.tea-factory.name': 'Arbatos fabriko ir plantacijos apžiūra',
  'exp.tea-factory.location': hillCountry,
  'exp.tea-factory.summary':
    'Sekite lapą nuo šlaito iki puodelio veikiančiame kalnų fabrike — vytinimo palėpės, sukimo mašinos, kaitinimo krosnys ir rūšių, kurių eksporte niekada nepamatysite, degustacija.',
  'exp.tea-factory.detail.0':
    'Kelias į arbatos kraštą kyla per apkarpytų žalių krūmų terasas, tarp eilių dirba skynėjos, o kažkur viršuje stūkso fabriko kaminas. Dauguma šių pastatų — Viktorijos laikų, o įranga ne ką jaunesnė: procesas beveik nepasikeitė.',
  'exp.tea-factory.detail.1':
    'Pereisite jį iš eilės: vytinimo loveliai, kuriuose lapas per naktį netenka drėgmės, volai, atveriantys ląsteles, oksidacijos guoliai, kuriuose lapas iš žalio virsta vario spalvos, kaitinimo krosnys ir galiausiai rūšiavimo sietai, atskiriantys rūšis. Viskas baigiasi degustacija ir galimybe įsigyti vieno ūkio rūšių, kurios dažniausiai lieka saloje.',
  'exp.tea-factory.facts.0': 'Trukmė: 1–2 valandos',
  'exp.tea-factory.facts.1': 'Kasdienės išvykos, nuo pirmadienio iki šeštadienio',
  'exp.tea-factory.facts.2': privateGuide,
  'exp.tea-factory.facts.3': 'Ekskursija po fabriką ir degustacija įskaičiuotos',
  'exp.tea-factory.facts.4': 'Veikiantis fabrikas — gamyba priklauso nuo skynimo sezono',
  'exp.tea-factory.goodToKnow':
    'Sekmadieniais ir poya (pilnaties) dienomis fabrikai nedirba, tad įranga gali stovėti. Kai kuriuose cechuose fotografuoti draudžiama.',

  'exp.nuwara-eliya-city.name': 'Nuvara Elijos miesto ekskursija',
  'exp.nuwara-eliya-city.location': nuwaraEliya,
  'exp.nuwara-eliya-city.summary':
    'Netikėčiausias Šri Lankos kalnų kurortas — Tiudorų stiliaus vilos, hipodromas, kolonijinių laikų paštas ir valčių ežeras, ir visa tai 1 900 metrų aukštyje pačiuose tropikuose.',
  'exp.nuwara-eliya-city.detail.0':
    'Britai pastatė Nuvara Eliją taip, kad jaustųsi kaip namie, ir niekada iki galo nesustojo: čia yra Viktorijos parkas, golfo laukas, Hill Club su aprangos kodu ir raudonų plytų paštas su laikrodžio bokštu, kuris neatrodytų svetimas Surėjuje. Vietiniai ją meiliai vadina Mažąja Anglija.',
  'exp.nuwara-eliya-city.detail.1':
    'Rytą aplankysite Gregorio ežerą, žydintį parką, senąsias miesto vilas ir turgų, o norintiems viso įspūdžio — sustojimas arbatai su sconais. Šiame aukštyje oras sutemus iš tiesų šaltas: netikėta, jei atvykote nuo pakrantės.',
  'exp.nuwara-eliya-city.facts.0': halfDay,
  'exp.nuwara-eliya-city.facts.1': 'Aukštis 1 868 metrai',
  'exp.nuwara-eliya-city.facts.2': daily,
  'exp.nuwara-eliya-city.facts.3': privateGuide,
  'exp.nuwara-eliya-city.facts.4': 'Įėjimai į Viktorijos parką ir prie Gregorio ežero įskaičiuoti',
  'exp.nuwara-eliya-city.goodToKnow':
    'Pasiimkite flisinį džemperį ar striukę — vakare temperatūra nukrenta iki maždaug 10 °C, o daugumoje viešbučių nėra oro kondicionieriaus, nes jo tiesiog nereikia.',

  'exp.sita-amman.name': 'Sita Amman šventykla',
  'exp.sita-amman.location': nuwaraEliya,
  'exp.sita-amman.summary':
    'Ryškiai nudažyta hinduistų šventykla prie kalnų upelio, laikoma vieta, kurioje Ramajanoje Ravana laikė nelaisvėje Sitą — su pėdų formos įdubomis uoloje kaip įrodymu.',
  'exp.sita-amman.detail.0':
    'Šventykla stovi Sita Elijoje, pušyne už kelių kilometrų nuo Nuvara Elijos, ir yra viena pagrindinių Ramajanos maršruto stotelių, traukiančių indų piligrimus į Šri Lanką. Gopuramas nusėtas įprasta dažytų figūrų minia; viduje yra Sitos, Ramos, Lakšmanos ir Hanumano šventovės.',
  'exp.sita-amman.detail.1':
    'Ant uolos priešais, upelio vagoje, matyti apvalios įdubos, kurias tikintieji laiko Hanumano pėdomis, o dirva tame krante kitokios spalvos nei visur kitur — nusvilusi, pasakoja legenda, kai jis padegė tą vietą. Tikite ar ne, tai žavinga vieta: vėsu, žalia, ir per ją teka vanduo.',
  'exp.sita-amman.facts.0': 'Trukmė: apie 45 minutes',
  'exp.sita-amman.facts.1': 'Kelyje iš Nuvara Elijos į Elą',
  'exp.sita-amman.facts.2': daily,
  'exp.sita-amman.facts.3': privateGuide,
  'exp.sita-amman.facts.4': 'Trumpa ir lengva stotelė — kopti nereikia',
  'exp.sita-amman.goodToKnow':
    'Prie įėjimo nusiaunama avalynė, o vietoj bilieto stovi aukų dėžutė. Būtina kukli apranga.',

  'exp.hill-train.name': 'Panoraminis traukinys per kalnų kraštą',
  'exp.hill-train.location': hillCountry,
  'exp.hill-train.summary':
    'Nanu Ojos–Elos linija nuolat vadinama viena gražiausių geležinkelio kelionių pasaulyje — trys ar keturios valandos pro arbatos terasas, tunelius ir debesų mišką, plačiai atvertomis durimis.',
  'exp.hill-train.detail.0':
    'Bėgiai buvo nutiesti arbatai gabenti, o vaizdingas maršrutas pasirinktas todėl, kad ten yra plantacijos. Kylate iš Nanu Ojos pro Haputalę ir Bandaravelą, vagonams krypstant posūkiuose virš apkarpyto žalumo slėnių, pro krioklius, eukaliptus ir retkarčiais pasitaikančią stotelę, kurioje beveik nieko nevyksta.',
  'exp.hill-train.detail.1':
    'Pusė malonumo — pats vagonas: nuleisti langai, atviros durys, koridoriumi nešiojama arbata ir vadai. Vairuotojas pasitiks jus kelionės gale su bagažu, tad keliaujate tik su fotoaparatu.',
  'exp.hill-train.facts.0': 'Trukmė: 3–4 valandos traukinyje',
  'exp.hill-train.facts.1': 'Nanu Oja–Ela arba Ela–Haputalė trumpesnei atkarpai',
  'exp.hill-train.facts.2': 'Rezervuotos vietos pagal galimybes',
  'exp.hill-train.facts.3': 'Taikomas priedas',
  'exp.hill-train.facts.4': 'Automobilis ir bagažas pasitinka jus atvykimo vietoje',
  'exp.hill-train.goodToKnow':
    'Rezervuotos pirmosios ir antrosios klasės vietos išparduodamos savaitėmis iš anksto, ypač nuo gruodžio iki kovo — pasakykite mums anksti ir užsakysime jas kartu su maršrutu.',

  'exp.ella-city.name': 'Elos miestelis ir Devynių arkų tiltas',
  'exp.ella-city.location': ella,
  'exp.ella-city.summary':
    'Kalnų miestelis, tapęs mėgstamiausia salos vieta nieko neveikti, ir Devynių arkų tiltas — kolonijinių laikų viadukas, lenkta linija išnyrantis iš džiunglių ant devynių akmeninių arkų.',
  'exp.ella-city.detail.0':
    'Ela — viena kavinių ir svečių namų gatvė įlinkyje tarp dviejų kalnų, o visi čia sustoja dėl vaizdo pro Elos tarpeklį, kuris giedrą rytą siekia net pietines lygumas.',
  'exp.ella-city.detail.1':
    'Iki Devynių arkų tilto veda trumpas pasivaikščiojimas per arbatos sodus ir džiungles. 1921 m. pastatytas be nė vieno plieno gabalo — pasakojama, kad visą jį buvo surijęs karas — jis kerta tarpeklį devyniomis plytų ir akmens arkomis, o miškas užsiveria iš abiejų pusių. Pasitikslinkite tvarkaraštį su gidu ir stovėkite ten, kai atvažiuos traukinys.',
  'exp.ella-city.facts.0': halfDay,
  'exp.ella-city.facts.1': 'Trumpas pasivaikščiojimas per arbatos sodus iki tilto',
  'exp.ella-city.facts.2': daily,
  'exp.ella-city.facts.3': privateGuide,
  'exp.ella-city.facts.4': 'Ravanos kriokliai ir Elos tarpeklio apžvalgos aikštelės įskaičiuotos',
  'exp.ella-city.goodToKnow':
    'Takas iki tilto nelygus, o vietomis eina veikiančiu geležinkeliu — avėkite tinkamą avalynę ir laikykitės gido nurodymų, kai laukiamas traukinys.',

  'exp.little-adams.name': 'Žygis į Little Adam’s Peak',
  'exp.little-adams.location': ella,
  'exp.little-adams.summary':
    'Ramus 45 minučių kilimas per arbatos plantacijas iki kalnagūbrio su 360 laipsnių vaizdu į Elos tarpeklį — gražiausia kalnų krašto saulėtekio vieta su mažiausiomis pastangomis.',
  'exp.little-adams.detail.0':
    'Skirtingai nei jo didysis bendravardis, Little Adam’s Peak reikalauja labai nedaug: takas tarp arbatos krūmų, keli laipteliai prie viršūnės ir žolėtas kalnagūbris 1 141 metro aukštyje, nuo kurio žemė krinta į tris puses.',
  'exp.little-adams.detail.1':
    'Kopkite pirmiesiems spinduliams. Slėnis apačioje prisipildo rūko, priešais stūkso Elos uola, o saulė teka virš lygumų. Daugumą rytų dalinsitės ja su saujele žmonių ir gausybe paukščių čiulbesio.',
  'exp.little-adams.facts.0': 'Trukmė: apie 2 valandas į abi puses',
  'exp.little-adams.facts.1': 'Geriausia saulėtekio metu, maždaug nuo 5.30 val.',
  'exp.little-adams.facts.2': 'Vidutinio sunkumo — apie 200 metrų aukščio skirtumas',
  'exp.little-adams.facts.3': 'Savarankiškai arba su vietiniu gidu pagal pageidavimą',
  'exp.little-adams.facts.4': 'Įėjimas nemokamas',
  'exp.little-adams.goodToKnow':
    'Takas molingas ir po lietaus tampa slidus. Sausu oru pakanka sportbačių; paskutinė atkarpa — laiptai.',

  'exp.ravana-falls.name': 'Ravanos kriokliai',
  'exp.ravana-falls.location': ella,
  'exp.ravana-falls.summary':
    'Dvidešimt penkių metrų kaskada, pakopomis krintanti uolos siena tiesiai prie Elos–Velavajos kelio, įspūdingiausia mėnesiais po musono.',
  'exp.ravana-falls.detail.0':
    'Kriokliai pavadinti pagal Ramajaną — sakoma, kad urve už jų karalius Ravana slėpė Sitą — ir jie pasirodo be įspėjimo leidžiantis nuo Elos: kelias pasisuka, ir visa kaskada tiesiog atsiduria priešais jus.',
  'exp.ravana-falls.detail.1':
    'Vanduo pakopomis leidžiasi pro džiungles ir riedulius į baseiną apačioje. Kelio lygyje įrengta apžvalgos aikštelė, o norintiems prieiti arčiau — laipteliai žemyn prie baseino; šalia prekiaujama karališkaisiais kokosais ir vaisiais.',
  'exp.ravana-falls.facts.0': 'Trukmė: apie 30 minučių',
  'exp.ravana-falls.facts.1': 'Sustojimas prie kelio, 6 km nuo Elos',
  'exp.ravana-falls.facts.2': 'Vandeningiausi nuo lapkričio iki vasario',
  'exp.ravana-falls.facts.3': privateGuide,
  'exp.ravana-falls.facts.4': 'Įėjimas nemokamas',
  'exp.ravana-falls.goodToKnow':
    'Uolos aplink baseiną slidžios, o srovė stipresnė, nei atrodo — čia pasitaiko skendimų. Grožėkitės iš apžvalgos aikštelės, o ne maudykitės.',

  'exp.kataragama.name': 'Kataragama ir Kiri Vehera',
  'exp.kataragama.location': 'Kataragama',
  'exp.kataragama.summary':
    'Viena iš nedaugelio vietų pasaulyje, vienodai šventa budistams, hinduistams ir musulmonams — vakaras su būgnais, aliejinėmis lempelėmis ir aukomis dievo Kataragamos šventovėje, šalia akinamai baltos stupos.',
  'exp.kataragama.detail.0':
    'Kataragama yra piligrimystės miestas jau du tūkstančius metų ir priklauso visiems: budistai ateina prie Kiri Veheros stupos, hinduistai — į Murugano Maha Devale šventovę, musulmonai — į toje pačioje teritorijoje esančią mečetę, o vedų vyresnieji iki šiol turi vaidmenį kasmetinėje šventėje.',
  'exp.kataragama.detail.1':
    'Atvykite vakarinei pudžai. Piligrimai kerta Menik Gangą nusiprausti prieš įeidami, o paskui neša vaisių ir gėlių padėklus per smėlėtą kiemą būgnų ritmu, kai temstant įsižiebia aliejinės lempelės. Greta Kiri Veheros stupa, pagal tradiciją pastatyta II a. pr. Kr., baltai švyti virš medžių.',
  'exp.kataragama.facts.0': 'Trukmė: 2–3 valandos',
  'exp.kataragama.facts.1': 'Vakarinė pudža apie 18.30 val.',
  'exp.kataragama.facts.2': 'Kasdien, kelyje tarp Elos ir Jalos',
  'exp.kataragama.facts.3': privateGuide,
  'exp.kataragama.facts.4': 'Įėjimas nemokamas — aukų galima nusipirkti prie vartų',
  'exp.kataragama.goodToKnow':
    'Avalynė nusiaunama gerokai prieš šventovę, o smėlis išlieka šiltas iki vakaro. Renkitės kukliai, baltai arba šviesiai. Tai veikianti piligrimystės vieta, tad fotografuokite diskretiškai.',

  'exp.yala-safari.name': 'Džipų safaris Jalos nacionaliniame parke',
  'exp.yala-safari.location': yala,
  'exp.yala-safari.summary':
    'Svarbiausiame Šri Lankos rezervate gyvena viena tankiausių leopardų populiacijų pasaulyje, taip pat lūpiniai lokiai, drambliai ir krokodilai — ir tai vienintelis salos safaris, kuris baigiasi prie jūros.',
  'exp.yala-safari.detail.0':
    'Jalos 1-asis blokas pagal tankį yra pasaulio leopardų sostinė, o katės čia neįprastai ramiai reaguoja į automobilius — todėl pamatyti jas pavyksta kur kas dažniau, nei būtų galima spėti vien iš skaičių. Be leopardų parke gyvena lūpiniai lokiai (didžiausi šansai birželį ir liepą, kai sunoksta palu vaisiai), drambliai, laukiniai buivolai, dėmėtieji elniai, pelkiniai krokodilai vandens telkiniuose ir daugiau nei du šimtai paukščių rūšių.',
  'exp.yala-safari.detail.1':
    'Išvyksite privačiu atviru visureigiu su pėdsekiu, pirmiesiems spinduliams, kai gyvūnai dar juda. Pats kraštovaizdis — pusė malonumo: krūmynų džiunglės, virstančios lagūnomis, musoninis miškas, granito atodangos ir Indijos vandenynas, daužantis tuščią Patanangalos paplūdimį.',
  'exp.yala-safari.facts.0': 'Trukmė: visa diena arba pusė dienos auštant ar temstant',
  'exp.yala-safari.facts.1': 'Laikas: nuo 5.30 val. arba nuo 14 iki 18 val.',
  'exp.yala-safari.facts.2': 'Kasdienės išvykos — parkas kasmet rugsėjį uždaromas dėl sausros',
  'exp.yala-safari.facts.3': 'Privatus visureigis su pėdsekiu',
  'exp.yala-safari.facts.4': 'Įėjimas į parką, džipas ir pėdsekys įskaičiuoti',
  'exp.yala-safari.goodToKnow':
    'Parkas dulkėtas, o keliukai nelygūs. Pasiimkite skarelę, akinius nuo saulės ir žiūronus, o jei galite, rinkitės išvyką auštant — šviesa geresnė, o gyvūnai aktyvesni prieš karštį.',

  'exp.galle-fort.name': 'Galės fortas',
  'exp.galle-fort.location': galle,
  'exp.galle-fort.summary':
    'Mūru apjuostas olandų prekybos miestas ant iškyšulio Indijos vandenyne, iki šiol gyvenamas ir apeinamas per valandą — koralinio akmens pylimai, švyturys ir kolonadomis puoštų vilų gatvės, dabar pilnos galerijų ir kavinių.',
  'exp.galle-fort.detail.0':
    'Portugalai iškyšulį įtvirtino, olandai 1663 m. jį kaip reikiant perstatė, o britai tiesiog įsikraustė. Tai, kas išliko, yra geriausiai išsilaikęs europiečių statytas įtvirtinimas Azijoje ir, kas neįprasta, gyvas kvartalas, o ne muziejus — už tų durų gyvena žmonės.',
  'exp.galle-fort.detail.1':
    'Pirmiausia apeikite pylimus visu ratu, su vandenynu iš trijų pusių. Paskui nusileiskite į gatvių tinklą: olandų reformatų bažnyčia su antkapių grindimis, Meeran Jumma mečetė priešais švyturį, Jūrų muziejus senajame sandėlyje ir pavėsingos Pedlar’s bei Church gatvės, kur senieji pirklių namai virto butikais, knygynais ir vietomis prisėsti prie kavos.',
  'exp.galle-fort.facts.0': halfDay,
  'exp.galle-fort.facts.1': 'Kasdien — pylimai gražiausi saulėlydžio metu',
  'exp.galle-fort.facts.2': privateGuide,
  'exp.galle-fort.facts.3': 'UNESCO pasaulio paveldo objektas — įėjimas į fortą nemokamas',
  'exp.galle-fort.facts.4': 'Pėsčiųjų ekskursija lygiomis, grįstomis gatvėmis',
  'exp.galle-fort.goodToKnow':
    'Vidurdienį už sienų beveik nėra pavėsio. Tinkamiausias metas — nuo vėlyvos popietės iki saulėlydžio ant pylimų.',

  'exp.madu-river.name': 'Valčių safaris Madu upe',
  'exp.madu-river.location': 'Balapitija',
  'exp.madu-river.summary':
    'Šešiasdešimt keturių salų ir tankių mangrovių tunelių pelkynas už pakrantės, tyrinėjamas motorine valtimi — cinamono ūkeliai, šventykla saloje, varanai ir tulžiai.',
  'exp.madu-river.detail.0':
    'Madu Gangos žiotys yra saugoma Ramsaro konvencijos pelkė ir vienas paskutinių nepaliestų mangrovių miško ruožų Šri Lankoje. Valtis išplukdo jus per atvirą lagūną, o paskui įsiskverbia į kanalus, tokius siaurus, kad mangrovių šaknys užsiveria virš galvos ir tenka išjungti variklį.',
  'exp.madu-river.detail.1':
    'Sustojimai paprastai apima Kothduvą — mažą mišku apaugusią salą su budistų šventykla — ir šeimos cinamono sklypą, kur parodys, kaip žievė lupama ir suvyniojama rankomis. Stebėkite šakas: vandeniniai varanai, tulžiai, kormoranai, o ankstyvą rytą — makakų būriai.',
  'exp.madu-river.facts.0': 'Trukmė: apie 2 valandas',
  'exp.madu-river.facts.1': 'Išplaukiama iš Balapitijos, 20 minučių nuo Bentotos',
  'exp.madu-river.facts.2': 'Kasdienės išvykos — ramiausia rytais',
  'exp.madu-river.facts.3': 'Privati valtis',
  'exp.madu-river.facts.4': 'Valties nuoma ir sustojimai salose įskaičiuoti',
  'exp.madu-river.goodToKnow':
    'Kai kurie operatoriai siūlo „žuvų terapijos“ baseinus ir laiko nelaisvėje gyvūnus nuotraukoms. Mūsiškis to nedaro, ir prašome neremti tų, kurie taip elgiasi.',

  'exp.turtle-hatchery.name': 'Kosgodos vėžlių veisykla',
  'exp.turtle-hatchery.location': 'Kosgoda',
  'exp.turtle-hatchery.summary':
    'Apsaugos veisykla paplūdimyje, kur iš brakonierių atpirkti kiaušiniai vėl užkasami, saugomi, o jaunikliai sutemus paleidžiami į jūrą.',
  'exp.turtle-hatchery.detail.0':
    'Šiame pakrantės ruože peri penkios iš septynių pasaulio jūrinių vėžlių rūšių, ir visos penkios yra nykstančios. Kosgodos veisyklos superka lizdus iš tų, kurie kitaip kiaušinius parduotų, užkasa juos saugomame smėlyje ir paleidžia jauniklius prieblandoje, kai kirai jau pasitraukę.',
  'exp.turtle-hatchery.detail.1':
    'Gidas aprodys baseinus, kuriuose laikomi sužeisti ir albinosai suaugėliai, negalintys išgyventi laisvėje, ir paaiškins gyvenimo ciklą bei jam kylančias grėsmes. Jei būsite čia tinkamu vakaro metu, galbūt pamatysite paleidimą.',
  'exp.turtle-hatchery.facts.0': 'Trukmė: apie 45 minutes',
  'exp.turtle-hatchery.facts.1': 'Geriausia vėlyvą popietę, dėl vakarinio paleidimo',
  'exp.turtle-hatchery.facts.2': daily,
  'exp.turtle-hatchery.facts.3': privateGuide,
  'exp.turtle-hatchery.facts.4': 'Įėjimo auka įskaičiuota',
  'exp.turtle-hatchery.goodToKnow':
    'Jauniklių lietimas jiems kelia stresą, ir mes to nerekomenduojame, kad ir ką jums siūlytų. Gera veisykla paleidžia vėžliukus per kelias dienas nuo išsiritimo, o ne laiko juos baseinuose nuotraukoms.',

  'exp.stilt-fishermen.name': 'Kogalos žvejai ant kuolų',
  'exp.stilt-fishermen.location': 'Kogala',
  'exp.stilt-fishermen.summary':
    'Labiausiai fotografuojamas Šri Lankos vaizdas — žvejai, tupintys ant į jūros dugną įkaltų skersinių ir žvejojantys seklumose auštant ir temstant.',
  'exp.stilt-fishermen.detail.0':
    'Žvejyba ant kuolų prasidėjo per Antrąjį pasaulinį karą, kai trūko maisto, o geros vietos ant uolų buvo užimtos; vyrai sukalė kuolus į rifo šelfą ir žvejojo virš vandens. 2004 m. cunamis nunešė daugumą kuolų ir didelę dalį laimikio, tad šiandien nemaža dalis matomų vyrų tiek pat vaidina, kiek žvejoja.',
  'exp.stilt-fishermen.detail.1':
    'Tai nesumažina reginio vertės tinkamu metu: žema saulė, siluetai ant vandens, pietinė pakrantė už jų. Gidas suras ruožą, kur vis dar iš tikrųjų žvejojama, ir iš anksto sutars mokestį, jei norėsite fotografuoti iš arti.',
  'exp.stilt-fishermen.facts.0': 'Trukmė: apie 1 valandą',
  'exp.stilt-fishermen.facts.1': 'Auštant arba valandą prieš saulėlydį',
  'exp.stilt-fishermen.facts.2': 'Palei pakrantę nuo Kogalos iki Veligamos',
  'exp.stilt-fishermen.facts.3': privateGuide,
  'exp.stilt-fishermen.facts.4': 'Fotografavimo mokestis mokamas vietoje',
  'exp.stilt-fishermen.goodToKnow':
    'Dėl mokesčio susitarkite prieš fotografuodami, o ne po to. Paprašykite vairuotojo-gido tuo pasirūpinti — jis žino įprastą kainą.',

  'exp.bentota-watersports.name': 'Vandens sportas Bentotoje',
  'exp.bentota-watersports.location': 'Bentota',
  'exp.bentota-watersports.summary':
    'Ramus vanduo ten, kur Bentotos upė susilieja su jūra, padarė šią vietą salos vandens sporto centru — vandens motociklai, bananinės valtys, burlenčių sportas, nardymas ir žvejyba atviroje jūroje.',
  'exp.bentota-watersports.detail.0':
    'Bentotos smėlio nerija dengia ilgą ramaus vandens ruožą, todėl atrodo, kad visos salos vandens sporto rūšys veikia būtent iš čia. Vandens motociklai, pripučiamos valtys ir bananai plaukioja upės pusėje; burlenčių ir aitvarų sportui geriau tinka atvira jūra, kai popiet sustiprėja vėjelis.',
  'exp.bentota-watersports.detail.1':
    'Nuo lapkričio iki balandžio jūra pakankamai skaidri nardymui, o prie Beruvalos guli laivų nuolaužos ir rifas; nuo to paties paplūdimio išplaukia žvejybos atviroje jūroje išvykos. Viską galima suorganizuoti tą pačią dieną per viešbutį.',
  'exp.bentota-watersports.facts.0': 'Nardymas galimas nuo lapkričio iki balandžio',
  'exp.bentota-watersports.facts.1': 'Veiklos upėje vyksta ištisus metus',
  'exp.bentota-watersports.facts.2': 'Užsakoma vietoje, valandomis arba seansais',
  'exp.bentota-watersports.facts.3': 'Taikomas priedas, mokamas vietoje',
  'exp.bentota-watersports.facts.4': 'Įranga ir instruktažas suteikiami',
  'exp.bentota-watersports.goodToKnow':
    'Įsitikinkite, kad operatorius duoda gelbėjimosi liemenes ir kad jūsų kelionės draudimas apima motorizuotą vandens sportą — ne visos poliso sąlygos jį dengia.',

  'exp.colombo-city.name': 'Kolombo miesto ekskursija',
  'exp.colombo-city.location': colombo,
  'exp.colombo-city.summary':
    'Komercinė sostinė per pusdienį — Pettah turgus, raudonai baltai dryžuota mečetė, kolonijinis Fortas, Gangaramajos šventykla ir saulėlydis Galle Face Green parke.',
  'exp.colombo-city.detail.0':
    'Kolombas nėra miestas, kuris pats apie save praneša, ir būtent todėl jį verta apžiūrėti su gidu. Pradėsite Pettah — senajame turgaus kvartale, kur ištisos gatvės prekiauja vienu dalyku: geležies dirbiniais, tekstile, vytinta žuvimi — o virš visko dryžuotų plytų mūru kyla Raudonoji mečetė.',
  'exp.colombo-city.detail.1':
    'Toliau: kolonijinis Forto kvartalas ir Senoji olandų ligoninė, dabar restoranų kiemas; Gangaramajos šventykla su nepaprasta dovanotų daiktų kolekcija; Nepriklausomybės aikštė ir medžiais apsodintos Cinnamon Gardens alėjos. Užbaikite Galle Face Green parke per saulėlydį, su aitvarų pardavėjais, isso vadai vežimėliais ir puse Kolombo, išėjusio pasivaikščioti.',
  'exp.colombo-city.facts.0': halfDay,
  'exp.colombo-city.facts.1': daily,
  'exp.colombo-city.facts.2': privateGuide,
  'exp.colombo-city.facts.3': 'Įėjimas į šventyklą įskaičiuotas',
  'exp.colombo-city.facts.4': 'Apsipirkimo sustojimai pagal pageidavimą',
  'exp.colombo-city.goodToKnow':
    'Eismas intensyvus nuo 8 iki 10 ir nuo 16 iki 19 val., tad maršrutas sudarytas jo vengiant. Pettah uždaryta sekmadieniais ir poya dienomis.',

  'exp.negombo-lagoon.name': 'Negombo lagūna ir žuvies turgus',
  'exp.negombo-lagoon.location': negombo,
  'exp.negombo-lagoon.summary':
    'Katalikiškas žvejų miestas už dvidešimties minučių nuo oro uosto — olandų kanalai, aušros metu grįžtančios oruwa valtys su atrama ir didžiausias žuvies turgus vakarinėje pakrantėje.',
  'exp.negombo-lagoon.detail.0':
    'Negombas šimtmečius buvo žvejybos ir cinamono uostas ir tebėra didžia dalimi katalikiškas — todėl beveik kiekvienos gatvės gale stovi bažnyčia, o ant valčių priekių nutapyti šventųjų vardai.',
  'exp.negombo-lagoon.detail.1':
    'Lellamos žuvies turgus yra tai, ką verta pamatyti, ir jis vyksta anksti: burėmis grįžtančios valtys su atrama, ant smėlio išdėtas laimikis, minioje parduodami tunai ir skumbrės, o toliau paplūdimyje — saulėje džiūstančios žuvies lentynos. Per miestą tekantis olandų kanalas yra tylus kontrastas, o lagūna už jo pilna krevečių ir krabų žvejų, dirbančių su statomais tinklais.',
  'exp.negombo-lagoon.facts.0': 'Trukmė: 2–3 valandos',
  'exp.negombo-lagoon.facts.1': 'Turgus geriausias nuo 6 iki 8 val.',
  'exp.negombo-lagoon.facts.2': 'Kasdien, išskyrus sekmadienius',
  'exp.negombo-lagoon.facts.3': privateGuide,
  'exp.negombo-lagoon.facts.4': '20 minučių nuo Bandaranaike tarptautinio oro uosto',
  'exp.negombo-lagoon.goodToKnow':
    'Turgus šlapias, ankštas ir aštraus kvapo — tinka ne visiems, o uždara avalynė būtų protinga. Valčių išvyka po lagūną yra švelnesnė alternatyva.',

  'exp.kitulgala.name': 'Kitulgala ir Kelanio slėnis',
  'exp.kitulgala.location': 'Kitulgala',
  'exp.kitulgala.summary':
    'Atogrąžų miško tarpeklis, kuriame filmuotas „Tiltas per Kvai upę“, ir geriausias vandens slalomas Šri Lankoje — penki kilometrai 2 ir 3 kategorijos slenksčių per džiungles.',
  'exp.kitulgala.detail.0':
    'Kelanio upė čia greita ir žalia teka tarpekliu per drėgnosios zonos atogrąžų mišką, o nusileidimas iš kalnų krašto į pakrantę eina tiesiai pro jį. Deividas Linas 1957 m. susprogdino savo tiltą būtent šioje atkarpoje; betoniniai pamatai tebeguli upės vagoje, ir gidas nuves jus prie jų.',
  'exp.kitulgala.detail.1':
    'Daugumą traukia raftingas: apie penkis kilometrus ir septyni pavadinimus turintys slenksčiai, 2–3 kategorijos, visiškai įveikiami pradedančiajam su gidu valtyje. Jei norite likti sausi, tas pats miškas yra viena geriausių drėgnosios zonos paukščių stebėjimo vietų su ilgu endemikų sąrašu.',
  'exp.kitulgala.facts.0': 'Trukmė: rafto nusileidimas trunka apie 2 valandas',
  'exp.kitulgala.facts.1': 'Kelyje iš Nuvara Elijos į Kolombą',
  'exp.kitulgala.facts.2': 'Raftingas vyksta ištisus metus, geriausia nuo gegužės iki gruodžio',
  'exp.kitulgala.facts.3': 'Šalmai, gelbėjimosi liemenės ir gidai suteikiami',
  'exp.kitulgala.facts.4': 'Raftingas — vietinis priedas, pats sustojimas įskaičiuotas',
  'exp.kitulgala.goodToKnow':
    'Permirksite kiaurai, tad pasidėkite sausų drabužių ten, kur juos lengvai pasieksite. Minimalus amžius raftingui paprastai 10 metų, ir reikia mokėti plaukti.',

  /* ---------------- Hotels ---------------- */
  'hotel.Aliya Resort & Spa.description':
    'Žemos vilos aplink begalinį baseiną, įrėminantį pačią Sigirijos uolą — vaizdas nuo vandens ir yra priežastis čia apsistoti.',
  'hotel.Cinnamon Lodge Habarana.description':
    'Vienuolika hektarų gyvūnų pilnų sodų ir nameliai prie ežero, pačiame Kultūrinio trikampio viduryje.',
  'hotel.Hotel Kandalama.description':
    'Geoffrey Bawos šedevras, įstatytas į uolą virš tvenkinio ir dabar taip apaugęs, kad džiunglės jį beveik prarijo.',
  'hotel.Earl’s Regency.description':
    'Kolonijinio stiliaus viešbutis Mahavelio slėnyje už miesto, su kalvų vaizdais nuo baseino terasos ir gera SPA zona.',
  'hotel.Cinnamon Citadel.description':
    'Kambariai prie Mahavelio upės, už dešimties minučių nuo Danties šventyklos ir tylūs naktį.',
  'hotel.The Grand Kandyan.description':
    'Didžiausias viešbutis kalnų sostinėje, pėsčiomis pasiekiamas nuo ežero ir šventyklos.',
  'hotel.The Tea Experience.description':
    'Mažas dvaro viešbutis veikiančio arbatos slėnio gilumoje už Nuvara Elijos — tyli, miglota kalnų krašto versija.',
  'hotel.The Golden Ridge.description':
    'Ant kalnagūbrio virš miesto, su plačiais vaizdais į slėnį ir patogiu priėjimu prie Gregorio ežero.',
  'hotel.Horton Heights.description':
    'Patogi bazė šlaite netoli hipodromo ir golfo lauko, paranki išvykoms į Horton Plains.',
  'hotel.Newburgh Tea Factory.description':
    'Perstatytas arbatos fabrikas veikiančiame dvare, su vietoje išsaugota originalia įranga ir slėnio vaizdais iš kiekvieno kambario.',
  'hotel.EKHO Ella.description':
    'Įsitaisęs pačiame Elos tarpeklio krašte, su geriausiu saulėtekio balkonu mieste.',
  'hotel.Onrock Ella.description':
    'Šiuolaikiškas šlaito viešbutis su begaliniu baseinu, žvelgiančiu tiesiai per tarpeklį į lygumas.',
  'hotel.Yala Safari Hotel.description':
    'Paprasta, gerai tvarkoma bazė už kelių minučių nuo parko vartų — ankstyvos išvykos iš čia lengvos.',
  'hotel.Shangri-La Hambantota.description':
    'Pilnas kurortas su nuosavu paplūdimiu ir golfo lauku, už valandos nuo parko — patogusis safario variantas.',
  'hotel.Cinnamon Wild Yala.description':
    'Nameliai buferinėje zonoje, pro kuriuos iš tiesų klaidžioja drambliai ir šernai — arčiau parko miegoti nepavyks.',
  'hotel.Sheraton Kosgoda Turtle Beach Resort.description':
    'Didelis paplūdimio kurortas smėlio ruože, kuriame peri vėžliai, su keliais baseinais ir ilgu privačiu paplūdimiu.',
  'hotel.Cinnamon Bay.description':
    'Tiesiai Bentotos paplūdimyje prie upės žiočių, vos kelios minutės pėsčiomis iki vandens sporto centro.',
  'hotel.Eden Resort & Spa.description':
    'Seniai veikiantis paplūdimio viešbutis su dideliu baseinu ir ajurvedos SPA, mėgstamas ilgesnėms atostogoms prie jūros.',
  'hotel.Jetwing Beach.description':
    'Dizainu išsiskiriantis paplūdimio viešbutis už dvidešimties minučių nuo oro uosto — geriausia pirma arba paskutinė naktis saloje.',
  'hotel.Gold Sands.description':
    'Jauki, paprastesnė pakrantės alternatyva netoli žuvies turgaus ir miesto.',
  'hotel.Heritance Negombo.description':
    'Šiuolaikiškas viešbutis prie pat jūros su baseinu ant stogo ir saulėlydžiais virš Indijos vandenyno.',

  /* ---------------- Packages ---------------- */
  'pkg.grand-tour-of-sri-lanka.name': 'Didysis Šri Lankos turas',
  'pkg.grand-tour-of-sri-lanka.tagline':
    'Visa sala per dvi neskubrias savaites — senovinės sostinės, arbatos kraštas, leopardų žemė ir ilga pabaiga paplūdimyje.',
  'pkg.grand-tour-of-sri-lanka.badge': 'Siūlomas maršrutas',
  'pkg.grand-tour-of-sri-lanka.cardSummary':
    'Pati išsamiausia mūsų kelionė. Šešios bazės, vienas vairuotojas-gidas ir tiek laiko kiekvienoje vietoje, kad nustotumėte žiūrėti į laikrodį.',
  'pkg.grand-tour-of-sri-lanka.intro':
    'Šį maršrutą rašome tiems, kurie nori pamatyti viską ir kaip reikiant. Pradedate Kultūriniame trikampyje su trimis naktimis viename viešbutyje — to pakanka, kad Polonaruvą, Sigiriją ir Anuradhapurą apžiūrėtumėte civilizuotu tempu, o ne lakstytumėte tarp jų. Paskui kelias kyla: Kandis dėl Danties šventyklos ir botanikos sodų, Nuvara Elija dėl arbatos ir šaltų rytų, Ela dėl Devynių arkų tilto ir vaizdo pro tarpeklį. Iš ten nusileidžiate į sausąjį pietryčių kraštą dviem naktims Jaloje, vienoje geriausių vietų pasaulyje pamatyti laukinį leopardą, ir užbaigiate trimis pilnomis dienomis Bentotos paplūdimyje, neturėdami absoliučiai jokių planų. Keturiolika naktų, tas pats automobilis ir vairuotojas visą kelią, jokių vidaus skrydžių.',
  'pkg.grand-tour-of-sri-lanka.tourType': 'Siūlomas maršrutas',
  'pkg.grand-tour-of-sri-lanka.bestFor.0': 'Pirmą kartą atvykstantiems',
  'pkg.grand-tour-of-sri-lanka.bestFor.1': 'Kultūra',
  'pkg.grand-tour-of-sri-lanka.bestFor.2': 'Gamta ir safaris visureigiu',
  'pkg.grand-tour-of-sri-lanka.bestFor.3': 'Arbatos kraštas',
  'pkg.grand-tour-of-sri-lanka.bestFor.4': 'Pabaiga paplūdimyje',
  'pkg.grand-tour-of-sri-lanka.bestFor.5': 'Medaus mėnuo',
  'pkg.grand-tour-of-sri-lanka.priceBasis': perPerson,
  'pkg.grand-tour-of-sri-lanka.period': period,
  'pkg.grand-tour-of-sri-lanka.visiting.0': culturalTriangle,
  'pkg.grand-tour-of-sri-lanka.extensionPrice': roomNight(325),
  'pkg.grand-tour-of-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.grand-tour-of-sri-lanka.ext.0.description':
    'Trys dienos paplūdimyje prabėga greitai. Pridėkite papildomų naktų Sheraton Kosgoda Turtle Beach Resort — arba Cinnamon Bay ar Eden Resort — su tuo pačiu puspansionu ir likite tame pačiame kambaryje, užuot kraustęsi.',
  'pkg.grand-tour-of-sri-lanka.ext.0.price': roomNight(325),
  'pkg.grand-tour-of-sri-lanka.ext.1.title': '2 variantas: Maldyvai',
  'pkg.grand-tour-of-sri-lanka.ext.1.description':
    'Iš Kolombo į Malę — devyniasdešimties minučių skrydis, todėl Maldyvai natūraliai tampa antrąja Šri Lankos kelionės dalimi. Suderinsime salos kurortą su turu ir sutvarkysime jungiamuosius skrydžius bei pervežimus kaip vieną užsakymą.',
  'pkg.grand-tour-of-sri-lanka.ext.1.price': onRequest,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.intro':
    'Nusileidžiate Bandaranaike tarptautiniame oro uoste, ir vairuotojas-gidas veža jus į salos gilumą — apie keturias valandas iki Sigirijos, o popietė lieka laisva maudynėms ir poilsiui. Kitos dvi dienos — Kultūrinis trikampis geriausiu pavidalu, ir tai, kad visas tris naktis liekate tame pačiame viešbutyje, ir leidžia tai padaryti. Antrą dieną — Polonaruva ryto vėsoje, po pietų — džipų safaris Mineurijoje, kur drambliai leidžiasi prie besitraukiančio tvenkinio. Trečią dieną pirmųjų spindulių metu kopiate į Sigirijos uolą, o popietę praleidžiate tarp Anuradhapuros stupų ir vienuolynų griuvėsių — pirmosios salos sostinės ir iki šiol labai gyvos piligrimystės vietos.',
  'pkg.grand-tour-of-sri-lanka.stop.kandy.intro':
    'Kelionė į pietus link Kandžio yra graži ir turi dvi įskaičiuotas stoteles: Dambulos olų šventyklą — penkias ištapytas olas, pilnas uoloje iškaltų Budos statulų, ir prieskonių sodą Matalėje, kur cinamonas, kardamonas ir pipirai auga tame pačiame sklype. Į Kandį atvykstate laiku vakarinei pudžai Šventojo Danties relikvijos šventykloje, kai užgroja būgnininkai ir piligrimų eilė praeina pro skrynią. Kitą dieną skiriate pačiai kalnų sostinei — rytą Peradenijos karališkiesiems botanikos sodams, o popietę ežerui, turgui ir apžvalgos aikštelei virš miesto.',
  'pkg.grand-tour-of-sri-lanka.stop.nuwara-eliya.intro':
    'Už Kandžio kelias ima kilti ir nebesustoja, vesdamas per terasomis nusėtas arbatos plantacijas iki 1 900 metrų. Kelionę pertraukiate veikiančiame arbatos fabrike, kad nuo vytinimo palėpių iki degustacijos stalo sektumėte lapo kelią, ir pasiekiate Nuvara Eliją su laisva popiete. Tai keista ir gana nuostabi vieta — Viktorijos laikų kalnų kurortas su hipodromu, raudonų plytų paštu ir golfo lauku, britų pastatytas taip, kad jaustųsi kaip namie, ir sutemus išties šaltas. Kitas rytas skirtas miestui: Gregorio ežerui, Viktorijos parkui, senosioms viloms. Popietė jūsų.',
  'pkg.grand-tour-of-sri-lanka.stop.ella.intro':
    'Trumpas pervažiavimas į Elą su sustojimu prie Sita Amman šventyklos Sita Elijoje — ryškiai nudažytos hinduistų šventovės prie šalto kalnų upelio, laikomos vieta, kur Ramajanoje buvo laikoma nelaisvėje Sita. Pati Ela — viena kavinių gatvė įlinkyje tarp dviejų kalnų, o atvykti verta dėl vaizdo pro Elos tarpeklį, kuris giedrą rytą siekia pietines lygumas. Pilna diena čia apima miestelį ir Devynių arkų tiltą — 1921 m. viaduką, lenkta linija išnyrantį iš džiunglių ant devynių akmeninių arkų be jokio plieno. Pataikius laiką, jums bestovint pro šalį pravažiuos traukinys.',
  'pkg.grand-tour-of-sri-lanka.stop.yala.intro':
    'Nusileidimas iš kalnų įspūdingas — per porą valandų prarandate du tūkstančius metrų, o kraštovaizdis iš arbatos virsta sausais krūmynais. Leidžiantis prie kelio pasirodo Ravanos kriokliai, o popietė atveda į Kataragamą vakarinei pudžai — piligrimystės miestą, vienodai šventą budistams, hinduistams ir musulmonams, kur būgnai ir aliejinės lempelės tęsiasi gerokai po sutemų, o virš medžių šviečia balta Kiri Veheros stupa. Kitas rytas prasideda dar prieš aušrą džipų safariu Jalos nacionaliniame parke, kuriame leopardų tankis vienas didžiausių pasaulyje, o kartu gyvena lūpiniai lokiai, drambliai; čia yra ir tuščias paplūdimys ten, kur krūmynai susitinka su Indijos vandenynu. Popietė laisva.',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.subLabel': '(per Galę)',
  'pkg.grand-tour-of-sri-lanka.stop.bentota.intro':
    'Judate pietine pakrante į vakarus, ir paskutinė kelionės apžiūros diena yra viena geriausių. Rytą — Galės fortas: mūru apjuostas olandų prekybos miestas ant iškyšulio, pylimai iš trijų pusių, gyvenamas, o ne muziejinis. Paskui valčių safaris Madu Ganga upe, į mangrovių tunelius, tokius siaurus, kad tenka išjungti variklį, ir sustojimas Kosgodos vėžlių veisykloje prieš pasiekiant Bentotą. Likusios dvi dienos visiškai laisvos su puspansionu. Plaukiokite, miegokite, skaitykite, naudokitės vandens sporto centru prie upės žiočių arba nieko neveikite — po vienuolikos dienų kelyje dauguma pasirenka pastarąjį.',
  'pkg.grand-tour-of-sri-lanka.stop.departure.location': departure,
  'pkg.grand-tour-of-sri-lanka.stop.departure.subLabel': toAirport('Bentotos'),
  'pkg.grand-tour-of-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.ancient-cities-and-golden-sands.name': 'Senovės miestai ir auksinis smėlis',
  'pkg.ancient-cities-and-golden-sands.tagline':
    'Uolų tvirtovės, dramblių kraštas ir Danties šventykla — o paskui tiesiai į pakrantę visai likusiai savaitei.',
  'pkg.ancient-cities-and-golden-sands.badge': 'Kelios vietos',
  'pkg.ancient-cities-and-golden-sands.cardSummary':
    'Kultūrinis trikampis ir Kandis iš arti, o paskui dvi dienos nieko neveikimo vakarinėje pakrantėje. Pirmiausia kultūra, tada paplūdimys, ir niekur neskubant.',
  'pkg.ancient-cities-and-golden-sands.intro':
    'Kai kurios kelionės bando aprėpti visą salą per savaitę, ir niekas jomis nesimėgauja. Ši daro priešingai: penkias iš septynių naktų skiria dviem vietoms, labiausiai vertoms jūsų laiko, o paskui palieka jus paplūdimyje. Trys naktys Kultūriniame trikampyje — tiek reikia, kad pamatytumėte Polonaruvą, Sigiriją, Mineuriją ir Anuradhapurą nepraleidžiant kiekvieno ryto besikraunant lagaminų. Dvi naktys Kandyje apima Šventojo Danties relikvijos šventyklą, Peradenijos botanikos sodus ir patį miestą. Paskui persikeliate į Bentotą ir sustojate. Tinka keliautojams, turintiems mažai laiko ir mieliau pamatantiems mažiau, bet kaip reikiant, bei šeimoms, kurioms savaitė turi baigtis baseinu.',
  'pkg.ancient-cities-and-golden-sands.tourType': 'Kelios vietos',
  'pkg.ancient-cities-and-golden-sands.bestFor.0': 'Trumpos kelionės',
  'pkg.ancient-cities-and-golden-sands.bestFor.1': 'Kultūra',
  'pkg.ancient-cities-and-golden-sands.bestFor.2': 'Šeimoms',
  'pkg.ancient-cities-and-golden-sands.bestFor.3': 'Laukinė gamta',
  'pkg.ancient-cities-and-golden-sands.bestFor.4': 'Pabaiga paplūdimyje',
  'pkg.ancient-cities-and-golden-sands.priceBasis': perPerson,
  'pkg.ancient-cities-and-golden-sands.period': period,
  'pkg.ancient-cities-and-golden-sands.visiting.0': culturalTriangle,
  'pkg.ancient-cities-and-golden-sands.extensionPrice': roomNight(325),
  'pkg.ancient-cities-and-golden-sands.ext.0.title': moreBentotaTitle,
  'pkg.ancient-cities-and-golden-sands.ext.0.description':
    'Dviejų dienų paplūdimyje vos pakanka lagaminams išsikrauti. Pratęskite viešnagę Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay arba Eden Resort & Spa su tuo pačiu puspansionu.',
  'pkg.ancient-cities-and-golden-sands.ext.0.price': roomNight(325),
  'pkg.ancient-cities-and-golden-sands.ext.1.title': '2 variantas: pridėti Jalą',
  'pkg.ancient-cities-and-golden-sands.ext.1.description':
    'Dvi naktys Jaloje pakeliui į pakrantę paverčia tai ir gamtos kelione — visos dienos džipų safaris geriausiame salos leopardų parke, o pakeliui dar Kataragama ir Ravanos kriokliai.',
  'pkg.ancient-cities-and-golden-sands.ext.1.price': onRequest,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.intro':
    'Vairuotojas-gidas pasitinka jus Bandaranaike tarptautiniame oro uoste ir veža į salos gilumą, į Sigiriją — maždaug keturias valandas, o likusi pirmosios dienos dalis laisva maudynėms ir poilsiui po skrydžio. Antra diena — Polonaruva ryte (geriausiai išlikusi iš griuvėsių sostinių ir vienintelė, kurią iš tiesų galima apeiti pėsčiomis), o po pietų džipų safaris Mineurijoje, kur drambliai gausiai renkasi ant žolės, likusios besitraukiančiam tvenkiniui. Trečią dieną keliatės anksti dėl pačios Sigirijos uolos — 1 200 laiptelių iki V amžiaus rūmų granito viršūnėje — ir toliau į Anuradhapurą, kur laukia kalvų dydžio stupos ir seniausias pasodintas medis Žemėje.',
  'pkg.ancient-cities-and-golden-sands.stop.kandy.intro':
    'Kelyje į pietus link Kandžio įskaičiuotos dvi stotelės — Dambulos olų šventykla su 150 Budos statulų ir ištapytomis lubomis uolos sienoje bei prieskonių sodas Matalėje, kur pamatysite, kaip cinamonas ir kardamonas atrodo prieš patekdami į stiklainį. Į Kandį atvykstate vakarinei pudžai Šventojo Danties relikvijos šventykloje. Kita diena priklauso kalnų sostinei: rytą Peradenijos karališkieji botanikos sodai, paskui ežeras, uždara turgavietė ir apžvalgos aikštelė virš miesto, geriausia vėlyvą popietę, kai šviesa virš šventyklos stogų pagelsta.',
  'pkg.ancient-cities-and-golden-sands.stop.bentota.intro':
    'Nusileidžiate iš kalvų į vakarinę pakrantę, ir važiavimas baigiasi. Abi likusios dienos visiškai laisvos su puspansionu Bentotoje, kur upė susitinka su jūra, o vanduo pakankamai ramus visoms salos vandens sporto rūšims. Jei norisi, aplinkui daug ką galima pasiekti: Galės fortas už valandos į pietus, Madu Gangos mangrovės už dvidešimties minučių, Kosgodos vėžlių veisykla dar arčiau — ir vairuotojas-gidas nuveš jus bet kur. Arba galite likti tiksliai ten, kur esate — būtent tam šis maršrutas iš tikrųjų ir sukurtas.',
  'pkg.ancient-cities-and-golden-sands.stop.departure.location': departure,
  'pkg.ancient-cities-and-golden-sands.stop.departure.subLabel': toAirport('Bentotos'),
  'pkg.ancient-cities-and-golden-sands.stop.departure.intro': departureIntro,

  'pkg.classic-sri-lanka.name': 'Klasikinė Šri Lanka',
  'pkg.classic-sri-lanka.tagline':
    'Geriausia, ką sala turi, per vieną savaitę — olų šventyklos, uolos tvirtovė, kalnų sostinė, arbatos kraštas ir paplūdimys.',
  'pkg.classic-sri-lanka.cardSummary':
    'Penkios bazės per aštuonias dienas, sudėliotos taip, kad niekada negrįžtumėte tuo pačiu keliu. Daugiausia, ką galima aprėpti per savaitę, kad viskas nesusilietų.',
  'pkg.classic-sri-lanka.badge': 'Siūlomas maršrutas',
  'pkg.classic-sri-lanka.intro':
    'Savaitė yra nedaug šaliai, kurioje tiek visko, tad šis maršrutas sudarytas taip, kad neiššvaistytų nė minutės. Pradedate nakvyne Negombe, už dvidešimties minučių nuo oro uosto — jokių ilgų pervažiavimų po ilgo skrydžio. Toliau viskas eina viena švaria linija: Kultūrinis trikampis dėl Dambulos, Mineurijos, Sigirijos ir Anuradhapuros; Kandis dėl Šventojo Danties relikvijos šventyklos; Nuvara Elija dėl arbatos plantacijų ir šalto, keisto kalnų kurorto jų viršuje. Paskui nusileidimas į pakrantę per Kelanio slėnį Kitulgaloje ir dvi pilnos dienos Bentotoje pabaigai. Tai išsamiausias pirmas žvilgsnis į Šri Lanką, telpantis į aštuonias dienas.',
  'pkg.classic-sri-lanka.tourType': 'Siūlomas maršrutas',
  'pkg.classic-sri-lanka.bestFor.0': 'Pirmą kartą atvykstantiems',
  'pkg.classic-sri-lanka.bestFor.1': 'Trumpos kelionės',
  'pkg.classic-sri-lanka.bestFor.2': 'Kultūra',
  'pkg.classic-sri-lanka.bestFor.3': 'Arbatos kraštas',
  'pkg.classic-sri-lanka.bestFor.4': 'Pabaiga paplūdimyje',
  'pkg.classic-sri-lanka.priceBasis': perPerson,
  'pkg.classic-sri-lanka.period': period,
  'pkg.classic-sri-lanka.visiting.1': culturalTriangle,
  'pkg.classic-sri-lanka.extensionPrice': roomNight(325),
  'pkg.classic-sri-lanka.ext.0.title': moreBentotaTitle,
  'pkg.classic-sri-lanka.ext.0.description':
    'Pridėkite naktų Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay arba Eden Resort & Spa su tuo pačiu puspansionu ir užbaikite savaitę kaip dera, o ne kraudamiesi lagaminų septintą dieną.',
  'pkg.classic-sri-lanka.ext.0.price': roomNight(325),
  'pkg.classic-sri-lanka.ext.1.title': '2 variantas: pridėti Elą ir Jalą',
  'pkg.classic-sri-lanka.ext.1.description':
    'Iš Nuvara Elijos tęskite į rytus, užuot sukę link pakrantės: Ela dėl Devynių arkų tilto, paskui Jala dėl leopardų safario, o į paplūdimį grįžtama per Galę.',
  'pkg.classic-sri-lanka.ext.1.price': onRequest,
  'pkg.classic-sri-lanka.stop.negombo.intro':
    'Užuot po ilgo skrydžio iškart siuntęs jus į salos gilumą, šis maršrutas prasideda už dvidešimties minučių nuo terminalo, Negombe — katalikiškame žvejų mieste su olandų kanalais, valtimis su atrama ir bažnyčia kiekvienos gatvės gale. Vairuotojas-gidas pasitinka jus atvykimo salėje ir per pusvalandį nuveža į viešbutį. Likusi diena laisva: miegokite, plaukiokite arba nueikite paplūdimiu iki Lellamos žuvies turgaus, kurį verta pamatyti anksti kitą rytą, jei laiko juostų skirtumas jus vis tiek pažadins.',
  'pkg.classic-sri-lanka.stop.cultural-triangle.subLabel': forCulturalTriangle,
  'pkg.classic-sri-lanka.stop.cultural-triangle.intro':
    'Keliaujate į salos gilumą, kelionę pertraukdami Dambulos olų šventykloje: penkios uoloje iškaltos olos, 150 Budos statulų ir lubos, ištapytos iki pat ten, kur akmuo susitinka su grindimis. Popietė — džipų safaris Mineurijoje, kur laukiniai drambliai vėlyvą popietę leidžiasi ganytis į džiūstančio tvenkinio pievas. Kitas rytas skirtas Sigirijos uolai — 1 200 laiptelių pro penkiolikos šimtų metų freskas iki rūmų viršūnėje — o popietė nuveda į Anuradhapurą, pirmąją sostinę, kur milžiniškos plytinės stupos vis dar kyla virš medžių, o piligrimai prižiūri 288 m. pr. Kr. pasodintą figmedį.',
  'pkg.classic-sri-lanka.stop.kandy.intro':
    'Rytas praleidžiamas Matalės prieskonių soduose, vaikštant veikiančiame sklype, kur cinamonas lupamas ir vyniojamas rankomis, kardamonas auga pavėsyje, o pipirų vijokliai kopia savo medžiais. Paskui toliau į Kandį — paskutinę karalystę, kritusią Europos valstybei, ir iki šiol salos kultūrinę širdį. Atvykstate vakarinei pudžai Šventojo Danties relikvijos šventykloje, kai kandiečių būgnininkai užgroja prie vidinės menės ir durys atsiveria piligrimų eilei, nešančiai lotoso žiedus pro auksinę skrynią.',
  'pkg.classic-sri-lanka.stop.nuwara-eliya.intro':
    'Kelias iš Kandžio kyla tris valandas per arbatos terasas, o pusiaukelėje sustojate veikiančiame kalnų fabrike, kad nuo vytinimo lovelių pro volus ir kaitinimo krosnis sektumėte lapą iki degustacijos stalo. Nuvara Eliją pasiekiate popiet — 1 900 metrų aukštyje, su Tiudorų stiliaus vilomis, hipodromu ir raudonų plytų paštu, tokia perdėm viktoriška, kad visi ją vadina Mažąja Anglija. Likusi diena laisva, o vakaras iš tiesų šaltas, kas po savaitės tropikuose yra vertas patirti sukrėtimas.',
  'pkg.classic-sri-lanka.stop.bentota.subLabel': '(per Kitulgalą)',
  'pkg.classic-sri-lanka.stop.bentota.intro':
    'Nusileidimas į pakrantę eina per Kitulgalą, kur Kelanio upė prasikerta tarpekliu per drėgnosios zonos atogrąžų mišką ir kur 1957 m. Deividas Linas susprogdino savo tiltą filmui „Tiltas per Kvai upę“. Jei norisi, tai geriausias vandens slalomas šalyje, o jei ne — viena geriausių drėgnosios zonos paukščių stebėjimo atkarpų. Popiet jau esate Bentotos paplūdimyje, o paskutinė pilna diena visiškai laisva su puspansionu: upės žiotys čia pakankamai ramios visoms salos vandens sporto rūšims, arba galite tiesiog nejudėti.',
  'pkg.classic-sri-lanka.stop.departure.location': departure,
  'pkg.classic-sri-lanka.stop.departure.subLabel': toAirport('Bentotos'),
  'pkg.classic-sri-lanka.stop.departure.intro': departureIntro,

  'pkg.beach-safari-and-tea-country.name': 'Paplūdimys, safaris ir arbatos kraštas',
  'pkg.beach-safari-and-tea-country.tagline':
    'Šįkart pirma paplūdimys — trys dienos smėlyje, o paskui į salos gilumą dėl leopardų, krioklių ir kalnų krašto atvirkščia tvarka.',
  'pkg.beach-safari-and-tea-country.badge': 'Kelios vietos',
  'pkg.beach-safari-and-tea-country.cardSummary':
    'Apjuosia salą prieš laikrodžio rodyklę: pakrantė, safaris, kalnų kraštas, Kandis, Kolombas. Nuo skrydžio atsigaunate dar prieš pirmą ekskursiją.',
  'pkg.beach-safari-and-tea-country.intro':
    'Beveik visi Šri Lankos maršrutai paplūdimį palieka pabaigai. Šis jį iškelia į pradžią, ir tai geresnė mintis, nei skamba: nusileidžiate, važiuojate pusantros valandos iki Bentotos ir turite tris dienas atsigauti po skrydžio, kol prasidės bet kokios ekskursijos. Toliau maršrutas suka prieš laikrodžio rodyklę aplink pietus: Galės fortas, tada Jala leopardų safariui, aukštyn į Elą dėl Devynių arkų tilto ir Ravanos kriokliai, per arbatos kraštą į Kandį dėl Šventojo Danties relikvijos šventyklos ir galiausiai Kolombas bei paskutinė naktis Negombe prie oro uosto. Tai geriausio kainos ir kokybės santykio programa iš keturių, tinkanti tiems, kurie nori paplūdimio tol, kol dar turi jėgų juo mėgautis.',
  'pkg.beach-safari-and-tea-country.tourType': 'Kelios vietos',
  'pkg.beach-safari-and-tea-country.bestFor.0': 'Pirma paplūdimys',
  'pkg.beach-safari-and-tea-country.bestFor.1': 'Gamta ir safaris visureigiu',
  'pkg.beach-safari-and-tea-country.bestFor.2': 'Geriausias kainos ir kokybės santykis',
  'pkg.beach-safari-and-tea-country.bestFor.3': 'Medaus mėnuo',
  'pkg.beach-safari-and-tea-country.bestFor.4': 'Arbatos kraštas',
  'pkg.beach-safari-and-tea-country.priceBasis': perPerson,
  'pkg.beach-safari-and-tea-country.period': period,
  'pkg.beach-safari-and-tea-country.extensionPrice': roomNight(325),
  'pkg.beach-safari-and-tea-country.ext.0.title': moreBentotaTitle,
  'pkg.beach-safari-and-tea-country.ext.0.description':
    'Pradėkite dar lėčiau. Pridėkite naktų kelionės pradžioje Sheraton Kosgoda Turtle Beach Resort, Cinnamon Bay arba Eden Resort & Spa su tuo pačiu puspansionu.',
  'pkg.beach-safari-and-tea-country.ext.0.price': roomNight(325),
  'pkg.beach-safari-and-tea-country.ext.1.title': '2 variantas: pridėti Kultūrinį trikampį',
  'pkg.beach-safari-and-tea-country.ext.1.description':
    'Šis maršrutas sąmoningai praleidžia Sigiriją ir Polonaruvą. Pridėkite dvi ar tris naktis į šiaurę nuo Kandžio ir dar prieš kelionę į oro uostą aplankysite uolos tvirtovę, Mineuriją ir Anuradhapurą.',
  'pkg.beach-safari-and-tea-country.ext.1.price': onRequest,
  'pkg.beach-safari-and-tea-country.stop.bentota.intro':
    'Vairuotojas-gidas pasitinka jus Bandaranaike tarptautiniame oro uoste ir greitkeliu veža tiesiai į Bentotą — apie pusantros valandos, trumpiausias pervežimas iš visų mūsų programų. Paskui dvi dienas sąmoningai nieko nevyksta. Abi visiškai laisvos su puspansionu paplūdimyje, kur Bentotos upė susilieja su jūra — todėl būtent iš šio vandens ruožo veikia visos salos vandens sporto rūšys. Kolombas lengvai pasiekiamas į šiaurę, jei norite dienos mieste, o Madu Gangos mangrovės ir Kosgodos vėžlių veisykla yra visai netoli, tačiau nieko iš to daryti neprivalote.',
  'pkg.beach-safari-and-tea-country.stop.yala.subLabel': '(per Galę)',
  'pkg.beach-safari-and-tea-country.stop.yala.intro':
    'Judate pietine pakrante, sustodami prie Galės forto — mūru apjuosto olandų prekybos miesto ant iškyšulio su pylimais iš trijų pusių, iki šiol gyvo kvartalo, o ne muziejaus. Jei laikas tinkamas, šiame pakrantės ruože dirba žvejai ant kuolų. Popiet pasiekiate Jalą pirmajai iš dviejų naktų, o pats safaris — privatus atviras visureigis su pėdsekiu parke, kuriame leopardų tankis vienas didžiausių pasaulyje. Čia gyvena ir lūpiniai lokiai, drambliai, laukiniai buivolai bei krokodilai, o keliukai nusidriekia iki tuščio paplūdimio ten, kur krūmynai susitinka su Indijos vandenynu.',
  'pkg.beach-safari-and-tea-country.stop.ella.intro':
    'Kelias į šiaurę iš sausosios zonos smarkiai kyla, o pakeliui prie kelio pasirodo Ravanos kriokliai — dvidešimt penki metrai vandens, krintančio pro džiungles ir riedulius, vandeningiausi mėnesiais po musono. Likusi tos dienos dalis laisva Eloje, vienintelėje kavinių gatvėje, įspraustoje tarp dviejų kalnų, su vaizdu pro tarpeklį iki pietinių lygumų. Pilna diena čia apima miestelį ir Devynių arkų tiltą — 1921 m. be plieno pastatytą viaduką, lenkta linija išnyrantį iš džiunglių ant devynių akmeninių arkų. Vieną rytą atsikelkite anksti dėl Little Adam’s Peak: keturiasdešimt penkios minutės į kalną dėl gražiausio saulėtekio kalnų krašte.',
  'pkg.beach-safari-and-tea-country.stop.kandy.intro':
    'Tai arbatos diena. Kelias iš Elos į Kandį driekiasi per visą kalnų krašto ilgį pro terasomis nusėtas plantacijas, ir jūs jį pertraukiate veikiančiame fabrike, kad nuo vytinimo palėpių pro volus ir kaitinimo krosnis nusektumėte lapą iki rūšių, kurios beveik niekada nepalieka salos, degustacijos. Į Kandį atvykstate vakarinei pudžai Šventojo Danties relikvijos šventykloje, kur Budos dantis saugomas — ir dėl jo kovota — jau daugiau nei tūkstantį metų, o būgnininkai vidinę menę tebeatveria tris kartus per dieną.',
  'pkg.beach-safari-and-tea-country.stop.negombo.subLabel': '(per Kolombą)',
  'pkg.beach-safari-and-tea-country.stop.negombo.intro':
    'Nusileidžiate iš kalvų į Kolombą pusės dienos ekskursijai po komercinę sostinę: Pettah turgus ir jo dryžuota Raudonoji mečetė, kolonijinis Forto kvartalas ir Senoji olandų ligoninė, Gangaramajos šventykla ir Galle Face Green parkas popietės pabaigoje su aitvarų pardavėjais. Paskui trumpas pervažiavimas pakrante į Negombą paskutinei nakčiai — žvejų miestą už dvidešimties minučių nuo terminalo, dėl kurio kitas rytas gerokai ramesnis nei pradedant kelią iš miesto.',
  'pkg.beach-safari-and-tea-country.stop.departure.location': departure,
  'pkg.beach-safari-and-tea-country.stop.departure.subLabel': toAirport('Negombo'),
  'pkg.beach-safari-and-tea-country.stop.departure.intro': departureIntro,

  /* ---------------- Place names ----------------
   * Lithuanian declines and transliterates Sri Lankan place names, so unlike the other
   * locales these cannot be left to fall through to the English source. */
  'hotel.Aliya Resort & Spa.location': sigiriya,
  'hotel.Cinnamon Lodge Habarana.location': 'Habarana',
  'hotel.Hotel Kandalama.location': dambulla,
  'hotel.Earl’s Regency.location': kandy,
  'hotel.Cinnamon Citadel.location': kandy,
  'hotel.The Grand Kandyan.location': kandy,
  'hotel.The Tea Experience.location': 'Mandaramnuvara',
  'hotel.The Golden Ridge.location': nuwaraEliya,
  'hotel.Horton Heights.location': nuwaraEliya,
  'hotel.Newburgh Tea Factory.location': ella,
  'hotel.EKHO Ella.location': ella,
  'hotel.Onrock Ella.location': ella,
  'hotel.Yala Safari Hotel.location': yala,
  'hotel.Shangri-La Hambantota.location': 'Hambantota',
  'hotel.Cinnamon Wild Yala.location': yala,
  'hotel.Sheraton Kosgoda Turtle Beach Resort.location': bentota,
  'hotel.Cinnamon Bay.location': bentota,
  'hotel.Eden Resort & Spa.location': 'Beruvala',
  'hotel.Jetwing Beach.location': negombo,
  'hotel.Gold Sands.location': negombo,
  'hotel.Heritance Negombo.location': negombo,

  'pkg.grand-tour-of-sri-lanka.visiting.1': kandy,
  'pkg.grand-tour-of-sri-lanka.visiting.2': nuwaraEliya,
  'pkg.grand-tour-of-sri-lanka.visiting.3': ella,
  'pkg.grand-tour-of-sri-lanka.visiting.4': yala,
  'pkg.grand-tour-of-sri-lanka.visiting.5': galle,
  'pkg.grand-tour-of-sri-lanka.visiting.6': bentota,
  'pkg.grand-tour-of-sri-lanka.stop.cultural-triangle.location': sigiriya,
  'pkg.grand-tour-of-sri-lanka.stop.kandy.location': kandy,
  'pkg.grand-tour-of-sri-lanka.stop.nuwara-eliya.location': nuwaraEliya,
  'pkg.grand-tour-of-sri-lanka.stop.ella.location': ella,
  'pkg.grand-tour-of-sri-lanka.stop.yala.location': yala,
  'pkg.grand-tour-of-sri-lanka.stop.bentota.location': bentota,

  'pkg.ancient-cities-and-golden-sands.visiting.1': kandy,
  'pkg.ancient-cities-and-golden-sands.visiting.2': bentota,
  'pkg.ancient-cities-and-golden-sands.stop.cultural-triangle.location': sigiriya,
  'pkg.ancient-cities-and-golden-sands.stop.kandy.location': kandy,
  'pkg.ancient-cities-and-golden-sands.stop.bentota.location': bentota,

  'pkg.classic-sri-lanka.visiting.0': negombo,
  'pkg.classic-sri-lanka.visiting.2': kandy,
  'pkg.classic-sri-lanka.visiting.3': nuwaraEliya,
  'pkg.classic-sri-lanka.visiting.4': bentota,
  'pkg.classic-sri-lanka.stop.negombo.location': negombo,
  'pkg.classic-sri-lanka.stop.cultural-triangle.location': sigiriya,
  'pkg.classic-sri-lanka.stop.kandy.location': kandy,
  'pkg.classic-sri-lanka.stop.nuwara-eliya.location': nuwaraEliya,
  'pkg.classic-sri-lanka.stop.bentota.location': bentota,

  'pkg.beach-safari-and-tea-country.visiting.0': bentota,
  'pkg.beach-safari-and-tea-country.visiting.1': galle,
  'pkg.beach-safari-and-tea-country.visiting.2': yala,
  'pkg.beach-safari-and-tea-country.visiting.3': ella,
  'pkg.beach-safari-and-tea-country.visiting.4': kandy,
  'pkg.beach-safari-and-tea-country.visiting.5': colombo,
  'pkg.beach-safari-and-tea-country.visiting.6': negombo,
  'pkg.beach-safari-and-tea-country.stop.bentota.location': bentota,
  'pkg.beach-safari-and-tea-country.stop.yala.location': yala,
  'pkg.beach-safari-and-tea-country.stop.ella.location': ella,
  'pkg.beach-safari-and-tea-country.stop.kandy.location': kandy,
  'pkg.beach-safari-and-tea-country.stop.negombo.location': negombo,
};

export default content;
