import { configureStore } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../services/coinGeckoApi";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import favoriteReducer from '../services/favoriteSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    coins: favoriteReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: {
        coins: persistedReducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [coinGeckoApi.reducerPath]: coinGeckoApi.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})