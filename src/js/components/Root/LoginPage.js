import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import { Grid, Image, Responsive } from 'semantic-ui-react';
import { addUserData } from '../../actions/index'
import { login } from '../../actions/index'
import LoginSignup from './LoginSignup';
import LoginSignupSwitch from './LoginSignupSwitch';

const mapDispatchToProps = dispatch => {
  return {
    addUserData: userData => dispatch(addUserData(userData)),
    login: loggedIn => dispatch(login(loggedIn)),
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
    this.checkLoginStatus()
  }

  checkLoginStatus(){
    if( sessionStorage.getItem("uMessageloginTime") ){
      let d = Date.now() - sessionStorage.getItem("uMessageloginTime");
      (d >= 2000000)
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
        <div>
        <Responsive minWidth={ 928 }>
          <Grid>
            <Grid.Row centered id='signup-box-row'>
              <Grid.Column width={4}>
                <div className='root-image'>
                  <Image src='https://s3-us-west-1.amazonaws.com/umessage/signupPicEdited.png' size='large' />
                </div>
              </Grid.Column>
              <Grid.Column width={4}>
                <LoginSignup/>
                <LoginSignupSwitch/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive maxWidth= { 929 }>
          <Grid>
            <Grid.Row centered id='signup-box-row'>
              <Grid.Column width={10}>
                <LoginSignup/>
                <LoginSignupSwitch/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        </div>
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
