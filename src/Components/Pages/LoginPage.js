import React from "react";
import PropTypes from "prop-types";
import LoginForm from '../forms/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';

class LoginPage extends React.Component{
    //will recieve some data, we then dispatch login action with this data
    //make a sync request, get data back, update our reducers in redux store and then redirect somewhere
    //the form does not know anything about this, the form only collect data and validate it and send us  this data
    submit = data => 
        this.props.login(data).then(() => this.props.history.push('/dashboard'));
    render(){
        return(
            <div>
                <h1> Login</h1>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}
//our component expects history object and push method
LoginPage.propTypes ={
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};
//first param in connect pass some data from reduxState in to this component
//second param, the function we want to wrap in the dispatch call
export default connect(null, {login})(LoginPage);