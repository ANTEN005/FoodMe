import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
//reducers take states and actions and return a new state
export default function user(state = {}, action = {}){
    switch(action.type){
        //case if user_logged_in return new state
        case USER_LOGGED_IN:
            return action.user;
        //if logged out, set state to empty
        case USER_LOGGED_OUT:
            return {};
        default: return state;
    }
}