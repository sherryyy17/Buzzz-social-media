import React, { useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './SuggestedUsers.module.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SuggestedUsers = (props) => {
    let navigate = useNavigate();

    const addFriend = () => {
        // props.UpdateCurrUser( props.currId, { friendsIds: [ ...props.friendList, props.user.googleId ] } );
        // props.UpdateUser(props.user.googleId, { 
        //     friendReqIds: [ ...props.user.friendReqIds, props.currId ]
        // });
        const res = axios.patch(props.user.googleId, {
            friendReqIds: [ ...props.user.friendReqIds, props.currId ]
        });
        console.log("/*",res.data);
    }

    const visitProfile = () => {
        navigate(`/profile/${ props.user.googleId }`);
    }

    return <div className={ classes.suggList }>
            <div className={ classes.username }>
                <img src={ props.user.profilePic } alt = "user dp" onClick = { visitProfile } />
                <p onClick = { visitProfile }>{ props.user.firstName } { props.user.lastName } </p>
            </div>
            <button onClick={ addFriend }>+Friend</button>
        </div>
}

export default connect(null,actions)(SuggestedUsers);