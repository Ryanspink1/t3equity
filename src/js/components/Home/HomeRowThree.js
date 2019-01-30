import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image, Card, Icon} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';


const mapStateToProps = state => {
  return {  };
}
class ConnectedHomeRowThree extends Component{
  constructor(){
    super();
    this.state={
    };
  }

  handleLogoClick(){

  }

  render(){
    return(
        <Grid.Row columns={ 1 } centered id='home-row-three'>
          <Grid.Column verticalAlign={'middle'} className='home-row-three-col two'>
            <strong>
            t<sup style={{ color: 'red' }}>3</sup> equity labs llc
            <br/>
            <a class="phone-white" href="tel:+3034788630">(303) 478-8630</a>
            <br/>
            5 Columbine Ln
            Littleton, Colorado
            80123
            </strong>
          </Grid.Column>
        </Grid.Row>
    )
  }
}

const HomeRowThree = connect()(ConnectedHomeRowThree);

export default HomeRowThree;
