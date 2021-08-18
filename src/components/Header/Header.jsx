import React from 'react';
import h from './Header.module.css';
import logo from '../../images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <img src={logo} alt='logo'/>
            <div className={h.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;