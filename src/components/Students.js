import React, { useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentsAsync, getStudentsState } from '../slices/studentsSlice';
import AddStudent from './AddStudent';
import axios from 'axios';
import { getCampusesAsync, getCampusesState } from '../slices/campusesSlice';


const Students = () => {

    const dispatch = useDispatch();
    const getInfo = () => {
        dispatch(getCampusesAsync())
        dispatch(getStudentsAsync());
    }
    useEffect(() => {
        getInfo()
    }, [newStudents, campuses]);
    const allStudents = useSelector(getStudentsState);
    const newStudents = useSelector(state => state.newStudents)
    const campuses = useSelector(getCampusesState);
    return (
        <div key={nanoid()} className='container'>
            <h1 key={nanoid()}>All Students</h1>
            <AddStudent />
            {allStudents.length ? allStudents.map(student => {
                return (
                    <div key={nanoid()}>
                        <button onClick={async () => {
                            await axios.delete(`/students/${student.id}`)
                                .then(res => dispatch(getStudentsAsync()))
                        }}>X</button>
                        <h1 key={nanoid()}><Link to={`/students/${student.id}`}>{student.first + ' ' + student.last}</Link></h1>
                        {campuses.length ? campuses.map(campus => {
                            if (campus.id === student.id) {
                                return <h2 key={nanoid()}>Attends: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h2>
                            }
                        })
                            : <h2 key={nanoid()}>Not currently enrolled</h2>
                        }
                        <img key={nanoid()} src={student.imageUrl} />
                        <h3 key={nanoid()}>{student.email}</h3>
                        <h5 key={nanoid()}>{student.gpa}</h5>
                    </div>
                )
            })
                : <div><h2 key={nanoid()}>Sorry, no students to display right now...</h2></div>
            }
        </div>
    )
}

export default Students