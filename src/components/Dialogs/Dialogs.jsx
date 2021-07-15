import React from 'react';
import d from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={d.dialog}>
        <img src={props.avatar}/>
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

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={d.dialogs}>

            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={d.messages}>
                {messagesElements}
                <textarea ref={newMessage}>message...</textarea>
                <br/>
                <button onClick={ addMessage }>Send message</button>
            </div>

        </div>
    );
}

export default Dialogs;