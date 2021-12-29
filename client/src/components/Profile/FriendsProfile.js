import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import classes from './UserProfile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faExternalLinkSquareAlt, faFileUpload } from '@fortawesome/free-solid-svg-icons';

const FriendsProfile = (props) => {
    const [ friend, setFriend ] = useState(null);
    const { id } = useParams();
    useEffect(async () => {
        const res = await axios.get(`/api/users/${id}`);
        console.log(res.data);
        setFriend(res.data);
    });

    let isFriend = false;
    if(props.auth != null || props.auth) {
        isFriend = props.auth.friendsIds.includes(id);
    }

    return <div className = { classes.profileContainer }>
    <div className = {classes.cover} >
        <img className= { classes.coverImg } />
    </div>
    <div className = {classes.profile} >
            {friend && <img src = { friend.profilePic } alt="profile photo" />}
            {friend && <h2>{ friend.firstName } { friend.lastName }</h2> }
            <p>About that person</p>
            <div className = {classes.info} >
                <p>City</p>
                <p>Country</p>
                <p>friends</p>
            </div>
            <div className = { classes.btnContainer } >
                {!isFriend && <button className = { classes.frnd } >
                    <FontAwesomeIcon icon={faUserPlus} className={ classes.icons } />
                    Add Friend
                </button>}
                <button className = { classes.website } >
                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} className={ classes.icons } />
                    Visit Website
                </button>
            </div>
        </div>
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps)(FriendsProfile);