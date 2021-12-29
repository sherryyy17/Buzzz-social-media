import React from "react";
import { connect } from "react-redux";
import SuggestionHeader from "./SuggestionHeader";
import SuggestedUsers from "./SuggestedUsers";

const Suggestions = (props) => {
    let currUserId = "", friends = [];

    if(props.auth != null || props.auth){
        currUserId = props.auth.googleId;
        friends = props.auth.friendsIds;
        console.log(friends);
    }

    const sugUsers = props.user.filter(item => {
        return item.googleId !== currUserId && !friends.includes(item.googleId);
    });

    console.log("--",sugUsers);
    
    return <div style={ { width: '25vw', padding:'1rem', margin:'1rem',  boxShadow: '0 0 20px rgba(230, 222, 222, 0.4)' } }>
        <SuggestionHeader />
        { sugUsers.map( 
            item => <SuggestedUsers 
                        user = { item } 
                        currId = { currUserId } 
                        friendList = { props.auth.friendsIds } 
                    /> 
        ) }
    </div>
}

function mapStateToProps( { auth, user } ) {
    return { auth, user };    
}

export default connect(mapStateToProps)(Suggestions);