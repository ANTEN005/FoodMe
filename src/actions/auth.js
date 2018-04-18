import {USER_LOGGED_IN} from '../types';
import api from '../api';
//takes user and returns user_logged_in and pass user down to it
//when this action is dispatched we want to place this
//user data into our state, this we need a reducer for
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})
//api request that will return promise and 
//then we get the data from the request and dispatch userLoggedIn action with that data
//the dispatch action will change via reducers the Redux store
export const login = (credentials) => (dispatch) => 
api.user.login(credentials).then(user => dispatch(userLoggedIn(user))); 