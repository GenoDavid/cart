import React from 'react'
import "./Card.css";
import { useSelector } from 'react-redux';

const Card = () => {
    const { total } = useSelector(state => state.image)
    return (
        <div>
            <h1>{total}</h1>
        </div>
    )
}

export default Card;
