import React from 'react';
import ProfileAllFriends from './ProfileAllFriends/ProfileAllFriends';
import ProfileOnlineFriends from './ProfileOnlineFriends/ProfileOnlineFriends';
import s from './ProfileFriends.module.css';

const ProfileFriends = (props) => {
  return (
    <div className={s.pfBlock}>
      <ProfileAllFriends allFriends={props.profileFriends.allFriends} />
      <ProfileOnlineFriends onlineFriends={props.profileFriends.onlineFriends} />
    </div>
  );
};

export default ProfileFriends;
