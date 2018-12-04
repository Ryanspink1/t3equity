import React from 'react';
import { connect } from "react-redux";
import { Route , Switch} from "react-router-dom";
import PrivateRoute from '../helpers/privateRoute';

const App = (props) => (
    <Switch>

    </Switch>
);

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(App);
