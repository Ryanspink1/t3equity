import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, List, Form, Button } from 'semantic-ui-react';
import { AxiosRequest } from "../../../helpers/axios";
import { RequestError } from "../../../helpers/error-handling";
import FormError from '../../helpers/FormError';
import { addFormError } from '../../../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addFormError: formError => dispatch(addFormError(formError)),
  };
};

const mapStateToProps = state => {
  return{
    friendNavHeaderStatus: state.friendNavHeaderStatus,
    jwt: state.userData.jwt
  };
}

class ConnectedContactFriendFinder extends Component {
  constructor(){
    super();
    this.state={
      friendEmailInput: ""
    };
  }

  handleChange(event){
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value});
  }

  sendFriendRequest(event){
    event.preventDefault();
    (this.state.friendEmailInput === "")
      ? this.props.addFormError('blank')
      : this.postFriendRequest()
  }

  resetState = () => {
    document.getElementById("friendEmailInput").value = ""
  }

  postFriendRequest(){
    const requestParams = {
      method:  'post',
      url:     `http://localhost:3001/api/v1/friendships/`,
      headers: { 'Authorization' :'Bearer ' + this.props.jwt },
      data:    { friend_email: this.state.friendEmailInput }
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        this.props.addFormError('friendRequestSuccess')
        this.resetState();
      }
    ).catch((error) => {
      this.props.addFormError('friendRequestFailure')
      RequestError(error)
    });
  }

  render(){
    return(
      <List.Item className='friend-request-form-item' >
        <List.Content verticalAlign='middle'>
          <Form className="find-friend-form">
            <FormError/>
            <Form.Group inline id='find-friend-fields'>
              <Form.Input onChange={ this.handleChange.bind(this) } label='Send Friend Request' id="friendEmailInput" placeholder='Friend Email'></Form.Input>
              <Form.Field control={ Button } label='' onClick={ this.sendFriendRequest.bind(this) } id='signup-login-button' size='small' >Submit</Form.Field>
            </Form.Group>
          </Form>
        </List.Content>
      </List.Item>
    )
  }
}

const ContactFriendFinder = connect(mapStateToProps, mapDispatchToProps)(ConnectedContactFriendFinder)

export default ContactFriendFinder
