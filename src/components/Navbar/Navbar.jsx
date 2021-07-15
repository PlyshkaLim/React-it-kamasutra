import React from 'react';
import s from './Navbar.module.css';
import Label from "./Label/Label";


const Navbar = (props) => {

    let navbarPage = {
        labels: [
            {
                id: 1, name: 'Profile', link: '/profile',
                image: 'images/profileImage.png'
            },
            {
                id: 2, name: 'Messages', link: '/dialogs',
                image: 'images/chat.png'
            },
            {
                id: 3, name: 'News', link: '/news',
                image: 'images/news.png'
            },
            {
                id: 4, name: 'Music', link: '/music',
                image: 'images/music.png'
            },
            {
                id: 5, name: 'Settings', link: '/Settings',
                image: 'images/settings.png'
            },
        ]
    }

    let labelElements =
        navbarPage.labels.map(l => <Label link={l.link} name={l.name} image={l.image}/>);

    return (
        <nav className={s.nav}>
            {labelElements}
        </nav>
    );
}

export default Navbar;