// ==================== PREDICTION ENGINE ====================
// Note: basketballThresholds is ONLY defined here, not in data.js

const basketballThresholds = {
    "NBA": { both: 100, ou: 215.5 },
    "EuroLeague": { both: 75, ou: 155.5 },
    "Spanish ACB": { both: 75, ou: 160.5 },
    "Turkish BSL": { both: 75, ou: 155.5 },
    "Greek A1": { both: 75, ou: 155.5 },
    "Italian LBA": { both: 75, ou: 155.5 },
    "German BBL": { both: 75, ou: 155.5 },
    "French LNB": { both: 75, ou: 155.5 }
};

// Power calculation functions
function calculateFootballPower(team) {
    const md = team.MD || 0;
    const gf = team.GF || 0;
    const ga = team.GA || 0;
    const mw = team.MW || 0;
    return (mw * 3) + md + ((gf - ga) * 0.2);
}

function calculateBasketballPower(team) {
    const gf = team.GF || 0;
    const ga = team.GA || 0;
    const mw = team.MW || 0;
    return (mw * 2) + ((gf - ga) * 0.1);
}

function findTeam(teams, name) {
    return teams.find(t => t.team === name) || null;
}

// Main prediction generator
function generatePredictions(leagueName, leagueData) {
    const { teams, fixtures, isBasketball } = leagueData;
    const predictions = [];
    
    if (!fixtures || fixtures.length === 0) {
        return predictions;
    }
    
    for (const fixture of fixtures) {
        const [home, away] = fixture;
        const homeTeam = findTeam(teams, home);
        const awayTeam = findTeam(teams, away);
        
        if (!homeTeam || !awayTeam) continue;
        
        let prediction, bothScore, overUnder, homePower, awayPower, diff;
        
        if (isBasketball) {
            // Basketball calculations
            homePower = calculateBasketballPower(homeTeam) + 10;
            awayPower = calculateBasketballPower(awayTeam);
            diff = homePower - awayPower;
            
            // Basketball predictions (no draws)
            if (diff >= 15) prediction = "🏀 Home Win (High)";
            else if (diff >= 8) prediction = "🏀 Home Win";
            else if (diff <= -15) prediction = "🏀 Away Win (High)";
            else if (diff <= -8) prediction = "🏀 Away Win";
            else prediction = "🏀 Close Game";
            
            const homeAvg = homeTeam.MP > 0 ? homeTeam.GF / homeTeam.MP : 0;
            const awayAvg = awayTeam.MP > 0 ? awayTeam.GF / awayTeam.MP : 0;
            const totalAvg = homeAvg + awayAvg;
            
            const threshold = basketballThresholds[leagueName]?.both || 75;
            const ouLine = basketballThresholds[leagueName]?.ou || 155.5;
            
            bothScore = (homeAvg >= threshold && awayAvg >= threshold) ? `Both ${threshold}+` : `One under ${threshold}`;
            overUnder = totalAvg >= ouLine ? `Over ${ouLine}` : `Under ${ouLine}`;
        } else {
            // Football calculations
            homePower = calculateFootballPower(homeTeam) + 7;
            awayPower = calculateFootballPower(awayTeam);
            diff = homePower - awayPower;
            
            // Football predictions (with draws)
            if (diff >= 10) prediction = "⚽ 1 (Home Win) 🔥";
            else if (diff >= 5) prediction = "⚽ 1X (Home Win or Draw)";
            else if (diff <= -10) prediction = "⚽ 2 (Away Win) 🔥";
            else if (diff <= -5) prediction = "⚽ X2 (Away Win or Draw)";
            else prediction = "⚽ X (Draw)";
            
            const homeAvg = homeTeam.MP > 0 ? homeTeam.GF / homeTeam.MP : 0;
            const awayAvg = awayTeam.MP > 0 ? awayTeam.GF / awayTeam.MP : 0;
            
            bothScore = (homeAvg >= 1 && awayAvg >= 1) ? "✅ BTTS" : "❌ No BTTS";
            overUnder = (homeAvg + awayAvg >= 2.5) ? "⚽ Over 2.5" : "🥅 Under 2.5";
        }
        
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
            diff: diff.toFixed(1)
        });
    }
    
    return predictions;
}