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
      <>
        <Grid.Row columns={ 2 } centered id='home-row-three'>
          <Grid.Column className='home-row-three-col one'>
            <Image onClick={ this.handleLogoClick.bind(this) } id='t-three-logo' src='https://s3-us-west-1.amazonaws.com/t3equity/Screen+Shot+2019-01-25+at+11.27.24+PM.png'/>
          </Grid.Column>
          <Grid.Column verticalAlign={'middle'} className='home-row-three-col two'>
            <strong>
            T3 Equity Labs llc
            <br/>
            <a class="phone-white" href="tel:+303641-3127">(303) 641-3127</a>
            <br/>
            5 Columbine Ln
            Littleton, Colorado
            80123
            </strong>
          </Grid.Column>
        </Grid.Row>
        </>
    )
  }
}

const HomeRowThree = connect()(ConnectedHomeRowThree);

export default HomeRowThree;
