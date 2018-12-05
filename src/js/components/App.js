import React from 'react';
import { connect } from "react-redux";
import { Route , Switch} from "react-router-dom";
import LoginPage from './Root/LoginPage';
import PrivateRoute from '../helpers/privateRoute';
import HomePage from './home/HomePage'


const App = (props) => (
    <Switch>
      <Route exact path="/u_message_fe/" component={ LoginPage } />
      <PrivateRoute path="/u_message_fe/home" component={ HomePage } loggedIn={ props.loggedIn }/>
    </Switch>
);

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(App);
