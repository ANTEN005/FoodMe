import React from "react";
import PropTypes from "prop-types";
import LoginForm from '../forms/LoginForm'

class LoginPage extends React.Component{
    //will recive some data, we gonna dispatch fun action(?)
    //make a sync request, get data back, update our reducers in redux store and then redirect somewhere
    //the form does not know anything about this, the form only collect data and validate it and send us  this data
    submit = data => {
        console.log(data);
    };
    render(){
        return(
            <div>
                <h1> Login Page </h1>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

export default LoginPage;