import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import Campuses from './Campuses';

const SingleCampus = () => {
    const [singleCampus, setSingleCampus] = useState([]);
    // const params = useParams(); // use params is not working
    // const getCampus = async () => {
    //     await axios.get(`http://localhost:3000/api/campuses/${params.id}`).then(res => setSingleCampus(res.data))
    // }

    useEffect(() => {
        fetch(`http://localHost:3000/api/campuses/${params.id}`)
        .then(res => setSingleCampus(res.data));
    }, []);
    return (
        <div>{singleCampus.name}</div>
    )
}

export default SingleCampus