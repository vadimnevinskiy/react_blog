import React from "react";
import classes from './Profile.module.css';

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
                    <div className={classes.postlist__item}>post 111111</div>
                    <div className={classes.postlist__item}>post 222222</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
