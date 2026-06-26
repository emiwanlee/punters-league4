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

// ==================== SIDEBAR RESULTS (MANUALLY CONTROLLED) ====================

// You control exactly what shows here - independent from matchesData
// You control exactly what shows here - independent from matchesData
const sidebarResults = {
   "Brazilian U-20 League - Recent": [
    { home: "Cruzeiro U20", away: "AmÈrica MG U20", home_score: 2, away_score: 2, league: "Brazilian U-20 League" },
    { home: "GrÍmio U20", away: "Bahia U20", home_score: 4, away_score: 0, league: "Brazilian U-20 League" },
    { home: "S„o Paulo U20", away: "Fortaleza U20", home_score: 1, away_score: 0, league: "Brazilian U-20 League" },
    { home: "VitÛria U20", away: "Santos U20", home_score: 1, away_score: 2, league: "Brazilian U-20 League" },
    { home: "Cuiab· U20", away: "Juventude U20", home_score: 2, away_score: 0, league: "Brazilian U-20 League" },
    { home: "Corinthians U20", away: "Flamengo U20", home_score: 2, away_score: 2, league: "Brazilian U-20 League" },
    { home: "Fluminense U20", away: "Palmeiras U20", home_score: 0, away_score: 3, league: "Brazilian U-20 League" },
    { home: "RB Bragantino U20", away: "Botafogo U20", home_score: 2, away_score: 5, league: "Brazilian U-20 League" },
    { home: "Vasco U20", away: "Criciuma U20", home_score: 1, away_score: 2, league: "Brazilian U-20 League" }
],
    "WNBA - Recent Results": [
        { home: "New York Liberty", away: "Las Vegas Aces", home_score: 87, away_score: 76, league: "WNBA" }
    ]
};

// Function to render sidebar results from your custom list
// Function to render sidebar results from your custom list
function renderSidebarResults(containerId, resultsData, limit = 10) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    let count = 0;
    
    for (const [category, matches] of Object.entries(resultsData)) {
        if (count >= limit) break;
        
        html += `<div class="sidebar-category">${escapeHtml(category)}</div>`;
        
        for (const match of matches) {
            if (count >= limit) break;
            
            let scoreClass = '';
            if (match.home_score > match.away_score) scoreClass = 'win-home';
            else if (match.away_score > match.home_score) scoreClass = 'win-away';
            else scoreClass = 'draw';
            
            // Add league name display
            const leagueDisplay = match.league ? `<div class="sidebar-league">${escapeHtml(match.league)}</div>` : '';
            
            html += `
                <div class="sidebar-match">
                    <div class="sidebar-teams">
                        <span class="sidebar-home">${escapeHtml(match.home)}</span>
                        <span class="sidebar-vs">vs</span>
                        <span class="sidebar-away">${escapeHtml(match.away)}</span>
                    </div>
                    <div class="sidebar-score ${scoreClass}">
                        ${match.home_score} - ${match.away_score}
                    </div>
                    ${leagueDisplay}
                </div>
            `;
            count++;
        }
    }
    
    if (html === '') {
        html = '<div class="loading-small">No results to display</div>';
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
                    ${league.isBasketball ? 'üèÄ Basketball Predictions' : '‚öΩ Football Predictions'}
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
    
    // Load sidebar results from your manual list (NOT from matchesData)
    setTimeout(function() {
        renderSidebarResults('recentResultsLeft', sidebarResults, 12);
        renderSidebarResults('recentResultsRight', sidebarResults, 15);
    }, 500);
});