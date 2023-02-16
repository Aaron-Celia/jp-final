// import axios from 'axios';
// import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleStudent, singleStudentState } from '../slices/singleStudentSlice';

const SingleStudent = () => {
    const [singleStudent, setSingleStudent] = useState([]);
    const params = useParams();
    console.log('stringified params:   ', JSON.stringify(params));
    const getCampus = async () => {
        return await axios.get(`http://localhost:3000/students/${params.studentId}`)
        .then(res => setSingleStudent(res.data))
    }
    useEffect(() => {
        getCampus();
    }, [])
    return (
        <div>
            <h1>{a}</h1>
            <h1>{singleStudent.first + ' ' + singleStudent.last}</h1>
            <h2>{singleStudent.campusId}</h2>
            <h2>{singleStudent.email}</h2>
            <h3>{singleStudent.phone}</h3>
            <p><strong>{singleStudent.gpa}</strong></p>
            <img src={singleStudent.imageUrl} />
        </div>
    )
}

export default SingleStudent