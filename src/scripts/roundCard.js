export const renderCard = (rounds, counter) => {

  let activeRound = counter

  console.log('round', counter)

  const roundNumber = document.getElementById("roundNumber")
  
  for(let i=0; i < activeRound; i++) {
    roundNumber.textContent = rounds[i].round
  } 
}