import React from "react";
import p from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers({
            id: 1,
            photo: '../images/Daud.jpg',
            followed: false,
            fullName: 'Daud',
            status: 'hi, i\'m a killer',
            location: {
                city: 'Karnaca',
                country: 'Serkonos',
            }
        })
    }
    return <div>{
        props.users.map(u => <div key={u.id}>
            <div className={p.users}>


                <div className={p.image}>
                    <img src={u.image} alt={'photo'}/>
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
                    <div className={p.name}>{u.fullName}</div>
                    <div className={p.description}>{u.status}</div>
                    <div className={p.location}>
                        <div className={p.city}>{u.city}</div>
                        <div className={p.country}>{u.country}</div>
                    </div>
                </div>
            </div>
        </div>)
    }
    </div>

}

export default Users;