import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.mainImage}>
                <img src="https://funik.ru/wp-content/uploads/2019/05/b9b57d4863b903af6a95.jpg" alt=""/>
            </div>
            <div className={classes.user}>
                <div>
                    <img src="https://i007.fotocdn.net/s123/2950fc2e1fadccab/user_xl/2816616767.jpg" alt=""/>
                </div>
                <div>
                    User name
                </div>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
