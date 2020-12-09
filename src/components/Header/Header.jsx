import React from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import AuthProfileLink from "./AuthProfileLink/AuthProfileLink";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <NavLink to='./' className={s.logo}>
          <h1>MSN</h1>
        </NavLink>
          {props.isAuth ? <AuthProfileLink login={props.login} logout={props.logout} />
              : <NavLink to='/login'>Login</NavLink>
          }
      </div>
    </header>
  );
};

export default Header;
