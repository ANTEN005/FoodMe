import React from 'react';
import {Form, Button, Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../messages/InlineError'

class LoginForm extends React.Component{
    state = {
        data: {
            email: '',
            password: ''
        }, // store form data
        loading: false,
        errors: {}
    };
    //when setting state we change data 
    //but we need to save what we allready have in data by ...
    //what we actually want to change stores in event.target.name
    onChange = event => this.setState({data: {...this.state.data, [event.target.name]: event.target.value}
    });
    //1. validate data
    //2. pass it to submit function
    //3. handle error cases
    onSubmit = () =>{
        //this object will be empty if no errors, otherwise display them
        const errors = this.validate(this.state.data);
        this.setState({errors});
        //if data is valid call on the submit which returns promise
        //because in the loginpage submit function we return the result of the login
        //and after that comes the promise
        if(Object.keys(errors).length === 0){
            this.setState({loading: true}); //set state loading before request, if everything goes well we will redirect and this component will dismount, so we dont have to do anyrhing, if there is error loading is false
            this.props.submit(this.state.data)
                .catch(err => this.setState({ //if something goes wrong errors from the server will be written into this components state 
                    errors: err.response.data.errors, loading: false
                }));
        }
    };
    //return errors if there are some
    validate = (data) =>{
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Fill in password";
        return errors;
    }
    
    render(){
        const{data, errors, loading} = this.state
        return(
            <Form onSubmit={this.onSubmit} loading={loading}>
                {errors.global && (
                <Message negative>
                <Message.Header>Something went wrong</Message.Header>
                <p>{errors.global}</p>
                </Message>
                )}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Enter email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {/* if there is an error, render it */}
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" 
                        id="password" 
                        name="password"
                        placeholder="Enter password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {/* if there is an error, render it */}
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}
//The parent(loginpage) of our component need to pass this submit function
LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;