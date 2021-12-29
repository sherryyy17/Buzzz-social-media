import React, { useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './SuggestedUsers.module.css';

const SuggestedUsers = (props) => {
    const addFriend = () => {
        // props.UpdateCurrUser( props.currId, { friendsIds: [ ...props.friendList, props.user.googleId ] } );
        props.UpdateUser(props.user.googleId, { 
            friendReqIds: [ ...props.user.friendReqIds, props.currId ]
        });
    }

    return <div className={ classes.suggList }>
            <div className={ classes.username }>
                <img src={ props.user.profilePic } alt = "user dp" />
                <p>{ props.user.firstName } { props.user.lastName } </p>
            </div>
            <button onClick={ addFriend }>+Friend</button>
        </div>
}

export default connect(null,actions)(SuggestedUsers);