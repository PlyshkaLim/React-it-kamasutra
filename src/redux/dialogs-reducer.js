const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    }
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            let newMessage = {
                id: 5,
                message: body,
            }
            state.messages.push(newMessage);
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body,})

export default dialogsReducer;