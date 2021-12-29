import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faExternalLinkSquareAlt, faFileUpload, faEdit } from '@fortawesome/free-solid-svg-icons';
import classes from './UserProfile.module.css';
import axios from 'axios';

const UserProfile = (props) => {
    const [ iconClicked, setIconClicked ] = useState(false);
    const [ imgSelected, setImgSelected ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ coverImg, setCoverImg ] = useState("");
    let history = useNavigate();

    let firstName = '', lastName = '', profilePic = '',desg = '',city='',country='',friends='',cover='';

    if(props.auth != null || props.auth){
        firstName = props.auth.firstName;
        lastName = props.auth.lastName;
        profilePic = props.auth.profilePic;
        desg = props.auth.description;
        city = props.auth.address.city;
        country = props.auth.address.country;
        friends = props.auth.friendsIds.length;
        cover = props.auth.coverImg;
        console.log(profilePic);
    }

    const handleFileUploadClick = () => {
        setIconClicked(true);
    }

    const uploadImg = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",imgSelected);
        formData.append("upload_preset", "zu5ygaec");

        setLoading(true);
        const res = await axios.post(
            'https://api.cloudinary.com/v1_1/drmk1r3uw/image/upload',
            formData
            );
        props.UpdateCurrUser(props.auth.googleId,{ coverImg: res.data.secure_url });
        setCoverImg(res.data.secure_url);
        setLoading(false);
    }

    const editHandler = () => {
        history("/edit");
    }

    return <div className = {classes.profileContainer} >
        <div className = {classes.cover} >
            {/* {!coverImg &&  { !iconClicked
                ?
                <FontAwesomeIcon icon={ faFileUpload } onClick={ handleFileUploadClick } className = { classes.fileUp } />
                : [
                    (!coverImg ? 
                        <form>
                            <input type='file' name='image' onChange={(event) => setImgSelected(event.target.files[0]) }/>
                            <button type='submit' onClick={ uploadImg }>Submit</button>
                        </form> : "" 
                    )
                ]
            }} */}
            <img src={ cover } className= { classes.coverImg } />
        </div>
        <div className = {classes.profile} >
            <img src = { profilePic } alt="profile photo" />
            {loading ? <p>Loading...</p> : ''}
            <div className={ classes.username }>
                <h2>{ firstName } { lastName }</h2>
                <div className = { classes.edit } onClick = { editHandler }>
                    <FontAwesomeIcon icon = { faEdit } />
                    Edit Profile
                </div>
            </div>
            <p>{ desg }</p>
            <div className = {classes.info} >
                <p>{ city }</p>
                <p>{ country }</p>
                <p>friends(<b>{friends}</b>)</p>
            </div>
            <div className = { classes.btnContainer } >
                <button className = { classes.website } >
                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} className={ classes.icons } />
                    Visit Website
                </button>
            </div>
        </div>
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps, actions)(UserProfile);