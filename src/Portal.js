import React from 'react'
import Navbar from './component/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Portal = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Portal;
