import { renderGames } from './gamesList'

export const renderCard = (rounds, counter) => {
  let activeRound = counter

  const roundNumber = document.getElementById("roundNumber")
  const roundList = document.getElementById("roundList")
  
  for(let i=0; i < activeRound; i++) {
    roundList.innerHTML = ""

    roundNumber.textContent = `Rodada ${rounds[i].round}`

    roundList.innerHTML  += `
      ${renderGames(rounds[i].games)}
    `
  } 
}