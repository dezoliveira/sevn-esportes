import { renderCard } from "./roundCard"

const roundBack = document.getElementById("roundBack")
const roundNext = document.getElementById("roundNext")

export const handleRounds = (data, counter) => {
  // <= Back Round <=
  roundBack.addEventListener("click", () => {

    if (counter > 0) {
      renderCard(data, counter--)
    }

  })

  // => Next Round =>
  roundNext.addEventListener("click", () => {
    console.log('roundNext', counter)

    if (counter < data.length) {
      renderCard(data, counter++)
    }
    
  })
}