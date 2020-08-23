import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.post__text}>
                my post
            </div>
            <div className={classes.form}>
                <textarea type="text" className={classes.form__textField}></textarea>
                <div className={classes.form__buttonBlock}>
                    <input type="button" className={classes.button} value='Send'/>
                </div>
            </div>
            <div className={classes.postlist}>
                <Post text={"Lorem ipsum dolor sit amet."} likes={'1'}/>
                <Post text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime pariatur perferendis porro sint suscipit totam!"} likes={'15'}/>
                <Post text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime!"} likes={'20'}/>
                <Post text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime pariatur perferendis porro sint!"} likes={'3'}/>
                <Post text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere porro sint suscipit totam!"} likes={'7'}/>
                <Post text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime pariatur perferendis porro sint suscipit totam!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut beatae facere impedit maxime pariatur perferendis porro sint suscipit totam!"} likes={'14'}/>
            </div>
        </div>
    );
}

export default MyPosts;
