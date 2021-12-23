import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SuggestionHeader = () => {
    return <header>
        <h3>Suggestions</h3>
        <FontAwesomeIcon icon={ faSearch } />
    </header>
}

export default SuggestionHeader;