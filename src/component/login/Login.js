import React, { useState } from 'react'
import classes from './Login.module.css'
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
        <div className={classes.overlay}>
            <div className={classes.loginmodel}>
                <div className={classes.left}>
                    <div className={classes.leftcontainer}>

                        <p className={classes.loginsingup} onClick={() => dispatch(open(true))}>Register</p>

                        <p className={classes.loginsingup} onClick={() => dispatch(open(false))}>Login</p>

                    </div>


                    {
                        isopen ? (<CreatAccount />) : (<><input type='email' placeholder='@ Email address' className={classes.emailinput} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' placeholder=' Password' className={classes.passwordinput} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p className={classes.forgot}>Forgot Password?</p></>)
                    }

                    {
                        isopen ? (<></>) : (
                            <button type='submit' className={classes.onclick} onClick={() => dispatch(login(true))}>
                                Login
                                <div class={classes.arrowwrapper}>
                                    <div class={classes.arrow}></div>
                                </div>
                            </button>
                        )
                    }

                    <p className={classes.tremsandcon}>By Continusaly,You'r agree to Amazon....
                        <br />  <span style={{ color: 'orange' }}> Trems And Condition </span>And
                        <span style={{ color: 'orange' }}> Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div >
    )


};

export default Login
