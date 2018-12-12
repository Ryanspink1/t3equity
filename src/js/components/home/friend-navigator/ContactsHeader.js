import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { changeFriendOrRequest } from '../../../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    changeFriendOrRequest: friendOrRequest => dispatch( changeFriendOrRequest(friendOrRequest) ),
  };
};

  const mapStateToProps = state => {
    return{ friendOrRequest: state.friendOrRequest };
  }

class ConnectedContactsHeader extends Component {
  constructor(){
    super();
    this.state={};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(friendOrRequest){
    this.props.changeFriendOrRequest(friendOrRequest)
  }

  render(){
    const itemParams = ['friends', 'requests']
    let activeButton = this.props.friendOrRequest

    return(
      <Menu widths={ 2 } id='contacts-header'>
        { itemParams.map((p, index) =>(
          <Menu.Item className='contacts-header-button' name={ p } key={ index } active={ activeButton === p } onClick={ ()=>this.handleClick(p) }/>
        ))}
      </Menu>
    )
  }
}

const ContactsHeader = connect(mapStateToProps, mapDispatchToProps)(ConnectedContactsHeader)

export default ContactsHeader
