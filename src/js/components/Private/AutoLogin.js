import React, { Component } from "react";
import { connect } from "react-redux";
import Private from './Private';
import { addUserData } from '../../actions/index';
import { login } from '../../actions/index';
import Login from './Login';
import { Redirect, history} from 'react-router-dom';


const mapDispatchToProps = dispatch => {
  return {
    addUserData: userData => dispatch(addUserData(userData)),
    login: loggedIn => dispatch(login(loggedIn)),
  };
};

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class ConnectedAutoLogin extends Component{
  constructor(){
    super();
    this.state={

    };
  }

  componentDidMount(){
    if(this.props.loggedIn === false){
      this.checkLoginStatus()
    }else{

    }
  }

  checkLoginStatus(){
    if( sessionStorage.getItem("t3EquityLoginTime") ){
      let d = Date.now() - sessionStorage.getItem("t3EquityLoginTime");
      (d >= 2000000)
        ? sessionStorage.clear()
        : this.autoLogin()
    }
  }

  autoLogin(){
    this.props.login()
    this.props.addUserData({
                             email: sessionStorage.getItem("t3_email"),
                             jwt:   sessionStorage.getItem("t3_jwt"),
                             id:    sessionStorage.getItem("t3_id")
                           })
  }

  render(){
    const loginDirector = (this.props.loggedIn === false)
      ? <Login/>
      : <Private/>
    return(
      <>
        { loginDirector }
      </>
    )
  }
}

const AutoLogin = connect(mapStateToProps, mapDispatchToProps)(ConnectedAutoLogin);

export default AutoLogin;
