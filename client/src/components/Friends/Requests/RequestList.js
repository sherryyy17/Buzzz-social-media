import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from '../../Suggestions/SuggestedUsers.module.css';
import * as actions from '../../../redux/actions';
import { connect } from 'react-redux';

const RequestList = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [ friendIds, setFriendIds ] = useState([]);

    const { id } = props;
    useEffect(async () => {
           const user = await axios.get(`/api/users/${ id }`);
           setFirstName(user.data.firstName);
           setLastName(user.data.lastName);
           setProfilePic(user.data.profilePic);
           setFriendIds(user.friendsIds);
    }, []);

    const acceptReq = () => {
            const requestIds = props.reqIds.filter(item => item != id);
            props.UpdateCurrUser(props.currId, { 
                friendReqIds: [...requestIds],
                friendsIds: [ ...props.frndIds, id ]
             });
             if(friendIds != null) {
                props.UpdateUser(id, {
                    friendsIds: [friendIds, props.currId] 
                });
             } else {
                props.UpdateUser(id, {
                    friendsIds: [props.currId] 
                });
             }
             
    }

    const rejectReq = () => {
        const requestIds = props.reqIds.filter(item => item != id);
            props.UpdateCurrUser(props.currId, { 
                friendReqIds: [...requestIds]
            });
            alert("Friend request declined");
    }

    return <div className={ classes.suggList}>
            <div className={ classes.username }>
                <img src = { profilePic } alt = "user dp" />
                <p>{firstName } { lastName }</p>
            </div>
            <button onClick = { acceptReq }>Accept</button>
            <button onClick = { rejectReq }>Reject</button>
        </div>
        
}

export default connect(null,actions)(RequestList);