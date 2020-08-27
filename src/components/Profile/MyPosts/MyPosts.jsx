import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post text={p.post} likes={p.likes}/>);

    return (
        <div className={styles.posts}>
            <h3 className={styles.post__text}>
                My posts
            </h3>
            <div className={styles.form}>
                <textarea type="text" className={styles.form__textField}></textarea>
                <div className={styles.form__buttonBlock}>
                    <input type="button" className={styles.button} value='Send'/>
                </div>
            </div>
            <div className={styles.postlist}>
                { postElement }
            </div>
        </div>
    );
}

export default MyPosts;
