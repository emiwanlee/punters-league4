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
        { rank: 1, team: "Excursionistas", MP: 27, MW: 15, MD: 6, ML: 6, GF: 40, GA: 20, logo: "argentina/excursionistas.png" },
        { rank: 2, team: "Dálmine", MP: 27, MW: 14, MD: 8, ML: 5, GF: 33, GA: 16, logo: "argentina/dalmine.png" },
        { rank: 3, team: "Arsenal Sarandi", MP: 27, MW: 13, MD: 9, ML: 5, GF: 38, GA: 23, logo: "argentina/arsenalsarandi.png" },
        { rank: 4, team: "Talleres Remedios", MP: 27, MW: 14, MD: 7, ML: 6, GF: 32, GA: 16, logo: "argentina/talleresremedios.png" },
        { rank: 5, team: "Deportivo Camioneros", MP: 27, MW: 12, MD: 9, ML: 6, GF: 31, GA: 20, logo: "argentina/depcamioneros.png" },
        { rank: 6, team: "Sportivo Italiano", MP: 27, MW: 12, MD: 8, ML: 7, GF: 27, GA: 21, logo: "argentina/sportivoitaliano.png" },
        { rank: 7, team: "Dep. Armenio", MP: 27, MW: 11, MD: 6, ML: 10, GF: 31, GA: 31, logo: "argentina/deparmenio.png" },
        { rank: 8, team: "Real Pilar", MP: 27, MW: 10, MD: 8, ML: 9, GF: 31, GA: 31, logo: "argentina/realpilar.png" },
        { rank: 9, team: "Laferrere", MP: 27, MW: 10, MD: 8, ML: 9, GF: 30, GA: 31, logo: "argentina/laferrere.png" },
        { rank: 10, team: "Comunicaciones", MP: 27, MW: 10, MD: 8, ML: 9, GF: 30, GA: 28, logo: "argentina/comunicaciones.png" },
        { rank: 11, team: "San Martín Burzaco", MP: 27, MW: 8, MD: 12, ML: 7, GF: 27, GA: 24, logo: "argentina/sanmartinburzaco.png" },
        { rank: 12, team: "Deportivo Merlo", MP: 27, MW: 10, MD: 8, ML: 9, GF: 33, GA: 39, logo: "argentina/deportivomerlo.png" },
        { rank: 13, team: "Argentino de Merlo", MP: 27, MW: 10, MD: 7, ML: 10, GF: 26, GA: 24, logo: "argentina/argentinomerlo.png" },
        { rank: 14, team: "Argentino Quilmes", MP: 27, MW: 7, MD: 10, ML: 10, GF: 27, GA: 31, logo: "argentina/argentoquilmes.png" },
        { rank: 15, team: "Dock Sud", MP: 27, MW: 6, MD: 11, ML: 10, GF: 26, GA: 27, logo: "argentina/docksud.png" },
        { rank: 16, team: "Liniers", MP: 27, MW: 6, MD: 9, ML: 12, GF: 17, GA: 27, logo: "argentina/liniers.png" },
        { rank: 17, team: "Flandria", MP: 27, MW: 7, MD: 6, ML: 14, GF: 22, GA: 34, logo: "argentina/flandria.png" },
        { rank: 18, team: "Defensores Unidos", MP: 27, MW: 6, MD: 9, ML: 12, GF: 22, GA: 31, logo: "argentina/defensoresunidos.png" },
        { rank: 19, team: "UAI Urquiza", MP: 27, MW: 3, MD: 16, ML: 8, GF: 12, GA: 22, logo: "argentina/uaiurquiza.png" },
        { rank: 20, team: "Brown (A)", MP: 27, MW: 5, MD: 10, ML: 12, GF: 17, GA: 30, logo: "argentina/brown.png" },
        { rank: 21, team: "Villa San Carlos", MP: 27, MW: 4, MD: 11, ML: 12, GF: 25, GA: 34, logo: "argentina/villasantacarlos.png" },
        { rank: 22, team: "Ituzaingó", MP: 27, MW: 1, MD: 8, ML: 18, GF: 20, GA: 47, logo: "argentina/ituzaingo.png" }
    ],
    fixtures: [
        // Matchday 28 - July 25
        { home: "Comunicaciones", away: "Real Pilar", date: "2026-07-25" },
        { home: "Deportivo Merlo", away: "Villa San Carlos", date: "2026-07-25" },
        { home: "Flandria", away: "Excursionistas", date: "2026-07-25" },
        { home: "Argentino Quilmes", away: "Dálmine", date: "2026-07-25" },
        { home: "Deportivo Camioneros", away: "San Martín Burzaco", date: "2026-07-25" },
        { home: "Defensores Unidos", away: "UAI Urquiza", date: "2026-07-25" },
        { home: "Brown (A)", away: "Argentino de Merlo", date: "2026-07-25" },
        { home: "Dock Sud", away: "Liniers", date: "2026-07-25" },
        { home: "Ituzaingó", away: "Sportivo Italiano", date: "2026-07-25" },
        { home: "Laferrere", away: "Talleres Remedios", date: "2026-07-25" },
        { home: "Dep. Armenio", away: "Arsenal Sarandi", date: "2026-07-25" }
    ]
},

"Argentine Liga Profesional": {
    id: "argentina-liga-profesional",
    logo: "argentina/argentinaprimeralogo.png",
    isBasketball: false,
    teams: [
        // Group A
        { rank: 1, team: "Argentinos Juniors", MP: 16, MW: 9, MD: 6, ML: 1, GF: 24, GA: 9, logo: "argentina/argentinoslogo.png" },
        { rank: 2, team: "Boca", MP: 16, MW: 10, MD: 3, ML: 3, GF: 24, GA: 11, logo: "argentina/bocalogo.png" },
        { rank: 3, team: "Racing Club", MP: 16, MW: 9, MD: 1, ML: 6, GF: 26, GA: 16, logo: "argentina/racingclublogo.png" },
        { rank: 4, team: "Huracán", MP: 16, MW: 7, MD: 6, ML: 3, GF: 19, GA: 12, logo: "argentina/huracanlogo.png" },
        { rank: 5, team: "Tigre", MP: 16, MW: 8, MD: 3, ML: 5, GF: 18, GA: 12, logo: "argentina/tigrelogo.png" },
        { rank: 6, team: "Independiente Rivadavia", MP: 16, MW: 7, MD: 6, ML: 3, GF: 20, GA: 17, logo: "argentina/rivadavialogo.png" },
        { rank: 7, team: "Barracas Central", MP: 16, MW: 7, MD: 5, ML: 4, GF: 20, GA: 18, logo: "argentina/barracascentrallogo.png" },
        { rank: 8, team: "Estudiantes", MP: 16, MW: 5, MD: 6, ML: 5, GF: 18, GA: 19, logo: "argentina/estudianteslogo.png" },
        { rank: 9, team: "Newell's", MP: 16, MW: 5, MD: 4, ML: 7, GF: 12, GA: 15, logo: "argentina/newellslogo.png" },
        { rank: 10, team: "Defensa y Justicia", MP: 16, MW: 5, MD: 4, ML: 7, GF: 18, GA: 22, logo: "argentina/defensalogo.png" },
        { rank: 11, team: "Central Córdoba", MP: 16, MW: 5, MD: 3, ML: 8, GF: 21, GA: 22, logo: "argentina/centralcordobalogo.png" },
        { rank: 12, team: "Belgrano", MP: 16, MW: 3, MD: 8, ML: 5, GF: 13, GA: 23, logo: "argentina/belgranologo.png" },
        { rank: 13, team: "Aldosivi", MP: 16, MW: 4, MD: 3, ML: 9, GF: 18, GA: 28, logo: "argentina/aldosivilogo.png" },
        { rank: 14, team: "Banfield", MP: 16, MW: 3, MD: 5, ML: 8, GF: 14, GA: 19, logo: "argentina/banfieldlogo.png" },
        { rank: 15, team: "Unión", MP: 16, MW: 3, MD: 5, ML: 8, GF: 11, GA: 17, logo: "argentina/unionlogo.png" },
        
        // Group B
        { rank: 1, team: "Central", MP: 16, MW: 10, MD: 5, ML: 1, GF: 22, GA: 8, logo: "argentina/centrallogo.png" },
        { rank: 2, team: "River Plate", MP: 16, MW: 8, MD: 7, ML: 1, GF: 21, GA: 9, logo: "argentina/riverplatelogo.png" },
        { rank: 3, team: "Independiente", MP: 16, MW: 8, MD: 5, ML: 3, GF: 23, GA: 12, logo: "argentina/independientelogo.png" },
        { rank: 4, team: "San Lorenzo", MP: 16, MW: 7, MD: 6, ML: 3, GF: 14, GA: 10, logo: "argentina/sanlorenzologo.png" },
        { rank: 5, team: "Deportivo Riestra", MP: 16, MW: 5, MD: 9, ML: 2, GF: 13, GA: 7, logo: "argentina/riestralogo.jpg" },
        { rank: 6, team: "Platense", MP: 16, MW: 6, MD: 5, ML: 5, GF: 13, GA: 11, logo: "argentina/platesnselogo.png" },
        { rank: 7, team: "Lanús", MP: 16, MW: 4, MD: 8, ML: 4, GF: 13, GA: 11, logo: "argentina/lanuslogo.png" },
        { rank: 8, team: "Instituto", MP: 16, MW: 5, MD: 3, ML: 8, GF: 16, GA: 20, logo: "argentina/institutologo.png" },
        { rank: 9, team: "Godoy Cruz", MP: 16, MW: 3, MD: 8, ML: 5, GF: 8, GA: 18, logo: "argentina/godoycruzlogo.png" },
        { rank: 10, team: "Atlético Tucumán", MP: 16, MW: 5, MD: 1, ML: 10, GF: 17, GA: 21, logo: "argentina/atleticotucumanlogo.png" },
        { rank: 11, team: "Gimnasia LP", MP: 16, MW: 4, MD: 4, ML: 8, GF: 9, GA: 18, logo: "argentina/gimnasialplogo.png" },
        { rank: 12, team: "Sarmiento", MP: 16, MW: 2, MD: 9, ML: 5, GF: 11, GA: 19, logo: "argentina/sarmientologo.png" },
        { rank: 13, team: "Vélez Sársfield", MP: 16, MW: 4, MD: 2, ML: 10, GF: 7, GA: 22, logo: "argentina/velezlogo.png" },
        { rank: 14, team: "Talleres", MP: 16, MW: 2, MD: 7, ML: 7, GF: 11, GA: 15, logo: "argentina/tellereslogo.png" },
        { rank: 15, team: "San Martín", MP: 16, MW: 2, MD: 3, ML: 11, GF: 5, GA: 18, logo: "argentina/sanmartinlogo.png" }
    ],
    fixtures: [
        // 2nd Phase - July 24-29
        { home: "Belgrano", away: "Rosario Central", date: "2026-07-24" },
        { home: "Sarmiento", away: "Argentinos Juniors", date: "2026-07-24" },
        { home: "Defensa y Justicia", away: "Aldosivi", date: "2026-07-24" },
        { home: "Gimnasia Mendoza", away: "Central Córdoba SdE", date: "2026-07-24" },
        { home: "Racing Club", away: "Gimnasia La Plata", date: "2026-07-24" },
        { home: "Vélez Sársfield", away: "Instituto", date: "2026-07-24" },
        { home: "Huracán", away: "Banfield", date: "2026-07-25" },
        { home: "Platense", away: "Unión", date: "2026-07-25" },
        { home: "Estudiantes Río Cuarto", away: "Tigre", date: "2026-07-25" },
        { home: "Newell's Old Boys", away: "Talleres de Córdoba", date: "2026-07-25" },
        { home: "River Plate", away: "Barracas Central", date: "2026-07-25" },
        { home: "Lanús", away: "San Lorenzo", date: "2026-07-26" },
        { home: "Atlético Tucumán", away: "Independiente Rivadavia", date: "2026-07-26" },
        { home: "Estudiantes", away: "Independiente", date: "2026-07-26" },
        { home: "Deportivo Riestra", away: "Boca Juniors", date: "2026-07-26" },
        { home: "Banfield", away: "Sarmiento", date: "2026-07-28" },
        { home: "San Lorenzo", away: "Gimnasia Mendoza", date: "2026-07-28" }
    ]
},

"Australian NPL ACT": {
    id: "australia-npl-act",
    logo: "australia/nplact.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Canberra Croatia", MP: 15, MW: 12, MD: 1, ML: 2, GF: 43, GA: 16, logo: "australia/canberracroatia.png" },
        { rank: 2, team: "Monaro Panthers", MP: 15, MW: 12, MD: 0, ML: 3, GF: 53, GA: 22, logo: "australia/monaropanthers.png" },
        { rank: 3, team: "Tigers FC", MP: 16, MW: 10, MD: 2, ML: 4, GF: 43, GA: 20, logo: "australia/tigersfc.png" },
        { rank: 4, team: "Canberra Juventus", MP: 14, MW: 10, MD: 0, ML: 4, GF: 32, GA: 21, logo: "australia/canberrajuv.png" },
        { rank: 5, team: "Tuggeranong Utd", MP: 14, MW: 10, MD: 0, ML: 4, GF: 34, GA: 29, logo: "australia/tuggeranong.png" },
        { rank: 6, team: "Queanbeyan City", MP: 14, MW: 8, MD: 1, ML: 5, GF: 30, GA: 21, logo: "australia/queanbeyan.png" },
        { rank: 7, team: "Canberra Olympic", MP: 15, MW: 5, MD: 1, ML: 9, GF: 32, GA: 41, logo: "australia/canberraolympic.png" },
        { rank: 8, team: "O'Connor Knights", MP: 15, MW: 5, MD: 0, ML: 10, GF: 15, GA: 30, logo: "australia/oconnorknights.png" },
        { rank: 9, team: "Belconnen Utd.", MP: 15, MW: 2, MD: 2, ML: 11, GF: 23, GA: 34, logo: "australia/belconnenutd.png" },
        { rank: 10, team: "Brindabella", MP: 14, MW: 2, MD: 0, ML: 12, GF: 7, GA: 44, logo: "australia/brindabella.png" },
        { rank: 11, team: "Canberra White Eagles", MP: 15, MW: 1, MD: 1, ML: 13, GF: 11, GA: 45, logo: "australia/whiteeagles.png" }
    ],
    fixtures: [
        // Round 14 (makeup) - July 22
        { home: "Tuggeranong Utd", away: "Canberra White Eagles", date: "2026-07-22" },
        
        // Round 18 - July 25-26
        { home: "Canberra Olympic", away: "Queanbeyan City", date: "2026-07-25" },
        { home: "Brindabella", away: "Canberra White Eagles", date: "2026-07-25" },
        { home: "Belconnen Utd.", away: "O'Connor Knights", date: "2026-07-25" },
        { home: "Tigers FC", away: "Tuggeranong Utd", date: "2026-07-25" },
        { home: "Canberra Juventus", away: "Monaro Panthers", date: "2026-07-26" },
        
        // Round 7 (makeup) - July 29
        { home: "Brindabella", away: "Queanbeyan City", date: "2026-07-29" }
    ]
},
"Australian NPL Victoria": {
    id: "australia-npl-victoria",
    logo: "australia/nplvictoria.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Oakleigh Cannons", MP: 20, MW: 13, MD: 5, ML: 2, GF: 43, GA: 18, logo: "NPL Victoria/oakleighlogo.png" },
        { rank: 2, team: "Hume City", MP: 20, MW: 12, MD: 4, ML: 4, GF: 40, GA: 24, logo: "NPL Victoria/humecitylogo.png" },
        { rank: 3, team: "Avondale FC", MP: 20, MW: 11, MD: 1, ML: 8, GF: 53, GA: 27, logo: "NPL Victoria/avondalelogo.png" },
        { rank: 4, team: "Preston Lions", MP: 19, MW: 12, MD: 2, ML: 5, GF: 30, GA: 16, logo: "NPL Victoria/prestonlionslogo.png" },
        { rank: 5, team: "Heidelberg Utd", MP: 20, MW: 9, MD: 5, ML: 6, GF: 33, GA: 26, logo: "NPL Victoria/heidelberglogo.png" },
        { rank: 6, team: "South Melbourne", MP: 20, MW: 10, MD: 1, ML: 9, GF: 31, GA: 32, logo: "NPL Victoria/southmelbournelogo.png" },
        { rank: 7, team: "Melbourne City U21", MP: 19, MW: 8, MD: 6, ML: 5, GF: 37, GA: 22, logo: "NPL Victoria/melbournecitylogo.png" },
        { rank: 8, team: "George Cross", MP: 19, MW: 6, MD: 8, ML: 5, GF: 25, GA: 26, logo: "NPL Victoria/georgecrosslogo.png" },
        { rank: 9, team: "Dandenong City", MP: 20, MW: 7, MD: 5, ML: 8, GF: 26, GA: 27, logo: "NPL Victoria/dandenongcitylogo.png" },
        { rank: 10, team: "Altona Magic", MP: 20, MW: 6, MD: 4, ML: 10, GF: 24, GA: 36, logo: "NPL Victoria/altonamagiclogo.png" },
        { rank: 11, team: "St Albans", MP: 19, MW: 6, MD: 4, ML: 9, GF: 21, GA: 34, logo: "NPL Victoria/stalbanslogo.png" },
        { rank: 12, team: "Bentleigh Greens", MP: 20, MW: 4, MD: 4, ML: 12, GF: 18, GA: 44, logo: "NPL Victoria/bentleighlogo.png" },
        { rank: 13, team: "Dandenong Thunder", MP: 20, MW: 4, MD: 3, ML: 13, GF: 22, GA: 43, logo: "NPL Victoria/dandenongthunderlogo.png" },
        { rank: 14, team: "Green Gully", MP: 20, MW: 2, MD: 4, ML: 14, GF: 14, GA: 42, logo: "NPL Victoria/greengullylogo.png" }
    ],
    fixtures: [
        // Round 22 - July 24-25
        { home: "Green Gully", away: "Dandenong City", date: "2026-07-24" },
        { home: "Heidelberg Utd", away: "George Cross", date: "2026-07-24" },
        { home: "St Albans", away: "Hume City", date: "2026-07-24" },
        { home: "Oakleigh Cannons", away: "South Melbourne", date: "2026-07-24" },
        { home: "Preston Lions", away: "Bentleigh Greens", date: "2026-07-24" },
        { home: "Melbourne City U21", away: "Avondale FC", date: "2026-07-25" },
        { home: "Dandenong Thunder", away: "Altona Magic", date: "2026-07-25" }
    ]
},
/*
"Brazilian U-20 League": {
    id: "brazil-u20",
    logo: "brazil/u20.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Palmeiras U20", MP: 19, MW: 13, MD: 5, ML: 1, GF: 54, GA: 23, logo: "brazil/palmeirasu20.png" },
        { rank: 2, team: "Vasco U20", MP: 19, MW: 11, MD: 3, ML: 5, GF: 36, GA: 19, logo: "brazil/vascou20.png" },
        { rank: 3, team: "Botafogo U20", MP: 19, MW: 11, MD: 3, ML: 5, GF: 32, GA: 20, logo: "brazil/botafogou20.png" },
        { rank: 4, team: "RB Bragantino U20", MP: 19, MW: 10, MD: 4, ML: 5, GF: 49, GA: 35, logo: "brazil/bragantinou20.png" },
        { rank: 5, team: "Athletico-PR U20", MP: 19, MW: 9, MD: 5, ML: 5, GF: 39, GA: 25, logo: "brazil/athleticopru20.png" },
        { rank: 6, team: "Santos U20", MP: 19, MW: 9, MD: 4, ML: 6, GF: 29, GA: 24, logo: "brazil/santosu20.png" },
        { rank: 7, team: "Cruzeiro U20", MP: 19, MW: 8, MD: 5, ML: 6, GF: 35, GA: 27, logo: "brazil/cruzeirou20.png" },
        { rank: 8, team: "Corinthians U20", MP: 19, MW: 8, MD: 5, ML: 6, GF: 31, GA: 25, logo: "brazil/corinthiansu20.png" },
        { rank: 9, team: "Bahia U20", MP: 19, MW: 8, MD: 5, ML: 6, GF: 32, GA: 30, logo: "brazil/bahiau20.png" },
        { rank: 10, team: "Flamengo U20", MP: 19, MW: 7, MD: 7, ML: 5, GF: 28, GA: 29, logo: "brazil/flamengou20.png" },
        { rank: 11, team: "São Paulo U20", MP: 19, MW: 6, MD: 7, ML: 6, GF: 27, GA: 26, logo: "brazil/saopaulou20.png" },
        { rank: 12, team: "América MG U20", MP: 19, MW: 6, MD: 7, ML: 6, GF: 25, GA: 37, logo: "brazil/americamgu20.png" },
        { rank: 13, team: "Cuiabá U20", MP: 19, MW: 6, MD: 3, ML: 10, GF: 19, GA: 27, logo: "brazil/cuiabau20.png" },
        { rank: 14, team: "Vitória U20", MP: 19, MW: 5, MD: 5, ML: 9, GF: 20, GA: 31, logo: "brazil/vitoriau20.png" },
        { rank: 15, team: "Grêmio U20", MP: 19, MW: 6, MD: 1, ML: 12, GF: 31, GA: 42, logo: "brazil/gremiou20.png" },
        { rank: 16, team: "Fluminense U20", MP: 19, MW: 5, MD: 4, ML: 10, GF: 25, GA: 31, logo: "brazil/fluminenseu20.png" },
        { rank: 17, team: "Juventude U20", MP: 19, MW: 5, MD: 3, ML: 11, GF: 20, GA: 39, logo: "brazil/juventudeu20.png" },
        { rank: 18, team: "Criciuma U20", MP: 19, MW: 5, MD: 2, ML: 12, GF: 24, GA: 40, logo: "brazil/criciumau20.png" },
        { rank: 19, team: "Avaí U20", MP: 19, MW: 3, MD: 7, ML: 9, GF: 24, GA: 43, logo: "brazil/avaiu20.png" },
        { rank: 20, team: "Fortaleza U20", MP: 19, MW: 2, MD: 9, ML: 8, GF: 18, GA: 25, logo: "brazil/fortalezau20.png" }
    ],
    fixtures: [
        // Quarter-finals - First Leg
        { home: "Athletico-PR U20", away: "RB Bragantino U20", date: "2026-07-14" },
        { home: "Corinthians U20", away: "Palmeiras U20", date: "2026-07-14" },
        { home: "Cruzeiro U20", away: "Vasco U20", date: "2026-07-14" },
        { home: "Santos U20", away: "Botafogo U20", date: "2026-07-14" },
        
        // Quarter-finals - Second Leg
        { home: "Botafogo U20", away: "Santos U20", date: "2026-07-14" },
        { home: "RB Bragantino U20", away: "Athletico-PR U20", date: "2026-07-14" },
        { home: "Palmeiras U20", away: "Corinthians U20", date: "2026-07-14" },
        { home: "Vasco U20", away: "Cruzeiro U20", date: "2026-07-14" }
    ]
},

*/
"Brazilian Série B": {
    id: "brasil-serie-b",
    logo: "brazil/serieb.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Criciúma", MP: 17, MW: 9, MD: 6, ML: 2, GF: 20, GA: 12, logo: "brazil/criciuma.png" },
        { rank: 2, team: "Vila Nova", MP: 17, MW: 9, MD: 4, ML: 4, GF: 25, GA: 19, logo: "brazil/vilanova.png" },
        { rank: 3, team: "Operário Ferroviário", MP: 17, MW: 9, MD: 4, ML: 4, GF: 22, GA: 18, logo: "brazil/operario.png" },
        { rank: 4, team: "Novorizontino", MP: 17, MW: 8, MD: 6, ML: 3, GF: 28, GA: 16, logo: "brazil/novorizontino.png" },
        { rank: 5, team: "Juventude", MP: 17, MW: 8, MD: 5, ML: 4, GF: 17, GA: 8, logo: "brazil/juventude.png" },
        { rank: 6, team: "Fortaleza", MP: 17, MW: 8, MD: 4, ML: 5, GF: 20, GA: 17, logo: "brazil/fortaleza.png" },
        { rank: 7, team: "São Bernardo", MP: 17, MW: 7, MD: 5, ML: 5, GF: 23, GA: 16, logo: "brazil/saobernardo.png" },
        { rank: 8, team: "Sport", MP: 17, MW: 6, MD: 8, ML: 3, GF: 21, GA: 15, logo: "brazil/sport.png" },
        { rank: 9, team: "Goiás", MP: 17, MW: 7, MD: 4, ML: 6, GF: 18, GA: 23, logo: "brazil/goias.png" },
        { rank: 10, team: "Atlético Goianiense", MP: 17, MW: 6, MD: 6, ML: 5, GF: 19, GA: 19, logo: "brazil/atleticogoianiense.png" },
        { rank: 11, team: "Cuiabá", MP: 17, MW: 5, MD: 9, ML: 3, GF: 14, GA: 11, logo: "brazil/cuiaba.png" },
        { rank: 12, team: "Athletic (MG)", MP: 17, MW: 5, MD: 8, ML: 4, GF: 16, GA: 16, logo: "brazil/athleticmg.png" },
        { rank: 13, team: "Náutico", MP: 17, MW: 6, MD: 3, ML: 8, GF: 21, GA: 21, logo: "brazil/nautico.png" },
        { rank: 14, team: "Botafogo", MP: 17, MW: 5, MD: 5, ML: 7, GF: 20, GA: 18, logo: "brazil/botafogosp.png" },
        { rank: 15, team: "CRB", MP: 17, MW: 5, MD: 5, ML: 7, GF: 26, GA: 31, logo: "brazil/crb.png" },
        { rank: 16, team: "Londrina", MP: 17, MW: 5, MD: 4, ML: 8, GF: 25, GA: 25, logo: "brazil/londrina.png" },
        { rank: 17, team: "Ceará", MP: 17, MW: 4, MD: 6, ML: 7, GF: 15, GA: 20, logo: "brazil/ceara.png" },
        { rank: 18, team: "Avaí", MP: 17, MW: 4, MD: 4, ML: 9, GF: 18, GA: 24, logo: "brazil/avai.png" },
        { rank: 19, team: "Ponte Preta", MP: 17, MW: 2, MD: 2, ML: 13, GF: 11, GA: 33, logo: "brazil/pontepreta.png" },
        { rank: 20, team: "América-MG", MP: 17, MW: 1, MD: 4, ML: 12, GF: 11, GA: 28, logo: "brazil/americamg.png" }
    ],
    fixtures: [
        // Matchday 19 - July 21-24
        { home: "Vila Nova", away: "Fortaleza", date: "2026-07-22" },
        { home: "Operário Ferroviário", away: "Ponte Preta", date: "2026-07-22" },
        { home: "Ceará", away: "CRB", date: "2026-07-22" },
        { home: "Goiás", away: "Sport", date: "2026-07-23" },
        { home: "Náutico", away: "Londrina", date: "2026-07-23" },
        { home: "Athletic (MG)", away: "São Bernardo", date: "2026-07-23" },
        { home: "Cuiabá", away: "Atlético Goianiense", date: "2026-07-24" },
        { home: "Botafogo", away: "Juventude", date: "2026-07-24" }
    ]
},
"English Premier League": {
    id: "epl",
    logo: "england/epl.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Arsenal", MP: 38, MW: 26, MD: 7, ML: 5, GF: 71, GA: 27, logo: "epllogo/arsenallogo.png" },
        { rank: 2, team: "Man City", MP: 38, MW: 23, MD: 9, ML: 6, GF: 77, GA: 35, logo: "epllogo/mancitylogo.png" },
        { rank: 3, team: "Man United", MP: 38, MW: 20, MD: 11, ML: 7, GF: 69, GA: 50, logo: "epllogo/manutdlogo.png" },
        { rank: 4, team: "Aston Villa", MP: 38, MW: 19, MD: 8, ML: 11, GF: 56, GA: 49, logo: "epllogo/astonvillalogo.png" },
        { rank: 5, team: "Liverpool", MP: 38, MW: 17, MD: 9, ML: 12, GF: 63, GA: 53, logo: "epllogo/liverpoollogo.png" },
        { rank: 6, team: "Bournemouth", MP: 38, MW: 13, MD: 18, ML: 7, GF: 58, GA: 54, logo: "epllogo/bournemouthlogo.png" },
        { rank: 7, team: "Sunderland", MP: 38, MW: 14, MD: 12, ML: 12, GF: 42, GA: 48, logo: "epllogo/sunderlandlogo.png" },
        { rank: 8, team: "Brighton", MP: 38, MW: 14, MD: 11, ML: 13, GF: 52, GA: 46, logo: "epllogo/brightonlogo.png" },
        { rank: 9, team: "Brentford", MP: 38, MW: 14, MD: 11, ML: 13, GF: 55, GA: 52, logo: "epllogo/brentfordlogo.png" },
        { rank: 10, team: "Chelsea", MP: 38, MW: 14, MD: 10, ML: 14, GF: 58, GA: 52, logo: "epllogo/chelsealogo.png" },
        { rank: 11, team: "Fulham", MP: 38, MW: 15, MD: 7, ML: 16, GF: 47, GA: 51, logo: "epllogo/fulhamlogo.png" },
        { rank: 12, team: "Newcastle", MP: 38, MW: 14, MD: 7, ML: 17, GF: 53, GA: 55, logo: "epllogo/newcastlelogo.png" },
        { rank: 13, team: "Everton", MP: 38, MW: 13, MD: 10, ML: 15, GF: 47, GA: 50, logo: "epllogo/evertonlogo.png" },
        { rank: 14, team: "Leeds", MP: 38, MW: 11, MD: 14, ML: 13, GF: 49, GA: 56, logo: "epllogo/leedslogo.png" },
        { rank: 15, team: "Palace", MP: 38, MW: 11, MD: 12, ML: 15, GF: 41, GA: 51, logo: "epllogo/palacelogo.png" },
        { rank: 16, team: "Nottm Forest", MP: 38, MW: 11, MD: 11, ML: 16, GF: 48, GA: 51, logo: "epllogo/nottmforestlogo.png" },
        { rank: 17, team: "Spurs", MP: 38, MW: 10, MD: 11, ML: 17, GF: 48, GA: 57, logo: "epllogo/spurslogo.png" },
        { rank: 18, team: "West Ham", MP: 38, MW: 10, MD: 9, ML: 19, GF: 46, GA: 65, logo: "epllogo/westhamlogo.png" },
        { rank: 19, team: "Burnley", MP: 38, MW: 4, MD: 10, ML: 24, GF: 38, GA: 75, logo: "epllogo/burnleylogo.png" },
        { rank: 20, team: "Wolves", MP: 38, MW: 3, MD: 11, ML: 24, GF: 27, GA: 68, logo: "epllogo/wolveslogo.png" }
    ],
    fixtures: [
        // Matchday 1 - August 21-24
        { home: "Arsenal", away: "Coventry", date: "2026-08-21" },
        { home: "Hull", away: "Man United", date: "2026-08-22" },
        { home: "Ipswich Town", away: "Sunderland", date: "2026-08-22" },
        { home: "Everton", away: "Palace", date: "2026-08-22" },
        { home: "Nottm Forest", away: "Leeds", date: "2026-08-22" },
        { home: "Brentford", away: "Spurs", date: "2026-08-22" },
        { home: "Man City", away: "Bournemouth", date: "2026-08-23" },
        { home: "Brighton", away: "Aston Villa", date: "2026-08-23" },
        { home: "Newcastle", away: "Liverpool", date: "2026-08-23" },
        { home: "Fulham", away: "Chelsea", date: "2026-08-24" }
    ]
},

"Ecuador Liga Pro": {
    id: "ecuador-liga-pro",
    logo: "ecuador/ligapro.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Ind. del Valle", MP: 18, MW: 14, MD: 1, ML: 3, GF: 40, GA: 19, logo: "ecuador/inddelvalle.png" },
        { rank: 2, team: "Aucas", MP: 18, MW: 9, MD: 5, ML: 4, GF: 21, GA: 16, logo: "ecuador/aucas.png" },
        { rank: 3, team: "Barcelona SC", MP: 19, MW: 8, MD: 7, ML: 4, GF: 21, GA: 14, logo: "ecuador/barcelona.png" },
        { rank: 4, team: "U. Catolica", MP: 19, MW: 8, MD: 5, ML: 6, GF: 29, GA: 18, logo: "ecuador/ucatolica.png" },
        { rank: 5, team: "Macara", MP: 19, MW: 8, MD: 5, ML: 6, GF: 20, GA: 19, logo: "ecuador/macara.png" },
        { rank: 6, team: "LDU Quito", MP: 19, MW: 8, MD: 4, ML: 7, GF: 19, GA: 15, logo: "ecuador/lduquito.png" },
        { rank: 7, team: "Dep. Cuenca", MP: 19, MW: 8, MD: 4, ML: 7, GF: 19, GA: 21, logo: "ecuador/depcuenca.png" },
        { rank: 8, team: "Leones del Norte", MP: 19, MW: 6, MD: 6, ML: 7, GF: 20, GA: 20, logo: "ecuador/leones.png" },
        { rank: 9, team: "Emelec", MP: 18, MW: 6, MD: 6, ML: 6, GF: 14, GA: 17, logo: "ecuador/emelec.png" },
        { rank: 10, team: "Tecnico U.", MP: 19, MW: 7, MD: 2, ML: 10, GF: 19, GA: 20, logo: "ecuador/tecnico.png" },
        { rank: 11, team: "Orense", MP: 18, MW: 6, MD: 5, ML: 7, GF: 22, GA: 24, logo: "ecuador/orense.png" },
        { rank: 12, team: "Guayaquil City", MP: 19, MW: 6, MD: 5, ML: 8, GF: 17, GA: 22, logo: "ecuador/guayaquilcity.png" },
        { rank: 13, team: "Mushuc Runa", MP: 19, MW: 5, MD: 6, ML: 8, GF: 24, GA: 29, logo: "ecuador/mushucruna.png" },
        { rank: 14, team: "Libertad", MP: 19, MW: 5, MD: 6, ML: 8, GF: 18, GA: 25, logo: "ecuador/libertad.png" },
        { rank: 15, team: "Delfin", MP: 19, MW: 5, MD: 5, ML: 9, GF: 11, GA: 18, logo: "ecuador/delfin.png" },
        { rank: 16, team: "Manta", MP: 19, MW: 3, MD: 4, ML: 12, GF: 7, GA: 24, logo: "ecuador/manta.png" }
    ],
    fixtures: [
        { home: "U. Catolica", away: "Barcelona SC", date: "2026-07-22" },
        { home: "Macara", away: "Dep. Cuenca", date: "2026-07-22" },
        { home: "Ind. del Valle", away: "Tecnico U.", date: "2026-07-22" },
        { home: "Manta", away: "LDU Quito", date: "2026-07-23" },
        { home: "Leones del Norte", away: "Guayaquil City", date: "2026-07-23" },
        { home: "Orense", away: "Aucas", date: "2026-07-23" },
        { home: "Emelec", away: "Mushuc Runa", date: "2026-07-24" }
    ]
},
"German Bundesliga": {
    id: "bundesliga",
    logo: "germany/bundesliga.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Bayern", MP: 34, MW: 28, MD: 5, ML: 1, GF: 122, GA: 36, logo: "germany/bayern.png" },
        { rank: 2, team: "Dortmund", MP: 34, MW: 22, MD: 7, ML: 5, GF: 70, GA: 34, logo: "germany/dortmund.png" },
        { rank: 3, team: "RB Leipzig", MP: 34, MW: 20, MD: 5, ML: 9, GF: 66, GA: 47, logo: "germany/rbleipzig.png" },
        { rank: 4, team: "VfB Stuttgart", MP: 34, MW: 18, MD: 8, ML: 8, GF: 71, GA: 49, logo: "germany/stuttgart.png" },
        { rank: 5, team: "Hoffenheim", MP: 34, MW: 18, MD: 7, ML: 9, GF: 65, GA: 52, logo: "germany/hoffenheim.png" },
        { rank: 6, team: "Leverkusen", MP: 34, MW: 17, MD: 8, ML: 9, GF: 68, GA: 47, logo: "germany/leverkusen.png" },
        { rank: 7, team: "Freiburg", MP: 34, MW: 13, MD: 8, ML: 13, GF: 51, GA: 57, logo: "germany/freiburg.png" },
        { rank: 8, team: "Eintracht Frankfurt", MP: 34, MW: 11, MD: 11, ML: 12, GF: 61, GA: 65, logo: "germany/frankfurt.png" },
        { rank: 9, team: "Augsburg", MP: 34, MW: 12, MD: 7, ML: 15, GF: 45, GA: 61, logo: "germany/augsburg.png" },
        { rank: 10, team: "Mainz", MP: 34, MW: 10, MD: 10, ML: 14, GF: 44, GA: 53, logo: "germany/mainz.png" },
        { rank: 11, team: "Union Berlin", MP: 34, MW: 10, MD: 9, ML: 15, GF: 44, GA: 58, logo: "germany/unionberlin.png" },
        { rank: 12, team: "Mönchengladbach", MP: 34, MW: 9, MD: 11, ML: 14, GF: 42, GA: 53, logo: "germany/monchengladbach.png" },
        { rank: 13, team: "Hamburg", MP: 34, MW: 9, MD: 11, ML: 14, GF: 40, GA: 54, logo: "germany/hamburg.png" },
        { rank: 14, team: "Köln", MP: 34, MW: 7, MD: 11, ML: 16, GF: 49, GA: 63, logo: "germany/koln.png" },
        { rank: 15, team: "Werder", MP: 34, MW: 8, MD: 8, ML: 18, GF: 37, GA: 60, logo: "germany/werder.png" },
        { rank: 16, team: "Wolfsburg", MP: 34, MW: 7, MD: 8, ML: 19, GF: 45, GA: 69, logo: "germany/wolfsburg.png" },
        { rank: 17, team: "Heidenheim", MP: 34, MW: 6, MD: 8, ML: 20, GF: 41, GA: 72, logo: "germany/heidenheim.png" },
        { rank: 18, team: "St. Pauli", MP: 34, MW: 6, MD: 8, ML: 20, GF: 29, GA: 60, logo: "germany/stpauli.png" }
    ],
    fixtures: [
        // Matchday 1 - August 28-30
        { home: "Bayern", away: "VfB Stuttgart", date: "2026-08-28" },
        { home: "RB Leipzig", away: "Mönchengladbach", date: "2026-08-29" },
        { home: "Mainz", away: "Paderborn", date: "2026-08-29" },
        { home: "Köln", away: "Hoffenheim", date: "2026-08-29" },
        { home: "Union Berlin", away: "Eintracht Frankfurt", date: "2026-08-29" },
        { home: "SV Elversberg", away: "Leverkusen", date: "2026-08-29" },
        { home: "Dortmund", away: "Hamburg", date: "2026-08-29" },
        { home: "Freiburg", away: "Werder", date: "2026-08-30" },
        { home: "Augsburg", away: "Schalke", date: "2026-08-30" }
    ]
},

"English Championship": {
    id: "championship",
    logo: "england/championship.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Coventry", MP: 46, MW: 28, MD: 11, ML: 7, GF: 97, GA: 45, logo: "efl1/coventrylogo.png" },
        { rank: 2, team: "Ipswich Town", MP: 46, MW: 23, MD: 15, ML: 8, GF: 80, GA: 47, logo: "efl1/ipswichlogo.png" },
        { rank: 3, team: "Millwall", MP: 46, MW: 24, MD: 11, ML: 11, GF: 64, GA: 49, logo: "efl1/millwalllogo.png" },
        { rank: 4, team: "Southampton", MP: 46, MW: 22, MD: 14, ML: 10, GF: 82, GA: 56, logo: "efl1/southamptonlogo.png" },
        { rank: 5, team: "Middlesbrough", MP: 46, MW: 22, MD: 14, ML: 10, GF: 72, GA: 47, logo: "efl1/middlesbroughlogo.png" },
        { rank: 6, team: "Hull", MP: 46, MW: 21, MD: 10, ML: 15, GF: 70, GA: 66, logo: "efl1/hulllogo.png" },
        { rank: 7, team: "Wrexham", MP: 46, MW: 19, MD: 14, ML: 13, GF: 69, GA: 65, logo: "efl1/wrexhamlogo.png" },
        { rank: 8, team: "Derby County", MP: 46, MW: 20, MD: 9, ML: 17, GF: 67, GA: 59, logo: "efl1/derbylogo.png" },
        { rank: 9, team: "Norwich City", MP: 46, MW: 19, MD: 8, ML: 19, GF: 63, GA: 56, logo: "efl1/norwichlogo.png" },
        { rank: 10, team: "Birmingham", MP: 46, MW: 17, MD: 13, ML: 16, GF: 57, GA: 56, logo: "efl1/birminghamlogo.png" },
        { rank: 11, team: "Swansea", MP: 46, MW: 18, MD: 10, ML: 18, GF: 57, GA: 59, logo: "efl1/swansealogo.png" },
        { rank: 12, team: "Bristol City", MP: 46, MW: 17, MD: 11, ML: 18, GF: 59, GA: 59, logo: "efl1/bristollogo.png" },
        { rank: 13, team: "Sheffield United", MP: 46, MW: 18, MD: 6, ML: 22, GF: 66, GA: 66, logo: "efl1/sheffieldutdlogo.png" },
        { rank: 14, team: "Preston", MP: 46, MW: 15, MD: 15, ML: 16, GF: 55, GA: 62, logo: "efl1/prestonlogo.png" },
        { rank: 15, team: "QPR", MP: 46, MW: 16, MD: 10, ML: 20, GF: 61, GA: 73, logo: "efl1/qprlogo.png" },
        { rank: 16, team: "Watford", MP: 46, MW: 14, MD: 15, ML: 17, GF: 53, GA: 65, logo: "efl1/watfordlogo.png" },
        { rank: 17, team: "Stoke City", MP: 46, MW: 15, MD: 10, ML: 21, GF: 51, GA: 56, logo: "efl1/stokelogo.png" },
        { rank: 18, team: "Portsmouth", MP: 46, MW: 14, MD: 13, ML: 19, GF: 49, GA: 64, logo: "efl1/portsmouthlogo.png" },
        { rank: 19, team: "Charlton", MP: 46, MW: 13, MD: 14, ML: 19, GF: 44, GA: 58, logo: "efl1/charltonlogo.png" },
        { rank: 20, team: "Blackburn Rovers", MP: 46, MW: 13, MD: 13, ML: 20, GF: 42, GA: 56, logo: "efl1/blackburnlogo.png" },
        { rank: 21, team: "West Brom", MP: 46, MW: 13, MD: 14, ML: 19, GF: 48, GA: 58, logo: "efl1/westbromlogo.png" },
        { rank: 22, team: "Oxford Utd", MP: 46, MW: 11, MD: 14, ML: 21, GF: 45, GA: 59, logo: "efl1/oxfordlogo.png" },
        { rank: 23, team: "Leicester City", MP: 46, MW: 12, MD: 16, ML: 18, GF: 58, GA: 68, logo: "efl1/leicesterlogo.png" },
        { rank: 24, team: "Sheffield Wednesday", MP: 46, MW: 2, MD: 12, ML: 32, GF: 29, GA: 89, logo: "efl1/sheffieldwedlogo.png" }
    ],
    fixtures: [
        // Matchday 1 - August 14-17
		
        { home: "Bolton", away: "Preston", date: "2026-08-15" },
        { home: "Middlesbrough", away: "Lincoln City", date: "2026-08-15" },
        { home: "Portsmouth", away: "QPR", date: "2026-08-15" },
        { home: "Stoke City", away: "Swansea", date: "2026-08-15" },
        { home: "Norwich City", away: "West Brom", date: "2026-08-15" },
        { home: "Charlton", away: "Derby County", date: "2026-08-15" },
        { home: "Bristol City", away: "Millwall", date: "2026-08-15" },
        { home: "Sheffield United", away: "Birmingham", date: "2026-08-15" },
        { home: "Watford", away: "Southampton", date: "2026-08-16" },
        { home: "Burnley", away: "West Ham", date: "2026-08-16" },
        { home: "Cardiff City", away: "Wrexham", date: "2026-08-17" }
    ]
},

"English League One": {
    id: "league-one",
    logo: "england/leagueone.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Lincoln City", MP: 46, MW: 31, MD: 10, ML: 5, GF: 89, GA: 41, logo: "efl2/lincoln.png" },
        { rank: 2, team: "Cardiff City", MP: 46, MW: 27, MD: 10, ML: 9, GF: 90, GA: 50, logo: "efl2/cardiff.png" },
        { rank: 3, team: "Stockport", MP: 46, MW: 22, MD: 11, ML: 13, GF: 71, GA: 58, logo: "efl2/stockportlogo.png" },
        { rank: 4, team: "Bradford City", MP: 46, MW: 22, MD: 11, ML: 13, GF: 58, GA: 51, logo: "efl2/bradfordlogo.png" },
        { rank: 5, team: "Bolton", MP: 46, MW: 19, MD: 18, ML: 9, GF: 70, GA: 52, logo: "efl2/boltonlogo.png" },
        { rank: 6, team: "Stevenage", MP: 46, MW: 21, MD: 12, ML: 13, GF: 49, GA: 46, logo: "efl2/stevenagelogo.png" },
        { rank: 7, team: "Luton Town", MP: 46, MW: 21, MD: 11, ML: 14, GF: 68, GA: 56, logo: "efl2/lutonlogo.png" },
        { rank: 8, team: "Plymouth", MP: 46, MW: 22, MD: 7, ML: 17, GF: 75, GA: 63, logo: "efl2/plymouthlogo.png" },
        { rank: 9, team: "Huddersfield", MP: 46, MW: 18, MD: 13, ML: 15, GF: 74, GA: 64, logo: "efl2/huddersfieldlogo.png" },
        { rank: 10, team: "Mansfield Town", MP: 46, MW: 16, MD: 17, ML: 13, GF: 62, GA: 50, logo: "efl2/mansfieldlogo.png" },
        { rank: 11, team: "Wycombe", MP: 46, MW: 17, MD: 12, ML: 17, GF: 69, GA: 58, logo: "efl2/wycombelogo.png" },
        { rank: 12, team: "Reading", MP: 46, MW: 16, MD: 15, ML: 15, GF: 64, GA: 60, logo: "efl2/readinglogo.png" },
        { rank: 13, team: "Blackpool", MP: 46, MW: 17, MD: 9, ML: 20, GF: 54, GA: 65, logo: "efl2/blackpoollogo.png" },
        { rank: 14, team: "Doncaster", MP: 46, MW: 17, MD: 9, ML: 20, GF: 50, GA: 69, logo: "efl2/doncasterlogo.png" },
        { rank: 15, team: "Barnsley", MP: 46, MW: 15, MD: 14, ML: 17, GF: 68, GA: 73, logo: "efl2/barnsleylogo.png" },
        { rank: 16, team: "Wigan Athletic", MP: 46, MW: 14, MD: 14, ML: 18, GF: 49, GA: 58, logo: "efl2/wiganlogo.png" },
        { rank: 17, team: "Burton", MP: 46, MW: 13, MD: 15, ML: 18, GF: 50, GA: 60, logo: "efl2/burtonlogo.png" },
        { rank: 18, team: "Peterborough", MP: 46, MW: 15, MD: 8, ML: 23, GF: 64, GA: 68, logo: "efl2/peterboroughlogo.png" },
        { rank: 19, team: "AFC Wimbledon", MP: 46, MW: 15, MD: 8, ML: 23, GF: 51, GA: 72, logo: "efl2/afcwimbledonlogo.png" },
        { rank: 20, team: "Leyton Orient", MP: 46, MW: 14, MD: 10, ML: 22, GF: 59, GA: 71, logo: "efl2/leytonorientlogo.png" },
        { rank: 21, team: "Exeter City", MP: 46, MW: 12, MD: 13, ML: 21, GF: 52, GA: 61, logo: "efl2/exeterlogo.png" },
        { rank: 22, team: "Port Vale", MP: 46, MW: 10, MD: 12, ML: 24, GF: 36, GA: 61, logo: "efl2/portvalelogo.png" },
        { rank: 23, team: "Rotherham", MP: 46, MW: 10, MD: 11, ML: 25, GF: 41, GA: 71, logo: "efl2/rotherhamlogo.png" },
        { rank: 24, team: "Northampton Town", MP: 46, MW: 9, MD: 8, ML: 29, GF: 39, GA: 74, logo: "efl2/northamptonlogo.png" }
    ],
    fixtures: [
        // Matchday 1 - August 15
        { home: "Reading", away: "Luton Town", date: "2026-08-15" },
        { home: "Oxford Utd", away: "MK Dons", date: "2026-08-15" },
        { home: "Notts County", away: "Leicester City", date: "2026-08-15" },
        { home: "Cambridge United", away: "Wigan Athletic", date: "2026-08-15" },
        { home: "Barnsley", away: "Bromley", date: "2026-08-15" },
        { home: "Leyton Orient", away: "Sheffield Wednesday", date: "2026-08-15" },
        { home: "Huddersfield", away: "AFC Wimbledon", date: "2026-08-15" },
        { home: "Blackpool", away: "Wycombe", date: "2026-08-15" },
        { home: "Bradford City", away: "Peterborough", date: "2026-08-15" },
        { home: "Plymouth", away: "Stockport", date: "2026-08-15" },
        { home: "Mansfield Town", away: "Doncaster", date: "2026-08-15" },
        { home: "Burton", away: "Stevenage", date: "2026-08-15" }
    ]
},

"English League Two": {
    id: "league-two",
    logo: "england/leaguetwo.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Bromley", MP: 46, MW: 24, MD: 15, ML: 7, GF: 71, GA: 46, logo: "efl3/bromleylogo.png" },
        { rank: 2, team: "MK Dons", MP: 46, MW: 24, MD: 14, ML: 8, GF: 86, GA: 45, logo: "efl3/mkdonslogo.png" },
        { rank: 3, team: "Cambridge United", MP: 46, MW: 22, MD: 16, ML: 8, GF: 66, GA: 33, logo: "efl3/cambridgelogo.png" },
        { rank: 4, team: "Salford City", MP: 46, MW: 25, MD: 6, ML: 15, GF: 61, GA: 51, logo: "efl3/salfordlogo.png" },
        { rank: 5, team: "Notts County", MP: 46, MW: 24, MD: 8, ML: 14, GF: 74, GA: 52, logo: "efl3/nottscountylogo.png" },
        { rank: 6, team: "Chesterfield", MP: 46, MW: 21, MD: 16, ML: 9, GF: 71, GA: 56, logo: "efl3/chesterfieldlogo.png" },
        { rank: 7, team: "Grimsby Town", MP: 46, MW: 22, MD: 12, ML: 12, GF: 74, GA: 50, logo: "efl3/grimsbylogo.png" },
        { rank: 8, team: "Barnet", MP: 46, MW: 21, MD: 13, ML: 12, GF: 70, GA: 53, logo: "efl3/barnetlogo.png" },
        { rank: 9, team: "Swindon Town", MP: 46, MW: 22, MD: 9, ML: 15, GF: 70, GA: 59, logo: "efl3/swindonlogo.png" },
        { rank: 10, team: "Oldham Athletic", MP: 46, MW: 18, MD: 14, ML: 14, GF: 60, GA: 44, logo: "efl3/oldhamlogo.png" },
        { rank: 11, team: "Crewe Alexandra", MP: 46, MW: 19, MD: 10, ML: 17, GF: 64, GA: 58, logo: "efl3/crewelogo.png" },
        { rank: 12, team: "Colchester", MP: 46, MW: 18, MD: 12, ML: 16, GF: 62, GA: 49, logo: "efl3/colchesterlogo.png" },
        { rank: 13, team: "Walsall", MP: 46, MW: 18, MD: 11, ML: 17, GF: 56, GA: 56, logo: "efl3/walsalllogo.png" },
        { rank: 14, team: "Bristol Rovers", MP: 46, MW: 19, MD: 5, ML: 22, GF: 56, GA: 65, logo: "efl3/bristolroverslogo.png" },
        { rank: 15, team: "Fleetwood", MP: 46, MW: 15, MD: 16, ML: 15, GF: 57, GA: 58, logo: "efl3/fleetwoodlogo.png" },
        { rank: 16, team: "Accrington Stanley", MP: 46, MW: 14, MD: 11, ML: 21, GF: 47, GA: 58, logo: "efl3/accringtonlogo.png" },
        { rank: 17, team: "Gillingham", MP: 46, MW: 13, MD: 14, ML: 19, GF: 53, GA: 72, logo: "efl3/gillinghamlogo.png" },
        { rank: 18, team: "Cheltenham", MP: 46, MW: 14, MD: 10, ML: 22, GF: 53, GA: 79, logo: "efl3/cheltenhamlogo.png" },
        { rank: 19, team: "Shrewsbury", MP: 46, MW: 13, MD: 10, ML: 23, GF: 42, GA: 69, logo: "efl3/shrewsburylogo.png" },
        { rank: 20, team: "Newport County", MP: 46, MW: 12, MD: 7, ML: 27, GF: 48, GA: 77, logo: "efl3/newportlogo.png" },
        { rank: 21, team: "Tranmere", MP: 46, MW: 10, MD: 11, ML: 25, GF: 54, GA: 79, logo: "efl3/tranmerelogo.png" },
        { rank: 22, team: "Crawley Town", MP: 46, MW: 8, MD: 16, ML: 22, GF: 44, GA: 68, logo: "efl3/crawleylogo.png" },
        { rank: 23, team: "Harrogate Town", MP: 46, MW: 10, MD: 9, ML: 27, GF: 39, GA: 68, logo: "efl3/harrogatelogo.png" },
        { rank: 24, team: "Barrow", MP: 46, MW: 9, MD: 9, ML: 28, GF: 45, GA: 78, logo: "efl3/barrowlogo.png" }
    ],
    fixtures: [
        // Matchday 1 - August 15
        { home: "Newport County", away: "Rochdale", date: "2026-08-15" },
        { home: "Oldham Athletic", away: "Port Vale", date: "2026-08-15" },
        { home: "Barnet", away: "Salford City", date: "2026-08-15" },
        { home: "Grimsby Town", away: "Exeter City", date: "2026-08-15" },
        { home: "Gillingham", away: "Walsall", date: "2026-08-15" },
        { home: "Accrington Stanley", away: "Colchester", date: "2026-08-15" },
        { home: "York City", away: "Bristol Rovers", date: "2026-08-15" },
        { home: "Chesterfield", away: "Fleetwood", date: "2026-08-15" },
        { home: "Northampton Town", away: "Swindon Town", date: "2026-08-15" },
        { home: "Crawley Town", away: "Crewe Alexandra", date: "2026-08-15" },
        { home: "Tranmere", away: "Shrewsbury", date: "2026-08-15" },
        { home: "Cheltenham", away: "Rotherham", date: "2026-08-15" }
    ]
},

"German Bundesliga 2": {
    id: "bundesliga-2",
    logo: "germany/bundesliga2.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Schalke", MP: 34, MW: 21, MD: 7, ML: 6, GF: 50, GA: 31, logo: "germany/schalke.png" },
        { rank: 2, team: "SV Elversberg", MP: 34, MW: 18, MD: 8, ML: 8, GF: 64, GA: 39, logo: "germany/elversberg.png" },
        { rank: 3, team: "Paderborn", MP: 34, MW: 18, MD: 8, ML: 8, GF: 59, GA: 45, logo: "germany/paderborn.png" },
        { rank: 4, team: "Hannover 96", MP: 34, MW: 16, MD: 12, ML: 6, GF: 60, GA: 44, logo: "germany/hannover.png" },
        { rank: 5, team: "Darmstadt", MP: 34, MW: 13, MD: 13, ML: 8, GF: 57, GA: 45, logo: "germany/darmstadt.png" },
        { rank: 6, team: "1. FCK", MP: 34, MW: 16, MD: 4, ML: 14, GF: 52, GA: 47, logo: "germany/fck.png" },
        { rank: 7, team: "Hertha", MP: 34, MW: 14, MD: 9, ML: 11, GF: 47, GA: 44, logo: "germany/hertha.png" },
        { rank: 8, team: "Nürnberg", MP: 34, MW: 12, MD: 10, ML: 12, GF: 47, GA: 45, logo: "germany/nurnberg.png" },
        { rank: 9, team: "Bochum", MP: 34, MW: 11, MD: 11, ML: 12, GF: 49, GA: 47, logo: "germany/bochum.png" },
        { rank: 10, team: "Karlsruher", MP: 34, MW: 12, MD: 8, ML: 14, GF: 53, GA: 64, logo: "germany/karlsruher.png" },
        { rank: 11, team: "Dynamo", MP: 34, MW: 11, MD: 8, ML: 15, GF: 54, GA: 53, logo: "germany/dynamo.png" },
        { rank: 12, team: "Holstein Kiel", MP: 34, MW: 11, MD: 8, ML: 15, GF: 44, GA: 48, logo: "germany/holsteinkiel.png" },
        { rank: 13, team: "Arminia", MP: 34, MW: 10, MD: 9, ML: 15, GF: 53, GA: 51, logo: "germany/arminia.png" },
        { rank: 14, team: "1. FC Magdeburg", MP: 34, MW: 12, MD: 3, ML: 19, GF: 52, GA: 58, logo: "germany/magdeburg.png" },
        { rank: 15, team: "Eintracht Braunschweig", MP: 34, MW: 10, MD: 7, ML: 17, GF: 36, GA: 54, logo: "germany/braunschweig.png" },
        { rank: 16, team: "Fürth", MP: 34, MW: 10, MD: 7, ML: 17, GF: 49, GA: 68, logo: "germany/furth.png" },
        { rank: 17, team: "Düsseldorf", MP: 34, MW: 11, MD: 4, ML: 19, GF: 33, GA: 53, logo: "germany/dusseldorf.png" },
        { rank: 18, team: "Preußen Münster", MP: 34, MW: 6, MD: 12, ML: 16, GF: 38, GA: 61, logo: "germany/munster.png" }
    ],
    fixtures: [
        // Matchday 1 - August 7-9
        { home: "Bochum", away: "Hertha", date: "2026-08-07" },
        { home: "Heidenheim", away: "Osnabrück", date: "2026-08-08" },
        { home: "Karlsruher", away: "Arminia", date: "2026-08-08" },
        { home: "1. FC Magdeburg", away: "Eintracht Braunschweig", date: "2026-08-08" },
        { home: "Darmstadt", away: "Holstein Kiel", date: "2026-08-08" },
        { home: "Wolfsburg", away: "1. FCK", date: "2026-08-08" },
        { home: "Energie Cottbus", away: "Hannover 96", date: "2026-08-09" },
        { home: "St. Pauli", away: "Fürth", date: "2026-08-09" }
    ]
},

"Chilean Primera División": {
    id: "chile",
    logo: "chile/chile.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Colo-Colo", MP: 15, MW: 12, MD: 0, ML: 3, GF: 29, GA: 12, logo: "chile/colocolo.png" },
        { rank: 2, team: "Universidad Católica", MP: 15, MW: 8, MD: 2, ML: 5, GF: 35, GA: 20, logo: "chile/ucatolica.png" },
        { rank: 3, team: "Universidad de Chile", MP: 15, MW: 6, MD: 6, ML: 3, GF: 17, GA: 10, logo: "chile/uchile.png" },
        { rank: 4, team: "Coquimbo", MP: 15, MW: 7, MD: 3, ML: 5, GF: 22, GA: 18, logo: "chile/coquimbo.png" },
        { rank: 5, team: "Palestino", MP: 15, MW: 7, MD: 3, ML: 5, GF: 23, GA: 21, logo: "chile/palestino.png" },
        { rank: 6, team: "Huachipato", MP: 15, MW: 7, MD: 2, ML: 6, GF: 23, GA: 22, logo: "chile/huachipato.png" },
        { rank: 7, team: "Everton", MP: 15, MW: 6, MD: 4, ML: 5, GF: 19, GA: 15, logo: "chile/everton.png" },
        { rank: 8, team: "Ñublense", MP: 15, MW: 5, MD: 7, ML: 3, GF: 18, GA: 19, logo: "chile/nublense.png" },
        { rank: 9, team: "Deportes Limache", MP: 15, MW: 6, MD: 3, ML: 6, GF: 30, GA: 23, logo: "chile/limache.png" },
        { rank: 10, team: "O'Higgins", MP: 15, MW: 6, MD: 2, ML: 7, GF: 19, GA: 22, logo: "chile/ohiggins.png" },
        { rank: 11, team: "Universidad de Concepción", MP: 15, MW: 5, MD: 4, ML: 6, GF: 13, GA: 26, logo: "chile/uconcepcion.png" },
        { rank: 12, team: "La Serena", MP: 15, MW: 4, MD: 6, ML: 5, GF: 21, GA: 25, logo: "chile/laserena.png" },
        { rank: 13, team: "Audax Italiano", MP: 15, MW: 4, MD: 4, ML: 7, GF: 18, GA: 21, logo: "chile/audax.png" },
        { rank: 14, team: "Concepción", MP: 15, MW: 4, MD: 2, ML: 9, GF: 14, GA: 23, logo: "chile/concepcion.png" },
        { rank: 15, team: "Cobresal", MP: 15, MW: 4, MD: 1, ML: 10, GF: 19, GA: 29, logo: "chile/cobresal.png" },
        { rank: 16, team: "Unión La Calera", MP: 15, MW: 3, MD: 3, ML: 9, GF: 14, GA: 28, logo: "chile/unionlacalera.png" }
    ],
    fixtures: [
        // Matchday 17 - July 25-27
        { home: "Coquimbo", away: "Universidad de Concepción", date: "2026-07-25" },
        { home: "Huachipato", away: "Cobresal", date: "2026-07-25" },
        { home: "Universidad Católica", away: "La Serena", date: "2026-07-26" },
        { home: "Palestino", away: "Ñublense", date: "2026-07-26" },
        { home: "Audax Italiano", away: "Universidad de Chile", date: "2026-07-26" },
        { home: "Colo-Colo", away: "Deportes Limache", date: "2026-07-26" },
        { home: "Unión La Calera", away: "Everton", date: "2026-07-26" },
        { home: "Concepción", away: "O'Higgins", date: "2026-07-27" }
    ]
},

"French Ligue 1": {
    id: "ligue-1",
    logo: "france/ligue1.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "PSG", MP: 34, MW: 24, MD: 4, ML: 6, GF: 74, GA: 29, logo: "frenchligue1/psglogo.png" },
        { rank: 2, team: "Lens", MP: 34, MW: 22, MD: 4, ML: 8, GF: 66, GA: 35, logo: "frenchligue1/lenslogo.png" },
        { rank: 3, team: "LOSC", MP: 34, MW: 18, MD: 7, ML: 9, GF: 52, GA: 37, logo: "frenchligue1/losclogo.png" },
        { rank: 4, team: "OL", MP: 34, MW: 18, MD: 6, ML: 10, GF: 53, GA: 40, logo: "frenchligue1/ollogo.png" },
        { rank: 5, team: "Marseille", MP: 34, MW: 18, MD: 5, ML: 11, GF: 63, GA: 45, logo: "frenchligue1/marseillelogo.png" },
        { rank: 6, team: "Rennes", MP: 34, MW: 17, MD: 8, ML: 9, GF: 59, GA: 50, logo: "frenchligue1/renneslogo.png" },
        { rank: 7, team: "Monaco", MP: 34, MW: 16, MD: 6, ML: 12, GF: 60, GA: 54, logo: "frenchligue1/monacologo.png" },
        { rank: 8, team: "Strasbourg", MP: 34, MW: 15, MD: 8, ML: 11, GF: 58, GA: 47, logo: "frenchligue1/strasbourglogo.png" },
        { rank: 9, team: "Toulouse", MP: 34, MW: 12, MD: 9, ML: 13, GF: 47, GA: 46, logo: "frenchligue1/toulouselogo.png" },
        { rank: 10, team: "Lorient", MP: 34, MW: 11, MD: 12, ML: 11, GF: 48, GA: 51, logo: "frenchligue1/lorientlogo.png" },
        { rank: 11, team: "Paris FC", MP: 34, MW: 11, MD: 11, ML: 12, GF: 47, GA: 50, logo: "frenchligue1/parisfclogo.png" },
        { rank: 12, team: "Brest", MP: 34, MW: 10, MD: 9, ML: 15, GF: 43, GA: 55, logo: "frenchligue1/brestlogo.png" },
        { rank: 13, team: "Angers", MP: 34, MW: 9, MD: 9, ML: 16, GF: 29, GA: 48, logo: "frenchligue1/angerslogo.png" },
        { rank: 14, team: "Le Havre", MP: 34, MW: 7, MD: 14, ML: 13, GF: 32, GA: 44, logo: "frenchligue1/lehavrelogo.png" },
        { rank: 15, team: "Auxerre", MP: 34, MW: 8, MD: 10, ML: 16, GF: 34, GA: 44, logo: "frenchligue1/auxerrelogo.png" },
        { rank: 16, team: "Nice", MP: 34, MW: 7, MD: 11, ML: 16, GF: 37, GA: 60, logo: "frenchligue1/nicelogo.png" },
        { rank: 17, team: "Nantes", MP: 34, MW: 5, MD: 9, ML: 20, GF: 29, GA: 52, logo: "frenchligue1/nanteslogo.png" },
        { rank: 18, team: "Metz", MP: 34, MW: 3, MD: 8, ML: 23, GF: 32, GA: 76, logo: "frenchligue1/metzlogo.png" }
    ],
    fixtures: [
        // Matchday 1 - August 22
        { home: "Troyes", away: "Paris FC", date: "2026-08-22" },
        { home: "Marseille", away: "Strasbourg", date: "2026-08-22" },
        { home: "Le Mans", away: "Brest", date: "2026-08-22" },
        { home: "Nice", away: "Lorient", date: "2026-08-22" },
        { home: "Lens", away: "Auxerre", date: "2026-08-22" },
        { home: "Toulouse", away: "OL", date: "2026-08-22" },
        { home: "Le Havre", away: "Monaco", date: "2026-08-22" },
        { home: "Angers", away: "LOSC", date: "2026-08-22" }
    ]
},


"Scotland Premiership": {
    id: "scotland-premiership",
    logo: "scotland/premiership.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Hearts", MP: 33, MW: 21, MD: 7, ML: 5, GF: 58, GA: 28, logo: "scottishpremierleague/heartslogo.png" },
        { rank: 2, team: "Rangers", MP: 33, MW: 19, MD: 12, ML: 2, GF: 66, GA: 31, logo: "scottishpremierleague/rangerslogo.png" },
        { rank: 3, team: "Celtic", MP: 33, MW: 21, MD: 4, ML: 8, GF: 59, GA: 35, logo: "scottishpremierleague/celticlogo.png" },
        { rank: 4, team: "Motherwell", MP: 33, MW: 14, MD: 12, ML: 7, GF: 52, GA: 29, logo: "scottishpremierleague/motherwelllogo.png" },
        { rank: 5, team: "Hibernian", MP: 33, MW: 13, MD: 12, ML: 8, GF: 51, GA: 37, logo: "scottishpremierleague/hibernianlogo.png" },
        { rank: 6, team: "Falkirk", MP: 33, MW: 13, MD: 7, ML: 13, GF: 45, GA: 48, logo: "scottishpremierleague/falkirklogo.png" },
        { rank: 7, team: "Dundee United", MP: 33, MW: 9, MD: 13, ML: 11, GF: 45, GA: 54, logo: "scottishpremierleague/dundeeutdlogo.png" },
        { rank: 8, team: "Aberdeen", MP: 33, MW: 9, MD: 6, ML: 18, GF: 33, GA: 48, logo: "scottishpremierleague/aberdeenlogo.png" },
        { rank: 9, team: "Dundee", MP: 33, MW: 8, MD: 9, ML: 16, GF: 34, GA: 53, logo: "scottishpremierleague/dundeelogo.png" },
        { rank: 10, team: "St. Mirren", MP: 33, MW: 7, MD: 9, ML: 17, GF: 27, GA: 48, logo: "scottishpremierleague/stmirrenlogo.png" },
        { rank: 11, team: "Kilmarnock", MP: 33, MW: 6, MD: 10, ML: 17, GF: 37, GA: 65, logo: "scottishpremierleague/kilmarnocklogo.png" },
        { rank: 12, team: "Livingston", MP: 33, MW: 1, MD: 13, ML: 19, GF: 35, GA: 66, logo: "scottishpremierleague/livingstonlogo.png" }
    ],
    fixtures: [
        // Matchday 1 - August 1-3
        { home: "Dundee United", away: "Rangers", date: "2026-08-01" },
        { home: "Falkirk", away: "St. Mirren", date: "2026-08-01" },
        { home: "Aberdeen", away: "Hearts", date: "2026-08-01" },
        { home: "St. Johnstone", away: "Kilmarnock", date: "2026-08-02" },
        { home: "Hibernian", away: "Motherwell", date: "2026-08-02" },
        { home: "Celtic", away: "Dundee", date: "2026-08-03" },
        
        // Matchday 2 - August 8-9
        { home: "Hearts", away: "Dundee United", date: "2026-08-08" },
        { home: "St. Mirren", away: "St. Johnstone", date: "2026-08-08" },
        { home: "Motherwell", away: "Falkirk", date: "2026-08-08" },
        { home: "Dundee", away: "Aberdeen", date: "2026-08-08" },
        { home: "Kilmarnock", away: "Celtic", date: "2026-08-09" },
        { home: "Rangers", away: "Hibernian", date: "2026-08-09" }
    ]
},
"Italy Serie A": {
    id: "serie-a",
    logo: "italy/seriea.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Inter", MP: 38, MW: 27, MD: 6, ML: 5, GF: 89, GA: 35, logo: "italianseriea/interlogo.png" },
        { rank: 2, team: "Napoli", MP: 38, MW: 23, MD: 7, ML: 8, GF: 58, GA: 36, logo: "italianseriea/napolilogo.png" },
        { rank: 3, team: "Roma", MP: 38, MW: 23, MD: 4, ML: 11, GF: 59, GA: 31, logo: "italianseriea/romalogo.png" },
        { rank: 4, team: "Como", MP: 38, MW: 20, MD: 11, ML: 7, GF: 65, GA: 29, logo: "italianseriea/comologo.png" },
        { rank: 5, team: "Milan", MP: 38, MW: 20, MD: 10, ML: 8, GF: 53, GA: 35, logo: "italianseriea/milanlogo.png" },
        { rank: 6, team: "Juventus", MP: 38, MW: 19, MD: 12, ML: 7, GF: 61, GA: 34, logo: "italianseriea/juventuslogo.png" },
        { rank: 7, team: "Atalanta", MP: 38, MW: 15, MD: 14, ML: 9, GF: 51, GA: 36, logo: "italianseriea/atalantalogo.png" },
        { rank: 8, team: "Bologna", MP: 38, MW: 16, MD: 8, ML: 14, GF: 49, GA: 46, logo: "italianseriea/bolognalogo.png" },
        { rank: 9, team: "Lazio", MP: 38, MW: 14, MD: 12, ML: 12, GF: 41, GA: 40, logo: "italianseriea/laziologo.png" },
        { rank: 10, team: "Udinese", MP: 38, MW: 14, MD: 8, ML: 16, GF: 45, GA: 48, logo: "italianseriea/udineselogo.png" },
        { rank: 11, team: "Sassuolo", MP: 38, MW: 14, MD: 7, ML: 17, GF: 46, GA: 50, logo: "italianseriea/sassuolologo.png" },
        { rank: 12, team: "Torino", MP: 38, MW: 12, MD: 9, ML: 17, GF: 44, GA: 63, logo: "italianseriea/torinologo.png" },
        { rank: 13, team: "Parma", MP: 38, MW: 11, MD: 12, ML: 15, GF: 28, GA: 46, logo: "italianseriea/parmalogo.png" },
        { rank: 14, team: "Cagliari", MP: 38, MW: 11, MD: 10, ML: 17, GF: 40, GA: 53, logo: "italianseriea/cagliarilogo.png" },
        { rank: 15, team: "Fiorentina", MP: 38, MW: 9, MD: 15, ML: 14, GF: 41, GA: 50, logo: "italianseriea/fiorentinalogo.png" },
        { rank: 16, team: "Genoa", MP: 38, MW: 10, MD: 11, ML: 17, GF: 41, GA: 51, logo: "italianseriea/genoalogo.png" },
        { rank: 17, team: "Lecce", MP: 38, MW: 10, MD: 8, ML: 20, GF: 28, GA: 50, logo: "italianseriea/leccelogo.png" },
        { rank: 18, team: "Cremonese", MP: 38, MW: 8, MD: 10, ML: 20, GF: 32, GA: 57, logo: "italianseriea/cremoneselogo.png" },
        { rank: 19, team: "Verona", MP: 38, MW: 3, MD: 12, ML: 23, GF: 25, GA: 61, logo: "italianseriea/veronalogo.png" },
        { rank: 20, team: "Pisa", MP: 38, MW: 2, MD: 12, ML: 24, GF: 26, GA: 71, logo: "italianseriea/pisalogo.png" }
    ],
    fixtures: [
        // Matchday 1 - August 22-24
        { home: "Udinese", away: "Como", date: "2026-08-22" },
        { home: "Inter", away: "Monza", date: "2026-08-22" },
        { home: "Parma", away: "Cagliari", date: "2026-08-22" },
        { home: "Genoa", away: "Napoli", date: "2026-08-22" },
        { home: "Venezia", away: "Lecce", date: "2026-08-23" },
        { home: "Frosinone", away: "Juventus", date: "2026-08-23" },
        { home: "Torino", away: "Milan", date: "2026-08-23" },
        { home: "Atalanta", away: "Sassuolo", date: "2026-08-23" },
        { home: "Bologna", away: "Lazio", date: "2026-08-24" },
        { home: "Roma", away: "Fiorentina", date: "2026-08-24" }
    ]
},
"French Ligue 2": {
    id: "ligue-2",
    logo: "france/ligue2.png",
    isBasketball: false,
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
        { rank: 14, team: "Nancy", MP: 34, MW: 9, MD: 10, ML: 15, GF: 35, GA: 52, logo: "france/nancy.png" },
        { rank: 15, team: "Boulogne", MP: 34, MW: 9, MD: 9, ML: 16, GF: 34, GA: 49, logo: "france/boulogne.png" },
        { rank: 16, team: "Laval", MP: 34, MW: 6, MD: 14, ML: 14, GF: 30, GA: 48, logo: "france/laval.png" },
        { rank: 17, team: "Bastia", MP: 34, MW: 5, MD: 13, ML: 16, GF: 23, GA: 39, logo: "france/bastia.png" },
        { rank: 18, team: "Amiens", MP: 34, MW: 6, MD: 6, ML: 22, GF: 37, GA: 65, logo: "france/amiens.png" }
    ],
    fixtures: [
        // Matchday 1 - August 8
        { home: "Metz", away: "Guingamp", date: "2026-08-08" },
        { home: "Clermont", away: "Reims", date: "2026-08-08" },
        { home: "Pau", away: "Annecy", date: "2026-08-08" },
        { home: "Dunkerque", away: "Grenoble", date: "2026-08-08" },
        { home: "Boulogne", away: "Nancy", date: "2026-08-08" },
        { home: "Sochaux", away: "St-Étienne", date: "2026-08-08" },
        { home: "Montpellier", away: "Dijon", date: "2026-08-08" },
        { home: "Nantes", away: "Red Star", date: "2026-08-08" },
        { home: "Rodez", away: "Laval", date: "2026-08-08" }
    ]
},

"Netherlands Eredivisie": {
    id: "eredivisie",
    logo: "netherlands/eredivisie.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "PSV", MP: 34, MW: 27, MD: 3, ML: 4, GF: 101, GA: 45, logo: "netherlands/psv.png" },
        { rank: 2, team: "Feyenoord", MP: 34, MW: 19, MD: 8, ML: 7, GF: 70, GA: 44, logo: "netherlands/feyenoord.png" },
        { rank: 3, team: "NEC", MP: 34, MW: 16, MD: 11, ML: 7, GF: 77, GA: 53, logo: "netherlands/nec.png" },
        { rank: 4, team: "Twente", MP: 34, MW: 15, MD: 13, ML: 6, GF: 59, GA: 40, logo: "netherlands/twente.png" },
        { rank: 5, team: "Ajax", MP: 34, MW: 14, MD: 14, ML: 6, GF: 62, GA: 41, logo: "netherlands/ajax.png" },
        { rank: 6, team: "Utrecht", MP: 34, MW: 15, MD: 8, ML: 11, GF: 55, GA: 42, logo: "netherlands/utrecht.png" },
        { rank: 7, team: "AZ Alkmaar", MP: 34, MW: 14, MD: 10, ML: 10, GF: 58, GA: 51, logo: "netherlands/az.png" },
        { rank: 8, team: "Heerenveen", MP: 34, MW: 14, MD: 9, ML: 11, GF: 57, GA: 53, logo: "netherlands/heerenveen.png" },
        { rank: 9, team: "Groningen", MP: 34, MW: 14, MD: 6, ML: 14, GF: 49, GA: 45, logo: "netherlands/groningen.png" },
        { rank: 10, team: "Sparta Rotterdam", MP: 34, MW: 12, MD: 7, ML: 15, GF: 40, GA: 62, logo: "netherlands/sparta.png" },
        { rank: 11, team: "Fortuna Sittard", MP: 34, MW: 11, MD: 6, ML: 17, GF: 49, GA: 63, logo: "netherlands/fortuna.png" },
        { rank: 12, team: "Go Ahead Eagles", MP: 34, MW: 8, MD: 14, ML: 12, GF: 54, GA: 53, logo: "netherlands/goahead.png" },
        { rank: 13, team: "Excelsior", MP: 34, MW: 10, MD: 8, ML: 16, GF: 43, GA: 56, logo: "netherlands/excelsior.png" },
        { rank: 14, team: "Telstar", MP: 34, MW: 9, MD: 10, ML: 15, GF: 49, GA: 55, logo: "netherlands/telstar.png" },
        { rank: 15, team: "PEC Zwolle", MP: 34, MW: 9, MD: 10, ML: 15, GF: 44, GA: 71, logo: "netherlands/peczwolle.png" },
        { rank: 16, team: "FC Volendam", MP: 34, MW: 8, MD: 8, ML: 18, GF: 35, GA: 55, logo: "netherlands/volendam.png" },
        { rank: 17, team: "NAC", MP: 34, MW: 6, MD: 11, ML: 17, GF: 35, GA: 58, logo: "netherlands/nac.png" },
        { rank: 18, team: "Heracles", MP: 34, MW: 5, MD: 4, ML: 25, GF: 35, GA: 85, logo: "netherlands/heracles.png" }
    ],
    fixtures: [
        // Matchday 1 - August 7-9
        { home: "Cambuur", away: "Excelsior", date: "2026-08-07" },
        { home: "NEC", away: "Telstar", date: "2026-08-08" },
        { home: "Go Ahead Eagles", away: "Willem II", date: "2026-08-08" },
        { home: "PSV", away: "Fortuna Sittard", date: "2026-08-08" },
        { home: "AZ Alkmaar", away: "Den Haag", date: "2026-08-08" },
        { home: "Sparta Rotterdam", away: "Feyenoord", date: "2026-08-09" },
        { home: "Groningen", away: "Utrecht", date: "2026-08-09" },
        { home: "PEC Zwolle", away: "Ajax", date: "2026-08-09" },
        { home: "Heerenveen", away: "Twente", date: "2026-08-09" }
    ]
},

"Netherlands Eerste Divisie": {
    id: "eerste-divisie",
    logo: "netherlands/eerstedivisie.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Den Haag", MP: 38, MW: 29, MD: 2, ML: 7, GF: 90, GA: 37, logo: "netherlands/denhaag.png" },
        { rank: 2, team: "Cambuur", MP: 38, MW: 23, MD: 9, ML: 6, GF: 75, GA: 48, logo: "netherlands/cambuur.png" },
        { rank: 3, team: "Willem II", MP: 38, MW: 20, MD: 8, ML: 10, GF: 59, GA: 42, logo: "netherlands/willemii.png" },
        { rank: 4, team: "De Graafschap", MP: 38, MW: 18, MD: 9, ML: 11, GF: 74, GA: 58, logo: "netherlands/degraafschap.png" },
        { rank: 5, team: "Almere", MP: 38, MW: 18, MD: 4, ML: 16, GF: 78, GA: 63, logo: "netherlands/almere.png" },
        { rank: 6, team: "RKC Waalwijk", MP: 38, MW: 16, MD: 10, ML: 12, GF: 71, GA: 59, logo: "netherlands/rkc.png" },
        { rank: 7, team: "Jong PSV", MP: 38, MW: 17, MD: 5, ML: 16, GF: 66, GA: 64, logo: "netherlands/jongpsv.png" },
        { rank: 8, team: "Roda", MP: 38, MW: 14, MD: 13, ML: 11, GF: 59, GA: 54, logo: "netherlands/roda.png" },
        { rank: 9, team: "Den Bosch", MP: 38, MW: 14, MD: 9, ML: 15, GF: 65, GA: 69, logo: "netherlands/denbosch.png" },
        { rank: 10, team: "Dordrecht", MP: 38, MW: 12, MD: 11, ML: 15, GF: 48, GA: 56, logo: "netherlands/dordrecht.png" },
        { rank: 11, team: "FC Eindhoven", MP: 38, MW: 14, MD: 5, ML: 19, GF: 51, GA: 69, logo: "netherlands/fceindhoven.png" },
        { rank: 12, team: "Jong FC Utrecht", MP: 38, MW: 12, MD: 10, ML: 16, GF: 58, GA: 62, logo: "netherlands/jongutrecht.png" },
        { rank: 13, team: "VVV", MP: 38, MW: 13, MD: 6, ML: 19, GF: 50, GA: 58, logo: "netherlands/vvv.png" },
        { rank: 14, team: "FC Emmen", MP: 38, MW: 12, MD: 9, ML: 17, GF: 58, GA: 72, logo: "netherlands/emmen.png" },
        { rank: 15, team: "Vitesse", MP: 38, MW: 15, MD: 11, ML: 12, GF: 64, GA: 55, logo: "netherlands/vitesse.png" },
        { rank: 16, team: "TOP Oss", MP: 38, MW: 11, MD: 11, ML: 16, GF: 54, GA: 64, logo: "netherlands/toposs.png" },
        { rank: 17, team: "Jong AZ", MP: 38, MW: 12, MD: 4, ML: 22, GF: 61, GA: 76, logo: "netherlands/jongaz.png" },
        { rank: 18, team: "Helmond Sport", MP: 38, MW: 10, MD: 9, ML: 19, GF: 42, GA: 62, logo: "netherlands/helmond.png" },
        { rank: 19, team: "MVV", MP: 38, MW: 9, MD: 11, ML: 18, GF: 41, GA: 73, logo: "netherlands/mvv.png" },
        { rank: 20, team: "Jong Ajax", MP: 38, MW: 9, MD: 8, ML: 21, GF: 50, GA: 73, logo: "netherlands/jongajax.png" }
    ],
    fixtures: [
        // Matchday 1 - August 7-10
        { home: "VVV", away: "Heracles", date: "2026-08-07" },
        { home: "Dordrecht", away: "Jong Ajax", date: "2026-08-07" },
        { home: "TOP Oss", away: "NAC", date: "2026-08-07" },
        { home: "FC Emmen", away: "Roda", date: "2026-08-07" },
        { home: "Vitesse", away: "RKC Waalwijk", date: "2026-08-07" },
        { home: "Den Bosch", away: "Almere", date: "2026-08-08" },
        { home: "Helmond Sport", away: "De Graafschap", date: "2026-08-09" },
        { home: "MVV", away: "Jong FC Utrecht", date: "2026-08-09" },
        { home: "Jong AZ", away: "FC Eindhoven", date: "2026-08-10" },
        { home: "Jong PSV", away: "FC Volendam", date: "2026-08-10" }
    ]
},

"Belgian Pro League": {
    id: "belgian-pro-league",
    logo: "belgium/proleague.png",
    isBasketball: false,
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
        { rank: 15, team: "RAAL La Louvière", MP: 30, MW: 6, MD: 13, ML: 11, GF: 30, GA: 37, logo: "belgium/la louviere.png" },
        { rank: 16, team: "Dender", MP: 30, MW: 3, MD: 10, ML: 17, GF: 24, GA: 51, logo: "belgium/dender.png" }
    ],
    fixtures: [
        // Matchday 1 - August 7-9
        { home: "Club Brugge", away: "Kortrijk", date: "2026-08-07" },
        { home: "Standard", away: "Cercle Brugge", date: "2026-08-08" },
        { home: "STVV", away: "Lommel", date: "2026-08-08" },
        { home: "Westerlo", away: "Union", date: "2026-08-08" },
        { home: "Gent", away: "Mechelen", date: "2026-08-09" },
        { home: "Charleroi", away: "OH Leuven", date: "2026-08-09" },
        { home: "Zulte Waregem", away: "Genk", date: "2026-08-09" },
        { home: "Anderlecht", away: "RAAL La Louvière", date: "2026-08-09" },
        { home: "Antwerp", away: "Beveren", date: "2026-08-09" }
    ]
},

"Belgian Challenger Pro League": {
    id: "belgian-challenger",
    logo: "belgium/challenger.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Beveren", MP: 32, MW: 28, MD: 4, ML: 0, GF: 74, GA: 23, logo: "belgium/beveren.png" },
        { rank: 2, team: "Kortrijk", MP: 32, MW: 21, MD: 4, ML: 7, GF: 59, GA: 33, logo: "belgium/kortrijk.png" },
        { rank: 3, team: "Beerschot", MP: 32, MW: 19, MD: 7, ML: 6, GF: 52, GA: 31, logo: "belgium/beerschot.png" },
        { rank: 4, team: "RFC Liège", MP: 32, MW: 16, MD: 5, ML: 11, GF: 44, GA: 39, logo: "belgium/rfc liege.png" },
        { rank: 5, team: "Lommel", MP: 32, MW: 15, MD: 8, ML: 9, GF: 59, GA: 46, logo: "belgium/lommel.png" },
        { rank: 6, team: "Patro Eisden", MP: 32, MW: 14, MD: 9, ML: 9, GF: 44, GA: 40, logo: "belgium/patroeisden.png" },
        { rank: 7, team: "Eupen", MP: 32, MW: 12, MD: 11, ML: 9, GF: 44, GA: 36, logo: "belgium/eupen.png" },
        { rank: 8, team: "Lokeren", MP: 32, MW: 10, MD: 12, ML: 10, GF: 48, GA: 45, logo: "belgium/lokeren.png" },
        { rank: 9, team: "Jong KAA Gent", MP: 32, MW: 12, MD: 5, ML: 15, GF: 42, GA: 51, logo: "belgium/jonggent.png" },
        { rank: 10, team: "Lierse SK", MP: 32, MW: 10, MD: 8, ML: 14, GF: 35, GA: 42, logo: "belgium/liersesk.png" },
        { rank: 11, team: "RFC Seraing", MP: 32, MW: 8, MD: 11, ML: 13, GF: 37, GA: 44, logo: "belgium/rfcseraing.png" },
        { rank: 12, team: "Royal Francs Borains", MP: 32, MW: 9, MD: 8, ML: 15, GF: 33, GA: 47, logo: "belgium/francsborains.png" },
        { rank: 13, team: "Daring Brussels", MP: 32, MW: 9, MD: 9, ML: 14, GF: 50, GA: 54, logo: "belgium/daringbrussels.png" },
        { rank: 14, team: "RSCA FUTURES", MP: 32, MW: 7, MD: 10, ML: 15, GF: 46, GA: 55, logo: "belgium/rscafutures.png" },
        { rank: 15, team: "Jong Genk", MP: 32, MW: 7, MD: 10, ML: 15, GF: 42, GA: 59, logo: "belgium/jonggenk.png" },
        { rank: 16, team: "Club NXT", MP: 32, MW: 5, MD: 6, ML: 21, GF: 33, GA: 55, logo: "belgium/clubnxt.png" },
        { rank: 17, team: "R.O.C. Charleroi", MP: 32, MW: 3, MD: 7, ML: 22, GF: 26, GA: 68, logo: "belgium/roccharleroi.png" }
    ],
    fixtures: [
        // Matchday 1 - August 14-17
        { home: "RFC Seraing", away: "Lokeren", date: "2026-08-14" },
        { home: "Sporting Hasselt", away: "Dender", date: "2026-08-14" },
        { home: "Eupen", away: "Jong Genk", date: "2026-08-15" },
        { home: "Patro Eisden", away: "RSCA FUTURES", date: "2026-08-15" },
        { home: "Virton", away: "Lierse SK", date: "2026-08-15" },
        { home: "Beerschot", away: "Jong KAA Gent", date: "2026-08-16" },
        { home: "RFC Liège", away: "Royal Francs Borains", date: "2026-08-17" }
    ]
},
"Sweden Allsvenskan": {
    id: "allsvenskan",
    logo: "sweden/allsvenskan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Sirius", MP: 13, MW: 11, MD: 2, ML: 0, GF: 36, GA: 16, logo: "sweden/sirius.png" },
        { rank: 2, team: "Hammarby", MP: 14, MW: 8, MD: 2, ML: 4, GF: 32, GA: 14, logo: "sweden/hammarby.png" },
        { rank: 3, team: "Häcken", MP: 13, MW: 6, MD: 5, ML: 2, GF: 27, GA: 22, logo: "sweden/hacken.png" },
        { rank: 4, team: "AIK", MP: 13, MW: 6, MD: 3, ML: 4, GF: 18, GA: 18, logo: "sweden/aik.png" },
        { rank: 5, team: "Djurgården", MP: 12, MW: 6, MD: 2, ML: 4, GF: 26, GA: 15, logo: "sweden/djurgarden.png" },
        { rank: 6, team: "Malmö", MP: 13, MW: 6, MD: 2, ML: 5, GF: 27, GA: 22, logo: "sweden/malmo.png" },
        { rank: 7, team: "GAIS", MP: 14, MW: 5, MD: 4, ML: 5, GF: 18, GA: 14, logo: "sweden/gais.png" },
        { rank: 8, team: "Västerås", MP: 13, MW: 5, MD: 4, ML: 4, GF: 22, GA: 23, logo: "sweden/vasteras.png" },
        { rank: 9, team: "IF Elfsborg", MP: 14, MW: 4, MD: 6, ML: 4, GF: 18, GA: 17, logo: "sweden/elfsborg.png" },
        { rank: 10, team: "Mjällby", MP: 13, MW: 4, MD: 5, ML: 4, GF: 19, GA: 17, logo: "sweden/mjallby.png" },
        { rank: 11, team: "IF Brommapojkarna", MP: 13, MW: 4, MD: 4, ML: 5, GF: 18, GA: 21, logo: "sweden/brommapojkarna.png" },
        { rank: 12, team: "Kalmar", MP: 13, MW: 4, MD: 2, ML: 7, GF: 16, GA: 19, logo: "sweden/kalmar.png" },
        { rank: 13, team: "Göteborg", MP: 13, MW: 3, MD: 4, ML: 6, GF: 16, GA: 29, logo: "sweden/goteborg.png" },
        { rank: 14, team: "Degerfors", MP: 13, MW: 2, MD: 4, ML: 7, GF: 12, GA: 23, logo: "sweden/degerfors.png" },
        { rank: 15, team: "ÖIS", MP: 13, MW: 2, MD: 4, ML: 7, GF: 14, GA: 31, logo: "sweden/ois.png" },
        { rank: 16, team: "Halmstad", MP: 13, MW: 1, MD: 3, ML: 9, GF: 10, GA: 28, logo: "sweden/halmstad.png" }
    ],
    fixtures: [
        // Matchday 15 - July 24-27
        { home: "Västerås", away: "ÖIS", date: "2026-07-24" },
        { home: "Degerfors", away: "Djurgården", date: "2026-07-25" },
        { home: "Kalmar", away: "Mjällby", date: "2026-07-25" },
        { home: "IF Brommapojkarna", away: "Hammarby", date: "2026-07-26" },
        { home: "Sirius", away: "Göteborg", date: "2026-07-26" },
        { home: "GAIS", away: "Halmstad", date: "2026-07-26" },
        { home: "Malmö", away: "IF Elfsborg", date: "2026-07-26" },
        { home: "Häcken", away: "AIK", date: "2026-07-27" },
        
        // Matchday 16 - August 1-3
        { home: "Häcken", away: "Kalmar", date: "2026-08-01" },
        { home: "IF Brommapojkarna", away: "Malmö", date: "2026-08-02" },
        { home: "Göteborg", away: "Degerfors", date: "2026-08-02" },
        { home: "AIK", away: "ÖIS", date: "2026-08-02" },
        { home: "Djurgården", away: "Västerås", date: "2026-08-03" },
        { home: "Halmstad", away: "Sirius", date: "2026-08-03" }
    ]
},

"Swedish Superettan": {
    id: "sweden-superettan",
    logo: "sweden/superettan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Falkenberg", MP: 14, MW: 8, MD: 4, ML: 2, GF: 28, GA: 20, logo: "sweden/falkenberg.png" },
        { rank: 2, team: "Varbergs BoIS", MP: 14, MW: 8, MD: 3, ML: 3, GF: 28, GA: 17, logo: "sweden/varbergsbois.png" },
        { rank: 3, team: "Norrköping", MP: 14, MW: 8, MD: 2, ML: 4, GF: 23, GA: 10, logo: "sweden/norrkoping.png" },
        { rank: 4, team: "Landskrona", MP: 14, MW: 7, MD: 4, ML: 3, GF: 22, GA: 14, logo: "sweden/landskrona.png" },
        { rank: 5, team: "Östersund", MP: 14, MW: 6, MD: 4, ML: 4, GF: 22, GA: 19, logo: "sweden/ostersund.png" },
        { rank: 6, team: "United Nordic", MP: 14, MW: 6, MD: 4, ML: 4, GF: 23, GA: 22, logo: "sweden/unitednordic.png" },
        { rank: 7, team: "Oddevold", MP: 14, MW: 5, MD: 5, ML: 4, GF: 26, GA: 22, logo: "sweden/oddevold.png" },
        { rank: 8, team: "Östers IF", MP: 14, MW: 6, MD: 2, ML: 6, GF: 21, GA: 23, logo: "sweden/osters.png" },
        { rank: 9, team: "Helsingborg", MP: 14, MW: 6, MD: 2, ML: 6, GF: 26, GA: 29, logo: "sweden/helsingborg.png" },
        { rank: 10, team: "Sandviken", MP: 14, MW: 5, MD: 4, ML: 5, GF: 24, GA: 20, logo: "sweden/sandviken.png" },
        { rank: 11, team: "Brage", MP: 14, MW: 4, MD: 4, ML: 6, GF: 26, GA: 26, logo: "sweden/brage.png" },
        { rank: 12, team: "Ljungskile", MP: 14, MW: 4, MD: 4, ML: 6, GF: 18, GA: 18, logo: "sweden/ljungskile.png" },
        { rank: 13, team: "Norrby", MP: 14, MW: 2, MD: 8, ML: 4, GF: 16, GA: 20, logo: "sweden/norrby.png" },
        { rank: 14, team: "Örebro", MP: 14, MW: 3, MD: 5, ML: 6, GF: 13, GA: 20, logo: "sweden/orebro.png" },
        { rank: 15, team: "Värnamo", MP: 14, MW: 3, MD: 1, ML: 10, GF: 15, GA: 31, logo: "sweden/varnamo.png" },
        { rank: 16, team: "GIF Sundsvall", MP: 14, MW: 3, MD: 0, ML: 11, GF: 11, GA: 31, logo: "sweden/gifsundsvall.png" }
    ],
    fixtures: [
        { home: "Värnamo", away: "Brage", date: "2026-07-25" },
        
        // Matchday 17 - July 26
        { home: "GIF Sundsvall", away: "Falkenberg", date: "2026-07-26" },
        { home: "Ljungskile", away: "Sandviken", date: "2026-07-26" },
        { home: "Norrby", away: "Östersund", date: "2026-07-26" },
        
        // Matchday 17 - July 27
        { home: "Örebro", away: "Oddevold", date: "2026-07-27" },
        { home: "Östers IF", away: "Varbergs BoIS", date: "2026-07-27" },
        
        // Matchday 17 - July 28
        { home: "Helsingborg", away: "United Nordic", date: "2026-07-28" },
        { home: "Landskrona", away: "Norrköping", date: "2026-07-28" }
    ]
},

"Swedish Ettan Norra": {
    id: "sweden-ettan-norra",
    logo: "sweden/ettan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Hammarby TFF", MP: 14, MW: 10, MD: 2, ML: 2, GF: 38, GA: 11, logo: "sweden/hammarbytff.png" },
        { rank: 2, team: "Karlstad", MP: 14, MW: 9, MD: 3, ML: 2, GF: 22, GA: 9, logo: "sweden/karlstad.png" },
        { rank: 3, team: "Arlanda", MP: 14, MW: 8, MD: 5, ML: 1, GF: 23, GA: 10, logo: "sweden/arlanda.png" },
        { rank: 4, team: "Stockholm Internazionale", MP: 14, MW: 8, MD: 3, ML: 3, GF: 28, GA: 14, logo: "sweden/stockholmint.png" },
        { rank: 5, team: "Enkoping SK", MP: 14, MW: 8, MD: 1, ML: 5, GF: 24, GA: 23, logo: "sweden/enkopingsk.png" },
        { rank: 6, team: "FBK Karlstad", MP: 14, MW: 7, MD: 3, ML: 4, GF: 23, GA: 20, logo: "sweden/fbkkarlstad.png" },
        { rank: 7, team: "AFC Eskilstuna", MP: 14, MW: 5, MD: 4, ML: 5, GF: 23, GA: 24, logo: "sweden/afceskilstuna.png" },
        { rank: 8, team: "Karlbergs", MP: 14, MW: 5, MD: 3, ML: 6, GF: 23, GA: 23, logo: "sweden/karlbergs.png" },
        { rank: 9, team: "Umea FC", MP: 14, MW: 4, MD: 4, ML: 6, GF: 20, GA: 24, logo: "sweden/umeafc.png" },
        { rank: 10, team: "Jarfalla", MP: 14, MW: 4, MD: 3, ML: 7, GF: 21, GA: 27, logo: "sweden/jarfalla.png" },
        { rank: 11, team: "Vasalund", MP: 14, MW: 4, MD: 3, ML: 7, GF: 20, GA: 30, logo: "sweden/vasalund.png" },
        { rank: 12, team: "Assyriska FF", MP: 14, MW: 3, MD: 5, ML: 6, GF: 22, GA: 29, logo: "sweden/assyriska.png" },
        { rank: 13, team: "Gefle", MP: 14, MW: 4, MD: 2, ML: 8, GF: 17, GA: 29, logo: "sweden/gefle.png" },
        { rank: 14, team: "Sollentuna", MP: 14, MW: 2, MD: 7, ML: 5, GF: 12, GA: 19, logo: "sweden/sollentuna.png" },
        { rank: 15, team: "Pitea", MP: 14, MW: 2, MD: 3, ML: 9, GF: 16, GA: 32, logo: "sweden/pitea.png" },
        { rank: 16, team: "Stocksund", MP: 14, MW: 1, MD: 5, ML: 8, GF: 28, GA: 36, logo: "sweden/stocksund.png" }
    ],
    fixtures: [
        // Round 15 - August 1-3
        { home: "Pitea", away: "Gefle", date: "2026-08-01" },
        { home: "FBK Karlstad", away: "Assyriska FF", date: "2026-08-01" },
        { home: "Jarfalla", away: "Stockholm Internazionale", date: "2026-08-01" },
        { home: "Stocksund", away: "Karlbergs", date: "2026-08-01" },
        { home: "AFC Eskilstuna", away: "Umea FC", date: "2026-08-02" },
        { home: "Karlstad", away: "Enkoping SK", date: "2026-08-02" },
        { home: "Vasalund", away: "Sollentuna", date: "2026-08-03" },
        { home: "Hammarby TFF", away: "Arlanda", date: "2026-08-03" },
        
        // Round 16 - August 7-9
        { home: "Enkoping SK", away: "Karlbergs", date: "2026-08-07" },
        { home: "Jarfalla", away: "Karlstad", date: "2026-08-08" },
        { home: "Stocksund", away: "Gefle", date: "2026-08-08" },
        { home: "Umea FC", away: "AFC Eskilstuna", date: "2026-08-09" },
        { home: "Vasalund", away: "Stockholm Internazionale", date: "2026-08-09" },
        { home: "Arlanda", away: "Pitea", date: "2026-08-09" },
        { home: "Hammarby TFF", away: "FBK Karlstad", date: "2026-08-09" },
        { home: "Assyriska FF", away: "Sollentuna", date: "2026-08-09" }
    ]
},
"Chinese Super League": {
    id: "csl",
    logo: "china/csl.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Chengdu Rongcheng", MP: 19, MW: 13, MD: 4, ML: 2, GF: 39, GA: 18, logo: "china/chengdurongchenglogo.png" },
        { rank: 2, team: "Chongqing Tonglianglong", MP: 19, MW: 7, MD: 8, ML: 4, GF: 23, GA: 21, logo: "china/chongqing.png" },
        { rank: 3, team: "Dalian Yingbo", MP: 18, MW: 9, MD: 1, ML: 8, GF: 28, GA: 32, logo: "china/dalianlogo.png" },
        { rank: 4, team: "Yunnan Yukun", MP: 19, MW: 7, MD: 4, ML: 8, GF: 36, GA: 35, logo: "china/yunnanlogo.png" },
        { rank: 5, team: "Qingdao Youth Island", MP: 19, MW: 5, MD: 10, ML: 4, GF: 23, GA: 29, logo: "china/qingdaologo.png" },
        { rank: 6, team: "Shandong Taishan", MP: 19, MW: 9, MD: 3, ML: 7, GF: 35, GA: 34, logo: "china/shandongtaishanlogo.png" },
        { rank: 7, team: "Beijing Guoan", MP: 18, MW: 7, MD: 6, ML: 5, GF: 30, GA: 24, logo: "china/beijinggouanlogo.png" },
        { rank: 8, team: "Zhejiang", MP: 19, MW: 7, MD: 5, ML: 7, GF: 27, GA: 32, logo: "china/zhejianglogo.png" },
        { rank: 9, team: "Shenyang Urban", MP: 18, MW: 6, MD: 3, ML: 9, GF: 25, GA: 30, logo: "china/shenyang.png" },
        { rank: 10, team: "Shenzhen Peng City", MP: 19, MW: 6, MD: 2, ML: 11, GF: 25, GA: 33, logo: "china/shenzhenlogo.png" },
        { rank: 11, team: "Shanghai Shenhua", MP: 18, MW: 8, MD: 5, ML: 5, GF: 36, GA: 29, logo: "china/shanghaishenhualogo.png" },
        { rank: 12, team: "Henan", MP: 18, MW: 7, MD: 3, ML: 8, GF: 23, GA: 23, logo: "china/henanlogo.png" },
        { rank: 13, team: "Shanghai Port", MP: 18, MW: 5, MD: 6, ML: 7, GF: 28, GA: 26, logo: "china/shanghaiportlogo.png" },
        { rank: 14, team: "Qingdao Hainiu", MP: 19, MW: 6, MD: 3, ML: 10, GF: 30, GA: 36, logo: "china/qingdaohainiulogo.png" },
        { rank: 15, team: "Tianjin Jinmen Tiger", MP: 18, MW: 5, MD: 6, ML: 7, GF: 24, GA: 22, logo: "china/tianjinlogo.png" },
        { rank: 16, team: "Wuhan Three Towns", MP: 18, MW: 3, MD: 7, ML: 8, GF: 26, GA: 34, logo: "china/wuhanlogo.png" }
    ],
    fixtures: [
        // Matchday 21 - July 25-26
        { home: "Qingdao Hainiu", away: "Tianjin Jinmen Tiger", date: "2026-07-25" },
        { home: "Shenyang Urban", away: "Qingdao Youth Island", date: "2026-07-25" },
        { home: "Shanghai Port", away: "Shanghai Shenhua", date: "2026-07-25" },
        { home: "Wuhan Three Towns", away: "Chongqing Tonglianglong", date: "2026-07-25" },
        { home: "Yunnan Yukun", away: "Shenzhen Peng City", date: "2026-07-26" },
        { home: "Shandong Taishan", away: "Henan", date: "2026-07-26" },
        { home: "Chengdu Rongcheng", away: "Beijing Guoan", date: "2026-07-26" },
        { home: "Zhejiang", away: "Dalian Yingbo", date: "2026-07-26" },
        
        // Matchday 22 - July 31 - August 2
        { home: "Henan", away: "Dalian Yingbo", date: "2026-07-31" },
        { home: "Tianjin Jinmen Tiger", away: "Yunnan Yukun", date: "2026-08-01" },
        { home: "Beijing Guoan", away: "Zhejiang", date: "2026-08-01" },
        { home: "Shanghai Port", away: "Shandong Taishan", date: "2026-08-01" },
        { home: "Chengdu Rongcheng", away: "Wuhan Three Towns", date: "2026-08-01" },
        { home: "Shenzhen Peng City", away: "Chongqing Tonglianglong", date: "2026-08-01" },
        { home: "Qingdao Youth Island", away: "Qingdao Hainiu", date: "2026-08-02" }
    ]
},
"Belarusian Premier League": {
    id: "belarus",
    logo: "belarus/belarus.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Din. Minsk", MP: 14, MW: 10, MD: 3, ML: 1, GF: 26, GA: 12, logo: "belarus/dinamominsk.png" },
        { rank: 2, team: "ML Vitebsk", MP: 14, MW: 9, MD: 4, ML: 1, GF: 30, GA: 13, logo: "belarus/mlvitebsk.png" },
        { rank: 3, team: "Isloch", MP: 14, MW: 8, MD: 4, ML: 2, GF: 24, GA: 10, logo: "belarus/isloch.png" },
        { rank: 4, team: "FC Gomel", MP: 15, MW: 7, MD: 5, ML: 3, GF: 21, GA: 13, logo: "belarus/gomel.png" },
        { rank: 5, team: "Dynamo Brest", MP: 15, MW: 7, MD: 3, ML: 5, GF: 24, GA: 15, logo: "belarus/dinamobrest.png" },
        { rank: 6, team: "Zhodino", MP: 15, MW: 6, MD: 5, ML: 4, GF: 23, GA: 13, logo: "belarus/torpedozhodino.png" },
        { rank: 7, team: "FC Minsk", MP: 15, MW: 6, MD: 4, ML: 5, GF: 21, GA: 20, logo: "belarus/minsk.png" },
        { rank: 8, team: "Arsenal Dzerzhinsk", MP: 15, MW: 5, MD: 6, ML: 4, GF: 18, GA: 21, logo: "belarus/arsenal.png" },
        { rank: 9, team: "Neman", MP: 15, MW: 6, MD: 3, ML: 6, GF: 16, GA: 15, logo: "belarus/neman.png" },
        { rank: 10, team: "Vitebsk", MP: 15, MW: 5, MD: 5, ML: 5, GF: 16, GA: 16, logo: "belarus/vitebsk.png" },
        { rank: 11, team: "Baranovici", MP: 15, MW: 4, MD: 4, ML: 7, GF: 15, GA: 26, logo: "belarus/baranovichi.png" },
        { rank: 12, team: "Slavia Mozyr", MP: 15, MW: 3, MD: 6, ML: 6, GF: 14, GA: 22, logo: "belarus/slaviamozyr.png" },
        { rank: 13, team: "Dnepr Mogilev", MP: 15, MW: 2, MD: 5, ML: 8, GF: 12, GA: 22, logo: "belarus/dnepr.png" },
        { rank: 14, team: "Belshina", MP: 14, MW: 3, MD: 2, ML: 9, GF: 13, GA: 26, logo: "belarus/belshina.png" },
        { rank: 15, team: "BATE", MP: 14, MW: 1, MD: 6, ML: 7, GF: 9, GA: 17, logo: "belarus/bate.png" },
        { rank: 16, team: "Naftan", MP: 14, MW: 1, MD: 3, ML: 10, GF: 10, GA: 31, logo: "belarus/naftan.png" }
    ],
    fixtures: [
        // Round 17 - August 1
        { home: "Arsenal Dzerzhinsk", away: "FC Minsk", date: "2026-08-01" },
        { home: "Baranovici", away: "Isloch", date: "2026-08-01" },
        { home: "BATE", away: "Neman", date: "2026-08-01" },
        { home: "Din. Minsk", away: "Slavia Mozyr", date: "2026-08-01" },
        { home: "Dnepr Mogilev", away: "Naftan", date: "2026-08-01" },
        { home: "Dynamo Brest", away: "Belshina", date: "2026-08-01" },
        { home: "FC Gomel", away: "Vitebsk", date: "2026-08-01" },
        { home: "ML Vitebsk", away: "Zhodino", date: "2026-08-01" }
    ]
},
"Kazakhstan Premier League": {
    id: "kazakhstan",
    logo: "kazakhstan/kazakhstan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Ordabasy", MP: 18, MW: 13, MD: 4, ML: 1, GF: 33, GA: 13, logo: "kazakhstan/ordabasy.png" },
        { rank: 2, team: "Kairat", MP: 19, MW: 12, MD: 6, ML: 1, GF: 37, GA: 13, logo: "kazakhstan/kairat.png" },
        { rank: 3, team: "Okzhetpes", MP: 18, MW: 8, MD: 6, ML: 4, GF: 24, GA: 24, logo: "kazakhstan/okzhetpes.png" },
        { rank: 4, team: "Astana", MP: 17, MW: 8, MD: 5, ML: 4, GF: 25, GA: 19, logo: "kazakhstan/astana.png" },
        { rank: 5, team: "FC Aktobe", MP: 18, MW: 8, MD: 4, ML: 6, GF: 26, GA: 20, logo: "kazakhstan/aktobe.png" },
        { rank: 6, team: "Ulytau", MP: 18, MW: 7, MD: 6, ML: 5, GF: 15, GA: 16, logo: "kazakhstan/ulytau.png" },
        { rank: 7, team: "Yelimay", MP: 17, MW: 7, MD: 5, ML: 5, GF: 25, GA: 22, logo: "kazakhstan/yelimay.png" },
        { rank: 8, team: "Zhenys", MP: 18, MW: 5, MD: 7, ML: 6, GF: 15, GA: 20, logo: "kazakhstan/zhenys.png" },
        { rank: 9, team: "Tobol", MP: 18, MW: 5, MD: 4, ML: 9, GF: 20, GA: 26, logo: "kazakhstan/tobol.png" },
        { rank: 10, team: "Kaisar", MP: 19, MW: 3, MD: 10, ML: 6, GF: 14, GA: 21, logo: "kazakhstan/kaisar.png" },
        { rank: 11, team: "Atyrau", MP: 17, MW: 3, MD: 9, ML: 5, GF: 13, GA: 16, logo: "kazakhstan/atyrau.png" },
        { rank: 12, team: "Zhetysu", MP: 18, MW: 4, MD: 6, ML: 8, GF: 21, GA: 27, logo: "kazakhstan/zhetysu.png" },
        { rank: 13, team: "Kaspiy Aktau", MP: 18, MW: 5, MD: 3, ML: 10, GF: 16, GA: 23, logo: "kazakhstan/kaspiy.png" },
        { rank: 14, team: "Kyzyl-Zhar SK", MP: 18, MW: 4, MD: 4, ML: 10, GF: 18, GA: 26, logo: "kazakhstan/kyzylzhar.png" },
        { rank: 15, team: "Altay", MP: 18, MW: 3, MD: 7, ML: 8, GF: 14, GA: 22, logo: "kazakhstan/altay.png" },
        { rank: 16, team: "FC Irtysh Pavlodar", MP: 17, MW: 1, MD: 8, ML: 8, GF: 14, GA: 22, logo: "kazakhstan/irtysh.png" }
    ],
    fixtures: [
        // Matchday 19 - July 25-26
        { home: "Ulytau", away: "FC Irtysh Pavlodar", date: "2026-07-25" },
        { home: "Zhetysu", away: "Kyzyl-Zhar SK", date: "2026-07-25" },
        { home: "FC Aktobe", away: "Okzhetpes", date: "2026-07-25" },
        { home: "Tobol", away: "Atyrau", date: "2026-07-26" },
        { home: "Yelimay", away: "Kaisar", date: "2026-07-26" },
        { home: "Astana", away: "Altay", date: "2026-07-26" },
        { home: "Kairat", away: "Ordabasy", date: "2026-07-26" },
        { home: "Kaspiy Aktau", away: "Zhenys", date: "2026-07-26" },
        
        // Matchday 20 - August 1-2
        { home: "FC Irtysh Pavlodar", away: "Kaspiy Aktau", date: "2026-08-01" },
        { home: "Kyzyl-Zhar SK", away: "FC Aktobe", date: "2026-08-01" },
        { home: "Atyrau", away: "Zhetysu", date: "2026-08-01" },
        { home: "Okzhetpes", away: "Altay", date: "2026-08-02" },
        { home: "Ulytau", away: "Astana", date: "2026-08-02" },
        { home: "Zhenys", away: "Yelimay", date: "2026-08-02" },
        { home: "Ordabasy", away: "Tobol", date: "2026-08-02" }
    ]
},

"Norwegian First Division": {
    id: "norway",
    logo: "norway/norway.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Stroemsgodset", MP: 13, MW: 8, MD: 4, ML: 1, GF: 38, GA: 18, logo: "norway/stroemsgodset.png" },
        { rank: 2, team: "Haugesund", MP: 13, MW: 9, MD: 1, ML: 3, GF: 40, GA: 25, logo: "norway/haugesund.png" },
        { rank: 3, team: "Kongsvinger", MP: 13, MW: 8, MD: 3, ML: 2, GF: 31, GA: 20, logo: "norway/kongsvinger.png" },
        { rank: 4, team: "Stabæk", MP: 13, MW: 7, MD: 3, ML: 3, GF: 27, GA: 14, logo: "norway/stabaek.png" },
        { rank: 5, team: "Odd", MP: 13, MW: 7, MD: 3, ML: 3, GF: 26, GA: 16, logo: "norway/odd.png" },
        { rank: 6, team: "Ranheim TF", MP: 13, MW: 6, MD: 2, ML: 5, GF: 32, GA: 29, logo: "norway/ranheim.png" },
        { rank: 7, team: "Sandnes Ulf", MP: 13, MW: 6, MD: 1, ML: 6, GF: 21, GA: 19, logo: "norway/sandnesulf.png" },
        { rank: 8, team: "Hødd", MP: 13, MW: 5, MD: 3, ML: 5, GF: 18, GA: 16, logo: "norway/hodd.png" },
        { rank: 9, team: "Moss", MP: 13, MW: 5, MD: 2, ML: 6, GF: 23, GA: 29, logo: "norway/moss.png" },
        { rank: 10, team: "Egersund", MP: 13, MW: 5, MD: 1, ML: 7, GF: 21, GA: 25, logo: "norway/egersund.png" },
        { rank: 11, team: "Bryne FK", MP: 13, MW: 5, MD: 1, ML: 7, GF: 18, GA: 22, logo: "norway/brynefk.png" },
        { rank: 12, team: "Sogndal", MP: 13, MW: 4, MD: 3, ML: 6, GF: 24, GA: 31, logo: "norway/sogndal.png" },
        { rank: 13, team: "Åsane", MP: 13, MW: 4, MD: 1, ML: 8, GF: 18, GA: 24, logo: "norway/asane.png" },
        { rank: 14, team: "Strømmen", MP: 13, MW: 3, MD: 2, ML: 8, GF: 18, GA: 35, logo: "norway/stremmen.png" },
        { rank: 15, team: "Raufoss", MP: 13, MW: 3, MD: 1, ML: 9, GF: 16, GA: 31, logo: "norway/raufoss.png" },
        { rank: 16, team: "Lyn", MP: 13, MW: 3, MD: 1, ML: 9, GF: 11, GA: 28, logo: "norway/lyn.png" }
    ],
    fixtures: [
        // Matchday 15 - July 25-27
        { home: "Stroemsgodset", away: "Lyn", date: "2026-07-25" },
        { home: "Haugesund", away: "Bryne FK", date: "2026-07-25" },
        { home: "Åsane", away: "Egersund", date: "2026-07-26" },
        { home: "Moss", away: "Raufoss", date: "2026-07-26" },
        { home: "Sogndal", away: "Ranheim TF", date: "2026-07-26" },
        { home: "Sandnes Ulf", away: "Kongsvinger", date: "2026-07-26" },
        { home: "Strømmen", away: "Odd", date: "2026-07-26" },
        { home: "Stabæk", away: "Hødd", date: "2026-07-27" }
    ]
},


"Latvia Nakotnes Liga": {
    id: "latvia",
    logo: "latvia/latvia.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Metta/LU", MP: 12, MW: 10, MD: 1, ML: 1, GF: 42, GA: 11, logo: "latvia/metta.png" },
        { rank: 2, team: "Valmiera", MP: 12, MW: 9, MD: 2, ML: 1, GF: 32, GA: 12, logo: "latvia/valmiera.png" },
        { rank: 3, team: "Riga Mariners", MP: 12, MW: 8, MD: 4, ML: 0, GF: 25, GA: 10, logo: "latvia/rigamariners.png" },
        { rank: 4, team: "Leevon PPK", MP: 12, MW: 7, MD: 3, ML: 2, GF: 20, GA: 15, logo: "latvia/leevonppk.png" },
        { rank: 5, team: "JDFS Alberts", MP: 12, MW: 6, MD: 2, ML: 4, GF: 25, GA: 20, logo: "latvia/jdfs alberts.png" },
        { rank: 6, team: "Mārupes", MP: 12, MW: 6, MD: 1, ML: 5, GF: 22, GA: 15, logo: "latvia/marupes.png" },
        { rank: 7, team: "SK Super Nova II", MP: 12, MW: 5, MD: 4, ML: 3, GF: 19, GA: 17, logo: "latvia/supernova.png" },
        { rank: 8, team: "Riga II", MP: 12, MW: 5, MD: 1, ML: 6, GF: 19, GA: 22, logo: "latvia/rigaii.png" },
        { rank: 9, team: "Skanste", MP: 11, MW: 4, MD: 1, ML: 6, GF: 20, GA: 21, logo: "latvia/skanste.png" },
        { rank: 10, team: "RFS 2", MP: 12, MW: 2, MD: 3, ML: 7, GF: 15, GA: 26, logo: "latvia/rfs2.png" },
        { rank: 11, team: "Tukums II", MP: 12, MW: 2, MD: 2, ML: 8, GF: 16, GA: 31, logo: "latvia/tukumsii.png" },
        { rank: 12, team: "Ventspils", MP: 11, MW: 1, MD: 4, ML: 6, GF: 12, GA: 20, logo: "latvia/ventspils.png" },
        { rank: 13, team: "Rēzeknes FA/BJSS", MP: 12, MW: 1, MD: 2, ML: 9, GF: 10, GA: 36, logo: "latvia/rezeknes.png" },
        { rank: 14, team: "Smiltene", MP: 12, MW: 0, MD: 4, ML: 8, GF: 12, GA: 33, logo: "latvia/smiltene.png" }
    ],
    fixtures: [
        { home: "Tukums II", away: "RFS 2", date: "2026-07-20" },
        
        // Matchday 14 - July 25-27
        { home: "Smiltene", away: "RFS 2", date: "2026-07-25" },
        { home: "JDFS Alberts", away: "SK Super Nova II", date: "2026-07-25" },
        { home: "Riga Mariners", away: "Ventspils", date: "2026-07-25" },
        { home: "Rēzeknes FA/BJSS", away: "Mārupes", date: "2026-07-25" },
        { home: "Leevon PPK", away: "Skanste", date: "2026-07-25" },
        { home: "Valmiera", away: "Riga II", date: "2026-07-27" },
        { home: "Metta/LU", away: "Tukums II", date: "2026-07-27" }
    ]
},


"Irish Premier League": {
    id: "irish-premier",
    logo: "ireland/irishpremier.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Shamrock Rovers", MP: 25, MW: 15, MD: 5, ML: 5, GF: 40, GA: 22, logo: "ireland/shamrock.png" },
        { rank: 2, team: "Bohemians", MP: 25, MW: 12, MD: 7, ML: 6, GF: 40, GA: 27, logo: "ireland/bohemians.png" },
        { rank: 3, team: "St Patrick's Athletic", MP: 23, MW: 12, MD: 5, ML: 6, GF: 38, GA: 19, logo: "ireland/stpatricks.png" },
        { rank: 4, team: "Dundalk", MP: 23, MW: 9, MD: 8, ML: 6, GF: 37, GA: 34, logo: "ireland/dundalk.png" },
        { rank: 5, team: "Shelbourne", MP: 24, MW: 8, MD: 10, ML: 6, GF: 35, GA: 35, logo: "ireland/shelbourne.png" },
        { rank: 6, team: "Derry City", MP: 25, MW: 6, MD: 11, ML: 8, GF: 32, GA: 31, logo: "ireland/derry.png" },
        { rank: 7, team: "Galway United", MP: 22, MW: 6, MD: 6, ML: 10, GF: 29, GA: 37, logo: "ireland/galway.png" },
        { rank: 8, team: "Drogheda United", MP: 23, MW: 5, MD: 7, ML: 11, GF: 27, GA: 40, logo: "ireland/drogheda.png" },
        { rank: 9, team: "Waterford", MP: 23, MW: 4, MD: 8, ML: 11, GF: 32, GA: 46, logo: "ireland/waterford.png" },
        { rank: 10, team: "Sligo Rovers", MP: 23, MW: 5, MD: 5, ML: 13, GF: 18, GA: 37, logo: "ireland/sligo.png" }
    ],
    fixtures: [
        // Matchday 25 - July 24-25
        { home: "St Patrick's Athletic", away: "Dundalk", date: "2026-07-24" },
        { home: "Galway United", away: "Waterford", date: "2026-07-25" },
        { home: "Sligo Rovers", away: "Drogheda United", date: "2026-07-25" },
        
        // Matchday 26 - July 31
        { home: "St Patrick's Athletic", away: "Derry City", date: "2026-07-31" },
        { home: "Bohemians", away: "Galway United", date: "2026-07-31" },
        { home: "Drogheda United", away: "Shamrock Rovers", date: "2026-07-31" },
        { home: "Dundalk", away: "Sligo Rovers", date: "2026-07-31" },
        { home: "Waterford", away: "Shelbourne", date: "2026-07-31" },
        
        // Matchday 27 - August 7
        { home: "Shelbourne", away: "St Patrick's Athletic", date: "2026-08-07" },
        { home: "Waterford", away: "Bohemians", date: "2026-08-07" },
        { home: "Derry City", away: "Sligo Rovers", date: "2026-08-07" },
        { home: "Galway United", away: "Drogheda United", date: "2026-08-07" },
        { home: "Shamrock Rovers", away: "Dundalk", date: "2026-08-07" },
        
        // Matchday 28 - August 21-22
        { home: "Drogheda United", away: "St Patrick's Athletic", date: "2026-08-21" },
        { home: "Dundalk", away: "Galway United", date: "2026-08-21" },
        { home: "Bohemians", away: "Derry City", date: "2026-08-21" },
        { home: "Shamrock Rovers", away: "Shelbourne", date: "2026-08-21" },
        { home: "Sligo Rovers", away: "Waterford", date: "2026-08-22" }
    ]
},
"Bolivian Primera División": {
    id: "bolivia",
    logo: "bolivia/bolivia.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Always Ready", MP: 10, MW: 7, MD: 2, ML: 1, GF: 24, GA: 5, logo: "bolivia/alwaysready.png" },
        { rank: 2, team: "The Strongest", MP: 9, MW: 6, MD: 3, ML: 0, GF: 15, GA: 8, logo: "bolivia/thestrongest.png" },
        { rank: 3, team: "Bolívar", MP: 10, MW: 5, MD: 3, ML: 2, GF: 24, GA: 10, logo: "bolivia/bolivar.png" },
        { rank: 4, team: "Aurora", MP: 10, MW: 4, MD: 5, ML: 1, GF: 16, GA: 11, logo: "bolivia/aurora.png" },
        { rank: 5, team: "Real Potosí", MP: 9, MW: 3, MD: 4, ML: 2, GF: 14, GA: 7, logo: "bolivia/realpotosi.png" },
        { rank: 6, team: "Blooming", MP: 9, MW: 3, MD: 4, ML: 2, GF: 15, GA: 11, logo: "bolivia/blooming.png" },
        { rank: 7, team: "Nacional Potosí", MP: 9, MW: 3, MD: 3, ML: 3, GF: 12, GA: 10, logo: "bolivia/nacionalpotosi.png" },
        { rank: 8, team: "Independiente Petrolero", MP: 9, MW: 3, MD: 3, ML: 3, GF: 13, GA: 15, logo: "bolivia/independientepetrolero.png" },
        { rank: 9, team: "Academia del Balompie Boliviano", MP: 9, MW: 4, MD: 0, ML: 5, GF: 16, GA: 21, logo: "bolivia/academia.png" },
        { rank: 10, team: "Oriente Petrolero", MP: 10, MW: 3, MD: 2, ML: 5, GF: 13, GA: 15, logo: "bolivia/orientepetrolero.png" },
        { rank: 11, team: "Real Oruro", MP: 9, MW: 3, MD: 2, ML: 4, GF: 17, GA: 22, logo: "bolivia/realoruro.png" },
        { rank: 12, team: "Guabirá", MP: 10, MW: 3, MD: 2, ML: 5, GF: 14, GA: 24, logo: "bolivia/guabira.png" },
        { rank: 13, team: "Universitario de Vinto", MP: 10, MW: 3, MD: 1, ML: 6, GF: 15, GA: 20, logo: "bolivia/universitariovinto.png" },
        { rank: 14, team: "Real Tomayapo", MP: 9, MW: 2, MD: 2, ML: 5, GF: 7, GA: 20, logo: "bolivia/realtomayapo.png" },
        { rank: 15, team: "SA Bulo Bulo", MP: 9, MW: 2, MD: 1, ML: 6, GF: 10, GA: 19, logo: "bolivia/sabulobulo.png" },
        { rank: 16, team: "Gualberto Villarroel San José", MP: 9, MW: 1, MD: 3, ML: 5, GF: 10, GA: 17, logo: "bolivia/gualberto.png" }
    ],
    fixtures: [
        { home: "Nacional Potosí", away: "Real Oruro", date: "2026-07-21" },
        { home: "Independiente Petrolero", away: "Real Potosí", date: "2026-07-22" },
        
        // Matchday 11 - July 25-27
        { home: "Aurora", away: "Academia del Balompie Boliviano", date: "2026-07-25" },
        { home: "Always Ready", away: "SA Bulo Bulo", date: "2026-07-25" },
        { home: "Guabirá", away: "Real Oruro", date: "2026-07-25" },
        { home: "Independiente Petrolero", away: "Oriente Petrolero", date: "2026-07-26" },
        { home: "Nacional Potosí", away: "Real Tomayapo", date: "2026-07-26" },
        { home: "Bolívar", away: "Real Potosí", date: "2026-07-26" },
        { home: "Blooming", away: "The Strongest", date: "2026-07-27" },
        { home: "Gualberto Villarroel San José", away: "Universitario de Vinto", date: "2026-07-27" }
    ]
},

"Finland Veikkausliiga": {
    id: "finland-veikkausliiga",
    logo: "finland/veikkausliiga.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "KuPS", MP: 16, MW: 9, MD: 6, ML: 1, GF: 29, GA: 15, logo: "finland/kups.png" },
        { rank: 2, team: "Inter Turku", MP: 15, MW: 8, MD: 6, ML: 1, GF: 23, GA: 12, logo: "finland/interturku.png" },
        { rank: 3, team: "VPS", MP: 16, MW: 7, MD: 6, ML: 3, GF: 23, GA: 13, logo: "finland/vps.png" },
        { rank: 4, team: "Oulu", MP: 16, MW: 8, MD: 2, ML: 6, GF: 20, GA: 20, logo: "finland/oulu.png" },
        { rank: 5, team: "HJK", MP: 16, MW: 7, MD: 4, ML: 5, GF: 27, GA: 20, logo: "finland/hjk.png" },
        { rank: 6, team: "Gnistan", MP: 16, MW: 7, MD: 4, ML: 5, GF: 25, GA: 20, logo: "finland/gnistan.png" },
        { rank: 7, team: "Turun", MP: 15, MW: 6, MD: 4, ML: 5, GF: 19, GA: 16, logo: "finland/turun.png" },
        { rank: 8, team: "FC Lahti", MP: 15, MW: 5, MD: 4, ML: 6, GF: 18, GA: 15, logo: "finland/fclahti.png" },
        { rank: 9, team: "Ilves", MP: 15, MW: 4, MD: 4, ML: 7, GF: 25, GA: 29, logo: "finland/ilves.png" },
        { rank: 10, team: "SJK", MP: 16, MW: 3, MD: 5, ML: 8, GF: 18, GA: 25, logo: "finland/sjk.png" },
        { rank: 11, team: "FF Jaro", MP: 15, MW: 2, MD: 5, ML: 8, GF: 15, GA: 32, logo: "finland/ffjaro.png" },
        { rank: 12, team: "IFK Mariehamn", MP: 15, MW: 0, MD: 4, ML: 11, GF: 8, GA: 33, logo: "finland/ifkmariehamn.png" }
    ],
    fixtures: [
        // Matchday - July 24
        { home: "FF Jaro", away: "SJK", date: "2026-07-24" },
        
        // Matchday - July 25
        { home: "IFK Mariehamn", away: "Oulu", date: "2026-07-25" },
        { home: "KuPS", away: "VPS", date: "2026-07-25" },
        
        // Matchday - July 26
        { home: "Inter Turku", away: "Gnistan", date: "2026-07-26" },
        { home: "Ilves", away: "FC Lahti", date: "2026-07-26" },
        { home: "HJK", away: "Turun", date: "2026-07-26" },
        
        // Matchday - August 1
        { home: "Turun", away: "IFK Mariehamn", date: "2026-08-01" },
        { home: "FC Lahti", away: "FF Jaro", date: "2026-08-01" },
        { home: "Gnistan", away: "KuPS", date: "2026-08-01" }
    ]
},

/*
"Kyrgyzstan Premier League": {
    id: "kyrgyzstan",
    logo: "kyrgyzstan/kyrgyzstan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Alga", MP: 13, MW: 9, MD: 4, ML: 0, GF: 29, GA: 12, logo: "kyrgyzstan/alga.png" },
        { rank: 2, team: "Muras United", MP: 12, MW: 9, MD: 2, ML: 1, GF: 26, GA: 10, logo: "kyrgyzstan/murasunited.png" },
        { rank: 3, team: "Asia Talas", MP: 14, MW: 9, MD: 2, ML: 3, GF: 33, GA: 26, logo: "kyrgyzstan/asiat alas.png" },
        { rank: 4, team: "Bars", MP: 12, MW: 8, MD: 2, ML: 2, GF: 30, GA: 15, logo: "kyrgyzstan/bars.png" },
        { rank: 5, team: "Ozgon", MP: 13, MW: 8, MD: 2, ML: 3, GF: 25, GA: 14, logo: "kyrgyzstan/ozgon.png" },
        { rank: 6, team: "Alay Osh", MP: 13, MW: 6, MD: 4, ML: 3, GF: 16, GA: 14, logo: "kyrgyzstan/alayosh.png" },
        { rank: 7, team: "Aldier", MP: 14, MW: 5, MD: 5, ML: 4, GF: 21, GA: 21, logo: "kyrgyzstan/aldier.png" },
        { rank: 8, team: "Dordoi Bishkek", MP: 14, MW: 5, MD: 2, ML: 7, GF: 18, GA: 20, logo: "kyrgyzstan/dordoibishkek.png" },
        { rank: 9, team: "Bishkek City", MP: 13, MW: 4, MD: 3, ML: 6, GF: 13, GA: 16, logo: "kyrgyzstan/bishkekcity.png" },
        { rank: 10, team: "Talant", MP: 13, MW: 3, MD: 5, ML: 5, GF: 14, GA: 15, logo: "kyrgyzstan/talant.png" },
        { rank: 11, team: "Asiagoal Bishkek", MP: 13, MW: 3, MD: 4, ML: 6, GF: 13, GA: 18, logo: "kyrgyzstan/asiagoal.png" },
        { rank: 12, team: "Ilbirs", MP: 13, MW: 2, MD: 7, ML: 4, GF: 14, GA: 21, logo: "kyrgyzstan/ilbirs.png" },
        { rank: 13, team: "Neftchi Kochkor-Ata", MP: 13, MW: 4, MD: 1, ML: 8, GF: 14, GA: 22, logo: "kyrgyzstan/neftchi.png" },
        { rank: 14, team: "Toktogul", MP: 13, MW: 4, MD: 0, ML: 9, GF: 12, GA: 22, logo: "kyrgyzstan/toktogul.png" },
        { rank: 15, team: "Abdysh-Ata", MP: 13, MW: 2, MD: 2, ML: 9, GF: 12, GA: 22, logo: "kyrgyzstan/abdyshata.png" },
        { rank: 16, team: "Kyrgyzaltyn", MP: 14, MW: 0, MD: 3, ML: 11, GF: 12, GA: 34, logo: "kyrgyzstan/kyrgyzaltyn.png" }
    ],
    fixtures: [
        // Round 15 - July 8
        { home: "Alay Osh", away: "Toktogul", date: "2026-07-08" },
        { home: "Alga", away: "Dordoi Bishkek", date: "2026-07-08" },
        { home: "Asiagoal Bishkek", away: "Bars", date: "2026-07-08" },
        { home: "Asia Talas", away: "Abdysh-Ata", date: "2026-07-08" },
        { home: "Bishkek City", away: "Muras United", date: "2026-07-08" },
        { home: "Ilbirs", away: "Ozgon", date: "2026-07-08" },
        { home: "Kyrgyzaltyn", away: "Talant", date: "2026-07-08" },
        { home: "Neftchi Kochkor-Ata", away: "Aldier", date: "2026-07-08" }
    ]
},
*/
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
        { rank: 18, team: "Puebla", MP: 17, MW: 3, MD: 3, ML: 11, GF: 21, GA: 42, logo: "mexico/puebla.png" },
        { rank: 19, team: "Atlante", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "mexico/atlante.png" }
    ],
    fixtures: [
        // Matchday 3 - July 22-24
        { home: "Cruz Azul", away: "Puebla", date: "2026-07-22" },
        { home: "Toluca", away: "UNAM Pumas", date: "2026-07-22" },
        
        // Matchday 3 - July 25-27
        { home: "Tigres UANL", away: "Atl. San Luis", date: "2026-07-25" },
        { home: "Club Tijuana", away: "Club Leon", date: "2026-07-25" },
        { home: "Atlante", away: "Club America", date: "2026-07-25" },
        { home: "Guadalajara Chivas", away: "Juarez", date: "2026-07-26" },
        { home: "Santos Laguna", away: "Atlas", date: "2026-07-26" },
        { home: "Necaxa", away: "Monterrey", date: "2026-07-27" },
        { home: "Pachuca", away: "Queretaro", date: "2026-07-27" }
    ]
},

"Colombia Primera A": {
    id: "colombia-primera-a",
    logo: "colombia/primeraa.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Atlético Nacional", MP: 19, MW: 13, MD: 1, ML: 5, GF: 35, GA: 15, logo: "colombia/nacional.png" },
        { rank: 2, team: "Atlético Junior", MP: 19, MW: 11, MD: 2, ML: 6, GF: 31, GA: 24, logo: "colombia/junior.png" },
        { rank: 3, team: "Deportivo Pasto", MP: 19, MW: 10, MD: 4, ML: 5, GF: 29, GA: 25, logo: "colombia/pasto.png" },
        { rank: 4, team: "América de Cali", MP: 19, MW: 10, MD: 3, ML: 6, GF: 25, GA: 15, logo: "colombia/america.png" },
        { rank: 5, team: "Once Caldas", MP: 19, MW: 8, MD: 9, ML: 2, GF: 31, GA: 22, logo: "colombia/oncecaldas.png" },
        { rank: 6, team: "Deportes Tolima", MP: 19, MW: 8, MD: 7, ML: 4, GF: 27, GA: 17, logo: "colombia/tolima.png" },
        { rank: 7, team: "Independiente Santa Fe", MP: 19, MW: 7, MD: 8, ML: 4, GF: 29, GA: 22, logo: "colombia/santafe.png" },
        { rank: 8, team: "Internacional de Bogotá", MP: 19, MW: 7, MD: 7, ML: 5, GF: 26, GA: 26, logo: "colombia/interbogota.png" },
        { rank: 9, team: "Deportivo Cali", MP: 19, MW: 7, MD: 6, ML: 6, GF: 20, GA: 16, logo: "colombia/cali.png" },
        { rank: 10, team: "Millonarios", MP: 19, MW: 7, MD: 5, ML: 7, GF: 31, GA: 23, logo: "colombia/millonarios.png" },
        { rank: 11, team: "Independiente Medellín", MP: 19, MW: 7, MD: 5, ML: 7, GF: 26, GA: 24, logo: "colombia/medellin.png" },
        { rank: 12, team: "Águilas Doradas", MP: 19, MW: 7, MD: 5, ML: 7, GF: 20, GA: 25, logo: "colombia/aguilas.png" },
        { rank: 13, team: "Atlético Bucaramanga", MP: 19, MW: 5, MD: 8, ML: 6, GF: 26, GA: 20, logo: "colombia/bucaramanga.png" },
        { rank: 14, team: "Llaneros FC", MP: 19, MW: 4, MD: 10, ML: 5, GF: 17, GA: 20, logo: "colombia/llaneros.png" },
        { rank: 15, team: "Fortaleza CEIF", MP: 19, MW: 5, MD: 7, ML: 7, GF: 22, GA: 27, logo: "colombia/fortaleza.png" },
        { rank: 16, team: "Jaguares de Córdoba", MP: 19, MW: 5, MD: 3, ML: 11, GF: 20, GA: 33, logo: "colombia/jaguares.png" },
        { rank: 17, team: "Alianza FC", MP: 19, MW: 3, MD: 8, ML: 8, GF: 13, GA: 27, logo: "colombia/alianza.png" },
        { rank: 18, team: "Boyacá Chicó FC", MP: 19, MW: 5, MD: 2, ML: 12, GF: 15, GA: 32, logo: "colombia/chico.png" },
        { rank: 19, team: "Cúcuta Deportivo", MP: 19, MW: 3, MD: 7, ML: 9, GF: 22, GA: 35, logo: "colombia/cucuta.png" },
        { rank: 20, team: "Deportivo Pereira", MP: 19, MW: 1, MD: 7, ML: 11, GF: 15, GA: 32, logo: "colombia/pereira.png" }
    ],
    fixtures: [
        // Matchday - July 24
        { home: "Llaneros FC", away: "Deportivo Pereira", date: "2026-07-24" },
        
        // Matchday - July 25
        { home: "Deportivo Cali", away: "Jaguares de Córdoba", date: "2026-07-25" },
        { home: "Boyacá Chicó FC", away: "Atlético Nacional", date: "2026-07-25" },
        { home: "Independiente Medellín", away: "Deportivo Pasto", date: "2026-07-25" },
        
        // Matchday - July 26
        { home: "Millonarios", away: "Atlético Bucaramanga", date: "2026-07-26" },
        { home: "Deportes Tolima", away: "Atlético Junior", date: "2026-07-26" },
        { home: "Internacional de Bogotá", away: "América de Cali", date: "2026-07-26" },
        { home: "Águilas Doradas", away: "Independiente Santa Fe", date: "2026-07-26" },
        
        // Matchday - July 27
        { home: "Alianza FC", away: "Fortaleza CEIF", date: "2026-07-27" },
        { home: "Once Caldas", away: "Cúcuta Deportivo", date: "2026-07-27" }
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


"Japanese J1 League": {
    id: "j1-league",
    logo: "japan/j1logo.png",
    isBasketball: false,
    teams: [
        // Group A
        { rank: 1, team: "Kashima Antlers", MP: 18, MW: 13, MD: 4, ML: 1, GF: 29, GA: 9, logo: "japan/kashima.png" },
        { rank: 2, team: "FC Tokyo", MP: 18, MW: 9, MD: 6, ML: 3, GF: 28, GA: 16, logo: "japan/fctokyo.png" },
        { rank: 3, team: "Machida Zelvia", MP: 18, MW: 8, MD: 8, ML: 2, GF: 23, GA: 19, logo: "japan/machida.png" },
        { rank: 4, team: "Kawasaki", MP: 18, MW: 7, MD: 4, ML: 7, GF: 23, GA: 27, logo: "japan/kawasaki.png" },
        { rank: 5, team: "Tokyo Verdy", MP: 18, MW: 7, MD: 4, ML: 7, GF: 19, GA: 25, logo: "japan/tokyoverdy.png" },
        { rank: 6, team: "Urawa Reds", MP: 18, MW: 7, MD: 4, ML: 7, GF: 25, GA: 18, logo: "japan/urawa.png" },
        { rank: 7, team: "Yokohama FM", MP: 18, MW: 6, MD: 2, ML: 10, GF: 28, GA: 29, logo: "japan/yokohamafm.png" },
        { rank: 8, team: "Kashiwa Reysol", MP: 18, MW: 6, MD: 1, ML: 11, GF: 21, GA: 24, logo: "japan/kashiwa.png" },
        { rank: 9, team: "Mito HollyHock", MP: 18, MW: 2, MD: 8, ML: 8, GF: 19, GA: 35, logo: "japan/mito.png" },
        { rank: 10, team: "JEF United", MP: 18, MW: 3, MD: 3, ML: 12, GF: 18, GA: 31, logo: "japan/jef.png" },
        
        // Group B
        { rank: 1, team: "Vissel Kobe", MP: 18, MW: 9, MD: 6, ML: 3, GF: 27, GA: 21, logo: "japan/visselkobe.png" },
        { rank: 2, team: "Cerezo Osaka", MP: 18, MW: 7, MD: 6, ML: 5, GF: 26, GA: 19, logo: "japan/cerezo.png" },
        { rank: 3, team: "Nagoya", MP: 18, MW: 8, MD: 5, ML: 5, GF: 31, GA: 28, logo: "japan/nagoya.png" },
        { rank: 4, team: "Sanfrecce", MP: 18, MW: 8, MD: 4, ML: 6, GF: 29, GA: 21, logo: "japan/sanfrecce.png" },
        { rank: 5, team: "Gamba Osaka", MP: 18, MW: 5, MD: 8, ML: 5, GF: 26, GA: 22, logo: "japan/gamba.png" },
        { rank: 6, team: "Okayama", MP: 18, MW: 6, MD: 6, ML: 6, GF: 24, GA: 25, logo: "japan/okayama.png" },
        { rank: 7, team: "Shimizu S-Pulse", MP: 18, MW: 4, MD: 8, ML: 6, GF: 19, GA: 21, logo: "japan/shimizu.png" },
        { rank: 8, team: "Kyoto Sanga", MP: 18, MW: 5, MD: 5, ML: 8, GF: 19, GA: 26, logo: "japan/kyoto.png" },
        { rank: 9, team: "V-Varen Nagasaki", MP: 18, MW: 6, MD: 2, ML: 10, GF: 20, GA: 28, logo: "japan/nagasaki.png" },
        { rank: 10, team: "Avispa Fukuoka", MP: 18, MW: 3, MD: 8, ML: 7, GF: 17, GA: 27, logo: "japan/avispa.png" }
    ],
    fixtures: [
        // Matchday 1 - August 7
        { home: "FC Tokyo", away: "Machida Zelvia", date: "2026-08-07" },
        { home: "Gamba Osaka", away: "Urawa Reds", date: "2026-08-07" },
        { home: "Nagoya", away: "Shimizu S-Pulse", date: "2026-08-07" },
        { home: "Avispa Fukuoka", away: "Vissel Kobe", date: "2026-08-07" },
        { home: "Sanfrecce", away: "JEF United", date: "2026-08-07" },
        { home: "Tokyo Verdy", away: "Kawasaki", date: "2026-08-07" },
        { home: "Yokohama FM", away: "Kashima Antlers", date: "2026-08-07" },
        { home: "V-Varen Nagasaki", away: "Kyoto Sanga", date: "2026-08-07" },
        { home: "Kashiwa Reysol", away: "Mito HollyHock", date: "2026-08-07" },
        { home: "Cerezo Osaka", away: "Okayama", date: "2026-08-07" },
        
        // Matchday 2 - August 14-15
        { home: "Tokyo Verdy", away: "Kashiwa Reysol", date: "2026-08-14" },
        { home: "Urawa Reds", away: "Sanfrecce", date: "2026-08-15" },
        { home: "Vissel Kobe", away: "FC Tokyo", date: "2026-08-15" },
        { home: "JEF United", away: "Machida Zelvia", date: "2026-08-15" },
        { home: "Kashima Antlers", away: "Nagoya", date: "2026-08-15" },
        { home: "Shimizu S-Pulse", away: "Yokohama FM", date: "2026-08-15" },
        { home: "Okayama", away: "V-Varen Nagasaki", date: "2026-08-15" },
        { home: "Kawasaki", away: "Kyoto Sanga", date: "2026-08-15" },
        { home: "Avispa Fukuoka", away: "Cerezo Osaka", date: "2026-08-15" },
        { home: "Mito HollyHock", away: "Gamba Osaka", date: "2026-08-15" }
    ]
},

"Japanese J2 League": {
    id: "j2-league",
    logo: "japan/j2logo.png",
    isBasketball: false,
    teams: [
        // Group A
        { rank: 1, team: "Vegalta Sendai", MP: 18, MW: 11, MD: 5, ML: 2, GF: 32, GA: 15, logo: "japan/vegalta.png" },
        { rank: 2, team: "Blaublitz", MP: 18, MW: 11, MD: 2, ML: 5, GF: 23, GA: 14, logo: "japan/blaublitz.png" },
        { rank: 3, team: "Shonan Bellmare", MP: 18, MW: 8, MD: 4, ML: 6, GF: 25, GA: 19, logo: "japan/shonan.png" },
        { rank: 4, team: "Yokohama FC", MP: 18, MW: 8, MD: 3, ML: 7, GF: 34, GA: 27, logo: "japan/yokohamafc.png" },
        { rank: 5, team: "Sagamihara", MP: 18, MW: 7, MD: 5, ML: 6, GF: 31, GA: 33, logo: "japan/sagamihara.png" },
        { rank: 6, team: "Gunma", MP: 18, MW: 6, MD: 4, ML: 8, GF: 26, GA: 36, logo: "japan/gunma.png" },
        { rank: 7, team: "Montedio Yamagata", MP: 18, MW: 6, MD: 2, ML: 10, GF: 20, GA: 25, logo: "japan/yamagata.png" },
        { rank: 8, team: "Tochigi City FC", MP: 18, MW: 5, MD: 4, ML: 9, GF: 20, GA: 33, logo: "japan/tochigicity.png" },
        { rank: 9, team: "Vanraure Hachinohe", MP: 18, MW: 4, MD: 6, ML: 8, GF: 15, GA: 19, logo: "japan/vanraure.png" },
        { rank: 10, team: "Tochigi SC", MP: 18, MW: 4, MD: 5, ML: 9, GF: 23, GA: 28, logo: "japan/tochigisc.png" },
        
        // Group B
        { rank: 1, team: "Ventforet Kofu", MP: 18, MW: 10, MD: 3, ML: 5, GF: 21, GA: 13, logo: "japan/ventforet.png" },
        { rank: 2, team: "Consadole Sapporo", MP: 18, MW: 9, MD: 2, ML: 7, GF: 26, GA: 22, logo: "japan/consadole.png" },
        { rank: 3, team: "Iwaki FC", MP: 18, MW: 7, MD: 6, ML: 5, GF: 22, GA: 18, logo: "japan/iwaki.png" },
        { rank: 4, team: "Omiya Ardija", MP: 18, MW: 9, MD: 2, ML: 7, GF: 38, GA: 28, logo: "japan/omiya.png" },
        { rank: 5, team: "Fujieda MYFC", MP: 18, MW: 6, MD: 9, ML: 3, GF: 21, GA: 17, logo: "japan/fujieda.png" },
        { rank: 6, team: "F.C. Gifu", MP: 18, MW: 8, MD: 3, ML: 7, GF: 24, GA: 26, logo: "japan/gifu.png" },
        { rank: 7, team: "Matsumoto Yamaga", MP: 18, MW: 6, MD: 6, ML: 6, GF: 31, GA: 21, logo: "japan/matsumoto.png" },
        { rank: 8, team: "Júbilo Iwata", MP: 18, MW: 5, MD: 6, ML: 7, GF: 16, GA: 23, logo: "japan/iwata.png" },
        { rank: 9, team: "Fukushima United", MP: 18, MW: 4, MD: 4, ML: 10, GF: 28, GA: 41, logo: "japan/fukushima.png" },
        { rank: 10, team: "Nagano", MP: 18, MW: 3, MD: 5, ML: 10, GF: 15, GA: 33, logo: "japan/nagano.png" },
        
        // Group C
        { rank: 1, team: "Kataller Toyama", MP: 18, MW: 10, MD: 5, ML: 3, GF: 37, GA: 24, logo: "japan/toyama.png" },
        { rank: 2, team: "Niigata", MP: 18, MW: 9, MD: 5, ML: 4, GF: 21, GA: 17, logo: "japan/niigata.png" },
        { rank: 3, team: "Tokushima Vortis", MP: 18, MW: 9, MD: 3, ML: 6, GF: 36, GA: 22, logo: "japan/tokushimavortis.png" },
        { rank: 4, team: "Kochi United", MP: 18, MW: 8, MD: 4, ML: 6, GF: 23, GA: 21, logo: "japan/kochi.png" },
        { rank: 5, team: "Ehime FC", MP: 18, MW: 8, MD: 3, ML: 7, GF: 25, GA: 18, logo: "japan/ehime.png" },
        { rank: 6, team: "Kanazawa", MP: 18, MW: 5, MD: 7, ML: 6, GF: 15, GA: 21, logo: "japan/kanazawa.png" },
        { rank: 7, team: "Nara Club", MP: 18, MW: 5, MD: 4, ML: 9, GF: 25, GA: 34, logo: "japan/nara.png" },
        { rank: 8, team: "Osaka", MP: 18, MW: 3, MD: 8, ML: 7, GF: 15, GA: 18, logo: "japan/osaka.png" },
        { rank: 9, team: "Imabari", MP: 18, MW: 5, MD: 4, ML: 9, GF: 14, GA: 18, logo: "japan/imabari.png" },
        { rank: 10, team: "Kamatamare Sanuki", MP: 18, MW: 5, MD: 3, ML: 10, GF: 14, GA: 32, logo: "japan/kamatamare.png" },
        
        // Group D
        { rank: 1, team: "Tegevajaro Miyazaki", MP: 18, MW: 15, MD: 2, ML: 1, GF: 35, GA: 11, logo: "japan/miyazaki.png" },
        { rank: 2, team: "Kagoshima United", MP: 18, MW: 8, MD: 5, ML: 5, GF: 23, GA: 15, logo: "japan/kagoshima.png" },
        { rank: 3, team: "Sagan Tosu", MP: 18, MW: 8, MD: 6, ML: 4, GF: 24, GA: 14, logo: "japan/sagantosu.png" },
        { rank: 4, team: "Renofa Yamaguchi", MP: 18, MW: 7, MD: 5, ML: 6, GF: 24, GA: 22, logo: "japan/renofa.png" },
        { rank: 5, team: "Roasso Kumamoto", MP: 18, MW: 8, MD: 2, ML: 8, GF: 20, GA: 20, logo: "japan/roasso.png" },
        { rank: 6, team: "Tottori", MP: 18, MW: 6, MD: 5, ML: 7, GF: 20, GA: 24, logo: "japan/tottori.png" },
        { rank: 7, team: "Oita Trinita", MP: 18, MW: 6, MD: 3, ML: 9, GF: 18, GA: 18, logo: "japan/oita.png" },
        { rank: 8, team: "Reilac Shiga", MP: 18, MW: 6, MD: 2, ML: 10, GF: 15, GA: 28, logo: "japan/reilac.png" },
        { rank: 9, team: "Ryukyu", MP: 18, MW: 2, MD: 7, ML: 9, GF: 13, GA: 25, logo: "japan/ryukyu.png" },
        { rank: 10, team: "Kitakyushu", MP: 18, MW: 4, MD: 3, ML: 11, GF: 17, GA: 32, logo: "japan/kitakyushu.png" }
    ],
    fixtures: [
        // Matchday 2 - August 8
        { home: "Tegevajaro Miyazaki", away: "Yokohama FC", date: "2026-08-08" },
        { home: "Omiya Ardija", away: "Niigata", date: "2026-08-08" },
        { home: "Oita Trinita", away: "Shonan Bellmare", date: "2026-08-08" },
        { home: "Montedio Yamagata", away: "Tochigi City FC", date: "2026-08-08" },
        { home: "Iwaki FC", away: "Imabari", date: "2026-08-08" },
        { home: "Consadole Sapporo", away: "Tokushima Vortis", date: "2026-08-08" },
        { home: "Vanraure Hachinohe", away: "Kataller Toyama", date: "2026-08-08" },
        { home: "Fujieda MYFC", away: "Vegalta Sendai", date: "2026-08-08" },
        { home: "Sagan Tosu", away: "Ventforet Kofu", date: "2026-08-08" },
        { home: "Júbilo Iwata", away: "Blaublitz", date: "2026-08-08" },
        
        // Matchday 3 - August 15-16
        { home: "Niigata", away: "Consadole Sapporo", date: "2026-08-15" },
        { home: "Shonan Bellmare", away: "Montedio Yamagata", date: "2026-08-15" },
        { home: "Vegalta Sendai", away: "Oita Trinita", date: "2026-08-15" },
        { home: "Tochigi City FC", away: "Vanraure Hachinohe", date: "2026-08-15" },
        { home: "Imabari", away: "Omiya Ardija", date: "2026-08-15" },
        { home: "Fujieda MYFC", away: "Iwaki FC", date: "2026-08-15" },
        { home: "Blaublitz", away: "Kataller Toyama", date: "2026-08-15" },
        { home: "Ventforet Kofu", away: "Tegevajaro Miyazaki", date: "2026-08-15" },
        { home: "Tokushima Vortis", away: "Sagan Tosu", date: "2026-08-15" },
        { home: "Yokohama FC", away: "Júbilo Iwata", date: "2026-08-16" }
    ]
},

"WNBA": {
    id: "wnba",
    logo: "wnba/wnbalogo.png",
    isBasketball: true,
    teams: [
        // Eastern Conference
        { rank: 1, team: "New York Liberty", GP: 26, GW: 14, GL: 12, points_for: 2314, points_against: 2196, logo: "wnba/liberty.png" },
        { rank: 2, team: "Atlanta Dream", GP: 26, GW: 16, GL: 10, points_for: 2288, points_against: 2210, logo: "wnba/dream.png" },
        { rank: 3, team: "Indiana Fever", GP: 26, GW: 16, GL: 10, points_for: 2366, points_against: 2236, logo: "wnba/fever.png" },
        { rank: 4, team: "Washington Mystics", GP: 24, GW: 12, GL: 12, points_for: 1978, points_against: 2016, logo: "wnba/mystics.png" },
        { rank: 5, team: "Toronto Tempo", GP: 26, GW: 10, GL: 16, points_for: 2236, points_against: 2340, logo: "wnba/tempo.png" },
        { rank: 6, team: "Chicago Sky", GP: 26, GW: 9, GL: 17, points_for: 2132, points_against: 2366, logo: "wnba/sky.png" },
        { rank: 7, team: "Connecticut Sun", GP: 26, GW: 7, GL: 19, points_for: 1976, points_against: 2288, logo: "wnba/sun.png" },
        
        // Western Conference
        { rank: 1, team: "Minnesota Lynx", GP: 26, GW: 20, GL: 6, points_for: 2340, points_against: 2106, logo: "wnba/lynx.png" },
        { rank: 2, team: "Golden State Valkyries", GP: 26, GW: 19, GL: 7, points_for: 2210, points_against: 2054, logo: "wnba/valkyries.png" },
        { rank: 3, team: "Las Vegas Aces", GP: 25, GW: 18, GL: 7, points_for: 2275, points_against: 2050, logo: "wnba/aces.png" },
        { rank: 4, team: "Dallas Wings", GP: 26, GW: 17, GL: 9, points_for: 2262, points_against: 2132, logo: "wnba/wings.png" },
        { rank: 5, team: "Portland Fire", GP: 26, GW: 11, GL: 15, points_for: 2210, points_against: 2340, logo: "wnba/fire.png" },
        { rank: 6, team: "Los Angeles Sparks", GP: 25, GW: 10, GL: 15, points_for: 2200, points_against: 2300, logo: "wnba/sparks.png" },
        { rank: 7, team: "Phoenix Mercury", GP: 27, GW: 9, GL: 18, points_for: 2160, points_against: 2376, logo: "wnba/mercury.png" },
        { rank: 8, team: "Seattle Storm", GP: 27, GW: 6, GL: 21, points_for: 2079, points_against: 2376, logo: "wnba/storm.png" }
    ],
    fixtures: [
        // Wednesday, July 22
        { home: "Phoenix Mercury", away: "Los Angeles Sparks", date: "2026-07-22" },
        { home: "Minnesota Lynx", away: "Seattle Storm", date: "2026-07-22" },
        
        // Thursday, July 23
        { home: "Chicago Sky", away: "New York Liberty", date: "2026-07-23" },
        { home: "Las Vegas Aces", away: "Washington Mystics", date: "2026-07-23" },
        { home: "Connecticut Sun", away: "Indiana Fever", date: "2026-07-23" },
        { home: "Dallas Wings", away: "Portland Fire", date: "2026-07-23" },
        
        // Sunday, July 26 - All-Star Game
        { home: "Team Spoon", away: "Team Coop", date: "2026-07-26" },
        
        // Wednesday, July 29
        { home: "Connecticut Sun", away: "Washington Mystics", date: "2026-07-29" },
        { home: "Toronto Tempo", away: "Minnesota Lynx", date: "2026-07-29" },
        { home: "Indiana Fever", away: "Seattle Storm", date: "2026-07-29" },
        { home: "Portland Fire", away: "Las Vegas Aces", date: "2026-07-29" },
        { home: "New York Liberty", away: "Los Angeles Sparks", date: "2026-07-29" },
        
        // Thursday, July 30
        { home: "Atlanta Dream", away: "Dallas Wings", date: "2026-07-30" },
        { home: "Golden State Valkyries", away: "Phoenix Mercury", date: "2026-07-30" },
        
        // Friday, July 31
        { home: "Minnesota Lynx", away: "Toronto Tempo", date: "2026-07-31" },
        { home: "Connecticut Sun", away: "Chicago Sky", date: "2026-07-31" },
        { home: "New York Liberty", away: "Las Vegas Aces", date: "2026-07-31" }
    ]
},
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
        // Matchday 10 - May 5-6
    { home: "Qingdao Youth Island", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
    { home: "Shandong Taishan", away: "Shanghai Shenhua", home_score: 4, away_score: 1 },
    { home: "Shenyang Urban", away: "Chengdu Rongcheng", home_score: 0, away_score: 1 },
    { home: "Chongqing Tonglianglong", away: "Henan", home_score: 1, away_score: 1 },
    { home: "Wuhan Three Towns", away: "Qingdao Hainiu", home_score: 1, away_score: 3 },
    { home: "Beijing Guoan", away: "Dalian Yingbo", home_score: 3, away_score: 0 },
    { home: "Shanghai Port", away: "Shenzhen Peng City", home_score: 1, away_score: 1 },
    { home: "Yunnan Yukun", away: "Zhejiang", home_score: 1, away_score: 2 },
    
    // Matchday 11 - May 9-10
    { home: "Shanghai Shenhua", away: "Chongqing Tonglianglong", home_score: 2, away_score: 2 },
    { home: "Chengdu Rongcheng", away: "Henan", home_score: 3, away_score: 0 },
    { home: "Qingdao Youth Island", away: "Wuhan Three Towns", home_score: 1, away_score: 1 },
    { home: "Shenzhen Peng City", away: "Shandong Taishan", home_score: 1, away_score: 2 },
    { home: "Shenyang Urban", away: "Yunnan Yukun", home_score: 1, away_score: 2 },
    { home: "Zhejiang", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
    { home: "Beijing Guoan", away: "Shanghai Port", home_score: 2, away_score: 2 },
    { home: "Qingdao Hainiu", away: "Dalian Yingbo", home_score: 3, away_score: 1 },
    
    // Matchday 12 - May 15-16
    { home: "Henan", away: "Shenzhen Peng City", home_score: 1, away_score: 0 },
    { home: "Tianjin Jinmen Tiger", away: "Chengdu Rongcheng", home_score: 1, away_score: 2 },
    { home: "Shanghai Port", away: "Zhejiang", home_score: 2, away_score: 2 },
    { home: "Dalian Yingbo", away: "Qingdao Youth Island", home_score: 2, away_score: 3 },
    { home: "Beijing Guoan", away: "Qingdao Hainiu", home_score: 4, away_score: 2 },
    { home: "Wuhan Three Towns", away: "Shenyang Urban", home_score: 2, away_score: 2 },
    { home: "Shandong Taishan", away: "Chongqing Tonglianglong", home_score: 3, away_score: 1 },
    { home: "Yunnan Yukun", away: "Shanghai Shenhua", home_score: 1, away_score: 0 },
    
    // Matchday 13 - May 19-20
    { home: "Tianjin Jinmen Tiger", away: "Henan", home_score: 1, away_score: 2 },
    { home: "Shenzhen Peng City", away: "Dalian Yingbo", home_score: 1, away_score: 1 },
    { home: "Qingdao Youth Island", away: "Beijing Guoan", home_score: 1, away_score: 1 },
    { home: "Chengdu Rongcheng", away: "Shanghai Port", home_score: 0, away_score: 1 },
    { home: "Shenyang Urban", away: "Qingdao Hainiu", home_score: 2, away_score: 1 },
    { home: "Shanghai Shenhua", away: "Wuhan Three Towns", home_score: 2, away_score: 2 },
    { home: "Chongqing Tonglianglong", away: "Yunnan Yukun", home_score: 0, away_score: 0 },
    { home: "Zhejiang", away: "Shandong Taishan", home_score: 4, away_score: 1 },
    
    // Matchday 14 - May 23-24
    { home: "Shanghai Port", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 1 },
    { home: "Beijing Guoan", away: "Henan", home_score: 1, away_score: 2 },
    { home: "Dalian Yingbo", away: "Chengdu Rongcheng", home_score: 2, away_score: 0 },
    { home: "Qingdao Hainiu", away: "Chongqing Tonglianglong", home_score: 0, away_score: 1 },
    { home: "Yunnan Yukun", away: "Qingdao Youth Island", home_score: 2, away_score: 3 },
    { home: "Shandong Taishan", away: "Wuhan Three Towns", home_score: 3, away_score: 3 },
    { home: "Zhejiang", away: "Shenyang Urban", home_score: 0, away_score: 5 },
    { home: "Shanghai Shenhua", away: "Shenzhen Peng City", home_score: 1, away_score: 2 },
    
    // Matchday 15 - May 29-31
    { home: "Shenyang Urban", away: "Shanghai Port", home_score: 3, away_score: 2 },
    { home: "Qingdao Youth Island", away: "Shanghai Shenhua", home_score: 2, away_score: 2 },
    { home: "Henan", away: "Zhejiang", home_score: 0, away_score: 2 },
    { home: "Chengdu Rongcheng", away: "Shandong Taishan", home_score: 1, away_score: 0 },
    { home: "Chongqing Tonglianglong", away: "Beijing Guoan", home_score: 2, away_score: 3 },
    { home: "Shenzhen Peng City", away: "Qingdao Hainiu", home_score: 3, away_score: 2 },
    { home: "Tianjin Jinmen Tiger", away: "Dalian Yingbo", home_score: 1, away_score: 0 },
    { home: "Wuhan Three Towns", away: "Yunnan Yukun", home_score: 1, away_score: 1 },
    
    // Matchday 16 - June 26-27
    { home: "Qingdao Hainiu", away: "Yunnan Yukun", home_score: 4, away_score: 2 },
    { home: "Shenyang Urban", away: "Shandong Taishan", home_score: 1, away_score: 5 },
    { home: "Henan", away: "Shanghai Port", home_score: 1, away_score: 2 },
    { home: "Shenzhen Peng City", away: "Chengdu Rongcheng", home_score: 2, away_score: 3 },
    { home: "Chongqing Tonglianglong", away: "Tianjin Jinmen Tiger", home_score: 1, away_score: 0 },
    { home: "Beijing Guoan", away: "Wuhan Three Towns", home_score: 1, away_score: 0 }
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
"Australian NPL Victoria": [
    // Round 18 - June 26
    { home: "St Albans", away: "Altona Magic", home_score: 2, away_score: 1 },
    { home: "Avondale FC", away: "Dandenong Thunder", home_score: 11, away_score: 0 },
    { home: "George Cross", away: "Dandenong City", home_score: 3, away_score: 2 },
    { home: "Heidelberg Utd", away: "Preston Lions", home_score: 0, away_score: 1 },
    { home: "Hume City", away: "Green Gully", home_score: 3, away_score: 2 },
    { home: "Bentleigh Greens", away: "South Melbourne", home_score: 1, away_score: 5 },
    { home: "Oakleigh Cannons", away: "Melbourne City U21", home_score: 3, away_score: 1 },
    
    // Round 16 - June 7
    { home: "South Melbourne", away: "Altona Magic", home_score: 2, away_score: 3 },
    { home: "Dandenong Thunder", away: "George Cross", home_score: 2, away_score: 3 },
    { home: "Bentleigh Greens", away: "Hume City", home_score: 1, away_score: 5 },
    { home: "Dandenong City", away: "Heidelberg Utd", home_score: 4, away_score: 1 },
    { home: "Green Gully", away: "Avondale FC", home_score: 0, away_score: 2 },
    { home: "Oakleigh Cannons", away: "St Albans", home_score: 2, away_score: 2 },
    
    // Round 15 - May 29-31
    { home: "St Albans", away: "Preston Lions", home_score: 0, away_score: 1 },
    { home: "Altona Magic", away: "Oakleigh Cannons", home_score: 0, away_score: 2 },
    { home: "Avondale FC", away: "Bentleigh Greens", home_score: 4, away_score: 0 },
    { home: "George Cross", away: "Green Gully", home_score: 0, away_score: 0 },
    { home: "Hume City", away: "South Melbourne", home_score: 1, away_score: 1 },
    { home: "Melbourne City U21", away: "Dandenong City", home_score: 0, away_score: 1 },
    { home: "Heidelberg Utd", away: "Dandenong Thunder", home_score: 4, away_score: 2 },
    
    // Round 14 - May 22-25
    { home: "South Melbourne", away: "Avondale FC", home_score: 0, away_score: 4 },
    { home: "Melbourne City U21", away: "Dandenong Thunder", home_score: 2, away_score: 0 },
    { home: "Preston Lions", away: "Oakleigh Cannons", home_score: 0, away_score: 1 },
    { home: "Altona Magic", away: "Hume City", home_score: 1, away_score: 3 },
    { home: "Bentleigh Greens", away: "George Cross", home_score: 0, away_score: 0 },
    { home: "Dandenong City", away: "St Albans", home_score: 2, away_score: 1 },
    { home: "Green Gully", away: "Heidelberg Utd", home_score: 0, away_score: 1 },
    
    // Round 13 - May 15-18
    { home: "South Melbourne", away: "George Cross", home_score: 0, away_score: 4 },
    { home: "Altona Magic", away: "Preston Lions", home_score: 1, away_score: 0 },
    { home: "Dandenong Thunder", away: "St Albans", home_score: 2, away_score: 2 },
    { home: "Hume City", away: "Avondale FC", home_score: 3, away_score: 0 },
    { home: "Bentleigh Greens", away: "Heidelberg Utd", home_score: 2, away_score: 2 },
    { home: "Dandenong City", away: "Oakleigh Cannons", home_score: 1, away_score: 1 },
    { home: "Green Gully", away: "Melbourne City U21", home_score: 1, away_score: 3 },
    
    // Round 12 - May 8-9
    { home: "Avondale FC", away: "Altona Magic", home_score: 5, away_score: 1 },
    { home: "George Cross", away: "Hume City", home_score: 2, away_score: 4 },
    { home: "Bentleigh Greens", away: "Melbourne City U21", home_score: 0, away_score: 7 },
    { home: "Heidelberg Utd", away: "South Melbourne", home_score: 4, away_score: 0 },
    { home: "Oakleigh Cannons", away: "Dandenong Thunder", home_score: 2, away_score: 0 },
    { home: "Preston Lions", away: "Dandenong City", home_score: 1, away_score: 0 },
    { home: "St Albans", away: "Green Gully", home_score: 1, away_score: 0 }
],
"Swedish Ettan Norra": [
    // Round 14 - June 24
    { home: "Karlbergs", away: "Pitea", home_score: 3, away_score: 1 },
    
    // Round 13 - June 18-21
    { home: "Assyriska FF", away: "Karlstad", home_score: 2, away_score: 2 },
    { home: "Enkoping SK", away: "Umea FC", home_score: 3, away_score: 1 },
    { home: "Pitea", away: "AFC Eskilstuna", home_score: 2, away_score: 2 },
    { home: "Arlanda", away: "Stocksund", home_score: 1, away_score: 0 },
    { home: "Gefle", away: "Stockholm Internazionale", home_score: 0, away_score: 2 },
    { home: "Hammarby TFF", away: "Jarfalla", home_score: 1, away_score: 1 },
    { home: "Sollentuna", away: "FBK Karlstad", home_score: 0, away_score: 2 },
    { home: "Vasalund", away: "Karlbergs", home_score: 0, away_score: 4 },
    
    // Round 12 - June 12-14
    { home: "AFC Eskilstuna", away: "Assyriska FF", home_score: 1, away_score: 0 },
    { home: "Enkoping SK", away: "Vasalund", home_score: 1, away_score: 1 },
    { home: "Stockholm Internazionale", away: "FBK Karlstad", home_score: 3, away_score: 1 },
    { home: "Karlbergs", away: "Hammarby TFF", home_score: 0, away_score: 2 },
    { home: "Jarfalla", away: "Arlanda", home_score: 2, away_score: 3 },
    { home: "Stocksund", away: "Sollentuna", home_score: 3, away_score: 3 },
    { home: "Karlstad", away: "Gefle", home_score: 2, away_score: 0 },
    { home: "Umea FC", away: "Pitea", home_score: 2, away_score: 0 },
    
    // Round 11 - June 4-8
    { home: "Jarfalla", away: "Stocksund", home_score: 1, away_score: 6 },
    { home: "Stockholm Internazionale", away: "Vasalund", home_score: 4, away_score: 1 },
    { home: "Arlanda", away: "Assyriska FF", home_score: 2, away_score: 0 },
    { home: "Pitea", away: "Enkoping SK", home_score: 0, away_score: 2 },
    { home: "Sollentuna", away: "Umea FC", home_score: 1, away_score: 1 },
    { home: "Gefle", away: "Hammarby TFF", home_score: 0, away_score: 4 },
    { home: "FBK Karlstad", away: "Karlstad", home_score: 2, away_score: 3 },
    { home: "AFC Eskilstuna", away: "Karlbergs", home_score: 3, away_score: 2 },
    
    // Round 10 - May 30 - June 3
    { home: "Vasalund", away: "Jarfalla", home_score: 3, away_score: 1 },
    { home: "Assyriska FF", away: "Enkoping SK", home_score: 4, away_score: 2 },
    { home: "Arlanda", away: "Gefle", home_score: 2, away_score: 3 },
    { home: "Karlbergs", away: "FBK Karlstad", home_score: 1, away_score: 1 },
    { home: "Pitea", away: "Stockholm Internazionale", home_score: 2, away_score: 2 },
    { home: "Umea FC", away: "Stocksund", home_score: 2, away_score: 2 },
    { home: "Hammarby TFF", away: "AFC Eskilstuna", home_score: 1, away_score: 2 },
    { home: "Karlstad", away: "Sollentuna", home_score: 0, away_score: 0 }
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