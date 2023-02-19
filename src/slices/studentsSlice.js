import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// export const getStudentsAsync = createAsyncThunk("allStudentsList", async () => {
//     try {
//         const { data } = await axios.get('http://localhost:3000/students');
//         return data;
//     } catch (e) {
//         console.log(e);
//     }
// });

export const getStudentsAsync = createAsyncThunk("allStudents", async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/students`);
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
        },
        addStudentsToStore: (state, action) => {
            state.push(action.payload)
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getStudentsAsync.fulfilled, (state, action) => {
    //         return action.payload;
    //     });
    // },
    extraReducers: (builder) => {
        builder.addCase(getStudentsAsync.fulfilled, (state, action) => {
          return action.payload;
        });
      },
})

export const selectAllStudents = (state) => state.students
export default studentsSlice.reducer
export const { updateStore, addStudentsToStore } = studentsSlice.actions