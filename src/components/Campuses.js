import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import AddCampus from './AddCampus';
import { getCampusesAsync, getCampusesState } from '../slices/campusesSlice';
import axios from 'axios';
import SingleCampus from './SingleCampus';

// import { selectAllStudents } from '../slices/studentsSlice';

const Campuses = () => {
    const [campuses, setCampuses] = useState([]);
    const [responseData, setResponseData] = useState([]);
    const newCampuses = useSelector(state => state.newCampuses)
    const campusData = async () => {
        await axios.get('http://localhost:3000/campuses')
            .then(res => setResponseData(res.status))
        return await axios.get('http://localhost:3000/campuses').then(res => setCampuses(res.data));
    }
    useEffect(() => {
        campusData();
    }, [newCampuses, responseData])
    return (
        <div className='container'>
            <div>
                <h1>All Campuses</h1>
            </div>
            <div id='addCampusForm'>
                <h3>Add Campus:</h3>
                <AddCampus />
            </div>
            {
                campuses.length ? campuses.map(campus => {
                    return (
                        <div key={nanoid()} className='container'>
                            <button onClick={async () => {
                                await axios.delete(`http://localhost:3000/campuses/${campus.id}`)
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













// const Campuses = () => {
//     const dispatch = useDispatch();
//     const getData = () => {
//         dispatch(getCampusesAsync());
//     }
//     useEffect(() => {
//         getData();
//         // dispatch(getCampusesAsync())
//     }, [
//         campuses,
//          newCampuses
//         ]);
//     const newCampuses = useSelector(state => state.newCampuses);
//     const campuses = useSelector(getCampusesState)
//     return (
//         <div key={nanoid()} className='container'>
//             <div>
//                 <h1>All Campuses</h1>
//             </div>
//             <div id='addCampusForm'>
//                 <h3>Add Campus:</h3>
//                 <AddCampus />
//             </div>
//             {campuses.length ? campuses.map(campus => {
//                 return (
//                     <div key={nanoid()} className='container'>
//                         <button onClick={async () => {
//                             await axios.delete(`http://localhost:3000/campuses/${campus.id}`)
//                             .then(dispatch(getCampusesAsync()))
//                         }}>X</button>
//                         <h1 key={nanoid()}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h1>
//                         <p className='smallFont'>dev tools have to be open for these links and buttons to work, not sure why..</p>
//                         <img src={campus.imageUrl} />
//                         <h3>Address: {campus.address}</h3>
//                         <p>{campus.description}</p>
//                     </div>
//                 )
//             }
//             )
//                 : <div><h2>Sorry, no campuses to display right now...</h2></div>
//             }
//         </div>
//     )
// }

// export default Campuses
