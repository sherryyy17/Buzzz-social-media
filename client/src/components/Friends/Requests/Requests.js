import React from 'react';
import { connect } from 'react-redux';
import RequestHeader from './RequestHeader';
import RequestList from './RequestList';

const Friends = (props) => {
    const { auth } = props;

    return <div style= {{ width: '25vw', padding:'1rem', margin:'1rem',  boxShadow: '0 0 20px rgba(230, 222, 222, 0.4)' }} >
        <RequestHeader />
        { (auth != null || auth) &&
            auth.friendReqIds.map(
                id => <RequestList 
                        id = { id }
                        currId = { auth.googleId }
                        reqIds = { auth.friendReqIds }
                        frndIds = { auth.friendsIds }
                     /> 
            )
        }
    </div>
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Friends);