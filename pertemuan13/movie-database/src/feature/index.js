// import createSlice
import { createSlice } from "@reduxjs/toolkit";
import data from "../components/utils/constans/data";

const moviesSlice =  createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data
    },
    reducers: {
        addMovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload); 
        },
        deletMovie() {},
    },
});

// generate action reducers
const moviesReducer = moviesSlice.reducer;
const { addMovie, deletMovie } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, deletMovie }; 