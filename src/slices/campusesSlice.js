import { createSlice } from "@reduxjs/toolkit";

const campusesSlice = createSlice({
    name: 'campuses',
    initialState: [],
    reducers: {
        updateCampusesStore: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const getCampusesState = (state) => state.campuses
export default campusesSlice.reducer;
export const { updateCampusesStore } = campusesSlice.actions
