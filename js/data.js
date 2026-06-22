// ==================== COMPLETE LEAGUES DATA ====================
// ONLY data declarations - NO functions or thresholds here

const leaguesData = {



/*

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
        { home: "Barracas Central", away: "Banfield", date: "2026-06-15" },
        { home: "Lanus", away: "Riestra", date: "2026-06-15" },
        { home: "Central Cordoba", away: "Boca Juniors", date: "2026-06-15" },
        { home: "Union", away: "Telleres", date: "2026-06-15" },
        { home: "San Lorenzo", away: "Independiente", date: "2026-06-15" },
        { home: "Platense", away: "Estudiantes", date: "2026-06-15" },
        { home: "Aldosivi", away: "Independiente Rivadavia", date: "2026-06-15" },
        { home: "Central", away: "Tigre", date: "2026-06-15" },
        { home: "Gimnasia LP", away: "Argentinos Juniors", date: "2026-06-15" },
        { home: "Racing Club", away: "Huracan", date: "2026-06-15" },
        { home: "Belgrano", away: "Sarmiento", date: "2026-06-15" },
        { home: "River Plate", away: "Atletico Tucuman", date: "2026-06-15" },
        { home: "Gimnasia Esgrima", away: "Defensa", date: "2026-06-15" },
        { home: "Velez Sarsfield", away: "Newells", date: "2026-06-15" },
        { home: "Estudiantes De Rio Cuarto", away: "Instituto", date: "2026-06-15" }
    ]
},


"Argentine Reserve League - Group A": {
    id: "arg-reserve-a",
    logo: "argentina/reserve.png",
    isBasketball: false,
    teams: [
        { team: "Velez Sarsfield 2", MP: 15, MW: 11, MD: 2, ML: 2, GF: 33, GA: 11, logo: "argentina/velez2.png" },
        { team: "Racing Club 2", MP: 15, MW: 7, MD: 6, ML: 2, GF: 23, GA: 16, logo: "argentina/racing2.png" },
        { team: "River Plate 2", MP: 16, MW: 7, MD: 4, ML: 5, GF: 21, GA: 16, logo: "argentina/river2.png" },
        { team: "Argentinos Jrs 2", MP: 15, MW: 6, MD: 6, ML: 3, GF: 18, GA: 13, logo: "argentina/argentinos2.png" },
        { team: "Atl. Tucuman 2", MP: 15, MW: 7, MD: 3, ML: 5, GF: 21, GA: 22, logo: "argentina/tucuman2.png" },
        { team: "Rosario Central 2", MP: 15, MW: 6, MD: 5, ML: 4, GF: 21, GA: 16, logo: "argentina/rosario2.png" },
        { team: "Instituto 2", MP: 15, MW: 5, MD: 8, ML: 2, GF: 18, GA: 14, logo: "argentina/instituto2.png" },
        { team: "Talleres Cordoba 2", MP: 15, MW: 6, MD: 4, ML: 5, GF: 21, GA: 15, logo: "argentina/talleres2.png" },
        { team: "Gimnasia L.P. 2", MP: 15, MW: 6, MD: 4, ML: 5, GF: 18, GA: 13, logo: "argentina/gimnasia2.png" },
        { team: "San Lorenzo 2", MP: 15, MW: 6, MD: 4, ML: 5, GF: 18, GA: 19, logo: "argentina/sanlorenzo2.png" },
        { team: "Union de Santa Fe 2", MP: 15, MW: 4, MD: 8, ML: 3, GF: 18, GA: 19, logo: "argentina/union2.png" },
        { team: "Banfield 2", MP: 16, MW: 5, MD: 5, ML: 6, GF: 12, GA: 16, logo: "argentina/banfield2.png" },
        { team: "Gimnasia Mendoza 2", MP: 15, MW: 5, MD: 4, ML: 6, GF: 14, GA: 17, logo: "argentina/gimnasiamza2.png" },
        { team: "Barracas Central 2", MP: 15, MW: 4, MD: 4, ML: 7, GF: 10, GA: 19, logo: "argentina/barracas2.png" },
        { team: "Tigre 2", MP: 16, MW: 4, MD: 3, ML: 9, GF: 13, GA: 21, logo: "argentina/tigre2.png" },
        { team: "Sarmiento Junin 2", MP: 16, MW: 4, MD: 3, ML: 9, GF: 15, GA: 24, logo: "argentina/sarmiento2.png" },
        { team: "Godoy Cruz 2", MP: 15, MW: 3, MD: 2, ML: 10, GF: 16, GA: 27, logo: "argentina/godoy2.png" },
        { team: "Aldosivi 2", MP: 15, MW: 3, MD: 2, ML: 10, GF: 12, GA: 26, logo: "argentina/aldosivi2.png" }
    ],
   fixtures: [
    // Round 17 - June 8
    //{ home: "Defensa y Justicia 2", away: "Ferro 2", date: "2026-06-08" },
   // { home: "Gimnasia L.P. 2", away: "Godoy Cruz 2", date: "2026-06-08" },
  //  { home: "Ind. Rivadavia 2", away: "Quilmes 2", date: "2026-06-08" },
   // { home: "Racing Club 2", away: "Banfield 2", date: "2026-06-08" },
   // { home: "Union de Santa Fe 2", away: "Atl. Tucuman 2", date: "2026-06-08" },
    
    // Round 17 - June 9
    //{ home: "Aldosivi 2", away: "Gimnasia Mendoza 2", date: "2026-06-09" },
   // { home: "Belgrano 2", away: "Atl. Rafaela 2", date: "2026-06-09" },
   // { home: "Deportivo Riestra 2", away: "Platense 2", date: "2026-06-09" },
   // { home: "Lanus 2", away: "Independiente 2", date: "2026-06-09" },
   // { home: "Central Cordoba 2", away: "Colon Santa Fe 2", date: "2026-06-09" },
   // { home: "River Plate 2", away: "Rosario Central 2", date: "2026-06-09" },
    
    // Round 17 - June 10
    { home: "Argentinos Jrs 2", away: "Barracas Central 2", date: "2026-06-10" },
    { home: "Estudiantes Rio Cuarto 2", away: "Huracan 2", date: "2026-06-10" },
    { home: "Newells Old Boys 2", away: "Boca Juniors 2", date: "2026-06-10" },
    { home: "San Lorenzo 2", away: "Instituto 2", date: "2026-06-10" },
    { home: "San Martin S.J. 2", away: "Estudiantes L.P. 2", date: "2026-06-10" },
    { home: "Sarmiento Junin 2", away: "Talleres Cordoba 2", date: "2026-06-10" },
    { home: "Velez Sarsfield 2", away: "Tigre 2", date: "2026-06-10" }
]
},
"Argentine Reserve League - Group B": {
    id: "arg-reserve-b",
    logo: "argentina/reserve.png",
    isBasketball: false,
    teams: [
        { team: "Boca Juniors 2", MP: 15, MW: 10, MD: 3, ML: 2, GF: 27, GA: 7, logo: "argentina/boca2.png" },
        { team: "Independiente 2", MP: 16, MW: 9, MD: 3, ML: 4, GF: 29, GA: 14, logo: "argentina/independiente2.png" },
        { team: "Newells Old Boys 2", MP: 16, MW: 9, MD: 3, ML: 4, GF: 21, GA: 13, logo: "argentina/newells2.png" },
        { team: "Quilmes 2", MP: 16, MW: 9, MD: 3, ML: 4, GF: 14, GA: 9, logo: "argentina/quilmes2.png" },
        { team: "Lanus 2", MP: 15, MW: 9, MD: 2, ML: 4, GF: 31, GA: 19, logo: "argentina/lanus2.png" },
        { team: "Defensa y Justicia 2", MP: 15, MW: 8, MD: 4, ML: 3, GF: 35, GA: 17, logo: "argentina/defensa2.png" },
        { team: "Huracan 2", MP: 16, MW: 7, MD: 4, ML: 5, GF: 22, GA: 15, logo: "argentina/huracan2.png" },
        { team: "Platense 2", MP: 15, MW: 6, MD: 5, ML: 4, GF: 15, GA: 16, logo: "argentina/platense2.png" },
        { team: "Belgrano 2", MP: 15, MW: 7, MD: 2, ML: 6, GF: 22, GA: 25, logo: "argentina/belgrano2.png" },
        { team: "Estudiantes L.P. 2", MP: 15, MW: 6, MD: 4, ML: 5, GF: 18, GA: 13, logo: "argentina/estudiantes2.png" },
        { team: "Deportivo Riestra 2", MP: 16, MW: 6, MD: 3, ML: 7, GF: 24, GA: 18, logo: "argentina/riestra2.png" },
        { team: "Ferro 2", MP: 16, MW: 6, MD: 3, ML: 7, GF: 17, GA: 19, logo: "argentina/ferro2.png" },
        { team: "Ind. Rivadavia 2", MP: 15, MW: 5, MD: 3, ML: 7, GF: 19, GA: 21, logo: "argentina/rivadavia2.png" },
        { team: "Colon Santa Fe 2", MP: 16, MW: 4, MD: 3, ML: 9, GF: 14, GA: 21, logo: "argentina/colon2.png" },
        { team: "Central Cordoba 2", MP: 15, MW: 3, MD: 4, ML: 8, GF: 14, GA: 29, logo: "argentina/centralcordoba2.png" },
        { team: "Atl. Rafaela 2", MP: 15, MW: 3, MD: 1, ML: 11, GF: 19, GA: 28, logo: "argentina/rafaela2.png" },
        { team: "Estudiantes Rio Cuarto 2", MP: 16, MW: 1, MD: 5, ML: 10, GF: 8, GA: 31, logo: "argentina/estudiantesrc2.png" },
        { team: "San Martin S.J. 2", MP: 15, MW: 2, MD: 2, ML: 11, GF: 14, GA: 46, logo: "argentina/sanmartin2.png" }
    ],
    fixtures: [
    // Round 17 - June 8
   // { home: "Defensa y Justicia 2", away: "Ferro 2", date: "2026-06-08" },
   // { home: "Gimnasia L.P. 2", away: "Godoy Cruz 2", date: "2026-06-08" },
   // { home: "Ind. Rivadavia 2", away: "Quilmes 2", date: "2026-06-08" },
   // { home: "Racing Club 2", away: "Banfield 2", date: "2026-06-08" },
   // { home: "Union de Santa Fe 2", away: "Atl. Tucuman 2", date: "2026-06-08" },
    
    // Round 17 - June 9
    //{ home: "Aldosivi 2", away: "Gimnasia Mendoza 2", date: "2026-06-09" },
   // { home: "Belgrano 2", away: "Atl. Rafaela 2", date: "2026-06-09" },
   // { home: "Deportivo Riestra 2", away: "Platense 2", date: "2026-06-09" },
   // { home: "Lanus 2", away: "Independiente 2", date: "2026-06-09" },
   // { home: "Central Cordoba 2", away: "Colon Santa Fe 2", date: "2026-06-09" },
   // { home: "River Plate 2", away: "Rosario Central 2", date: "2026-06-09" },
    
    // Round 17 - June 10
    { home: "Argentinos Jrs 2", away: "Barracas Central 2", date: "2026-06-10" },
    { home: "Estudiantes Rio Cuarto 2", away: "Huracan 2", date: "2026-06-10" },
    { home: "Newells Old Boys 2", away: "Boca Juniors 2", date: "2026-06-10" },
    { home: "San Lorenzo 2", away: "Instituto 2", date: "2026-06-10" },
    { home: "San Martin S.J. 2", away: "Estudiantes L.P. 2", date: "2026-06-10" },
    { home: "Sarmiento Junin 2", away: "Talleres Cordoba 2", date: "2026-06-10" },
    { home: "Velez Sarsfield 2", away: "Tigre 2", date: "2026-06-10" }
]
},
*/

"Argentine Primera B Metropolitana": {
    id: "argentina-primera-b",
    logo: "argentina/primera-b.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Midland", MP: 20, MW: 11, MD: 7, ML: 2, GF: 24, GA: 5, logo: "argentina/midland.png" },
        { rank: 2, team: "Real Pilar", MP: 20, MW: 10, MD: 6, ML: 4, GF: 27, GA: 16, logo: "argentina/realpilar.png" },
        { rank: 3, team: "Argentino de Merlo", MP: 20, MW: 10, MD: 5, ML: 5, GF: 25, GA: 15, logo: "argentina/argentinomerlo.png" },
        { rank: 4, team: "Acassuso", MP: 20, MW: 9, MD: 7, ML: 4, GF: 25, GA: 18, logo: "argentina/acassuso.png" },
        { rank: 5, team: "Excursionistas", MP: 20, MW: 9, MD: 5, ML: 6, GF: 21, GA: 16, logo: "argentina/excursionistas.png" },
        { rank: 6, team: "Dock Sud", MP: 20, MW: 8, MD: 7, ML: 5, GF: 29, GA: 25, logo: "argentina/docksud.png" },
        { rank: 7, team: "Villa San Carlos", MP: 20, MW: 9, MD: 3, ML: 8, GF: 24, GA: 28, logo: "argentina/villasantacarlos.png" },
        { rank: 8, team: "Brown (A)", MP: 20, MW: 7, MD: 7, ML: 6, GF: 18, GA: 17, logo: "argentina/brown.png" },
        { rank: 9, team: "Deportivo Merlo", MP: 20, MW: 7, MD: 7, ML: 6, GF: 16, GA: 17, logo: "argentina/deportivomerlo.png" },
        { rank: 10, team: "Liniers", MP: 20, MW: 8, MD: 3, ML: 9, GF: 27, GA: 22, logo: "argentina/liniers.png" },
        { rank: 11, team: "UAI Urquiza", MP: 20, MW: 5, MD: 11, ML: 4, GF: 16, GA: 18, logo: "argentina/uaiurquiza.png" },
        { rank: 12, team: "Comunicaciones", MP: 20, MW: 7, MD: 4, ML: 9, GF: 19, GA: 18, logo: "argentina/comunicaciones.png" },
        { rank: 13, team: "Laferrere", MP: 20, MW: 5, MD: 9, ML: 6, GF: 21, GA: 20, logo: "argentina/laferrere.png" },
        { rank: 14, team: "Argentino Quilmes", MP: 20, MW: 5, MD: 9, ML: 6, GF: 21, GA: 24, logo: "argentina/argentoquilmes.png" },
        { rank: 15, team: "San Martín Burzaco", MP: 20, MW: 6, MD: 6, ML: 8, GF: 19, GA: 25, logo: "argentina/sanmartinburzaco.png" },
        { rank: 16, team: "Dep. Armenio", MP: 20, MW: 5, MD: 8, ML: 7, GF: 17, GA: 19, logo: "argentina/deparmenio.png" },
        { rank: 17, team: "Dálmine", MP: 20, MW: 5, MD: 8, ML: 7, GF: 20, GA: 27, logo: "argentina/dalmine.png" },
        { rank: 18, team: "Flandria", MP: 20, MW: 5, MD: 7, ML: 8, GF: 12, GA: 18, logo: "argentina/flandria.png" },
        { rank: 19, team: "Sportivo Italiano", MP: 20, MW: 4, MD: 9, ML: 7, GF: 15, GA: 16, logo: "argentina/sportivoitaliano.png" },
        { rank: 20, team: "Sacachispas", MP: 20, MW: 2, MD: 9, ML: 9, GF: 13, GA: 24, logo: "argentina/sacachispas.png" },
        { rank: 21, team: "Fenix Pilar", MP: 20, MW: 1, MD: 7, ML: 12, GF: 8, GA: 29, logo: "argentina/fenixpilar.png" },
        // Additional teams for fixtures
        { rank: 22, team: "Talleres Remedios", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "argentina/talleresremedios.png" },
        { rank: 23, team: "Arsenal Sarandi", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "argentina/arsenalsarandi.png" },
        { rank: 24, team: "Defensores Unidos", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "argentina/defensoresunidos.png" },
        { rank: 25, team: "Deportivo Camioneros", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "argentina/depcamioneros.png" },
        { rank: 26, team: "Ituzaingó", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "argentina/ituzaingo.png" }
    ],
    fixtures: [
        // Matchday 22 - TBD (makeup matches)
        { home: "Talleres Remedios", away: "Comunicaciones", date: "TBD" },
        { home: "Argentino de Merlo", away: "Dock Sud", date: "TBD" },
        { home: "Arsenal Sarandi", away: "Deportivo Merlo", date: "TBD" },
        
        // Saturday, June 27
        { home: "Real Pilar", away: "San Martín Burzaco", date: "2026-06-27" },
        { home: "Dálmine", away: "Deportivo Camioneros", date: "2026-06-27" },
        { home: "Talleres Remedios", away: "Defensores Unidos", date: "2026-06-27" },
        { home: "Excursionistas", away: "Deportivo Merlo", date: "2026-06-27" },
        { home: "Brown (A)", away: "Flandria", date: "2026-06-27" },
        { home: "Dep. Armenio", away: "Ituzaingó", date: "2026-06-27" },
        
        // Sunday, June 28
        { home: "Laferrere", away: "Argentino Quilmes", date: "2026-06-28" },
        { home: "UAI Urquiza", away: "Sportivo Italiano", date: "2026-06-28" },
        { home: "Liniers", away: "Villa San Carlos", date: "2026-06-28" },
        { home: "Arsenal Sarandi", away: "Dock Sud", date: "2026-06-28" },
        { home: "Argentino de Merlo", away: "Comunicaciones", date: "2026-06-28" }
    ]
},
/*
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
        { home: "Independiente Rivadavia", away: "River Plate", date: "2026-06-15" },
        { home: "Argentinos Juniors", away: "Central", date: "2026-06-15" },
        { home: "Belgrano", away: "Gimnasia LP", date: "2026-06-15" },
        { home: "Huracán", away: "Racing Club", date: "2026-06-15" },
        { home: "Barracas Central", away: "Tigre", date: "2026-06-15" },
        { home: "Sarmiento", away: "Banfield", date: "2026-06-15" },
        { home: "Atlético Tucumán", away: "Aldosivi", date: "2026-06-15" },
        { home: "Estudiantes de Río Cuarto", away: "Independiente Rivadavia", date: "2026-06-15" },
        { home: "River Plate", away: "Argentinos Juniors", date: "2026-06-15" },
        { home: "Central", away: "Belgrano", date: "2026-06-15" },
        { home: "Gimnasia LP", away: "Huracán", date: "2026-06-15" },
        { home: "Racing Club", away: "Barracas Central", date: "2026-06-15" },
        { home: "Tigre", away: "Sarmiento", date: "2026-06-15" },
        { home: "Banfield", away: "Atlético Tucumán", date: "2026-06-15" },
        { home: "Aldosivi", away: "Estudiantes de Río Cuarto", date: "2026-06-15" }
    ]
},

*/

"Argentine Primera Nacional - Group A": {
    id: "arg-nacional-a",
    logo: "argentina/primera-nacional.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Deportivo Morón", MP: 17, MW: 10, MD: 4, ML: 3, GF: 26, GA: 14, logo: "argentina/depormoron.png" },
        { rank: 2, team: "Ferro", MP: 17, MW: 9, MD: 4, ML: 4, GF: 19, GA: 13, logo: "argentina/ferro.png" },
        { rank: 3, team: "Los Andes", MP: 17, MW: 7, MD: 8, ML: 2, GF: 15, GA: 4, logo: "argentina/losandes.png" },
        { rank: 4, team: "Colón", MP: 18, MW: 7, MD: 8, ML: 3, GF: 21, GA: 14, logo: "argentina/colonsantafe.png" },
        { rank: 5, team: "Ciudad de Bolívar", MP: 18, MW: 6, MD: 9, ML: 3, GF: 15, GA: 12, logo: "argentina/ciudadbolivar.png" },
        { rank: 6, team: "Estudiantes", MP: 18, MW: 7, MD: 5, ML: 6, GF: 14, GA: 15, logo: "argentina/caestudiantes.png" },
        { rank: 7, team: "Deportivo Madryn", MP: 17, MW: 6, MD: 7, ML: 4, GF: 22, GA: 17, logo: "argentina/depormadryn.png" },
        { rank: 8, team: "Godoy Cruz", MP: 17, MW: 6, MD: 7, ML: 4, GF: 18, GA: 13, logo: "argentina/godoycruz.png" },
        { rank: 9, team: "San Miguel", MP: 18, MW: 5, MD: 9, ML: 4, GF: 16, GA: 19, logo: "argentina/sanmiguel.png" },
        { rank: 10, team: "Almirante Brown", MP: 17, MW: 6, MD: 5, ML: 6, GF: 10, GA: 11, logo: "argentina/almirantebrown.png" },
        { rank: 11, team: "San Telmo", MP: 18, MW: 4, MD: 8, ML: 6, GF: 14, GA: 16, logo: "argentina/santelmo.png" },
        { rank: 12, team: "Defensores de Belgrano", MP: 17, MW: 4, MD: 8, ML: 5, GF: 12, GA: 15, logo: "argentina/defbelgrano.png" },
        { rank: 13, team: "Racing (C)", MP: 18, MW: 5, MD: 5, ML: 8, GF: 16, GA: 21, logo: "argentina/racingcordoba.png" },
        { rank: 14, team: "Acassuso", MP: 18, MW: 5, MD: 3, ML: 10, GF: 12, GA: 19, logo: "argentina/acassuso.png" },
        { rank: 15, team: "Mitre", MP: 17, MW: 3, MD: 8, ML: 6, GF: 17, GA: 20, logo: "argentina/camitre.png" },
        { rank: 16, team: "All Boys", MP: 17, MW: 3, MD: 7, ML: 7, GF: 10, GA: 18, logo: "argentina/allboys.png" },
        { rank: 17, team: "Central Norte", MP: 17, MW: 3, MD: 6, ML: 8, GF: 10, GA: 16, logo: "argentina/centralnorte.png" },
        { rank: 18, team: "Chaco For Ever", MP: 18, MW: 2, MD: 6, ML: 10, GF: 13, GA: 24, logo: "argentina/chacoforever.png" }
    ],
    fixtures: [
        // Today - June 21
        { home: "Deportivo Madryn", away: "Los Andes", date: "2026-06-21" },
        { home: "Ferro", away: "Deportivo Morón", date: "2026-06-21" },
        { home: "Almirante Brown", away: "Mitre", date: "2026-06-21" },
        { home: "Defensores de Belgrano", away: "All Boys", date: "2026-06-21" },
        { home: "Central Norte", away: "Godoy Cruz", date: "2026-06-21" },
        
        // Tuesday, June 23
        { home: "Nueva Chicago", away: "Atlético Rafaela", date: "2026-06-23" },
        
        // Saturday, June 27
        { home: "Estudiantes", away: "Racing (C)", date: "2026-06-27" },
        { home: "Chaco For Ever", away: "Acassuso", date: "2026-06-27" },
        { home: "Mitre", away: "All Boys", date: "2026-06-27" },
        { home: "Ferro", away: "San Telmo", date: "2026-06-27" },
        { home: "Central Norte", away: "San Miguel", date: "2026-06-27" },
        { home: "Ciudad de Bolívar", away: "Godoy Cruz", date: "2026-06-27" },
        { home: "Almirante Brown", away: "Los Andes", date: "2026-06-27" },
        { home: "Defensores de Belgrano", away: "Deportivo Morón", date: "2026-06-27" },
        { home: "Deportivo Madryn", away: "Colón", date: "2026-06-27" }
    ]
},

"Argentine Primera Nacional - Group B": {
    id: "arg-nacional-b",
    logo: "argentina/primera-nacional.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Atlanta", MP: 18, MW: 10, MD: 3, ML: 5, GF: 23, GA: 13, logo: "argentina/atleticoatlanta.png" },
        { rank: 2, team: "Gimnasia de Jujuy", MP: 17, MW: 10, MD: 3, ML: 4, GF: 27, GA: 19, logo: "argentina/gimnasiajujuy.png" },
        { rank: 3, team: "Tristan Suarez", MP: 17, MW: 7, MD: 8, ML: 2, GF: 16, GA: 10, logo: "argentina/tristansuarez.png" },
        { rank: 4, team: "Temperley", MP: 18, MW: 6, MD: 9, ML: 3, GF: 18, GA: 17, logo: "argentina/temperley.png" },
        { rank: 5, team: "Atlético Rafaela", MP: 17, MW: 7, MD: 5, ML: 5, GF: 14, GA: 12, logo: "argentina/atlrafaela.png" },
        { rank: 6, team: "Midland", MP: 17, MW: 7, MD: 4, ML: 6, GF: 18, GA: 13, logo: "argentina/midland.png" },
        { rank: 7, team: "San Martín", MP: 17, MW: 6, MD: 5, ML: 6, GF: 18, GA: 18, logo: "argentina/sanmartinsj.png" },
        { rank: 8, team: "Colegiales", MP: 18, MW: 6, MD: 5, ML: 7, GF: 17, GA: 17, logo: "argentina/colegiales.png" },
        { rank: 9, team: "San Martín Tucumán", MP: 18, MW: 5, MD: 8, ML: 5, GF: 15, GA: 15, logo: "argentina/sanmartint.png" },
        { rank: 10, team: "Almagro", MP: 18, MW: 6, MD: 4, ML: 8, GF: 15, GA: 19, logo: "argentina/almagro.png" },
        { rank: 11, team: "Deportivo Maipú", MP: 17, MW: 6, MD: 3, ML: 8, GF: 22, GA: 20, logo: "argentina/depormaipu.png" },
        { rank: 12, team: "Quilmes", MP: 18, MW: 5, MD: 6, ML: 7, GF: 16, GA: 14, logo: "argentina/quilmes.png" },
        { rank: 13, team: "Nueva Chicago", MP: 16, MW: 5, MD: 6, ML: 5, GF: 15, GA: 16, logo: "argentina/nuevachicago.png" },
        { rank: 14, team: "Gimnasia y Tiro", MP: 17, MW: 5, MD: 5, ML: 7, GF: 16, GA: 19, logo: "argentina/gimnasiaytiro.png" },
        { rank: 15, team: "Patronato", MP: 17, MW: 4, MD: 8, ML: 5, GF: 11, GA: 14, logo: "argentina/patronato.png" },
        { rank: 16, team: "Guemes", MP: 17, MW: 5, MD: 4, ML: 8, GF: 17, GA: 27, logo: "argentina/clubguemes.png" },
        { rank: 17, team: "Chacarita Juniors", MP: 17, MW: 5, MD: 3, ML: 9, GF: 14, GA: 20, logo: "argentina/chacaritajuniors.png" },
        { rank: 18, team: "Agropecuario", MP: 18, MW: 4, MD: 6, ML: 8, GF: 14, GA: 22, logo: "argentina/agropecuario.png" }
    ],
    fixtures: [
        // Today - June 21
        { home: "Patronato", away: "Midland", date: "2026-06-21" },
        { home: "Chacarita Juniors", away: "Tristan Suarez", date: "2026-06-21" },
        { home: "Deportivo Maipú", away: "Gimnasia y Tiro", date: "2026-06-21" },
        { home: "Guemes", away: "Gimnasia de Jujuy", date: "2026-06-21" },
        
        // Tuesday, June 23
        { home: "Nueva Chicago", away: "Atlético Rafaela", date: "2026-06-23" },
        
        // Saturday, June 27
        { home: "Deportivo Maipú", away: "Agropecuario", date: "2026-06-27" },
        { home: "Quilmes", away: "Atlanta", date: "2026-06-27" },
        { home: "Nueva Chicago", away: "Guemes", date: "2026-06-27" },
        { home: "San Martín", away: "Chacarita Juniors", date: "2026-06-27" },
        { home: "Colegiales", away: "Gimnasia y Tiro", date: "2026-06-27" },
        { home: "Almagro", away: "Atlético Rafaela", date: "2026-06-27" },
        { home: "Midland", away: "Gimnasia de Jujuy", date: "2026-06-27" },
        { home: "Patronato", away: "San Martín Tucumán", date: "2026-06-27" },
        { home: "Temperley", away: "Tristan Suarez", date: "2026-06-27" }
    ]
},
"Australian NPL ACT": {
    id: "australia-npl-act",
    logo: "australia/nplact.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Canberra Croatia", MP: 12, MW: 10, MD: 1, ML: 1, GF: 37, GA: 14, logo: "australia/canberracroatia.png" },
        { rank: 2, team: "Tigers FC", MP: 13, MW: 9, MD: 1, ML: 3, GF: 39, GA: 16, logo: "australia/tigersfc.png" },
        { rank: 3, team: "Monaro Panthers", MP: 12, MW: 9, MD: 0, ML: 3, GF: 40, GA: 21, logo: "australia/monaropanthers.png" },
        { rank: 4, team: "Tuggeranong Utd", MP: 12, MW: 8, MD: 0, ML: 4, GF: 31, GA: 28, logo: "australia/tuggeranong.png" },
        { rank: 5, team: "Queanbeyan City", MP: 11, MW: 7, MD: 0, ML: 4, GF: 25, GA: 16, logo: "australia/queanbeyan.png" },
        { rank: 6, team: "Canberra Juventus", MP: 11, MW: 7, MD: 0, ML: 4, GF: 27, GA: 21, logo: "australia/canberrajuv.png" },
        { rank: 7, team: "Canberra Olympic", MP: 12, MW: 4, MD: 1, ML: 7, GF: 30, GA: 36, logo: "australia/canberraolympic.png" },
        { rank: 8, team: "O'Connor Knights", MP: 13, MW: 4, MD: 0, ML: 9, GF: 14, GA: 28, logo: "australia/oconnorknights.png" },
        { rank: 9, team: "Belconnen Utd.", MP: 13, MW: 2, MD: 2, ML: 9, GF: 23, GA: 32, logo: "australia/belconnenutd.png" },
        { rank: 10, team: "Brindabella", MP: 11, MW: 2, MD: 0, ML: 9, GF: 7, GA: 31, logo: "australia/brindabella.png" },
        { rank: 11, team: "Canberra White Eagles", MP: 12, MW: 1, MD: 1, ML: 10, GF: 9, GA: 39, logo: "australia/whiteeagles.png" }
    ],
    fixtures: [
        // Round 15 - June 27
        { home: "O'Connor Knights", away: "Canberra Olympic", date: "2026-06-27" },
        { home: "Queanbeyan City", away: "Canberra White Eagles", date: "2026-06-27" },
        { home: "Monaro Panthers", away: "Tigers FC", date: "2026-06-27" },
        
        // Round 15 - June 28
        { home: "Canberra Croatia", away: "Tuggeranong Utd", date: "2026-06-28" },
        { home: "Canberra Juventus", away: "Brindabella", date: "2026-06-28" },
        
        // Round 16 - July 4
        { home: "Canberra White Eagles", away: "Tigers FC", date: "2026-07-04" },
        { home: "Queanbeyan City", away: "Tuggeranong Utd", date: "2026-07-04" },
        { home: "Belconnen Utd.", away: "Canberra Juventus", date: "2026-07-04" },
        { home: "Monaro Panthers", away: "Brindabella", date: "2026-07-04" },
        
        // Round 16 - July 5
        { home: "Canberra Croatia", away: "Canberra Olympic", date: "2026-07-05" },
        
        // Round 15 - July 1 (makeup)
        { home: "Monaro Panthers", away: "Queanbeyan City", date: "2026-07-01" }
    ]
},

"Brazilian U-20 League": {
    id: "brazil-u20",
    logo: "brazil/u20.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Palmeiras U20", MP: 17, MW: 12, MD: 5, ML: 0, GF: 50, GA: 20, logo: "brazil/palmeirasu20.png" },
        { rank: 2, team: "Vasco U20", MP: 17, MW: 11, MD: 2, ML: 4, GF: 34, GA: 16, logo: "brazil/vascou20.png" },
        { rank: 3, team: "RB Bragantino U20", MP: 17, MW: 9, MD: 4, ML: 4, GF: 42, GA: 30, logo: "brazil/bragantinou20.png" },
        { rank: 4, team: "Botafogo U20", MP: 17, MW: 9, MD: 3, ML: 5, GF: 24, GA: 16, logo: "brazil/botafogou20.png" },
        { rank: 5, team: "Cruzeiro U20", MP: 17, MW: 8, MD: 4, ML: 5, GF: 32, GA: 22, logo: "brazil/cruzeirou20.png" },
        { rank: 6, team: "Corinthians U20", MP: 17, MW: 8, MD: 4, ML: 5, GF: 29, GA: 22, logo: "brazil/corinthiansu20.png" },
        { rank: 7, team: "Santos U20", MP: 17, MW: 8, MD: 4, ML: 5, GF: 27, GA: 20, logo: "brazil/santosu20.png" },
        { rank: 8, team: "Athletico-PR U20", MP: 17, MW: 7, MD: 5, ML: 5, GF: 35, GA: 25, logo: "brazil/athleticopru20.png" },
        { rank: 9, team: "Bahia U20", MP: 17, MW: 7, MD: 5, ML: 5, GF: 29, GA: 25, logo: "brazil/bahiau20.png" },
        { rank: 10, team: "Flamengo U20", MP: 17, MW: 7, MD: 5, ML: 5, GF: 24, GA: 25, logo: "brazil/flamengou20.png" },
        { rank: 11, team: "América MG U20", MP: 17, MW: 6, MD: 6, ML: 5, GF: 23, GA: 30, logo: "brazil/americamgu20.png" },
        { rank: 12, team: "Vitória U20", MP: 17, MW: 5, MD: 5, ML: 7, GF: 19, GA: 27, logo: "brazil/vitoriau20.png" },
        { rank: 13, team: "Fluminense U20", MP: 17, MW: 5, MD: 4, ML: 8, GF: 23, GA: 25, logo: "brazil/fluminenseu20.png" },
        { rank: 14, team: "São Paulo U20", MP: 17, MW: 4, MD: 7, ML: 6, GF: 23, GA: 26, logo: "brazil/saopaulou20.png" },
        { rank: 15, team: "Grêmio U20", MP: 17, MW: 5, MD: 1, ML: 11, GF: 25, GA: 39, logo: "brazil/gremiou20.png" },
        { rank: 16, team: "Cuiabá U20", MP: 17, MW: 4, MD: 3, ML: 10, GF: 14, GA: 26, logo: "brazil/cuiabau20.png" },
        { rank: 17, team: "Juventude U20", MP: 17, MW: 4, MD: 3, ML: 10, GF: 19, GA: 37, logo: "brazil/juventudeu20.png" },
        { rank: 18, team: "Avaí U20", MP: 17, MW: 3, MD: 6, ML: 8, GF: 22, GA: 39, logo: "brazil/avaiu20.png" },
        { rank: 19, team: "Fortaleza U20", MP: 17, MW: 2, MD: 8, ML: 7, GF: 17, GA: 23, logo: "brazil/fortalezau20.png" },
        { rank: 20, team: "Criciuma U20", MP: 17, MW: 3, MD: 2, ML: 12, GF: 19, GA: 37, logo: "brazil/criciumau20.png" }
    ],
    fixtures: [
        // Round 18 - June 23
        { home: "Cruzeiro U20", away: "América MG U20", date: "2026-06-23" },
        { home: "Grêmio U20", away: "Bahia U20", date: "2026-06-23" },
        { home: "São Paulo U20", away: "Fortaleza U20", date: "2026-06-23" },
        { home: "Vitória U20", away: "Santos U20", date: "2026-06-23" },
        { home: "Cuiabá U20", away: "Juventude U20", date: "2026-06-23" },
        
        // Round 18 - June 24
        { home: "Avaí U20", away: "Athletico-PR U20", date: "2026-06-24" },
        
        // Round 18 - June 25
        { home: "Corinthians U20", away: "Flamengo U20", date: "2026-06-25" },
        { home: "Fluminense U20", away: "Palmeiras U20", date: "2026-06-25" },
        { home: "RB Bragantino U20", away: "Botafogo U20", date: "2026-06-25" },
        { home: "Vasco U20", away: "Criciuma U20", date: "2026-06-25" },
        
        // Round 19 - July 1
        { home: "América MG U20", away: "RB Bragantino U20", date: "2026-07-01" },
        { home: "Athletico-PR U20", away: "Vitória U20", date: "2026-07-01" },
        { home: "Bahia U20", away: "Cruzeiro U20", date: "2026-07-01" },
        { home: "Botafogo U20", away: "Fluminense U20", date: "2026-07-01" },
        { home: "Criciuma U20", away: "Grêmio U20", date: "2026-07-01" },
        { home: "Flamengo U20", away: "Avaí U20", date: "2026-07-01" },
        { home: "Fortaleza U20", away: "Vasco U20", date: "2026-07-01" },
        { home: "Juventude U20", away: "Corinthians U20", date: "2026-07-01" },
        { home: "Palmeiras U20", away: "Cuiabá U20", date: "2026-07-01" },
        { home: "Santos U20", away: "São Paulo U20", date: "2026-07-01" }
    ]
},
/*
"Japanese J1 League": {
    id: "j1-league",
    logo: "japan/j1logo.png",
    isBasketball: false,
    teams: [
        { team: "Kashima Antlers", MP: 38, MW: 23, MD: 7, GF: 58, GA: 31, logo: "japanesej1/kashimaantlerslogo.png" },
        { team: "Kashiwa", MP: 38, MW: 21, MD: 12, GF: 60, GA: 34, logo: "japanesej1/kashiwalogo.png" },
        { team: "Kyoto", MP: 38, MW: 19, MD: 11, GF: 62, GA: 40, logo: "japanesej1/kyotologo.png" },
        { team: "Sanfrecce", MP: 38, MW: 20, MD: 8, GF: 46, GA: 28, logo: "japanesej1/sanfreecelogo.png" },
        { team: "Vissel Kobe", MP: 38, MW: 18, MD: 10, GF: 46, GA: 33, logo: "japanesej1/visselkobelogo.png" },
        { team: "Machida", MP: 38, MW: 17, MD: 9, GF: 52, GA: 38, logo: "japanesej1/machidalogo.png" },
        { team: "Urawa Reds", MP: 38, MW: 16, MD: 11, GF: 45, GA: 39, logo: "japanesej1/urawaredslogo.png" },
        { team: "Kawasaki", MP: 38, MW: 15, MD: 12, GF: 67, GA: 57, logo: "japanesej1/kawasakilogo.png" },
        { team: "Gamba Osaka", MP: 38, MW: 17, MD: 6, GF: 53, GA: 55, logo: "japanesej1/gambaosakalogo.png" },
        { team: "Cerezo Osaka", MP: 38, MW: 14, MD: 10, GF: 60, GA: 57, logo: "japanesej1/cerezoosakalogo.png" },
        { team: "FC Tokyo", MP: 38, MW: 13, MD: 11, GF: 41, GA: 48, logo: "japanesej1/fctokyologo.png" },
        { team: "Avispa", MP: 38, MW: 12, MD: 12, GF: 34, GA: 38, logo: "japanesej1/avispalogo.png" },
        { team: "Okayama", MP: 38, MW: 12, MD: 9, GF: 34, GA: 43, logo: "japanesej1/okayamalogo.png" },
        { team: "Shimizu", MP: 38, MW: 11, MD: 11, GF: 41, GA: 51, logo: "japanesej1/shimizulogo.png" },
        { team: "Yokohama FM", MP: 38, MW: 12, MD: 7, GF: 46, GA: 47, logo: "japanesej1/yokohamafmlogo.png" },
        { team: "Nagoya", MP: 38, MW: 11, MD: 10, GF: 44, GA: 56, logo: "japanesej1/nagoyalogo.png" },
        { team: "Tokyo Verdy", MP: 38, MW: 11, MD: 10, GF: 23, GA: 41, logo: "japanesej1/tokyoverdylogo.png" },
        { team: "Yokohama FC", MP: 38, MW: 9, MD: 8, GF: 27, GA: 45, logo: "japanesej1/yokogamafclogo.png" },
        { team: "Shonan", MP: 38, MW: 8, MD: 8, GF: 36, GA: 63, logo: "japanesej1/shonanlogo.png" },
        { team: "Niigata", MP: 38, MW: 4, MD: 12, GF: 36, GA: 67, logo: "japanesej1/niigatalogologo.png" }
    ],
    fixtures: [
        { home: "Kashima Antlers", away: "Vissel Kobe", date: "2026-06-06" },
        { home: "Machida", away: "Nagoya", date: "2026-06-06" },
        { home: "Tokyo Verdy", away: "Gamba Osaka", date: "2026-06-06" },
        { home: "Urawa Reds", away: "Okayama", date: "2026-06-06" },
		{ home: "Yokohama FM", away: "Shimizu", date: "2026-06-06" },
		{ home: "Kashiwa", away: "Kyoto", date: "2026-06-06" },
		{ home: "Kawasaki", away: "Sanfrecce", date: "2026-06-06" },
    ]
},

"Japanese J2 League": {
    id: "j2-league",
    logo: "japan/j2logo.png",
    isBasketball: false,
    teams: [
        { team: "Mito HollyHock", MP: 38, MW: 20, MD: 10, GF: 55, GA: 34, logo: "japanesej1/mitologo.png" },
        { team: "V-Varen Nagasaki", MP: 38, MW: 19, MD: 13, GF: 63, GA: 44, logo: "japanesej1/nagasaki.png" },
        { team: "JEF United", MP: 38, MW: 20, MD: 9, GF: 56, GA: 34, logo: "japanesej1/jeflogo.png" },
        { team: "Tokushima Vortis", MP: 38, MW: 18, MD: 11, GF: 45, GA: 24, logo: "japanesej1/tokushimavortislogo.png" },
        { team: "Júbilo Iwata", MP: 38, MW: 19, MD: 7, GF: 59, GA: 51, logo: "japanesej1/jubiloiwatalogo.png" },
        { team: "Omiya Ardija", MP: 38, MW: 18, MD: 9, GF: 60, GA: 39, logo: "japanesej1/omiyalogo.png" },
        { team: "Vegalta Sendai", MP: 38, MW: 16, MD: 14, GF: 47, GA: 36, logo: "japanesej1/velgatalogo.png" },
        { team: "Sagan Tosu", MP: 38, MW: 16, MD: 10, GF: 46, GA: 43, logo: "japanesej1/sagantosulogo.png" },
        { team: "Iwaki FC", MP: 38, MW: 15, MD: 11, GF: 55, GA: 44, logo: "japanesej1/iwakilogo.png" },
        { team: "Montedio Yamagata", MP: 38, MW: 15, MD: 8, GF: 58, GA: 54, logo: "japanesej1/yamagatalogo.png" },
        { team: "Imabari", MP: 38, MW: 13, MD: 14, GF: 46, GA: 46, logo: "japanesej1/imabarilogo.png" },
        { team: "Consadole Sapporo", MP: 38, MW: 16, MD: 5, GF: 50, GA: 63, logo: "japanesej1/consadolelogo.png" },
        { team: "Ventforet Kofu", MP: 38, MW: 11, MD: 11, GF: 37, GA: 45, logo: "japanesej1/ventforetlogo.png" },
        { team: "Blaublitz", MP: 38, MW: 11, MD: 10, GF: 43, GA: 59, logo: "japanesej1/blaublitzlogo.png" },
        { team: "Fujieda MYFC", MP: 38, MW: 9, MD: 12, GF: 41, GA: 50, logo: "japanesej1/fujieda.png" },
        { team: "Oita Trinita", MP: 38, MW: 8, MD: 14, GF: 27, GA: 44, logo: "japanesej1/oitalogo.png" },
        { team: "Kataller Toyama", MP: 38, MW: 9, MD: 10, GF: 34, GA: 49, logo: "japanesej1/toyamalogo.png" },
        { team: "Roasso Kumamoto", MP: 38, MW: 9, MD: 10, GF: 41, GA: 57, logo: "japan/roassologo.png" },
        { team: "Renofa Yamaguchi", MP: 38, MW: 7, MD: 15, GF: 36, GA: 47, logo: "japan/renofalogo.png" },
        { team: "Ehime FC", MP: 38, MW: 3, MD: 13, GF: 35, GA: 71, logo: "japan/ehimelogo.png" }
    ],
    fixtures: [
       // { home: "Kamatamare Sanuki", away: "Nagano", date: "2026-06-05" },
       // { home: "Niigata", away: "Consadole Sapporo", date: "2026-06-06" },
       // { home: "Omiya Ardija", away: "Kochi United", date: "2026-06-06" },
        //{ home: "Tochigi City FC", away: "Reilac Shiga", date: "2026-06-06" },
       // { home: "Sagamihara", away: "Roasso Kumamoto", date: "2026-06-06" },
        //{ home: "Matsumoto Yamaga", away: "Nara Club", date: "2026-06-06" },
       // { home: "Yokohama FC", away: "Renofa Yamaguchi", date: "2026-06-06" },
       // { home: "Fujieda MYFC", away: "Ehime FC", date: "2026-06-06" },
       // { home: "FC Gifu", away: "Tottori", date: "2026-06-07" },
       // { home: "Júbilo Iwata", away: "Osaka", date: "2026-06-07" },
       // { home: "Sagan Tosu", away: "Shonan Bellmare", date: "2026-06-07" },
      //  { home: "Vanraure Hachinohe", away: "Imabari", date: "2026-06-07" },
       // { home: "Tokushima Vortis", away: "Iwaki FC", date: "2026-06-07" },
        //{ home: "Blaublitz", away: "Kagoshima United", date: "2026-06-07" },
       // { home: "Vegalta Sendai", away: "Kataller Toyama", date: "2026-06-06" },
       // { home: "Tegevajaro Miyazaki", away: "Ventforet Kofu", date: "2026-06-06" },
        { home: "Montedio Yamagata", away: "Shonan Bellmare", date: "2026-06-15" },
        { home: "Tottori", away: "Oita Trinita", date: "2026-06-15" },
        { home: "Blaublitz Tochigi FC", away: "Kanazawa", date: "2026-06-15" },
        { home: "Ehime FC", away: "Mito HollyHock", date: "2026-06-15" }
    ]
},
*/

"Brazilian Série B": {
    id: "brasil-serie-b",
    logo: "brazil/serieb.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Coritiba", MP: 38, MW: 19, MD: 11, ML: 8, GF: 39, GA: 23, logo: "brazil/coritiba.png" },
        { rank: 2, team: "Athletico-PR", MP: 38, MW: 19, MD: 8, ML: 11, GF: 53, GA: 43, logo: "brazil/athleticopr.png" },
        { rank: 3, team: "Chapecoense", MP: 38, MW: 18, MD: 8, ML: 12, GF: 52, GA: 35, logo: "brazil/chapecoense.png" },
        { rank: 4, team: "Remo", MP: 38, MW: 16, MD: 14, ML: 8, GF: 51, GA: 39, logo: "brazil/remo.png" },
        { rank: 5, team: "Criciúma", MP: 38, MW: 17, MD: 10, ML: 11, GF: 47, GA: 33, logo: "brazil/criciuma.png" },
        { rank: 6, team: "Goiás", MP: 38, MW: 17, MD: 10, ML: 11, GF: 42, GA: 37, logo: "brazil/goias.png" },
        { rank: 7, team: "Novorizontino", MP: 38, MW: 15, MD: 15, ML: 8, GF: 43, GA: 32, logo: "brazil/novorizontino.png" },
        { rank: 8, team: "CRB", MP: 38, MW: 16, MD: 8, ML: 14, GF: 45, GA: 40, logo: "brazil/crb.png" },
        { rank: 9, team: "Avaí", MP: 38, MW: 14, MD: 14, ML: 10, GF: 50, GA: 40, logo: "brazil/avai.png" },
        { rank: 10, team: "Cuiabá", MP: 38, MW: 14, MD: 12, ML: 12, GF: 43, GA: 44, logo: "brazil/cuiaba.png" },
        { rank: 11, team: "Atlético Goianiense", MP: 38, MW: 13, MD: 13, ML: 12, GF: 39, GA: 38, logo: "brazil/atleticogoianiense.png" },
        { rank: 12, team: "Operário Ferroviário", MP: 38, MW: 12, MD: 12, ML: 14, GF: 40, GA: 44, logo: "brazil/operario.png" },
        { rank: 13, team: "Vila Nova", MP: 38, MW: 11, MD: 14, ML: 13, GF: 40, GA: 44, logo: "brazil/vilanova.png" },
        { rank: 14, team: "América-MG", MP: 38, MW: 12, MD: 10, ML: 16, GF: 41, GA: 44, logo: "brazil/americamg.png" },
        { rank: 15, team: "Athletic (MG)", MP: 38, MW: 12, MD: 8, ML: 18, GF: 43, GA: 53, logo: "brazil/athleticmg.png" },
        { rank: 16, team: "Botafogo", MP: 38, MW: 10, MD: 12, ML: 16, GF: 32, GA: 52, logo: "brazil/botafogosp.png" },
        { rank: 17, team: "Ferroviária", MP: 38, MW: 8, MD: 16, ML: 14, GF: 43, GA: 52, logo: "brazil/ferroviaria.png" },
        { rank: 18, team: "Amazonas", MP: 38, MW: 8, MD: 12, ML: 18, GF: 38, GA: 55, logo: "brazil/amazonas.png" },
        { rank: 19, team: "Volta Redonda", MP: 38, MW: 8, MD: 12, ML: 18, GF: 26, GA: 43, logo: "brazil/voltaredonda.png" },
        { rank: 20, team: "Paysandu", MP: 38, MW: 5, MD: 13, ML: 20, GF: 36, GA: 52, logo: "brazil/paysandu.png" }
    ],
    fixtures: [
       // Tuesday, June 16
       // { home: "Criciúma", away: "Ceará", date: "2026-06-16" },
       // { home: "Londrina", away: "Avaí", date: "2026-06-16" },
        
        // Wednesday, June 17
       // { home: "Fortaleza", away: "América-MG", date: "2026-06-17" },
        
        // Friday, June 19
        //{ home: "Sport", away: "Atlético Goianiense", date: "2026-06-19" },
        
        // Saturday, June 20
       // { home: "Londrina", away: "Athletic (MG)", date: "2026-06-20" },
       // { home: "Vila Nova", away: "Náutico", date: "2026-06-20" },
       // { home: "Ceará", away: "Botafogo", date: "2026-06-20" },
        
        // Sunday, June 21
       // { home: "Avaí", away: "Cuiabá", date: "2026-06-21" },
       // { home: "São Bernardo", away: "Juventude", date: "2026-06-21" },
       // { home: "CRB", away: "Fortaleza", date: "2026-06-21" },
        //{ home: "Goiás", away: "Operário Ferroviário", date: "2026-06-21" },
        
        // Tuesday, June 23
        { home: "Ponte Preta", away: "Novorizontino", date: "2026-06-23" },
        
        // Wednesday, June 24
        { home: "América-MG", away: "Criciúma", date: "2026-06-24" }
    ],
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
         // Matchday 16 - Friday, June 19
        { home: "Universidad de Chile", away: "O'Higgins", date: "2026-06-19" },
        
        // Matchday 17 - July 26 (TBD times)
        { home: "Colo-Colo", away: "Deportes Limache", date: "2026-07-26" },
        { home: "Audax Italiano", away: "Universidad de Chile", date: "2026-07-26" },
        { home: "Universidad Católica", away: "La Serena", date: "2026-07-26" },
        { home: "Unión La Calera", away: "Everton", date: "2026-07-26" },
        { home: "Coquimbo", away: "Universidad de Concepción", date: "2026-07-26" },
        { home: "Palestino", away: "Ñublense", date: "2026-07-26" },
        { home: "Huachipato", away: "Cobresal", date: "2026-07-26" },
        { home: "Concepción", away: "O'Higgins", date: "2026-07-26" }
    ]
},
"Swedish Superettan": {
    id: "sweden-superettan",
    logo: "sweden/superettan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Västerås", MP: 30, MW: 20, MD: 5, ML: 5, GF: 62, GA: 30, logo: "sweden/vasteras.png" },
        { rank: 2, team: "Kalmar", MP: 30, MW: 18, MD: 10, ML: 2, GF: 52, GA: 21, logo: "sweden/kalmar.png" },
        { rank: 3, team: "ÖIS", MP: 30, MW: 16, MD: 8, ML: 6, GF: 57, GA: 33, logo: "sweden/ois.png" },
        { rank: 4, team: "Oddevold", MP: 30, MW: 13, MD: 9, ML: 8, GF: 42, GA: 36, logo: "sweden/oddevold.png" },
        { rank: 5, team: "Falkenberg", MP: 30, MW: 12, MD: 10, ML: 8, GF: 53, GA: 36, logo: "sweden/falkenberg.png" },
        { rank: 6, team: "Varbergs BoIS", MP: 30, MW: 11, MD: 10, ML: 9, GF: 45, GA: 42, logo: "sweden/varbergsbois.png" },
        { rank: 7, team: "Helsingborg", MP: 30, MW: 11, MD: 8, ML: 11, GF: 42, GA: 39, logo: "sweden/helsingborg.png" },
        { rank: 8, team: "Brage", MP: 30, MW: 11, MD: 8, ML: 11, GF: 51, GA: 51, logo: "sweden/brage.png" },
        { rank: 9, team: "Landskrona", MP: 30, MW: 11, MD: 8, ML: 11, GF: 39, GA: 47, logo: "sweden/landskrona.png" },
        { rank: 10, team: "Sandviken", MP: 30, MW: 12, MD: 5, ML: 13, GF: 36, GA: 47, logo: "sweden/sandviken.png" },
        { rank: 11, team: "GIF Sundsvall", MP: 30, MW: 11, MD: 7, ML: 12, GF: 36, GA: 38, logo: "sweden/gifsundsvall.png" },
        { rank: 12, team: "Östersund", MP: 30, MW: 9, MD: 9, ML: 12, GF: 33, GA: 51, logo: "sweden/ostersund.png" },
        { rank: 13, team: "Utsiktens", MP: 30, MW: 7, MD: 9, ML: 14, GF: 46, GA: 53, logo: "sweden/utsiktens.png" },
        { rank: 14, team: "Örebro", MP: 30, MW: 4, MD: 10, ML: 16, GF: 39, GA: 54, logo: "sweden/orebro.png" },
        { rank: 15, team: "Trelleborg", MP: 30, MW: 5, MD: 7, ML: 18, GF: 23, GA: 51, logo: "sweden/trelleborg.png" },
        { rank: 16, team: "Umeå", MP: 30, MW: 4, MD: 7, ML: 19, GF: 30, GA: 57, logo: "sweden/umea.png" }
    ],
    fixtures: [
        // Matchday 13
        // Tomorrow - June 15
      //  { home: "GIF Sundsvall", away: "Östers IF", date: "2026-06-15" },
       // { home: "Norrköping", away: "Varbergs BoIS", date: "2026-06-15" },
        
        // Tuesday, June 16
       // { home: "Värnamo", away: "Helsingborg", date: "2026-06-16" },
        //{ home: "Landskrona", away: "United Nordic", date: "2026-06-16" },
        
        // Sunday, June 21
       /* { home: "Brage", away: "Värnamo", date: "2026-06-21" },
        { home: "Helsingborg", away: "GIF Sundsvall", date: "2026-06-21" },
        { home: "Östers IF", away: "Falkenberg", date: "2026-06-21" },
        { home: "Östersund", away: "Norrköping", date: "2026-06-21" },
        { home: "Norrby", away: "United Nordic", date: "2026-06-21" },
        */
        // Monday, June 22
        { home: "Oddevold", away: "Ljungskile", date: "2026-06-22" },
        { home: "Varbergs BoIS", away: "Landskrona", date: "2026-06-22" },
        { home: "Örebro", away: "Sandviken", date: "2026-06-22" }
    ]
},

"Chinese Super League": {
    id: "csl",
    logo: "china/csl.png",
    isBasketball: false,
    teams: [
        { team: "Shanghai Port", MP: 30, MW: 20, MD: 6, ML: 4, GF: 72, GA: 44, logo: "china/shanghaiportlogo.png" },
        { team: "Shanghai Shenhua", MP: 30, MW: 19, MD: 7, ML: 4, GF: 67, GA: 35, logo: "china/shanghaishenhualogo.png" },
        { team: "Chengdu Rongcheng", MP: 30, MW: 17, MD: 9, ML: 4, GF: 60, GA: 28, logo: "china/chengdurongchenglogo.png" },
        { team: "Beijing Guoan", MP: 30, MW: 17, MD: 6, ML: 7, GF: 69, GA: 46, logo: "china/beijinggouanlogo.png" },
        { team: "Shandong Taishan", MP: 30, MW: 15, MD: 8, ML: 7, GF: 69, GA: 46, logo: "china/shandongtaishanlogo.png" },
        { team: "Tianjin Jinmen Tiger", MP: 30, MW: 12, MD: 8, ML: 10, GF: 40, GA: 41, logo: "china/tianjinlogo.png" },
        { team: "Zhejiang", MP: 30, MW: 10, MD: 12, ML: 8, GF: 60, GA: 51, logo: "china/zhejianglogo.png" },
        { team: "Yunnan Yukun", MP: 30, MW: 11, MD: 9, ML: 10, GF: 47, GA: 52, logo: "china/yunnanlogo.png" },
        { team: "Qingdao Youth Island", MP: 30, MW: 10, MD: 10, ML: 10, GF: 39, GA: 43, logo: "china/qingdaologo.png" },
        { team: "Henan", MP: 30, MW: 10, MD: 7, ML: 13, GF: 52, GA: 48, logo: "china/henanlogo.png" },
        { team: "Dalian Yingbo", MP: 30, MW: 9, MD: 9, ML: 12, GF: 30, GA: 45, logo: "china/dalianlogo.png" },
        { team: "Shenzhen Peng City", MP: 30, MW: 8, MD: 3, ML: 19, GF: 35, GA: 59, logo: "china/shenzhenlogo.png" },
        { team: "Wuhan Three Towns", MP: 30, MW: 6, MD: 7, ML: 17, GF: 34, GA: 62, logo: "china/wuhanlogo.png" },
        { team: "Qingdao Hainiu", MP: 30, MW: 5, MD: 10, ML: 15, GF: 35, GA: 48, logo: "china/qingdaohainiulogo.png" },
        { team: "Meizhou Hakka", MP: 30, MW: 5, MD: 6, ML: 19, GF: 36, GA: 71, logo: "china/meizhoulogo.png" },
        { team: "Changchun Yatai", MP: 30, MW: 4, MD: 7, ML: 19, GF: 26, GA: 52, logo: "china/changchunlogo.png" }
    ],
    fixtures: [
        { home: "Qingdao Hainiu", away: "Yunnan Yukun", date: "2026-06-26" },
        { home: "Shenyang Urban", away: "Shandong Taishan", date: "2026-06-27" },
        { home: "Henan", away: "Shanghai Port", date: "2026-06-27" },
        { home: "Shenzhen Peng City", away: "Chengdu Rongcheng", date: "2026-06-27" },
        { home: "Chongqing Tonglianglong", away: "Tianjin Jinmen Tiger", date: "2026-06-27" },
        { home: "Beijing Guoan", away: "Wuhan Three Towns", date: "2026-06-27" },
        { home: "Qingdao Youth Island", away: "Zhejiang", date: "2026-06-28" },
        { home: "Dalian Yingbo", away: "Shanghai Shenhua", date: "2026-06-28" }
    ]
},
"Belarusian Premier League": {
    id: "belarus",
    logo: "belarus/belarus.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Dinamo Minsk", MP: 12, MW: 9, MD: 2, ML: 1, GF: 22, GA: 11, logo: "belarus/dinamominsk.png" },
        { rank: 2, team: "Maxline", MP: 12, MW: 7, MD: 4, ML: 1, GF: 24, GA: 10, logo: "belarus/maxline.png" },
        { rank: 3, team: "Isloch", MP: 12, MW: 6, MD: 4, ML: 2, GF: 18, GA: 10, logo: "belarus/isloch.png" },
        { rank: 4, team: "Gomel", MP: 12, MW: 6, MD: 3, ML: 3, GF: 18, GA: 11, logo: "belarus/gomel.png" },
        { rank: 5, team: "Torpedo Zhodino", MP: 12, MW: 5, MD: 5, ML: 2, GF: 20, GA: 10, logo: "belarus/torpedozhodino.png" },
        { rank: 6, team: "Neman", MP: 12, MW: 6, MD: 2, ML: 4, GF: 15, GA: 11, logo: "belarus/neman.png" },
        { rank: 7, team: "Minsk", MP: 12, MW: 5, MD: 3, ML: 4, GF: 19, GA: 16, logo: "belarus/minsk.png" },
        { rank: 8, team: "Dinamo Brest", MP: 12, MW: 5, MD: 2, ML: 5, GF: 16, GA: 12, logo: "belarus/dinamobrest.png" },
        { rank: 9, team: "Arsenal Dzerzhinsk", MP: 12, MW: 4, MD: 5, ML: 3, GF: 16, GA: 17, logo: "belarus/arsenal.png" },
        { rank: 10, team: "Slavia-Mozyr", MP: 12, MW: 3, MD: 5, ML: 4, GF: 10, GA: 13, logo: "belarus/slaviamozyr.png" },
        { rank: 11, team: "Vitebsk", MP: 12, MW: 3, MD: 4, ML: 5, GF: 11, GA: 15, logo: "belarus/vitebsk.png" },
        { rank: 12, team: "Baranovichi", MP: 12, MW: 3, MD: 2, ML: 7, GF: 12, GA: 24, logo: "belarus/baranovichi.png" },
        { rank: 13, team: "Belshina", MP: 12, MW: 3, MD: 1, ML: 8, GF: 12, GA: 21, logo: "belarus/belshina.png" },
        { rank: 14, team: "BATE", MP: 12, MW: 1, MD: 6, ML: 5, GF: 9, GA: 13, logo: "belarus/bate.png" },
        { rank: 15, team: "Dnepr", MP: 12, MW: 1, MD: 5, ML: 6, GF: 9, GA: 19, logo: "belarus/dnepr.png" },
        { rank: 16, team: "Naftan", MP: 12, MW: 1, MD: 3, ML: 8, GF: 7, GA: 25, logo: "belarus/naftan.png" }
    ],
    fixtures: [
        // Matchday 15 - Thursday, July 2
        { home: "BATE", away: "Gomel", date: "2026-07-02" },
        { home: "Slavia-Mozyr", away: "Maxline", date: "2026-07-02" },
        { home: "Minsk", away: "Dinamo Minsk", date: "2026-07-02" },
        
        // Matchday 15 - Friday, July 3
        { home: "Naftan", away: "Dinamo Brest", date: "2026-07-03" },
        
        // Matchday 15 - Saturday, July 4
        { home: "Vitebsk", away: "Dnepr", date: "2026-07-04" },
        { home: "Neman", away: "Arsenal Dzerzhinsk", date: "2026-07-04" },
        
        // Matchday 15 - Sunday, July 5
        { home: "Belshina", away: "Baranovichi", date: "2026-07-05" },
        { home: "Torpedo Zhodino", away: "Isloch", date: "2026-07-05" },
        
        // Matchday 16 - Friday, July 10
        { home: "Dnepr", away: "Minsk", date: "2026-07-10" },
        
        // Matchday 16 - Saturday, July 11
        { home: "Baranovichi", away: "Torpedo Zhodino", date: "2026-07-11" },
        { home: "Dinamo Brest", away: "Slavia-Mozyr", date: "2026-07-11" },
        { home: "Gomel", away: "Neman", date: "2026-07-11" },
        
        // Matchday 16 - Sunday, July 12
        { home: "Arsenal Dzerzhinsk", away: "Vitebsk", date: "2026-07-12" }
    ]
},
"Kazakhstan Premier League": {
    id: "kazakhstan",
    logo: "kazakhstan/kazakhstan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Ordabasy", MP: 14, MW: 10, MD: 4, ML: 0, GF: 26, GA: 9, logo: "kazakhstan/ordabasy.png" },
        { rank: 2, team: "Kairat", MP: 16, MW: 9, MD: 6, ML: 1, GF: 26, GA: 11, logo: "kazakhstan/kairat.png" },
        { rank: 3, team: "Okzhetpes", MP: 14, MW: 7, MD: 6, ML: 1, GF: 20, GA: 13, logo: "kazakhstan/okzhetpes.png" },
        { rank: 4, team: "Ulytau", MP: 14, MW: 6, MD: 5, ML: 3, GF: 13, GA: 13, logo: "kazakhstan/ulytau.png" },
        { rank: 5, team: "FC Aktobe", MP: 14, MW: 6, MD: 4, ML: 4, GF: 18, GA: 13, logo: "kazakhstan/aktobe.png" },
        { rank: 6, team: "Astana", MP: 14, MW: 6, MD: 4, ML: 4, GF: 19, GA: 15, logo: "kazakhstan/astana.png" },
        { rank: 7, team: "Yelimay", MP: 14, MW: 5, MD: 5, ML: 4, GF: 21, GA: 19, logo: "kazakhstan/yelimay.png" },
        { rank: 8, team: "Atyrau", MP: 14, MW: 3, MD: 9, ML: 2, GF: 11, GA: 9, logo: "kazakhstan/atyrau.png" },
        { rank: 9, team: "Zhenys", MP: 14, MW: 4, MD: 5, ML: 5, GF: 11, GA: 16, logo: "kazakhstan/zhenys.png" },
        { rank: 10, team: "Zhetysu", MP: 14, MW: 3, MD: 6, ML: 5, GF: 19, GA: 22, logo: "kazakhstan/zhetysu.png" },
        { rank: 11, team: "Kyzyl-Zhar SK", MP: 15, MW: 4, MD: 3, ML: 8, GF: 17, GA: 22, logo: "kazakhstan/kyzylzhar.png" },
        { rank: 12, team: "Kaisar", MP: 15, MW: 2, MD: 8, ML: 5, GF: 11, GA: 18, logo: "kazakhstan/kaisar.png" },
        { rank: 13, team: "Tobol", MP: 14, MW: 3, MD: 3, ML: 8, GF: 13, GA: 22, logo: "kazakhstan/tobol.png" },
        { rank: 14, team: "FC Irtysh Pavlodar", MP: 14, MW: 1, MD: 7, ML: 6, GF: 13, GA: 19, logo: "kazakhstan/irtysh.png" },
        { rank: 15, team: "Altay", MP: 14, MW: 1, MD: 7, ML: 6, GF: 9, GA: 15, logo: "kazakhstan/altay.png" },
        { rank: 16, team: "Kaspiy Aktau", MP: 14, MW: 2, MD: 2, ML: 10, GF: 8, GA: 19, logo: "kazakhstan/kaspiy.png" }
    ],
    fixtures: [
        // Saturday, July 4
        { home: "Altay", away: "Tobol", date: "2026-07-04" },
        { home: "Kyzyl-Zhar SK", away: "Yelimay", date: "2026-07-04" },
        { home: "Astana", away: "Zhenys", date: "2026-07-04" },
        
        // Sunday, July 5
        { home: "Atyrau", away: "Kaspiy Aktau", date: "2026-07-05" },
        { home: "FC Aktobe", away: "Zhetysu", date: "2026-07-05" },
        { home: "Ordabasy", away: "Ulytau", date: "2026-07-05" },
        { home: "Kaisar", away: "FC Irtysh Pavlodar", date: "2026-07-05" }
    ]
},

"Norwegian First Division": {
    id: "norway",
    logo: "norway/norway.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Stroemsgodset", MP: 12, MW: 8, MD: 3, ML: 1, GF: 36, GA: 16, logo: "norway/stroemsgodset.png" },
        { rank: 2, team: "Kongsvinger", MP: 12, MW: 8, MD: 3, ML: 1, GF: 29, GA: 16, logo: "norway/kongsvinger.png" },
        { rank: 3, team: "Haugesund", MP: 12, MW: 8, MD: 1, ML: 3, GF: 36, GA: 23, logo: "norway/haugesund.png" },
        { rank: 4, team: "Odd", MP: 12, MW: 7, MD: 2, ML: 3, GF: 24, GA: 14, logo: "norway/odd.png" },
        { rank: 5, team: "Stabæk", MP: 12, MW: 6, MD: 3, ML: 3, GF: 25, GA: 14, logo: "norway/stabaek.png" },
        { rank: 6, team: "Ranheim TF", MP: 12, MW: 6, MD: 2, ML: 4, GF: 32, GA: 26, logo: "norway/ranheim.png" },
        { rank: 7, team: "Moss", MP: 12, MW: 5, MD: 2, ML: 5, GF: 21, GA: 26, logo: "norway/moss.png" },
        { rank: 8, team: "Sandnes Ulf", MP: 12, MW: 5, MD: 1, ML: 6, GF: 18, GA: 19, logo: "norway/sandnesulf.png" },
        { rank: 9, team: "Egersund", MP: 12, MW: 5, MD: 1, ML: 6, GF: 19, GA: 21, logo: "norway/egersund.png" },
        { rank: 10, team: "Bryne FK", MP: 12, MW: 5, MD: 1, ML: 6, GF: 18, GA: 20, logo: "norway/brynefk.png" },
        { rank: 11, team: "Hødd", MP: 12, MW: 4, MD: 3, ML: 5, GF: 14, GA: 15, logo: "norway/hodd.png" },
        { rank: 12, team: "Sogndal", MP: 12, MW: 3, MD: 3, ML: 6, GF: 20, GA: 29, logo: "norway/sogndal.png" },
        { rank: 13, team: "Raufoss", MP: 12, MW: 3, MD: 1, ML: 8, GF: 16, GA: 28, logo: "norway/raufoss.png" },
        { rank: 14, team: "Lyn", MP: 12, MW: 3, MD: 1, ML: 8, GF: 10, GA: 24, logo: "norway/lyn.png" },
        { rank: 15, team: "Åsane", MP: 12, MW: 3, MD: 1, ML: 8, GF: 15, GA: 24, logo: "norway/asane.png" },
        { rank: 16, team: "Strømmen", MP: 12, MW: 2, MD: 2, ML: 8, GF: 15, GA: 33, logo: "norway/stremmen.png" }
    ],
    fixtures: [
        // Saturday, June 27
        { home: "Haugesund", away: "Kongsvinger", date: "2026-06-27" },
        { home: "Strømmen", away: "Moss", date: "2026-06-27" },
        { home: "Stabæk", away: "Bryne FK", date: "2026-06-27" },
        { home: "Lyn", away: "Hødd", date: "2026-06-27" },
        { home: "Sandnes Ulf", away: "Raufoss", date: "2026-06-27" },
        { home: "Åsane", away: "Ranheim TF", date: "2026-06-27" },
        { home: "Stroemsgodset", away: "Odd", date: "2026-06-27" },
        { home: "Sogndal", away: "Egersund", date: "2026-06-27" }
    ]
},


"Latvia Nakotnes Liga": {
    id: "latvia",
    logo: "latvia/latvia.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Ogre United", MP: 26, MW: 18, MD: 4, ML: 4, GF: 66, GA: 20, logo: "latvia/ogreunited.png" },
        { rank: 2, team: "JDFS Alberts", MP: 26, MW: 17, MD: 7, ML: 2, GF: 60, GA: 24, logo: "latvia/jdfs alberts.png" },
        { rank: 3, team: "Riga Mariners", MP: 26, MW: 18, MD: 4, ML: 4, GF: 74, GA: 34, logo: "latvia/rigamariners.png" },
        { rank: 4, team: "Ventspils", MP: 26, MW: 11, MD: 10, ML: 5, GF: 40, GA: 29, logo: "latvia/ventspils.png" },
        { rank: 5, team: "RFS 2", MP: 26, MW: 11, MD: 8, ML: 7, GF: 46, GA: 31, logo: "latvia/rfs2.png" },
        { rank: 6, team: "Skanste", MP: 26, MW: 11, MD: 7, ML: 8, GF: 36, GA: 39, logo: "latvia/skanste.png" },
        { rank: 7, team: "Leevon PPK", MP: 26, MW: 10, MD: 6, ML: 10, GF: 40, GA: 40, logo: "latvia/leevonppk.png" },
        { rank: 8, team: "Mārupes", MP: 26, MW: 10, MD: 2, ML: 14, GF: 30, GA: 33, logo: "latvia/marupes.png" },
        { rank: 9, team: "Rēzeknes FA/BJSS", MP: 26, MW: 8, MD: 7, ML: 11, GF: 36, GA: 57, logo: "latvia/rezeknes.png" },
        { rank: 10, team: "Smiltene", MP: 26, MW: 8, MD: 4, ML: 14, GF: 46, GA: 48, logo: "latvia/smiltene.png" },
        { rank: 11, team: "Riga II", MP: 26, MW: 6, MD: 6, ML: 14, GF: 35, GA: 43, logo: "latvia/rigaii.png" },
        { rank: 12, team: "Tukums II", MP: 26, MW: 7, MD: 2, ML: 17, GF: 37, GA: 60, logo: "latvia/tukumsii.png" },
        { rank: 13, team: "AFA Olaine", MP: 26, MW: 6, MD: 4, ML: 16, GF: 39, GA: 88, logo: "latvia/afaolaine.png" },
        { rank: 14, team: "Augšdaugava", MP: 26, MW: 3, MD: 5, ML: 18, GF: 19, GA: 58, logo: "latvia/augsdaugava.png" }
    ],
    fixtures: [
        { home: "RFS 2", away: "Riga II", date: "2026-06-27" },
        { home: "Rēzeknes FA/BJSS", away: "JDFS Alberts", date: "2026-06-27" },
        { home: "Riga Mariners", away: "Mārupes", date: "2026-06-27" },
        { home: "Smiltene", away: "Skanste", date: "2026-06-28" },
        { home: "Ventspils", away: "Valmiera", date: "2026-06-28" }
    ]
},  

"Bolivian Primera División": {
    id: "bolivia",
    logo: "bolivia/bolivia.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Always Ready", MP: 8, MW: 5, MD: 2, ML: 1, GF: 14, GA: 5, logo: "bolivia/alwaysready.png" },
        { rank: 2, team: "The Strongest", MP: 7, MW: 5, MD: 2, ML: 0, GF: 12, GA: 6, logo: "bolivia/thestrongest.png" },
        { rank: 3, team: "Aurora", MP: 8, MW: 4, MD: 4, ML: 0, GF: 14, GA: 7, logo: "bolivia/aurora.png" },
        { rank: 4, team: "Bolívar", MP: 8, MW: 4, MD: 2, ML: 2, GF: 19, GA: 9, logo: "bolivia/bolivar.png" },
        { rank: 5, team: "Blooming", MP: 8, MW: 3, MD: 3, ML: 2, GF: 14, GA: 10, logo: "bolivia/blooming.png" },
        { rank: 6, team: "Independiente Petrolero", MP: 7, MW: 3, MD: 3, ML: 1, GF: 11, GA: 10, logo: "bolivia/independientepetrolero.png" },
        { rank: 7, team: "Guabirá", MP: 9, MW: 3, MD: 2, ML: 4, GF: 14, GA: 20, logo: "bolivia/guabira.png" },
        { rank: 8, team: "Universitario de Vinto", MP: 8, MW: 3, MD: 1, ML: 4, GF: 14, GA: 12, logo: "bolivia/universitariovinto.png" },
        { rank: 9, team: "Oriente Petrolero", MP: 8, MW: 3, MD: 1, ML: 4, GF: 10, GA: 11, logo: "bolivia/orientepetrolero.png" },
        { rank: 10, team: "Academia del Balompie Boliviano", MP: 7, MW: 3, MD: 0, ML: 4, GF: 12, GA: 17, logo: "bolivia/academia.png" },
        { rank: 11, team: "Nacional Potosí", MP: 7, MW: 2, MD: 2, ML: 3, GF: 9, GA: 9, logo: "bolivia/nacionalpotosi.png" },
        { rank: 12, team: "SA Bulo Bulo", MP: 8, MW: 2, MD: 1, ML: 5, GF: 10, GA: 14, logo: "bolivia/sabulobulo.png" },
        { rank: 13, team: "Real Potosí", MP: 6, MW: 1, MD: 3, ML: 2, GF: 5, GA: 5, logo: "bolivia/realpotosi.png" },
        { rank: 14, team: "Real Oruro", MP: 6, MW: 1, MD: 2, ML: 3, GF: 10, GA: 14, logo: "bolivia/realoruro.png" },
        { rank: 15, team: "Real Tomayapo", MP: 7, MW: 1, MD: 2, ML: 4, GF: 3, GA: 16, logo: "bolivia/realtomayapo.png" },
        { rank: 16, team: "Gualberto Villarroel San José", MP: 6, MW: 0, MD: 2, ML: 4, GF: 5, GA: 11, logo: "bolivia/gualberto.png" }
    ],
    fixtures: [
        // Saturday, July 11
        { home: "Academia del Balompie Boliviano", away: "Real Oruro", date: "2026-07-11" },
        
        // Sunday, July 12
        { home: "Nacional Potosí", away: "The Strongest", date: "2026-07-12" },
        { home: "Bolívar", away: "Oriente Petrolero", date: "2026-07-12" },
        
        // Monday, July 13
        { home: "Blooming", away: "Always Ready", date: "2026-07-13" },
        { home: "Universitario de Vinto", away: "Real Potosí", date: "2026-07-13" },
        { home: "Gualberto Villarroel San José", away: "SA Bulo Bulo", date: "2026-07-13" },
        
        // Tuesday, July 14
        { home: "Independiente Petrolero", away: "Aurora", date: "2026-07-14" },
        
        // Wednesday, July 15
        { home: "Guabirá", away: "Real Tomayapo", date: "2026-07-15" }
    ]
},

"Finland Veikkausliiga": {
    id: "finland-veikkausliiga",
    logo: "finland/veikkausliiga.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Inter Turku", MP: 13, MW: 7, MD: 5, ML: 1, GF: 20, GA: 11, logo: "finland/interturku.png" },
        { rank: 2, team: "Oulu", MP: 12, MW: 8, MD: 1, ML: 3, GF: 18, GA: 9, logo: "finland/oulu.png" },
        { rank: 3, team: "KuPS", MP: 13, MW: 6, MD: 6, ML: 1, GF: 19, GA: 12, logo: "finland/kups.png" },
        { rank: 4, team: "HJK", MP: 12, MW: 5, MD: 4, ML: 3, GF: 21, GA: 13, logo: "finland/hjk.png" },
        { rank: 5, team: "Gnistan", MP: 11, MW: 5, MD: 2, ML: 4, GF: 17, GA: 15, logo: "finland/gnistan.png" },
        { rank: 6, team: "VPS", MP: 11, MW: 4, MD: 5, ML: 2, GF: 11, GA: 9, logo: "finland/vps.png" },
        { rank: 7, team: "Turun", MP: 11, MW: 4, MD: 3, ML: 4, GF: 12, GA: 11, logo: "finland/turun.png" },
        { rank: 8, team: "Ilves", MP: 12, MW: 4, MD: 3, ML: 5, GF: 19, GA: 21, logo: "finland/ilves.png" },
        { rank: 9, team: "FC Lahti", MP: 11, MW: 3, MD: 2, ML: 6, GF: 14, GA: 14, logo: "finland/fclahti.png" },
        { rank: 10, team: "SJK", MP: 11, MW: 2, MD: 3, ML: 6, GF: 12, GA: 18, logo: "finland/sjk.png" },
        { rank: 11, team: "FF Jaro", MP: 12, MW: 1, MD: 4, ML: 7, GF: 10, GA: 27, logo: "finland/ffjaro.png" },
        { rank: 12, team: "IFK Mariehamn", MP: 11, MW: 0, MD: 4, ML: 7, GF: 6, GA: 19, logo: "finland/ifkmariehamn.png" }
    ],
    fixtures: [
        // Tomorrow - June 23
        { home: "FC Lahti", away: "Turun", date: "2026-06-23" },
        { home: "KuPS", away: "Ilves", date: "2026-06-23" },
        { home: "VPS", away: "Oulu", date: "2026-06-23" },
        { home: "Inter Turku", away: "SJK", date: "2026-06-23" },
        { home: "FF Jaro", away: "Gnistan", date: "2026-06-23" },
        { home: "IFK Mariehamn", away: "HJK", date: "2026-06-23" },
        
        // Saturday, June 27
        { home: "Ilves", away: "SJK", date: "2026-06-27" },
        { home: "HJK", away: "KuPS", date: "2026-06-27" },
        { home: "IFK Mariehamn", away: "Inter Turku", date: "2026-06-27" },
        { home: "Gnistan", away: "VPS", date: "2026-06-27" },
        { home: "Turun", away: "FF Jaro", date: "2026-06-27" },
        { home: "Oulu", away: "FC Lahti", date: "2026-06-27" }
    ]
},
"Kazakhstan First League": {
    id: "kazakhstan-1st",
    logo: "kazakhstan/1stleague.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Kairat-Zhastar", MP: 10, MW: 8, MD: 2, ML: 0, GF: 31, GA: 4, logo: "kazakhstan/kairat.png" },
        { rank: 2, team: "Shakhter", MP: 10, MW: 8, MD: 1, ML: 1, GF: 31, GA: 4, logo: "kazakhstan/shakhter.png" },
        { rank: 3, team: "Turan", MP: 10, MW: 7, MD: 0, ML: 3, GF: 20, GA: 8, logo: "kazakhstan/turan.png" },
        { rank: 4, team: "Akademiya Ontustik", MP: 10, MW: 5, MD: 2, ML: 3, GF: 16, GA: 13, logo: "kazakhstan/akademiya.png" },
        { rank: 5, team: "Khan Tengri", MP: 10, MW: 5, MD: 2, ML: 3, GF: 15, GA: 12, logo: "kazakhstan/khan tengri.png" },
        { rank: 6, team: "Taraz", MP: 10, MW: 5, MD: 1, ML: 4, GF: 18, GA: 12, logo: "kazakhstan/taraz.png" },
        { rank: 7, team: "Astana Reserve", MP: 10, MW: 5, MD: 1, ML: 4, GF: 16, GA: 18, logo: "kazakhstan/astanarezerve.png" },
        { rank: 8, team: "Jaiyq Uralsk", MP: 10, MW: 5, MD: 0, ML: 5, GF: 8, GA: 14, logo: "kazakhstan/jaiyq.png" },
        { rank: 9, team: "FK Ekibastuz", MP: 10, MW: 3, MD: 4, ML: 3, GF: 11, GA: 18, logo: "kazakhstan/ekibastuz.png" },
        { rank: 10, team: "Kaspiy Aktau Reserve", MP: 10, MW: 2, MD: 3, ML: 5, GF: 12, GA: 15, logo: "kazakhstan/kaspiyreserve.png" },
        { rank: 11, team: "Aktobe Jas", MP: 10, MW: 2, MD: 3, ML: 5, GF: 13, GA: 31, logo: "kazakhstan/aktobejas.png" },
        { rank: 12, team: "Tobol-M", MP: 10, MW: 1, MD: 3, ML: 6, GF: 15, GA: 30, logo: "kazakhstan/tobolm.png" },
        { rank: 13, team: "Turan", MP: 10, MW: 1, MD: 1, ML: 8, GF: 9, GA: 22, logo: "kazakhstan/turan2.png" },
        { rank: 14, team: "Yelimay M", MP: 10, MW: 0, MD: 3, ML: 7, GF: 6, GA: 20, logo: "kazakhstan/yelimay.png" }
    ],
    fixtures: [
        // Wednesday, June 24
        { home: "Kaspiy Aktau Reserve", away: "Tobol-M", date: "2026-06-24" },
        
        // Thursday, June 25
        { home: "Yelimay M", away: "Turan", date: "2026-06-25" },
        { home: "Kairat-Zhastar", away: "Khan Tengri", date: "2026-06-25" },
        { home: "Aktobe Jas", away: "Turan", date: "2026-06-25" },
        { home: "Jaiyq Uralsk", away: "Akademiya Ontustik", date: "2026-06-25" },
        
        // Friday, June 26
        { home: "Taraz", away: "Shakhter", date: "2026-06-26" },
        { home: "FK Ekibastuz", away: "Astana Reserve", date: "2026-06-26" },
        
        // Wednesday, July 1
        { home: "Tobol-M", away: "Aktobe Jas", date: "2026-07-01" },
        
        // Thursday, July 2
        { home: "Akademiya Ontustik", away: "Shakhter", date: "2026-07-02" },
        { home: "Astana Reserve", away: "Kaspiy Aktau Reserve", date: "2026-07-02" },
        { home: "Khan Tengri", away: "FK Ekibastuz", date: "2026-07-02" },
        
        // Friday, July 3
        { home: "Turan", away: "Yelimay M", date: "2026-07-03" },
        { home: "Kairat-Zhastar", away: "Taraz", date: "2026-07-03" },
        { home: "Turan", away: "Jaiyq Uralsk", date: "2026-07-03" }
    ]
},

"Kyrgyzstan Premier League": {
    id: "kyrgyzstan",
    logo: "kyrgyzstan/kyrgyzstan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Muras United", MP: 10, MW: 8, MD: 2, ML: 0, GF: 21, GA: 7, logo: "kyrgyzstan/murasunited.png" },
        { rank: 2, team: "Asia Talas", MP: 11, MW: 8, MD: 2, ML: 1, GF: 28, GA: 17, logo: "kyrgyzstan/asiat alas.png" },
        { rank: 3, team: "Alga", MP: 11, MW: 7, MD: 4, ML: 0, GF: 23, GA: 10, logo: "kyrgyzstan/alga.png" },
        { rank: 4, team: "Bars", MP: 9, MW: 6, MD: 2, ML: 1, GF: 19, GA: 10, logo: "kyrgyzstan/bars.png" },
        { rank: 5, team: "Ozgon", MP: 10, MW: 6, MD: 2, ML: 2, GF: 19, GA: 11, logo: "kyrgyzstan/ozgon.png" },
        { rank: 6, team: "Alay Osh", MP: 11, MW: 5, MD: 4, ML: 2, GF: 14, GA: 11, logo: "kyrgyzstan/alayosh.png" },
        { rank: 7, team: "Aldier", MP: 11, MW: 3, MD: 5, ML: 3, GF: 13, GA: 16, logo: "kyrgyzstan/aldier.png" },
        { rank: 8, team: "Asiagoal Bishkek", MP: 12, MW: 3, MD: 4, ML: 5, GF: 13, GA: 17, logo: "kyrgyzstan/asiagoal.png" },
        { rank: 9, team: "Neftchi Kochkor-Ata", MP: 12, MW: 4, MD: 1, ML: 7, GF: 13, GA: 19, logo: "kyrgyzstan/neftchi.png" },
        { rank: 10, team: "Bishkek City", MP: 11, MW: 3, MD: 3, ML: 5, GF: 10, GA: 13, logo: "kyrgyzstan/bishkekcity.png" },
        { rank: 11, team: "Toktogul", MP: 12, MW: 4, MD: 0, ML: 8, GF: 11, GA: 20, logo: "kyrgyzstan/toktogul.png" },
        { rank: 12, team: "Ilbirs", MP: 10, MW: 2, MD: 5, ML: 3, GF: 12, GA: 15, logo: "kyrgyzstan/ilbirs.png" },
        { rank: 13, team: "Talant", MP: 10, MW: 2, MD: 4, ML: 4, GF: 12, GA: 13, logo: "kyrgyzstan/talant.png" },
        { rank: 14, team: "Dordoi Bishkek", MP: 11, MW: 3, MD: 1, ML: 7, GF: 12, GA: 17, logo: "kyrgyzstan/dordoibishkek.png" },
        { rank: 15, team: "Abdysh-Ata", MP: 12, MW: 2, MD: 1, ML: 9, GF: 10, GA: 20, logo: "kyrgyzstan/abdyshata.png" },
        { rank: 16, team: "Kyrgyzaltyn", MP: 11, MW: 0, MD: 2, ML: 9, GF: 9, GA: 23, logo: "kyrgyzstan/kyrgyzaltyn.png" }
    ],
    fixtures: [
        // Round 12 - June 12
       // { home: "Bishkek City", away: "Asia Talas", date: "2026-06-12" },
       // { home: "Talant", away: "Alay Osh", date: "2026-06-12" },
        
        // Round 12 - June 13
       // { home: "Aldier", away: "Ozgon", date: "2026-06-13" },
        //{ home: "Bars", away: "Kyrgyzaltyn", date: "2026-06-13" },
      //  { home: "Dordoi Bishkek", away: "Ilbirs", date: "2026-06-13" },
       // { home: "Muras United", away: "Alga", date: "2026-06-13" },
        
        // Round 13 - June 23
        { home: "Alay Osh", away: "Aldier", date: "2026-06-23" },
        { home: "Alga", away: "Bars", date: "2026-06-23" },
        { home: "Asia Talas", away: "Muras United", date: "2026-06-23" },
        { home: "Asiagoal Bishkek", away: "Bishkek City", date: "2026-06-23" },
        { home: "Ilbirs", away: "Talant", date: "2026-06-23" },
        { home: "Kyrgyzaltyn", away: "Abdysh-Ata", date: "2026-06-23" },
        { home: "Neftchi Kochkor-Ata", away: "Dordoi Bishkek", date: "2026-06-23" },
        { home: "Ozgon", away: "Toktogul", date: "2026-06-23" }
    ]
},

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
        //{ home: "Montreal", away: "Toronto", date: "2026-07-17" },
        //{ home: "Chicago", away: "Vancouver", date: "2026-07-17" },
        //{ home: "Seattle", away: "Portland", date: "2026-07-17" },
        { home: "Nashville", away: "Atlanta", date: "2026-07-18" },
        { home: "LA Galaxy", away: "LAFC", date: "2026-07-18" },
        { home: "Cincinnati", away: "Vancouver", date: "2026-07-23" },
        { home: "Columbus", away: "New York City", date: "2026-07-23" },
        { home: "Inter Miami", away: "Chicago", date: "2026-07-23" },
        { home: "Philadelphia", away: "NY Red Bulls", date: "2026-07-23" },
        { home: "New England", away: "Toronto", date: "2026-07-23" },
        { home: "Charlotte", away: "Atlanta", date: "2026-07-23" },
		{ home: "Austin", away: "Seattle", date: "2026-07-23" },
		{ home: "Houston", away: "DC United", date: "2026-07-23" },
		{ home: "Nashville", away: "Montreal", date: "2026-07-23" },
		{ home: "Sporting KC", away: "Minnesota", date: "2026-07-23" },
		{ home: "Colorado", away: "San Diego", date: "2026-07-23" }
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
        { home: "LA Galaxy", away: "St. Louis", date: "2026-07-23" },
        { home: "LAFC", away: "Real Salt Lake", date: "2026-07-23" },
        { home: "Portland", away: "Dallas", date: "2026-07-23" },
        { home: "Eatrhquakes", away: "Orlando", date: "2026-07-23" },
        { home: "Atlanta", away: "Montreal", date: "2026-06-15" },
        { home: "NY Red Bulls", away: "Dallas", date: "2026-06-15" },
        { home: "Columbus", away: "Minnesota", date: "2026-06-15" }
    ]
},

"WNBA": {
    id: "wnba",
    logo: "wnba/wnbalogo.png",
    isBasketball: true,
    teams: [
        // Eastern Conference
        { rank: 1, team: "New York Liberty", GP: 17, GW: 11, GL: 6, points_for: 1547, points_against: 1428, logo: "wnba/liberty.png" },
        { rank: 2, team: "Atlanta Dream", GP: 15, GW: 11, GL: 4, points_for: 1320, points_against: 1215, logo: "wnba/dream.png" },
        { rank: 3, team: "Indiana Fever", GP: 16, GW: 9, GL: 7, points_for: 1360, points_against: 1326, logo: "wnba/fever.png" },
        { rank: 4, team: "Washington Mystics", GP: 15, GW: 8, GL: 7, points_for: 1230, points_against: 1245, logo: "wnba/mystics.png" },
        { rank: 5, team: "Toronto Tempo", GP: 16, GW: 8, GL: 8, points_for: 1344, points_against: 1344, logo: "wnba/tempo.png" },
        { rank: 6, team: "Chicago Sky", GP: 15, GW: 4, GL: 11, points_for: 1155, points_against: 1275, logo: "wnba/sky.png" },
        { rank: 7, team: "Connecticut Sun", GP: 17, GW: 2, GL: 15, points_for: 1292, points_against: 1530, logo: "wnba/sun.png" },
        
        // Western Conference
        { rank: 1, team: "Minnesota Lynx", GP: 17, GW: 13, GL: 4, points_for: 1547, points_against: 1377, logo: "wnba/lynx.png" },
        { rank: 2, team: "Las Vegas Aces", GP: 16, GW: 12, GL: 4, points_for: 1472, points_against: 1328, logo: "wnba/aces.png" },
        { rank: 3, team: "Dallas Wings", GP: 16, GW: 10, GL: 6, points_for: 1360, points_against: 1328, logo: "wnba/wings.png" },
        { rank: 4, team: "Golden State Valkyries", GP: 17, GW: 10, GL: 7, points_for: 1479, points_against: 1428, logo: "wnba/valkyries.png" },
        { rank: 5, team: "Los Angeles Sparks", GP: 16, GW: 8, GL: 8, points_for: 1376, points_against: 1376, logo: "wnba/sparks.png" },
        { rank: 6, team: "Portland Fire", GP: 17, GW: 8, GL: 9, points_for: 1445, points_against: 1479, logo: "wnba/fire.png" },
        { rank: 7, team: "Phoenix Mercury", GP: 17, GW: 5, GL: 12, points_for: 1360, points_against: 1496, logo: "wnba/mercury.png" },
        { rank: 8, team: "Seattle Storm", GP: 17, GW: 3, GL: 14, points_for: 1326, points_against: 1547, logo: "wnba/storm.png" }
    ],
    fixtures: [
        // Tuesday, June 23
        { home: "Chicago Sky", away: "Connecticut Sun", date: "2026-06-23" },
        { home: "Toronto Tempo", away: "Atlanta Dream", date: "2026-06-23" },
        { home: "Phoenix Mercury", away: "Indiana Fever", date: "2026-06-23" },
        { home: "Dallas Wings", away: "Seattle Storm", date: "2026-06-23" },
        
        // Wednesday, June 24
        { home: "New York Liberty", away: "Las Vegas Aces", date: "2026-06-24" },
        
        // Thursday, June 25
        { home: "Phoenix Mercury", away: "Indiana Fever", date: "2026-06-25" },
        { home: "Minnesota Lynx", away: "Washington Mystics", date: "2026-06-25" },
        { home: "Portland Fire", away: "Chicago Sky", date: "2026-06-25" },
        { home: "Atlanta Dream", away: "Golden State Valkyries", date: "2026-06-25" },
        
        // Friday, June 26
        { home: "Los Angeles Sparks", away: "Toronto Tempo", date: "2026-06-26" },
        { home: "Dallas Wings", away: "Las Vegas Aces", date: "2026-06-26" },
        { home: "New York Liberty", away: "Seattle Storm", date: "2026-06-26" },
        
        // Saturday, June 27
        { home: "Washington Mystics", away: "Connecticut Sun", date: "2026-06-27" },
        { home: "Portland Fire", away: "Chicago Sky", date: "2026-06-27" },
        { home: "Atlanta Dream", away: "Golden State Valkyries", date: "2026-06-27" },
        { home: "Phoenix Mercury", away: "Toronto Tempo", date: "2026-06-27" },
        
        // Sunday, June 28
        { home: "Los Angeles Sparks", away: "Indiana Fever", date: "2026-06-28" },
        { home: "Atlanta Dream", away: "Seattle Storm", date: "2026-06-28" },
        { home: "Minnesota Lynx", away: "Dallas Wings", date: "2026-06-28" },
        { home: "Portland Fire", away: "Washington Mystics", date: "2026-06-28" },
        { home: "Las Vegas Aces", away: "Chicago Sky", date: "2026-06-28" },
        
        // Monday, June 29
        { home: "New York Liberty", away: "Golden State Valkyries", date: "2026-06-29" },
        
        // Wednesday, July 1 - Commissioner's Cup Final
        { home: "Las Vegas Aces", away: "New York Liberty", date: "2026-07-01" },
        
        // Friday, July 3
        { home: "Atlanta Dream", away: "Washington Mystics", date: "2026-07-03" },
        { home: "Dallas Wings", away: "Connecticut Sun", date: "2026-07-03" },
        { home: "Seattle Storm", away: "Phoenix Mercury", date: "2026-07-03" },
        
        // Saturday, July 4
        { home: "Minnesota Lynx", away: "New York Liberty", date: "2026-07-04" },
        { home: "Chicago Sky", away: "Las Vegas Aces", date: "2026-07-04" }
    ]
}
/*
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
        { home: "Boston Celtics", away: "LA Lakers", date: "2026-06-15" },
        { home: "Denver Nuggets", away: "Milwaukee Bucks", date: "2026-06-15" },
        { home: "Philadelphia 76ers", away: "Phoenix Suns", date: "2026-06-15" },
        { home: "Golden State Warriors", away: "Miami Heat", date: "2026-06-15" },
        { home: "New York Knicks", away: "Dallas Mavericks", date: "2026-06-15" }
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
        { home: "Real Madrid", away: "Barcelona", date: "2026-06-15" },
        { home: "Panathinaikos", away: "Olympiacos", date: "2026-06-15" },
        { home: "Monaco", away: "Fenerbahce", date: "2026-06-15" },
        { home: "Maccabi Tel Aviv", away: "Partizan", date: "2026-06-15" },
        { home: "Anadolu Efes", away: "Zalgiris Kaunas", date: "2026-06-15" }
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
        { home: "Real Madrid", away: "Barcelona", date: "2026-06-15" },
        { home: "Unicaja", away: "Valencia", date: "2026-06-15" },
        { home: "Gran Canaria", away: "Baskonia", date: "2026-06-15" },
        { home: "Joventut", away: "Murcia", date: "2026-06-15" }
    ]
}
*/
};

// ==================== MATCH RESULTS DATA ====================
// ==================== MATCH RESULTS DATA ====================

const matchesData = {
    
    "Chilean Primera División": [
	    { home: "A. Italiano", away: "La Serena", home_score: 1, away_score: 1 },
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
        { home: "Qingdao Youth Island", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
        { home: "Shandong Taishan", away: "Shanghai Shenhua", home_score: 4, away_score: 1 },
        { home: "Shenyang Urban", away: "Chengdu Rongcheng", home_score: 0, away_score: 1 },
        { home: "Chongqing Tonglianglong", away: "Henan", home_score: 1, away_score: 1 },
        { home: "Wuhan Three Towns", away: "Qingdao Hainiu", home_score: 1, away_score: 3 },
        { home: "Beijing Guoan", away: "Dalian Yingbo", home_score: 3, away_score: 0 },
        { home: "Shanghai Port", away: "Shenzhen Peng City", home_score: 1, away_score: 1 },
        { home: "Yunnan Yukun", away: "Zhejiang", home_score: 1, away_score: 2 },
        { home: "Shanghai Shenhua", away: "Chongqing Tonglianglong", home_score: 2, away_score: 2 },
        { home: "Chengdu Rongcheng", away: "Henan", home_score: 3, away_score: 0 },
        { home: "Qingdao Youth Island", away: "Wuhan Three Towns", home_score: 1, away_score: 1 },
        { home: "Shenzhen Peng City", away: "Shandong Taishan", home_score: 1, away_score: 2 },
        { home: "Shenyang Urban", away: "Yunnan Yukun", home_score: 1, away_score: 2 },
        { home: "Zhejiang", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
        { home: "Beijing Guoan", away: "Shanghai Port", home_score: 2, away_score: 2 },
        { home: "Qingdao Hainiu", away: "Dalian Yingbo", home_score: 3, away_score: 1 },
        { home: "Henan", away: "Shenzhen Peng City", home_score: 1, away_score: 0 },
        { home: "Tianjin Jinmen Tiger", away: "Chengdu Rongcheng", home_score: 1, away_score: 2 },
        { home: "Shanghai Port", away: "Zhejiang", home_score: 2, away_score: 2 },
        { home: "Dalian Yingbo", away: "Qingdao Youth Island", home_score: 2, away_score: 3 },
        { home: "Beijing Guoan", away: "Qingdao Hainiu", home_score: 4, away_score: 2 },
        { home: "Wuhan Three Towns", away: "Shenyang Urban", home_score: 2, away_score: 2 },
        { home: "Shandong Taishan", away: "Chongqing Tonglianglong", home_score: 3, away_score: 1 },
        { home: "Yunnan Yukun", away: "Shanghai Shenhua", home_score: 1, away_score: 0 },
        { home: "Tianjin Jinmen Tiger", away: "Henan", home_score: 1, away_score: 2 },
        { home: "Shenzhen Peng City", away: "Dalian Yingbo", home_score: 1, away_score: 1 },
        { home: "Qingdao Youth Island", away: "Beijing Guoan", home_score: 1, away_score: 1 },
        { home: "Chengdu Rongcheng", away: "Shanghai Port", home_score: 0, away_score: 1 },
        { home: "Shenyang Urban", away: "Qingdao Hainiu", home_score: 2, away_score: 1 },
        { home: "Shanghai Shenhua", away: "Wuhan Three Towns", home_score: 2, away_score: 2 },
        { home: "Chongqing Tonglianglong", away: "Yunnan Yukun", home_score: 0, away_score: 0 },
        { home: "Zhejiang", away: "Shandong Taishan", home_score: 4, away_score: 1 },
        { home: "Shanghai Port", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
        { home: "Beijing Guoan", away: "Henan", home_score: 1, away_score: 2 },
        { home: "Dalian Yingbo", away: "Chengdu Rongcheng", home_score: 2, away_score: 0 },
        { home: "Qingdao Hainiu", away: "Chongqing Tonglianglong", home_score: 0, away_score: 1 },
        { home: "Yunnan Yukun", away: "Qingdao Youth Island", home_score: 2, away_score: 3 },
        { home: "Shandong Taishan", away: "Wuhan Three Towns", home_score: 3, away_score: 3 },
        { home: "Zhejiang", away: "Shenyang Urban", home_score: 0, away_score: 5 },
        { home: "Shanghai Shenhua", away: "Shenzhen Peng City", home_score: 1, away_score: 2 },
        { home: "Shenyang Urban", away: "Shanghai Port", home_score: 3, away_score: 2 },
        { home: "Qingdao Youth Island", away: "Shanghai Shenhua", home_score: 2, away_score: 2 },
        { home: "Henan", away: "Zhejiang", home_score: 0, away_score: 2 },
        { home: "Chengdu Rongcheng", away: "Shandong Taishan", home_score: 1, away_score: 0 },
        { home: "Chongqing Tonglianglong", away: "Beijing Guoan", home_score: 2, away_score: 3 },
        { home: "Shenzhen Peng City", away: "Qingdao Hainiu", home_score: 3, away_score: 2 },
        { home: "Tianjin Jinmen Tiger", away: "Dalian Yingbo", home_score: 1, away_score: 0 },
        { home: "Wuhan Three Towns", away: "Yunnan Yukun", home_score: 1, away_score: 1 }
    ],
	"Argentine Primera Nacional - Group A": [
    // Matchday 14 - May 16-19
    { home: "Racing (C)", away: "Central Norte", home_score: 1, away_score: 2, date: "2026-05-16" },
    { home: "Los Andes", away: "Godoy Cruz", home_score: 1, away_score: 0, date: "2026-05-16" },
    { home: "Almirante Brown", away: "San Telmo", home_score: 0, away_score: 0, date: "2026-05-16" },
    { home: "Estudiantes", away: "Colón", home_score: 1, away_score: 1, date: "2026-05-16" },
    { home: "Ciudad de Bolívar", away: "Acassuso", home_score: 1, away_score: 0, date: "2026-05-16" },
    { home: "Deportivo Madryn", away: "Ferro", home_score: 0, away_score: 1, date: "2026-05-17" },
    { home: "Mitre", away: "San Miguel", home_score: 4, away_score: 0, date: "2026-05-17" },
    { home: "Gimnasia y Tiro", away: "San Martín Tucumán", home_score: 1, away_score: 0, date: "2026-05-17" },
    { home: "Defensores de Belgrano", away: "Chaco For Ever", home_score: 0, away_score: 0, date: "2026-05-18" },
    { home: "All Boys", away: "Deportivo Morón", home_score: 1, away_score: 0, date: "2026-05-19" },
    
    // Matchday 15 - May 23-24
    { home: "Los Andes", away: "Racing (C)", home_score: 2, away_score: 0, date: "2026-05-23" },
    { home: "San Telmo", away: "Ciudad de Bolívar", home_score: 0, away_score: 1, date: "2026-05-23" },
    { home: "San Miguel", away: "Almirante Brown", home_score: 1, away_score: 0, date: "2026-05-23" },
    { home: "Acassuso", away: "Defensores de Belgrano", home_score: 1, away_score: 0, date: "2026-05-24" },
    { home: "Deportivo Morón", away: "Estudiantes", home_score: 2, away_score: 0, date: "2026-05-24" },
    { home: "Ferro", away: "Central Norte", home_score: 1, away_score: 0, date: "2026-05-24" },
    { home: "Chaco For Ever", away: "Deportivo Madryn", home_score: 1, away_score: 2, date: "2026-05-24" },
    { home: "Godoy Cruz", away: "All Boys", home_score: 4, away_score: 0, date: "2026-05-24" },
    { home: "Colón", away: "Mitre", home_score: 1, away_score: 1, date: "2026-05-24" },
    
    // Matchday 16 - May 30-31
    { home: "Racing (C)", away: "Ferro", home_score: 0, away_score: 0, date: "2026-05-30" },
    { home: "Estudiantes", away: "Godoy Cruz", home_score: 1, away_score: 0, date: "2026-05-30" },
    { home: "All Boys", away: "Los Andes", home_score: 0, away_score: 0, date: "2026-05-30" },
    { home: "Almirante Brown", away: "Colón", home_score: 1, away_score: 1, date: "2026-05-30" },
    { home: "Defensores de Belgrano", away: "San Telmo", home_score: 1, away_score: 0, date: "2026-05-30" },
    { home: "Deportivo Madryn", away: "Acassuso", home_score: 0, away_score: 0, date: "2026-05-31" },
    { home: "Ciudad de Bolívar", away: "San Miguel", home_score: 1, away_score: 1, date: "2026-05-31" },
    { home: "Mitre", away: "Deportivo Morón", home_score: 1, away_score: 3, date: "2026-05-31" },
    { home: "Central Norte", away: "Chaco For Ever", home_score: 1, away_score: 1, date: "2026-05-31" },
    
    // Matchday 17 - June 6-7
    { home: "Los Andes", away: "Estudiantes", home_score: 0, away_score: 0, date: "2026-06-06" },
    { home: "Acassuso", away: "Central Norte", home_score: 2, away_score: 1, date: "2026-06-06" },
    { home: "San Miguel", away: "Defensores de Belgrano", home_score: 0, away_score: 0, date: "2026-06-06" },
    { home: "Deportivo Morón", away: "Almirante Brown", home_score: 1, away_score: 0, date: "2026-06-07" },
    { home: "San Telmo", away: "Deportivo Madryn", home_score: 0, away_score: 0, date: "2026-06-07" },
    { home: "All Boys", away: "Racing (C)", home_score: 1, away_score: 1, date: "2026-06-07" },
    { home: "Chaco For Ever", away: "Ferro", home_score: 1, away_score: 2, date: "2026-06-07" },
    { home: "Godoy Cruz", away: "Mitre", home_score: 2, away_score: 1, date: "2026-06-07" },
    { home: "Colón", away: "Ciudad de Bolívar", home_score: 0, away_score: 0, date: "2026-06-07" }
],

"Argentine Primera Nacional - Group B": [
    // Matchday 14 - May 16-17
    { home: "Atlanta", away: "Atlético Rafaela", home_score: 2, away_score: 0, date: "2026-05-16" },
    { home: "Colegiales", away: "Guemes", home_score: 4, away_score: 1, date: "2026-05-16" },
    { home: "Almagro", away: "San Martín", home_score: 1, away_score: 2, date: "2026-05-17" },
    { home: "Gimnasia de Jujuy", away: "Temperley", home_score: 1, away_score: 0, date: "2026-05-17" },
    { home: "Patronato", away: "Chacarita Juniors", home_score: 2, away_score: 0, date: "2026-05-17" },
    { home: "Midland", away: "Agropecuario", home_score: 2, away_score: 0, date: "2026-05-17" },
    { home: "Quilmes", away: "Tristan Suarez", home_score: 0, away_score: 1, date: "2026-05-17" },
    { home: "Deportivo Maipú", away: "Nueva Chicago", home_score: 1, away_score: 0, date: "2026-05-17" },
    
    // Matchday 15 - May 23-24
    { home: "Tristan Suarez", away: "Colegiales", home_score: 0, away_score: 0, date: "2026-05-23" },
    { home: "Nueva Chicago", away: "Temperley", home_score: 1, away_score: 1, date: "2026-05-23" },
    { home: "Atlético Rafaela", away: "Midland", home_score: 1, away_score: 0, date: "2026-05-23" },
    { home: "San Martín", away: "Deportivo Maipú", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "Chacarita Juniors", away: "Almagro", home_score: 1, away_score: 0, date: "2026-05-24" },
    { home: "Agropecuario", away: "Quilmes", home_score: 0, away_score: 0, date: "2026-05-24" },
    { home: "Guemes", away: "Patronato", home_score: 1, away_score: 0, date: "2026-05-24" },
    { home: "Gimnasia y Tiro", away: "Gimnasia de Jujuy", home_score: 1, away_score: 1, date: "2026-05-24" },
    { home: "San Martín Tucumán", away: "Atlanta", home_score: 0, away_score: 1, date: "2026-05-24" },
    
    // Matchday 16 - May 30-31
    { home: "Colegiales", away: "Agropecuario", home_score: 0, away_score: 0, date: "2026-05-30" },
    { home: "Atlanta", away: "Gimnasia y Tiro", home_score: 1, away_score: 1, date: "2026-05-31" },
    { home: "Almagro", away: "Guemes", home_score: 2, away_score: 0, date: "2026-05-31" },
    { home: "Temperley", away: "San Martín", home_score: 2, away_score: 1, date: "2026-05-31" },
    { home: "Midland", away: "San Martín Tucumán", home_score: 2, away_score: 0, date: "2026-05-31" },
    { home: "Patronato", away: "Tristan Suarez", home_score: 1, away_score: 1, date: "2026-05-31" },
    { home: "Quilmes", away: "Atlético Rafaela", home_score: 2, away_score: 0, date: "2026-05-31" },
    { home: "Deportivo Maipú", away: "Chacarita Juniors", home_score: 3, away_score: 2, date: "2026-05-31" },
    
    // Matchday 17 - June 6-7
    { home: "Gimnasia y Tiro", away: "Midland", home_score: 1, away_score: 0, date: "2026-06-06" },
    { home: "Atlanta", away: "Gimnasia de Jujuy", home_score: 3, away_score: 0, date: "2026-06-06" },
    { home: "San Martín", away: "Nueva Chicago", home_score: 1, away_score: 0, date: "2026-06-06" },
    { home: "Atlético Rafaela", away: "Colegiales", home_score: 1, away_score: 0, date: "2026-06-06" },
    { home: "Tristan Suarez", away: "Almagro", home_score: 0, away_score: 0, date: "2026-06-06" },
    { home: "Chacarita Juniors", away: "Temperley", home_score: 0, away_score: 1, date: "2026-06-07" },
    { home: "Agropecuario", away: "Patronato", home_score: 1, away_score: 1, date: "2026-06-07" },
    { home: "Guemes", away: "Deportivo Maipú", home_score: 1, away_score: 0, date: "2026-06-07" },
    { home: "San Martín Tucumán", away: "Quilmes", home_score: 0, away_score: 0, date: "2026-06-07" }
],
"Kyrgyzstan Premier League": [
    // Round 12 - June 10-12
    { home: "Bishkek City", away: "Asia Talas", home_score: 2, away_score: 3, date: "2026-06-12" },
    { home: "Talant", away: "Alay Osh", home_score: 1, away_score: 2, date: "2026-06-12" },
    { home: "Abdysh-Ata", away: "Neftchi Kochkor-Ata", home_score: 2, away_score: 0, date: "2026-06-11" },
    { home: "Asiagoal Bishkek", away: "Toktogul", home_score: 2, away_score: 0, date: "2026-06-10" },
    
    // Round 11 - May 25-28
    { home: "Ilbirs", away: "Abdysh-Ata", home_score: 1, away_score: 1, date: "2026-05-28" },
    { home: "Alga", away: "Bishkek City", home_score: 3, away_score: 1, date: "2026-05-27" },
    { home: "Asia Talas", away: "Asiagoal Bishkek", home_score: 3, away_score: 1, date: "2026-05-27" },
    { home: "Neftchi Kochkor-Ata", away: "Bars", home_score: 1, away_score: 1, date: "2026-05-27" },
    { home: "Aldier", away: "Toktogul", home_score: 1, away_score: 2, date: "2026-05-26" },
    { home: "Alay Osh", away: "Dordoi Bishkek", home_score: 2, away_score: 0, date: "2026-05-25" },
    
    // Round 10 - May 15-17
    { home: "Abdysh-Ata", away: "Alay Osh", home_score: 1, away_score: 2, date: "2026-05-17" },
    { home: "Talant", away: "Aldier", home_score: 1, away_score: 1, date: "2026-05-17" },
    { home: "Dordoi Bishkek", away: "Ozgon", home_score: 0, away_score: 2, date: "2026-05-16" },
    { home: "Muras United", away: "Neftchi Kochkor-Ata", home_score: 6, away_score: 2, date: "2026-05-16" },
    { home: "Toktogul", away: "Asia Talas", home_score: 1, away_score: 2, date: "2026-05-16" },
    { home: "Asiagoal Bishkek", away: "Alga", home_score: 1, away_score: 2, date: "2026-05-15" },
    { home: "Bishkek City", away: "Kyrgyzaltyn", home_score: 2, away_score: 0, date: "2026-05-15" },
    
    // Round 9 - May 1-3
    { home: "Alay Osh", away: "Bars", home_score: 2, away_score: 1, date: "2026-05-03" },
    { home: "Alga", away: "Asia Talas", home_score: 2, away_score: 2, date: "2026-05-03" },
    { home: "Kyrgyzaltyn", away: "Asiagoal Bishkek", home_score: 1, away_score: 3, date: "2026-05-03" },
    { home: "Ozgon", away: "Abdysh-Ata", home_score: 2, away_score: 1, date: "2026-05-03" },
    { home: "Neftchi Kochkor-Ata", away: "Bishkek City", home_score: 2, away_score: 1, date: "2026-05-02" },
    { home: "Ilbirs", away: "Muras United", home_score: 0, away_score: 2, date: "2026-05-02" },
    { home: "Aldier", away: "Dordoi Bishkek", home_score: 2, away_score: 1, date: "2026-05-01" },
    { home: "Talant", away: "Toktogul", home_score: 1, away_score: 0, date: "2026-05-01" },
    
    // Round 8 - April 25-28
    { home: "Bars", away: "Ozgon", home_score: 2, away_score: 1, date: "2026-04-28" },
    { home: "Abdysh-Ata", away: "Aldier", home_score: 1, away_score: 2, date: "2026-04-27" },
    { home: "Asiagoal Bishkek", away: "Neftchi Kochkor-Ata", home_score: 0, away_score: 1, date: "2026-04-27" },
    { home: "Bishkek City", away: "Ilbirs", home_score: 0, away_score: 0, date: "2026-04-27" },
    { home: "Talant", away: "Dordoi Bishkek", home_score: 1, away_score: 2, date: "2026-04-26" },
    { home: "Asia Talas", away: "Kyrgyzaltyn", home_score: 4, away_score: 3, date: "2026-04-26" },
    { home: "Muras United", away: "Alay Osh", home_score: 2, away_score: 0, date: "2026-04-26" },
    { home: "Alga", away: "Toktogul", home_score: 2, away_score: 0, date: "2026-04-25" },
    
    // Round 7 - May 7
    { home: "Ozgon", away: "Muras United", home_score: 0, away_score: 0, date: "2026-05-07" },
    
    // Round 4 - May 9-11
    { home: "Asia Talas", away: "Ozgon", home_score: 4, away_score: 2, date: "2026-05-11" },
    { home: "Abdysh-Ata", away: "Bars", home_score: 0, away_score: 3, date: "2026-05-09" },
    { home: "Alga", away: "Alay Osh", home_score: 0, away_score: 0, date: "2026-05-09" },
    { home: "Bishkek City", away: "Talant", home_score: 0, away_score: 0, date: "2026-05-09" }
],

"Australian NPL ACT": [
    // Round 12 - June 10
    { home: "Belconnen Utd.", away: "Canberra White Eagles", home_score: 1, away_score: 2, date: "2026-06-10" },
    { home: "Canberra Croatia", away: "Queanbeyan City", home_score: 4, away_score: 2, date: "2026-06-10" },
    { home: "Canberra Olympic", away: "Canberra Juventus", home_score: 2, away_score: 3, date: "2026-06-10" },
    { home: "O'Connor Knights", away: "Tigers FC", home_score: 0, away_score: 1, date: "2026-06-10" },
    { home: "Tuggeranong Utd", away: "Monaro Panthers", home_score: 1, away_score: 6, date: "2026-06-10" },
    
    // Round 11 - May 30
    { home: "Monaro Panthers", away: "Canberra White Eagles", home_score: 2, away_score: 1, date: "2026-05-30" },
    { home: "Belconnen Utd.", away: "Canberra Croatia", home_score: 1, away_score: 4, date: "2026-05-30" },
    { home: "Brindabella", away: "Canberra Olympic", home_score: 0, away_score: 3, date: "2026-05-30" },
    { home: "Canberra Juventus", away: "Tuggeranong Utd", home_score: 5, away_score: 0, date: "2026-05-30" },
    { home: "O'Connor Knights", away: "Queanbeyan City", home_score: 0, away_score: 4, date: "2026-05-30" },
    
    // Round 10 - May 23-24
    { home: "Canberra Croatia", away: "Monaro Panthers", home_score: 4, away_score: 1, date: "2026-05-24" },
    { home: "Tigers FC", away: "Brindabella", home_score: 7, away_score: 0, date: "2026-05-23" },
    { home: "Canberra White Eagles", away: "O'Connor Knights", home_score: 0, away_score: 2, date: "2026-05-23" },
    { home: "Queanbeyan City", away: "Canberra Juventus", home_score: 3, away_score: 1, date: "2026-05-23" },
    { home: "Canberra Olympic", away: "Belconnen Utd.", home_score: 4, away_score: 4, date: "2026-05-23" },
    
    // Round 9 - May 12-13
    { home: "Brindabella", away: "Canberra Juventus", home_score: 0, away_score: 1, date: "2026-05-13" },
    { home: "Canberra Olympic", away: "O'Connor Knights", home_score: 3, away_score: 1, date: "2026-05-13" },
    { home: "Tigers FC", away: "Monaro Panthers", home_score: 3, away_score: 1, date: "2026-05-13" },
    { home: "Tuggeranong Utd", away: "Canberra Croatia", home_score: 2, away_score: 3, date: "2026-05-13" },
    { home: "Canberra White Eagles", away: "Queanbeyan City", home_score: 0, away_score: 3, date: "2026-05-12" },
    
    // Round 8 - May 16-17
    { home: "Canberra White Eagles", away: "Canberra Juventus", home_score: 1, away_score: 4, date: "2026-05-17" },
    { home: "Tuggeranong Utd", away: "Brindabella", home_score: 5, away_score: 1, date: "2026-05-16" },
    { home: "Tigers FC", away: "Canberra Olympic", home_score: 3, away_score: 2, date: "2026-05-16" },
    { home: "Belconnen Utd.", away: "Monaro Panthers", home_score: 1, away_score: 3, date: "2026-05-16" },
    { home: "O'Connor Knights", away: "Canberra Croatia", home_score: 1, away_score: 5, date: "2026-05-16" },
    
    // Round 7 - May 9
    { home: "Tigers FC", away: "Belconnen Utd.", home_score: 3, away_score: 2, date: "2026-05-09" },
    { home: "O'Connor Knights", away: "Monaro Panthers", home_score: 2, away_score: 1, date: "2026-05-09" },
    { home: "Tuggeranong Utd", away: "Canberra Olympic", home_score: 6, away_score: 4, date: "2026-05-09" },
    
    // Round 6 - May 2
    { home: "Monaro Panthers", away: "Canberra Juventus", home_score: 5, away_score: 3, date: "2026-05-02" },
    { home: "Canberra White Eagles", away: "Brindabella", home_score: 0, away_score: 2, date: "2026-05-02" },
    { home: "O'Connor Knights", away: "Belconnen Utd.", home_score: 2, away_score: 1, date: "2026-05-02" },
    { home: "Queanbeyan City", away: "Canberra Olympic", home_score: 1, away_score: 0, date: "2026-05-02" },
    { home: "Tuggeranong Utd", away: "Tigers FC", home_score: 2, away_score: 1, date: "2026-05-02" },
    
    // Round 5 - April 24
    { home: "Canberra Croatia", away: "Tigers FC", home_score: 2, away_score: 1, date: "2026-04-24" },
    { home: "Canberra White Eagles", away: "Tuggeranong Utd", home_score: 2, away_score: 4, date: "2026-04-24" },
    { home: "Monaro Panthers", away: "Canberra Olympic", home_score: 6, away_score: 1, date: "2026-04-24" },
    { home: "O'Connor Knights", away: "Brindabella", home_score: 2, away_score: 1, date: "2026-04-24" },
    { home: "Queanbeyan City", away: "Belconnen Utd.", home_score: 4, away_score: 1, date: "2026-04-24" },
    
    // Round 4 - June 3 & April 18
    { home: "Belconnen Utd.", away: "Tuggeranong Utd", home_score: 1, away_score: 3, date: "2026-06-03" },
    { home: "Brindabella", away: "Canberra Croatia", home_score: 0, away_score: 2, date: "2026-04-18" },
    { home: "Canberra White Eagles", away: "Canberra Olympic", home_score: 1, away_score: 6, date: "2026-04-18" },
    { home: "O'Connor Knights", away: "Canberra Juventus", home_score: 0, away_score: 3, date: "2026-04-18" },
    { home: "Queanbeyan City", away: "Tigers FC", home_score: 0, away_score: 2, date: "2026-04-18" },
    
    // Round 3 - April 15
    { home: "Belconnen Utd.", away: "Brindabella", home_score: 4, away_score: 1, date: "2026-04-15" },
    { home: "Canberra Croatia", away: "Canberra White Eagles", home_score: 5, away_score: 0, date: "2026-04-15" },
    { home: "Tigers FC", away: "Canberra Juventus", home_score: 2, away_score: 3, date: "2026-04-15" },
    { home: "Tuggeranong Utd", away: "O'Connor Knights", home_score: 2, away_score: 0, date: "2026-04-15" },
    
    // Round 2 - April 11
    { home: "Tigers FC", away: "Canberra White Eagles", home_score: 7, away_score: 0, date: "2026-04-11" },
    { home: "Brindabella", away: "Monaro Panthers", home_score: 0, away_score: 3, date: "2026-04-11" },
    { home: "Canberra Juventus", away: "Belconnen Utd.", home_score: 2, away_score: 1, date: "2026-04-11" },
    { home: "Tuggeranong Utd", away: "Queanbeyan City", home_score: 2, away_score: 1, date: "2026-04-11" },
    { home: "Canberra Olympic", away: "Canberra Croatia", home_score: 1, away_score: 5, date: "2026-04-11" },
    
    // Round 1 - March 27-April 1
    { home: "Canberra Juventus", away: "Canberra Olympic", home_score: 1, away_score: 2, date: "2026-04-01" },
    { home: "Queanbeyan City", away: "Canberra Croatia", home_score: 3, away_score: 0, date: "2026-03-31" },
    { home: "Tigers FC", away: "O'Connor Knights", home_score: 3, away_score: 2, date: "2026-03-28" },
    { home: "Canberra White Eagles", away: "Belconnen Utd.", home_score: 1, away_score: 1, date: "2026-03-28" },
    { home: "Monaro Panthers", away: "Tuggeranong Utd", home_score: 2, away_score: 1, date: "2026-03-27" }
],

"Belarusian Premier League": [
    // Matchday 2 - April 3-5
    { home: "Arsenal Dzyarzhynsk", away: "Naftan", home_score: 2, away_score: 0, date: "2026-04-03" },
    { home: "Dinamo Brest", away: "Torpedo Zhodino", home_score: 0, away_score: 2, date: "2026-04-03" },
    { home: "Neman", away: "Vitebsk", home_score: 2, away_score: 0, date: "2026-04-04" },
    { home: "Maxline", away: "Isloch", home_score: 1, away_score: 1, date: "2026-04-04" },
    { home: "Dinamo Minsk", away: "Belshina", home_score: 2, away_score: 0, date: "2026-04-04" },
    { home: "Minsk", away: "Gomel", home_score: 2, away_score: 0, date: "2026-04-05" },
    { home: "BATE", away: "Baranovichi", home_score: 3, away_score: 0, date: "2026-04-05" },
    { home: "Dnepr", away: "Slavia-Mozyr", home_score: 0, away_score: 1, date: "2026-04-05" },
    
    // Matchday 3 - April 9-11
    { home: "Isloch", away: "Dinamo Brest", home_score: 0, away_score: 1, date: "2026-04-09" },
    { home: "Naftan", away: "Gomel", home_score: 0, away_score: 2, date: "2026-04-10" },
    { home: "Belshina", away: "Dnepr", home_score: 1, away_score: 2, date: "2026-04-10" },
    { home: "Minsk", away: "Neman", home_score: 0, away_score: 1, date: "2026-04-10" },
    { home: "Baranovichi", away: "Maxline", home_score: 0, away_score: 4, date: "2026-04-11" },
    { home: "Vitebsk", away: "BATE", home_score: 1, away_score: 0, date: "2026-04-11" },
    { home: "Slavia-Mozyr", away: "Arsenal Dzyarzhynsk", home_score: 1, away_score: 1, date: "2026-04-11" },
    { home: "Torpedo Zhodino", away: "Dinamo Minsk", home_score: 0, away_score: 1, date: "2026-04-11" },
    
    // Matchday 4 - April 18-20
    { home: "Vitebsk", away: "Minsk", home_score: 2, away_score: 0, date: "2026-04-18" },
    { home: "Neman", away: "Naftan", home_score: 3, away_score: 1, date: "2026-04-18" },
    { home: "Dinamo Brest", away: "Baranovichi", home_score: 3, away_score: 0, date: "2026-04-18" },
    { home: "Dinamo Minsk", away: "Isloch", home_score: 1, away_score: 1, date: "2026-04-19" },
    { home: "BATE", away: "Maxline", home_score: 1, away_score: 2, date: "2026-04-19" },
    { home: "Gomel", away: "Slavia-Mozyr", home_score: 3, away_score: 1, date: "2026-04-19" },
    { home: "Dnepr", away: "Torpedo Zhodino", home_score: 2, away_score: 2, date: "2026-04-20" },
    { home: "Arsenal Dzyarzhynsk", away: "Belshina", home_score: 2, away_score: 0, date: "2026-04-20" },
    
    // Matchday 5 - April 24-26
    { home: "Slavia-Mozyr", away: "Neman", home_score: 0, away_score: 0, date: "2026-04-24" },
    { home: "Minsk", away: "BATE", home_score: 1, away_score: 0, date: "2026-04-24" },
    { home: "Naftan", away: "Vitebsk", home_score: 1, away_score: 1, date: "2026-04-25" },
    { home: "Baranovichi", away: "Dinamo Minsk", home_score: 2, away_score: 3, date: "2026-04-25" },
    { home: "Maxline", away: "Dinamo Brest", home_score: 0, away_score: 0, date: "2026-04-25" },
    { home: "Isloch", away: "Dnepr", home_score: 2, away_score: 1, date: "2026-04-26" },
    { home: "Belshina", away: "Gomel", home_score: 0, away_score: 2, date: "2026-04-26" },
    { home: "Torpedo Zhodino", away: "Arsenal Dzyarzhynsk", home_score: 3, away_score: 3, date: "2026-04-26" },
    
    // Matchday 6 - May 1-3
    { home: "Arsenal Dzyarzhynsk", away: "Isloch", home_score: 2, away_score: 2, date: "2026-05-01" },
    { home: "Minsk", away: "Naftan", home_score: 4, away_score: 2, date: "2026-05-01" },
    { home: "Dnepr", away: "Baranovichi", home_score: 0, away_score: 0, date: "2026-05-02" },
    { home: "Neman", away: "Belshina", home_score: 2, away_score: 1, date: "2026-05-02" },
    { home: "Gomel", away: "Torpedo Zhodino", home_score: 1, away_score: 1, date: "2026-05-02" },
    { home: "Vitebsk", away: "Slavia-Mozyr", home_score: 0, away_score: 0, date: "2026-05-03" },
    { home: "BATE", away: "Dinamo Brest", home_score: 0, away_score: 3, date: "2026-05-03" },
    { home: "Dinamo Minsk", away: "Maxline", home_score: 2, away_score: 3, date: "2026-05-03" },
    
    // Matchday 7 - May 8-10
    { home: "Baranovichi", away: "Arsenal Dzyarzhynsk", home_score: 1, away_score: 1, date: "2026-05-08" },
    { home: "Gomel", away: "Isloch", home_score: 2, away_score: 0, date: "2026-05-08" },
    { home: "Slavia-Mozyr", away: "Minsk", home_score: 1, away_score: 2, date: "2026-05-09" },
    { home: "Belshina", away: "Vitebsk", home_score: 1, away_score: 0, date: "2026-05-09" },
    { home: "Torpedo Zhodino", away: "Neman", home_score: 1, away_score: 0, date: "2026-05-09" },
    { home: "Naftan", away: "BATE", home_score: 0, away_score: 0, date: "2026-05-10" },
    { home: "Maxline", away: "Dnepr", home_score: 5, away_score: 1, date: "2026-05-10" },
    { home: "Dinamo Brest", away: "Dinamo Minsk", home_score: 1, away_score: 2, date: "2026-05-10" },
    
    // Matchday 8 - May 14-20
    { home: "Gomel", away: "Baranovichi", home_score: 2, away_score: 3, date: "2026-05-14" },
    { home: "Neman", away: "Isloch", home_score: 0, away_score: 1, date: "2026-05-15" },
    { home: "Minsk", away: "Belshina", home_score: 5, away_score: 1, date: "2026-05-15" },
    { home: "Dnepr", away: "Dinamo Brest", home_score: 1, away_score: 1, date: "2026-05-17" },
    { home: "Naftan", away: "Slavia-Mozyr", home_score: 0, away_score: 1, date: "2026-05-17" },
    { home: "Torpedo Zhodino", away: "Vitebsk", home_score: 1, away_score: 1, date: "2026-05-17" },
    { home: "Arsenal Dzyarzhynsk", away: "Maxline", home_score: 0, away_score: 3, date: "2026-05-17" },
    { home: "BATE", away: "Dinamo Minsk", home_score: 0, away_score: 0, date: "2026-05-20" },
    
    // Matchday 9 - May 22-24
    { home: "Maxline", away: "Gomel", home_score: 0, away_score: 0, date: "2026-05-22" },
    { home: "Belshina", away: "Naftan", home_score: 5, away_score: 1, date: "2026-05-23" },
    { home: "Isloch", away: "Vitebsk", home_score: 3, away_score: 0, date: "2026-05-23" },
    { home: "Torpedo Zhodino", away: "Minsk", home_score: 3, away_score: 0, date: "2026-05-23" },
    { home: "Dinamo Brest", away: "Arsenal Dzyarzhynsk", home_score: 3, away_score: 0, date: "2026-05-23" },
    { home: "Slavia-Mozyr", away: "BATE", home_score: 1, away_score: 1, date: "2026-05-24" },
    { home: "Baranovichi", away: "Neman", home_score: 1, away_score: 2, date: "2026-05-24" },
    { home: "Dinamo Minsk", away: "Dnepr", home_score: 3, away_score: 1, date: "2026-05-24" },
    
    // Matchday 10 - May 29-31
    { home: "Naftan", away: "Torpedo Zhodino", home_score: 0, away_score: 4, date: "2026-05-29" },
    { home: "Minsk", away: "Isloch", home_score: 1, away_score: 1, date: "2026-05-29" },
    { home: "Arsenal Dzyarzhynsk", away: "Dinamo Minsk", home_score: 0, away_score: 1, date: "2026-05-30" },
    { home: "Neman", away: "Maxline", home_score: 1, away_score: 2, date: "2026-05-30" },
    { home: "Gomel", away: "Dinamo Brest", home_score: 2, away_score: 1, date: "2026-05-30" },
    { home: "Vitebsk", away: "Baranovichi", home_score: 2, away_score: 3, date: "2026-05-31" },
    { home: "Slavia-Mozyr", away: "Belshina", home_score: 2, away_score: 1, date: "2026-05-31" },
    { home: "BATE", away: "Dnepr", home_score: 1, away_score: 1, date: "2026-05-31" },
    
    // Matchday 11 - June 12-13
    { home: "Isloch", away: "Naftan", home_score: 3, away_score: 1, date: "2026-06-12" },
    { home: "Belshina", away: "BATE", home_score: 1, away_score: 1, date: "2026-06-12" }
],

"Bolivian Primera División": [
    // Matchday 2 - April 11-14
    { home: "Guabirá", away: "Independiente Petrolero", home_score: 2, away_score: 2, date: "2026-04-11" },
    { home: "Academia del Balompie Boliviano", away: "Bolívar", home_score: 0, away_score: 2, date: "2026-04-11" },
    { home: "Nacional Potosí", away: "Universitario de Vinto", home_score: 1, away_score: 0, date: "2026-04-11" },
    { home: "Aurora", away: "Always Ready", home_score: 1, away_score: 1, date: "2026-04-12" },
    { home: "Real Oruro", away: "Blooming", home_score: 2, away_score: 2, date: "2026-04-12" },
    { home: "The Strongest", away: "SA Bulo Bulo", home_score: 3, away_score: 2, date: "2026-04-12" },
    { home: "Oriente Petrolero", away: "Gualberto Villarroel San José", home_score: 2, away_score: 1, date: "2026-04-13" },
    { home: "Real Tomayapo", away: "Real Potosí", home_score: 1, away_score: 1, date: "2026-04-14" },
    
    // Matchday 3 - April 21-24
    { home: "Universitario de Vinto", away: "Academia del Balompie Boliviano", home_score: 5, away_score: 2, date: "2026-04-21" },
    { home: "Gualberto Villarroel San José", away: "Aurora", home_score: 1, away_score: 1, date: "2026-04-21" },
    { home: "Bolívar", away: "Independiente Petrolero", home_score: 1, away_score: 2, date: "2026-04-22" },
    { home: "Always Ready", away: "Oriente Petrolero", home_score: 1, away_score: 0, date: "2026-04-22" },
    { home: "Real Potosí", away: "Guabirá", home_score: 3, away_score: 0, date: "2026-04-22" },
    { home: "Blooming", away: "Nacional Potosí", home_score: 2, away_score: 1, date: "2026-04-23" },
    { home: "SA Bulo Bulo", away: "Real Oruro", home_score: 2, away_score: 1, date: "2026-04-23" },
    { home: "Real Tomayapo", away: "The Strongest", home_score: 0, away_score: 0, date: "2026-04-24" },
    
    // Matchday 4 - April 25-28
    { home: "Independiente Petrolero", away: "Universitario de Vinto", home_score: 2, away_score: 1, date: "2026-04-25" },
    { home: "Nacional Potosí", away: "Gualberto Villarroel San José", home_score: 1, away_score: 1, date: "2026-04-25" },
    { home: "Academia del Balompie Boliviano", away: "Blooming", home_score: 3, away_score: 2, date: "2026-04-25" },
    { home: "Guabirá", away: "Always Ready", home_score: 1, away_score: 2, date: "2026-04-26" },
    { home: "Real Oruro", away: "The Strongest", home_score: 2, away_score: 3, date: "2026-04-26" },
    { home: "Bolívar", away: "Real Tomayapo", home_score: 6, away_score: 0, date: "2026-04-26" },
    { home: "Oriente Petrolero", away: "Real Potosí", home_score: 2, away_score: 0, date: "2026-04-27" },
    { home: "Aurora", away: "SA Bulo Bulo", home_score: 3, away_score: 1, date: "2026-04-28" },
    
    // Matchday 5 - May 1-5
    { home: "SA Bulo Bulo", away: "Independiente Petrolero", home_score: 2, away_score: 2, date: "2026-05-01" },
    { home: "Real Potosí", away: "Real Oruro", home_score: 1, away_score: 2, date: "2026-05-01" },
    { home: "Always Ready", away: "Nacional Potosí", home_score: 3, away_score: 1, date: "2026-05-02" },
    { home: "Aurora", away: "Guabirá", home_score: 4, away_score: 2, date: "2026-05-02" },
    { home: "Oriente Petrolero", away: "Real Tomayapo", home_score: 3, away_score: 1, date: "2026-05-03" },
    { home: "Gualberto Villarroel San José", away: "Bolívar", home_score: 1, away_score: 2, date: "2026-05-03" },
    { home: "The Strongest", away: "Academia del Balompie Boliviano", home_score: 3, away_score: 1, date: "2026-05-03" },
    { home: "Universitario de Vinto", away: "Blooming", home_score: 1, away_score: 1, date: "2026-05-05" },
    
    // Matchday 6 - May 9-11
    { home: "Guabirá", away: "Gualberto Villarroel San José", home_score: 3, away_score: 0, date: "2026-05-09" },
    { home: "Real Tomayapo", away: "SA Bulo Bulo", home_score: 1, away_score: 0, date: "2026-05-10" },
    { home: "Independiente Petrolero", away: "Always Ready", home_score: 0, away_score: 0, date: "2026-05-10" },
    { home: "The Strongest", away: "Real Potosí", home_score: 0, away_score: 0, date: "2026-05-10" },
    { home: "Blooming", away: "Bolívar", home_score: 0, away_score: 0, date: "2026-05-11" },
    { home: "Academia del Balompie Boliviano", away: "Oriente Petrolero", home_score: 3, away_score: 1, date: "2026-05-11" },
    
    // Matchday 7 - May 12-15
    { home: "SA Bulo Bulo", away: "Universitario de Vinto", home_score: 0, away_score: 2, date: "2026-05-12" },
    { home: "Aurora", away: "Real Oruro", home_score: 1, away_score: 1, date: "2026-05-13" },
    { home: "Independiente Petrolero", away: "Blooming", home_score: 3, away_score: 1, date: "2026-05-13" },
    { home: "Bolívar", away: "Nacional Potosí", home_score: 1, away_score: 1, date: "2026-05-14" },
    { home: "Always Ready", away: "The Strongest", home_score: 0, away_score: 1, date: "2026-05-14" },
    { home: "Oriente Petrolero", away: "Guabirá", home_score: 2, away_score: 2, date: "2026-05-15" },
    
    // Matchday 8 - May 16-18
    { home: "Real Tomayapo", away: "Aurora", home_score: 0, away_score: 2, date: "2026-05-16" },
    { home: "Universitario de Vinto", away: "Bolívar", home_score: 3, away_score: 2, date: "2026-05-16" },
    { home: "Guabirá", away: "Nacional Potosí", home_score: 2, away_score: 1, date: "2026-05-18" },
    
    // Matchday 10 - May 29 - June 2
    { home: "SA Bulo Bulo", away: "Guabirá", home_score: 1, away_score: 2, date: "2026-05-29" },
    { home: "Academia del Balompie Boliviano", away: "Always Ready", home_score: 1, away_score: 3, date: "2026-05-30" },
    { home: "Oriente Petrolero", away: "Blooming", home_score: 0, away_score: 1, date: "2026-05-31" },
    { home: "Universitario de Vinto", away: "Aurora", home_score: 1, away_score: 2, date: "2026-06-02" }
],

"Chinese Super League": [
    // Matchday 10 - May 5-6
    { home: "Qingdao Youth Island", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1, date: "2026-05-05" },
    { home: "Shandong Taishan", away: "Shanghai Shenhua", home_score: 4, away_score: 1, date: "2026-05-05" },
    { home: "Shenyang Urban", away: "Chengdu Rongcheng", home_score: 0, away_score: 1, date: "2026-05-05" },
    { home: "Chongqing Tonglianglong", away: "Henan", home_score: 1, away_score: 1, date: "2026-05-05" },
    { home: "Wuhan Three Towns", away: "Qingdao Hainiu", home_score: 1, away_score: 3, date: "2026-05-06" },
    { home: "Beijing Guoan", away: "Dalian Yingbo", home_score: 3, away_score: 0, date: "2026-05-06" },
    { home: "Shanghai Port", away: "Shenzhen Peng City", home_score: 1, away_score: 1, date: "2026-05-06" },
    { home: "Yunnan Yukun", away: "Zhejiang", home_score: 1, away_score: 2, date: "2026-05-06" },
    
    // Matchday 11 - May 9-10
    { home: "Shanghai Shenhua", away: "Chongqing Tonglianglong", home_score: 2, away_score: 2, date: "2026-05-09" },
    { home: "Chengdu Rongcheng", away: "Henan", home_score: 3, away_score: 0, date: "2026-05-09" },
    { home: "Qingdao Youth Island", away: "Wuhan Three Towns", home_score: 1, away_score: 1, date: "2026-05-10" },
    { home: "Shenzhen Peng City", away: "Shandong Taishan", home_score: 1, away_score: 2, date: "2026-05-10" },
    { home: "Shenyang Urban", away: "Yunnan Yukun", home_score: 1, away_score: 2, date: "2026-05-10" },
    { home: "Zhejiang", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1, date: "2026-05-10" },
    { home: "Beijing Guoan", away: "Shanghai Port", home_score: 2, away_score: 2, date: "2026-05-10" },
    { home: "Qingdao Hainiu", away: "Dalian Yingbo", home_score: 3, away_score: 1, date: "2026-05-10" },
    
    // Matchday 12 - May 15-16
    { home: "Henan", away: "Shenzhen Peng City", home_score: 1, away_score: 0, date: "2026-05-15" },
    { home: "Tianjin Jinmen Tiger", away: "Chengdu Rongcheng", home_score: 1, away_score: 2, date: "2026-05-15" },
    { home: "Shanghai Port", away: "Zhejiang", home_score: 2, away_score: 2, date: "2026-05-15" },
    { home: "Dalian Yingbo", away: "Qingdao Youth Island", home_score: 2, away_score: 3, date: "2026-05-15" },
    { home: "Beijing Guoan", away: "Qingdao Hainiu", home_score: 4, away_score: 2, date: "2026-05-15" },
    { home: "Wuhan Three Towns", away: "Shenyang Urban", home_score: 2, away_score: 2, date: "2026-05-16" },
    { home: "Shandong Taishan", away: "Chongqing Tonglianglong", home_score: 3, away_score: 1, date: "2026-05-16" },
    { home: "Yunnan Yukun", away: "Shanghai Shenhua", home_score: 1, away_score: 0, date: "2026-05-16" },
    
    // Matchday 13 - May 19-20
    { home: "Tianjin Jinmen Tiger", away: "Henan", home_score: 1, away_score: 2, date: "2026-05-19" },
    { home: "Shenzhen Peng City", away: "Dalian Yingbo", home_score: 1, away_score: 1, date: "2026-05-19" },
    { home: "Qingdao Youth Island", away: "Beijing Guoan", home_score: 1, away_score: 1, date: "2026-05-19" },
    { home: "Chengdu Rongcheng", away: "Shanghai Port", home_score: 0, away_score: 1, date: "2026-05-19" },
    { home: "Shenyang Urban", away: "Qingdao Hainiu", home_score: 2, away_score: 1, date: "2026-05-20" },
    { home: "Shanghai Shenhua", away: "Wuhan Three Towns", home_score: 2, away_score: 2, date: "2026-05-20" },
    { home: "Chongqing Tonglianglong", away: "Yunnan Yukun", home_score: 0, away_score: 0, date: "2026-05-20" },
    { home: "Zhejiang", away: "Shandong Taishan", home_score: 4, away_score: 1, date: "2026-05-20" },
    
    // Matchday 14 - May 23-24
    { home: "Shanghai Port", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1, date: "2026-05-23" },
    { home: "Beijing Guoan", away: "Henan", home_score: 1, away_score: 2, date: "2026-05-23" },
    { home: "Dalian Yingbo", away: "Chengdu Rongcheng", home_score: 2, away_score: 0, date: "2026-05-23" },
    { home: "Qingdao Hainiu", away: "Chongqing Tonglianglong", home_score: 0, away_score: 1, date: "2026-05-24" },
    { home: "Yunnan Yukun", away: "Qingdao Youth Island", home_score: 2, away_score: 3, date: "2026-05-24" },
    { home: "Shandong Taishan", away: "Wuhan Three Towns", home_score: 3, away_score: 3, date: "2026-05-24" },
    { home: "Zhejiang", away: "Shenyang Urban", home_score: 0, away_score: 5, date: "2026-05-24" },
    { home: "Shanghai Shenhua", away: "Shenzhen Peng City", home_score: 1, away_score: 2, date: "2026-05-24" },
    
    // Matchday 15 - May 29-31
    { home: "Shenyang Urban", away: "Shanghai Port", home_score: 3, away_score: 2, date: "2026-05-29" },
    { home: "Qingdao Youth Island", away: "Shanghai Shenhua", home_score: 2, away_score: 2, date: "2026-05-30" },
    { home: "Henan", away: "Zhejiang", home_score: 0, away_score: 2, date: "2026-05-30" },
    { home: "Chengdu Rongcheng", away: "Shandong Taishan", home_score: 1, away_score: 0, date: "2026-05-30" },
    { home: "Chongqing Tonglianglong", away: "Beijing Guoan", home_score: 2, away_score: 3, date: "2026-05-30" },
    { home: "Shenzhen Peng City", away: "Qingdao Hainiu", home_score: 3, away_score: 2, date: "2026-05-30" },
    { home: "Tianjin Jinmen Tiger", away: "Dalian Yingbo", home_score: 1, away_score: 0, date: "2026-05-31" },
    { home: "Wuhan Three Towns", away: "Yunnan Yukun", home_score: 1, away_score: 1, date: "2026-05-31" }
],

"Swedish Superettan": [
    // Matchday 5 - May 2-5
    { home: "Ljungskile", away: "United Nordic", home_score: 0, away_score: 2, date: "2026-05-02" },
    { home: "Varbergs BoIS", away: "Örebro", home_score: 0, away_score: 0, date: "2026-05-02" },
    { home: "Sandviken", away: "Norrby", home_score: 2, away_score: 2, date: "2026-05-02" },
    { home: "GIF Sundsvall", away: "Oddevold", home_score: 1, away_score: 3, date: "2026-05-02" },
    { home: "Östersund", away: "Värnamo", home_score: 3, away_score: 2, date: "2026-05-03" },
    { home: "Helsingborg", away: "Brage", home_score: 2, away_score: 0, date: "2026-05-03" },
    { home: "Landskrona", away: "Östers IF", home_score: 2, away_score: 2, date: "2026-05-04" },
    { home: "Falkenberg", away: "Norrköping", home_score: 1, away_score: 0, date: "2026-05-05" },
    
    // Matchday 6 - May 8-9
    { home: "Varbergs BoIS", away: "Värnamo", home_score: 3, away_score: 2, date: "2026-05-08" },
    { home: "Örebro", away: "Brage", home_score: 0, away_score: 3, date: "2026-05-08" },
    { home: "Östersund", away: "Falkenberg", home_score: 2, away_score: 2, date: "2026-05-09" },
    { home: "Oddevold", away: "Landskrona", home_score: 1, away_score: 1, date: "2026-05-09" },
    { home: "United Nordic", away: "Östers IF", home_score: 4, away_score: 2, date: "2026-05-09" },
    { home: "Norrby", away: "Helsingborg", home_score: 3, away_score: 3, date: "2026-05-09" },
    { home: "GIF Sundsvall", away: "Norrköping", home_score: 1, away_score: 3, date: "2026-05-09" },
    { home: "Sandviken", away: "Ljungskile", home_score: 1, away_score: 0, date: "2026-05-09" },
    
    // Matchday 7 - May 12-14
    { home: "Värnamo", away: "Örebro", home_score: 0, away_score: 1, date: "2026-05-12" },
    { home: "Landskrona", away: "Norrby", home_score: 1, away_score: 1, date: "2026-05-12" },
    { home: "Helsingborg", away: "Oddevold", home_score: 2, away_score: 2, date: "2026-05-13" },
    { home: "Östers IF", away: "Sandviken", home_score: 1, away_score: 0, date: "2026-05-13" },
    { home: "Norrköping", away: "United Nordic", home_score: 1, away_score: 1, date: "2026-05-13" },
    { home: "Brage", away: "Östersund", home_score: 2, away_score: 4, date: "2026-05-13" },
    { home: "Falkenberg", away: "Varbergs BoIS", home_score: 0, away_score: 3, date: "2026-05-13" },
    { home: "Ljungskile", away: "GIF Sundsvall", home_score: 1, away_score: 0, date: "2026-05-14" },
    
    // Matchday 8 - May 16-19
    { home: "Brage", away: "Norrköping", home_score: 0, away_score: 0, date: "2026-05-16" },
    { home: "Östersund", away: "Sandviken", home_score: 2, away_score: 1, date: "2026-05-17" },
    { home: "United Nordic", away: "Falkenberg", home_score: 1, away_score: 4, date: "2026-05-17" },
    { home: "Östers IF", away: "Ljungskile", home_score: 1, away_score: 4, date: "2026-05-17" },
    { home: "Värnamo", away: "Norrby", home_score: 2, away_score: 2, date: "2026-05-17" },
    { home: "GIF Sundsvall", away: "Landskrona", home_score: 2, away_score: 1, date: "2026-05-18" },
    { home: "Oddevold", away: "Örebro", home_score: 4, away_score: 1, date: "2026-05-18" },
    { home: "Helsingborg", away: "Varbergs BoIS", home_score: 1, away_score: 3, date: "2026-05-19" },
    
    // Matchday 9 - May 23-26
    { home: "Norrby", away: "Ljungskile", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "United Nordic", away: "Brage", home_score: 1, away_score: 0, date: "2026-05-23" },
    { home: "Oddevold", away: "Östersund", home_score: 1, away_score: 0, date: "2026-05-23" },
    { home: "Falkenberg", away: "Värnamo", home_score: 3, away_score: 1, date: "2026-05-23" },
    { home: "Varbergs BoIS", away: "GIF Sundsvall", home_score: 1, away_score: 0, date: "2026-05-24" },
    { home: "Sandviken", away: "Landskrona", home_score: 0, away_score: 1, date: "2026-05-24" },
    { home: "Norrköping", away: "Östers IF", home_score: 2, away_score: 0, date: "2026-05-25" },
    { home: "Örebro", away: "Helsingborg", home_score: 1, away_score: 2, date: "2026-05-26" },
    
    // Matchday 10 - May 30-31
    { home: "Landskrona", away: "Brage", home_score: 2, away_score: 2, date: "2026-05-30" },
    { home: "Ljungskile", away: "Varbergs BoIS", home_score: 1, away_score: 3, date: "2026-05-30" },
    { home: "GIF Sundsvall", away: "Sandviken", home_score: 0, away_score: 3, date: "2026-05-30" },
    { home: "Falkenberg", away: "Oddevold", home_score: 2, away_score: 1, date: "2026-05-30" },
    { home: "Östers IF", away: "Norrby", home_score: 2, away_score: 1, date: "2026-05-30" },
    { home: "Värnamo", away: "United Nordic", home_score: 0, away_score: 2, date: "2026-05-31" },
    { home: "Helsingborg", away: "Norrköping", home_score: 0, away_score: 2, date: "2026-05-31" },
    { home: "Östersund", away: "Örebro", home_score: 3, away_score: 2, date: "2026-05-31" },
    
    // Matchday 11 - June 9-11
    { home: "Sandviken", away: "Falkenberg", home_score: 4, away_score: 2, date: "2026-06-09" },
    { home: "Östers IF", away: "Värnamo", home_score: 3, away_score: 0, date: "2026-06-09" },
    { home: "United Nordic", away: "Östersund", home_score: 1, away_score: 1, date: "2026-06-09" },
    { home: "Brage", away: "Ljungskile", home_score: 2, away_score: 2, date: "2026-06-09" },
    { home: "Oddevold", away: "Norrköping", home_score: 1, away_score: 2, date: "2026-06-09" },
    { home: "Örebro", away: "GIF Sundsvall", home_score: 0, away_score: 1, date: "2026-06-10" },
    { home: "Varbergs BoIS", away: "Norrby", home_score: 2, away_score: 0, date: "2026-06-10" },
    { home: "Helsingborg", away: "Landskrona", home_score: 0, away_score: 3, date: "2026-06-11" }
],

"Brazilian Série B": [
    // Matchday 4 - April 11-13
    { home: "Criciúma", away: "Botafogo", home_score: 1, away_score: 0, date: "2026-04-11" },
    { home: "Juventude", away: "Goiás", home_score: 2, away_score: 0, date: "2026-04-11" },
    { home: "Sport", away: "Avaí", home_score: 2, away_score: 2, date: "2026-04-11" },
    { home: "Ponte Preta", away: "Vila Nova", home_score: 0, away_score: 1, date: "2026-04-11" },
    { home: "Ceará", away: "Náutico", home_score: 1, away_score: 0, date: "2026-04-12" },
    { home: "América-MG", away: "Novorizontino", home_score: 0, away_score: 3, date: "2026-04-12" },
    { home: "São Bernardo", away: "Fortaleza", home_score: 0, away_score: 1, date: "2026-04-12" },
    { home: "Operário Ferroviário", away: "Cuiabá", home_score: 0, away_score: 0, date: "2026-04-12" },
    { home: "CRB", away: "Athletic (MG)", home_score: 2, away_score: 3, date: "2026-04-13" },
    { home: "Atlético Goianiense", away: "Londrina", home_score: 2, away_score: 1, date: "2026-04-13" },
    
    // Matchday 5 - April 18-20
    { home: "América-MG", away: "Sport", home_score: 0, away_score: 0, date: "2026-04-18" },
    { home: "Náutico", away: "São Bernardo", home_score: 0, away_score: 3, date: "2026-04-18" },
    { home: "Vila Nova", away: "Operário Ferroviário", home_score: 2, away_score: 1, date: "2026-04-18" },
    { home: "Avaí", away: "Ponte Preta", home_score: 1, away_score: 2, date: "2026-04-19" },
    { home: "CRB", away: "Juventude", home_score: 0, away_score: 1, date: "2026-04-19" },
    { home: "Botafogo", away: "Atlético Goianiense", home_score: 1, away_score: 1, date: "2026-04-19" },
    { home: "Londrina", away: "Ceará", home_score: 0, away_score: 0, date: "2026-04-19" },
    { home: "Goiás", away: "Cuiabá", home_score: 0, away_score: 2, date: "2026-04-19" },
    { home: "Novorizontino", away: "Athletic (MG)", home_score: 2, away_score: 1, date: "2026-04-20" },
    { home: "Fortaleza", away: "Criciúma", home_score: 3, away_score: 2, date: "2026-04-20" },
    
    // Matchday 6 - April 23-27
    { home: "Cuiabá", away: "Botafogo", home_score: 1, away_score: 1, date: "2026-04-23" },
    { home: "Ponte Preta", away: "América-MG", home_score: 1, away_score: 0, date: "2026-04-25" },
    { home: "Sport", away: "Novorizontino", home_score: 1, away_score: 0, date: "2026-04-26" },
    { home: "Juventude", away: "Londrina", home_score: 1, away_score: 0, date: "2026-04-26" },
    { home: "São Bernardo", away: "Goiás", home_score: 1, away_score: 0, date: "2026-04-26" },
    { home: "Operário Ferroviário", away: "Fortaleza", home_score: 0, away_score: 0, date: "2026-04-26" },
    { home: "Ceará", away: "Vila Nova", home_score: 3, away_score: 3, date: "2026-04-26" },
    { home: "Criciúma", away: "CRB", home_score: 3, away_score: 1, date: "2026-04-27" },
    { home: "Atlético Goianiense", away: "Avaí", home_score: 2, away_score: 1, date: "2026-04-27" },
    { home: "Athletic (MG)", away: "Náutico", home_score: 0, away_score: 1, date: "2026-04-27" },
    
    // Matchday 7 - May 2-4
    { home: "Botafogo", away: "Náutico", home_score: 1, away_score: 1, date: "2026-05-02" },
    { home: "Cuiabá", away: "Criciúma", home_score: 1, away_score: 1, date: "2026-05-02" },
    { home: "Fortaleza", away: "Goiás", home_score: 4, away_score: 1, date: "2026-05-03" },
    { home: "Operário Ferroviário", away: "Londrina", home_score: 3, away_score: 0, date: "2026-05-03" },
    { home: "São Bernardo", away: "Ponte Preta", home_score: 3, away_score: 0, date: "2026-05-03" },
    { home: "Sport", away: "Ceará", home_score: 2, away_score: 0, date: "2026-05-03" },
    { home: "Atlético Goianiense", away: "Juventude", home_score: 0, away_score: 0, date: "2026-05-03" },
    { home: "América-MG", away: "CRB", home_score: 1, away_score: 2, date: "2026-05-04" },
    { home: "Avaí", away: "Novorizontino", home_score: 3, away_score: 3, date: "2026-05-04" },
    { home: "Vila Nova", away: "Athletic (MG)", home_score: 1, away_score: 1, date: "2026-05-04" },
    
    // Matchday 8 - May 9-12
    { home: "Goiás", away: "Vila Nova", home_score: 1, away_score: 0, date: "2026-05-09" },
    { home: "Athletic (MG)", away: "Cuiabá", home_score: 0, away_score: 0, date: "2026-05-09" },
    { home: "Ponte Preta", away: "Sport", home_score: 1, away_score: 3, date: "2026-05-09" },
    { home: "Ceará", away: "Atlético Goianiense", home_score: 0, away_score: 1, date: "2026-05-09" },
    { home: "CRB", away: "Operário Ferroviário", home_score: 3, away_score: 0, date: "2026-05-10" },
    { home: "Juventude", away: "Criciúma", home_score: 0, away_score: 0, date: "2026-05-10" },
    { home: "Náutico", away: "América-MG", home_score: 4, away_score: 0, date: "2026-05-10" },
    { home: "Avaí", away: "Fortaleza", home_score: 0, away_score: 0, date: "2026-05-10" },
    { home: "Novorizontino", away: "Botafogo", home_score: 1, away_score: 0, date: "2026-05-10" },
    { home: "Londrina", away: "São Bernardo", home_score: 1, away_score: 3, date: "2026-05-12" },
    
    // Matchday 9 - May 16-18
    { home: "Operário Ferroviário", away: "Náutico", home_score: 2, away_score: 6, date: "2026-05-16" },
    { home: "São Bernardo", away: "América-MG", home_score: 1, away_score: 1, date: "2026-05-16" },
    { home: "Goiás", away: "Botafogo", home_score: 1, away_score: 0, date: "2026-05-16" },
    { home: "Cuiabá", away: "Novorizontino", home_score: 0, away_score: 0, date: "2026-05-17" },
    { home: "Athletic (MG)", away: "Juventude", home_score: 1, away_score: 1, date: "2026-05-17" },
    { home: "Vila Nova", away: "Avaí", home_score: 2, away_score: 0, date: "2026-05-17" },
    { home: "Criciúma", away: "Atlético Goianiense", home_score: 1, away_score: 1, date: "2026-05-17" },
    { home: "Ceará", away: "Fortaleza", home_score: 2, away_score: 1, date: "2026-05-17" },
    { home: "Sport", away: "CRB", home_score: 1, away_score: 2, date: "2026-05-18" },
    { home: "Ponte Preta", away: "Londrina", home_score: 1, away_score: 4, date: "2026-05-18" },
    
    // Matchday 10 - May 22-25
    { home: "Náutico", away: "Cuiabá", home_score: 1, away_score: 0, date: "2026-05-22" },
    { home: "Novorizontino", away: "Ceará", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "Fortaleza", away: "Londrina", home_score: 3, away_score: 0, date: "2026-05-23" },
    { home: "Juventude", away: "Sport", home_score: 0, away_score: 1, date: "2026-05-24" },
    { home: "Atlético Goianiense", away: "São Bernardo", home_score: 0, away_score: 1, date: "2026-05-24" },
    { home: "CRB", away: "Ponte Preta", home_score: 4, away_score: 2, date: "2026-05-24" },
    { home: "América-MG", away: "Vila Nova", home_score: 1, away_score: 2, date: "2026-05-24" },
    { home: "Avaí", away: "Goiás", home_score: 0, away_score: 2, date: "2026-05-24" },
    { home: "Operário Ferroviário", away: "Criciúma", home_score: 1, away_score: 1, date: "2026-05-25" },
    { home: "Botafogo", away: "Athletic (MG)", home_score: 1, away_score: 2, date: "2026-05-25" },
    
    // Matchday 11 - May 30 - June 1
    { home: "Juventude", away: "América-MG", home_score: 3, away_score: 0, date: "2026-05-30" },
    { home: "Avaí", away: "Criciúma", home_score: 1, away_score: 2, date: "2026-05-30" },
    { home: "Atlético Goianiense", away: "Goiás", home_score: 1, away_score: 1, date: "2026-05-30" },
    { home: "Athletic (MG)", away: "Fortaleza", home_score: 1, away_score: 0, date: "2026-05-30" },
    { home: "Sport", away: "Náutico", home_score: 2, away_score: 0, date: "2026-05-31" },
    { home: "Londrina", away: "Vila Nova", home_score: 0, away_score: 1, date: "2026-05-31" },
    { home: "São Bernardo", away: "Novorizontino", home_score: 1, away_score: 1, date: "2026-05-31" },
    { home: "Ceará", away: "Operário Ferroviário", home_score: 1, away_score: 2, date: "2026-05-31" },
    { home: "Cuiabá", away: "CRB", home_score: 2, away_score: 0, date: "2026-06-01" },
    { home: "Ponte Preta", away: "Botafogo", home_score: 0, away_score: 0, date: "2026-06-01" },
    
    // Matchday 12 - June 6-11
    { home: "Operário Ferroviário", away: "Juventude", home_score: 2, away_score: 1, date: "2026-06-06" },
    { home: "Criciúma", away: "Londrina", home_score: 1, away_score: 0, date: "2026-06-06" },
    { home: "CRB", away: "São Bernardo", home_score: 2, away_score: 3, date: "2026-06-07" },
    { home: "Vila Nova", away: "Botafogo", home_score: 1, away_score: 0, date: "2026-06-09" },
    { home: "América-MG", away: "Atlético Goianiense", home_score: 1, away_score: 2, date: "2026-06-09" },
    { home: "Ponte Preta", away: "Cuiabá", home_score: 1, away_score: 2, date: "2026-06-09" },
    { home: "Náutico", away: "Fortaleza", home_score: 0, away_score: 1, date: "2026-06-09" },
    { home: "Ceará", away: "Avaí", home_score: 2, away_score: 1, date: "2026-06-11" },
    { home: "Goiás", away: "Novorizontino", home_score: 0, away_score: 4, date: "2026-06-11" },
    { home: "Sport", away: "Athletic (MG)", home_score: 1, away_score: 1, date: "2026-06-11" }
],

"Finland Veikkausliiga": [
    // Group stage - May 20
    { home: "Ilves", away: "Inter Turku", home_score: 1, away_score: 3, date: "2026-05-20" },
    { home: "KuPS", away: "FF Jaro", home_score: 3, away_score: 0, date: "2026-05-20" },
    
    // Group stage - May 22
    { home: "VPS", away: "HJK", home_score: 2, away_score: 1, date: "2026-05-22" },
    
    // Group stage - May 23
    { home: "Inter Turku", away: "Turun", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "KuPS", away: "FC Lahti", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "FF Jaro", away: "IFK Mariehamn", home_score: 3, away_score: 0, date: "2026-05-23" },
    { home: "SJK", away: "Oulu", home_score: 0, away_score: 1, date: "2026-05-23" },
    { home: "Ilves", away: "Gnistan", home_score: 2, away_score: 0, date: "2026-05-23" },
    
    // Group stage - May 30
    { home: "HJK", away: "IFK Mariehamn", home_score: 1, away_score: 0, date: "2026-05-30" },
    { home: "KuPS", away: "Inter Turku", home_score: 1, away_score: 1, date: "2026-05-30" },
    { home: "Gnistan", away: "SJK", home_score: 3, away_score: 2, date: "2026-05-30" },
    { home: "FC Lahti", away: "Ilves", home_score: 5, away_score: 0, date: "2026-05-30" },
    { home: "Turun", away: "VPS", home_score: 1, away_score: 0, date: "2026-05-30" },
    
    // Group stage - May 31
    { home: "Oulu", away: "FF Jaro", home_score: 2, away_score: 1, date: "2026-05-31" },
    
    // Group stage - Today (June 14)
    { home: "Inter Turku", away: "Oulu", home_score: 0, away_score: 0, date: "2026-06-14" },
    { home: "Ilves", away: "Turun", home_score: 1, away_score: 0, date: "2026-06-14" },
    { home: "FF Jaro", away: "HJK", home_score: 2, away_score: 5, date: "2026-06-14" },
    { home: "VPS", away: "KuPS", home_score: 1, away_score: 1, date: "2026-06-14" },
    { home: "IFK Mariehamn", away: "Gnistan", home_score: 0, away_score: 3, date: "2026-06-14" },
    { home: "FC Lahti", away: "SJK", home_score: 2, away_score: 3, date: "2026-06-14" }
],

  "Kazakhstan Premier League": [
    // Matchday 11 - May 22-23
    { home: "Ordabasy", away: "Zhetysu", home_score: 2, away_score: 1, date: "2026-05-22" },
    { home: "Altay", away: "Okzhetpes", home_score: 0, away_score: 1, date: "2026-05-22" },
    { home: "Astana", away: "Ulytau", home_score: 3, away_score: 0, date: "2026-05-22" },
    { home: "Kaspiy Aktau", away: "FC Irtysh Pavlodar", home_score: 2, away_score: 2, date: "2026-05-22" },
    { home: "Zhetysu", away: "Atyrau", home_score: 0, away_score: 0, date: "2026-05-23" },
    { home: "Yelimay", away: "Zhenys", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "Kairat", away: "Kaisar", home_score: 0, away_score: 0, date: "2026-05-23" },
    { home: "FC Aktobe", away: "Kyzyl-Zhar SK", home_score: 0, away_score: 0, date: "2026-05-23" },
    { home: "Tobol", away: "Ordabasy", home_score: 0, away_score: 3, date: "2026-05-23" },
    
    // Matchday 12 - May 27-28
    { home: "Altay", away: "Astana", home_score: 1, away_score: 1, date: "2026-05-27" },
    { home: "FC Irtysh Pavlodar", away: "Ulytau", home_score: 1, away_score: 1, date: "2026-05-27" },
    { home: "Okzhetpes", away: "FC Aktobe", home_score: 2, away_score: 2, date: "2026-05-28" },
    { home: "Kyzyl-Zhar SK", away: "Zhetysu", home_score: 3, away_score: 2, date: "2026-05-28" },
    { home: "Atyrau", away: "Tobol", home_score: 1, away_score: 1, date: "2026-05-28" },
    { home: "Zhenys", away: "Kaspiy Aktau", home_score: 1, away_score: 0, date: "2026-05-28" },
    { home: "Kaisar", away: "Yelimay", home_score: 2, away_score: 3, date: "2026-05-28" },
    { home: "Ordabasy", away: "Kairat", home_score: 2, away_score: 1, date: "2026-05-28" },
    
    // Matchday 13 - June 13
    { home: "Tobol", away: "Kyzyl-Zhar SK", home_score: 2, away_score: 0, date: "2026-06-13" },
    { home: "Zhetysu", away: "Okzhetpes", home_score: 2, away_score: 2, date: "2026-06-13" },
    { home: "Kairat", away: "Atyrau", home_score: 1, away_score: 1, date: "2026-06-13" }
],


"Latvia Nakotnes Liga": [
    // Matchday 7 - May 9-10
    { home: "Ventspils", away: "Metta/LU", home_score: 0, away_score: 1, date: "2026-05-09" },
    { home: "Riga Mariners", away: "Smiltene", home_score: 1, away_score: 0, date: "2026-05-09" },
    { home: "Skanste", away: "RFS 2", home_score: 4, away_score: 0, date: "2026-05-10" },
    { home: "Saldus SS/Leevon", away: "Riga II", home_score: 3, away_score: 2, date: "2026-05-10" },
    
    // Matchday 8 - May 13-17
    { home: "Smiltene", away: "SK Super Nova II", home_score: 0, away_score: 2, date: "2026-05-13" },
    { home: "Riga Mariners", away: "Valmiera", home_score: 3, away_score: 1, date: "2026-05-16" },
    { home: "Rēzeknes FA/BJSS", away: "Tukums II", home_score: 1, away_score: 4, date: "2026-05-16" },
    { home: "Metta/LU", away: "JDFS Alberts", home_score: 4, away_score: 1, date: "2026-05-16" },
    { home: "RFS 2", away: "Saldus SS/Leevon", home_score: 1, away_score: 2, date: "2026-05-16" },
    { home: "Riga II", away: "Mārupes", home_score: 0, away_score: 4, date: "2026-05-17" },
    
    // Matchday 9 - May 23-26
    { home: "Mārupes", away: "RFS 2", home_score: 1, away_score: 4, date: "2026-05-23" },
    { home: "Rēzeknes FA/BJSS", away: "Riga II", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "Riga Mariners", away: "Metta/LU", home_score: 2, away_score: 2, date: "2026-05-23" },
    { home: "Saldus SS/Leevon", away: "Ventspils", home_score: 2, away_score: 1, date: "2026-05-23" },
    { home: "Tukums II", away: "Smiltene", home_score: 1, away_score: 1, date: "2026-05-24" },
    { home: "JDFS Alberts", away: "Skanste", home_score: 4, away_score: 1, date: "2026-05-24" },
    { home: "SK Super Nova II", away: "Valmiera", home_score: 0, away_score: 0, date: "2026-05-26" },
    
    // Matchday 2 - May 31
    { home: "JDFS Alberts", away: "Tukums II", home_score: 6, away_score: 1, date: "2026-05-31" },
    
    // Matchday 10 - June 13
    { home: "JDFS Alberts", away: "Saldus SS/Leevon", home_score: 0, away_score: 0, date: "2026-06-13" },
    { home: "Metta/LU", away: "SK Super Nova II", home_score: 7, away_score: 3, date: "2026-06-13" }
],

"Norwegian First Division": [
    // Matchday 3 - April 17-20
    { home: "Ranheim TF", away: "Raufoss", home_score: 5, away_score: 1, date: "2026-04-17" },
    { home: "Hødd", away: "Haugesund", home_score: 0, away_score: 2, date: "2026-04-18" },
    { home: "Kongsvinger", away: "Moss", home_score: 2, away_score: 1, date: "2026-04-18" },
    { home: "Stroemsgodset", away: "Sogndal", home_score: 3, away_score: 0, date: "2026-04-18" },
    { home: "Egersund", away: "Bryne FK", home_score: 1, away_score: 0, date: "2026-04-19" },
    { home: "Odd", away: "Stabæk", home_score: 2, away_score: 2, date: "2026-04-19" },
    { home: "Åsane", away: "Strømmen", home_score: 4, away_score: 5, date: "2026-04-19" },
    { home: "Lyn", away: "Sandnes Ulf", home_score: 0, away_score: 2, date: "2026-04-20" },
    
    // Matchday 4 - April 25-27
    { home: "Sogndal", away: "Åsane", home_score: 2, away_score: 0, date: "2026-04-25" },
    { home: "Strømmen", away: "Kongsvinger", home_score: 2, away_score: 2, date: "2026-04-25" },
    { home: "Bryne FK", away: "Odd", home_score: 1, away_score: 2, date: "2026-04-25" },
    { home: "Raufoss", away: "Hødd", home_score: 1, away_score: 1, date: "2026-04-26" },
    { home: "Sandnes Ulf", away: "Stroemsgodset", home_score: 1, away_score: 1, date: "2026-04-26" },
    { home: "Stabæk", away: "Haugesund", home_score: 3, away_score: 2, date: "2026-04-26" },
    { home: "Moss", away: "Lyn", home_score: 2, away_score: 1, date: "2026-04-26" },
    { home: "Egersund", away: "Ranheim TF", home_score: 3, away_score: 0, date: "2026-04-27" },
    
    // Matchday 5 - May 1
    { home: "Hødd", away: "Åsane", home_score: 1, away_score: 0, date: "2026-05-01" },
    { home: "Bryne FK", away: "Sogndal", home_score: 3, away_score: 3, date: "2026-05-01" },
    { home: "Lyn", away: "Stabæk", home_score: 0, away_score: 4, date: "2026-05-01" },
    { home: "Haugesund", away: "Sandnes Ulf", home_score: 2, away_score: 0, date: "2026-05-01" },
    { home: "Kongsvinger", away: "Egersund", home_score: 2, away_score: 1, date: "2026-05-01" },
    { home: "Stroemsgodset", away: "Strømmen", home_score: 3, away_score: 0, date: "2026-05-01" },
    { home: "Odd", away: "Raufoss", home_score: 1, away_score: 0, date: "2026-05-01" },
    { home: "Ranheim TF", away: "Moss", home_score: 4, away_score: 0, date: "2026-05-01" },
    
    // Matchday 1 - May 6
    { home: "Egersund", away: "Raufoss", home_score: 2, away_score: 1, date: "2026-05-06" },
    
    // Matchday 6 - May 8-11
    { home: "Ranheim TF", away: "Kongsvinger", home_score: 1, away_score: 1, date: "2026-05-08" },
    { home: "Sandnes Ulf", away: "Stabæk", home_score: 0, away_score: 1, date: "2026-05-10" },
    { home: "Raufoss", away: "Lyn", home_score: 0, away_score: 1, date: "2026-05-10" },
    { home: "Sogndal", away: "Haugesund", home_score: 5, away_score: 1, date: "2026-05-10" },
    { home: "Moss", away: "Bryne FK", home_score: 2, away_score: 3, date: "2026-05-10" },
    { home: "Strømmen", away: "Hødd", home_score: 1, away_score: 2, date: "2026-05-10" },
    { home: "Åsane", away: "Stroemsgodset", home_score: 0, away_score: 3, date: "2026-05-10" },
    { home: "Egersund", away: "Odd", home_score: 0, away_score: 1, date: "2026-05-11" },
    
    // Matchday 7 - May 15-16
    { home: "Sandnes Ulf", away: "Egersund", home_score: 4, away_score: 2, date: "2026-05-15" },
    { home: "Bryne FK", away: "Strømmen", home_score: 4, away_score: 2, date: "2026-05-16" },
    { home: "Odd", away: "Moss", home_score: 2, away_score: 3, date: "2026-05-16" },
    { home: "Stroemsgodset", away: "Ranheim TF", home_score: 5, away_score: 4, date: "2026-05-16" },
    { home: "Lyn", away: "Kongsvinger", home_score: 0, away_score: 3, date: "2026-05-16" },
    { home: "Haugesund", away: "Åsane", home_score: 1, away_score: 1, date: "2026-05-16" },
    { home: "Hødd", away: "Sogndal", home_score: 2, away_score: 2, date: "2026-05-16" },
    { home: "Stabæk", away: "Raufoss", home_score: 1, away_score: 2, date: "2026-05-16" },
    
    // Matchday 8 - May 20
    { home: "Strømmen", away: "Haugesund", home_score: 0, away_score: 7, date: "2026-05-20" },
    { home: "Raufoss", away: "Bryne FK", home_score: 3, away_score: 0, date: "2026-05-20" },
    { home: "Kongsvinger", away: "Odd", home_score: 4, away_score: 2, date: "2026-05-20" },
    { home: "Åsane", away: "Sandnes Ulf", home_score: 2, away_score: 0, date: "2026-05-20" },
    { home: "Sogndal", away: "Stabæk", home_score: 2, away_score: 2, date: "2026-05-20" },
    { home: "Egersund", away: "Lyn", home_score: 0, away_score: 0, date: "2026-05-20" },
    { home: "Moss", away: "Stroemsgodset", home_score: 1, away_score: 1, date: "2026-05-20" },
    { home: "Ranheim TF", away: "Hødd", home_score: 3, away_score: 2, date: "2026-05-20" },
    
    // Matchday 9 - May 25
    { home: "Lyn", away: "Strømmen", home_score: 1, away_score: 0, date: "2026-05-25" },
    { home: "Stroemsgodset", away: "Bryne FK", home_score: 1, away_score: 0, date: "2026-05-25" },
    { home: "Stabæk", away: "Kongsvinger", home_score: 2, away_score: 0, date: "2026-05-25" },
    { home: "Hødd", away: "Egersund", home_score: 3, away_score: 1, date: "2026-05-25" },
    { home: "Haugesund", away: "Moss", home_score: 3, away_score: 1, date: "2026-05-25" },
    { home: "Odd", away: "Ranheim TF", home_score: 3, away_score: 1, date: "2026-05-25" },
    { home: "Åsane", away: "Raufoss", home_score: 3, away_score: 0, date: "2026-05-25" },
    { home: "Sandnes Ulf", away: "Sogndal", home_score: 2, away_score: 0, date: "2026-05-25" },
    
    // Matchday 10 - May 30-31
    { home: "Moss", away: "Stabæk", home_score: 2, away_score: 2, date: "2026-05-30" },
    { home: "Odd", away: "Lyn", home_score: 3, away_score: 0, date: "2026-05-30" },
    { home: "Raufoss", away: "Haugesund", home_score: 3, away_score: 4, date: "2026-05-31" },
    { home: "Kongsvinger", away: "Åsane", home_score: 3, away_score: 1, date: "2026-05-31" },
    { home: "Egersund", away: "Stroemsgodset", home_score: 0, away_score: 5, date: "2026-05-31" },
    { home: "Bryne FK", away: "Hødd", home_score: 1, away_score: 0, date: "2026-05-31" },
    { home: "Strømmen", away: "Sogndal", home_score: 2, away_score: 3, date: "2026-05-31" },
    { home: "Ranheim TF", away: "Sandnes Ulf", home_score: 5, away_score: 1, date: "2026-05-31" },
    
    // Matchday 1 - June 7
    { home: "Ranheim TF", away: "Strømmen", home_score: 2, away_score: 2, date: "2026-06-07" }
],

"WNBA": [
    // June 14, 2026 results
    { home: "Las Vegas Aces", away: "Minnesota Lynx", home_score: 100, away_score: 97, date: "2026-06-14" },
    { home: "Portland Fire", away: "Dallas Wings", home_score: 84, away_score: 83, date: "2026-06-14" },
    { home: "Los Angeles Sparks", away: "Phoenix Mercury", home_score: 111, away_score: 102, date: "2026-06-14" },
    
    // Previous games (for form calculation)
    { home: "Las Vegas Aces", away: "Seattle Storm", home_score: 95, away_score: 78, date: "2026-06-12" },
    { home: "Minnesota Lynx", away: "Chicago Sky", home_score: 92, away_score: 80, date: "2026-06-12" },
    { home: "New York Liberty", away: "Connecticut Sun", home_score: 88, away_score: 72, date: "2026-06-12" },
    { home: "Indiana Fever", away: "Washington Mystics", home_score: 85, away_score: 82, date: "2026-06-12" },
    { home: "Atlanta Dream", away: "Toronto Tempo", home_score: 90, away_score: 88, date: "2026-06-12" },
    { home: "Phoenix Mercury", away: "Dallas Wings", home_score: 95, away_score: 98, date: "2026-06-12" },
    { home: "Golden State Valkyries", away: "Los Angeles Sparks", home_score: 87, away_score: 85, date: "2026-06-12" }
]	
};

console.log("✅ Matches data loaded from data.js");
console.log("✅ Data loaded successfully!", Object.keys(leaguesData).length, "leagues");