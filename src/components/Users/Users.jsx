import React from "react";
import p from './Users.module.css';
import image from '../../images/profileImage.png';
import * as axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render() {
        return <div>
            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={p.users}>
                        <div className={p.image}>
                            <img src={u.photos.small != null ? u.photos.small : image} alt={'ph'}/>
                        </div>
                        <div className={p.button}>
                            {u.followed ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>
                                    Unfollow
                                </button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
                </div>)
            }
        </div>

    }
}


export default Users;


/*
import React from "react";
import p from './Users.module.css';
import image from '../../images/profileImage.png';
import * as axios from "axios";

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }
    /!*props.setUsers([
        {
            id: 1,
            photo: image,//don't work
            followed: false,
            fullName: 'Daud',
            status: 'hi, i\'m a killer',
            location: {
                city: 'Karnaca',
                country: 'Serkonos',
            }
        },
        ])*!/

    return <div>
        <button onClick={getUsers}>Get users</button>
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
        </div>)
    }
    </div>
}

export default Users;*/
