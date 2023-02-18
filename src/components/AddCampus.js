import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCampus } from '../slices/addCampusSlice';
import { useEffect } from 'react';
import { updateCampusesStore } from '../slices/campusesSlice';

const AddCampus = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
    const updateName = (event) => {
        const name = event.target.value;
        setName(name);
    }
    const updateAddress = (event) => {
        const address = event.target.value;
        setAddress(address);
    }
    const addCampusUponSubmit = async (event) => {
        event.preventDefault();
        dispatch(addCampus({
            name: name,
            address: address
        }));
        await axios.post('http://localhost:3000/campuses', {
            name,
            address
        })
        dispatch(updateCampusesStore({
            name: name,
            imageUrl: null,
            address: address,
            description: null
        }))
    }
    const allCampuses = useSelector(state => state.campuses)
    useEffect(() => {
    }, [allCampuses]);

    return (
        <div>
            <form onSubmit={addCampusUponSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    value={name}
                    placeholder='Name...'
                    onChange={updateName}
                    type='text'
                />
                <label htmlFor='address'>Address</label>
                <input
                    id='address'
                    value={address}
                    placeholder='Address...'
                    onChange={updateAddress}
                    type='text'
                />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default AddCampus