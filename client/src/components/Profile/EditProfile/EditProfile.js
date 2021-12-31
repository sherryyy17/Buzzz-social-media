import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import classes from './EditProfile.module.css';
import * as actions from '../../../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const EditProfile = (props) => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [profilePic, setprofilePic] = useState(null);
    const [cover, setCover] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [website, setWebsite] = useState("http");
    const [desg, setDesg] = useState(null);
    const [ iconClicked, setIconClicked ] = useState(false);
    const [ imgSelected, setImgSelected ] = useState("");
    const [ loading, setLoading ] = useState(false);

    let history = useNavigate();

    useEffect(()=>{
        if(props.auth != null || props.auth){
            setFirstName(props.auth.firstName);
            setLastName(props.auth.lastName);
            setprofilePic(props.auth.profilePic);
            setCover(props.auth.coverImg);
            setCountry(props.auth.address.country);
            setCity(props.auth.address.city);
            setDesg(props.auth.description);
        }
    },[]);

    const submitHandler = (e) => {
        e.preventDefault();
        props.UpdateCurrUser(props.auth.googleId, {
            firstName: firstName,
            lastName: lastName,
            coverImg: cover,
            address: {
                city: city,
                country: country
            },
            description: desg
        })
        history("/profile")
    }

    const uploadImg = async (e) => {
        const formData = new FormData();
        formData.append("file",e.target.files[0]);
        formData.append("upload_preset", "zu5ygaec");

        setLoading(true);
        const res = await axios.post(
            'https://api.cloudinary.com/v1_1/drmk1r3uw/image/upload',
            formData
            );
        console.log(res.data.secure_url);
        setCover(res.data.secure_url);
        setLoading(false);
    }

    const uploadProfileImg = async (e) => {
        const formData = new FormData();
        formData.append("file",e.target.files[0]);
        formData.append("upload_preset", "zu5ygaec");

        setLoading(true);
        const res = await axios.post(
            'https://api.cloudinary.com/v1_1/drmk1r3uw/image/upload',
            formData
            );
        console.log(res.data.secure_url);
        setprofilePic(res.data.secure_url);
        setLoading(false);
    }

    return <div className={classes.editContainer}>
        <h1>Edit Profile</h1>
        <div className={ classes.editProfile }>
            <div className = {classes.cover} >
                <label htmlFor="file-input">
                        <FontAwesomeIcon icon={ faFileUpload } className = { classes.fileUp } />
                </label>
                <input 
                    id="file-input" 
                    type='file' 
                    onChange={ uploadImg }
                    className={ classes.fileInp }
                />   
                <img src={ cover } className= { classes.coverImg } />
            </div>

            <div className = {classes.profile} >
                <img src = { profilePic } alt="profile photo" />
                <label htmlFor="file-dp">
                        <div className={ classes.profileUpload }>
                            <FontAwesomeIcon icon={ faCameraRetro } className = { classes.profileUp } />
                        </div>
                </label>
                <input 
                    id="file-dp" 
                    type='file' 
                    onChange={ uploadProfileImg }
                    className={ classes.fileInp }
                /> 
            </div>
            <div>
                <form>
                    <div>
                        <label for="firstName">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="" 
                            value={ firstName }
                            onChange={ (e) => setFirstName(e.target.value) }
                        />
                        <label for="lastName" className={classes.formSection}>Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder=""
                            value={ lastName }
                            onChange={ (e) => setLastName(e.target.value) }
                        />
                    </div>
                    <div>
                        <label for="designation">Designation</label>
                        <input 
                            type="text" 
                            name="designation" 
                            placeholder="" 
                            value={ desg }
                            onChange={ (e) => setDesg(e.target.value) }
                        />
                        <label for="website" className={classes.formSection}>My Website</label>
                        <input 
                            type="text" 
                            name="website" 
                            placeholder=""
                            value={ website }
                            onChange={ (e) => setWebsite(e.target.value) }
                        />
                    </div>
                    <div>
                        <label for="country">Country</label>
                        <input 
                            type="text" 
                            name="country" 
                            placeholder=""
                            value={ country }
                            onChange={ (e) => setCountry(e.target.value) }
                        />
                        <label for="city" className={classes.formSection}>City</label>
                        <input 
                            type="text" 
                            name="city" 
                            placeholder="" 
                            value={ city }
                            onChange={ (e) => setCity(e.target.value) }
                        />
                    </div>
                    <div className={ classes.save }>
                        {!loading && <button type="submit" onClick={ submitHandler } >Save</button>}
                    </div>
                </form>    
            </div>
            
        </div>

        
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps,actions)(EditProfile);
