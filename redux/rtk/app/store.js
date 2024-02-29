import { configureStore } from '@reduxjs/toolkit';

import counterReducer, {
	decrement,
	dynamicIncrement,
	increment,
} from '../counter/counterSlice';

// UI elements
const count = document.getElementById('count');
const dynamicCount = document.getElementById('dynamic-count');
const input = document.getElementById('num-input');
const dynamicInput = document.getElementById('dynamic-num-input');

// created the store
const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// show initial state
count.innerText = store.getState().counter.count;
dynamicCount.innerText = 0;

// subscribe to events
store.subscribe(() => {
	count.innerText = store.getState().counter.count;
});

document.getElementById('increment-btn').addEventListener('click', () => {
	// get the new value
	const inputValue = parseInt(input.value);

	// set the value to 0
	input.value = '';

	inputValue
		? store.dispatch(dynamicIncrement(inputValue))
		: store.dispatch(increment());

	count.innerText = store.getState().counter.count;
});

document.getElementById('decrement-btn').addEventListener('click', () => {
	store.dispatch(decrement());
});
