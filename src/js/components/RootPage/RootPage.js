import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button} from "semantic-ui-react";
import Navbar from "../Navbar/Navbar.js"
import FullScreenMenu from "../Navbar/FullScreenMenu.js"
import { FullNav } from "../Navbar/FullNav.js"

const mapStateToProps = state => {
  return {  };
}
class ConnectedRootPage extends Component{
  constructor(){
    super();
    this.state={};
  }

  render(){
    return(
      <Grid id='grid'>
        <Grid.Row>
          <div id='header-image'>
          </div>
        </Grid.Row>
        <FullNav/>
      </Grid>
    )
  }
}

const RootPage = connect()(ConnectedRootPage);

export default RootPage;
