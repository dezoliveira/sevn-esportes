import { renderCard } from "./roundCard"

const roundBack = document.getElementById("roundBack")
const roundNext = document.getElementById("roundNext")

export const handleRounds = (data, counter) => {
  // <= Back Round <=
  roundBack.addEventListener("click", (e) => {
    e.preventDefault()

    if (counter <= 1) 
      return

    counter -= 1
    renderCard(data, counter)

  })

  // => Next Round =>
  roundNext.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('roundNext', counter)

    if (counter >= data.length)
      return

    counter += 1
    renderCard(data, counter)
    
  })
}