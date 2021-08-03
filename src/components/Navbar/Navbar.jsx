import React from 'react';
import s from './Navbar.module.css';
import Label from "./Label/Label";
import image1 from '../../images/profileImage.png';
import image2 from '../../images/chat.png';
import image3 from '../../images/news.png';
import image4 from '../../images/music.png';
import image5 from '../../images/settings.png';

const Navbar = (props) => {

    let navbarPage = {
        labels: [
            {
                id: 1, name: 'Profile', link: '/profile',
                image: image1
            },
            {
                id: 2, name: 'Messages', link: '/dialogs',
                image: image2
            },
            {
                id: 6, name: 'Users', link: '/users',
                image: image1
            },
            {
                id: 3, name: 'News', link: '/news',
                image: image3
            },
            {
                id: 4, name: 'Music', link: '/music',
                image: image4
            },
            {
                id: 5, name: 'Settings', link: '/Settings',
                image: image5
            },
        ]
    }

    let labelElements =
        navbarPage.labels.map(l => <Label key={l.id}
                                          link={l.link}
                                          name={l.name}
                                          image={l.image}/>);

    return (
        <nav className={s.nav}>
            {labelElements}
        </nav>
    );
}

export default Navbar;