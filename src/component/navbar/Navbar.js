import React, { useState } from 'react';
import classes from './navbar.module.css'
import { Link } from 'react-router-dom';
import image from '../../image/log.png'
import { FaSearch } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ImCart } from 'react-icons/im'
import { useDispatch } from 'react-redux';
import { login } from '../../feature/user';

const Navbar = () => {

    const dispatch = useDispatch()

    return (
        <>
            <div className={classes.navbarcontainer}>
                <div className={classes.navbar}>
                    <Link to={'/'}>
                        <img src={image} alt='amazonlog' className={classes.logo} />
                    </Link>
                    <div className={classes.navbarsearch}>
                        <input type='text' placeholder='products,brands,ect' className={classes.navbarsrechbox} />
                        <button className={classes.searchbtn}><FaSearch /></button>
                    </div>

                    <div className={classes.navbarseller}>
                        <h3>Become a seller</h3>
                    </div>

                    <div className={classes.serachmore}>
                        <h3>more
                            <i className={classes.moredown}>
                                <MdKeyboardArrowDown />
                            </i>
                        </h3>
                    </div>

                    <div className={classes.navbarcart}>
                        <div className={classes.carticon}>
                            <ImCart />
                            <Link to={'card'} className={classes.cart}>Cart</Link>
                        </div>
                    </div>
                    <button className={classes.loginbtn} onClick={() => dispatch(login(false))}>Logout</button >
                </div>
            </div >
        </>
    )
}

export default Navbar
