import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './SuggestedUsers.module.css';

const SuggestionHeader = () => {
    return <header className = { classes.suggHead }>
        <h3>Suggestions</h3>
        <FontAwesomeIcon icon={ faSearch } className={ classes.icon }/>
    </header>
}

export default SuggestionHeader;