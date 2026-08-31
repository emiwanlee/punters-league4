// ==================== PREDICTION ENGINE - FIXED ====================

// Basketball thresholds for over/under predictions
const basketballThresholds = {
    "WNBA": { both: 80, ou: 165.5 },
    "NBA": { both: 110, ou: 225.5 },
    "EuroLeague": { both: 80, ou: 160.5 },
    "Spanish ACB": { both: 82, ou: 165.5 },
    "Turkish BSL": { both: 80, ou: 160.5 },
    "Greek A1": { both: 78, ou: 158.5 },
    "Italian LBA": { both: 80, ou: 162.5 },
    "German BBL": { both: 82, ou: 165.5 },
    "French LNB": { both: 80, ou: 162.5 }
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Find a team in the teams array by name (case-insensitive)
 */
function findTeam(teams, name) {
    if (!teams || !name) return null;
    
    // Try exact match first
    let found = teams.find(t => t.team === name);
    if (found) return found;
    
    // Try case-insensitive match
    found = teams.find(t => t.team.toLowerCase() === name.toLowerCase());
    if (found) return found;
    
    // Try partial match (for names like "Man City" vs "Manchester City")
    const nameParts = name.toLowerCase().split(' ');
    for (const team of teams) {
        const teamParts = team.team.toLowerCase().split(' ');
        // Check if any part matches
        for (const part of nameParts) {
            if (part.length > 2 && teamParts.some(tp => tp.includes(part) || part.includes(tp))) {
                return team;
            }
        }
    }
    
    return null;
}

/**
 * Get recent form for a team from matchesData
 */
function getTeamRecentForm(teamName, leagueName) {
    if (typeof matchesData === 'undefined') {
        return { wins: 0, draws: 0, losses: 0, played: 0, form: '' };
    }
    
    const results = matchesData[leagueName] || [];
    
    // Find matches involving this team
    const teamMatches = results.filter(m => 
        m.home === teamName || m.away === teamName
    );
    
    // Sort by date (most recent first)
    teamMatches.sort((a, b) => {
        if (a.date && b.date) {
            return new Date(b.date) - new Date(a.date);
        }
        return 0;
    });
    
    // Take last 5 matches
    const last5 = teamMatches.slice(0, 5);
    
    let wins = 0, draws = 0, losses = 0;
    let formString = '';
    
    for (const match of last5) {
        const isHome = match.home === teamName;
        const scored = isHome ? match.home_score : match.away_score;
        const conceded = isHome ? match.away_score : match.home_score;
        
        if (scored > conceded) {
            wins++;
            formString += 'W';
        } else if (scored === conceded) {
            draws++;
            formString += 'D';
        } else {
            losses++;
            formString += 'L';
        }
    }
    
    return {
        wins,
        draws,
        losses,
        played: last5.length,
        form: formString
    };
}

// ==================== POWER CALCULATION FUNCTIONS ====================

/**
 * Football (Soccer) Power Calculation
 * Formula: (Wins × 3) + Draws + ((Goals For - Goals Against) × 0.2)
 */
function calculateFootballPower(team, leagueName) {
    if (!team) return 50;
    
    const md = team.MD || 0;
    const gf = team.GF || 0;
    const ga = team.GA || 0;
    const mw = team.MW || 0;
    
    let power = (mw * 3) + md + ((gf - ga) * 0.2);
    
    // Normalize to 0-100 scale
    power = Math.max(0, Math.min(100, power));
    
    // Adjust for recent form
    if (typeof matchesData !== 'undefined') {
        const form = getTeamRecentForm(team.team, leagueName);
        if (form.played >= 3) {
            const formBonus = (form.wins - form.losses) * 2;
            power = Math.max(0, Math.min(100, power + formBonus));
        }
    }
    
    return Math.round(power);
}

/**
 * Basketball Power Calculation
 */
function calculateBasketballPower(team, leagueName) {
    if (!team) return 50;
    
    const gp = team.GP || 82;
    const gw = team.GW || 0;
    const pointsFor = team.points_for || 0;
    const pointsAgainst = team.points_against || 0;
    
    const winPct = (gw / gp) * 100;
    const avgPointDiff = gp > 0 ? (pointsFor - pointsAgainst) / gp : 0;
    
    let power = winPct + (avgPointDiff * 0.5);
    
    // Normalize
    power = Math.max(0, Math.min(100, power));
    
    // Adjust for recent form (if available)
    if (typeof matchesData !== 'undefined') {
        const form = getTeamRecentForm(team.team, leagueName);
        if (form.played >= 3) {
            const formBonus = (form.wins - form.losses) * 3;
            power = Math.max(0, Math.min(100, power + formBonus));
        }
    }
    
    return Math.round(power);
}

// ==================== FOOTBALL PREDICTION GENERATOR ====================

function generateFootballPredictions(leagueName, leagueData) {
    const { teams, fixtures } = leagueData;
    const predictions = [];
    
    if (!fixtures || fixtures.length === 0) {
        return predictions;
    }
    
    for (const fixture of fixtures) {
        // Handle different fixture formats
        let home, away, fixtureDate;
        
        if (Array.isArray(fixture)) {
            [home, away] = fixture;
            fixtureDate = null;
        } else {
            home = fixture.home || fixture.team1;
            away = fixture.away || fixture.team2;
            fixtureDate = fixture.date || null;
        }
        
        // Skip if missing data
        if (!home || !away) continue;
        
        const homeTeam = findTeam(teams, home);
        const awayTeam = findTeam(teams, away);
        
        // Calculate powers with home advantage (+7)
        const homePower = homeTeam ? calculateFootballPower(homeTeam, leagueName) + 7 : 50;
        const awayPower = awayTeam ? calculateFootballPower(awayTeam, leagueName) : 50;
        const diff = homePower - awayPower;
        
        // Prediction based on power difference
        let prediction = "?? Draw";
        if (diff >= 12) prediction = "?? Home Win (High)";
        else if (diff >= 7) prediction = "?? Home Win";
        else if (diff >= 3) prediction = "?? Home Win or Draw";
        else if (diff <= -12) prediction = "?? Away Win (High)";
        else if (diff <= -7) prediction = "?? Away Win";
        else if (diff <= -3) prediction = "?? Away Win or Draw";
        
        // Goals per game averages
        const homeAvg = homeTeam && homeTeam.MP > 0 ? homeTeam.GF / homeTeam.MP : 0;
        const awayAvg = awayTeam && awayTeam.MP > 0 ? awayTeam.GF / awayTeam.MP : 0;
        const homeConcede = homeTeam && homeTeam.MP > 0 ? homeTeam.GA / homeTeam.MP : 0;
        const awayConcede = awayTeam && awayTeam.MP > 0 ? awayTeam.GA / awayTeam.MP : 0;
        
        // BTTS (Both Teams To Score)
        const bttsProb = (homeAvg + awayAvg + homeConcede + awayConcede) / 4;
        const bothScore = bttsProb >= 1.2 ? "? BTTS Yes" : "? BTTS No";
        
        // Over/Under 2.5 goals
        const totalAvg = homeAvg + awayAvg;
        const overUnder = totalAvg >= 2.5 ? "? Over 2.5" : "? Under 2.5";
        
        predictions.push({
            home: home,
            away: away,
            date: fixtureDate,
            homeLogo: homeTeam ? homeTeam.logo || null : null,
            awayLogo: awayTeam ? awayTeam.logo || null : null,
            homePower: homePower,
            awayPower: awayPower,
            prediction: prediction,
            bothScore: bothScore,
            overUnder: overUnder,
            diff: diff,
            homeAvgGoals: homeAvg.toFixed(1),
            awayAvgGoals: awayAvg.toFixed(1),
            league: leagueName
        });
    }
    
    return predictions;
}

// ==================== BASKETBALL PREDICTION GENERATOR ====================

function generateBasketballPredictions(leagueName, leagueData) {
    const { teams, fixtures } = leagueData;
    const predictions = [];
    
    if (!fixtures || fixtures.length === 0) {
        return predictions;
    }
    
    for (const fixture of fixtures) {
        let home, away, fixtureDate;
        
        if (Array.isArray(fixture)) {
            [home, away] = fixture;
            fixtureDate = null;
        } else {
            home = fixture.home || fixture.team1;
            away = fixture.away || fixture.team2;
            fixtureDate = fixture.date || null;
        }
        
        if (!home || !away) continue;
        
        const homeTeam = findTeam(teams, home);
        const awayTeam = findTeam(teams, away);
        
        // Calculate powers with home advantage (+8)
        const homePower = homeTeam ? calculateBasketballPower(homeTeam, leagueName) + 8 : 50;
        const awayPower = awayTeam ? calculateBasketballPower(awayTeam, leagueName) : 50;
        const diff = homePower - awayPower;
        
        // Basketball prediction (no draws)
        let prediction = "?? Close Game";
        if (diff >= 15) prediction = "?? Home Win (High)";
        else if (diff >= 8) prediction = "?? Home Win";
        else if (diff <= -15) prediction = "?? Away Win (High)";
        else if (diff <= -8) prediction = "?? Away Win";
        
        // Points per game averages
        const homeAvg = homeTeam && homeTeam.GP > 0 ? homeTeam.points_for / homeTeam.GP : 0;
        const awayAvg = awayTeam && awayTeam.GP > 0 ? awayTeam.points_for / awayTeam.GP : 0;
        const totalAvg = homeAvg + awayAvg;
        
        // Get thresholds for this league
        const threshold = basketballThresholds[leagueName]?.both || 80;
        const ouLine = basketballThresholds[leagueName]?.ou || 160.5;
        
        const bothScore = (homeAvg >= threshold && awayAvg >= threshold) ? 
            `? Both ${threshold}+ PPG` : 
            `? One under ${threshold} PPG`;
        
        const overUnder = totalAvg >= ouLine ? 
            `?? Over ${ouLine}` : 
            `?? Under ${ouLine}`;
        
        // Win percentages
        const homeWinPct = homeTeam && homeTeam.GP > 0 ? Math.round((homeTeam.GW / homeTeam.GP) * 100) : 0;
        const awayWinPct = awayTeam && awayTeam.GP > 0 ? Math.round((awayTeam.GW / awayTeam.GP) * 100) : 0;
        
        predictions.push({
            home: home,
            away: away,
            date: fixtureDate,
            homeLogo: homeTeam ? homeTeam.logo || null : null,
            awayLogo: awayTeam ? awayTeam.logo || null : null,
            homePower: homePower,
            awayPower: awayPower,
            prediction: prediction,
            bothScore: bothScore,
            overUnder: overUnder,
            diff: diff,
            homeAvgPoints: homeAvg.toFixed(1),
            awayAvgPoints: awayAvg.toFixed(1),
            homeWinPct: homeWinPct,
            awayWinPct: awayWinPct,
            homeRecord: homeTeam ? `${homeTeam.GW}-${homeTeam.GL}` : '0-0',
            awayRecord: awayTeam ? `${awayTeam.GW}-${awayTeam.GL}` : '0-0',
            league: leagueName
        });
    }
    
    return predictions;
}

// ==================== MAIN PREDICTION GENERATOR ====================

/**
 * Main prediction generator - entry point for predictions
 * @param {string} leagueName - Name of the league (key in leaguesData)
 * @param {object} leagueData - The league data object
 * @returns {array} Array of prediction objects
 */
function generatePredictions(leagueName, leagueData) {
    // Validate inputs
    if (!leagueData) {
        console.warn('generatePredictions: No league data provided for', leagueName);
        return [];
    }
    
    if (!leagueData.fixtures || leagueData.fixtures.length === 0) {
        console.warn('generatePredictions: No fixtures found for', leagueName);
        return [];
    }
    
    // Check if basketball or football
    const isBasketball = leagueData.isBasketball || false;
    
    try {
        if (isBasketball) {
            return generateBasketballPredictions(leagueName, leagueData);
        } else {
            return generateFootballPredictions(leagueName, leagueData);
        }
    } catch (error) {
        console.error('Error generating predictions for', leagueName, error);
        return [];
    }
}

// ==================== EXPORT ====================

console.log('? Prediction engine loaded successfully');
console.log('?? Basketball leagues supported:', Object.keys(basketballThresholds).join(', '));