import {createSlice} from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name: "count",
    initialState: {
        value : 0
    },
    reducers : {
        increment : state => {
            state.value++;
        },
        decrement : state => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            state.value = +state.value + +action.payload;
        }
    }
})

export const selectCount = state => state.counter.value;

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;