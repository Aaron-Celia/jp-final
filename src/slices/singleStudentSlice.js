import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export const getSingleStudent = createAsyncThunk('singleStudent', async() =>{
//     const params = useParams();
//     try{
//        const {data} =  await axios.get(`http://localhost:3000/students/${params.studentId}`);
//        console.log('in thunk, data: ', data)
//        return data;
//     } catch (e){
//         console.log(e)
//     }
// });

const singleStudentSlice = createSlice({
    name: 'singleStudent',
    initialState: [],
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(getSingleStudent.fulfilled, (state, action) => {
    //       return action.payload;
    //     });
    //   },
})


export const singleStudentState = (state) => state.singleStudent;
export default singleStudentSlice.reducer;
// export const {invokeThunk} = singleStudentSlice.actions
