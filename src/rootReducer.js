import { combineReducers} from 'redux';
import user from './reducers/user';
import recipes from './reducers/recipes';

export default combineReducers({
    user,
    recipes
});