// Imports
import { renderGames } from './gamesList'

// Get DOM Elements by id
const roundNumber = document.getElementById("roundNumber")
const roundList = document.getElementById("roundList")

export const renderCard = (rounds, counter) => {
  let activeRound = counter

  for(let i=0; i < activeRound; i++) {
    // Reset round list at start
    roundList.innerHTML = ""

    // Add Round number dinamically
    roundNumber.textContent = `Rodada ${rounds[i].round}`

    // Render round games
    roundList.innerHTML  += `
      ${renderGames(rounds[i].games)}
    `
  } 
}