let initialState =  {
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

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;