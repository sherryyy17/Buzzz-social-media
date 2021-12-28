import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import classes from './EditProfile.module.css';
import * as actions from '../../../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const EditProfile = (props) => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [profilePic, setprofilePic] = useState(null);
    const [cover, setCover] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [website, setWebsite] = useState("http");
    const [desg, setDesg] = useState(null);
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
            address: {
                city: city,
                country: country
            },
            description: desg
        })
        history("/profile")
    }

    return <div className={classes.editContainer}>
        <h1>Edit Profile</h1>
        <div className = {classes.cover} >
            <img src={ cover } className= { classes.coverImg } />
        </div>
        <div className = {classes.profile} >
            <img src = { profilePic } alt="profile photo" />
        </div>
        <form>
            <div className={classes.formSection}>
                <label for="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="" 
                    value={ firstName }
                    onChange={ (e) => setFirstName(e.target.value) }
                />
                <label for="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder=""
                    value={ lastName }
                    onChange={ (e) => setLastName(e.target.value) }
                />
            </div>
            <div className={classes.formSection}>
                <label for="designation">Designation</label>
                <input 
                    type="text" 
                    name="designation" 
                    placeholder="" 
                    value={ desg }
                    onChange={ (e) => setDesg(e.target.value) }
                />
                <label for="website">My Website</label>
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
                <label for="city">City</label>
                <input 
                    type="text" 
                    name="city" 
                    placeholder="" 
                    value={ city }
                    onChange={ (e) => setCity(e.target.value) }
                />
            </div>
            <div>
                <button type="submit" onClick={ submitHandler }>Save</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    </div>
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps,actions)(EditProfile);
