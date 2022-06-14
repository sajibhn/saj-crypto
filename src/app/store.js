import { configureStore } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../services/coinGeckoApi";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import favoriteReducer from '../services/favoriteSlice'

export default configureStore({
    reducer: {
        coins: favoriteReducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [coinGeckoApi.reducerPath]: coinGeckoApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware).concat(coinGeckoApi.middleware),
})