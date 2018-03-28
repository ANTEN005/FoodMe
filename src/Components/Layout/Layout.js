import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from './Toolbar';
import Login from '../LoginPage/Login'
import classes from './Layout.css'

const layout = ( props ) => (
    <div>
        <Toolbar/> 
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);

export default layout;