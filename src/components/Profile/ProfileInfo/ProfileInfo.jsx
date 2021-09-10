import React from 'react';
import p from './ProfileInfo.module.css';
import Preloader from "../../common/Perloader/Preloader";
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    // if (!props.profile.userId) {
    //     return <Preloader/>
    // }

    return (
        <div>
            <div>
                {/*<img src='https://i.pinimg.com/originals/1e/df/a3/1edfa3ce874c318c471aabea9b515535.jpg'/>*/}
            </div>
            <div className={p.descriptonBlock}>
                <img src={props.profile.photos.large} className={p.avatar} alt={'Avatar'}/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;