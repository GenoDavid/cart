import React from 'react'
import classes from './Productcarousel.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { savecart } from '../../feature/image'
import { Link } from 'react-router-dom'


const Productcarousel = ({ all }) => {
    const dispatch = useDispatch()
    // console.log(all);
    return (
        <div className={classes.product}>
            <div className={classes.category}>
                <Link to={`productdetail/${all.id}`}>
                    <img className={classes.image} src={all.ImgSrc} />
                </Link >
            </div>
            <div className={classes.tittle}>
                <p className={classes.producttittle}>{all.categoryname}</p>
                <p className={classes.money}>price:{all.price}</p>
            </div>
            <div className={classes.productbrand}>
                <h1 className={classes.brandtittle}>{all.brand}</h1>
                <p className={classes.shope}>Shope Now</p>
                <button className={classes.btn} onClick={() => dispatch(savecart(all))}> Add to Cart</button>
                <button> </button>
            </div>
        </div>
    )
}
export default Productcarousel;
