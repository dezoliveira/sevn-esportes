import { renderCard } from './src/scripts/roundCard'
import { getRound } from './src/services/sevnApi'
import { handleRounds } from './src/scripts/toggleRounds'

const roundCard = document.getElementById("roundCard")
const localData = localStorage.getItem("data")

let counter = 1

// On window load
window.addEventListener("load", async () => {
  const data = await getRound()
  
  // Initialize app if data exists
  if (data !== undefined) {

    if (localData) {
      const data = JSON.parse(localData)
      initializeApp(data)
    
    } else {
      initializeApp(data)
      localStorage.setItem('data', JSON.stringify(data))
    }

  
  } else {
    roundCard.innerHTML += `
      <h4>Nenhum dado a ser exibido, tente novamente mais tarde.</h4>
    `
  }
  
})

// Initialize functions on App
const initializeApp = (data) => {
  renderCard(data, counter)
  handleRounds(data, counter)
}