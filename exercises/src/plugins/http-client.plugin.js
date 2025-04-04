const  axios  =  require ('axios')

const httpClientPlugin = {
    // get: async (url) => {
    //     const response = await fetch(url)
    //     return await response.json()
    // }
    get: async (url) => {
        const { data } = await axios.get(url)
        return data
    }
}

module.exports = {
    httpClient: httpClientPlugin
}