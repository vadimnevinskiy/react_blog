import React from "react";

// 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Импортируем ACTION CREATOR-ы
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при добавлении поста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.store.dispatch(addMessageActionCreator())
    }

    let updateMessage = (text) => {
        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при изменении текста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs
            messageChange={updateMessage}
            sendMessage={addMessage}
            dialogsPage={state.dialogsPage} />
    );
};

export default DialogsContainer;
