import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, List} from 'semantic-ui-react';
import  ContactFriendListItem from './ContactFriendListItem';
import  ContactRequestListItem from './ContactRequestListItem';
import  ContactFriendFinder from './ContactFriendFinder';

const mapStateToProps = state => {
  return{
    friendOrRequest: state.friendOrRequest,
    friends: state.friendsAndRequests.friends,
    requests: state.friendsAndRequests.requests,
  };
}

class ConnectedContactsBody extends Component {
  constructor(){
    super();
    this.state={};
  }


  render(){
    const data = (this.props.friendOrRequest === 'friends')
      ? this.props.friends
      : this.props.requests

    const friendList = data.map(contact =>
      (this.props.friendOrRequest === 'friends')
        ? <ContactFriendListItem contact={ contact } />
        : <ContactRequestListItem contact={ contact } />
      )

    return(
        <List id='contacts-friend-list'>
          <ContactFriendFinder/>
          { friendList}
        </List>
    )
  }
}

const ContactsBody = connect(mapStateToProps)(ConnectedContactsBody)

export default ContactsBody
