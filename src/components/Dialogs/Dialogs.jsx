import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

// 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Импортируем ACTION CREATOR-ы
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogsPage = props.store.getState().dialogsPage
    let dialogsElements = dialogsPage.users.map(d => <div key={d.id}><DialogItem name={d.name} id={d.id}/></div>);
    let messagesElements = dialogsPage.messages.map(m => <div key={m.id}><Message message={m.message} id={m.id}/>
    </div>);


    let addDialog = () => {
        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при добавлении поста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        // text - получаем из value текстового поля (e - инициализатор вызова функции, в нашем случае textarea)
        let text = e.target.value

        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при изменении текста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.form}>
                <textarea type="text"
                          className={styles.form__textField}
                          value={dialogsPage.newMessageText}
                          onChange={onMessageChange}
                />
                <span
                    className={styles.materialIcons + ' ' + "material-icons"}
                    value='Send'
                    onClick={addDialog}
                >
                        send</span>
            </div>
        </div>
    );
};

export default Dialogs;
