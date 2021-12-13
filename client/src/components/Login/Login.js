import React from "react";
import classes from './Login.module.css';
import logo from '../../assets/logo.jpg'

const Login = () => {
    return (
        <div className={classes.container} >
            <div className={classes.innerContainer} >
                <img src={logo} alt="TTN Logo" />
                <h3>Enter your details and Start<br/> your journey with us</h3>
                <p>Don't stop until you're proud</p>
                <button>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login;