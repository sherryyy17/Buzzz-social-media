import { FETCH_USER, UPDATE_CURR_USER } from "../actions/type";

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        case UPDATE_CURR_USER:
            return action.payload;
        default:
            return state;
    }
}