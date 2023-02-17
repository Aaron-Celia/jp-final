import { createSlice } from "@reduxjs/toolkit";

const singleStudentSlice = createSlice({
    name: 'singleStudent',
    initialState: [],
    reducers: {},
})


export const singleStudentState = (state) => state.singleStudent;
export default singleStudentSlice.reducer;
