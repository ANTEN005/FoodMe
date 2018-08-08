import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types';
import api from '../api';
import setAuthorizationHeader from "../utils/setAuthorizationHeader";
//takes user and returns user_logged_in and pass user down to it
//when this action is dispatched we want to place this
//user data into our state, this we need a reducer for
export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})
//user loggedout action is dispatched and we catch it in our reducer and the state is set to empty
export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
})
//api request that will return promise and 
//then we get the data from the request and dispatch userLoggedIn action with that data
//the dispatch action will change via reducers the Redux store
export const login = (credentials) => (dispatch) => 
api.user.login(credentials).then(user => {
    localStorage.foodmeJWT = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user))
}); 
//logout thunk action, we remove token from localstorage 
//and then we dispatch userloggedout action
export const logout = () => (dispatch) => {
    localStorage.removeItem('foodmeJWT');
    setAuthorizationHeader();
    dispatch(userLoggedOut());
}; 


