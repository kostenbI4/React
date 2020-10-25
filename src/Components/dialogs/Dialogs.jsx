import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={`/dialogs/${props.id}`}> {props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Igor"}
    ];

    let messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "Egor"},
        {id: 3, message: "YO"}
    ];

    let dialogElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = messagesData.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;