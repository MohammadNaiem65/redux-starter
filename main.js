import { createStore } from 'redux';

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// ! initial state
const initialState = {
	count: 0,
};

// ! root reducer
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };

		case DECREMENT:
			return { ...state, count: state.count - 1 };

		default:
			return state;
	}
};

// ! redux store
const store = createStore(counterReducer);
const count = document.getElementById('count');

// initially show the state to the UI
count.innerText = store.getState().count;

// subscribe the store to show the latest state
store.subscribe(() => {
	// update the state into the UI
	count.innerText = store.getState().count;
});

// ! increment counter
document.getElementById('increment-btn').addEventListener('click', function () {
	// dispatch action
	store.dispatch({ type: INCREMENT });
});

// ! decrement counter
document.getElementById('decrement-btn').addEventListener('click', function () {
	store.dispatch({ type: DECREMENT });
});
