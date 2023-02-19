import React, { useEffect, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentsToStore, getStudentsAsync, selectAllStudents } from '../slices/studentsSlice';
import AddStudent from './AddStudent';
import axios from 'axios';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

// const Students = () => {
//     const [students, setStudents] = useState([]);
//     const [campuses, setCampuses] = useState([]);
//     const dispatch = useDispatch();
//     const newStudents = useSelector(state => state.newStudents);
//     const allStudents = useSelector(state => state.students);
//     const getCampuses = async () => {
//         await axios.get('http://localhost:3000/campuses')
//             .then(res => setCampuses(res.data));
//     }
//     useEffect(() => {
//         dispatch(getStudentsAsync());
//         getCampuses();
//     }, [newStudents, students]);
//     return (
//         <div className='container'>
//             <div>
//                 <h1>All Students</h1>
//             </div>
//             <div className='addStudentFormDiv'>
//                 <h3>Add Student:</h3>
//                 <AddStudent />
//             </div>
//             {allStudents.length ? allStudents.map(stud => {
//                 return (
//                     <div key={nanoid()} id='container'>
//                         <button onClick={async () => {
//                             await axios.delete(`http://localhost:3000/students/${stud.id}`)
//                                 .then(res => setStudents(res.data))
//                         }}>X</button>
//                         <h2><Link to={`/students/${stud.id}`}>{stud.first + ' ' + stud.last}</Link></h2>
//                         <img src={stud.imageUrl} />
//                         <p>Email: {stud.email}</p>
//                         <p>Gpa: {stud.gpa}</p>
//                         <h2>Campus: <Link to={`/campuses/${stud.campusId}`}>{
//                             console.log('campuses.length: ', campuses.length)}{
//                                 campuses.length ? campuses.map(campus => {
//                                     stud.campusId === campus.id ? <h2>{campus.name}</h2> : null
//                                 })
//                                     : null
//                             }</Link></h2>
//                     </div>
//                 )

//             })
//                 : <div><h2>Sorry, no students to display right now...</h2></div>
//             }
//         </div>
//     )
// }

// export default Students







// const Students = () => {
//     const [students, setStudents] = useState([]);
//     const [campuses, setCampuses] = useState([]);
//     const dispatch = useDispatch();
//     const newStudents = useSelector(state => state.students);
//     const getStudents = async () => {
//         await axios.get('http://localhost:3000/students')
//         .then(res => {
//             setStudents(res.data);
//             dispatch(addStudentsToStore(res.data));
//         })
//     };
//     const getCampuses = async () => {
//         await axios.get('http://localhost:3000/campuses')
//         .then(res => setCampuses(res.data));
//     }
//     const deleteStudent = async (id) => {
//         await axios.delete(`http://localhost:3000/students/${id}`)
//         .then(res => setStudents(res.data));
//     }
//     useEffect(() => {
//             getStudents();
//             getCampuses();
//     }, [newStudents, students])
//     return (
//         <div className='container'>
//             <div>
//                 <h1>All Students</h1>
//             </div>
//             <div className='addStudentFormDiv'>
//                 <h3>Add Student:</h3>
//                 <AddStudent />
//             </div>
//             {students.length ? students.map(stud => {
//                 return (
//                     <div key={nanoid()} id='container'>
//                         <button onClick={() => {
//                             deleteStudent(stud.id);
//                         }}>X</button>
//                         <h2><Link to={`/students/${stud.id}`}>{stud.first + ' ' + stud.last}</Link></h2>
//                         <img src={stud.imageUrl} />
//                         <p>Email: {stud.email}</p>
//                         <p>Gpa: {stud.gpa}</p>
//                         <h2>Campus: <Link to={`/campuses/${stud.campusId}`}>{
//                                 campuses.length ? campuses.map(campus => {
//                                     if(stud.campusId === campus.id){
//                                         return <h2 key={nanoid()}>{campus.name}</h2>
//                                     }
//                                 })
//                                     : null
//                             }</Link></h2>
//                     </div>
//                 )

//             })
//                 : <div><h2>Sorry, no students to display right now...</h2></div>
//             }
//         </div>
//     )
// }

// export default Students


// async () => {
//     await axios.delete(`http://localhost:3000/students/${stud.id}`)
//         .then(res => setStudents(res.data))
// }



const Students = () => {
    const [campuses, setCampuses] = useState([]);
    const allStudents = useSelector(selectAllStudents);
    const newStudents = useSelector(state => state.newStudents)
    // const campuses = useSelector(state => state.campuses);
    const getCampuses = async () => {
        await axios.get('http://localhost:3000/campuses').then(res => setCampuses(res.data));
    }
    const dispatch = useDispatch()
    console.log(allStudents);
    useEffect(() => {
        getCampuses();
        dispatch(getStudentsAsync());
    }, [newStudents]);
    return (
        <div key={nanoid()} className='container'>
            {/* <div> */}
                <h1 key={nanoid()}>All Students</h1>
                <AddStudent />
                {allStudents.length ? allStudents.map(student => {
                    return (
                        <div key={nanoid()}>
                            <button onClick={async () => {
                                await axios.delete(`http://localhost:3000/students/${student.id}`)
                                .then(res => dispatch(getStudentsAsync()))
                            }}>X</button>
                            <h1 key={nanoid()}><Link to={`/students/${student.id}`}>{student.first + ' ' + student.last}</Link></h1>
                            {campuses.length ? campuses.map(campus => {
                                if(campus.id === student.id){
                                    return <h2 key={nanoid()}>Attends: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h2>
                                }
                            })
                        : <h2 key={nanoid()}>Not currently enrolled</h2>
                        }
                        <img key={nanoid()} src={student.imageUrl}/>
                        <h3 key={nanoid()}>{student.email}</h3>
                        <h5 key={nanoid()}>{student.gpa}</h5>
                        </div>
                    )
                })
            : <h2 key={nanoid()}>Sorry, no students to display right now...</h2>
            }
            {/* </div> */}
        </div>
    )
}

export default Students