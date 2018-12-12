import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';

const mapStateToProps = state => {
  return {  };
}
class ConnectedNavbar extends Component{
  constructor(){
    super();
    this.state={};
  }

  render(){
    return(
      <Grid.Row id='nav'>
        <Grid.Column width={16}>

          <div >
            hello
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const Navbar = connect()(ConnectedNavbar);

export default Navbar;
