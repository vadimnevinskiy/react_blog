import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            {/*<div className={styles.mainImage}>*/}
            {/*    <img src="https://funik.ru/wp-content/uploads/2019/05/b9b57d4863b903af6a95.jpg" alt=""/>*/}
            {/*</div>*/}
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;
