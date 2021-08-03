const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                like_count: 0,
                avatar: 'images/userAvatar.jpg',
                name: 'Pepege'
            };
            return {
                ...state.profilePage,
                posts: [...state.profilePage.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state.profilePage,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,})

export default profileReducer;