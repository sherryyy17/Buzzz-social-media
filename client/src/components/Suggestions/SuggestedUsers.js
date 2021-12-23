import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const SuggestedUsers = (props) => {
    const addFriend = () => {
        console.log("//",props.friendList);
        console.log("//",props.user.googleId);
        props.UpdateCurrUser( props.currId, { friendsIds: [ ...props.friendList, props.user.googleId ] } );
        console.log("added friend");
    }

    return <div>
            <img alt = "user dp" />
            <p>{ props.user.firstName } { props.user.lastName } </p>
            <button onClick={ addFriend }>+Friend</button>
        </div>
}

export default connect(null,actions)(SuggestedUsers);