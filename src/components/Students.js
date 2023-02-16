import React, { useEffect } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentsAsync, selectAllStudents } from '../slices/studentsSlice';
import AddStudent from './AddStudent';

const Students = () => {
    const dispatch = useDispatch();
    const newStudents = useSelector(state => state.newStudents)
    useEffect(() => {
        dispatch(getStudentsAsync());
    }, [dispatch, newStudents]);
    const allStudents = useSelector(selectAllStudents);
    return (
        <div>
            <h1>All Students</h1>
            <div className='addStudentFormDiv'>
                <h3>Add Student:</h3>
                <AddStudent />
            </div>
            {allStudents.map(stud => {
            return (
                <div key={nanoid()} className='studentDiv'>
                    <h2>{stud.first + ' ' + stud.last}</h2>
                    <img src={stud.imageUrl} />
                    <p>Email: {stud.email}</p>
                    <p>Gpa: {stud.gpa}</p>
                    <h2>Campus: {<Link to={`/students/${stud.id}`}>{stud.campusId}</Link>}</h2>
                </div>
            )

        })}</div>
    )
}

export default Students