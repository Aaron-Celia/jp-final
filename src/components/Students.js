import React, { useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentsAsync } from '../slices/studentsSlice';
import AddStudent from './AddStudent';
import axios from 'axios';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [campuses, setCampuses] = useState([]);
    const dispatch = useDispatch();
    const newStudents = useSelector(state => state.newStudents);
    const allStudents = useSelector(state => state.students);
    const getCampuses = async () => {
        await axios.get('http://localhost:3000/campuses')
            .then(res => setCampuses(res.data));
    }
    useEffect(() => {
        dispatch(getStudentsAsync());
        getCampuses();
    }, [newStudents, students]);
    return (
        <div className='container'>
            <div>
                <h1>All Students</h1>
            </div>
            <div className='addStudentFormDiv'>
                <h3>Add Student:</h3>
                <AddStudent />
            </div>
            {allStudents.length ? allStudents.map(stud => {
                return (
                    <div key={nanoid()} id='container'>
                        <button onClick={async () => {
                            await axios.delete(`http://localhost:3000/students/${stud.id}`)
                                .then(res => setStudents(res.data))
                        }}>X</button>
                        <h2><Link to={`/students/${stud.id}`}>{stud.first + ' ' + stud.last}</Link></h2>
                        <img src={stud.imageUrl} />
                        <p>Email: {stud.email}</p>
                        <p>Gpa: {stud.gpa}</p>
                        <h2>Campus: <Link to={`/campuses/${stud.campusId}`}>{
                            console.log('campuses.length: ', campuses.length)}{
                                campuses.length ? campuses.map(campus => {
                                    stud.campusId === campus.id ? <h2>{campus.name}</h2> : null
                                })
                                    : null
                            }</Link></h2>
                    </div>
                )

            })
                : <div><h2>Sorry, no students to display right now...</h2></div>
            }
        </div>
    )
}

export default Students