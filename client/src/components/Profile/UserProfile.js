import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faExternalLinkSquareAlt, faFileUpload, faEdit } from '@fortawesome/free-solid-svg-icons';
import classes from './UserProfile.module.css';
import axios from 'axios';

const UserProfile = (props) => {
    const [ loading, setLoading ] = useState(false);

    let history = useNavigate();

    let firstName = '', lastName = '', profilePic = '',desg = '',city='',country='',friends='',cover='',web='';

    if(props.auth != null || props.auth){
        firstName = props.auth.firstName;
        lastName = props.auth.lastName;
        profilePic = props.auth.profilePic;
        desg = props.auth.description;
        city = props.auth.address.city;
        country = props.auth.address.country;
        friends = props.auth.friendsIds.length;
        cover = props.auth.coverImg;
        web = props.auth.website;
    }

    const editHandler = () => {
        history("/edit");
    }

    return <div className = {classes.profileContainer} >
        <div className = {classes.cover} >
            <img src={ cover } className= { classes.coverImg } />
        </div>
        <div className = {classes.profile} >
            <img src = { profilePic } alt="profile photo" />
            {loading ? <p>Loading...</p> : ''}
            <div className={ classes.username }>
                <h2>{ firstName } { lastName }</h2>
                <div className = { classes.edit } onClick = { editHandler }>
                    <FontAwesomeIcon icon = { faEdit } />
                    Edit Profile
                </div>
            </div>
            <p>{ desg }</p>
            <div className = {classes.info} >
                <p>{ city }</p>
                <p>{ country }</p>
                <p>friends(<b>{friends}</b>)</p>
            </div>
            <div className = { classes.btnContainer } >
                <button className = { classes.website } >
                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} className={ classes.icons } />
                    <a href={web} target="_blank" >Visit Website</a>
                </button>
            </div>
        </div>
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps, actions)(UserProfile);