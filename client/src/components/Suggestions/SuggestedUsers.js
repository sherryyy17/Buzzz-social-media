import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import classes from './SuggestedUsers.module.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SuggestedUsers = (props) => {
    let navigate = useNavigate();
    const [ reqSent, setReqSent ] = useState(false);

    useEffect(() => {
        if(props.user.friendReqIds.includes(props.currId)) {
            setReqSent(true);
        }
    },[])

    const addFriend = () => {
        const res = axios.patch(`/api/users/${props.user.googleId}`, {
            friendReqIds: [ ...props.user.friendReqIds, props.currId ]
        });
        setReqSent(true);
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
            {!reqSent && <button onClick={ addFriend }>+Friend</button> }
            {reqSent && <button>Pending</button> }
        </div>
}

export default connect(null,actions)(SuggestedUsers);