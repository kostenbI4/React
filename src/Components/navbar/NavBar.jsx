import React from 'react';
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./friend/Friend";

const NavBar = (props) => {

    let friendsEl = props.state.friends.map(el=> <Friend avatar={el.avatar} name={el.name} />);

    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to={"/profile"} activeClassName={classes.active}> Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs"} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/news"} activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
            <div className={classes.friends}>
                <h1>Friends</h1>
                <div className={classes.grid}>
                    {friendsEl}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;