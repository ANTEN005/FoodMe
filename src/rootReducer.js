import { combineReducers} from 'redux';
import user from './reducers/user';
import {recipes,selectedRecipe} from './reducers/recipes';

export default combineReducers({
    user,
    recipes,
    selectedRecipe: selectedRecipe
});