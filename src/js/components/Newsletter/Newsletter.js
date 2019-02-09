import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';
import HomeRowThree from "../Home/HomeRowThree"
import { AxiosRequest } from '../helpers/axios';
import { RequestError } from '../helpers/errorHandling';
import { addNewsletters } from '../../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    addNewsletters: newsletters => dispatch(addNewsletters(newsletters)),
  };
};

const mapStateToProps = state => {
  return {
          newsletters: state.newsletters
         };
};

class ConnectedNewsletter extends Component{
  constructor(){
    super();
    this.state={

    };
  }

  componentDidMount(){
    if(this.props.newsletters.length === 0){
      this.getNewsletters(this);
    }
  }

  getNewsletters(page){
    const requestParams = {
      method:  'get',
      url:     `http://localhost:3001/api/v1/newsletters/`,
      headers: null,
      data:    null
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const newsletters = response.data
        let newNewsletter
        newsletters.forEach((newsletter)=>{
          newNewsletter = [[newsletter.id, newsletter.name, newsletter.location]]
          page.props.addNewsletters(newNewsletter)
        })
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    let newsletters = this.props.newsletters
    let newsletterList

    if(newsletters.length >=1){
      newsletterList = newsletters.map((newsletter, index) => (
        <Grid.Column key={index} className='newsletter-col'>
          <a href={ newsletter[0][2] } key={index} className='newsletter-name'>{ newsletter[0][1] }</a>
        </Grid.Column>
      ))
    }
    return(
      <>
        <Grid.Row columns={1} only='computer tablet'centered>
          <Grid.Column className='news-title-column'>
            <span className='news-page-title'>t<sup style={{color:'red'}}>3</sup> Newsletters</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4} className='newsletter-row' only='computer'>
          {newsletterList}
        </Grid.Row>
        <Grid.Row columns={3} className='newsletter-row' only='tablet'>
          {newsletterList}
        </Grid.Row>
        <Grid.Row columns={1} className='newsletter-row mob' only='mobile'>
          {newsletterList}
        </Grid.Row>
        <HomeRowThree/>
      </>
    )
  }
}

const Newsletter = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewsletter);

export default Newsletter;
