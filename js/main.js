// ==================== MAIN APPLICATION ====================

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
}

// ==================== RECENT RESULTS WIDGET ====================

// Function to get recent matches (last 15-20 across all leagues)
function getRecentMatchesList(matchesData, limit = 15) {
    const allMatches = [];
    
    for (const [leagueName, leagueMatches] of Object.entries(matchesData)) {
        for (const match of leagueMatches) {
            // Only include matches that have scores
            if (match.home_score !== undefined && match.away_score !== undefined) {
                allMatches.push({
                    ...match,
                    league: leagueName
                });
            }
        }
    }
    
    // Sort by date (newest first) - handle various date formats
    allMatches.sort((a, b) => {
        if (a.date && b.date) {
            return new Date(b.date) - new Date(a.date);
        }
        return 0;
    });
    
    return allMatches.slice(0, limit);
}

// Function to group matches by league
function groupMatchesByLeague(matches) {
    const grouped = {};
    for (const match of matches) {
        if (!grouped[match.league]) {
            grouped[match.league] = [];
        }
        grouped[match.league].push(match);
    }
    return grouped;
}

// Function to render recent results widget
function renderRecentResults(containerId, matchesData, limit = 12) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (typeof matchesData === 'undefined') {
        container.innerHTML = '<div class="loading-small">No match data available</div>';
        return;
    }
    
    const recentMatches = getRecentMatchesList(matchesData, limit);
    
    if (recentMatches.length === 0) {
        container.innerHTML = '<div class="loading-small">No recent matches found</div>';
        return;
    }
    
    const grouped = groupMatchesByLeague(recentMatches);
    
    let html = '';
    for (const [league, matches] of Object.entries(grouped)) {
        // Shorten league name for display
        let shortLeague = league;
        if (league.includes("Primera")) shortLeague = league.substring(0, 25);
        if (league.length > 30) shortLeague = league.substring(0, 27) + "...";
        
        html += `<div class="recent-league">${escapeHtml(shortLeague)}</div>`;
        
        for (const match of matches) {
            // Determine winner for color coding
            let scoreClass = '';
            if (match.home_score > match.away_score) scoreClass = 'win-home';
            else if (match.away_score > match.home_score) scoreClass = 'win-away';
            else scoreClass = 'draw';
            
            // Shorten team names if needed
            let homeShort = match.home;
            let awayShort = match.away;
            if (homeShort.length > 18) homeShort = homeShort.substring(0, 15) + "...";
            if (awayShort.length > 18) awayShort = awayShort.substring(0, 15) + "...";
            
            html += `
                <div class="recent-result-item">
                    <div class="recent-match">
                        <span class="recent-teams" title="${escapeHtml(match.home)} vs ${escapeHtml(match.away)}">
                            ${escapeHtml(homeShort)} vs ${escapeHtml(awayShort)}
                        </span>
                        <span class="recent-score ${scoreClass}">
                            ${match.home_score}-${match.away_score}
                        </span>
                    </div>
                </div>
            `;
        }
    }
    
    container.innerHTML = html;
}

// ==================== RENDER PREDICTIONS ====================

// Render league selector buttons
function renderLeagueSelector() {
    const buttonsDiv = document.getElementById('leagueButtons');
    if (!buttonsDiv) return;
    
    const leagues = Object.keys(leaguesData);
    
    buttonsDiv.innerHTML = `
        <button class="league-btn active" data-league="all">
            <i class="fas fa-trophy"></i> All Leagues
        </button>
        ${leagues.map(league => `
            <button class="league-btn" data-league="${leaguesData[league].id}">
                <i class="fas ${leaguesData[league].isBasketball ? 'fa-basketball-ball' : 'fa-futbol'}"></i> 
                ${league.split(' ')[0]}
            </button>
        `).join('')}
    `;
    
    // Add click handlers
    document.querySelectorAll('.league-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.league-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const leagueId = btn.dataset.league;
            renderContent(leagueId);
        });
    });
}

// Render predictions content
function renderContent(leagueId) {
    const contentDiv = document.getElementById('contentArea');
    if (!contentDiv) return;
    
    let html = '';
    
    const leaguesToShow = leagueId === 'all' 
        ? Object.keys(leaguesData)
        : [Object.keys(leaguesData).find(key => leaguesData[key].id === leagueId)];
    
    let hasContent = false;
    
    for (const leagueName of leaguesToShow) {
        const league = leaguesData[leagueName];
        if (!league || !league.fixtures || league.fixtures.length === 0) continue;
        
        hasContent = true;
        const predictions = generatePredictions(leagueName, league);
        
        html += `
            <div class="league-header">
                ${league.logo ? `<img src="images/logos/leagues/${league.logo}" class="league-logo" alt="${leagueName}" onerror="this.style.display='none'">` : ''}
                <h2>${escapeHtml(leagueName)}</h2>
                <p class="text-muted">
                    <i class="fas ${league.isBasketball ? 'fa-basketball-ball' : 'fa-futbol'}"></i> 
                    ${league.isBasketball ? '?? Basketball Predictions' : '? Football Predictions'}
                </p>
            </div>
        `;
        
        if (predictions.length === 0) {
            html += `<div class="alert alert-warning text-center">No fixtures available for ${escapeHtml(leagueName)}</div>`;
            continue;
        }
        
        for (const match of predictions) {
            const cardClass = league.isBasketball ? 'match-card basketball-card' : 'match-card';
            const formattedDate = formatDate(match.date);
            
            html += `
                <div class="${cardClass}">
                    ${formattedDate ? `<div class="match-date-header"><i class="far fa-calendar-alt"></i> ${formattedDate}</div>` : ''}
                    <div class="team-row">
                        <div class="team">
                            ${match.homeLogo ? 
                                `<img src="images/logos/clubs/${match.homeLogo}" class="team-logo" alt="${match.home}" onerror="this.style.display='none'">` : 
                                `<i class="fas ${league.isBasketball ? 'fa-basketball-ball' : 'fa-shield-alt'} fa-3x" style="color:#667eea"></i>`}
                            <div class="team-name">
                                <a href="team.html?team=${encodeURIComponent(match.home)}" class="team-link">
                                    ${escapeHtml(match.home)}
                                </a>
                            </div>
                            ${league.isBasketball && match.homeWinPct ? `
                                <div class="team-stats-small">
                                    <span class="badge bg-info">${match.homeWinPct}% Win</span>
                                    <span class="badge bg-secondary">${match.homeAvgPoints} PPG</span>
                                    <span class="badge bg-dark">${match.homeRecord}</span>
                                </div>
                            ` : ''}
                            ${!league.isBasketball && match.homeAvgGoals ? `
                                <div class="team-stats-small">
                                    <span class="badge bg-info">${match.homeAvgGoals} Goals/Game</span>
                                </div>
                            ` : ''}
                            <span class="power-badge"><i class="fas fa-chart-line"></i> Power: ${match.homePower}</span>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            ${match.awayLogo ? 
                                `<img src="images/logos/clubs/${match.awayLogo}" class="team-logo" alt="${match.away}" onerror="this.style.display='none'">` : 
                                `<i class="fas ${league.isBasketball ? 'fa-basketball-ball' : 'fa-shield-alt'} fa-3x" style="color:#764ba2"></i>`}
                            <div class="team-name">
                                <a href="team.html?team=${encodeURIComponent(match.away)}" class="team-link">
                                    ${escapeHtml(match.away)}
                                </a>
                            </div>
                            ${league.isBasketball && match.awayWinPct ? `
                                <div class="team-stats-small">
                                    <span class="badge bg-info">${match.awayWinPct}% Win</span>
                                    <span class="badge bg-secondary">${match.awayAvgPoints} PPG</span>
                                    <span class="badge bg-dark">${match.awayRecord}</span>
                                </div>
                            ` : ''}
                            ${!league.isBasketball && match.awayAvgGoals ? `
                                <div class="team-stats-small">
                                    <span class="badge bg-info">${match.awayAvgGoals} Goals/Game</span>
                                </div>
                            ` : ''}
                            <span class="power-badge"><i class="fas fa-chart-line"></i> Power: ${match.awayPower}</span>
                        </div>
                    </div>
                    <div class="prediction-box">
                        <div class="prediction-item ${league.isBasketball ? 'basketball-pred' : 'football-pred'}">
                            <i class="fas ${league.isBasketball ? 'fa-chart-simple' : 'fa-chart-line'}"></i> 
                            ${match.prediction}
                        </div>
                        <div class="prediction-item">
                            <i class="fas ${league.isBasketball ? 'fa-basketball-ball' : 'fa-exchange-alt'}"></i> 
                            ${match.bothScore}
                        </div>
                        <div class="prediction-item">
                            <i class="fas ${league.isBasketball ? 'fa-chart-line' : 'fa-chart-simple'}"></i> 
                            ${match.overUnder}
                        </div>
                        <div class="prediction-item">
                            <i class="fas fa-calculator"></i> 
                            Power Diff: ${match.diff}
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    if (!hasContent) {
        html = `<div class="alert alert-info text-center">No fixtures found. Please check back later!</div>`;
    }
    
    contentDiv.innerHTML = html;
}

// ==================== INITIALIZE APP ====================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Update time
    function updateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        const timeElement = document.getElementById('time');
        if (timeElement) {
            timeElement.textContent = now.toLocaleDateString('en-US', options);
        }
    }
    updateTime();
    setInterval(updateTime, 1000);
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Initialize predictions
    if (typeof leaguesData !== 'undefined') {
        renderLeagueSelector();
        renderContent('all');
    } else {
        console.error('leaguesData not found!');
        const contentArea = document.getElementById('contentArea');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle"></i> 
                    Error: No data loaded. Please check the console.
                </div>
            `;
        }
    }
    
    // Load recent results after matchesData is available
    setTimeout(function() {
        if (typeof matchesData !== 'undefined') {
            renderRecentResults('recentResultsLeft', matchesData, 12);
            renderRecentResults('recentResultsRight', matchesData, 15);
        } else {
            console.log('Waiting for matchesData to load...');
            // Try again after another second
            setTimeout(function() {
                if (typeof matchesData !== 'undefined') {
                    renderRecentResults('recentResultsLeft', matchesData, 12);
                    renderRecentResults('recentResultsRight', matchesData, 15);
                } else {
                    document.getElementById('recentResultsLeft').innerHTML = '<div class="loading-small">Match data not available</div>';
                    document.getElementById('recentResultsRight').innerHTML = '<div class="loading-small">Match data not available</div>';
                }
            }, 1000);
        }
    }, 500);
});