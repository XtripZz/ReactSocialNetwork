import React from 'react'
import s from './AuthProfileLink.module.css'
import {NavLink} from "react-router-dom";

const AuthProfileLink = (props) => {
    return <div className={s.authProfileLinkMainContainer}>
        <div className={s.authProfileLinkContainer}>
        <NavLink to='/profile'>
            {props.login}
        </NavLink>
        <button onClick={props.logout}>Log Out</button>
        </div>
    </div>
}

export default AuthProfileLink