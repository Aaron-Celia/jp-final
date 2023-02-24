import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const SingleStudent = () => {
    const [singleStudent, setSingleStudent] = useState([]);
    const [campuses, setCampuses] = useState([])
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [gpa, setGpa] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const getStudent = async () => {
        return await axios.get(`/students/${params.studentId}`)
            .then(res => setSingleStudent(res.data))
    }
    const getCampuses = async () => {
        await axios.get('/campuses')
            .then(res => setCampuses(res.data))
    }
    const updateStudent = async () => {
        await axios.put(`/students/${params.studentId}`, {
            first: first,
            last: last,
            email: email,
            imageUrl: imageUrl,
            gpa: gpa
        }).then(res => dispatch(getStudentsAsync(res.data)));
        setSubmitted(true);
    }
    useEffect(() => {
        getCampuses();
        getStudent();
        if (submitted) {
            updateStudent();
            setSubmitted(false);
        }
    }, [submitted]);
    return (
        <div className='container'>
            <div>
                <h1>{singleStudent.first + ' ' + singleStudent.last}</h1>
                {campuses.map(campus => {
                    if (campus.id === singleStudent.id) {
                        return <h2 key={nanoid()}>Attends: {campus.name}</h2>
                    }
                })}
                <h2>{singleStudent.email}</h2>
                <h3>{singleStudent.phone}</h3>
                <p><strong>{singleStudent.gpa}</strong></p>
                <img src={singleStudent.imageUrl} />
            </div>
            <div>
                <h3>Update Student Info</h3>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true);
                }}>
                    <label htmlFor='first'>First name</label>
                    <input
                        id='first'
                        type='text'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                    />
                    <label htmlFor='last'>Last name</label>
                    <input
                        id='last'
                        type='text'
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='imageUrl'>Image URL</label>
                    <input
                        id='imageUrl'
                        type='text'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <label htmlFor='gpa'>Gpa</label>
                    <input
                        id='gpa'
                        type='text'
                        value={gpa}
                        onChange={(e) => setGpa(e.target.value)}
                    />
                    <button type='submit'>Done</button>
                </form>
            </div>
        </div>
    )
}

export default SingleStudent