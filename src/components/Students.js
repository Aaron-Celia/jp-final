import React, { useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentsAsync } from '../slices/studentsSlice';
import AddStudent from './AddStudent';
import axios from 'axios';

const Students = () => {
    const [students, setStudents] = useState([])
    const dispatch = useDispatch();
    const newStudents = useSelector(state => state.newStudents)
    const allStudents = useSelector(state => state.students);
    useEffect(() => {
        dispatch(getStudentsAsync());
    }, [dispatch, newStudents, students, allStudents]);
    return (
        <div>
            <h1>All Students</h1>
            <div className='addStudentFormDiv'>
                <h3>Add Student:</h3>
                <AddStudent />
            </div>
            {allStudents.length ? allStudents.map(stud => {
                return (
                    <div key={nanoid()} className='studentDiv'>
                        <button onClick={async () => {
                            await axios.delete(`http://localhost:3000/students/${stud.id}`)
                                .then(res => setStudents(res.data))
                        }}>X</button>
                        <h2>{stud.first + ' ' + stud.last}</h2>
                        <img src={stud.imageUrl} />
                        <p>Email: {stud.email}</p>
                        <p>Gpa: {stud.gpa}</p>
                        <h2>Campus: {<Link to={`/students/${stud.id}`}>{stud.campusId}</Link>}</h2>
                    </div>
                )

            })
                : <h2>Sorry, no students to display right now...</h2>
            }
        </div>
    )
}

export default Students