import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';
import HomeRowTwo from './HomeRowTwo';
import HomeRowThree from './HomeRowThree'


const mapStateToProps = state => {
  return {  };
}
class ConnectedHome extends Component{
  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
      <>
        <Grid.Row centered id='home-row'>
          <Grid.Column width={16} id='home-pic-column' >
            <div id='home-pic-column-container'>
              <Image id='home-pic-column-pic' src='https://s3-us-west-1.amazonaws.com/t3equity/T3HomeRow1.png'  />
            </div>
          </Grid.Column>
        </Grid.Row>
        <HomeRowTwo/>
        <HomeRowThree/>
      </>
    )
  }
}

const Home = connect()(ConnectedHome);

export default Home;
