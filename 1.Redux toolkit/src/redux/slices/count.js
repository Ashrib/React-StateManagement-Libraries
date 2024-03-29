import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:0
}
export const counterSlice = createSlice({
    initialState,
    name:'counter',
    reducers:{
        increment: (state) => {state.value+=1},
        decrement: (state) => {state.value-=1},
        incByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incByAmount } = counterSlice.actions;
export default counterSlice.reducer;