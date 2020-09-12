import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <div key={p.id}><Post text={p.post} likes={p.likes}/></div>);


    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        // text - получаем из value текстового поля (e - инициализатор вызова функции, в нашем случае textarea)
        let text = e.target.value;
        props.updateNewPostText(text);
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
                    onClick={onAddPost}
                >send</span>
            </div>
        </div>
    );
}

export default MyPosts;
