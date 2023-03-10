import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCampus from './AddCampus';
import axios from 'axios';

const Campuses = () => {
    const [campuses, setCampuses] = useState([]);
    const [responseData, setResponseData] = useState([]);
    const newCampuses = useSelector(state => state.newCampuses)
    const campusData = async () => {
        await axios.get('/campuses')
            .then(res => setResponseData(res.status))
        return await axios.get('/campuses').then(res => setCampuses(res.data));
    }
    useEffect(() => {
        campusData();
    }, [newCampuses, responseData])
    return (
        <div className='container'>
            {/* <div> */}
                <h1>All Campuses</h1>
            {/* </div> */}
            <div id='addCampusForm'>
                <h3>Add Campus:</h3>
                <AddCampus />
            </div>
            {
                campuses.length ? campuses.map(campus => {
                    return (
                        <div key={nanoid()} className='container'>
                            <button onClick={async () => {
                                await axios.delete(`/campuses/${campus.id}`)
                                    .then(res => setCampuses(res.data))

                            }}>X</button>
                            <h1>{<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>}</h1>
                            <img src={campus.imageUrl} />
                            <h3>Address: {campus.address}</h3>
                            <p>About: {campus.description}</p>
                        </div>
                    )
                }
                )
                    : <div><h2>Sorry, no campuses to display right now...</h2></div>
            }
        </div>
    )
}

export default Campuses