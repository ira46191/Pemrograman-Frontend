// import configureStore

import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../feature";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

export default store;