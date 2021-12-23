import React from 'react';
import { connect } from 'react-redux';
import FriendsHeader from './FriendsHeader';
import FriendList from './FriendList';

const Friends = (props) => {
    const { auth } = props;

    return<>
        <FriendsHeader />
        { (auth != null || auth) &&
            auth.friendsIds.map(
                id => <FriendList id = { id } /> 
            )
        }
    </>
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Friends);