import React, { useEffect, useState } from 'react';
import PostShare from './PostShare';
import Posts from './Posts';
import { connect } from "react-redux";

const PostList = (props) => {
    const { post } = props;
    let postList = '';
    if( post != null && post ) {
        postList = post;
    }

    return <>
        <PostShare />
        <p style = {{ paddingLeft: '2rem', paddingTop: '0.7rem', color:'#545350', fontSize: '0.9rem' }} >Sort by: <b>Recent</b></p>
        {postList &&
            postList.map(
                post => <Posts 
                            post = { post } 
                        /> 
            )
        }
    </>
}

function mapStateToProps( { post } ) {
    return { post };    
}

export default connect( mapStateToProps )( PostList );