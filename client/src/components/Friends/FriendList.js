import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from '../Suggestions/SuggestedUsers.module.css';
import { useNavigate } from 'react-router-dom';

const FriendList = (props) => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    let navigate = useNavigate();

    const { id } = props;
    useEffect(async () => {
           const user = await axios.get(`/api/users/${ id }`);
           setFirstName(user.data.firstName);
           setLastName(user.data.lastName);
           setProfilePic(user.data.profilePic);
    }, []);

    const visitProfile = () => {
        navigate(`/profile/${ id }`);
    }

    return <div className={ classes.username }>
            <img src = { profilePic } alt = "user dp" onClick = { visitProfile } />
            <p onClick = { visitProfile }>{firstName } { lastName }</p>
        </div>
}

export default FriendList;