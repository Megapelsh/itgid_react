import { createSlice } from "@reduxjs/toolkit";

export const taskReducerSlice = createSlice({
    name: 'store',
    initialState: {
        value: 0,
        text: 'privet',
    },
    reducers: {
        add: (state, data) => {
            state.value += +data.payload
            // console.log('state value is ' + state.value)
        },
        minus: (state, data) => {
            state.value -= + data.payload
        },
        multi: (state, data) => {
            state.value *= +data.payload
        },
        division: (state, data) => {
            state.value /= +data.payload
        }
    },
})

export const {add, minus, multi, division} = taskReducerSlice.actions

export const selectValue = state => state.taskReduser.value
export const selectText = state => state.taskReduser.text

export default taskReducerSlice.reducer