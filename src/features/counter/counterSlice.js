import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: false
}

export const counterSlice = createSlice({
    name: "changeStyle",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = true
        },
        decrement: (state) => {
            state.value = false
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer