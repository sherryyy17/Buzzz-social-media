import { faCommentDots, faEdit, faEllipsisH, faEllipsisV, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from './Posts.module.css';

const Posts = (props) => {
    const [ isClicked, setIsClicked ] = useState(false);
    const [ isDisliked, setIsDisLiked ] = useState(false);
    const { post } = props;
    const date = post.createdAt;
    const commLen = post.comments.length;
    const postLen = post.images.length;

    const handleLikes = () => {
        if(!isClicked) {
            //like + 1
            post.postReacts.likes += 1;
        } else {
            //like - 1
            post.postReacts.likes -= 1;
        }
        setIsClicked(!isClicked);
    }

    const handleDisLikes = () => {
        if(!isDisliked) {
            post.postReacts.dislikes += 1;
        } else {
            post.postReacts.dislikes -= 1;
        }
        setIsDisLiked(!isDisliked);
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
        { postLen 
            && 
            <div className={ classes.postImg }>
                <img src = { post.images[0] } alt = 'posted pics' />
            </div> 
        }
        <div className={ classes.counts }>
            <div>
                <FontAwesomeIcon icon={ faThumbsUp } className={ classes.thumbsup }/>
                <span className={ classes.NoOflikes }>{ post.postReacts.likes }</span>
                <FontAwesomeIcon icon={ faThumbsDown } className={ classes.thumbsdown } />
                <span className={ classes.NoOfDislikes }>{ post.postReacts.dislikes }</span>
            </div>
            <div>
                <span>{ commLen } comment(s)</span>
            </div>    
        </div>
        <div className = { classes.actions }>
            <div>
                <FontAwesomeIcon icon={ faThumbsUp } className = { !isClicked ? classes.hitActions : classes.clicked } onClick={ handleLikes } />
                Like
            </div>
            <div>
                <FontAwesomeIcon icon={ faThumbsDown } className = { !isDisliked ? classes.hitActions : classes.clicked } onClick={ handleDisLikes } />
                Dislike
            </div>
            <div>
                <FontAwesomeIcon icon={ faCommentDots } className = { classes.hitActions } />
                Comment
            </div>
        </div>
        {/* <Comment /> */}
    </div>
}

export default Posts;