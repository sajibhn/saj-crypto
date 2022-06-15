import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
    coins: []
}

export const favoriteSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

        add: (state, action) => {
            state.coins.push(action.payload);
            toast.success("Added to favorite", {
                position: "bottom-left",
                autoClose: 1000
            })
        },
        remove: (state, action) => {
            const updatedCoins = state.coins.filter((coin) => coin !== action.payload);
            state.coins = updatedCoins
            toast.error("Deleted from favorite", {
                position: "bottom-left",
                autoClose: 1000
            })
        }
    },
})


export const { add, remove } = favoriteSlice.actions

export default favoriteSlice.reducer