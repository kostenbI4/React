import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogitem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>)

    let textRef = React.createRef();

    let createMes = ()=>{
        let text = textRef.current.value;
        alert(text);
    }

    return (
        <div >
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div>
                <textarea ref={textRef}></textarea>
                <br/>
                <button onClick={createMes}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;