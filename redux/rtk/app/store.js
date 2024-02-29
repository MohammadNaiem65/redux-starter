import { configureStore } from '@reduxjs/toolkit';

import counterReducer, { decrement, increment } from '../counter/counterSlice';

// UI elements
const count = document.getElementById('count');

// created the store
const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

count.innerText = store.getState().counter.count;

// subscribe to events
store.subscribe(() => {
	count.innerText = store.getState().counter.count;
});

document.getElementById('increment-btn').addEventListener('click', () => {
	store.dispatch(increment());

	count.innerText = store.getState().counter.count;
});

document.getElementById('decrement-btn').addEventListener('click', () => {
	store.dispatch(decrement());
});
