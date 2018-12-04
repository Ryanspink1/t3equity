import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Form, Button } from 'semantic-ui-react';
import { addUserData } from '../../actions/index'
import { login } from '../../actions/index'
import { changeLoginButtonStatus } from '../../actions/index'
// import FormError from '../../helpers/FormError';

const mapDispatchToProps = dispatch => {
  return {
    addUserData:             userData =>          dispatch( addUserData(userData) ),
    login:                   loggedIn =>          dispatch( login(loggedIn) ),
    changeLoginButtonStatus: loginButtonStatus => dispatch( changeLoginButtonStatus(loginButtonStatus) ),
  };
};

const mapStateToProps = state => {
  return { loginButtonStatus: state.loginButtonStatus };
}

class ConnectedSignup extends Component{
  constructor() {
    super();
    this.state={
      email:    "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event){
    this.setState({ [event.target.id]: event.target.value});
  }

  signUp(event){
    event.preventDefault();

  }

  render(){
    let loginOrSignup = this.props.loginButtonStatus
    return(
      <div id='signup-box'>
        <p id='signup-box-header'>uMessage</p>
        <p id='signup-box-message'> Sign up to chat with your friends. </p>
        <div id='signup-form-container'>
          <Form className="signup-form">
            <Form.Input onChange={ this.handleChange } id="email" placeholder='Email' width={16} ></Form.Input>
            <Form.Input onChange={ this.handleChange } id="password" type='password' placeholder='Password' width={16}></Form.Input>
            <Form.Field control={ Button } onClick={ this.signUp.bind(this) } id='signup-login-button' size='small' >Sign up</Form.Field>
          </Form>
        </div>
      </div>
    )
  }
}

const Signup = connect(mapStateToProps, mapDispatchToProps)(ConnectedSignup);

export default Signup;
