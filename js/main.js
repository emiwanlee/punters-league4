// ==================== MAIN APPLICATION ====================
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
                    <i class="fas ${leaguesData[league].isBasketball ? 'fa-basketball' : 'fa-futbol'}"></i> 
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
                        <i class="fas ${league.isBasketball ? 'fa-basketball' : 'fa-futbol'}"></i> 
                        ${league.isBasketball ? '🏀 Basketball Predictions' : '⚽ Football Predictions'}
                    </p>
                </div>
            `;
            
            if (predictions.length === 0) {
                html += `<div class="alert alert-warning text-center">No fixtures available for ${escapeHtml(leagueName)}</div>`;
                continue;
            }
            
            for (const match of predictions) {
                html += `
                    <div class="match-card">
                        <div class="team-row">
                            <div class="team">
                                ${match.homeLogo ? 
                                    `<img src="images/logos/clubs/${match.homeLogo}" class="team-logo" alt="${match.home}" onerror="this.style.display='none'">` : 
                                    '<i class="fas fa-shield-alt fa-3x" style="color:#667eea"></i>'}
                                <div class="team-name">
                                    <a href="team.html?team=${encodeURIComponent(match.home)}" class="team-link">
                                        ${escapeHtml(match.home)}
                                    </a>
                                </div>
                                <span class="power-badge"><i class="fas fa-chart-line"></i> Power: ${match.homePower}</span>
                            </div>
                            <div class="vs">VS</div>
                            <div class="team">
                                ${match.awayLogo ? 
                                    `<img src="images/logos/clubs/${match.awayLogo}" class="team-logo" alt="${match.away}" onerror="this.style.display='none'">` : 
                                    '<i class="fas fa-shield-alt fa-3x" style="color:#764ba2"></i>'}
                                <div class="team-name">
                                    <a href="team.html?team=${encodeURIComponent(match.away)}" class="team-link">
                                        ${escapeHtml(match.away)}
                                    </a>
                                </div>
                                <span class="power-badge"><i class="fas fa-chart-line"></i> Power: ${match.awayPower}</span>
                            </div>
                        </div>
                        <div class="prediction-box">
                            <div class="prediction-item"><i class="fas fa-chart-line"></i> ${match.prediction}</div>
                            <div class="prediction-item"><i class="fas fa-exchange-alt"></i> ${match.bothScore}</div>
                            <div class="prediction-item"><i class="fas fa-chart-simple"></i> ${match.overUnder}</div>
                            <div class="prediction-item"><i class="fas fa-calculator"></i> Power Diff: ${match.diff}</div>
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
    
    // Helper function to escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Initialize the app
    if (typeof leaguesData !== 'undefined') {
        renderLeagueSelector();
        renderContent('all');
    } else {
        console.error('leaguesData not found! Make sure data.js is loaded.');
        document.getElementById('contentArea').innerHTML = `
            <div class="alert alert-danger">
                <i class="fas fa-exclamation-triangle"></i> 
                Error: No data loaded. Please check the console.
            </div>
        `;
    }
});