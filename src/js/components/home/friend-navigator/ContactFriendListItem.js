import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import { AxiosRequest } from "../../../helpers/axios";
import { RequestError } from "../../../helpers/error-handling";
import { openConversation } from '../../../actions/index';
import { removeFriend } from '../../../actions/index';
import { addNewFriendToStore } from '../../../actions/index';


const mapDispatchToProps = dispatch => {
  return {
    openConversation: conversationParams => dispatch( openConversation(conversationParams) ),
    removeFriend: friend => dispatch( removeFriend(friend) ),
  };
};

const mapStateToProps = state => {
  return{
    jwt: state.userData.jwt,
    activeConversation: state.conversation.recipient_id
  };
};

class ConnectedContactFriendListItem extends Component {
  constructor(){
    super();
    this.state={};
  }

  handleClick(method){
    this.deleteFriend(method);
  }

  deleteFriend(method){
    const requestParams = {
      method:  method,
      url:     `http://localhost:3001/api/v1/friendships/${this.props.contact.id}`,
      headers: {'Authorization' :'Bearer ' + this.props.jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        this.props.removeFriend(this.props.contact);
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  openConversation(event, recipient_id){
    event.preventDefault();
    this.findOrCreateConversation(recipient_id)
  }

  findOrCreateConversation(recipient_id){
    const requestParams = {
      method:  'post',
      url:     `http://localhost:3001/api/v1/conversations/`,
      headers: { 'Authorization' :'Bearer ' + this.props.jwt },
      data:    { recipient_id: recipient_id }
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        this.props.openConversation( response.data )
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    let activeButton = this.props.activeConversation

    return(
      <List.Item key={ this.props.contact.id } active={ activeButton === this.props.contact.id } onClick={(e)=>this.openConversation(e, this.props.contact.id)} className='contacts-list-item' >
        <Icon name='user circle outline' className='' size={ 'large' }/>
        <List.Content verticalAlign='middle' >
          <strong>{ this.props.contact.email }</strong>
        </List.Content>
        <Icon name='minus' title='Delete Friend' className='delete-friend-icon' onClick={ ()=>this.handleClick('delete') }/>
      </List.Item>
    )
  }
}

const ContactFriendListItem = connect(mapStateToProps, mapDispatchToProps)(ConnectedContactFriendListItem);

export default ContactFriendListItem;
