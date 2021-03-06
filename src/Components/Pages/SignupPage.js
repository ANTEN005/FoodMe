import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignupForm from '../forms/SignupForm';
import {signup} from '../../actions/users';

//call signup action when form is submitted
class SignupPage extends React.Component {
    submit = (data) => this.props.signup(data).then(() => this.props.history.push('/dashboard'));



    render(){
        return (
            <div>
               <h1>Sign up</h1> 
                <SignupForm submit={this.submit}/>
            </div>
        );
    }
}

SignupPage.propTypes ={
    history:PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};
//signup action is used here passed as a prop
export default connect(null, {signup})(SignupPage);