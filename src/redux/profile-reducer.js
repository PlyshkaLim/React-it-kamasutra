import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    selfinfo: {
        userId: 1234,
        avatar: 'images/userAvatar.jpg',
        name: 'Pepege',
    },
    posts: [
        {userId: 1, post: "Let's go play", like_count: "30", avatar: 'images/userAvatar.jpg', name: 'Pepege'},
        {userId: 2, post: "Yei, I kill Daud", like_count: "26", avatar: 'images/userAvatar.jpg', name: 'Pepege'},
        {userId: 3, post: "No joke", like_count: "17", avatar: 'images/userAvatar.jpg', name: 'Pepege'},
    ],
    newPostText: 'Текст123...',
    profile: null,
    userId: 19149,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                userId: 5,
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
            return {...state.profilePage, newPostText: action.newText};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;