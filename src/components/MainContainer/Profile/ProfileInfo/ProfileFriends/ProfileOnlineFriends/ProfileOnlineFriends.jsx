import React from 'react';
import OnlineFriends from './OnlineFriends/OnlineFriends';
import s from './ProfileAllFriends.module.css';

const ProfileOnlineFriends = (props) => {

    let onlineFriends =
        props.onlineFriends.map(of => <OnlineFriends
            id={of.id}
            name={of.name}
            key={of.id}/>)

    return (
        <div className={s.onlineFriends}>
            <h5>Online friends</h5>
            <div className={s.pof}>
                {onlineFriends}
            </div>
        </div>
    );
};

export default ProfileOnlineFriends;
