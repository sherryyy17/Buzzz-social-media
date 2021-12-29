import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from '../../Suggestions/SuggestedUsers.module.css';

const RequestHeader = () => {
    return <header className = { classes.suggHead }>
        <h3>Friend Requests</h3>
        <FontAwesomeIcon icon={ faSearch } className={ classes.icon }/>
    </header>
}

export default RequestHeader;