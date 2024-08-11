export const useNewsStore = defineStore('newsStore', () => {
  const news = ref(null)
  async function getServerData(url) {
    fetch( url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer 2|U0BLQmcnoN9jTVpfJ2lYhNk9N1i31STNiNTsqbCyf6311bcd", 
        'Access-Control-Allow-Origin': '*' 
      },
      mode: 'cors'
    })
    .then(response => response.json())
    .then(res => news.value = res.results)
  }
  
  getServerData('https://test.bitmafia.io/api/frontend/news')

  return {
    news
  }
})