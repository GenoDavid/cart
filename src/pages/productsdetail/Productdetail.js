import React from 'react';
import "./Productdetail.css";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Productdetail = () => {
    const { Electronics } = useSelector(state => state.image)
    const params = useParams()
    const find = Electronics.find(items => items.id === parseInt(params.id))
    return (
        <div>
            <img src={find.ImgSrc} />
            <h3>{find.CategoryName}</h3>
            <h4>{find.Brand}</h4>
            <h1>{find.price}</h1>
        </div>
    )
}

export default Productdetail;
