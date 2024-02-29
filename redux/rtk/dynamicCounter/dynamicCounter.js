import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
};

const dynamicCounterSlice = createSlice({
	name: 'dynamicCounter',
	initialState,
	reducers: {
		dIncrement: (state, action) => {
			state.count += action.payload;
		},
		dDecrement: (state, action) => {
			state.count -= action.payload;
		},
	},
});

export default dynamicCounterSlice.reducer;
export const { dIncrement, dDecrement } = dynamicCounterSlice.actions;
