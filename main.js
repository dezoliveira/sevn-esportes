import { renderCard } from './src/scripts/roundCard'
import { getRound } from './src/services/sevnApi'
import { handleRounds } from './src/scripts/toggleRounds'

let counter = 1

// On window load
window.addEventListener("load", async () => {
  const data = await getRound()
  
  // Initialize app if data exists
  if (data !== undefined) {
    initializeApp(data)
  }
})

// Initialize functions on App
const initializeApp = (data) => {
  renderCard(data, counter++)
  handleRounds(data, counter++)
}