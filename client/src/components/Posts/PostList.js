import React from 'react';
import PostShare from './PostShare';
import Posts from './Posts';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import Toggle from '../ToggleButton/Toggle';

const PostList = (props) => {
    if( props.auth == false ) {
        return <Navigate replace to="/" />
    }
    const { post } = props;
    let postList = '';
    if( post != null && post ) {
        postList = post;
    }

    return <>
        <PostShare />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2rem', paddingTop: '0.7rem'}}>
            <p style = {{ paddingLeft: '2rem', color:'#545350', fontSize: '0.9rem' }} >Sort by: <b>Recent</b></p>
            <Toggle />
        </div>
        {postList &&
            postList.map(
                (post,index) => <Posts 
                            key = { index }
                            posted = { post }
                            delPermission = 'false'  
                        /> 
            )
        }
    </>
}

function mapStateToProps( { post, auth } ) {
    return { post, auth };    
}

export default connect( mapStateToProps )( PostList );