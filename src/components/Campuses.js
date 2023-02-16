
// import { setState, selectAllCampuses } from '../slices/campusesSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { nanoid } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCampus from './AddCampus';
// import { getCampusesThunk, getCampusesState, getStateStatus, getStateErrorType } from '../slices/campusesSlice';


const Campuses = () => {
    const [campuses, setCampuses] = useState([]);
    const [status, setStatus] = useState(0);
    const [responseData, setResponseData] = useState([]);
    // const dispatch = useDispatch();
    const newCampuses = useSelector(state => state.newCampuses)
    const data = async () => {
        await axios.get('http://localhost:3000/campuses')
            .then(res => setResponseData(res.status))
        return await axios.get('http://localhost:3000/campuses').then(res => setCampuses(res.data));
    }
    // const removeCampus = async () => {
    //     await axios.delete('http://localhost:3000/campuses', {
    //         id: 
    //     })
// }
useEffect(() => {
    const schools = data();
    setCampuses(schools);
}, [newCampuses, responseData])
// const campuses = useSelector(getCampusesState);
console.log('campuses', campuses);
return (
    <div>
        <h1>All Campuses</h1>
        <div className='addCampusFormDiv'>
            <h3>Add Campus:</h3>
            <AddCampus />
        </div>
        {campuses.length ? campuses.map(campus => {
            return (
                <div key={nanoid()} className='campusDiv'>
                    <button onClick={async () => {
                        await axios.delete('http://localhost:3000/campuses', {
                            id: campus.id
                        })
                    }}>X</button>
                    <h1>{<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>}</h1>
                    <img src={campus.imageUrl} />
                    <h3>Address: {campus.address}</h3>
                    <p>About: {campus.description}</p>
                </div>
            )
        }
        ) : null}
    </div>
)
    }

export default Campuses