import axios from "axios";

const instace = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    timeout: 10000
})

export const getCoins = async (currency = 'brl', page = 1) => {
    const response = await instace.get('coins/markets', { 
        params: {
            vs_currency: currency,
            page: page,
            per_page: 20,
            order: 'market_cap_desc',
            sparkline: false
        }
    })
    return response.data
}

export const getCoinById = async (id) => {
    const response = await instace.get(`coins/${id}`)
    return response.data
}
