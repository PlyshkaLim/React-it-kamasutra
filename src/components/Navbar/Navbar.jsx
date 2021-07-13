import React from 'react';
import s from './Navbar.module.css';
import Label from "./Label/Label";


const Navbar = (props) => {

    let labelElements =
        props.state.labels.map(l => <Label link={l.link} name={l.name} image={l.image}/>);

    return (
        <nav className={s.nav}>
            {labelElements}
        </nav>
    );
}

export default Navbar;