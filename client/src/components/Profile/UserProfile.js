import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './UserProfile.module.css';

const UserProfile = () => {
    return <div className = {classes.profileContainer} >
        <div className = {classes.cover} >
            <img alt = "Cover photo" />
        </div>
        <div className = {classes.profile} >
            <img alt="profile photo" />
            <h1>Name</h1>
            <h6>About that person</h6>
            <div className = {classes.info} >
                <p>City</p>
                <p>Country</p>
                <p>friends</p>
            </div>
            <div className = { classes.btnContainer } >
                <button className = { classes.frnd } >
                    <FontAwesomeIcon icon={faUserPlus} />
                    Add Friend
                </button>
                <button className = { classes.website } >
                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                    Visit Website
                </button>
            </div>
        </div>
    </div>
}

export default UserProfile;