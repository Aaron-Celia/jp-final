import React, { useEffect, useState } from 'react';
// import { setState, selectAllCampuses } from '../slices/campusesSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';

const Campuses = () => {
    const [campuses, setCampuses] = useState([]);
    // const dispatch = useDispatch();
    const getAllCampuses = async () => {
        const data = await axios.get('http://localhost:3000/api/campuses')
            .then(res => setCampuses(res.data));
    }
    // i think i need to pass the state in the redux store in campus slice into the array of the second parameter of use effect so that when it changes, like when a school or student is added, then it re-renders with the updated information since the use effect would run again and inside the use effect the function that gets the info and sets the state that we are mapping to the screen is being called
    useEffect(() => {
        getAllCampuses();
    }, []); // <= right here
    // const allCampuses = useSelector(selectAllCampuses);
    // console.log('allCampuses', allCampuses);
    return (
        <div>
            {campuses.map(campus => {
                return (
                    <div key={nanoid()} className='campusDiv'>
                        <h1>{campus.name}</h1>
                        <img src={campus.imageUrl} />
                        <h3>Address: {campus.address}</h3>
                        <p>About: {campus.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Campuses