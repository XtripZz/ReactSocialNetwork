import React from 'react';
import s from './Friends.module.css';
import {NavLink, Route} from "react-router-dom";
import UsersContainer from "./SearchUsers/Users/UsersContainer";

const Friends = (props) => {
  return (
    <div>
      Friends
        <div>
          <NavLink to='/friends/searchUsers' className={s.navlink} activeClassName={s.active}>Search Users</NavLink>
        </div>

      <Route path='/friends/searchUsers' render={() => <UsersContainer/>}/>
    </div>
  );
};

export default Friends;
