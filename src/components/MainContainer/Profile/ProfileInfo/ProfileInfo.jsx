import React from 'react';
import ProfileFriends from './ProfileFriends/ProfileFriends';
import s from './ProfileInfo.module.css';
import Preloader from "../../Friends/SearchUsers/Users/Preloader/Preloader";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, ...props}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (

        <div className={s.descriptionBlock}>
            <img id={s.headBackground}
                 src="https://cs8.pikabu.ru/post_img/big/2017/12/04/12/1512419080184287295.jpg"
                 width="1050"
                 height="200"
            />
            <div className={s.profileAvaAndDescription}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <ProfileDescription profile={profile} isShowed={props.isShowed}
                                    contactsAreShown={props.contactsAreShown}/>
            </div>
            <ProfileFriends class={s.profileFriends} profileFriends={props.profileFriends}/>
        </div>
    );
};

export default ProfileInfo;
