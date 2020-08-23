import React from "react";
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={"https://p7.hiclipart.com/preview/791/139/716/react-native-web-application-javascript-google-scholar-logo.jpg"}/>

            {/*<img src={"../img/logo.jpg"}/>*/}
        </header>
    );
}

export default Header;
