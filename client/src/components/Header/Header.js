import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    
    let firstName = '', lastName = '', profilePic = '';
    if(props.auth != null || props.auth){
        firstName = props.auth.firstName;
        lastName = props.auth.lastName;
        profilePic = props.auth.profilePic;
    }

    return <div className={classes.container}>
        <div>
            <img src={ logo } alt="ttn-logo" className={classes.logo} />
        </div>
        <nav>
            <img src={ profilePic } alt="profile-pic" />
            <span>{ firstName } { lastName }</span>
            <FontAwesomeIcon icon={faCommentDots} className={classes.icons} />
            <FontAwesomeIcon icon={ faUserFriends } />
        </nav>
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps)(Header);