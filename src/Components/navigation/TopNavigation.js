import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../actions/auth';

const TopNavigation = ({user, logout}) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">Dashboard</Menu.Item>
        <Menu.Item as={Link} to="/findrecipes">Browse</Menu.Item>
        <Menu.Item as={Link} to="/addrecipes">Add Recipes</Menu.Item>
        <Menu.Item as={Link} to="/myrecipes">My Recipes</Menu.Item>
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