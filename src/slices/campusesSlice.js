import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchCampusesAsync = createAsyncThunk('allCampusesList', async () => {
//     try {
//         const { data } = await axios.get('http://localhost:3000/campuses');
//         console.log(data)
//         return data;
//     } catch (e) {
//         console.log(e);
//     }
// });

// const campusUrl = 'http://localhost:3000/campuses';

export const getCampusesThunk = createAsyncThunk('campuses/getCampuses', async () => {
    try {
        const response = await axios.get('http://localhost:3000/campuses');
        console.log('response.data: ', response.data);
        return response.data
    } catch(e) {
        console.log(e.message);
    }
})

const campusesSlice = createSlice({
    name: 'campuses',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => { // builder is an object that lets you define extra reducers outside of the slice but that act on the slice
        (builder) => {
            // cases listening for promise status action type that are dispatched from from thunk, then we set our state accordingly

            // think of this similarly to a switch statement
            builder
            .addCase(getCampuses.fulfilled, (state, action) => {
                // update state by using immer library
                // state.campuses.value.setAll(state, action.payload);
                // state.status = 'succeded';
                return action.payload
            })
        }
    },
});

export const getCampusesState = (state) => state.campuses

export default campusesSlice.reducer;
