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
    //  ENGLAND
    // ============================================================

   "English Premier League": {
    "id": "english-premier-league",
    "logo": "england/premierleague.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Arsenal", "MP": 38, "MW": 26, "MD": 7, "ML": 5, "GF": 71, "GA": 27, "logo": "england/arsenal.png" },
      { "rank": 2, "team": "Man City", "MP": 38, "MW": 23, "MD": 9, "ML": 6, "GF": 77, "GA": 35, "logo": "england/mancity.png" },
      { "rank": 3, "team": "Man United", "MP": 38, "MW": 20, "MD": 11, "ML": 7, "GF": 69, "GA": 50, "logo": "england/manutd.png" },
      { "rank": 4, "team": "Aston Villa", "MP": 38, "MW": 19, "MD": 8, "ML": 11, "GF": 56, "GA": 49, "logo": "england/astonvilla.png" },
      { "rank": 5, "team": "Liverpool", "MP": 38, "MW": 17, "MD": 9, "ML": 12, "GF": 63, "GA": 53, "logo": "england/liverpool.png" },
      { "rank": 6, "team": "Bournemouth", "MP": 38, "MW": 13, "MD": 18, "ML": 7, "GF": 58, "GA": 54, "logo": "england/bournemouth.png" },
      { "rank": 7, "team": "Sunderland", "MP": 38, "MW": 14, "MD": 12, "ML": 12, "GF": 42, "GA": 48, "logo": "england/sunderland.png" },
      { "rank": 8, "team": "Brighton", "MP": 38, "MW": 14, "MD": 11, "ML": 13, "GF": 52, "GA": 46, "logo": "england/brighton.png" },
      { "rank": 9, "team": "Brentford", "MP": 38, "MW": 14, "MD": 11, "ML": 13, "GF": 55, "GA": 52, "logo": "england/brentford.png" },
      { "rank": 10, "team": "Chelsea", "MP": 38, "MW": 14, "MD": 10, "ML": 14, "GF": 58, "GA": 52, "logo": "england/chelsea.png" },
      { "rank": 11, "team": "Fulham", "MP": 38, "MW": 15, "MD": 7, "ML": 16, "GF": 47, "GA": 51, "logo": "england/fulham.png" },
      { "rank": 12, "team": "Newcastle", "MP": 38, "MW": 14, "MD": 7, "ML": 17, "GF": 53, "GA": 55, "logo": "england/newcastle.png" },
      { "rank": 13, "team": "Everton", "MP": 38, "MW": 13, "MD": 10, "ML": 15, "GF": 47, "GA": 50, "logo": "england/everton.png" },
      { "rank": 14, "team": "Leeds", "MP": 38, "MW": 11, "MD": 14, "ML": 13, "GF": 49, "GA": 56, "logo": "england/leeds.png" },
      { "rank": 15, "team": "Palace", "MP": 38, "MW": 11, "MD": 12, "ML": 15, "GF": 41, "GA": 51, "logo": "england/palace.png" },
      { "rank": 16, "team": "Nottm Forest", "MP": 38, "MW": 11, "MD": 11, "ML": 16, "GF": 48, "GA": 51, "logo": "england/nottmforest.png" },
      { "rank": 17, "team": "Spurs", "MP": 38, "MW": 10, "MD": 11, "ML": 17, "GF": 48, "GA": 57, "logo": "england/spurs.png" },
      { "rank": 18, "team": "West Ham", "MP": 38, "MW": 10, "MD": 9, "ML": 19, "GF": 46, "GA": 65, "logo": "england/westham.png" },
      { "rank": 19, "team": "Burnley", "MP": 38, "MW": 4, "MD": 10, "ML": 24, "GF": 38, "GA": 75, "logo": "england/burnley.png" },
      { "rank": 20, "team": "Wolves", "MP": 38, "MW": 3, "MD": 11, "ML": 24, "GF": 27, "GA": 68, "logo": "england/wolves.png" }
    ],
    "fixtures": [
      { "home": "Leeds", "away": "Newcastle", "date": "2026-09-14" },
      { "home": "Brentford", "away": "Chelsea", "date": "2026-09-18" },
      { "home": "Spurs", "away": "Aston Villa", "date": "2026-09-19" },
      { "home": "Everton", "away": "Ipswich Town", "date": "2026-09-19" },
      { "home": "Brighton", "away": "Arsenal", "date": "2026-09-19" },
      { "home": "Newcastle", "away": "Hull", "date": "2026-09-19" },
      { "home": "Nottm Forest", "away": "Coventry", "date": "2026-09-19" },
      { "home": "Bournemouth", "away": "Liverpool", "date": "2026-09-20" },
      { "home": "Man City", "away": "Sunderland", "date": "2026-09-20" },
      { "home": "Leeds", "away": "Palace", "date": "2026-09-20" },
      { "home": "Fulham", "away": "Man Utd", "date": "2026-09-20" }
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
      { "home": "Villarreal", "away": "Betis", "date": "2026-09-14" },
      { "home": "Rayo Vallecano", "away": "Espanyol", "date": "2026-09-15" },
      { "home": "Alavés", "away": "Valencia", "date": "2026-09-15" },
      { "home": "Elche", "away": "Real Madrid", "date": "2026-09-15" },
      { "home": "Deportivo", "away": "Sevilla", "date": "2026-09-16" },
      { "home": "Atlético Madrid", "away": "Osasuna", "date": "2026-09-16" },
      { "home": "Levante", "away": "Athletic", "date": "2026-09-16" },
      { "home": "Barcelona", "away": "Racing Santander", "date": "2026-09-16" },
      { "home": "Betis", "away": "Getafe", "date": "2026-09-17" },
      { "home": "Málaga", "away": "Villarreal", "date": "2026-09-17" },
      { "home": "Espanyol", "away": "Elche", "date": "2026-09-18" },
      { "home": "Osasuna", "away": "Rayo Vallecano", "date": "2026-09-19" },
      { "home": "Athletic", "away": "Alavés", "date": "2026-09-19" },
      { "home": "Celta", "away": "Racing Santander", "date": "2026-09-19" },
      { "home": "Sevilla", "away": "Barcelona", "date": "2026-09-19" },
      { "home": "Getafe", "away": "Málaga", "date": "2026-09-20" },
      { "home": "Atlético Madrid", "away": "Real Madrid", "date": "2026-09-20" },
      { "home": "Villarreal", "away": "Levante", "date": "2026-09-20" },
      { "home": "Deportivo", "away": "Betis", "date": "2026-09-20" },
      { "home": "Valencia", "away": "Real Sociedad", "date": "2026-09-20" }
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
      { "home": "Bayern", "away": "Union Berlin", "date": "2026-09-18" },
      { "home": "Werder", "away": "Augsburg", "date": "2026-09-19" },
      { "home": "Mönchengladbach", "away": "Mainz", "date": "2026-09-19" },
      { "home": "Hamburg", "away": "Köln", "date": "2026-09-19" },
      { "home": "Eintracht Frankfurt", "away": "Freiburg", "date": "2026-09-19" },
      { "home": "VfB Stuttgart", "away": "Dortmund", "date": "2026-09-19" },
      { "home": "Leverkusen", "away": "RB Leipzig", "date": "2026-09-20" },
      { "home": "Schalke", "away": "SV Elversberg", "date": "2026-09-20" },
      { "home": "Paderborn", "away": "Hoffenheim", "date": "2026-09-20" },
      { "home": "Dortmund", "away": "Werder", "date": "2026-10-09" },
      { "home": "Mainz", "away": "Leverkusen", "date": "2026-10-10" },
      { "home": "Hoffenheim", "away": "Hamburg", "date": "2026-10-10" },
      { "home": "Union Berlin", "away": "SV Elversberg", "date": "2026-10-10" },
      { "home": "Paderborn", "away": "VfB Stuttgart", "date": "2026-10-10" },
      { "home": "Augsburg", "away": "Bayern", "date": "2026-10-10" },
      { "home": "RB Leipzig", "away": "Eintracht Frankfurt", "date": "2026-10-10" },
      { "home": "Köln", "away": "Mönchengladbach", "date": "2026-10-11" },
      { "home": "Freiburg", "away": "Schalke", "date": "2026-10-11" }
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
      { "home": "Monza", "away": "Sassuolo", "date": "2026-09-18" },
      { "home": "Udinese", "away": "Cagliari", "date": "2026-09-19" },
      { "home": "Bologna", "away": "Torino", "date": "2026-09-19" },
      { "home": "Roma", "away": "Inter", "date": "2026-09-19" },
      { "home": "Venezia", "away": "Lazio", "date": "2026-09-19" },
      { "home": "Fiorentina", "away": "Napoli", "date": "2026-09-20" },
      { "home": "Parma", "away": "Genoa", "date": "2026-09-20" },
      { "home": "Frosinone", "away": "Como", "date": "2026-09-20" },
      { "home": "Juventus", "away": "Atalanta", "date": "2026-09-20" },
      { "home": "Milan", "away": "Lecce", "date": "2026-09-20" },
      { "home": "Genoa", "away": "Fiorentina", "date": "2026-10-10" },
      { "home": "Inter", "away": "Parma", "date": "2026-10-10" },
      { "home": "Napoli", "away": "Frosinone", "date": "2026-10-10" },
      { "home": "Como", "away": "Roma", "date": "2026-10-11" },
      { "home": "Lazio", "away": "Monza", "date": "2026-10-11" },
      { "home": "Lecce", "away": "Bologna", "date": "2026-10-11" },
      { "home": "Sassuolo", "away": "Milan", "date": "2026-10-11" },
      { "home": "Cagliari", "away": "Juventus", "date": "2026-10-11" },
      { "home": "Atalanta", "away": "Venezia", "date": "2026-10-12" },
      { "home": "Torino", "away": "Udinese", "date": "2026-10-12" }
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
      { "home": "Monaco", "away": "Lens", "date": "2026-09-18" },
      { "home": "Paris FC", "away": "Strasbourg", "date": "2026-09-19" },
      { "home": "Le Mans", "away": "Lorient", "date": "2026-09-19" },
      { "home": "OL", "away": "Rennes", "date": "2026-09-19" },
      { "home": "Toulouse", "away": "Le Havre", "date": "2026-09-19" },
      { "home": "Angers", "away": "Troyes", "date": "2026-09-19" },
      { "home": "Auxerre", "away": "Brest", "date": "2026-09-20" },
      { "home": "Nice", "away": "LOSC", "date": "2026-09-20" },
      { "home": "Marseille", "away": "PSG", "date": "2026-09-20" },
      { "home": "Lens", "away": "OL", "date": "2026-10-09" },
      { "home": "LOSC", "away": "Le Havre", "date": "2026-10-10" },
      { "home": "Lorient", "away": "Paris FC", "date": "2026-10-10" },
      { "home": "Monaco", "away": "Toulouse", "date": "2026-10-10" },
      { "home": "Brest", "away": "Angers", "date": "2026-10-10" },
      { "home": "PSG", "away": "Le Mans", "date": "2026-10-10" },
      { "home": "Nice", "away": "Strasbourg", "date": "2026-10-11" },
      { "home": "Rennes", "away": "Auxerre", "date": "2026-10-11" },
      { "home": "Troyes", "away": "Marseille", "date": "2026-10-11" }
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
      { "home": "Ajax", "away": "Willem II", "date": "2026-09-15" },
      { "home": "Groningen", "away": "PEC Zwolle", "date": "2026-09-18" },
      { "home": "Den Haag", "away": "Cambuur", "date": "2026-09-19" },
      { "home": "Sparta Rotterdam", "away": "Heerenveen", "date": "2026-09-19" },
      { "home": "Ajax", "away": "Excelsior", "date": "2026-09-19" },
      { "home": "Willem II", "away": "Fortuna Sittard", "date": "2026-09-19" },
      { "home": "Feyenoord", "away": "Utrecht", "date": "2026-09-20" },
      { "home": "Twente", "away": "PSV", "date": "2026-09-20" },
      { "home": "AZ Alkmaar", "away": "Telstar", "date": "2026-09-20" },
      { "home": "NEC", "away": "Go Ahead Eagles", "date": "2026-09-20" },
      { "home": "PSV", "away": "Heerenveen", "date": "2026-10-09" },
      { "home": "Go Ahead Eagles", "away": "Sparta Rotterdam", "date": "2026-10-10" },
      { "home": "Feyenoord", "away": "AZ Alkmaar", "date": "2026-10-10" },
      { "home": "Fortuna Sittard", "away": "Twente", "date": "2026-10-10" },
      { "home": "Ajax", "away": "NEC", "date": "2026-10-10" },
      { "home": "Utrecht", "away": "Willem II", "date": "2026-10-11" },
      { "home": "PEC Zwolle", "away": "Cambuur", "date": "2026-10-11" },
      { "home": "Telstar", "away": "Den Haag", "date": "2026-10-11" },
      { "home": "Excelsior", "away": "Groningen", "date": "2026-10-11" }
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
      { "home": "Moreirense", "away": "Marítimo", "date": "2026-09-14" },
      { "home": "Braga", "away": "Estoril", "date": "2026-09-14" },
      { "home": "Gil Vicente", "away": "Marítimo", "date": "2026-09-19" },
      { "home": "Nacional", "away": "Famalicão", "date": "2026-09-19" },
      { "home": "Alverca", "away": "Rio Ave", "date": "2026-09-19" },
      { "home": "SCP", "away": "Arouca", "date": "2026-09-19" },
      { "home": "Estrela Amadora", "away": "Académico de Viseu FC", "date": "2026-09-20" },
      { "home": "Vitória SC", "away": "Moreirense", "date": "2026-09-20" },
      { "home": "Santa Clara", "away": "Braga", "date": "2026-09-20" },
      { "home": "Estoril", "away": "Casa Pia", "date": "2026-09-20" },
      { "home": "Porto", "away": "Benfica", "date": "2026-09-20" },
      { "home": "Moreirense", "away": "Gil Vicente", "date": "2026-10-09" },
      { "home": "Braga", "away": "SCP", "date": "2026-10-09" },
      { "home": "Famalicão", "away": "Alverca", "date": "2026-10-10" },
      { "home": "Casa Pia", "away": "Santa Clara", "date": "2026-10-10" },
      { "home": "Marítimo", "away": "Porto", "date": "2026-10-10" },
      { "home": "Académico de Viseu FC", "away": "Estoril", "date": "2026-10-10" },
      { "home": "Rio Ave", "away": "Nacional", "date": "2026-10-11" },
      { "home": "Benfica", "away": "Vitória SC", "date": "2026-10-11" },
      { "home": "Arouca", "away": "Estrela Amadora", "date": "2026-10-11" }
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
      { "home": "Gent", "away": "Standard", "date": "2026-09-18" },
      { "home": "OH Leuven", "away": "La Louvière", "date": "2026-09-19" },
      { "home": "Charleroi", "away": "Cercle Brugge", "date": "2026-09-19" },
      { "home": "Anderlecht", "away": "Zulte Waregem", "date": "2026-09-19" },
      { "home": "Lommel", "away": "Mechelen", "date": "2026-09-19" },
      { "home": "Antwerp", "away": "Union", "date": "2026-09-20" },
      { "home": "STVV", "away": "Westerlo", "date": "2026-09-20" },
      { "home": "Club Brugge", "away": "Genk", "date": "2026-09-20" },
      { "home": "Kortrijk", "away": "Beveren", "date": "2026-09-20" },
      { "home": "Union", "away": "OH Leuven", "date": "2026-10-09" },
      { "home": "Westerlo", "away": "Antwerp", "date": "2026-10-09" },
      { "home": "Mechelen", "away": "STVV", "date": "2026-10-09" },
      { "home": "Standard", "away": "Charleroi", "date": "2026-10-09" },
      { "home": "Beveren", "away": "Lommel", "date": "2026-10-09" },
      { "home": "Cercle Brugge", "away": "Anderlecht", "date": "2026-10-10" },
      { "home": "La Louvière", "away": "Club Brugge", "date": "2026-10-10" },
      { "home": "Zulte Waregem", "away": "Gent", "date": "2026-10-10" }
    ]
  },
     // ============================================================
//  SWEDEN - ALLSVENSKAN
// ============================================================

"Sweden Allsvenskan": {
    "id": "sweden-allsvenskan",
    "logo": "sweden/allsvenskan.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Mjällby", "MP": 30, "MW": 20, "MD": 5, "ML": 5, "GF": 55, "GA": 28, "logo": "sweden/mjallby.png" },
      { "rank": 2, "team": "Häcken", "MP": 30, "MW": 18, "MD": 7, "ML": 5, "GF": 62, "GA": 34, "logo": "sweden/hacken.png" },
      { "rank": 3, "team": "AIK", "MP": 30, "MW": 17, "MD": 8, "ML": 5, "GF": 48, "GA": 25, "logo": "sweden/aik.png" },
      { "rank": 4, "team": "Djurgården", "MP": 30, "MW": 16, "MD": 7, "ML": 7, "GF": 51, "GA": 32, "logo": "sweden/djurgarden.png" },
      { "rank": 5, "team": "Malmö", "MP": 30, "MW": 15, "MD": 8, "ML": 7, "GF": 53, "GA": 36, "logo": "sweden/malmo.png" },
      { "rank": 6, "team": "Hammarby", "MP": 30, "MW": 14, "MD": 9, "ML": 7, "GF": 49, "GA": 34, "logo": "sweden/hammarby.png" },
      { "rank": 7, "team": "IF Elfsborg", "MP": 30, "MW": 14, "MD": 6, "ML": 10, "GF": 52, "GA": 41, "logo": "sweden/elfsborg.png" },
      { "rank": 8, "team": "Göteborg", "MP": 30, "MW": 12, "MD": 9, "ML": 9, "GF": 41, "GA": 37, "logo": "sweden/goteborg.png" },
      { "rank": 9, "team": "GAIS", "MP": 30, "MW": 11, "MD": 10, "ML": 9, "GF": 38, "GA": 35, "logo": "sweden/gais.png" },
      { "rank": 10, "team": "Kalmar", "MP": 30, "MW": 10, "MD": 10, "ML": 10, "GF": 36, "GA": 38, "logo": "sweden/kalmar.png" },
      { "rank": 11, "team": "Halmstad", "MP": 30, "MW": 9, "MD": 10, "ML": 11, "GF": 32, "GA": 39, "logo": "sweden/halmstad.png" },
      { "rank": 12, "team": "Sirius", "MP": 30, "MW": 9, "MD": 8, "ML": 13, "GF": 37, "GA": 45, "logo": "sweden/sirius.png" },
      { "rank": 13, "team": "IF Brommapojkarna", "MP": 30, "MW": 8, "MD": 9, "ML": 13, "GF": 35, "GA": 46, "logo": "sweden/brommapojkarna.png" },
      { "rank": 14, "team": "ÖIS", "MP": 30, "MW": 7, "MD": 10, "ML": 13, "GF": 31, "GA": 44, "logo": "sweden/ois.png" },
      { "rank": 15, "team": "Degerfors", "MP": 30, "MW": 6, "MD": 9, "ML": 15, "GF": 28, "GA": 49, "logo": "sweden/degerfors.png" },
      { "rank": 16, "team": "Västerås", "MP": 30, "MW": 4, "MD": 7, "ML": 19, "GF": 24, "GA": 58, "logo": "sweden/vasteras.png" }
    ],
    "fixtures": [
      { "home": "Djurgården", "away": "GAIS", "date": "2026-09-14" },
      { "home": "Sirius", "away": "Degerfors", "date": "2026-09-14" },
      { "home": "AIK", "away": "Mjällby", "date": "2026-09-16" },
      { "home": "IF Brommapojkarna", "away": "Göteborg", "date": "2026-09-19" },
      { "home": "Västerås", "away": "Malmö", "date": "2026-09-19" },
      { "home": "ÖIS", "away": "Sirius", "date": "2026-09-19" },
      { "home": "Halmstad", "away": "AIK", "date": "2026-09-20" },
      { "home": "Kalmar", "away": "Häcken", "date": "2026-09-20" },
      { "home": "Djurgården", "away": "IF Elfsborg", "date": "2026-09-20" },
      { "home": "Degerfors", "away": "Hammarby", "date": "2026-09-20" },
      { "home": "Mjällby", "away": "GAIS", "date": "2026-09-20" },
      { "home": "Göteborg", "away": "Västerås", "date": "2026-10-09" },
      { "home": "GAIS", "away": "Sirius", "date": "2026-10-10" },
      { "home": "AIK", "away": "IF Brommapojkarna", "date": "2026-10-10" },
      { "home": "Mjällby", "away": "Degerfors", "date": "2026-10-10" },
      { "home": "Hammarby", "away": "Djurgården", "date": "2026-10-11" },
      { "home": "Häcken", "away": "ÖIS", "date": "2026-10-11" },
      { "home": "Malmö", "away": "Kalmar", "date": "2026-10-12" },
      { "home": "IF Elfsborg", "away": "Halmstad", "date": "2026-10-12" }
    ]
  },
 // ============================================================
    //  ENGLISH CHAMPIONSHIP
    // ============================================================
"English Championship": {
    "id": "english-championship",
    "logo": "england/championship.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Burnley", "MP": 46, "MW": 29, "MD": 12, "ML": 5, "GF": 87, "GA": 39, "logo": "england/burnley.png" },
      { "rank": 2, "team": "Sheffield United", "MP": 46, "MW": 28, "MD": 9, "ML": 9, "GF": 78, "GA": 42, "logo": "england/sheffieldutd.png" },
      { "rank": 3, "team": "West Brom", "MP": 46, "MW": 25, "MD": 12, "ML": 9, "GF": 72, "GA": 45, "logo": "england/westbrom.png" },
      { "rank": 4, "team": "Southampton", "MP": 46, "MW": 24, "MD": 13, "ML": 9, "GF": 81, "GA": 50, "logo": "england/southampton.png" },
      { "rank": 5, "team": "Norwich City", "MP": 46, "MW": 23, "MD": 11, "ML": 12, "GF": 76, "GA": 52, "logo": "england/norwich.png" },
      { "rank": 6, "team": "Wolves", "MP": 46, "MW": 21, "MD": 13, "ML": 12, "GF": 68, "GA": 48, "logo": "england/wolves.png" },
      { "rank": 7, "team": "Birmingham", "MP": 46, "MW": 20, "MD": 14, "ML": 12, "GF": 63, "GA": 55, "logo": "england/birmingham.png" },
      { "rank": 8, "team": "Middlesbrough", "MP": 46, "MW": 19, "MD": 12, "ML": 15, "GF": 58, "GA": 53, "logo": "england/middlesbrough.png" },
      { "rank": 9, "team": "Blackburn Rovers", "MP": 46, "MW": 18, "MD": 13, "ML": 15, "GF": 62, "GA": 59, "logo": "england/blackburn.png" },
      { "rank": 10, "team": "Watford", "MP": 46, "MW": 17, "MD": 14, "ML": 15, "GF": 55, "GA": 54, "logo": "england/watford.png" },
      { "rank": 11, "team": "Stoke City", "MP": 46, "MW": 16, "MD": 16, "ML": 14, "GF": 51, "GA": 49, "logo": "england/stoke.png" },
      { "rank": 12, "team": "West Ham", "MP": 46, "MW": 16, "MD": 14, "ML": 16, "GF": 60, "GA": 61, "logo": "england/westham.png" },
      { "rank": 13, "team": "Swansea", "MP": 46, "MW": 15, "MD": 15, "ML": 16, "GF": 54, "GA": 57, "logo": "england/swansea.png" },
      { "rank": 14, "team": "Bristol City", "MP": 46, "MW": 14, "MD": 17, "ML": 15, "GF": 48, "GA": 52, "logo": "england/bristolcity.png" },
      { "rank": 15, "team": "Derby County", "MP": 46, "MW": 14, "MD": 14, "ML": 18, "GF": 50, "GA": 57, "logo": "england/derby.png" },
      { "rank": 16, "team": "Cardiff City", "MP": 46, "MW": 13, "MD": 16, "ML": 17, "GF": 47, "GA": 55, "logo": "england/cardiff.png" },
      { "rank": 17, "team": "Bolton", "MP": 46, "MW": 13, "MD": 14, "ML": 19, "GF": 52, "GA": 62, "logo": "england/bolton.png" },
      { "rank": 18, "team": "Preston", "MP": 46, "MW": 12, "MD": 15, "ML": 19, "GF": 44, "GA": 58, "logo": "england/preston.png" },
      { "rank": 19, "team": "QPR", "MP": 46, "MW": 11, "MD": 15, "ML": 20, "GF": 46, "GA": 61, "logo": "england/qpr.png" },
      { "rank": 20, "team": "Charlton", "MP": 46, "MW": 10, "MD": 16, "ML": 20, "GF": 43, "GA": 60, "logo": "england/charlton.png" },
      { "rank": 21, "team": "Portsmouth", "MP": 46, "MW": 9, "MD": 17, "ML": 20, "GF": 40, "GA": 59, "logo": "england/portsmouth.png" },
      { "rank": 22, "team": "Wrexham", "MP": 46, "MW": 9, "MD": 14, "ML": 23, "GF": 42, "GA": 68, "logo": "england/wrexham.png" },
      { "rank": 23, "team": "Millwall", "MP": 46, "MW": 7, "MD": 16, "ML": 23, "GF": 35, "GA": 66, "logo": "england/millwall.png" },
      { "rank": 24, "team": "Lincoln City", "MP": 46, "MW": 6, "MD": 10, "ML": 30, "GF": 30, "GA": 82, "logo": "england/lincoln.png" }
    ],
    "fixtures": [
      { "home": "Middlesbrough", "away": "Millwall", "date": "2026-09-15" },
      { "home": "Bristol City", "away": "Lincoln City", "date": "2026-09-16" },
      { "home": "Bristol City", "away": "Watford", "date": "2026-09-18" },
      { "home": "Cardiff City", "away": "Charlton", "date": "2026-09-19" },
      { "home": "Stoke City", "away": "Sheffield United", "date": "2026-09-19" },
      { "home": "Millwall", "away": "West Ham", "date": "2026-09-19" },
      { "home": "Lincoln City", "away": "Swansea", "date": "2026-09-19" },
      { "home": "Portsmouth", "away": "Blackburn Rovers", "date": "2026-09-19" },
      { "home": "Wrexham", "away": "Southampton", "date": "2026-09-19" },
      { "home": "Birmingham", "away": "Middlesbrough", "date": "2026-09-19" },
      { "home": "QPR", "away": "Preston", "date": "2026-09-19" },
      { "home": "Burnley", "away": "Derby County", "date": "2026-09-19" },
      { "home": "Wolves", "away": "West Brom", "date": "2026-09-20" },
      { "home": "Norwich City", "away": "Bolton", "date": "2026-09-20" },
      { "home": "West Ham", "away": "QPR", "date": "2026-10-09" },
      { "home": "Swansea", "away": "Norwich City", "date": "2026-10-10" },
      { "home": "West Brom", "away": "Birmingham", "date": "2026-10-10" },
      { "home": "Charlton", "away": "Bristol City", "date": "2026-10-10" },
      { "home": "Derby County", "away": "Wrexham", "date": "2026-10-10" },
      { "home": "Middlesbrough", "away": "Wolves", "date": "2026-10-10" },
      { "home": "Preston", "away": "Millwall", "date": "2026-10-10" },
      { "home": "Sheffield United", "away": "Lincoln City", "date": "2026-10-10" },
      { "home": "Blackburn Rovers", "away": "Cardiff City", "date": "2026-10-10" },
      { "home": "Watford", "away": "Burnley", "date": "2026-10-10" },
      { "home": "Bolton", "away": "Stoke City", "date": "2026-10-10" },
      { "home": "Southampton", "away": "Portsmouth", "date": "2026-10-11" }
    ]
  },
 // ============================================================
    //  ENGLISH LEAGUE ONE
    // ============================================================
  
"English League One": {
    "id": "english-league-one",
    "logo": "england/leagueone.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Birmingham City", "MP": 46, "MW": 28, "MD": 12, "ML": 6, "GF": 82, "GA": 38, "logo": "england/birmingham.png" },
      { "rank": 2, "team": "Bolton", "MP": 46, "MW": 27, "MD": 9, "ML": 10, "GF": 76, "GA": 45, "logo": "england/bolton.png" },
      { "rank": 3, "team": "Peterborough", "MP": 46, "MW": 25, "MD": 12, "ML": 9, "GF": 89, "GA": 61, "logo": "england/peterborough.png" },
      { "rank": 4, "team": "Barnsley", "MP": 46, "MW": 24, "MD": 10, "ML": 12, "GF": 80, "GA": 58, "logo": "england/barnsley.png" },
      { "rank": 5, "team": "Oxford Utd", "MP": 46, "MW": 22, "MD": 11, "ML": 13, "GF": 79, "GA": 56, "logo": "england/oxford.png" },
      { "rank": 6, "team": "Blackpool", "MP": 46, "MW": 21, "MD": 11, "ML": 14, "GF": 65, "GA": 48, "logo": "england/blackpool.png" },
      { "rank": 7, "team": "Leyton Orient", "MP": 46, "MW": 18, "MD": 15, "ML": 13, "GF": 58, "GA": 50, "logo": "england/leytonorient.png" },
      { "rank": 8, "team": "Reading", "MP": 46, "MW": 16, "MD": 16, "ML": 14, "GF": 62, "GA": 58, "logo": "england/reading.png" },
      { "rank": 9, "team": "Leicester City", "MP": 46, "MW": 17, "MD": 12, "ML": 17, "GF": 63, "GA": 63, "logo": "england/leicester.png" },
      { "rank": 10, "team": "Huddersfield", "MP": 46, "MW": 16, "MD": 14, "ML": 16, "GF": 57, "GA": 56, "logo": "england/huddersfield.png" },
      { "rank": 11, "team": "Wycombe", "MP": 46, "MW": 16, "MD": 13, "ML": 17, "GF": 61, "GA": 65, "logo": "england/wycombe.png" },
      { "rank": 12, "team": "Stockport", "MP": 46, "MW": 15, "MD": 14, "ML": 17, "GF": 55, "GA": 57, "logo": "england/stockport.png" },
      { "rank": 13, "team": "Notts County", "MP": 46, "MW": 14, "MD": 13, "ML": 19, "GF": 49, "GA": 60, "logo": "england/nottscounty.png" },
      { "rank": 14, "team": "Bradford City", "MP": 46, "MW": 13, "MD": 15, "ML": 18, "GF": 52, "GA": 63, "logo": "england/bradford.png" },
      { "rank": 15, "team": "Luton Town", "MP": 46, "MW": 14, "MD": 12, "ML": 20, "GF": 55, "GA": 67, "logo": "england/luton.png" },
      { "rank": 16, "team": "Sheffield Wednesday", "MP": 46, "MW": 13, "MD": 14, "ML": 19, "GF": 51, "GA": 63, "logo": "england/sheffieldwed.png" },
      { "rank": 17, "team": "Plymouth", "MP": 46, "MW": 12, "MD": 14, "ML": 20, "GF": 48, "GA": 61, "logo": "england/plymouth.png" },
      { "rank": 18, "team": "Mansfield Town", "MP": 46, "MW": 11, "MD": 16, "ML": 19, "GF": 47, "GA": 58, "logo": "england/mansfield.png" },
      { "rank": 19, "team": "Burton", "MP": 46, "MW": 11, "MD": 15, "ML": 20, "GF": 44, "GA": 62, "logo": "england/burton.png" },
      { "rank": 20, "team": "MK Dons", "MP": 46, "MW": 10, "MD": 17, "ML": 19, "GF": 46, "GA": 60, "logo": "england/mkdons.png" },
      { "rank": 21, "team": "Stevenage", "MP": 46, "MW": 10, "MD": 15, "ML": 21, "GF": 42, "GA": 61, "logo": "england/stevenage.png" },
      { "rank": 22, "team": "Wigan Athletic", "MP": 46, "MW": 10, "MD": 14, "ML": 22, "GF": 38, "GA": 62, "logo": "england/wigan.png" },
      { "rank": 23, "team": "Cambridge United", "MP": 46, "MW": 9, "MD": 14, "ML": 23, "GF": 41, "GA": 71, "logo": "england/cambridge.png" },
      { "rank": 24, "team": "Doncaster", "MP": 46, "MW": 8, "MD": 12, "ML": 26, "GF": 38, "GA": 73, "logo": "england/doncaster.png" }
    ],
    "fixtures": [
      { "home": "AFC Wimbledon", "away": "MK Dons", "date": "2026-09-17" },
      { "home": "Burton", "away": "Mansfield Town", "date": "2026-09-19" },
      { "home": "Barnsley", "away": "Leicester City", "date": "2026-09-19" },
      { "home": "Leyton Orient", "away": "Stevenage", "date": "2026-09-19" },
      { "home": "Luton Town", "away": "Bradford City", "date": "2026-09-19" },
      { "home": "Blackpool", "away": "Plymouth", "date": "2026-09-19" },
      { "home": "Wigan Athletic", "away": "Wycombe", "date": "2026-09-19" },
      { "home": "Bromley", "away": "Huddersfield", "date": "2026-09-19" },
      { "home": "Sheffield Wednesday", "away": "Stockport", "date": "2026-09-19" },
      { "home": "Reading", "away": "Notts County", "date": "2026-09-19" },
      { "home": "Oxford Utd", "away": "Cambridge United", "date": "2026-09-19" },
      { "home": "Peterborough", "away": "Doncaster", "date": "2026-09-19" }
    ]
  },


  // ============================================================
    //  ENGLISH LEAGUE TWO
    // ============================================================

"English League Two": {
    "id": "english-league-two",
    "logo": "england/leaguetwo.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Chesterfield", "MP": 46, "MW": 26, "MD": 11, "ML": 9, "GF": 78, "GA": 48, "logo": "england/chesterfield.png" },
      { "rank": 2, "team": "Walsall", "MP": 46, "MW": 24, "MD": 12, "ML": 10, "GF": 72, "GA": 45, "logo": "england/walsall.png" },
      { "rank": 3, "team": "Port Vale", "MP": 46, "MW": 23, "MD": 12, "ML": 11, "GF": 69, "GA": 47, "logo": "england/portvale.png" },
      { "rank": 4, "team": "Rochdale", "MP": 46, "MW": 22, "MD": 13, "ML": 11, "GF": 67, "GA": 49, "logo": "england/rochdale.png" },
      { "rank": 5, "team": "Gillingham", "MP": 46, "MW": 21, "MD": 13, "ML": 12, "GF": 64, "GA": 48, "logo": "england/gillingham.png" },
      { "rank": 6, "team": "Salford City", "MP": 46, "MW": 20, "MD": 14, "ML": 12, "GF": 62, "GA": 47, "logo": "england/salford.png" },
      { "rank": 7, "team": "Swindon Town", "MP": 46, "MW": 19, "MD": 15, "ML": 12, "GF": 61, "GA": 48, "logo": "england/swindon.png" },
      { "rank": 8, "team": "Bristol Rovers", "MP": 46, "MW": 18, "MD": 15, "ML": 13, "GF": 58, "GA": 49, "logo": "england/bristolrovers.png" },
      { "rank": 9, "team": "Grimsby", "MP": 46, "MW": 18, "MD": 13, "ML": 15, "GF": 56, "GA": 52, "logo": "england/grimsby.png" },
      { "rank": 10, "team": "Exeter City", "MP": 46, "MW": 17, "MD": 14, "ML": 15, "GF": 54, "GA": 52, "logo": "england/exeter.png" },
      { "rank": 11, "team": "Barnet", "MP": 46, "MW": 16, "MD": 15, "ML": 15, "GF": 53, "GA": 53, "logo": "england/barnet.png" },
      { "rank": 12, "team": "Colchester", "MP": 46, "MW": 15, "MD": 17, "ML": 14, "GF": 51, "GA": 51, "logo": "england/colchester.png" },
      { "rank": 13, "team": "Crewe", "MP": 46, "MW": 15, "MD": 16, "ML": 15, "GF": 50, "GA": 52, "logo": "england/crewe.png" },
      { "rank": 14, "team": "Tranmere", "MP": 46, "MW": 14, "MD": 16, "ML": 16, "GF": 48, "GA": 53, "logo": "england/tranmere.png" },
      { "rank": 15, "team": "Oldham Athletic", "MP": 46, "MW": 13, "MD": 17, "ML": 16, "GF": 47, "GA": 54, "logo": "england/oldham.png" },
      { "rank": 16, "team": "Fleetwood", "MP": 46, "MW": 13, "MD": 15, "ML": 18, "GF": 46, "GA": 56, "logo": "england/fleetwood.png" },
      { "rank": 17, "team": "Shrewsbury", "MP": 46, "MW": 12, "MD": 16, "ML": 18, "GF": 44, "GA": 56, "logo": "england/shrewsbury.png" },
      { "rank": 18, "team": "Northampton Town", "MP": 46, "MW": 12, "MD": 15, "ML": 19, "GF": 43, "GA": 57, "logo": "england/northampton.png" },
      { "rank": 19, "team": "York City", "MP": 46, "MW": 11, "MD": 16, "ML": 19, "GF": 42, "GA": 58, "logo": "england/york.png" },
      { "rank": 20, "team": "Cheltenham", "MP": 46, "MW": 10, "MD": 17, "ML": 19, "GF": 41, "GA": 58, "logo": "england/cheltenham.png" },
      { "rank": 21, "team": "Crawley Town", "MP": 46, "MW": 10, "MD": 15, "ML": 21, "GF": 40, "GA": 60, "logo": "england/crawley.png" },
      { "rank": 22, "team": "Newport County", "MP": 46, "MW": 9, "MD": 15, "ML": 22, "GF": 38, "GA": 62, "logo": "england/newport.png" },
      { "rank": 23, "team": "Accrington Stanley", "MP": 46, "MW": 8, "MD": 14, "ML": 24, "GF": 36, "GA": 65, "logo": "england/accrington.png" },
      { "rank": 24, "team": "Rotherham", "MP": 46, "MW": 7, "MD": 13, "ML": 26, "GF": 34, "GA": 68, "logo": "england/rotherham.png" }
    ],
    "fixtures": [
      { "home": "Rochdale", "away": "Oldham Athletic", "date": "2026-09-19" },
      { "home": "Walsall", "away": "Port Vale", "date": "2026-09-19" },
      { "home": "Chesterfield", "away": "York City", "date": "2026-09-19" },
      { "home": "Grimsby", "away": "Crawley Town", "date": "2026-09-19" },
      { "home": "Gillingham", "away": "Bristol Rovers", "date": "2026-09-19" },
      { "home": "Exeter City", "away": "Tranmere", "date": "2026-09-19" },
      { "home": "Colchester", "away": "Cheltenham", "date": "2026-09-19" },
      { "home": "Salford City", "away": "Swindon Town", "date": "2026-09-19" },
      { "home": "Barnet", "away": "Fleetwood", "date": "2026-09-19" },
      { "home": "Accrington Stanley", "away": "Newport County", "date": "2026-09-19" },
      { "home": "Northampton Town", "away": "Rotherham", "date": "2026-09-19" },
      { "home": "Crewe", "away": "Shrewsbury", "date": "2026-09-19" },
      { "home": "Crawley Town", "away": "Barnet", "date": "2026-09-26" },
      { "home": "Bristol Rovers", "away": "Exeter City", "date": "2026-09-26" },
      { "home": "York City", "away": "Gillingham", "date": "2026-09-26" },
      { "home": "Port Vale", "away": "Northampton Town", "date": "2026-09-26" },
      { "home": "Tranmere", "away": "Walsall", "date": "2026-09-26" },
      { "home": "Fleetwood", "away": "Rochdale", "date": "2026-09-26" },
      { "home": "Cheltenham", "away": "Chesterfield", "date": "2026-09-26" },
      { "home": "Newport County", "away": "Grimsby", "date": "2026-09-26" },
      { "home": "Swindon Town", "away": "Accrington Stanley", "date": "2026-09-26" },
      { "home": "Shrewsbury", "away": "Colchester", "date": "2026-09-26" },
      { "home": "Rotherham", "away": "Crewe", "date": "2026-09-26" },
      { "home": "Oldham Athletic", "away": "Salford City", "date": "2026-09-26" },
      { "home": "Chesterfield", "away": "Tranmere", "date": "2026-10-03" },
      { "home": "Rochdale", "away": "Swindon Town", "date": "2026-10-03" },
      { "home": "Salford City", "away": "Fleetwood", "date": "2026-10-03" },
      { "home": "Colchester", "away": "Port Vale", "date": "2026-10-03" },
      { "home": "Exeter City", "away": "Rotherham", "date": "2026-10-03" },
      { "home": "Gillingham", "away": "Newport County", "date": "2026-10-03" },
      { "home": "Walsall", "away": "Crawley Town", "date": "2026-10-03" },
      { "home": "Crewe", "away": "Bristol Rovers", "date": "2026-10-03" },
      { "home": "Northampton Town", "away": "Oldham Athletic", "date": "2026-10-03" },
      { "home": "Barnet", "away": "York City", "date": "2026-10-03" },
      { "home": "Grimsby", "away": "Shrewsbury", "date": "2026-10-03" },
      { "home": "Accrington Stanley", "away": "Cheltenham", "date": "2026-10-03" }
    ]
  },

// ============================================================
//  SPAIN - LA LIGA 2 (Segunda División)
// ============================================================

"Spanish La Liga 2": {
    "id": "spanish-la-liga-2",
    "logo": "spain/laliga2.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Eibar", "MP": 42, "MW": 24, "MD": 10, "ML": 8, "GF": 62, "GA": 40, "logo": "spain/eibar.png" },
      { "rank": 2, "team": "Girona", "MP": 42, "MW": 23, "MD": 11, "ML": 8, "GF": 68, "GA": 42, "logo": "spain/girona.png" },
      { "rank": 3, "team": "Almería", "MP": 42, "MW": 22, "MD": 12, "ML": 8, "GF": 65, "GA": 41, "logo": "spain/almeria.png" },
      { "rank": 4, "team": "Las Palmas", "MP": 42, "MW": 21, "MD": 12, "ML": 9, "GF": 60, "GA": 42, "logo": "spain/laspalmas.png" },
      { "rank": 5, "team": "Real Oviedo", "MP": 42, "MW": 20, "MD": 13, "ML": 9, "GF": 58, "GA": 41, "logo": "spain/realoviedo.png" },
      { "rank": 6, "team": "Granada", "MP": 42, "MW": 19, "MD": 13, "ML": 10, "GF": 55, "GA": 42, "logo": "spain/granada.png" },
      { "rank": 7, "team": "Valladolid", "MP": 42, "MW": 18, "MD": 14, "ML": 10, "GF": 53, "GA": 43, "logo": "spain/valladolid.png" },
      { "rank": 8, "team": "Sporting Gijón", "MP": 42, "MW": 18, "MD": 12, "ML": 12, "GF": 52, "GA": 44, "logo": "spain/sportinggijon.png" },
      { "rank": 9, "team": "Cádiz", "MP": 42, "MW": 17, "MD": 14, "ML": 11, "GF": 50, "GA": 43, "logo": "spain/cadiz.png" },
      { "rank": 10, "team": "Leganes", "MP": 42, "MW": 16, "MD": 15, "ML": 11, "GF": 48, "GA": 43, "logo": "spain/leganes.png" },
      { "rank": 11, "team": "Mallorca", "MP": 42, "MW": 16, "MD": 14, "ML": 12, "GF": 49, "GA": 45, "logo": "spain/mallorca.png" },
      { "rank": 12, "team": "Tenerife", "MP": 42, "MW": 15, "MD": 15, "ML": 12, "GF": 47, "GA": 45, "logo": "spain/tenerife.png" },
      { "rank": 13, "team": "Burgos", "MP": 42, "MW": 15, "MD": 14, "ML": 13, "GF": 45, "GA": 45, "logo": "spain/burgos.png" },
      { "rank": 14, "team": "Albacete", "MP": 42, "MW": 14, "MD": 15, "ML": 13, "GF": 44, "GA": 46, "logo": "spain/albacete.png" },
      { "rank": 15, "team": "Córdoba", "MP": 42, "MW": 14, "MD": 14, "ML": 14, "GF": 43, "GA": 46, "logo": "spain/cordoba.png" },
      { "rank": 16, "team": "Eldense", "MP": 42, "MW": 13, "MD": 15, "ML": 14, "GF": 42, "GA": 47, "logo": "spain/eldense.png" },
      { "rank": 17, "team": "Castellón", "MP": 42, "MW": 13, "MD": 14, "ML": 15, "GF": 41, "GA": 48, "logo": "spain/castellon.png" },
      { "rank": 18, "team": "Andorra", "MP": 42, "MW": 12, "MD": 15, "ML": 15, "GF": 40, "GA": 49, "logo": "spain/andorra.png" },
      { "rank": 19, "team": "Ceuta", "MP": 42, "MW": 11, "MD": 15, "ML": 16, "GF": 38, "GA": 50, "logo": "spain/ceuta.png" },
      { "rank": 20, "team": "Sabadell", "MP": 42, "MW": 10, "MD": 15, "ML": 17, "GF": 36, "GA": 51, "logo": "spain/sabadell.png" },
      { "rank": 21, "team": "Real Sociedad B", "MP": 42, "MW": 9, "MD": 14, "ML": 19, "GF": 34, "GA": 53, "logo": "spain/realsociedadb.png" },
      { "rank": 22, "team": "Celta de Vigo II", "MP": 42, "MW": 7, "MD": 13, "ML": 22, "GF": 30, "GA": 58, "logo": "spain/celtavigoii.png" }
    ],
    "fixtures": [
      { "home": "Celta de Vigo II", "away": "Eibar", "date": "2026-09-14" },
      { "home": "Albacete", "away": "Córdoba", "date": "2026-09-18" },
      { "home": "Real Sociedad B", "away": "Mallorca", "date": "2026-09-19" },
      { "home": "Andorra", "away": "Sporting Gijón", "date": "2026-09-19" },
      { "home": "Eldense", "away": "Eibar", "date": "2026-09-19" },
      { "home": "Castellón", "away": "Tenerife", "date": "2026-09-19" },
      { "home": "Cádiz", "away": "Girona", "date": "2026-09-19" },
      { "home": "Sabadell", "away": "Real Oviedo", "date": "2026-09-20" },
      { "home": "Ceuta", "away": "Valladolid", "date": "2026-09-20" },
      { "home": "Almería", "away": "Celta de Vigo II", "date": "2026-09-20" },
      { "home": "Las Palmas", "away": "Burgos", "date": "2026-09-20" },
      { "home": "Leganes", "away": "Granada", "date": "2026-09-20" },
      { "home": "Girona", "away": "Albacete", "date": "2026-09-25" },
      { "home": "Ceuta", "away": "Real Sociedad B", "date": "2026-09-26" },
      { "home": "Granada", "away": "Andorra", "date": "2026-09-26" },
      { "home": "Celta de Vigo II", "away": "Sabadell", "date": "2026-09-26" },
      { "home": "Tenerife", "away": "Cádiz", "date": "2026-09-26" },
      { "home": "Valladolid", "away": "Córdoba", "date": "2026-09-27" },
      { "home": "Mallorca", "away": "Almería", "date": "2026-09-27" },
      { "home": "Eibar", "away": "Las Palmas", "date": "2026-09-27" },
      { "home": "Burgos", "away": "Eldense", "date": "2026-09-27" },
      { "home": "Real Oviedo", "away": "Sporting Gijón", "date": "2026-09-27" },
      { "home": "Leganes", "away": "Castellón", "date": "2026-09-28" },
      { "home": "Eldense", "away": "Real Oviedo", "date": "2026-10-02" },
      { "home": "Albacete", "away": "Eibar", "date": "2026-10-03" },
      { "home": "Almería", "away": "Burgos", "date": "2026-10-03" },
      { "home": "Sabadell", "away": "Andorra", "date": "2026-10-03" },
      { "home": "Cádiz", "away": "Leganes", "date": "2026-10-03" },
      { "home": "Real Sociedad B", "away": "Granada", "date": "2026-10-04" },
      { "home": "Sporting Gijón", "away": "Celta de Vigo II", "date": "2026-10-04" },
      { "home": "Las Palmas", "away": "Valladolid", "date": "2026-10-04" },
      { "home": "Castellón", "away": "Ceuta", "date": "2026-10-04" },
      { "home": "Girona", "away": "Mallorca", "date": "2026-10-04" },
      { "home": "Córdoba", "away": "Tenerife", "date": "2026-10-05" }
    ]
  },
// ============================================================
//  ITALY - SERIE B
// ============================================================

"Italian Serie B": {
    "id": "italian-serie-b",
    "logo": "italy/serieb.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Palermo", "MP": 38, "MW": 22, "MD": 9, "ML": 7, "GF": 58, "GA": 35, "logo": "italy/palermo.png" },
      { "rank": 2, "team": "Cremonese", "MP": 38, "MW": 21, "MD": 10, "ML": 7, "GF": 56, "GA": 34, "logo": "italy/cremonese.png" },
      { "rank": 3, "team": "Sampdoria", "MP": 38, "MW": 20, "MD": 10, "ML": 8, "GF": 55, "GA": 36, "logo": "italy/sampdoria.png" },
      { "rank": 4, "team": "Empoli", "MP": 38, "MW": 19, "MD": 11, "ML": 8, "GF": 53, "GA": 36, "logo": "italy/empoli.png" },
      { "rank": 5, "team": "Pisa", "MP": 38, "MW": 18, "MD": 12, "ML": 8, "GF": 52, "GA": 37, "logo": "italy/pisa.png" },
      { "rank": 6, "team": "Verona", "MP": 38, "MW": 17, "MD": 12, "ML": 9, "GF": 50, "GA": 38, "logo": "italy/verona.png" },
      { "rank": 7, "team": "Benevento", "MP": 38, "MW": 16, "MD": 13, "ML": 9, "GF": 48, "GA": 38, "logo": "italy/benevento.png" },
      { "rank": 8, "team": "Modena", "MP": 38, "MW": 15, "MD": 13, "ML": 10, "GF": 47, "GA": 39, "logo": "italy/modena.png" },
      { "rank": 9, "team": "Cesena", "MP": 38, "MW": 14, "MD": 14, "ML": 10, "GF": 46, "GA": 40, "logo": "italy/cesena.png" },
      { "rank": 10, "team": "Catanzaro", "MP": 38, "MW": 14, "MD": 13, "ML": 11, "GF": 45, "GA": 40, "logo": "italy/catanzaro.png" },
      { "rank": 11, "team": "Avellino", "MP": 38, "MW": 13, "MD": 14, "ML": 11, "GF": 44, "GA": 41, "logo": "italy/avellino.png" },
      { "rank": 12, "team": "Padova", "MP": 38, "MW": 12, "MD": 14, "ML": 12, "GF": 42, "GA": 42, "logo": "italy/padova.png" },
      { "rank": 13, "team": "Mantova", "MP": 38, "MW": 12, "MD": 13, "ML": 13, "GF": 41, "GA": 43, "logo": "italy/mantova.png" },
      { "rank": 14, "team": "LR Vicenza", "MP": 38, "MW": 11, "MD": 14, "ML": 13, "GF": 40, "GA": 44, "logo": "italy/lrvicenza.png" },
      { "rank": 15, "team": "Juve Stabia", "MP": 38, "MW": 11, "MD": 13, "ML": 14, "GF": 39, "GA": 45, "logo": "italy/juvestabia.png" },
      { "rank": 16, "team": "Carrarese", "MP": 38, "MW": 10, "MD": 14, "ML": 14, "GF": 38, "GA": 46, "logo": "italy/carrarese.png" },
      { "rank": 17, "team": "Ascoli", "MP": 38, "MW": 10, "MD": 13, "ML": 15, "GF": 37, "GA": 47, "logo": "italy/ascoli.png" },
      { "rank": 18, "team": "Entella", "MP": 38, "MW": 9, "MD": 14, "ML": 15, "GF": 36, "GA": 48, "logo": "italy/entella.png" },
      { "rank": 19, "team": "Arezzo", "MP": 38, "MW": 8, "MD": 13, "ML": 17, "GF": 34, "GA": 50, "logo": "italy/arezzo.png" },
      { "rank": 20, "team": "FCS", "MP": 38, "MW": 6, "MD": 12, "ML": 20, "GF": 30, "GA": 55, "logo": "italy/fcs.png" }
    ],
    "fixtures": [
      { "home": "Juve Stabia", "away": "Cesena", "date": "2026-09-18" },
      { "home": "Carrarese", "away": "Benevento", "date": "2026-09-19" },
      { "home": "Palermo", "away": "Padova", "date": "2026-09-19" },
      { "home": "Cremonese", "away": "Entella", "date": "2026-09-19" },
      { "home": "Sampdoria", "away": "Catanzaro", "date": "2026-09-19" },
      { "home": "Ascoli", "away": "Avellino", "date": "2026-09-19" },
      { "home": "Arezzo", "away": "FCS", "date": "2026-09-20" },
      { "home": "Verona", "away": "LR Vicenza", "date": "2026-09-20" },
      { "home": "Mantova", "away": "Pisa", "date": "2026-09-20" },
      { "home": "Modena", "away": "Empoli", "date": "2026-09-20" },
      { "home": "Avellino", "away": "Sampdoria", "date": "2026-10-09" },
      { "home": "Empoli", "away": "Palermo", "date": "2026-10-10" },
      { "home": "Benevento", "away": "Cesena", "date": "2026-10-10" },
      { "home": "Entella", "away": "Juve Stabia", "date": "2026-10-10" },
      { "home": "FCS", "away": "Ascoli", "date": "2026-10-10" },
      { "home": "LR Vicenza", "away": "Pisa", "date": "2026-10-10" },
      { "home": "Arezzo", "away": "Cremonese", "date": "2026-10-10" },
      { "home": "Catanzaro", "away": "Mantova", "date": "2026-10-11" },
      { "home": "Padova", "away": "Carrarese", "date": "2026-10-11" },
      { "home": "Modena", "away": "Verona", "date": "2026-10-11" },
      { "home": "Verona", "away": "Catanzaro", "date": "2026-10-16" },
      { "home": "Ascoli", "away": "Empoli", "date": "2026-10-17" },
      { "home": "Carrarese", "away": "Modena", "date": "2026-10-17" },
      { "home": "Benevento", "away": "LR Vicenza", "date": "2026-10-17" },
      { "home": "Padova", "away": "Entella", "date": "2026-10-17" },
      { "home": "Mantova", "away": "Palermo", "date": "2026-10-17" },
      { "home": "Pisa", "away": "Cremonese", "date": "2026-10-17" },
      { "home": "Juve Stabia", "away": "FCS", "date": "2026-10-18" },
      { "home": "Cesena", "away": "Avellino", "date": "2026-10-18" },
      { "home": "Sampdoria", "away": "Arezzo", "date": "2026-10-18" }
    ]
  },

// ============================================================
//  FRANCE - LIGUE 2
// ============================================================

"French Ligue 2": {
    id: "french-ligue-2",
    logo: "france/ligue2.png",
    isBasketball: false,
    season: "2026-27",
    teams: [
        { rank: 1, team: "Troyes", MP: 34, MW: 20, MD: 7, ML: 7, GF: 60, GA: 33, logo: "france/troyes.png" },
        { rank: 2, team: "Le Mans", MP: 34, MW: 16, MD: 14, ML: 4, GF: 50, GA: 31, logo: "france/lemans.png" },
        { rank: 3, team: "St-Étienne", MP: 34, MW: 18, MD: 6, ML: 10, GF: 59, GA: 38, logo: "france/stetienne.png" },
        { rank: 4, team: "Red Star", MP: 34, MW: 16, MD: 10, ML: 8, GF: 45, GA: 37, logo: "france/redstar.png" },
        { rank: 5, team: "Rodez", MP: 34, MW: 15, MD: 13, ML: 6, GF: 45, GA: 39, logo: "france/rodez.png" },
        { rank: 6, team: "Reims", MP: 34, MW: 14, MD: 14, ML: 6, GF: 53, GA: 35, logo: "france/reims.png" },
        { rank: 7, team: "Annecy", MP: 34, MW: 15, MD: 7, ML: 12, GF: 49, GA: 39, logo: "france/annecy.png" },
        { rank: 8, team: "Montpellier", MP: 34, MW: 14, MD: 9, ML: 11, GF: 41, GA: 31, logo: "france/montpellier.png" },
        { rank: 9, team: "Pau", MP: 34, MW: 12, MD: 9, ML: 13, GF: 48, GA: 62, logo: "france/pau.png" },
        { rank: 10, team: "Dunkerque", MP: 34, MW: 11, MD: 10, ML: 13, GF: 53, GA: 45, logo: "france/dunkerque.png" },
        { rank: 11, team: "Guingamp", MP: 34, MW: 10, MD: 10, ML: 14, GF: 42, GA: 49, logo: "france/guingamp.png" },
        { rank: 12, team: "Grenoble", MP: 34, MW: 8, MD: 15, ML: 11, GF: 33, GA: 39, logo: "france/grenoble.png" },
        { rank: 13, team: "Clermont", MP: 34, MW: 9, MD: 10, ML: 15, GF: 38, GA: 44, logo: "france/clermont.png" },
        { rank: 14, team: "AS Nancy Lorraine", MP: 34, MW: 9, MD: 10, ML: 15, GF: 35, GA: 52, logo: "france/nancy.png" },
        { rank: 15, team: "Boulogne", MP: 34, MW: 9, MD: 9, ML: 16, GF: 34, GA: 49, logo: "france/boulogne.png" },
        { rank: 16, team: "Laval", MP: 34, MW: 6, MD: 14, ML: 14, GF: 30, GA: 48, logo: "france/laval.png" },
        { rank: 17, team: "Bastia", MP: 34, MW: 5, MD: 13, ML: 16, GF: 23, GA: 39, logo: "france/bastia.png" },
        { rank: 18, team: "Amiens", MP: 34, MW: 6, MD: 6, ML: 22, GF: 37, GA: 65, logo: "france/amiens.png" }
    ],
    fixtures: [
        // ===== MATCHDAY 7 =====
        { home: "Laval", away: "Sochaux", date: "2026-09-18 20:00" },
        { home: "Rodez", away: "AS Nancy Lorraine", date: "2026-09-18 20:00" },
        { home: "Annecy", away: "Dijon", date: "2026-09-18 20:00" },
        { home: "Pau", away: "Dunkerque", date: "2026-09-18 20:00" },
        { home: "Reims", away: "Montpellier", date: "2026-09-18 20:00" },
        { home: "Grenoble", away: "Clermont", date: "2026-09-19 14:00" },
        { home: "Guingamp", away: "Red Star", date: "2026-09-19 14:00" },
        { home: "Boulogne", away: "Nantes", date: "2026-09-19 14:00" },
        { home: "Metz", away: "St-Étienne", date: "2026-09-19 20:00" }
    ]
},
// ============================================================
    //  GERMANY - BUNDESLIGA 2
    // ============================================================
	"German Bundesliga 2": {
    "id": "german-bundesliga-2",
    "logo": "germany/bundesliga2.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Schalke", "MP": 34, "MW": 21, "MD": 7, "ML": 6, "GF": 50, "GA": 31, "logo": "germany/schalke.png" },
      { "rank": 2, "team": "SV Elversberg", "MP": 34, "MW": 18, "MD": 8, "ML": 8, "GF": 64, "GA": 39, "logo": "germany/elversberg.png" },
      { "rank": 3, "team": "Paderborn", "MP": 34, "MW": 18, "MD": 8, "ML": 8, "GF": 59, "GA": 45, "logo": "germany/paderborn.png" },
      { "rank": 4, "team": "Hannover 96", "MP": 34, "MW": 16, "MD": 12, "ML": 6, "GF": 60, "GA": 44, "logo": "germany/hannover.png" },
      { "rank": 5, "team": "Darmstadt", "MP": 34, "MW": 13, "MD": 13, "ML": 8, "GF": 57, "GA": 45, "logo": "germany/darmstadt.png" },
      { "rank": 6, "team": "1. FCK", "MP": 34, "MW": 16, "MD": 4, "ML": 14, "GF": 52, "GA": 47, "logo": "germany/fck.png" },
      { "rank": 7, "team": "Hertha", "MP": 34, "MW": 14, "MD": 9, "ML": 11, "GF": 47, "GA": 44, "logo": "germany/hertha.png" },
      { "rank": 8, "team": "Nürnberg", "MP": 34, "MW": 12, "MD": 10, "ML": 12, "GF": 47, "GA": 45, "logo": "germany/nurnberg.png" },
      { "rank": 9, "team": "Bochum", "MP": 34, "MW": 11, "MD": 11, "ML": 12, "GF": 49, "GA": 47, "logo": "germany/bochum.png" },
      { "rank": 10, "team": "Karlsruher", "MP": 34, "MW": 12, "MD": 8, "ML": 14, "GF": 53, "GA": 64, "logo": "germany/karlsruher.png" },
      { "rank": 11, "team": "Dynamo", "MP": 34, "MW": 11, "MD": 8, "ML": 15, "GF": 54, "GA": 53, "logo": "germany/dynamo.png" },
      { "rank": 12, "team": "Holstein Kiel", "MP": 34, "MW": 11, "MD": 8, "ML": 15, "GF": 44, "GA": 48, "logo": "germany/holsteinkiel.png" },
      { "rank": 13, "team": "Arminia", "MP": 34, "MW": 10, "MD": 9, "ML": 15, "GF": 53, "GA": 51, "logo": "germany/arminia.png" },
      { "rank": 14, "team": "1. FC Magdeburg", "MP": 34, "MW": 12, "MD": 3, "ML": 19, "GF": 52, "GA": 58, "logo": "germany/magdeburg.png" },
      { "rank": 15, "team": "Eintracht Braunschweig", "MP": 34, "MW": 10, "MD": 7, "ML": 17, "GF": 36, "GA": 54, "logo": "germany/braunschweig.png" },
      { "rank": 16, "team": "Fürth", "MP": 34, "MW": 10, "MD": 7, "ML": 17, "GF": 49, "GA": 68, "logo": "germany/furth.png" },
      { "rank": 17, "team": "Düsseldorf", "MP": 34, "MW": 11, "MD": 4, "ML": 19, "GF": 33, "GA": 53, "logo": "germany/dusseldorf.png" },
      { "rank": 18, "team": "Preußen Münster", "MP": 34, "MW": 6, "MD": 12, "ML": 16, "GF": 38, "GA": 61, "logo": "germany/preussenmunster.png" }
    ],
    "fixtures": [
      { "home": "Fürth", "away": "1. FC Magdeburg", "date": "2026-09-18" },
      { "home": "Wolfsburg", "away": "Darmstadt", "date": "2026-09-18" },
      { "home": "Karlsruher", "away": "Nürnberg", "date": "2026-09-19" },
      { "home": "1. FCK", "away": "Eintracht Braunschweig", "date": "2026-09-19" },
      { "home": "Holstein Kiel", "away": "Osnabrück", "date": "2026-09-19" },
      { "home": "Dynamo", "away": "Hertha", "date": "2026-09-19" },
      { "home": "Hannover 96", "away": "Bochum", "date": "2026-09-20" },
      { "home": "Energie Cottbus", "away": "St. Pauli", "date": "2026-09-20" },
      { "home": "Arminia", "away": "Heidenheim", "date": "2026-09-20" }
    ]
  },

// ============================================================
    //  NETHERLANDS - EERSTE DIVISIE
    // ============================================================
	"Netherlands Eerste Divisie": {
    "id": "netherlands-eerste-divisie",
    "logo": "netherlands/eerstedivisie.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Den Haag", "MP": 38, "MW": 29, "MD": 2, "ML": 7, "GF": 90, "GA": 37, "logo": "netherlands/denhaag.png" },
      { "rank": 2, "team": "Cambuur", "MP": 38, "MW": 23, "MD": 9, "ML": 6, "GF": 75, "GA": 48, "logo": "netherlands/cambuur.png" },
      { "rank": 3, "team": "Willem II", "MP": 38, "MW": 20, "MD": 8, "ML": 10, "GF": 59, "GA": 42, "logo": "netherlands/willemii.png" },
      { "rank": 4, "team": "De Graafschap", "MP": 38, "MW": 18, "MD": 9, "ML": 11, "GF": 74, "GA": 58, "logo": "netherlands/degraafschap.png" },
      { "rank": 5, "team": "Almere", "MP": 38, "MW": 18, "MD": 4, "ML": 16, "GF": 78, "GA": 63, "logo": "netherlands/almere.png" },
      { "rank": 6, "team": "RKC Waalwijk", "MP": 38, "MW": 16, "MD": 10, "ML": 12, "GF": 71, "GA": 59, "logo": "netherlands/rkcwaalwijk.png" },
      { "rank": 7, "team": "Jong PSV", "MP": 38, "MW": 17, "MD": 5, "ML": 16, "GF": 66, "GA": 64, "logo": "netherlands/jongpsv.png" },
      { "rank": 8, "team": "Roda", "MP": 38, "MW": 14, "MD": 13, "ML": 11, "GF": 59, "GA": 54, "logo": "netherlands/roda.png" },
      { "rank": 9, "team": "Den Bosch", "MP": 38, "MW": 14, "MD": 9, "ML": 15, "GF": 65, "GA": 69, "logo": "netherlands/denbosch.png" },
      { "rank": 10, "team": "Dordrecht", "MP": 38, "MW": 12, "MD": 11, "ML": 15, "GF": 48, "GA": 56, "logo": "netherlands/dordrecht.png" },
      { "rank": 11, "team": "FC Eindhoven", "MP": 38, "MW": 14, "MD": 5, "ML": 19, "GF": 51, "GA": 69, "logo": "netherlands/fceindhoven.png" },
      { "rank": 12, "team": "Jong FC Utrecht", "MP": 38, "MW": 12, "MD": 10, "ML": 16, "GF": 58, "GA": 62, "logo": "netherlands/jongutrecht.png" },
      { "rank": 13, "team": "VVV", "MP": 38, "MW": 13, "MD": 6, "ML": 19, "GF": 50, "GA": 58, "logo": "netherlands/vvv.png" },
      { "rank": 14, "team": "FC Emmen", "MP": 38, "MW": 12, "MD": 9, "ML": 17, "GF": 58, "GA": 72, "logo": "netherlands/fcemmen.png" },
      { "rank": 15, "team": "Vitesse", "MP": 38, "MW": 15, "MD": 11, "ML": 12, "GF": 64, "GA": 55, "logo": "netherlands/vitesse.png" },
      { "rank": 16, "team": "TOP Oss", "MP": 38, "MW": 11, "MD": 11, "ML": 16, "GF": 54, "GA": 64, "logo": "netherlands/toposs.png" },
      { "rank": 17, "team": "Jong AZ", "MP": 38, "MW": 12, "MD": 4, "ML": 22, "GF": 61, "GA": 76, "logo": "netherlands/jongaz.png" },
      { "rank": 18, "team": "Helmond Sport", "MP": 38, "MW": 10, "MD": 9, "ML": 19, "GF": 42, "GA": 62, "logo": "netherlands/helmondsport.png" },
      { "rank": 19, "team": "MVV", "MP": 38, "MW": 9, "MD": 11, "ML": 18, "GF": 41, "GA": 73, "logo": "netherlands/mvv.png" },
      { "rank": 20, "team": "Jong Ajax", "MP": 38, "MW": 9, "MD": 8, "ML": 21, "GF": 50, "GA": 73, "logo": "netherlands/jongajax.png" }
    ],
    "fixtures": [
      { "home": "Jong FC Utrecht", "away": "Jong Ajax", "date": "2026-09-14" },
      { "home": "Jong PSV", "away": "Jong AZ", "date": "2026-09-14" },
      { "home": "Den Bosch", "away": "Helmond Sport", "date": "2026-09-18" },
      { "home": "Jong Ajax", "away": "Roda", "date": "2026-09-18" },
      { "home": "RKC Waalwijk", "away": "MVV", "date": "2026-09-18" },
      { "home": "TOP Oss", "away": "Dordrecht", "date": "2026-09-18" },
      { "home": "Jong FC Utrecht", "away": "VVV", "date": "2026-09-18" },
      { "home": "FC Eindhoven", "away": "FC Emmen", "date": "2026-09-18" },
      { "home": "Jong AZ", "away": "FC Volendam", "date": "2026-09-18" },
      { "home": "Almere", "away": "Heracles", "date": "2026-09-18" }
    ]
  },
  
	
	// ============================================================
//  BELGIUM - PRO LEAGUE
// ============================================================

"Belgian Pro League": {
    id: "belgian-pro-league",
    logo: "belgium/proleague.png",
    isBasketball: false,
    season: "2025-26",
    teams: [
        { rank: 1, team: "Union", MP: 30, MW: 19, MD: 9, ML: 2, GF: 50, GA: 17, logo: "belgium/union.png" },
        { rank: 2, team: "Club Brugge", MP: 30, MW: 20, MD: 3, ML: 7, GF: 59, GA: 36, logo: "belgium/clubbrugge.png" },
        { rank: 3, team: "STVV", MP: 30, MW: 18, MD: 3, ML: 9, GF: 47, GA: 35, logo: "belgium/stvv.png" },
        { rank: 4, team: "Gent", MP: 30, MW: 13, MD: 6, ML: 11, GF: 49, GA: 43, logo: "belgium/gent.png" },
        { rank: 5, team: "Mechelen", MP: 30, MW: 12, MD: 9, ML: 9, GF: 39, GA: 37, logo: "belgium/mechelen.png" },
        { rank: 6, team: "Anderlecht", MP: 30, MW: 12, MD: 8, ML: 10, GF: 43, GA: 39, logo: "belgium/anderlecht.png" },
        { rank: 7, team: "Genk", MP: 30, MW: 11, MD: 9, ML: 10, GF: 46, GA: 47, logo: "belgium/genk.png" },
        { rank: 8, team: "Standard", MP: 30, MW: 11, MD: 7, ML: 12, GF: 27, GA: 35, logo: "belgium/standard.png" },
        { rank: 9, team: "Westerlo", MP: 30, MW: 10, MD: 9, ML: 11, GF: 36, GA: 40, logo: "belgium/westerlo.png" },
        { rank: 10, team: "Antwerp", MP: 30, MW: 9, MD: 8, ML: 13, GF: 31, GA: 32, logo: "belgium/antwerp.png" },
        { rank: 11, team: "Charleroi", MP: 30, MW: 9, MD: 7, ML: 14, GF: 38, GA: 42, logo: "belgium/charleroi.png" },
        { rank: 12, team: "OH Leuven", MP: 30, MW: 9, MD: 7, ML: 14, GF: 32, GA: 43, logo: "belgium/ohleuven.png" },
        { rank: 13, team: "Zulte Waregem", MP: 30, MW: 8, MD: 8, ML: 14, GF: 38, GA: 47, logo: "belgium/zultewaregem.png" },
        { rank: 14, team: "Cercle Brugge", MP: 30, MW: 7, MD: 10, ML: 13, GF: 39, GA: 47, logo: "belgium/cerclebrugge.png" },
        { rank: 15, team: "La Louvière", MP: 30, MW: 6, MD: 13, ML: 11, GF: 30, GA: 37, logo: "belgium/lalouviere.png" },
        { rank: 16, team: "Dender", MP: 30, MW: 3, MD: 10, ML: 17, GF: 24, GA: 51, logo: "belgium/dender.png" }
    ],
    fixtures: [
        
        // ===== MATCHDAY 7 =====
        { home: "Gent", away: "Standard", date: "2026-09-18 19:45" },
        { home: "OH Leuven", away: "La Louvière", date: "2026-09-19 15:00" },
        { home: "Charleroi", away: "Cercle Brugge", date: "2026-09-19 17:15" },
        { home: "Anderlecht", away: "Zulte Waregem", date: "2026-09-19 19:45" },
        { home: "Lommel", away: "Mechelen", date: "2026-09-19 19:45" },
        { home: "Antwerp", away: "Union", date: "2026-09-20 12:30" },
        { home: "STVV", away: "Westerlo", date: "2026-09-20 15:00" },
        { home: "Club Brugge", away: "Genk", date: "2026-09-20 17:30" },
        { home: "Kortrijk", away: "Beveren", date: "2026-09-20 18:15" }
    ]
},
// ============================================================
//  BELGIUM - CHALLENGER PRO LEAGUE
// ============================================================

"Belgian Challenger Pro League": {
    id: "belgian-challenger",
    logo: "belgium/challenger.png",
    isBasketball: false,
    season: "2025-26",
    teams: [
        { rank: 1, team: "Beveren", MP: 32, MW: 28, MD: 4, ML: 0, GF: 74, GA: 23, logo: "belgium/beveren.png" },
        { rank: 2, team: "Kortrijk", MP: 32, MW: 21, MD: 4, ML: 7, GF: 59, GA: 33, logo: "belgium/kortrijk.png" },
        { rank: 3, team: "Beerschot", MP: 32, MW: 19, MD: 7, ML: 6, GF: 52, GA: 31, logo: "belgium/beerschot.png" },
        { rank: 4, team: "RFC Liège", MP: 32, MW: 16, MD: 5, ML: 11, GF: 44, GA: 39, logo: "belgium/rfcliege.png" },
        { rank: 5, team: "Lommel", MP: 32, MW: 15, MD: 8, ML: 9, GF: 59, GA: 46, logo: "belgium/lommel.png" },
        { rank: 6, team: "Patro Eisden", MP: 32, MW: 14, MD: 9, ML: 9, GF: 44, GA: 40, logo: "belgium/patroeisden.png" },
        { rank: 7, team: "Eupen", MP: 32, MW: 12, MD: 11, ML: 9, GF: 44, GA: 36, logo: "belgium/eupen.png" },
        { rank: 8, team: "Lokeren", MP: 32, MW: 10, MD: 12, ML: 10, GF: 48, GA: 45, logo: "belgium/lokeren.png" },
        { rank: 9, team: "Jong KAA Gent", MP: 32, MW: 12, MD: 5, ML: 15, GF: 42, GA: 51, logo: "belgium/jonggent.png" },
        { rank: 10, team: "Lierse SK", MP: 32, MW: 10, MD: 8, ML: 14, GF: 35, GA: 42, logo: "belgium/liersesk.png" },
        { rank: 11, team: "RFC Seraing", MP: 32, MW: 8, MD: 11, ML: 13, GF: 37, GA: 44, logo: "belgium/rfcseraing.png" },
        { rank: 12, team: "Francs Borains", MP: 32, MW: 9, MD: 8, ML: 15, GF: 33, GA: 47, logo: "belgium/francsborains.png" },
        { rank: 13, team: "Daring Brussels", MP: 32, MW: 9, MD: 9, ML: 14, GF: 50, GA: 54, logo: "belgium/daringbrussels.png" },
        { rank: 14, team: "RSCA FUTURES", MP: 32, MW: 7, MD: 10, ML: 15, GF: 46, GA: 55, logo: "belgium/rscafutures.png" },
        { rank: 15, team: "Jong Genk", MP: 32, MW: 7, MD: 10, ML: 15, GF: 42, GA: 59, logo: "belgium/jonggenk.png" },
        { rank: 16, team: "Club NXT", MP: 32, MW: 5, MD: 6, ML: 21, GF: 33, GA: 55, logo: "belgium/clubnxt.png" },
        { rank: 17, team: "Olympic Charleroi", MP: 32, MW: 3, MD: 7, ML: 22, GF: 26, GA: 68, logo: "belgium/roccharleroi.png" }
    ],
    fixtures: [
        // ===== MATCHDAY 6 =====
        { home: "Club NXT", away: "Jong KAA Gent", date: "2026-09-18 19:00" },
        { home: "Francs Borains", away: "RSCA FUTURES", date: "2026-09-18 19:00" },
        { home: "Sporting Hasselt", away: "Beerschot", date: "2026-09-19 15:00" },
        { home: "Jong Genk", away: "RFC Seraing", date: "2026-09-19 15:00" },
        { home: "Eupen", away: "RFC Liège", date: "2026-09-19 19:00" },
        { home: "Lokeren", away: "Virton", date: "2026-09-20 15:00" },
        { home: "Dender", away: "Patro Eisden", date: "2026-09-20 18:15" },
        
        // ===== MATCHDAY 7 =====
        { home: "Jong KAA Gent", away: "RFC Seraing", date: "2026-10-09" },
        { home: "Dender", away: "Club NXT", date: "2026-10-09" },
        { home: "Patro Eisden", away: "Jong Genk", date: "2026-10-09" },
        { home: "RSCA FUTURES", away: "Eupen", date: "2026-10-09" },
        { home: "Virton", away: "Sporting Hasselt", date: "2026-10-10 15:00" },
        { home: "Lierse SK", away: "Francs Borains", date: "2026-10-10 15:00" },
        { home: "Beerschot", away: "RFC Liège", date: "2026-10-10 19:00" }
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
      { "rank": 1, "team": "Nashville", "MP": 25, "MW": 16, "MD": 6, "ML": 3, "GF": 50, "GA": 21, "logo": "usa/nashville.png" },
      { "rank": 2, "team": "Inter Miami", "MP": 25, "MW": 12, "MD": 9, "ML": 4, "GF": 61, "GA": 46, "logo": "usa/intermiami.png" },
      { "rank": 3, "team": "New England", "MP": 25, "MW": 13, "MD": 4, "ML": 8, "GF": 41, "GA": 31, "logo": "usa/newengland.png" },
      { "rank": 4, "team": "Charlotte", "MP": 25, "MW": 11, "MD": 7, "ML": 7, "GF": 45, "GA": 36, "logo": "usa/charlotte.png" },
      { "rank": 5, "team": "Chicago", "MP": 24, "MW": 11, "MD": 6, "ML": 7, "GF": 45, "GA": 35, "logo": "usa/chicago.png" },
      { "rank": 6, "team": "Orlando City", "MP": 25, "MW": 10, "MD": 4, "ML": 11, "GF": 44, "GA": 56, "logo": "usa/orlandocity.png" },
      { "rank": 7, "team": "New York City", "MP": 25, "MW": 8, "MD": 8, "ML": 9, "GF": 39, "GA": 33, "logo": "usa/nycfc.png" },
      { "rank": 8, "team": "Cincinnati", "MP": 24, "MW": 8, "MD": 8, "ML": 8, "GF": 52, "GA": 59, "logo": "usa/cincinnati.png" },
      { "rank": 9, "team": "Philadelphia", "MP": 24, "MW": 8, "MD": 6, "ML": 10, "GF": 41, "GA": 39, "logo": "usa/philadelphia.png" },
      { "rank": 10, "team": "NY Red Bulls", "MP": 25, "MW": 8, "MD": 6, "ML": 11, "GF": 33, "GA": 48, "logo": "usa/nyredbulls.png" },
      { "rank": 11, "team": "D.C. United", "MP": 24, "MW": 6, "MD": 11, "ML": 7, "GF": 30, "GA": 37, "logo": "usa/dcunited.png" },
      { "rank": 12, "team": "Toronto", "MP": 25, "MW": 6, "MD": 11, "ML": 8, "GF": 38, "GA": 46, "logo": "usa/toronto.png" },
      { "rank": 13, "team": "Columbus", "MP": 25, "MW": 6, "MD": 5, "ML": 14, "GF": 35, "GA": 42, "logo": "usa/columbus.png" },
      { "rank": 14, "team": "Atlanta United", "MP": 25, "MW": 6, "MD": 5, "ML": 14, "GF": 29, "GA": 43, "logo": "usa/atlantaunited.png" },
      { "rank": 15, "team": "Montréal", "MP": 25, "MW": 5, "MD": 6, "ML": 14, "GF": 31, "GA": 51, "logo": "usa/montreal.png" },
      { "rank": 16, "team": "Vancouver", "MP": 24, "MW": 14, "MD": 4, "ML": 6, "GF": 53, "GA": 23, "logo": "usa/vancouver.png" },
      { "rank": 17, "team": "Houston Dynamo", "MP": 25, "MW": 13, "MD": 4, "ML": 8, "GF": 32, "GA": 28, "logo": "usa/houstondynamo.png" },
      { "rank": 18, "team": "Dallas", "MP": 25, "MW": 12, "MD": 7, "ML": 6, "GF": 49, "GA": 42, "logo": "usa/dallas.png" },
      { "rank": 19, "team": "San Jose", "MP": 25, "MW": 12, "MD": 5, "ML": 8, "GF": 44, "GA": 36, "logo": "usa/sanjose.png" },
      { "rank": 20, "team": "St. Louis", "MP": 25, "MW": 11, "MD": 8, "ML": 6, "GF": 42, "GA": 35, "logo": "usa/stlouis.png" },
      { "rank": 21, "team": "LAFC", "MP": 26, "MW": 11, "MD": 7, "ML": 8, "GF": 41, "GA": 27, "logo": "usa/lafc.png" },
      { "rank": 22, "team": "Colorado", "MP": 25, "MW": 11, "MD": 2, "ML": 12, "GF": 33, "GA": 32, "logo": "usa/colorado.png" },
      { "rank": 23, "team": "Portland", "MP": 25, "MW": 9, "MD": 5, "ML": 11, "GF": 47, "GA": 47, "logo": "usa/portland.png" },
      { "rank": 24, "team": "San Diego", "MP": 24, "MW": 8, "MD": 6, "ML": 10, "GF": 42, "GA": 37, "logo": "usa/sandiego.png" },
      { "rank": 25, "team": "LA Galaxy", "MP": 26, "MW": 7, "MD": 9, "ML": 10, "GF": 31, "GA": 40, "logo": "usa/lagalaxy.png" },
      { "rank": 26, "team": "Salt Lake", "MP": 24, "MW": 8, "MD": 5, "ML": 11, "GF": 37, "GA": 39, "logo": "usa/saltlake.png" },
      { "rank": 27, "team": "Minnesota", "MP": 25, "MW": 7, "MD": 8, "ML": 10, "GF": 37, "GA": 43, "logo": "usa/minnesota.png" },
      { "rank": 28, "team": "Austin", "MP": 25, "MW": 7, "MD": 8, "ML": 10, "GF": 32, "GA": 44, "logo": "usa/austin.png" },
      { "rank": 29, "team": "Seattle Sounders", "MP": 23, "MW": 7, "MD": 7, "ML": 9, "GF": 25, "GA": 30, "logo": "usa/seattlesounders.png" },
      { "rank": 30, "team": "Sporting KC", "MP": 24, "MW": 5, "MD": 3, "ML": 16, "GF": 26, "GA": 59, "logo": "usa/sportingkc.png" }
    ],
    "fixtures": [
      { "home": "San Diego", "away": "Philadelphia", "date": "2026-09-14" },
      { "home": "New York City", "away": "NY Red Bulls", "date": "2026-09-19" },
      { "home": "San Jose", "away": "LAFC", "date": "2026-09-20" },
      { "home": "New England", "away": "Orlando City", "date": "2026-09-20" },
      { "home": "Montréal", "away": "Columbus", "date": "2026-09-20" },
      { "home": "D.C. United", "away": "Charlotte", "date": "2026-09-20" },
      { "home": "Houston Dynamo", "away": "Cincinnati", "date": "2026-09-20" },
      { "home": "Sporting KC", "away": "Philadelphia", "date": "2026-09-20" },
      { "home": "St. Louis", "away": "Toronto", "date": "2026-09-20" },
      { "home": "Minnesota", "away": "LA Galaxy", "date": "2026-09-20" },
      { "home": "Dallas", "away": "Austin", "date": "2026-09-20" },
      { "home": "Nashville", "away": "Chicago", "date": "2026-09-20" },
      { "home": "Colorado", "away": "Seattle Sounders", "date": "2026-09-20" },
      { "home": "Salt Lake", "away": "Vancouver", "date": "2026-09-20" },
      { "home": "Portland", "away": "Atlanta United", "date": "2026-09-20" },
      { "home": "Inter Miami", "away": "San Diego", "date": "2026-09-21" },
      { "home": "Seattle Sounders", "away": "Salt Lake", "date": "2026-09-24" },
      { "home": "NY Red Bulls", "away": "St. Louis", "date": "2026-09-27" },
      { "home": "Philadelphia", "away": "Orlando City", "date": "2026-09-27" },
      { "home": "Atlanta United", "away": "New York City", "date": "2026-09-27" },
      { "home": "Montréal", "away": "Cincinnati", "date": "2026-09-27" },
      { "home": "Charlotte", "away": "Chicago", "date": "2026-09-27" },
      { "home": "Austin", "away": "San Diego", "date": "2026-09-27" },
      { "home": "Houston Dynamo", "away": "Sporting KC", "date": "2026-09-27" },
      { "home": "Dallas", "away": "LAFC", "date": "2026-09-27" },
      { "home": "Nashville", "away": "Toronto", "date": "2026-09-27" },
      { "home": "Seattle Sounders", "away": "Minnesota", "date": "2026-09-27" },
      { "home": "Salt Lake", "away": "New England", "date": "2026-09-27" },
      { "home": "Vancouver", "away": "D.C. United", "date": "2026-09-27" },
      { "home": "LA Galaxy", "away": "Colorado", "date": "2026-09-27" },
      { "home": "San Jose", "away": "Portland", "date": "2026-09-27" },
      { "home": "Columbus", "away": "Inter Miami", "date": "2026-09-28" },
      { "home": "Seattle Sounders", "away": "Sporting KC", "date": "2026-10-02" },
      { "home": "Chicago", "away": "Vancouver", "date": "2026-10-07" },
      { "home": "Toronto", "away": "Montréal", "date": "2026-10-10" },
      { "home": "Chicago", "away": "New York City", "date": "2026-10-10" },
      { "home": "New England", "away": "Seattle Sounders", "date": "2026-10-11" },
      { "home": "Inter Miami", "away": "D.C. United", "date": "2026-10-11" },
      { "home": "Philadelphia", "away": "Salt Lake", "date": "2026-10-11" },
      { "home": "NY Red Bulls", "away": "San Diego", "date": "2026-10-11" },
      { "home": "Orlando City", "away": "Columbus", "date": "2026-10-11" },
      { "home": "Charlotte", "away": "Dallas", "date": "2026-10-11" },
      { "home": "Atlanta United", "away": "Cincinnati", "date": "2026-10-11" },
      { "home": "Austin", "away": "Nashville", "date": "2026-10-11" },
      { "home": "Minnesota", "away": "Houston Dynamo", "date": "2026-10-11" },
      { "home": "Sporting KC", "away": "Portland", "date": "2026-10-11" },
      { "home": "Colorado", "away": "San Jose", "date": "2026-10-11" },
      { "home": "LAFC", "away": "Vancouver", "date": "2026-10-11" },
      { "home": "St. Louis", "away": "LA Galaxy", "date": "2026-10-12" }
    ]
  },
  
   // ============================================================
    //  ARGENTINA
    // ============================================================

   "Argentine Liga Profesional": {
    "id": "argentine-primera-division",
    "logo": "argentina/primera.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "River", "MP": 16, "MW": 12, "MD": 3, "ML": 1, "GF": 34, "GA": 10, "logo": "argentina/river.png" },
      { "rank": 2, "team": "Racing Club", "MP": 16, "MW": 11, "MD": 4, "ML": 1, "GF": 30, "GA": 12, "logo": "argentina/racing.png" },
      { "rank": 3, "team": "Boca", "MP": 16, "MW": 10, "MD": 4, "ML": 2, "GF": 28, "GA": 14, "logo": "argentina/boca.png" },
      { "rank": 4, "team": "Independiente", "MP": 16, "MW": 9, "MD": 5, "ML": 2, "GF": 25, "GA": 13, "logo": "argentina/independiente.png" },
      { "rank": 5, "team": "Huracán", "MP": 16, "MW": 8, "MD": 6, "ML": 2, "GF": 22, "GA": 11, "logo": "argentina/huracan.png" },
      { "rank": 6, "team": "Talleres", "MP": 16, "MW": 8, "MD": 5, "ML": 3, "GF": 24, "GA": 16, "logo": "argentina/talleres.png" },
      { "rank": 7, "team": "Vélez Sársfield", "MP": 16, "MW": 7, "MD": 7, "ML": 2, "GF": 20, "GA": 13, "logo": "argentina/velez.png" },
      { "rank": 8, "team": "Unión", "MP": 16, "MW": 7, "MD": 5, "ML": 4, "GF": 19, "GA": 15, "logo": "argentina/union.png" },
      { "rank": 9, "team": "Lanús", "MP": 16, "MW": 6, "MD": 7, "ML": 3, "GF": 21, "GA": 18, "logo": "argentina/lanus.png" },
      { "rank": 10, "team": "Estudiantes", "MP": 16, "MW": 6, "MD": 6, "ML": 4, "GF": 18, "GA": 16, "logo": "argentina/estudiantes.png" },
      { "rank": 11, "team": "Instituto", "MP": 16, "MW": 6, "MD": 5, "ML": 5, "GF": 17, "GA": 17, "logo": "argentina/instituto.png" },
      { "rank": 12, "team": "Atlético Tucumán", "MP": 16, "MW": 5, "MD": 7, "ML": 4, "GF": 16, "GA": 15, "logo": "argentina/atleticotucuman.png" },
      { "rank": 13, "team": "Belgrano", "MP": 16, "MW": 5, "MD": 6, "ML": 5, "GF": 18, "GA": 19, "logo": "argentina/belgrano.png" },
      { "rank": 14, "team": "Central", "MP": 16, "MW": 5, "MD": 5, "ML": 6, "GF": 15, "GA": 17, "logo": "argentina/central.png" },
      { "rank": 15, "team": "San Lorenzo", "MP": 16, "MW": 4, "MD": 7, "ML": 5, "GF": 14, "GA": 16, "logo": "argentina/sanlorenzo.png" },
      { "rank": 16, "team": "Gimnasia LP", "MP": 16, "MW": 4, "MD": 6, "ML": 6, "GF": 16, "GA": 19, "logo": "argentina/gimnasia.png" },
      { "rank": 17, "team": "Argentinos Juniors", "MP": 16, "MW": 4, "MD": 6, "ML": 6, "GF": 15, "GA": 18, "logo": "argentina/argentinos.png" },
      { "rank": 18, "team": "Central Córdoba", "MP": 16, "MW": 4, "MD": 5, "ML": 7, "GF": 14, "GA": 19, "logo": "argentina/centralcordoba.png" },
      { "rank": 19, "team": "Platense", "MP": 16, "MW": 3, "MD": 7, "ML": 6, "GF": 12, "GA": 17, "logo": "argentina/platense.png" },
      { "rank": 20, "team": "Tigre", "MP": 16, "MW": 3, "MD": 6, "ML": 7, "GF": 13, "GA": 19, "logo": "argentina/tigre.png" },
      { "rank": 21, "team": "Defensa y Justicia", "MP": 16, "MW": 3, "MD": 5, "ML": 8, "GF": 12, "GA": 20, "logo": "argentina/defensa.png" },
      { "rank": 22, "team": "Independiente Rivadavia", "MP": 16, "MW": 3, "MD": 4, "ML": 9, "GF": 11, "GA": 22, "logo": "argentina/independienterivadavia.png" },
      { "rank": 23, "team": "Gimnasia y Esgirma", "MP": 16, "MW": 2, "MD": 6, "ML": 8, "GF": 10, "GA": 20, "logo": "argentina/gimnasiaesgirma.png" },
      { "rank": 24, "team": "Newell's", "MP": 16, "MW": 2, "MD": 5, "ML": 9, "GF": 9, "GA": 22, "logo": "argentina/newells.png" },
      { "rank": 25, "team": "Barracas Central", "MP": 16, "MW": 2, "MD": 4, "ML": 10, "GF": 8, "GA": 24, "logo": "argentina/barracas.png" },
      { "rank": 26, "team": "Sarmiento", "MP": 16, "MW": 1, "MD": 6, "ML": 9, "GF": 7, "GA": 21, "logo": "argentina/sarmiento.png" },
      { "rank": 27, "team": "Aldosivi", "MP": 16, "MW": 1, "MD": 5, "ML": 10, "GF": 6, "GA": 23, "logo": "argentina/aldosivi.png" },
      { "rank": 28, "team": "Banfield", "MP": 16, "MW": 1, "MD": 4, "ML": 11, "GF": 5, "GA": 25, "logo": "argentina/banfield.png" },
      { "rank": 29, "team": "Deportivo Riestra", "MP": 16, "MW": 1, "MD": 3, "ML": 12, "GF": 4, "GA": 28, "logo": "argentina/riestra.png" },
      { "rank": 30, "team": "Estudiantes de Río Cuarto", "MP": 16, "MW": 0, "MD": 4, "ML": 12, "GF": 3, "GA": 30, "logo": "argentina/estudiantesriocuarto.png" }
    ],
    "fixtures": [
      { "home": "Independiente Rivadavia", "away": "Aldosivi", "date": "2026-09-12" },
      { "home": "Atlético Tucumán", "away": "River", "date": "2026-09-12" },
      { "home": "Talleres", "away": "Unión", "date": "2026-09-13" },
      { "home": "Sarmiento", "away": "Belgrano", "date": "2026-09-13" },
      { "home": "Tigre", "away": "Central", "date": "2026-09-13" },
      { "home": "Argentinos Juniors", "away": "Gimnasia LP", "date": "2026-09-13" },
      { "home": "Independiente", "away": "San Lorenzo", "date": "2026-09-14" },
      { "home": "Huracán", "away": "Racing Club", "date": "2026-09-14" },
      { "home": "Deportivo Riestra", "away": "Lanús", "date": "2026-09-15" },
      { "home": "Banfield", "away": "Barracas Central", "date": "2026-09-15" },
      { "home": "Instituto", "away": "Estudiantes de Río Cuarto", "date": "2026-09-15" }
    ]
  },
    "Argentine Primera B Metropolitana": {
    "id": "argentine-primera-b-metropolitana",
    "logo": "argentina/primera-b.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Talleres Remedios", "MP": 34, "MW": 20, "MD": 9, "ML": 5, "GF": 58, "GA": 28, "logo": "argentina/talleresremedios.png" },
      { "rank": 2, "team": "Dock Sud", "MP": 34, "MW": 19, "MD": 10, "ML": 5, "GF": 52, "GA": 25, "logo": "argentina/docksud.png" },
      { "rank": 3, "team": "Argentino Quilmes", "MP": 34, "MW": 18, "MD": 11, "ML": 5, "GF": 49, "GA": 27, "logo": "argentina/argentin quilmes.png" },
      { "rank": 4, "team": "Excursionistas", "MP": 34, "MW": 17, "MD": 10, "ML": 7, "GF": 47, "GA": 30, "logo": "argentina/excursionistas.png" },
      { "rank": 5, "team": "Arsenal Sarandi", "MP": 34, "MW": 16, "MD": 12, "ML": 6, "GF": 44, "GA": 29, "logo": "argentina/arsenalsarandi.png" },
      { "rank": 6, "team": "Comunicaciones", "MP": 34, "MW": 15, "MD": 13, "ML": 6, "GF": 43, "GA": 28, "logo": "argentina/comunicaciones.png" },
      { "rank": 7, "team": "Flandria", "MP": 34, "MW": 14, "MD": 12, "ML": 8, "GF": 41, "GA": 32, "logo": "argentina/flandria.png" },
      { "rank": 8, "team": "Dep. Armenio", "MP": 34, "MW": 13, "MD": 14, "ML": 7, "GF": 39, "GA": 31, "logo": "argentina/deparmenio.png" },
      { "rank": 9, "team": "Defensores Unidos", "MP": 34, "MW": 13, "MD": 13, "ML": 8, "GF": 40, "GA": 33, "logo": "argentina/defensoresunidos.png" },
      { "rank": 10, "team": "Sportivo Italiano", "MP": 34, "MW": 12, "MD": 14, "ML": 8, "GF": 37, "GA": 31, "logo": "argentina/sportivoitaliano.png" },
      { "rank": 11, "team": "Deportivo Camioneros", "MP": 34, "MW": 11, "MD": 13, "ML": 10, "GF": 35, "GA": 34, "logo": "argentina/deportivocamioneros.png" },
      { "rank": 12, "team": "Villa San Carlos", "MP": 34, "MW": 10, "MD": 14, "ML": 10, "GF": 33, "GA": 33, "logo": "argentina/villasantacarlos.png" },
      { "rank": 13, "team": "Brown (A)", "MP": 34, "MW": 10, "MD": 13, "ML": 11, "GF": 32, "GA": 35, "logo": "argentina/brown.png" },
      { "rank": 14, "team": "Ituzaingó", "MP": 34, "MW": 9, "MD": 14, "ML": 11, "GF": 31, "GA": 34, "logo": "argentina/ituzaingo.png" },
      { "rank": 15, "team": "Argentino de Merlo", "MP": 34, "MW": 9, "MD": 12, "ML": 13, "GF": 30, "GA": 36, "logo": "argentina/argentinomerlo.png" },
      { "rank": 16, "team": "UAI Urquiza", "MP": 34, "MW": 8, "MD": 14, "ML": 12, "GF": 29, "GA": 35, "logo": "argentina/uaiurquiza.png" },
      { "rank": 17, "team": "Laferrere", "MP": 34, "MW": 8, "MD": 13, "ML": 13, "GF": 28, "GA": 37, "logo": "argentina/laferrere.png" },
      { "rank": 18, "team": "San Martín Burzaco", "MP": 34, "MW": 7, "MD": 15, "ML": 12, "GF": 27, "GA": 36, "logo": "argentina/sanmartinburzaco.png" },
      { "rank": 19, "team": "Deportivo Merlo", "MP": 34, "MW": 7, "MD": 14, "ML": 13, "GF": 26, "GA": 38, "logo": "argentina/deportivomerlo.png" },
      { "rank": 20, "team": "Real Pilar", "MP": 34, "MW": 6, "MD": 14, "ML": 14, "GF": 25, "GA": 40, "logo": "argentina/realpilar.png" },
      { "rank": 21, "team": "Liniers", "MP": 34, "MW": 5, "MD": 13, "ML": 16, "GF": 23, "GA": 44, "logo": "argentina/liniers.png" },
      { "rank": 22, "team": "Dálmine", "MP": 34, "MW": 4, "MD": 14, "ML": 16, "GF": 21, "GA": 45, "logo": "argentina/dalmine.png" }
    ],
    "fixtures": [
      { "home": "Liniers", "away": "Argentino de Merlo", "date": "2026-09-19" },
      { "home": "Sportivo Italiano", "away": "Brown (A)", "date": "2026-09-19" },
      { "home": "Comunicaciones", "away": "Defensores Unidos", "date": "2026-09-19" },
      { "home": "UAI Urquiza", "away": "Excursionistas", "date": "2026-09-19" },
      { "home": "Dock Sud", "away": "Argentino Quilmes", "date": "2026-09-19" },
      { "home": "Deportivo Merlo", "away": "Flandria", "date": "2026-09-19" },
      { "home": "Real Pilar", "away": "Arsenal Sarandi", "date": "2026-09-19" },
      { "home": "San Martín Burzaco", "away": "Laferrere", "date": "2026-09-19" },
      { "home": "Dálmine", "away": "Ituzaingó", "date": "2026-09-19" },
      { "home": "Deportivo Camioneros", "away": "Dep. Armenio", "date": "2026-09-19" },
      { "home": "Villa San Carlos", "away": "Talleres Remedios", "date": "2026-09-19" }
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
      { "rank": 1, "team": "Flamengo", "MP": 27, "MW": 17, "MD": 6, "ML": 4, "GF": 53, "GA": 22, "logo": "brazil/flamengo.png" },
      { "rank": 2, "team": "Palmeiras", "MP": 27, "MW": 16, "MD": 8, "ML": 3, "GF": 47, "GA": 21, "logo": "brazil/palmeiras.png" },
      { "rank": 3, "team": "Athletico-PR", "MP": 27, "MW": 13, "MD": 7, "ML": 7, "GF": 41, "GA": 31, "logo": "brazil/athleticopr.png" },
      { "rank": 4, "team": "Fluminense", "MP": 27, "MW": 12, "MD": 9, "ML": 6, "GF": 41, "GA": 35, "logo": "brazil/fluminense.png" },
      { "rank": 5, "team": "Bahia", "MP": 26, "MW": 11, "MD": 10, "ML": 5, "GF": 40, "GA": 32, "logo": "brazil/bahia.png" },
      { "rank": 6, "team": "Cruzeiro", "MP": 27, "MW": 12, "MD": 6, "ML": 9, "GF": 39, "GA": 39, "logo": "brazil/cruzeiro.png" },
      { "rank": 7, "team": "Atlético Mineiro", "MP": 26, "MW": 11, "MD": 6, "ML": 9, "GF": 35, "GA": 31, "logo": "brazil/atleticomineiro.png" },
      { "rank": 8, "team": "Coritiba", "MP": 27, "MW": 10, "MD": 8, "ML": 9, "GF": 37, "GA": 38, "logo": "brazil/coritiba.png" },
      { "rank": 9, "team": "Bragantino", "MP": 26, "MW": 10, "MD": 6, "ML": 10, "GF": 32, "GA": 29, "logo": "brazil/bragantino.png" },
      { "rank": 10, "team": "Santos", "MP": 26, "MW": 9, "MD": 8, "ML": 9, "GF": 39, "GA": 39, "logo": "brazil/santos.png" },
      { "rank": 11, "team": "São Paulo", "MP": 26, "MW": 9, "MD": 6, "ML": 11, "GF": 31, "GA": 30, "logo": "brazil/saopaulo.png" },
      { "rank": 12, "team": "Vitória", "MP": 27, "MW": 9, "MD": 6, "ML": 12, "GF": 27, "GA": 39, "logo": "brazil/vitoria.png" },
      { "rank": 13, "team": "Corinthians", "MP": 27, "MW": 8, "MD": 8, "ML": 11, "GF": 28, "GA": 29, "logo": "brazil/corinthians.png" },
      { "rank": 14, "team": "Botafogo", "MP": 26, "MW": 8, "MD": 8, "ML": 10, "GF": 38, "GA": 41, "logo": "brazil/botafogo.png" },
      { "rank": 15, "team": "Mirassol", "MP": 27, "MW": 7, "MD": 8, "ML": 12, "GF": 31, "GA": 42, "logo": "brazil/mirassol.png" },
      { "rank": 16, "team": "Grêmio", "MP": 26, "MW": 7, "MD": 7, "ML": 12, "GF": 28, "GA": 35, "logo": "brazil/gremio.png" },
      { "rank": 17, "team": "Vasco", "MP": 26, "MW": 7, "MD": 7, "ML": 12, "GF": 29, "GA": 41, "logo": "brazil/vasco.png" },
      { "rank": 18, "team": "Internacional", "MP": 27, "MW": 6, "MD": 10, "ML": 11, "GF": 30, "GA": 35, "logo": "brazil/internacional.png" },
      { "rank": 19, "team": "Remo", "MP": 26, "MW": 5, "MD": 8, "ML": 13, "GF": 30, "GA": 43, "logo": "brazil/remo.png" },
      { "rank": 20, "team": "Chapecoense", "MP": 26, "MW": 3, "MD": 8, "ML": 15, "GF": 28, "GA": 52, "logo": "brazil/chapecoense.png" }
    ],
    "fixtures": [
      { "home": "Bahia", "away": "Remo", "date": "2026-09-14" },
      { "home": "Botafogo", "away": "Grêmio", "date": "2026-09-17" },
      { "home": "Atlético Mineiro", "away": "Chapecoense", "date": "2026-09-19" },
      { "home": "Mirassol", "away": "Botafogo", "date": "2026-09-19" },
      { "home": "Remo", "away": "Santos", "date": "2026-09-20" },
      { "home": "Vasco", "away": "Coritiba", "date": "2026-09-20" },
      { "home": "São Paulo", "away": "Internacional", "date": "2026-09-20" },
      { "home": "Grêmio", "away": "Palmeiras", "date": "2026-09-20" },
      { "home": "Vitória", "away": "Cruzeiro", "date": "2026-09-20" },
      { "home": "Corinthians", "away": "Fluminense", "date": "2026-09-20" },
      { "home": "Flamengo", "away": "Bragantino", "date": "2026-09-21" },
      { "home": "Athletico-PR", "away": "Bahia", "date": "2026-09-21" },
      { "home": "Remo", "away": "Grêmio", "date": "2026-10-08" },
      { "home": "Bragantino", "away": "Mirassol", "date": "2026-10-08" },
      { "home": "Internacional", "away": "Corinthians", "date": "2026-10-08" },
      { "home": "Vitória", "away": "Chapecoense", "date": "2026-10-08" },
      { "home": "Botafogo", "away": "Vasco", "date": "2026-10-08" },
      { "home": "Cruzeiro", "away": "São Paulo", "date": "2026-10-08" },
      { "home": "Santos", "away": "Flamengo", "date": "2026-10-09" },
      { "home": "Athletico-PR", "away": "Atlético Mineiro", "date": "2026-10-09" },
      { "home": "Fluminense", "away": "Coritiba", "date": "2026-10-09" },
      { "home": "Palmeiras", "away": "Bahia", "date": "2026-10-09" },
      { "home": "Vasco", "away": "Remo", "date": "2026-10-10" },
      { "home": "São Paulo", "away": "Vitória", "date": "2026-10-11" },
      { "home": "Atlético Mineiro", "away": "Santos", "date": "2026-10-11" },
      { "home": "Flamengo", "away": "Fluminense", "date": "2026-10-11" },
      { "home": "Palmeiras", "away": "Corinthians", "date": "2026-10-11" },
      { "home": "Grêmio", "away": "Internacional", "date": "2026-10-11" },
      { "home": "Coritiba", "away": "Botafogo", "date": "2026-10-12" },
      { "home": "Bahia", "away": "Mirassol", "date": "2026-10-12" },
      { "home": "Chapecoense", "away": "Athletico-PR", "date": "2026-10-13" },
      { "home": "Bragantino", "away": "Cruzeiro", "date": "2026-10-13" }
    ]
  },

    // ============================================================
    //  CHILE - PRIMERA A
    // ============================================================

   "Chile Primera A": {
    "id": "chile-primera-a",
    "logo": "chile/primeraa.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Colo-Colo", "MP": 23, "MW": 17, "MD": 3, "ML": 3, "GF": 48, "GA": 22, "logo": "chile/colocolo.png" },
      { "rank": 2, "team": "Universidad Católica", "MP": 23, "MW": 13, "MD": 3, "ML": 7, "GF": 50, "GA": 33, "logo": "chile/ucatolica.png" },
      { "rank": 3, "team": "Universidad de Chile", "MP": 23, "MW": 12, "MD": 6, "ML": 5, "GF": 35, "GA": 19, "logo": "chile/udechile.png" },
      { "rank": 4, "team": "Everton", "MP": 23, "MW": 10, "MD": 6, "ML": 7, "GF": 37, "GA": 25, "logo": "chile/everton.png" },
      { "rank": 5, "team": "Palestino", "MP": 23, "MW": 11, "MD": 3, "ML": 9, "GF": 36, "GA": 33, "logo": "chile/palestino.png" },
      { "rank": 6, "team": "Deportes Limache", "MP": 22, "MW": 10, "MD": 3, "ML": 9, "GF": 43, "GA": 34, "logo": "chile/limache.png" },
      { "rank": 7, "team": "Ñublense", "MP": 23, "MW": 8, "MD": 8, "ML": 7, "GF": 28, "GA": 31, "logo": "chile/nublense.png" },
      { "rank": 8, "team": "Concepción", "MP": 23, "MW": 9, "MD": 4, "ML": 10, "GF": 25, "GA": 26, "logo": "chile/concepcion.png" },
      { "rank": 9, "team": "La Serena", "MP": 23, "MW": 7, "MD": 9, "ML": 7, "GF": 34, "GA": 38, "logo": "chile/laserena.png" },
      { "rank": 10, "team": "Coquimbo", "MP": 22, "MW": 8, "MD": 5, "ML": 9, "GF": 31, "GA": 31, "logo": "chile/coquimbo.png" },
      { "rank": 11, "team": "Audax Italiano", "MP": 23, "MW": 7, "MD": 7, "ML": 9, "GF": 26, "GA": 31, "logo": "chile/aitaliano.png" },
      { "rank": 12, "team": "O'Higgins", "MP": 23, "MW": 8, "MD": 3, "ML": 12, "GF": 28, "GA": 36, "logo": "chile/ohiggins.png" },
      { "rank": 13, "team": "Huachipato", "MP": 21, "MW": 7, "MD": 4, "ML": 10, "GF": 29, "GA": 39, "logo": "chile/huachipato.png" },
      { "rank": 14, "team": "Cobresal", "MP": 23, "MW": 7, "MD": 3, "ML": 13, "GF": 34, "GA": 44, "logo": "chile/cobresal.png" },
      { "rank": 15, "team": "Universidad de Concepción", "MP": 22, "MW": 6, "MD": 4, "ML": 12, "GF": 17, "GA": 37, "logo": "chile/udeconcepcion.png" },
      { "rank": 16, "team": "Unión La Calera", "MP": 22, "MW": 3, "MD": 5, "ML": 14, "GF": 18, "GA": 40, "logo": "chile/unionlacalera.png" }
    ],
    "fixtures": [
      { "home": "Unión La Calera", "away": "Deportes Limache", "date": "2026-09-15" },
      { "home": "Universidad de Concepción", "away": "Huachipato", "date": "2026-10-03" },
      { "home": "Universidad de Chile", "away": "Ñublense", "date": "2026-10-10" },
      { "home": "Cobresal", "away": "Universidad de Concepción", "date": "2026-10-10" },
      { "home": "Huachipato", "away": "O'Higgins", "date": "2026-10-10" },
      { "home": "Universidad Católica", "away": "Audax Italiano", "date": "2026-10-11" },
      { "home": "Everton", "away": "La Serena", "date": "2026-10-11" },
      { "home": "Coquimbo", "away": "Colo-Colo", "date": "2026-10-11" },
      { "home": "Concepción", "away": "Unión La Calera", "date": "2026-10-11" },
      { "home": "Deportes Limache", "away": "Palestino", "date": "2026-10-12" },
      { "home": "Ñublense", "away": "Coquimbo", "date": "2026-10-25" },
      { "home": "Audax Italiano", "away": "Huachipato", "date": "2026-10-25" },
      { "home": "Palestino", "away": "Colo-Colo", "date": "2026-10-25" },
      { "home": "Unión La Calera", "away": "Universidad Católica", "date": "2026-10-25" },
      { "home": "Universidad de Concepción", "away": "Deportes Limache", "date": "2026-10-25" },
      { "home": "O'Higgins", "away": "Cobresal", "date": "2026-10-25" },
      { "home": "La Serena", "away": "Concepción", "date": "2026-10-25" },
      { "home": "Universidad de Chile", "away": "Everton", "date": "2026-10-25" }
    ]
  },
	
	// ============================================================
    //  ECUADOR LIGA PRO
    // ============================================================
	
"Ecuador Liga Pro": {
    "id": "ecuador-liga-pro",
    "logo": "ecuador/ligapro.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Independiente del Valle", "MP": 28, "MW": 22, "MD": 2, "ML": 4, "GF": 67, "GA": 30, "logo": "ecuador/independiente.png" },
      { "rank": 2, "team": "Macará", "MP": 28, "MW": 14, "MD": 6, "ML": 8, "GF": 39, "GA": 30, "logo": "ecuador/macara.png" },
      { "rank": 3, "team": "U. Católica", "MP": 28, "MW": 13, "MD": 8, "ML": 7, "GF": 48, "GA": 25, "logo": "ecuador/ucatolica.png" },
      { "rank": 4, "team": "Aucas", "MP": 28, "MW": 14, "MD": 5, "ML": 9, "GF": 31, "GA": 27, "logo": "ecuador/aucas.png" },
      { "rank": 5, "team": "BSC", "MP": 28, "MW": 11, "MD": 9, "ML": 8, "GF": 30, "GA": 23, "logo": "ecuador/bsc.png" },
      { "rank": 6, "team": "LDU Quito", "MP": 28, "MW": 12, "MD": 6, "ML": 10, "GF": 27, "GA": 22, "logo": "ecuador/lduquito.png" },
      { "rank": 7, "team": "Mushuc Runa", "MP": 28, "MW": 9, "MD": 10, "ML": 9, "GF": 33, "GA": 34, "logo": "ecuador/mushucruna.png" },
      { "rank": 8, "team": "Libertad Loja", "MP": 27, "MW": 10, "MD": 7, "ML": 10, "GF": 29, "GA": 30, "logo": "ecuador/libertadloja.png" },
      { "rank": 9, "team": "Guayaquil City", "MP": 28, "MW": 9, "MD": 9, "ML": 10, "GF": 27, "GA": 31, "logo": "ecuador/guayaquilcity.png" },
      { "rank": 10, "team": "Leones", "MP": 27, "MW": 9, "MD": 8, "ML": 10, "GF": 29, "GA": 30, "logo": "ecuador/leones.png" },
      { "rank": 11, "team": "Emelec", "MP": 27, "MW": 9, "MD": 8, "ML": 10, "GF": 23, "GA": 32, "logo": "ecuador/emelec.png" },
      { "rank": 12, "team": "Deportivo Cuenca", "MP": 28, "MW": 10, "MD": 5, "ML": 13, "GF": 24, "GA": 35, "logo": "ecuador/deportivocuenca.png" },
      { "rank": 13, "team": "Orense", "MP": 27, "MW": 8, "MD": 6, "ML": 13, "GF": 31, "GA": 41, "logo": "ecuador/orense.png" },
      { "rank": 14, "team": "Técnico Universitario", "MP": 28, "MW": 9, "MD": 2, "ML": 17, "GF": 26, "GA": 39, "logo": "ecuador/tecnico.png" },
      { "rank": 15, "team": "Delfín", "MP": 28, "MW": 7, "MD": 6, "ML": 15, "GF": 18, "GA": 29, "logo": "ecuador/delfin.png" },
      { "rank": 16, "team": "Manta", "MP": 28, "MW": 5, "MD": 5, "ML": 18, "GF": 17, "GA": 41, "logo": "ecuador/manta.png" }
    ],
    "fixtures": [
      
    ]
  },

    // ============================================================
    //  MEXICO - LIGA MX
    // ============================================================

   "Mexican Liga MX": {
    "id": "mexican-liga-mx",
    "logo": "mexico/ligamx.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Toluca", "MP": 17, "MW": 12, "MD": 3, "ML": 2, "GF": 38, "GA": 18, "logo": "mexico/toluca.png" },
      { "rank": 2, "team": "América", "MP": 17, "MW": 11, "MD": 4, "ML": 2, "GF": 35, "GA": 17, "logo": "mexico/america.png" },
      { "rank": 3, "team": "Cruz Azul", "MP": 17, "MW": 11, "MD": 3, "ML": 3, "GF": 34, "GA": 18, "logo": "mexico/cruzazul.png" },
      { "rank": 4, "team": "Monterrey", "MP": 17, "MW": 10, "MD": 4, "ML": 3, "GF": 32, "GA": 19, "logo": "mexico/monterrey.png" },
      { "rank": 5, "team": "Tigres UANL", "MP": 17, "MW": 9, "MD": 5, "ML": 3, "GF": 30, "GA": 19, "logo": "mexico/tigres.png" },
      { "rank": 6, "team": "Guadalajara", "MP": 17, "MW": 8, "MD": 6, "ML": 3, "GF": 28, "GA": 19, "logo": "mexico/guadalajara.png" },
      { "rank": 7, "team": "Pumas UNAM", "MP": 17, "MW": 8, "MD": 5, "ML": 4, "GF": 27, "GA": 20, "logo": "mexico/pumas.png" },
      { "rank": 8, "team": "Pachuca", "MP": 17, "MW": 8, "MD": 4, "ML": 5, "GF": 26, "GA": 21, "logo": "mexico/pachuca.png" },
      { "rank": 9, "team": "León", "MP": 17, "MW": 7, "MD": 6, "ML": 4, "GF": 25, "GA": 21, "logo": "mexico/leon.png" },
      { "rank": 10, "team": "Necaxa", "MP": 17, "MW": 7, "MD": 5, "ML": 5, "GF": 24, "GA": 22, "logo": "mexico/necaxa.png" },
      { "rank": 11, "team": "Atlas", "MP": 17, "MW": 6, "MD": 6, "ML": 5, "GF": 22, "GA": 22, "logo": "mexico/atlas.png" },
      { "rank": 12, "team": "Juarez", "MP": 17, "MW": 6, "MD": 5, "ML": 6, "GF": 21, "GA": 23, "logo": "mexico/juarez.png" },
      { "rank": 13, "team": "Club Tijuana", "MP": 17, "MW": 5, "MD": 6, "ML": 6, "GF": 20, "GA": 24, "logo": "mexico/tijuana.png" },
      { "rank": 14, "team": "San Luis", "MP": 17, "MW": 5, "MD": 5, "ML": 7, "GF": 19, "GA": 25, "logo": "mexico/sanluis.png" },
      { "rank": 15, "team": "Santos Laguna", "MP": 17, "MW": 4, "MD": 6, "ML": 7, "GF": 18, "GA": 26, "logo": "mexico/santoslaguna.png" },
      { "rank": 16, "team": "Querétaro", "MP": 17, "MW": 4, "MD": 5, "ML": 8, "GF": 17, "GA": 27, "logo": "mexico/queretaro.png" },
      { "rank": 17, "team": "Puebla", "MP": 17, "MW": 3, "MD": 6, "ML": 8, "GF": 16, "GA": 28, "logo": "mexico/puebla.png" },
      { "rank": 18, "team": "Atlante", "MP": 17, "MW": 3, "MD": 4, "ML": 10, "GF": 15, "GA": 30, "logo": "mexico/atlante.png" }
    ],
    "fixtures": [
      { "home": "Santos Laguna", "away": "Juarez", "date": "2026-09-14" },
      { "home": "Guadalajara", "away": "Pumas UNAM", "date": "2026-09-14" },
      { "home": "León", "away": "San Luis", "date": "2026-09-15" },
      { "home": "Puebla", "away": "Toluca", "date": "2026-09-16" },
      { "home": "Puebla", "away": "Atlante", "date": "2026-09-19" },
      { "home": "Juarez", "away": "Tigres UANL", "date": "2026-09-19" },
      { "home": "San Luis", "away": "Necaxa", "date": "2026-09-20" },
      { "home": "Atlas", "away": "Pumas UNAM", "date": "2026-09-20" },
      { "home": "Monterrey", "away": "Cruz Azul", "date": "2026-09-20" },
      { "home": "América", "away": "Guadalajara", "date": "2026-09-20" },
      { "home": "Toluca", "away": "Santos Laguna", "date": "2026-09-21" },
      { "home": "Pachuca", "away": "Club Tijuana", "date": "2026-09-21" },
      { "home": "Querétaro", "away": "León", "date": "2026-09-21" },
      { "home": "Atlante", "away": "Monterrey", "date": "2026-09-26" },
      { "home": "Club Tijuana", "away": "Atlas", "date": "2026-09-26" },
      { "home": "Cruz Azul", "away": "Toluca", "date": "2026-09-27" },
      { "home": "Guadalajara", "away": "Querétaro", "date": "2026-09-27" },
      { "home": "Santos Laguna", "away": "Pachuca", "date": "2026-09-27" },
      { "home": "Tigres UANL", "away": "Puebla", "date": "2026-09-27" },
      { "home": "Pumas UNAM", "away": "San Luis", "date": "2026-09-27" },
      { "home": "León", "away": "Juarez", "date": "2026-09-28" },
      { "home": "Necaxa", "away": "América", "date": "2026-09-28" },
      { "home": "Puebla", "away": "León", "date": "2026-10-10" },
      { "home": "Querétaro", "away": "Atlante", "date": "2026-10-10" },
      { "home": "Tigres UANL", "away": "Toluca", "date": "2026-10-10" },
      { "home": "Juarez", "away": "Club Tijuana", "date": "2026-10-11" },
      { "home": "Atlas", "away": "Guadalajara", "date": "2026-10-11" },
      { "home": "América", "away": "Monterrey", "date": "2026-10-11" },
      { "home": "Pachuca", "away": "Necaxa", "date": "2026-10-12" },
      { "home": "San Luis", "away": "Santos Laguna", "date": "2026-10-12" },
      { "home": "Pumas UNAM", "away": "Cruz Azul", "date": "2026-10-12" }
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
      { "rank": 1, "team": "Always Ready", "MP": 19, "MW": 12, "MD": 6, "ML": 1, "GF": 43, "GA": 13, "logo": "bolivia/alwaysready.png" },
      { "rank": 2, "team": "Bolívar", "MP": 18, "MW": 12, "MD": 3, "ML": 3, "GF": 48, "GA": 19, "logo": "bolivia/bolivar.png" },
      { "rank": 3, "team": "The Strongest", "MP": 19, "MW": 11, "MD": 6, "ML": 2, "GF": 37, "GA": 21, "logo": "bolivia/thestrongest.png" },
      { "rank": 4, "team": "Aurora", "MP": 19, "MW": 7, "MD": 9, "ML": 3, "GF": 30, "GA": 24, "logo": "bolivia/aurora.png" },
      { "rank": 5, "team": "Real Potosí", "MP": 19, "MW": 7, "MD": 8, "ML": 4, "GF": 25, "GA": 14, "logo": "bolivia/realpotosi.png" },
      { "rank": 6, "team": "Oriente Petrolero", "MP": 19, "MW": 8, "MD": 3, "ML": 8, "GF": 34, "GA": 27, "logo": "bolivia/orientepetrolero.png" },
      { "rank": 7, "team": "Nacional Potosí", "MP": 19, "MW": 8, "MD": 3, "ML": 8, "GF": 30, "GA": 24, "logo": "bolivia/nacionalpotosi.png" },
      { "rank": 8, "team": "Blooming", "MP": 19, "MW": 6, "MD": 8, "ML": 5, "GF": 29, "GA": 21, "logo": "bolivia/blooming.png" },
      { "rank": 9, "team": "Guabirá", "MP": 19, "MW": 7, "MD": 5, "ML": 7, "GF": 29, "GA": 38, "logo": "bolivia/guabira.png" },
      { "rank": 10, "team": "Independiente Petrolero", "MP": 19, "MW": 7, "MD": 4, "ML": 8, "GF": 26, "GA": 32, "logo": "bolivia/independientepetrolero.png" },
      { "rank": 11, "team": "Real Oruro", "MP": 19, "MW": 6, "MD": 3, "ML": 10, "GF": 32, "GA": 48, "logo": "bolivia/realoruro.png" },
      { "rank": 12, "team": "Academia del Balompie Boliviano", "MP": 19, "MW": 6, "MD": 2, "ML": 11, "GF": 30, "GA": 43, "logo": "bolivia/academiaboliviano.png" },
      { "rank": 13, "team": "Universitario de Vinto", "MP": 19, "MW": 5, "MD": 2, "ML": 12, "GF": 25, "GA": 38, "logo": "bolivia/universitariovinto.png" },
      { "rank": 14, "team": "SA Bulo Bulo", "MP": 19, "MW": 5, "MD": 2, "ML": 12, "GF": 18, "GA": 39, "logo": "bolivia/sabulobulo.png" },
      { "rank": 15, "team": "Real Tomayapo", "MP": 18, "MW": 4, "MD": 4, "ML": 10, "GF": 14, "GA": 35, "logo": "bolivia/realtomayapo.png" },
      { "rank": 16, "team": "Gualberto Villarroel San José", "MP": 19, "MW": 2, "MD": 8, "ML": 9, "GF": 19, "GA": 33, "logo": "bolivia/gualbertovillarroel.png" }
    ],
    "fixtures": [
      { "home": "Real Tomayapo", "away": "Bolívar", "date": "2026-09-14" },
      { "home": "Real Oruro", "away": "Real Potosí", "date": "2026-09-15" },
      { "home": "Academia del Balompie Boliviano", "away": "The Strongest", "date": "2026-09-16" },
      { "home": "Guabirá", "away": "Aurora", "date": "2026-09-16" },
      { "home": "Nacional Potosí", "away": "Always Ready", "date": "2026-09-17" },
      { "home": "Blooming", "away": "Universitario de Vinto", "date": "2026-09-17" },
      { "home": "Real Tomayapo", "away": "Oriente Petrolero", "date": "2026-09-18" },
      { "home": "Bolívar", "away": "Gualberto Villarroel San José", "date": "2026-09-18" },
      { "home": "Independiente Petrolero", "away": "SA Bulo Bulo", "date": "2026-09-19" }
    ]
  },

    // ============================================================
    //  COLOMBIA - PRIMERA A
    // ============================================================

    "Colombia Primera A": {
    "id": "colombia-primera-a",
    "logo": "colombia/primeraa.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Millonarios", "MP": 19, "MW": 12, "MD": 4, "ML": 3, "GF": 34, "GA": 18, "logo": "colombia/millonarios.png" },
      { "rank": 2, "team": "Atl. Nacional", "MP": 19, "MW": 11, "MD": 5, "ML": 3, "GF": 32, "GA": 17, "logo": "colombia/atlnacional.png" },
      { "rank": 3, "team": "Deportivo Pasto", "MP": 19, "MW": 10, "MD": 6, "ML": 3, "GF": 29, "GA": 16, "logo": "colombia/deportivopasto.png" },
      { "rank": 4, "team": "América de Cali", "MP": 19, "MW": 10, "MD": 5, "ML": 4, "GF": 30, "GA": 19, "logo": "colombia/americacali.png" },
      { "rank": 5, "team": "Independiente Medellín", "MP": 19, "MW": 9, "MD": 6, "ML": 4, "GF": 28, "GA": 18, "logo": "colombia/medellin.png" },
      { "rank": 6, "team": "Santa Fe", "MP": 19, "MW": 9, "MD": 5, "ML": 5, "GF": 27, "GA": 19, "logo": "colombia/santafe.png" },
      { "rank": 7, "team": "Tolima", "MP": 19, "MW": 8, "MD": 7, "ML": 4, "GF": 26, "GA": 19, "logo": "colombia/tolima.png" },
      { "rank": 8, "team": "Junior", "MP": 19, "MW": 8, "MD": 6, "ML": 5, "GF": 25, "GA": 20, "logo": "colombia/junior.png" },
      { "rank": 9, "team": "Once Caldas", "MP": 19, "MW": 8, "MD": 5, "ML": 6, "GF": 24, "GA": 21, "logo": "colombia/oncecaldas.png" },
      { "rank": 10, "team": "Deportivo Cali", "MP": 19, "MW": 7, "MD": 7, "ML": 5, "GF": 23, "GA": 21, "logo": "colombia/deportivocali.png" },
      { "rank": 11, "team": "Atlético Bucaramanga", "MP": 19, "MW": 7, "MD": 6, "ML": 6, "GF": 22, "GA": 21, "logo": "colombia/bucaramanga.png" },
      { "rank": 12, "team": "Rionegro Águilas", "MP": 19, "MW": 6, "MD": 7, "ML": 6, "GF": 21, "GA": 22, "logo": "colombia/rionegro.png" },
      { "rank": 13, "team": "Deportivo Pereira", "MP": 19, "MW": 6, "MD": 6, "ML": 7, "GF": 20, "GA": 23, "logo": "colombia/pereira.png" },
      { "rank": 14, "team": "Cúcuta Deportivo", "MP": 19, "MW": 5, "MD": 7, "ML": 7, "GF": 19, "GA": 24, "logo": "colombia/cucuta.png" },
      { "rank": 15, "team": "Alianza", "MP": 19, "MW": 5, "MD": 6, "ML": 8, "GF": 18, "GA": 25, "logo": "colombia/alianza.png" },
      { "rank": 16, "team": "Internacional de Bogotá", "MP": 19, "MW": 5, "MD": 5, "ML": 9, "GF": 17, "GA": 26, "logo": "colombia/internacionalbogota.png" },
      { "rank": 17, "team": "Boyacá Chicó FC", "MP": 19, "MW": 4, "MD": 6, "ML": 9, "GF": 16, "GA": 27, "logo": "colombia/boyacachico.png" },
      { "rank": 18, "team": "Jaguares de Córdoba", "MP": 19, "MW": 4, "MD": 5, "ML": 10, "GF": 15, "GA": 28, "logo": "colombia/jaguares.png" },
      { "rank": 19, "team": "Fortaleza FC", "MP": 19, "MW": 3, "MD": 5, "ML": 11, "GF": 14, "GA": 30, "logo": "colombia/fortaleza.png" },
      { "rank": 20, "team": "Llaneros FC", "MP": 19, "MW": 2, "MD": 5, "ML": 12, "GF": 12, "GA": 32, "logo": "colombia/llaneros.png" }
    ],
    "fixtures": [
      { "home": "Cúcuta Deportivo", "away": "Millonarios", "date": "2026-09-14" },
      { "home": "América de Cali", "away": "Deportivo Pasto", "date": "2026-09-15" },
      { "home": "Boyacá Chicó FC", "away": "Alianza", "date": "2026-09-16" },
      { "home": "Once Caldas", "away": "Tolima", "date": "2026-09-17" },
      { "home": "Atlético Bucaramanga", "away": "Independiente Medellín", "date": "2026-09-18" },
      { "home": "Internacional de Bogotá", "away": "Atl. Nacional", "date": "2026-09-17" },
      { "home": "Rionegro Águilas", "away": "Deportivo Pereira", "date": "2026-09-19" },
      { "home": "Independiente Medellín", "away": "Jaguares de Córdoba", "date": "2026-09-19" },
      { "home": "Millonarios", "away": "Boyacá Chicó FC", "date": "2026-09-19" },
      { "home": "Alianza", "away": "Santa Fe", "date": "2026-09-20" },
      { "home": "Deportivo Cali", "away": "Cúcuta Deportivo", "date": "2026-09-20" },
      { "home": "Deportivo Pasto", "away": "Once Caldas", "date": "2026-09-20" },
      { "home": "Fortaleza FC", "away": "Junior", "date": "2026-09-20" },
      { "home": "Atlético Bucaramanga", "away": "Internacional de Bogotá", "date": "2026-09-21" },
      { "home": "Tolima", "away": "América de Cali", "date": "2026-09-21" },
      { "home": "Llaneros FC", "away": "Atl. Nacional", "date": "2026-09-21" },
      { "home": "Santa Fe", "away": "Deportivo Cali", "date": "2026-09-23" },
      { "home": "América de Cali", "away": "Rionegro Águilas", "date": "2026-09-24" },
      { "home": "Atl. Nacional", "away": "Millonarios", "date": "2026-09-25" },
      { "home": "Boyacá Chicó FC", "away": "Deportivo Pasto", "date": "2026-09-26" },
      { "home": "Once Caldas", "away": "Atlético Bucaramanga", "date": "2026-09-26" },
      { "home": "Deportivo Pereira", "away": "Internacional de Bogotá", "date": "2026-09-27" },
      { "home": "Cúcuta Deportivo", "away": "Llaneros FC", "date": "2026-09-27" },
      { "home": "Junior", "away": "Independiente Medellín", "date": "2026-09-27" },
      { "home": "Jaguares de Córdoba", "away": "Alianza", "date": "2026-09-28" },
      { "home": "Fortaleza FC", "away": "Tolima", "date": "2026-09-28" },
      { "home": "Deportivo Cali", "away": "Rionegro Águilas", "date": "2026-09-28" },
      { "home": "Boyacá Chicó FC", "away": "Alianza", "date": "2026-09-29" },
      { "home": "Deportivo Pereira", "away": "Santa Fe", "date": "2026-09-30" },
      { "home": "Independiente Medellín", "away": "Millonarios", "date": "2026-09-30" },
      { "home": "Atl. Nacional", "away": "Junior", "date": "2026-10-01" },
      { "home": "Internacional de Bogotá", "away": "Once Caldas", "date": "2026-10-02" },
      { "home": "Deportivo Cali", "away": "Alianza", "date": "2026-10-03" },
      { "home": "Rionegro Águilas", "away": "Jaguares de Córdoba", "date": "2026-10-03" },
      { "home": "Tolima", "away": "Boyacá Chicó FC", "date": "2026-10-04" },
      { "home": "Independiente Medellín", "away": "Santa Fe", "date": "2026-10-04" },
      { "home": "Deportivo Pasto", "away": "Fortaleza FC", "date": "2026-10-04" },
      { "home": "Cúcuta Deportivo", "away": "Deportivo Pereira", "date": "2026-10-05" },
      { "home": "Atlético Bucaramanga", "away": "Junior", "date": "2026-10-05" },
      { "home": "Llaneros FC", "away": "América de Cali", "date": "2026-10-05" }
    ]
  },
	  // ============================================================
    //  WNBA
    // ============================================================

    "WNBA": {
    "id": "wnba",
    "logo": "usa/wnba.png",
    "isBasketball": true,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Minnesota Lynx", "MP": 40, "MW": 31, "MD": 0, "ML": 9, "GF": 0, "GA": 0, "logo": "usa/lynx.png" },
      { "rank": 2, "team": "Golden State Valkyries", "MP": 40, "MW": 29, "MD": 0, "ML": 11, "GF": 0, "GA": 0, "logo": "usa/valkyries.png" },
      { "rank": 3, "team": "Las Vegas Aces", "MP": 40, "MW": 27, "MD": 0, "ML": 13, "GF": 0, "GA": 0, "logo": "usa/aces.png" },
      { "rank": 4, "team": "Atlanta Dream", "MP": 40, "MW": 26, "MD": 0, "ML": 14, "GF": 0, "GA": 0, "logo": "usa/dream.png" },
      { "rank": 5, "team": "Indiana Fever", "MP": 40, "MW": 26, "MD": 0, "ML": 14, "GF": 0, "GA": 0, "logo": "usa/fever.png" },
      { "rank": 6, "team": "New York Liberty", "MP": 40, "MW": 24, "MD": 0, "ML": 16, "GF": 0, "GA": 0, "logo": "usa/liberty.png" },
      { "rank": 7, "team": "Washington Mystics", "MP": 40, "MW": 24, "MD": 0, "ML": 16, "GF": 0, "GA": 0, "logo": "usa/mystics.png" },
      { "rank": 8, "team": "Dallas Wings", "MP": 40, "MW": 24, "MD": 0, "ML": 16, "GF": 0, "GA": 0, "logo": "usa/wings.png" },
      { "rank": 9, "team": "Portland Fire", "MP": 40, "MW": 16, "MD": 0, "ML": 24, "GF": 0, "GA": 0, "logo": "usa/fire.png" },
      { "rank": 10, "team": "Chicago Sky", "MP": 40, "MW": 15, "MD": 0, "ML": 25, "GF": 0, "GA": 0, "logo": "usa/sky.png" },
      { "rank": 11, "team": "Los Angeles Sparks", "MP": 40, "MW": 15, "MD": 0, "ML": 25, "GF": 0, "GA": 0, "logo": "usa/sparks.png" },
      { "rank": 12, "team": "Phoenix Mercury", "MP": 40, "MW": 14, "MD": 0, "ML": 26, "GF": 0, "GA": 0, "logo": "usa/mercury.png" },
      { "rank": 13, "team": "Toronto Tempo", "MP": 40, "MW": 11, "MD": 0, "ML": 29, "GF": 0, "GA": 0, "logo": "usa/tempo.png" },
      { "rank": 14, "team": "Connecticut Sun", "MP": 40, "MW": 10, "MD": 0, "ML": 30, "GF": 0, "GA": 0, "logo": "usa/sun.png" },
      { "rank": 15, "team": "Seattle Storm", "MP": 40, "MW": 8, "MD": 0, "ML": 32, "GF": 0, "GA": 0, "logo": "usa/storm.png" }
    ],
    "fixtures": [
      { "home": "Connecticut Sun", "away": "Atlanta Dream", "date": "2026-09-18" },
      { "home": "Washington Mystics", "away": "Chicago Sky", "date": "2026-09-18" },
      { "home": "Los Angeles Sparks", "away": "Dallas Wings", "date": "2026-09-18" },
      { "home": "Phoenix Mercury", "away": "Portland Fire", "date": "2026-09-18" },
      { "home": "Las Vegas Aces", "away": "Seattle Storm", "date": "2026-09-18" },
      { "home": "Indiana Fever", "away": "Toronto Tempo", "date": "2026-09-19" },
      { "home": "New York Liberty", "away": "Minnesota Lynx", "date": "2026-09-19" },
      { "home": "Portland Fire", "away": "Golden State Valkyries", "date": "2026-09-19" },
      { "home": "Phoenix Mercury", "away": "Dallas Wings", "date": "2026-09-19" },
      { "home": "Chicago Sky", "away": "Atlanta Dream", "date": "2026-09-20" },
      { "home": "Seattle Storm", "away": "Golden State Valkyries", "date": "2026-09-20" },
      { "home": "Minnesota Lynx", "away": "Connecticut Sun", "date": "2026-09-20" },
      { "home": "New York Liberty", "away": "Toronto Tempo", "date": "2026-09-20" },
      { "home": "Washington Mystics", "away": "Indiana Fever", "date": "2026-09-20" },
      { "home": "Portland Fire", "away": "Los Angeles Sparks", "date": "2026-09-21" },
      { "home": "Seattle Storm", "away": "Las Vegas Aces", "date": "2026-09-21" },
      { "home": "Atlanta Dream", "away": "New York Liberty", "date": "2026-09-22" },
      { "home": "Dallas Wings", "away": "Phoenix Mercury", "date": "2026-09-22" }
    ]
  },

    // ============================================================
    //  JAPAN - J1 LEAGUE
    // ============================================================

   "Japanese J1": {
    "id": "japanese-j1",
    "logo": "japan/j1.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Kashima Antlers", "MP": 18, "MW": 13, "MD": 4, "ML": 1, "GF": 29, "GA": 9, "logo": "japan/kashima.png" },
      { "rank": 2, "team": "FC Tokyo", "MP": 18, "MW": 9, "MD": 6, "ML": 3, "GF": 28, "GA": 16, "logo": "japan/fctokyo.png" },
      { "rank": 3, "team": "Machida Zelvia", "MP": 18, "MW": 8, "MD": 8, "ML": 2, "GF": 23, "GA": 19, "logo": "japan/machida.png" },
      { "rank": 4, "team": "Kawasaki", "MP": 18, "MW": 7, "MD": 4, "ML": 7, "GF": 23, "GA": 27, "logo": "japan/kawasaki.png" },
      { "rank": 5, "team": "Tokyo Verdy", "MP": 18, "MW": 7, "MD": 4, "ML": 7, "GF": 19, "GA": 25, "logo": "japan/tokyoverdy.png" },
      { "rank": 6, "team": "Urawa Reds", "MP": 18, "MW": 7, "MD": 4, "ML": 7, "GF": 25, "GA": 18, "logo": "japan/urawa.png" },
      { "rank": 7, "team": "Yokohama FM", "MP": 18, "MW": 6, "MD": 2, "ML": 10, "GF": 28, "GA": 29, "logo": "japan/yokohamafm.png" },
      { "rank": 8, "team": "Kashiwa Reysol", "MP": 18, "MW": 6, "MD": 1, "ML": 11, "GF": 21, "GA": 24, "logo": "japan/kashiwa.png" },
      { "rank": 9, "team": "Mito HollyHock", "MP": 18, "MW": 2, "MD": 8, "ML": 8, "GF": 19, "GA": 35, "logo": "japan/mito.png" },
      { "rank": 10, "team": "JEF United", "MP": 18, "MW": 3, "MD": 3, "ML": 12, "GF": 18, "GA": 31, "logo": "japan/jefunited.png" },
      { "rank": 11, "team": "Vissel Kobe", "MP": 18, "MW": 9, "MD": 6, "ML": 3, "GF": 27, "GA": 21, "logo": "japan/visselkobe.png" },
      { "rank": 12, "team": "Cerezo Osaka", "MP": 18, "MW": 7, "MD": 6, "ML": 5, "GF": 26, "GA": 19, "logo": "japan/cerezo.png" },
      { "rank": 13, "team": "Nagoya", "MP": 18, "MW": 8, "MD": 5, "ML": 5, "GF": 31, "GA": 28, "logo": "japan/nagoya.png" },
      { "rank": 14, "team": "Sanfrecce", "MP": 18, "MW": 8, "MD": 4, "ML": 6, "GF": 29, "GA": 21, "logo": "japan/sanfrecce.png" },
      { "rank": 15, "team": "Gamba Osaka", "MP": 18, "MW": 5, "MD": 8, "ML": 5, "GF": 26, "GA": 22, "logo": "japan/gamba.png" },
      { "rank": 16, "team": "Okayama", "MP": 18, "MW": 6, "MD": 6, "ML": 6, "GF": 24, "GA": 25, "logo": "japan/okayama.png" },
      { "rank": 17, "team": "Shimizu S-Pulse", "MP": 18, "MW": 4, "MD": 8, "ML": 6, "GF": 19, "GA": 21, "logo": "japan/shimizu.png" },
      { "rank": 18, "team": "Kyoto Sanga", "MP": 18, "MW": 5, "MD": 5, "ML": 8, "GF": 19, "GA": 26, "logo": "japan/kyoto.png" },
      { "rank": 19, "team": "V-Varen Nagasaki", "MP": 18, "MW": 6, "MD": 2, "ML": 10, "GF": 20, "GA": 28, "logo": "japan/vvaren.png" },
      { "rank": 20, "team": "Avispa Fukuoka", "MP": 18, "MW": 3, "MD": 8, "ML": 7, "GF": 17, "GA": 27, "logo": "japan/avispa.png" }
    ],
    "fixtures": [
      { "home": "Avispa Fukuoka", "away": "Sanfrecce", "date": "2026-09-19" },
      { "home": "Kawasaki", "away": "Kashima Antlers", "date": "2026-09-19" },
      { "home": "V-Varen Nagasaki", "away": "Cerezo Osaka", "date": "2026-09-19" },
      { "home": "Shimizu S-Pulse", "away": "JEF United", "date": "2026-09-19" },
      { "home": "Urawa Reds", "away": "Tokyo Verdy", "date": "2026-09-19" },
      { "home": "FC Tokyo", "away": "Nagoya", "date": "2026-09-19" },
      { "home": "Okayama", "away": "Kyoto Sanga", "date": "2026-09-19" },
      { "home": "Yokohama FM", "away": "Mito HollyHock", "date": "2026-09-19" },
      { "home": "Machida Zelvia", "away": "Kashiwa Reysol", "date": "2026-09-20" },
      { "home": "Gamba Osaka", "away": "Vissel Kobe", "date": "2026-09-20" },
      { "home": "Kashiwa Reysol", "away": "Vissel Kobe", "date": "2026-10-09" },
      { "home": "Kashima Antlers", "away": "Gamba Osaka", "date": "2026-10-09" },
      { "home": "Cerezo Osaka", "away": "Yokohama FM", "date": "2026-10-10" },
      { "home": "FC Tokyo", "away": "Urawa Reds", "date": "2026-10-10" },
      { "home": "Avispa Fukuoka", "away": "Okayama", "date": "2026-10-10" },
      { "home": "Kyoto Sanga", "away": "Machida Zelvia", "date": "2026-10-10" },
      { "home": "JEF United", "away": "V-Varen Nagasaki", "date": "2026-10-11" },
      { "home": "Mito HollyHock", "away": "Shimizu S-Pulse", "date": "2026-10-11" },
      { "home": "Tokyo Verdy", "away": "Sanfrecce", "date": "2026-10-11" },
      { "home": "Kawasaki", "away": "Nagoya", "date": "2026-10-11" },
      { "home": "Shimizu S-Pulse", "away": "Gamba Osaka", "date": "2026-10-17" },
      { "home": "Tokyo Verdy", "away": "FC Tokyo", "date": "2026-10-17" },
      { "home": "JEF United", "away": "Yokohama FM", "date": "2026-10-17" },
      { "home": "Sanfrecce", "away": "Kyoto Sanga", "date": "2026-10-17" },
      { "home": "Cerezo Osaka", "away": "Kawasaki", "date": "2026-10-17" },
      { "home": "Kashima Antlers", "away": "V-Varen Nagasaki", "date": "2026-10-17" },
      { "home": "Mito HollyHock", "away": "Urawa Reds", "date": "2026-10-17" },
      { "home": "Kashiwa Reysol", "away": "Nagoya", "date": "2026-10-17" },
      { "home": "Okayama", "away": "Vissel Kobe", "date": "2026-10-18" },
      { "home": "Machida Zelvia", "away": "Avispa Fukuoka", "date": "2026-10-18" },
      { "home": "Okayama", "away": "Mito HollyHock", "date": "2026-10-21" },
      { "home": "V-Varen Nagasaki", "away": "Sanfrecce", "date": "2026-10-21" },
      { "home": "Yokohama FM", "away": "Tokyo Verdy", "date": "2026-10-21" },
      { "home": "Kyoto Sanga", "away": "Kashima Antlers", "date": "2026-10-21" },
      { "home": "FC Tokyo", "away": "Kashiwa Reysol", "date": "2026-10-21" },
      { "home": "Nagoya", "away": "Cerezo Osaka", "date": "2026-10-21" },
      { "home": "Shimizu S-Pulse", "away": "Machida Zelvia", "date": "2026-10-21" },
      { "home": "Kawasaki", "away": "Vissel Kobe", "date": "2026-10-21" },
      { "home": "Avispa Fukuoka", "away": "Gamba Osaka", "date": "2026-10-21" },
      { "home": "Urawa Reds", "away": "JEF United", "date": "2026-10-21" }
    ]
  },

    // ============================================================
    //  CHINA - SUPER LEAGUE
    // ============================================================

    "Chinese Super League": {
    "id": "chinese-super-league",
    "logo": "china/csl.png",
    "isBasketball": false,
    "season": "2025-26",
    "teams": [
      { "rank": 1, "team": "Shanghai Port", "MP": 30, "MW": 23, "MD": 5, "ML": 2, "GF": 78, "GA": 22, "logo": "china/shanghaiport.png" },
      { "rank": 2, "team": "Shanghai Shenhua", "MP": 30, "MW": 22, "MD": 6, "ML": 2, "GF": 65, "GA": 18, "logo": "china/shanghaishenhua.png" },
      { "rank": 3, "team": "Chengdu Rongcheng", "MP": 30, "MW": 18, "MD": 8, "ML": 4, "GF": 52, "GA": 26, "logo": "china/chengdu.png" },
      { "rank": 4, "team": "Beijing Guoan", "MP": 30, "MW": 16, "MD": 9, "ML": 5, "GF": 48, "GA": 30, "logo": "china/beijingguoan.png" },
      { "rank": 5, "team": "Shandong Taishan", "MP": 30, "MW": 14, "MD": 10, "ML": 6, "GF": 44, "GA": 32, "logo": "china/shandong.png" },
      { "rank": 6, "team": "Zhejiang", "MP": 30, "MW": 13, "MD": 8, "ML": 9, "GF": 41, "GA": 35, "logo": "china/zhejiang.png" },
      { "rank": 7, "team": "Tianjin Jinmen Tiger", "MP": 30, "MW": 11, "MD": 11, "ML": 8, "GF": 36, "GA": 33, "logo": "china/tianjin.png" },
      { "rank": 8, "team": "Wuhan Three Towns", "MP": 30, "MW": 10, "MD": 12, "ML": 8, "GF": 34, "GA": 31, "logo": "china/wuhan.png" },
      { "rank": 9, "team": "Henan", "MP": 30, "MW": 10, "MD": 9, "ML": 11, "GF": 32, "GA": 36, "logo": "china/henan.png" },
      { "rank": 10, "team": "Dalian Yingbo", "MP": 30, "MW": 9, "MD": 10, "ML": 11, "GF": 30, "GA": 34, "logo": "china/dalian.png" },
      { "rank": 11, "team": "Yunnan Yukun", "MP": 30, "MW": 8, "MD": 11, "ML": 11, "GF": 29, "GA": 35, "logo": "china/yunnan.png" },
      { "rank": 12, "team": "Chongqing Tonglianglong", "MP": 30, "MW": 7, "MD": 12, "ML": 11, "GF": 28, "GA": 37, "logo": "china/chongqing.png" },
      { "rank": 13, "team": "Qingdao Hainiu", "MP": 30, "MW": 6, "MD": 10, "ML": 14, "GF": 25, "GA": 42, "logo": "china/qingdaohainiu.png" },
      { "rank": 14, "team": "Shenzhen Peng City", "MP": 30, "MW": 5, "MD": 9, "ML": 16, "GF": 22, "GA": 48, "logo": "china/shenzhen.png" },
      { "rank": 15, "team": "Shenyang Urban", "MP": 30, "MW": 4, "MD": 8, "ML": 18, "GF": 18, "GA": 52, "logo": "china/shenyang.png" },
      { "rank": 16, "team": "Qingdao Youth Island", "MP": 30, "MW": 3, "MD": 6, "ML": 21, "GF": 14, "GA": 65, "logo": "china/qingdaoyouth.png" }
    ],
    "fixtures": [
      { "home": "Shenzhen Peng City", "away": "Henan", "date": "2026-10-09" },
      { "home": "Zhejiang", "away": "Shanghai Port", "date": "2026-10-09" },
      { "home": "Chengdu Rongcheng", "away": "Tianjin Jinmen Tiger", "date": "2026-10-10" },
      { "home": "Shanghai Shenhua", "away": "Yunnan Yukun", "date": "2026-10-10" },
      { "home": "Qingdao Hainiu", "away": "Beijing Guoan", "date": "2026-10-10" },
      { "home": "Qingdao Youth Island", "away": "Dalian Yingbo", "date": "2026-10-11" },
      { "home": "Shenyang Urban", "away": "Wuhan Three Towns", "date": "2026-10-11" },
      { "home": "Chongqing Tonglianglong", "away": "Shandong Taishan", "date": "2026-10-11" }
    ]
  },



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