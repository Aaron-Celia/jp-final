import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleCampus = (props) => {
    const [singleCampus, setSingleCampus] = useState([]);
    const params = useParams();
    const getCampus = async () => {
        await axios.get(`http://localhost:3000/campuses/${params.campusId}`).then(res => setSingleCampus(res.data))
    }
    useEffect(() => {
        getCampus();
    }, []);
    return (
        <div>
            <h1>{singleCampus.name}</h1>
            <h2>{singleCampus.address}</h2>
            <p><strong>{singleCampus.description}</strong></p>
            <img src={singleCampus.imageUrl} />
        </div>
    )
}

export default SingleCampus