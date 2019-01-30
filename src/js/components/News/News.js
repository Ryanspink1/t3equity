import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Card} from "semantic-ui-react";
import { Redirect, Link, withRouter} from 'react-router-dom';
import Axios from 'axios'
import HomeRowThree from "../Home/HomeRowThree"
let XMLParser = require('react-xml-parser');


const mapStateToProps = state => {
  return {  };
}

class ConnectedNews extends Component{
  constructor(){
    super();
    this.state={
      stories:[]
    };
  }


  componentWillMount(){
    let companies = ['aapl','alk','ame','avy','blk','cme','cop','de','ecl','ice','jpm','key','nue','pxd','rsg','shw','tel','wfc','wrk','xom']
    let news = []
    companies.forEach((company)=>{Axios.get(`https://peaceful-beach-96299.herokuapp.com/https://feeds.finance.yahoo.com/rss/2.0/headline?s=${company}`)
      .then(response => {
        let self = this;
        let xml = new XMLParser().parseFromString(response.data);
        let stories = xml.children[0].children.slice(3,10)
        if(stories.length >=1){
          news = news.concat(stories)
          this.setState({stories:news})
        }
      })
    })
  }


  render(){
    let stories = this.state
    let storyList
    if(stories.stories.length >=1){
    storyList = stories.stories.map((story, index) => (

      <Grid.Column key={index} className='news-card-col'>
        <Card href={ story.children[2].value } className='home-row-two-card news'>
          <Card.Content>
            <Card.Header className='home-row-two-card-header news' textAlign={'center'}>
              { story.children[4].value }
            </Card.Header>
            <Card.Meta>
            { story.children[3].value }
            </Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
    ))
    }
    return(
      <>
        <Grid.Row columns={4} only='computer' className='news-rows'>
          { storyList }
        </Grid.Row>
        <Grid.Row columns={3} only='tablet' className='news-rows'>
          { storyList }
        </Grid.Row>
        <Grid.Row columns={2} only='mobile' className='news-rows'>
          { storyList }
        </Grid.Row>
        <HomeRowThree/>
      </>
    )
  }
}

const News = connect()(ConnectedNews);

export default News;
