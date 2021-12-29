import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    let navigate = useNavigate();
    let firstName = '', lastName = '', profilePic = '';
    if(props.auth != null || props.auth){
        firstName = props.auth.firstName;
        lastName = props.auth.lastName;
        profilePic = props.auth.profilePic;
    }
    const showRequests = () => {
        navigate("/requests");
    }

    return <div className={classes.container}>
        <div>
            <img src={ logo } alt="ttn-logo" className={classes.logo} />
        </div>
        <nav>
            <img src={ profilePic } alt="profile-pic" />
            <span>{ firstName } { lastName }</span>
            <FontAwesomeIcon icon={faCommentDots} />
            <FontAwesomeIcon 
                icon={ faUserFriends } 
                onClick = { showRequests }
            />
        </nav>
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps)(Header);