import React, { useState } from 'react'
import './Login.css'
import { RxCross2 } from "react-icons/rx";
import { CiLock } from "react-icons/ci";

const Login = ({ isOpen, setIsopen }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);


    return isOpen ? (
        <div className='overlay'>
            <div className='loginmodel'>
                <div className='left'>
                    <div className='left-container'>
                        {
                            login ? (
                                <p className='login-singup' onClick={() => setLogin(false)}>Login</p>
                            ) : (
                                <p className='login-singup' onClick={() => setLogin(true)}>Register</p>
                            )
                        }
                    </div>

                    {login ? (<div>
                        <input type='email' placeholder='@ Email address' className='email-input' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder=' Password' className='password-input' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p className='forgot'>Forgot Password?</p>
                    </div>) : (<>
                        <h1 style={{ color: 'black' }}>Say Hello</h1>
                    </>)

                    }

                    {login ? (
                        <button className='loginbtn'>Login</button>
                    ) : (
                        <button className='loginbtn'>Singup</button>
                    )}

                    <p className='tremsandcon'>By Continusaly,You'r agree to Amazon....
                        <br />  <span style={{ color: 'orange' }}> Trems And Condition </span>And
                        <span style={{ color: 'orange' }}> Privacy Policy</span>
                    </p>
                </div>
                <div className='close' onClick={() => setIsopen(false)}>
                    <RxCross2 />
                </div>
            </div>
        </div >
    ) : (<></>)


};

export default Login
