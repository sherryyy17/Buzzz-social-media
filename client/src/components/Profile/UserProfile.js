import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image } from 'cloudinary-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faExternalLinkSquareAlt, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import classes from './UserProfile.module.css';
import axios from 'axios';

const UserProfile = (props) => {
    const [ iconClicked, setIconClicked ] = useState(false);
    const [ imgSelected, setImgSelected ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ coverImg, setCoverImg ] = useState("");

    let firstName = '', lastName = '', profilePic = '';

    if(props.auth != null || props.auth){
        firstName = props.auth.firstName;
        lastName = props.auth.lastName;
        profilePic = props.auth.profilePic;
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
        setCoverImg(res.data.secure_url);
        setLoading(false);
    }

    return <div className = {classes.profileContainer} >
        <div className = {classes.cover} >
            { !iconClicked
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
            }
            <Image 
                cloudName="drmk1r3uw"
                publicId= { coverImg }
                className= { classes.coverImg }
            />
        </div>
        <div className = {classes.profile} >
            <img src = { profilePic } alt="profile photo" />
            {loading ? <p>Loading...</p> : ''}
            <h2>{ firstName } { lastName }</h2>
            <p>About that person</p>
            <div className = {classes.info} >
                <p>City</p>
                <p>Country</p>
                <p>friends</p>
            </div>
            <div className = { classes.btnContainer } >
                <button className = { classes.frnd } >
                    <FontAwesomeIcon icon={faUserPlus} className={ classes.icons } />
                    Add Friend
                </button>
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

export default connect(mapStateToProps)(UserProfile);