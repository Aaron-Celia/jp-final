import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import Sequelize from "sequelize/types/sequelize";
// import { Campuses } from "../../server/db/models";
export const fetchCampuses = createAsyncThunk('/api/campuses', async () => {
    const { data } = await axios.get('http://localhost:3000/api/campuses');
    console.log(data, 'data from async thunk')
    return data;
    // return fetch('/campuses')
    // .then(res => res ? console.log(res.data) : null);
});

// fetchSchools = async() => {
//     return await axios.get('http://localhost:3000/api/campuses').then(res => res.data)
// }

// i set initial state equal to the data in the database so that when it changes my use effect runs and renders the updated information 
const campusesSlice = createSlice({
    name: 'campuses',
    initialState: {
        value: []
    },
    reducers: {
        // do i need to add a reducer that pushes new campuses to the state here?
        // setState: (state, action) => {
        //     state = fetchCampuses();
        // }
    },
    // extraReducers: async (builder) => {
    //     builder.addCase(fetchCampuses.fulfilled, (state, action) => {
    //         state.push(action.payload); /// is this how you set the state?
    //     })
    // }
});

export const selectAllCampuses = (state) => state.campuses;
export default campusesSlice.reducer;
// export const { setState } = campusesSlice.actions