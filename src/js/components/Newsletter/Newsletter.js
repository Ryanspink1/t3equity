import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';
import HomeRowThree from "../Home/HomeRowThree"

const mapStateToProps = state => {
  return {  };
}
class ConnectedNewsletter extends Component{
  constructor(){
    super();
    this.state={

    };
  }

  render(){


    return(
      <>
        <Grid.Row columns={5} only='computer' centered className='newsletter-row'>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>February 2019</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  January 2019</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  December 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  November 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  October 2018</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={5} only='computer' centered className='newsletter-row'>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  September 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  August 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  July 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  June 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  May 2018</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={5} only='computer' centered className='newsletter-row'>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  April 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  March 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  February 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  January 2018</span>
          </Grid.Column>
          <Grid.Column className='newsletter-col'>
            <span className='newsletter-name'>  December 2017</span>
          </Grid.Column>
        </Grid.Row>
        <HomeRowThree/>
      </>
    )
  }
}

const Newsletter = connect()(ConnectedNewsletter);

export default Newsletter;
