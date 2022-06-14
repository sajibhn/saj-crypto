import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    coins: []
}

export const favoriteSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

        add: (state, action) => {
            state.coins.push(action.payload);
        },
        remove: (state, action) => {
            const updatedCoins = state.coins.filter((coin) => coin !== action.payload);
            state.coins = updatedCoins
        }
    },
})


export const { add, remove } = favoriteSlice.actions

export default favoriteSlice.reducer