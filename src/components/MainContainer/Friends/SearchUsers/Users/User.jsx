import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../../../../../src/assets/images/user.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    let u = user

    return <div className={s.container} key={u.userId}>
        <div className={s.user}>
            <NavLink to={`/profile/${u.id}`} className={s.avatar}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.avatar}/>
            </NavLink>
            {
                u.followed
                    ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                        unfollow(u.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                        follow(u.id)
                    }}>Follow</button>
            }
        </div>
        <div className={s.userInfo}>
            <div>
                <h3>{u.name}</h3>
                <p>{u.status}</p>
            </div>
            <div>
                <h3>{'u.userLocation.country'},<br/>{'u.userLocation.cityName'}</h3>
            </div>
        </div>
    </div>
}

export default User