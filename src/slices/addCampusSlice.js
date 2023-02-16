import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addCampusSlice = createSlice({
    name: 'addedCampuses',
    initialState,
    reducers: {
        addCampus: (state, action) => {
            state.push(action.payload);
        }
    }
})

export default addCampusSlice.reducer;
export const { addCampus } = addCampusSlice.actions;