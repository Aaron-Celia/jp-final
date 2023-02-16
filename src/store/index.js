/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from '../slices/campusesSlice';
import studentsSlice from '../slices/studentsSlice';
import singleStudentSlice from "../slices/singleStudentSlice";
import addedCampuses from '../slices/addCampusSlice';
import addedStudents from '../slices/addStudentSlice';

const store = configureStore({
  reducer: {
    // these are how you access the state of the slices throughout the app, i need to find a way to update the slice state in the slice files................................
    campuses: campusesSlice,
    students: studentsSlice,
    singleStudent: singleStudentSlice,
    newCampuses: addedCampuses,
    newStudents: addedStudents
  }
});

export default store;