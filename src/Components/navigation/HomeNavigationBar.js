import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const HomeNavigationBar = ({user, logout}) => (
    <Menu secondary pointing>
        <Menu.Item as='a' as={Link} to='/' position='left' active>FoodMe</Menu.Item>
        <Menu.Item as={Link} to="/login">Login</Menu.Item>
    </Menu>
);

export default HomeNavigationBar;