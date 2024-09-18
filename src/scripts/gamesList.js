import { colors } from '../utils/dictionary'

export const renderGames = (games) => {
  // Template storage var
  let html = ""

  html += "<ul>"

  // Loop to get games by round
  for (let g in games) {
    html += `
      <li id="roundItem" class="round-item">
        <div id="${games[g].team_away_id}" class="team-info">
          <img
            src="/images/team_shield_base.png"
            style="
              filter: opacity(0.5)
              drop-shadow(0 0 0 ${colors(g, "away")});
            "
          >
          <label>${games[g].team_away_name}</label>
        </div>
        <div class="score">
          <label>${games[g].team_away_score}</label>
          <label>
            <i class="fa-solid fa-x"></i>
          </label>
          <label>${games[g].team_home_score}</label>
        </div>
        <div id="${games[g].team_home_id}" class="team-info">
          <label>${games[g].team_home_name}</label>
          <img
            src="/images/team_shield_base.png"
            style="
              filter: opacity(0.5)
              drop-shadow(0 0 0 ${colors(g, "home")});
            "
          >
        </div>
      </li>
      <hr>
    `

  }

  html += "</ul>"

  return html
}