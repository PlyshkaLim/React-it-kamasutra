import React from 'react';
import l from './Label.module.css';
import {NavLink} from "react-router-dom";

const Label = (props) => {
    return (
        <div className={l.item}>
            <img src={props.image} alt={'img'}/>
            <NavLink to={props.link} activeClassName={l.activeLink}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Label;