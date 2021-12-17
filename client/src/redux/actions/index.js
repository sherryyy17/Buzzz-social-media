import axios from 'axios';
import { FETCH_USER } from './type';

export const fetchUser = () =>
    async (dispatch) => {
        const res = await axios.get('/api/currUser');
            
        dispatch({ type: FETCH_USER, payload: res.data });
    };
