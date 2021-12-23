import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FriendsHeader = () => {
    return <header>
        <h3>Friends</h3>
        <FontAwesomeIcon icon={ faSearch } />
    </header>
}

export default FriendsHeader;