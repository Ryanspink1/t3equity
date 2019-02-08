import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';
import NewsletterConsole from './NewsletterConsole'


const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class ConnectedPrivate extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    let routeDirection = (this.props.loggedIn === false)
      ? <Redirect to='/Login'/>
      : <NewsletterConsole/>
    return(
      <>
        { routeDirection }
      </>
    )
  }
}

const Private = connect(mapStateToProps)(ConnectedPrivate)
export default Private
