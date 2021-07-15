const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            selfInfo: {
                id: 1234,
                avatar: 'images/userAvatar.jpg',
                name: 'Pepege',
            },
            posts: [
                {id: 1, post: "Let's go play", like_count: "30", avatar: 'images/userAvatar.jpg', name: 'Pepege'},
                {id: 2, post: "Yei, I kill Daud", like_count: "26", avatar: 'images/userAvatar.jpg', name: 'Pepege'},
                {id: 3, post: "No joke", like_count: "17", avatar: 'images/userAvatar.jpg', name: 'Pepege'},
            ],
            newPostText: 'Текст123...',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Emily Kaldwin", avatar: 'images/avatar.png'},
                {id: 2, name: "Corvo Attano", avatar: 'images/avatar.png'},
                {id: 3, name: "Daud", avatar: 'images/avatar.png'},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "ku"},
                {id: 3, message: "/!/"},
            ],
            newMessageBody: '',
        },
        navbarPage: {
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
        },
        header: {id: 1, avatar: 'images/logo.png'}
    },

    _callSubscriber() {
        console.log('state change');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; //паттерн - observer / publisher
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                like_count: 0,
                avatar: 'images/userAvatar.jpg',
                name: 'Pepege'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text,})

export default store;
window.store = store;