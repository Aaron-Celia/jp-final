import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleCampusAsync = createAsyncThunk("getAllStudents", async (campusId) => {
    try {
        const { data } = await axios.get(`/campuses/${campusId}`);
        return data;
    } catch (err) {
        console.log(err);
    }
});


const singleCampusSlice = createSlice({
    name: 'students',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSingleCampusAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    }
})

export const getSingleCampusState = (state) => state.singleCampus
export default singleCampusSlice.reducer