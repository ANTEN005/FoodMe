import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { userLoggedIn } from './actions/auth';
//rootReducer is the whole tree, stateobject

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)));

//if there is a token in localstorage we want to dispatch userloggedin action, so when we refresh we stay logged in 
if (localStorage.foodmeJWT){
    const user = { token: localStorage.foodmeJWT};
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
document.getElementById('root')
);
registerServiceWorker();
