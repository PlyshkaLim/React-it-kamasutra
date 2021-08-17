import preloader from "../../../images/preloader.svg";
import React from "react";
import p from './Preloader.module.css';

const Preloader = (props) => {
    return <div className={p.preloader}>
        <img src={preloader} alt={'preloader'}/>
    </div>
}

export default Preloader;