import { faCommentDots, faEllipsisH, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Comments from "./Comments/Comments";
import classes from './Posts.module.css';

const Posts = (props) => {
    const [ isLiked, setIsLiked ] = useState(props.posted.postReacts?.likedBy.includes(props.auth.googleId));
    const [ isDisliked, setIsDisLiked ] = useState(props.posted.postReacts?.dislikedBy.includes(props.auth.googleId));
    const [ msg, setMsg ] = useState(null);
    const [ showCmts, setShowCmts ] = useState(false);
    const [ style, setStyle] = useState({display: 'none'});
    const [ isClicked, setIsClicked ] = useState(false);
    const delPermission = props.delPermission;

    const { posted, auth } = props;

    const date = posted.createdAt;
    let commLen = 0, profilePic = '';
    if(posted.comments) {
        commLen = posted.comments.length;
    }

    if(auth != null || auth) {
        profilePic = props.auth.profilePic;
    }

    const removeLike = () => {
        posted.postReacts?.likedBy.map((item, index) => {
            if(item == auth.googleId){
                posted.postReacts?.likedBy.splice(index, 1);
            }
        });
        props.updatePost(posted._id, { postReacts: {
            ...posted.postReacts,
            ...posted.postReacts?.likedBy
        }});
        setIsLiked(false);
    }

    const removeDislike = () => {
        posted.postReacts?.dislikedBy.map((item, index) => {
            if(item == auth.googleId){
                posted.postReacts?.dislikedBy.splice(index, 1);
            }
        });
        props.updatePost(posted._id, { postReacts: {
            ...posted.postReacts,
            ...posted.postReacts?.dislikedBy
        }});
        setIsDisLiked(false);
    }

    const handleLikes = () => {
        if(!isLiked) {
            if(props.posted.postReacts?.dislikedBy.includes(props.auth.googleId)) {
                removeDislike();
            }
            posted.postReacts?.likedBy.push(auth.googleId);
            props.updatePost(posted._id, { postReacts: {
                ...posted.postReacts,
                ...posted.postReacts?.likedBy
            }});
            setIsLiked(!isLiked);
        } else {
            removeLike();
        }
    }

    const handleDisLikes = () => {
        if(!isDisliked) {
            if(props.posted.postReacts?.likedBy.includes(props.auth.googleId)) {
                removeLike();
            }
            posted.postReacts?.dislikedBy.push(auth.googleId);
            props.updatePost(posted._id, { postReacts: {
                ...posted.postReacts,
                ...posted.postReacts?.dislikedBy
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
            
            posted.comments.push({
                commentedBy: auth.googleId, 
                message: msg
            });

            props.updatePost( posted._id, { 
                comments: [
                    ...posted.comments
                ]
            });
            setMsg("");
        }
    }    

    const showComments = () => {
        setShowCmts(!showCmts);
    }

    const showOpts = () => {
        if(!isClicked) {
            //show divs
            setStyle({ display: 'block' });
            setIsClicked(true);
        } else {
            //hide div
            setStyle({ display: 'none' });
            setIsClicked(false);
        }
    }

    const reportPost = () => {
        props.updatePost(posted._id, { 
            isReported: true
        });
        alert("Post Reported!")
    }

    const deletePost = () => {
        props.deletePost(posted._id);
    }

    const keepPost = () => {
        props.updatePost(posted._id, { 
            isReported: false
        });
    }

    return <div className = { classes.postContainer } >
        <div className = { classes.postHeader } >
            <div className = { classes.postedBy } >
                <img src={ posted.postedBy?.profilePic } alt='post by profile pic' />
                <div className = { classes.name } >
                    <h4>{ posted.postedBy?.firstName } { posted.postedBy?.lastName }</h4>
                    <p>{ date }</p>
                </div>
            </div>
            <div className = { classes.options }>
                <FontAwesomeIcon 
                    icon = { faEllipsisH } 
                    className={classes.menu}
                    onClick = { showOpts }
                />
                <ul style={ style }>
                    {delPermission == 'false' && <li onClick={ reportPost }>Report Post</li> }
                    {delPermission == 'false' && <li>Block user</li> }
                    {delPermission == 'true' && <li onClick={ deletePost }>Delete Post</li> }
                    {delPermission == 'true' && <li onClick={ keepPost }>Keep Post</li> }
                </ul>
            </div>
        </div>
        <div className={ classes.caption }>
            <p>{ posted.caption }</p>
        </div>
        { posted.images 
            && 
            <div className={ classes.postImg }>
                {/* <img src = { post.images[0] } alt = 'posted pics' /> */}
                {
                    posted.images.map(item => <img src = { item } alt = 'posted pics' />)
                }
            </div> 
        }
        <div className={ classes.counts }>
            <div>
                <FontAwesomeIcon icon={ faThumbsUp } className={ classes.thumbsup }/>
                <span className={ classes.NoOflikes }>{ posted.postReacts?.likedBy.length }</span>
                <FontAwesomeIcon icon={ faThumbsDown } className={ classes.thumbsdown } />
                <span className={ classes.NoOfDislikes }>{ posted.postReacts?.dislikedBy.length }</span>
            </div>
            <div>
                <span onClick={ showComments } className={ classes.show }>{ posted.comments?.length } comment(s)</span>
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
            posted.comments.map(cmt => <Comments comment = { cmt } />)
        }
    </div>
};

function mapStateToProps( { auth, post } ) {
    return { auth, post };    
}

export default connect(mapStateToProps,actions)(Posts);