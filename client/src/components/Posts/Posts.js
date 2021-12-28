import { faCommentDots, faEllipsisH, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Comments from "./Comments/Comments";
import classes from './Posts.module.css';

const Posts = (props) => {
    const [ isLiked, setIsLiked ] = useState(props.post.postReacts.likedBy.includes(props.auth.googleId));
    const [ isDisliked, setIsDisLiked ] = useState(props.post.postReacts.dislikedBy.includes(props.auth.googleId));
    const [ msg, setMsg ] = useState(null);
    const [ showCmts, setShowCmts ] = useState(false);

    const { post, auth } = props;

    const date = post.createdAt;
    let commLen = 0, profilePic = '';
    if(post.comments) {
        commLen = post.comments.length;
    }

    if(auth != null || auth) {
        profilePic = props.auth.profilePic;
    }

    const removeLike = () => {
        post.postReacts.likedBy.map((item, index) => {
            if(item == auth.googleId){
                post.postReacts.likedBy.splice(index, 1);
            }
        });
        props.updatePost(post._id, { postReacts: {
            ...post.postReacts,
            ...post.postReacts.likedBy
        }});
        setIsLiked(false);
    }

    const removeDislike = () => {
        post.postReacts.dislikedBy.map((item, index) => {
            if(item == auth.googleId){
                post.postReacts.dislikedBy.splice(index, 1);
            }
        });
        props.updatePost(post._id, { postReacts: {
            ...post.postReacts,
            ...post.postReacts.dislikedBy
        }});
        setIsDisLiked(false);
    }

    const handleLikes = () => {
        if(!isLiked) {
            if(props.post.postReacts.dislikedBy.includes(props.auth.googleId)) {
                removeDislike();
            }
            post.postReacts.likedBy.push(auth.googleId);
            props.updatePost(post._id, { postReacts: {
                ...post.postReacts,
                ...post.postReacts.likedBy
            }});
            setIsLiked(!isLiked);
        } else {
            removeLike();
        }
    }

    const handleDisLikes = () => {
        if(!isDisliked) {
            if(props.post.postReacts.likedBy.includes(props.auth.googleId)) {
                removeLike();
            }
            post.postReacts.dislikedBy.push(auth.googleId);
            props.updatePost(post._id, { postReacts: {
                ...post.postReacts,
                ...post.postReacts.dislikedBy
            }});
            setIsDisLiked(!isDisliked);
        } else {
            removeDislike();
        }
    }

    const inputHandler = (e) => {
        setMsg(e.target.value);
    }

    const addComment = (e) => {
        e.preventDefault();
        if( msg !== null ) {
            
            post.comments.push({
                commentedBy: auth.googleId, 
                message: msg
            });

            props.updatePost( post._id, { 
                comments: [
                    ...post.comments
                ]
            });
            setMsg("");
        }
    }    

    const showComments = () => {
        setShowCmts(!showCmts);
    }

    return <div className = { classes.postContainer } >
        <div className = { classes.postHeader } >
            <div className = { classes.postedBy } >
                <img src={ post.postedBy.profilePic } alt='post by profile pic' />
                <div className = { classes.name } >
                    <h4>{ post.postedBy.firstName } { post.postedBy.lastName }</h4>
                    <p>{ date }</p>
                </div>
            </div>
            <FontAwesomeIcon icon = { faEllipsisH } />
        </div>
        <div className={ classes.caption }>
            <p>{ post.caption }</p>
        </div>
        { post.images 
            && 
            <div className={ classes.postImg }>
                {/* <img src = { post.images[0] } alt = 'posted pics' /> */}
                {
                    post.images.map(item => <img src = { item } alt = 'posted pics' />)
                }
            </div> 
        }
        <div className={ classes.counts }>
            <div>
                <FontAwesomeIcon icon={ faThumbsUp } className={ classes.thumbsup }/>
                <span className={ classes.NoOflikes }>{ post.postReacts.likedBy.length }</span>
                <FontAwesomeIcon icon={ faThumbsDown } className={ classes.thumbsdown } />
                <span className={ classes.NoOfDislikes }>{ post.postReacts.dislikedBy.length }</span>
            </div>
            <div>
                <span onClick={ showComments } className={ classes.show }>{ post.comments.length } comment(s)</span>
            </div>    
        </div>
        <div className = { classes.actions }>
            <div>
                <FontAwesomeIcon icon = { faThumbsUp } className = { !isLiked ? classes.hitActions : classes.clicked } onClick={ handleLikes } />
                Like
            </div>
            <div>
                <FontAwesomeIcon icon = { faThumbsDown } className = { !isDisliked ? classes.hitActions : classes.clicked } onClick={ handleDisLikes } />
                Dislike
            </div>
            <div>
                <FontAwesomeIcon icon = { faCommentDots } className = { classes.hitActions } />
                Comment
            </div>
        </div>
        <div className = { classes.writeComment }>
                <div className = { classes.cmtInput }>
                    <img src = { profilePic } alt = "profile-pic"/>
                    <input 
                        type = 'text' 
                        placeholder = "Write a Comment..." 
                        onChange={ inputHandler }
                        value={ msg }
                    />
                </div>
                <button type = "submit" onClick = { addComment }>Post</button>
        </div>
        { showCmts && 
            post.comments.map(cmt => <Comments comment = { cmt } />)
        }
    </div>
};

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps,actions)(Posts);