import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

//Connect our route to redux store to see if user is authenticated
//if the user isAuthenticated, we render component otherwise redirect.

const UserRoute = ({ isAuthenticated, component: Component, ...rest}) =>(
<Route {...rest} render={props => isAuthenticated ? <Component {...props}/> : <Redirect to='/'/>}
    />
);

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool.isRequired
};

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token 
    }
}

export default connect(mapStateToProps)(UserRoute);