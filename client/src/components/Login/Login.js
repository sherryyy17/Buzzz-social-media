import React from "react";
import classes from './Login.module.css';
import logo from '../../assets/logo.png';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'

const Login = (props) => {
    if( props.auth) {
        return <Navigate replace to="/feed" />
    }

    const loginHandler = () => {
        window.open('http://localhost:5000/auth/google',"_self");
    }

    return (
        <div className={classes.container} >
            <div className={classes.innerContainer} >
                <img src={logo} alt="TTN Logo" />
                <h3>Enter your details and Start<br/> your journey with us</h3>
                <p>Don't stop until you're proud</p>
                <button onClick={ loginHandler }>Sign in with Google</button>
            </div>
        </div>
    )
}

function mapStateToProps( { auth } ) {
    return { auth };    
}

export default connect(mapStateToProps)(Login);