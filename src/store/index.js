/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";
import allCampuses from '../slices/campusesSlice';
import allStudents from '../slices/studentsSlice';



const store = configureStore({
  reducer: {
    // these are how you access the state of the slices throughout the app, i need to find a way to update the slice state in the slice files................................
    campuses: allCampuses,
    students: allStudents
  }
});

export default store;