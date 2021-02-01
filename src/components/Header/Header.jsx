import React from 'react';
import styles from './Header.module.css';
import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
// rfce
const Header = (props) => {
    return(
        <div className={styles.header}>
            <div className={styles.header_left}>

                <IconButton>
                    <MenuIcon/>
                </IconButton>
                
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail-logo"/>
            </div>

            <div className={styles.header_middle}>
                <SearchIcon/>
                <input type="text" placeholder="Search mail. . ."/>
                <ArrowDropDownIcon className={styles.arrow}/>
            </div>

            <div className={styles.header_right}>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
                
            </div>
        </div>
            
    )};

export default Header;