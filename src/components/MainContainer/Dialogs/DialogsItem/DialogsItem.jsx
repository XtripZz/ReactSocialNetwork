import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={`${s.dialogs} ${s.active}`}>

      <NavLink className={s.dialogsLink} to={path}>
        <img src='https://sun9-42.userapi.com/c857132/v857132036/16dae6/n3kVjOxUgn8.jpg' />
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DialogsItem;
