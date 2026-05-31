// ==================== COMPLETE LEAGUES DATA ====================
// ONLY data declarations - NO functions or thresholds here

const leaguesData = {

"MLS Eastern Conference": {
    id: "mls-east",
    logo: "mls/mlslogo.jpg",
    isBasketball: false,
    teams: [
        { team: "Philadelphia", MP: 34, MW: 20, MD: 6, GF: 57, GA: 35, logo: "mls/philadelphialogo.png" },
        { team: "Cincinnati", MP: 34, MW: 20, MD: 5, GF: 52, GA: 40, logo: "mls/cincinnatlogo.png" },
        { team: "Inter Miami", MP: 34, MW: 19, MD: 8, GF: 81, GA: 55, logo: "mls/intermiamilogo.png" },
        { team: "Charlotte", MP: 34, MW: 19, MD: 2, GF: 55, GA: 46, logo: "mls/charlottelogo.png" },
        { team: "New York", MP: 34, MW: 17, MD: 5, GF: 50, GA: 44, logo: "mls/newyorklogo.png" },
        { team: "Nashville", MP: 34, MW: 16, MD: 6, GF: 58, GA: 45, logo: "mls/nashvillelogo.png" },
        { team: "Columbus", MP: 34, MW: 14, MD: 12, GF: 55, GA: 41, logo: "mls/columbuslogo.png" },
        { team: "Chicago", MP: 34, MW: 15, MD: 8, GF: 68, GA: 60, logo: "mls/chicagologo.png" },
        { team: "Orlando", MP: 34, MW: 14, MD: 11, GF: 63, GA: 51, logo: "mls/orlandologo.png" },
        { team: "NY Red Bulls", MP: 34, MW: 12, MD: 7, GF: 48, GA: 47, logo: "mls/nyredbullslogo.png" },
        { team: "New England", MP: 34, MW: 9, MD: 9, GF: 44, GA: 51, logo: "mls/newenglandlogo.png" },
        { team: "Toronto", MP: 34, MW: 6, MD: 14, GF: 37, GA: 44, logo: "mls/torontologo.png" },
        { team: "Montreal", MP: 34, MW: 6, MD: 10, GF: 34, GA: 60, logo: "mls/monteallogo.png" },
        { team: "Atlanta", MP: 34, MW: 5, MD: 13, GF: 38, GA: 63, logo: "mls/atlantalogo.png" }
    ],
    fixtures: [
        ["Montreal", "Toronto"],
        ["Chicago", "Vancouver"],
        ["Seattle", "Portland"],
        ["Nashville", "Atlanta"],
        ["LA Galaxy", "LAFC"],
        ["Cincinnati", "Vancouver"],
        ["Columbus", "New York City"],
        ["Inter Miami", "Chicago"],
        ["Philadelphia", "NY Red Bulls"],
        ["New England", "Toronto"],
        ["Charlotte", "Atlanta"]
    ]
},

"MLS Western Conference": {
    id: "mls-west",
    logo: "mls/mlslogo.jpg",
    isBasketball: false,
    teams: [
        { team: "DC United", MP: 34, MW: 5, MD: 11, GF: 30, GA: 66, logo: "mls/dcunitedlogo.png" },
        { team: "San Diego", MP: 34, MW: 19, MD: 6, GF: 64, GA: 41, logo: "mls/sandiegologo.jpg" },
        { team: "Vancouver", MP: 34, MW: 18, MD: 9, GF: 66, GA: 38, logo: "mls/vancouverlogo.png" },
        { team: "LAFC", MP: 34, MW: 17, MD: 9, GF: 65, GA: 40, logo: "mls/lafclogo.png" },
        { team: "Minnesota", MP: 34, MW: 16, MD: 10, GF: 56, GA: 39, logo: "mls/minnesotslogo.png" },
        { team: "Seattle", MP: 34, MW: 15, MD: 10, GF: 58, GA: 48, logo: "mls/seattlelogo.png" },
        { team: "Austin", MP: 34, MW: 13, MD: 8, GF: 37, GA: 45, logo: "mls/austinlogo.png" },
        { team: "Dallas", MP: 34, MW: 11, MD: 11, GF: 52, GA: 55, logo: "mls/dallaslogo.png" },
        { team: "Portland", MP: 34, MW: 11, MD: 11, GF: 41, GA: 48, logo: "mls/portlandlogo.png" },
        { team: "Real Salt Lake", MP: 34, MW: 12, MD: 5, GF: 38, GA: 49, logo: "mls/realsaltlakelogo.png" },
        { team: "San Jose", MP: 34, MW: 11, MD: 8, GF: 60, GA: 63, logo: "mls/sanjoselogo.png" },
        { team: "Colorado", MP: 34, MW: 11, MD: 8, GF: 40, GA: 56, logo: "mls/coloradologo.png" },
        { team: "Houston Dynamo", MP: 34, MW: 9, MD: 10, GF: 43, GA: 56, logo: "mls/houstondynamologo.png" },
        { team: "St. Louis", MP: 34, MW: 8, MD: 8, GF: 44, GA: 58, logo: "mls/stlouislogo.png" },
        { team: "LA Galaxy", MP: 34, MW: 7, MD: 9, GF: 46, GA: 66, logo: "mls/lagalaxylogo.png" },
        { team: "Sporting KC", MP: 34, MW: 7, MD: 7, GF: 46, GA: 70, logo: "mls/sportingkclogo.png" }
    ],
    fixtures: [
        ["Toronto", "San Jose"],
        ["Sporting KC", "Seattle"],
        ["Real Salt Lake", "Portland"],
        ["Inter Miami", "Orlando"],
        ["Atlanta", "Montreal"],
        ["NY Red Bulls", "Dallas"],
        ["Columbus", "Minnesota"]
    ]
},

"Argentine Liga Profesional - Group A": {
    id: "argentina-group-a",
    logo: "argentina/argentinaprimeralogo.png",
    isBasketball: false,
    teams: [
        { team: "Estudiantes", MP: 16, MW: 9, MD: 4, GF: 19, GA: 7, logo: "argentina/estudianteslogo.png" },
        { team: "Boca", MP: 16, MW: 8, MD: 6, GF: 22, GA: 9, logo: "argentina/bocalogo.png" },
        { team: "Vélez Sársfield", MP: 16, MW: 7, MD: 7, GF: 18, GA: 12, logo: "argentina/velezlogo.png" },
        { team: "Talleres", MP: 16, MW: 7, MD: 5, GF: 17, GA: 13, logo: "argentina/estudianteslogo.png" },
        { team: "Independiente", MP: 16, MW: 6, MD: 6, GF: 24, GA: 20, logo: "argentina/tellereslogo.png" },
        { team: "Lanús", MP: 16, MW: 6, MD: 6, GF: 18, GA: 15, logo: "argentina/lanuslogo.png" },
        { team: "San Lorenzo", MP: 16, MW: 5, MD: 7, GF: 14, GA: 14, logo: "argentina/sanlorenzologo.png" },
        { team: "Unión", MP: 16, MW: 5, MD: 6, GF: 24, GA: 20, logo: "argentina/unionlogo.png" },
        { team: "Instituto", MP: 16, MW: 6, MD: 3, GF: 17, GA: 17, logo: "argentina/institutologo.png" },
        { team: "Defensa", MP: 16, MW: 4, MD: 7, GF: 18, GA: 21, logo: "argentina/defensalogo.png" },
        { team: "Gimnasia Esgirma", MP: 16, MW: 5, MD: 4, GF: 14, GA: 22, logo: "argentina/gimnasiaesgrimalogo.png" },
        { team: "Platense", MP: 16, MW: 3, MD: 7, GF: 10, GA: 15, logo: "argentina/platesnselogo.png" },
        { team: "Central Córdoba", MP: 16, MW: 4, MD: 4, GF: 11, GA: 21, logo: "argentina/centralcordobalogo.png" },
        { team: "Newell's", MP: 16, MW: 3, MD: 6, GF: 15, GA: 27, logo: "argentina/newellslogo.png" },
        { team: "Deportivo Riestra", MP: 16, MW: 1, MD: 8, GF: 5, GA: 12, logo: "argentina/riestralogo.jpg" }
    ],
    fixtures: [
        ["Barracas Central", "Banfield"],
        ["Lanus", "Riestra"],
        ["Central Cordoba", "Boca Juniors"],
        ["Union", "Telleres"],
        ["San Lorenzo", "Independiente"],
        ["Platense", "Estudiantes"],
        ["Aldosivi", "Independiente Rivadavia"],
        ["Central", "Tigre"],
        ["Gimnasia LP", "Argentinos Juniors"],
        ["Racing Club", "Huracan"],
        ["Belgrano", "Sarmiento"],
        ["River Plate", "Atletico Tucuman"],
        ["Gimnasia Esgrima", "Defensa"],
        ["Velez Sarsfield", "Newells"],
        ["Estudiantes De Rio Cuarto", "Instituto"]
    ]
},

"Argentine Liga Profesional - Group B": {
    id: "argentina-group-b",
    logo: "argentina/argentinaprimeralogo.png",
    isBasketball: false,
    teams: [
        { team: "Independiente Rivadavia", MP: 16, MW: 10, MD: 4, GF: 29, GA: 15, logo: "argentina/rivadavialogo.png" },
        { team: "River Plate", MP: 16, MW: 9, MD: 2, GF: 22, GA: 12, logo: "argentina/riverplatelogo.png" },
        { team: "Argentinos Juniors", MP: 16, MW: 8, MD: 5, GF: 17, GA: 13, logo: "argentina/argentinoslogo.png" },
        { team: "Central", MP: 16, MW: 8, MD: 4, GF: 20, GA: 16, logo: "argentina/centrallogo.png" },
        { team: "Belgrano", MP: 16, MW: 7, MD: 5, GF: 17, GA: 13, logo: "argentina/belgranologo.png" },
        { team: "Gimnasia LP", MP: 16, MW: 8, MD: 2, GF: 19, GA: 19, logo: "argentina/gimnasialplogo.png" },
        { team: "Huracán", MP: 16, MW: 5, MD: 7, GF: 17, GA: 13, logo: "argentina/huracanlogo.png" },
        { team: "Racing Club", MP: 16, MW: 5, MD: 6, GF: 17, GA: 15, logo: "argentina/racingclublogo.png" },
        { team: "Barracas Central", MP: 16, MW: 5, MD: 6, GF: 15, GA: 15, logo: "argentina/barracascentrallogo.png" },
        { team: "Tigre", MP: 16, MW: 4, MD: 8, GF: 18, GA: 15, logo: "argentina/tigrelogo.png" },
        { team: "Sarmiento", MP: 16, MW: 6, MD: 1, GF: 13, GA: 20, logo: "argentina/sarmientologo.png" },
        { team: "Banfield", MP: 16, MW: 5, MD: 3, GF: 17, GA: 19, logo: "argentina/banfieldlogo.png" },
        { team: "Atlético Tucumán", MP: 16, MW: 3, MD: 5, GF: 15, GA: 20, logo: "argentina/atleticotucumanlogo.png" },
        { team: "Aldosivi", MP: 16, MW: 0, MD: 8, GF: 6, GA: 19, logo: "argentina/aldosivilogo.png" },
        { team: "Estudiantes de Río Cuarto", MP: 16, MW: 1, MD: 2, GF: 5, GA: 24, logo: "argentina/estudiantesdelriocuartologo.png" }
    ],
    fixtures: [
        ["Independiente Rivadavia", "River Plate"],
        ["Argentinos Juniors", "Central"],
        ["Belgrano", "Gimnasia LP"],
        ["Huracán", "Racing Club"],
        ["Barracas Central", "Tigre"],
        ["Sarmiento", "Banfield"],
        ["Atlético Tucumán", "Aldosivi"],
        ["Estudiantes de Río Cuarto", "Independiente Rivadavia"],
        ["River Plate", "Argentinos Juniors"],
        ["Central", "Belgrano"],
        ["Gimnasia LP", "Huracán"],
        ["Racing Club", "Barracas Central"],
        ["Tigre", "Sarmiento"],
        ["Banfield", "Atlético Tucumán"],
        ["Aldosivi", "Estudiantes de Río Cuarto"]
    ]
},

"Japanese J1 League": {
    id: "j1-league",
    logo: "japan/j1logo.png",
    isBasketball: false,
    teams: [
        { team: "Kashima Antlers", MP: 38, MW: 23, MD: 7, GF: 58, GA: 31, logo: "japan/kashimaantlerslogo.png" },
        { team: "Kashiwa", MP: 38, MW: 21, MD: 12, GF: 60, GA: 34, logo: "japan/kashiwalogo.png" },
        { team: "Kyoto", MP: 38, MW: 19, MD: 11, GF: 62, GA: 40, logo: "japan/kyotologo.png" },
        { team: "Sanfrecce", MP: 38, MW: 20, MD: 8, GF: 46, GA: 28, logo: "japan/sanfreecelogo.png" },
        { team: "Vissel Kobe", MP: 38, MW: 18, MD: 10, GF: 46, GA: 33, logo: "japan/visselkobelogo.png" },
        { team: "Machida", MP: 38, MW: 17, MD: 9, GF: 52, GA: 38, logo: "japan/machidalogo.png" },
        { team: "Urawa Reds", MP: 38, MW: 16, MD: 11, GF: 45, GA: 39, logo: "japan/urawaredslogo.png" },
        { team: "Kawasaki", MP: 38, MW: 15, MD: 12, GF: 67, GA: 57, logo: "japan/kawasakilogo.png" },
        { team: "Gamba Osaka", MP: 38, MW: 17, MD: 6, GF: 53, GA: 55, logo: "japan/gambaosakalogo.png" },
        { team: "Cerezo Osaka", MP: 38, MW: 14, MD: 10, GF: 60, GA: 57, logo: "japan/cerezoosakalogo.png" },
        { team: "FC Tokyo", MP: 38, MW: 13, MD: 11, GF: 41, GA: 48, logo: "japan/fctokyologo.png" },
        { team: "Avispa", MP: 38, MW: 12, MD: 12, GF: 34, GA: 38, logo: "japan/avispalogo.png" },
        { team: "Okayama", MP: 38, MW: 12, MD: 9, GF: 34, GA: 43, logo: "japan/okayamalogo.png" },
        { team: "Shimizu", MP: 38, MW: 11, MD: 11, GF: 41, GA: 51, logo: "japan/shimizulogo.png" },
        { team: "Yokohama FM", MP: 38, MW: 12, MD: 7, GF: 46, GA: 47, logo: "japan/yokohamafmlogo.png" },
        { team: "Nagoya", MP: 38, MW: 11, MD: 10, GF: 44, GA: 56, logo: "japan/nagoyalogo.png" },
        { team: "Tokyo Verdy", MP: 38, MW: 11, MD: 10, GF: 23, GA: 41, logo: "japan/nagoyalogo.png" },
        { team: "Yokohama FC", MP: 38, MW: 9, MD: 8, GF: 27, GA: 45, logo: "japan/yokogamafclogo.png" },
        { team: "Shonan", MP: 38, MW: 8, MD: 8, GF: 36, GA: 63, logo: "japan/shonanlogo.png" },
        { team: "Niigata", MP: 38, MW: 4, MD: 12, GF: 36, GA: 67, logo: "japan/niigatalogologo.png" }
    ],
    fixtures: [
        ["Sanfreece", "Kawasaki"],
        ["Nagoya", "Machida"],
        ["Vissel Kobe", "Kashima Antlers"],
        ["Cerezo Osaka", "FC Tokyo"]
    ]
},

"Japanese J2 League": {
    id: "j2-league",
    logo: "japan/j2logo.png",
    isBasketball: false,
    teams: [
        { team: "Mito HollyHock", MP: 38, MW: 20, MD: 10, GF: 55, GA: 34, logo: "japan/mitologo.png" },
        { team: "V-Varen Nagasaki", MP: 38, MW: 19, MD: 13, GF: 63, GA: 44, logo: "japan/nagasaki.png" },
        { team: "JEF United", MP: 38, MW: 20, MD: 9, GF: 56, GA: 34, logo: "japan/jeflogo.png" },
        { team: "Tokushima Vortis", MP: 38, MW: 18, MD: 11, GF: 45, GA: 24, logo: "japan/tokushimavortislogo.png" },
        { team: "Júbilo Iwata", MP: 38, MW: 19, MD: 7, GF: 59, GA: 51, logo: "japan/jubiloiwatalogo.png" },
        { team: "Omiya Ardija", MP: 38, MW: 18, MD: 9, GF: 60, GA: 39, logo: "japan/omiyalogo.png" },
        { team: "Vegalta Sendai", MP: 38, MW: 16, MD: 14, GF: 47, GA: 36, logo: "japan/velgatalogo.png" },
        { team: "Sagan Tosu", MP: 38, MW: 16, MD: 10, GF: 46, GA: 43, logo: "japan/sagantosulogo.png" },
        { team: "Iwaki FC", MP: 38, MW: 15, MD: 11, GF: 55, GA: 44, logo: "japan/iwakilogo.png" },
        { team: "Montedio Yamagata", MP: 38, MW: 15, MD: 8, GF: 58, GA: 54, logo: "japan/yamagatalogo.png" },
        { team: "Imabari", MP: 38, MW: 13, MD: 14, GF: 46, GA: 46, logo: "japan/imabarilogo.png" },
        { team: "Consadole Sapporo", MP: 38, MW: 16, MD: 5, GF: 50, GA: 63, logo: "japan/consadolelogo.png" },
        { team: "Ventforet Kofu", MP: 38, MW: 11, MD: 11, GF: 37, GA: 45, logo: "japan/ventforetlogo.png" },
        { team: "Blaublitz", MP: 38, MW: 11, MD: 10, GF: 43, GA: 59, logo: "japan/blaublitzlogo.png" },
        { team: "Fujieda MYFC", MP: 38, MW: 9, MD: 12, GF: 41, GA: 50, logo: "japan/fujieda.png" },
        { team: "Oita Trinita", MP: 38, MW: 8, MD: 14, GF: 27, GA: 44, logo: "japan/oitalogo.png" },
        { team: "Kataller Toyama", MP: 38, MW: 9, MD: 10, GF: 34, GA: 49, logo: "japan/toyamalogo.png" },
        { team: "Roasso Kumamoto", MP: 38, MW: 9, MD: 10, GF: 41, GA: 57, logo: "japan/roassologo.png" },
        { team: "Renofa Yamaguchi", MP: 38, MW: 7, MD: 15, GF: 36, GA: 47, logo: "japan/renofalogo.png" },
        { team: "Ehime FC", MP: 38, MW: 3, MD: 13, GF: 35, GA: 71, logo: "japan/ehimelogo.png" }
    ],
    fixtures: [
        ["Consadole Sapporo", "Jubilo Iwata"],
        ["Fujieda MYFC", "Iwaki FC"],
        ["Renofa Yamaguchi", "Roasso Kumamoto"],
        ["F.C. Gifu", "Omiya Ardija"],
        ["Vegalta Sendai", "Yokohama FC"],
        ["Nara Club", "Kataller Toyama"],
        ["Niigata", "Ehime FC"],
        ["Sagan Tosu", "Ryukyu"],
        ["Gunma", "Sagamihara"],
        ["Nagano", "Ventforet Kofu"],
        ["Vanraure Hachinohe", "Tochigi SC"],
        ["Tegevajaro Miyazaki", "Reilac Shiga"],
        ["Tokushima Vortis", "Imabari"],
        ["Kitayushu", "Kagoshima United"],
        ["Matsumoto Yamaga", "Fukushima United"],
        ["Kamatamare Sanuki", "Osaka"],
        ["Montedio Yamagata", "Shonan Bellmare"],
        ["Tottori", "Oita Trinita"],
        ["Blaublitz Tochigi FC", "Kanazawa"],
        ["Ehime FC", "Mito HollyHock"]
    ]
	},
	

"Chilean Primera División": {
    id: "chile",
    logo: "chile/chile.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Coquimbo", MP: 30, MW: 23, MD: 6, ML: 1, GF: 49, GA: 17, logo: "chile/coquimbo.png" },
        { rank: 2, team: "Universidad Católica", MP: 30, MW: 17, MD: 7, ML: 6, GF: 44, GA: 26, logo: "chile/ucatolica.png" },
        { rank: 3, team: "O'Higgins", MP: 30, MW: 16, MD: 8, ML: 6, GF: 43, GA: 34, logo: "chile/ohiggins.png" },
        { rank: 4, team: "Universidad de Chile", MP: 30, MW: 17, MD: 4, ML: 9, GF: 58, GA: 32, logo: "chile/uchile.png" },
        { rank: 5, team: "Audax Italiano", MP: 30, MW: 16, MD: 4, ML: 10, GF: 51, GA: 43, logo: "chile/audax.png" },
        { rank: 6, team: "Palestino", MP: 30, MW: 14, MD: 7, ML: 9, GF: 42, GA: 31, logo: "chile/palestino.png" },
        { rank: 7, team: "Cobresal", MP: 30, MW: 14, MD: 5, ML: 11, GF: 38, GA: 38, logo: "chile/cobresal.png" },
        { rank: 8, team: "Colo-Colo", MP: 30, MW: 12, MD: 8, ML: 10, GF: 46, GA: 36, logo: "chile/colocolo.png" },
        { rank: 9, team: "Huachipato", MP: 30, MW: 12, MD: 7, ML: 11, GF: 43, GA: 42, logo: "chile/huachipato.png" },
        { rank: 10, team: "Ñublense", MP: 30, MW: 8, MD: 9, ML: 13, GF: 31, GA: 40, logo: "chile/nublense.png" },
        { rank: 11, team: "Deportes Limache", MP: 30, MW: 8, MD: 7, ML: 15, GF: 36, GA: 43, logo: "chile/limache.png" },
        { rank: 12, team: "Unión La Calera", MP: 30, MW: 8, MD: 5, ML: 17, GF: 28, GA: 39, logo: "chile/unionlacalera.png" },
        { rank: 13, team: "La Serena", MP: 30, MW: 7, MD: 6, ML: 17, GF: 32, GA: 52, logo: "chile/laserena.png" },
        { rank: 14, team: "Everton", MP: 30, MW: 6, MD: 8, ML: 16, GF: 27, GA: 44, logo: "chile/everton.png" },
        { rank: 15, team: "Deportes Iquique", MP: 30, MW: 6, MD: 6, ML: 18, GF: 34, GA: 60, logo: "chile/iquique.png" },
        { rank: 16, team: "Unión Española", MP: 30, MW: 6, MD: 3, ML: 21, GF: 33, GA: 58, logo: "chile/unespanola.png" }
    ],
    fixtures: [
        ["Deportes Limache", "Coquimbo"],
        ["O'Higgins", "Everton"],
        ["Palestino", "Audax Italiano"]
    ]
	},
	"Chinese Super League": {
    id: "csl",
    logo: "china/csl.png",
    isBasketball: false,
    teams: [
        { team: "Shanghai Port", MP: 30, MW: 20, MD: 6, ML: 4, GF: 72, GA: 44, logo: "china/shanghaiport.png" },
        { team: "Shanghai Shenhua", MP: 30, MW: 19, MD: 7, ML: 4, GF: 67, GA: 35, logo: "china/shanghaishenhua.png" },
        { team: "Chengdu Rongcheng", MP: 30, MW: 17, MD: 9, ML: 4, GF: 60, GA: 28, logo: "china/chengdu.png" },
        { team: "Beijing Guoan", MP: 30, MW: 17, MD: 6, ML: 7, GF: 69, GA: 46, logo: "china/beijing.png" },
        { team: "Shandong Taishan", MP: 30, MW: 15, MD: 8, ML: 7, GF: 69, GA: 46, logo: "china/shandong.png" },
        { team: "Tianjin Jinmen Tiger", MP: 30, MW: 12, MD: 8, ML: 10, GF: 40, GA: 41, logo: "china/tianjin.png" },
        { team: "Zhejiang", MP: 30, MW: 10, MD: 12, ML: 8, GF: 60, GA: 51, logo: "china/zhejiang.png" },
        { team: "Yunnan Yukun", MP: 30, MW: 11, MD: 9, ML: 10, GF: 47, GA: 52, logo: "china/yunnan.png" },
        { team: "Qingdao Youth Island", MP: 30, MW: 10, MD: 10, ML: 10, GF: 39, GA: 43, logo: "china/qingdao.png" },
        { team: "Henan", MP: 30, MW: 10, MD: 7, ML: 13, GF: 52, GA: 48, logo: "china/henan.png" },
        { team: "Dalian Yingbo", MP: 30, MW: 9, MD: 9, ML: 12, GF: 30, GA: 45, logo: "china/dalian.png" },
        { team: "Shenzhen Peng City", MP: 30, MW: 8, MD: 3, ML: 19, GF: 35, GA: 59, logo: "china/shenzhen.png" },
        { team: "Wuhan Three Towns", MP: 30, MW: 6, MD: 7, ML: 17, GF: 34, GA: 62, logo: "china/wuhan.png" },
        { team: "Qingdao Hainiu", MP: 30, MW: 5, MD: 10, ML: 15, GF: 35, GA: 48, logo: "china/qingdaohainiu.png" },
        { team: "Meizhou Hakka", MP: 30, MW: 5, MD: 6, ML: 19, GF: 36, GA: 71, logo: "china/meizhou.png" },
        { team: "Changchun Yatai", MP: 30, MW: 4, MD: 7, ML: 19, GF: 26, GA: 52, logo: "china/changchun.png" }
    ],
    fixtures: [
        ["Qingdao Hainiu", "Yunnan Yukun"],
        ["Shenyang Urban", "Shandong Taishan"],
        ["Henan", "Shanghai Port"],
        ["Shenzhen Peng City", "Chengdu Rongcheng"],
        ["Chongqing Tonglianglong", "Tianjin Jinmen Tiger"],
        ["Beijing Guoan", "Wuhan Three Towns"],
        ["Qingdao Youth Island", "Zhejiang"],
        ["Dalian Yingbo", "Shanghai Shenhua"]
    ]


},

"NBA": {
    id: "nba",
    logo: "nba.png",
    isBasketball: true,
    teams: [
        { rank: 1, team: "Boston Celtics", GP: 82, GW: 64, GL: 18, points_for: 9840, points_against: 8938 },
        { rank: 2, team: "Denver Nuggets", GP: 82, GW: 57, GL: 25, points_for: 9430, points_against: 9020 },
        { rank: 3, team: "LA Lakers", GP: 82, GW: 52, GL: 30, points_for: 9676, points_against: 9184 },
        { rank: 4, team: "Philadelphia 76ers", GP: 82, GW: 54, GL: 28, points_for: 9594, points_against: 9102 },
        { rank: 5, team: "Milwaukee Bucks", GP: 82, GW: 49, GL: 33, points_for: 9758, points_against: 9594 },
        { rank: 6, team: "Golden State Warriors", GP: 82, GW: 46, GL: 36, points_for: 9676, points_against: 9594 },
        { rank: 7, team: "Phoenix Suns", GP: 82, GW: 45, GL: 37, points_for: 9430, points_against: 9266 },
        { rank: 8, team: "Miami Heat", GP: 82, GW: 44, GL: 38, points_for: 9020, points_against: 8938 },
        { rank: 9, team: "New York Knicks", GP: 82, GW: 47, GL: 35, points_for: 9430, points_against: 9184 },
        { rank: 10, team: "Dallas Mavericks", GP: 82, GW: 50, GL: 32, points_for: 9676, points_against: 9512 }
    ],
    fixtures: [
        ["Boston Celtics", "LA Lakers"],
        ["Denver Nuggets", "Milwaukee Bucks"],
        ["Philadelphia 76ers", "Phoenix Suns"],
        ["Golden State Warriors", "Miami Heat"],
        ["New York Knicks", "Dallas Mavericks"]
    ]
},

"EuroLeague": {
    id: "euroleague",
    logo: "euroleague.png",
    isBasketball: true,
    teams: [
        { rank: 1, team: "Real Madrid", GP: 34, GW: 27, GL: 7, points_for: 2992, points_against: 2686 },
        { rank: 2, team: "Panathinaikos", GP: 34, GW: 23, GL: 11, points_for: 2856, points_against: 2652 },
        { rank: 3, team: "Olympiacos", GP: 34, GW: 22, GL: 12, points_for: 2890, points_against: 2720 },
        { rank: 4, team: "Barcelona", GP: 34, GW: 22, GL: 12, points_for: 2958, points_against: 2788 },
        { rank: 5, team: "Monaco", GP: 34, GW: 21, GL: 13, points_for: 2924, points_against: 2788 },
        { rank: 6, team: "Fenerbahce", GP: 34, GW: 20, GL: 14, points_for: 2822, points_against: 2754 },
        { rank: 7, team: "Maccabi Tel Aviv", GP: 34, GW: 20, GL: 14, points_for: 2856, points_against: 2822 },
        { rank: 8, team: "Partizan", GP: 34, GW: 19, GL: 15, points_for: 2788, points_against: 2754 },
        { rank: 9, team: "Zalgiris Kaunas", GP: 34, GW: 18, GL: 16, points_for: 2720, points_against: 2686 },
        { rank: 10, team: "Anadolu Efes", GP: 34, GW: 17, GL: 17, points_for: 2788, points_against: 2856 }
    ],
    fixtures: [
        ["Real Madrid", "Barcelona"],
        ["Panathinaikos", "Olympiacos"],
        ["Monaco", "Fenerbahce"],
        ["Maccabi Tel Aviv", "Partizan"],
        ["Anadolu Efes", "Zalgiris Kaunas"]
    ]
},

"Spanish ACB": {
    id: "acb",
    logo: "acb.png",
    isBasketball: true,
    teams: [
        { rank: 1, team: "Real Madrid", GP: 34, GW: 28, GL: 6, points_for: 3026, points_against: 2652 },
        { rank: 2, team: "Barcelona", GP: 34, GW: 26, GL: 8, points_for: 2992, points_against: 2686 },
        { rank: 3, team: "Unicaja", GP: 34, GW: 24, GL: 10, points_for: 2958, points_against: 2720 },
        { rank: 4, team: "Valencia", GP: 34, GW: 21, GL: 13, points_for: 2890, points_against: 2788 },
        { rank: 5, team: "Gran Canaria", GP: 34, GW: 20, GL: 14, points_for: 2890, points_against: 2788 },
        { rank: 6, team: "Baskonia", GP: 34, GW: 19, GL: 15, points_for: 2856, points_against: 2822 },
        { rank: 7, team: "Joventut", GP: 34, GW: 18, GL: 16, points_for: 2822, points_against: 2856 },
        { rank: 8, team: "Murcia", GP: 34, GW: 17, GL: 17, points_for: 2788, points_against: 2856 }
    ],
    fixtures: [
        ["Real Madrid", "Barcelona"],
        ["Unicaja", "Valencia"],
        ["Gran Canaria", "Baskonia"],
        ["Joventut", "Murcia"]
    ]
}

};

// ==================== MATCH RESULTS DATA ====================

const matchesData = {
    "English Premier League": [
        { home: "Liverpool", away: "Arsenal", home_score: 2, away_score: 1 },
        { home: "Manchester City", away: "Chelsea", home_score: 3, away_score: 0 },
        { home: "Manchester United", away: "Crystal Palace", home_score: 2, away_score: 1 },
        { home: "Brighton", away: "Nottingham", home_score: 1, away_score: 1 },
        { home: "Fulham", away: "Tottenham", home_score: 2, away_score: 1 },
        { home: "Arsenal", away: "Chelsea", home_score: 2, away_score: 1 },
        { home: "Bournemouth", away: "Brentford", home_score: 0, away_score: 0 },
        { home: "Everton", away: "Burnley", home_score: 2, away_score: 0 },
        { home: "Leeds", away: "Sunderland", home_score: 0, away_score: 1 },
        { home: "Wolves", away: "Liverpool", home_score: 2, away_score: 1 },
        { home: "Brighton", away: "Arsenal", home_score: 0, away_score: 1 },
        { home: "Fulham", away: "West Ham", home_score: 0, away_score: 1 },
        { home: "Manchester City", away: "Nottingham", home_score: 2, away_score: 2 },
        { home: "Aston Villa", away: "Chelsea", home_score: 1, away_score: 4 },
        { home: "Newcastle", away: "Manchester United", home_score: 2, away_score: 1 },
        { home: "Tottenham", away: "Crystal Palace", home_score: 1, away_score: 3 }
    ],
    "Spanish La Liga": [
        { home: "Barcelona", away: "Real Madrid", home_score: 2, away_score: 2 },
        { home: "Atletico Madrid", away: "Real Sociedad", home_score: 3, away_score: 2 },
        { home: "Osasuna", away: "Mallorca", home_score: 2, away_score: 2 },
        { home: "Levante", away: "Girona", home_score: 1, away_score: 1 },
        { home: "Athletic Club", away: "Barcelona", home_score: 0, away_score: 1 }
    ],
    "Italian Serie A": [
        { home: "Sassuolo", away: "Verona", home_score: 3, away_score: 0 },
        { home: "Juventus", away: "Como", home_score: 0, away_score: 2 },
        { home: "Leece", away: "Inter", home_score: 0, away_score: 2 },
        { home: "Cagliari", away: "Lazio", home_score: 0, away_score: 0 },
        { home: "Genoa", away: "Torino", home_score: 3, away_score: 0 },
        { home: "Atalanta", away: "Napoli", home_score: 2, away_score: 1 }
    ],
    "Japanese J1 League": [
        { home: "JEF", away: "Kashiwa", home_score: 2, away_score: 1 },
        { home: "FC Tokyo", away: "Yokohama FM", home_score: 3, away_score: 0 },
        { home: "Urawa Reds", away: "Mito", home_score: 2, away_score: 0 },
        { home: "Kashima Antlers", away: "Tokyo Verdy", home_score: 2, away_score: 0 },
        { home: "Avispa", away: "Nagoya", home_score: 1, away_score: 5 },
        { home: "Okayama", away: "Kyoto", home_score: 1, away_score: 0 },
        { home: "Gamba Osaka", away: "Nagasaki", home_score: 3, away_score: 2 },
        { home: "Yokohama FM", away: "JEF", home_score: 2, away_score: 0 },
        { home: "Kyoto", away: "Cerezo Osaka", home_score: 1, away_score: 2 },
        { home: "Shimizu", away: "Okayama", home_score: 1, away_score: 1 },
        { home: "Kashiwa", away: "Machida", home_score: 0, away_score: 1 },
        { home: "Nagoya", away: "Vissel Kobe", home_score: 0, away_score: 3 },
        { home: "Mito", away: "FC Tokyo", home_score: 1, away_score: 1 },
        { home: "Kashima Antlers", away: "Kawasaki", home_score: 1, away_score: 0 },
        { home: "Nagasaki", away: "Avispa", home_score: 1, away_score: 0 },
        { home: "Cerezo Osaka", away: "Okayama", home_score: 1, away_score: 2 },
        { home: "Vissel Kobe", away: "Gamba Osaka", home_score: 2, away_score: 2 },
        { home: "Mito", away: "Yokohama FM", home_score: 1, away_score: 0 },
        { home: "Avispa", away: "Shimizu", home_score: 1, away_score: 1 },
        { home: "Nagoya", away: "Sanfreece", home_score: 2, away_score: 1 },
        { home: "JEF", away: "FC Tokyo", home_score: 1, away_score: 2 },
        { home: "Nagasaki", away: "Kyoto", home_score: 1, away_score: 2 },
        { home: "Tokyo Verdy", away: "Kawasaki", home_score: 0, away_score: 2 },
        { home: "Machida", away: "Kashima Antlers", home_score: 0, away_score: 3 },
        { home: "Urawa Reds", away: "Kashiwa", home_score: 1, away_score: 1 },
        { home: "Okayama", away: "Nagasaki", home_score: 0, away_score: 1 },
        { home: "Avispa", away: "Gamba Osaka", home_score: 2, away_score: 2 },
        { home: "Shimizu", away: "Sanfreece", home_score: 3, away_score: 1 },
        { home: "Kyoto", away: "Nagoya", home_score: 1, away_score: 1 },
        { home: "Tokyo Verdy", away: "FC Tokyo", home_score: 0, away_score: 0 },
        { home: "Cerezo Osaka", away: "Vissel Kobe", home_score: 1, away_score: 1 },
        { home: "Kashima Antlers", away: "JEF", home_score: 2, away_score: 1 },
        { home: "Kawasaki", away: "Yokohama FM", home_score: 0, away_score: 5 },
        { home: "Kashiwa", away: "Mito", home_score: 3, away_score: 0 },
        { home: "Urawa Reds", away: "Machida", home_score: 1, away_score: 2 },
        { home: "Vissel Kobe", away: "Sanfreece", home_score: 2, away_score: 1 },
        { home: "Machida", away: "Kawasaki", home_score: 1, away_score: 1 },
        { home: "Machida", away: "FC Tokyo", home_score: 2, away_score: 0 },
        { home: "Vissel Kobe", away: "Shimizu", home_score: 2, away_score: 0 },
        { home: "JEF", away: "Tokyo Verdy", home_score: 3, away_score: 2 },
        { home: "Mito", away: "Kashima Antlers", home_score: 1, away_score: 1 },
        { home: "Nagoya", away: "Cerezo Osaka", home_score: 3, away_score: 0 },
        { home: "Gamba Osaka", away: "Kyoto", home_score: 2, away_score: 0 },
        { home: "Nagasaki", away: "Shimizu", home_score: 0, away_score: 3 },
        { home: "Okayama", away: "Vissel Kobe", home_score: 1, away_score: 4 },
        { home: "Kashiwa", away: "Yokohama FM", home_score: 3, away_score: 0 },
        { home: "Kawasaki", away: "Urawa Reds", home_score: 3, away_score: 2 }
    ],
    "Chilean Primera División": [
        { home: "Palestino", away: "La Serena", home_score: 5, away_score: 1 },
        { home: "Coquimbo", away: "Audax Italiano", home_score: 3, away_score: 0 },
        { home: "O'Higgins", away: "Universidad de Concepción", home_score: 0, away_score: 1 },
        { home: "Deportes Limache", away: "Universidad Católica", home_score: 0, away_score: 2 },
        { home: "Huachipato", away: "Unión La Calera", home_score: 3, away_score: 1 },
        { home: "Cobresal", away: "Universidad de Chile", home_score: 1, away_score: 0 },
        { home: "Colo-Colo", away: "Ñublense", home_score: 6, away_score: 2 },
        { home: "Concepción", away: "Everton", home_score: 0, away_score: 2 },
        { home: "Everton", away: "Coquimbo", home_score: 1, away_score: 1 },
        { home: "Audax Italiano", away: "Cobresal", home_score: 2, away_score: 1 },
        { home: "Ñublense", away: "Universidad de Concepción", home_score: 2, away_score: 2 },
        { home: "Unión La Calera", away: "Palestino", home_score: 1, away_score: 2 },
        { home: "Concepción", away: "Huachipato", home_score: 2, away_score: 0 },
        { home: "La Serena", away: "Deportes Limache", home_score: 4, away_score: 1 },
        { home: "Universidad Católica", away: "Colo-Colo", home_score: 1, away_score: 2 },
        { home: "Cobresal", away: "Ñublense", home_score: 0, away_score: 1 },
        { home: "Universidad de Concepción", away: "Unión La Calera", home_score: 0, away_score: 0 },
        { home: "La Serena", away: "Colo-Colo", home_score: 2, away_score: 4 },
		{ home: "Deportes Limache", away: "Coquimbo", home_score: 2, away_score: 3 }
    ],
    
	
	"Chinese Super League": [
    // Matchday 10
    { home: "Qingdao Youth Island", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
    { home: "Shandong Taishan", away: "Shanghai Shenhua", home_score: 4, away_score: 1 },
    { home: "Shenyang Urban", away: "Chengdu Rongcheng", home_score: 0, away_score: 1 },
    { home: "Chongqing Tonglianglong", away: "Henan", home_score: 1, away_score: 1 },
    { home: "Wuhan Three Towns", away: "Qingdao Hainiu", home_score: 1, away_score: 3 },
    { home: "Beijing Guoan", away: "Dalian Yingbo", home_score: 3, away_score: 0 },
    { home: "Shanghai Port", away: "Shenzhen Peng City", home_score: 1, away_score: 1 },
    { home: "Yunnan Yukun", away: "Zhejiang", home_score: 1, away_score: 2 },
    
    // Matchday 11
    { home: "Shanghai Shenhua", away: "Chongqing Tonglianglong", home_score: 2, away_score: 2 },
    { home: "Chengdu Rongcheng", away: "Henan", home_score: 3, away_score: 0 },
    { home: "Qingdao Youth Island", away: "Wuhan Three Towns", home_score: 1, away_score: 1 },
    { home: "Shenzhen Peng City", away: "Shandong Taishan", home_score: 1, away_score: 2 },
    { home: "Shenyang Urban", away: "Yunnan Yukun", home_score: 1, away_score: 2 },
    { home: "Zhejiang", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
    { home: "Beijing Guoan", away: "Shanghai Port", home_score: 2, away_score: 2 },
    { home: "Qingdao Hainiu", away: "Dalian Yingbo", home_score: 3, away_score: 1 },
    
    // Matchday 12
    { home: "Henan", away: "Shenzhen Peng City", home_score: 1, away_score: 0 },
    { home: "Tianjin Jinmen Tiger", away: "Chengdu Rongcheng", home_score: 1, away_score: 2 },
    { home: "Shanghai Port", away: "Zhejiang", home_score: 2, away_score: 2 },
    { home: "Dalian Yingbo", away: "Qingdao Youth Island", home_score: 2, away_score: 3 },
    { home: "Beijing Guoan", away: "Qingdao Hainiu", home_score: 4, away_score: 2 },
    { home: "Wuhan Three Towns", away: "Shenyang Urban", home_score: 2, away_score: 2 },
    { home: "Shandong Taishan", away: "Chongqing Tonglianglong", home_score: 3, away_score: 1 },
    { home: "Yunnan Yukun", away: "Shanghai Shenhua", home_score: 1, away_score: 0 },
    
    // Matchday 13
    { home: "Tianjin Jinmen Tiger", away: "Henan", home_score: 1, away_score: 2 },
    { home: "Shenzhen Peng City", away: "Dalian Yingbo", home_score: 1, away_score: 1 },
    { home: "Qingdao Youth Island", away: "Beijing Guoan", home_score: 1, away_score: 1 },
    { home: "Chengdu Rongcheng", away: "Shanghai Port", home_score: 0, away_score: 1 },
    { home: "Shenyang Urban", away: "Qingdao Hainiu", home_score: 2, away_score: 1 },
    { home: "Shanghai Shenhua", away: "Wuhan Three Towns", home_score: 2, away_score: 2 },
    { home: "Chongqing Tonglianglong", away: "Yunnan Yukun", home_score: 0, away_score: 0 },
    { home: "Zhejiang", away: "Shandong Taishan", home_score: 4, away_score: 1 },
    
    // Matchday 14
    { home: "Shanghai Port", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
    { home: "Beijing Guoan", away: "Henan", home_score: 1, away_score: 2 },
    { home: "Dalian Yingbo", away: "Chengdu Rongcheng", home_score: 2, away_score: 0 },
    { home: "Qingdao Hainiu", away: "Chongqing Tonglianglong", home_score: 0, away_score: 1 },
    { home: "Yunnan Yukun", away: "Qingdao Youth Island", home_score: 2, away_score: 3 },
    { home: "Shandong Taishan", away: "Wuhan Three Towns", home_score: 3, away_score: 3 },
    { home: "Zhejiang", away: "Shenyang Urban", home_score: 0, away_score: 5 },
    { home: "Shanghai Shenhua", away: "Shenzhen Peng City", home_score: 1, away_score: 2 },
    
    // Matchday 15
    { home: "Shenyang Urban", away: "Shanghai Port", home_score: 3, away_score: 2 },
    { home: "Qingdao Youth Island", away: "Shanghai Shenhua", home_score: 2, away_score: 2 },
    { home: "Henan", away: "Zhejiang", home_score: 0, away_score: 2 },
    { home: "Chengdu Rongcheng", away: "Shandong Taishan", home_score: 1, away_score: 0 },
    { home: "Chongqing Tonglianglong", away: "Beijing Guoan", home_score: 2, away_score: 3 },
    { home: "Shenzhen Peng City", away: "Qingdao Hainiu", home_score: 3, away_score: 2 },
    
    // Matchday 16
    { home: "Tianjin Jinmen Tiger", away: "Dalian Yingbo", home_score: 1, away_score: 0 },
    { home: "Wuhan Three Towns", away: "Yunnan Yukun", home_score: 1, away_score: 1 }
]
	
};

console.log("✅ Matches data loaded from data.js");
console.log("✅ Data loaded successfully!", Object.keys(leaguesData).length, "leagues");