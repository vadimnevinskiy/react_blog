import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.user}>
                <div>
                    <img src="https://i007.fotocdn.net/s123/2950fc2e1fadccab/user_xl/2816616767.jpg" alt=""/>
                </div>
                <div>
                    User name
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
