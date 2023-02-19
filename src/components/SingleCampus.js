import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleCampus = () => {
    const [singleCampus, setSingleCampus] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    // const [filteredStudents, setFilteredStudents] = useState([]);
    const params = useParams();
    const getCampus = async () => {
        await axios.get(`http://localhost:3000/campuses/${params.campusId}`).then(res => setSingleCampus(res.data))
    }
    const getStudents = async () => {
        await axios.get('http://localhost:3000/students')
            .then(res => setAllStudents(res.data))
    }
    useEffect(() => {
        getCampus();
        getStudents();
    }, []);
    return (
        <div className='container'>
            <div>
                <h1>{singleCampus.name}</h1>
                <h2>{singleCampus.address}</h2>
                <p><strong>{singleCampus.description}</strong></p>
                <img src={singleCampus.imageUrl} />
                <h2>Students attending:</h2>
                {allStudents.length ? allStudents.map(stud => {
                    if (stud.id === singleCampus.id) {
                        return <h3 key={nanoid()}>{stud.first + ' ' + stud.last}</h3>
                    }
                })
                    : <h3>No students are enrolled here...</h3>
                }
            </div>
        </div>
    )
}

export default SingleCampus