import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import image from '../../image/log.png'
import { FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ImCart } from 'react-icons/im'
import Login from '../login/Login';
import CreatAccount from '../creatacount/CreatAccount';

const Navbar = () => {

    const [isOpen, setIsopen] = useState(false)

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar'>
                    <Link to={'/'}>
                        <img src={image} alt='amazonlog' className='logo' />
                    </Link>
                    <div className='navbar-search'>
                        <input type='text' placeholder='products,brands,ect' className='navbar-srechbox' />
                        <button className='search-btn'><FaSearch /></button>
                    </div>
                    <button className='login-btn' onClick={() => setIsopen(true)}>Login</button >

                    <div className='navbar-seller'>
                        <h3>Become a seller</h3>
                    </div>

                    <div className='serach-more'>
                        <h3>more
                            <i className='more-down'>
                                <MdKeyboardArrowDown />
                            </i>
                        </h3>
                    </div>

                    <div className='navbar-cart'>
                        <div className='cart-icon'>
                            <ImCart />
                            <Link to={'Cart'} className='cart'>Cart</Link>
                        </div>
                    </div>
                </div>
                <Login isOpen={isOpen} setIsopen={setIsopen} />
                <CreatAccount isOpen={isOpen} setIsopen={setIsopen} />
            </div >
        </>
    )
}

export default Navbar
