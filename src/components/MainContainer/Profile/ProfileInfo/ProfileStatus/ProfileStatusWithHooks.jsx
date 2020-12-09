import React, {useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = e => {
        setStatus(e.currentTarget.value)
    }

     return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status || '---'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={onStatusChange} className={s.statusInput} autoFocus={true}
                           onBlur={deactiveEditMode} value={status}/>
                </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks