import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './OnlineFriends.module.css';

const OnlineFriends = (props) => {

  let path = `/profile/${props.id}`;

  return (
    <div>
      <NavLink className={s.onlineFriends} to={path}>
        <img
          src='https://sun9-42.userapi.com/c857132/v857132036/16dae6/n3kVjOxUgn8.jpg' width='50' height='50'/>
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default OnlineFriends;
