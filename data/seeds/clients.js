/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients').del()
  await knex('clients').insert([
    {
      client_name: "Oralee",
      client_lastName: "Kleinlerer",
      client_email: "okleinlerer0@census.gov",
      client_phoneNumber: 6673097668,
      client_address: "6th Floor",
      client_postalCode: 95967,
      client_city: "Partille"
    }, {
      client_name: "Joellyn",
      client_lastName: "Ridsdale",
      client_email: "jridsdale1@linkedin.com",
      client_phoneNumber: 2975477168,
      client_address: "Room 1851",
      client_postalCode: 12817,
      client_city: "Örebro"
    }, {
      client_name: "Timothea",
      client_lastName: "Polden",
      client_email: "tpolden2@mozilla.com",
      client_phoneNumber: 8111970310,
      client_address: "Apt 70",
      client_postalCode: 15480,
      client_city: "Ntaur Satu"
    }, {
      client_name: "Honey",
      client_lastName: "Gillise",
      client_email: "hgillise3@cnet.com",
      client_phoneNumber: 9769642129,
      client_address: "Room 1186",
      client_postalCode: 47565,
      client_city: "Malitbog"
    }, {
      client_name: "Anselma",
      client_lastName: "Durgan",
      client_email: "adurgan4@friendfeed.com",
      client_phoneNumber: 7430498777,
      client_address: "Suite 43",
      client_postalCode: 52413,
      client_city: "Canta"
    }, {
      client_name: "Graham",
      client_lastName: "Melwall",
      client_email: "gmelwall5@chronoengine.com",
      client_phoneNumber: 3870168949,
      client_address: "10th Floor",
      client_postalCode: 60877,
      client_city: "Šestajovice"
    }, {
      client_name: "Edmund",
      client_lastName: "Bloan",
      client_email: "ebloan6@homestead.com",
      client_phoneNumber: 1090791942,
      client_address: "Room 692",
      client_postalCode: 96743,
      client_city: "Zvezdara"
    }, {
      client_name: "Dyann",
      client_lastName: "Foulcher",
      client_email: "dfoulcher7@theglobeandmail.com",
      client_phoneNumber: 6480077974,
      client_address: "Room 912",
      client_postalCode: 31759,
      client_city: "Linqu"
    }, {
      client_name: "Diane",
      client_lastName: "Duker",
      client_email: "dduker8@youku.com",
      client_phoneNumber: 1952822123,
      client_address: "PO Box 79751",
      client_postalCode: 40627,
      client_city: "Bistrica pri Tržiču"
    }, {
      client_name: "Kamilah",
      client_lastName: "Olenichev",
      client_email: "kolenichev9@scientificamerican.com",
      client_phoneNumber: 9594280295,
      client_address: "Suite 89",
      client_postalCode: 77428,
      client_city: "Çobansığnaq"
    }, {
      client_name: "Alayne",
      client_lastName: "Pellitt",
      client_email: "apellitta@lulu.com",
      client_phoneNumber: 1987424469,
      client_address: "Suite 67",
      client_postalCode: 88319,
      client_city: "Lyon"
    }, {
      client_name: "Karine",
      client_lastName: "Beceril",
      client_email: "kbecerilb@dailymail.co.uk",
      client_phoneNumber: 7398143844,
      client_address: "Apt 1653",
      client_postalCode: 57055,
      client_city: "Neiafu"
    }, {
      client_name: "Arlyn",
      client_lastName: "Conduit",
      client_email: "aconduitc@patch.com",
      client_phoneNumber: 2010636788,
      client_address: "Apt 1207",
      client_postalCode: 99973,
      client_city: "Taoyao"
    }, {
      client_name: "Alina",
      client_lastName: "Gossop",
      client_email: "agossopd@adobe.com",
      client_phoneNumber: 7915960635,
      client_address: "8th Floor",
      client_postalCode: 14136,
      client_city: "Thị Trấn Ngọc Lặc"
    }, {
      client_name: "Amber",
      client_lastName: "O'Farrell",
      client_email: "aofarrelle@over-blog.com",
      client_phoneNumber: 4697378125,
      client_address: "Room 1271",
      client_postalCode: 13321,
      client_city: "Andorinha"
    }, {
      client_name: "Jaine",
      client_lastName: "Signorelli",
      client_email: "jsignorellif@cpanel.net",
      client_phoneNumber: 7682860138,
      client_address: "13th Floor",
      client_postalCode: 11857,
      client_city: "Oenunu"
    }, {
      client_name: "Ora",
      client_lastName: "Guyon",
      client_email: "oguyong@lulu.com",
      client_phoneNumber: 6090502271,
      client_address: "Apt 1171",
      client_postalCode: 52565,
      client_city: "Babakankiray"
    }, {
      client_name: "Melinda",
      client_lastName: "Fevers",
      client_email: "mfeversh@constantcontact.com",
      client_phoneNumber: 5971514746,
      client_address: "PO Box 12071",
      client_postalCode: 54267,
      client_city: "Sundsvall"
    }, {
      client_name: "Gabe",
      client_lastName: "Rivalland",
      client_email: "grivallandi@a8.net",
      client_phoneNumber: 3908280576,
      client_address: "Room 1212",
      client_postalCode: 28789,
      client_city: "Youchou"
    }, {
      client_name: "Hewitt",
      client_lastName: "Rafter",
      client_email: "hrafterj@elegantthemes.com",
      client_phoneNumber: 9591500075,
      client_address: "Apt 515",
      client_postalCode: 20418,
      client_city: "Cipicung"
    }, {
      client_name: "Laurel",
      client_lastName: "Allsep",
      client_email: "lallsepk@ox.ac.uk",
      client_phoneNumber: 3845662462,
      client_address: "Suite 39",
      client_postalCode: 19820,
      client_city: "Beolgyo"
    }, {
      client_name: "Townie",
      client_lastName: "Fronzek",
      client_email: "tfronzekl@4shared.com",
      client_phoneNumber: 6755640374,
      client_address: "Apt 45",
      client_postalCode: 99972,
      client_city: "Benito Juarez"
    }, {
      client_name: "Konstantin",
      client_lastName: "Snelgar",
      client_email: "ksnelgarm@shutterfly.com",
      client_phoneNumber: 8233953360,
      client_address: "Room 474",
      client_postalCode: 57773,
      client_city: "Smilavichy"
    }, {
      client_name: "Ilysa",
      client_lastName: "Seacombe",
      client_email: "iseacomben@nasa.gov",
      client_phoneNumber: 7752478326,
      client_address: "Apt 394",
      client_postalCode: 84124,
      client_city: "Nartkala"
    }, {
      client_name: "Leela",
      client_lastName: "Woodus",
      client_email: "lwooduso@microsoft.com",
      client_phoneNumber: 5908927354,
      client_address: "Room 1478",
      client_postalCode: 74620,
      client_city: "Nelson"
    }, {
      client_name: "Boycey",
      client_lastName: "Liepina",
      client_email: "bliepinap@patch.com",
      client_phoneNumber: 3185649736,
      client_address: "Room 777",
      client_postalCode: 34744,
      client_city: "Cheb"
    }, {
      client_name: "Lindon",
      client_lastName: "Crusham",
      client_email: "lcrushamq@japanpost.jp",
      client_phoneNumber: 4117808782,
      client_address: "Room 222",
      client_postalCode: 20156,
      client_city: "Shijak"
    }, {
      client_name: "Bibbie",
      client_lastName: "Bamsey",
      client_email: "bbamseyr@theatlantic.com",
      client_phoneNumber: 9601044882,
      client_address: "Room 1040",
      client_postalCode: 10657,
      client_city: "Telgawah"
    }, {
      client_name: "Spencer",
      client_lastName: "Lemonnier",
      client_email: "slemonniers@biglobe.ne.jp",
      client_phoneNumber: 1984019849,
      client_address: "Suite 76",
      client_postalCode: 28934,
      client_city: "Haiphong"
    }, {
      client_name: "Jerry",
      client_lastName: "Postan",
      client_email: "jpostant@patch.com",
      client_phoneNumber: 9668998219,
      client_address: "6th Floor",
      client_postalCode: 77962,
      client_city: "Pocito"
    }, {
      client_name: "Dean",
      client_lastName: "Kiehnlt",
      client_email: "dkiehnltu@hhs.gov",
      client_phoneNumber: 9001136205,
      client_address: "Room 643",
      client_postalCode: 92271,
      client_city: "Binabaan"
    }, {
      client_name: "Guillaume",
      client_lastName: "Fitzgerald",
      client_email: "gfitzgeraldv@ehow.com",
      client_phoneNumber: 6541492547,
      client_address: "PO Box 64644",
      client_postalCode: 53646,
      client_city: "Barbosa"
    }, {
      client_name: "Hammad",
      client_lastName: "Titmuss",
      client_email: "htitmussw@squidoo.com",
      client_phoneNumber: 1887378541,
      client_address: "Suite 39",
      client_postalCode: 16067,
      client_city: "Qingxi"
    }, {
      client_name: "Florri",
      client_lastName: "McGlaud",
      client_email: "fmcglaudx@adobe.com",
      client_phoneNumber: 3468098815,
      client_address: "Apt 1990",
      client_postalCode: 71158,
      client_city: "Lykóvrysi"
    }, {
      client_name: "Albina",
      client_lastName: "Sparrowhawk",
      client_email: "asparrowhawky@netscape.com",
      client_phoneNumber: 3207124176,
      client_address: "11th Floor",
      client_postalCode: 59860,
      client_city: "Torsås"
    }, {
      client_name: "Marinna",
      client_lastName: "Von Oertzen",
      client_email: "mvonoertzenz@blogs.com",
      client_phoneNumber: 3740664837,
      client_address: "Suite 89",
      client_postalCode: 40714,
      client_city: "Prilep"
    }, {
      client_name: "Cornie",
      client_lastName: "Clausewitz",
      client_email: "cclausewitz10@army.mil",
      client_phoneNumber: 4461271736,
      client_address: "4th Floor",
      client_postalCode: 50065,
      client_city: "Pangradin Satu"
    }, {
      client_name: "Carlee",
      client_lastName: "Fulton",
      client_email: "cfulton11@weebly.com",
      client_phoneNumber: 8574636701,
      client_address: "Room 717",
      client_postalCode: 51926,
      client_city: "Vallentuna"
    }, {
      client_name: "Milissent",
      client_lastName: "Mazzia",
      client_email: "mmazzia12@fastcompany.com",
      client_phoneNumber: 8329522529,
      client_address: "PO Box 90524",
      client_postalCode: 23188,
      client_city: "San Eduardo"
    }, {
      client_name: "Sig",
      client_lastName: "Fishburn",
      client_email: "sfishburn13@over-blog.com",
      client_phoneNumber: 1719018769,
      client_address: "Apt 1434",
      client_postalCode: 28088,
      client_city: "Jiangnan"
    }, {
      client_name: "Dedie",
      client_lastName: "Corns",
      client_email: "dcorns14@webs.com",
      client_phoneNumber: 2500237760,
      client_address: "10th Floor",
      client_postalCode: 30047,
      client_city: "Keumala"
    }, {
      client_name: "Michale",
      client_lastName: "Ivanovic",
      client_email: "mivanovic15@dropbox.com",
      client_phoneNumber: 2886894204,
      client_address: "Room 115",
      client_postalCode: 52517,
      client_city: "Karagandy"
    }, {
      client_name: "Adiana",
      client_lastName: "Cleeves",
      client_email: "acleeves16@symantec.com",
      client_phoneNumber: 4095352129,
      client_address: "Apt 1321",
      client_postalCode: 22798,
      client_city: "Dukuhpicung"
    }, {
      client_name: "Finn",
      client_lastName: "Lelande",
      client_email: "flelande17@shareasale.com",
      client_phoneNumber: 6495851691,
      client_address: "PO Box 70931",
      client_postalCode: 10594,
      client_city: "Tsowkêy"
    }, {
      client_name: "Louise",
      client_lastName: "Littler",
      client_email: "llittler18@columbia.edu",
      client_phoneNumber: 4769434201,
      client_address: "PO Box 84106",
      client_postalCode: 33335,
      client_city: "Guinabsan"
    }, {
      client_name: "Andy",
      client_lastName: "Fenning",
      client_email: "afenning19@quantcast.com",
      client_phoneNumber: 6371679528,
      client_address: "PO Box 99529",
      client_postalCode: 79743,
      client_city: "Klevan’"
    }, {
      client_name: "Teressa",
      client_lastName: "Don",
      client_email: "tdon1a@utexas.edu",
      client_phoneNumber: 4887801590,
      client_address: "6th Floor",
      client_postalCode: 72194,
      client_city: "Guanmian"
    }, {
      client_name: "Edita",
      client_lastName: "Rentenbeck",
      client_email: "erentenbeck1b@weebly.com",
      client_phoneNumber: 9098346666,
      client_address: "16th Floor",
      client_postalCode: 13327,
      client_city: "Na Khu"
    }, {
      client_name: "Annecorinne",
      client_lastName: "Peinton",
      client_email: "apeinton1c@newyorker.com",
      client_phoneNumber: 6498060352,
      client_address: "PO Box 65061",
      client_postalCode: 62378,
      client_city: "Dębe Wielkie"
    }, {
      client_name: "Casar",
      client_lastName: "MacCaffrey",
      client_email: "cmaccaffrey1d@example.com",
      client_phoneNumber: 7185559030,
      client_address: "11th Floor",
      client_postalCode: 77645,
      client_city: "Piła"
    }, {
      client_name: "Bradley",
      client_lastName: "McErlaine",
      client_email: "bmcerlaine1e@walmart.com",
      client_phoneNumber: 6844397180,
      client_address: "PO Box 81447",
      client_postalCode: 72827,
      client_city: "Lens"
    }, {
      client_name: "Rozella",
      client_lastName: "Corwin",
      client_email: "rcorwin1f@slideshare.net",
      client_phoneNumber: 9300698130,
      client_address: "PO Box 73718",
      client_postalCode: 74635,
      client_city: "Manisi"
    }, {
      client_name: "Vernice",
      client_lastName: "Ambroix",
      client_email: "vambroix1g@storify.com",
      client_phoneNumber: 4213063634,
      client_address: "PO Box 60236",
      client_postalCode: 43453,
      client_city: "Xin’an"
    }, {
      client_name: "Willdon",
      client_lastName: "Blevin",
      client_email: "wblevin1h@spotify.com",
      client_phoneNumber: 2623874220,
      client_address: "Suite 56",
      client_postalCode: 39835,
      client_city: "Stockholm"
    }, {
      client_name: "Tate",
      client_lastName: "Tremathack",
      client_email: "ttremathack1i@bravesites.com",
      client_phoneNumber: 3061791156,
      client_address: "PO Box 18270",
      client_postalCode: 51950,
      client_city: "Hanyuan"
    }, {
      client_name: "Maxy",
      client_lastName: "Gulc",
      client_email: "mgulc1j@ning.com",
      client_phoneNumber: 6044150504,
      client_address: "Suite 11",
      client_postalCode: 94733,
      client_city: "Hengjing"
    }, {
      client_name: "Virgina",
      client_lastName: "Van den Hof",
      client_email: "vvandenhof1k@51.la",
      client_phoneNumber: 9326746188,
      client_address: "Apt 1924",
      client_postalCode: 57863,
      client_city: "L'Aigle"
    }, {
      client_name: "Othella",
      client_lastName: "Tather",
      client_email: "otather1l@google.co.jp",
      client_phoneNumber: 5689893245,
      client_address: "Room 396",
      client_postalCode: 81944,
      client_city: "Vrbno pod Pradědem"
    }, {
      client_name: "Atlante",
      client_lastName: "Mulberry",
      client_email: "amulberry1m@typepad.com",
      client_phoneNumber: 7010858306,
      client_address: "Apt 1924",
      client_postalCode: 54967,
      client_city: "Monino"
    }, {
      client_name: "Stinky",
      client_lastName: "Melbourne",
      client_email: "smelbourne1n@msu.edu",
      client_phoneNumber: 7086372897,
      client_address: "PO Box 28164",
      client_postalCode: 50382,
      client_city: "Runka"
    }, {
      client_name: "Gwennie",
      client_lastName: "Dodsworth",
      client_email: "gdodsworth1o@pcworld.com",
      client_phoneNumber: 4619615849,
      client_address: "PO Box 33081",
      client_postalCode: 63611,
      client_city: "Karang Kulon"
    }, {
      client_name: "Tori",
      client_lastName: "Carratt",
      client_email: "tcarratt1p@themeforest.net",
      client_phoneNumber: 5427159736,
      client_address: "Apt 596",
      client_postalCode: 22545,
      client_city: "Mamponteng"
    }, {
      client_name: "Sauncho",
      client_lastName: "Suddell",
      client_email: "ssuddell1q@whitehouse.gov",
      client_phoneNumber: 8392640669,
      client_address: "PO Box 3577",
      client_postalCode: 60611,
      client_city: "Pozhang"
    }, {
      client_name: "Dimitri",
      client_lastName: "Von Salzberg",
      client_email: "dvonsalzberg1r@salon.com",
      client_phoneNumber: 2798887403,
      client_address: "Apt 1645",
      client_postalCode: 40360,
      client_city: "Dampek"
    }, {
      client_name: "Sergent",
      client_lastName: "Delaprelle",
      client_email: "sdelaprelle1s@opera.com",
      client_phoneNumber: 8206939260,
      client_address: "Suite 23",
      client_postalCode: 60177,
      client_city: "Longxi"
    }, {
      client_name: "Corrinne",
      client_lastName: "Lorne",
      client_email: "clorne1t@furl.net",
      client_phoneNumber: 9748759710,
      client_address: "PO Box 14502",
      client_postalCode: 10407,
      client_city: "Wudabao"
    }, {
      client_name: "Louisette",
      client_lastName: "Hallsworth",
      client_email: "lhallsworth1u@flickr.com",
      client_phoneNumber: 1265611172,
      client_address: "Suite 26",
      client_postalCode: 25072,
      client_city: "Balabag"
    }, {
      client_name: "Garwin",
      client_lastName: "Breitling",
      client_email: "gbreitling1v@amazon.co.jp",
      client_phoneNumber: 6182254544,
      client_address: "5th Floor",
      client_postalCode: 38334,
      client_city: "Pasarbaru"
    }, {
      client_name: "Brynna",
      client_lastName: "Tarver",
      client_email: "btarver1w@squidoo.com",
      client_phoneNumber: 9455494326,
      client_address: "Suite 43",
      client_postalCode: 86011,
      client_city: "Kloulklubed"
    }, {
      client_name: "Kip",
      client_lastName: "Klarzynski",
      client_email: "kklarzynski1x@admin.ch",
      client_phoneNumber: 3840591346,
      client_address: "Suite 4",
      client_postalCode: 94661,
      client_city: "Sendangagung"
    }, {
      client_name: "Nathalia",
      client_lastName: "Trewhitt",
      client_email: "ntrewhitt1y@techcrunch.com",
      client_phoneNumber: 8081614300,
      client_address: "PO Box 84649",
      client_postalCode: 45956,
      client_city: "Casa Nova"
    }, {
      client_name: "Nahum",
      client_lastName: "Crosbie",
      client_email: "ncrosbie1z@wikia.com",
      client_phoneNumber: 5039984286,
      client_address: "PO Box 92576",
      client_postalCode: 32683,
      client_city: "Zafarwāl"
    }, {
      client_name: "Elijah",
      client_lastName: "Godfery",
      client_email: "egodfery20@fc2.com",
      client_phoneNumber: 9708744365,
      client_address: "Suite 79",
      client_postalCode: 91131,
      client_city: "Krajan Suco"
    }, {
      client_name: "Robina",
      client_lastName: "MacMenamie",
      client_email: "rmacmenamie21@tripod.com",
      client_phoneNumber: 2513093925,
      client_address: "6th Floor",
      client_postalCode: 51977,
      client_city: "Bi’r al Ḩufayy"
    }, {
      client_name: "Chick",
      client_lastName: "Goodbar",
      client_email: "cgoodbar22@joomla.org",
      client_phoneNumber: 5254275933,
      client_address: "Room 1949",
      client_postalCode: 97389,
      client_city: "Cortes"
    }, {
      client_name: "Sigismund",
      client_lastName: "Radbond",
      client_email: "sradbond23@mapy.cz",
      client_phoneNumber: 1110797148,
      client_address: "PO Box 48212",
      client_postalCode: 79770,
      client_city: "Agidel’"
    }, {
      client_name: "Ronalda",
      client_lastName: "Veld",
      client_email: "rveld24@globo.com",
      client_phoneNumber: 3041114992,
      client_address: "19th Floor",
      client_postalCode: 53374,
      client_city: "Marcala"
    }, {
      client_name: "Lurette",
      client_lastName: "Fiander",
      client_email: "lfiander25@usgs.gov",
      client_phoneNumber: 7621722242,
      client_address: "Apt 690",
      client_postalCode: 10683,
      client_city: "Hongtang"
    }, {
      client_name: "Feliks",
      client_lastName: "Ilive",
      client_email: "filive26@sbwire.com",
      client_phoneNumber: 2594957388,
      client_address: "PO Box 40150",
      client_postalCode: 35397,
      client_city: "Jinzhuang"
    }, {
      client_name: "Hymie",
      client_lastName: "Pett",
      client_email: "hpett27@auda.org.au",
      client_phoneNumber: 7560580459,
      client_address: "Suite 65",
      client_postalCode: 72270,
      client_city: "Sainte-Adèle"
    }, {
      client_name: "Cherlyn",
      client_lastName: "Handmore",
      client_email: "chandmore28@elpais.com",
      client_phoneNumber: 3155933553,
      client_address: "Apt 149",
      client_postalCode: 77278,
      client_city: "Tayzhina"
    }, {
      client_name: "Tabina",
      client_lastName: "Casetta",
      client_email: "tcasetta29@wix.com",
      client_phoneNumber: 1107303461,
      client_address: "13th Floor",
      client_postalCode: 93458,
      client_city: "Lesnoy"
    }, {
      client_name: "Appolonia",
      client_lastName: "Curee",
      client_email: "acuree2a@hibu.com",
      client_phoneNumber: 6085066997,
      client_address: "18th Floor",
      client_postalCode: 33883,
      client_city: "Danauparis"
    }, {
      client_name: "Efren",
      client_lastName: "Bendik",
      client_email: "ebendik2b@geocities.com",
      client_phoneNumber: 8869511712,
      client_address: "Room 975",
      client_postalCode: 15337,
      client_city: "Lahad Datu"
    }, {
      client_name: "Aundrea",
      client_lastName: "Garfoot",
      client_email: "agarfoot2c@ucoz.com",
      client_phoneNumber: 4126532607,
      client_address: "PO Box 8457",
      client_postalCode: 20577,
      client_city: "Kozyatyn"
    }, {
      client_name: "Blondelle",
      client_lastName: "Hixson",
      client_email: "bhixson2d@salon.com",
      client_phoneNumber: 3798407566,
      client_address: "Room 1365",
      client_postalCode: 17933,
      client_city: "Rybatskoye"
    }, {
      client_name: "Misha",
      client_lastName: "Silverthorne",
      client_email: "msilverthorne2e@jiathis.com",
      client_phoneNumber: 5980505414,
      client_address: "PO Box 69333",
      client_postalCode: 36376,
      client_city: "Shahrak"
    }, {
      client_name: "Yancy",
      client_lastName: "Mose",
      client_email: "ymose2f@gov.uk",
      client_phoneNumber: 7439395319,
      client_address: "PO Box 82222",
      client_postalCode: 16775,
      client_city: "Baoshan"
    }, {
      client_name: "Erin",
      client_lastName: "Sarl",
      client_email: "esarl2g@time.com",
      client_phoneNumber: 7751922576,
      client_address: "Suite 99",
      client_postalCode: 72981,
      client_city: "La Guama"
    }, {
      client_name: "Leora",
      client_lastName: "Consadine",
      client_email: "lconsadine2h@webnode.com",
      client_phoneNumber: 7779538872,
      client_address: "Room 235",
      client_postalCode: 70901,
      client_city: "Barranca"
    }, {
      client_name: "Annice",
      client_lastName: "Ketchen",
      client_email: "aketchen2i@mit.edu",
      client_phoneNumber: 8233449083,
      client_address: "PO Box 50628",
      client_postalCode: 21543,
      client_city: "Namur"
    }, {
      client_name: "Marlowe",
      client_lastName: "Bendel",
      client_email: "mbendel2j@cmu.edu",
      client_phoneNumber: 7384776810,
      client_address: "4th Floor",
      client_postalCode: 54069,
      client_city: "Yilkiqi"
    }, {
      client_name: "Griz",
      client_lastName: "Kermeen",
      client_email: "gkermeen2k@paypal.com",
      client_phoneNumber: 5224314311,
      client_address: "PO Box 11627",
      client_postalCode: 49981,
      client_city: "Dao’er"
    }, {
      client_name: "Karoline",
      client_lastName: "Cooper",
      client_email: "kcooper2l@example.com",
      client_phoneNumber: 8696454974,
      client_address: "Suite 89",
      client_postalCode: 22365,
      client_city: "Ciharalang"
    }, {
      client_name: "Carola",
      client_lastName: "Tesauro",
      client_email: "ctesauro2m@wordpress.com",
      client_phoneNumber: 1871582059,
      client_address: "PO Box 52274",
      client_postalCode: 19349,
      client_city: "Liuhuang"
    }, {
      client_name: "Tobye",
      client_lastName: "Vankin",
      client_email: "tvankin2n@booking.com",
      client_phoneNumber: 7733404668,
      client_address: "Suite 73",
      client_postalCode: 48831,
      client_city: "Zhenqiao"
    }, {
      client_name: "Cullie",
      client_lastName: "Clendening",
      client_email: "cclendening2o@altervista.org",
      client_phoneNumber: 2158941256,
      client_address: "20th Floor",
      client_postalCode: 50132,
      client_city: "Chaodi"
    }, {
      client_name: "Tom",
      client_lastName: "Bergstrand",
      client_email: "tbergstrand2p@dedecms.com",
      client_phoneNumber: 9630064174,
      client_address: "PO Box 8884",
      client_postalCode: 64609,
      client_city: "Libertador General San Martín"
    }, {
      client_name: "Elisha",
      client_lastName: "Hould",
      client_email: "ehould2q@forbes.com",
      client_phoneNumber: 8974657103,
      client_address: "14th Floor",
      client_postalCode: 26868,
      client_city: "Västanfjärd"
    }, {
      client_name: "Rey",
      client_lastName: "Ganforthe",
      client_email: "rganforthe2r@homestead.com",
      client_phoneNumber: 8799547704,
      client_address: "Apt 1125",
      client_postalCode: 41687,
      client_city: "Cibetung Dua"
    }
  ]);
};
