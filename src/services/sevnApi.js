export const getRound = async () => {
  try {
    const res = await fetch("https://sevn-pleno-esportes.deno.dev/")
    
    if (res.ok) {
      const data = await res.json()
      
      return data
    }
    
  } catch(error) {
    console.log('Erro ao requisitar dados da api', error)
  }
}