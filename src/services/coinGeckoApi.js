import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const coinGeckoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_COINGECKO_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_COINGECKO_RAPIDAPI_HOST
}


const baseUrl = process.env.REACT_APP_COINGECKO_RAPIDAPI_URL;

const createRequest = (url) => ({ url, headers: coinGeckoApiHeaders })

export const coinGeckoApi = createApi({
    reducerPath: "coinGeckApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllCoins: builder.query({
            query: (simplified) => createRequest(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${simplified}&page=1&sparkline=false`)
        }),
        getSingleCoin: builder.query({
            query: (coinId) => createRequest(`/coins/${coinId}`)
        }),
        getCoinHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coins/${coinId}/market_chart?vs_currency=usd&days=${timePeriod}`)
        }),
    })
})

export const { useGetAllCoinsQuery, useGetSingleCoinQuery, useGetCoinHistoryQuery } = coinGeckoApi