import { roundCard } from './src/scripts/roundCard'
import { getRound } from './src/services/sevnApi'

window.addEventListener("load", async () => {
  const data = await getRound()
  
  if (data !== undefined) {
    roundCard(data)
  }
})