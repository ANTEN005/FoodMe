import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Dropdown, Image} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import {logout} from '../../actions/auth';

const TopNavigation = ({user, logout}) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
        <Menu.Item as={Link} to="/profile">Profile</Menu.Item>
        <Menu.Item as={Link} to="/recipes">Recipes</Menu.Item>
        <Menu.Item as={Link} to="/browse">Browse</Menu.Item>
        <Menu.Item position="right" onClick={() => logout()}>Logout</Menu.Item>
    </Menu>
);

TopNavigation.propTypes ={
    user: PropTypes.shape({
        email:PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, { logout})(TopNavigation);