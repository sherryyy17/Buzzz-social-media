import { FETCH_POST, SAVE_POST, UPDATE_POST,DELETE_POST } from "../actions/type";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_POST:{
            return action.payload || false;
        }
        case SAVE_POST :
            return [
                action.payload?.newPost,
                ...state
            ]
        case UPDATE_POST: {
            state.map((item, index) => {
                if(item._id === action.payload._id){
                    state.splice(index, 1, action.payload);
                }
            })
            console.log(state);
            return state;
        }
        case DELETE_POST: {
            const newPosts = state.filter(
                post => post._id !== action.payload._id
            );
            return [...newPosts];
        }
        default:
            return state;
    }
}
