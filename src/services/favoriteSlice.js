import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoriteSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {

        add(state, { payload }) {
            state.push(payload)
        },
        remove(state, { payload }) {
            return state.filter((coin) => coin !== payload)
        }
    },
})


export const { add, remove } = favoriteSlice.actions

export default favoriteSlice.reducer