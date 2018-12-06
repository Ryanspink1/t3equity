import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { addUserData } from '../../actions/index';
import { login } from '../../actions/index';
import { changeLoginButtonStatus } from '../../actions/index';
import { AxiosRequest } from "../../helpers/axios";
import { RequestError } from "../../helpers/error-handling";
import { addFormError } from "../../actions/index";
import FormError from '../helpers/FormError';

const mapDispatchToProps = dispatch => {
  return {
    addUserData:             userData =>          dispatch( addUserData(userData) ),
    login:                   loggedIn =>          dispatch( login(loggedIn) ),
    changeLoginButtonStatus: loginButtonStatus => dispatch( changeLoginButtonStatus(loginButtonStatus) ),
    addFormError:            formError =>         dispatch(addFormError(formError)),
  };
};

const mapStateToProps = state => {
  return { loginButtonStatus: state.loginButtonStatus };
}

class ConnectedLoginSignup extends Component{
  constructor() {
    super();
    this.state={
      email:    "",
      password: "",
      jwt:"",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({ [event.target.id]: event.target.value});
  }

  signUp(event){
    event.preventDefault();
    ((this.state.email === "" || this.state.password === ""))
      ? this.props.addFormError('blank')
      : this.createUser(event)
  }

  createUser(event){
    const requestParams = {
      method:  'post',
      url:     'http://localhost:3001/api/v1/users',
      headers: { 'content-type':'application/json' },
      data:    { 'email': this.state.email, 'password':this.state.password }
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        this.login(event)
      }
    ).catch((error) => {
      RequestError(error)
      this.props.addFormError('signUp')
    });
  }
//Login///////////

  login(event){
    event.preventDefault();
    ((this.state.email === "" || this.state.password === ""))
      ? this.props.addFormError('blank')
      : this.postUserLogin()
  }

  postUserLogin(){
    const requestParams = {
        method:  'post',
        url:     'http://localhost:3001/api/v1/user_token',
        headers: { 'content-type':'application/json' },
        data:    { 'auth': { 'email': this.state.email,'password':this.state.password }}
      }
      AxiosRequest(
        requestParams
      ).then(
        response => {
          this.getUserData(response.data.jwt)
          this.setState({ jwt:response.data.jwt })
        }
      ).catch((error) => {
        RequestError(error)
        this.props.addFormError('login')
      });
  }

  getUserData(jwt) {
    const requestParams = {
      method:  'get',
      url:     'http://localhost:3001/api/v1/users',
      headers: {'Authorization' :'Bearer ' + jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const user = response.data
        this.props.addUserData({
                                email: user.email,
                                jwt: jwt,
                                id: user.id
                              })
        this.props.login()
        sessionStorage.setItem('email', user.email)
        sessionStorage.setItem('jwt', jwt)
        sessionStorage.setItem('id', user.id.toString())
        sessionStorage.setItem('uMessageloginTime', Date.now().toString())
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    let loginOrSignup = this.props.loginButtonStatus
    let formParams = (loginOrSignup === true)
      ? ["Login", (e)=>this.login(e)]
      : ["Sign up", (e)=>this.signUp(e) ]
    return(
      <div id='signup-box'>
        <p id='signup-box-header'>uMessage</p>
        <p id='signup-box-message'> { formParams[0]} to chat with your friends. </p>
        <div id='signup-form-container'>
          <FormError/>
          <Form className="signup-form">
            <Form.Input onChange={ this.handleChange } id="email" placeholder='Email' width={16} ></Form.Input>
            <Form.Input onChange={ this.handleChange } id="password" type='password' placeholder='Password' width={16}></Form.Input>
            <Form.Field control={ Button } onClick={ formParams[1] } id='signup-login-button' size='small' >{ formParams[0] }</Form.Field>
          </Form>
        </div>
      </div>
    )
  }
}

const LoginSignup = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginSignup);

export default LoginSignup;
