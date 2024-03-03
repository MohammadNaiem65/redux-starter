import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/Counter';

const store = configureStore({
    reducer: {
        counter: counterReducer 
    }
});

export default store;