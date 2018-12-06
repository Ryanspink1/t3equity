import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import ContactsHeader from './ContactsHeader';
import ContactsBody from './ContactsBody';
import { addFriendsAndRequests } from '../../../actions/index';
import { AxiosRequest } from "../../../helpers/axios";
import { RequestError } from "../../../helpers/error-handling";

const mapDispatchToProps = dispatch => {
  return {
    addFriendsAndRequests: friendsAndRequests => dispatch( addFriendsAndRequests(friendsAndRequests) ),
  };
};

const mapStateToProps = state => {
  return{
    friendNavHeaderStatus: state.friendNavHeaderStatus,
    email:                 state.userData.email,
    id:                    state.userData.id,
    jwt:                   state.userData.jwt,
  };
};

class ConnectedContactsFriendNavigator extends Component {
  constructor(){
    super();
    this.state={};
  }

  componentDidMount(){
    this.getContacts()
  }

  getContacts(){
    const requestParams = {
      method:  'get',
      url:     'http://localhost:3001/api/v1/friendships',
      headers: {'Authorization' :'Bearer ' + this.props.jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        this.props.addFriendsAndRequests(response.data);
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    return(
      <div id='contacts-navigator'>
        <ContactsHeader/>
        <ContactsBody/>
      </div>
    )
  }
}

const ContactsFriendNavigator = connect(mapStateToProps, mapDispatchToProps)(ConnectedContactsFriendNavigator)

export default ContactsFriendNavigator
