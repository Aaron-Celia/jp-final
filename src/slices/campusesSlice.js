import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCampusesAsync = createAsyncThunk("getAllCampuses", async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/campuses');
      return data;
    } catch (err) {
      console.log(err);
    }
  });

const campusesSlice = createSlice({
    name: 'campuses',
    initialState: [],
    reducers: {
        updateCampusesStore: (state, action) => {
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCampusesAsync.fulfilled, (state, action) => {
          return action.payload;
        });
      }
});

export const getCampusesState = (state) => state.campuses
export default campusesSlice.reducer;
export const { updateCampusesStore } = campusesSlice.actions
