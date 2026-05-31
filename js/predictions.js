// ==================== PREDICTION ENGINE ====================
// Basketball thresholds for over/under predictions

const basketballThresholds = {
    "NBA": { both: 110, ou: 225.5 },
    "EuroLeague": { both: 80, ou: 160.5 },
    "Spanish ACB": { both: 82, ou: 165.5 },
    "Turkish BSL": { both: 80, ou: 160.5 },
    "Greek A1": { both: 78, ou: 158.5 },
    "Italian LBA": { both: 80, ou: 162.5 },
    "German BBL": { both: 82, ou: 165.5 },
    "French LNB": { both: 80, ou: 162.5 }
};

// ==================== POWER CALCULATION FUNCTIONS ====================

// Football (Soccer) Power Calculation
// Formula: (Wins × 3) + Draws + ((Goals For - Goals Against) × 0.2)
function calculateFootballPower(team) {
    const md = team.MD || 0;
    const gf = team.GF || 0;
    const ga = team.GA || 0;
    const mw = team.MW || 0;
    return (mw * 3) + md + ((gf - ga) * 0.2);
}

// Basketball Power Calculation (NEW)
// Formula: Win% × 100 + ((Points For - Points Against) / GP × 0.5)
// Win% = GW / GP
function calculateBasketballPower(team) {
    const gp = team.GP || 82;
    const gw = team.GW || 0;
    const pointsFor = team.points_for || 0;
    const pointsAgainst = team.points_against || 0;
    
    // Win percentage (0-100 scale)
    const winPct = (gw / gp) * 100;
    
    // Average point differential per game
    const avgPointDiff = (pointsFor - pointsAgainst) / gp;
    
    // Power = Win% + (Avg Point Differential × 0.5)
    // Higher multiplier for blowouts, lower for close games
    return winPct + (avgPointDiff * 0.5);
}

// Helper function to find team by name
function findTeam(teams, name) {
    return teams.find(t => t.team === name) || null;
}

// ==================== FOOTBALL PREDICTION GENERATOR ====================

function generateFootballPredictions(leagueName, leagueData) {
    const { teams, fixtures } = leagueData;
    const predictions = [];
    
    for (const fixture of fixtures) {
        const [home, away] = fixture;
        const homeTeam = findTeam(teams, home);
        const awayTeam = findTeam(teams, away);
        
        if (!homeTeam || !awayTeam) continue;
        
        // Calculate powers with home advantage (+7)
        const homePower = calculateFootballPower(homeTeam) + 7;
        const awayPower = calculateFootballPower(awayTeam);
        const diff = homePower - awayPower;
        
        // Prediction based on power difference
        let prediction = "? X (Draw)";
        if (diff >= 10) prediction = "? 1 (Home Win) ??";
        else if (diff >= 5) prediction = "? 1X (Home Win or Draw)";
        else if (diff <= -10) prediction = "? 2 (Away Win) ??";
        else if (diff <= -5) prediction = "? X2 (Away Win or Draw)";
        
        // Goals per game averages
        const homeAvg = homeTeam.MP > 0 ? homeTeam.GF / homeTeam.MP : 0;
        const awayAvg = awayTeam.MP > 0 ? awayTeam.GF / awayTeam.MP : 0;
        
        // BTTS (Both Teams To Score)
        const bothScore = (homeAvg >= 1 && awayAvg >= 1) ? "? BTTS" : "? No BTTS";
        
        // Over/Under 2.5 goals
        const overUnder = (homeAvg + awayAvg >= 2.5) ? "? Over 2.5" : "?? Under 2.5";
        
        predictions.push({
            home,
            away,
            homeLogo: homeTeam.logo || null,
            awayLogo: awayTeam.logo || null,
            homePower: homePower.toFixed(1),
            awayPower: awayPower.toFixed(1),
            prediction,
            bothScore,
            overUnder,
            diff: diff.toFixed(1),
            // Additional football stats
            homeAvgGoals: homeAvg.toFixed(1),
            awayAvgGoals: awayAvg.toFixed(1)
        });
    }
    
    return predictions;
}

// ==================== BASKETBALL PREDICTION GENERATOR (UPDATED) ====================

function generateBasketballPredictions(leagueName, leagueData) {
    const { teams, fixtures } = leagueData;
    const predictions = [];
    
    for (const fixture of fixtures) {
        const [home, away] = fixture;
        const homeTeam = findTeam(teams, home);
        const awayTeam = findTeam(teams, away);
        
        if (!homeTeam || !awayTeam) continue;
        
        // Calculate powers with home advantage (+8 for basketball)
        const homePower = calculateBasketballPower(homeTeam) + 8;
        const awayPower = calculateBasketballPower(awayTeam);
        const diff = homePower - awayPower;
        
        // Basketball prediction (no draws)
        let prediction = "?? Close Game";
        if (diff >= 15) prediction = "?? Home Win (High Confidence)";
        else if (diff >= 8) prediction = "?? Home Win";
        else if (diff <= -15) prediction = "?? Away Win (High Confidence)";
        else if (diff <= -8) prediction = "?? Away Win";
        
        // Points per game averages
        const homeAvg = homeTeam.GP > 0 ? homeTeam.points_for / homeTeam.GP : 0;
        const awayAvg = awayTeam.GP > 0 ? awayTeam.points_for / awayTeam.GP : 0;
        const totalAvg = homeAvg + awayAvg;
        
        // Get thresholds for this league
        const threshold = basketballThresholds[leagueName]?.both || 80;
        const ouLine = basketballThresholds[leagueName]?.ou || 160.5;
        
        // Both teams scoring threshold
        const bothScore = (homeAvg >= threshold && awayAvg >= threshold) ? `? Both ${threshold}+ PPG` : `?? One under ${threshold} PPG`;
        
        // Over/Under
        const overUnder = totalAvg >= ouLine ? `?? Over ${ouLine}` : `?? Under ${ouLine}`;
        
        // Win percentages
        const homeWinPct = ((homeTeam.GW / homeTeam.GP) * 100).toFixed(1);
        const awayWinPct = ((awayTeam.GW / awayTeam.GP) * 100).toFixed(1);
        
        predictions.push({
            home,
            away,
            homeLogo: homeTeam.logo || null,
            awayLogo: awayTeam.logo || null,
            homePower: homePower.toFixed(1),
            awayPower: awayPower.toFixed(1),
            prediction,
            bothScore,
            overUnder,
            diff: diff.toFixed(1),
            // Basketball specific stats
            homeAvgPoints: homeAvg.toFixed(1),
            awayAvgPoints: awayAvg.toFixed(1),
            homeWinPct: homeWinPct,
            awayWinPct: awayWinPct,
            homeRecord: `${homeTeam.GW}-${homeTeam.GL}`,
            awayRecord: `${awayTeam.GW}-${awayTeam.GL}`
        });
    }
    
    return predictions;
}

// ==================== MAIN PREDICTION GENERATOR ====================

function generatePredictions(leagueName, leagueData) {
    const { isBasketball } = leagueData;
    
    if (isBasketball) {
        return generateBasketballPredictions(leagueName, leagueData);
    } else {
        return generateFootballPredictions(leagueName, leagueData);
    }
}

// ==================== EXPORT FOR USE (if needed) ====================
// For browser environment, functions are globally available
// For Node.js environment, uncomment:
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = { 
//         generatePredictions, 
//         calculateFootballPower, 
//         calculateBasketballPower,
//         generateFootballPredictions,
//         generateBasketballPredictions
//     };
// }