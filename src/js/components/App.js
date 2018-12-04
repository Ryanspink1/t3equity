import React from 'react';
import { connect } from "react-redux";
import { Route , Switch} from "react-router-dom";
import LoginPage from './Root/LoginPage';

const App = (props) => (
    <Switch>
      <Route exact path="/u_message_fe/" component={ LoginPage } />
    </Switch>
);

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(App);
