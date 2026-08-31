// ==================== TEAM PAGE - FIXED STATS ====================

(function() {
    'use strict';

    // ============================================================
    //  WAIT FOR DATA TO LOAD
    // ============================================================

    function waitForData(callback, retries = 15) {
        if (typeof leaguesData !== 'undefined' && typeof matchesData !== 'undefined') {
            callback();
            return;
        }
        
        if (retries === 0) {
            console.error('Data failed to load after multiple attempts');
            showError('Data failed to load. Please refresh the page.');
            return;
        }
        
        setTimeout(() => {
            waitForData(callback, retries - 1);
        }, 300);
    }

    // ============================================================
    //  GET TEAM NAME FROM URL
    // ============================================================

    function getTeamFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('team');
    }

    // ============================================================
    //  FIND TEAM IN ALL LEAGUES (with fuzzy matching)
    // ============================================================

    function findTeamInAllLeagues(teamName) {
        if (!teamName) return null;
        
        // Try exact match first
        for (const [leagueName, league] of Object.entries(leaguesData)) {
            const team = league.teams.find(t => t.team === teamName);
            if (team) {
                return {
                    team: team,
                    leagueName: leagueName,
                    league: league
                };
            }
        }
        
        // Try case-insensitive match
        const searchName = teamName.toLowerCase();
        for (const [leagueName, league] of Object.entries(leaguesData)) {
            const team = league.teams.find(t => t.team.toLowerCase() === searchName);
            if (team) {
                return {
                    team: team,
                    leagueName: leagueName,
                    league: league
                };
            }
        }
        
        // Try partial match (for names like "Man City" vs "Manchester City")
        const searchParts = searchName.split(' ');
        for (const [leagueName, league] of Object.entries(leaguesData)) {
            for (const team of league.teams) {
                const teamParts = team.team.toLowerCase().split(' ');
                // Check if any significant part matches
                for (const part of searchParts) {
                    if (part.length > 2 && teamParts.some(tp => tp.includes(part) || part.includes(tp))) {
                        return {
                            team: team,
                            leagueName: leagueName,
                            league: league
                        };
                    }
                }
            }
        }
        
        return null;
    }

    // ============================================================
    //  FIND MATCHES FOR TEAM (ACROSS ALL LEAGUES)
    // ============================================================

    function findMatchesForTeam(teamName) {
        const allMatches = [];
        
        // Debug: Log what we're searching for
        console.log(`🔍 Searching for matches for team: "${teamName}"`);
        
        // Check if matchesData exists
        if (typeof matchesData === 'undefined') {
            console.warn('⚠️ matchesData is not defined');
            return allMatches;
        }
        
        // Get all league names
        const leagueNames = Object.keys(matchesData);
        console.log(`📊 Found ${leagueNames.length} leagues in matchesData`);
        
        // Search each league
        for (const leagueName of leagueNames) {
            const matches = matchesData[leagueName] || [];
            
            // Find matches where team is home or away
            const teamMatches = matches.filter(m => {
                const homeMatch = m.home === teamName;
                const awayMatch = m.away === teamName;
                
                // Also try case-insensitive
                if (!homeMatch && !awayMatch) {
                    const homeLower = m.home ? m.home.toLowerCase() : '';
                    const awayLower = m.away ? m.away.toLowerCase() : '';
                    const teamLower = teamName.toLowerCase();
                    return homeLower === teamLower || awayLower === teamLower;
                }
                
                return homeMatch || awayMatch;
            });
            
            if (teamMatches.length > 0) {
                console.log(`✅ Found ${teamMatches.length} matches in "${leagueName}"`);
            }
            
            // Add league name to each match
            teamMatches.forEach(m => {
                // Normalize team names in match
                const isHome = m.home === teamName || (m.home && m.home.toLowerCase() === teamName.toLowerCase());
                const opponent = isHome ? m.away : m.home;
                
                allMatches.push({
                    ...m,
                    league: leagueName,
                    isHome: isHome,
                    opponent: opponent,
                    scored: isHome ? m.home_score : m.away_score,
                    conceded: isHome ? m.away_score : m.home_score
                });
            });
        }
        
        // Sort by date (most recent first)
        allMatches.sort((a, b) => {
            if (a.date && b.date) {
                return new Date(b.date) - new Date(a.date);
            }
            return 0;
        });
        
        console.log(`📊 Total matches found for "${teamName}": ${allMatches.length}`);
        return allMatches;
    }

    // ============================================================
    //  CALCULATE TEAM STATS
    // ============================================================

    function calculateTeamStats(team, leagueName) {
        // Get all matches for this team
        const matches = findMatchesForTeam(team.team);
        
        console.log(`📊 Calculating stats for "${team.team}" from ${matches.length} matches`);
        
        // Initialize stats
        let played = matches.length;
        let wins = 0, draws = 0, losses = 0;
        let goalsFor = 0, goalsAgainst = 0;
        let homeWins = 0, homeDraws = 0, homeLosses = 0;
        let awayWins = 0, awayDraws = 0, awayLosses = 0;
        let cleanSheets = 0;
        let form = [];
        
        // Process each match
        matches.forEach(m => {
            const isWin = m.scored > m.conceded;
            const isDraw = m.scored === m.conceded;
            
            goalsFor += m.scored || 0;
            goalsAgainst += m.conceded || 0;
            
            if (isWin) {
                wins++;
                if (m.isHome) homeWins++;
                else awayWins++;
            } else if (isDraw) {
                draws++;
                if (m.isHome) homeDraws++;
                else awayDraws++;
            } else {
                losses++;
                if (m.isHome) homeLosses++;
                else awayLosses++;
            }
            
            if (m.conceded === 0) cleanSheets++;
        });
        
        // Calculate form (last 5 matches)
        const recentMatches = matches.slice(0, 5);
        recentMatches.forEach(m => {
            if (m.scored > m.conceded) form.push('W');
            else if (m.scored === m.conceded) form.push('D');
            else form.push('L');
        });
        
        // Win percentages
        const winPct = played > 0 ? Math.round((wins / played) * 100) : 0;
        const homeTotal = homeWins + homeDraws + homeLosses;
        const homeWinPct = homeTotal > 0 ? Math.round((homeWins / homeTotal) * 100) : 0;
        const awayTotal = awayWins + awayDraws + awayLosses;
        const awayWinPct = awayTotal > 0 ? Math.round((awayWins / awayTotal) * 100) : 0;
        
        // Points
        const points = wins * 3 + draws;
        const ppg = played > 0 ? (points / played) : 0;
        
        const stats = {
            played,
            wins,
            draws,
            losses,
            goalsFor,
            goalsAgainst,
            goalDiff: goalsFor - goalsAgainst,
            homeWins,
            homeDraws,
            homeLosses,
            awayWins,
            awayDraws,
            awayLosses,
            cleanSheets,
            winPct,
            homeWinPct,
            awayWinPct,
            form,
            points,
            ppg: ppg.toFixed(2),
            matches: matches.slice(0, 20) // Store recent matches for display
        };
        
        console.log('📊 Calculated stats:', stats);
        return stats;
    }

    // ============================================================
    //  RENDER TEAM PAGE
    // ============================================================

    function renderTeamPage(teamName) {
        const container = document.getElementById('teamContent');
        if (!container) return;

        // Find team in leaguesData
        const result = findTeamInAllLeagues(teamName);
        
        if (!result) {
            container.innerHTML = `
                <div class="alert alert-warning text-center py-5">
                    <i class="fas fa-exclamation-triangle fa-2x mb-3"></i>
                    <h4>Team not found</h4>
                    <p>The team "${teamName}" could not be found in our database.</p>
                    <a href="index.html" class="btn btn-primary mt-3">Go to Home</a>
                </div>
            `;
            return;
        }

        const { team, leagueName, league } = result;
        
        // Calculate stats from matchesData
        const stats = calculateTeamStats(team, leagueName);
        
        // Get league standings position
        const standings = [...league.teams].sort((a, b) => (a.rank || 0) - (b.rank || 0));
        const position = standings.findIndex(t => t.team === team.team) + 1;
        const totalTeams = standings.length;

        // Build HTML
        let html = `
            <!-- Team Header -->
            <div class="team-header" style="
                background: linear-gradient(135deg, #1a3a5c 0%, #2a5f8a 100%);
                color: white;
                padding: 2rem;
                border-radius: 20px;
                margin-bottom: 2rem;
                text-align: center;
            ">
                ${team.logo ? `<img src="images/logos/clubs/${team.logo}" style="height: 80px; margin-bottom: 1rem;" onerror="this.style.display='none'">` : ''}
                <h1 style="font-size: 2.5rem; font-weight: 800;">${team.team}</h1>
                <p style="opacity: 0.9;">
                    <i class="fas fa-trophy"></i> ${leagueName}
                    ${position ? `• Position: #${position} of ${totalTeams}` : ''}
                    ${stats.played > 0 ? `• ${stats.played} matches played` : ''}
                </p>
            </div>
        `;

        // If no matches found, show message
        if (stats.played === 0) {
            html += `
                <div class="alert alert-info text-center py-4">
                    <i class="fas fa-info-circle fa-2x mb-3"></i>
                    <h4>No match data available</h4>
                    <p>We don't have any recorded matches for ${team.team} yet.</p>
                    <p class="text-muted small">Match data is stored in matchesData.js. Make sure the team name matches exactly.</p>
                    <div class="mt-3">
                        <button onclick="location.reload()" class="btn btn-outline-primary">
                            <i class="fas fa-sync"></i> Refresh
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Stats Grid
            html += `
                <div class="stats-grid" style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                ">
                    <div class="stat-card" style="
                        background: white;
                        border-radius: 15px;
                        padding: 1.5rem;
                        text-align: center;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    ">
                        <div style="font-size: 2rem; font-weight: 800; color: #1a3a5c;">${stats.played}</div>
                        <div style="color: #6c757d; font-size: 0.85rem;">Matches Played</div>
                    </div>
                    <div class="stat-card" style="
                        background: white;
                        border-radius: 15px;
                        padding: 1.5rem;
                        text-align: center;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    ">
                        <div style="font-size: 2rem; font-weight: 800; color: #10b981;">${stats.wins}</div>
                        <div style="color: #6c757d; font-size: 0.85rem;">Wins</div>
                    </div>
                    <div class="stat-card" style="
                        background: white;
                        border-radius: 15px;
                        padding: 1.5rem;
                        text-align: center;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    ">
                        <div style="font-size: 2rem; font-weight: 800; color: #f59e0b;">${stats.draws}</div>
                        <div style="color: #6c757d; font-size: 0.85rem;">Draws</div>
                    </div>
                    <div class="stat-card" style="
                        background: white;
                        border-radius: 15px;
                        padding: 1.5rem;
                        text-align: center;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    ">
                        <div style="font-size: 2rem; font-weight: 800; color: #ef4444;">${stats.losses}</div>
                        <div style="color: #6c757d; font-size: 0.85rem;">Losses</div>
                    </div>
                    <div class="stat-card" style="
                        background: white;
                        border-radius: 15px;
                        padding: 1.5rem;
                        text-align: center;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    ">
                        <div style="font-size: 2rem; font-weight: 800; color: #1a3a5c;">${stats.goalDiff > 0 ? '+' : ''}${stats.goalDiff}</div>
                        <div style="color: #6c757d; font-size: 0.85rem;">Goal Difference</div>
                    </div>
                    <div class="stat-card" style="
                        background: white;
                        border-radius: 15px;
                        padding: 1.5rem;
                        text-align: center;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    ">
                        <div style="font-size: 2rem; font-weight: 800; color: #1a3a5c;">${stats.ppg}</div>
                        <div style="color: #6c757d; font-size: 0.85rem;">Points Per Game</div>
                    </div>
                </div>
            `;

            // Goals For/Against
            html += `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                    <div style="background: white; border-radius: 15px; padding: 1rem; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
                        <div style="font-size: 0.85rem; color: #6c757d;">Goals For</div>
                        <div style="font-size: 2rem; font-weight: 800; color: #10b981;">${stats.goalsFor}</div>
                        <div style="font-size: 0.8rem; color: #6c757d;">${stats.played > 0 ? (stats.goalsFor / stats.played).toFixed(2) : 0} per match</div>
                    </div>
                    <div style="background: white; border-radius: 15px; padding: 1rem; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
                        <div style="font-size: 0.85rem; color: #6c757d;">Goals Against</div>
                        <div style="font-size: 2rem; font-weight: 800; color: #ef4444;">${stats.goalsAgainst}</div>
                        <div style="font-size: 0.8rem; color: #6c757d;">${stats.played > 0 ? (stats.goalsAgainst / stats.played).toFixed(2) : 0} per match</div>
                    </div>
                </div>
            `;

            // Form
            html += `
                <div class="analysis-card" style="
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                ">
                    <h3><i class="fas fa-chart-simple"></i> Recent Form</h3>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
                        ${stats.form.map(r => {
                            const color = r === 'W' ? '#10b981' : r === 'D' ? '#f59e0b' : '#ef4444';
                            return `<span style="
                                display: inline-block;
                                width: 40px;
                                height: 40px;
                                line-height: 40px;
                                border-radius: 8px;
                                font-size: 16px;
                                font-weight: 700;
                                text-align: center;
                                color: white;
                                background: ${color};
                            ">${r}</span>`;
                        }).join('')}
                        ${stats.form.length === 0 ? '<span class="text-muted">No recent matches</span>' : ''}
                    </div>
                </div>
            `;

            // Home/Away Split
            html += `
                <div class="analysis-card" style="
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                ">
                    <h3><i class="fas fa-home"></i> Home / Away Split</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem;">
                        <div style="padding: 1rem; background: #f8f9fa; border-radius: 12px; text-align: center;">
                            <div style="font-weight: 700; color: #1a3a5c;">🏠 Home</div>
                            <div style="font-size: 1.1rem; margin: 0.3rem 0;">
                                ${stats.homeWins}W - ${stats.homeDraws}D - ${stats.homeLosses}L
                            </div>
                            <div style="font-size: 0.85rem; color: #6c757d;">Win %: ${stats.homeWinPct}%</div>
                            <div style="font-size: 0.8rem; color: #6c757d;">
                                GF: ${stats.homeWins > 0 || stats.homeDraws > 0 || stats.homeLosses > 0 ? 
                                    Math.round((stats.goalsFor * (stats.homeWins + stats.homeDraws) / stats.played)) : 0}
                            </div>
                        </div>
                        <div style="padding: 1rem; background: #f8f9fa; border-radius: 12px; text-align: center;">
                            <div style="font-weight: 700; color: #1a3a5c;">✈️ Away</div>
                            <div style="font-size: 1.1rem; margin: 0.3rem 0;">
                                ${stats.awayWins}W - ${stats.awayDraws}D - ${stats.awayLosses}L
                            </div>
                            <div style="font-size: 0.85rem; color: #6c757d;">Win %: ${stats.awayWinPct}%</div>
                            <div style="font-size: 0.8rem; color: #6c757d;">
                                GF: ${stats.awayWins > 0 || stats.awayDraws > 0 || stats.awayLosses > 0 ? 
                                    Math.round((stats.goalsFor * (stats.awayWins + stats.awayDraws) / stats.played)) : 0}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Recent Matches
            html += `
                <div class="analysis-card" style="
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                ">
                    <h3><i class="fas fa-clock-rotate-left"></i> Recent Matches (${stats.matches.length})</h3>
                    <div style="overflow-x: auto;">
                        <table class="league-table" style="width: 100%; font-size: 0.85rem;">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>League</th>
                                    <th>Opponent</th>
                                    <th>Score</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
            `;

            if (stats.matches.length === 0) {
                html += `<tr><td colspan="5" class="text-center text-muted">No matches found</td></tr>`;
            } else {
                stats.matches.forEach(m => {
                    const result = m.scored > m.conceded ? 'W' : (m.scored === m.conceded ? 'D' : 'L');
                    const resultColor = result === 'W' ? '#10b981' : (result === 'D' ? '#f59e0b' : '#ef4444');
                    const location = m.isHome ? '🏠' : '✈️';
                    
                    html += `
                        <tr>
                            <td>${m.date || '—'}</td>
                            <td>${m.league || '—'}</td>
                            <td>${location} ${m.opponent || 'Unknown'}</td>
                            <td><strong>${m.scored || 0} - ${m.conceded || 0}</strong></td>
                            <td style="color: ${resultColor}; font-weight: 700;">${result}</td>
                        </tr>
                    `;
                });
            }

            html += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        // Back button
        html += `
            <div class="text-center mt-4">
                <a href="javascript:history.back()" class="btn btn-outline-primary">
                    <i class="fas fa-arrow-left"></i> Go Back
                </a>
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-home"></i> Home
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    // ============================================================
    //  SHOW ERROR
    // ============================================================

    function showError(message) {
        const container = document.getElementById('teamContent');
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger text-center py-5">
                    <i class="fas fa-exclamation-triangle fa-2x mb-3"></i>
                    <h4>Error Loading Data</h4>
                    <p>${message}</p>
                    <button onclick="location.reload()" class="btn btn-primary mt-3">
                        <i class="fas fa-sync"></i> Refresh Page
                    </button>
                </div>
            `;
        }
    }

    // ============================================================
    //  INITIALIZE
    // ============================================================

    document.addEventListener('DOMContentLoaded', function() {
        const teamName = getTeamFromURL();
        
        console.log('🔍 Team page loaded for:', teamName);
        
        if (!teamName) {
            showError('No team specified. Please go back and select a team.');
            return;
        }

        // Update page title
        document.title = `${teamName} | Team Stats | Punters League`;

        // Wait for data to load
        waitForData(function() {
            console.log('✅ Data loaded, rendering team page...');
            renderTeamPage(teamName);
        }, 20);
    });

})();