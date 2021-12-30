import React from 'react';
import Posts from '../Posts';
import { connect } from "react-redux";

const ReportedList = (props) => {
    const { post } = props;
    let postList = '';
    if( post != null && post ) {
        postList = post;
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

function mapStateToProps( { post } ) {
    return { post };    
}

export default connect( mapStateToProps )( ReportedList );