import React, { useState } from 'react'
import { addStudent } from '../slices/addStudentSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const AddStudent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
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
    }
    const addStudentUponSubmit = async (event) => {
        event.preventDefault();
        dispatch(addStudent({
            firstName: firstName,
            lastName: lastName,
            email: email
        }));
        // make axios post request
        await axios.post('http://localhost:3000/students', {
                first: firstName,
                last: lastName,
                email: email
        })
    }
    return (
        <div>
            <form onSubmit={addStudentUponSubmit}>
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
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    value={email}
                    placeholder='Email...'
                    onChange={updateEmail}
                    type='text'
                />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default AddStudent