import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { changeFriendNavHeader } from '../../../actions/index'

const mapDispatchToProps = dispatch => {
  return {
    changeFriendNavHeader: friendNavHeaderStatus => dispatch( changeFriendNavHeader(friendNavHeaderStatus) ),
  };
};

const mapStateToProps = state => {
  return{ friendNavHeaderStatus: state.friendNavHeaderStatus };
}


class ConnectedFriendNavigatorHeader extends Component {
  constructor(){
    super();
    this.state={};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(headerState){
    this.props.changeFriendNavHeader(headerState)
  }


  render(){
    const itemParams = ['messages', 'contacts']
    const activeButton = this.props.friendNavHeaderStatus

    return(
        <Menu widths={ 2 } id='friend-navigator-header'>
          { itemParams.map((p, index) =>(
            <Menu.Item className='friend-navigator-header-button' name={ p } key={ index } active={ activeButton === p } onClick={ ()=>this.handleClick(p) }/>
          ))}
        </Menu>
    )
  }
}

const FriendNavigatorHeader = connect(mapStateToProps, mapDispatchToProps)(ConnectedFriendNavigatorHeader)

export default FriendNavigatorHeader
