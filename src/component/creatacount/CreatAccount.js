import React from 'react'
import classes from './CreatAccount.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { login, open } from '../../feature/user'

const CreatAccount = () => {
    const { isopen } = useSelector(state => state.editor)
    const dispatch = useDispatch()
    return (
        <div className={classes.formbox}>
            <form className={classes.form}>
                <span className={classes.subtitle}>Create a free account with your email.</span>
                <div className={classes.formcontainer}>
                    <input type="text" className={classes.input} placeholder="Full Name" />
                    <input type="email" className={classes.input} placeholder="Email" />
                    <input type="password" className={classes.input} placeholder="Password" />
                </div>
                <button className={classes.btn} onClick={() => { dispatch(login(true)) }}>Sign up</button>
            </form>
            <div className={classes.formsection}>
                <p className={classes.acount}>Have an account? </p>
                <p className={classes.log} onClick={() => dispatch(open(false))}> Log in</p>
            </div>
        </div>
    )
}
export default CreatAccount;
