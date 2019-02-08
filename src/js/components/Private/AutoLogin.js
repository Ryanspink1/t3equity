import React, { Component } from "react";
import { connect } from "react-redux";
import Private from './Private'

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

    }
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  checkLoginStatus(){
    if( sessionStorage.getItem("t3EquityloginTime") ){
      let d = Date.now() - sessionStorage.getItem("t3EquityloginTime");
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
    let loginDirector = (this.props.loggedIn == false)
      ? <Login/>
      : <Private/>
    return(
      { loginDirector }
    )
  }
}

const AutoLogin = connect(mapStateToProps, MapDispatchToProps)(ConnectedAutoLogin);

export default AutoLogin;
