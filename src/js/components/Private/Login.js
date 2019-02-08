import React, { Component } from "react";
import { connect } from "react-redux";
import FormError from '../helpers/FormError';
import { AxiosRequest } from "../../helpers/axios";

import Private from './Private';

const mapDispatchToProps = dispatch => {
  return {
    addUserData: userData => dispatch(addUserData(userData)),
    login: loggedIn => dispatch(login(loggedIn)),
    addFormError: formError => dispatch(addFormError(formError)),
  };
};

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class ConnectedLogin extends Component{
  constructor(){
    super();
    this.state={
      email: "",
      password: "",
    }
  }

  handleChange(event){
     this.setState({ [event.target.id]: event.target.value});
   }

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
        }
      ).catch((error) => {
        RequestError(error)
        this.props.addFormError('login')
      });
  }

  getUserData(jwt) {
    const requestParams = {
      method:  'get',
      url:     'http://localhost:3001/api/v1/users/',
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

  }
}

const Login = connect(mapStateToProps, MapDispatchToProps)(ConnectedLogin);

export default Login;
