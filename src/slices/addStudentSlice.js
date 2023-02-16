import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addStudentSlice = createSlice({
    name: 'addedStudents',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload);
        }
    }
})

export default addStudentSlice.reducer;
export const { addStudent } = addStudentSlice.actions;