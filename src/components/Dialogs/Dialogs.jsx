import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT?'},
        {id: 3, message: 'Fine!'}
    ];



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

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);




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
