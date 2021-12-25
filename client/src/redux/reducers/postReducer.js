import { FETCH_POST, SAVE_POST } from "../actions/type";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_POST:{
            return action.payload || false;
        }
        case SAVE_POST :
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}
