import React from 'react';
import h from './Header.module.css';

const Header = (props) => {
    return (
        <header className={h.header}>
            {/*<img src={props.header.image} alt='logo'/>*/}
            <img src='images/logo.png' alt='logo'/>
        </header>
    );
}

export default Header;