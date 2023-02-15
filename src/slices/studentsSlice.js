import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

// in here i believe i will need a way to update this state to the student data so that it will be accessible to different components throughout the app via the redux store

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {

    }
})

export const SelectAllStudents = (state) => state.students
export default studentsSlice.reducer