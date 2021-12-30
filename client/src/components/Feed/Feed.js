import React from 'react';
import Header from '../Header/Header';
import PostList from '../Posts/PostList';
import Suggestions from '../Suggestions/Suggestions';
import Friends from '../Friends/Friends';

const Feed = () => {
    return <div>
            <Header />
            <div style={{ display:'flex', backgroundColor: '#e6e2e1' }}>
                <div style={{ flex: '5' }}>
                    <PostList />
                </div>
                <div style={{ display:'flex', flexDirection: 'column', flex: '2' }}>
                    <Friends />
                    <Suggestions />
                </div>
            </div>
        </div>
}

export default Feed;