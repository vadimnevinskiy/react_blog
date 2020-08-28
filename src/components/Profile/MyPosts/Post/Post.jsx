import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.postlist__item}>
            <div className={styles.avatar}>
                <img src="https://img2.freepng.ru/20180405/acq/kisspng-male-avatar-user-profile-clip-art-profile-5ac69e04c061f0.400875961522966020788.jpg" alt=""/>
            </div>
            <div>
                {props.text}
                <div className={styles.like}>
                    <span className={styles.likeCount}>{props.likes}</span>
                    <a href="$s"><i className={styles.materialIcons + ' ' + "material-icons"}>thumb_up_alt</i></a>
                </div>
            </div>
        </div>
    );
}
export default Post;
