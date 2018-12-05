import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom'

class ConnectedNavbar extends Component{
  constructor(){
    super();
    this.state={};
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

const Navbar = connect()(ConnectedNavbar);

export default Navbar;
