import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image, Responsive} from "semantic-ui-react";
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
      <>
        <Grid.Row centered minWidth={1297} id='nav'>
          <Grid.Column width={16} id='nav-column' verticalAlign={'middle'}>
            <Responsive maxWidth={400}>
              <div className='logo mob'>
                <span className='logo-text'>t</span><sup style={{ color: 'red' }}>3</sup> <span className='logo-text'>equity labs llc</span>
              </div>
            </Responsive>
            <Responsive minWidth={401}>
              <div className='logo'>
                <span className='logo-text'>t</span><sup style={{ color: 'red' }}>3</sup> <span className='logo-text'>equity labs llc</span>
              </div>
            </Responsive>
          </Grid.Column>
        </Grid.Row>
      </>
    )
  }
}

const Navbar = connect()(ConnectedNavbar);

export default Navbar;
