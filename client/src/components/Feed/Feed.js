import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import Header from '../Header/Header';
import PostList from '../Posts/PostList';
import Suggestions from '../Suggestions/Suggestions';
import Friends from '../Friends/Friends';
import Scroll from '../Scroll/Scroll';

const Feed = (props) => {
    let navigate = useNavigate();

    if( !props.auth ) {
        navigate('/')
    }
    return <div>
            <div style={{ position: "fixed", top: "0", width:"100%", backgroundColor: "white", zIndex: "2" }} >
                <Header />
            </div>
            <div style={{ display:'flex', backgroundColor: '#e6e2e1', marginTop: "3rem" }}>
                <div style={{ width: "75%" }}>
                    <PostList />
                </div>
                <div style={{ display:'flex', flexDirection: 'column', position: "fixed", right: "0", width: "25%" }}>
                    <Friends />
                    <Suggestions />
                    <div style={{ position: "fixed", right: "1rem", bottom: "1rem", zIndex: "3" }}>
                        <Scroll />
                    </div>
                </div>
            </div>
        </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect( mapStateToProps )( Feed );
