import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import { AxiosRequest } from "../../../helpers/axios";
import { RequestError } from "../../../helpers/error-handling";
import { removeFriendRequest } from '../../../actions/index';
import { addFriend } from '../../../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    removeFriendRequest: friendRequest => dispatch( removeFriendRequest(friendRequest) ),
    addFriend: friendRequest => dispatch( addFriend(friendRequest) ),
  };
};

const mapStateToProps = state => {
  return{
    jwt: state.userData.jwt,
  };
};

class ConnectedContactRequestListItem extends Component {
  constructor(){
    super();
    this.state={};
  }

  handleClick(method){
    this.addOrRemoveFriend(method);
  }

  addOrRemoveFriend(method){
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
        this.props.removeFriendRequest(this.props.contact);
        this.addNewFriendToStore(method);
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  addNewFriendToStore(method){
    if (method === 'put'){
      this.props.addFriend(this.props.contact)
    }
  }

  render(){
    return(
      <List.Item key={ this.props.contact.id } className='contacts-list-item'>
        <Icon name='plus' title='Add Friend' className='add-friend-icon' onClick={ ()=>this.handleClick('put') } />
        <List.Content verticalAlign='middle'>
          <strong>{ this.props.contact.email }</strong>
        </List.Content>
        <Icon name='minus' title='Delete Request' className='delete-friend-icon' onClick={ ()=>this.handleClick('delete') }/>
      </List.Item>
    )
  }
}

const ContactRequestListItem = connect(mapStateToProps, mapDispatchToProps)(ConnectedContactRequestListItem);

export default ContactRequestListItem;
