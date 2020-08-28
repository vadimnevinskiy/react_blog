import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <div key={p.id}><Post text={p.post} likes={p.likes}/></div>);

    let textField = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = textField.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={styles.posts}>
            <h3 className={styles.post__text}>
                My posts
            </h3>
            <div className={styles.form}>
                <textarea type="text"
                          className={ styles.form__textField }
                          ref={ textField }
                          value={ props.newPostText }
                          onChange={ onPostChange }
                />
                <div className={styles.form__buttonBlock}>
                    <input type="button" className={styles.button} value='Send' onClick={ addPost }/>
                </div>
            </div>
            <div className={styles.postlist}>
                { postElement }
            </div>
        </div>
    );
}

export default MyPosts;
