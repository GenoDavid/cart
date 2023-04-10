import React from 'react'
import './CreatAccount.css'
import { useDispatch, useSelector } from 'react-redux'
import { login, open } from '../../feature/user'

const CreatAccount = () => {
    const { isopen } = useSelector(state => state.editor)
    const dispatch = useDispatch()
    return (
        <div className="form-box">
            <form className="form">
                <span className="subtitle">Create a free account with your email.</span>
                <div className="form-container">
                    <input type="text" className="input" placeholder="Full Name" />
                    <input type="email" className="input" placeholder="Email" />
                    <input type="password" className="input" placeholder="Password" />
                </div>
                <button className='btn' onClick={() => { dispatch(login(true)) }}>Sign up</button>
            </form>
            <div className="form-section">
                <p className='acount'>Have an account? </p>
                <p className='log' onClick={() => dispatch(open(false))}> Log in</p>
            </div>
        </div>
    )
}
export default CreatAccount;
