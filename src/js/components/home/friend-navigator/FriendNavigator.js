import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import FriendNavigatorHeader from './FriendNavigatorHeader';
import ContactsFriendNavigator from './ContactsFriendNavigator';
import MessagesFriendNavigator from './MessagesFriendNavigator';

const mapStateToProps = state => {
  return { friendNavHeaderStatus: state.friendNavHeaderStatus };
}

class ConnectedFriendNavigator extends Component {
  constructor(){
    super();
    this.state={};
  }
  render(){
    const messageOrContact = (this.props.friendNavHeaderStatus === 'contacts')
      ? <ContactsFriendNavigator/>
      : <MessagesFriendNavigator/>

    return(
      <Grid.Column width={4}>
        <div id='friend-navigator'>
          <FriendNavigatorHeader/>
          { messageOrContact }
        </div>
      </Grid.Column>
    )
  }
}

const FriendNavigator = connect(mapStateToProps)(ConnectedFriendNavigator)

export default FriendNavigator
