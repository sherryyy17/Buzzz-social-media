import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Header = (props) => {
    let navigate = useNavigate();
    let firstName = '', lastName = '', profilePic = '', reqLen;
    
    if(props.auth != null || props.auth){
        firstName = props.auth.firstName;
        lastName = props.auth.lastName;
        profilePic = props.auth.profilePic;
        reqLen = props.auth.friendReqIds.length;
    }
    const showRequests = () => {
        navigate('/requests');
    }

    const visitFeed = () => {
        navigate('/feed');
    }

    const visitProfile = () => {
        navigate(`/profile`);
    }

    const logoutHandler = async () => {
        const res = await axios.get('/api/logout');
        console.log(res.data);
        window.location.reload(true);
    }

    return <div className={classes.container}>
        <div>
            <img src={ logo } alt="ttn-logo" className={classes.logo} onClick={ visitFeed }/>
        </div>
        <nav>
            <img src={ profilePic } alt="profile-pic" onClick={ visitProfile }/>
            <span onClick={ visitProfile }>{ firstName } { lastName }</span>
            <FontAwesomeIcon icon={faCommentDots} className={classes.icons} />
            <div className={ classes.req }>
                <div className={ classes.reqIcon }>
                    <FontAwesomeIcon 
                        icon={ faUserFriends } 
                        onClick = { showRequests }
                    />
                    <div className={ classes.reqCount }>{ reqLen }</div>
                </div>
            </div>
            
            <button onClick={ logoutHandler } className={classes.logout}>Logout</button>
        </nav>
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps)(Header);