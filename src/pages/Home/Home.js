import React from 'react'
import "./Home.css";
import Navbar from '../../component/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <h1>hello</h1>


        </div>
    )
}

export default Home;
