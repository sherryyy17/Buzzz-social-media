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

    const visitFeed = () => {
        navigate('/feed');
    }

    const visitProfile = () => {
        navigate(`/profile`);
    }

    return <div className={classes.container}>
        <div>
            <img src={ logo } alt="ttn-logo" className={classes.logo} onClick={ visitFeed }/>
        </div>
        <nav>
            <img src={ profilePic } alt="profile-pic" onClick={ visitProfile }/>
            <span onClick={ visitProfile }>{ firstName } { lastName }</span>
            <FontAwesomeIcon icon={faCommentDots} className={classes.icons} />
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