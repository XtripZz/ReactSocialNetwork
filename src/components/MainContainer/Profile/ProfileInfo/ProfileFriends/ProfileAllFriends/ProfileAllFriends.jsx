import React from 'react';
import AllFriends from './AllFriends/AllFriends';
import s from './ProfileAllFriends.module.css';

const ProfileAllFriends = (props) => {

  let allFriends =
    props.allFriends.map(af => <AllFriends
      id={af.id}
      name={af.name}
      key={af.id}
    />)

  return (
    <div className={s.profileAllFriends}>
      <h5>All friends</h5>
      <div className={s.paf}>
        {allFriends}
      </div>
    </div>
  );
};

export default ProfileAllFriends;
