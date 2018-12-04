import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import { addUserData } from '../../actions/index'
import { login } from '../../actions/index'
import Signup from './Signup';
import Login from './Login';

const mapDispatchToProps = dispatch => {
  return {
    addUserData: userData => dispatch( addUserData(userData) ),
    login: loggedIn => dispatch( login(loggedIn) )
  };
};

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class ConnectedLoginPage extends Component{
  constructor(){
    super();
    this.state={};
  }

  componentDidMount(){
    this.checkLogin();
  }

  checkLogin(){
    if( sessionStorage.getItem("uMessageLoginTime") ){
      let d = Date.now() - sessionStorage.getItem("uMessageloginTime");
      (d >= 1200000)
        ? sessionStorage.clear()
        : this.autoLogin()
    }
  }

  autoLogin(){
    this.props.login()
    this.props.addUserData({
                             email: sessionStorage.getItem("email"),
                             jwt:   sessionStorage.getItem("jwt"),
                             id:    sessionStorage.getItem("id")
                           })
  }

  render() {
    if(this.props.loggedIn === false){
      return(
        <Grid>
          <Grid.Row centered id='signup-box-row'>
            <Grid.Column width={4}>
              <Image src='https://s3-us-west-1.amazonaws.com/umessage/signupPic.png' size='large' />
            </Grid.Column>
            <Grid.Column width={4}>
              <Signup/>
              <Login/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }else{
      return(
        <Redirect to='/u_message_fe/home'/>
     )
    }
  }
}

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginPage);

export default LoginPage;
