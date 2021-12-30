import React, { useState } from 'react';
import PostShare from './PostShare';
import Posts from './Posts';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import Toggle from '../ToggleButton/Toggle';
import ReportedList from './ReportedPosts/ReportedList';

const PostList = (props) => {
    const [ adminEnabled, setAdminEnabled ] = useState(false);

    if( props.auth == false ) {
        return <Navigate replace to="/" />
    }
    const { post, auth } = props;
    let postList = '', isAdmin = false;
    if( post != null && post ) {
        postList = post;
    }
    if( auth != null || auth ) {
        isAdmin = auth.isAdmin;
    }

    const adminHandler = (enable) => {
        setAdminEnabled(enable);
    }

    return <>
        <PostShare />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2rem', paddingTop: '0.7rem'}}>
            <p style = {{ paddingLeft: '2rem', color:'#545350', fontSize: '0.9rem' }} >Sort by: <b>Recent</b></p>
            {isAdmin && <Toggle adminCallback = { adminHandler } />}
        </div>
        { ( postList && !adminEnabled ) &&
            postList.map(
                (post,index) => <Posts 
                            key = { index }
                            posted = { post }
                            delPermission = 'false'  
                        /> 
            )
        }
        {
            adminEnabled && <ReportedList />
        }
    </>
}

function mapStateToProps( { post, auth } ) {
    return { post, auth };    
}

export default connect( mapStateToProps )( PostList );