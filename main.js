import { renderCard } from './src/scripts/roundCard'
import { getRound } from './src/services/sevnApi'

let counter = 1

window.addEventListener("load", async () => {
  const data = await getRound()
  
  if (data !== undefined) {
    renderCard(data, counter++)

    const roundBack = document.getElementById("roundBack")

    roundBack.addEventListener("click", () => {
      console.log('roundBack', counter)

      if (counter > 0) {
        renderCard(data, counter--)

      }
    })

    const roundNext = document.getElementById("roundNext")

    roundNext.addEventListener("click", () => {
      console.log('roundNext', counter)

      if (counter < data.length) {
        renderCard(data, counter++)
        
      }
    })
  }
})