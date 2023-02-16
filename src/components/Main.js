import React from 'react';
/* 
    This is you entry point for your routes
*/
import { Route, Routes, Link, Switch, useParams } from 'react-router-dom';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Students from './Students';

const Main = () => {
    // const params = useParams();
    return (
        <div>
            <nav className='navBar'>
                <Link to='/campuses'>Campuses</Link>
                <Link to='/students'>Students</Link>
            </nav>
            <Routes>
                <Route path='/campuses' element={<Campuses />} />
                <Route path='/students' element={<Students />} />
                <Route path='/students/:studentId' element={<SingleStudent />} />
                <Route path='/campuses/:campusId' element={<SingleCampus />} />
                {/* <Route path={`/students/:studentId`} element={<SingleStudent />}/>
            <Route path={'/campuses/:campusesId'} element={<SingleCampus />}/> */}
            </Routes>
        </div>
    );
};

export default Main;