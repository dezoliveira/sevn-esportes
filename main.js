import { getRound } from './src/services/sevnApi'

window.addEventListener("load", async () => {
  const data = await getRound()
  console.log(data)
})