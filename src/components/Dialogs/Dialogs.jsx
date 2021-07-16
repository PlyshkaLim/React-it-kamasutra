import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

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

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name}
                                                                   id={d.id}
                                                                   avatar={d.avatar}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
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