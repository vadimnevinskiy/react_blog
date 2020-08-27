import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, post: 'Lorem ipsum dolor sit amet.', likes: 12},
        {id: 2, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime pariatur perferendis porro sint suscipit totam!', likes: 7},
        {id: 3, post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime!', likes: 3}
    ];

    let postElement = posts.map(p => <Post text={p.post} likes={p.likes}/>);

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
