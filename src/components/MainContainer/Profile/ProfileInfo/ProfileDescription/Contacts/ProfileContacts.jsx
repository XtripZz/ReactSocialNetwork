import React from 'react'
import s from './ProfileContacts.module.css'

const ProfileContacts = (props) => {

    let contacts = props.profile.contacts
    let contactsValue = []
    for (let key in contacts) {
        if (contacts[key] !== null) {
        contactsValue.push(`${key}: ${contacts[key]}`)
        }
    }
    let mapContacts = contactsValue.map(el => {
        return <p>{el}</p>
    })

    return <div>
        <button onClick={() => {
            props.contactsAreShown(false)
        }}>Hide
        </button>
        <div>{mapContacts}</div>
        <hr/>
        <div>
            <p>lookingForAJob: {
                props.profile.lookingForAJob
                    ? `yes`
                    : `no`
            }</p>
            <p>{props.profile.lookingForAJobDescription}</p>
        </div>
        <hr/>
    </div>
}

export default ProfileContacts