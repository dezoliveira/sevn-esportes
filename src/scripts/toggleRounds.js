import { renderCard } from "./roundCard"

const roundBack = document.getElementById("roundBack")
const roundNext = document.getElementById("roundNext")

const localData = localStorage.getItem("data")

export const handleRounds = (data, counter) => {
  let rounds = data

  if (localData) {
    rounds = JSON.parse(localData)
  }

  // <= Back Round <=
  roundBack.addEventListener("click", (e) => {
    e.preventDefault()

    if (counter <= 1) 
      return

    counter -= 1
    renderCard(rounds, counter)

  })

  // => Next Round =>
  roundNext.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('roundNext', counter)

    if (counter >= rounds.length)
      return

    counter += 1
    renderCard(rounds, counter)
    
  })
}