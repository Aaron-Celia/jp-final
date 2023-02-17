import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getStudentsAsync = createAsyncThunk("allStudentsList", async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/students');
        return data;
    } catch (e) {
        console.log(e);
    }
});

const studentsSlice = createSlice({
    name: 'students',
    initialState: [],
    reducers: {
        updateStore: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getStudentsAsync.fulfilled, (state, action) => {
            return action.payload;
        });
    },
})

export const selectAllStudents = (state) => state.students
export default studentsSlice.reducer
export const { updateStore } = studentsSlice.actions