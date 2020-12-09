import React from 'react';
import s from './AllFriends.module.css';
import {NavLink} from 'react-router-dom';

const AllFriends = (props) => {

  let path = `/profile/${props.id}`;

  return (
    <div>
      <NavLink className={s.allFriends} to={path}>
      <img
        src='https://sun9-42.userapi.com/c857132/v857132036/16dae6/n3kVjOxUgn8.jpg' width='50' height='50' />
      <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default AllFriends;
