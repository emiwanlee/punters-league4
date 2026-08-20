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
        { rank: 1, team: "Deportivo Camioneros", MP: 29, MW: 15, MD: 9, ML: 5, GF: 35, GA: 18, logo: "argentina/depcamioneros.png" },
        { rank: 2, team: "Excursionistas", MP: 29, MW: 15, MD: 8, ML: 6, GF: 40, GA: 20, logo: "argentina/excursionistas.png" },
        { rank: 3, team: "Talleres Remedios", MP: 29, MW: 15, MD: 8, ML: 6, GF: 32, GA: 15, logo: "argentina/talleresremedios.png" },
        { rank: 4, team: "Arsenal Sarandi", MP: 28, MW: 14, MD: 10, ML: 4, GF: 38, GA: 20, logo: "argentina/arsenalsarandi.png" },
        { rank: 5, team: "Dálmine", MP: 29, MW: 14, MD: 10, ML: 5, GF: 32, GA: 16, logo: "argentina/dalmine.png" },
        { rank: 6, team: "Sportivo Italiano", MP: 29, MW: 13, MD: 10, ML: 6, GF: 32, GA: 22, logo: "argentina/sportivoitaliano.png" },
        { rank: 7, team: "Real Pilar", MP: 29, MW: 12, MD: 8, ML: 9, GF: 33, GA: 31, logo: "argentina/realpilar.png" },
        { rank: 8, team: "Dep. Armenio", MP: 29, MW: 11, MD: 8, ML: 10, GF: 32, GA: 33, logo: "argentina/deparmenio.png" },
        { rank: 9, team: "Laferrere", MP: 28, MW: 11, MD: 8, ML: 9, GF: 32, GA: 33, logo: "argentina/laferrere.png" },
        { rank: 10, team: "Comunicaciones", MP: 29, MW: 10, MD: 9, ML: 10, GF: 31, GA: 29, logo: "argentina/comunicaciones.png" },
        { rank: 11, team: "Argentino de Merlo", MP: 29, MW: 10, MD: 8, ML: 11, GF: 29, GA: 29, logo: "argentina/argentinomerlo.png" },
        { rank: 12, team: "Deportivo Merlo", MP: 29, MW: 9, MD: 10, ML: 10, GF: 33, GA: 45, logo: "argentina/deportivomerlo.png" },
        { rank: 13, team: "San Martín Burzaco", MP: 28, MW: 8, MD: 12, ML: 8, GF: 27, GA: 26, logo: "argentina/sanmartinburzaco.png" },
        { rank: 14, team: "Argentino Quilmes", MP: 29, MW: 7, MD: 13, ML: 9, GF: 25, GA: 28, logo: "argentina/argentoquilmes.png" },
        { rank: 15, team: "Dock Sud", MP: 28, MW: 7, MD: 12, ML: 9, GF: 28, GA: 26, logo: "argentina/docksud.png" },
        { rank: 16, team: "Liniers", MP: 29, MW: 7, MD: 11, ML: 11, GF: 21, GA: 29, logo: "argentina/liniers.png" },
        { rank: 17, team: "Brown (A)", MP: 29, MW: 7, MD: 10, ML: 12, GF: 19, GA: 30, logo: "argentina/brown.png" },
        { rank: 18, team: "Villa San Carlos", MP: 29, MW: 6, MD: 11, ML: 12, GF: 28, GA: 35, logo: "argentina/villasantacarlos.png" },
        { rank: 19, team: "Flandria", MP: 29, MW: 7, MD: 7, ML: 15, GF: 23, GA: 36, logo: "argentina/flandria.png" },
        { rank: 20, team: "UAI Urquiza", MP: 29, MW: 3, MD: 18, ML: 8, GF: 14, GA: 24, logo: "argentina/uaiurquiza.png" },
        { rank: 21, team: "Defensores Unidos", MP: 29, MW: 5, MD: 11, ML: 13, GF: 24, GA: 35, logo: "argentina/defensoresunidos.png" },
        { rank: 22, team: "Ituzaingó", MP: 29, MW: 1, MD: 9, ML: 19, GF: 18, GA: 46, logo: "argentina/ituzaingo.png" }
    ],
    fixtures: [
        // Matchday 32 - August 22
        { home: "Defensores Unidos", away: "San Martín Burzaco", date: "2026-08-22" },
        { home: "Brown (A)", away: "UAI Urquiza", date: "2026-08-22" },
        { home: "Flandria", away: "Liniers", date: "2026-08-22" },
        { home: "Dep. Armenio", away: "Real Pilar", date: "2026-08-22" },
        { home: "Laferrere", away: "Dálmine", date: "2026-08-22" },
        { home: "Argentino Quilmes", away: "Villa San Carlos", date: "2026-08-22" },
        { home: "Comunicaciones", away: "Sportivo Italiano", date: "2026-08-22" },
        { home: "Ituzaingó", away: "Deportivo Merlo", date: "2026-08-22" }
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
        
        // Matchday 6 - August 21-25
        { home: "Aldosivi", away: "Unión", date: "2026-08-21" },
        { home: "Estudiantes de Río Cuarto", away: "San Lorenzo", date: "2026-08-22" },
        { home: "Gimnasia LP", away: "Gimnasia y Esgirma", date: "2026-08-22" },
        { home: "Atlético Tucumán", away: "Instituto", date: "2026-08-22" },
        { home: "Independiente", away: "Independiente Rivadavia", date: "2026-08-22" },
        { home: "Huracán", away: "Deportivo Riestra", date: "2026-08-23" },
        { home: "Newell's", away: "Banfield", date: "2026-08-23" },
        { home: "Barracas Central", away: "Platense", date: "2026-08-23" },
        { home: "Sarmiento", away: "Estudiantes", date: "2026-08-23" },
        { home: "Belgrano", away: "Defensa y Justicia", date: "2026-08-23" },
        { home: "River Plate", away: "Vélez Sársfield", date: "2026-08-23" },
        { home: "Racing Club", away: "Boca", date: "2026-08-24" },
        { home: "Tigre", away: "Central Córdoba", date: "2026-08-24" },
        { home: "Talleres", away: "Central", date: "2026-08-25" }
    ]
},
"Australian NPL ACT": {
    id: "australia-npl-act",
    logo: "australia/nplact.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Canberra Croatia", MP: 19, MW: 16, MD: 1, ML: 2, GF: 60, GA: 24, logo: "australia/canberracroatia.png" },
        { rank: 2, team: "Tigers FC", MP: 20, MW: 14, MD: 2, ML: 4, GF: 59, GA: 24, logo: "australia/tigersfc.png" },
        { rank: 3, team: "Monaro Panthers", MP: 19, MW: 14, MD: 1, ML: 4, GF: 66, GA: 26, logo: "australia/monaropanthers.png" },
        { rank: 4, team: "Tuggeranong Utd", MP: 19, MW: 13, MD: 0, ML: 6, GF: 47, GA: 39, logo: "australia/tuggeranong.png" },
        { rank: 5, team: "Queanbeyan City", MP: 19, MW: 11, MD: 2, ML: 6, GF: 41, GA: 28, logo: "australia/queanbeyan.png" },
        { rank: 6, team: "Canberra Juventus", MP: 19, MW: 11, MD: 0, ML: 8, GF: 39, GA: 37, logo: "australia/canberrajuv.png" },
        { rank: 7, team: "Canberra Olympic", MP: 19, MW: 6, MD: 2, ML: 11, GF: 40, GA: 51, logo: "australia/canberraolympic.png" },
        { rank: 8, team: "O'Connor Knights", MP: 19, MW: 6, MD: 2, ML: 11, GF: 24, GA: 38, logo: "australia/oconnorknights.png" },
        { rank: 9, team: "Belconnen Utd.", MP: 19, MW: 2, MD: 3, ML: 14, GF: 25, GA: 46, logo: "australia/belconnenutd.png" },
        { rank: 10, team: "Brindabella", MP: 19, MW: 3, MD: 0, ML: 16, GF: 11, GA: 61, logo: "australia/brindabella.png" },
        { rank: 11, team: "Canberra White Eagles", MP: 19, MW: 2, MD: 1, ML: 16, GF: 17, GA: 55, logo: "australia/whiteeagles.png" }
    ],
    fixtures: [
        // Round 22 - August 22
        { home: "Canberra Olympic", away: "Brindabella", date: "2026-08-22" },
        { home: "Canberra Croatia", away: "Belconnen Utd.", date: "2026-08-22" },
        { home: "Canberra White Eagles", away: "Monaro Panthers", date: "2026-08-22" },
        { home: "Queanbeyan City", away: "O'Connor Knights", date: "2026-08-22" },
        { home: "Tuggeranong Utd", away: "Canberra Juventus", date: "2026-08-22" }
    ]

},
"Australian NPL Victoria": {
    id: "australia-npl-victoria",
    logo: "australia/nplvictoria.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Oakleigh Cannons", MP: 23, MW: 14, MD: 6, ML: 3, GF: 45, GA: 20, logo: "australia/oakleigh.png" },
        { rank: 2, team: "Hume City", MP: 23, MW: 13, MD: 4, ML: 6, GF: 43, GA: 28, logo: "australia/humecity.png" },
        { rank: 3, team: "Avondale FC", MP: 23, MW: 13, MD: 2, ML: 8, GF: 59, GA: 31, logo: "australia/avondale.png" },
        { rank: 4, team: "South Melbourne", MP: 23, MW: 12, MD: 2, ML: 9, GF: 35, GA: 33, logo: "australia/southmelbourne.png" },
        { rank: 5, team: "Preston Lions", MP: 22, MW: 13, MD: 4, ML: 5, GF: 33, GA: 18, logo: "australia/prestonlions.png" },
        { rank: 6, team: "Heidelberg United", MP: 23, MW: 9, MD: 7, ML: 7, GF: 34, GA: 28, logo: "australia/heidelberg.png" },
        { rank: 7, team: "Caroline Springs George Cross", MP: 23, MW: 7, MD: 11, ML: 5, GF: 29, GA: 29, logo: "australia/georgecross.png" },
        { rank: 8, team: "Melbourne City NPL Seniors", MP: 22, MW: 8, MD: 6, ML: 8, GF: 39, GA: 27, logo: "australia/melbournecity.png" },
        { rank: 9, team: "Altona Magic", MP: 23, MW: 7, MD: 6, ML: 10, GF: 27, GA: 37, logo: "australia/altonamagic.png" },
        { rank: 10, team: "St Albans Saints", MP: 23, MW: 7, MD: 6, ML: 10, GF: 27, GA: 41, logo: "australia/stalbans.png" },
        { rank: 11, team: "Dandenong City", MP: 23, MW: 8, MD: 6, ML: 9, GF: 30, GA: 29, logo: "australia/dandenongcity.png" },
        { rank: 12, team: "Bentleigh Greens", MP: 23, MW: 5, MD: 5, ML: 13, GF: 20, GA: 46, logo: "australia/bentleigh.png" },
        { rank: 13, team: "Green Gully", MP: 23, MW: 3, MD: 6, ML: 14, GF: 19, GA: 45, logo: "australia/greengully.png" },
        { rank: 14, team: "Dandenong Thunder", MP: 23, MW: 4, MD: 3, ML: 16, GF: 23, GA: 51, logo: "australia/dandenongthunder.png" }
    ],
    fixtures: [
        // Round 26 - August 21-23
        { home: "Green Gully", away: "St Albans Saints", date: "2026-08-21" },
        { home: "Dandenong City", away: "Preston Lions", date: "2026-08-21" },
        { home: "Bentleigh Greens", away: "Melbourne City NPL Seniors", date: "2026-08-21" },
        { home: "Hume City", away: "Caroline Springs George Cross", date: "2026-08-22" },
        { home: "Altona Magic", away: "Avondale FC", date: "2026-08-22" },
        { home: "Dandenong Thunder", away: "Oakleigh Cannons", date: "2026-08-22" },
        { home: "Melbourne City NPL Seniors", away: "Bentleigh Greens", date: "2026-08-23" },
        { home: "South Melbourne", away: "Heidelberg United", date: "2026-08-23" },
        
        // Round 16 (makeup) - August 26
        { home: "Preston Lions", away: "Melbourne City NPL Seniors", date: "2026-08-26" }
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
"Brazil Série A": {
    id: "brasil-serie-a",
    logo: "brazil/seriea.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Palmeiras", MP: 22, MW: 14, MD: 6, ML: 2, GF: 38, GA: 16, logo: "brazil/palmeiras.png" },
        { rank: 2, team: "Flamengo", MP: 21, MW: 12, MD: 6, ML: 3, GF: 39, GA: 18, logo: "brazil/flamengo.png" },
        { rank: 3, team: "Athletico-PR", MP: 22, MW: 12, MD: 4, ML: 6, GF: 30, GA: 19, logo: "brazil/athleticopr.png" },
        { rank: 4, team: "Fluminense", MP: 22, MW: 9, MD: 8, ML: 5, GF: 31, GA: 26, logo: "brazil/fluminense.png" },
        { rank: 5, team: "Cruzeiro", MP: 22, MW: 9, MD: 6, ML: 7, GF: 30, GA: 31, logo: "brazil/cruzeiro.png" },
        { rank: 6, team: "Bahia", MP: 22, MW: 8, MD: 9, ML: 5, GF: 29, GA: 25, logo: "brazil/bahia.png" },
        { rank: 7, team: "Corinthians", MP: 22, MW: 8, MD: 8, ML: 6, GF: 24, GA: 20, logo: "brazil/corinthians.png" },
        { rank: 8, team: "Bragantino", MP: 21, MW: 9, MD: 4, ML: 8, GF: 26, GA: 22, logo: "brazil/bragantino.png" },
        { rank: 9, team: "Botafogo", MP: 21, MW: 8, MD: 6, ML: 7, GF: 35, GA: 33, logo: "brazil/botafogo.png" },
        { rank: 10, team: "Coritiba", MP: 22, MW: 8, MD: 6, ML: 8, GF: 27, GA: 29, logo: "brazil/coritiba.png" },
        { rank: 11, team: "Atlético Mineiro", MP: 21, MW: 8, MD: 5, ML: 8, GF: 27, GA: 27, logo: "brazil/atleticomineiro.png" },
        { rank: 12, team: "São Paulo", MP: 21, MW: 7, MD: 5, ML: 9, GF: 26, GA: 25, logo: "brazil/saopaulo.png" },
        { rank: 13, team: "Vitória", MP: 22, MW: 7, MD: 5, ML: 10, GF: 22, GA: 33, logo: "brazil/vitoria.png" },
        { rank: 14, team: "Grêmio", MP: 21, MW: 6, MD: 7, ML: 8, GF: 24, GA: 27, logo: "brazil/gremio.png" },
        { rank: 15, team: "Mirassol", MP: 21, MW: 6, MD: 5, ML: 10, GF: 24, GA: 30, logo: "brazil/mirassol.png" },
        { rank: 16, team: "Internacional", MP: 22, MW: 5, MD: 8, ML: 9, GF: 23, GA: 27, logo: "brazil/internacional.png" },
        { rank: 17, team: "Santos", MP: 21, MW: 5, MD: 7, ML: 9, GF: 29, GA: 35, logo: "brazil/santos.png" },
        { rank: 18, team: "Vasco", MP: 21, MW: 5, MD: 7, ML: 9, GF: 23, GA: 31, logo: "brazil/vasco.png" },
        { rank: 19, team: "Remo", MP: 22, MW: 5, MD: 7, ML: 10, GF: 26, GA: 36, logo: "brazil/remo.png" },
        { rank: 20, team: "Chapecoense", MP: 21, MW: 1, MD: 7, ML: 13, GF: 20, GA: 43, logo: "brazil/chapecoense.png" }
    ],
    fixtures: [
        // Matchday 24 - August 22-25
        { home: "Fluminense", away: "Remo", date: "2026-08-22" },
        { home: "Internacional", away: "Atlético Mineiro", date: "2026-08-22" },
        { home: "Cruzeiro", away: "Flamengo", date: "2026-08-23" },
        { home: "Vitória", away: "Bahia", date: "2026-08-23" },
        { home: "Bragantino", away: "Grêmio", date: "2026-08-23" },
        { home: "Palmeiras", away: "Vasco", date: "2026-08-23" },
        { home: "Chapecoense", away: "São Paulo", date: "2026-08-23" },
        { home: "Santos", away: "Mirassol", date: "2026-08-23" },
        { home: "Coritiba", away: "Corinthians", date: "2026-08-23" },
        { home: "Botafogo", away: "Athletico-PR", date: "2026-08-25" }
    ]
},
/*
"Brazilian Série B": {
    id: "brasil-serie-b",
    logo: "brazil/serieb.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Criciúma", MP: 19, MW: 11, MD: 6, ML: 2, GF: 23, GA: 12, logo: "brazil/criciuma.png" },
        { rank: 2, team: "Operário Ferroviário", MP: 19, MW: 10, MD: 5, ML: 4, GF: 27, GA: 22, logo: "brazil/operario.png" },
        { rank: 3, team: "Vila Nova", MP: 19, MW: 10, MD: 4, ML: 5, GF: 27, GA: 22, logo: "brazil/vilanova.png" },
        { rank: 4, team: "Juventude", MP: 19, MW: 9, MD: 5, ML: 5, GF: 21, GA: 12, logo: "brazil/juventude.png" },
        { rank: 5, team: "Fortaleza", MP: 19, MW: 9, MD: 4, ML: 6, GF: 22, GA: 19, logo: "brazil/fortaleza.png" },
        { rank: 6, team: "Novorizontino", MP: 19, MW: 8, MD: 6, ML: 5, GF: 28, GA: 18, logo: "brazil/novorizontino.png" },
        { rank: 7, team: "Goiás", MP: 19, MW: 8, MD: 5, ML: 6, GF: 21, GA: 25, logo: "brazil/goias.png" },
        { rank: 8, team: "Atlético Goianiense", MP: 19, MW: 7, MD: 7, ML: 5, GF: 20, GA: 19, logo: "brazil/atleticogoianiense.png" },
        { rank: 9, team: "Sport", MP: 19, MW: 6, MD: 10, ML: 3, GF: 24, GA: 18, logo: "brazil/sport.png" },
        { rank: 10, team: "São Bernardo", MP: 19, MW: 7, MD: 6, ML: 6, GF: 25, GA: 19, logo: "brazil/saobernardo.png" },
        { rank: 11, team: "Athletic (MG)", MP: 19, MW: 6, MD: 9, ML: 4, GF: 18, GA: 17, logo: "brazil/athleticmg.png" },
        { rank: 12, team: "CRB", MP: 19, MW: 7, MD: 5, ML: 7, GF: 29, GA: 32, logo: "brazil/crb.png" },
        { rank: 13, team: "Náutico", MP: 19, MW: 7, MD: 3, ML: 9, GF: 24, GA: 24, logo: "brazil/nautico.png" },
        { rank: 14, team: "Botafogo", MP: 19, MW: 6, MD: 6, ML: 7, GF: 24, GA: 20, logo: "brazil/botafogosp.png" },
        { rank: 15, team: "Cuiabá", MP: 19, MW: 5, MD: 9, ML: 5, GF: 14, GA: 14, logo: "brazil/cuiaba.png" },
        { rank: 16, team: "Londrina", MP: 19, MW: 5, MD: 5, ML: 9, GF: 26, GA: 27, logo: "brazil/londrina.png" },
        { rank: 17, team: "Avaí", MP: 19, MW: 5, MD: 5, ML: 9, GF: 21, GA: 26, logo: "brazil/avai.png" },
        { rank: 18, team: "Ceará", MP: 19, MW: 4, MD: 7, ML: 8, GF: 16, GA: 22, logo: "brazil/ceara.png" },
        { rank: 19, team: "Ponte Preta", MP: 19, MW: 2, MD: 2, ML: 15, GF: 14, GA: 38, logo: "brazil/pontepreta.png" },
        { rank: 20, team: "América-MG", MP: 19, MW: 1, MD: 5, ML: 13, GF: 13, GA: 31, logo: "brazil/americamg.png" }
    ],
    fixtures: [


    ]
},*/
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
        { rank: 1, team: "Ind. del Valle", MP: 24, MW: 20, MD: 1, ML: 3, GF: 58, GA: 22, logo: "ecuador/inddelvalle.png" },
        { rank: 2, team: "Macara", MP: 24, MW: 12, MD: 5, ML: 7, GF: 32, GA: 24, logo: "ecuador/macara.png" },
        { rank: 3, team: "Aucas", MP: 24, MW: 12, MD: 5, ML: 7, GF: 29, GA: 25, logo: "ecuador/aucas.png" },
        { rank: 4, team: "U. Catolica", MP: 23, MW: 11, MD: 6, ML: 6, GF: 38, GA: 19, logo: "ecuador/ucatolica.png" },
        { rank: 5, team: "Barcelona SC", MP: 24, MW: 9, MD: 8, ML: 7, GF: 25, GA: 20, logo: "ecuador/barcelona.png" },
        { rank: 6, team: "LDU Quito", MP: 24, MW: 10, MD: 5, ML: 9, GF: 23, GA: 20, logo: "ecuador/lduquito.png" },
        { rank: 7, team: "Leones del Norte", MP: 24, MW: 8, MD: 8, ML: 8, GF: 24, GA: 25, logo: "ecuador/leones.png" },
        { rank: 8, team: "Dep. Cuenca", MP: 23, MW: 9, MD: 4, ML: 10, GF: 21, GA: 28, logo: "ecuador/depcuenca.png" },
        { rank: 9, team: "Libertad", MP: 23, MW: 8, MD: 6, ML: 9, GF: 24, GA: 26, logo: "ecuador/libertad.png" },
        { rank: 10, team: "Guayaquil City", MP: 24, MW: 7, MD: 8, ML: 9, GF: 20, GA: 25, logo: "ecuador/guayaquilcity.png" },
        { rank: 11, team: "Emelec", MP: 24, MW: 7, MD: 8, ML: 9, GF: 19, GA: 28, logo: "ecuador/emelec.png" },
        { rank: 12, team: "Mushuc Runa", MP: 23, MW: 7, MD: 7, ML: 9, GF: 29, GA: 34, logo: "ecuador/mushucruna.png" },
        { rank: 13, team: "Orense", MP: 24, MW: 7, MD: 6, ML: 11, GF: 28, GA: 36, logo: "ecuador/orense.png" },
        { rank: 14, team: "Tecnico U.", MP: 23, MW: 8, MD: 2, ML: 13, GF: 20, GA: 29, logo: "ecuador/tecnico.png" },
        { rank: 15, team: "Delfin", MP: 24, MW: 6, MD: 6, ML: 12, GF: 15, GA: 24, logo: "ecuador/delfin.png" },
        { rank: 16, team: "Manta", MP: 23, MW: 3, MD: 5, ML: 15, GF: 9, GA: 29, logo: "ecuador/manta.png" }
    ],
    fixtures: [
       
        // Round 26 - August 22-25
        { home: "Dep. Cuenca", away: "Mushuc Runa", date: "2026-08-22" },
        { home: "U. Catolica", away: "Manta", date: "2026-08-22" },
        { home: "Tecnico U.", away: "Guayaquil City", date: "2026-08-22" },
        { home: "Barcelona SC", away: "Orense", date: "2026-08-23" },
        { home: "Delfin", away: "Aucas", date: "2026-08-23" },
        { home: "Leones del Norte", away: "Ind. del Valle", date: "2026-08-23" },
        { home: "LDU Quito", away: "Emelec", date: "2026-08-24" },
        { home: "Libertad", away: "Macara", date: "2026-08-25" }
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
        { rank: 1, team: "Coventry", MP: 46, MW: 28, MD: 11, ML: 7, GF: 97, GA: 45, logo: "england/coventry.png" },
        { rank: 2, team: "Ipswich Town", MP: 46, MW: 23, MD: 15, ML: 8, GF: 80, GA: 47, logo: "england/ipswich.png" },
        { rank: 3, team: "Millwall", MP: 46, MW: 24, MD: 11, ML: 11, GF: 64, GA: 49, logo: "england/millwall.png" },
        { rank: 4, team: "Southampton", MP: 46, MW: 22, MD: 14, ML: 10, GF: 82, GA: 56, logo: "england/southampton.png" },
        { rank: 5, team: "Middlesbrough", MP: 46, MW: 22, MD: 14, ML: 10, GF: 72, GA: 47, logo: "england/middlesbrough.png" },
        { rank: 6, team: "Hull", MP: 46, MW: 21, MD: 10, ML: 15, GF: 70, GA: 66, logo: "england/hull.png" },
        { rank: 7, team: "Wrexham", MP: 46, MW: 19, MD: 14, ML: 13, GF: 69, GA: 65, logo: "england/wrexham.png" },
        { rank: 8, team: "Derby County", MP: 46, MW: 20, MD: 9, ML: 17, GF: 67, GA: 59, logo: "england/derby.png" },
        { rank: 9, team: "Norwich City", MP: 46, MW: 19, MD: 8, ML: 19, GF: 63, GA: 56, logo: "england/norwich.png" },
        { rank: 10, team: "Birmingham", MP: 46, MW: 17, MD: 13, ML: 16, GF: 57, GA: 56, logo: "england/birmingham.png" },
        { rank: 11, team: "Swansea", MP: 46, MW: 18, MD: 10, ML: 18, GF: 57, GA: 59, logo: "england/swansea.png" },
        { rank: 12, team: "Bristol City", MP: 46, MW: 17, MD: 11, ML: 18, GF: 59, GA: 59, logo: "england/bristol.png" },
        { rank: 13, team: "Sheffield United", MP: 46, MW: 18, MD: 6, ML: 22, GF: 66, GA: 66, logo: "england/sheffieldutd.png" },
        { rank: 14, team: "Preston", MP: 46, MW: 15, MD: 15, ML: 16, GF: 55, GA: 62, logo: "england/preston.png" },
        { rank: 15, team: "QPR", MP: 46, MW: 16, MD: 10, ML: 20, GF: 61, GA: 73, logo: "england/qpr.png" },
        { rank: 16, team: "Watford", MP: 46, MW: 14, MD: 15, ML: 17, GF: 53, GA: 65, logo: "england/watford.png" },
        { rank: 17, team: "Stoke City", MP: 46, MW: 15, MD: 10, ML: 21, GF: 51, GA: 56, logo: "england/stoke.png" },
        { rank: 18, team: "Portsmouth", MP: 46, MW: 14, MD: 13, ML: 19, GF: 49, GA: 64, logo: "england/portsmouth.png" },
        { rank: 19, team: "Charlton", MP: 46, MW: 13, MD: 14, ML: 19, GF: 44, GA: 58, logo: "england/charlton.png" },
        { rank: 20, team: "Blackburn Rovers", MP: 46, MW: 13, MD: 13, ML: 20, GF: 42, GA: 56, logo: "england/blackburn.png" },
        { rank: 21, team: "West Brom", MP: 46, MW: 13, MD: 14, ML: 19, GF: 48, GA: 58, logo: "england/westbrom.png" },
        { rank: 22, team: "Oxford Utd", MP: 46, MW: 11, MD: 14, ML: 21, GF: 45, GA: 59, logo: "england/oxford.png" },
        { rank: 23, team: "Leicester City", MP: 46, MW: 12, MD: 16, ML: 18, GF: 58, GA: 68, logo: "england/leicester.png" },
        { rank: 24, team: "Sheffield Wednesday", MP: 46, MW: 2, MD: 12, ML: 32, GF: 29, GA: 89, logo: "england/sheffieldwed.png" },
        // Additional teams for 2026/27 season
        { rank: 25, team: "Wolves", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "england/wolves.png" },
        { rank: 26, team: "Burnley", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "england/burnley.png" },
        { rank: 27, team: "West Ham", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "england/westham.png" },
        { rank: 28, team: "Bolton", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "england/bolton.png" },
        { rank: 29, team: "Lincoln City", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "england/lincoln.png" }
    ],
    fixtures: [
        
        // Matchday 2 - August 21-23
        { home: "Standard", away: "RAAL La Louvière", date: "2026-08-21" },
        { home: "Zulte Waregem", away: "Beveren", date: "2026-08-22" },
        { home: "Charleroi", away: "Mechelen", date: "2026-08-22" },
        { home: "Antwerp", away: "Genk", date: "2026-08-22" },
        { home: "Gent", away: "OH Leuven", date: "2026-08-22" },
        { home: "Lommel", away: "Westerlo", date: "2026-08-23" },
        { home: "Club Brugge", away: "Cercle Brugge", date: "2026-08-23" },
        
        // Matchday 3 - August 22-23
        { home: "Birmingham", away: "Bristol City", date: "2026-08-22" },
        { home: "Millwall", away: "Norwich City", date: "2026-08-22" },
        { home: "Lincoln City", away: "Portsmouth", date: "2026-08-22" },
        { home: "Swansea", away: "Sheffield United", date: "2026-08-22" },
        { home: "Blackburn Rovers", away: "Middlesbrough", date: "2026-08-22" },
        { home: "Southampton", away: "Stoke City", date: "2026-08-22" },
        { home: "West Ham", away: "Charlton", date: "2026-08-22" },
        { home: "Derby County", away: "Cardiff City", date: "2026-08-22" },
        { home: "QPR", away: "Bolton", date: "2026-08-22" },
        { home: "Preston", away: "Wolves", date: "2026-08-22" },
        { home: "Wrexham", away: "Watford", date: "2026-08-22" },
        { home: "West Brom", away: "Burnley", date: "2026-08-23" },
        
        // Matchday 4 - August 28-29
        { home: "Wrexham", away: "Birmingham", date: "2026-08-28" },
        { home: "Derby County", away: "Swansea", date: "2026-08-29" },
        { home: "Middlesbrough", away: "West Brom", date: "2026-08-29" },
        { home: "Wolves", away: "Stoke City", date: "2026-08-29" },
        { home: "Charlton", away: "Preston", date: "2026-08-29" },
        { home: "Bristol City", away: "Portsmouth", date: "2026-08-29" },
        { home: "Blackburn Rovers", away: "QPR", date: "2026-08-29" },
        { home: "Bolton", away: "Lincoln City", date: "2026-08-29" },
        { home: "Southampton", away: "Millwall", date: "2026-08-29" },
        { home: "Norwich City", away: "Burnley", date: "2026-08-29" },
        { home: "Cardiff City", away: "Sheffield United", date: "2026-08-29" },
        { home: "Watford", away: "West Ham", date: "2026-08-29" }
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
        { rank: 18, team: "Preußen Münster", MP: 34, MW: 6, MD: 12, ML: 16, GF: 38, GA: 61, logo: "germany/munster.png" },
        // Additional teams for 2026/27 season
        { rank: 19, team: "Wolfsburg", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "germany/wolfsburg.png" },
        { rank: 20, team: "Energie Cottbus", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "germany/energiecottbus.png" },
        { rank: 21, team: "Osnabrück", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "germany/osnabruck.png" },
        { rank: 22, team: "St. Pauli", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "germany/stpauli.png" }
    ],
    fixtures: [
        
        // Matchday 4 - August 28-30
        { home: "Bochum", away: "Osnabrück", date: "2026-08-28" },
        { home: "Eintracht Braunschweig", away: "Hertha", date: "2026-08-28" },
        { home: "Heidenheim", away: "Dynamo", date: "2026-08-29" },
        { home: "Karlsruher", away: "Wolfsburg", date: "2026-08-29" },
        { home: "Energie Cottbus", away: "Fürth", date: "2026-08-29" },
        { home: "Nürnberg", away: "Arminia", date: "2026-08-29" },
        { home: "St. Pauli", away: "1. FCK", date: "2026-08-30" },
        { home: "Darmstadt", away: "Hannover 96", date: "2026-08-30" },
        { home: "1. FC Magdeburg", away: "Holstein Kiel", date: "2026-08-30" }
    ]
},

"Chilean Primera División": {
    id: "chile",
    logo: "chile/chile.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Colo-Colo", MP: 18, MW: 15, MD: 0, ML: 3, GF: 38, GA: 17, logo: "chile/colocolo.png" },
        { rank: 2, team: "Universidad de Chile", MP: 18, MW: 9, MD: 6, ML: 3, GF: 23, GA: 12, logo: "chile/uchile.png" },
        { rank: 3, team: "Universidad Católica", MP: 18, MW: 9, MD: 3, ML: 6, GF: 40, GA: 26, logo: "chile/ucatolica.png" },
        { rank: 4, team: "Palestino", MP: 18, MW: 8, MD: 3, ML: 7, GF: 26, GA: 26, logo: "chile/palestino.png" },
        { rank: 5, team: "Everton", MP: 18, MW: 7, MD: 5, ML: 6, GF: 27, GA: 21, logo: "chile/everton.png" },
        { rank: 6, team: "Ñublense", MP: 17, MW: 6, MD: 8, ML: 3, GF: 22, GA: 21, logo: "chile/nublense.png" },
        { rank: 7, team: "Coquimbo", MP: 17, MW: 7, MD: 4, ML: 6, GF: 24, GA: 21, logo: "chile/coquimbo.png" },
        { rank: 8, team: "Deportes Limache", MP: 17, MW: 7, MD: 3, ML: 7, GF: 34, GA: 27, logo: "chile/limache.png" },
        { rank: 9, team: "Huachipato", MP: 18, MW: 7, MD: 3, ML: 8, GF: 27, GA: 31, logo: "chile/huachipato.png" },
        { rank: 10, team: "Concepción", MP: 18, MW: 7, MD: 2, ML: 9, GF: 20, GA: 23, logo: "chile/concepcion.png" },
        { rank: 11, team: "O'Higgins", MP: 18, MW: 7, MD: 2, ML: 9, GF: 22, GA: 28, logo: "chile/ohiggins.png" },
        { rank: 12, team: "Audax Italiano", MP: 18, MW: 5, MD: 5, ML: 8, GF: 22, GA: 25, logo: "chile/audax.png" },
        { rank: 13, team: "La Serena", MP: 18, MW: 4, MD: 8, ML: 6, GF: 26, GA: 31, logo: "chile/laserena.png" },
        { rank: 14, team: "Universidad de Concepción", MP: 17, MW: 5, MD: 4, ML: 8, GF: 13, GA: 28, logo: "chile/uconcepcion.png" },
        { rank: 15, team: "Cobresal", MP: 18, MW: 5, MD: 2, ML: 11, GF: 26, GA: 34, logo: "chile/cobresal.png" },
        { rank: 16, team: "Unión La Calera", MP: 18, MW: 3, MD: 4, ML: 11, GF: 16, GA: 35, logo: "chile/unionlacalera.png" }
    ],
    fixtures: [
        
        // Matchday 21 - August 22-25
        { home: "Audax Italiano", away: "Unión La Calera", date: "2026-08-22" },
        { home: "Huachipato", away: "Deportes Limache", date: "2026-08-22" },
        { home: "Universidad Católica", away: "Ñublense", date: "2026-08-23" },
        { home: "La Serena", away: "Cobresal", date: "2026-08-23" },
        { home: "Concepción", away: "Coquimbo", date: "2026-08-23" },
        { home: "Universidad de Chile", away: "Colo-Colo", date: "2026-08-23" },
        { home: "O'Higgins", away: "Palestino", date: "2026-08-24" },
        { home: "Everton", away: "Universidad de Concepción", date: "2026-08-25" },
        
        // Matchday 19 (makeup) - August 26
        { home: "Coquimbo", away: "Universidad Católica", date: "2026-08-26" }
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
        { rank: 1, team: "Hearts", MP: 33, MW: 21, MD: 7, ML: 5, GF: 58, GA: 28, logo: "scotland/hearts.png" },
        { rank: 2, team: "Rangers", MP: 33, MW: 19, MD: 12, ML: 2, GF: 66, GA: 31, logo: "scotland/rangers.png" },
        { rank: 3, team: "Celtic", MP: 33, MW: 21, MD: 4, ML: 8, GF: 59, GA: 35, logo: "scotland/celtic.png" },
        { rank: 4, team: "Motherwell", MP: 33, MW: 14, MD: 12, ML: 7, GF: 52, GA: 29, logo: "scotland/motherwell.png" },
        { rank: 5, team: "Hibernian", MP: 33, MW: 13, MD: 12, ML: 8, GF: 51, GA: 37, logo: "scotland/hibernian.png" },
        { rank: 6, team: "Falkirk", MP: 33, MW: 13, MD: 7, ML: 13, GF: 45, GA: 48, logo: "scotland/falkirk.png" },
        { rank: 7, team: "Dundee United", MP: 33, MW: 9, MD: 13, ML: 11, GF: 45, GA: 54, logo: "scotland/dundeeutd.png" },
        { rank: 8, team: "Aberdeen", MP: 33, MW: 9, MD: 6, ML: 18, GF: 33, GA: 48, logo: "scotland/aberdeen.png" },
        { rank: 9, team: "Dundee", MP: 33, MW: 8, MD: 9, ML: 16, GF: 34, GA: 53, logo: "scotland/dundee.png" },
        { rank: 10, team: "St. Mirren", MP: 33, MW: 7, MD: 9, ML: 17, GF: 27, GA: 48, logo: "scotland/stmirren.png" },
        { rank: 11, team: "Kilmarnock", MP: 33, MW: 6, MD: 10, ML: 17, GF: 37, GA: 65, logo: "scotland/kilmarnock.png" },
        { rank: 12, team: "Livingston", MP: 33, MW: 1, MD: 13, ML: 19, GF: 35, GA: 66, logo: "scotland/livingston.png" }
    ],
    fixtures: [
        // Matchday 4 - August 22
        { home: "Rangers", away: "St. Mirren", date: "2026-08-22" },
        { home: "Motherwell", away: "Aberdeen", date: "2026-08-22" },
        { home: "St. Johnstone", away: "Celtic", date: "2026-08-22" },
        { home: "Hibernian", away: "Kilmarnock", date: "2026-08-22" },
        { home: "Falkirk", away: "Hearts", date: "2026-08-22" },
        { home: "Dundee United", away: "Dundee", date: "2026-08-22" },
        
        // Matchday 5 - August 29-30
        { home: "Dundee", away: "Hibernian", date: "2026-08-29" },
        { home: "Hearts", away: "St. Johnstone", date: "2026-08-29" },
        { home: "Kilmarnock", away: "Dundee United", date: "2026-08-29" },
        { home: "Celtic", away: "Falkirk", date: "2026-08-29" },
        { home: "St. Mirren", away: "Motherwell", date: "2026-08-29" },
        { home: "Aberdeen", away: "Rangers", date: "2026-08-30" }
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
        { rank: 18, team: "Amiens", MP: 34, MW: 6, MD: 6, ML: 22, GF: 37, GA: 65, logo: "france/amiens.png" },
        // Additional teams for 2026/27 season
        { rank: 19, team: "Metz", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "france/metz.png" },
        { rank: 20, team: "Sochaux", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "france/sochaux.png" },
        { rank: 21, team: "Nantes", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "france/nantes.png" },
        { rank: 22, team: "Dijon", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "france/dijon.png" }
    ],
    fixtures: [
        // Matchday 3 - August 21-24
        { home: "Pau", away: "Nancy", date: "2026-08-21" },
        { home: "Sochaux", away: "Guingamp", date: "2026-08-21" },
        { home: "Clermont", away: "Dijon", date: "2026-08-21" },
        { home: "Dunkerque", away: "Montpellier", date: "2026-08-21" },
        { home: "Boulogne", away: "Red Star", date: "2026-08-21" },
        { home: "Metz", away: "Laval", date: "2026-08-22" },
        { home: "Nantes", away: "Rodez", date: "2026-08-22" },
        { home: "St-Étienne", away: "Grenoble", date: "2026-08-22" },
        { home: "Reims", away: "Annecy", date: "2026-08-24" }
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
        { rank: 18, team: "Heracles", MP: 34, MW: 5, MD: 4, ML: 25, GF: 35, GA: 85, logo: "netherlands/heracles.png" },
        // Additional teams for 2026/27 season
        { rank: 19, team: "Cambuur", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "netherlands/cambuur.png" },
        { rank: 20, team: "Den Haag", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "netherlands/denhaag.png" },
        { rank: 21, team: "Willem II", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "netherlands/willemii.png" }
    ],
    fixtures: [

        // Matchday 3 - August 22-23
        { home: "Fortuna Sittard", away: "AZ Alkmaar", date: "2026-08-22" },
        { home: "Sparta Rotterdam", away: "Utrecht", date: "2026-08-22" },
        { home: "NEC", away: "Excelsior", date: "2026-08-22" },
        { home: "Heerenveen", away: "PEC Zwolle", date: "2026-08-22" },
        { home: "Go Ahead Eagles", away: "Den Haag", date: "2026-08-23" },
        { home: "PSV", away: "Groningen", date: "2026-08-23" },
        { home: "Cambuur", away: "Feyenoord", date: "2026-08-23" },
        
        // Matchday 4 - August 28-30
        { home: "Groningen", away: "Fortuna Sittard", date: "2026-08-28" },
        { home: "Excelsior", away: "Sparta Rotterdam", date: "2026-08-29" },
        { home: "AZ Alkmaar", away: "Go Ahead Eagles", date: "2026-08-29" },
        { home: "PEC Zwolle", away: "NEC", date: "2026-08-29" },
        { home: "Utrecht", away: "PSV", date: "2026-08-30" },
        { home: "Willem II", away: "Heerenveen", date: "2026-08-30" },
        { home: "Feyenoord", away: "Den Haag", date: "2026-08-30" },
        { home: "Telstar", away: "Ajax", date: "2026-08-30" },
        { home: "Cambuur", away: "Twente", date: "2026-08-30" }
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
        { rank: 20, team: "Jong Ajax", MP: 38, MW: 9, MD: 8, ML: 21, GF: 50, GA: 73, logo: "netherlands/jongajax.png" },
        // Additional teams for 2026/27 season
        { rank: 21, team: "NAC", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "netherlands/nac.png" },
        { rank: 22, team: "Heracles", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "netherlands/heracles.png" }
    ],
    fixtures: [
        // Matchday 3 - August 21-24
        { home: "Vitesse", away: "Almere", date: "2026-08-21" },
        { home: "Den Bosch", away: "FC Eindhoven", date: "2026-08-21" },
        { home: "MVV", away: "FC Volendam", date: "2026-08-21" },
        { home: "Dordrecht", away: "Roda", date: "2026-08-21" },
        { home: "FC Emmen", away: "Jong AZ", date: "2026-08-21" },
        { home: "Helmond Sport", away: "RKC Waalwijk", date: "2026-08-21" },
        { home: "NAC", away: "Jong Ajax", date: "2026-08-22" },
        { home: "VVV", away: "De Graafschap", date: "2026-08-23" },
        { home: "Jong FC Utrecht", away: "Heracles", date: "2026-08-24" },
        { home: "Jong PSV", away: "TOP Oss", date: "2026-08-24" },
        
        // Matchday 4 - August 28-30
        { home: "Jong Ajax", away: "Helmond Sport", date: "2026-08-28" },
        { home: "Den Bosch", away: "Vitesse", date: "2026-08-28" },
        { home: "FC Volendam", away: "Dordrecht", date: "2026-08-28" },
        { home: "Jong AZ", away: "MVV", date: "2026-08-28" },
        { home: "RKC Waalwijk", away: "Jong PSV", date: "2026-08-28" },
        { home: "Roda", away: "NAC", date: "2026-08-28" },
        { home: "TOP Oss", away: "Jong FC Utrecht", date: "2026-08-28" },
        { home: "De Graafschap", away: "Almere", date: "2026-08-29" },
        { home: "FC Eindhoven", away: "Heracles", date: "2026-08-30" },
        { home: "VVV", away: "FC Emmen", date: "2026-08-30" }
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
        { rank: 16, team: "Dender", MP: 30, MW: 3, MD: 10, ML: 17, GF: 24, GA: 51, logo: "belgium/dender.png" },
        // Additional teams for 2026/27 season
        { rank: 17, team: "Kortrijk", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "belgium/kortrijk.png" },
        { rank: 18, team: "Beveren", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "belgium/beveren.png" },
        { rank: 19, team: "Lommel", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "belgium/lommel.png" }
    ],
	fixtures: [
        // Matchday 3 - August 21-23
        { home: "Standard", away: "RAAL La Louvière", date: "2026-08-21" },
        { home: "Zulte Waregem", away: "Beveren", date: "2026-08-22" },
        { home: "Charleroi", away: "Mechelen", date: "2026-08-22" },
        { home: "Antwerp", away: "Genk", date: "2026-08-22" },
        { home: "Gent", away: "OH Leuven", date: "2026-08-22" },
        { home: "Lommel", away: "Westerlo", date: "2026-08-23" },
        { home: "Club Brugge", away: "Cercle Brugge", date: "2026-08-23" }
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
        { rank: 17, team: "R.O.C. Charleroi", MP: 32, MW: 3, MD: 7, ML: 22, GF: 26, GA: 68, logo: "belgium/roccharleroi.png" },
        // Additional teams for 2026/27 season
        { rank: 18, team: "Virton", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "belgium/virton.png" },
        { rank: 19, team: "Sporting Hasselt", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "belgium/sportinghasselt.png" },
        { rank: 20, team: "Dender", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "belgium/dender.png" }
    ],
    fixtures: [
        // Matchday 2 - August 21-23
        { home: "RSCA FUTURES", away: "Virton", date: "2026-08-21" },
        { home: "Lokeren", away: "Eupen", date: "2026-08-21" },
        { home: "Club NXT", away: "RFC Seraing", date: "2026-08-22" },
        { home: "Dender", away: "Beerschot", date: "2026-08-22" },
        { home: "Lierse SK", away: "Patro Eisden", date: "2026-08-22" },
        { home: "Jong Genk", away: "RFC Liège", date: "2026-08-23" },
        { home: "Royal Francs Borains", away: "Sporting Hasselt", date: "2026-08-23" },
        
        // Matchday 3 - August 28-30
        { home: "Sporting Hasselt", away: "Jong KAA Gent", date: "2026-08-28" },
        { home: "Lokeren", away: "Jong Genk", date: "2026-08-28" },
        { home: "RFC Liège", away: "Dender", date: "2026-08-29" },
        { home: "RSCA FUTURES", away: "Beerschot", date: "2026-08-29" },
        { home: "Patro Eisden", away: "Club NXT", date: "2026-08-29" },
        { home: "Virton", away: "Royal Francs Borains", date: "2026-08-30" },
        { home: "RFC Seraing", away: "Lierse SK", date: "2026-08-30" }
    ]
},
"Portuguese Primeira Liga": {
    id: "portugal-primeira-liga",
    logo: "portugal/primeiraliga.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Porto", MP: 34, MW: 28, MD: 4, ML: 2, GF: 66, GA: 18, logo: "portugal/porto.png" },
        { rank: 2, team: "SCP", MP: 34, MW: 25, MD: 7, ML: 2, GF: 89, GA: 24, logo: "portugal/sporting.png" },
        { rank: 3, team: "Benfica", MP: 34, MW: 23, MD: 11, ML: 0, GF: 74, GA: 25, logo: "portugal/benfica.png" },
        { rank: 4, team: "Braga", MP: 34, MW: 16, MD: 11, ML: 7, GF: 64, GA: 36, logo: "portugal/braga.png" },
        { rank: 5, team: "Famalicão", MP: 34, MW: 15, MD: 11, ML: 8, GF: 42, GA: 29, logo: "portugal/famalicao.png" },
        { rank: 6, team: "Gil Vicente", MP: 34, MW: 13, MD: 11, ML: 10, GF: 47, GA: 38, logo: "portugal/gilvicente.png" },
        { rank: 7, team: "Moreirense", MP: 34, MW: 12, MD: 7, ML: 15, GF: 37, GA: 49, logo: "portugal/moreirense.png" },
        { rank: 8, team: "Arouca", MP: 34, MW: 12, MD: 6, ML: 16, GF: 47, GA: 64, logo: "portugal/arouca.png" },
        { rank: 9, team: "Vitória SC", MP: 34, MW: 12, MD: 6, ML: 16, GF: 39, GA: 51, logo: "portugal/vitoria.png" },
        { rank: 10, team: "Estoril", MP: 34, MW: 10, MD: 9, ML: 15, GF: 54, GA: 57, logo: "portugal/estoril.png" },
        { rank: 11, team: "Alverca", MP: 34, MW: 10, MD: 9, ML: 15, GF: 35, GA: 52, logo: "portugal/alverca.png" },
        { rank: 12, team: "Rio Ave", MP: 34, MW: 8, MD: 12, ML: 14, GF: 35, GA: 57, logo: "portugal/rioave.png" },
        { rank: 13, team: "Santa Clara", MP: 34, MW: 9, MD: 9, ML: 16, GF: 32, GA: 41, logo: "portugal/santaclara.png" },
        { rank: 14, team: "Nacional", MP: 34, MW: 9, MD: 7, ML: 18, GF: 37, GA: 45, logo: "portugal/nacional.png" },
        { rank: 15, team: "Estrela Amadora", MP: 34, MW: 6, MD: 12, ML: 16, GF: 38, GA: 56, logo: "portugal/estrelaamadora.png" },
        { rank: 16, team: "Casa Pia", MP: 34, MW: 6, MD: 12, ML: 16, GF: 31, GA: 57, logo: "portugal/casapia.png" },
        { rank: 17, team: "Tondela", MP: 34, MW: 6, MD: 10, ML: 18, GF: 27, GA: 55, logo: "portugal/tondela.png" },
        { rank: 18, team: "AVS", MP: 34, MW: 3, MD: 12, ML: 19, GF: 27, GA: 67, logo: "portugal/avs.png" },
        // Additional teams for 2026/27 season
        { rank: 19, team: "Marítimo", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "portugal/maritimo.png" },
        { rank: 20, team: "Académico de Viseu FC", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "portugal/academico.png" }
    ],
    fixtures: [
     
        // Matchday 3 - August 21-23
        { home: "Marítimo", away: "Académico de Viseu FC", date: "2026-08-22" },
        { home: "Estoril", away: "Rio Ave", date: "2026-08-22" },
        { home: "SCP", away: "Alverca", date: "2026-08-22" },
        { home: "Vitória SC", away: "Nacional", date: "2026-08-23" },
        { home: "Santa Clara", away: "Famalicão", date: "2026-08-23" },
        { home: "Porto", away: "Arouca", date: "2026-08-23" },
        { home: "Gil Vicente", away: "Casa Pia", date: "2026-08-24" },
        
        // Matchday 4 - August 28-31
        { home: "Rio Ave", away: "SCP", date: "2026-08-28" },
        { home: "Alverca", away: "Santa Clara", date: "2026-08-29" },
        { home: "Arouca", away: "Marítimo", date: "2026-08-29" },
        { home: "Académico de Viseu FC", away: "Porto", date: "2026-08-29" },
        { home: "Nacional", away: "Estrela Amadora", date: "2026-08-30" },
        { home: "Casa Pia", away: "Moreirense", date: "2026-08-30" },
        { home: "Famalicão", away: "Gil Vicente", date: "2026-08-30" },
        { home: "Benfica", away: "Estoril", date: "2026-08-31" }
    ]
},
"Liga Portugal 2": {
    id: "portugal-liga-2",
    logo: "portugal/liga2.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Feirense", MP: 34, MW: 16, MD: 10, ML: 8, GF: 48, GA: 35, logo: "portugal/feirense.png" },
        { rank: 2, team: "Felgueiras 1932", MP: 34, MW: 15, MD: 9, ML: 10, GF: 42, GA: 38, logo: "portugal/felgueiras.png" },
        { rank: 3, team: "Benfica B", MP: 34, MW: 14, MD: 11, ML: 9, GF: 51, GA: 40, logo: "portugal/benficab.png" },
        { rank: 4, team: "Leixoes", MP: 34, MW: 14, MD: 10, ML: 10, GF: 43, GA: 39, logo: "portugal/leixoes.png" },
        { rank: 5, team: "Lusitania Lourosa", MP: 34, MW: 13, MD: 12, ML: 9, GF: 44, GA: 41, logo: "portugal/lourosa.png" },
        { rank: 6, team: "FC Porto B", MP: 34, MW: 13, MD: 11, ML: 10, GF: 47, GA: 43, logo: "portugal/portob.png" },
        { rank: 7, team: "Academica", MP: 34, MW: 13, MD: 10, ML: 11, GF: 40, GA: 38, logo: "portugal/academica.png" },
        { rank: 8, team: "Torreense", MP: 34, MW: 12, MD: 12, ML: 10, GF: 38, GA: 36, logo: "portugal/torreense.png" },
        { rank: 9, team: "Penafiel", MP: 34, MW: 12, MD: 11, ML: 11, GF: 41, GA: 42, logo: "portugal/penafiel.png" },
        { rank: 10, team: "Uniao de Leiria", MP: 34, MW: 11, MD: 13, ML: 10, GF: 39, GA: 37, logo: "portugal/uniaoleiria.png" },
        { rank: 11, team: "Sporting CP B", MP: 34, MW: 11, MD: 12, ML: 11, GF: 44, GA: 45, logo: "portugal/sportingb.png" },
        { rank: 12, team: "Chaves", MP: 34, MW: 11, MD: 11, ML: 12, GF: 37, GA: 39, logo: "portugal/chaves.png" },
        { rank: 13, team: "Portimonense", MP: 34, MW: 10, MD: 13, ML: 11, GF: 36, GA: 38, logo: "portugal/portimonense.png" },
        { rank: 14, team: "Vizela", MP: 34, MW: 10, MD: 12, ML: 12, GF: 35, GA: 40, logo: "portugal/vizela.png" },
        { rank: 15, team: "Amarante FC", MP: 34, MW: 9, MD: 12, ML: 13, GF: 34, GA: 42, logo: "portugal/amarante.png" },
        { rank: 16, team: "Farense", MP: 34, MW: 8, MD: 11, ML: 15, GF: 32, GA: 44, logo: "portugal/farense.png" },
        { rank: 17, team: "Tondela", MP: 34, MW: 7, MD: 10, ML: 17, GF: 30, GA: 48, logo: "portugal/tondela.png" },
        // Additional teams for 2026/27 season
        { rank: 18, team: "AVS", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "portugal/avs.png" }
    ],
    fixtures: [
        // Matchday 4 - August 21-24
        { home: "Benfica B", away: "Portimonense", date: "2026-08-21" },
        { home: "Tondela", away: "Academica", date: "2026-08-21" },
        { home: "Leixoes", away: "Uniao de Leiria", date: "2026-08-22" },
        { home: "Vizela", away: "Amarante FC", date: "2026-08-22" },
        { home: "Lusitania Lourosa", away: "Torreense", date: "2026-08-22" },
        { home: "Chaves", away: "AVS", date: "2026-08-23" },
        { home: "Penafiel", away: "Sporting CP B", date: "2026-08-23" },
        { home: "Farense", away: "Felgueiras", date: "2026-08-24" },
        { home: "Feirense", away: "FC Porto B", date: "2026-08-24" },
        
        // Matchday 5 - August 28-30
        { home: "Uniao de Leiria", away: "Tondela", date: "2026-08-28" },
        { home: "Portimonense", away: "Leixoes", date: "2026-08-29" },
        { home: "Academica", away: "Lusitania Lourosa", date: "2026-08-29" },
        { home: "Torreense", away: "Vizela", date: "2026-08-29" },
        { home: "Amarante FC", away: "Benfica B", date: "2026-08-30" },
        { home: "AVS", away: "Feirense", date: "2026-08-30" },
        { home: "Felgueiras", away: "Chaves", date: "2026-08-30" },
        { home: "Sporting CP B", away: "Farense", date: "2026-08-30" }
    ]
},
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
        // Matchday 19 - August 21-24
        { home: "Sirius", away: "Häcken", date: "2026-08-21" },
        { home: "ÖIS", away: "Halmstad", date: "2026-08-22" },
        { home: "Göteborg", away: "IF Elfsborg", date: "2026-08-23" },
        { home: "Västerås", away: "Kalmar", date: "2026-08-23" },
        { home: "IF Brommapojkarna", away: "Degerfors", date: "2026-08-23" },
        { home: "Hammarby", away: "GAIS", date: "2026-08-23" },
        { home: "Malmö", away: "Djurgården", date: "2026-08-24" },
        
        // Matchday 20 - August 29-31
        { home: "IF Elfsborg", away: "Degerfors", date: "2026-08-29" },
        { home: "Häcken", away: "Västerås", date: "2026-08-29" },
        { home: "Halmstad", away: "Kalmar", date: "2026-08-29" },
        { home: "AIK", away: "Hammarby", date: "2026-08-30" },
        { home: "Göteborg", away: "ÖIS", date: "2026-08-30" },
        { home: "GAIS", away: "IF Brommapojkarna", date: "2026-08-31" },
        { home: "Sirius", away: "Malmö", date: "2026-08-31" },
        { home: "Djurgården", away: "Mjällby", date: "2026-08-31" }
    ]
},

"Swedish Superettan": {
    id: "sweden-superettan",
    logo: "sweden/superettan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Norrköping", MP: 18, MW: 12, MD: 2, ML: 4, GF: 32, GA: 10, logo: "sweden/norrkoping.png" },
        { rank: 2, team: "Varbergs BoIS", MP: 18, MW: 10, MD: 3, ML: 5, GF: 34, GA: 24, logo: "sweden/varbergsbois.png" },
        { rank: 3, team: "Falkenberg", MP: 18, MW: 9, MD: 5, ML: 4, GF: 34, GA: 27, logo: "sweden/falkenberg.png" },
        { rank: 4, team: "Östersund", MP: 18, MW: 9, MD: 5, ML: 4, GF: 28, GA: 21, logo: "sweden/ostersund.png" },
        { rank: 5, team: "Sandviken", MP: 18, MW: 8, MD: 4, ML: 6, GF: 33, GA: 23, logo: "sweden/sandviken.png" },
        { rank: 6, team: "Landskrona", MP: 18, MW: 8, MD: 4, ML: 6, GF: 24, GA: 19, logo: "sweden/landskrona.png" },
        { rank: 7, team: "United Nordic", MP: 18, MW: 7, MD: 7, ML: 4, GF: 29, GA: 26, logo: "sweden/unitednordic.png" },
        { rank: 8, team: "Östers IF", MP: 18, MW: 8, MD: 2, ML: 8, GF: 27, GA: 27, logo: "sweden/osters.png" },
        { rank: 9, team: "Oddevold", MP: 18, MW: 6, MD: 7, ML: 5, GF: 29, GA: 26, logo: "sweden/oddevold.png" },
        { rank: 10, team: "Helsingborg", MP: 18, MW: 7, MD: 3, ML: 8, GF: 31, GA: 36, logo: "sweden/helsingborg.png" },
        { rank: 11, team: "Norrby", MP: 18, MW: 4, MD: 10, ML: 4, GF: 24, GA: 24, logo: "sweden/norrby.png" },
        { rank: 12, team: "Brage", MP: 18, MW: 5, MD: 5, ML: 8, GF: 30, GA: 33, logo: "sweden/brage.png" },
        { rank: 13, team: "Ljungskile", MP: 18, MW: 5, MD: 5, ML: 8, GF: 23, GA: 26, logo: "sweden/ljungskile.png" },
        { rank: 14, team: "Värnamo", MP: 18, MW: 5, MD: 2, ML: 11, GF: 22, GA: 36, logo: "sweden/varnamo.png" },
        { rank: 15, team: "Örebro", MP: 18, MW: 3, MD: 6, ML: 9, GF: 15, GA: 28, logo: "sweden/orebro.png" },
        { rank: 16, team: "GIF Sundsvall", MP: 18, MW: 3, MD: 0, ML: 15, GF: 13, GA: 42, logo: "sweden/gifsundsvall.png" }
    ],
    fixtures: [
        // Matchday 20 - August 23-25
        { home: "Oddevold", away: "Helsingborg", date: "2026-08-23" },
        { home: "Brage", away: "United Nordic", date: "2026-08-23" },
        { home: "Norrby", away: "Sandviken", date: "2026-08-23" },
        { home: "Östersund", away: "Ljungskile", date: "2026-08-24" },
        { home: "Värnamo", away: "Landskrona", date: "2026-08-24" },
        { home: "Norrköping", away: "Falkenberg", date: "2026-08-24" },
        { home: "Östers IF", away: "GIF Sundsvall", date: "2026-08-25" },
        { home: "Örebro", away: "Varbergs BoIS", date: "2026-08-25" }
    ]
},
"Sweden Ettan Norra": {
    id: "sweden-ettan-norra",
    logo: "sweden/ettan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Hammarby TFF", MP: 16, MW: 11, MD: 3, ML: 2, GF: 44, GA: 13, logo: "sweden/hammarbytff.png" },
        { rank: 2, team: "Karlstad", MP: 16, MW: 11, MD: 3, ML: 2, GF: 28, GA: 11, logo: "sweden/karlstad.png" },
        { rank: 3, team: "Stockholm Internazionale", MP: 16, MW: 9, MD: 3, ML: 4, GF: 32, GA: 16, logo: "sweden/stockholmint.png" },
        { rank: 4, team: "Arlanda", MP: 16, MW: 8, MD: 6, ML: 2, GF: 24, GA: 15, logo: "sweden/arlanda.png" },
        { rank: 5, team: "Enkoping SK", MP: 16, MW: 9, MD: 1, ML: 6, GF: 27, GA: 26, logo: "sweden/enkopingsk.png" },
        { rank: 6, team: "AFC Eskilstuna", MP: 16, MW: 7, MD: 4, ML: 5, GF: 27, GA: 25, logo: "sweden/afceskilstuna.png" },
        { rank: 7, team: "FBK Karlstad", MP: 16, MW: 7, MD: 4, ML: 5, GF: 24, GA: 23, logo: "sweden/fbkkarlstad.png" },
        { rank: 8, team: "Karlbergs", MP: 16, MW: 6, MD: 3, ML: 7, GF: 26, GA: 25, logo: "sweden/karlbergs.png" },
        { rank: 9, team: "Assyriska FF", MP: 16, MW: 5, MD: 5, ML: 6, GF: 27, GA: 29, logo: "sweden/assyriska.png" },
        { rank: 10, team: "Vasalund", MP: 16, MW: 5, MD: 4, ML: 7, GF: 23, GA: 31, logo: "sweden/vasalund.png" },
        { rank: 11, team: "Gefle", MP: 16, MW: 5, MD: 2, ML: 9, GF: 19, GA: 34, logo: "sweden/gefle.png" },
        { rank: 12, team: "Umea FC", MP: 16, MW: 4, MD: 4, ML: 8, GF: 21, GA: 28, logo: "sweden/umeafc.png" },
        { rank: 13, team: "Jarfalla", MP: 16, MW: 4, MD: 3, ML: 9, GF: 22, GA: 35, logo: "sweden/jarfalla.png" },
        { rank: 14, team: "Sollentuna", MP: 16, MW: 2, MD: 8, ML: 6, GF: 13, GA: 23, logo: "sweden/sollentuna.png" },
        { rank: 15, team: "Stocksund", MP: 16, MW: 2, MD: 5, ML: 9, GF: 33, GA: 38, logo: "sweden/stocksund.png" },
        { rank: 16, team: "Pitea", MP: 16, MW: 2, MD: 4, ML: 10, GF: 16, GA: 34, logo: "sweden/pitea.png" }
    ],
    fixtures: [
        // Round 18 - August 21-23
        { home: "Stockholm Internazionale", away: "Jarfalla", date: "2026-08-21" },
        { home: "Sollentuna", away: "Karlstad", date: "2026-08-22" },
        { home: "Karlbergs", away: "AFC Eskilstuna", date: "2026-08-23" },
        { home: "Umea FC", away: "Enkoping SK", date: "2026-08-23" },
        { home: "Vasalund", away: "Stocksund", date: "2026-08-23" },
        { home: "Arlanda", away: "FBK Karlstad", date: "2026-08-23" },
        { home: "Hammarby TFF", away: "Pitea", date: "2026-08-23" },
        { home: "Assyriska FF", away: "Gefle", date: "2026-08-23" }
    ]
},
"Greek Super League": {
    id: "greece-super-league",
    logo: "greece/superleague.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "AEK", MP: 26, MW: 18, MD: 6, ML: 2, GF: 49, GA: 17, logo: "greece/aek.png" },
        { rank: 2, team: "Olympiacos", MP: 26, MW: 17, MD: 7, ML: 2, GF: 45, GA: 11, logo: "greece/olympiacos.png" },
        { rank: 3, team: "PAOK", MP: 26, MW: 17, MD: 6, ML: 3, GF: 52, GA: 17, logo: "greece/paok.png" },
        { rank: 4, team: "Panathinaikos", MP: 26, MW: 14, MD: 7, ML: 5, GF: 44, GA: 26, logo: "greece/panathinaikos.png" },
        { rank: 5, team: "Levadiakos", MP: 26, MW: 12, MD: 6, ML: 8, GF: 51, GA: 37, logo: "greece/levadiakos.png" },
        { rank: 6, team: "OFI", MP: 26, MW: 10, MD: 2, ML: 14, GF: 34, GA: 45, logo: "greece/oficrete.png" },
        { rank: 7, team: "Volos", MP: 26, MW: 9, MD: 4, ML: 13, GF: 26, GA: 38, logo: "greece/volos.png" },
        { rank: 8, team: "Aris", MP: 26, MW: 6, MD: 12, ML: 8, GF: 20, GA: 27, logo: "greece/aris.png" },
        { rank: 9, team: "Atromitos", MP: 26, MW: 7, MD: 8, ML: 11, GF: 26, GA: 30, logo: "greece/atromitos.png" },
        { rank: 10, team: "Kifisia", MP: 26, MW: 6, MD: 9, ML: 11, GF: 32, GA: 42, logo: "greece/kifisia.png" },
        { rank: 11, team: "Panetolikos", MP: 26, MW: 7, MD: 5, ML: 14, GF: 24, GA: 38, logo: "greece/panetolikos.png" },
        { rank: 12, team: "AEL", MP: 26, MW: 4, MD: 11, ML: 11, GF: 22, GA: 39, logo: "greece/ael.png" },
        { rank: 13, team: "Panserraikos", MP: 26, MW: 4, MD: 5, ML: 17, GF: 16, GA: 55, logo: "greece/panserraikos.png" },
        { rank: 14, team: "Asteras Tripolis", MP: 26, MW: 3, MD: 8, ML: 15, GF: 22, GA: 41, logo: "greece/asteras.png" },
        // Additional teams for 2026/27 season
        { rank: 15, team: "Iraklis", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "greece/iraklis.png" },
        { rank: 16, team: "Kalamata", MP: 0, MW: 0, MD: 0, ML: 0, GF: 0, GA: 0, logo: "greece/kalamata.png" }
    ],
    fixtures: [
        // Matchday 1 - August 22-23
        { home: "AEK", away: "Iraklis", date: "2026-08-22" },
        { home: "Kalamata", away: "Aris", date: "2026-08-22" },
        { home: "Olympiacos", away: "Atromitos", date: "2026-08-22" },
        { home: "OFI", away: "Volos", date: "2026-08-23" },
        { home: "PAOK", away: "Levadiakos", date: "2026-08-23" },
        { home: "Panathinaikos", away: "Kifisia", date: "2026-08-23" },
        { home: "Panetolikos", away: "Asteras Tripolis", date: "2026-08-23" },
        
        // Matchday 2 - August 29
        { home: "Aris", away: "OFI", date: "2026-08-29" },
        { home: "Atromitos", away: "PAOK", date: "2026-08-29" },
        { home: "Kifisia", away: "AEK", date: "2026-08-29" },
        { home: "Volos", away: "Iraklis", date: "2026-08-29" },
        { home: "Asteras Tripolis", away: "Olympiacos", date: "2026-08-29" },
        { home: "Levadiakos", away: "Panathinaikos", date: "2026-08-29" },
        { home: "Panetolikos", away: "Kalamata", date: "2026-08-29" }
    ]
},

"Norwegian Eliteserien": {
    id: "norway-eliteserien",
    logo: "norway/eliteserien.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Bodø/Glimt", MP: 17, MW: 13, MD: 2, ML: 2, GF: 43, GA: 12, logo: "norway/bodo.png" },
        { rank: 2, team: "Viking", MP: 16, MW: 13, MD: 1, ML: 2, GF: 39, GA: 15, logo: "norway/viking.png" },
        { rank: 3, team: "Tromso", MP: 16, MW: 10, MD: 4, ML: 2, GF: 32, GA: 17, logo: "norway/tromso.png" },
        { rank: 4, team: "Lillestrøm", MP: 16, MW: 8, MD: 1, ML: 7, GF: 22, GA: 20, logo: "norway/lillestrom.png" },
        { rank: 5, team: "Molde", MP: 16, MW: 7, MD: 3, ML: 6, GF: 29, GA: 24, logo: "norway/molde.png" },
        { rank: 6, team: "Brann", MP: 16, MW: 7, MD: 1, ML: 8, GF: 33, GA: 27, logo: "norway/brann.png" },
        { rank: 7, team: "Sarpsborg", MP: 16, MW: 6, MD: 4, ML: 6, GF: 19, GA: 21, logo: "norway/sarpsborg.png" },
        { rank: 8, team: "HamKam", MP: 16, MW: 6, MD: 4, ML: 6, GF: 24, GA: 27, logo: "norway/hamkam.png" },
        { rank: 9, team: "Rosenborg", MP: 16, MW: 6, MD: 3, ML: 7, GF: 23, GA: 21, logo: "norway/rosenborg.png" },
        { rank: 10, team: "Vålerenga", MP: 16, MW: 6, MD: 2, ML: 8, GF: 23, GA: 29, logo: "norway/valerenga.png" },
        { rank: 11, team: "Fredrikstad", MP: 16, MW: 6, MD: 2, ML: 8, GF: 17, GA: 27, logo: "norway/fredrikstad.png" },
        { rank: 12, team: "KFUM", MP: 16, MW: 5, MD: 3, ML: 8, GF: 18, GA: 26, logo: "norway/kfum.png" },
        { rank: 13, team: "Sandefjord", MP: 16, MW: 4, MD: 3, ML: 9, GF: 13, GA: 22, logo: "norway/sandefjord.png" },
        { rank: 14, team: "Kristiansund", MP: 16, MW: 4, MD: 3, ML: 9, GF: 15, GA: 26, logo: "norway/kristiansund.png" },
        { rank: 15, team: "Aalesund", MP: 16, MW: 2, MD: 8, ML: 6, GF: 22, GA: 36, logo: "norway/aalesund.png" },
        { rank: 16, team: "Start", MP: 17, MW: 2, MD: 4, ML: 11, GF: 16, GA: 38, logo: "norway/start.png" }
    ],
    fixtures: [
        // Matchday 19 - August 29-30
        { home: "Vålerenga", away: "Molde", date: "2026-08-29" },
        { home: "Viking", away: "Aalesund", date: "2026-08-29" },
        { home: "Bodø/Glimt", away: "Rosenborg", date: "2026-08-30" },
        { home: "Tromso", away: "Sarpsborg", date: "2026-08-30" },
        { home: "Sandefjord", away: "Brann", date: "2026-08-30" },
        { home: "Start", away: "KFUM", date: "2026-08-30" },
        { home: "HamKam", away: "Kristiansund", date: "2026-08-30" },
        { home: "Lillestrøm", away: "Fredrikstad", date: "2026-08-30" }
    ]
},
"Norwegian First Division": {
    id: "norway",
    logo: "norway/norway.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Haugesund", MP: 17, MW: 12, MD: 1, ML: 4, GF: 55, GA: 33, logo: "norway/haugesund.png" },
        { rank: 2, team: "Stabæk", MP: 17, MW: 11, MD: 3, ML: 3, GF: 44, GA: 19, logo: "norway/stabaek.png" },
        { rank: 3, team: "Kongsvinger", MP: 17, MW: 11, MD: 3, ML: 3, GF: 45, GA: 26, logo: "norway/kongsvinger.png" },
        { rank: 4, team: "Stroemsgodset", MP: 17, MW: 9, MD: 5, ML: 3, GF: 44, GA: 25, logo: "norway/stroemsgodset.png" },
        { rank: 5, team: "Odd", MP: 16, MW: 8, MD: 4, ML: 4, GF: 31, GA: 20, logo: "norway/odd.png" },
        { rank: 6, team: "Hødd", MP: 17, MW: 8, MD: 3, ML: 6, GF: 28, GA: 29, logo: "norway/hodd.png" },
        { rank: 7, team: "Egersund", MP: 17, MW: 8, MD: 2, ML: 7, GF: 31, GA: 28, logo: "norway/egersund.png" },
        { rank: 8, team: "Ranheim TF", MP: 17, MW: 7, MD: 2, ML: 8, GF: 43, GA: 42, logo: "norway/ranheim.png" },
        { rank: 9, team: "Bryne FK", MP: 17, MW: 7, MD: 2, ML: 8, GF: 23, GA: 26, logo: "norway/brynefk.png" },
        { rank: 10, team: "Sandnes Ulf", MP: 17, MW: 6, MD: 2, ML: 9, GF: 26, GA: 32, logo: "norway/sandnesulf.png" },
        { rank: 11, team: "Sogndal", MP: 17, MW: 5, MD: 3, ML: 9, GF: 30, GA: 43, logo: "norway/sogndal.png" },
        { rank: 12, team: "Moss", MP: 16, MW: 5, MD: 2, ML: 9, GF: 25, GA: 36, logo: "norway/moss.png" },
        { rank: 13, team: "Lyn", MP: 17, MW: 5, MD: 2, ML: 10, GF: 24, GA: 37, logo: "norway/lyn.png" },
        { rank: 14, team: "Raufoss", MP: 17, MW: 5, MD: 1, ML: 11, GF: 21, GA: 41, logo: "norway/raufoss.png" },
        { rank: 15, team: "Strømmen", MP: 17, MW: 4, MD: 3, ML: 10, GF: 22, GA: 41, logo: "norway/stremmen.png" },
        { rank: 16, team: "Åsane", MP: 17, MW: 4, MD: 2, ML: 11, GF: 25, GA: 39, logo: "norway/asane.png" }
    ],
    fixtures: [
        // Matchday 20 - August 22-26
        { home: "Sandnes Ulf", away: "Bryne FK", date: "2026-08-22" },
        { home: "Strømmen", away: "Raufoss", date: "2026-08-26" },
        { home: "Stroemsgodset", away: "Hødd", date: "2026-08-26" },
        { home: "Moss", away: "Sogndal", date: "2026-08-26" },
        { home: "Haugesund", away: "Egersund", date: "2026-08-26" },
        { home: "Åsane", away: "Lyn", date: "2026-08-26" },
        { home: "Stabæk", away: "Ranheim TF", date: "2026-08-26" },
        { home: "Odd", away: "Kongsvinger", date: "2026-08-26" }
    ]
},

"Latvia Nakotnes Liga": {
    id: "latvia",
    logo: "latvia/latvia.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Valmiera", MP: 16, MW: 13, MD: 2, ML: 1, GF: 44, GA: 14, logo: "latvia/valmiera.png" },
        { rank: 2, team: "Metta/LU", MP: 16, MW: 13, MD: 2, ML: 1, GF: 69, GA: 14, logo: "latvia/metta.png" },
        { rank: 3, team: "Leevon PPK", MP: 16, MW: 11, MD: 3, ML: 2, GF: 27, GA: 18, logo: "latvia/leevonppk.png" },
        { rank: 4, team: "Riga Mariners", MP: 16, MW: 10, MD: 5, ML: 1, GF: 34, GA: 15, logo: "latvia/rigamariners.png" },
        { rank: 5, team: "JDFS Alberts", MP: 16, MW: 8, MD: 4, ML: 4, GF: 32, GA: 23, logo: "latvia/jdfs alberts.png" },
        { rank: 6, team: "SK Super Nova II", MP: 16, MW: 6, MD: 5, ML: 5, GF: 23, GA: 23, logo: "latvia/supernova.png" },
        { rank: 7, team: "Mārupes", MP: 16, MW: 7, MD: 1, ML: 8, GF: 26, GA: 25, logo: "latvia/marupes.png" },
        { rank: 8, team: "Riga II", MP: 16, MW: 6, MD: 2, ML: 8, GF: 23, GA: 30, logo: "latvia/rigaii.png" },
        { rank: 9, team: "Skanste", MP: 16, MW: 6, MD: 1, ML: 9, GF: 30, GA: 32, logo: "latvia/skanste.png" },
        { rank: 10, team: "Tukums II", MP: 16, MW: 3, MD: 3, ML: 10, GF: 21, GA: 45, logo: "latvia/tukumsii.png" },
        { rank: 11, team: "RFS 2", MP: 16, MW: 3, MD: 3, ML: 10, GF: 22, GA: 45, logo: "latvia/rfs2.png" },
        { rank: 12, team: "Ventspils", MP: 16, MW: 2, MD: 5, ML: 9, GF: 18, GA: 28, logo: "latvia/ventspils.png" },
        { rank: 13, team: "Smiltene", MP: 16, MW: 2, MD: 4, ML: 10, GF: 19, GA: 43, logo: "latvia/smiltene.png" },
        { rank: 14, team: "Rēzeknes FA/BJSS", MP: 16, MW: 1, MD: 2, ML: 13, GF: 13, GA: 46, logo: "latvia/rezeknes.png" }
    ],
    fixtures: [
        
        // Matchday 18 - August 22-24
        { home: "Valmiera", away: "Mārupes", date: "2026-08-22" },
        { home: "Tukums II", away: "Ventspils", date: "2026-08-22" },
        { home: "RFS 2", away: "JDFS Alberts", date: "2026-08-22" },
        { home: "Leevon PPK", away: "Smiltene", date: "2026-08-23" },
        { home: "SK Super Nova II", away: "Skanste", date: "2026-08-23" },
        { home: "Rēzeknes FA/BJSS", away: "Metta/LU", date: "2026-08-23" },
        { home: "Riga II", away: "Riga Mariners", date: "2026-08-24" }
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
        // Matchday 28 - August 21-22
        { home: "Drogheda United", away: "St Patrick's Athletic", date: "2026-08-21" },
        { home: "Dundalk", away: "Galway United", date: "2026-08-21" },
        { home: "Bohemians", away: "Derry City", date: "2026-08-21" },
        { home: "Shamrock Rovers", away: "Shelbourne", date: "2026-08-21" },
        { home: "Sligo Rovers", away: "Waterford", date: "2026-08-22" }
    ]
},
"Irish Division 1": {
    id: "ireland-division-1",
    logo: "ireland/division1.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Cork City", MP: 27, MW: 20, MD: 3, ML: 4, GF: 57, GA: 23, logo: "ireland/corkcity.png" },
        { rank: 2, team: "Bray", MP: 27, MW: 12, MD: 7, ML: 8, GF: 54, GA: 37, logo: "ireland/bray.png" },
        { rank: 3, team: "UC Dublin", MP: 27, MW: 13, MD: 4, ML: 10, GF: 46, GA: 32, logo: "ireland/ucdublin.png" },
        { rank: 4, team: "Longford", MP: 27, MW: 10, MD: 7, ML: 10, GF: 35, GA: 34, logo: "ireland/longford.png" },
        { rank: 5, team: "Cobh Ramblers", MP: 27, MW: 11, MD: 4, ML: 12, GF: 29, GA: 37, logo: "ireland/cobhramblers.png" },
        { rank: 6, team: "Kerry", MP: 27, MW: 9, MD: 8, ML: 10, GF: 34, GA: 33, logo: "ireland/kerry.png" },
        { rank: 7, team: "Wexford", MP: 27, MW: 9, MD: 7, ML: 11, GF: 32, GA: 39, logo: "ireland/wexford.png" },
        { rank: 8, team: "Athlone", MP: 27, MW: 8, MD: 7, ML: 12, GF: 26, GA: 33, logo: "ireland/athlonetown.png" },
        { rank: 9, team: "Treaty United", MP: 27, MW: 7, MD: 8, ML: 12, GF: 26, GA: 39, logo: "ireland/treatyunited.png" },
        { rank: 10, team: "Finn Harps", MP: 27, MW: 5, MD: 7, ML: 15, GF: 21, GA: 53, logo: "ireland/finnharps.png" }
    ],
    fixtures: [
        // Round 28 - August 21-22
        { home: "Finn Harps", away: "Cobh Ramblers", date: "2026-08-21" },
        { home: "Kerry", away: "UC Dublin", date: "2026-08-21" },
        { home: "Treaty United", away: "Cork City", date: "2026-08-21" },
        { home: "Wexford", away: "Athlone", date: "2026-08-21" },
        { home: "Longford", away: "Bray", date: "2026-08-22" },
        
        // Round 29 - August 28
        { home: "Athlone", away: "Bray", date: "2026-08-28" },
        { home: "Cobh Ramblers", away: "Longford", date: "2026-08-28" },
        { home: "Cork City", away: "Wexford", date: "2026-08-28" },
        { home: "Kerry", away: "Treaty United", date: "2026-08-28" },
        { home: "UC Dublin", away: "Finn Harps", date: "2026-08-28" },
        
        // Round 30 - September 4-5
        { home: "Bray", away: "Cork City", date: "2026-09-04" },
        { home: "Cobh Ramblers", away: "UC Dublin", date: "2026-09-04" },
        { home: "Finn Harps", away: "Athlone", date: "2026-09-04" },
        { home: "Treaty United", away: "Wexford", date: "2026-09-04" },
        { home: "Longford", away: "Kerry", date: "2026-09-05" }
    ]
},
"Chinese Super League": {
    id: "csl",
    logo: "china/csl.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Chengdu Rongcheng", MP: 23, MW: 14, MD: 6, ML: 3, GF: 45, GA: 24, logo: "china/chengdurongchenglogo.png" },
        { rank: 2, team: "Yunnan Yukun", MP: 23, MW: 10, MD: 4, ML: 9, GF: 46, GA: 42, logo: "china/yunnanlogo.png" },
        { rank: 3, team: "Shandong Taishan", MP: 23, MW: 12, MD: 3, ML: 8, GF: 42, GA: 38, logo: "china/shandongtaishanlogo.png" },
        { rank: 4, team: "Qingdao Youth Island", MP: 23, MW: 7, MD: 12, ML: 4, GF: 26, GA: 29, logo: "china/qingdaologo.png" },
        { rank: 5, team: "Beijing Guoan", MP: 22, MW: 10, MD: 7, ML: 5, GF: 42, GA: 29, logo: "china/beijinggouanlogo.png" },
        { rank: 6, team: "Dalian Yingbo", MP: 22, MW: 10, MD: 2, ML: 10, GF: 33, GA: 39, logo: "china/dalianlogo.png" },
        { rank: 7, team: "Chongqing Tonglianglong", MP: 23, MW: 7, MD: 9, ML: 7, GF: 25, GA: 27, logo: "china/chongqing.png" },
        { rank: 8, team: "Shenzhen Peng City", MP: 23, MW: 8, MD: 2, ML: 13, GF: 32, GA: 42, logo: "china/shenzhenlogo.png" },
        { rank: 9, team: "Shanghai Port", MP: 22, MW: 8, MD: 6, ML: 8, GF: 36, GA: 31, logo: "china/shanghaiportlogo.png" },
        { rank: 10, team: "Shanghai Shenhua", MP: 22, MW: 10, MD: 5, ML: 7, GF: 42, GA: 35, logo: "china/shanghaishenhualogo.png" },
        { rank: 11, team: "Zhejiang", MP: 22, MW: 8, MD: 5, ML: 9, GF: 33, GA: 39, logo: "china/zhejianglogo.png" },
        { rank: 12, team: "Shenyang Urban", MP: 22, MW: 7, MD: 3, ML: 12, GF: 29, GA: 35, logo: "china/shenyang.png" },
        { rank: 13, team: "Henan", MP: 22, MW: 8, MD: 5, ML: 9, GF: 27, GA: 29, logo: "china/henanlogo.png" },
        { rank: 14, team: "Tianjin Jinmen Tiger", MP: 22, MW: 7, MD: 6, ML: 9, GF: 32, GA: 30, logo: "china/tianjinlogo.png" },
        { rank: 15, team: "Wuhan Three Towns", MP: 21, MW: 4, MD: 8, ML: 9, GF: 30, GA: 38, logo: "china/wuhanlogo.png" },
        { rank: 16, team: "Qingdao Hainiu", MP: 23, MW: 6, MD: 3, ML: 14, GF: 31, GA: 44, logo: "china/qingdaohainiulogo.png" }
    ],
    fixtures: [
        // Matchday 25 - August 22-23
        { home: "Wuhan Three Towns", away: "Tianjin Jinmen Tiger", date: "2026-08-22" },
        { home: "Shenzhen Peng City", away: "Zhejiang", date: "2026-08-22" },
        { home: "Chengdu Rongcheng", away: "Shanghai Shenhua", date: "2026-08-22" },
        { home: "Qingdao Youth Island", away: "Shandong Taishan", date: "2026-08-22" },
        { home: "Beijing Guoan", away: "Yunnan Yukun", date: "2026-08-22" },
        { home: "Shenyang Urban", away: "Henan", date: "2026-08-23" },
        { home: "Shanghai Port", away: "Qingdao Hainiu", date: "2026-08-23" },
        { home: "Chongqing Tonglianglong", away: "Dalian Yingbo", date: "2026-08-23" },
        
        // Matchday 26 - August 28-29
        { home: "Dalian Yingbo", away: "Beijing Guoan", date: "2026-08-28" },
        { home: "Shenzhen Peng City", away: "Shanghai Port", date: "2026-08-28" },
        { home: "Qingdao Hainiu", away: "Wuhan Three Towns", date: "2026-08-29" },
        { home: "Zhejiang", away: "Yunnan Yukun", date: "2026-08-29" },
        { home: "Tianjin Jinmen Tiger", away: "Qingdao Youth Island", date: "2026-08-29" },
        { home: "Shanghai Shenhua", away: "Shandong Taishan", date: "2026-08-29" },
        { home: "Chengdu Rongcheng", away: "Shenyang Urban", date: "2026-08-29" },
        { home: "Henan", away: "Chongqing Tonglianglong", date: "2026-08-29" }
    ]
},
"Belarusian Premier League": {
    id: "belarus",
    logo: "belarus/belarus.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Isloch", MP: 16, MW: 10, MD: 4, ML: 2, GF: 30, GA: 14, logo: "belarus/isloch.png" },
        { rank: 2, team: "Winner Dinamo-Minsk / Sileks", MP: 14, MW: 10, MD: 3, ML: 1, GF: 26, GA: 12, logo: "belarus/dinamominsk.png" },
        { rank: 3, team: "Maxline", MP: 14, MW: 9, MD: 4, ML: 1, GF: 30, GA: 13, logo: "belarus/maxline.png" },
        { rank: 4, team: "Dinamo Brest", MP: 18, MW: 9, MD: 3, ML: 6, GF: 30, GA: 17, logo: "belarus/dinamobrest.png" },
        { rank: 5, team: "Gomel", MP: 18, MW: 8, MD: 5, ML: 5, GF: 27, GA: 15, logo: "belarus/gomel.png" },
        { rank: 6, team: "Minsk", MP: 18, MW: 8, MD: 4, ML: 6, GF: 25, GA: 23, logo: "belarus/minsk.png" },
        { rank: 7, team: "Vitebsk", MP: 18, MW: 7, MD: 5, ML: 6, GF: 18, GA: 17, logo: "belarus/vitebsk.png" },
        { rank: 8, team: "Neman", MP: 17, MW: 7, MD: 3, ML: 7, GF: 18, GA: 17, logo: "belarus/neman.png" },
        { rank: 9, team: "Torpedo Zhodino", MP: 16, MW: 6, MD: 5, ML: 5, GF: 23, GA: 14, logo: "belarus/torpedozhodino.png" },
        { rank: 10, team: "Slavia-Mozyr", MP: 17, MW: 5, MD: 6, ML: 6, GF: 20, GA: 23, logo: "belarus/slaviamozyr.png" },
        { rank: 11, team: "Arsenal Dzyarzhynsk", MP: 18, MW: 5, MD: 6, ML: 7, GF: 20, GA: 29, logo: "belarus/arsenal.png" },
        { rank: 12, team: "Baranovichi", MP: 17, MW: 4, MD: 5, ML: 8, GF: 20, GA: 32, logo: "belarus/baranovichi.png" },
        { rank: 13, team: "BATE", MP: 16, MW: 2, MD: 7, ML: 7, GF: 12, GA: 19, logo: "belarus/bate.png" },
        { rank: 14, team: "Dnepr", MP: 18, MW: 2, MD: 7, ML: 9, GF: 16, GA: 29, logo: "belarus/dnepr.png" },
        { rank: 15, team: "Belshina", MP: 16, MW: 3, MD: 3, ML: 10, GF: 14, GA: 31, logo: "belarus/belshina.png" },
        { rank: 16, team: "Naftan", MP: 17, MW: 2, MD: 4, ML: 11, GF: 16, GA: 40, logo: "belarus/naftan.png" }
    ],
    fixtures: [
        // Matchday 20 - August 19-20
        { home: "Winner Dinamo-Minsk / Sileks", away: "Torpedo Zhodino", date: "2026-08-20" },
        
        // Matchday 21 - August 28-30
        { home: "Vitebsk", away: "Naftan", date: "2026-08-28" },
        { home: "Gomel", away: "Belshina", date: "2026-08-28" },
        { home: "Winner Dinamo-Minsk / Sileks", away: "Baranovichi", date: "2026-08-29" },
        { home: "Dinamo Brest", away: "Maxline", date: "2026-08-29" },
        { home: "Neman", away: "Slavia-Mozyr", date: "2026-08-29" },
        { home: "Arsenal Dzyarzhynsk", away: "Torpedo Zhodino", date: "2026-08-30" },
        { home: "Dnepr", away: "Isloch", date: "2026-08-30" },
        { home: "BATE", away: "Minsk", date: "2026-08-30" }
    ]
},
"Kazakhstan Premier League": {
    id: "kazakhstan",
    logo: "kazakhstan/kazakhstan.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Ordabasy", MP: 22, MW: 16, MD: 4, ML: 2, GF: 43, GA: 16, logo: "kazakhstan/ordabasy.png" },
        { rank: 2, team: "Kairat", MP: 21, MW: 14, MD: 6, ML: 1, GF: 42, GA: 15, logo: "kazakhstan/kairat.png" },
        { rank: 3, team: "Astana", MP: 21, MW: 11, MD: 6, ML: 4, GF: 34, GA: 22, logo: "kazakhstan/astana.png" },
        { rank: 4, team: "Okzhetpes", MP: 22, MW: 10, MD: 6, ML: 6, GF: 32, GA: 29, logo: "kazakhstan/okzhetpes.png" },
        { rank: 5, team: "FC Aktobe", MP: 22, MW: 10, MD: 5, ML: 7, GF: 32, GA: 26, logo: "kazakhstan/aktobe.png" },
        { rank: 6, team: "Yelimay", MP: 21, MW: 8, MD: 8, ML: 5, GF: 31, GA: 26, logo: "kazakhstan/yelimay.png" },
        { rank: 7, team: "Ulytau", MP: 22, MW: 7, MD: 7, ML: 8, GF: 18, GA: 24, logo: "kazakhstan/ulytau.png" },
        { rank: 8, team: "Zhenys", MP: 21, MW: 6, MD: 8, ML: 7, GF: 21, GA: 24, logo: "kazakhstan/zhenys.png" },
        { rank: 9, team: "Tobol", MP: 21, MW: 7, MD: 4, ML: 10, GF: 23, GA: 28, logo: "kazakhstan/tobol.png" },
        { rank: 10, team: "Kaspiy Aktau", MP: 22, MW: 6, MD: 5, ML: 11, GF: 24, GA: 31, logo: "kazakhstan/kaspiy.png" },
        { rank: 11, team: "Kyzyl-Zhar SK", MP: 22, MW: 6, MD: 5, ML: 11, GF: 24, GA: 32, logo: "kazakhstan/kyzylzhar.png" },
        { rank: 12, team: "Atyrau", MP: 21, MW: 3, MD: 11, ML: 7, GF: 15, GA: 21, logo: "kazakhstan/atyrau.png" },
        { rank: 13, team: "Kaisar", MP: 21, MW: 3, MD: 11, ML: 7, GF: 16, GA: 24, logo: "kazakhstan/kaisar.png" },
        { rank: 14, team: "Altay", MP: 22, MW: 4, MD: 7, ML: 11, GF: 20, GA: 33, logo: "kazakhstan/altay.png" },
        { rank: 15, team: "Zhetysu", MP: 22, MW: 4, MD: 7, ML: 11, GF: 24, GA: 38, logo: "kazakhstan/zhetysu.png" },
        { rank: 16, team: "FC Irtysh Pavlodar", MP: 21, MW: 3, MD: 8, ML: 10, GF: 20, GA: 30, logo: "kazakhstan/irtysh.png" }
    ],
    fixtures: [
        // Matchday 23 - August 22-23
        { home: "Okzhetpes", away: "Kyzyl-Zhar SK", date: "2026-08-22" },
        { home: "Kairat", away: "FC Irtysh Pavlodar", date: "2026-08-22" },
        { home: "Altay", away: "Atyrau", date: "2026-08-23" },
        { home: "Tobol", away: "Zhenys", date: "2026-08-23" },
        { home: "Zhetysu", away: "Kaisar", date: "2026-08-23" },
        { home: "Astana", away: "Kaspiy Aktau", date: "2026-08-23" },
        { home: "Yelimay", away: "Ulytau", date: "2026-08-23" },
        { home: "FC Aktobe", away: "Ordabasy", date: "2026-08-23" },
        
        // Matchday 24 - August 29-30
        { home: "Ulytau", away: "Zhetysu", date: "2026-08-29" },
        { home: "Zhenys", away: "Altay", date: "2026-08-29" },
        { home: "Kaisar", away: "Okzhetpes", date: "2026-08-29" },
        { home: "Ordabasy", away: "Kyzyl-Zhar SK", date: "2026-08-29" },
        { home: "FC Irtysh Pavlodar", away: "FC Aktobe", date: "2026-08-30" },
        { home: "Yelimay", away: "Kairat", date: "2026-08-30" },
        { home: "Atyrau", away: "Astana", date: "2026-08-30" },
        { home: "Kaspiy Aktau", away: "Tobol", date: "2026-08-30" }
    ]
},
"Bolivian Primera División": {
    id: "bolivia",
    logo: "bolivia/bolivia.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "Always Ready", MP: 14, MW: 10, MD: 3, ML: 1, GF: 31, GA: 8, logo: "bolivia/alwaysready.png" },
        { rank: 2, team: "Bolívar", MP: 14, MW: 8, MD: 3, ML: 3, GF: 32, GA: 15, logo: "bolivia/bolivar.png" },
        { rank: 3, team: "The Strongest", MP: 14, MW: 7, MD: 6, ML: 1, GF: 21, GA: 14, logo: "bolivia/thestrongest.png" },
        { rank: 4, team: "Real Potosí", MP: 14, MW: 6, MD: 5, ML: 3, GF: 21, GA: 10, logo: "bolivia/realpotosi.png" },
        { rank: 5, team: "Aurora", MP: 14, MW: 5, MD: 7, ML: 2, GF: 23, GA: 19, logo: "bolivia/aurora.png" },
        { rank: 6, team: "Guabirá", MP: 14, MW: 6, MD: 3, ML: 5, GF: 23, GA: 26, logo: "bolivia/guabira.png" },
        { rank: 7, team: "Oriente Petrolero", MP: 14, MW: 6, MD: 2, ML: 6, GF: 22, GA: 18, logo: "bolivia/orientepetrolero.png" },
        { rank: 8, team: "Independiente Petrolero", MP: 14, MW: 5, MD: 4, ML: 5, GF: 21, GA: 21, logo: "bolivia/independientepetrolero.png" },
        { rank: 9, team: "Blooming", MP: 14, MW: 4, MD: 6, ML: 4, GF: 17, GA: 16, logo: "bolivia/blooming.png" },
        { rank: 10, team: "SA Bulo Bulo", MP: 14, MW: 5, MD: 2, ML: 7, GF: 17, GA: 24, logo: "bolivia/sabulobulo.png" },
        { rank: 11, team: "Real Oruro", MP: 14, MW: 5, MD: 2, ML: 7, GF: 25, GA: 35, logo: "bolivia/realoruro.png" },
        { rank: 12, team: "Academia del Balompie Boliviano", MP: 14, MW: 5, MD: 1, ML: 8, GF: 24, GA: 29, logo: "bolivia/academia.png" },
        { rank: 13, team: "Nacional Potosí", MP: 14, MW: 4, MD: 3, ML: 7, GF: 20, GA: 21, logo: "bolivia/nacionalpotosi.png" },
        { rank: 14, team: "Gualberto Villarroel San José", MP: 14, MW: 2, MD: 6, ML: 6, GF: 14, GA: 21, logo: "bolivia/gualberto.png" },
        { rank: 15, team: "Universitario de Vinto", MP: 14, MW: 3, MD: 2, ML: 9, GF: 17, GA: 30, logo: "bolivia/universitariovinto.png" },
        { rank: 16, team: "Real Tomayapo", MP: 14, MW: 2, MD: 3, ML: 9, GF: 10, GA: 31, logo: "bolivia/realtomayapo.png" }
    ],
    fixtures: [
      
        // Matchday 16 - August 21-24
        { home: "The Strongest", away: "Universitario de Vinto", date: "2026-08-21" },
        { home: "Oriente Petrolero", away: "SA Bulo Bulo", date: "2026-08-22" },
        { home: "Academia del Balompie Boliviano", away: "Gualberto Villarroel San José", date: "2026-08-22" },
        { home: "Aurora", away: "Real Potosí", date: "2026-08-22" },
        { home: "Nacional Potosí", away: "Independiente Petrolero", date: "2026-08-23" },
        { home: "Real Oruro", away: "Bolívar", date: "2026-08-23" },
        { home: "Guabirá", away: "Blooming", date: "2026-08-23" },
        { home: "Real Tomayapo", away: "Always Ready", date: "2026-08-24" }
    ]
},

"Finland Veikkausliiga": {
    id: "finland-veikkausliiga",
    logo: "finland/veikkausliiga.png",
    isBasketball: false,
    teams: [
        { rank: 1, team: "KuPS", MP: 18, MW: 11, MD: 6, ML: 1, GF: 33, GA: 16, logo: "finland/kups.png" },
        { rank: 2, team: "Inter Turku", MP: 18, MW: 9, MD: 7, ML: 2, GF: 25, GA: 14, logo: "finland/interturku.png" },
        { rank: 3, team: "VPS", MP: 19, MW: 8, MD: 6, ML: 5, GF: 27, GA: 18, logo: "finland/vps.png" },
        { rank: 4, team: "Oulu", MP: 18, MW: 9, MD: 3, ML: 6, GF: 22, GA: 21, logo: "finland/oulu.png" },
        { rank: 5, team: "Gnistan", MP: 19, MW: 8, MD: 5, ML: 6, GF: 29, GA: 24, logo: "finland/gnistan.png" },
        { rank: 6, team: "HJK", MP: 18, MW: 8, MD: 4, ML: 6, GF: 28, GA: 23, logo: "finland/hjk.png" },
        { rank: 7, team: "FC Lahti", MP: 18, MW: 7, MD: 4, ML: 7, GF: 22, GA: 16, logo: "finland/fclahti.png" },
        { rank: 8, team: "Turun", MP: 18, MW: 7, MD: 4, ML: 7, GF: 23, GA: 20, logo: "finland/turun.png" },
        { rank: 9, team: "Ilves", MP: 18, MW: 6, MD: 4, ML: 8, GF: 29, GA: 31, logo: "finland/ilves.png" },
        { rank: 10, team: "SJK", MP: 19, MW: 4, MD: 6, ML: 9, GF: 24, GA: 29, logo: "finland/sjk.png" },
        { rank: 11, team: "FF Jaro", MP: 19, MW: 3, MD: 6, ML: 10, GF: 18, GA: 38, logo: "finland/ffjaro.png" },
        { rank: 12, team: "IFK Mariehamn", MP: 18, MW: 0, MD: 5, ML: 13, GF: 9, GA: 39, logo: "finland/ifkmariehamn.png" }
    ], 
 fixtures: [	
   
        // August 21
        { home: "SJK", away: "FC Lahti", date: "2026-08-21" },
        
        // August 22
        { home: "Turun", away: "Inter Turku", date: "2026-08-22" },
        { home: "FF Jaro", away: "Oulu", date: "2026-08-22" },
        { home: "Ilves", away: "VPS", date: "2026-08-22" }
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
        // Matchday 3 - July 22-27
        { home: "Cruz Azul", away: "Puebla", date: "2026-07-22" },
        { home: "Toluca", away: "UNAM Pumas", date: "2026-07-22" },
        { home: "Tigres UANL", away: "Atl. San Luis", date: "2026-07-25" },
        { home: "Club Tijuana", away: "Club Leon", date: "2026-07-25" },
        { home: "Atlante", away: "Club America", date: "2026-07-25" },
        { home: "Guadalajara Chivas", away: "Juarez", date: "2026-07-26" },
        { home: "Santos Laguna", away: "Atlas", date: "2026-07-26" },
        { home: "Necaxa", away: "Monterrey", date: "2026-07-27" },
        { home: "Pachuca", away: "Queretaro", date: "2026-07-27" },
        
        // Matchday 4 - August 1-3
        { home: "Puebla", away: "Guadalajara Chivas", date: "2026-08-01" },
        { home: "Juarez", away: "UNAM Pumas", date: "2026-08-01" },
        { home: "Atl. San Luis", away: "Club Tijuana", date: "2026-08-01" },
        { home: "Queretaro", away: "Tigres UANL", date: "2026-08-02" },
        { home: "Atlas", away: "Monterrey", date: "2026-08-02" },
        { home: "Club Leon", away: "Pachuca", date: "2026-08-02" },
        { home: "Cruz Azul", away: "Atlante", date: "2026-08-02" },
        { home: "Club America", away: "Santos Laguna", date: "2026-08-03" },
        { home: "Toluca", away: "Necaxa", date: "2026-08-03" },
        
        // Matchday 5 - August 16-18
        { home: "Atlante", away: "Toluca", date: "2026-08-16" },
        { home: "Monterrey", away: "Juarez", date: "2026-08-16" },
        { home: "Atlas", away: "Tigres UANL", date: "2026-08-16" },
        { home: "UNAM Pumas", away: "Queretaro", date: "2026-08-16" },
        { home: "Club America", away: "Atl. San Luis", date: "2026-08-17" },
        { home: "Santos Laguna", away: "Guadalajara Chivas", date: "2026-08-17" },
        { home: "Club Tijuana", away: "Cruz Azul", date: "2026-08-17" },
        { home: "Necaxa", away: "Club Leon", date: "2026-08-18" },
        { home: "Pachuca", away: "Puebla", date: "2026-08-18" },
        
        // Matchday 6 - August 22-24
        { home: "Club Leon", away: "Monterrey", date: "2026-08-22" },
        { home: "Tigres UANL", away: "Atlante", date: "2026-08-22" },
        { home: "Juarez", away: "Club America", date: "2026-08-22" },
        { home: "Queretaro", away: "Toluca", date: "2026-08-22" },
        { home: "Guadalajara Chivas", away: "Club Tijuana", date: "2026-08-23" },
        { home: "Puebla", away: "Santos Laguna", date: "2026-08-23" },
        { home: "Cruz Azul", away: "Atlas", date: "2026-08-23" },
        { home: "Atl. San Luis", away: "Pachuca", date: "2026-08-24" },
        { home: "UNAM Pumas", away: "Necaxa", date: "2026-08-24" },
        
        // Matchday 7 - August 29-31
        { home: "Atlante", away: "Club Leon", date: "2026-08-29" },
        { home: "Necaxa", away: "Cruz Azul", date: "2026-08-29" },
        { home: "Club Tijuana", away: "UNAM Pumas", date: "2026-08-29" },
        { home: "Atlas", away: "Queretaro", date: "2026-08-30" },
        { home: "Pachuca", away: "Guadalajara Chivas", date: "2026-08-30" },
        { home: "Club America", away: "Puebla", date: "2026-08-30" },
        { home: "Santos Laguna", away: "Tigres UANL", date: "2026-08-30" },
        { home: "Toluca", away: "Juarez", date: "2026-08-31" },
        { home: "Monterrey", away: "Atl. San Luis", date: "2026-08-31" }
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
        // Matchday 6 - August 21-25
        { home: "Jaguares de Córdoba", away: "Boyacá Chicó FC", date: "2026-08-21" },
        { home: "Rionegro Águilas", away: "Millonarios", date: "2026-08-22" },
        { home: "Tolima", away: "Atlético Bucaramanga", date: "2026-08-22" },
        { home: "Santa Fe", away: "América de Cali", date: "2026-08-23" },
        { home: "Junior", away: "Once Caldas", date: "2026-08-23" },
        { home: "Fortaleza FC", away: "Atl. Nacional", date: "2026-08-23" },
        { home: "Deportivo Pasto", away: "Llaneros FC", date: "2026-08-23" },
        { home: "Deportivo Cali", away: "Internacional de Bogotá", date: "2026-08-24" },
        { home: "Independiente Medellín", away: "Cúcuta Deportivo", date: "2026-08-24" },
        { home: "Alianza", away: "Deportivo Pereira", date: "2026-08-25" }
    ]
},
"USA MLS": {
    id: "mls",
    logo: "mls/mlslogo.jpg",
    isBasketball: false,
    teams: [
        // Eastern Conference
        { rank: 1, team: "Nashville", MP: 19, MW: 13, MD: 4, ML: 2, GF: 39, GA: 15, logo: "mls/nashvillelogo.png" },
        { rank: 2, team: "Inter Miami", MP: 19, MW: 11, MD: 5, ML: 3, GF: 46, GA: 36, logo: "mls/intermiamilogo.png" },
        { rank: 3, team: "Chicago", MP: 18, MW: 10, MD: 2, ML: 6, GF: 34, GA: 24, logo: "mls/chicagologo.png" },
        { rank: 4, team: "New England", MP: 19, MW: 9, MD: 3, ML: 7, GF: 29, GA: 25, logo: "mls/newenglandlogo.png" },
        { rank: 5, team: "Charlotte", MP: 19, MW: 8, MD: 4, ML: 7, GF: 32, GA: 28, logo: "mls/charlottelogo.png" },
        { rank: 6, team: "Cincinnati", MP: 19, MW: 7, MD: 6, ML: 6, GF: 46, GA: 45, logo: "mls/cincinnatlogo.png" },
        { rank: 7, team: "New York City", MP: 19, MW: 7, MD: 5, ML: 7, GF: 33, GA: 27, logo: "mls/newyorklogo.png" },
        { rank: 8, team: "NY Red Bulls", MP: 19, MW: 7, MD: 4, ML: 8, GF: 30, GA: 41, logo: "mls/nyredbullslogo.png" },
        { rank: 9, team: "D.C. United", MP: 19, MW: 5, MD: 9, ML: 5, GF: 27, GA: 30, logo: "mls/dcunitedlogo.png" },
        { rank: 10, team: "Orlando City", MP: 19, MW: 6, MD: 3, ML: 10, GF: 31, GA: 48, logo: "mls/orlandologo.png" },
        { rank: 11, team: "Columbus", MP: 19, MW: 5, MD: 5, ML: 9, GF: 27, GA: 31, logo: "mls/columbuslogo.png" },
        { rank: 12, team: "Toronto", MP: 19, MW: 4, MD: 8, ML: 7, GF: 26, GA: 33, logo: "mls/torontologo.png" },
        { rank: 13, team: "Philadelphia", MP: 19, MW: 5, MD: 4, ML: 10, GF: 28, GA: 35, logo: "mls/philadelphialogo.png" },
        { rank: 14, team: "Montréal", MP: 19, MW: 4, MD: 5, ML: 10, GF: 25, GA: 36, logo: "mls/monteallogo.png" },
        { rank: 15, team: "Atlanta United", MP: 19, MW: 4, MD: 3, ML: 12, GF: 21, GA: 34, logo: "mls/atlantalogo.png" },
        
        // Western Conference
        { rank: 1, team: "Vancouver", MP: 19, MW: 11, MD: 4, ML: 4, GF: 41, GA: 20, logo: "mls/vancouverlogo.png" },
        { rank: 2, team: "LAFC", MP: 20, MW: 11, MD: 4, ML: 5, GF: 37, GA: 20, logo: "mls/lafclogo.png" },
        { rank: 3, team: "San Jose", MP: 20, MW: 11, MD: 3, ML: 6, GF: 40, GA: 27, logo: "mls/sanjoselogo.png" },
        { rank: 4, team: "Houston Dynamo", MP: 19, MW: 10, MD: 2, ML: 7, GF: 28, GA: 27, logo: "mls/houstondynamologo.png" },
        { rank: 5, team: "Dallas", MP: 20, MW: 8, MD: 6, ML: 6, GF: 35, GA: 27, logo: "mls/dallaslogo.png" },
        { rank: 6, team: "Real Salt Lake", MP: 19, MW: 9, MD: 3, ML: 7, GF: 32, GA: 28, logo: "mls/realsaltlakelogo.png" },
        { rank: 7, team: "St. Louis", MP: 19, MW: 8, MD: 5, ML: 6, GF: 26, GA: 25, logo: "mls/stlouislogo.png" },
        { rank: 8, team: "Portland", MP: 20, MW: 8, MD: 4, ML: 8, GF: 36, GA: 35, logo: "mls/portlandlogo.png" },
        { rank: 9, team: "Minnesota", MP: 19, MW: 7, MD: 6, ML: 6, GF: 22, GA: 26, logo: "mls/minnesotslogo.png" },
        { rank: 10, team: "Seattle Sounders", MP: 19, MW: 7, MD: 4, ML: 8, GF: 21, GA: 25, logo: "mls/seattlelogo.png" },
        { rank: 11, team: "Colorado", MP: 19, MW: 7, MD: 2, ML: 10, GF: 28, GA: 26, logo: "mls/coloradologo.png" },
        { rank: 12, team: "LA Galaxy", MP: 20, MW: 5, MD: 7, ML: 8, GF: 25, GA: 32, logo: "mls/lagalaxylogo.png" },
        { rank: 13, team: "San Diego", MP: 19, MW: 5, MD: 6, ML: 8, GF: 33, GA: 32, logo: "mls/sandiegologo.jpg" },
        { rank: 14, team: "Austin", MP: 19, MW: 4, MD: 6, ML: 9, GF: 23, GA: 37, logo: "mls/austinlogo.png" },
        { rank: 15, team: "Sporting KC", MP: 19, MW: 4, MD: 3, ML: 12, GF: 19, GA: 47, logo: "mls/sportingkclogo.png" }
    ],
    fixtures: [
        // August 20
        { home: "D.C. United", away: "New England", date: "2026-08-20" },
        { home: "Columbus", away: "Montréal", date: "2026-08-20" },
        { home: "Toronto", away: "Charlotte", date: "2026-08-20" },
        { home: "Orlando City", away: "Chicago", date: "2026-08-20" },
        { home: "Philadelphia", away: "Inter Miami", date: "2026-08-20" },
        { home: "Cincinnati", away: "New York City", date: "2026-08-20" },
        { home: "NY Red Bulls", away: "Nashville", date: "2026-08-20" },
        { home: "Sporting KC", away: "St. Louis", date: "2026-08-20" },
        { home: "Minnesota", away: "Atlanta United", date: "2026-08-20" },
        { home: "Colorado", away: "LAFC", date: "2026-08-20" },
        { home: "Real Salt Lake", away: "Dallas", date: "2026-08-20" },
        { home: "Seattle Sounders", away: "Austin", date: "2026-08-20" },
        { home: "LA Galaxy", away: "San Jose", date: "2026-08-20" },
        { home: "Vancouver", away: "Houston Dynamo", date: "2026-08-20" },
        { home: "Portland", away: "San Diego", date: "2026-08-20" },
        
        // August 23
        { home: "Inter Miami", away: "Toronto", date: "2026-08-23" },
        { home: "Montréal", away: "LA Galaxy", date: "2026-08-23" },
        { home: "Charlotte", away: "D.C. United", date: "2026-08-23" },
        { home: "Orlando City", away: "Real Salt Lake", date: "2026-08-23" },
        { home: "NY Red Bulls", away: "Chicago", date: "2026-08-23" },
        { home: "Cincinnati", away: "Seattle Sounders", date: "2026-08-23" },
        { home: "Austin", away: "Philadelphia", date: "2026-08-23" },
        { home: "St. Louis", away: "Houston Dynamo", date: "2026-08-23" },
        { home: "Nashville", away: "Columbus", date: "2026-08-23" },
        { home: "Vancouver", away: "Dallas", date: "2026-08-23" },
        { home: "San Jose", away: "Minnesota", date: "2026-08-23" },
        { home: "San Diego", away: "Colorado", date: "2026-08-23" },
        { home: "LAFC", away: "Portland", date: "2026-08-23" },
        { home: "New England", away: "New York City", date: "2026-08-23" },
        
        // August 24
        { home: "Atlanta United", away: "Sporting KC", date: "2026-08-24" },
        
        // August 29
        { home: "Seattle Sounders", away: "Chicago", date: "2026-08-29" },
        
        // August 30
        { home: "D.C. United", away: "LAFC", date: "2026-08-30" },
        { home: "Inter Miami", away: "Montréal", date: "2026-08-30" },
        { home: "Columbus", away: "New England", date: "2026-08-30" },
        { home: "Atlanta United", away: "Charlotte", date: "2026-08-30" },
        { home: "Toronto", away: "New York City", date: "2026-08-30" },
        { home: "NY Red Bulls", away: "Philadelphia", date: "2026-08-30" },
        { home: "Nashville", away: "Cincinnati", date: "2026-08-30" },
        { home: "Minnesota", away: "Orlando City", date: "2026-08-30" },
        { home: "Houston Dynamo", away: "San Jose", date: "2026-08-30" },
        { home: "Sporting KC", away: "Vancouver", date: "2026-08-30" },
        { home: "Colorado", away: "Real Salt Lake", date: "2026-08-30" },
        { home: "San Diego", away: "LA Galaxy", date: "2026-08-30" },
        { home: "Portland", away: "Austin", date: "2026-08-30" }
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
        // Matchday 4 - August 22
        { home: "Consadole Sapporo", away: "Omiya Ardija", date: "2026-08-22" },
        { home: "Vanraure Hachinohe", away: "Vegalta Sendai", date: "2026-08-22" },
        { home: "Blaublitz", away: "Ventforet Kofu", date: "2026-08-22" },
        { home: "Kataller Toyama", away: "Imabari", date: "2026-08-22" },
        { home: "Oita Trinita", away: "Iwaki FC", date: "2026-08-22" },
        { home: "Júbilo Iwata", away: "Tokushima Vortis", date: "2026-08-22" },
        { home: "Niigata", away: "Fujieda MYFC", date: "2026-08-22" },
        { home: "Tegevajaro Miyazaki", away: "Shonan Bellmare", date: "2026-08-22" },
        { home: "Montedio Yamagata", away: "Yokohama FC", date: "2026-08-22" },
        { home: "Sagan Tosu", away: "Tochigi City FC", date: "2026-08-22" }
    ]
},
"WNBA": {
    id: "wnba",
    logo: "wnba/wnbalogo.png",
    isBasketball: true,
    teams: [
        // Eastern Conference
        { rank: 1, team: "New York Liberty", GP: 36, GW: 22, GL: 14, points_for: 3204, points_against: 3024, logo: "wnba/liberty.png" },
        { rank: 2, team: "Atlanta Dream", GP: 33, GW: 21, GL: 12, points_for: 2904, points_against: 2805, logo: "wnba/dream.png" },
        { rank: 3, team: "Indiana Fever", GP: 34, GW: 22, GL: 12, points_for: 3094, points_against: 2924, logo: "wnba/fever.png" },
        { rank: 4, team: "Washington Mystics", GP: 34, GW: 20, GL: 14, points_for: 2798, points_against: 2788, logo: "wnba/mystics.png" },
        { rank: 5, team: "Chicago Sky", GP: 34, GW: 12, GL: 22, points_for: 2788, points_against: 3094, logo: "wnba/sky.png" },
        { rank: 6, team: "Toronto Tempo", GP: 33, GW: 10, GL: 23, points_for: 2838, points_against: 2970, logo: "wnba/tempo.png" },
        { rank: 7, team: "Connecticut Sun", GP: 33, GW: 8, GL: 25, points_for: 2508, points_against: 2904, logo: "wnba/sun.png" },
        
        // Western Conference
        { rank: 1, team: "Minnesota Lynx", GP: 36, GW: 29, GL: 7, points_for: 3240, points_against: 2916, logo: "wnba/lynx.png" },
        { rank: 2, team: "Golden State Valkyries", GP: 33, GW: 24, GL: 9, points_for: 2805, points_against: 2607, logo: "wnba/valkyries.png" },
        { rank: 3, team: "Las Vegas Aces", GP: 36, GW: 24, GL: 12, points_for: 3276, points_against: 2952, logo: "wnba/aces.png" },
        { rank: 4, team: "Dallas Wings", GP: 35, GW: 20, GL: 15, points_for: 3045, points_against: 2870, logo: "wnba/wings.png" },
        { rank: 5, team: "Portland Fire", GP: 34, GW: 14, GL: 20, points_for: 2890, points_against: 3060, logo: "wnba/fire.png" },
        { rank: 6, team: "Phoenix Mercury", GP: 35, GW: 13, GL: 22, points_for: 2800, points_against: 3080, logo: "wnba/mercury.png" },
        { rank: 7, team: "Los Angeles Sparks", GP: 34, GW: 12, GL: 22, points_for: 2992, points_against: 3128, logo: "wnba/sparks.png" },
        { rank: 8, team: "Seattle Storm", GP: 36, GW: 7, GL: 29, points_for: 2772, points_against: 3168, logo: "wnba/storm.png" }
    ],
    fixtures: [
        // August 20
        { home: "Toronto Tempo", away: "Washington Mystics", date: "2026-08-20" },
        { home: "Minnesota Lynx", away: "Golden State Valkyries", date: "2026-08-20" },
        
        // August 21
        { home: "Indiana Fever", away: "Dallas Wings", date: "2026-08-21" },
        { home: "Connecticut Sun", away: "Las Vegas Aces", date: "2026-08-21" },
        { home: "Atlanta Dream", away: "Los Angeles Sparks", date: "2026-08-21" },
        
        // August 22
        { home: "Minnesota Lynx", away: "Washington Mystics", date: "2026-08-22" },
        { home: "Golden State Valkyries", away: "Chicago Sky", date: "2026-08-22" },
        { home: "Portland Fire", away: "Toronto Tempo", date: "2026-08-22" },
        
        // August 23
        { home: "Indiana Fever", away: "New York Liberty", date: "2026-08-23" },
        { home: "Connecticut Sun", away: "Los Angeles Sparks", date: "2026-08-23" },
        { home: "Atlanta Dream", away: "Phoenix Mercury", date: "2026-08-23" },
        { home: "Seattle Storm", away: "Dallas Wings", date: "2026-08-23" },
        
        // August 24
        { home: "Indiana Fever", away: "Chicago Sky", date: "2026-08-24" },
        { home: "Washington Mystics", away: "Portland Fire", date: "2026-08-24" },
        { home: "Las Vegas Aces", away: "Toronto Tempo", date: "2026-08-24" }
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
	    { home: "Audax Italiano", away: "La Serena", home_score: 1, away_score: 1 },
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