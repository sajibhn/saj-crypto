import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const coinGeckoApiHeaders = {
    'X-RapidAPI-Key': '993ee86280mshef43139650b963fp160fd0jsn443fd856286b',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const baseUrl = 'https://coingecko.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: coinGeckoApiHeaders })

export const coinGeckoApi = createApi({
    reducerPath: "coinGeckApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllCoins: builder.query({
            query: (simplified) => createRequest(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${simplified}&page=1&sparkline=false`)
        }),
    })
})

export const { useGetAllCoinsQuery } = coinGeckoApi