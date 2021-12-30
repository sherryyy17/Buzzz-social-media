import React from 'react';
import { connect } from 'react-redux';
import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';

const Friends = (props) => {
    const { auth } = props;

    return <div style= {{ padding:'1rem', margin:'1rem',  boxShadow: '0 0 20px rgba(230, 222, 222, 0.4)', backgroundColor: 'white' }} >
        <FriendsHeader />
        { (auth != null || auth) &&
            auth.friendsIds.map(
                id => <FriendList id = { id } /> 
            )
        }
    </div>
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Friends);