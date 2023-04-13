import React from 'react'
import "./Card.css";
import { useDispatch, useSelector } from 'react-redux';
import { decrese, increase, remove } from '../../feature/image';


const Card = () => {
    const { total, save } = useSelector(state => state.image)
    const dispatch = useDispatch()
    return (
        <div>
            {
                save.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.price}</p>
                            <button onClick={() => dispatch(increase(item))}>+</button>
                            <button disabled={item.qu === 1 ? true : false} onClick={() => dispatch(decrese(item))}>-</button>
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
