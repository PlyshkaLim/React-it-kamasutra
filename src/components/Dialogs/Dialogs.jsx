import React from "react";
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={d.dialog}>
        <img src={props.avatar} alt='avatar'/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={d.message}>
        {props.message}
    </div>
}

const Dialogs = (props) => {
    let state = props.dialogsPage.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}
                                                             id={d.id}
                                                             avatar={d.avatar}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        /*props.store.dispatch(sendMessageCreator());*/
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        /*props.store.dispatch(updateNewMessageBodyCreator(body));*/
        props.updateNewMessageBody(body);
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <textarea value={newMessageBody}
                          onChange={ onNewMessageChange }
                          placeholder='Enter your message...'/>
                <br/>
                <button onClick={ onSendMessageClick }>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;