import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';

const SingleStudent = () => {
    const [singleStudent, setSingleStudent] = useState([]);
    const [campuses, setCampuses] = useState([])
    const params = useParams();
    const getStudent = async () => {
        return await axios.get(`http://localhost:3000/students/${params.studentId}`)
            .then(res => setSingleStudent(res.data))
    }
    const getCampuses = async () => {
        await axios.get('http://localhost:3000/campuses')
            .then(res => setCampuses(res.data))
    }
    useEffect(() => {
        getStudent();
        getCampuses();
    }, [])
    return (
        <div>
            <h1>{singleStudent.first + ' ' + singleStudent.last}</h1>
            {campuses.map(campus => {
                if (campus.id === singleStudent.id) {
                    return <h2 key={nanoid()}>Attends: {campus.name}</h2>
                }
            })}
            <h2>{singleStudent.campusId}</h2>
            <h2>{singleStudent.email}</h2>
            <h3>{singleStudent.phone}</h3>
            <p><strong>{singleStudent.gpa}</strong></p>
            <img src={singleStudent.imageUrl} />
        </div>
    )
}

export default SingleStudent