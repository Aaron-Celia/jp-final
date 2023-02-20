import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Campuses from './Campuses';
import Home from './Home';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Students from './Students';

const Main = () => {
    return (
        <div>
            <nav id='navBar'>
                <Link className='homeLink' to='/'>Home</Link>
                <Link className='campusesLink' to='/campuses'>Campuses</Link>
                <Link className='studentsLink' to='/students'>Students</Link>
            </nav>
            <div className='box'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/campuses' element={<Campuses />} />
                    <Route path='/students' element={<Students />} />
                    <Route path='/students/:studentId/*' element={<SingleStudent />} />
                    <Route path='/campuses/:campusId/*' element={<SingleCampus />} />
                </Routes>
            </div>
        </div>
    );
};

export default Main;