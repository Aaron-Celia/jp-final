import React, { useEffect, useState } from 'react'
import { addStudent } from '../slices/addStudentSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateStore } from '../slices/studentsSlice';

const AddStudent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState('notValid');
    const dispatch = useDispatch();
    const updateFirstName = (event) => {
        const firstName = event.target.value;
        setFirstName(firstName);
    }
    const updateLastName = (event) => {
        const lastName = event.target.value;
        setLastName(lastName);
    }
    const updateEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
        email.includes('@' && '.com')
        || email.includes('@' && '.org')
        || email.includes('@' && '.gov')
        || email.includes('@' && '.net')
        ? setIsValidEmail('valid')
        : setIsValidEmail('notValid')
    }
    const addStudentUponSubmit = async (event) => {
        event.preventDefault();
        dispatch(addStudent({
            firstName: firstName,
            lastName: lastName,
            email: email
        }));
        // await axios.post('http://localhost:3000/students', {
        //     first: firstName,
        //     last: lastName,
        //     email: email
        // })
        // dispatch(updateStore({
        //     first: firstName,
        //     last: lastName,
        //     email: null,
        //     imageUrl: null,
        //     gpa: null,
        //     campusId: null
        // }))
    }
    const allStudents = useSelector(state => state.students);
    useEffect(() => {
    }, [allStudents])

    return (
        <div>
            <form onSubmit={async (e) => {
                e.preventDefault()
                addStudentUponSubmit();
                dispatch(updateStore({
                    first: firstName,
                    last: lastName,
                    email: email,
                    imageUrl: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png',
                    gpa: null,
                    campusId: null
                }))
                await axios.post('http://localhost:3000/students', {
                    first: firstName,
                    last: lastName,
                    email: email
                })
                }}>
                <label htmlFor='firstName'>First</label>
                <input
                    id='firstName'
                    value={firstName}
                    placeholder='First name...'
                    onChange={updateFirstName}
                    type='text'
                />
                <label htmlFor='lastName'>Last</label>
                <input
                    id='lastName'
                    value={lastName}
                    placeholder='Last name...'
                    onChange={updateLastName}
                    type='text'
                />
                <label className={isValidEmail} htmlFor='email'>Email</label>
                <input
                    className={isValidEmail}
                    id='email'
                    value={email}
                    placeholder='Email...'
                    onChange={updateEmail}
                    type='text'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddStudent