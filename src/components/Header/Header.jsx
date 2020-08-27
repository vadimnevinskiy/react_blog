import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={"https://p7.hiclipart.com/preview/791/139/716/react-native-web-application-javascript-google-scholar-logo.jpg"}/>

            {/*<img src={"../img/logo.jpg"}/>*/}
        </header>
    );
}

export default Header;
