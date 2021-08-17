import React from "react";
import p from "./Users.module.css";
import image from "../../images/profileImage.png";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={p.buttons}>
            {pages.map(q => {
                return <span
                    className={props.currentPage === q && p.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(q)
                    }}>
                        {q}
                    </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={p.users}>
                    <div className={p.image}>
                        <img src={u.photos.small != null ? u.photos.small : image} alt={'ph'}/>
                    </div>
                    <div className={p.button}>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                Unfollow
                            </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div className={p.card}>
                        <div className={p.name}>{u.name}</div>
                        <div className={p.description}>{u.status}</div>
                        <div className={p.location}>
                            <div className={p.city}>{'u.location.city'}</div>
                            <div className={p.country}>{'u.location.country'}</div>
                        </div>
                    </div>
                </div>
            </div>)}
    </div>
}

export default Users;