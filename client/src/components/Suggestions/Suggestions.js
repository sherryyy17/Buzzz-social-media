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
        return item.googleId !== currUserId && !friends.includes(item.googleId) 
    });

    console.log("--",sugUsers);
    
    return <>
        <SuggestionHeader />
        { sugUsers.map( 
            item => <SuggestedUsers 
                        user = { item } 
                        currId = { currUserId } 
                        friendList = { props.auth.friendsIds } 
                    /> 
        ) }
    </>
}

function mapStateToProps( { auth, user } ) {
    return { auth, user };    
}

export default connect(mapStateToProps)(Suggestions);