import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import classes from './UserProfile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faExternalLinkSquareAlt, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import Header from "../Header/Header";
import Suggestions from "../Suggestions/Suggestions";

const FriendsProfile = (props) => {
    const [ friend, setFriend ] = useState("");
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

    return <>
        <Header />
        <div style={{ display:'flex', backgroundColor:'#e6e2e1', height:'100vh', padding: '1.5rem 4rem', justifyContent: 'space-around'}}>
            <div className = { classes.profileContainer }>
            <div className = {classes.cover} >
                <img src={ friend.coverImg } alt="cover pic" className= { classes.coverImg } />
            </div>
            <div className = {classes.profile} >
                    <img src = { friend.profilePic } alt="profile photo" />
                    <h2>{ friend.firstName } { friend.lastName }</h2>
                    <p>{ friend.description }</p>
                    <div className = {classes.info} >
                        <p>{ friend.address?.city }</p>
                        <p>{ friend.address?.country }</p>
                        <p><b>{ friend.friendsIds?.length }</b> friend(s)</p>
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
            <div style={{ height: '60%' }}>
                <Suggestions />
            </div>
        </div>
        
    </> 
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps)(FriendsProfile);