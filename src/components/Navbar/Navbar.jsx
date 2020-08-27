import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={styles.active}>Dialogs</NavLink></div>
            <div><NavLink to="/news" activeClassName={styles.active}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></div>

            <br/><br/><br/><br/><br/>
            <div><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;
