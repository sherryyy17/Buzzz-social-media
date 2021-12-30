import React, { useState } from 'react';
import PostShare from './PostShare';
import Posts from './Posts';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import Toggle from '../ToggleButton/Toggle';
import ReportedList from './ReportedPosts/ReportedList';

const PostList = (props) => {
    const [ adminEnabled, setAdminEnabled ] = useState(false);
    const [ visible, setVisible ] = useState(3);

    if( props.auth == false ) {
        return <Navigate replace to="/" />
    }
    const { post, auth } = props;
    let postList = '', isAdmin = false, postLen;
    if( post != null && post ) {
        postList = post;
        postLen = postList.length;
    }
    if( auth != null || auth ) {
        isAdmin = auth.isAdmin;
    }

    const adminHandler = (enable) => {
        setAdminEnabled(enable);
    }

    const showMore = () => {
        setVisible((prev) => prev + 3);
    }

    return <>
        <PostShare />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2rem', paddingTop: '0.7rem'}}>
            <p style = {{ paddingLeft: '2rem', color:'#545350', fontSize: '0.9rem' }} >Sort by: <b>Recent</b></p>
            {isAdmin && <Toggle adminCallback = { adminHandler } />}
        </div>
        { ( postList && !adminEnabled ) &&
            postList.slice(0, visible).map(
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
        {( visible < postLen && !adminEnabled ) && <div style={{ textAlign: 'center' }}>
            <button style={{ border: 'none', color: '#383836', fontSize: '0.9rem',backgroundColor: '#edf1f7', borderRadius: '5px', padding: '8px 15px', marginBottom:'2rem' }} onClick={showMore}>Load More</button>
        </div>}
    </>
}

function mapStateToProps( { post, auth } ) {
    return { post, auth };    
}

export default connect( mapStateToProps )( PostList );