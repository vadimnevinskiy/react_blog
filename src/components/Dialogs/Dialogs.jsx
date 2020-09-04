import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.users.map(d => <div key={d.id}><DialogItem name={d.name} id={d.id}/></div>);
    let messagesElements = props.dialogsPage.messages.map(m => <div key={m.id}><Message message={m.message} id={m.id}/>
    </div>);


    let textField = React.createRef();
    let addDialog = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value
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
                          value={props.dialogsPage.newMessageText}
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
