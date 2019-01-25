import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';


const mapStateToProps = state => {
  return {  };
}
class ConnectedNavbar extends Component{
  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
        <Grid.Row centered id='nav'>
          <Grid.Column width={16} id='nav-column' verticalAlign={'middle'}>
            <div id='logo'>
              T<sup style={{ color: 'red' }}>3</sup> Equity Labs
            </div>
          </Grid.Column>
        </Grid.Row>
    )
  }
}

const Navbar = connect()(ConnectedNavbar);

export default Navbar;
