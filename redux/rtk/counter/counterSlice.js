import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	count: 0,
};

// ! counter slice
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			++state.count;
		},
		decrement: (state, action) => {
			state.count--;
		},
		dynamicIncrement: (state, action) => {
			state.count += action.payload;
		},
		dynamicDecrement: (state, action) => {
			state.count -= action.payload;
		},
	},
});

export default counterSlice.reducer;
export const { increment, decrement, dynamicIncrement, dynamicDecrement } =
	counterSlice.actions;
