import {SAVE_NEW_RECIPE} from '../types';
//reducers take states and actions and return a new state
export default function recipes(state = {}, action = {}){
    switch(action.type){
        case SAVE_NEW_RECIPE:
        return action.recipe;
        default: return state;
        
    }
}