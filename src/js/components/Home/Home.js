import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';


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
        <Grid.Row centered id='nav'>
          <Grid.Column width={16} id='nav-column' verticalAlign={'middle'}>
            Whatchu
          </Grid.Column>
        </Grid.Row>
    )
  }
}

const Home = connect()(ConnectedHome);

export default Home;
