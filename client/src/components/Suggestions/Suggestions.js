import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import SuggestionHeader from "./SuggestionHeader";
import SuggestedUsers from "./SuggestedUsers";

const Suggestions = (props) => {
    let navigate = useNavigate();
    const [ isClicked, setClicked ] = useState(false);
    const [ sugUsers, setSugUsers ] = useState([]);
    const [ filterUsers, setFilterUsers ] = useState([]);

    useEffect(() => {
        if( !props.auth ) {
            navigate('/')
        }

        let currUserId = "", friends = [];

        if(props.auth != null || props.auth){
            currUserId = props.auth.googleId;
            friends = props.auth.friendsIds;
        }
        const suggestions = props.user.filter(item => {
            return item.googleId !== currUserId && !friends.includes(item.googleId);
        });
        setSugUsers(suggestions);
        setFilterUsers(suggestions);
    },[props]);

    const searchCallbackHandler = (clicked) => {
        setClicked(clicked);
    }

    const filterUser = (e) => {
        if(e.target.value === "") {
            setFilterUsers(sugUsers);
        } else {
            const newSugg = sugUsers.filter(item => item.firstName.toLowerCase().includes(e.target.value));
            setFilterUsers(newSugg);
        }
    }
    
    return <div style={ { padding:'1rem', margin:'1rem',  boxShadow: '0 0 20px rgba(230, 222, 222, 0.4)', backgroundColor: 'white' } }>
        <SuggestionHeader  
            searchHandler = { searchCallbackHandler }
        />
        {isClicked && <input 
                        type="text" 
                        placeholder="Search Suggestions..." 
                        onChange={ filterUser } 
                        style={{ marginBottom: "10px", width: '100%' }} 
                    />
        }
        { filterUsers.map( 
            item => <SuggestedUsers 
                        user = { item } 
                        currId = { props.auth.googleId } 
                        friendList = { props.auth.friendsIds } 
                    /> 
        ) }
    </div>
}

function mapStateToProps( { auth, user } ) {
    return { auth, user };    
}

export default connect(mapStateToProps)(Suggestions);