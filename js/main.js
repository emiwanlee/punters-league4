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
   "Chinese Women's Super League - Recent": [
    { home: "Guangdong Meizhou W", away: "Wuhan Jiangda W", home_score: 1, away_score: 1, league: "Chinese Women's Super League" },
    { home: "Guangxi Pingguo W", away: "Beijing Beikong W", home_score: 0, away_score: 2, league: "Chinese Women's Super League" }
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
                    ${league.isBasketball ? '🏀 Basketball Predictions' : '⚽ Football Predictions'}
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

// ===== NAVBAR DROPDOWN FUNCTIONALITY =====

// Option 1: Close dropdowns when clicking outside (recommended)
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    const toggles = document.querySelectorAll('.dropdown-toggle');
    
    // Check if click is outside any dropdown
    let isDropdown = false;
    toggles.forEach(toggle => {
        if (toggle.contains(event.target)) {
            isDropdown = true;
        }
    });
    
    if (!isDropdown) {
        dropdowns.forEach(menu => {
            const parent = menu.closest('.dropdown');
            if (parent && !parent.contains(event.target)) {
                // Close dropdown using Bootstrap
                const instance = bootstrap.Dropdown.getInstance(parent.querySelector('.dropdown-toggle'));
                if (instance) {
                    instance.hide();
                }
            }
        });
    }
});

// Option 2: Set active class based on current page
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPage.includes(href)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Option 3: Smooth dropdown animation on mobile
function enhanceMobileDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                const parent = this.closest('.dropdown');
                const menu = parent.querySelector('.dropdown-menu');
                
                if (menu.classList.contains('show')) {
                    menu.style.animation = 'dropdownFade 0.3s ease reverse';
                    setTimeout(() => {
                        menu.style.animation = '';
                    }, 300);
                }
            }
        });
    });
}

// Option 4: Keyboard accessibility
function initKeyboardNav() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href) {
                    window.location.href = href;
                }
            }
        });
    });
}

// Option 5: Track dropdown interactions (optional analytics)
function trackDropdownInteractions() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const country = this.textContent.trim();
            const category = this.closest('.dropdown-menu').querySelector('.dropdown-header');
            const region = category ? category.textContent.trim() : 'Unknown';
            
            // Send to Google Analytics or console
            console.log(`User clicked: ${country} (${region})`);
            
            // If using Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'country_click', {
                    'country': country,
                    'region': region
                });
            }
        });
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    enhanceMobileDropdowns();
    initKeyboardNav();
    trackDropdownInteractions();
});

// ===== HANDLE PAGE NAVIGATION =====
// Update active class when navigating with JavaScript
function navigateTo(page) {
    window.location.href = page;
}

// ===== RESPONSIVE HANDLING =====
// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if it's a dropdown toggle
            if (!this.classList.contains('dropdown-toggle')) {
                // Close mobile menu
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const toggler = document.querySelector('.navbar-toggler');
                    if (toggler) {
                        toggler.click();
                    }
                }
            }
        });
    });
});

// ===== DYNAMIC COUNTRY LIST (if using search feature) =====
// Uncomment if you want to use the search dropdown feature


const countries = [
    { name: 'Argentina', url: 'argentina.html', region: 'Americas' },
    { name: 'Brazil', url: 'brazil.html', region: 'Americas' },
    { name: 'Chile', url: 'chile.html', region: 'Americas' },
    { name: 'USA', url: 'usa.html', region: 'Americas' },
    { name: 'England', url: 'england.html', region: 'Europe' },
    { name: 'Spain', url: 'spain.html', region: 'Europe' },
    { name: 'Italy', url: 'italy.html', region: 'Europe' },
    { name: 'Germany', url: 'germany.html', region: 'Europe' },
    { name: 'France', url: 'france.html', region: 'Europe' },
    { name: 'Japan', url: 'japan.html', region: 'Asia' },
    { name: 'China', url: 'china.html', region: 'Asia' },
    { name: 'South Korea', url: 'korea.html', region: 'Asia' },
];

function populateCountryList(searchTerm = '') {
    const list = document.getElementById('countryList');
    if (!list) return;
    
    const filtered = countries.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    list.innerHTML = filtered.map(c => 
        `<li><a href="${c.url}" class="dropdown-item">${c.name}</a></li>`
    ).join('');
}

// Search input handler
const searchInput = document.getElementById('countrySearch');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        populateCountryList(this.value);
    });
}
