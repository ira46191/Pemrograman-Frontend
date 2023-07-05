import { configureStore } from "@reduxjs/toolkit";
import provinsiReducer from "../feature/covidSlice";

const store = configureStore({
    reducer: {
        provinsi: provinsiReducer,
    }
});

export default store;