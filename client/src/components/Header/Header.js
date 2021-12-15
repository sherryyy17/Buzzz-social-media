import React from 'react';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUserFriends } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return <div className={classes.container}>
        <div>
            <img src={ logo } alt="ttn-logo" className={classes.logo} />
        </div>
        <nav>
            <img src={ logo } alt="profile-pic" />
            <span>Name name</span>
            <FontAwesomeIcon icon={faComment} className={classes.icons} />
            <FontAwesomeIcon icon={ faUserFriends } />
        </nav>
    </div>
}

export default Header;