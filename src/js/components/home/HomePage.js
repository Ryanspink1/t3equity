import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { Grid } from 'semantic-ui-react';
import FriendNavigator from './friend-navigator/FriendNavigator';

const mapStateToProps = state => {
  return {  };
}

class ConnectedHomePage extends Component{
  constructor(){
    super();
    this.state={};
  }

  componentDidMount(){
    document.body.id = 'app-body';
  }

  render(){
    return(
      <Grid id='home-grid'>
        <Navbar/>
        <Grid.Row id='home-row'>
          <Grid.Column width={ 2 }>
          </Grid.Column>
          <FriendNavigator/>
        </Grid.Row>
      </Grid>
    )
  }
}

const HomePage = connect(mapStateToProps)(ConnectedHomePage);

export default HomePage;
