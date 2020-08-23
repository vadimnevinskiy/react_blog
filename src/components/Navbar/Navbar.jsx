import React from "react";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div><a href="$s">Profile</a></div>
            <div><a href="$s">Messages</a></div>
            <div><a href="$s">News</a></div>
            <div><a href="$s">Music</a></div>

            <br/><br/><br/><br/><br/>
            <div><a href="$s">Settings</a></div>
        </nav>
    );
}

export default Navbar;