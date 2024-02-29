import { configureStore } from '@reduxjs/toolkit';

import counterReducer, {
	decrement,
	dynamicDecrement,
	dynamicIncrement,
	increment,
} from '../counter/counterSlice';
import dynamicCounterReducer, {
	dDecrement,
	dIncrement,
} from '../dynamicCounter/dynamicCounter';

// UI elements
const count = document.getElementById('count');
const dynamicCount = document.getElementById('dynamic-count');

// created the store
const store = configureStore({
	reducer: {
		counter: counterReducer,
		dynamicCounter: dynamicCounterReducer,
	},
});

// show initial state
count.innerText = store.getState().counter.count;
dynamicCount.innerText = store.getState().dynamicCounter.count;

// subscribe to events
store.subscribe(() => {
	count.innerText = store.getState().counter.count;
	dynamicCount.innerText = store.getState().dynamicCounter.count;
});

document.getElementById('increment-btn').addEventListener('click', () => {
	// get input value
	const inputValue = getInputValue('num-input');

	inputValue
		? store.dispatch(dynamicIncrement(inputValue))
		: store.dispatch(increment());

	count.innerText = store.getState().counter.count;
});

document.getElementById('decrement-btn').addEventListener('click', () => {
	// get input value
	const iptValue = getInputValue('num-input');

	iptValue
		? store.dispatch(dynamicDecrement(iptValue))
		: store.dispatch(decrement());
});

document
	.getElementById('dynamic-increment-btn')
	.addEventListener('click', () => {
		// get dynamic value
		const dynamicValue = getInputValue('dynamic-num-input');

		store.dispatch(dIncrement(dynamicValue));
	});

document
	.getElementById('dynamic-decrement-btn')
	.addEventListener('click', () => {
		const iptValue = getInputValue('dynamic-num-input');

		store.dispatch(dDecrement(iptValue));
	});

// get input value
function getInputValue(id) {
	const ipt = document.getElementById(id);
	const iptValue = parseInt(ipt.value);

	ipt.value = '';

	return iptValue;
}
