import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

// 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
// Импортируем ACTION CREATOR-ы
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <div key={p.id}><Post text={p.post} likes={p.likes}/></div>);

    let textField = React.createRef();
    let addPost = () => {
        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при добавлении поста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        // text - получаем из value текстового поля (e - инициализатор вызова функции, в нашем случае textarea)
        let text = e.target.value;

        // 2) ACTION CREATOR - СОЗДАТЕЛЬ объекта "action"
        // при изменении текста, чтобы каждый раз не создавать action
        // вызываем функцию ACTION CREATOR с необходимыми нам параметрами
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={styles.posts}>
            <div className={styles.postlist}>
                <h3 className={styles.post__text}>
                    My posts
                </h3>
                { postElement }
            </div>
            <div className={styles.form}>
                <textarea type="text"
                          className={ styles.form__textField }
                          value={ props.newPostText }
                          onChange={ onPostChange }
                />
                <span
                    className={styles.materialIcons + ' ' + "material-icons"}
                    value='Send'
                    onClick={addPost}
                >send</span>
            </div>
        </div>
    );
}

export default MyPosts;
