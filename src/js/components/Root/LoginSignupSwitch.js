import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import { changeLoginButtonStatus } from '../../actions/index';


const mapDispatchToProps = dispatch => {
  return {
    changeLoginButtonStatus: loginButtonStatus => dispatch(changeLoginButtonStatus(loginButtonStatus))
  };
};

const mapStateToProps = state => {
  return { loginButtonStatus: state.loginButtonStatus };

};

class ConnectedLoginSignupSwitch extends Component{
  constructor(){
    super();
    this.state={};
  }

  changeLoginSignup(){
    this.props.changeLoginButtonStatus();
  }

  render(){
    let loginOrSignup = (this.props.loginButtonStatus === false)
      ? ["Already have an account?", "Login"]
      : ["Don't have an account?", "Sign up"]
    return(
      <div id='user-login-box'>
        <p>{ loginOrSignup[0] }</p>
        <Button onClick={ this.changeLoginSignup.bind(this) } id="signup-login-button">{ loginOrSignup[1] }</Button>
      </div>
    )
  }
}

const LoginSignupSwitch = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginSignupSwitch);

export default LoginSignupSwitch;
