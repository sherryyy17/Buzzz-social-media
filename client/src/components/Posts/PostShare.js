import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import classes from './PostShare.module.css';
import * as actions from '../../redux/actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostShare = (props) => {
    const [loading, setLoading ] = useState(false);
    const [ imgSelected, setImgSelected ] = useState([]);
    const textPost = useRef("");
    let navigate = useNavigate();

    let profilePic = '';

    if(props.auth != null || props.auth) {
        profilePic = props.auth.profilePic;
    }

    const handleFileAdd = async (event) => {
        const formData = new FormData();
        formData.append("file",event.target.files[0]);
        formData.append("upload_preset", "ntqyan7w");

        setLoading(true);
        const res = await axios.post(
            'https://api.cloudinary.com/v1_1/drmk1r3uw/image/upload',
            formData
            );
        console.log(res.data.secure_url);
        setImgSelected(imgSelected => [...imgSelected, res.data.secure_url]);
        setLoading(false);
    }

    const savePost = async (e) => {
        e.preventDefault();
        console.log(textPost.current.value);
        console.log(imgSelected);
        props.SavePost({
            caption: textPost.current.value,
            images: imgSelected,
            postedBy: props.auth
        });
    }


    
    return <div className={ classes.postContainer } >
        <div>
            <img src = { profilePic } alt="profile-pic" onClick = { () => navigate('/profile') } />
        </div>
        <div className={ classes.textContainer }>
            <input 
                type = "text" 
                placeholder='Start a post...' 
                className={ classes.textPost } 
                ref = { textPost }
            />
        </div>
        <div className={ classes.imageUpload }>
            <label htmlFor="file-input">
                <FontAwesomeIcon icon = { faImages } className={ classes.icon } />
            </label>
            <input id="file-input" type="file" onChange={ handleFileAdd } />
            <p>Photo/Video</p>
        </div>
        { !loading && <button type='submit' onClick={ savePost } >Post</button> }        
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps, actions)(PostShare);