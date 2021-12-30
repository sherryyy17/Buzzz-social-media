import React from 'react';
import Posts from '../Posts';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ReportedList = (props) => {
    let navigate = useNavigate();

    const { post, auth } = props;
    let postList = '';
    if( post != null && post ) {
        postList = post;
    }
    if( !auth ) {
        navigate('/login')
    }
    if( auth != null || auth ) {
        if(!auth.isAdmin) {
            navigate('/feed')
        }
    }
    const reportedList = postList.filter(post => post.isReported === true);

    return <>
        <h2 style={{ margin: '1rem 2rem 1rem 2rem', color: '#545350' }}>Reported Posts</h2>
        {reportedList &&
            reportedList.map(
                (post,index) => <Posts 
                            key = { index }
                            posted = { post }
                            delPermission = 'true' 
                        /> 
            )
        }
    </>
}

function mapStateToProps( { post, auth } ) {
    return { post, auth };    
}

export default connect( mapStateToProps )( ReportedList );