import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleStudent = () => {
    // const [studentId, setStudentId] = useState(0);
    const [student, setStudent] = useState([]);
    const params = useParams()

    const getAndSetData = async () => {
        const data = await axios.get(`http://localhost:3000/api/students/${params}`).then(res => setStudent(res.data));
        // const student = await axios.get(`/api/${params}`).then(res => res.data);
    }

    useEffect(() => {
        // setStudentId(params);
        getAndSetData();
    }, [])
    console.log(student)
    return (
        <div>
            <h1>Student Id:</h1>
            <h1>Student: {student}</h1>
        </div>
    )
}

export default SingleStudent