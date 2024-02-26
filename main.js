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

// show count in the UI
document.getElementById('count').innerText = store.getState().count;
