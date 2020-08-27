import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <div className={styles.mainImage}>
                <img src="https://funik.ru/wp-content/uploads/2019/05/b9b57d4863b903af6a95.jpg" alt=""/>
            </div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
