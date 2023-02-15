import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([]);
    const [studentCampus, setStudentCampus] = useState(0);
    const fetchStudentsSetState = async () => {
        return axios.get('http://localhost:3000/api/students').then(res => setStudents(res.data));
    }
    const params = useParams();
    // const getStudentsCampus = async () => {
    //     await axios.get(`http://localhost:3000/api/students/${params}`).then(res => setStudentCampus(res.data)) // is .id correct? is that how you get the req.params?
    // }
    // do i need to add any thing into the use effect array so that it is looking for the click?
    useEffect(() => {
        // getStudentsCampus();
        fetchStudentsSetState();
        setStudentCampus(params);
    }, []) // will indeed need the redux state inside that array so that the students re-render everytime data is added to the database and the redux state needs to be set to that data that is retrieved from the data base via a thunk or an axios call or somehow.
  return (
    <div>{students.map(stud => {
        return (
            <div key={nanoid()} className='studentDiv'>
                <h2>{stud.first + ' ' + stud.last}</h2>
                <img src={stud.imageUrl}/>
                <p>Email: {stud.email}</p>
                <p>Gpa: {stud.gpa}</p>
                <h3>Campus: <a href={`http://localhost:3000/students/${stud.id}`}>{stud.campusId}</a></h3> 
            </div>                  //^^^^^^^^^^^^^^^^^^^^^^^^ this route doesnt seem to go back to the Main.js file to see if any routes match the url, it only runs the raw url and not from the home page, which theres something going on in my express routers or somewhere in express where youre fine if you start navigating the site from the home page and only use the back button and forward button it works. but if you refresh a page thats not the home screeen or paste a url directly it doesn't get rendered correctly.
        )
    })}</div>
  )
}

export default Students