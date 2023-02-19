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
    campuses: campusesSlice,
    students: studentsSlice,
    singleStudent: singleStudentSlice,
    newCampuses: addedCampuses,
    newStudents: addedStudents
  }
});

export default store;