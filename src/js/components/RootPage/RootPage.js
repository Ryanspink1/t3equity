import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Responsive} from "semantic-ui-react";
import Navbar from "../Navbar/Navbar.js";
import FullScreenMenu from "../Navbar/FullScreenMenu.js";
import { FullNav } from "../Navbar/FullNav.js";
import { Route , Switch} from "react-router-dom";
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import News from '../News/News';
import About from '../About/About';



const mapStateToProps = state => {
  return { activeItem: state.activeItem };
}
class ConnectedRootPage extends Component{
  constructor(){
    super();
    this.state={};
  }

  render(){
    let componentChoice= [['Home', <Home/>],['Contact', <Contact/>],['News', <News/>],['About', <About/>]]
    let componentRender
    componentChoice.forEach((component)=>(
      (component[0] === this.props.activeItem)
      ? componentRender = component[1]
      : <></>
    ))
    return(
      <Grid id='grid'>
        <Grid.Row>
          <Responsive minWidth={1297}>
            <div className='header-image'>
            </div>
          </Responsive>
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
