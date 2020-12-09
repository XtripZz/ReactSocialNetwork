import React from 'react';
import s from './WhoLeftThePost.module.css';
import {NavLink} from 'react-router-dom';

const WhoLeftThePost = (props) => {

  let path = `/profile/${props.id}`;

  return (
    <div className={s.whoLeftItem}>
       <NavLink className={s.whoLeftLink} to={path}>
      <img
        src="https://sun9-42.userapi.com/c857132/v857132036/16dae6/n3kVjOxUgn8.jpg"
        alt=""
      />
      <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default WhoLeftThePost;
