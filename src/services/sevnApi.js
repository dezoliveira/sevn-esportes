const url = import.meta.env.VITE_SEVN_URL

export const getRound = async () => {
  try {
    const res = await fetch(url)
    
    if (res.ok) {
      const data = await res.json()
      
      return data
    }
    
  } catch(error) {
    console.log('Erro ao requisitar dados da api', error)
  }
}