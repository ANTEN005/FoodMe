import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

//When user is logged in we have user record with token in redux state
//when we click on logout button we dispatch the logout thunk action in auth
const Homepage = ({isAuthenticated, logout}) => (
    <div>
        <h1> Home Page </h1>
        {isAuthenticated ? (
            <button onClick={() => logout()}>Logout </button> 
        ):( 
        <div><Link to="/login">Login</Link> or 
        <Link to='/signup'>Sign Up</Link>
        </div>
        )}
    </div>
);

Homepage.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};
//false if token is undefined otherwise true
function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token    
    }    
}

export default connect(mapStateToProps, {logout})(Homepage);