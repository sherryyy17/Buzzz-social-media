import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from '../Comments/Comments.module.css';

const Comments = (props) => {
    const [ userData, setUserData ] = useState(null);
    const { comment } = props;

    useEffect( async () =>{
            const user = await axios.get(`/api/users/${ comment.commentedBy }`);
            setUserData(user.data.profilePic);
    });

    return <div className={ classes.commentContainer }>
        <img src = { userData } alt = "profile" />
        <p>{ comment.message }</p>
    </div>
}

export default Comments;