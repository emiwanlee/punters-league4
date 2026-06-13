// ==================== LEAGUE TABLES MODULE ====================
// Handles rendering of league tables with all features

// Render a complete league table
function renderLeagueTable(leagueData, containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const {
        showForm = true,
        showLogo = true,
        highlightPromotion = true,
        highlightRelegation = true,
        maxRows = 0
    } = options;
    
    if (!leagueData || !leagueData.teams) {
        container.innerHTML = '<div class="alert alert-warning">No data available</div>';
        return;
    }
    
    const teams = [...leagueData.teams].sort((a, b) => (a.rank || 0) - (b.rank || 0));
    const displayTeams = maxRows > 0 ? teams.slice(0, maxRows) : teams;
    
    let html = `
        <div class="league-table-wrapper">
            <div class="table-responsive">
                <table class="league-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>MP</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                            ${showForm ? '<th>Form</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    for (const team of displayTeams) {
        const wins = team.MW || 0;
        const draws = team.MD || 0;
        const losses = team.ML || (team.MP - wins - draws);
        const gd = team.GF - team.GA;
        const points = (wins * 3) + draws;
        
        // Determine row class for highlighting
        let rowClass = '';
        if (highlightPromotion && team.rank <= 4) rowClass = 'promotion-zone';
        if (highlightRelegation && team.rank >= 15) rowClass = 'relegation-zone';
        if (team.rank === 1) rowClass += ' champion-row';
        
        html += `
            <tr class="${rowClass}">
                <td class="rank-cell">${team.rank}</td>
                <td class="team-cell">
                    ${showLogo && team.logo ? `<img src="images/logos/clubs/${team.logo}" class="table-team-logo" onerror="this.style.display='none'">` : ''}
                    <a href="team.html?team=${encodeURIComponent(team.team)}">${escapeHtmlStatic(team.team)}</a>
                </td>
                <td>${team.MP}</td>
                <td class="wins-cell">${wins}</td>
                <td class="draws-cell">${draws}</td>
                <td class="losses-cell">${losses}</td>
                <td>${team.GF}</td>
                <td>${team.GA}</td>
                <td class="${gd >= 0 ? 'gd-positive' : 'gd-negative'}">${gd >= 0 ? '+' : ''}${gd}</td>
                <td class="points-cell"><strong>${points}</strong></td>
                ${showForm ? `<td class="form-cell">${generateFormIconsStatic(team.team)}</td>` : ''}
            </tr>
        `;
    }
    
    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Generate form icons (requires matchesData)
function generateFormIconsStatic(teamName) {
    if (typeof matchesData === 'undefined') return '<span>-</span>';
    
    // Try to find matches for this team across all leagues
    let matches = [];
    for (const [leagueName, leagueMatches] of Object.entries(matchesData)) {
        for (const match of leagueMatches) {
            if (match.home === teamName || match.away === teamName) {
                matches.push(match);
            }
        }
    }
    
    // Get last 5 matches
    matches.sort((a, b) => {
        if (a.date && b.date) return new Date(b.date) - new Date(a.date);
        return 0;
    });
    
    const lastMatches = matches.slice(0, 5);
    let form = '';
    
    for (const match of lastMatches) {
        const isHome = match.home === teamName;
        let result = '';
        if (isHome) {
            result = match.home_score > match.away_score ? 'W' : (match.home_score === match.away_score ? 'D' : 'L');
        } else {
            result = match.away_score > match.home_score ? 'W' : (match.away_score === match.home_score ? 'D' : 'L');
        }
        form += `<span class="form-icon form-${result.toLowerCase()}">${result}</span>`;
    }
    
    return form || '<span>-</span>';
}

// Simple escape function for static context
function escapeHtmlStatic(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}