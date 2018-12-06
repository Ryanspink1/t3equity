import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

const mapStateToProps = state => {
  return{ friendNavHeaderStatus: state.friendNavHeaderStatus };
}

class ConnectedMessagesFriendNavigator extends Component {
  constructor(){
    super();
    this.state={};
  }


  render(){
    return(
      <div>
        Messages
      </div>

    )
  }
}

const MessagesFriendNavigator = connect(mapStateToProps)(ConnectedMessagesFriendNavigator)

export default MessagesFriendNavigator
