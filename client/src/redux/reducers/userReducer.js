import { FETCH_SUGGESTED, UPDATE_USER } from "../actions/type";

export default function(state = [], action){
    switch(action.type) {
        case FETCH_SUGGESTED:
            return action.payload || false;
        case UPDATE_USER: {
            const users = state.filter(user => user.googleId !== action.payload.googleId );
            return [
                ...users,
                action.payload
            ]
        }
        default:
            return state;
    }
}
