import React, { useState } from 'react';
import classes from './Toggle.module.css';

const Toggle = (props) => {
    const [ isActive, setIsActive ] = useState(false);

    const toggleMode = () => {
        if(!isActive) {
            props.adminCallback(true);
        } else {
            props.adminCallback(false);
        }
        setIsActive(!isActive);
    }

    return <div className={ classes.toggleCont }>
            <div className={ !isActive ? classes.toggleBtn : classes.active } onClick={ toggleMode }>
                <div className={ classes.circle }></div>
            </div>
            <span>Admin</span>
        </div>
}

export default Toggle;