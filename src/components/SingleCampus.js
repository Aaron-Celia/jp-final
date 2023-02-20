import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCampus = () => {
    const [singleCampus, setSingleCampus] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const { campusId } = useParams();
    const getCampus = async () => {
        await axios.get(`http://localhost:3000/campuses/${campusId}`).then(res => setSingleCampus(res.data))
    }
    const getStudents = async () => {
        await axios.get('http://localhost:3000/students')
            .then(res => setAllStudents(res.data))
    }
    const updateCampus = async () => {
        await axios.put(`http://localhost:3000/campuses/${campusId}`, {
            name,
            imageUrl,
            address,
            description
        })
    }
    useEffect(() => {
        getCampus();
        getStudents();
        if (submitted) {
            updateCampus();
            setSubmitted(false);
        }
    }, [submitted]);
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
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true)
                }}>
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        value={name}
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor='imageUrl'>ImageUrl</label>
                    <input
                        id='imageUrl'
                        value={imageUrl}
                        type='text'
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <label htmlFor='address'>Address</label>
                    <input
                        id='address'
                        value={address}
                        type='text'
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <label htmlFor='description'>Description</label>
                    <input
                        id='description'
                        value={description}
                        type='text'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button>Done</button>
                </form>
            </div>
        </div>
    )
}

export default SingleCampus