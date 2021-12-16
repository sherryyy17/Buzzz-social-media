import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUserFriends } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    useEffect(() => {
        console.log('xyzzzz');
        axios.get('http://localhost:5000/currUser')
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
            .catch(err => console.log(err.message));
    }, []);

    return <div className={classes.container}>
        <div>
            <img src={ logo } alt="ttn-logo" className={classes.logo} />
        </div>
        <nav>
            <img src={ logo } alt="profile-pic" />
            <span>{firstName} {lastName}</span>
            <FontAwesomeIcon icon={faComment} className={classes.icons} />
            <FontAwesomeIcon icon={ faUserFriends } />
        </nav>
    </div>
}

export default Header;