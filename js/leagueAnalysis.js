// ==================== LEAGUE ANALYSIS MODULE ====================

// Calculate league statistics
function calculateLeagueStats(leagueData) {
    if (!leagueData || !leagueData.teams) return null;
    
    const teams = leagueData.teams;
    const totalGoals = teams.reduce((sum, t) => sum + t.GF, 0);
    const totalMatches = teams.reduce((sum, t) => sum + t.MP, 0) / 2;
    const avgGoalsPerGame = totalGoals / totalMatches;
    const homeAdvantage = calculateHomeAdvantage(leagueData);
    
    return {
        totalTeams: teams.length,
        totalMatches: Math.round(totalMatches),
        totalGoals: totalGoals,
        avgGoalsPerGame: avgGoalsPerGame.toFixed(2),
        homeAdvantage: homeAdvantage,
        topScorer: getTopScoringTeam(teams),
        bestDefense: getBestDefenseTeam(teams),
        mostImproved: getMostImprovedTeam(leagueData)
    };
}

// Calculate home advantage (requires match results)
function calculateHomeAdvantage(leagueData) {
    if (typeof matchesData === 'undefined') return 'N/A';
    
    let homeWins = 0;
    let totalMatches = 0;
    
    for (const [leagueName, leagueMatches] of Object.entries(matchesData)) {
        for (const match of leagueMatches) {
            if (match.home_score !== undefined && match.away_score !== undefined) {
                totalMatches++;
                if (match.home_score > match.away_score) homeWins++;
            }
        }
    }
    
    if (totalMatches === 0) return 'N/A';
    return ((homeWins / totalMatches) * 100).toFixed(1) + '%';
}

// Get top scoring team
function getTopScoringTeam(teams) {
    return teams.reduce((best, t) => t.GF > (best?.GF || 0) ? t : best, null);
}

// Get best defense team
function getBestDefenseTeam(teams) {
    return teams.reduce((best, t) => t.GA < (best?.GA || 999) ? t : best, null);
}

// Get most improved team (if previous season data available)
function getMostImprovedTeam(leagueData) {
    // This would compare with previous season if available
    // For now, return top riser based on rank change
    return null;
}

// Render league insights card
function renderLeagueInsights(leagueData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const stats = calculateLeagueStats(leagueData);
    if (!stats) {
        container.innerHTML = '<div class="alert alert-warning">Insufficient data for analysis</div>';
        return;
    }
    
    let html = `
        <div class="league-insights">
            <h4><i class="fas fa-chart-line"></i> League Overview</h4>
            <div class="insights-grid">
                <div class="insight-card">
                    <div class="insight-number">${stats.totalTeams}</div>
                    <div class="insight-label">Teams</div>
                </div>
                <div class="insight-card">
                    <div class="insight-number">${stats.totalMatches}</div>
                    <div class="insight-label">Matches</div>
                </div>
                <div class="insight-card">
                    <div class="insight-number">${stats.totalGoals}</div>
                    <div class="insight-label">Total Goals</div>
                </div>
                <div class="insight-card">
                    <div class="insight-number">${stats.avgGoalsPerGame}</div>
                    <div class="insight-label">Goals/Match</div>
                </div>
            </div>
            
            <h4 class="mt-4"><i class="fas fa-trophy"></i> Season Leaders</h4>
            <div class="leaders-grid">
                <div class="leader-card">
                    <i class="fas fa-futbol leader-icon"></i>
                    <div class="leader-title">Best Attack</div>
                    <div class="leader-team">${escapeHtmlStatic(stats.topScorer?.team || 'N/A')}</div>
                    <div class="leader-stat">${stats.topScorer?.GF || 0} goals</div>
                </div>
                <div class="leader-card">
                    <i class="fas fa-shield-alt leader-icon"></i>
                    <div class="leader-title">Best Defense</div>
                    <div class="leader-team">${escapeHtmlStatic(stats.bestDefense?.team || 'N/A')}</div>
                    <div class="leader-stat">${stats.bestDefense?.GA || 0} conceded</div>
                </div>
                <div class="leader-card">
                    <i class="fas fa-chart-line leader-icon"></i>
                    <div class="leader-title">Home Advantage</div>
                    <div class="leader-team">Home Wins</div>
                    <div class="leader-stat">${stats.homeAdvantage}</div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Render championship race (top 4 battle)
function renderChampionshipRace(leagueData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const teams = [...leagueData.teams].sort((a, b) => (a.rank || 0) - (b.rank || 0));
    const top4 = teams.slice(0, 4);
    
    if (top4.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    const firstPlace = top4[0];
    const secondPlace = top4[1];
    const gap = ((firstPlace.MW * 3 + firstPlace.MD) - (secondPlace.MW * 3 + secondPlace.MD));
    
    let html = `
        <div class="championship-race">
            <h4><i class="fas fa-flag-checkered"></i> Championship Race</h4>
            <div class="race-progress">
                <div class="race-leader">
                    <span class="leader-name">${escapeHtmlStatic(firstPlace.team)}</span>
                    <span class="leader-points">${(firstPlace.MW * 3 + firstPlace.MD)} pts</span>
                </div>
                <div class="race-gap">${gap} point${gap !== 1 ? 's' : ''} ahead</div>
                <div class="race-chasers">
                    ${top4.slice(1).map(team => `
                        <div class="chaser">
                            <span class="chaser-rank">#${team.rank}</span>
                            <span class="chaser-name">${escapeHtmlStatic(team.team)}</span>
                            <span class="chaser-points">${(team.MW * 3 + team.MD)} pts</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Render form table (teams sorted by recent form)
function renderFormTable(leagueData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Calculate form for each team
    const teamsWithForm = leagueData.teams.map(team => {
        const form = getTeamForm(team.team);
        return { ...team, formString: form };
    });
    
    // Sort by form (W=3, D=1, L=0)
    teamsWithForm.sort((a, b) => {
        const aScore = (a.formString.match(/W/g) || []).length * 3 + (a.formString.match(/D/g) || []).length;
        const bScore = (b.formString.match(/W/g) || []).length * 3 + (b.formString.match(/D/g) || []).length;
        return bScore - aScore;
    });
    
    let html = `
        <div class="form-table">
            <h4><i class="fas fa-chart-simple"></i> Recent Form Rankings</h4>
            <div class="table-responsive">
                <table class="form-ranking-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>Form</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    teamsWithForm.slice(0, 10).forEach((team, idx) => {
        const points = (team.MW * 3 + team.MD);
        html += `
            <tr>
                <td class="rank-cell">${idx + 1}</td>
                <td class="team-cell"><a href="team.html?team=${encodeURIComponent(team.team)}">${escapeHtmlStatic(team.team)}</a></td>
                <td class="form-cell">${team.formString || '<span>-</span>'}</td>
                <td class="points-cell">${points}</td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Helper to get team form
function getTeamForm(teamName) {
    if (typeof matchesData === 'undefined') return '';
    
    let matches = [];
    for (const [leagueName, leagueMatches] of Object.entries(matchesData)) {
        for (const match of leagueMatches) {
            if (match.home === teamName || match.away === teamName) {
                matches.push(match);
            }
        }
    }
    
    matches.sort((a, b) => {
        if (a.date && b.date) return new Date(b.date) - new Date(a.date);
        return 0;
    });
    
    const lastMatches = matches.slice(0, 5);
    let form = '';
    
    for (const match of lastMatches) {
        const isHome = match.home === teamName;
        if (isHome) {
            form += match.home_score > match.away_score ? 'W' : (match.home_score === match.away_score ? 'D' : 'L');
        } else {
            form += match.away_score > match.home_score ? 'W' : (match.away_score === match.home_score ? 'D' : 'L');
        }
    }
    
    return form;
}