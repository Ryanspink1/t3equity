import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserData } from '../../actions/index';
import { login } from '../../actions/index';
import { Grid, Form, Button } from "semantic-ui-react";
import Private from './Private';
import { RequestError } from '../helpers/errorHandling';
import { AxiosRequest } from '../helpers/axios';
import FormError from '../helpers/FormError';
import { addFormError } from "../../actions/index";

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
    };
    this.handleChange = this.handleChange.bind(this);
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
        sessionStorage.setItem('t3_email', user.email)
        sessionStorage.setItem('t3_jwt', jwt)
        sessionStorage.setItem('t3_id', user.id.toString())
        sessionStorage.setItem('t3EquityLoginTime', Date.now().toString())
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    return(
      <Grid.Row columns={1} centered>
        <Grid.Column width={8}>
          <div id='login-form-container'>
            <FormError/>
            <Form className="login-form">
              <Form.Input onChange={ this.handleChange } id="email" placeholder='Email' width={16} ></Form.Input>
              <Form.Input onChange={ this.handleChange } id="password" type='password' placeholder='Password' width={16}></Form.Input>
              <Form.Field control={ Button } onClick={ (e)=>this.login(e) } id='login-button' size='small' >Login</Form.Field>
            </Form>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);

export default Login;
