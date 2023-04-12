import React from 'react';
import "./Productdetail.css";
import { useParams } from 'react-router-dom';
import { logDOM } from '@testing-library/react';

const Productdetail = () => {
    const params = useParams()
    console.log(params.price);
    return (
        <div>
            Productdetail
        </div>
    )
}

export default Productdetail;
