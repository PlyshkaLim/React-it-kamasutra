import React from 'react';
import h from './Header.module.css';
import logo from '../../images/logo.png'

const Header = (props) => {
    return (
        <header className={h.header}>
            {/*<img src={props.header.avatar} alt='logo'/>*/}
            <img src={logo} alt='logo'/>
        </header>
    );
}

export default Header;