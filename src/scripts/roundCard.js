export const roundCard = (rounds, counter=1) => {

  const roundNumber = document.getElementById("roundNumber")
  
  for(let i=0; i < counter; i++) {
    roundNumber.textContent = rounds[i].round
  } 
}