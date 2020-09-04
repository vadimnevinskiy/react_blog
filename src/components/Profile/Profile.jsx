import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let profilePage = props.store.getState().profilePage;
    return (
        <div className='h100'>
            <ProfileInfo/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
