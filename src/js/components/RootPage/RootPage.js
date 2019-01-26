import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button} from "semantic-ui-react";
import Navbar from "../Navbar/Navbar.js";
import FullScreenMenu from "../Navbar/FullScreenMenu.js";
import { FullNav } from "../Navbar/FullNav.js";
import { Route , Switch} from "react-router-dom";
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import News from '../News/News';



const mapStateToProps = state => {
  return { activeItem: state.activeItem };
}
class ConnectedRootPage extends Component{
  constructor(){
    super();
    this.state={};
  }

  render(){
    let componentChoice= [['Home', <Home/>],['Contact', <Contact/>],['News', <News/>]]
    let componentRender
    componentChoice.forEach((component)=>(
      (component[0] === this.props.activeItem)
      ? componentRender = component[1]
      : <></>
    ))
    return(
      <Grid id='grid'>
        <Grid.Row>
          <div id='header-image'>
          </div>
          <div id='header-image-two'>
          </div>
        </Grid.Row>
        <FullNav/>
        {componentRender}
      </Grid>
    )
  }
}

const RootPage = connect(mapStateToProps)(ConnectedRootPage);

export default RootPage;
