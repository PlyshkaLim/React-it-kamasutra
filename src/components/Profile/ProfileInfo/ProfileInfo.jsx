import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from "../../common/Perloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img src='https://i.pinimg.com/originals/1e/df/a3/1edfa3ce874c318c471aabea9b515535.jpg'/>
            <div>ava + descr</div>
            <div className={p.avatar}>
                <img src={props.profile.photos.large} alt='Avatar'/>
            </div>
            <div className={p.description}>
                {props.name}
            </div>
        </div>
    );
}

export default ProfileInfo;