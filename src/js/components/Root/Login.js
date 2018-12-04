import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

const mapDispatchToProps = dispatch => {
  return {

  };
};

const mapStateToProps = state => {
  return {  };
};

class ConnectedLogin extends Component{
  constructor(){
    super();
    this.state={};
  }

  logIn(){

  }

  render(){

    return(
      <div id='user-login-box'>
        <p>Already have an account?</p>
        <Modal id='login-modal' centered={true} size={'tiny'} trigger={<Button id='signup-login-button'>Login</Button>}>
          <Modal.Content image>
            <Modal.Description>
              <Header>Enter Credentials</Header>
              <Form className="login-signup-form">
                <Form.Input onChange={ this.handleChange } id="email" placeholder='Email' width={16} ></Form.Input>
                <Form.Input onChange={ this.handleChange } id="password" type='password' placeholder='Password' width={16}></Form.Input>
                <Form.Field control={ Button } onClick={ this.logIn.bind(this) } id='signup-login-button' size='small' >Login</Form.Field>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);

export default Login;
