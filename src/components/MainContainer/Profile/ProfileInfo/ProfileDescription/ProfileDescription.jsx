import React from 'react'
import s from './ProfileDescription.module.css'
import ProfileContacts from "./Contacts/ProfileContacts";

const ProfileDescription = (props) => {
    return <div>
        <div className={s.aboutUser}>
            <h3>{props.profile.fullName}</h3>
            <p>{props.profile.aboutMe}</p>
            <hr/>
        </div>
        <div className={s.userContacts}>
            {
                props.isShowed
                    ? <ProfileContacts contactsAreShown={props.contactsAreShown} profile={props.profile} />


                    : <button onClick={() => {
                        props.contactsAreShown(true)
                    }}>Show</button>
            }
        </div>
    </div>
}

export default ProfileDescription;