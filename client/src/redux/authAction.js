import axios from 'axios';

const FETCH_USER = 'fetch_user';

const fetchUser = () => {
    return function (dispatch) {
        axios
            .get('/api/currUser')
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    };
};

