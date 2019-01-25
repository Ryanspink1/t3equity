import React from 'react';
import { connect } from "react-redux";
import { Route , Switch} from "react-router-dom";
import RootPage from './RootPage/RootPage';
import Contact from './Contact/Contact';

const App = (props) => (
    <Switch>
      <Route path="/" component={ RootPage } />
    </Switch>
);

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(App);
