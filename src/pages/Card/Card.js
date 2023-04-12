import React from 'react'
import "./Card.css";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../feature/image';

const Card = () => {
    const { total, save } = useSelector(state => state.image)
    const dispatch = useDispatch
    return (
        <div>
            {
                save.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.price}</p>
                            <button >+</button>
                            <button >-</button>
                            <button onClick={() => dispatch(remove(item))}>delete</button>
                        </div>
                    )
                })
            }
            <h1>Total:{total}</h1>
        </div>
    )
}

export default Card;
