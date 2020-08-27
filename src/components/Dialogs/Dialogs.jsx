import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
// let dialogElements =
//     dialogsData.map((dialog) => {
//     return (
//         <DialogItem name={dialog.name} id={dialog.id} />
//     );
// });

// let messagesElements =
//     MessagesData.map((message) => {
//         return (
//             <Message message={message.message} />
//         );
//     });

    let dialogsElements = props.state.dialogs.map(d => <div key={d.id}><DialogItem name={d.name} id={d.id} /></div>);
    let messagesElements = props.state.messages.map(m => <div key={m.id}><Message message={m.message} id={m.id} /></div>);




    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;
