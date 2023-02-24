import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudentsAsync = createAsyncThunk("getAllStudents", async () => {
    try {
      const { data } = await axios.get('/students');
      return data;
    } catch (err) {
      console.log(err);
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
      }
})

export const getStudentsState = (state) => state.students
export default studentsSlice.reducer
export const { updateStore, addStudentsToStore } = studentsSlice.actions