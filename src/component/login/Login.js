import React, { useState } from 'react'
import './Login.css'
import { RxCross2 } from "react-icons/rx";
import { CiLock } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { login, open } from '../../feature/user';
import CreatAccount from '../creatacount/CreatAccount';

const Login = () => {

    const { isopen } = useSelector((state) => state.editor);
    const dispatch = useDispatch();
    console.log(isopen);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className='overlay'>
            <div className='loginmodel'>
                <div className='left'>
                    <div className='left-container'>

                        <p className='login-singup' onClick={() => dispatch(open(true))}>Register</p>

                        <p className='login-singup' onClick={() => dispatch(open(false))}>Login</p>

                    </div>


                    {
                        isopen ? (<CreatAccount />) : (<><input type='email' placeholder='@ Email address' className='email-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder=' Password' className='password-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p className='forgot'>Forgot Password?</p></>)
                    }


                    {
                        isopen ? (<></>) : (
                            <button className='onclick' onClick={() => dispatch(login(true))}>
                                Login
                                <div class="arrow-wrapper">
                                    <div class="arrow"></div>
                                </div>
                            </button>
                        )
                    }

                    <p className='tremsandcon'>By Continusaly,You'r agree to Amazon....
                        <br />  <span style={{ color: 'orange' }}> Trems And Condition </span>And
                        <span style={{ color: 'orange' }}> Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div >
    )


};

export default Login
