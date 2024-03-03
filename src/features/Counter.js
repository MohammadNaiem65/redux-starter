import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

const counterSlice = createSlice({
	name: 'count',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
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
