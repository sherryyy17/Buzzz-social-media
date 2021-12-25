import axios from 'axios';
import { FETCH_USER, FETCH_SUGGESTED, UPDATE_USER, UPDATE_CURR_USER, SAVE_POST, FETCH_POST} from './type';

export const fetchUser = () =>
    async (dispatch) => {
        const res = await axios.get('/api/currUser');            
        dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSuggestedUsers = () => 
    async (dispatch) => {
        const users = await axios.get('/api/users');
        dispatch({ type: FETCH_SUGGESTED, payload: users.data });
};

export const UpdateCurrUser = (id, data) => 
    async (dispatch) => {
        const user = await axios.patch(`/api/users/${ id }`, data);
        dispatch({ type: UPDATE_CURR_USER, payload: user.data });
};

export const UpdateUser = (id, data) => 
    async (dispatch) => {
        const user = await axios.patch(`/api/users/${ id }`, data);
        dispatch({ type: UPDATE_USER, payload: user.data });
};

export const fetchPost = () =>
    async (dispatch) => {
        const postList = await axios.get('/api/posts');
        dispatch({ type: FETCH_POST, payload: postList.data });
};

export const SavePost = (data) => 
    async (dispatch) => {
        const posts = await axios.post(`/api/posts`, data);
        dispatch({ type: SAVE_POST, payload: posts.data });
};