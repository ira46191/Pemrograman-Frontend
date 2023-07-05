import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces"

const provinsiSlice = createSlice({
    name: "Provinsi Slice",
    initialState:{
        provinsi: data.provinces,
    },
    reducers: {
        AddProvinsi() {},
        deleteProvinsi() {},
    },
});

const provinsiReducer = provinsiSlice.reducers;
const { AddProvinsi, deleteProvinsi } = provinsiSlice.actions;

export default provinsiReducer;
export { AddProvinsi, deleteProvinsi };