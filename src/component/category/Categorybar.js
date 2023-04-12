import React from 'react'
import classes from './Categorybar.module.css'

const Categorybar = ({ imagesrc, categoryname }) => {
    return (
        <div className={classes.categorybar}>
            <div className={classes.categorybarimg}>
                <img className={classes.image} src={imagesrc} alt='imagecat' />
            </div>
            <p className={classes.categorybarname}>{categoryname}</p>
        </div>
    )
}

export default Categorybar;
