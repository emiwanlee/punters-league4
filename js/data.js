// ==================== DATA.JS - COMPLETE REFACTORED ====================
// All league data with normalized team names for consistency

// ==================== TEAM NAME MAPPING ====================

const TEAM_NAME_MAPPING = {
    // === English Premier League ===
    "Manchester City": "Man City",
    "Manchester United": "Man United",
    "Nottingham Forest": "Nottm Forest",
    "Crystal Palace": "Palace",
    "Tottenham Hotspur": "Spurs",
    "Newcastle United": "Newcastle",
    "Brighton & Hove Albion": "Brighton",
    "West Ham United": "West Ham",
    "Wolverhampton Wanderers": "Wolves",
    "Ipswich Town": "Ipswich",
    "Leicester City": "Leicester",
    "Southampton": "Southampton",
    "AFC Bournemouth": "Bournemouth",
    "Brentford": "Brentford",
    "Fulham": "Fulham",
    "Everton": "Everton",
    "Leeds United": "Leeds",
    "Sunderland": "Sunderland",
    "Aston Villa": "Aston Villa",
    "Chelsea": "Chelsea",
    "Liverpool": "Liverpool",
    "Arsenal": "Arsenal",

    // === Argentina Liga Profesional ===
    "Estudiantes de La Plata": "Estudiantes",
    "Boca Juniors": "Boca",
    "Vélez Sarsfield": "Vélez Sársfield",
    "Talleres de Córdoba": "Talleres",
    "Independiente": "Independiente",
    "Lanús": "Lanús",
    "San Lorenzo": "San Lorenzo",
    "Unión de Santa Fe": "Unión",
    "Instituto": "Instituto",
    "Defensa y Justicia": "Defensa y Justicia",
    "Gimnasia y Esgrima (Mendoza)": "Gimnasia y Esgirma",
    "Platense": "Platense",
    "Central Córdoba (SdE)": "Central Córdoba",
    "Newell's Old Boys": "Newell's",
    "Deportivo Riestra": "Deportivo Riestra",
    "Independiente Rivadavia": "Independiente Rivadavia",
    "River Plate": "River Plate",
    "Argentinos Juniors": "Argentinos Juniors",
    "Rosario Central": "Central",
    "Belgrano": "Belgrano",
    "Gimnasia La Plata": "Gimnasia LP",
    "Huracán": "Huracán",
    "Racing Club": "Racing Club",
    "Barracas Central": "Barracas Central",
    "Tigre": "Tigre",
    "Sarmiento (Junín)": "Sarmiento",
    "Banfield": "Banfield",
    "Atlético Tucumán": "Atlético Tucumán",
    "Aldosivi": "Aldosivi",
    "Estudiantes de Río Cuarto": "Estudiantes de Río Cuarto",
    "Central Córdoba": "Central Córdoba",
    "Gimnasia Mendoza": "Gimnasia y Esgirma",

    // === Brazil Serie A ===
    "Athletico Paranaense": "Athletico-PR",
    "Atlético Mineiro": "Atlético Mineiro",
    "Red Bull Bragantino": "Bragantino",
    "Fortaleza": "Fortaleza",
    "Chapecoense": "Chapecoense",
    "Internacional": "Internacional",
    "Coritiba": "Coritiba",
    "Mirassol": "Mirassol",
    "Remo": "Remo",
    "Vasco da Gama": "Vasco",

    // === Germany Bundesliga ===
    "Hamburger SV": "Hamburg",
    "Borussia Mönchengladbach": "Mönchengladbach",
    "1. FC Köln": "Köln",
    "Eintracht Frankfurt": "Frankfurt",
    "FC Bayern München": "Bayern",
    "Borussia Dortmund": "Dortmund",
    "RB Leipzig": "RB Leipzig",
    "VfB Stuttgart": "Stuttgart",
    "TSG Hoffenheim": "Hoffenheim",
    "Bayer Leverkusen": "Leverkusen",
    "SC Freiburg": "Freiburg",
    "FC Augsburg": "Augsburg",
    "1. FSV Mainz 05": "Mainz",
    "Union Berlin": "Union Berlin",
    "SV Werder Bremen": "Werder",
    "VfL Wolfsburg": "Wolfsburg",
    "1. FC Heidenheim": "Heidenheim",
    "FC St. Pauli": "St. Pauli",

    // === Japan J1 League ===
    "JEF United Chiba": "JEF",
    "Kashima Antlers": "Kashima Antlers",
    "FC Tokyo": "FC Tokyo",
    "Tokyo Verdy": "Tokyo Verdy",
    "Vissel Kobe": "Vissel Kobe",
    "Yokohama F. Marinos": "Yokohama FM",
    "Nagoya Grampus": "Nagoya",
    "Cerezo Osaka": "Cerezo Osaka",
    "Gamba Osaka": "Gamba Osaka",
    "Sanfrecce Hiroshima": "Sanfrecce",
    "Shimizu S-Pulse": "Shimizu",
    "Kyoto Sanga": "Kyoto",
    "Avispa Fukuoka": "Avispa",
    "Fagiano Okayama": "Okayama",
    "V-Varen Nagasaki": "Nagasaki",
    "Kashiwa Reysol": "Kashiwa",
    "Urawa Red Diamonds": "Urawa Reds",
    "Kawasaki Frontale": "Kawasaki",
    "Mito HollyHock": "Mito",
    "Machida Zelvia": "Machida",
    "Albirex Niigata": "Niigata",

    // === Netherlands Eredivisie ===
    "PSV Eindhoven": "PSV",
    "Feyenoord": "Feyenoord",
    "NEC Nijmegen": "NEC",
    "FC Twente": "Twente",
    "Ajax": "Ajax",
    "FC Utrecht": "Utrecht",
    "AZ Alkmaar": "AZ",
    "SC Heerenveen": "Heerenveen",
    "FC Groningen": "Groningen",
    "Sparta Rotterdam": "Sparta Rotterdam",
    "Fortuna Sittard": "Fortuna Sittard",
    "Go Ahead Eagles": "Go Ahead Eagles",
    "Excelsior": "Excelsior",
    "Telstar": "Telstar",
    "PEC Zwolle": "PEC Zwolle",
    "FC Volendam": "Volendam",
    "NAC Breda": "NAC",
    "Heracles Almelo": "Heracles",
    "SC Cambuur": "Cambuur",
    "ADO Den Haag": "Den Haag",
    "Willem II": "Willem II",
    "FC Dordrecht": "Dordrecht",
    "FC Emmen": "Emmen",
    "Vitesse": "Vitesse",

    // === Portugal Primeira Liga ===
    "FC Porto": "Porto",
    "Sporting CP": "SCP",
    "Benfica": "Benfica",
    "SC Braga": "Braga",
    "Famalicão": "Famalicão",
    "Gil Vicente": "Gil Vicente",
    "Moreirense": "Moreirense",
    "Arouca": "Arouca",
    "Vitória SC": "Vitória SC",
    "Estoril": "Estoril",
    "Rio Ave": "Rio Ave",
    "Santa Clara": "Santa Clara",
    "Nacional": "Nacional",
    "Estrela Amadora": "Estrela Amadora",
    "Casa Pia": "Casa Pia",
    "Tondela": "Tondela",
    "AVS": "AVS",

    // === Belgium Pro League ===
    "Union Saint-Gilloise": "Union",
    "Club Brugge": "Club Brugge",
    "Sint-Truiden": "STVV",
    "KAA Gent": "Gent",
    "KV Mechelen": "Mechelen",
    "RSC Anderlecht": "Anderlecht",
    "KRC Genk": "Genk",
    "Standard Liège": "Standard",
    "KVC Westerlo": "Westerlo",
    "Royal Antwerp": "Antwerp",
    "Charleroi": "Charleroi",
    "OH Leuven": "OH Leuven",
    "Zulte Waregem": "Zulte Waregem",
    "Cercle Brugge": "Cercle Brugge",
    "La Louvière": "La Louvière",
    "Dender": "Dender",

    // === France Ligue 1 ===
    "Paris Saint-Germain": "PSG",
    "RC Lens": "Lens",
    "LOSC Lille": "LOSC",
    "Olympique Lyonnais": "OL",
    "Olympique Marseille": "Marseille",
    "Stade Rennais": "Rennes",
    "AS Monaco": "Monaco",
    "RC Strasbourg": "Strasbourg",
    "Toulouse": "Toulouse",
    "FC Lorient": "Lorient",
    "Paris FC": "Paris FC",
    "Stade Brestois": "Brest",
    "Angers SCO": "Angers",
    "Le Havre": "Le Havre",
    "Auxerre": "Auxerre",
    "OGC Nice": "Nice",
    "FC Nantes": "Nantes",
    "FC Metz": "Metz",

    // === Italy Serie A ===
    "Inter Milan": "Inter",
    "Napoli": "Napoli",
    "AS Roma": "Roma",
    "Como": "Como",
    "AC Milan": "Milan",
    "Juventus": "Juventus",
    "Atalanta": "Atalanta",
    "Bologna": "Bologna",
    "Lazio": "Lazio",
    "Udinese": "Udinese",
    "Sassuolo": "Sassuolo",
    "Torino": "Torino",
    "Parma": "Parma",
    "Cagliari": "Cagliari",
    "Fiorentina": "Fiorentina",
    "Genoa": "Genoa",
    "Lecce": "Lecce",
    "Cremonese": "Cremonese",
    "Verona": "Verona",
    "Pisa": "Pisa",

    // === Chile Primera A ===
    "Colo-Colo": "Colo Colo",
    "Universidad de Chile": "U. De Chile",
    "Palestino": "Palestino",
    "Ñublense": "Nublense",
    "Universidad Católica": "U. Catolica",
    "Deportes Limache": "Limache",
    "Everton": "Everton",
    "Deportes Concepción": "D. Concepcion",
    "Coquimbo Unido": "Coquimbo",
    "La Serena": "La Serena",
    "O'Higgins": "O'Higgins",
    "Huachipato": "Huachipato",
    "Audax Italiano": "A. Italiano",
    "Universidad de Concepción": "U. De Concepcion",
    "Cobresal": "Cobresal",
    "Unión La Calera": "Union La Calera",

    // === WNBA ===
    "Indiana Fever": "Indiana Fever",
    "Atlanta Dream": "Atlanta Dream",
    "New York Liberty": "New York Liberty",
    "Washington Mystics": "Washington Mystics",
    "Chicago Sky": "Chicago Sky",
    "Portland Fire": "Portland Fire",
    "Toronto Tempo": "Toronto Tempo",
    "Connecticut Sun": "Connecticut Sun",
    "Minnesota Lynx": "Minnesota Lynx",
    "Las Vegas Aces": "Las Vegas Aces",
    "Golden State Valkyries": "Golden State Valkyries",
    "Dallas Wings": "Dallas Wings",
    "Los Angeles Sparks": "Los Angeles Sparks",
    "Phoenix Mercury": "Phoenix Mercury",
    "Seattle Storm": "Seattle Storm"
};

// ==================== TEAM NAME NORMALIZATION ====================

function normalizeTeamName(name) {
    if (!name) return name;
    
    // Trim whitespace
    let clean = name.trim();
    
    // Check if exact mapping exists
    if (TEAM_NAME_MAPPING[clean]) {
        return TEAM_NAME_MAPPING[clean];
    }
    
    // Common patterns to clean
    const patterns = [
        { find: / FC$/g, replace: '' },
        { find: / F\.C\.$/g, replace: '' },
        { find: / SC$/g, replace: '' },
        { find: / S\.C\.$/g, replace: '' },
        { find: / United$/g, replace: 'Utd' },
        { find: / Utd$/g, replace: '' },
        { find: / Athletic$/g, replace: '' },
        { find: / \(C\)$/g, replace: '' },
        { find: / \(A\)$/g, replace: '' },
        { find: / Atlético/g, replace: 'Atl.' },
        { find: / Deportivo/g, replace: 'Dep.' },
        { find: / Universitario/g, replace: 'Univ.' },
        { find: / Independiente/g, replace: 'Ind.' },
        { find: / Deportes/g, replace: 'Dep.' }
    ];
    
    patterns.forEach(p => {
        clean = clean.replace(p.find, p.replace);
    });
    
    // Trim again
    clean = clean.trim();
    
    return clean;
}

// ==================== NORMALIZE ALL TEAMS IN LEAGUES DATA ====================

function normalizeLeaguesData() {
    for (const [leagueName, league] of Object.entries(leaguesData)) {
        if (league.teams) {
            league.teams = league.teams.map(team => ({
                ...team,
                team: normalizeTeamName(team.team)
            }));
        }
        if (league.fixtures) {
            league.fixtures = league.fixtures.map(fixture => ({
                ...fixture,
                home: normalizeTeamName(fixture.home),
                away: normalizeTeamName(fixture.away)
            }));
        }
    }
}

// ==================== COMPLETE LEAGUES DATA ====================

const leaguesData = {

    // ============================================================
    //  ARGENTINA
    // ============================================================

    "Argentine Liga Professional": {
        id: "argentine-liga-professional",
        logo: "argentina/ligaprofessional.png",
        isBasketball: false,
        season: "2026",
        teams: [
            { rank: 1, team: "Estudiantes", MP: 16, MW: 9, MD: 4, ML: 3, GF: 19, GA: 7, logo: "argentina/estudiantes.png" },
            { rank: 2, team: "Boca", MP: 16, MW: 8, MD: 6, ML: 2, GF: 22, GA: 9, logo: "argentina/boca.png" },
            { rank: 3, team: "Vélez Sársfield", MP: 16, MW: 7, MD: 7, ML: 2, GF: 18, GA: 12, logo: "argentina/velez.png" },
            { rank: 4, team: "Talleres", MP: 16, MW: 7, MD: 5, ML: 4, GF: 17, GA: 13, logo: "argentina/talleres.png" },
            { rank: 5, team: "Independiente", MP: 16, MW: 6, MD: 6, ML: 4, GF: 24, GA: 20, logo: "argentina/independiente.png" },
            { rank: 6, team: "Lanús", MP: 16, MW: 6, MD: 6, ML: 4, GF: 18, GA: 15, logo: "argentina/lanus.png" },
            { rank: 7, team: "San Lorenzo", MP: 16, MW: 5, MD: 7, ML: 4, GF: 14, GA: 14, logo: "argentina/sanlorenzo.png" },
            { rank: 8, team: "Unión", MP: 16, MW: 5, MD: 6, ML: 5, GF: 24, GA: 20, logo: "argentina/union.png" },
            { rank: 9, team: "Instituto", MP: 16, MW: 6, MD: 3, ML: 7, GF: 17, GA: 17, logo: "argentina/instituto.png" },
            { rank: 10, team: "Defensa y Justicia", MP: 16, MW: 4, MD: 7, ML: 5, GF: 18, GA: 21, logo: "argentina/defensayjusticia.png" },
            { rank: 11, team: "Gimnasia y Esgirma", MP: 16, MW: 5, MD: 4, ML: 7, GF: 14, GA: 22, logo: "argentina/gimnasiaesgirma.png" },
            { rank: 12, team: "Platense", MP: 16, MW: 3, MD: 7, ML: 6, GF: 10, GA: 15, logo: "argentina/platense.png" },
            { rank: 13, team: "Central Córdoba", MP: 16, MW: 4, MD: 4, ML: 8, GF: 11, GA: 21, logo: "argentina/centralcordoba.png" },
            { rank: 14, team: "Newell's", MP: 16, MW: 3, MD: 6, ML: 7, GF: 15, GA: 27, logo: "argentina/newells.png" },
            { rank: 15, team: "Deportivo Riestra", MP: 16, MW: 1, MD: 8, ML: 7, GF: 5, GA: 12, logo: "argentina/deportivoriestra.png" },
            { rank: 16, team: "Independiente Rivadavia", MP: 16, MW: 10, MD: 4, ML: 2, GF: 29, GA: 15, logo: "argentina/independienterivadavia.png" },
            { rank: 17, team: "River Plate", MP: 16, MW: 9, MD: 2, ML: 5, GF: 22, GA: 12, logo: "argentina/riverplate.png" },
            { rank: 18, team: "Argentinos Juniors", MP: 16, MW: 8, MD: 5, ML: 3, GF: 17, GA: 13, logo: "argentina/argentinosjuniors.png" },
            { rank: 19, team: "Central", MP: 16, MW: 8, MD: 4, ML: 4, GF: 20, GA: 16, logo: "argentina/central.png" },
            { rank: 20, team: "Belgrano", MP: 16, MW: 7, MD: 5, ML: 4, GF: 17, GA: 13, logo: "argentina/belgrano.png" },
            { rank: 21, team: "Gimnasia LP", MP: 16, MW: 8, MD: 2, ML: 6, GF: 19, GA: 19, logo: "argentina/gimnasialp.png" },
            { rank: 22, team: "Huracán", MP: 16, MW: 5, MD: 7, ML: 4, GF: 17, GA: 13, logo: "argentina/huracan.png" },
            { rank: 23, team: "Racing Club", MP: 16, MW: 5, MD: 6, ML: 5, GF: 17, GA: 15, logo: "argentina/racingclub.png" },
            { rank: 24, team: "Barracas Central", MP: 16, MW: 5, MD: 6, ML: 5, GF: 15, GA: 15, logo: "argentina/barracascentral.png" },
            { rank: 25, team: "Tigre", MP: 16, MW: 4, MD: 8, ML: 4, GF: 18, GA: 15, logo: "argentina/tigre.png" },
            { rank: 26, team: "Sarmiento", MP: 16, MW: 6, MD: 1, ML: 9, GF: 13, GA: 20, logo: "argentina/sarmiento.png" },
            { rank: 27, team: "Banfield", MP: 16, MW: 5, MD: 3, ML: 8, GF: 17, GA: 19, logo: "argentina/banfield.png" },
            { rank: 28, team: "Atlético Tucumán", MP: 16, MW: 3, MD: 5, ML: 8, GF: 15, GA: 20, logo: "argentina/atleticotucuman.png" },
            { rank: 29, team: "Aldosivi", MP: 16, MW: 0, MD: 8, ML: 8, GF: 6, GA: 19, logo: "argentina/aldosivi.png" },
            { rank: 30, team: "Estudiantes de Río Cuarto", MP: 16, MW: 1, MD: 2, ML: 13, GF: 5, GA: 24, logo: "argentina/estudiantesriocuarto.png" }
        ],
        fixtures: [
            { home: "Independiente Rivadavia", away: "Racing Club", date: "2026-08-31" },
            { home: "Estudiantes", away: "Newell's", date: "2026-08-31" },
            { home: "Defensa y Justicia", away: "Platense", date: "2026-08-31" },
            { home: "Instituto", away: "San Lorenzo", date: "2026-09-01" },
            { home: "Tigre", away: "Barracas Central", date: "2026-09-01" }
        ]
    },

    "Argentina Primera B Metropolitana": {
        id: "argentina-primera-b-metropolitana",
        logo: "argentina/primera b metropolitana.png",
        isBasketball: false,
        season: "2026",
        teams: [
            { rank: 1, team: "Excursionistas", MP: 33, MW: 18, MD: 8, ML: 7, GF: 49, GA: 27, logo: "argentina/excursionistas.png" },
            { rank: 2, team: "Arsenal Sarandi", MP: 33, MW: 16, MD: 12, ML: 5, GF: 44, GA: 22, logo: "argentina/arsenalsarandi.png" },
            { rank: 3, team: "Deportivo Camioneros", MP: 33, MW: 16, MD: 12, ML: 5, GF: 39, GA: 20, logo: "argentina/deportivocamioneros.png" },
            { rank: 4, team: "Talleres Remedios", MP: 33, MW: 17, MD: 9, ML: 7, GF: 35, GA: 17, logo: "argentina/talleresremedios.png" },
            { rank: 5, team: "Dálmine", MP: 32, MW: 16, MD: 11, ML: 5, GF: 35, GA: 16, logo: "argentina/dalmine.png" },
            { rank: 6, team: "Sportivo Italiano", MP: 33, MW: 15, MD: 10, ML: 8, GF: 38, GA: 25, logo: "argentina/sportivoitaliano.png" },
            { rank: 7, team: "Real Pilar", MP: 33, MW: 14, MD: 10, ML: 9, GF: 37, GA: 32, logo: "argentina/realpilar.png" },
            { rank: 8, team: "Laferrere", MP: 33, MW: 12, MD: 10, ML: 11, GF: 39, GA: 42, logo: "argentina/laferrere.png" },
            { rank: 9, team: "Dep. Armenio", MP: 32, MW: 12, MD: 8, ML: 12, GF: 34, GA: 37, logo: "argentina/deparmenio.png" },
            { rank: 10, team: "Dock Sud", MP: 33, MW: 10, MD: 13, ML: 10, GF: 38, GA: 34, logo: "argentina/docksud.png" },
            { rank: 11, team: "Comunicaciones", MP: 32, MW: 11, MD: 10, ML: 11, GF: 32, GA: 31, logo: "argentina/comunicaciones.png" },
            { rank: 12, team: "Argentino de Merlo", MP: 32, MW: 10, MD: 10, ML: 12, GF: 30, GA: 32, logo: "argentina/argentinomerlo.png" },
            { rank: 13, team: "San Martín Burzaco", MP: 32, MW: 9, MD: 13, ML: 10, GF: 31, GA: 34, logo: "argentina/sanmartinburzaco.png" },
            { rank: 14, team: "Deportivo Merlo", MP: 32, MW: 9, MD: 12, ML: 11, GF: 34, GA: 47, logo: "argentina/deportivomerlo.png" },
            { rank: 15, team: "Villa San Carlos", MP: 32, MW: 9, MD: 11, ML: 12, GF: 34, GA: 37, logo: "argentina/villasantacarlos.png" },
            { rank: 16, team: "Argentino Quilmes", MP: 33, MW: 8, MD: 13, ML: 12, GF: 28, GA: 35, logo: "argentina/argentin quilmes.png" },
            { rank: 17, team: "Liniers", MP: 33, MW: 8, MD: 12, ML: 13, GF: 25, GA: 33, logo: "argentina/liniers.png" },
            { rank: 18, team: "Defensores Unidos", MP: 33, MW: 7, MD: 12, ML: 14, GF: 28, GA: 36, logo: "argentina/defensoresunidos.png" },
            { rank: 19, team: "Brown (A)", MP: 33, MW: 7, MD: 12, ML: 14, GF: 21, GA: 35, logo: "argentina/browna.png" },
            { rank: 20, team: "Flandria", MP: 32, MW: 8, MD: 8, ML: 16, GF: 26, GA: 39, logo: "argentina/flandria.png" },
            { rank: 21, team: "UAI Urquiza", MP: 33, MW: 3, MD: 19, ML: 11, GF: 15, GA: 29, logo: "argentina/uaiurquiza.png" },
            { rank: 22, team: "Ituzaingó", MP: 33, MW: 1, MD: 11, ML: 21, GF: 19, GA: 51, logo: "argentina/ituzaingo.png" }
        ],
        fixtures: [
            { home: "Comunicaciones", away: "Deportivo Merlo", date: "2026-08-31" },
            { home: "Real Pilar", away: "Talleres Remedios", date: "2026-09-05" },
            { home: "Villa San Carlos", away: "Brown (A)", date: "2026-09-05" },
            { home: "Deportivo Camioneros", away: "Argentino Quilmes", date: "2026-09-05" },
            { home: "San Martín Burzaco", away: "Dep. Armenio", date: "2026-09-05" },
            { home: "Dálmine", away: "Arsenal Sarandi", date: "2026-09-05" },
            { home: "Deportivo Merlo", away: "Defensores Unidos", date: "2026-09-05" }
        ]
    },

    // ============================================================
    //  BRAZIL
    // ============================================================

   "Brazil Serie A": {
    "id": "brazil-serie-a",
    "logo": "brazil/seriea.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Palmeiras", "MP": 25, "MW": 15, "MD": 7, "ML": 3, "GF": 45, "GA": 21, "logo": "brazil/palmeiras.png" },
      { "rank": 2, "team": "Flamengo", "MP": 24, "MW": 14, "MD": 6, "ML": 4, "GF": 48, "GA": 21, "logo": "brazil/flamengo.png" },
      { "rank": 3, "team": "Athletico-PR", "MP": 25, "MW": 13, "MD": 6, "ML": 6, "GF": 37, "GA": 25, "logo": "brazil/athleticopr.png" },
      { "rank": 4, "team": "Fluminense", "MP": 25, "MW": 11, "MD": 9, "ML": 5, "GF": 39, "GA": 32, "logo": "brazil/fluminense.png" },
      { "rank": 5, "team": "Bahia", "MP": 25, "MW": 10, "MD": 10, "ML": 5, "GF": 37, "GA": 30, "logo": "brazil/bahia.png" },
      { "rank": 6, "team": "Cruzeiro", "MP": 25, "MW": 11, "MD": 6, "ML": 8, "GF": 35, "GA": 36, "logo": "brazil/cruzeiro.png" },
      { "rank": 7, "team": "Atlético Mineiro", "MP": 24, "MW": 10, "MD": 6, "ML": 8, "GF": 32, "GA": 28, "logo": "brazil/atleticomineiro.png" },
      { "rank": 8, "team": "Bragantino", "MP": 24, "MW": 10, "MD": 5, "ML": 9, "GF": 29, "GA": 25, "logo": "brazil/bragantino.png" },
      { "rank": 9, "team": "Coritiba", "MP": 24, "MW": 9, "MD": 7, "ML": 8, "GF": 30, "GA": 31, "logo": "brazil/coritiba.png" },
      { "rank": 10, "team": "Corinthians", "MP": 25, "MW": 8, "MD": 8, "ML": 9, "GF": 26, "GA": 25, "logo": "brazil/corinthians.png" },
      { "rank": 11, "team": "São Paulo", "MP": 24, "MW": 8, "MD": 6, "ML": 10, "GF": 29, "GA": 28, "logo": "brazil/saopaulo.png" },
      { "rank": 12, "team": "Botafogo", "MP": 24, "MW": 8, "MD": 6, "ML": 10, "GF": 37, "GA": 40, "logo": "brazil/botafogo.png" },
      { "rank": 13, "team": "Vitória", "MP": 25, "MW": 8, "MD": 5, "ML": 12, "GF": 24, "GA": 37, "logo": "brazil/vitoria.png" },
      { "rank": 14, "team": "Santos", "MP": 24, "MW": 7, "MD": 8, "ML": 9, "GF": 34, "GA": 36, "logo": "brazil/santos.png" },
      { "rank": 15, "team": "Grêmio", "MP": 24, "MW": 7, "MD": 7, "ML": 10, "GF": 27, "GA": 32, "logo": "brazil/gremio.png" },
      { "rank": 16, "team": "Mirassol", "MP": 24, "MW": 6, "MD": 7, "ML": 11, "GF": 27, "GA": 37, "logo": "brazil/mirassol.png" },
      { "rank": 17, "team": "Vasco", "MP": 24, "MW": 6, "MD": 7, "ML": 11, "GF": 27, "GA": 39, "logo": "brazil/vasco.png" },
      { "rank": 18, "team": "Internacional", "MP": 25, "MW": 5, "MD": 10, "ML": 10, "GF": 26, "GA": 31, "logo": "brazil/internacional.png" },
      { "rank": 19, "team": "Remo", "MP": 24, "MW": 5, "MD": 8, "ML": 11, "GF": 28, "GA": 39, "logo": "brazil/remo.png" },
      { "rank": 20, "team": "Chapecoense", "MP": 24, "MW": 2, "MD": 8, "ML": 14, "GF": 25, "GA": 49, "logo": "brazil/chapecoense.png" }
    ],
    "fixtures": [
      { "home": "Remo", "away": "Coritiba", "date": "2026-08-31" },
      { "home": "Flamengo", "away": "Mirassol", "date": "2026-09-02" },
      { "home": "Bragantino", "away": "Bahia", "date": "2026-09-05" },
      { "home": "São Paulo", "away": "Atlético Mineiro", "date": "2026-09-05" },
      { "home": "Fluminense", "away": "Vasco", "date": "2026-09-06" },
      { "home": "Coritiba", "away": "Mirassol", "date": "2026-09-06" },
      { "home": "Cruzeiro", "away": "Athletico-PR", "date": "2026-09-06" },
      { "home": "Remo", "away": "Flamengo", "date": "2026-09-06" },
      { "home": "Internacional", "away": "Santos", "date": "2026-09-06" },
      { "home": "Botafogo", "away": "Palmeiras", "date": "2026-09-06" },
      { "home": "Corinthians", "away": "Chapecoense", "date": "2026-09-06" },
      { "home": "Vitória", "away": "Grêmio", "date": "2026-09-08" },
      { "home": "Atlético Mineiro", "away": "Fluminense", "date": "2026-09-13" },
      { "home": "Palmeiras", "away": "São Paulo", "date": "2026-09-13" },
      { "home": "Mirassol", "away": "Vitória", "date": "2026-09-13" },
      { "home": "Coritiba", "away": "Athletico-PR", "date": "2026-09-13" },
      { "home": "Chapecoense", "away": "Internacional", "date": "2026-09-13" },
      { "home": "Santos", "away": "Cruzeiro", "date": "2026-09-13" },
      { "home": "Bahia", "away": "Remo", "date": "2026-09-13" },
      { "home": "Botafogo", "away": "Bragantino", "date": "2026-09-13" },
      { "home": "Flamengo", "away": "Corinthians", "date": "2026-09-13" },
      { "home": "Grêmio", "away": "Vasco", "date": "2026-09-13" }
    ]
  },

    // ============================================================
    //  ENGLAND
    // ============================================================

    "English Premier League": {
        id: "english-premier-league",
        logo: "england/premierleague.png",
        isBasketball: false,
        season: "2025-26",
        teams: [
            { rank: 1, team: "Arsenal", MP: 38, MW: 26, MD: 7, ML: 5, GF: 71, GA: 27, logo: "england/arsenal.png" },
            { rank: 2, team: "Man City", MP: 38, MW: 23, MD: 9, ML: 6, GF: 77, GA: 35, logo: "england/mancity.png" },
            { rank: 3, team: "Man United", MP: 38, MW: 20, MD: 11, ML: 7, GF: 69, GA: 50, logo: "england/manutd.png" },
            { rank: 4, team: "Aston Villa", MP: 38, MW: 19, MD: 8, ML: 11, GF: 56, GA: 49, logo: "england/astonvilla.png" },
            { rank: 5, team: "Liverpool", MP: 38, MW: 17, MD: 9, ML: 12, GF: 63, GA: 53, logo: "england/liverpool.png" },
            { rank: 6, team: "Bournemouth", MP: 38, MW: 13, MD: 18, ML: 7, GF: 58, GA: 54, logo: "england/bournemouth.png" },
            { rank: 7, team: "Sunderland", MP: 38, MW: 14, MD: 12, ML: 12, GF: 42, GA: 48, logo: "england/sunderland.png" },
            { rank: 8, team: "Brighton", MP: 38, MW: 14, MD: 11, ML: 13, GF: 52, GA: 46, logo: "england/brighton.png" },
            { rank: 9, team: "Brentford", MP: 38, MW: 14, MD: 11, ML: 13, GF: 55, GA: 52, logo: "england/brentford.png" },
            { rank: 10, team: "Chelsea", MP: 38, MW: 14, MD: 10, ML: 14, GF: 58, GA: 52, logo: "england/chelsea.png" },
            { rank: 11, team: "Fulham", MP: 38, MW: 15, MD: 7, ML: 16, GF: 47, GA: 51, logo: "england/fulham.png" },
            { rank: 12, team: "Newcastle", MP: 38, MW: 14, MD: 7, ML: 17, GF: 53, GA: 55, logo: "england/newcastle.png" },
            { rank: 13, team: "Everton", MP: 38, MW: 13, MD: 10, ML: 15, GF: 47, GA: 50, logo: "england/everton.png" },
            { rank: 14, team: "Leeds", MP: 38, MW: 11, MD: 14, ML: 13, GF: 49, GA: 56, logo: "england/leeds.png" },
            { rank: 15, team: "Palace", MP: 38, MW: 11, MD: 12, ML: 15, GF: 41, GA: 51, logo: "england/palace.png" },
            { rank: 16, team: "Nottm Forest", MP: 38, MW: 11, MD: 11, ML: 16, GF: 48, GA: 51, logo: "england/nottmforest.png" },
            { rank: 17, team: "Spurs", MP: 38, MW: 10, MD: 11, ML: 17, GF: 48, GA: 57, logo: "england/spurs.png" },
            { rank: 18, team: "West Ham", MP: 38, MW: 10, MD: 9, ML: 19, GF: 46, GA: 65, logo: "england/westham.png" },
            { rank: 19, team: "Burnley", MP: 38, MW: 4, MD: 10, ML: 24, GF: 38, GA: 75, logo: "england/burnley.png" },
            { rank: 20, team: "Wolves", MP: 38, MW: 3, MD: 11, ML: 24, GF: 27, GA: 68, logo: "england/wolves.png" }
        ],
        fixtures: [
            { home: "Chelsea", away: "Brighton", date: "2026-08-30" },
            { home: "Leeds", away: "Brentford", date: "2026-08-30" },
            { home: "Sunderland", away: "Fulham", date: "2026-08-30" },
            { home: "Man United", away: "Ipswich", date: "2026-08-30" },
            { home: "Aston Villa", away: "Arsenal", date: "2026-08-31" },
            { home: "Ipswich", away: "Liverpool", date: "2026-09-04" },
            { home: "Newcastle", away: "Bournemouth", date: "2026-09-05" },
            { home: "Brentford", away: "Sunderland", date: "2026-09-05" },
            { home: "Nottm Forest", away: "Spurs", date: "2026-09-05" },
            { home: "Man City", away: "Coventry", date: "2026-09-05" },
            { home: "Fulham", away: "Palace", date: "2026-09-05" }
        ]
    },
	
	 // ============================================================
    //  Spain
    // ============================================================

    "Spanish La Liga": {
    "id": "spanish-la-liga",
    "logo": "spain/laliga.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Barcelona", "MP": 38, "MW": 31, "MD": 1, "ML": 6, "GF": 95, "GA": 36, "logo": "spain/barcelona.png" },
      { "rank": 2, "team": "Real Madrid", "MP": 38, "MW": 27, "MD": 5, "ML": 6, "GF": 77, "GA": 35, "logo": "spain/realmadrid.png" },
      { "rank": 3, "team": "Villarreal", "MP": 38, "MW": 22, "MD": 6, "ML": 10, "GF": 72, "GA": 46, "logo": "spain/villarreal.png" },
      { "rank": 4, "team": "Atlético Madrid", "MP": 38, "MW": 21, "MD": 6, "ML": 11, "GF": 62, "GA": 44, "logo": "spain/atleticomadrid.png" },
      { "rank": 5, "team": "Betis", "MP": 38, "MW": 15, "MD": 15, "ML": 8, "GF": 59, "GA": 48, "logo": "spain/betis.png" },
      { "rank": 6, "team": "Celta", "MP": 38, "MW": 14, "MD": 12, "ML": 12, "GF": 53, "GA": 48, "logo": "spain/celta.png" },
      { "rank": 7, "team": "Getafe", "MP": 38, "MW": 15, "MD": 6, "ML": 17, "GF": 32, "GA": 38, "logo": "spain/getafe.png" },
      { "rank": 8, "team": "Rayo Vallecano", "MP": 38, "MW": 12, "MD": 14, "ML": 12, "GF": 41, "GA": 44, "logo": "spain/rayovallecano.png" },
      { "rank": 9, "team": "Valencia", "MP": 38, "MW": 13, "MD": 10, "ML": 15, "GF": 46, "GA": 55, "logo": "spain/valencia.png" },
      { "rank": 10, "team": "Real Sociedad", "MP": 38, "MW": 11, "MD": 13, "ML": 14, "GF": 59, "GA": 61, "logo": "spain/realsociedad.png" },
      { "rank": 11, "team": "Espanyol", "MP": 38, "MW": 12, "MD": 10, "ML": 16, "GF": 43, "GA": 55, "logo": "spain/espanyol.png" },
      { "rank": 12, "team": "Athletic", "MP": 38, "MW": 13, "MD": 6, "ML": 19, "GF": 43, "GA": 58, "logo": "spain/athletic.png" },
      { "rank": 13, "team": "Sevilla", "MP": 38, "MW": 12, "MD": 7, "ML": 19, "GF": 46, "GA": 60, "logo": "spain/sevilla.png" },
      { "rank": 14, "team": "Alavés", "MP": 38, "MW": 11, "MD": 10, "ML": 17, "GF": 44, "GA": 56, "logo": "spain/alaves.png" },
      { "rank": 15, "team": "Elche", "MP": 38, "MW": 10, "MD": 13, "ML": 15, "GF": 49, "GA": 57, "logo": "spain/elche.png" },
      { "rank": 16, "team": "Levante", "MP": 38, "MW": 11, "MD": 9, "ML": 18, "GF": 47, "GA": 61, "logo": "spain/levante.png" },
      { "rank": 17, "team": "Osasuna", "MP": 38, "MW": 11, "MD": 9, "ML": 18, "GF": 44, "GA": 50, "logo": "spain/osasuna.png" },
      { "rank": 18, "team": "Mallorca", "MP": 38, "MW": 11, "MD": 9, "ML": 18, "GF": 47, "GA": 57, "logo": "spain/mallorca.png" },
      { "rank": 19, "team": "Girona", "MP": 38, "MW": 9, "MD": 14, "ML": 15, "GF": 39, "GA": 55, "logo": "spain/girona.png" },
      { "rank": 20, "team": "Real Oviedo", "MP": 38, "MW": 6, "MD": 11, "ML": 21, "GF": 26, "GA": 60, "logo": "spain/realoviedo.png" }
    ],
    "fixtures": [
      { "home": "Barcelona", "away": "Rayo Vallecano", "date": "2026-09-03" },
      { "home": "Real Sociedad", "away": "Celta", "date": "2026-09-04" },
      { "home": "Betis", "away": "Real Madrid", "date": "2026-09-05" },
      { "home": "Athletic", "away": "Atlético Madrid", "date": "2026-09-05" },
      { "home": "Rayo Vallecano", "away": "Racing Santander", "date": "2026-09-05" },
      { "home": "Villarreal", "away": "Deportivo", "date": "2026-09-06" },
      { "home": "Valencia", "away": "Barcelona", "date": "2026-09-06" },
      { "home": "Alavés", "away": "Osasuna", "date": "2026-09-06" },
      { "home": "Málaga", "away": "Levante", "date": "2026-09-06" },
      { "home": "Espanyol", "away": "Sevilla", "date": "2026-09-07" },
      { "home": "Getafe", "away": "Celta", "date": "2026-09-07" },
      { "home": "Elche", "away": "Real Sociedad", "date": "2026-09-11" },
      { "home": "Sevilla", "away": "Valencia", "date": "2026-09-12" },
      { "home": "Racing Santander", "away": "Alavés", "date": "2026-09-12" },
      { "home": "Osasuna", "away": "Espanyol", "date": "2026-09-12" },
      { "home": "Athletic", "away": "Elche", "date": "2026-09-12" },
      { "home": "Real Madrid", "away": "Rayo Vallecano", "date": "2026-09-13" },
      { "home": "Celta", "away": "Málaga", "date": "2026-09-13" },
      { "home": "Levante", "away": "Barcelona", "date": "2026-09-13" },
      { "home": "Getafe", "away": "Deportivo", "date": "2026-09-13" },
      { "home": "Real Sociedad", "away": "Atlético Madrid", "date": "2026-09-14" },
      { "home": "Villarreal", "away": "Betis", "date": "2026-09-14" }
    ]
  },

    // ============================================================
    //  GERMANY
    // ============================================================

   "German Bundesliga": {
    "id": "german-bundesliga",
    "logo": "germany/bundesliga.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Bayern", "MP": 34, "MW": 28, "MD": 5, "ML": 1, "GF": 122, "GA": 36, "logo": "germany/bayern.png" },
      { "rank": 2, "team": "Dortmund", "MP": 34, "MW": 22, "MD": 7, "ML": 5, "GF": 70, "GA": 34, "logo": "germany/dortmund.png" },
      { "rank": 3, "team": "RB Leipzig", "MP": 34, "MW": 20, "MD": 5, "ML": 9, "GF": 66, "GA": 47, "logo": "germany/rbleipzig.png" },
      { "rank": 4, "team": "VfB Stuttgart", "MP": 34, "MW": 18, "MD": 8, "ML": 8, "GF": 71, "GA": 49, "logo": "germany/stuttgart.png" },
      { "rank": 5, "team": "Hoffenheim", "MP": 34, "MW": 18, "MD": 7, "ML": 9, "GF": 65, "GA": 52, "logo": "germany/hoffenheim.png" },
      { "rank": 6, "team": "Leverkusen", "MP": 34, "MW": 17, "MD": 8, "ML": 9, "GF": 68, "GA": 47, "logo": "germany/leverkusen.png" },
      { "rank": 7, "team": "Freiburg", "MP": 34, "MW": 13, "MD": 8, "ML": 13, "GF": 51, "GA": 57, "logo": "germany/freiburg.png" },
      { "rank": 8, "team": "Eintracht Frankfurt", "MP": 34, "MW": 11, "MD": 11, "ML": 12, "GF": 61, "GA": 65, "logo": "germany/eintrachtfrankfurt.png" },
      { "rank": 9, "team": "Augsburg", "MP": 34, "MW": 12, "MD": 7, "ML": 15, "GF": 45, "GA": 61, "logo": "germany/augsburg.png" },
      { "rank": 10, "team": "Mainz", "MP": 34, "MW": 10, "MD": 10, "ML": 14, "GF": 44, "GA": 53, "logo": "germany/mainz.png" },
      { "rank": 11, "team": "Union Berlin", "MP": 34, "MW": 10, "MD": 9, "ML": 15, "GF": 44, "GA": 58, "logo": "germany/unionberlin.png" },
      { "rank": 12, "team": "Mönchengladbach", "MP": 34, "MW": 9, "MD": 11, "ML": 14, "GF": 42, "GA": 53, "logo": "germany/monchengladbach.png" },
      { "rank": 13, "team": "Hamburg", "MP": 34, "MW": 9, "MD": 11, "ML": 14, "GF": 40, "GA": 54, "logo": "germany/hamburg.png" },
      { "rank": 14, "team": "Köln", "MP": 34, "MW": 7, "MD": 11, "ML": 16, "GF": 49, "GA": 63, "logo": "germany/koln.png" },
      { "rank": 15, "team": "Werder", "MP": 34, "MW": 8, "MD": 8, "ML": 18, "GF": 37, "GA": 60, "logo": "germany/werder.png" },
      { "rank": 16, "team": "Wolfsburg", "MP": 34, "MW": 7, "MD": 8, "ML": 19, "GF": 45, "GA": 69, "logo": "germany/wolfsburg.png" },
      { "rank": 17, "team": "Heidenheim", "MP": 34, "MW": 6, "MD": 8, "ML": 20, "GF": 41, "GA": 72, "logo": "germany/heidenheim.png" },
      { "rank": 18, "team": "St. Pauli", "MP": 34, "MW": 6, "MD": 8, "ML": 20, "GF": 29, "GA": 60, "logo": "germany/stpauli.png" }
    ],
    "fixtures": [
      { "home": "VfB Stuttgart", "away": "Köln", "date": "2026-09-04" },
      { "home": "Mönchengladbach", "away": "SV Elversberg", "date": "2026-09-05" },
      { "home": "Werder", "away": "RB Leipzig", "date": "2026-09-05" },
      { "home": "Hoffenheim", "away": "Dortmund", "date": "2026-09-05" },
      { "home": "Paderborn", "away": "Freiburg", "date": "2026-09-05" },
      { "home": "Leverkusen", "away": "Union Berlin", "date": "2026-09-05" },
      { "home": "Schalke", "away": "Bayern", "date": "2026-09-05" },
      { "home": "Hamburg", "away": "Mainz", "date": "2026-09-06" },
      { "home": "Eintracht Frankfurt", "away": "Augsburg", "date": "2026-09-06" },
      { "home": "Union Berlin", "away": "Schalke", "date": "2026-09-11" },
      { "home": "Dortmund", "away": "Paderborn", "date": "2026-09-12" },
      { "home": "Mainz", "away": "Eintracht Frankfurt", "date": "2026-09-12" },
      { "home": "Hoffenheim", "away": "VfB Stuttgart", "date": "2026-09-12" },
      { "home": "Freiburg", "away": "Mönchengladbach", "date": "2026-09-12" },
      { "home": "Augsburg", "away": "Leverkusen", "date": "2026-09-12" },
      { "home": "Köln", "away": "Werder", "date": "2026-09-12" },
      { "home": "RB Leipzig", "away": "Hamburg", "date": "2026-09-13" },
      { "home": "SV Elversberg", "away": "Bayern", "date": "2026-09-13" }
    ]
  },

    // ============================================================
    //  ITALY
    // ============================================================

    "Italian Serie A": {
    "id": "italian-serie-a",
    "logo": "italy/seriea.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Inter", "MP": 38, "MW": 27, "MD": 6, "ML": 5, "GF": 89, "GA": 35, "logo": "italy/inter.png" },
      { "rank": 2, "team": "Napoli", "MP": 38, "MW": 23, "MD": 7, "ML": 8, "GF": 58, "GA": 36, "logo": "italy/napoli.png" },
      { "rank": 3, "team": "Roma", "MP": 38, "MW": 23, "MD": 4, "ML": 11, "GF": 59, "GA": 31, "logo": "italy/roma.png" },
      { "rank": 4, "team": "Como", "MP": 38, "MW": 20, "MD": 11, "ML": 7, "GF": 65, "GA": 29, "logo": "italy/como.png" },
      { "rank": 5, "team": "Milan", "MP": 38, "MW": 20, "MD": 10, "ML": 8, "GF": 53, "GA": 35, "logo": "italy/milan.png" },
      { "rank": 6, "team": "Juventus", "MP": 38, "MW": 19, "MD": 12, "ML": 7, "GF": 61, "GA": 34, "logo": "italy/juventus.png" },
      { "rank": 7, "team": "Atalanta", "MP": 38, "MW": 15, "MD": 14, "ML": 9, "GF": 51, "GA": 36, "logo": "italy/atalanta.png" },
      { "rank": 8, "team": "Bologna", "MP": 38, "MW": 16, "MD": 8, "ML": 14, "GF": 49, "GA": 46, "logo": "italy/bologna.png" },
      { "rank": 9, "team": "Lazio", "MP": 38, "MW": 14, "MD": 12, "ML": 12, "GF": 41, "GA": 40, "logo": "italy/lazio.png" },
      { "rank": 10, "team": "Udinese", "MP": 38, "MW": 14, "MD": 8, "ML": 16, "GF": 45, "GA": 48, "logo": "italy/udinese.png" },
      { "rank": 11, "team": "Sassuolo", "MP": 38, "MW": 14, "MD": 7, "ML": 17, "GF": 46, "GA": 50, "logo": "italy/sassuolo.png" },
      { "rank": 12, "team": "Torino", "MP": 38, "MW": 12, "MD": 9, "ML": 17, "GF": 44, "GA": 63, "logo": "italy/torino.png" },
      { "rank": 13, "team": "Parma", "MP": 38, "MW": 11, "MD": 12, "ML": 15, "GF": 28, "GA": 46, "logo": "italy/parma.png" },
      { "rank": 14, "team": "Cagliari", "MP": 38, "MW": 11, "MD": 10, "ML": 17, "GF": 40, "GA": 53, "logo": "italy/cagliari.png" },
      { "rank": 15, "team": "Fiorentina", "MP": 38, "MW": 9, "MD": 15, "ML": 14, "GF": 41, "GA": 50, "logo": "italy/fiorentina.png" },
      { "rank": 16, "team": "Genoa", "MP": 38, "MW": 10, "MD": 11, "ML": 17, "GF": 41, "GA": 51, "logo": "italy/genoa.png" },
      { "rank": 17, "team": "Lecce", "MP": 38, "MW": 10, "MD": 8, "ML": 20, "GF": 28, "GA": 50, "logo": "italy/lecce.png" },
      { "rank": 18, "team": "Cremonese", "MP": 38, "MW": 8, "MD": 10, "ML": 20, "GF": 32, "GA": 57, "logo": "italy/cremonese.png" },
      { "rank": 19, "team": "Verona", "MP": 38, "MW": 3, "MD": 12, "ML": 23, "GF": 25, "GA": 61, "logo": "italy/verona.png" },
      { "rank": 20, "team": "Pisa", "MP": 38, "MW": 2, "MD": 12, "ML": 24, "GF": 26, "GA": 71, "logo": "italy/pisa.png" }
    ],
    "fixtures": [
      { "home": "Genoa", "away": "Como", "date": "2026-09-04" },
      { "home": "Fiorentina", "away": "Torino", "date": "2026-09-05" },
      { "home": "Inter", "away": "Napoli", "date": "2026-09-05" },
      { "home": "Roma", "away": "Atalanta", "date": "2026-09-05" },
      { "home": "Parma", "away": "Monza", "date": "2026-09-06" },
      { "home": "Frosinone", "away": "Venezia", "date": "2026-09-06" },
      { "home": "Bologna", "away": "Sassuolo", "date": "2026-09-06" },
      { "home": "Juventus", "away": "Milan", "date": "2026-09-06" },
      { "home": "Cagliari", "away": "Lecce", "date": "2026-09-07" },
      { "home": "Udinese", "away": "Lazio", "date": "2026-09-07" },
      { "home": "Venezia", "away": "Fiorentina", "date": "2026-09-11" },
      { "home": "Genoa", "away": "Frosinone", "date": "2026-09-12" },
      { "home": "Sassuolo", "away": "Juventus", "date": "2026-09-12" },
      { "home": "Atalanta", "away": "Cagliari", "date": "2026-09-12" },
      { "home": "Torino", "away": "Roma", "date": "2026-09-13" },
      { "home": "Lecce", "away": "Monza", "date": "2026-09-13" },
      { "home": "Como", "away": "Parma", "date": "2026-09-13" },
      { "home": "Napoli", "away": "Bologna", "date": "2026-09-13" },
      { "home": "Lazio", "away": "Milan", "date": "2026-09-13" },
      { "home": "Inter", "away": "Udinese", "date": "2026-09-14" }
    ]
  },

    // ============================================================
    //  FRANCE
    // ============================================================

   "French Ligue 1": {
    "id": "french-ligue-1",
    "logo": "france/ligue1.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "PSG", "MP": 34, "MW": 24, "MD": 4, "ML": 6, "GF": 74, "GA": 29, "logo": "france/psg.png" },
      { "rank": 2, "team": "Lens", "MP": 34, "MW": 22, "MD": 4, "ML": 8, "GF": 66, "GA": 35, "logo": "france/lens.png" },
      { "rank": 3, "team": "LOSC", "MP": 34, "MW": 18, "MD": 7, "ML": 9, "GF": 52, "GA": 37, "logo": "france/losc.png" },
      { "rank": 4, "team": "OL", "MP": 34, "MW": 18, "MD": 6, "ML": 10, "GF": 53, "GA": 40, "logo": "france/ol.png" },
      { "rank": 5, "team": "Marseille", "MP": 34, "MW": 18, "MD": 5, "ML": 11, "GF": 63, "GA": 45, "logo": "france/marseille.png" },
      { "rank": 6, "team": "Rennes", "MP": 34, "MW": 17, "MD": 8, "ML": 9, "GF": 59, "GA": 50, "logo": "france/rennes.png" },
      { "rank": 7, "team": "Monaco", "MP": 34, "MW": 16, "MD": 6, "ML": 12, "GF": 60, "GA": 54, "logo": "france/monaco.png" },
      { "rank": 8, "team": "Strasbourg", "MP": 34, "MW": 15, "MD": 8, "ML": 11, "GF": 58, "GA": 47, "logo": "france/strasbourg.png" },
      { "rank": 9, "team": "Toulouse", "MP": 34, "MW": 12, "MD": 9, "ML": 13, "GF": 47, "GA": 46, "logo": "france/toulouse.png" },
      { "rank": 10, "team": "Lorient", "MP": 34, "MW": 11, "MD": 12, "ML": 11, "GF": 48, "GA": 51, "logo": "france/lorient.png" },
      { "rank": 11, "team": "Paris FC", "MP": 34, "MW": 11, "MD": 11, "ML": 12, "GF": 47, "GA": 50, "logo": "france/parisfc.png" },
      { "rank": 12, "team": "Brest", "MP": 34, "MW": 10, "MD": 9, "ML": 15, "GF": 43, "GA": 55, "logo": "france/brest.png" },
      { "rank": 13, "team": "Angers", "MP": 34, "MW": 9, "MD": 9, "ML": 16, "GF": 29, "GA": 48, "logo": "france/angers.png" },
      { "rank": 14, "team": "Le Havre", "MP": 34, "MW": 7, "MD": 14, "ML": 13, "GF": 32, "GA": 44, "logo": "france/lehavre.png" },
      { "rank": 15, "team": "Auxerre", "MP": 34, "MW": 8, "MD": 10, "ML": 16, "GF": 34, "GA": 44, "logo": "france/auxerre.png" },
      { "rank": 16, "team": "Nice", "MP": 34, "MW": 7, "MD": 11, "ML": 16, "GF": 37, "GA": 60, "logo": "france/nice.png" },
      { "rank": 17, "team": "Nantes", "MP": 34, "MW": 5, "MD": 9, "ML": 20, "GF": 29, "GA": 52, "logo": "france/nantes.png" },
      { "rank": 18, "team": "Metz", "MP": 34, "MW": 3, "MD": 8, "ML": 23, "GF": 32, "GA": 76, "logo": "france/metz.png" }
    ],
    "fixtures": [
      { "home": "OL", "away": "Auxerre", "date": "2026-09-04" },
      { "home": "PSG", "away": "Monaco", "date": "2026-09-04" },
      { "home": "Lens", "away": "Lorient", "date": "2026-09-05" },
      { "home": "Nice", "away": "Le Mans", "date": "2026-09-05" },
      { "home": "Le Havre", "away": "Brest", "date": "2026-09-05" },
      { "home": "Troyes", "away": "Strasbourg", "date": "2026-09-06" },
      { "home": "Angers", "away": "Rennes", "date": "2026-09-06" },
      { "home": "Marseille", "away": "Paris FC", "date": "2026-09-06" },
      { "home": "Rennes", "away": "Marseille", "date": "2026-09-11" },
      { "home": "Strasbourg", "away": "Monaco", "date": "2026-09-12" },
      { "home": "Le Havre", "away": "Angers", "date": "2026-09-12" },
      { "home": "Auxerre", "away": "Nice", "date": "2026-09-12" },
      { "home": "Lorient", "away": "Toulouse", "date": "2026-09-12" },
      { "home": "Paris FC", "away": "OL", "date": "2026-09-12" },
      { "home": "LOSC", "away": "Troyes", "date": "2026-09-13" },
      { "home": "Le Mans", "away": "Lens", "date": "2026-09-13" },
      { "home": "Brest", "away": "PSG", "date": "2026-09-13" }
    ]
  },
    // ============================================================
    //  USA - MLS
    // ============================================================

    "USA MLS": {
    "id": "usa-mls",
    "logo": "usa/mls.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Nashville", "MP": 22, "MW": 16, "MD": 4, "ML": 2, "GF": 47, "GA": 17, "logo": "usa/nashville.png" },
      { "rank": 2, "team": "Inter Miami", "MP": 22, "MW": 12, "MD": 6, "ML": 4, "GF": 56, "GA": 41, "logo": "usa/intermiami.png" },
      { "rank": 3, "team": "Chicago", "MP": 21, "MW": 11, "MD": 4, "ML": 6, "GF": 39, "GA": 28, "logo": "usa/chicago.png" },
      { "rank": 4, "team": "New England", "MP": 22, "MW": 11, "MD": 4, "ML": 7, "GF": 35, "GA": 27, "logo": "usa/newengland.png" },
      { "rank": 5, "team": "Charlotte", "MP": 22, "MW": 10, "MD": 5, "ML": 7, "GF": 40, "GA": 32, "logo": "usa/charlotte.png" },
      { "rank": 6, "team": "Cincinnati", "MP": 22, "MW": 8, "MD": 7, "ML": 7, "GF": 49, "GA": 51, "logo": "usa/cincinnati.png" },
      { "rank": 7, "team": "New York City", "MP": 22, "MW": 7, "MD": 7, "ML": 8, "GF": 36, "GA": 31, "logo": "usa/nycfc.png" },
      { "rank": 8, "team": "NY Red Bulls", "MP": 22, "MW": 7, "MD": 5, "ML": 10, "GF": 32, "GA": 46, "logo": "usa/nyredbulls.png" },
      { "rank": 9, "team": "Orlando City", "MP": 22, "MW": 7, "MD": 4, "ML": 11, "GF": 37, "GA": 54, "logo": "usa/orlandocity.png" },
      { "rank": 10, "team": "Toronto", "MP": 22, "MW": 5, "MD": 10, "ML": 7, "GF": 32, "GA": 38, "logo": "usa/toronto.png" },
      { "rank": 11, "team": "D.C. United", "MP": 22, "MW": 5, "MD": 10, "ML": 7, "GF": 28, "GA": 36, "logo": "usa/dcunited.png" },
      { "rank": 12, "team": "Philadelphia", "MP": 22, "MW": 6, "MD": 6, "ML": 10, "GF": 34, "GA": 39, "logo": "usa/philadelphia.png" },
      { "rank": 13, "team": "Atlanta United", "MP": 22, "MW": 6, "MD": 3, "ML": 13, "GF": 25, "GA": 38, "logo": "usa/atlantaunited.png" },
      { "rank": 14, "team": "Montréal", "MP": 22, "MW": 5, "MD": 6, "ML": 11, "GF": 30, "GA": 46, "logo": "usa/montreal.png" },
      { "rank": 15, "team": "Columbus", "MP": 22, "MW": 5, "MD": 5, "ML": 12, "GF": 31, "GA": 38, "logo": "usa/columbus.png" },
      { "rank": 16, "team": "Vancouver", "MP": 21, "MW": 13, "MD": 4, "ML": 4, "GF": 48, "GA": 18, "logo": "usa/vancouver.png" },
      { "rank": 17, "team": "Houston Dynamo", "MP": 22, "MW": 12, "MD": 3, "ML": 7, "GF": 30, "GA": 26, "logo": "usa/houstondynamo.png" },
      { "rank": 18, "team": "LAFC", "MP": 23, "MW": 10, "MD": 6, "ML": 7, "GF": 36, "GA": 22, "logo": "usa/lafc.png" },
      { "rank": 19, "team": "San Jose", "MP": 22, "MW": 10, "MD": 4, "ML": 8, "GF": 39, "GA": 33, "logo": "usa/sanjose.png" },
      { "rank": 20, "team": "Dallas", "MP": 21, "MW": 9, "MD": 6, "ML": 6, "GF": 38, "GA": 34, "logo": "usa/dallas.png" },
      { "rank": 21, "team": "St. Louis", "MP": 21, "MW": 9, "MD": 6, "ML": 6, "GF": 30, "GA": 27, "logo": "usa/stlouis.png" },
      { "rank": 22, "team": "Colorado", "MP": 22, "MW": 10, "MD": 1, "ML": 11, "GF": 31, "GA": 28, "logo": "usa/colorado.png" },
      { "rank": 23, "team": "San Diego", "MP": 22, "MW": 8, "MD": 6, "ML": 8, "GF": 40, "GA": 33, "logo": "usa/sandiego.png" },
      { "rank": 24, "team": "Minnesota", "MP": 22, "MW": 7, "MD": 8, "ML": 7, "GF": 30, "GA": 32, "logo": "usa/minnesota.png" },
      { "rank": 25, "team": "Salt Lake", "MP": 21, "MW": 8, "MD": 4, "ML": 9, "GF": 34, "GA": 33, "logo": "usa/saltlake.png" },
      { "rank": 26, "team": "Portland", "MP": 22, "MW": 8, "MD": 4, "ML": 10, "GF": 39, "GA": 39, "logo": "usa/portland.png" },
      { "rank": 27, "team": "Seattle Sounders", "MP": 21, "MW": 7, "MD": 5, "ML": 9, "GF": 24, "GA": 29, "logo": "usa/seattlesounders.png" },
      { "rank": 28, "team": "LA Galaxy", "MP": 23, "MW": 6, "MD": 8, "ML": 9, "GF": 28, "GA": 35, "logo": "usa/lagalaxy.png" },
      { "rank": 29, "team": "Austin", "MP": 22, "MW": 6, "MD": 6, "ML": 10, "GF": 28, "GA": 41, "logo": "usa/austin.png" },
      { "rank": 30, "team": "Sporting KC", "MP": 22, "MW": 4, "MD": 3, "ML": 15, "GF": 20, "GA": 54, "logo": "usa/sportingkc.png" }
    ],
    "fixtures": [
      { "home": "St. Louis", "away": "Dallas", "date": "2026-09-05" },
      { "home": "New York City", "away": "Nashville", "date": "2026-09-06" },
      { "home": "Toronto", "away": "Chicago", "date": "2026-09-06" },
      { "home": "Columbus", "away": "Colorado", "date": "2026-09-06" },
      { "home": "Orlando City", "away": "San Diego", "date": "2026-09-06" },
      { "home": "Philadelphia", "away": "Montréal", "date": "2026-09-06" },
      { "home": "Charlotte", "away": "Houston Dynamo", "date": "2026-09-06" },
      { "home": "Inter Miami", "away": "Atlanta United", "date": "2026-09-06" },
      { "home": "Cincinnati", "away": "D.C. United", "date": "2026-09-06" },
      { "home": "Seattle Sounders", "away": "NY Red Bulls", "date": "2026-09-06" },
      { "home": "Dallas", "away": "Sporting KC", "date": "2026-09-06" },
      { "home": "Austin", "away": "San Jose", "date": "2026-09-06" },
      { "home": "Salt Lake", "away": "LAFC", "date": "2026-09-06" },
      { "home": "LA Galaxy", "away": "New England", "date": "2026-09-06" },
      { "home": "Portland", "away": "Minnesota", "date": "2026-09-06" },
      { "home": "Vancouver", "away": "St. Louis", "date": "2026-09-06" },
      { "home": "Montréal", "away": "Charlotte", "date": "2026-09-10" },
      { "home": "D.C. United", "away": "Columbus", "date": "2026-09-10" },
      { "home": "Atlanta United", "away": "Orlando City", "date": "2026-09-10" },
      { "home": "Philadelphia", "away": "Cincinnati", "date": "2026-09-10" },
      { "home": "Toronto", "away": "Nashville", "date": "2026-09-10" },
      { "home": "New York City", "away": "New England", "date": "2026-09-10" },
      { "home": "Houston Dynamo", "away": "Salt Lake", "date": "2026-09-10" },
      { "home": "Austin", "away": "Colorado", "date": "2026-09-10" },
      { "home": "Minnesota", "away": "Dallas", "date": "2026-09-10" },
      { "home": "Chicago", "away": "Inter Miami", "date": "2026-09-10" },
      { "home": "Portland", "away": "St. Louis", "date": "2026-09-10" },
      { "home": "Vancouver", "away": "LA Galaxy", "date": "2026-09-10" },
      { "home": "San Diego", "away": "San Jose", "date": "2026-09-10" },
      { "home": "LAFC", "away": "NY Red Bulls", "date": "2026-09-13" },
      { "home": "Orlando City", "away": "Toronto", "date": "2026-09-13" },
      { "home": "D.C. United", "away": "Atlanta United", "date": "2026-09-13" },
      { "home": "Inter Miami", "away": "Nashville", "date": "2026-09-13" },
      { "home": "Columbus", "away": "NY Red Bulls", "date": "2026-09-13" },
      { "home": "Cincinnati", "away": "Charlotte", "date": "2026-09-13" },
      { "home": "Sporting KC", "away": "LAFC", "date": "2026-09-13" },
      { "home": "Dallas", "away": "Portland", "date": "2026-09-13" },
      { "home": "St. Louis", "away": "Minnesota", "date": "2026-09-13" },
      { "home": "Salt Lake", "away": "New York City", "date": "2026-09-13" },
      { "home": "Colorado", "away": "Montréal", "date": "2026-09-13" },
      { "home": "San Jose", "away": "Houston Dynamo", "date": "2026-09-13" },
      { "home": "LA Galaxy", "away": "Seattle Sounders", "date": "2026-09-13" },
      { "home": "Chicago", "away": "New England", "date": "2026-09-13" },
      { "home": "Vancouver", "away": "Austin", "date": "2026-09-14" },
      { "home": "San Diego", "away": "Philadelphia", "date": "2026-09-14" }
    ]
  },

    // ============================================================
    //  WNBA
    // ============================================================

    "WNBA": {
        id: "wnba",
        logo: "wnba/wnbalogo.png",
        isBasketball: true,
        teams: [
            { rank: 1, team: "Indiana Fever", GP: 39, GW: 25, GL: 14, points_for: 3544, points_against: 3360, logo: "wnba/fever.png" },
            { rank: 2, team: "Atlanta Dream", GP: 37, GW: 24, GL: 13, points_for: 3350, points_against: 3180, logo: "wnba/dream.png" },
            { rank: 3, team: "New York Liberty", GP: 38, GW: 23, GL: 15, points_for: 3400, points_against: 3250, logo: "wnba/liberty.png" },
            { rank: 4, team: "Washington Mystics", GP: 37, GW: 22, GL: 15, points_for: 3140, points_against: 3100, logo: "wnba/mystics.png" },
            { rank: 5, team: "Chicago Sky", GP: 38, GW: 15, GL: 23, points_for: 3150, points_against: 3350, logo: "wnba/sky.png" },
            { rank: 6, team: "Portland Fire", GP: 37, GW: 15, GL: 22, points_for: 3150, points_against: 3300, logo: "wnba/fire.png" },
            { rank: 7, team: "Toronto Tempo", GP: 37, GW: 11, GL: 26, points_for: 3100, points_against: 3400, logo: "wnba/tempo.png" },
            { rank: 8, team: "Connecticut Sun", GP: 36, GW: 9, GL: 27, points_for: 2850, points_against: 3250, logo: "wnba/sun.png" },
            { rank: 9, team: "Minnesota Lynx", GP: 38, GW: 31, GL: 7, points_for: 3450, points_against: 3050, logo: "wnba/lynx.png" },
            { rank: 10, team: "Las Vegas Aces", GP: 39, GW: 26, GL: 13, points_for: 3500, points_against: 3250, logo: "wnba/aces.png" },
            { rank: 11, team: "Golden State Valkyries", GP: 36, GW: 25, GL: 11, points_for: 3350, points_against: 3100, logo: "wnba/valkyries.png" },
            { rank: 12, team: "Dallas Wings", GP: 38, GW: 22, GL: 16, points_for: 3400, points_against: 3300, logo: "wnba/wings.png" },
            { rank: 13, team: "Los Angeles Sparks", GP: 37, GW: 13, GL: 24, points_for: 3150, points_against: 3350, logo: "wnba/sparks.png" },
            { rank: 14, team: "Phoenix Mercury", GP: 37, GW: 13, GL: 24, points_for: 3100, points_against: 3350, logo: "wnba/mercury.png" },
            { rank: 15, team: "Seattle Storm", GP: 38, GW: 7, GL: 31, points_for: 2900, points_against: 3450, logo: "wnba/storm.png" }
        ],
        fixtures: [
            { home: "Portland Fire", away: "Golden State Valkyries", date: "2026-08-31" },
            { home: "Dallas Wings", away: "Connecticut Sun", date: "2026-08-31" }
        ]
    },

    // ============================================================
    //  JAPAN - J1 LEAGUE
    // ============================================================

    "Japanese J1 League": {
        id: "japanese-j1-league",
        logo: "japan/j1league.png",
        isBasketball: false,
        season: "2026",
        teams: [
            { rank: 1, team: "Kashima Antlers", MP: 18, MW: 13, MD: 4, ML: 1, GF: 29, GA: 9, logo: "japan/kashima.png" },
            { rank: 2, team: "FC Tokyo", MP: 18, MW: 9, MD: 6, ML: 3, GF: 28, GA: 16, logo: "japan/fctokyo.png" },
            { rank: 3, team: "Machida", MP: 18, MW: 8, MD: 8, ML: 2, GF: 23, GA: 19, logo: "japan/machida.png" },
            { rank: 4, team: "Kawasaki", MP: 18, MW: 7, MD: 4, ML: 7, GF: 23, GA: 27, logo: "japan/kawasaki.png" },
            { rank: 5, team: "Tokyo Verdy", MP: 18, MW: 7, MD: 4, ML: 7, GF: 19, GA: 25, logo: "japan/tokyoverdy.png" },
            { rank: 6, team: "Urawa Reds", MP: 18, MW: 7, MD: 4, ML: 7, GF: 25, GA: 18, logo: "japan/urawa.png" },
            { rank: 7, team: "Yokohama FM", MP: 18, MW: 6, MD: 2, ML: 10, GF: 28, GA: 29, logo: "japan/yokohamafm.png" },
            { rank: 8, team: "Kashiwa", MP: 18, MW: 6, MD: 1, ML: 11, GF: 21, GA: 24, logo: "japan/kashiwa.png" },
            { rank: 9, team: "Mito", MP: 18, MW: 2, MD: 8, ML: 8, GF: 19, GA: 35, logo: "japan/mito.png" },
            { rank: 10, team: "JEF", MP: 18, MW: 3, MD: 3, ML: 12, GF: 18, GA: 31, logo: "japan/jefunited.png" },
            { rank: 11, team: "Vissel Kobe", MP: 18, MW: 9, MD: 6, ML: 3, GF: 27, GA: 21, logo: "japan/visselkobe.png" },
            { rank: 12, team: "Cerezo Osaka", MP: 18, MW: 7, MD: 6, ML: 5, GF: 26, GA: 19, logo: "japan/cerezo.png" },
            { rank: 13, team: "Nagoya", MP: 18, MW: 8, MD: 5, ML: 5, GF: 31, GA: 28, logo: "japan/nagoya.png" },
            { rank: 14, team: "Sanfrecce", MP: 18, MW: 8, MD: 4, ML: 6, GF: 29, GA: 21, logo: "japan/sanfrecce.png" },
            { rank: 15, team: "Gamba Osaka", MP: 18, MW: 5, MD: 8, ML: 5, GF: 26, GA: 22, logo: "japan/gamba.png" },
            { rank: 16, team: "Okayama", MP: 18, MW: 6, MD: 6, ML: 6, GF: 24, GA: 25, logo: "japan/okayama.png" },
            { rank: 17, team: "Shimizu", MP: 18, MW: 4, MD: 8, ML: 6, GF: 19, GA: 21, logo: "japan/shimizu.png" },
            { rank: 18, team: "Kyoto", MP: 18, MW: 5, MD: 5, ML: 8, GF: 19, GA: 26, logo: "japan/kyoto.png" },
            { rank: 19, team: "Nagasaki", MP: 18, MW: 6, MD: 2, ML: 10, GF: 20, GA: 28, logo: "japan/vvaren.png" },
            { rank: 20, team: "Avispa", MP: 18, MW: 3, MD: 8, ML: 7, GF: 17, GA: 27, logo: "japan/avispa.png" }
        ],
        fixtures: [
            { home: "Sanfrecce", away: "Nagoya", date: "2026-09-02" },
            { home: "Mito", away: "Kashima Antlers", date: "2026-09-02" },
            { home: "JEF", away: "Okayama", date: "2026-09-02" },
            { home: "Cerezo Osaka", away: "Kashiwa", date: "2026-09-02" },
            { home: "Yokohama FM", away: "Kyoto", date: "2026-09-02" },
            { home: "Machida", away: "Kawasaki", date: "2026-09-02" },
            { home: "Tokyo Verdy", away: "Vissel Kobe", date: "2026-09-02" },
            { home: "Shimizu", away: "FC Tokyo", date: "2026-09-02" },
            { home: "Avispa", away: "Urawa Reds", date: "2026-09-02" },
            { home: "Nagasaki", away: "Gamba Osaka", date: "2026-09-02" }
        ]
    },

    // ============================================================
    //  CHINA - SUPER LEAGUE
    // ============================================================

    "Chinese Super League": {
        id: "chinese-super-league",
        logo: "china/superleague.png",
        isBasketball: false,
        season: "2026",
        teams: [
            { rank: 1, team: "Chengdu Rongcheng", MP: 25, MW: 15, MD: 6, ML: 4, GF: 51, GA: 30, logo: "china/chengdu.png" },
            { rank: 2, team: "Beijing Guoan", MP: 25, MW: 11, MD: 9, ML: 5, GF: 49, GA: 33, logo: "china/beijing.png" },
            { rank: 3, team: "Qingdao Youth Island", MP: 25, MW: 8, MD: 13, ML: 4, GF: 29, GA: 30, logo: "china/qingdaoyouth.png" },
            { rank: 4, team: "Dalian Yingbo", MP: 25, MW: 11, MD: 4, ML: 10, GF: 36, GA: 41, logo: "china/dalian.png" },
            { rank: 5, team: "Shandong Taishan", MP: 25, MW: 13, MD: 3, ML: 9, GF: 45, GA: 42, logo: "china/shandong.png" },
            { rank: 6, team: "Yunnan Yukun", MP: 25, MW: 10, MD: 5, ML: 10, GF: 49, GA: 51, logo: "china/yunnan.png" },
            { rank: 7, team: "Shanghai Port", MP: 25, MW: 10, MD: 7, ML: 8, GF: 40, GA: 33, logo: "china/shanghaiport.png" },
            { rank: 8, team: "Chongqing Tonglianglong", MP: 25, MW: 7, MD: 10, ML: 8, GF: 26, GA: 29, logo: "china/chongqing.png" },
            { rank: 9, team: "Shanghai Shenhua", MP: 25, MW: 11, MD: 5, ML: 9, GF: 49, GA: 45, logo: "china/shanghaishenhua.png" },
            { rank: 10, team: "Zhejiang", MP: 24, MW: 9, MD: 6, ML: 9, GF: 40, GA: 40, logo: "china/zhejiang.png" },
            { rank: 11, team: "Shenzhen Peng City", MP: 25, MW: 8, MD: 3, ML: 14, GF: 33, GA: 44, logo: "china/shenzhen.png" },
            { rank: 12, team: "Henan", MP: 24, MW: 8, MD: 7, ML: 9, GF: 32, GA: 34, logo: "china/henan.png" },
            { rank: 13, team: "Shenyang Urban", MP: 24, MW: 7, MD: 4, ML: 13, GF: 34, GA: 41, logo: "china/shenyang.png" },
            { rank: 14, team: "Tianjin Jinmen Tiger", MP: 24, MW: 7, MD: 8, ML: 9, GF: 33, GA: 31, logo: "china/tianjin.png" },
            { rank: 15, team: "Wuhan Three Towns", MP: 23, MW: 5, MD: 9, ML: 9, GF: 35, GA: 39, logo: "china/wuhan.png" },
            { rank: 16, team: "Qingdao Hainiu", MP: 25, MW: 6, MD: 3, ML: 16, GF: 33, GA: 51, logo: "china/qingdaohainiu.png" }
        ],
        fixtures: [
            { home: "Wuhan Three Towns", away: "Qingdao Youth Island", date: "2026-09-05" },
            { home: "Shanghai Port", away: "Beijing Guoan", date: "2026-09-05" },
            { home: "Dalian Yingbo", away: "Qingdao Hainiu", date: "2026-09-05" },
            { home: "Shandong Taishan", away: "Shenzhen Peng City", date: "2026-09-05" },
            { home: "Chongqing Tonglianglong", away: "Shanghai Shenhua", date: "2026-09-06" },
            { home: "Yunnan Yukun", away: "Shenyang Urban", date: "2026-09-06" },
            { home: "Henan", away: "Chengdu Rongcheng", date: "2026-09-06" },
            { home: "Tianjin Jinmen Tiger", away: "Zhejiang", date: "2026-09-06" }
        ]
    },

    // ============================================================
    //  NETHERLANDS - EREDIVISIE
    // ============================================================

   "Netherlands Eredivisie": {
    "id": "netherlands-eredivisie",
    "logo": "netherlands/eredivisie.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "PSV", "MP": 34, "MW": 27, "MD": 3, "ML": 4, "GF": 101, "GA": 45, "logo": "netherlands/psv.png" },
      { "rank": 2, "team": "Feyenoord", "MP": 34, "MW": 19, "MD": 8, "ML": 7, "GF": 70, "GA": 44, "logo": "netherlands/feyenoord.png" },
      { "rank": 3, "team": "NEC", "MP": 34, "MW": 16, "MD": 11, "ML": 7, "GF": 77, "GA": 53, "logo": "netherlands/nec.png" },
      { "rank": 4, "team": "Twente", "MP": 34, "MW": 15, "MD": 13, "ML": 6, "GF": 59, "GA": 40, "logo": "netherlands/twente.png" },
      { "rank": 5, "team": "Ajax", "MP": 34, "MW": 14, "MD": 14, "ML": 6, "GF": 62, "GA": 41, "logo": "netherlands/ajax.png" },
      { "rank": 6, "team": "Utrecht", "MP": 34, "MW": 15, "MD": 8, "ML": 11, "GF": 55, "GA": 42, "logo": "netherlands/utrecht.png" },
      { "rank": 7, "team": "AZ Alkmaar", "MP": 34, "MW": 14, "MD": 10, "ML": 10, "GF": 58, "GA": 51, "logo": "netherlands/azalkmaar.png" },
      { "rank": 8, "team": "Heerenveen", "MP": 34, "MW": 14, "MD": 9, "ML": 11, "GF": 57, "GA": 53, "logo": "netherlands/heerenveen.png" },
      { "rank": 9, "team": "Groningen", "MP": 34, "MW": 14, "MD": 6, "ML": 14, "GF": 49, "GA": 45, "logo": "netherlands/groningen.png" },
      { "rank": 10, "team": "Sparta Rotterdam", "MP": 34, "MW": 12, "MD": 7, "ML": 15, "GF": 40, "GA": 62, "logo": "netherlands/spartarotterdam.png" },
      { "rank": 11, "team": "Fortuna Sittard", "MP": 34, "MW": 11, "MD": 6, "ML": 17, "GF": 49, "GA": 63, "logo": "netherlands/fortunasittard.png" },
      { "rank": 12, "team": "Go Ahead Eagles", "MP": 34, "MW": 8, "MD": 14, "ML": 12, "GF": 54, "GA": 53, "logo": "netherlands/goahead.png" },
      { "rank": 13, "team": "Excelsior", "MP": 34, "MW": 10, "MD": 8, "ML": 16, "GF": 43, "GA": 56, "logo": "netherlands/excelsior.png" },
      { "rank": 14, "team": "Telstar", "MP": 34, "MW": 9, "MD": 10, "ML": 15, "GF": 49, "GA": 55, "logo": "netherlands/telstar.png" },
      { "rank": 15, "team": "PEC Zwolle", "MP": 34, "MW": 9, "MD": 10, "ML": 15, "GF": 44, "GA": 71, "logo": "netherlands/peczwolle.png" },
      { "rank": 16, "team": "FC Volendam", "MP": 34, "MW": 8, "MD": 8, "ML": 18, "GF": 35, "GA": 55, "logo": "netherlands/fcvolendam.png" },
      { "rank": 17, "team": "NAC", "MP": 34, "MW": 6, "MD": 11, "ML": 17, "GF": 35, "GA": 58, "logo": "netherlands/nac.png" },
      { "rank": 18, "team": "Heracles", "MP": 34, "MW": 5, "MD": 4, "ML": 25, "GF": 35, "GA": 85, "logo": "netherlands/heracles.png" }
    ],
    "fixtures": [
      { "home": "Sparta Rotterdam", "away": "PEC Zwolle", "date": "2026-09-04" },
      { "home": "NEC", "away": "Feyenoord", "date": "2026-09-05" },
      { "home": "Utrecht", "away": "Go Ahead Eagles", "date": "2026-09-05" },
      { "home": "Ajax", "away": "PSV", "date": "2026-09-05" },
      { "home": "Willem II", "away": "Excelsior", "date": "2026-09-05" },
      { "home": "Groningen", "away": "Twente", "date": "2026-09-06" },
      { "home": "Telstar", "away": "Cambuur", "date": "2026-09-06" },
      { "home": "Heerenveen", "away": "AZ Alkmaar", "date": "2026-09-06" },
      { "home": "Den Haag", "away": "Fortuna Sittard", "date": "2026-09-06" },
      { "home": "NEC", "away": "Excelsior", "date": "2026-09-08" },
      { "home": "Twente", "away": "Telstar", "date": "2026-09-09" },
      { "home": "AZ Alkmaar", "away": "Willem II", "date": "2026-09-11" },
      { "home": "Twente", "away": "Den Haag", "date": "2026-09-12" },
      { "home": "Go Ahead Eagles", "away": "Groningen", "date": "2026-09-12" },
      { "home": "Fortuna Sittard", "away": "Ajax", "date": "2026-09-12" },
      { "home": "Cambuur", "away": "NEC", "date": "2026-09-12" },
      { "home": "Excelsior", "away": "Utrecht", "date": "2026-09-13" },
      { "home": "PSV", "away": "Sparta Rotterdam", "date": "2026-09-13" },
      { "home": "Heerenveen", "away": "Telstar", "date": "2026-09-13" },
      { "home": "PEC Zwolle", "away": "Feyenoord", "date": "2026-09-13" }
    ]
  },

    // ============================================================
    //  PORTUGAL - PRIMEIRA LIGA
    // ============================================================

    "Portuguese Primeira Liga": {
    "id": "portuguese-primeira-liga",
    "logo": "portugal/primeiraliga.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Porto", "MP": 34, "MW": 28, "MD": 4, "ML": 2, "GF": 66, "GA": 18, "logo": "portugal/porto.png" },
      { "rank": 2, "team": "SCP", "MP": 34, "MW": 25, "MD": 7, "ML": 2, "GF": 89, "GA": 24, "logo": "portugal/scp.png" },
      { "rank": 3, "team": "Benfica", "MP": 34, "MW": 23, "MD": 11, "ML": 0, "GF": 74, "GA": 25, "logo": "portugal/benfica.png" },
      { "rank": 4, "team": "Braga", "MP": 34, "MW": 16, "MD": 11, "ML": 7, "GF": 64, "GA": 36, "logo": "portugal/braga.png" },
      { "rank": 5, "team": "Famalicão", "MP": 34, "MW": 15, "MD": 11, "ML": 8, "GF": 42, "GA": 29, "logo": "portugal/famalicao.png" },
      { "rank": 6, "team": "Gil Vicente", "MP": 34, "MW": 13, "MD": 11, "ML": 10, "GF": 47, "GA": 38, "logo": "portugal/gilvicente.png" },
      { "rank": 7, "team": "Moreirense", "MP": 34, "MW": 12, "MD": 7, "ML": 15, "GF": 37, "GA": 49, "logo": "portugal/moreirense.png" },
      { "rank": 8, "team": "Arouca", "MP": 34, "MW": 12, "MD": 6, "ML": 16, "GF": 47, "GA": 64, "logo": "portugal/arouca.png" },
      { "rank": 9, "team": "Vitória SC", "MP": 34, "MW": 12, "MD": 6, "ML": 16, "GF": 39, "GA": 51, "logo": "portugal/vitoriasc.png" },
      { "rank": 10, "team": "Estoril", "MP": 34, "MW": 10, "MD": 9, "ML": 15, "GF": 54, "GA": 57, "logo": "portugal/estoril.png" },
      { "rank": 11, "team": "Alverca", "MP": 34, "MW": 10, "MD": 9, "ML": 15, "GF": 35, "GA": 52, "logo": "portugal/alverca.png" },
      { "rank": 12, "team": "Rio Ave", "MP": 34, "MW": 8, "MD": 12, "ML": 14, "GF": 35, "GA": 57, "logo": "portugal/rioave.png" },
      { "rank": 13, "team": "Santa Clara", "MP": 34, "MW": 9, "MD": 9, "ML": 16, "GF": 32, "GA": 41, "logo": "portugal/santaclara.png" },
      { "rank": 14, "team": "Nacional", "MP": 34, "MW": 9, "MD": 7, "ML": 18, "GF": 37, "GA": 45, "logo": "portugal/nacional.png" },
      { "rank": 15, "team": "Estrela Amadora", "MP": 34, "MW": 6, "MD": 12, "ML": 16, "GF": 38, "GA": 56, "logo": "portugal/estrelaamadora.png" },
      { "rank": 16, "team": "Casa Pia", "MP": 34, "MW": 6, "MD": 12, "ML": 16, "GF": 31, "GA": 57, "logo": "portugal/casapia.png" },
      { "rank": 17, "team": "Tondela", "MP": 34, "MW": 6, "MD": 10, "ML": 18, "GF": 27, "GA": 55, "logo": "portugal/tondela.png" },
      { "rank": 18, "team": "AVS", "MP": 34, "MW": 3, "MD": 12, "ML": 19, "GF": 27, "GA": 67, "logo": "portugal/avs.png" }
    ],
    "fixtures": [
      { "home": "Braga", "away": "Vitória SC", "date": "2026-08-31" },
      { "home": "Benfica", "away": "Estoril", "date": "2026-08-31" },
      { "home": "Porto", "away": "Moreirense", "date": "2026-09-04" },
      { "home": "Estrela Amadora", "away": "Famalicão", "date": "2026-09-05" },
      { "home": "Marítimo", "away": "Benfica", "date": "2026-09-05" },
      { "home": "Alverca", "away": "Braga", "date": "2026-09-05" },
      { "home": "SCP", "away": "Nacional", "date": "2026-09-05" },
      { "home": "Santa Clara", "away": "Rio Ave", "date": "2026-09-06" },
      { "home": "Vitória SC", "away": "Casa Pia", "date": "2026-09-06" },
      { "home": "Gil Vicente", "away": "Académico de Viseu FC", "date": "2026-09-06" },
      { "home": "Estoril", "away": "Arouca", "date": "2026-09-07" },
      { "home": "Moreirense", "away": "Benfica", "date": "2026-09-09" },
      { "home": "Estrela Amadora", "away": "Braga", "date": "2026-09-10" },
      { "home": "Braga", "away": "Estoril", "date": "2026-09-12" },
      { "home": "Casa Pia", "away": "Porto", "date": "2026-09-12" },
      { "home": "Nacional", "away": "Alverca", "date": "2026-09-12" },
      { "home": "Arouca", "away": "Santa Clara", "date": "2026-09-12" },
      { "home": "Benfica", "away": "Gil Vicente", "date": "2026-09-12" },
      { "home": "Académico de Viseu FC", "away": "Vitória SC", "date": "2026-09-12" },
      { "home": "Famalicão", "away": "SCP", "date": "2026-09-12" },
      { "home": "Rio Ave", "away": "Estrela Amadora", "date": "2026-09-12" },
      { "home": "Moreirense", "away": "Marítimo", "date": "2026-09-12" }
    ]
  },

    // ============================================================
    //  BELGIUM - PRO LEAGUE
    // ============================================================

    "Belgian Pro League": {
    "id": "belgian-pro-league",
    "logo": "belgium/proleague.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Union", "MP": 30, "MW": 19, "MD": 9, "ML": 2, "GF": 50, "GA": 17, "logo": "belgium/union.png" },
      { "rank": 2, "team": "Club Brugge", "MP": 30, "MW": 20, "MD": 3, "ML": 7, "GF": 59, "GA": 36, "logo": "belgium/clubbrugge.png" },
      { "rank": 3, "team": "STVV", "MP": 30, "MW": 18, "MD": 3, "ML": 9, "GF": 47, "GA": 35, "logo": "belgium/stvv.png" },
      { "rank": 4, "team": "Gent", "MP": 30, "MW": 13, "MD": 6, "ML": 11, "GF": 49, "GA": 43, "logo": "belgium/gent.png" },
      { "rank": 5, "team": "Mechelen", "MP": 30, "MW": 12, "MD": 9, "ML": 9, "GF": 39, "GA": 37, "logo": "belgium/mechelen.png" },
      { "rank": 6, "team": "Anderlecht", "MP": 30, "MW": 12, "MD": 8, "ML": 10, "GF": 43, "GA": 39, "logo": "belgium/anderlecht.png" },
      { "rank": 7, "team": "Genk", "MP": 30, "MW": 11, "MD": 9, "ML": 10, "GF": 46, "GA": 47, "logo": "belgium/genk.png" },
      { "rank": 8, "team": "Standard", "MP": 30, "MW": 11, "MD": 7, "ML": 12, "GF": 27, "GA": 35, "logo": "belgium/standard.png" },
      { "rank": 9, "team": "Westerlo", "MP": 30, "MW": 10, "MD": 9, "ML": 11, "GF": 36, "GA": 40, "logo": "belgium/westerlo.png" },
      { "rank": 10, "team": "Antwerp", "MP": 30, "MW": 9, "MD": 8, "ML": 13, "GF": 31, "GA": 32, "logo": "belgium/antwerp.png" },
      { "rank": 11, "team": "Charleroi", "MP": 30, "MW": 9, "MD": 7, "ML": 14, "GF": 38, "GA": 42, "logo": "belgium/charleroi.png" },
      { "rank": 12, "team": "OH Leuven", "MP": 30, "MW": 9, "MD": 7, "ML": 14, "GF": 32, "GA": 43, "logo": "belgium/ohleuven.png" },
      { "rank": 13, "team": "Zulte Waregem", "MP": 30, "MW": 8, "MD": 8, "ML": 14, "GF": 38, "GA": 47, "logo": "belgium/zultewaregem.png" },
      { "rank": 14, "team": "Cercle Brugge", "MP": 30, "MW": 7, "MD": 10, "ML": 13, "GF": 39, "GA": 47, "logo": "belgium/cerclebrugge.png" },
      { "rank": 15, "team": "La Louvière", "MP": 30, "MW": 6, "MD": 13, "ML": 11, "GF": 30, "GA": 37, "logo": "belgium/lalouviere.png" },
      { "rank": 16, "team": "Dender", "MP": 30, "MW": 3, "MD": 10, "ML": 17, "GF": 24, "GA": 51, "logo": "belgium/dender.png" }
    ],
    "fixtures": [
      { "home": "STVV", "away": "Union", "date": "2026-09-02" },
      { "home": "Gent", "away": "OH Leuven", "date": "2026-09-03" },
      { "home": "Anderlecht", "away": "Kortrijk", "date": "2026-09-03" },
      { "home": "Lommel", "away": "Club Brugge", "date": "2026-09-04" },
      { "home": "Charleroi", "away": "Union", "date": "2026-09-05" },
      { "home": "Mechelen", "away": "Westerlo", "date": "2026-09-05" },
      { "home": "STVV", "away": "La Louvière", "date": "2026-09-05" },
      { "home": "Standard", "away": "Antwerp", "date": "2026-09-05" },
      { "home": "Cercle Brugge", "away": "Gent", "date": "2026-09-06" },
      { "home": "Kortrijk", "away": "Zulte Waregem", "date": "2026-09-06" },
      { "home": "Anderlecht", "away": "Genk", "date": "2026-09-06" },
      { "home": "Beveren", "away": "OH Leuven", "date": "2026-09-06" },
      { "home": "Mechelen", "away": "Anderlecht", "date": "2026-09-11" },
      { "home": "Beveren", "away": "STVV", "date": "2026-09-12" },
      { "home": "Westerlo", "away": "Standard", "date": "2026-09-12" },
      { "home": "OH Leuven", "away": "Cercle Brugge", "date": "2026-09-12" },
      { "home": "Union", "away": "Lommel", "date": "2026-09-12" },
      { "home": "Club Brugge", "away": "Antwerp", "date": "2026-09-13" },
      { "home": "Genk", "away": "Gent", "date": "2026-09-13" },
      { "home": "Zulte Waregem", "away": "Charleroi", "date": "2026-09-13" },
      { "home": "La Louvière", "away": "Kortrijk", "date": "2026-09-13" }
    ]
  },

    // ============================================================
    //  CHILE - PRIMERA A
    // ============================================================

    "Chilean Primera A": {
        id: "chilean-primera-a",
        logo: "chile/primeraa.png",
        isBasketball: false,
        teams: [
            { rank: 1, team: "Colo Colo", MP: 20, MW: 16, MD: 1, ML: 3, GF: 42, GA: 20, logo: "chile/colocolo.png" },
            { rank: 2, team: "U. De Chile", MP: 20, MW: 10, MD: 6, ML: 4, GF: 27, GA: 15, logo: "chile/udechile.png" },
            { rank: 3, team: "Palestino", MP: 20, MW: 10, MD: 3, ML: 7, GF: 32, GA: 27, logo: "chile/palestino.png" },
            { rank: 4, team: "Nublense", MP: 19, MW: 8, MD: 8, ML: 3, GF: 26, GA: 23, logo: "chile/nublense.png" },
            { rank: 5, team: "U. Catolica", MP: 19, MW: 9, MD: 3, ML: 7, GF: 41, GA: 28, logo: "chile/ucatolica.png" },
            { rank: 6, team: "Limache", MP: 19, MW: 8, MD: 3, ML: 8, GF: 38, GA: 31, logo: "chile/limache.png" },
            { rank: 7, team: "Everton", MP: 19, MW: 7, MD: 6, ML: 6, GF: 28, GA: 22, logo: "chile/everton.png" },
            { rank: 8, team: "D. Concepcion", MP: 20, MW: 8, MD: 3, ML: 9, GF: 23, GA: 24, logo: "chile/dconcepcion.png" },
            { rank: 9, team: "Coquimbo", MP: 18, MW: 7, MD: 5, ML: 6, GF: 25, GA: 22, logo: "chile/coquimbo.png" },
            { rank: 10, team: "La Serena", MP: 20, MW: 5, MD: 9, ML: 6, GF: 31, GA: 34, logo: "chile/laserena.png" },
            { rank: 11, team: "O'Higgins", MP: 20, MW: 7, MD: 3, ML: 10, GF: 24, GA: 31, logo: "chile/ohiggins.png" },
            { rank: 12, team: "Huachipato", MP: 20, MW: 7, MD: 3, ML: 10, GF: 29, GA: 39, logo: "chile/huachipato.png" },
            { rank: 13, team: "A. Italiano", MP: 20, MW: 5, MD: 7, ML: 8, GF: 23, GA: 26, logo: "chile/aitaliano.png" },
            { rank: 14, team: "U. De Concepcion", MP: 18, MW: 5, MD: 4, ML: 9, GF: 13, GA: 30, logo: "chile/udeconcepcion.png" },
            { rank: 15, team: "Cobresal", MP: 20, MW: 5, MD: 3, ML: 12, GF: 29, GA: 39, logo: "chile/cobresal.png" },
            { rank: 16, team: "Union La Calera", MP: 20, MW: 3, MD: 5, ML: 12, GF: 17, GA: 37, logo: "chile/unionlacalera.png" }
        ],
        fixtures: [
            { home: "Coquimbo", away: "Huachipato", date: "2025-08-31" },
            { home: "Union La Calera", away: "La Serena", date: "2025-08-31" },
            { home: "U. Catolica", away: "O'Higgins", date: "2025-09-01" }
        ]
    },

    // ============================================================
    //  MEXICO - LIGA MX
    // ============================================================

    "Mexican Liga MX": {
        id: "liga-mx",
        logo: "mexico/ligamx.png",
        isBasketball: false,
        teams: [
            { rank: 1, team: "Toluca", MP: 17, MW: 11, MD: 4, ML: 2, GF: 43, GA: 18, logo: "mexico/toluca.png" },
            { rank: 2, team: "Tigres UANL", MP: 17, MW: 10, MD: 6, ML: 1, GF: 35, GA: 16, logo: "mexico/tigres.png" },
            { rank: 3, team: "Cruz Azul", MP: 17, MW: 10, MD: 5, ML: 2, GF: 32, GA: 20, logo: "mexico/cruzazul.png" },
            { rank: 4, team: "Club America", MP: 17, MW: 10, MD: 4, ML: 3, GF: 33, GA: 18, logo: "mexico/america.png" },
            { rank: 5, team: "Monterrey", MP: 17, MW: 9, MD: 4, ML: 4, GF: 33, GA: 29, logo: "mexico/monterrey.png" },
            { rank: 6, team: "Guadalajara Chivas", MP: 17, MW: 9, MD: 2, ML: 6, GF: 29, GA: 22, logo: "mexico/chivas.png" },
            { rank: 7, team: "Club Tijuana", MP: 17, MW: 6, MD: 6, ML: 5, GF: 29, GA: 23, logo: "mexico/tijuana.png" },
            { rank: 8, team: "Juarez", MP: 17, MW: 6, MD: 5, ML: 6, GF: 27, GA: 28, logo: "mexico/juarez.png" },
            { rank: 9, team: "Pachuca", MP: 17, MW: 6, MD: 4, ML: 7, GF: 21, GA: 21, logo: "mexico/pachuca.png" },
            { rank: 10, team: "UNAM Pumas", MP: 17, MW: 5, MD: 6, ML: 6, GF: 24, GA: 25, logo: "mexico/pumas.png" },
            { rank: 11, team: "Santos Laguna", MP: 17, MW: 6, MD: 2, ML: 9, GF: 22, GA: 28, logo: "mexico/santoslaguna.png" },
            { rank: 12, team: "Queretaro", MP: 17, MW: 6, MD: 2, ML: 9, GF: 19, GA: 29, logo: "mexico/queretaro.png" },
            { rank: 13, team: "Necaxa", MP: 17, MW: 4, MD: 5, ML: 8, GF: 24, GA: 32, logo: "mexico/necaxa.png" },
            { rank: 14, team: "Atlas", MP: 17, MW: 4, MD: 5, ML: 8, GF: 24, GA: 35, logo: "mexico/atlas.png" },
            { rank: 15, team: "Atl. San Luis", MP: 17, MW: 5, MD: 1, ML: 11, GF: 25, GA: 29, logo: "mexico/sanluis.png" },
            { rank: 16, team: "Mazatlan FC", MP: 17, MW: 2, MD: 8, ML: 7, GF: 20, GA: 29, logo: "mexico/mazatlan.png" },
            { rank: 17, team: "Club Leon", MP: 17, MW: 3, MD: 4, ML: 10, GF: 14, GA: 31, logo: "mexico/leon.png" },
            { rank: 18, team: "Puebla", MP: 17, MW: 3, MD: 3, ML: 11, GF: 21, GA: 42, logo: "mexico/puebla.png" }
        ],
        fixtures: [
            { home: "Toluca", away: "Juarez", date: "2026-08-31" },
            { home: "Monterrey", away: "Atl. San Luis", date: "2026-08-31" }
        ]
    },
	
	 // ============================================================
    //  BOLIVIAN - PRIMERA DIVISION
    // ============================================================

	
	"Bolivian Primera Division": {
    "id": "bolivian-primera-division",
    "logo": "bolivia/primera.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Bolívar", "MP": 17, "MW": 11, "MD": 3, "ML": 3, "GF": 44, "GA": 19, "logo": "bolivia/bolivar.png" },
      { "rank": 2, "team": "Always Ready", "MP": 17, "MW": 10, "MD": 6, "ML": 1, "GF": 35, "GA": 12, "logo": "bolivia/alwaysready.png" },
      { "rank": 3, "team": "The Strongest", "MP": 17, "MW": 9, "MD": 6, "ML": 2, "GF": 29, "GA": 20, "logo": "bolivia/thestrongest.png" },
      { "rank": 4, "team": "Oriente Petrolero", "MP": 17, "MW": 8, "MD": 3, "ML": 6, "GF": 32, "GA": 23, "logo": "bolivia/orientepetrolero.png" },
      { "rank": 5, "team": "Real Potosí", "MP": 17, "MW": 6, "MD": 7, "ML": 4, "GF": 22, "GA": 12, "logo": "bolivia/realpotosi.png" },
      { "rank": 6, "team": "Independiente Petrolero", "MP": 17, "MW": 7, "MD": 4, "ML": 6, "GF": 25, "GA": 25, "logo": "bolivia/independientepetrolero.png" },
      { "rank": 7, "team": "Guabirá", "MP": 17, "MW": 7, "MD": 4, "ML": 6, "GF": 28, "GA": 31, "logo": "bolivia/guabira.png" },
      { "rank": 8, "team": "Aurora", "MP": 17, "MW": 5, "MD": 9, "ML": 3, "GF": 25, "GA": 24, "logo": "bolivia/aurora.png" },
      { "rank": 9, "team": "Blooming", "MP": 17, "MW": 5, "MD": 8, "ML": 4, "GF": 22, "GA": 18, "logo": "bolivia/blooming.png" },
      { "rank": 10, "team": "Nacional Potosí", "MP": 17, "MW": 6, "MD": 3, "ML": 8, "GF": 25, "GA": 23, "logo": "bolivia/nacionalpotosi.png" },
      { "rank": 11, "team": "Real Oruro", "MP": 17, "MW": 5, "MD": 3, "ML": 9, "GF": 30, "GA": 43, "logo": "bolivia/realoruro.png" },
      { "rank": 12, "team": "Academia del Balompie Boliviano", "MP": 17, "MW": 5, "MD": 2, "ML": 10, "GF": 27, "GA": 37, "logo": "bolivia/academiaboliviano.png" },
      { "rank": 13, "team": "SA Bulo Bulo", "MP": 17, "MW": 5, "MD": 2, "ML": 10, "GF": 18, "GA": 35, "logo": "bolivia/sabulobulo.png" },
      { "rank": 14, "team": "Real Tomayapo", "MP": 17, "MW": 4, "MD": 4, "ML": 9, "GF": 13, "GA": 32, "logo": "bolivia/realtomayapo.png" },
      { "rank": 15, "team": "Gualberto Villarroel San José", "MP": 17, "MW": 2, "MD": 8, "ML": 7, "GF": 19, "GA": 27, "logo": "bolivia/gualbertovillarroel.png" },
      { "rank": 16, "team": "Universitario de Vinto", "MP": 17, "MW": 4, "MD": 2, "ML": 11, "GF": 22, "GA": 35, "logo": "bolivia/universitariovinto.png" }
    ],
    "fixtures": [
      { "home": "Real Oruro", "away": "SA Bulo Bulo", "date": "2026-09-04" },
      { "home": "Academia del Balompie Boliviano", "away": "Universitario de Vinto", "date": "2026-09-04" },
      { "home": "Guabirá", "away": "Real Potosí", "date": "2026-09-05" },
      { "home": "Aurora", "away": "Gualberto Villarroel San José", "date": "2026-09-05" },
      { "home": "Oriente Petrolero", "away": "Always Ready", "date": "2026-09-06" },
      { "home": "Independiente Petrolero", "away": "Bolívar", "date": "2026-09-06" },
      { "home": "The Strongest", "away": "Real Tomayapo", "date": "2026-09-06" },
      { "home": "Nacional Potosí", "away": "Blooming", "date": "2026-09-07" },
      { "home": "SA Bulo Bulo", "away": "Aurora", "date": "2026-09-11" },
      { "home": "Real Potosí", "away": "Oriente Petrolero", "date": "2026-09-12" },
      { "home": "Gualberto Villarroel San José", "away": "Nacional Potosí", "date": "2026-09-12" },
      { "home": "The Strongest", "away": "Real Oruro", "date": "2026-09-12" },
      { "home": "Blooming", "away": "Academia del Balompie Boliviano", "date": "2026-09-13" },
      { "home": "Always Ready", "away": "Guabirá", "date": "2026-09-13" },
      { "home": "Universitario de Vinto", "away": "Independiente Petrolero", "date": "2026-09-13" },
      { "home": "Real Tomayapo", "away": "Bolívar", "date": "2026-09-14" }
    ]
  },

    // ============================================================
    //  COLOMBIA - PRIMERA A
    // ============================================================

    "Colombia Primera A": {
        id: "colombia-primera-a",
        logo: "colombia/primeraa.png",
        isBasketball: false,
        season: "2026",
        teams: [
            { rank: 1, team: "Atl. Nacional", MP: 19, MW: 13, MD: 1, ML: 5, GF: 35, GA: 15, logo: "colombia/atlnacional.png" },
            { rank: 2, team: "Junior", MP: 19, MW: 11, MD: 2, ML: 6, GF: 31, GA: 24, logo: "colombia/junior.png" },
            { rank: 3, team: "Deportivo Pasto", MP: 19, MW: 10, MD: 4, ML: 5, GF: 29, GA: 25, logo: "colombia/depor pasto.png" },
            { rank: 4, team: "América de Cali", MP: 19, MW: 10, MD: 3, ML: 6, GF: 25, GA: 15, logo: "colombia/americacali.png" },
            { rank: 5, team: "Once Caldas", MP: 19, MW: 8, MD: 9, ML: 2, GF: 31, GA: 22, logo: "colombia/oncecaldas.png" },
            { rank: 6, team: "Tolima", MP: 19, MW: 8, MD: 7, ML: 4, GF: 27, GA: 17, logo: "colombia/tolima.png" },
            { rank: 7, team: "Santa Fe", MP: 19, MW: 7, MD: 8, ML: 4, GF: 29, GA: 22, logo: "colombia/santafe.png" },
            { rank: 8, team: "Internacional de Bogotá", MP: 19, MW: 7, MD: 7, ML: 5, GF: 26, GA: 26, logo: "colombia/internacionalbogota.png" },
            { rank: 9, team: "Deportivo Cali", MP: 19, MW: 7, MD: 6, ML: 6, GF: 20, GA: 16, logo: "colombia/depor cali.png" },
            { rank: 10, team: "Millonarios", MP: 19, MW: 7, MD: 5, ML: 7, GF: 31, GA: 23, logo: "colombia/millonarios.png" },
            { rank: 11, team: "Independiente Medellín", MP: 19, MW: 7, MD: 5, ML: 7, GF: 26, GA: 24, logo: "colombia/indemedellin.png" },
            { rank: 12, team: "Rionegro Águilas", MP: 19, MW: 7, MD: 5, ML: 7, GF: 20, GA: 25, logo: "colombia/rionegroaguilas.png" },
            { rank: 13, team: "Atlético Bucaramanga", MP: 19, MW: 5, MD: 8, ML: 6, GF: 26, GA: 20, logo: "colombia/atlbucaramanga.png" },
            { rank: 14, team: "Llaneros FC", MP: 19, MW: 4, MD: 10, ML: 5, GF: 17, GA: 20, logo: "colombia/llaneros.png" },
            { rank: 15, team: "Fortaleza FC", MP: 19, MW: 5, MD: 7, ML: 7, GF: 22, GA: 27, logo: "colombia/fortalezafc.png" },
            { rank: 16, team: "Jaguares de Córdoba", MP: 19, MW: 5, MD: 3, ML: 11, GF: 20, GA: 33, logo: "colombia/jaguares.png" },
            { rank: 17, team: "Alianza", MP: 19, MW: 3, MD: 8, ML: 8, GF: 13, GA: 27, logo: "colombia/alianza.png" },
            { rank: 18, team: "Boyacá Chicó FC", MP: 19, MW: 5, MD: 2, ML: 12, GF: 15, GA: 32, logo: "colombia/boyacachico.png" },
            { rank: 19, team: "Cúcuta Deportivo", MP: 19, MW: 3, MD: 7, ML: 9, GF: 22, GA: 35, logo: "colombia/cucuta.png" },
            { rank: 20, team: "Deportivo Pereira", MP: 19, MW: 1, MD: 7, ML: 11, GF: 15, GA: 32, logo: "colombia/depor pereira.png" }
        ],
        fixtures: [
            { home: "Millonarios", away: "Internacional de Bogotá", date: "2026-08-31" },
            { home: "Tolima", away: "Cúcuta Deportivo", date: "2026-08-31" }
        ]
    },

    // ============================================================
    //  SWEDEN - ALLSVENSKAN
    // ============================================================

    "Sweden Allsvenskan": {
        id: "allsvenskan",
        logo: "sweden/allsvenskan.png",
        isBasketball: false,
        teams: [
            { rank: 1, team: "Sirius", MP: 17, MW: 13, MD: 3, ML: 1, GF: 47, GA: 23, logo: "sweden/sirius.png" },
            { rank: 2, team: "Hammarby", MP: 17, MW: 10, MD: 3, ML: 4, GF: 40, GA: 15, logo: "sweden/hammarby.png" },
            { rank: 3, team: "Häcken", MP: 17, MW: 7, MD: 7, ML: 3, GF: 29, GA: 26, logo: "sweden/hacken.png" },
            { rank: 4, team: "AIK", MP: 17, MW: 8, MD: 4, ML: 5, GF: 25, GA: 25, logo: "sweden/aik.png" },
            { rank: 5, team: "IF Elfsborg", MP: 17, MW: 7, MD: 6, ML: 4, GF: 24, GA: 18, logo: "sweden/elfsborg.png" },
            { rank: 6, team: "Djurgården", MP: 16, MW: 8, MD: 2, ML: 6, GF: 34, GA: 19, logo: "sweden/djurgarden.png" },
            { rank: 7, team: "Malmö", MP: 17, MW: 8, MD: 2, ML: 7, GF: 32, GA: 27, logo: "sweden/malmo.png" },
            { rank: 8, team: "Västerås", MP: 17, MW: 7, MD: 4, ML: 6, GF: 25, GA: 32, logo: "sweden/vasteras.png" },
            { rank: 9, team: "GAIS", MP: 17, MW: 6, MD: 5, ML: 6, GF: 21, GA: 16, logo: "sweden/gais.png" },
            { rank: 10, team: "IF Brommapojkarna", MP: 17, MW: 5, MD: 6, ML: 6, GF: 25, GA: 27, logo: "sweden/brommapojkarna.png" },
            { rank: 11, team: "Mjällby", MP: 16, MW: 5, MD: 5, ML: 6, GF: 24, GA: 23, logo: "sweden/mjallby.png" },
            { rank: 12, team: "Göteborg", MP: 17, MW: 5, MD: 4, ML: 8, GF: 22, GA: 38, logo: "sweden/goteborg.png" },
            { rank: 13, team: "Kalmar", MP: 17, MW: 5, MD: 3, ML: 9, GF: 21, GA: 28, logo: "sweden/kalmar.png" },
            { rank: 14, team: "Degerfors", MP: 17, MW: 4, MD: 4, ML: 9, GF: 17, GA: 27, logo: "sweden/degerfors.png" },
            { rank: 15, team: "ÖIS", MP: 17, MW: 3, MD: 4, ML: 10, GF: 21, GA: 40, logo: "sweden/ois.png" },
            { rank: 16, team: "Halmstad", MP: 17, MW: 1, MD: 4, ML: 12, GF: 11, GA: 34, logo: "sweden/halmstad.png" }
        ],
        fixtures: [
            { home: "GAIS", away: "IF Brommapojkarna", date: "2026-08-31" },
            { home: "Sirius", away: "Malmö", date: "2026-08-31" },
            { home: "Djurgården", away: "Mjällby", date: "2026-08-31" }
        ]
    }
};

// ============================================================
//  NORMALIZE ALL DATA ON LOAD
// ============================================================

// Run normalization to ensure all team names are consistent
normalizeLeaguesData();

// ============================================================
//  EXPORT FOR USE
// ============================================================

console.log("✅ Data loaded successfully!", Object.keys(leaguesData).length, "leagues");
console.log("✅ Team name normalization applied");